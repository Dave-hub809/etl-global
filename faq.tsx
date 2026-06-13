import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Preguntas frecuentes sobre importar | ETL Global" },
      { name: "description", content: "Respuestas claras sobre importar desde China, validación de proveedores, costos, tiempos, exportaciones y operaciones de comercio exterior." },
      { property: "og:title", content: "Preguntas Frecuentes — ETL Global" },
      { property: "og:description", content: "Todo lo que necesitas saber antes de tu próxima importación." },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map(f => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }),
    }],
  }),
  component: FaqPage,
});

const faqs = [
  { q: "¿Puedo importar sin experiencia previa?", a: "Sí. Acompañamos a emprendedores desde el primer contenedor, explicando cada etapa y operando por ti." },
  { q: "¿Cómo verifican a los proveedores?", a: "Aplicamos auditorías legales, financieras y visitas presenciales a planta antes de cerrar la compra." },
  { q: "¿Importan maquinaria industrial?", a: "Sí. Operamos importaciones técnicas llave en mano con asesoría arancelaria especializada." },
  { q: "¿Cuánto cuesta importar desde China?", a: "El costo depende del producto, volumen, Incoterm y régimen aduanero. Calculamos el costo total real antes de avanzar." },
  { q: "¿Cuánto tarda una importación marítima?", a: "El tránsito típico China-Colombia es de 35 a 55 días, más producción y nacionalización." },
  { q: "¿Puedo importar pequeñas cantidades?", a: "Sí. Operamos consolidados LCL para importadores que aún no llenan un contenedor completo." },
  { q: "¿También ayudan con exportaciones?", a: "Sí. Identificamos compradores, estructuramos contratos y operamos toda la logística de exportación." },
  { q: "¿Trabajan con clientes fuera de Bogotá?", a: "Sí. Operamos en toda Colombia y LATAM con coordinación remota y entrega en cualquier ciudad." },
  { q: "¿Qué pasa si la mercancía llega defectuosa?", a: "Aplicamos inspección de calidad en origen y mediamos reclamos cuando es necesario." },
];

function FaqPage() {
  return (
    <>
      <section className="bg-hero text-white py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30" style={{ background: "var(--gradient-navy-glow)" }} />
        <div className="container-x relative max-w-4xl">
          <p className="text-gold text-sm uppercase tracking-widest font-semibold mb-4">Preguntas Frecuentes</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">Todo lo que necesitas saber antes de importar.</h1>
          <p className="text-lg text-silver/80 max-w-2xl">Respondemos con la misma claridad con la que operamos.</p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container-x max-w-4xl space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-navy-deep mb-4">Preguntas más comunes</h2>
          {faqs.map((f, i) => (
            <details key={i} className="group rounded-xl bg-card border border-border p-6 hover:border-gold/40 transition-colors">
              <summary className="flex justify-between items-center cursor-pointer font-semibold text-navy-deep list-none text-lg">
                {f.q}
                <span className="ml-4 text-gold group-open:rotate-45 transition-transform text-2xl shrink-0">+</span>
              </summary>
              <p className="text-muted-foreground mt-3 leading-relaxed">{f.a}</p>
            </details>
          ))}
          <div className="text-center pt-8">
            <p className="text-muted-foreground mb-4">¿Tu pregunta no está aquí?</p>
            <Link to="/contacto" className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-navy-deep text-white font-semibold hover:bg-navy">
              Escríbenos <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
