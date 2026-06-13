import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ShieldCheck, Globe2, Truck, Search, FileCheck2, Calculator, Handshake,
  ArrowRight, CheckCircle2, AlertTriangle, Compass, Container, Factory,
  Users, Building2, PackageSearch, Sparkles,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ETL Global — Importaciones desde China" },
      { name: "description", content: "Importamos desde China y el mundo: sourcing, validación de proveedores, gestión integral y logística para emprendedores, pymes e industria." },
      { property: "og:title", content: "ETL Global — Importaciones sin riesgo" },
      { property: "og:description", content: "Gestionamos todo tu proceso de comercio internacional: de la búsqueda del proveedor a la entrega final." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const problems = [
  { icon: Compass, t: "No sé cómo importar", d: "Procesos confusos, normativas cambiantes y miedo a equivocarse en cada paso." },
  { icon: ShieldCheck, t: "No confío en proveedores extranjeros", d: "Te aseguramos contratos, inspecciones y verificación legal en origen." },
  { icon: Calculator, t: "No conozco los costos reales", d: "Calculamos el costo total puerta a puerta antes de comprometer un peso." },
  { icon: AlertTriangle, t: "Tengo miedo de perder dinero", d: "Operamos con etapas auditadas y trazabilidad total de tu mercancía." },
  { icon: Factory, t: "Necesito maquinaria especializada", d: "Identificamos fabricantes técnicos y gestionamos importaciones llave en mano." },
];

const services = [
  { icon: Search, t: "Sourcing Internacional", d: "Identificamos los mejores proveedores en China y otros mercados." },
  { icon: FileCheck2, t: "Validación de Proveedores", d: "Auditorías legales, financieras y de producción en origen." },
  { icon: Container, t: "Gestión de Importaciones", d: "Operación integral: producción, naviera, aduanas y entrega final." },
  { icon: Truck, t: "Importación Llave en Mano", d: "Tú nos dices qué necesitas. Nosotros entregamos en tu bodega." },
  { icon: Globe2, t: "Exportaciones", d: "Llevamos tu producto colombiano a mercados internacionales." },
  { icon: Handshake, t: "Intermediación Comercial", d: "Representación comercial entre Colombia, China y LATAM." },
];

const sectors = [
  { icon: Sparkles, t: "Emprendedores", d: "Tu primer contenedor sin perder dinero ni tiempo." },
  { icon: Building2, t: "Pymes", d: "Escala tu catálogo importando con costos optimizados." },
  { icon: Factory, t: "Industria", d: "Maquinaria, repuestos y materias primas técnicas." },
  { icon: PackageSearch, t: "Distribuidores", d: "Volumen sostenido con calidad consistente." },
  { icon: Users, t: "Manufactura", d: "Insumos especializados con trazabilidad completa." },
];

const process = [
  { n: "01", t: "Diagnóstico", d: "Entendemos tu necesidad real y objetivo comercial." },
  { n: "02", t: "Sourcing", d: "Identificamos y validamos proveedores en origen." },
  { n: "03", t: "Cotización Real", d: "Te entregamos el costo total puerta a puerta." },
  { n: "04", t: "Producción", d: "Supervisamos calidad y tiempos de fabricación." },
  { n: "05", t: "Logística", d: "Naviera, aduanas y nacionalización en Colombia." },
  { n: "06", t: "Entrega", d: "Mercancía en tu bodega, lista para operar." },
];

const faqs = [
  { q: "¿Puedo importar sin experiencia previa?", a: "Sí. Acompañamos a emprendedores desde su primer contenedor, gestionando cada etapa del proceso." },
  { q: "¿Cómo verifican a los proveedores?", a: "Realizamos auditorías legales, financieras y de planta directamente en origen antes de cerrar cualquier compra." },
  { q: "¿Pueden importar maquinaria industrial?", a: "Sí. Operamos importaciones técnicas llave en mano con asesoría arancelaria y logística especializada." },
  { q: "¿Cuánto cuesta importar desde China?", a: "Depende del producto, volumen e Incoterm. Calculamos el costo total antes de avanzar." },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-hero text-white">
        <div className="absolute inset-0 opacity-30" style={{ background: "var(--gradient-navy-glow)" }} />
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }} />

        <div className="container-x relative pt-20 pb-24 lg:pt-28 lg:pb-32">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/5 text-gold text-xs font-medium tracking-wider uppercase mb-6">
                <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                Connecting Markets Worldwide
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] mb-6">
                Importamos lo que tu negocio necesita. <span className="text-gradient-gold">Sin riesgos.</span> Sin improvisaciones.
              </h1>
              <p className="text-lg text-silver/80 max-w-2xl mb-8 leading-relaxed">
                Desde la búsqueda de proveedores hasta la entrega final, gestionamos todo tu proceso de comercio internacional con transparencia y precisión operativa.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contacto" className="inline-flex items-center gap-2 px-7 py-4 rounded-md bg-gold text-navy-deep font-semibold hover:bg-gold-soft transition-all" style={{ boxShadow: "var(--shadow-gold)" }}>
                  Solicitar Cotización <ArrowRight size={18} />
                </Link>
                <a href="https://wa.me/573204454529?text=Hola%20ETL%20Global%2C%20quiero%20cotizar%20una%20importaci%C3%B3n." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-7 py-4 rounded-md border border-white/20 text-white hover:bg-white/10 transition-all font-semibold">
                  Hablar por WhatsApp
                </a>
              </div>

              <div className="mt-10 grid grid-cols-3 gap-6 max-w-xl mx-auto lg:mx-0">
                {[
                  { k: "100%", v: "Trazabilidad" },
                  { k: "0", v: "RIESGOS" },
                  { k: "A→Z", v: "Operación integral" },
                ].map(s => (
                  <div key={s.v}>
                    <div className="text-3xl md:text-4xl font-bold text-gold">{s.k}</div>
                    <div className="text-xs uppercase tracking-wider text-silver/60 mt-1">{s.v}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 relative hidden lg:block">
              <div className="relative aspect-square rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6 overflow-hidden">
                <div className="absolute inset-0 rounded-2xl" style={{ background: "var(--gradient-navy-glow)" }} />
                <svg viewBox="0 0 400 400" className="w-full h-full relative" fill="none" aria-hidden="true">
                  <defs>
                    <linearGradient id="gld" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="oklch(0.88 0.08 88)" />
                      <stop offset="100%" stopColor="oklch(0.78 0.12 85)" />
                    </linearGradient>
                    <radialGradient id="globeGrad" cx="50%" cy="40%" r="60%">
                      <stop offset="0%" stopColor="oklch(0.32 0.09 265)" />
                      <stop offset="100%" stopColor="oklch(0.18 0.06 265)" />
                    </radialGradient>
                  </defs>

                  {/* Globe */}
                  <g transform="translate(200 200)">
                    <circle r="135" fill="url(#globeGrad)" stroke="url(#gld)" strokeWidth="1" opacity="0.95" />
                    {/* Meridians (rotating) */}
                    <g opacity="0.45" stroke="url(#gld)" strokeWidth="1">
                      <ellipse rx="135" ry="50">
                        <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="22s" repeatCount="indefinite" />
                      </ellipse>
                      <ellipse rx="135" ry="80">
                        <animateTransform attributeName="transform" type="rotate" from="360" to="0" dur="28s" repeatCount="indefinite" />
                      </ellipse>
                      <ellipse rx="135" ry="115">
                        <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="34s" repeatCount="indefinite" />
                      </ellipse>
                    </g>
                    <line x1="0" y1="-135" x2="0" y2="135" stroke="url(#gld)" strokeWidth="0.8" opacity="0.4" />
                    <ellipse rx="135" ry="40" stroke="url(#gld)" strokeWidth="0.8" opacity="0.3" />

                    {/* Continent silhouettes (stylized) */}
                    <g fill="oklch(0.78 0.12 85)" opacity="0.85">
                      <path d="M -90 -40 q 12 -18 28 -10 t 22 14 q -4 18 -22 14 t -28 -18 z" />
                      <path d="M -30 10 q 18 -14 36 -4 t 18 28 q -10 14 -28 8 t -26 -32 z" />
                      <path d="M 35 -55 q 20 -8 38 6 t 20 22 q -14 10 -32 2 t -26 -30 z" />
                      <path d="M 50 30 q 16 4 26 22 t -6 28 q -22 -4 -28 -22 t 8 -28 z" />
                    </g>

                    {/* City nodes */}
                    <g fill="oklch(0.88 0.08 88)">
                      <circle cx="-70" cy="-30" r="4">
                        <animate attributeName="r" values="3;6;3" dur="2.4s" repeatCount="indefinite" />
                      </circle>
                      <circle cx="60" cy="-40" r="4">
                        <animate attributeName="r" values="3;6;3" dur="2.8s" begin="0.6s" repeatCount="indefinite" />
                      </circle>
                      <circle cx="20" cy="60" r="4">
                        <animate attributeName="r" values="3;6;3" dur="2.6s" begin="1.1s" repeatCount="indefinite" />
                      </circle>
                      <circle cx="-40" cy="40" r="4">
                        <animate attributeName="r" values="3;6;3" dur="3s" begin="0.3s" repeatCount="indefinite" />
                      </circle>
                    </g>

                    {/* Trade arcs */}
                    <g fill="none" stroke="url(#gld)" strokeWidth="1.6" strokeLinecap="round">
                      <path d="M -70 -30 Q 0 -130 60 -40" strokeDasharray="180" strokeDashoffset="180">
                        <animate attributeName="stroke-dashoffset" from="180" to="0" dur="2.6s" repeatCount="indefinite" />
                      </path>
                      <path d="M 60 -40 Q 80 30 20 60" strokeDasharray="160" strokeDashoffset="160">
                        <animate attributeName="stroke-dashoffset" from="160" to="0" dur="2.8s" begin="0.4s" repeatCount="indefinite" />
                      </path>
                      <path d="M 20 60 Q -40 90 -40 40" strokeDasharray="140" strokeDashoffset="140">
                        <animate attributeName="stroke-dashoffset" from="140" to="0" dur="2.4s" begin="0.8s" repeatCount="indefinite" />
                      </path>
                      <path d="M -40 40 Q -100 0 -70 -30" strokeDasharray="140" strokeDashoffset="140">
                        <animate attributeName="stroke-dashoffset" from="140" to="0" dur="2.6s" begin="1.2s" repeatCount="indefinite" />
                      </path>
                    </g>

                    {/* Plane traveling along an arc */}
                    <g fill="oklch(0.88 0.08 88)">
                      <path d="M -6 0 L 8 -2 L 10 0 L 8 2 Z M -2 -4 L 2 0 L -2 4 Z" transform="rotate(0)">
                        <animateMotion dur="6s" repeatCount="indefinite" rotate="auto"
                          path="M -70 -30 Q 0 -130 60 -40" />
                      </path>
                    </g>

                    {/* Container ship at bottom */}
                    <g transform="translate(-70 110)">
                      <animateTransform attributeName="transform" type="translate" values="-90 110; -50 110; -90 110" dur="9s" repeatCount="indefinite" />
                      {/* containers */}
                      <rect x="-26" y="-14" width="12" height="8" fill="oklch(0.78 0.12 85)" />
                      <rect x="-12" y="-14" width="12" height="8" fill="oklch(0.88 0.08 88)" />
                      <rect x="2" y="-14" width="12" height="8" fill="oklch(0.78 0.12 85)" />
                      <rect x="-19" y="-22" width="12" height="8" fill="oklch(0.88 0.08 88)" />
                      <rect x="-5" y="-22" width="12" height="8" fill="oklch(0.78 0.12 85)" />
                      {/* hull */}
                      <path d="M -32 -6 L 22 -6 L 16 6 L -26 6 Z" fill="oklch(0.55 0.015 255)" />
                      {/* wake */}
                      <path d="M -40 8 q 8 4 18 0 t 18 0 t 18 0" stroke="oklch(0.88 0.005 250)" strokeWidth="1" opacity="0.45" fill="none">
                        <animate attributeName="opacity" values="0.2;0.55;0.2" dur="2s" repeatCount="indefinite" />
                      </path>
                    </g>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="container-x py-6 flex flex-wrap items-center justify-between gap-4 text-xs uppercase tracking-widest text-silver/50">
            <span>Operaciones · Colombia</span>
            <span>Sourcing · China</span>
            <span>Distribución · LATAM</span>
            <span>Logística · Global</span>
          </div>
        </div>
      </section>

      {/* PROBLEMS */}
      <section className="py-24 bg-background">
        <div className="container-x">
          <div className="max-w-3xl mb-14">
            <p className="text-gold text-sm uppercase tracking-widest font-semibold mb-3">¿POR QUÉ ETL GLOBAL?</p>
            <h2 className="text-3xl md:text-5xl font-bold text-navy-deep">Importar no debería sentirse como una apuesta.</h2>
            <p className="text-muted-foreground mt-4 text-lg">Resolvemos los puntos donde la mayoría de operaciones internacionales fracasan.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map((p, i) => (
              <div key={i} className="p-8 rounded-xl bg-card border border-border hover:border-gold/40 hover:-translate-y-1 transition-all" style={{ boxShadow: "var(--shadow-card)" }}>
                <div className="w-12 h-12 rounded-lg bg-navy-deep text-gold flex items-center justify-center mb-5">
                  <p.icon size={22} />
                </div>
                <h3 className="font-semibold text-lg text-navy-deep mb-2">{p.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 bg-navy-deep text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ background: "var(--gradient-navy-glow)" }} />
        <div className="container-x relative">
          <div className="max-w-3xl mb-14">
            <p className="text-gold text-sm uppercase tracking-widest font-semibold mb-3">Nuestro proceso</p>
            <h2 className="text-3xl md:text-5xl font-bold">Una operación auditada en cada etapa.</h2>
            <p className="text-silver/70 mt-4 text-lg">Seis fases de control para que tu mercancía llegue exactamente como la necesitas.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 rounded-xl overflow-hidden">
            {process.map((p) => (
              <div key={p.n} className="p-8 bg-navy-deep hover:bg-navy transition-colors">
                <div className="text-5xl font-bold text-gold/80 mb-3">{p.n}</div>
                <h3 className="text-xl font-semibold mb-2">{p.t}</h3>
                <p className="text-sm text-silver/70 leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 bg-background">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <p className="text-gold text-sm uppercase tracking-widest font-semibold mb-3">Servicios</p>
              <h2 className="text-3xl md:text-5xl font-bold text-navy-deep">Operaciones de comercio exterior, de extremo a extremo.</h2>
            </div>
            <Link to="/servicios" className="inline-flex items-center gap-2 text-navy font-semibold hover:text-gold">
              Ver todos los servicios <ArrowRight size={18} />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div key={i} className="group p-8 rounded-xl bg-card border border-border hover:border-navy hover:shadow-card-soft transition-all">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-5" style={{ background: "var(--gradient-gold)" }}>
                  <s.icon size={22} className="text-navy-deep" />
                </div>
                <h3 className="font-semibold text-lg text-navy-deep mb-2 group-hover:text-navy">{s.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTORS */}
      <section className="py-24 bg-secondary">
        <div className="container-x">
          <div className="max-w-3xl mb-14">
            <p className="text-gold text-sm uppercase tracking-widest font-semibold mb-3">Sectores que atendemos</p>
            <h2 className="text-3xl md:text-5xl font-bold text-navy-deep">Soluciones adaptadas a la madurez de tu operación.</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {sectors.map((s, i) => (
              <Link to="/sectores" key={i} className="p-6 rounded-xl bg-card border border-border hover:border-gold hover:-translate-y-1 transition-all">
                <s.icon size={28} className="text-navy mb-4" />
                <h3 className="font-semibold text-navy-deep mb-1">{s.t}</h3>
                <p className="text-xs text-muted-foreground">{s.d}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-24 bg-background">
        <div className="container-x grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-gold text-sm uppercase tracking-widest font-semibold mb-3">Diferenciadores</p>
            <h2 className="text-3xl md:text-5xl font-bold text-navy-deep mb-6">Importación segura. Operación transparente.</h2>
            <div className="space-y-5">
              {[
                "Importación sin riesgo para emprendedores, pymes y empresas.",
                "Acompañamiento integral del proveedor a tu bodega.",
                "Trazabilidad y reporte de cada etapa de la operación.",
                "Cálculo de costo total real antes de avanzar.",
                "Importamos lo que tú necesitas, no lo que queremos vender.",
              ].map((b, i) => (
                <div key={i} className="flex gap-3">
                  <CheckCircle2 className="text-gold shrink-0 mt-1" size={20} />
                  <p className="text-foreground">{b}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl bg-hero text-white p-10 shadow-elegant relative overflow-hidden">
              <div className="absolute inset-0 opacity-30" style={{ background: "var(--gradient-navy-glow)" }} />
              <div className="relative">
                <p className="text-gold text-xs uppercase tracking-widest font-semibold mb-3">¿LISTO PARA IMPORTAR?</p>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Solicita una propuesta personalizada para tu importación.</h3>
                <p className="text-silver/80 mb-6">Cuéntanos qué necesitas. Te entregamos un escenario operativo claro, con costos y tiempos verificables.</p>
                <Link to="/contacto" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-gold text-navy-deep font-semibold hover:bg-gold-soft">
                  Iniciar cotización <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-secondary">
        <div className="container-x grid lg:grid-cols-3 gap-12">
          <div>
            <p className="text-gold text-sm uppercase tracking-widest font-semibold mb-3">Preguntas frecuentes</p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-deep mb-6">Resolvemos las dudas más comunes antes de tu primera importación.</h2>
            <Link to="/faq" className="inline-flex items-center gap-2 text-navy font-semibold hover:text-gold">
              Ver todas las preguntas <ArrowRight size={18} />
            </Link>
          </div>
          <div className="lg:col-span-2 space-y-4">
            {faqs.map((f, i) => (
              <details key={i} className="group rounded-xl bg-card border border-border p-6 hover:border-gold/40 transition-colors">
                <summary className="flex justify-between items-center cursor-pointer font-semibold text-navy-deep list-none">
                  {f.q}
                  <span className="ml-4 text-gold group-open:rotate-45 transition-transform text-2xl">+</span>
                </summary>
                <p className="text-muted-foreground mt-3 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FORM */}
      <section className="py-24 bg-hero text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30" style={{ background: "var(--gradient-navy-glow)" }} />
        <div className="container-x relative max-w-3xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">¿Listo para importar con respaldo profesional?</h2>
          <p className="text-silver/80 text-lg mb-8">Solicita una cotización personalizada y descubre qué tan rentable puede ser tu próxima operación internacional.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contacto" className="inline-flex items-center gap-2 px-8 py-4 rounded-md bg-gold text-navy-deep font-semibold hover:bg-gold-soft" style={{ boxShadow: "var(--shadow-gold)" }}>
              Solicitar Cotización <ArrowRight size={18} />
            </Link>
            <a href="https://wa.me/573204454529?text=Hola%20ETL%20Global%2C%20quiero%20cotizar%20una%20importaci%C3%B3n." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 rounded-md border border-white/30 hover:bg-white/10 font-semibold">
              Hablar por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
