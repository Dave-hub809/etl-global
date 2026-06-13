import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  const url = "https://wa.me/573204454529?text=Hola%20ETL%20Global%2C%20quiero%20cotizar%20una%20importaci%C3%B3n.";
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Hablar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 group flex items-center gap-3 bg-[#25D366] text-white px-5 py-4 rounded-full shadow-2xl hover:scale-105 transition-transform"
      style={{ boxShadow: "0 12px 40px -8px rgba(37, 211, 102, 0.55)" }}
    >
      <MessageCircle size={22} />
      <span className="hidden sm:inline font-semibold text-sm">WhatsApp</span>
    </a>
  );
}
