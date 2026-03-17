import Link from "next/link";

export const metadata = {
  title: "Política de Privacidad | AuraBot",
  description: "Política de privacidad y protección de datos de AuraBot conforme a la Ley 19.628 de Chile.",
};

export default function PrivacidadPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-[#1a2744] mb-2">Política de Privacidad</h1>
      <p className="text-gray-500 text-sm mb-10">Última actualización: marzo de 2026</p>

      <div className="space-y-8">
        <section>
          <h2 className="text-xl font-semibold text-[#1a2744]">1. Responsable del tratamiento</h2>
          <p className="text-gray-600 mt-2">
            AuraBot, con domicilio en Chile, es responsable del tratamiento de los datos personales
            recopilados a través de este sitio web, conforme a la Ley N° 19.628 sobre Protección de
            la Vida Privada.
          </p>
          <p className="text-gray-600 mt-2">
            Contacto:{" "}
            <a href="mailto:info@aurabot.cl" className="text-[#e8533a] underline">info@aurabot.cl</a>
            {" "}| WhatsApp: +56 9 6392 6061
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#1a2744]">2. Datos que recopilamos</h2>
          <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
            <li>Nombre y apellido (al contactarnos)</li>
            <li>Correo electrónico (para comunicaciones y soporte)</li>
            <li>Número de teléfono / WhatsApp (para coordinación de entrega y soporte)</li>
            <li>Región de Chile (para calcular costos de envío)</li>
            <li>Datos de navegación (cookies analíticas de Google Analytics 4)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#1a2744]">3. Finalidad del tratamiento</h2>
          <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
            <li>Procesar y gestionar tu pedido de Mac Mini + OpenClaw</li>
            <li>Coordinar la entrega del equipo a tu domicilio</li>
            <li>Gestionar tu suscripción mensual de soporte</li>
            <li>Enviar comunicaciones relacionadas con tu servicio</li>
            <li>Mejorar nuestro sitio web (datos anonimizados)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#1a2744]">4. Tus derechos (Ley 19.628)</h2>
          <p className="text-gray-600 mt-2">Como titular de datos tienes derecho a:</p>
          <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
            <li><strong>Acceso:</strong> conocer qué datos tenemos sobre ti</li>
            <li><strong>Rectificación:</strong> corregir datos incorrectos</li>
            <li><strong>Cancelación:</strong> solicitar la eliminación de tus datos</li>
            <li><strong>Oposición:</strong> oponerte al tratamiento de tus datos</li>
          </ul>
          <p className="text-gray-600 mt-2">
            Escríbenos a{" "}
            <a href="mailto:info@aurabot.cl" className="text-[#e8533a] underline">info@aurabot.cl</a>.
            Respondemos en máximo 10 días hábiles.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#1a2744]">5. Cookies</h2>
          <p className="text-gray-600 mt-2">
            Usamos Google Analytics 4 con datos anonimizados. Puedes desactivarlas en tu navegador
            sin que afecte la funcionalidad del sitio.
          </p>
        </section>
      </div>

      <div className="mt-12 pt-8 border-t border-gray-200">
        <Link href="/" className="text-[#e8533a] hover:underline">← Volver al inicio</Link>
      </div>
    </main>
  );
}
