"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Bot, Zap, Shield, MapPin, MessageCircle, Check,
  Cpu, Menu, X, ArrowRight
} from "lucide-react";

const WA = "https://wa.me/56963926061";
const WA_MSG = (msg: string) => `${WA}?text=${encodeURIComponent(msg)}`;

/* ─── Shared style tokens ─────────────────────────────────────── */
const CYAN = "#00D4C8";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen text-white" style={{ background: "#0A0A0A" }}>

      {/* ── NAVBAR ─────────────────────────────────────────────── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md"
        style={{ background: "rgba(10,10,10,0.90)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
      >
        <div className="max-w-6xl mx-auto px-5 h-14 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 z-10">
            <span className="text-sm font-bold tracking-tight text-white">SekreBot</span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8 text-xs tracking-widest uppercase text-[#888]">
            <a href="#resultados" className="hover:text-white transition-colors">Resultados</a>
            <a href="#features" className="hover:text-white transition-colors">Funciones</a>
            <a href="#precios" className="hover:text-white transition-colors">Precios</a>
            <a href="#cobertura" className="hover:text-white transition-colors">Cobertura</a>
          </div>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <a
              href={WA_MSG("Hola! Quiero saber más sobre SekreBot 🤖")}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full transition-all duration-200"
              style={{
                border: `1px solid ${CYAN}`,
                color: CYAN,
                background: "transparent",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(0,212,200,0.08)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "transparent"; }}
            >
              <MessageCircle className="w-3.5 h-3.5" />
              Contáctanos
            </a>
            <button
              className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menú"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div
            className="md:hidden"
            style={{ borderTop: "1px solid rgba(255,255,255,0.06)", background: "rgba(10,10,10,0.97)" }}
          >
            <div className="px-5 py-4 flex flex-col gap-1">
              {["#resultados:Resultados", "#features:Funciones", "#precios:Precios", "#cobertura:Cobertura"].map((item) => {
                const [href, label] = item.split(":");
                return (
                  <a
                    key={href}
                    href={href}
                    className="px-4 py-3 rounded-lg text-sm text-[#888] hover:text-white hover:bg-white/5 transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    {label}
                  </a>
                );
              })}
              <div className="pt-3 mt-1" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                <a
                  href={WA_MSG("Hola! Quiero saber más sobre SekreBot 🤖")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-sm font-semibold px-4 py-3 rounded-xl w-full transition-colors"
                  style={{ border: `1px solid ${CYAN}`, color: CYAN }}
                  onClick={() => setMenuOpen(false)}
                >
                  <MessageCircle className="w-4 h-4" />
                  Contáctanos
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* ── HERO ───────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 px-5 overflow-hidden">
        {/* Ambient glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(0,212,200,0.04) 0%, transparent 60%)" }}
        />

        <div className="max-w-4xl mx-auto text-center relative">
          {/* Section label */}
          <p
            className="text-xs uppercase font-semibold mb-5 tracking-[0.2em]"
            style={{ color: CYAN }}
          >
            Asistente IA Personal
          </p>

          {/* H1 */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight mb-5">
            Diseñamos tu asistente IA.
            <br />
            Uno que{" "}
            <span style={{ color: CYAN }}>trabaja para ti.</span>
          </h1>

          <p className="text-[#888] text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Mac Mini con IA preinstalada. Listo al encender, en español,
            con soporte real por WhatsApp.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
            <a
              href={WA_MSG("Hola! Quiero pedir mi SekreBot 🤖")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 text-sm font-semibold px-7 py-3.5 rounded-full transition-all duration-200"
              style={{
                border: `1px solid ${CYAN}`,
                color: CYAN,
                background: "transparent",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(0,212,200,0.08)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "transparent"; }}
            >
              <MessageCircle className="w-4 h-4" />
              Quiero el mío
            </a>
            <a
              href="#precios"
              className="inline-flex items-center justify-center gap-2 text-sm text-[#888] hover:text-white transition-colors px-7 py-3.5"
            >
              Ver precios <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ── LOGOS BAR ──────────────────────────────────────────── */}
      <section
        className="py-10 px-5"
        style={{ borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-xs text-[#555] uppercase tracking-[0.15em] mb-8">
            Funciona con tecnología de
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14">
            {[
              { name: "Apple", label: "Apple" },
              { name: "OpenClaw", label: "OpenClaw" },
              { name: "WhatsApp", label: "WhatsApp" },
              { name: "Tailscale", label: "Tailscale" },
              { name: "Cloudflare", label: "Cloudflare" },
            ].map((brand) => (
              <span
                key={brand.name}
                className="text-sm font-semibold tracking-wide"
                style={{ color: "#fff", opacity: 0.35, filter: "brightness(1)" }}
              >
                {brand.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS / CASOS DE ESTUDIO ────────────────────────────── */}
      <section id="resultados" className="py-20 sm:py-28 px-5">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="mb-14">
            <p className="text-xs uppercase font-semibold tracking-[0.2em] mb-3" style={{ color: CYAN }}>
              Resultados
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Resultados que ya genera SekreBot
            </h2>
          </div>

          {/* Cards */}
          <div className="flex flex-col gap-5">

            {/* Card 1 */}
            <div
              className="rounded-2xl p-7 sm:p-10"
              style={{ background: "#111111", border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <div className="flex flex-col md:flex-row md:gap-12 gap-8">
                {/* Left: description */}
                <div className="flex-1">
                  <p className="text-xs uppercase tracking-[0.15em] text-[#555] mb-3">Caso 01</p>
                  <h3 className="text-lg sm:text-xl font-bold mb-3">Profesional Independiente</h3>
                  <p className="text-[#888] text-sm sm:text-base leading-relaxed max-w-sm">
                    Consultor que usa SekreBot para redactar propuestas, gestionar emails y generar análisis de mercado. Ahorra horas cada día sin pagar suscripciones en la nube.
                  </p>
                </div>
                {/* Right: stats */}
                <div className="flex flex-row md:flex-col gap-8 md:gap-6 md:min-w-[200px] md:border-l md:border-white/5 md:pl-10">
                  <div>
                    <div
                      className="text-5xl sm:text-6xl font-bold"
                      style={{ color: CYAN, textShadow: "0 0 20px rgba(0,212,200,0.4)" }}
                    >
                      2h
                    </div>
                    <div className="text-[#888] text-xs mt-1">ahorro diario</div>
                  </div>
                  <div>
                    <div
                      className="text-5xl sm:text-6xl font-bold"
                      style={{ color: CYAN, textShadow: "0 0 20px rgba(0,212,200,0.4)" }}
                    >
                      30%
                    </div>
                    <div className="text-[#888] text-xs mt-1">más clientes</div>
                  </div>
                  <div>
                    <div
                      className="text-5xl sm:text-6xl font-bold"
                      style={{ color: CYAN, textShadow: "0 0 20px rgba(0,212,200,0.4)" }}
                    >
                      $0
                    </div>
                    <div className="text-[#888] text-xs mt-1">suscripciones cloud</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div
              className="rounded-2xl p-7 sm:p-10"
              style={{ background: "#141414", border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <div className="flex flex-col md:flex-row md:gap-12 gap-8">
                {/* Left: description */}
                <div className="flex-1">
                  <p className="text-xs uppercase tracking-[0.15em] text-[#555] mb-3">Caso 02</p>
                  <h3 className="text-lg sm:text-xl font-bold mb-3">PyME — Comercio Local</h3>
                  <p className="text-[#888] text-sm sm:text-base leading-relaxed max-w-sm">
                    Tienda que usa SekreBot para gestionar atención al cliente, controlar inventario y redactar comunicaciones. Tres empleados hacen más con menos tiempo.
                  </p>
                </div>
                {/* Right: stats */}
                <div className="flex flex-row md:flex-col gap-8 md:gap-6 md:min-w-[200px] md:border-l md:border-white/5 md:pl-10">
                  <div>
                    <div
                      className="text-5xl sm:text-6xl font-bold"
                      style={{ color: CYAN, textShadow: "0 0 20px rgba(0,212,200,0.4)" }}
                    >
                      3
                    </div>
                    <div className="text-[#888] text-xs mt-1">empleados optimizados</div>
                  </div>
                  <div>
                    <div
                      className="text-5xl sm:text-6xl font-bold"
                      style={{ color: CYAN, textShadow: "0 0 20px rgba(0,212,200,0.4)" }}
                    >
                      80%
                    </div>
                    <div className="text-[#888] text-xs mt-1">menos tiempo en admin</div>
                  </div>
                  <div>
                    <div
                      className="text-4xl sm:text-5xl font-bold"
                      style={{ color: CYAN, textShadow: "0 0 20px rgba(0,212,200,0.4)" }}
                    >
                      $791K
                    </div>
                    <div className="text-[#888] text-xs mt-1">ahorro anual estimado</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── FEATURES ───────────────────────────────────────────── */}
      <section id="features" className="py-20 sm:py-24 px-5" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="mb-14">
            <p className="text-xs uppercase font-semibold tracking-[0.2em] mb-3" style={{ color: CYAN }}>
              Funciones
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Listo al encender</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-8">
            {[
              {
                icon: Cpu,
                title: "IA sin configuración",
                desc: "OpenClaw preinstalado y calibrado para ti. Conectas el cable, enciendes y tu asistente ya responde.",
              },
              {
                icon: Shield,
                title: "Datos en tu poder",
                desc: "Tu información corre localmente en tu Mac Mini. No sale de tu red. Privacidad real, no marketing.",
              },
              {
                icon: Zap,
                title: "Soporte humano real",
                desc: "Una persona real al otro lado del WhatsApp. Respondemos en horas, no en tickets automatizados.",
              },
            ].map((f) => (
              <div key={f.title}>
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: "rgba(0,212,200,0.08)" }}
                >
                  <f.icon className="w-5 h-5" style={{ color: CYAN }} />
                </div>
                <h3 className="font-bold text-base mb-2">{f.title}</h3>
                <p className="text-[#888] text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRECIOS HARDWARE ───────────────────────────────────── */}
      <section id="precios" className="py-20 sm:py-28 px-5" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="mb-14">
            <p className="text-xs uppercase font-semibold tracking-[0.2em] mb-3" style={{ color: CYAN }}>
              Planes
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Elige tu equipo</h2>
            <p className="text-[#888] text-sm mt-2">Mac Mini + SekreBot instalado. Entrega e instalación incluidas.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 items-start mb-6">
            {[
              {
                name: "M4 Básico",
                spec: "16 GB · 256 GB",
                price: "839.990",
                features: ["IA personal lista", "Soporte básico", "Setup presencial", "Garantía Apple"],
                popular: false,
              },
              {
                name: "M4 Avanzado",
                spec: "24 GB · 512 GB",
                price: "1.079.990",
                features: ["Todo lo anterior", "Mayor velocidad IA", "Multitarea fluida", "Ideal para PyMEs"],
                popular: true,
              },
              {
                name: "M4 Pro",
                spec: "24 GB · 512 GB Pro",
                price: "1.679.990",
                features: ["Todo lo anterior", "Máximo rendimiento", "Proyectos complejos", "Prioridad soporte"],
                popular: false,
              },
            ].map((plan) => (
              <div
                key={plan.name}
                className="relative rounded-2xl p-7 flex flex-col"
                style={{
                  background: plan.popular ? "#111111" : "#0E0E0E",
                  border: plan.popular
                    ? `1px solid rgba(0,212,200,0.25)`
                    : "1px solid rgba(255,255,255,0.06)",
                }}
              >
                {plan.popular && (
                  <div
                    className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap"
                    style={{ background: CYAN, color: "#000" }}
                  >
                    Más popular
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="font-bold text-base mb-0.5">{plan.name}</h3>
                  <p className="text-[#555] text-xs">{plan.spec}</p>
                </div>
                <div className="mb-6">
                  <span className="text-3xl font-bold">${plan.price}</span>
                  <span className="text-[#555] text-xs ml-1.5">CLP</span>
                </div>
                <ul className="space-y-2.5 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-[#888]">
                      <Check className="w-3.5 h-3.5 flex-shrink-0" style={{ color: CYAN }} />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={WA_MSG(`Hola! Me interesa el SekreBot ${plan.name} ($${plan.price} CLP)`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold transition-all duration-200"
                  style={
                    plan.popular
                      ? { background: CYAN, color: "#000" }
                      : { border: "1px solid rgba(255,255,255,0.10)", color: "#fff", background: "transparent" }
                  }
                  onMouseEnter={(e) => {
                    if (!plan.popular) (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.05)";
                  }}
                  onMouseLeave={(e) => {
                    if (!plan.popular) (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                  }}
                >
                  <MessageCircle className="w-4 h-4" />
                  Lo quiero
                </a>
              </div>
            ))}
          </div>
          <p className="text-[#555] text-xs text-center">+ costo de envío según región. Instalación presencial incluida.</p>
        </div>
      </section>

      {/* ── SUSCRIPCIÓN ────────────────────────────────────────── */}
      <section
        className="py-16 sm:py-20 px-5"
        style={{ background: "#0D0D0D", borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="mb-10">
            <p className="text-xs uppercase font-semibold tracking-[0.2em] mb-3" style={{ color: CYAN }}>
              Soporte mensual
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold">Mantén tu IA siempre actualizada</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                name: "Básico",
                price: "9.900",
                features: ["Actualizaciones automáticas", "Soporte WhatsApp 48h", "Nuevas funciones"],
                highlight: false,
              },
              {
                name: "Pro",
                price: "19.900",
                features: ["Todo Básico", "Soporte 24h prioritario", "Sesión mensual 30 min"],
                highlight: true,
              },
              {
                name: "Negocio",
                price: "39.900",
                features: ["Todo Pro", "Soporte mismo día", "Capacitación mensual 1h"],
                highlight: false,
              },
            ].map((plan) => (
              <div
                key={plan.name}
                className="rounded-2xl p-6"
                style={{
                  background: plan.highlight ? "#111" : "transparent",
                  border: plan.highlight
                    ? "1px solid rgba(0,212,200,0.15)"
                    : "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <h3 className="font-bold text-sm mb-1">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-5">
                  <span className="text-2xl font-bold">${plan.price}</span>
                  <span className="text-[#555] text-xs">/mes</span>
                </div>
                <ul className="space-y-2">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-xs text-[#888]">
                      <Check className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: CYAN }} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COBERTURA ──────────────────────────────────────────── */}
      <section id="cobertura" className="py-20 sm:py-24 px-5" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <p className="text-xs uppercase font-semibold tracking-[0.2em] mb-3" style={{ color: CYAN }}>
              Cobertura
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Entrega regional</h2>
            <p className="text-[#888] text-sm mt-2">Instalación presencial incluida en todas las regiones.</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { region: "IV Coquimbo", city: "La Serena", envio: "$70.000" },
              { region: "V Valparaíso", city: "Viña del Mar", envio: "$25.000" },
              { region: "RM Santiago", city: "Santiago", envio: "$15.000" },
              { region: "VI O'Higgins", city: "Rancagua", envio: "$20.000" },
              { region: "VII Maule", city: "Talca", envio: "$45.000" },
              { region: "VIII Biobío", city: "Concepción", envio: "$75.000" },
            ].map((r) => (
              <div
                key={r.region}
                className="rounded-xl p-4 flex items-center justify-between"
                style={{ border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <div>
                  <div className="text-sm font-semibold">{r.region}</div>
                  <div className="text-[#555] text-xs mt-0.5">{r.city}</div>
                </div>
                <div className="text-right">
                  <div className="text-xs font-semibold" style={{ color: CYAN }}>{r.envio}</div>
                  <div className="text-[#555] text-xs">envío</div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-[#555] text-xs text-center mt-6">
            Mínimo 2 equipos por viaje en regiones lejanas.
          </p>
        </div>
      </section>

      {/* ── CTA FINAL ──────────────────────────────────────────── */}
      <section
        className="py-24 sm:py-32 px-5 relative overflow-hidden"
        style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        {/* Ambient glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 50% 100%, rgba(0,212,200,0.05) 0%, transparent 60%)" }}
        />

        <div className="max-w-2xl mx-auto text-center relative">
          <p className="text-xs uppercase font-semibold tracking-[0.2em] mb-5" style={{ color: CYAN }}>
            Empieza hoy
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4 leading-tight">
            ¿Listo para tener tu<br />
            <span style={{ color: CYAN }}>asistente IA?</span>
          </h2>
          <p className="text-[#888] text-base mb-10">
            Pide el tuyo hoy. Entrega en 48 horas con instalación incluida.
          </p>
          <a
            href={WA_MSG("Hola! Quiero pedir mi SekreBot 🤖 ¿Cuál me recomiendas para empezar?")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-black font-bold text-base sm:text-lg px-10 py-4 rounded-full transition-all duration-200"
            style={{
              background: CYAN,
              boxShadow: "0 0 30px rgba(0,212,200,0.3), 0 4px 20px rgba(0,212,200,0.15)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                "0 0 50px rgba(0,212,200,0.5), 0 4px 30px rgba(0,212,200,0.25)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                "0 0 30px rgba(0,212,200,0.3), 0 4px 20px rgba(0,212,200,0.15)";
            }}
          >
            <MessageCircle className="w-5 h-5" />
            Escribir al WhatsApp
            <ArrowRight className="w-4 h-4" />
          </a>
          <p className="text-[#555] text-sm mt-5">+56 9 6392 6061 · Respuesta en minutos</p>
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────────────────────── */}
      <footer
        className="py-10 px-5"
        style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <span className="text-sm font-bold">SekreBot</span>
          <div className="flex items-center gap-6 text-xs text-[#555]">
            <Link href="/privacidad" className="hover:text-white transition-colors">Privacidad</Link>
            <Link href="/terminos" className="hover:text-white transition-colors">Términos</Link>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">WhatsApp</a>
            <a href="mailto:info@sekrebot.cl" className="hover:text-white transition-colors">info@sekrebot.cl</a>
          </div>
        </div>
        <div className="max-w-5xl mx-auto mt-8 pt-6 text-center text-xs text-[#333]" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
          © 2026 SekreBot. Todos los derechos reservados.
        </div>
      </footer>

      {/* ── BOTÓN FLOTANTE WHATSAPP ─────────────────────────────── */}
      <a
        href={WA_MSG("Hola! Tengo una pregunta sobre SekreBot 🤖")}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 flex items-center gap-2 font-semibold px-4 py-3 rounded-full text-sm transition-all duration-200"
        style={{
          background: "#25D366",
          color: "#fff",
          boxShadow: "0 4px 20px rgba(37,211,102,0.3)",
        }}
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-5 h-5" />
        <span className="hidden sm:inline">¿Dudas?</span>
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
        </span>
      </a>

    </div>
  );
}
