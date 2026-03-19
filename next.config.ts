import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // NOTE: "output: export" was removed to support:
  //   - API Routes (/api/register, /api/csrf)
  //   - Dynamic server-side pages (/pedido/[token])
  // Deploy to Vercel or any Node.js-compatible host (not Cloudflare Pages static).
  // For Cloudflare Pages, use @cloudflare/next-on-pages adapter instead.
  images: {
    unoptimized: true,
  },
  // Environment variables exposed to the browser
  env: {
    NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID || "",
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL || "",
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "",
  },
};

export default nextConfig;
