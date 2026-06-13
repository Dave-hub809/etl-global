import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/etl-logo.asset.json";

const navLinks = [
  { to: "/", label: "Inicio" },
  { to: "/servicios", label: "Servicios" },
  { to: "/sectores", label: "Sectores" },
  { to: "/nosotros", label: "Nosotros" },
  { to: "/blog", label: "Blog" },
  { to: "/faq", label: "FAQ" },
  { to: "/contacto", label: "Contacto" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-navy-deep/95 backdrop-blur-md border-b border-white/10">
      <div className="container-x flex items-center justify-between h-28">
        <Link
          to="/"
          className="flex items-center gap-3 shrink-0"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img src={logo.url} alt="ETL Global" className="h-20 w-auto" />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeProps={{ className: "text-gold" }}
              className="px-4 py-2 text-sm font-medium text-silver hover:text-gold transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            to="/contacto"
            className="px-5 py-2.5 text-sm font-semibold rounded-md bg-gold text-navy-deep hover:bg-gold-soft transition-all shadow-gold"
            style={{ boxShadow: "var(--shadow-gold)" }}
          >
            Solicitar Cotización
          </Link>
        </div>

        <button
          aria-label="Menu"
          className="lg:hidden text-silver p-2"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-white/10 bg-navy-deep">
          <div className="container-x py-4 flex flex-col gap-1">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="px-4 py-3 text-silver hover:text-gold font-medium"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contacto"
              onClick={() => setOpen(false)}
              className="mt-2 px-5 py-3 text-center text-sm font-semibold rounded-md bg-gold text-navy-deep"
            >
              Solicitar Cotización
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
