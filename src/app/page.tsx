"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Bot, Zap, Shield, MapPin, ChevronDown, Star,
  Clock, Wrench, MessageCircle, Check, ArrowRight,
  Cpu, Wifi, HeadphonesIcon, Menu, X
} from "lucide-react";

const WA = "https://wa.me/56963926061";
const WA_MSG = (msg: string) => `${WA}?text=${encodeURIComponent(msg)}`;

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0f1e] text-white">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0a0f1e]/90 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl z-10">
            <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center flex-shrink-0">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <span>SekreBot</span>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
            <a href="#como-funciona" className="hover:text-white transition-colors">Cómo funciona</a>
            <a href="#precios" className="hover:text-white transition-colors">Precios</a>
            <a href="#cobertura" className="hover:text-white transition-colors">Cobertura</a>
          </div>

          {/* Desktop CTA + Mobile hamburger */}
          <div className="flex items-center gap-3">
            <a
              href={WA_MSG("Hola! Quiero saber más sobre SekreBot 🤖")}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-200 items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              Lo quiero
            </a>
            {/* Hamburger button - mobile only */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menú"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-white/5 bg-[#0a0f1e]/95 backdrop-blur-xl">
            <div className="px-4 py-4 flex flex-col gap-1">
              <a
                href="#como-funciona"
                className="px-4 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-colors text-sm font-medium"
                onClick={() => setMenuOpen(false)}
              >
                Cómo funciona
              </a>
              <a
                href="#precios"
                className="px-4 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-colors text-sm font-medium"
                onClick={() => setMenuOpen(false)}
              >
                Precios
              </a>
              <a
                href="#cobertura"
                className="px-4 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-colors text-sm font-medium"
                onClick={() => setMenuOpen(false)}
              >
                Cobertura
              </a>
              <div className="pt-2 mt-1 border-t border-white/5">
                <a
                  href={WA_MSG("Hola! Quiero saber más sobre SekreBot 🤖")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold px-4 py-3 rounded-xl transition-all duration-200"
                  onClick={() => setMenuOpen(false)}
                >
                  <MessageCircle className="w-4 h-4" />
                  Lo quiero
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="pt-28 pb-16 sm:pt-32 sm:pb-24 px-4 sm:px-6 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] bg-indigo-600/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-indigo-300 text-xs sm:text-sm font-medium mb-6 sm:mb-8">
            <span className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse flex-shrink-0" />
            <span>Disponible en regiones IV–VIII de Chile</span>
          </div>

          {/* Headline - mobile-first typography */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 sm:mb-6 leading-tight">
            Tu secretario IA{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              personal.
            </span>
            <br />
            En tu casa. Hoy.
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed px-2 sm:px-0">
            Mac Mini con inteligencia artificial preinstalada y lista para usar.
            Sin tecnicismos. Con soporte real por WhatsApp.
          </p>

          {/* CTAs - stack on mobile, row on sm+ */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-10 sm:mb-16 px-2 sm:px-0">
            <a
              href={WA_MSG("Hola! Quiero pedir mi SekreBot 🤖")}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-6 sm:px-8 py-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 text-base sm:text-lg w-full sm:w-auto"
            >
              Quiero el mío
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#precios"
              className="bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold px-6 sm:px-8 py-4 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 text-base sm:text-lg w-full sm:w-auto"
            >
              Ver precios
            </a>
          </div>

          {/* Stats - 3 cols always, smaller text on mobile */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 max-w-sm sm:max-w-lg mx-auto px-2 sm:px-0">
            {[
              { icon: Clock, label: "Entrega 48h", sub: "A tu puerta" },
              { icon: Zap, label: "30 min setup", sub: "Presencial" },
              { icon: HeadphonesIcon, label: "Soporte real", sub: "Por WhatsApp" },
            ].map((stat) => (
              <div key={stat.label} className="bg-white/5 border border-white/5 rounded-xl p-2.5 sm:p-4 text-center">
                <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-400 mx-auto mb-1 sm:mb-2" />
                <div className="text-xs sm:text-sm font-semibold leading-tight">{stat.label}</div>
                <div className="text-xs text-gray-500 hidden sm:block">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="py-4 sm:py-6 border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
            Entregado a profesionales en{" "}
            <span className="text-gray-300">Valparaíso · Rancagua · Talca · Concepción · La Serena</span>
          </p>
        </div>
      </section>

      {/* PROBLEMA / SOLUCIÓN */}
      <section id="como-funciona" className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">¿Por qué SekreBot?</h2>
            <p className="text-gray-400 text-base sm:text-lg px-2 sm:px-0">Diseñado para quien no quiere perder tiempo con tecnología.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {/* Problema */}
            <div className="bg-red-950/20 border border-red-900/30 rounded-2xl p-6 sm:p-8">
              <div className="text-red-400 font-semibold text-sm uppercase tracking-wider mb-4">El problema hoy</div>
              <ul className="space-y-3 sm:space-y-4">
                {[
                  "ChatGPT en inglés y con preguntas difíciles de formular",
                  "Configuración técnica que toma días",
                  "Soporte que no responde o está en otro idioma",
                  "Pagar USD mensual con tipo de cambio incierto",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-400 text-sm sm:text-base">
                    <span className="text-red-500 mt-0.5 flex-shrink-0">✗</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Solución */}
            <div className="bg-indigo-950/20 border border-indigo-500/20 rounded-2xl p-6 sm:p-8">
              <div className="text-indigo-400 font-semibold text-sm uppercase tracking-wider mb-4">SekreBot lo resuelve</div>
              <ul className="space-y-3 sm:space-y-4">
                {[
                  "IA lista al encender — cero configuración",
                  "En español, para profesionales chilenos",
                  "Soporte por WhatsApp con persona real",
                  "Precio en pesos chilenos, sin sorpresas",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-300 text-sm sm:text-base">
                    <Check className="w-5 h-5 text-indigo-400 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                icon: Cpu,
                title: "IA lista al encender",
                desc: "OpenClaw preinstalado y configurado. Conectas el cable, enciendes y ya tienes tu asistente.",
              },
              {
                icon: Shield,
                title: "Privacidad local",
                desc: "Tu información no sale de tu red doméstica. La IA corre en tu propio Mac Mini.",
              },
              {
                icon: Wrench,
                title: "Soporte humano real",
                desc: "Hay una persona al otro lado del WhatsApp. Respondemos en horas, no en días.",
              },
            ].map((f) => (
              <div key={f.title} className="group bg-white/[0.03] border border-white/5 hover:border-indigo-500/30 rounded-2xl p-6 sm:p-8 transition-all duration-300">
                <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-indigo-500/20 transition-colors">
                  <f.icon className="w-6 h-6 text-indigo-400" />
                </div>
                <h3 className="font-bold text-base sm:text-lg mb-2">{f.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm sm:text-base">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRECIOS HARDWARE */}
      <section id="precios" className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">Elige tu equipo</h2>
            <p className="text-gray-400 text-sm sm:text-base">Mac Mini + OpenClaw instalado. Entrega e instalación incluidas.</p>
          </div>

          {/* Pricing grid: 1 col mobile, 3 col desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-6 items-start">
            {[
              {
                name: "M4 Básico",
                spec: "16GB · 256GB",
                price: "$839.990",
                features: ["IA personal lista", "Soporte básico", "Setup presencial", "Garantía Apple"],
                popular: false,
              },
              {
                name: "M4 Avanzado",
                spec: "24GB · 512GB",
                price: "$1.079.990",
                features: ["Todo lo anterior", "Mayor velocidad IA", "Multitarea fluida", "Ideal para PyMEs"],
                popular: true,
              },
              {
                name: "M4 Pro",
                spec: "24GB · 512GB Pro",
                price: "$1.679.990",
                features: ["Todo lo anterior", "Máximo rendimiento", "Proyectos complejos", "Prioridad soporte"],
                popular: false,
              },
            ].map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl p-6 sm:p-8 flex flex-col ${
                  plan.popular
                    ? "bg-indigo-600 ring-2 ring-indigo-400 shadow-2xl shadow-indigo-500/20 md:scale-105"
                    : "bg-white/[0.04] border border-white/5"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-400 text-black text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wide whitespace-nowrap">
                    ⭐ Más popular
                  </div>
                )}
                <div className="mb-5 sm:mb-6">
                  <h3 className="font-bold text-lg sm:text-xl mb-1">{plan.name}</h3>
                  <p className={`text-sm ${plan.popular ? "text-indigo-200" : "text-gray-500"}`}>{plan.spec}</p>
                </div>
                <div className="mb-5 sm:mb-6">
                  <span className="text-2xl sm:text-3xl font-bold">{plan.price}</span>
                  <span className={`text-sm ml-1 ${plan.popular ? "text-indigo-200" : "text-gray-500"}`}>CLP</span>
                </div>
                <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <Check className={`w-4 h-4 flex-shrink-0 ${plan.popular ? "text-indigo-200" : "text-indigo-400"}`} />
                      <span className={plan.popular ? "text-indigo-100" : "text-gray-300"}>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={WA_MSG(`Hola! Me interesa el SekreBot ${plan.name} (${plan.price} CLP)`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-2 py-3 sm:py-3.5 px-6 rounded-xl font-semibold transition-all duration-200 text-sm sm:text-base min-h-[48px] ${
                    plan.popular
                      ? "bg-white text-indigo-600 hover:bg-indigo-50"
                      : "bg-indigo-600 hover:bg-indigo-500 text-white"
                  }`}
                >
                  <MessageCircle className="w-4 h-4" />
                  Lo quiero
                </a>
              </div>
            ))}
          </div>

          {/* Nota envío */}
          <p className="text-center text-gray-500 text-xs sm:text-sm px-2 sm:px-0">
            + costo de envío según región. Entrega presencial con instalación incluida.
          </p>
        </div>
      </section>

      {/* SUSCRIPCIÓN */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white/[0.02]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-3">Soporte mensual</h2>
            <p className="text-gray-400 text-sm sm:text-base">Mantén tu IA actualizada y con soporte garantizado.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              {
                name: "Básico",
                price: "$9.900",
                color: "emerald",
                features: ["Actualizaciones automáticas", "Soporte WhatsApp 48h", "Acceso a nuevas funciones"],
              },
              {
                name: "Pro",
                price: "$19.900",
                color: "indigo",
                features: ["Todo Básico", "Soporte prioritario 24h", "Sesión mensual optimización (30 min)"],
                recommended: true,
              },
              {
                name: "Negocio",
                price: "$39.900",
                color: "violet",
                features: ["Todo Pro", "Soporte mismo día", "Capacitación mensual 1h para tu equipo"],
              },
            ].map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl p-5 sm:p-6 border ${
                  plan.recommended
                    ? "border-indigo-500/40 bg-indigo-950/30"
                    : "border-white/5 bg-white/[0.03]"
                }`}
              >
                {plan.recommended && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
                    Recomendado
                  </div>
                )}
                <h3 className="font-bold text-base sm:text-lg mb-1">{plan.name}</h3>
                <div className="text-xl sm:text-2xl font-bold mb-1">
                  {plan.price}
                  <span className="text-sm font-normal text-gray-400">/mes</span>
                </div>
                <ul className="space-y-2 mt-4">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-xs sm:text-sm text-gray-400">
                      <Check className="w-4 h-4 text-indigo-400 mt-0.5 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COBERTURA */}
      <section id="cobertura" className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <MapPin className="w-8 h-8 sm:w-10 sm:h-10 text-indigo-400 mx-auto mb-3 sm:mb-4" />
            <h2 className="text-3xl sm:text-4xl font-bold mb-2 sm:mb-3">Cobertura de entrega</h2>
            <p className="text-gray-400 text-sm sm:text-base">Llevamos tu SekreBot directamente a tu puerta.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
            {[
              { region: "IV Coquimbo", city: "La Serena", envio: "$70.000" },
              { region: "V Valparaíso", city: "Viña del Mar", envio: "$25.000" },
              { region: "RM Santiago", city: "Santiago", envio: "$15.000" },
              { region: "VI O'Higgins", city: "Rancagua", envio: "$20.000" },
              { region: "VII Maule", city: "Talca", envio: "$45.000" },
              { region: "VIII Biobío", city: "Concepción", envio: "$75.000" },
            ].map((r) => (
              <div key={r.region} className="bg-white/[0.03] border border-white/5 rounded-xl p-4 sm:p-5 flex items-center justify-between">
                <div>
                  <div className="font-semibold text-sm">{r.region}</div>
                  <div className="text-gray-500 text-xs">{r.city}</div>
                </div>
                <div className="text-right">
                  <div className="text-indigo-400 font-semibold text-sm">{r.envio}</div>
                  <div className="text-gray-500 text-xs">envío</div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-500 text-xs sm:text-sm mt-5 sm:mt-6 px-2 sm:px-0">
            Entrega presencial con setup e instalación incluida. Mínimo 2 equipos por viaje en regiones lejanas.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white/[0.02]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Preguntas frecuentes</h2>
          <div className="space-y-2 sm:space-y-3">
            {[
              {
                q: "¿Necesito saber de tecnología para usarlo?",
                a: "No. Lo conectas al monitor, lo enciendes y ya está funcionando. Nosotros configuramos todo antes de llevártelo y te hacemos un tutorial de 30 minutos en tu casa.",
              },
              {
                q: "¿Puedo comprar sin la suscripción mensual?",
                a: "Sí. Puedes comprar el equipo sin suscripción y usar las funcionalidades base gratuitas de OpenClaw. La suscripción agrega soporte prioritario y actualizaciones.",
              },
              {
                q: "¿Mis datos son privados?",
                a: "Sí. Tu asistente corre localmente en tu Mac Mini. Tu información no sale de tu red a menos que tú lo configures explícitamente.",
              },
              {
                q: "¿Qué pasa si el equipo falla?",
                a: "El Mac Mini tiene garantía oficial de Apple. Si hay algún problema de software, nuestro soporte lo resuelve remotamente o con visita si es necesario.",
              },
              {
                q: "¿Cuánto demora la entrega?",
                a: "Confirmado el pago, en 48-72 horas hábiles está en tu puerta con instalación incluida.",
              },
            ].map((faq, i) => (
              <div key={i} className="border border-white/5 rounded-xl overflow-hidden">
                <button
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left hover:bg-white/[0.03] transition-colors min-h-[56px]"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-medium pr-4 text-sm sm:text-base">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-indigo-400 flex-shrink-0 transition-transform duration-200 ${
                      openFaq === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-4 sm:px-5 pb-4 sm:pb-5 text-gray-400 leading-relaxed border-t border-white/5 pt-3 sm:pt-4 text-sm sm:text-base">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-1 mb-4 sm:mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 fill-amber-400" />
            ))}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
            ¿Listo para tener tu
            <br />
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              asistente IA?
            </span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg mb-8 sm:mb-10 px-2 sm:px-0">
            Pide el tuyo hoy. Entrega en 48 horas con instalación incluida.
          </p>
          <div className="px-2 sm:px-0">
            <a
              href={WA_MSG("Hola! Quiero pedir mi SekreBot 🤖 ¿Cuál me recomiendas para empezar?")}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 sm:gap-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-6 sm:px-10 py-4 sm:py-5 rounded-2xl text-base sm:text-xl transition-all duration-200 shadow-2xl shadow-indigo-500/25 w-full sm:w-auto"
            >
              <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
              Escribir al WhatsApp
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          <p className="text-gray-500 text-xs sm:text-sm mt-4">+56 9 6392 6061 · Respuesta en minutos</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-8 sm:py-12 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto flex flex-col items-center gap-4 sm:gap-6 md:flex-row md:justify-between">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <div className="w-7 h-7 bg-indigo-500 rounded-lg flex items-center justify-center flex-shrink-0">
              <Bot className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold">SekreBot</span>
            <span className="text-gray-600 text-sm ml-1 hidden sm:inline">Tu secretario IA personal</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm text-gray-500">
            <Link href="/privacidad" className="hover:text-white transition-colors py-1">Privacidad</Link>
            <Link href="/terminos" className="hover:text-white transition-colors py-1">Términos</Link>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors py-1">WhatsApp</a>
            <a href="mailto:info@sekrebot.cl" className="hover:text-white transition-colors py-1">info@sekrebot.cl</a>
          </div>
        </div>
        <div className="max-w-5xl mx-auto mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-white/5 text-center text-xs text-gray-600">
          © 2026 SekreBot. Todos los derechos reservados.
        </div>
      </footer>

      {/* BOTÓN FLOTANTE WHATSAPP */}
      <a
        href={WA_MSG("Hola! Tengo una pregunta sobre SekreBot 🤖")}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white font-semibold px-3 sm:px-4 py-3 rounded-full shadow-2xl hover:scale-105 transition-all duration-200"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
        <span className="hidden sm:inline text-sm">¿Dudas?</span>
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
        </span>
      </a>
    </div>
  );
}
