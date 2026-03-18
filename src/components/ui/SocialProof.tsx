"use client";

import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Llevo 3 meses con SekreBot y me ahorra 2 horas diarias. Lo uso para redactar correos, organizar mi agenda y responder clientes.",
    name: "Carolina M.",
    role: "Consultora",
    location: "Valparaíso",
    initials: "CM",
  },
  {
    quote:
      "Lo tengo en la oficina y mis clientes quedan impresionados. La configuración fue facilísima y el soporte es excelente.",
    name: "Roberto S.",
    role: "Arquitecto",
    location: "Concepción",
    initials: "RS",
  },
  {
    quote:
      "El setup tardó menos de 30 minutos. Ya lo recomendé a 3 colegas del hospital. Una herramienta increíble para el día a día.",
    name: "Felipe A.",
    role: "Médico",
    location: "Rancagua",
    initials: "FA",
  },
];

export default function SocialProof() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[#6366f1] font-semibold text-sm uppercase tracking-widest mb-3">
            Testimonios
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#f9fafb] mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-[#9ca3af] text-lg max-w-2xl mx-auto">
            Profesionales de todo Chile ya tienen a SekreBot trabajando para
            ellos.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col gap-5 hover:bg-white/[0.07] hover:border-white/20 transition-all duration-200"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(5)].map((_, s) => (
                  <Star
                    key={s}
                    className="w-4 h-4 fill-[#f59e0b] text-[#f59e0b]"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-[#d1d5db] leading-relaxed flex-grow">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-white/10">
                {/* Avatar */}
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#6366f1] to-[#818cf8] flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                  {t.initials}
                </div>
                <div>
                  <p className="text-[#f9fafb] font-semibold text-sm">
                    {t.name}
                  </p>
                  <p className="text-[#9ca3af] text-xs">
                    {t.role} · {t.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-6 mt-14">
          {[
            "⭐ +200 clientes satisfechos",
            "🚀 Setup en menos de 1 hora",
            "🔒 Datos 100% privados",
            "📦 Envíos en 48h",
          ].map((badge, i) => (
            <div
              key={i}
              className="flex items-center gap-2 text-sm text-[#9ca3af] bg-white/5 border border-white/10 px-4 py-2 rounded-full"
            >
              {badge}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
