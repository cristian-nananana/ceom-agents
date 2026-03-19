import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  CheckCircle,
  Circle,
  Package,
  Search,
  ThumbsUp,
  Settings,
  Truck,
  Home,
} from "lucide-react";
import { createServiceClient } from "@/lib/supabase-server";
import type { OrderStatus } from "@/types/register";

export const metadata: Metadata = {
  title: "Estado de tu pedido | SekreBot",
  description: "Sigue el estado de tu pedido SekreBot en tiempo real.",
  robots: { index: false, follow: false },
};

// Revalidar cada 60 segundos para mostrar cambios de estado
export const revalidate = 60;

const STATUS_STEPS: {
  key: OrderStatus;
  label: string;
  description: string;
  icon: React.ReactNode;
}[] = [
  {
    key: "nuevo",
    label: "Solicitud recibida",
    description: "Hemos recibido tu solicitud correctamente.",
    icon: <CheckCircle className="w-5 h-5" />,
  },
  {
    key: "revisando",
    label: "En revisión",
    description: "Estamos revisando tu pedido y verificando disponibilidad.",
    icon: <Search className="w-5 h-5" />,
  },
  {
    key: "confirmado",
    label: "Pedido confirmado",
    description: "Tu pedido fue confirmado. Coordinaremos el pago contigo.",
    icon: <ThumbsUp className="w-5 h-5" />,
  },
  {
    key: "configurando",
    label: "Configurando tu equipo",
    description:
      "Estamos instalando y configurando OpenClaw en tu Mac Mini.",
    icon: <Settings className="w-5 h-5" />,
  },
  {
    key: "enviado",
    label: "En camino",
    description: "Tu equipo está en camino. Pronto llegará a tu puerta.",
    icon: <Truck className="w-5 h-5" />,
  },
  {
    key: "entregado",
    label: "Entregado 🎉",
    description: "¡Tu SekreBot llegó! Disfruta tu asistente de IA personal.",
    icon: <Home className="w-5 h-5" />,
  },
];

const STATUS_ORDER: OrderStatus[] = [
  "nuevo",
  "revisando",
  "confirmado",
  "configurando",
  "enviado",
  "entregado",
];

function formatDate(iso: string): string {
  return new Intl.DateTimeFormat("es-CL", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "America/Santiago",
  }).format(new Date(iso));
}

interface PageProps {
  params: Promise<{ token: string }>;
}

export default async function PedidoPage({ params }: PageProps) {
  const { token } = await params;

  // Validar formato UUID
  const UUID_REGEX =
    /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
  if (!UUID_REGEX.test(token)) {
    notFound();
  }

  let supabase;
  try {
    supabase = createServiceClient();
  } catch {
    return (
      <ErrorPage message="Error de configuración del servidor. Intenta más tarde." />
    );
  }

  // Buscar cliente por token — NO exponer email/phone al cliente
  const { data: customer, error } = await supabase
    .from("customers")
    .select("id, full_name, model_interest, region, status, created_at")
    .eq("tracking_token", token)
    .single();

  if (error || !customer) {
    notFound();
  }

  // Historial de estados
  const { data: history } = await supabase
    .from("order_status_history")
    .select("status, notes, created_at")
    .eq("customer_id", customer.id)
    .order("created_at", { ascending: true });

  const currentStatusIndex = STATUS_ORDER.indexOf(
    customer.status as OrderStatus
  );

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/"
            className="text-[#00D4C8] text-sm hover:text-[#00b8ad] transition-colors mb-6 inline-block"
          >
            ← Volver al inicio
          </Link>
          <div className="flex items-start justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-white mb-1">
                Estado de tu pedido
              </h1>
              <p className="text-white/50 text-sm">
                Hola, <span className="text-white">{customer.full_name}</span>
              </p>
            </div>
            <span
              className={`px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide flex-shrink-0 ${
                customer.status === "entregado"
                  ? "bg-green-500/20 text-green-400 border border-green-500/30"
                  : customer.status === "enviado"
                  ? "bg-[#00D4C8]/20 text-[#00D4C8] border border-[#00D4C8]/30"
                  : "bg-white/10 text-white/80 border border-white/20"
              }`}
            >
              {STATUS_STEPS.find((s) => s.key === customer.status)?.label ??
                customer.status}
            </span>
          </div>
        </div>

        {/* Info del pedido */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-5 mb-8">
          <h2 className="text-sm font-semibold text-white/60 uppercase tracking-wide mb-3">
            Detalles del pedido
          </h2>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <p className="text-white/40 text-xs mb-0.5">Modelo</p>
              <p className="text-white font-medium text-sm">
                {customer.model_interest}
              </p>
            </div>
            <div>
              <p className="text-white/40 text-xs mb-0.5">Región de envío</p>
              <p className="text-white font-medium text-sm">
                {customer.region}
              </p>
            </div>
            <div className="col-span-2">
              <p className="text-white/40 text-xs mb-0.5">Fecha de registro</p>
              <p className="text-white font-medium text-sm">
                {formatDate(customer.created_at)}
              </p>
            </div>
          </div>
        </div>

        {/* Timeline de estados */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-5 mb-8">
          <h2 className="text-sm font-semibold text-white/60 uppercase tracking-wide mb-5">
            Progreso del pedido
          </h2>

          <div className="space-y-0">
            {STATUS_STEPS.map((step, index) => {
              const isCompleted = index <= currentStatusIndex;
              const isCurrent = index === currentStatusIndex;
              const histEntry = history?.find((h) => h.status === step.key);

              return (
                <div key={step.key} className="flex gap-4">
                  {/* Indicador */}
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                        isCurrent
                          ? "bg-[#00D4C8] text-black"
                          : isCompleted
                          ? "bg-[#00D4C8]/20 text-[#00D4C8]"
                          : "bg-white/5 text-white/30"
                      }`}
                    >
                      {isCompleted ? (
                        step.icon
                      ) : (
                        <Circle className="w-5 h-5" />
                      )}
                    </div>
                    {index < STATUS_STEPS.length - 1 && (
                      <div
                        className={`w-0.5 flex-1 min-h-[24px] my-1 ${
                          isCompleted && index < currentStatusIndex
                            ? "bg-[#00D4C8]/40"
                            : "bg-white/10"
                        }`}
                      />
                    )}
                  </div>

                  {/* Contenido */}
                  <div className={`pb-5 ${index === STATUS_STEPS.length - 1 ? "pb-0" : ""}`}>
                    <p
                      className={`font-semibold text-sm ${
                        isCurrent
                          ? "text-[#00D4C8]"
                          : isCompleted
                          ? "text-white"
                          : "text-white/40"
                      }`}
                    >
                      {step.label}
                    </p>
                    <p
                      className={`text-xs leading-relaxed mt-0.5 ${
                        isCompleted ? "text-white/60" : "text-white/30"
                      }`}
                    >
                      {step.description}
                    </p>
                    {histEntry && (
                      <p className="text-white/40 text-xs mt-1">
                        {formatDate(histEntry.created_at)}
                        {histEntry.notes ? ` · ${histEntry.notes}` : ""}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Contacto */}
        <div className="bg-[#00D4C8]/5 border border-[#00D4C8]/20 rounded-2xl p-5 text-center">
          <p className="text-white/70 text-sm mb-3">
            ¿Tienes preguntas? Escríbenos directamente.
          </p>
          <a
            href="https://wa.me/56963926061"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#00D4C8] text-black font-semibold px-5 py-2.5 rounded-xl hover:bg-[#00b8ad] transition-colors text-sm"
          >
            <Package className="w-4 h-4" />
            Contactar por WhatsApp
          </a>
        </div>

        {/* Token info */}
        <p className="text-white/20 text-xs text-center mt-6">
          Token de seguimiento:{" "}
          <span className="font-mono">{token}</span>
        </p>
      </div>
    </main>
  );
}

function ErrorPage({ message }: { message: string }) {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <p className="text-white/60 mb-4">{message}</p>
        <Link
          href="/"
          className="text-[#00D4C8] hover:text-[#00b8ad] transition-colors"
        >
          ← Volver al inicio
        </Link>
      </div>
    </main>
  );
}
