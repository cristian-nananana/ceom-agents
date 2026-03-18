"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Zap,
  Shield,
  MapPin,
  MessageCircle,
  Check,
  Cpu,
  Menu,
  X,
  ArrowRight,
  Lock,
  Headphones,
  Clock,
  RefreshCw,
  Wrench,
  GraduationCap,
  Package,
  Users,
  Star,
  Truck,
  BadgeCheck,
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

type IconType = React.ComponentType<{ className?: string; style?: React.CSSProperties }>;

interface PromoBand {
  Icon: IconType;
  title: string;
  desc: string;
}

interface StatItem {
  Icon: IconType;
  value: string;
  label: string;
}

interface FeatureBox {
  Icon: IconType;
  title: string;
  desc: string;
}

interface ServiceBox {
  Icon: IconType;
  title: string;
  desc: string;
}

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  stars: number;
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

/* ────────────────────────────────────────────────────────────
   DATA
──────────────────────────────────────────────────────────── */
const NAV_LINKS: NavLink[] = [
  { href: "#caracteristicas", label: "Características" },
  { href: "#precios", label: "Precios" },
  { href: "#cobertura", label: "Cobertura" },
  { href: "#contacto", label: "Contacto" },
];

const PROMO_BANDS: PromoBand[] = [
  {
    Icon: Zap,
    title: "Listo al Encender",
    desc: "OpenClaw preinstalado y calibrado. Conectas el cable y tu IA ya responde. Sin configuración técnica.",
  },
  {
    Icon: Headphones,
    title: "Soporte Humano Real",
    desc: "Una persona real responde en horas por WhatsApp. Sin tickets automáticos, sin chatbots, sin esperas.",
  },
  {
    Icon: Lock,
    title: "Privacidad Local",
    desc: "Tus datos corren en tu Mac Mini. No salen de tu red. Privacidad real, no un slogan de marketing.",
  },
];

const STATS: StatItem[] = [
  { Icon: Clock, value: "48h", label: "Tiempo de entrega" },
  { Icon: BadgeCheck, value: "100%", label: "Equipos probados" },
  { Icon: Package, value: "3", label: "Planes disponibles" },
  { Icon: Headphones, value: "24/7", label: "Soporte activo" },
];

const FEATURES: FeatureBox[] = [
  {
    Icon: Cpu,
    title: "IA Lista",
    desc: "OpenClaw preinstalado y calibrado para ti. Conectas el cable, enciendes y tu asistente ya responde.",
  },
  {
    Icon: Headphones,
    title: "Soporte Real",
    desc: "Una persona real al otro lado del WhatsApp. Respondemos en horas, no en tickets automatizados.",
  },
  {
    Icon: Shield,
    title: "Privacidad",
    desc: "Tu información corre localmente en tu Mac Mini. No sale de tu red. Privacidad real, sin marketing.",
  },
  {
    Icon: Zap,
    title: "Sin Técnicos",
    desc: "No necesitas saber de tecnología. Está todo configurado. Solo enciéndelo y comienza a trabajar.",
  },
];

const SERVICES: ServiceBox[] = [
  {
    Icon: Package,
    title: "Setup Completo",
    desc: "Instalación presencial de tu Mac Mini con SekreBot configurado para tu flujo de trabajo.",
  },
  {
    Icon: Wrench,
    title: "Configuración Remota",
    desc: "Ajustes y personalizaciones de manera remota sin que debas moverte de tu oficina.",
  },
  {
    Icon: MessageCircle,
    title: "Soporte WhatsApp",
    desc: "Canal directo para reportar problemas. Respuesta en horas por un técnico humano.",
  },
  {
    Icon: RefreshCw,
    title: "Actualizaciones",
    desc: "OpenClaw se actualiza automáticamente. Siempre tendrás las últimas funciones disponibles.",
  },
  {
    Icon: GraduationCap,
    title: "Capacitación",
    desc: "Sesión de onboarding incluida para que tú y tu equipo aprovechen SekreBot desde el día uno.",
  },
  {
    Icon: BadgeCheck,
    title: "Garantía Apple",
    desc: "Todos los equipos son Mac Mini originales con garantía oficial Apple de 1 año en Chile.",
  },
];

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "SekreBot cambió la forma en que trabajo. Ahorro más de dos horas al día redactando propuestas y gestionando emails. Increíble que todo corra en mi red sin subir nada a la nube.",
    name: "Carlos Fuentes",
    role: "Consultor Independiente, Santiago",
    stars: 5,
  },
  {
    quote:
      "El soporte es lo que más valoro. Te responde una persona real, no un bot. Cuando tuve un problema me llamaron en menos de una hora. Eso no tiene precio.",
    name: "María José Álvarez",
    role: "Dueña de PyME, Viña del Mar",
    stars: 5,
  },
  {
    quote:
      "Lo encendí y estaba listo. Cero configuración, cero complicaciones. Mi equipo lo adoptó en un día. La privacidad local fue el factor decisivo para nosotros.",
    name: "Rodrigo Peña",
    role: "Gerente Comercial, Concepción",
    stars: 5,
  },
];

const PRICING_PLANS: PricingPlan[] = [
  {
    name: "M4 Básico",
    spec: "16 GB · 256 GB",
    price: "839.990",
    features: ["IA personal lista al encender", "Soporte básico WhatsApp", "Setup presencial incluido", "Garantía Apple 1 año"],
    popular: false,
  },
  {
    name: "M4 Avanzado",
    spec: "24 GB · 512 GB",
    price: "1.079.990",
    features: ["Todo lo del plan Básico", "Mayor velocidad de IA", "Multitarea fluida", "Ideal para PyMEs"],
    popular: true,
  },
  {
    name: "M4 Pro",
    spec: "24 GB · 512 GB Pro",
    price: "1.679.990",
    features: ["Todo lo del plan Avanzado", "Máximo rendimiento IA", "Proyectos complejos", "Soporte prioritario"],
    popular: false,
  },
];

const SUB_PLANS: SubPlan[] = [
  {
    name: "Básico",
    price: "9.900",
    features: ["Actualizaciones automáticas", "Soporte WhatsApp 48h", "Nuevas funciones cada mes"],
    highlight: false,
  },
  {
    name: "Pro",
    price: "19.900",
    features: ["Todo del plan Básico", "Soporte 24h prioritario", "Sesión mensual 30 min"],
    highlight: true,
  },
  {
    name: "Negocio",
    price: "39.900",
    features: ["Todo del plan Pro", "Soporte mismo día", "Capacitación mensual 1h"],
    highlight: false,
  },
];

const COVERAGE: CoverageRegion[] = [
  { region: "IV Coquimbo", city: "La Serena", envio: "$70.000" },
  { region: "V Valparaíso", city: "Viña del Mar", envio: "$25.000" },
  { region: "RM Santiago", city: "Santiago", envio: "$15.000" },
  { region: "VI O'Higgins", city: "Rancagua", envio: "$20.000" },
  { region: "VII Maule", city: "Talca", envio: "$45.000" },
  { region: "VIII Biobío", city: "Concepción", envio: "$75.000" },
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

/** Ícono en borde cuadrado — patrón about-border Atlas */
function SquareIcon({ Icon }: { Icon: IconType }) {
  return (
    <div
      className="flex items-center justify-center mx-auto mb-5"
      style={{
        width: 64,
        height: 64,
        border: `1px solid rgba(0,212,200,0.35)`,
        background: "rgba(0,212,200,0.04)",
      }}
    >
      <Icon className="w-8 h-8" style={{ color: CYAN }} />
    </div>
  );
}

/** Ícono en borde diamante — patrón service-border Atlas */
function DiamondIcon({ Icon }: { Icon: IconType }) {
  return (
    <div
      className="relative flex items-center justify-center mx-auto mb-5"
      style={{
        width: 60,
        height: 60,
        border: `1px solid rgba(0,212,200,0.35)`,
        background: "rgba(0,212,200,0.04)",
        transform: "rotate(45deg)",
      }}
    >
      <Icon
        className="w-6 h-6"
        style={{ color: CYAN, transform: "rotate(-45deg)" }}
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
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Auto-rotate testimonials */
  useEffect(() => {
    const t = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <div
      className="min-h-screen text-white"
      style={{ background: "#0A0A0A", fontFamily: "var(--font-raleway), var(--font-inter), sans-serif" }}
    >

      {/* ════════════════════════════════════════════════
          NAVBAR — estilo Atlas: transparente → fijo negro
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

          {/* Logo — .navbar-brand estilo Atlas */}
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

          {/* Desktop links */}
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

          {/* CTA + hamburger */}
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

        {/* Mobile menu */}
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
          HERO — fullscreen, patrón Atlas slider overlay
      ════════════════════════════════════════════════ */}
      <section
        className="relative flex flex-col items-center justify-center text-center px-6 sm:px-8"
        style={{ minHeight: "100vh" }}
      >
        {/* Ambient radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 35%, rgba(0,212,200,0.07) 0%, transparent 60%), #0A0A0A",
          }}
        />

        {/* Content */}
        <div className="relative z-10 w-full max-w-4xl mx-auto pt-24 pb-8">
          {/* Hr superior — patrón Atlas */}
          <div className="w-16 h-[2px] mx-auto mb-8" style={{ background: CYAN }} />

          <h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase leading-[1.0] tracking-tight"
            style={{ fontFamily: "var(--font-raleway), sans-serif" }}
          >
            <span className="block text-white">Tu Secretario IA</span>
            <span className="block" style={{ color: CYAN }}>Personal.</span>
          </h1>

          {/* Hr inferior — patrón Atlas */}
          <div className="w-16 h-[2px] mx-auto mt-8 mb-7" style={{ background: CYAN }} />

          <p
            className="text-[11px] uppercase font-semibold tracking-[0.25em] mb-12"
            style={{ color: "rgba(255,255,255,0.55)" }}
          >
            Mac Mini con IA preinstalada&nbsp;·&nbsp;Entrega en 48H&nbsp;·&nbsp;Soporte real
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <a
              href="#precios"
              className="inline-flex items-center gap-2 text-[11px] font-black px-10 py-4 w-full sm:w-auto justify-center uppercase tracking-widest transition-all duration-200"
              style={{ border: `1px solid ${CYAN}`, color: CYAN, background: "transparent" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(0,212,200,0.10)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "transparent"; }}
            >
              Ver Precios <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="#caracteristicas"
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
          BRAND PROMOTION BAR — .brand-content patrón Atlas
          Fondo cyan sólido, texto negro, 3 columnas
      ════════════════════════════════════════════════ */}
      <section style={{ background: "rgba(0,212,200,0.9)" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3">
          {PROMO_BANDS.map((band, i) => (
            <div
              key={band.title}
              className="flex flex-col sm:flex-row items-start gap-5 p-8 sm:p-10"
              style={{
                padding: "30px 32px",
                borderLeft: i > 0 ? "1px solid rgba(0,0,0,0.12)" : undefined,
              }}
            >
              <div className="flex-shrink-0">
                <band.Icon className="w-12 h-12" style={{ color: "#000" }} />
              </div>
              <div>
                <h3
                  className="font-black text-base uppercase tracking-wide mb-2"
                  style={{ color: "#000", fontFamily: "var(--font-raleway), sans-serif" }}
                >
                  {band.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(0,0,0,0.65)" }}>
                  {band.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          STATS — count_parallax patrón Atlas
          Fondo oscuro con overlay, íconos + números grandes
      ════════════════════════════════════════════════ */}
      <section
        className="relative py-24"
        style={{ background: "#0D0D0D" }}
      >
        {/* Overlay semitransparente patrón Atlas */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "rgba(0,0,0,0.45)" }}
        />
        <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-4 text-center">
            {STATS.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center">
                {/* fa-3x equivalente: w-10 h-10 */}
                <stat.Icon className="w-10 h-10 mb-4" style={{ color: "#fff", fontSize: 65 }} />
                <span
                  className="block mb-2"
                  style={{
                    fontFamily: "var(--font-oswald), var(--font-inter), sans-serif",
                    fontSize: "56px",
                    fontWeight: 400,
                    color: "#fff",
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </span>
                <span
                  className="text-xs uppercase tracking-[0.15em]"
                  style={{ color: "rgba(255,255,255,0.55)" }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          FEATURES — about-boxes patrón Atlas
          Ícono en borde cuadrado + título + descripción
      ════════════════════════════════════════════════ */}
      <section
        id="caracteristicas"
        className="py-24 sm:py-32 px-6 sm:px-8"
        style={{ background: "#0A0A0A" }}
      >
        <div className="max-w-5xl mx-auto">
          <SectionTitle
            eyebrow="Funciones"
            title="¿Por qué SekreBot?"
            subtitle="Tu IA personal, lista al encender"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 text-center">
            {FEATURES.map((feat) => (
              <div key={feat.title} className="flex flex-col items-center">
                {/* about-border patrón Atlas */}
                <SquareIcon Icon={feat.Icon} />
                <h3
                  className="font-black text-sm uppercase tracking-wider mb-3 text-white"
                  style={{ fontFamily: "var(--font-raleway), sans-serif" }}
                >
                  {feat.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Separator */}
      <div className="h-px" style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.05), transparent)" }} />

      {/* ════════════════════════════════════════════════
          SERVICIOS — service-border patrón Atlas
          Ícono en diamante (borde rotado 45°)
      ════════════════════════════════════════════════ */}
      <section
        className="py-24 sm:py-32 px-6 sm:px-8"
        style={{ background: "#111111" }}
      >
        <div className="max-w-5xl mx-auto">
          <SectionTitle
            eyebrow="Servicios"
            title="Todo lo que incluye"
            subtitle="Desde el setup hasta el soporte continuo"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-14 text-center">
            {SERVICES.map((svc) => (
              <div key={svc.title} className="flex flex-col items-center">
                {/* service-border diamante patrón Atlas */}
                <DiamondIcon Icon={svc.Icon} />
                <h3
                  className="font-black text-sm uppercase tracking-wider mb-3 text-white"
                  style={{ fontFamily: "var(--font-raleway), sans-serif" }}
                >
                  {svc.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                  {svc.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Separator */}
      <div className="h-px" style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.05), transparent)" }} />

      {/* ════════════════════════════════════════════════
          TESTIMONIALS — carousel patrón Atlas
      ════════════════════════════════════════════════ */}
      <section
        className="py-24 sm:py-32 px-6 sm:px-8"
        style={{ background: "#111111" }}
      >
        <div className="max-w-5xl mx-auto">
          <SectionTitle
            eyebrow="Clientes"
            title="Lo que dicen nuestros clientes"
            subtitle="Personas reales, resultados reales"
          />

          {/* Testimonial activo */}
          <div className="max-w-2xl mx-auto text-center mb-10">
            <div className="flex justify-center gap-1 mb-6">
              {Array.from({ length: TESTIMONIALS[activeTestimonial].stars }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" style={{ color: CYAN }} />
              ))}
            </div>
            <blockquote
              className="text-base sm:text-lg leading-relaxed mb-6"
              style={{ color: "rgba(255,255,255,0.75)", fontStyle: "italic" }}
            >
              &ldquo;{TESTIMONIALS[activeTestimonial].quote}&rdquo;
            </blockquote>
            <div className="w-8 h-[1px] mx-auto mb-4" style={{ background: CYAN }} />
            <p className="font-black text-sm uppercase tracking-wider text-white">
              {TESTIMONIALS[activeTestimonial].name}
            </p>
            <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.45)" }}>
              {TESTIMONIALS[activeTestimonial].role}
            </p>
          </div>

          {/* Dots navigator */}
          <div className="flex justify-center gap-3">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveTestimonial(i)}
                aria-label={`Testimonio ${i + 1}`}
                className="transition-all duration-300"
                style={{
                  width: i === activeTestimonial ? 24 : 8,
                  height: 8,
                  background: i === activeTestimonial ? CYAN : "rgba(255,255,255,0.2)",
                  border: "none",
                  cursor: "pointer",
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Separator */}
      <div className="h-px" style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.05), transparent)" }} />

      {/* ════════════════════════════════════════════════
          PRECIOS HARDWARE — dark-wrapper patrón Atlas
          .pricing-box: border-top + hover cyan
          .price-value: font-size 62px, weight 600
      ════════════════════════════════════════════════ */}
      <section
        id="precios"
        className="py-24 sm:py-32 px-6 sm:px-8"
        style={{ background: "#0A0A0A" }}
      >
        <div className="max-w-5xl mx-auto">
          <SectionTitle
            eyebrow="Planes"
            title="Elige tu equipo"
            subtitle="Mac Mini + SekreBot instalado · Entrega e instalación incluidas"
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
          SUSCRIPCIÓN MENSUAL
      ════════════════════════════════════════════════ */}
      <section
        className="py-24 sm:py-32 px-6 sm:px-8"
        style={{ background: "#0D0D0D" }}
      >
        <div className="max-w-5xl mx-auto">
          <SectionTitle
            eyebrow="Soporte mensual"
            title="Mantén tu IA actualizada"
            subtitle="Actualizaciones continuas, soporte real y nuevas funciones cada mes"
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
        </div>
      </section>

      {/* Separator */}
      <div className="h-px" style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.05), transparent)" }} />

      {/* ════════════════════════════════════════════════
          COBERTURA — grid 2x3
      ════════════════════════════════════════════════ */}
      <section
        id="cobertura"
        className="py-24 sm:py-32 px-6 sm:px-8"
        style={{ background: "#0A0A0A" }}
      >
        <div className="max-w-5xl mx-auto">
          <SectionTitle
            eyebrow="Cobertura"
            title="Entrega regional"
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
          CONTACTO / CTA FINAL — patrón Atlas contact
          3 boxes de contacto + botón CTA grande
      ════════════════════════════════════════════════ */}
      <section
        id="contacto"
        className="py-24 sm:py-32 px-6 sm:px-8 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0A0A0A 0%, #0D1A1A 50%, #0A0A0A 100%)" }}
      >
        {/* Ambient glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 50% 100%, rgba(0,212,200,0.06) 0%, transparent 55%)" }}
        />

        <div className="relative z-10 max-w-5xl mx-auto">
          <SectionTitle
            eyebrow="Empieza hoy"
            title="¿Listo para tu Asistente IA?"
            subtitle="Entrega en 48 horas · Instalación incluida · Soporte real"
          />

          {/* 3 contact boxes — patrón Atlas */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-16">
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
                {...(contact.isExternal
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="flex flex-col items-center text-center p-8 transition-all duration-300"
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
                <contact.Icon className="w-8 h-8 mb-4" style={{ color: CYAN }} />
                <h3
                  className="font-black text-sm uppercase tracking-wider mb-2"
                  style={{ fontFamily: "var(--font-raleway), sans-serif" }}
                >
                  {contact.title}
                </h3>
                <p className="text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>{contact.desc}</p>
              </a>
            ))}
          </div>

          {/* CTA centrado */}
          <div className="text-center">
            <a
              href={WA_MSG("Hola! Quiero pedir mi SekreBot 🤖 ¿Cuál me recomiendas para empezar?")}
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
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          FOOTER — patrón Atlas: logo + links + copyright
      ════════════════════════════════════════════════ */}
      <footer
        className="py-12 px-6 sm:px-8"
        style={{ borderTop: "1px solid rgba(255,255,255,0.06)", background: "#000" }}
      >
        <div className="max-w-5xl mx-auto text-center">
          {/* Logo centrado */}
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

          {/* Social / nav links */}
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
            <Link
              href="/privacidad"
              className="transition-colors"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
              Privacidad
            </Link>
            <Link
              href="/terminos"
              className="transition-colors"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
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
   border-top: 1px solid #E6E6E6, hover → cyan
   .price-value: font-size 62px, weight 600
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

      {/* .price-value: font-size 62px, weight 600 */}
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
