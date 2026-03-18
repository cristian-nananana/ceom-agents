import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "SekreBot",
  url: "https://sekrebot.cl",
  logo: "https://sekrebot.cl/logo.png",
  image: "https://sekrebot.cl/og-image.png",
  description:
    "Mac Mini con inteligencia artificial preinstalada y lista para usar. Tu secretario IA personal en Chile. Sin tecnicismos. Con soporte real.",
  telephone: "+56963926061",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+56963926061",
    contactType: "customer support",
    availableLanguage: "Spanish",
    contactOption: "TollFree",
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "CL",
    addressRegion: "Región Metropolitana",
  },
  areaServed: [
    { "@type": "AdministrativeArea", name: "Región Metropolitana, Chile" },
    { "@type": "AdministrativeArea", name: "Región de Valparaíso, Chile" },
    { "@type": "AdministrativeArea", name: "Región de O'Higgins, Chile" },
    { "@type": "AdministrativeArea", name: "Región del Maule, Chile" },
    { "@type": "AdministrativeArea", name: "Región del Biobío, Chile" },
    { "@type": "AdministrativeArea", name: "Región de Coquimbo, Chile" },
  ],
  sameAs: ["https://wa.me/56963926061"],
  priceRange: "$$",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    opens: "09:00",
    closes: "18:00",
  },
  offers: {
    "@type": "Offer",
    name: "SekreBot — Mac Mini con IA personal",
    description:
      "Mac Mini con OpenClaw preinstalado y configurado. Tu asistente IA personal listo para usar.",
    url: "https://sekrebot.cl",
    priceCurrency: "CLP",
    eligibleRegion: {
      "@type": "Country",
      name: "Chile",
    },
  },
};

export const metadata: Metadata = {
  metadataBase: new URL("https://sekrebot.cl"),
  title: {
    default: "SekreBot — Tu secretario IA personal | Chile",
    template: "%s | SekreBot",
  },
  description:
    "Mac Mini con inteligencia artificial preinstalada y lista para usar. Tu secretario IA personal en Chile. Sin tecnicismos. Soporte real. Envíos a regiones IV–VIII en 48 horas.",
  keywords: [
    "secretario IA Chile",
    "asistente IA Chile",
    "Mac Mini IA",
    "inteligencia artificial Chile",
    "asistente virtual hogar",
    "SekreBot",
    "IA personal Chile",
    "automatización negocios Chile",
    "OpenClaw Chile",
    "IA local privada",
  ],
  authors: [{ name: "SekreBot", url: "https://sekrebot.cl" }],
  creator: "SekreBot",
  publisher: "SekreBot",
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "https://sekrebot.cl",
    siteName: "SekreBot",
    title: "SekreBot — Tu secretario IA personal | Chile",
    description:
      "Mac Mini con IA preinstalada. Sin tecnicismos. Con soporte real. Entrega en 48h. Tu asistente IA personal en casa.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SekreBot — Secretario IA personal en Chile",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SekreBot — Tu secretario IA personal | Chile",
    description:
      "Mac Mini con IA preinstalada. Sin tecnicismos. Con soporte real. Entrega en 48h.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://sekrebot.cl",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}
      </head>
      <body
        className={`${inter.variable} antialiased bg-[#0a0f1e] text-[#f9fafb]`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
