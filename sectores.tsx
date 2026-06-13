import { createFileRoute } from "@tanstack/react-router";
import { Sparkles, Building2, Factory, PackageSearch, Users, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/sectores")({
  head: () => ({
    meta: [
      { title: "Sectores — Emprendedores, Pymes e Industria | ETL Global" },
      { name: "description", content: "Soluciones de comercio exterior adaptadas para emprendedores, pymes, industria, distribuidores y empresas manufactureras." },
      { property: "og:title", content: "Sectores que atendemos — ETL Global" },
      { property: "og:description", content: "Operaciones internacionales para cada etapa de tu negocio." },
      { property: "og:url", content: "/sectores" },
    ],
    links: [{ rel: "canonical", href: "/sectores" }],
  }),
  component: SectorsPage,
});

const sectors = [
  {
    icon: Sparkles, t: "Emprendedores",
    pains: ["Miedo a perder el capital inicial", "Desconocimiento del proceso", "Volumen pequeño que nadie acepta"],
    solutions: ["Acompañamiento desde el primer contenedor", "Cálculo de costo total transparente", "Consolidados con otros importadores"],
  },
  {
    icon: Building2, t: "Pymes",
    pains: ["Necesidad de escalar catálogo", "Márgenes ajustados", "Operación interna ya saturada"],
    solutions: ["Sourcing recurrente con precios competitivos", "Operación llave en mano", "Reportes ejecutivos por importación"],
  },
  {
    icon: Factory, t: "Empresas Industriales",
    pains: ["Maquinaria técnica especializada", "Requisitos arancelarios complejos", "Riesgo operativo elevado"],
    solutions: ["Asesoría arancelaria especializada", "Verificación técnica en fábrica", "Logística con seguros estructurados"],
  },
  {
    icon: PackageSearch, t: "Distribuidores",
    pains: ["Necesidad de volumen constante", "Calidad uniforme entre lotes", "Costo por unidad estratégico"],
    solutions: ["Contratos de suministro continuo", "Auditoría de calidad por lote", "Negociación de precios escalonados"],
  },
  {
    icon: Users, t: "Empresas Manufactureras",
    pains: ["Insumos críticos para producción", "Tiempos de entrega exactos", "Trazabilidad obligatoria"],
    solutions: ["Cadena de abastecimiento dedicada", "Tracking 24/7", "Documentación completa para cumplimiento"],
  },
];

function SectorsPage() {
  return (
    <>
      <section className="bg-hero text-white py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30" style={{ background: "var(--gradient-navy-glow)" }} />
        <div className="container-x relative max-w-4xl">
          <p className="text-gold text-sm uppercase tracking-widest font-semibold mb-4">Sectores</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">Cada operación, una estrategia distinta.</h1>
          <p className="text-lg text-silver/80 max-w-2xl">Diseñamos el proceso según la madurez, tamaño y objetivos de tu negocio.</p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container-x space-y-6">
          {sectors.map((s, i) => (
            <div key={i} className="rounded-2xl bg-card border border-border overflow-hidden hover:border-gold/40 transition-all" style={{ boxShadow: "var(--shadow-card)" }}>
              <div className="grid lg:grid-cols-12">
                <div className="lg:col-span-4 p-10 bg-navy-deep text-white relative overflow-hidden">
                  <div className="absolute inset-0 opacity-20" style={{ background: "var(--gradient-navy-glow)" }} />
                  <div className="relative">
                    <div className="w-14 h-14 rounded-lg bg-gold flex items-center justify-center mb-5">
                      <s.icon size={26} className="text-navy-deep" />
                    </div>
                    <h2 className="text-3xl font-bold mb-3">{s.t}</h2>
                    <a href="https://wa.me/573204454529?text=Hola%20ETL%20Global%2C%20quiero%20asesor%C3%ADa%20para%20mi%20sector." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-gold font-semibold hover:text-gold-soft mt-4">
                      Quiero asesoría <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
                <div className="lg:col-span-8 p-10 grid md:grid-cols-2 gap-8">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-gold font-semibold mb-3">Dolores específicos</p>
                    <ul className="space-y-2">
                      {s.pains.map(p => <li key={p} className="text-sm text-muted-foreground">— {p}</li>)}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-gold font-semibold mb-3">Cómo lo resolvemos</p>
                    <ul className="space-y-2">
                      {s.solutions.map(p => <li key={p} className="text-sm text-foreground font-medium">→ {p}</li>)}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
