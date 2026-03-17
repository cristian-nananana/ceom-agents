"use client";

import { MessageCircle } from "lucide-react";

const WA_LINK =
  "https://wa.me/56963926061?text=Hola!%20Me%20interesa%20AuraBot%20%F0%9F%A4%96";

export default function WhatsAppButton() {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white font-semibold px-4 py-3 rounded-full shadow-2xl hover:shadow-green-500/30 hover:scale-105 transition-all duration-200 group"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-6 h-6 flex-shrink-0" />
      <span className="hidden sm:inline text-sm">¿Dudas? WhatsApp</span>

      {/* Ping animation */}
      <span className="absolute -top-1 -right-1 flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
      </span>
    </a>
  );
}
