declare global {
  interface Window {
    gtag: (command: string, ...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "";

/** Track a pageview */
export function pageview(url: string): void {
  if (typeof window === "undefined" || !GA_ID) return;
  if (typeof window.gtag !== "function") return;

  window.gtag("config", GA_ID, {
    page_path: url,
  });
}

interface GtagEvent {
  action: string;
  category?: string;
  label?: string;
  value?: number;
  [key: string]: unknown;
}

/** Track a custom event */
export function trackEvent({
  action,
  category,
  label,
  value,
  ...rest
}: GtagEvent): void {
  if (typeof window === "undefined" || !GA_ID) return;
  if (typeof window.gtag !== "function") return;

  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value,
    ...rest,
  });
}

// ─── Convenience helpers ─────────────────────────────────────────────────────

/** Track WhatsApp CTA click */
export function trackWhatsAppClick(source: string): void {
  trackEvent({
    action: "whatsapp_click",
    category: "engagement",
    label: source,
  });
}

/** Track plan view */
export function trackPlanView(planName: string): void {
  trackEvent({
    action: "view_item",
    category: "ecommerce",
    label: planName,
  });
}

/** Track plan select */
export function trackPlanSelect(planName: string, price: number): void {
  trackEvent({
    action: "select_item",
    category: "ecommerce",
    label: planName,
    value: price,
  });
}
