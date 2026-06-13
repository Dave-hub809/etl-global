import { Link } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight, Eye, Gem, Target } from "lucide-react";
//#region src/routes/nosotros.tsx?tsr-split=component
var values = [
	{
		t: "Transparencia operativa",
		d: "Reportamos cada etapa. Sin opacidad ni costos ocultos."
	},
	{
		t: "Rigor profesional",
		d: "Procesos auditados y verificación en origen para cada operación."
	},
	{
		t: "Orientación al cliente",
		d: "Importamos lo que tu negocio necesita, no lo que conviene vender."
	},
	{
		t: "Compromiso local",
		d: "Equipo 100% colombiano, con operación directa desde Colombia hacia mercados internacionales."
	}
];
function AboutPage() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsxs("section", {
			className: "bg-hero text-white py-20 lg:py-28 relative overflow-hidden",
			children: [/* @__PURE__ */ jsx("div", {
				className: "absolute inset-0 opacity-30",
				style: { background: "var(--gradient-navy-glow)" }
			}), /* @__PURE__ */ jsxs("div", {
				className: "container-x relative grid lg:grid-cols-2 gap-12 items-center",
				children: [/* @__PURE__ */ jsxs("div", { children: [
					/* @__PURE__ */ jsx("p", {
						className: "text-gold text-sm uppercase tracking-widest font-semibold mb-4",
						children: "Nosotros"
					}),
					/* @__PURE__ */ jsxs("h1", {
						className: "text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6",
						children: ["Tu aliado estratégico de ", /* @__PURE__ */ jsx("span", {
							className: "text-gradient-gold",
							children: "comercio internacional."
						})]
					}),
					/* @__PURE__ */ jsx("p", {
						className: "text-lg text-silver/80 leading-relaxed",
						children: "ETL Global S.A.S. — Enterprise Trade and Logistics Global — es una compañía colombiana enfocada en hacer del comercio exterior una operación predecible, segura y rentable para empresas y emprendedores."
					})
				] }), /* @__PURE__ */ jsxs("div", {
					className: "rounded-2xl border border-white/10 p-10 bg-white/[0.03] backdrop-blur-sm",
					children: [/* @__PURE__ */ jsx("p", {
						className: "text-gold text-xs uppercase tracking-widest font-semibold mb-2",
						children: "Filosofía"
					}), /* @__PURE__ */ jsx("p", {
						className: "text-xl md:text-2xl font-semibold leading-relaxed",
						children: "\"No importamos lo que queremos vender. Importamos exactamente lo que tú necesitas.\""
					})]
				})]
			})]
		}),
		/* @__PURE__ */ jsx("section", {
			className: "py-20 bg-background",
			children: /* @__PURE__ */ jsx("div", {
				className: "container-x grid md:grid-cols-3 gap-6",
				children: [
					{
						icon: Target,
						t: "Misión",
						d: "Conectar empresas latinoamericanas con mercados globales mediante operaciones de comercio exterior seguras, transparentes y rentables."
					},
					{
						icon: Eye,
						t: "Visión",
						d: "Ser la firma de referencia en comercio internacional para emprendedores y pymes que necesitan operar con estándares corporativos."
					},
					{
						icon: Gem,
						t: "Valor central",
						d: "Trazabilidad total. Cada operación se reporta etapa por etapa, sin opacidad ni improvisaciones."
					}
				].map((b, i) => /* @__PURE__ */ jsxs("div", {
					className: "p-8 rounded-xl bg-card border border-border",
					style: { boxShadow: "var(--shadow-card)" },
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "w-12 h-12 rounded-lg bg-navy-deep text-gold flex items-center justify-center mb-5",
							children: /* @__PURE__ */ jsx(b.icon, { size: 22 })
						}),
						/* @__PURE__ */ jsx("h3", {
							className: "text-xl font-bold text-navy-deep mb-3",
							children: b.t
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-muted-foreground leading-relaxed",
							children: b.d
						})
					]
				}, i))
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "py-20 bg-secondary",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container-x",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "max-w-2xl mb-12",
					children: [/* @__PURE__ */ jsx("p", {
						className: "text-gold text-sm uppercase tracking-widest font-semibold mb-3",
						children: "Valores"
					}), /* @__PURE__ */ jsx("h2", {
						className: "text-3xl md:text-5xl font-bold text-navy-deep",
						children: "Lo que sostiene cada decisión."
					})]
				}), /* @__PURE__ */ jsx("div", {
					className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6",
					children: values.map((v, i) => /* @__PURE__ */ jsxs("div", {
						className: "p-6 rounded-xl bg-card border border-border",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "text-3xl font-bold text-gold mb-3",
								children: ["0", i + 1]
							}),
							/* @__PURE__ */ jsx("h3", {
								className: "font-semibold text-navy-deep mb-2",
								children: v.t
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-sm text-muted-foreground",
								children: v.d
							})
						]
					}, i))
				})]
			})
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "py-20 bg-hero text-white relative overflow-hidden",
			children: [/* @__PURE__ */ jsx("div", {
				className: "absolute inset-0 opacity-30",
				style: { background: "var(--gradient-navy-glow)" }
			}), /* @__PURE__ */ jsxs("div", {
				className: "container-x relative max-w-3xl text-center",
				children: [/* @__PURE__ */ jsx("h2", {
					className: "text-3xl md:text-5xl font-bold mb-6",
					children: "Hablemos de tu próxima operación."
				}), /* @__PURE__ */ jsxs(Link, {
					to: "/contacto",
					className: "inline-flex items-center gap-2 px-8 py-4 rounded-md bg-gold text-navy-deep font-semibold hover:bg-gold-soft",
					style: { boxShadow: "var(--shadow-gold)" },
					children: ["Solicitar Cotización ", /* @__PURE__ */ jsx(ArrowRight, { size: 18 })]
				})]
			})]
		})
	] });
}
//#endregion
export { AboutPage as component };
