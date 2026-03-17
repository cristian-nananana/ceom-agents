"use client";

import Link from "next/link";
import { MessageCircle, Zap, Shield } from "lucide-react";

const WA_LINK = "https://wa.me/56963926061";

export default function Hero() {
  return (
    <section className="gradient-hero text-white py-20 md:py-32 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-sm font-medium mb-8 backdrop-blur-sm">
          <Zap className="w-4 h-4 text-yellow-300" />
          <span>Nuevo en Chile — Envíos a regiones IV–VIII</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Tu asistente de IA personal.{" "}
          <span className="text-[#e8533a]">Listo para usarlo.</span>
        </h1>

        {/* Sub-headline */}
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          Un Mac Mini con OpenClaw preconfigurado llega a tu puerta. Sin
          configuraciones técnicas, sin complicaciones. Solo enciendes y
          empiezas a trabajar con IA.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Link
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-lg px-8 py-4"
          >
            <MessageCircle className="w-5 h-5" />
            Quiero el mío — WhatsApp
          </Link>
          <a
            href="#planes"
            className="btn-secondary border-white text-white hover:bg-white hover:text-[#1a2744] text-lg px-8 py-4"
          >
            Ver planes y precios
          </a>
        </div>

        {/* Trust badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {[
            {
              icon: <Zap className="w-5 h-5 text-yellow-300" />,
              title: "Listo en 5 minutos",
              desc: "Enchufas y funciona",
            },
            {
              icon: <Shield className="w-5 h-5 text-green-300" />,
              title: "Soporte incluido",
              desc: "Ayuda real por WhatsApp",
            },
            {
              icon: <MessageCircle className="w-5 h-5 text-blue-300" />,
              title: "100% en español",
              desc: "Diseñado para Chile",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3 bg-white/10 rounded-xl p-4 backdrop-blur-sm border border-white/10"
            >
              <div className="flex-shrink-0">{item.icon}</div>
              <div className="text-left">
                <div className="font-semibold text-sm">{item.title}</div>
                <div className="text-white/60 text-xs">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
