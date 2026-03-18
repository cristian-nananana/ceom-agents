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
  metadataBase: new URL("https://sekrebot.cl"),
  title: {
    default: "SekreBot — Tu secretario IA personal. En tu casa. Hoy.",
    template: "%s | SekreBot",
  },
  description:
    "Mac Mini con inteligencia artificial preinstalada y lista para usar. Sin tecnicismos. Con soporte real. Envíos a regiones IV–VIII de Chile en 48 horas.",
  keywords: [
    "secretario IA Chile",
    "asistente IA Chile",
    "Mac Mini IA",
    "inteligencia artificial Chile",
    "asistente virtual hogar",
    "SekreBot",
    "IA personal Chile",
    "automatización negocios Chile",
  ],
  authors: [{ name: "SekreBot", url: "https://sekrebot.cl" }],
  creator: "SekreBot",
  publisher: "SekreBot",
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "https://sekrebot.cl",
    siteName: "SekreBot",
    title: "SekreBot — Tu secretario IA personal. En tu casa. Hoy.",
    description:
      "Mac Mini con inteligencia artificial preinstalada y lista para usar. Sin tecnicismos. Con soporte real. Envíos en 48h.",
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
    title: "SekreBot — Tu secretario IA personal. En tu casa. Hoy.",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0a0f1e] text-[#f9fafb]`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
