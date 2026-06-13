import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";

type Post = {
  slug: string;
  category: string;
  title: string;
  description: string;
  readTime: string;
  content: { h?: string; p?: string; list?: string[] }[];
};

const posts: Post[] = [
  {
    slug: "como-importar-desde-china-sin-perder-dinero",
    category: "Importaciones",
    title: "Cómo importar desde China sin perder dinero",
    description: "Una guía paso a paso para emprendedores que importan por primera vez.",
    readTime: "7 min de lectura",
    content: [
      { p: "Importar desde China puede multiplicar tus márgenes, pero también puede convertirse en una pérdida costosa si no planificas cada etapa. Esta guía resume los pasos clave que aplicamos en ETL Global para que tu primera operación sea rentable." },
      { h: "1. Define producto y volumen mínimo viable", p: "Empieza con un SKU validado en tu mercado. Calcula el volumen mínimo que justifica un contenedor LCL o FCL antes de cotizar fábricas." },
      { h: "2. Calcula el costo total puerta a puerta", p: "El precio FOB es solo el comienzo. Suma flete internacional, seguro, aranceles, IVA, agente de aduana, transporte interno y bodegaje. Solo así sabrás tu costo real por unidad." },
      { h: "3. Valida al proveedor antes de pagar", list: ["Licencia comercial y antigüedad verificada", "Auditoría de fábrica (presencial o por terceros)", "Muestras físicas con control de calidad documentado", "Términos de pago escalonados: 30/70 o carta de crédito"] },
      { h: "4. Inspección pre-embarque", p: "Una inspección antes de cargar el contenedor evita reclamos imposibles de cobrar una vez la mercancía llega a Colombia." },
      { h: "5. Documentación aduanera impecable", p: "BL, factura comercial, packing list, certificado de origen. Un solo error documental puede inmovilizar tu carga semanas en puerto." },
      { p: "En ETL Global acompañamos cada uno de estos pasos como operador llave en mano. Si quieres reducir el riesgo de tu primera importación, hablemos." },
    ],
  },
  {
    slug: "5-senales-proveedor-confiable-alibaba",
    category: "Proveedores Chinos",
    title: "5 señales para identificar un proveedor confiable en Alibaba",
    description: "Criterios técnicos y comerciales para evaluar fabricantes en China.",
    readTime: "5 min de lectura",
    content: [
      { p: "Alibaba concentra miles de fábricas, pero también trading companies que se disfrazan de fabricantes. Estas 5 señales te ayudan a filtrar rápido." },
      { h: "1. Verified Supplier + antigüedad real", p: "Más de 3 años como Gold Supplier verificado y auditado por SGS o TÜV reduce drásticamente el riesgo." },
      { h: "2. Capacidad de fábrica documentada", p: "Pide videos en vivo, planos de planta y certificados ISO. Un fabricante real los entrega sin demora." },
      { h: "3. Catálogo coherente", p: "Si vende desde mascarillas hasta drones, casi siempre es trading. Una fábrica seria se especializa en una familia de producto." },
      { h: "4. Respuesta técnica, no comercial", p: "Un buen proveedor responde con fichas técnicas, tolerancias y materiales. Si solo responde precios, sospecha." },
      { h: "5. Términos de pago razonables", p: "30% anticipo y 70% contra BL es estándar. Quien exige 100% por adelantado o desvía pagos a cuentas personales, no es confiable." },
    ],
  },
  {
    slug: "aranceles-iva-incoterms-costo-real-importar-colombia",
    category: "Aduanas",
    title: "Aranceles, IVA e Incoterms al importar a Colombia",
    description: "Cómo calcular el costo total puerta a puerta antes de comprar.",
    readTime: "6 min de lectura",
    content: [
      { p: "El error más común al importar a Colombia es comparar precios FOB sin sumar la carga tributaria y logística. Aquí está la fórmula real." },
      { h: "Base gravable", p: "Valor CIF (Costo + Seguro + Flete) es la base sobre la que se calculan aranceles e IVA." },
      { h: "Arancel", p: "Depende de la subpartida arancelaria. En Colombia oscila entre 0% y 20% según el producto y los acuerdos comerciales vigentes." },
      { h: "IVA", p: "19% general sobre (CIF + Arancel). Algunos productos tienen tarifas diferenciales o exenciones." },
      { h: "Incoterms clave", list: ["EXW: tú asumes todo desde la fábrica", "FOB: el proveedor entrega al puerto de origen", "CIF: incluye flete y seguro hasta puerto destino", "DDP: el proveedor entrega nacionalizado (raro y costoso)"] },
      { p: "Recomendación: trabaja con FOB y controla tú el flete con un agente de carga propio. Tendrás mejores tarifas y trazabilidad real." },
    ],
  },
  {
    slug: "fcl-vs-lcl-cuando-conviene-cada-modalidad",
    category: "Logística Internacional",
    title: "FCL vs LCL: cuándo conviene cada modalidad marítima",
    description: "Análisis comparativo de volumen, costo y tiempos de tránsito.",
    readTime: "5 min de lectura",
    content: [
      { h: "LCL (Less than Container Load)", p: "Pagas por metro cúbico. Ideal para volúmenes entre 1 y 12 m³. Más lento por consolidación y desconsolidación en puerto." },
      { h: "FCL (Full Container Load)", p: "Alquilas el contenedor completo (20' o 40'). A partir de ~13 m³ suele ser más económico que LCL, y los tiempos de tránsito y manipulación son menores." },
      { h: "Punto de equilibrio", p: "Como regla práctica: si tu carga supera 15 m³ o pesa más de 10 toneladas, FCL es casi siempre la mejor decisión." },
      { h: "Riesgo de avería", p: "LCL implica que tu carga se consolida con la de otros importadores. Refuerza siempre el embalaje y contrata seguro all-risk." },
    ],
  },
  {
    slug: "exportar-a-estados-unidos-producto-colombiano",
    category: "Exportaciones",
    title: "Cómo abrir mercado en Estados Unidos con producto colombiano",
    description: "Estrategia, normativa y canales para exportar con éxito.",
    readTime: "8 min de lectura",
    content: [
      { h: "1. Aprovecha el TLC", p: "El acuerdo Colombia–EE.UU. elimina aranceles en la mayoría de partidas. Verifica que tu producto califique como originario." },
      { h: "2. Normativa FDA / USDA", p: "Alimentos, cosméticos y dispositivos médicos requieren registro previo. Sin esto, tu carga se devuelve en puerto." },
      { h: "3. Canal de distribución", list: ["Importador-distribuidor regional", "Marketplaces (Amazon FBA)", "Brokers especializados por categoría", "Venta directa B2B con representante comercial"] },
      { h: "4. Precio de exportación", p: "Calcula desde el USD por unidad incluyendo flete, seguro, aranceles (si aplica), arancel anti-dumping si corresponde, y márgenes para el canal." },
      { h: "5. Logística confiable", p: "Marítimo desde Cartagena/Buenaventura a Miami, Houston o NY. Tiempos típicos de 7 a 14 días según puerto destino." },
    ],
  },
  {
    slug: "importacion-llave-en-mano-cuando-delegar",
    category: "Emprendimiento",
    title: "Importación llave en mano: cuándo delegar",
    description: "Decisiones estratégicas según el nivel de madurez de tu negocio.",
    readTime: "6 min de lectura",
    content: [
      { p: "Operar tus propias importaciones da control y aprendizaje, pero también consume tiempo, capital y atención que podrías invertir en ventas." },
      { h: "Delega (llave en mano) si:", list: ["Es tu primera o segunda importación", "Tu equipo no tiene experto en comex", "Valoras tiempo sobre control granular", "Necesitas predictibilidad de costo y plazos"] },
      { h: "Opera internamente si:", list: ["Importas con frecuencia mensual constante", "Manejas más de 5 contenedores al año", "Tu margen no soporta fees adicionales", "Tienes equipo de comex y aduanas en nómina"] },
      { p: "Muchos clientes empiezan con nosotros en modalidad llave en mano y migran a un esquema mixto a medida que su operación escala. No hay una sola respuesta correcta." },
    ],
  },
];

export const Route = createFileRoute("/blog_/$slug")({
  loader: ({ params }) => {
    const post = posts.find(p => p.slug === params.slug);
    if (!post) throw notFound();
    return post;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: loaderData.title },
          { name: "description", content: loaderData.description },
          { property: "og:title", content: loaderData.title },
          { property: "og:description", content: loaderData.description },
          { property: "og:url", content: `/blog/${loaderData.slug}` },
          { property: "og:type", content: "article" },
        ]
      : [{ title: "Artículo no encontrado | ETL Global" }],
    links: loaderData ? [{ rel: "canonical", href: `/blog/${loaderData.slug}` }] : [],
    scripts: loaderData
      ? [{
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: loaderData.title,
            description: loaderData.description,
            articleSection: loaderData.category,
            author: { "@type": "Organization", name: "ETL Global S.A.S." },
            publisher: { "@type": "Organization", name: "ETL Global S.A.S." },
            mainEntityOfPage: `https://etlglobalco.lovable.app/blog/${loaderData.slug}`,
          }),
        }]
      : [],
  }),
  component: BlogPost,
  notFoundComponent: () => (
    <section className="py-32 container-x text-center">
      <h1 className="text-3xl font-bold text-navy-deep mb-4">Artículo no encontrado</h1>
      <Link to="/blog" className="text-gold font-semibold">Volver al blog</Link>
    </section>
  ),
  errorComponent: () => (
    <section className="py-32 container-x text-center">
      <h1 className="text-3xl font-bold text-navy-deep mb-4">Ocurrió un error</h1>
      <Link to="/blog" className="text-gold font-semibold">Volver al blog</Link>
    </section>
  ),
});

function BlogPost() {
  const post = Route.useLoaderData() as Post;
  return (
    <>
      <section className="bg-hero text-white py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30" style={{ background: "var(--gradient-navy-glow)" }} />
        <div className="container-x relative max-w-3xl">
          <Link to="/blog" className="inline-flex items-center gap-2 text-silver/80 hover:text-gold text-sm mb-6">
            <ArrowLeft size={16} /> Volver al blog
          </Link>
          <p className="text-gold text-xs uppercase tracking-widest font-semibold mb-4">{post.category} · {post.readTime}</p>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">{post.title}</h1>
          <p className="text-lg text-silver/80">{post.description}</p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <article className="container-x max-w-3xl space-y-6">
          {post.content.map((block, i) => (
            <div key={i}>
              {block.h && <h2 className="text-2xl font-bold text-navy-deep mt-6 mb-3">{block.h}</h2>}
              {block.p && <p className="text-base leading-relaxed text-muted-foreground">{block.p}</p>}
              {block.list && (
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  {block.list.map((li, j) => <li key={j}>{li}</li>)}
                </ul>
              )}
            </div>
          ))}

          <div className="mt-12 p-6 rounded-xl bg-card border border-border" style={{ boxShadow: "var(--shadow-card)" }}>
            <p className="text-navy-deep font-semibold mb-3">¿Quieres llevar esto a la práctica?</p>
            <Link to="/contacto" className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-gold text-navy-deep font-semibold hover:bg-gold-soft transition-all" style={{ boxShadow: "var(--shadow-gold)" }}>
              Solicita una cotización <ArrowRight size={16} />
            </Link>
          </div>
        </article>
      </section>
    </>
  );
}

export { posts };
