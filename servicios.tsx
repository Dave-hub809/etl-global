import { createFileRoute, Link } from "@tanstack/react-router";
import { Search, FileCheck2, Container, Truck, Globe2, Handshake, Compass, ArrowRight, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/servicios")({
  head: () => ({
    meta: [
      { title: "Servicios de Comercio Exterior | ETL Global" },
      { name: "description", content: "Consultoría en comercio exterior, sourcing en China, validación de proveedores, gestión de importaciones llave en mano y exportaciones desde Colombia." },
      { property: "og:title", content: "Servicios de Comercio Exterior — ETL Global" },
      { property: "og:description", content: "Operaciones internacionales de extremo a extremo." },
      { property: "og:url", content: "/servicios" },
    ],
    links: [{ rel: "canonical", href: "/servicios" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: "Comercio exterior, importaciones y exportaciones",
        provider: { "@type": "Organization", name: "ETL Global S.A.S." },
        areaServed: ["CO", "CN", "LATAM"],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Servicios ETL Global",
          itemListElement: [
            "Consultoría en Comercio Exterior",
            "Búsqueda de Proveedores Internacionales",
            "Validación de Proveedores",
            "Gestión de Importaciones",
            "Importación Llave en Mano",
            "Exportaciones",
            "Intermediación Comercial",
          ].map(name => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
        },
      }),
    }],
  }),
  component: ServicesPage,
});

const services = [
  {
    id: "consultoria-comercio-exterior",
    icon: Compass, t: "Consultoría en Comercio Exterior",
    problem: "No sabes si tu producto es viable de importar o cómo estructurar la operación.",
    solution: "Diagnóstico técnico, arancelario y financiero antes de invertir un peso.",
    benefits: ["Viabilidad real del negocio", "Estructura legal y tributaria clara", "Plan operativo paso a paso"],
  },
  {
    id: "busqueda-proveedores",
    icon: Search, t: "Búsqueda de Proveedores Internacionales",
    problem: "Encontrar al fabricante correcto en China es una jungla informativa.",
    solution: "Sourcing especializado con visitas y verificación de fábricas en origen.",
    benefits: ["Fabricantes reales, no intermediarios", "Comparativo técnico y precios", "Catálogo evaluado por equipo experto"],
  },
  {
    id: "validacion-proveedores",
    icon: FileCheck2, t: "Validación de Proveedores",
    problem: "El proveedor parece confiable, pero no tienes cómo comprobarlo.",
    solution: "Auditoría legal, financiera y de planta antes de cualquier pago.",
    benefits: ["Verificación documental", "Inspección presencial", "Reporte de riesgo certificado"],
  },
  {
    id: "gestion-importaciones",
    icon: Container, t: "Gestión de Importaciones",
    problem: "Coordinar fábrica, naviera, aduanas y transporte interno es caótico.",
    solution: "Operamos toda la cadena por ti, con reportes en cada etapa.",
    benefits: ["Reducción de tiempos", "Trazabilidad total", "Sin sorpresas en aduana"],
  },
  {
    id: "importacion-llave-en-mano",
    icon: Truck, t: "Importación Llave en Mano",
    problem: "Quieres importar sin involucrarte en la complejidad operativa.",
    solution: "Tú nos dices qué necesitas. Nosotros entregamos en tu bodega.",
    benefits: ["Costo cerrado puerta a puerta", "Cero gestión interna", "Resultado garantizado"],
  },
  {
    id: "exportaciones",
    icon: Globe2, t: "Exportaciones",
    problem: "Tienes producto colombiano con potencial internacional, pero no sabes cómo llegar.",
    solution: "Identificamos compradores, estructuramos contratos y operamos la logística.",
    benefits: ["Apertura de mercados", "Cumplimiento normativo", "Cobro internacional seguro"],
  },
  {
    id: "intermediacion-comercial",
    icon: Handshake, t: "Intermediación Comercial",
    problem: "Necesitas representación entre Colombia, China y LATAM.",
    solution: "Actuamos como tu oficina comercial sin costos fijos.",
    benefits: ["Presencia en origen", "Negociación profesional", "Relaciones de largo plazo"],
  },
];

const WHATSAPP_URL = "https://wa.me/573204454529?text=Hola%20ETL%20Global%2C%20quiero%20cotizar%20una%20importaci%C3%B3n.";

function ServicesPage() {
  return (
    <>
      <section className="bg-hero text-white py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30" style={{ background: "var(--gradient-navy-glow)" }} />
        <div className="container-x relative max-w-4xl">
          <p className="text-gold text-sm uppercase tracking-widest font-semibold mb-4">Servicios</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">Operaciones de comercio exterior diseñadas para no fallar.</h1>
          <p className="text-lg text-silver/80 max-w-2xl">Un portafolio integral de servicios para importar, exportar y representar tu negocio en el escenario internacional.</p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container-x space-y-8">
          {services.map((s, i) => (
            <div key={i} id={s.id} className="scroll-mt-32 grid lg:grid-cols-12 gap-8 p-8 lg:p-10 rounded-2xl bg-card border border-border hover:border-gold/40 transition-all" style={{ boxShadow: "var(--shadow-card)" }}>
              <div className="lg:col-span-4">
                <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-5" style={{ background: "var(--gradient-gold)" }}>
                  <s.icon size={26} className="text-navy-deep" />
                </div>
                <h2 className="text-2xl font-bold text-navy-deep mb-3">{s.t}</h2>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-navy font-semibold hover:text-gold">
                  Solicitar este servicio <ArrowRight size={16} />
                </a>
              </div>
              <div className="lg:col-span-8 grid md:grid-cols-3 gap-6">
                <div>
                  <p className="text-xs uppercase tracking-wider text-gold font-semibold mb-2">Problema</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.problem}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-gold font-semibold mb-2">Solución</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.solution}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-gold font-semibold mb-2">Beneficios</p>
                  <ul className="space-y-1.5">
                    {s.benefits.map(b => (
                      <li key={b} className="flex gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 size={14} className="text-gold mt-1 shrink-0" /> {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
