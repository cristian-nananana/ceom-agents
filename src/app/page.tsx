"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Bot, Zap, Shield, MapPin, MessageCircle, Check,
  Cpu, Menu, X, ArrowRight, Star, Lock, Headphones
} from "lucide-react";

const WA = "https://wa.me/56963926061";
const WA_MSG = (msg: string) => `${WA}?text=${encodeURIComponent(msg)}`;
const CYAN = "#00D4C8";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen text-white" style={{ background: "#0A0A0A", fontFamily: "'Montserrat', 'Inter', sans-serif" }}>

      {/* ── NAVBAR ─────────────────────────────────────────────── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(10,10,10,0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
        }}
      >
        <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex flex-col z-10">
            <span className="text-base font-black tracking-tight text-white leading-none">SekreBot</span>
            <span className="text-[10px] tracking-[0.25em] uppercase" style={{ color: CYAN, opacity: 0.8 }}>🤖 Tu asistente IA</span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8 text-[11px] tracking-[0.18em] uppercase font-semibold text-[#888]">
            <a href="#como-funciona" className="hover:text-white transition-colors">Cómo funciona</a>
            <a href="#precios" className="hover:text-white transition-colors">Precios</a>
            <a href="#cobertura" className="hover:text-white transition-colors">Cobertura</a>
            <a href="#contacto" className="hover:text-white transition-colors">Contacto</a>
          </div>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <a
              href={WA_MSG("Hola! Quiero saber más sobre SekreBot 🤖")}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 text-[11px] font-bold px-5 py-2 transition-all duration-200 uppercase tracking-widest"
              style={{
                border: `1px solid ${CYAN}`,
                color: CYAN,
                background: "transparent",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(0,212,200,0.10)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "transparent"; }}
            >
              Contáctanos
            </a>
            <button
              className="md:hidden p-2 transition-colors"
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
              {[
                ["#como-funciona", "Cómo funciona"],
                ["#precios", "Precios"],
                ["#cobertura", "Cobertura"],
                ["#contacto", "Contacto"],
              ].map(([href, label]) => (
                <a
                  key={href}
                  href={href}
                  className="px-4 py-3 text-[11px] tracking-widest uppercase font-semibold text-[#888] hover:text-white hover:bg-white/5 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </a>
              ))}
              <div className="pt-3 mt-1" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                <a
                  href={WA_MSG("Hola! Quiero saber más sobre SekreBot 🤖")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-[11px] font-bold px-4 py-3 w-full uppercase tracking-widest transition-colors"
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
      <section
        className="relative flex flex-col"
        style={{ minHeight: "100vh" }}
      >
        {/* Dark background with subtle cyan radial */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at 50% 30%, rgba(0,212,200,0.06) 0%, transparent 55%), #0A0A0A",
          }}
        />

        {/* Hero content — centered vertically */}
        <div className="flex-1 flex flex-col items-center justify-center px-6 sm:px-8 pt-16 pb-0 relative text-center">
          {/* Label */}
          <p
            className="text-[11px] uppercase font-bold tracking-[0.3em] mb-8"
            style={{ color: "rgba(255,255,255,0.45)" }}
          >
            Asistente IA Personal
          </p>

          {/* H1 */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase leading-[1.0] tracking-tight mb-0">
            <span className="block text-white">Tu</span>
            <span className="block" style={{ color: CYAN }}>Secretario IA</span>
            <span className="block text-white">Personal.</span>
          </h1>

          {/* Decorative line */}
          <div
            className="mx-auto my-7"
            style={{ width: 64, height: 2, background: CYAN }}
          />

          {/* Subtitle */}
          <p
            className="text-[11px] uppercase font-semibold tracking-[0.3em] mb-12"
            style={{ color: "rgba(255,255,255,0.55)" }}
          >
            Mac Mini con IA preinstalada&nbsp;·&nbsp;Entrega en 48H&nbsp;·&nbsp;Soporte real
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-5">
            <a
              href="#precios"
              className="inline-flex items-center gap-2 text-[11px] font-bold px-8 py-4 uppercase tracking-widest transition-all duration-200"
              style={{ border: `1px solid ${CYAN}`, color: CYAN, background: "transparent" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(0,212,200,0.10)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "transparent"; }}
            >
              Ver Precios <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="#como-funciona"
              className="text-sm font-medium transition-colors"
              style={{ color: "rgba(255,255,255,0.55)" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#fff"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.55)"; }}
            >
              ¿Cómo funciona?
            </a>
          </div>
        </div>

        {/* Feature cards — bottom of hero */}
        <div className="relative w-full mt-16 sm:mt-20">
          <div
            className="grid grid-cols-1 sm:grid-cols-3"
          >
            {[
              {
                icon: Zap,
                title: "Listo al encender",
                desc: "OpenClaw preinstalado y calibrado. Conectas el cable y tu IA ya responde. Sin configuración.",
              },
              {
                icon: Headphones,
                title: "Soporte humano real",
                desc: "Una persona real responde en horas por WhatsApp. Sin tickets automáticos, sin esperas.",
              },
              {
                icon: Lock,
                title: "Privacidad local",
                desc: "Tus datos corren en tu Mac Mini. No salen de tu red. Privacidad real, no marketing.",
              },
            ].map((card, i) => (
              <div
                key={card.title}
                className="p-8 sm:p-10 flex flex-col"
                style={{
                  background: CYAN,
                  borderLeft: i > 0 ? "1px solid rgba(0,0,0,0.12)" : undefined,
                }}
              >
                {/* Diamond icon */}
                <div
                  className="relative flex items-center justify-center mb-6 flex-shrink-0"
                  style={{
                    width: 52,
                    height: 52,
                    border: "2px solid #000",
                    transform: "rotate(45deg)",
                  }}
                >
                  <card.icon
                    className="w-5 h-5"
                    style={{ color: "#000", transform: "rotate(-45deg)" }}
                  />
                </div>
                <h3 className="font-black text-base uppercase tracking-wide mb-3" style={{ color: "#000" }}>
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(0,0,0,0.65)" }}>
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS / CASOS DE ESTUDIO ────────────────────────────── */}
      <section id="como-funciona" className="py-32 sm:py-40 px-6 sm:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="mb-20 sm:mb-24">
            <p className="text-[11px] uppercase font-bold tracking-[0.25em] mb-4" style={{ color: CYAN }}>
              Resultados
            </p>
            <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tight leading-tight mb-6">
              Resultados que ya<br />genera SekreBot
            </h2>
          </div>

          {/* Divider */}
          <div style={{ width: 64, height: 2, background: CYAN, marginBottom: 48 }} />

          <div className="flex flex-col gap-8">
            {/* Card 1 */}
            <div
              className="rounded-none p-10 sm:p-12"
              style={{ background: "#111111", border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <div className="flex flex-col md:flex-row md:gap-12 gap-10">
                <div className="flex-1">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#555] mb-4">Caso 01</p>
                  <h3 className="text-xl sm:text-2xl font-black uppercase mb-4">Profesional Independiente</h3>
                  <p className="text-gray-400 text-base leading-relaxed max-w-sm">
                    Consultor que usa SekreBot para redactar propuestas, gestionar emails y generar análisis de mercado. Ahorra horas cada día sin pagar suscripciones en la nube.
                  </p>
                </div>
                <div className="flex flex-row md:flex-col gap-8 md:gap-0 md:min-w-[220px] md:border-l md:border-white/5 md:pl-12">
                  {[
                    { val: "2h", label: "ahorro diario" },
                    { val: "30%", label: "más clientes" },
                    { val: "$0", label: "suscripciones cloud" },
                  ].map((s, i) => (
                    <div key={s.label}>
                      {i > 0 && <hr className="border-white/5 my-6 hidden md:block" />}
                      <div className="md:py-4">
                        <div
                          className="text-5xl sm:text-6xl font-black mb-1"
                          style={{ color: CYAN, textShadow: "0 0 30px rgba(0,212,200,0.6), 0 0 60px rgba(0,212,200,0.2)" }}
                        >
                          {s.val}
                        </div>
                        <div className="text-sm text-gray-500 mt-1">{s.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div
              className="rounded-none p-10 sm:p-12"
              style={{ background: "#141414", border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <div className="flex flex-col md:flex-row md:gap-12 gap-10">
                <div className="flex-1">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#555] mb-4">Caso 02</p>
                  <h3 className="text-xl sm:text-2xl font-black uppercase mb-4">PyME — Comercio Local</h3>
                  <p className="text-gray-400 text-base leading-relaxed max-w-sm">
                    Tienda que usa SekreBot para gestionar atención al cliente, controlar inventario y redactar comunicaciones. Tres empleados hacen más con menos tiempo.
                  </p>
                </div>
                <div className="flex flex-row md:flex-col gap-8 md:gap-0 md:min-w-[220px] md:border-l md:border-white/5 md:pl-12">
                  {[
                    { val: "3", label: "empleados optimizados" },
                    { val: "80%", label: "menos tiempo en admin" },
                    { val: "$791K", label: "ahorro anual estimado" },
                  ].map((s, i) => (
                    <div key={s.label}>
                      {i > 0 && <hr className="border-white/5 my-6 hidden md:block" />}
                      <div className="md:py-4">
                        <div
                          className="text-5xl sm:text-6xl font-black mb-1"
                          style={{ color: CYAN, textShadow: "0 0 30px rgba(0,212,200,0.6), 0 0 60px rgba(0,212,200,0.2)" }}
                        >
                          {s.val}
                        </div>
                        <div className="text-sm text-gray-500 mt-1">{s.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SEPARATOR ──────────────────────────────────────────── */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* ── FEATURES ───────────────────────────────────────────── */}
      <section id="features" className="py-32 sm:py-40 px-6 sm:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="mb-20 sm:mb-24">
            <p className="text-[11px] uppercase font-bold tracking-[0.25em] mb-4" style={{ color: CYAN }}>
              Funciones
            </p>
            <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tight leading-tight mb-4">
              Todo incluido.<br />Desde el primer día.
            </h2>
            <div style={{ width: 64, height: 2, background: CYAN, marginTop: 24 }} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-12">
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
              <div key={f.title} className="flex flex-col">
                {/* Diamond icon */}
                <div
                  className="relative flex items-center justify-center mb-6 flex-shrink-0"
                  style={{
                    width: 52,
                    height: 52,
                    border: `2px solid ${CYAN}`,
                    transform: "rotate(45deg)",
                  }}
                >
                  <f.icon
                    className="w-5 h-5"
                    style={{ color: CYAN, transform: "rotate(-45deg)" }}
                  />
                </div>
                <h3 className="font-black text-base uppercase tracking-wide mb-3 text-white">
                  {f.title}
                </h3>
                <p className="text-gray-400 text-base leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SEPARATOR ──────────────────────────────────────────── */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* ── PRECIOS HARDWARE ───────────────────────────────────── */}
      <section id="precios" className="py-32 sm:py-40 px-6 sm:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="mb-20 sm:mb-24">
            <p className="text-[11px] uppercase font-bold tracking-[0.25em] mb-4" style={{ color: CYAN }}>
              Planes
            </p>
            <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tight leading-tight mb-4">
              Elige tu equipo
            </h2>
            <p className="text-gray-400 text-base mt-4">Mac Mini + SekreBot instalado. Entrega e instalación incluidas.</p>
            <div style={{ width: 64, height: 2, background: CYAN, marginTop: 24 }} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10 items-start mb-8">
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
                className="relative flex flex-col p-10"
                style={{
                  background: plan.popular ? "#111111" : "#0E0E0E",
                  border: plan.popular
                    ? `1px solid rgba(0,212,200,0.30)`
                    : "1px solid rgba(255,255,255,0.06)",
                  boxShadow: plan.popular ? "0 0 40px rgba(0,212,200,0.08)" : undefined,
                }}
              >
                {plan.popular && (
                  <div
                    className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-[10px] font-black px-4 py-1 whitespace-nowrap uppercase tracking-widest"
                    style={{ background: CYAN, color: "#000" }}
                  >
                    Más popular
                  </div>
                )}
                <div className="mb-8">
                  <h3 className="font-black text-base uppercase tracking-wide mb-1">{plan.name}</h3>
                  <p className="text-gray-500 text-sm">{plan.spec}</p>
                </div>
                <div className="mb-10">
                  <span className="text-4xl font-black">${plan.price}</span>
                  <span className="text-gray-500 text-sm ml-2">CLP</span>
                </div>
                <ul className="space-y-4 mb-10 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm text-gray-400">
                      <Check className="w-4 h-4 flex-shrink-0" style={{ color: CYAN }} />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={WA_MSG(`Hola! Me interesa el SekreBot ${plan.name} ($${plan.price} CLP)`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-4 text-[11px] font-black uppercase tracking-widest transition-all duration-200"
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
          <p className="text-gray-500 text-sm text-center">+ costo de envío según región. Instalación presencial incluida.</p>
        </div>
      </section>

      {/* ── SEPARATOR ──────────────────────────────────────────── */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* ── SUSCRIPCIÓN ────────────────────────────────────────── */}
      <section
        className="py-32 sm:py-40 px-6 sm:px-8"
        style={{ background: "#0D0D0D" }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="mb-20 sm:mb-24">
            <p className="text-[11px] uppercase font-bold tracking-[0.25em] mb-4" style={{ color: CYAN }}>
              Soporte mensual
            </p>
            <h2 className="text-4xl sm:text-5xl font-black uppercase leading-tight mb-4">
              Mantén tu IA<br />siempre actualizada
            </h2>
            <p className="text-gray-400 text-base max-w-xl mt-4">Actualizaciones continuas, soporte real y nuevas funciones cada mes.</p>
            <div style={{ width: 64, height: 2, background: CYAN, marginTop: 24 }} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10">
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
                className="p-10"
                style={{
                  background: plan.highlight ? "#111" : "transparent",
                  border: plan.highlight
                    ? "1px solid rgba(0,212,200,0.15)"
                    : "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <h3 className="font-black text-base uppercase tracking-wide mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-3xl font-black">${plan.price}</span>
                  <span className="text-gray-500 text-sm">/mes</span>
                </div>
                <ul className="space-y-4">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-gray-400">
                      <Check className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: CYAN }} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SEPARATOR ──────────────────────────────────────────── */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* ── COBERTURA ──────────────────────────────────────────── */}
      <section id="cobertura" className="py-32 sm:py-40 px-6 sm:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="mb-20 sm:mb-24">
            <p className="text-[11px] uppercase font-bold tracking-[0.25em] mb-4" style={{ color: CYAN }}>
              Cobertura
            </p>
            <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tight leading-tight mb-4">
              Entrega regional
            </h2>
            <p className="text-gray-400 text-base mt-4">Instalación presencial incluida en todas las regiones.</p>
            <div style={{ width: 64, height: 2, background: CYAN, marginTop: 24 }} />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
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
                className="p-5 flex items-center justify-between"
                style={{ border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <div>
                  <div className="text-sm font-black uppercase tracking-wide">{r.region}</div>
                  <div className="text-gray-500 text-xs mt-1">{r.city}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-bold" style={{ color: CYAN }}>{r.envio}</div>
                  <div className="text-gray-500 text-xs mt-1">envío</div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-gray-500 text-sm text-center mt-8">
            Mínimo 2 equipos por viaje en regiones lejanas.
          </p>
        </div>
      </section>

      {/* ── SEPARATOR ──────────────────────────────────────────── */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* ── CTA FINAL ──────────────────────────────────────────── */}
      <section
        id="contacto"
        className="py-40 px-6 sm:px-8 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0A0A0A 0%, #0D1A1A 50%, #0A0A0A 100%)",
        }}
      >
        {/* Ambient glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 50% 100%, rgba(0,212,200,0.07) 0%, transparent 55%)" }}
        />

        <div className="max-w-2xl mx-auto text-center relative">
          <p className="text-[11px] uppercase font-bold tracking-[0.3em] mb-8" style={{ color: CYAN }}>
            Empieza hoy
          </p>
          <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight mb-4 leading-tight">
            ¿Listo para tu<br />
            <span style={{ color: CYAN }}>Asistente IA?</span>
          </h2>

          {/* Decorative line */}
          <div
            className="mx-auto my-7"
            style={{ width: 64, height: 2, background: CYAN }}
          />

          <p
            className="text-[11px] uppercase font-semibold tracking-[0.25em] mb-12"
            style={{ color: "rgba(255,255,255,0.55)" }}
          >
            Entrega en 48 horas&nbsp;·&nbsp;Instalación incluida&nbsp;·&nbsp;Soporte real
          </p>

          <a
            href={WA_MSG("Hola! Quiero pedir mi SekreBot 🤖 ¿Cuál me recomiendas para empezar?")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-black font-black text-sm px-12 py-5 uppercase tracking-widest transition-all duration-200"
            style={{
              background: CYAN,
              boxShadow: "0 0 30px rgba(0,212,200,0.4), 0 4px 20px rgba(0,212,200,0.2)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                "0 0 60px rgba(0,212,200,0.6), 0 4px 40px rgba(0,212,200,0.3)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                "0 0 30px rgba(0,212,200,0.4), 0 4px 20px rgba(0,212,200,0.2)";
            }}
          >
            <MessageCircle className="w-5 h-5" />
            Escribir al WhatsApp
            <ArrowRight className="w-4 h-4" />
          </a>
          <p className="text-gray-500 text-sm mt-6">+56 9 6392 6061 · Respuesta en minutos</p>
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────────────────────── */}
      <footer
        className="py-12 px-6 sm:px-8"
        style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-sm font-black uppercase tracking-wider">SekreBot</span>
            <p className="text-[10px] tracking-[0.2em] uppercase mt-0.5" style={{ color: "rgba(0,212,200,0.6)" }}>
              Tu asistente IA
            </p>
          </div>
          <div className="flex items-center gap-6 text-[11px] tracking-widest uppercase text-[#555]">
            <Link href="/privacidad" className="hover:text-white transition-colors">Privacidad</Link>
            <Link href="/terminos" className="hover:text-white transition-colors">Términos</Link>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">WhatsApp</a>
            <a href="mailto:info@sekrebot.cl" className="hover:text-white transition-colors">Email</a>
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
        className="fixed bottom-5 right-5 z-50 flex items-center gap-2 font-bold px-4 py-3 text-xs uppercase tracking-wider transition-all duration-200"
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
