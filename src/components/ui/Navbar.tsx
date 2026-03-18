"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const WA_LINK = "https://wa.me/56963926061";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#caracteristicas", label: "Características" },
    { href: "#planes", label: "Precios" },
    { href: "#cobertura", label: "Cobertura" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0f1e]/90 backdrop-blur-xl border-b border-[#1f2937] shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 text-[#f9fafb] font-bold text-xl">
          <span>SekreBot</span>
          <span>🤖</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#9ca3af] hover:text-[#f9fafb] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA + mobile menu */}
        <div className="flex items-center gap-3">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 bg-[#6366f1] hover:bg-[#4f52d4] text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-all duration-200 hover:-translate-y-0.5"
          >
            Lo quiero
          </a>
          <button
            className="md:hidden text-[#9ca3af] hover:text-[#f9fafb] transition-colors p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#111827] border-t border-[#1f2937] px-4 pb-4">
          <div className="flex flex-col gap-4 pt-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-[#9ca3af] hover:text-[#f9fafb] font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#6366f1] hover:bg-[#4f52d4] text-white font-semibold px-5 py-3 rounded-lg transition-colors mt-2"
            >
              Lo quiero
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
