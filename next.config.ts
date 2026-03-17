import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // For Cloudflare Pages static export
  output: "export",
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  // Trailing slash for Cloudflare Pages compatibility
  trailingSlash: true,
  // Environment variables exposed to the browser
  env: {
    NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID || "",
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL || "",
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "",
  },
};

export default nextConfig;
