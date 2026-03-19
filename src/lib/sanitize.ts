/**
 * Sanitiza un string de usuario eliminando HTML, scripts y caracteres peligrosos.
 * Protege contra XSS básico.
 */
export function sanitize(input: string, maxLength = 500): string {
  if (typeof input !== "string") return "";

  return input
    .slice(0, maxLength)
    // Eliminar tags HTML
    .replace(/<[^>]*>/g, "")
    // Eliminar entidades HTML peligrosas
    .replace(/&(lt|gt|amp|quot|apos|#\d+|#x[\da-fA-F]+);/gi, "")
    // Eliminar caracteres de control
    .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, "")
    // Eliminar atributos de eventos JS (onclick, onerror, etc.)
    .replace(/on\w+\s*=/gi, "")
    // Eliminar javascript: protocol
    .replace(/javascript\s*:/gi, "")
    .trim();
}
