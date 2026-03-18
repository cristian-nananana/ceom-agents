import Link from "next/link";

export const metadata = {
  title: "Términos de Uso | SekreBot",
  description: "Términos y condiciones de uso del servicio SekreBot.",
};

export default function TerminosPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-[#1a2744] mb-2">Términos de Uso</h1>
      <p className="text-gray-500 text-sm mb-10">Última actualización: marzo de 2026</p>

      <div className="space-y-8">
        <section>
          <h2 className="text-xl font-semibold text-[#1a2744]">1. Aceptación de los términos</h2>
          <p className="text-gray-600 mt-2">
            Al acceder y utilizar el sitio web de SekreBot (sekrebot.cl) y sus servicios asociados,
            aceptas quedar vinculado por los presentes Términos de Uso. Si no estás de acuerdo con
            alguno de estos términos, te pedimos que no uses nuestros servicios.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#1a2744]">2. Descripción del servicio</h2>
          <p className="text-gray-600 mt-2">
            SekreBot comercializa equipos Mac Mini con el software OpenClaw preinstalado y
            configurado, junto con planes de suscripción mensual para mantener el sistema actualizado.
            Los envíos se realizan a las regiones IV, V, VI, VII, VIII y Metropolitana de Chile.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#1a2744]">3. Compras y pagos</h2>
          <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
            <li>Todos los precios están expresados en pesos chilenos (CLP) e incluyen IVA.</li>
            <li>Las compras se coordinan directamente vía WhatsApp (+56 9 6392 6061).</li>
            <li>Sujeto a disponibilidad de stock al momento del pedido.</li>
            <li>SekreBot se reserva el derecho de cancelar pedidos ante errores de precio manifiestos.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#1a2744]">4. Envíos y entregas</h2>
          <p className="text-gray-600 mt-2">
            Los plazos de entrega son estimados y pueden variar según la región y disponibilidad del
            transportista. SekreBot no se responsabiliza por retrasos causados por factores externos
            (clima, feriados, transportistas terceros).
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#1a2744]">5. Suscripción mensual</h2>
          <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
            <li>Sin contrato de permanencia. Puedes cancelar cuando quieras.</li>
            <li>El primer mes es gratuito con la compra de cualquier equipo.</li>
            <li>La cancelación debe solicitarse antes del próximo ciclo de facturación.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#1a2744]">6. Limitación de responsabilidad</h2>
          <p className="text-gray-600 mt-2">
            SekreBot no se responsabiliza por daños indirectos, pérdida de datos o lucro cesante
            derivados del uso o imposibilidad de uso del servicio. La responsabilidad máxima de
            SekreBot está limitada al monto pagado por el cliente en los últimos 12 meses.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#1a2744]">7. Propiedad intelectual</h2>
          <p className="text-gray-600 mt-2">
            El contenido de este sitio web (textos, imágenes, diseño) es propiedad de SekreBot y
            está protegido por las leyes de propiedad intelectual de Chile. Queda prohibida su
            reproducción sin autorización expresa.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#1a2744]">8. Ley aplicable</h2>
          <p className="text-gray-600 mt-2">
            Estos términos se rigen por las leyes de la República de Chile. Cualquier controversia
            será sometida a la jurisdicción de los tribunales ordinarios de justicia de Santiago.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#1a2744]">9. Contacto</h2>
          <p className="text-gray-600 mt-2">
            Para consultas sobre estos términos:{" "}
            <a href="mailto:hola@sekrebot.cl" className="text-[#e8533a] underline">
              hola@sekrebot.cl
            </a>{" "}
            | WhatsApp: +56 9 6392 6061
          </p>
        </section>
      </div>

      <div className="mt-12 pt-8 border-t border-gray-200">
        <Link href="/" className="text-[#e8533a] hover:underline">
          ← Volver al inicio
        </Link>
      </div>
    </main>
  );
}
