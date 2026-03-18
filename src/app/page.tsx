"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  MessageCircle,
  Check,
  Menu,
  X,
  ArrowRight,
  MapPin,
  Users,
} from "lucide-react";

const WA = "https://wa.me/56963926061";
const WA_MSG = (msg: string) => `${WA}?text=${encodeURIComponent(msg)}`;
const CYAN = "#00D4C8";

/* ────────────────────────────────────────────────────────────
   TYPES
──────────────────────────────────────────────────────────── */
interface NavLink {
  href: string;
  label: string;
}

interface PricingPlan {
  name: string;
  spec: string;
  price: string;
  features: string[];
  popular: boolean;
}

interface SubPlan {
  name: string;
  price: string;
  features: string[];
  highlight: boolean;
}

interface CoverageRegion {
  region: string;
  city: string;
  envio: string;
}

interface FaqItem {
  q: string;
  a: string;
}

/* ────────────────────────────────────────────────────────────
   DATA
──────────────────────────────────────────────────────────── */
const NAV_LINKS: NavLink[] = [
  { href: "#como-funciona", label: "Cómo funciona" },
  { href: "#precios", label: "Precios" },
  { href: "#cobertura", label: "Cobertura" },
  { href: "#contacto", label: "Contacto" },
];

const STEPS = [
  {
    emoji: "📱",
    step: "Paso 1",
    title: "Nos contactas",
    desc: "Escribes al WhatsApp. Nos cuentas qué necesitas y para qué lo usarías.",
  },
  {
    emoji: "🖥️",
    step: "Paso 2",
    title: "Conseguimos y configuramos el equipo",
    desc: "Compramos el Mac Mini por ti (o usas el tuyo). Lo configuramos con IA personalizada para tu vida o negocio.",
  },
  {
    emoji: "🚗",
    step: "Paso 3",
    title: "Te lo llevamos e instalamos",
    desc: "Vamos hasta tu casa o lo enviamos. Te mostramos cómo usarlo en 30 minutos. Sin manual de instrucciones.",
  },
  {
    emoji: "🚀",
    step: "Paso 4",
    title: "Lo usas y mejora contigo",
    desc: "Si quieres soporte mensual, tu asistente IA sigue mejorando. Si no, igual funciona perfecto solo.",
  },
];

const USE_CASES = [
  {
    emoji: "📝",
    title: "Redactar textos y emails",
    desc: "Escribe propuestas, responde correos, crea documentos en segundos.",
  },
  {
    emoji: "📊",
    title: "Analizar información",
    desc: "Sube datos o documentos y pregúntale qué significan.",
  },
  {
    emoji: "📅",
    title: "Organizar tu agenda",
    desc: "Te recuerda tareas, resume reuniones y te ayuda a priorizar.",
  },
  {
    emoji: "💬",
    title: "Responder clientes",
    desc: "Crea respuestas automáticas para preguntas frecuentes de tu negocio.",
  },
  {
    emoji: "🎯",
    title: "Crear contenido",
    desc: "Genera ideas para redes sociales, blogs o presentaciones.",
  },
  {
    emoji: "🔍",
    title: "Investigar rápido",
    desc: "Pregúntale sobre cualquier tema y recibe resúmenes claros.",
  },
];

const DOS = [
  "Preguntarle cualquier cosa",
  "Pedirle que redacte, resuma o traduzca",
  "Usarlo para tu negocio o vida personal",
  "Conectarlo a otras apps",
];

const DONTS = [
  "Compartir contraseñas o datos bancarios",
  "Creerle todo sin verificar (puede equivocarse)",
  "Usarlo para decisiones médicas o legales sin un profesional",
  "Darle acceso a sistemas sin entender qué hace",
];

const PRICING_PLANS: PricingPlan[] = [
  {
    name: "M4 Básico",
    spec: "16 GB · 256 GB",
    price: "874.990",
    features: [
      "IA personal lista al encender",
      "Soporte básico WhatsApp",
      "Instalación presencial + 30 min de clase",
      "Garantía Apple 1 año",
    ],
    popular: false,
  },
  {
    name: "M4 Avanzado",
    spec: "24 GB · 512 GB",
    price: "1.124.990",
    features: [
      "Todo lo del plan Básico",
      "Mayor velocidad de IA",
      "Multitarea fluida",
      "Ideal para PyMEs",
    ],
    popular: true,
  },
  {
    name: "M4 Pro",
    spec: "24 GB · 512 GB Pro",
    price: "1.749.990",
    features: [
      "Todo lo del plan Avanzado",
      "Máximo rendimiento IA",
      "Proyectos complejos",
      "Soporte prioritario",
    ],
    popular: false,
  },
];

const SUB_PLANS: SubPlan[] = [
  {
    name: "Básico",
    price: "9.900",
    features: [
      "Actualizaciones automáticas",
      "Soporte WhatsApp 48h",
      "Nuevas funciones cada mes",
    ],
    highlight: false,
  },
  {
    name: "Pro",
    price: "19.900",
    features: [
      "Todo del plan Básico",
      "Soporte 24h prioritario",
      "Sesión mensual 30 min",
    ],
    highlight: true,
  },
  {
    name: "Negocio",
    price: "39.900",
    features: [
      "Todo del plan Pro",
      "Soporte mismo día",
      "Capacitación mensual 1h",
    ],
    highlight: false,
  },
];

const COVERAGE: CoverageRegion[] = [
  { region: "IV Coquimbo", city: "La Serena", envio: "$85.000" },
  { region: "V Valparaíso", city: "Viña del Mar", envio: "$25.000" },
  { region: "RM Santiago", city: "Santiago", envio: "$15.000" },
  { region: "VI O'Higgins", city: "Rancagua", envio: "$20.000" },
  { region: "VII Maule", city: "Talca", envio: "$45.000" },
  { region: "VIII Biobío", city: "Concepción", envio: "$90.000" },
];

const FAQ: FaqItem[] = [
  {
    q: "¿Necesito saber computación?",
    a: "NO. Si sabes usar WhatsApp, puedes usar SekreBot. Es así de simple.",
  },
  {
    q: "¿Es lo mismo que ChatGPT?",
    a: "Similar, pero instalado en tu casa, en español, configurado para TI y para lo que necesitas.",
  },
  {
    q: "¿Qué pasa si me equivoco?",
    a: "Nada. Siempre puedes preguntar de nuevo o llamarnos. No hay forma de romperlo usándolo.",
  },
  {
    q: "¿Funciona sin internet?",
    a: "Para algunas cosas sí. Para consultar modelos de IA en la nube, necesitas internet.",
  },
  {
    q: "¿Puedo cancelar el soporte?",
    a: "Sí, cuando quieras. Sin preguntas ni contratos largos.",
  },
];

/* ────────────────────────────────────────────────────────────
   HELPERS / SUB-COMPONENTS
──────────────────────────────────────────────────────────── */

/** Patrón título de sección Atlas */
function SectionTitle({
  eyebrow,
  title,
  subtitle,
  light = false,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  light?: boolean;
}) {
  return (
    <div className="text-center mb-16 sm:mb-20">
      {eyebrow && (
        <p
          className="text-[11px] uppercase font-bold tracking-[0.3em] mb-3"
          style={{ color: CYAN }}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight leading-tight"
        style={{ fontFamily: "var(--font-raleway), sans-serif", color: light ? "#000" : "#fff" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className="text-[11px] uppercase tracking-[0.2em] mt-3"
          style={{ color: light ? "rgba(0,0,0,0.55)" : "rgba(255,255,255,0.5)" }}
        >
          {subtitle}
        </p>
      )}
      <div
        className="mx-auto mt-5"
        style={{ width: 48, height: 2, background: light ? "#000" : CYAN }}
      />
    </div>
  );
}

/* ────────────────────────────────────────────────────────────
   MAIN PAGE
──────────────────────────────────────────────────────────── */
export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="min-h-screen text-white"
      style={{ background: "#0A0A0A", fontFamily: "var(--font-raleway), var(--font-inter), sans-serif" }}
    >

      {/* ════════════════════════════════════════════════
          NAVBAR
      ════════════════════════════════════════════════ */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all"
        style={{
          transitionDuration: "0.8s",
          background: scrolled ? "#000000" : "transparent",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
        }}
      >
        <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
          <Link href="/" className="flex flex-col z-10">
            <span
              className="text-[26px] font-bold leading-none tracking-tight"
              style={{ color: CYAN, fontFamily: "var(--font-raleway), sans-serif" }}
            >
              SekreBot
            </span>
            <span
              className="text-[10px] font-light uppercase"
              style={{ letterSpacing: "5px", color: "rgba(255,255,255,0.5)" }}
            >
              Tu asistente IA
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="text-[11px] tracking-[0.18em] uppercase font-semibold transition-colors"
                style={{ color: "rgba(255,255,255,0.6)" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = CYAN; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.6)"; }}
              >
                {label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href={WA_MSG("Hola! Quiero saber más sobre SekreBot 🤖")}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 text-[11px] font-bold px-5 py-2 transition-all duration-200 uppercase tracking-widest"
              style={{ border: `1px solid ${CYAN}`, color: CYAN, background: "transparent" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(0,212,200,0.10)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "transparent"; }}
            >
              Contáctanos
            </a>
            <button
              className="md:hidden p-2 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div
            className="md:hidden"
            style={{ borderTop: "1px solid rgba(255,255,255,0.06)", background: "rgba(0,0,0,0.97)" }}
          >
            <div className="px-5 py-4 flex flex-col gap-1">
              {NAV_LINKS.map(({ href, label }) => (
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

      {/* ════════════════════════════════════════════════
          HERO — fullscreen
      ════════════════════════════════════════════════ */}
      <section
        className="relative flex flex-col items-center justify-center text-center px-6 sm:px-8"
        style={{ minHeight: "100vh" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 35%, rgba(0,212,200,0.07) 0%, transparent 60%), #0A0A0A",
          }}
        />

        <div className="relative z-10 w-full max-w-4xl mx-auto pt-24 pb-8">
          {/* Eyebrow */}
          <p
            className="text-[11px] uppercase font-bold tracking-[0.3em] mb-8"
            style={{ color: CYAN }}
          >
            Asistente IA Personal · Chile · Regiones IV–VIII
          </p>

          {/* Hr superior */}
          <div className="w-16 h-[2px] mx-auto mb-8" style={{ background: CYAN }} />

          <h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase leading-[1.0] tracking-tight"
            style={{ fontFamily: "var(--font-raleway), sans-serif" }}
          >
            <span className="block text-white">Finalmente,</span>
            <span className="block text-white">la IA que</span>
            <span className="block" style={{ color: CYAN }}>trabaja para ti.</span>
          </h1>

          {/* Hr inferior */}
          <div className="w-16 h-[2px] mx-auto mt-8 mb-7" style={{ background: CYAN }} />

          <p
            className="text-lg sm:text-xl leading-relaxed mb-12 max-w-xl mx-auto"
            style={{ color: "rgba(255,255,255,0.70)" }}
          >
            No necesitas saber de tecnología.<br />
            Nosotros lo configuramos todo.<br />
            <strong style={{ color: "#fff" }}>Tú solo lo usas.</strong>
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <a
              href={WA_MSG("Hola! Quiero mi SekreBot 🤖 ¿Cómo empiezo?")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[11px] font-black px-10 py-4 w-full sm:w-auto justify-center uppercase tracking-widest transition-all duration-200"
              style={{ background: CYAN, color: "#000" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "0.9"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "1"; }}
            >
              Quiero el mío <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="#como-funciona"
              className="text-sm font-medium transition-colors"
              style={{ color: "rgba(255,255,255,0.5)" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#fff"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.5)"; }}
            >
              ¿Cómo funciona?
            </a>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          ¿QUÉ ES SEKREBOT? — Sección didáctica
      ════════════════════════════════════════════════ */}
      <section
        className="py-24 sm:py-32 px-6 sm:px-8"
        style={{ background: "#111111" }}
      >
        <div className="max-w-5xl mx-auto">
          <SectionTitle
            eyebrow="Es más simple de lo que crees"
            title="¿Qué es SekreBot?"
          />

          <p
            className="text-center text-lg leading-relaxed mb-16 max-w-2xl mx-auto"
            style={{ color: "rgba(255,255,255,0.70)" }}
          >
            SekreBot es un Mac Mini con inteligencia artificial ya instalada, configurada y lista para usar.
            Como tener un asistente personal que <strong style={{ color: "#fff" }}>nunca se cansa, nunca se va de vacaciones</strong> y siempre está disponible.
          </p>

          {/* 3 columnas comparación visual */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { emoji: "🧑", top: "Tú tienes", bottom: "una idea o pregunta" },
              { emoji: "🤖", top: "SekreBot", bottom: "la ejecuta al instante" },
              { emoji: "✅", top: "Resultado", bottom: "en segundos" },
            ].map((col, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center p-10 gap-4"
                style={{
                  border: `1px solid rgba(0,212,200,${i === 1 ? "0.35" : "0.12"})`,
                  background: i === 1 ? "rgba(0,212,200,0.04)" : "transparent",
                }}
              >
                <span className="text-6xl">{col.emoji}</span>
                <div>
                  <p className="font-black text-base uppercase tracking-wider text-white">{col.top}</p>
                  <p className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.55)" }}>{col.bottom}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Separator */}
      <div className="h-px" style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.05), transparent)" }} />

      {/* ════════════════════════════════════════════════
          ASÍ FUNCIONA — 4 pasos tipo infografía
      ════════════════════════════════════════════════ */}
      <section
        id="como-funciona"
        className="py-24 sm:py-32 px-6 sm:px-8"
        style={{ background: "#0A0A0A" }}
      >
        <div className="max-w-5xl mx-auto">
          <SectionTitle
            eyebrow="Sin complicaciones"
            title="Así funciona, paso a paso"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {STEPS.map((step, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center p-8 relative"
                style={{ border: "1px solid rgba(255,255,255,0.06)", background: "#0E0E0E" }}
              >
                {/* Número del paso */}
                <div
                  className="absolute -top-3 left-6 text-[10px] font-black px-3 py-1 uppercase tracking-widest"
                  style={{ background: CYAN, color: "#000" }}
                >
                  {step.step}
                </div>
                <span className="text-5xl mb-5 mt-4">{step.emoji}</span>
                <h3
                  className="font-black text-sm uppercase tracking-wide mb-3 text-white"
                  style={{ fontFamily: "var(--font-raleway), sans-serif" }}
                >
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Nota al pie */}
          <p className="text-center text-sm mt-10" style={{ color: "rgba(255,255,255,0.35)" }}>
            🕐 Desde el primer contacto hasta el equipo funcionando en tu casa: <strong style={{ color: "rgba(255,255,255,0.6)" }}>menos de 48 horas.</strong>
          </p>
        </div>
      </section>

      {/* Separator */}
      <div className="h-px" style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.05), transparent)" }} />

      {/* ════════════════════════════════════════════════
          CASOS DE USO — 6 ejemplos reales
      ════════════════════════════════════════════════ */}
      <section
        className="py-24 sm:py-32 px-6 sm:px-8"
        style={{ background: "#111111" }}
      >
        <div className="max-w-5xl mx-auto">
          <SectionTitle
            eyebrow="Ejemplos reales de personas como tú"
            title="¿Para qué lo puedes usar?"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {USE_CASES.map((uc, i) => (
              <div
                key={i}
                className="flex flex-col items-start p-8 gap-4 transition-all duration-300"
                style={{ border: "1px solid rgba(255,255,255,0.06)", background: "#0E0E0E" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(0,212,200,0.25)";
                  (e.currentTarget as HTMLDivElement).style.background = "rgba(0,212,200,0.03)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.06)";
                  (e.currentTarget as HTMLDivElement).style.background = "#0E0E0E";
                }}
              >
                <span className="text-4xl">{uc.emoji}</span>
                <div>
                  <h3
                    className="font-black text-sm uppercase tracking-wide mb-2 text-white"
                    style={{ fontFamily: "var(--font-raleway), sans-serif" }}
                  >
                    {uc.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                    {uc.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Separator */}
      <div className="h-px" style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.05), transparent)" }} />

      {/* ════════════════════════════════════════════════
          LO QUE SÍ Y NO DEBES HACER — educativo
      ════════════════════════════════════════════════ */}
      <section
        className="py-24 sm:py-32 px-6 sm:px-8"
        style={{ background: "#0A0A0A" }}
      >
        <div className="max-w-5xl mx-auto">
          <SectionTitle
            eyebrow="Parte de nuestro servicio es educarte"
            title="Lo que te enseñamos (y lo que NO debes hacer)"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
            {/* SÍ */}
            <div
              className="p-8"
              style={{ border: "1px solid rgba(0,212,200,0.25)", background: "rgba(0,212,200,0.03)" }}
            >
              <h3
                className="font-black text-sm uppercase tracking-widest mb-6 flex items-center gap-2"
                style={{ color: CYAN }}
              >
                ✅ Lo que SÍ puedes hacer
              </h3>
              <ul className="space-y-3">
                {DOS.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-base" style={{ color: "rgba(255,255,255,0.75)" }}>
                    <Check className="w-4 h-4 flex-shrink-0 mt-1" style={{ color: CYAN }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* NO */}
            <div
              className="p-8"
              style={{ border: "1px solid rgba(255,80,80,0.2)", background: "rgba(255,80,80,0.02)" }}
            >
              <h3
                className="font-black text-sm uppercase tracking-widest mb-6 flex items-center gap-2"
                style={{ color: "#ff6060" }}
              >
                ❌ Lo que NO debes hacer
              </h3>
              <ul className="space-y-3">
                {DONTS.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-base" style={{ color: "rgba(255,255,255,0.75)" }}>
                    <span className="flex-shrink-0 mt-0.5" style={{ color: "#ff6060" }}>✗</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p
            className="text-center text-base italic"
            style={{ color: "rgba(255,255,255,0.45)" }}
          >
            🎓 En nuestro curso rápido de 30 minutos te enseñamos exactamente esto.
          </p>
        </div>
      </section>

      {/* Separator */}
      <div className="h-px" style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.05), transparent)" }} />

      {/* ════════════════════════════════════════════════
          ¿YA TIENES UN MAC MINI? — 2 opciones
      ════════════════════════════════════════════════ */}
      <section
        className="py-24 sm:py-32 px-6 sm:px-8"
        style={{ background: "#111111" }}
      >
        <div className="max-w-5xl mx-auto">
          <SectionTitle
            eyebrow="También te podemos ayudar"
            title="¿Ya tienes un Mac Mini?"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Presencial */}
            <div
              className="p-10 flex flex-col gap-5"
              style={{ border: "1px solid rgba(0,212,200,0.20)", background: "#0E0E0E" }}
            >
              <span className="text-5xl">🏠</span>
              <div>
                <h3
                  className="font-black text-lg uppercase tracking-wide mb-3 text-white"
                  style={{ fontFamily: "var(--font-raleway), sans-serif" }}
                >
                  Vamos a tu casa
                </h3>
                <p className="text-base leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.65)" }}>
                  Un técnico de SekreBot va hasta donde estás, instala la IA y te enseña a usarla.
                  Mismo servicio, sin comprar equipo nuevo.
                </p>
                <div className="flex items-baseline gap-2">
                  <span
                    className="font-black text-2xl"
                    style={{ color: CYAN }}
                  >
                    desde $150.000
                  </span>
                  <span className="text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>CLP</span>
                </div>
              </div>
              <a
                href={WA_MSG("Hola! Tengo un Mac Mini y quiero que vengan a instalar la IA 🏠")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-4 text-[11px] font-black uppercase tracking-widest transition-all duration-200 mt-auto"
                style={{ border: `1px solid ${CYAN}`, color: CYAN }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(0,212,200,0.10)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "transparent"; }}
              >
                <MessageCircle className="w-4 h-4" />
                Lo quiero presencial
              </a>
            </div>

            {/* Remoto */}
            <div
              className="p-10 flex flex-col gap-5"
              style={{ border: "1px solid rgba(0,212,200,0.20)", background: "#0E0E0E" }}
            >
              <span className="text-5xl">💻</span>
              <div>
                <h3
                  className="font-black text-lg uppercase tracking-wide mb-3 text-white"
                  style={{ fontFamily: "var(--font-raleway), sans-serif" }}
                >
                  Lo hacemos en remoto
                </h3>
                <p className="text-base leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.65)" }}>
                  Si tienes conexión a internet, podemos instalar y configurar todo sin salir de tu casa.
                  Tú ves la pantalla en tiempo real.
                </p>
                <div className="flex items-baseline gap-2">
                  <span
                    className="font-black text-2xl"
                    style={{ color: CYAN }}
                  >
                    desde $80.000
                  </span>
                  <span className="text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>CLP</span>
                </div>
              </div>
              <a
                href={WA_MSG("Hola! Tengo un Mac Mini y quiero instalación remota de la IA 💻")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-4 text-[11px] font-black uppercase tracking-widest transition-all duration-200 mt-auto"
                style={{ border: `1px solid ${CYAN}`, color: CYAN }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(0,212,200,0.10)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "transparent"; }}
              >
                <MessageCircle className="w-4 h-4" />
                Lo quiero remoto
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Separator */}
      <div className="h-px" style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.05), transparent)" }} />

      {/* ════════════════════════════════════════════════
          PRECIOS — El equipo
      ════════════════════════════════════════════════ */}
      <section
        id="precios"
        className="py-24 sm:py-32 px-6 sm:px-8"
        style={{ background: "#0A0A0A" }}
      >
        <div className="max-w-5xl mx-auto">
          <SectionTitle
            eyebrow="El equipo"
            title="Elige tu Mac Mini con IA"
            subtitle="Mac Mini + SekreBot instalado · Todos incluyen instalación presencial + 30 min de clase"
          />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 sm:gap-0 items-stretch mb-4">
            {PRICING_PLANS.map((plan, i) => (
              <PricingBox key={plan.name} plan={plan} index={i} />
            ))}
          </div>
          <p className="text-sm text-center mt-6" style={{ color: "rgba(255,255,255,0.35)" }}>
            + costo de envío según región. Instalación presencial incluida.
          </p>
        </div>
      </section>

      {/* Separator */}
      <div className="h-px" style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.05), transparent)" }} />

      {/* ════════════════════════════════════════════════
          SOPORTE MENSUAL — Suscripción opcional
      ════════════════════════════════════════════════ */}
            {/* ════════════════════════════════════════════════
          CONFIDENCIALIDAD + MODELO DE IA + SUSCRIPCIÓN
      ════════════════════════════════════════════════ */}
      <section className="py-24 sm:py-32 px-6 sm:px-8" style={{ background: "#111111" }}>
        <div className="max-w-5xl mx-auto">
          <SectionTitle
            eyebrow="Tres razones que marcan la diferencia"
            title="Lo que hace a SekreBot único"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Confidencial */}
            <div className="p-10 border" style={{ borderColor: "rgba(255,255,255,0.06)", background: "#0D0D0D" }}>
              <div className="text-5xl mb-6">🔒</div>
              <h3 className="text-white font-bold text-xl uppercase tracking-wide mb-4">100% confidencial</h3>
              <p style={{ color: "rgba(255,255,255,0.55)", lineHeight: "1.8" }}>
                Tu asistente corre en tu propia casa. Nadie sabe lo que le preguntas. Ni nosotros.
                Lo que pasa en SekreBot, queda en SekreBot.
              </p>
              <p className="mt-4 text-sm" style={{ color: "#00D4C8" }}>
                ¿Quieres máxima privacidad? Configuramos un modelo que trabaja 100% sin internet.
              </p>
            </div>
            {/* Modelo a elección */}
            <div className="p-10 border" style={{ borderColor: "#00D4C8", background: "#0D0D0D" }}>
              <div className="text-5xl mb-6">🧠</div>
              <h3 className="text-white font-bold text-xl uppercase tracking-wide mb-4">Tú eliges el modelo de IA</h3>
              <p style={{ color: "rgba(255,255,255,0.55)", lineHeight: "1.8" }}>
                ¿El más potente? ¿El más rápido? ¿El que no necesita internet?
                Te explicamos las diferencias y configuramos el que más se adapta a ti.
              </p>
              <ul className="mt-4 space-y-1 text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
                <li>🤖 GPT-4o — el más conocido</li>
                <li>🧩 Claude — ideal para redacción</li>
                <li>🔐 Llama local — sin internet, máxima privacidad</li>
              </ul>
            </div>
            {/* Suscripción gestionada */}
            <div className="p-10 border" style={{ borderColor: "rgba(255,255,255,0.06)", background: "#0D0D0D" }}>
              <div className="text-5xl mb-6">💳</div>
              <h3 className="text-white font-bold text-xl uppercase tracking-wide mb-4">Sin cuentas extranjeras</h3>
              <p style={{ color: "rgba(255,255,255,0.55)", lineHeight: "1.8" }}>
                La suscripción a los modelos de IA la pagamos nosotros.
                Tú no necesitas tarjeta en USD, ni cuenta en OpenAI, ni configurar APIs.
              </p>
              <p className="mt-4 text-sm" style={{ color: "#00D4C8" }}>
                Un precio fijo en pesos chilenos. Sin sorpresas.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="h-px" style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.05), transparent)" }} />

      <section
        className="py-24 sm:py-32 px-6 sm:px-8"
        style={{ background: "#0D0D0D" }}
      >
        <div className="max-w-5xl mx-auto">
          <SectionTitle
            eyebrow="Soporte mensual (opcional)"
            title="Tu IA sigue mejorando contigo"
            subtitle="Actualizaciones, soporte real y nuevas funciones cada mes. Cancela cuando quieras."
          />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {SUB_PLANS.map((plan) => (
              <div
                key={plan.name}
                className="p-8 transition-all duration-300"
                style={{
                  background: plan.highlight ? "#161616" : "transparent",
                  border: plan.highlight
                    ? `1px solid rgba(0,212,200,0.2)`
                    : "1px solid rgba(255,255,255,0.06)",
                  borderTop: plan.highlight
                    ? `2px solid ${CYAN}`
                    : "2px solid rgba(255,255,255,0.08)",
                }}
              >
                <h3
                  className="font-black text-base uppercase tracking-wider mb-2"
                  style={{ fontFamily: "var(--font-raleway), sans-serif" }}
                >
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span
                    className="font-semibold"
                    style={{
                      fontFamily: "var(--font-oswald), var(--font-inter), sans-serif",
                      fontSize: "36px",
                      color: "#fff",
                    }}
                  >
                    ${plan.price}
                  </span>
                  <span className="text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>/mes</span>
                </div>
                <ul className="space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
                      <Check className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: CYAN }} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="text-center text-sm mt-8" style={{ color: "rgba(255,255,255,0.30)" }}>
            🔓 Sin contratos. Cancela cuando quieras. Sin preguntas.
          </p>
        </div>
      </section>

      {/* Separator */}
      <div className="h-px" style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.05), transparent)" }} />

      {/* ════════════════════════════════════════════════
          COBERTURA
      ════════════════════════════════════════════════ */}
      <section
        id="cobertura"
        className="py-24 sm:py-32 px-6 sm:px-8"
        style={{ background: "#0A0A0A" }}
      >
        <div className="max-w-5xl mx-auto">
          <SectionTitle
            eyebrow="Cobertura"
            title="Llegamos hasta tu ciudad"
            subtitle="Instalación presencial incluida en todas las regiones"
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {COVERAGE.map((r) => (
              <div
                key={r.region}
                className="p-5 flex items-center justify-between transition-all duration-300"
                style={{ border: "1px solid rgba(255,255,255,0.06)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(0,212,200,0.25)";
                  (e.currentTarget as HTMLDivElement).style.background = "rgba(0,212,200,0.03)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.06)";
                  (e.currentTarget as HTMLDivElement).style.background = "transparent";
                }}
              >
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 flex-shrink-0" style={{ color: CYAN }} />
                  <div>
                    <div className="text-sm font-black uppercase tracking-wide">{r.region}</div>
                    <div className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.4)" }}>{r.city}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-bold" style={{ color: CYAN }}>{r.envio}</div>
                  <div className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.35)" }}>envío</div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-center mt-8" style={{ color: "rgba(255,255,255,0.3)" }}>
            Mínimo 2 equipos por viaje en regiones alejadas.
          </p>
        </div>
      </section>

      {/* Separator */}
      <div className="h-px" style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.05), transparent)" }} />

      {/* ════════════════════════════════════════════════
          FAQ — Preguntas frecuentes (didácticas)
      ════════════════════════════════════════════════ */}
      <section
        className="py-24 sm:py-32 px-6 sm:px-8"
        style={{ background: "#111111" }}
      >
        <div className="max-w-3xl mx-auto">
          <SectionTitle
            eyebrow="Preguntas frecuentes"
            title="¿Tienes dudas?"
            subtitle="Aquí están las respuestas más comunes"
          />

          <div className="space-y-3">
            {FAQ.map((item, i) => (
              <div
                key={i}
                className="transition-all duration-300"
                style={{
                  border: openFaq === i
                    ? `1px solid rgba(0,212,200,0.30)`
                    : "1px solid rgba(255,255,255,0.06)",
                  background: openFaq === i ? "rgba(0,212,200,0.03)" : "#0E0E0E",
                }}
              >
                <button
                  className="w-full flex items-center justify-between p-6 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-black text-sm uppercase tracking-wide text-white pr-4">
                    {item.q}
                  </span>
                  <span
                    className="flex-shrink-0 text-lg font-bold transition-transform duration-300"
                    style={{ color: CYAN, transform: openFaq === i ? "rotate(45deg)" : "rotate(0)" }}
                  >
                    +
                  </span>
                </button>
                {openFaq === i && (
                  <div
                    className="px-6 pb-6 text-base leading-relaxed"
                    style={{ color: "rgba(255,255,255,0.65)" }}
                  >
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Separator */}
      <div className="h-px" style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.05), transparent)" }} />

      {/* ════════════════════════════════════════════════
          CTA FINAL — emocional, cercano
      ════════════════════════════════════════════════ */}
      <section
        id="contacto"
        className="py-24 sm:py-32 px-6 sm:px-8 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0A0A0A 0%, #0D1A1A 50%, #0A0A0A 100%)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 50% 100%, rgba(0,212,200,0.06) 0%, transparent 55%)" }}
        />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          {/* Hr superior */}
          <div className="w-16 h-[2px] mx-auto mb-8" style={{ background: CYAN }} />

          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-black uppercase leading-tight mb-6"
            style={{ fontFamily: "var(--font-raleway), sans-serif" }}
          >
            <span className="block text-white">¿Listo para tener tu</span>
            <span className="block" style={{ color: CYAN }}>asistente IA personal?</span>
          </h2>

          <div className="w-16 h-[2px] mx-auto mb-8" style={{ background: CYAN }} />

          <p className="text-xl leading-relaxed mb-12" style={{ color: "rgba(255,255,255,0.70)" }}>
            No te vamos a complicar la vida.<br />
            <strong style={{ color: "#fff" }}>Te vamos a simplificar.</strong>
          </p>

          {/* Contact cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
            {[
              {
                Icon: MessageCircle,
                title: "WhatsApp",
                desc: "+56 9 6392 6061",
                href: WA_MSG("Hola! Quiero información sobre SekreBot 🤖"),
                isExternal: true,
              },
              {
                Icon: Users,
                title: "Email",
                desc: "info@sekrebot.cl",
                href: "mailto:info@sekrebot.cl",
                isExternal: false,
              },
              {
                Icon: MapPin,
                title: "Cobertura",
                desc: "Regiones IV — VIII",
                href: "#cobertura",
                isExternal: false,
              },
            ].map((contact) => (
              <a
                key={contact.title}
                href={contact.href}
                {...(contact.isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="flex flex-col items-center text-center p-6 transition-all duration-300"
                style={{ border: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.01)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(0,212,200,0.3)";
                  (e.currentTarget as HTMLAnchorElement).style.background = "rgba(0,212,200,0.04)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.06)";
                  (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.01)";
                }}
              >
                <contact.Icon className="w-7 h-7 mb-3" style={{ color: CYAN }} />
                <h3 className="font-black text-xs uppercase tracking-wider mb-1">{contact.title}</h3>
                <p className="text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>{contact.desc}</p>
              </a>
            ))}
          </div>

          {/* CTA principal */}
          <a
            href={WA_MSG("Hola! Quiero mi SekreBot 🤖 ¿Por dónde empezamos?")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 font-black text-sm px-12 py-5 uppercase tracking-widest transition-all duration-300"
            style={{
              background: CYAN,
              color: "#000",
              boxShadow: "0 0 30px rgba(0,212,200,0.35), 0 4px 20px rgba(0,212,200,0.2)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                "0 0 60px rgba(0,212,200,0.55), 0 4px 40px rgba(0,212,200,0.3)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                "0 0 30px rgba(0,212,200,0.35), 0 4px 20px rgba(0,212,200,0.2)";
            }}
          >
            <MessageCircle className="w-5 h-5" />
            Escribir al WhatsApp
            <ArrowRight className="w-4 h-4" />
          </a>
          <p className="text-sm mt-5" style={{ color: "rgba(255,255,255,0.35)" }}>
            +56 9 6392 6061 · Respuesta en minutos
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          FOOTER
      ════════════════════════════════════════════════ */}
      <footer
        className="py-12 px-6 sm:px-8"
        style={{ borderTop: "1px solid rgba(255,255,255,0.06)", background: "#000" }}
      >
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-6">
            <Link href="/">
              <span
                className="text-2xl font-bold"
                style={{ color: CYAN, fontFamily: "var(--font-raleway), sans-serif" }}
              >
                SekreBot
              </span>
            </Link>
            <p
              className="text-[10px] font-light uppercase mt-1"
              style={{ letterSpacing: "5px", color: "rgba(255,255,255,0.4)" }}
            >
              Tu asistente IA
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 mb-8 text-[11px] tracking-widest uppercase">
            {NAV_LINKS.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="transition-colors"
                style={{ color: "rgba(255,255,255,0.35)" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = CYAN; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.35)"; }}
              >
                {label}
              </a>
            ))}
            <Link href="/privacidad" className="transition-colors" style={{ color: "rgba(255,255,255,0.35)" }}>
              Privacidad
            </Link>
            <Link href="/terminos" className="transition-colors" style={{ color: "rgba(255,255,255,0.35)" }}>
              Términos
            </Link>
          </div>

          <div
            className="pt-6 text-xs"
            style={{ borderTop: "1px solid rgba(255,255,255,0.04)", color: "rgba(255,255,255,0.2)" }}
          >
            © 2026 SekreBot. Todos los derechos reservados.
          </div>
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
        aria-label="Contactar por WhatsApp"
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

/* ────────────────────────────────────────────────────────────
   PRICING BOX — patrón Atlas pricing-box
──────────────────────────────────────────────────────────── */
interface PricingBoxProps {
  plan: PricingPlan;
  index: number;
}

function PricingBox({ plan, index }: PricingBoxProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative flex flex-col p-10 transition-all duration-300"
      style={{
        background: plan.popular ? "#111111" : "#0E0E0E",
        border: plan.popular
          ? `1px solid rgba(0,212,200,0.25)`
          : "1px solid rgba(255,255,255,0.06)",
        borderTop: hovered || plan.popular
          ? `3px solid ${CYAN}`
          : "3px solid rgba(230,230,230,0.08)",
        marginLeft: index > 0 ? -1 : 0,
        boxShadow: plan.popular ? "0 0 40px rgba(0,212,200,0.07)" : undefined,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {plan.popular && (
        <div
          className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-[10px] font-black px-4 py-1 whitespace-nowrap uppercase tracking-widest"
          style={{ background: CYAN, color: "#000" }}
        >
          Más popular
        </div>
      )}

      <div className="mb-6">
        <h3
          className="font-black text-base uppercase tracking-wide mb-1"
          style={{ fontFamily: "var(--font-raleway), sans-serif" }}
        >
          {plan.name}
        </h3>
        <p className="text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>{plan.spec}</p>
      </div>

      <div className="mb-8">
        <span
          className="block"
          style={{
            fontFamily: "var(--font-oswald), var(--font-inter), sans-serif",
            fontSize: "62px",
            fontWeight: 600,
            color: "#fff",
            lineHeight: 1,
          }}
        >
          ${plan.price}
        </span>
        <span className="text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>CLP</span>
      </div>

      <ul className="space-y-4 mb-10 flex-1">
        {plan.features.map((f) => (
          <li key={f} className="flex items-center gap-3 text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
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
            : {
                border: "1px solid rgba(255,255,255,0.10)",
                color: hovered ? CYAN : "#fff",
                background: "transparent",
              }
        }
      >
        <MessageCircle className="w-4 h-4" />
        Lo quiero
      </a>
    </div>
  );
}
