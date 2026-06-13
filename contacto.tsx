import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, MessageCircle, CheckCircle2, ArrowRight, Instagram } from "lucide-react";
import { z } from "zod";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto — Solicita tu Cotización | ETL Global" },
      { name: "description", content: "Solicita una cotización de importación o exportación. Equipo de ETL Global en Bogotá, Colombia. Operaciones con China y LATAM." },
      { property: "og:title", content: "Contacto — ETL Global S.A.S." },
      { property: "og:description", content: "Iniciemos tu próxima operación internacional." },
      { property: "og:url", content: "/contacto" },
    ],
    links: [{ rel: "canonical", href: "/contacto" }],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Ingresa tu nombre").max(80),
  company: z.string().trim().max(120).optional(),
  email: z.string().trim().email("Correo inválido").max(160),
  phone: z.string().trim().min(7, "Teléfono inválido").max(20),
  service: z.string().min(1, "Selecciona un servicio"),
  message: z.string().trim().min(10, "Cuéntanos un poco más").max(1500),
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const res = schema.safeParse(data);
    if (!res.success) {
      const errs: Record<string, string> = {};
      res.error.issues.forEach(i => { errs[String(i.path[0])] = i.message; });
      setErrors(errs);
      return;
    }
    setErrors({});
    setSent(true);
  };

  return (
    <>
      <section className="bg-hero text-white py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30" style={{ background: "var(--gradient-navy-glow)" }} />
        <div className="container-x relative max-w-4xl">
          <p className="text-gold text-sm uppercase tracking-widest font-semibold mb-4">Contacto</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">Hablemos de tu próxima operación internacional.</h1>
          <p className="text-lg text-silver/80 max-w-2xl">Cuéntanos qué necesitas importar o exportar. Te contactaremos a la brevedad para entender tu caso y dar los siguientes pasos.</p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container-x grid lg:grid-cols-3 gap-10">
          <div className="space-y-6">
            <div className="p-6 rounded-xl bg-card border border-border" style={{ boxShadow: "var(--shadow-card)" }}>
              <MapPin className="text-gold mb-3" size={22} />
              <p className="font-semibold text-navy-deep">Ubicación</p>
              <p className="text-sm text-muted-foreground mt-1">Bogotá D.C., Colombia</p>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border" style={{ boxShadow: "var(--shadow-card)" }}>
              <Mail className="text-gold mb-3" size={22} />
              <p className="font-semibold text-navy-deep">Correo</p>
              <a href="mailto:contacto@etlglobal.co" className="text-sm text-muted-foreground hover:text-gold">contacto@etlglobal.co</a>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border" style={{ boxShadow: "var(--shadow-card)" }}>
              <Phone className="text-gold mb-3" size={22} />
              <p className="font-semibold text-navy-deep">Teléfono</p>
              <p className="text-sm text-muted-foreground mt-1">+57 320 445 4529</p>
            </div>
            <a href="https://wa.me/573204454529" target="_blank" rel="noopener noreferrer" className="block p-6 rounded-xl bg-navy-deep text-white border border-navy-deep hover:bg-navy transition-colors">
              <MessageCircle className="text-gold mb-3" size={22} />
              <p className="font-semibold">WhatsApp directo</p>
              <p className="text-sm text-silver/70 mt-1 flex items-center gap-2">Escríbenos ahora <ArrowRight size={14} /></p>
            </a>
            <a href="https://instagram.com/etlglobalco" target="_blank" rel="noopener noreferrer" className="block p-6 rounded-xl text-white border transition-colors hover:opacity-95" style={{ background: "linear-gradient(135deg, #F58529 0%, #DD2A7B 50%, #8134AF 100%)", borderColor: "transparent" }}>
              <Instagram className="mb-3" size={22} />
              <p className="font-semibold">Síguenos en Instagram</p>
              <p className="text-sm text-white/80 mt-1 flex items-center gap-2">@etlglobalco <ArrowRight size={14} /></p>
            </a>
          </div>

          <div className="lg:col-span-2">
            <div className="p-8 lg:p-10 rounded-2xl bg-card border border-border" style={{ boxShadow: "var(--shadow-card)" }}>
              {sent ? (
                <div className="text-center py-12">
                  <CheckCircle2 className="text-gold mx-auto mb-4" size={48} />
                  <h2 className="text-2xl font-bold text-navy-deep mb-2">Gracias por escribirnos</h2>
                  <p className="text-muted-foreground">Recibimos tu mensaje. Un especialista de ETL Global te contactará para revisar tu caso y coordinar los próximos pasos.</p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-5" noValidate>
                  <h2 className="text-2xl font-bold text-navy-deep mb-2">Solicita tu cotización</h2>
                  <p className="text-sm text-muted-foreground mb-6">Completa el formulario y un consultor te responderá con un escenario operativo claro.</p>

                  <div className="grid md:grid-cols-2 gap-5">
                    <Field name="name" label="Nombre completo *" error={errors.name} />
                    <Field name="company" label="Empresa" error={errors.company} />
                    <Field name="email" type="email" label="Correo electrónico *" error={errors.email} />
                    <Field name="phone" type="tel" label="Teléfono *" error={errors.phone} />
                  </div>

                  <div>
                    <label htmlFor="contact-service" className="block text-sm font-medium text-navy-deep mb-2">Tipo de servicio *</label>
                    <select id="contact-service" name="service" defaultValue="" className="w-full px-4 py-3 rounded-md border border-input bg-background focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20">
                      <option value="" disabled>Selecciona un servicio</option>
                      <option>Importación desde China</option>
                      <option>Importación Llave en Mano</option>
                      <option>Búsqueda de Proveedores</option>
                      <option>Validación de Proveedores</option>
                      <option>Consultoría Comercio Exterior</option>
                      <option>Exportaciones</option>
                      <option>Intermediación Comercial</option>
                      <option>Otro</option>
                    </select>
                    {errors.service && <p className="text-destructive text-xs mt-1">{errors.service}</p>}
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-sm font-medium text-navy-deep mb-2">Descripción de tu necesidad *</label>
                    <textarea id="contact-message" name="message" rows={5} placeholder="Cuéntanos qué quieres importar o exportar, volumen aproximado, mercado y plazos." className="w-full px-4 py-3 rounded-md border border-input bg-background focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 resize-none" />
                    {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
                  </div>

                  <div className="flex flex-wrap gap-4 pt-2">
                    <button type="submit" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md bg-gold text-navy-deep font-semibold hover:bg-gold-soft transition-all" style={{ boxShadow: "var(--shadow-gold)" }}>
                      Solicitar Cotización <ArrowRight size={16} />
                    </button>
                    <a href="https://wa.me/573204454529" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md border border-navy-deep text-navy-deep font-semibold hover:bg-secondary">
                      WhatsApp
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ name, label, type = "text", error }: { name: string; label: string; type?: string; error?: string }) {
  const id = `contact-${name}`;
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-navy-deep mb-2">{label}</label>
      <input
        id={id}
        name={name}
        type={type}
        className="w-full px-4 py-3 rounded-md border border-input bg-background focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
      />
      {error && <p className="text-destructive text-xs mt-1">{error}</p>}
    </div>
  );
}
