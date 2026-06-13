import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Comercio Exterior y Logística | ETL Global" },
      { name: "description", content: "Guías prácticas sobre importar desde China, exportaciones, proveedores, aduanas, logística internacional y emprendimiento global." },
      { property: "og:title", content: "Blog ETL Global — Comercio Exterior y Logística Internacional" },
      { property: "og:description", content: "Recursos para importar y exportar con confianza." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogPage,
});

const categories = ["Importaciones", "Exportaciones", "Comercio Exterior", "Logística Internacional", "Proveedores Chinos", "Aduanas", "Emprendimiento"];

const posts = [
  { slug: "como-importar-desde-china-sin-perder-dinero", c: "Importaciones", t: "Cómo importar desde China sin perder dinero en tu primera operación", d: "Una guía paso a paso para emprendedores que importan por primera vez." },
  { slug: "5-senales-proveedor-confiable-alibaba", c: "Proveedores Chinos", t: "5 señales para identificar un proveedor confiable en Alibaba", d: "Criterios técnicos y comerciales para evaluar fabricantes en China." },
  { slug: "aranceles-iva-incoterms-costo-real-importar-colombia", c: "Aduanas", t: "Aranceles, IVA e Incoterms: el costo real de importar a Colombia", d: "Cómo calcular el costo total puerta a puerta antes de comprar." },
  { slug: "fcl-vs-lcl-cuando-conviene-cada-modalidad", c: "Logística Internacional", t: "FCL vs LCL: cuándo conviene cada modalidad marítima", d: "Análisis comparativo de volumen, costo y tiempos de tránsito." },
  { slug: "exportar-a-estados-unidos-producto-colombiano", c: "Exportaciones", t: "Cómo abrir mercado en Estados Unidos con producto colombiano", d: "Estrategia, normativa y canales para exportar con éxito." },
  { slug: "importacion-llave-en-mano-cuando-delegar", c: "Emprendimiento", t: "Importación llave en mano: cuándo delegar y cuándo operar tú mismo", d: "Decisiones estratégicas según el nivel de madurez de tu negocio." },
];

function BlogPage() {
  return (
    <>
      <section className="bg-hero text-white py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30" style={{ background: "var(--gradient-navy-glow)" }} />
        <div className="container-x relative max-w-4xl">
          <p className="text-gold text-sm uppercase tracking-widest font-semibold mb-4">Blog</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">Inteligencia operativa para importar y exportar mejor.</h1>
          <p className="text-lg text-silver/80 max-w-2xl">Guías, análisis y casos prácticos de comercio internacional.</p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container-x">
          <h2 className="text-2xl md:text-3xl font-bold text-navy-deep mb-8">Últimos artículos</h2>
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map(c => (
              <button key={c} className="px-4 py-2 rounded-full text-sm border border-border hover:border-gold hover:text-gold transition-colors">{c}</button>
            ))}
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((p, i) => (
              <article key={i} className="group rounded-xl bg-card border border-border overflow-hidden hover:border-gold/40 hover:-translate-y-1 transition-all" style={{ boxShadow: "var(--shadow-card)" }}>
                <div className="aspect-[16/10] bg-hero relative overflow-hidden">
                  <div className="absolute inset-0 opacity-30" style={{ background: "var(--gradient-navy-glow)" }} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-6xl font-bold text-gold/30">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-xs uppercase tracking-wider text-gold font-semibold mb-3">{p.c}</p>
                  <h3 className="font-semibold text-lg text-navy-deep mb-2 group-hover:text-navy leading-snug">{p.t}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{p.d}</p>
                  <Link to="/blog/$slug" params={{ slug: p.slug }} className="inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-gold">
                    Leer artículo <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
