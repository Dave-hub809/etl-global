import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Globe, Instagram } from "lucide-react";
import logo from "@/assets/etl-logo.asset.json";

export function SiteFooter() {
  return (
    <footer className="bg-navy-deep text-silver">
      <div className="container-x py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <img src={logo.url} alt="ETL Global" className="h-20 w-auto mb-4" />
          <p className="text-sm text-silver/70 leading-relaxed max-w-xs">
            Enterprise Trade and Logistics Global S.A.S. — Conectando mercados globales con operaciones de comercio exterior seguras y transparentes.
          </p>
        </div>

        <div>
          <h4 className="text-gold font-semibold mb-4 text-sm uppercase tracking-wider">Compañía</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/nosotros" className="hover:text-gold">Nosotros</Link></li>
            <li><Link to="/servicios" className="hover:text-gold">Servicios</Link></li>
            <li><Link to="/sectores" className="hover:text-gold">Sectores</Link></li>
            <li><Link to="/blog" className="hover:text-gold">Blog</Link></li>
            <li><Link to="/faq" className="hover:text-gold">Preguntas frecuentes</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-gold font-semibold mb-4 text-sm uppercase tracking-wider">Servicios</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/servicios" hash="consultoria-comercio-exterior" className="hover:text-gold">Consultoría en Comercio Exterior</Link></li>
            <li><Link to="/servicios" hash="busqueda-proveedores" className="hover:text-gold">Búsqueda de Proveedores</Link></li>
            <li><Link to="/servicios" hash="gestion-importaciones" className="hover:text-gold">Gestión de Importaciones</Link></li>
            <li><Link to="/servicios" hash="importacion-llave-en-mano" className="hover:text-gold">Importación Llave en Mano</Link></li>
            <li><Link to="/servicios" hash="exportaciones" className="hover:text-gold">Exportaciones</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-gold font-semibold mb-4 text-sm uppercase tracking-wider">Contacto</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-3"><MapPin size={16} className="text-gold shrink-0 mt-0.5" /> Bogotá D.C., Colombia</li>
            <li className="flex gap-3"><Mail size={16} className="text-gold shrink-0 mt-0.5" /> contacto@etlglobal.co</li>
            <li className="flex gap-3"><Phone size={16} className="text-gold shrink-0 mt-0.5" /> +57 320 445 4529</li>
            <li className="flex gap-3"><Globe size={16} className="text-gold shrink-0 mt-0.5" /> Colombia</li>
            <li className="flex gap-3"><Instagram size={16} className="text-gold shrink-0 mt-0.5" /> <a href="https://instagram.com/etlglobalco" target="_blank" rel="noopener noreferrer" className="hover:text-gold">@etlglobalco</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x py-6 flex flex-col md:flex-row justify-between gap-4 text-xs text-silver/60">
          <p>© {new Date().getFullYear()} ETL GLOBAL S.A.S. — Todos los derechos reservados.</p>
          <p>Enterprise Trade and Logistics Global · Connecting Markets Worldwide</p>
        </div>
      </div>
    </footer>
  );
}
