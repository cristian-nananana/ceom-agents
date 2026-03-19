import { createHash } from "crypto";

export const POLICY_VERSION = "v1.0-2026-03-18";

export const POLICY_TEXT = `
SekreBot Política de Privacidad v1.0-2026-03-18:
Los datos personales son tratados por SekreBot conforme a la Ley 19.628 de Chile.
Finalidad: procesar pedidos, coordinar envíos, gestionar suscripciones, y enviar comunicaciones comerciales propias.
Tus datos NO serán vendidos ni cedidos a terceros bajo ninguna circunstancia.
Derechos ARCO: acceso, rectificación, cancelación, oposición. Contacto: hola@sekrebot.cl
`.trim();

export const POLICY_HASH = createHash("sha256")
  .update(POLICY_TEXT)
  .digest("hex");
