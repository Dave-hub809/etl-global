import { createFileRoute, Link } from "@tanstack/react-router";
import { Target, Eye, Gem, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/nosotros")({
  head: () => ({
    meta: [
      { title: "Nosotros — ETL Global S.A.S." },
      { name: "description", content: "Compañía colombiana de comercio exterior, sourcing internacional y logística integral entre Colombia, China y LATAM." },
      { property: "og:title", content: "Sobre ETL Global S.A.S." },
      { property: "og:description", content: "Tu aliado estratégico de comercio internacional." },
      { property: "og:url", content: "/nosotros" },
    ],
    links: [{ rel: "canonical", href: "/nosotros" }],
  }),
  component: AboutPage,
});

const values = [
  { t: "Transparencia operativa", d: "Reportamos cada etapa. Sin opacidad ni costos ocultos." },
  { t: "Rigor profesional", d: "Procesos auditados y verificación en origen para cada operación." },
  { t: "Orientación al cliente", d: "Importamos lo que tu negocio necesita, no lo que conviene vender." },
  { t: "Compromiso local", d: "Equipo 100% colombiano, con operación directa desde Colombia hacia mercados internacionales." },
];

function AboutPage() {
  return (
    <>
      <section className="bg-hero text-white py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30" style={{ background: "var(--gradient-navy-glow)" }} />
        <div className="container-x relative grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gold text-sm uppercase tracking-widest font-semibold mb-4">Nosotros</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Tu aliado estratégico de <span className="text-gradient-gold">comercio internacional.</span>
            </h1>
            <p className="text-lg text-silver/80 leading-relaxed">
              ETL Global S.A.S. — Enterprise Trade and Logistics Global — es una compañía colombiana enfocada en hacer del comercio exterior una operación predecible, segura y rentable para empresas y emprendedores.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 p-10 bg-white/[0.03] backdrop-blur-sm">
            <p className="text-gold text-xs uppercase tracking-widest font-semibold mb-2">Filosofía</p>
            <p className="text-xl md:text-2xl font-semibold leading-relaxed">
              "No importamos lo que queremos vender. Importamos exactamente lo que tú necesitas."
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container-x grid md:grid-cols-3 gap-6">
          {[
            { icon: Target, t: "Misión", d: "Conectar empresas latinoamericanas con mercados globales mediante operaciones de comercio exterior seguras, transparentes y rentables." },
            { icon: Eye, t: "Visión", d: "Ser la firma de referencia en comercio internacional para emprendedores y pymes que necesitan operar con estándares corporativos." },
            { icon: Gem, t: "Valor central", d: "Trazabilidad total. Cada operación se reporta etapa por etapa, sin opacidad ni improvisaciones." },
          ].map((b, i) => (
            <div key={i} className="p-8 rounded-xl bg-card border border-border" style={{ boxShadow: "var(--shadow-card)" }}>
              <div className="w-12 h-12 rounded-lg bg-navy-deep text-gold flex items-center justify-center mb-5">
                <b.icon size={22} />
              </div>
              <h3 className="text-xl font-bold text-navy-deep mb-3">{b.t}</h3>
              <p className="text-muted-foreground leading-relaxed">{b.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="container-x">
          <div className="max-w-2xl mb-12">
            <p className="text-gold text-sm uppercase tracking-widest font-semibold mb-3">Valores</p>
            <h2 className="text-3xl md:text-5xl font-bold text-navy-deep">Lo que sostiene cada decisión.</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div key={i} className="p-6 rounded-xl bg-card border border-border">
                <div className="text-3xl font-bold text-gold mb-3">0{i + 1}</div>
                <h3 className="font-semibold text-navy-deep mb-2">{v.t}</h3>
                <p className="text-sm text-muted-foreground">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-hero text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30" style={{ background: "var(--gradient-navy-glow)" }} />
        <div className="container-x relative max-w-3xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Hablemos de tu próxima operación.</h2>
          <Link to="/contacto" className="inline-flex items-center gap-2 px-8 py-4 rounded-md bg-gold text-navy-deep font-semibold hover:bg-gold-soft" style={{ boxShadow: "var(--shadow-gold)" }}>
            Solicitar Cotización <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
