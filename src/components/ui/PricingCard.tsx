"use client";

import Link from "next/link";
import { Check, MessageCircle } from "lucide-react";

const WA_LINK = "https://wa.me/56963926061";

interface PricingCardProps {
  name: string;
  price: number;
  period?: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  badge?: string;
  ctaText?: string;
  ctaHref?: string;
}

function formatCLP(amount: number): string {
  return new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
    minimumFractionDigits: 0,
  }).format(amount);
}

export default function PricingCard({
  name,
  price,
  period,
  description,
  features,
  highlighted = false,
  badge,
  ctaText = "Lo quiero",
  ctaHref,
}: PricingCardProps) {
  const href =
    ctaHref ||
    `${WA_LINK}?text=Hola!%20Me%20interesa%20el%20plan%20${encodeURIComponent(name)}`;

  return (
    <div
      className={`relative rounded-2xl p-8 flex flex-col h-full transition-all duration-200 border ${
        highlighted
          ? "bg-gradient-to-b from-[#1e2347] to-[#111827] border-[#6366f1] shadow-2xl shadow-indigo-500/10 scale-105 ring-1 ring-[#6366f1]/50"
          : "bg-[#111827] border-white/10 shadow-md hover:shadow-xl hover:border-white/20"
      }`}
    >
      {/* Badge */}
      {badge && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="bg-[#6366f1] text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wide whitespace-nowrap shadow-lg shadow-indigo-500/30">
            {badge}
          </span>
        </div>
      )}

      {/* Plan name */}
      <div className="mb-4">
        <h3 className="text-xl font-bold text-[#f9fafb]">{name}</h3>
        <p className="text-sm mt-1 text-[#9ca3af]">{description}</p>
      </div>

      {/* Price */}
      <div className="mb-6">
        <div className="flex items-end gap-1">
          <span className="text-4xl font-bold text-[#f9fafb]">
            {formatCLP(price)}
          </span>
          {period && (
            <span className="text-sm mb-1 text-[#9ca3af]">/{period}</span>
          )}
        </div>
      </div>

      {/* Features */}
      <ul className="space-y-3 mb-8 flex-grow">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3">
            <Check
              className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                highlighted ? "text-[#6366f1]" : "text-[#6366f1]"
              }`}
            />
            <span className="text-sm text-[#9ca3af]">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-semibold transition-all duration-200 hover:-translate-y-0.5 ${
          highlighted
            ? "bg-[#6366f1] text-white hover:bg-[#4f52d4] shadow-lg shadow-indigo-500/20"
            : "bg-white/10 text-white hover:bg-white/20 border border-white/10"
        }`}
      >
        <MessageCircle className="w-4 h-4" />
        {ctaText}
      </Link>
    </div>
  );
}
