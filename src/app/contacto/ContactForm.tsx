"use client";

import { useState, useEffect } from "react";
import { Loader2, CheckCircle, AlertCircle, ExternalLink } from "lucide-react";
import type { Region, ModelInterest, RegisterFormData } from "@/types/register";

const REGIONS: { value: Region; label: string }[] = [
  { value: "RM", label: "Región Metropolitana" },
  { value: "IV", label: "Coquimbo (IV)" },
  { value: "V", label: "Valparaíso (V)" },
  { value: "VI", label: "O'Higgins (VI)" },
  { value: "VII", label: "Maule (VII)" },
  { value: "VIII", label: "Biobío (VIII)" },
];

const MODELS: { value: ModelInterest; label: string; price: string }[] = [
  { value: "Mac Mini M4 Básico", label: "Mac Mini M4 Básico", price: "$839.990" },
  { value: "Mac Mini M4 Avanzado", label: "Mac Mini M4 Avanzado", price: "$1.079.990" },
  { value: "Mac Mini M4 Pro", label: "Mac Mini M4 Pro", price: "$1.679.990" },
];

type FormState = "idle" | "loading" | "success" | "error";

const initialForm: RegisterFormData = {
  fullName: "",
  email: "",
  phone: "",
  region: "RM",
  modelInterest: "Mac Mini M4 Avanzado",
  message: "",
  checkboxTerms: false,
  checkboxCommercial: false,
};

export default function ContactForm() {
  const [form, setForm] = useState<RegisterFormData>(initialForm);
  const [csrfToken, setCsrfToken] = useState<string>("");
  const [state, setState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<string[]>([]);
  const [trackingResult, setTrackingResult] = useState<{
    token: string;
    url: string;
  } | null>(null);

  // Obtener CSRF token al montar
  useEffect(() => {
    fetch("/api/csrf")
      .then((r) => r.json())
      .then((d) => setCsrfToken(d.csrf_token))
      .catch(() => console.error("No se pudo obtener CSRF token"));
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const target = e.target;
    const value =
      target instanceof HTMLInputElement && target.type === "checkbox"
        ? target.checked
        : target.value;
    setForm((prev) => ({ ...prev, [target.name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors([]);
    setState("loading");

    // Validación client-side básica
    const clientErrors: string[] = [];
    if (!form.fullName.trim() || form.fullName.trim().length < 2)
      clientErrors.push("Nombre requerido (mínimo 2 caracteres).");
    if (!form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      clientErrors.push("Email inválido.");
    if (!form.phone || form.phone.trim().length < 7)
      clientErrors.push("Teléfono inválido.");
    if (!form.checkboxTerms)
      clientErrors.push("Debes aceptar los Términos y Condiciones.");
    if (!form.checkboxCommercial)
      clientErrors.push("Debes autorizar el uso de tus datos personales.");

    if (clientErrors.length > 0) {
      setErrors(clientErrors);
      setState("error");
      return;
    }

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-CSRF-Token": csrfToken,
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        if (data.errors) {
          setErrors(data.errors);
        } else {
          setErrors([data.error ?? "Error al enviar el formulario. Intenta nuevamente."]);
        }
        setState("error");
        return;
      }

      setTrackingResult({ token: data.tracking_token, url: data.tracking_url });
      setState("success");
    } catch {
      setErrors(["Error de conexión. Por favor, intenta nuevamente."]);
      setState("error");
    }
  };

  if (state === "success" && trackingResult) {
    return (
      <div className="bg-[#0f1a2e] border border-[#e8533a]/30 rounded-2xl p-8 text-center">
        <CheckCircle className="w-16 h-16 text-[#e8533a] mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-white mb-2">
          ¡Registro recibido!
        </h3>
        <p className="text-white/70 mb-6">
          Revisaremos tu solicitud y te contactaremos pronto por WhatsApp.
        </p>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4 mb-6">
          <p className="text-white/60 text-sm mb-1">Tu número de seguimiento:</p>
          <p className="text-[#e8533a] font-mono text-sm font-bold break-all">
            {trackingResult.token}
          </p>
        </div>
        <a
          href={trackingResult.url}
          className="inline-flex items-center gap-2 bg-[#e8533a] text-white font-semibold px-6 py-3 rounded-xl hover:bg-[#d44428] transition-colors"
        >
          <ExternalLink className="w-4 h-4" />
          Ver estado de mi pedido
        </a>
        <p className="text-white/40 text-xs mt-4">
          También te enviamos un email de confirmación con este enlace.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[#e8533a] transition-colors text-sm";
  const labelClass = "block text-sm font-medium text-white/80 mb-1.5";

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Errores */}
      {state === "error" && errors.length > 0 && (
        <div className="bg-red-900/30 border border-red-500/40 rounded-xl p-4">
          <div className="flex items-start gap-2">
            <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
            <ul className="space-y-1">
              {errors.map((err, i) => (
                <li key={i} className="text-red-300 text-sm">
                  {err}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Nombre */}
      <div>
        <label htmlFor="fullName" className={labelClass}>
          Nombre completo <span className="text-[#e8533a]">*</span>
        </label>
        <input
          id="fullName"
          name="fullName"
          type="text"
          value={form.fullName}
          onChange={handleChange}
          placeholder="Juan Pérez"
          className={inputClass}
          maxLength={100}
          required
          autoComplete="name"
        />
      </div>

      {/* Email + Teléfono */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className={labelClass}>
            Email <span className="text-[#e8533a]">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="juan@email.com"
            className={inputClass}
            maxLength={200}
            required
            autoComplete="email"
          />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            Teléfono / WhatsApp <span className="text-[#e8533a]">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="+56 9 1234 5678"
            className={inputClass}
            maxLength={30}
            required
            autoComplete="tel"
          />
        </div>
      </div>

      {/* Región + Modelo */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="region" className={labelClass}>
            Región <span className="text-[#e8533a]">*</span>
          </label>
          <select
            id="region"
            name="region"
            value={form.region}
            onChange={handleChange}
            className={inputClass}
            required
          >
            {REGIONS.map((r) => (
              <option key={r.value} value={r.value} className="bg-[#0f1a2e]">
                {r.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="modelInterest" className={labelClass}>
            Modelo de interés <span className="text-[#e8533a]">*</span>
          </label>
          <select
            id="modelInterest"
            name="modelInterest"
            value={form.modelInterest}
            onChange={handleChange}
            className={inputClass}
            required
          >
            {MODELS.map((m) => (
              <option key={m.value} value={m.value} className="bg-[#0f1a2e]">
                {m.label} — {m.price}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Mensaje */}
      <div>
        <label htmlFor="message" className={labelClass}>
          Mensaje (opcional)
        </label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="¿Tienes alguna pregunta o necesitas algo específico?"
          className={`${inputClass} resize-none`}
          rows={3}
          maxLength={1000}
        />
      </div>

      {/* Checkboxes legales */}
      <div className="space-y-3 pt-2">
        <label className="flex items-start gap-3 cursor-pointer group">
          <input
            type="checkbox"
            name="checkboxTerms"
            checked={form.checkboxTerms}
            onChange={handleChange}
            className="mt-0.5 w-5 h-5 rounded border-white/30 bg-white/5 text-[#e8533a] flex-shrink-0 cursor-pointer accent-[#e8533a]"
            required
          />
          <span className="text-white/70 text-sm leading-relaxed group-hover:text-white/90 transition-colors">
            He leído y acepto la{" "}
            <a
              href="/privacidad"
              target="_blank"
              className="text-[#e8533a] underline hover:text-[#ff6b4e]"
            >
              Política de Privacidad
            </a>{" "}
            y los{" "}
            <a
              href="/terminos"
              target="_blank"
              className="text-[#e8533a] underline hover:text-[#ff6b4e]"
            >
              Términos y Condiciones
            </a>{" "}
            de SekreBot.{" "}
            <span className="text-[#e8533a]">*</span>
          </span>
        </label>

        <label className="flex items-start gap-3 cursor-pointer group">
          <input
            type="checkbox"
            name="checkboxCommercial"
            checked={form.checkboxCommercial}
            onChange={handleChange}
            className="mt-0.5 w-5 h-5 rounded border-white/30 bg-white/5 text-[#e8533a] flex-shrink-0 cursor-pointer accent-[#e8533a]"
            required
          />
          <span className="text-white/70 text-sm leading-relaxed group-hover:text-white/90 transition-colors">
            Autorizo a SekreBot a utilizar mis datos personales para fines
            comerciales propios (ofertas, novedades, soporte). Mis datos no
            serán vendidos ni cedidos a terceros bajo ninguna circunstancia.{" "}
            <span className="text-[#e8533a]">*</span>
          </span>
        </label>
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={
          state === "loading" ||
          !form.checkboxTerms ||
          !form.checkboxCommercial
        }
        className="w-full bg-[#e8533a] text-white font-semibold py-4 rounded-xl hover:bg-[#d44428] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-2"
      >
        {state === "loading" ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Enviando…
          </>
        ) : (
          "Registrar mi interés"
        )}
      </button>

      <p className="text-white/40 text-xs text-center">
        Al enviar este formulario, confirmas haber leído nuestra política de
        privacidad (Ley 19.628 de Chile).
      </p>
    </form>
  );
}
