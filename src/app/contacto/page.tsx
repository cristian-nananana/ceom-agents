import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle, Shield, Clock } from "lucide-react";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contacto | SekreBot",
  description:
    "Registra tu interés en SekreBot y recibe seguimiento personalizado de tu pedido. Mac Mini + OpenClaw preconfigurado entregado a tu puerta.",
  alternates: { canonical: "https://sekrebot.cl/contacto" },
};

const WA_LINK = "https://wa.me/56963926061";

export default function ContactoPage() {
  return (
    <main className="min-h-screen bg-[#0f1a2e] py-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <Link
            href="/"
            className="text-[#1a2744] bg-white font-bold text-xl inline-block px-4 py-1.5 rounded-lg mb-6"
          >
            Sekre<span className="text-[#e8533a]">Bot</span>
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Quiero mi SekreBot
          </h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            Completa el formulario y te contactamos por WhatsApp. Sin
            compromiso — solo queremos saber qué necesitas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Formulario */}
          <div className="lg:col-span-3 bg-[#1a2744]/60 border border-white/10 rounded-2xl p-6 md:p-8">
            <h2 className="text-xl font-bold text-white mb-6">
              Datos de contacto
            </h2>
            <ContactForm />
          </div>

          {/* Sidebar info */}
          <div className="lg:col-span-2 space-y-4">
            {/* Garantías */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-white font-semibold mb-4">
                ¿Qué pasa después?
              </h3>
              <div className="space-y-4">
                {[
                  {
                    icon: <MessageCircle className="w-5 h-5 text-[#e8533a]" />,
                    title: "Te contactamos",
                    desc: "En menos de 24 horas te escribimos por WhatsApp para confirmar tu pedido.",
                  },
                  {
                    icon: <Shield className="w-5 h-5 text-[#e8533a]" />,
                    title: "Preparamos tu equipo",
                    desc: "Instalamos y configuramos OpenClaw en tu Mac Mini antes de enviarlo.",
                  },
                  {
                    icon: <Clock className="w-5 h-5 text-[#e8533a]" />,
                    title: "Seguimiento en tiempo real",
                    desc: "Recibirás un enlace único para seguir el estado de tu pedido.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="flex-shrink-0 mt-0.5">{item.icon}</div>
                    <div>
                      <p className="text-white font-medium text-sm">
                        {item.title}
                      </p>
                      <p className="text-white/60 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contacto directo */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-white font-semibold mb-3">
                ¿Prefieres escribirnos directamente?
              </h3>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#e8533a] hover:text-[#ff6b4e] transition-colors font-medium text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                +56 9 6392 6061 (WhatsApp)
              </a>
              <a
                href="mailto:hola@sekrebot.cl"
                className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm mt-2"
              >
                hola@sekrebot.cl
              </a>
            </div>

            {/* Privacidad */}
            <p className="text-white/40 text-xs text-center px-2">
              Tus datos están protegidos conforme a la Ley 19.628 de Chile.{" "}
              <Link href="/privacidad" className="underline hover:text-white/60">
                Ver política de privacidad
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
