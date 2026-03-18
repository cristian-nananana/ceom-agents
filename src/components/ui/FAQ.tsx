"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "¿Qué es SekreBot exactamente?",
    answer:
      "SekreBot es un Mac Mini con OpenClaw preinstalado y configurado. OpenClaw es una plataforma de IA que te permite tener tu propio asistente inteligente funcionando en tu casa u oficina, de forma privada y sin depender de servicios externos.",
  },
  {
    question: "¿Necesito saber de tecnología para usarlo?",
    answer:
      "No. Lo conectas a tu televisor o monitor, lo enciendes y ya está funcionando. Nosotros nos encargamos de toda la configuración técnica antes de enviártelo. Además tienes soporte por WhatsApp incluido.",
  },
  {
    question: "¿A qué regiones de Chile hacen envíos?",
    answer:
      "Actualmente realizamos envíos a las regiones IV (Coquimbo), V (Valparaíso), VI (O'Higgins), VII (Maule) y VIII (Biobío), incluyendo la Región Metropolitana. Los costos de envío varían según la región.",
  },
  {
    question: "¿Cuánto demora en llegar?",
    answer:
      "Una vez confirmado el pago, el envío demora entre 3 y 7 días hábiles según tu región. Te enviamos el número de seguimiento por WhatsApp.",
  },
  {
    question: "¿Qué incluye la suscripción mensual?",
    answer:
      "La suscripción mensual incluye acceso a modelos de IA actualizados, soporte técnico, actualizaciones automáticas de OpenClaw y acceso a nuevas funcionalidades a medida que las lanzamos.",
  },
  {
    question: "¿Puedo comprar el hardware sin suscripción?",
    answer:
      "Sí, puedes comprar el Mac Mini con OpenClaw sin suscripción. En ese caso usarás las funcionalidades base disponibles gratuitamente. La suscripción desbloquea modelos más potentes y soporte prioritario.",
  },
  {
    question: "¿Mis datos son privados?",
    answer:
      "Sí. Tu asistente corre localmente en tu Mac Mini. Tu información no sale de tu red doméstica a menos que lo configures explícitamente. La privacidad es uno de los pilares de SekreBot.",
  },
  {
    question: "¿Cuáles son las formas de pago?",
    answer:
      "Aceptamos transferencia bancaria, WebPay y pago en cuotas sin interés con tarjeta. Coordina la forma de pago que prefieras por WhatsApp.",
  },
];

function FAQItem({
  item,
  isOpen,
  onToggle,
}: {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-gray-50 transition-colors"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-[#1a2744] pr-4">
          {item.question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-[#e8533a] flex-shrink-0 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="p-5 pt-0 bg-white">
          <div className="h-px bg-gray-100 mb-4" />
          <p className="text-gray-600 leading-relaxed">{item.answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 px-4 bg-[#f8f7f4]">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="section-title mb-4">Preguntas frecuentes</h2>
          <p className="section-subtitle">
            ¿Tienes dudas? Acá están las respuestas a las preguntas más
            comunes.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              item={faq}
              isOpen={openIndex === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-10">
          <p className="text-gray-500 mb-4">
            ¿Tienes alguna otra pregunta?
          </p>
          <a
            href="https://wa.me/56963926061"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Escríbenos por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
