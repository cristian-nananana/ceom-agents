import Hero from "@/components/ui/Hero";
import PricingCard from "@/components/ui/PricingCard";
import FAQ from "@/components/ui/FAQ";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import {
  Package,
  Settings,
  Smile,
  MapPin,
  Mail,
  Instagram,
  Twitter,
  MessageCircle,
} from "lucide-react";

const WA_LINK = "https://wa.me/56963926061";

// ─── Data ──────────────────────────────────────────────────────────────────────

const hardwarePlans = [
  {
    name: "Mac Mini M4 Básico",
    price: 839990,
    description: "Ideal para uso personal y hogar",
    features: [
      "Mac Mini M4 (16GB RAM / 256GB SSD)",
      "OpenClaw preinstalado y configurado",
      "Cable de alimentación incluido",
      "Guía de inicio rápido en español",
      "Soporte por WhatsApp (30 días)",
      "Envío gratuito en RM",
    ],
    ctaText: "Consultar disponibilidad",
  },
  {
    name: "Mac Mini M4 Avanzado",
    price: 1079990,
    description: "Para profesionales y emprendedores",
    features: [
      "Mac Mini M4 (24GB RAM / 512GB SSD)",
      "OpenClaw preinstalado y configurado",
      "Configuración personalizada incluida",
      "Soporte prioritario por WhatsApp (60 días)",
      "Capacitación inicial de 1 hora (videollamada)",
      "Envío gratuito a todo Chile (IV–VIII)",
    ],
    highlighted: true,
    badge: "Más popular",
    ctaText: "Lo quiero",
  },
  {
    name: "Mac Mini M4 Pro",
    price: 1679990,
    description: "Para equipos y negocios exigentes",
    features: [
      "Mac Mini M4 Pro (24GB RAM / 1TB SSD)",
      "OpenClaw Business preinstalado",
      "Configuración empresarial completa",
      "Integración con herramientas del negocio",
      "Soporte dedicado 90 días",
      "Capacitación del equipo (hasta 5 personas)",
      "Envío gratuito prioritario",
    ],
    ctaText: "Cotizar para mi empresa",
  },
];

const subscriptionPlans = [
  {
    name: "Básico",
    price: 9900,
    period: "mes",
    description: "Para comenzar con IA",
    features: [
      "Acceso a modelos de IA estándar",
      "Asistente personal 24/7",
      "Actualizaciones automáticas",
      "Soporte por email",
      "1 dispositivo",
    ],
  },
  {
    name: "Pro",
    price: 19900,
    period: "mes",
    description: "Para usuarios avanzados",
    features: [
      "Modelos de IA avanzados (GPT-4, Claude)",
      "Prioridad en respuestas",
      "Automatizaciones personalizadas",
      "Soporte prioritario WhatsApp",
      "Hasta 3 dispositivos",
      "Acceso a beta de nuevas funciones",
    ],
    highlighted: true,
    badge: "Recomendado",
  },
  {
    name: "Negocio",
    price: 39900,
    period: "mes",
    description: "Para equipos y empresas",
    features: [
      "Todo el plan Pro",
      "Modelos personalizados para tu negocio",
      "API access",
      "Dashboard de uso del equipo",
      "Dispositivos ilimitados",
      "SLA de respuesta garantizado",
      "Factura electrónica",
    ],
  },
];

const regions = [
  { name: "Región Metropolitana", shipping: "Envío gratuito", time: "1–3 días" },
  { name: "Región de Valparaíso (V)", shipping: "$4.990", time: "2–4 días" },
  { name: "Región de O'Higgins (VI)", shipping: "$4.990", time: "2–4 días" },
  { name: "Región del Maule (VII)", shipping: "$6.990", time: "3–5 días" },
  { name: "Región del Biobío (VIII)", shipping: "$6.990", time: "3–5 días" },
  { name: "Región de Coquimbo (IV)", shipping: "$6.990", time: "4–7 días" },
];

const steps = [
  {
    icon: <Package className="w-8 h-8 text-[#e8533a]" />,
    step: "01",
    title: "Elige tu plan",
    desc: "Selecciona el Mac Mini que mejor se adapta a tus necesidades y presupuesto.",
  },
  {
    icon: <Settings className="w-8 h-8 text-[#e8533a]" />,
    step: "02",
    title: "Lo preparamos para ti",
    desc: "Instalamos y configuramos OpenClaw en tu Mac Mini antes de enviarlo. Llega listo.",
  },
  {
    icon: <Smile className="w-8 h-8 text-[#e8533a]" />,
    step: "03",
    title: "Enchúfalo y empieza",
    desc: "Conectas a tu televisor o monitor, enciendes y ya tienes tu asistente de IA personal.",
  },
];

// ─── Sections ──────────────────────────────────────────────────────────────────

function HowItWorks() {
  return (
    <section id="como-funciona" className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="section-title mb-4">¿Cómo funciona?</h2>
          <p className="section-subtitle">
            En tres simples pasos tienes tu asistente de IA personal funcionando.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <div key={i} className="text-center">
              <div className="relative inline-flex items-center justify-center w-20 h-20 bg-[#1a2744]/5 rounded-2xl mb-6 mx-auto">
                {s.icon}
                <span className="absolute -top-2 -right-2 bg-[#1a2744] text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
                  {s.step}
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#1a2744] mb-2">
                {s.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HardwarePlans() {
  return (
    <section id="planes" className="py-20 px-4 bg-[#f8f7f4]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="section-title mb-4">Planes de hardware</h2>
          <p className="section-subtitle">
            Todos los equipos incluyen OpenClaw preinstalado. Elige según tus
            necesidades.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {hardwarePlans.map((plan, i) => (
            <PricingCard key={i} {...plan} />
          ))}
        </div>

        <p className="text-center text-sm text-gray-400 mt-8">
          * Precios en pesos chilenos (CLP). IVA incluido. Sujeto a disponibilidad de stock.
        </p>
      </div>
    </section>
  );
}

function SubscriptionPlans() {
  return (
    <section id="suscripcion" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="section-title mb-4">Suscripción mensual</h2>
          <p className="section-subtitle">
            Mantén tu asistente actualizado con los mejores modelos de IA del
            mercado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {subscriptionPlans.map((plan, i) => (
            <PricingCard key={i} {...plan} />
          ))}
        </div>

        <p className="text-center text-sm text-gray-400 mt-8">
          * Sin contrato. Cancela cuando quieras. Primer mes gratis con la compra de cualquier equipo.
        </p>
      </div>
    </section>
  );
}

function Coverage() {
  return (
    <section id="cobertura" className="py-20 px-4 bg-[#1a2744] text-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold mb-4">Zonas de cobertura</h2>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            Enviamos a las principales regiones de Chile central.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {regions.map((region, i) => (
            <div
              key={i}
              className="flex items-center gap-4 bg-white/10 border border-white/10 rounded-xl p-4 backdrop-blur-sm"
            >
              <MapPin className="w-5 h-5 text-[#e8533a] flex-shrink-0" />
              <div className="flex-grow">
                <div className="font-semibold text-sm">{region.name}</div>
                <div className="text-white/60 text-xs">{region.time}</div>
              </div>
              <div className="text-[#e8533a] font-bold text-sm whitespace-nowrap">
                {region.shipping}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-white/60 mb-4 text-sm">
            ¿No ves tu región? Escríbenos, podemos coordinar envíos especiales.
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#e8533a] text-white font-semibold px-6 py-3 rounded-xl hover:bg-[#d44428] transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            Consultar envío a mi región
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#0f1a2e] text-white py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-[#e8533a] mb-3">AuraBot</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Tu asistente de IA personal, hecho en Chile. Mac Mini + OpenClaw
              preconfigurado y listo para usarlo.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-3 text-white/90">Navegación</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li>
                <a href="#como-funciona" className="hover:text-white transition-colors">
                  Cómo funciona
                </a>
              </li>
              <li>
                <a href="#planes" className="hover:text-white transition-colors">
                  Planes de hardware
                </a>
              </li>
              <li>
                <a href="#suscripcion" className="hover:text-white transition-colors">
                  Suscripción
                </a>
              </li>
              <li>
                <a href="#cobertura" className="hover:text-white transition-colors">
                  Cobertura
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-3 text-white/90">Contacto</h4>
            <div className="space-y-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                +56 9 6392 6061 (WhatsApp)
              </a>
              <a
                href="mailto:hola@aurabot.cl"
                className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                hola@aurabot.cl
              </a>
              <div className="flex items-center gap-3 pt-1">
                <a
                  href="https://instagram.com/aurabot.cl"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://twitter.com/aurabotcl"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter / X"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/40">
          <p>© {new Date().getFullYear()} AuraBot. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <a href="/privacidad" className="hover:text-white/70 transition-colors">
              Política de privacidad
            </a>
            <a href="/terminos" className="hover:text-white/70 transition-colors">
              Términos de uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── Nav ──────────────────────────────────────────────────────────────────────

function Nav() {
  return (
    <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="/" className="text-[#1a2744] font-bold text-xl">
          Aura<span className="text-[#e8533a]">Bot</span>
        </a>

        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
          <a href="#como-funciona" className="hover:text-[#1a2744] transition-colors">
            Cómo funciona
          </a>
          <a href="#planes" className="hover:text-[#1a2744] transition-colors">
            Planes
          </a>
          <a href="#suscripcion" className="hover:text-[#1a2744] transition-colors">
            Suscripción
          </a>
          <a href="#faq" className="hover:text-[#1a2744] transition-colors">
            FAQ
          </a>
        </div>

        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary text-sm px-4 py-2"
        >
          <MessageCircle className="w-4 h-4" />
          Comprar
        </a>
      </div>
    </nav>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <HowItWorks />
        <HardwarePlans />
        <SubscriptionPlans />
        <Coverage />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
