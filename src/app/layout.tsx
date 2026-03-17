import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export const metadata: Metadata = {
  metadataBase: new URL("https://aurabot.cl"),
  title: {
    default: "AuraBot — Tu asistente de IA personal con Mac Mini en Chile",
    template: "%s | AuraBot",
  },
  description:
    "AuraBot te entrega un Mac Mini con OpenClaw preconfigurado: tu asistente de IA personal listo para usarlo en casa o negocio. Envíos a regiones IV–VIII de Chile.",
  keywords: [
    "asistente IA Chile",
    "Mac Mini IA",
    "OpenClaw Chile",
    "inteligencia artificial Chile",
    "asistente virtual Chile",
    "AuraBot",
    "Mac Mini OpenClaw",
  ],
  authors: [{ name: "AuraBot", url: "https://aurabot.cl" }],
  creator: "AuraBot",
  publisher: "AuraBot",
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "https://aurabot.cl",
    siteName: "AuraBot",
    title: "AuraBot — Tu asistente de IA personal con Mac Mini en Chile",
    description:
      "Mac Mini + OpenClaw preconfigurado. Tu asistente de IA personal listo para usarlo desde el primer día. Envíos a regiones IV–VIII.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AuraBot — Asistente de IA personal en Chile",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AuraBot — Tu asistente de IA personal con Mac Mini en Chile",
    description:
      "Mac Mini + OpenClaw preconfigurado. Tu asistente de IA listo desde el primer día.",
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
    canonical: "https://aurabot.cl",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
