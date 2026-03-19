/**
 * Rate limiter en memoria simple.
 * Ventana: 1 hora | Máximo: 5 requests por IP
 *
 * NOTA: funciona para instancias únicas (single-process).
 * Para multi-instancia (Vercel serverless) considerar Redis/Upstash.
 */

const WINDOW_MS = 60 * 60 * 1000; // 1 hora
const MAX_REQUESTS = 5;

const store = new Map<string, number[]>();

export function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowStart = now - WINDOW_MS;

  const timestamps = (store.get(ip) ?? []).filter((t) => t > windowStart);

  if (timestamps.length >= MAX_REQUESTS) {
    return false; // bloqueado
  }

  timestamps.push(now);
  store.set(ip, timestamps);
  return true; // permitido
}
