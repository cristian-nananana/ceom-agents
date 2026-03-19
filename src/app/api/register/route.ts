import { NextRequest, NextResponse } from "next/server";
import { checkRateLimit } from "@/lib/rate-limit";
import { sanitize } from "@/lib/sanitize";
import { createServiceClient } from "@/lib/supabase-server";
import { POLICY_VERSION, POLICY_HASH } from "@/lib/policy-hash";
import type { RegisterFormData } from "@/types/register";

const VALID_REGIONS = ["RM", "IV", "V", "VI", "VII", "VIII"] as const;
const VALID_MODELS = [
  "Mac Mini M4 Básico",
  "Mac Mini M4 Avanzado",
  "Mac Mini M4 Pro",
] as const;

export async function POST(req: NextRequest) {
  // ── 1. Rate limiting ──────────────────────────────────────────────────────
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    "unknown";

  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { error: "Demasiadas solicitudes. Por favor, intenta nuevamente en 1 hora." },
      { status: 429 }
    );
  }

  // ── 2. CSRF ───────────────────────────────────────────────────────────────
  const csrfHeader = req.headers.get("x-csrf-token");
  const csrfCookie = req.cookies.get("csrf_token")?.value;

  if (!csrfHeader || !csrfCookie || csrfHeader !== csrfCookie) {
    return NextResponse.json(
      { error: "Token de seguridad inválido. Recarga la página e intenta nuevamente." },
      { status: 403 }
    );
  }

  // ── 3. Parse body ─────────────────────────────────────────────────────────
  let body: RegisterFormData;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Solicitud inválida." }, { status: 400 });
  }

  // ── 4. Sanitización ───────────────────────────────────────────────────────
  const fullName = sanitize(body.fullName ?? "", 100);
  const email = sanitize(body.email ?? "", 200);
  const phone = sanitize(body.phone ?? "", 30);
  const region = sanitize(body.region ?? "", 10);
  const modelInterest = sanitize(body.modelInterest ?? "", 100);
  const message = body.message ? sanitize(body.message, 1000) : null;
  const userAgent = req.headers.get("user-agent")?.slice(0, 500) ?? "";

  // ── 5. Validación ─────────────────────────────────────────────────────────
  const errors: string[] = [];

  if (!fullName || fullName.length < 2)
    errors.push("Nombre requerido (mínimo 2 caracteres).");
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    errors.push("Email inválido.");
  if (!phone || !/^\+?[\d\s\-()\\.]{7,20}$/.test(phone))
    errors.push("Teléfono inválido (solo números, espacios y +).");
  if (!VALID_REGIONS.includes(region as (typeof VALID_REGIONS)[number]))
    errors.push("Región inválida.");
  if (!VALID_MODELS.includes(modelInterest as (typeof VALID_MODELS)[number]))
    errors.push("Modelo inválido.");
  if (!body.checkboxTerms)
    errors.push("Debes aceptar los Términos y Condiciones.");
  if (!body.checkboxCommercial)
    errors.push("Debes autorizar el uso de tus datos personales.");

  if (errors.length > 0) {
    return NextResponse.json({ errors }, { status: 422 });
  }

  // ── 6. Guardar en Supabase ────────────────────────────────────────────────
  let supabase;
  try {
    supabase = createServiceClient();
  } catch {
    return NextResponse.json(
      { error: "Error de configuración del servidor." },
      { status: 500 }
    );
  }

  const { data: customer, error: customerError } = await supabase
    .from("customers")
    .insert({
      full_name: fullName,
      email,
      phone,
      region,
      model_interest: modelInterest,
      message,
      status: "nuevo",
    })
    .select("id, tracking_token")
    .single();

  if (customerError || !customer) {
    // Log solo código de error, sin datos sensibles
    console.error("[register] customer insert error code:", customerError?.code);
    return NextResponse.json(
      { error: "Error al procesar tu solicitud. Por favor, intenta nuevamente." },
      { status: 500 }
    );
  }

  // ── 7. Guardar consent_record ─────────────────────────────────────────────
  const { error: consentError } = await supabase
    .from("consent_records")
    .insert({
      customer_id: customer.id,
      ip_address: ip,
      user_agent: userAgent,
      policy_version: POLICY_VERSION,
      policy_hash: POLICY_HASH,
      checkbox_terms: true,
      checkbox_commercial: true,
    });

  if (consentError) {
    console.error("[register] consent insert error code:", consentError?.code);
  }

  // ── 8. Insertar estado inicial en historial ───────────────────────────────
  await supabase.from("order_status_history").insert({
    customer_id: customer.id,
    status: "nuevo",
    notes: "Registro recibido correctamente",
  });

  // ── 9. Email de confirmación ──────────────────────────────────────────────
  const resendKey = process.env.RESEND_API_KEY;
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://sekrebot.cl";
  const trackingUrl = `${siteUrl}/pedido/${customer.tracking_token}`;

  if (resendKey) {
    try {
      const emailRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "SekreBot <noreply@sekrebot.cl>",
          to: [email],
          subject: "Recibimos tu solicitud — SekreBot 🤖",
          html: `
            <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
              <h2 style="color: #1a2744;">¡Gracias, ${fullName}!</h2>
              <p>Recibimos tu solicitud de <strong>${modelInterest}</strong> con envío a la región <strong>${region}</strong>.</p>
              <p>Nuestro equipo revisará tu pedido y te contactará pronto por WhatsApp.</p>
              <p>Puedes seguir el estado de tu pedido en este enlace:</p>
              <p style="margin: 24px 0;">
                <a href="${trackingUrl}" style="background: #e8533a; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold;">
                  Ver estado de mi pedido
                </a>
              </p>
              <p style="color: #888; font-size: 14px;">O copia este enlace: ${trackingUrl}</p>
              <hr style="border: none; border-top: 1px solid #eee; margin: 24px 0;">
              <p style="color: #888; font-size: 12px;">
                SekreBot · hola@sekrebot.cl · +56 9 6392 6061
              </p>
            </div>
          `,
        }),
      });
      if (!emailRes.ok) {
        console.error("[register] Resend API error status:", emailRes.status);
      }
    } catch {
      console.error("[register] Email send failed (non-critical)");
    }
  } else {
    console.log("[register] New registration. tracking_token:", customer.tracking_token);
  }

  return NextResponse.json({
    tracking_token: customer.tracking_token,
    tracking_url: trackingUrl,
  });
}
