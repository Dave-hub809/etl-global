import { Link } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { AlertTriangle, ArrowRight, Building2, Calculator, CheckCircle2, Compass, Container, Factory, FileCheck2, Globe2, Handshake, PackageSearch, Search, ShieldCheck, Sparkles, Truck, Users } from "lucide-react";
//#region src/routes/index.tsx?tsr-split=component
var problems = [
	{
		icon: Compass,
		t: "No sé cómo importar",
		d: "Procesos confusos, normativas cambiantes y miedo a equivocarse en cada paso."
	},
	{
		icon: ShieldCheck,
		t: "No confío en proveedores extranjeros",
		d: "Te aseguramos contratos, inspecciones y verificación legal en origen."
	},
	{
		icon: Calculator,
		t: "No conozco los costos reales",
		d: "Calculamos el costo total puerta a puerta antes de comprometer un peso."
	},
	{
		icon: AlertTriangle,
		t: "Tengo miedo de perder dinero",
		d: "Operamos con etapas auditadas y trazabilidad total de tu mercancía."
	},
	{
		icon: Factory,
		t: "Necesito maquinaria especializada",
		d: "Identificamos fabricantes técnicos y gestionamos importaciones llave en mano."
	}
];
var services = [
	{
		icon: Search,
		t: "Sourcing Internacional",
		d: "Identificamos los mejores proveedores en China y otros mercados."
	},
	{
		icon: FileCheck2,
		t: "Validación de Proveedores",
		d: "Auditorías legales, financieras y de producción en origen."
	},
	{
		icon: Container,
		t: "Gestión de Importaciones",
		d: "Operación integral: producción, naviera, aduanas y entrega final."
	},
	{
		icon: Truck,
		t: "Importación Llave en Mano",
		d: "Tú nos dices qué necesitas. Nosotros entregamos en tu bodega."
	},
	{
		icon: Globe2,
		t: "Exportaciones",
		d: "Llevamos tu producto colombiano a mercados internacionales."
	},
	{
		icon: Handshake,
		t: "Intermediación Comercial",
		d: "Representación comercial entre Colombia, China y LATAM."
	}
];
var sectors = [
	{
		icon: Sparkles,
		t: "Emprendedores",
		d: "Tu primer contenedor sin perder dinero ni tiempo."
	},
	{
		icon: Building2,
		t: "Pymes",
		d: "Escala tu catálogo importando con costos optimizados."
	},
	{
		icon: Factory,
		t: "Industria",
		d: "Maquinaria, repuestos y materias primas técnicas."
	},
	{
		icon: PackageSearch,
		t: "Distribuidores",
		d: "Volumen sostenido con calidad consistente."
	},
	{
		icon: Users,
		t: "Manufactura",
		d: "Insumos especializados con trazabilidad completa."
	}
];
var process = [
	{
		n: "01",
		t: "Diagnóstico",
		d: "Entendemos tu necesidad real y objetivo comercial."
	},
	{
		n: "02",
		t: "Sourcing",
		d: "Identificamos y validamos proveedores en origen."
	},
	{
		n: "03",
		t: "Cotización Real",
		d: "Te entregamos el costo total puerta a puerta."
	},
	{
		n: "04",
		t: "Producción",
		d: "Supervisamos calidad y tiempos de fabricación."
	},
	{
		n: "05",
		t: "Logística",
		d: "Naviera, aduanas y nacionalización en Colombia."
	},
	{
		n: "06",
		t: "Entrega",
		d: "Mercancía en tu bodega, lista para operar."
	}
];
var faqs = [
	{
		q: "¿Puedo importar sin experiencia previa?",
		a: "Sí. Acompañamos a emprendedores desde su primer contenedor, gestionando cada etapa del proceso."
	},
	{
		q: "¿Cómo verifican a los proveedores?",
		a: "Realizamos auditorías legales, financieras y de planta directamente en origen antes de cerrar cualquier compra."
	},
	{
		q: "¿Pueden importar maquinaria industrial?",
		a: "Sí. Operamos importaciones técnicas llave en mano con asesoría arancelaria y logística especializada."
	},
	{
		q: "¿Cuánto cuesta importar desde China?",
		a: "Depende del producto, volumen e Incoterm. Calculamos el costo total antes de avanzar."
	}
];
function Home() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsxs("section", {
			className: "relative overflow-hidden bg-hero text-white",
			children: [
				/* @__PURE__ */ jsx("div", {
					className: "absolute inset-0 opacity-30",
					style: { background: "var(--gradient-navy-glow)" }
				}),
				/* @__PURE__ */ jsx("div", {
					className: "absolute inset-0 opacity-[0.04]",
					style: {
						backgroundImage: "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
						backgroundSize: "60px 60px"
					}
				}),
				/* @__PURE__ */ jsx("div", {
					className: "container-x relative pt-20 pb-24 lg:pt-28 lg:pb-32",
					children: /* @__PURE__ */ jsxs("div", {
						className: "grid lg:grid-cols-12 gap-10 items-center",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "lg:col-span-7",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/5 text-gold text-xs font-medium tracking-wider uppercase mb-6",
									children: [/* @__PURE__ */ jsx("span", { className: "w-2 h-2 rounded-full bg-gold animate-pulse" }), "Connecting Markets Worldwide"]
								}),
								/* @__PURE__ */ jsxs("h1", {
									className: "text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] mb-6",
									children: [
										"Importamos lo que tu negocio necesita. ",
										/* @__PURE__ */ jsx("span", {
											className: "text-gradient-gold",
											children: "Sin riesgos."
										}),
										" Sin improvisaciones."
									]
								}),
								/* @__PURE__ */ jsx("p", {
									className: "text-lg text-silver/80 max-w-2xl mb-8 leading-relaxed",
									children: "Desde la búsqueda de proveedores hasta la entrega final, gestionamos todo tu proceso de comercio internacional con transparencia y precisión operativa."
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "flex flex-wrap gap-4",
									children: [/* @__PURE__ */ jsxs(Link, {
										to: "/contacto",
										className: "inline-flex items-center gap-2 px-7 py-4 rounded-md bg-gold text-navy-deep font-semibold hover:bg-gold-soft transition-all",
										style: { boxShadow: "var(--shadow-gold)" },
										children: ["Solicitar Cotización ", /* @__PURE__ */ jsx(ArrowRight, { size: 18 })]
									}), /* @__PURE__ */ jsx("a", {
										href: "https://wa.me/573204454529?text=Hola%20ETL%20Global%2C%20quiero%20cotizar%20una%20importaci%C3%B3n.",
										target: "_blank",
										rel: "noopener noreferrer",
										className: "inline-flex items-center gap-2 px-7 py-4 rounded-md border border-white/20 text-white hover:bg-white/10 transition-all font-semibold",
										children: "Hablar por WhatsApp"
									})]
								}),
								/* @__PURE__ */ jsx("div", {
									className: "mt-10 grid grid-cols-3 gap-6 max-w-xl mx-auto lg:mx-0",
									children: [
										{
											k: "100%",
											v: "Trazabilidad"
										},
										{
											k: "0",
											v: "RIESGOS"
										},
										{
											k: "A→Z",
											v: "Operación integral"
										}
									].map((s) => /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
										className: "text-3xl md:text-4xl font-bold text-gold",
										children: s.k
									}), /* @__PURE__ */ jsx("div", {
										className: "text-xs uppercase tracking-wider text-silver/60 mt-1",
										children: s.v
									})] }, s.v))
								})
							]
						}), /* @__PURE__ */ jsx("div", {
							className: "lg:col-span-5 relative hidden lg:block",
							children: /* @__PURE__ */ jsxs("div", {
								className: "relative aspect-square rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6 overflow-hidden",
								children: [/* @__PURE__ */ jsx("div", {
									className: "absolute inset-0 rounded-2xl",
									style: { background: "var(--gradient-navy-glow)" }
								}), /* @__PURE__ */ jsxs("svg", {
									viewBox: "0 0 400 400",
									className: "w-full h-full relative",
									fill: "none",
									"aria-hidden": "true",
									children: [/* @__PURE__ */ jsxs("defs", { children: [/* @__PURE__ */ jsxs("linearGradient", {
										id: "gld",
										x1: "0",
										y1: "0",
										x2: "1",
										y2: "1",
										children: [/* @__PURE__ */ jsx("stop", {
											offset: "0%",
											stopColor: "oklch(0.88 0.08 88)"
										}), /* @__PURE__ */ jsx("stop", {
											offset: "100%",
											stopColor: "oklch(0.78 0.12 85)"
										})]
									}), /* @__PURE__ */ jsxs("radialGradient", {
										id: "globeGrad",
										cx: "50%",
										cy: "40%",
										r: "60%",
										children: [/* @__PURE__ */ jsx("stop", {
											offset: "0%",
											stopColor: "oklch(0.32 0.09 265)"
										}), /* @__PURE__ */ jsx("stop", {
											offset: "100%",
											stopColor: "oklch(0.18 0.06 265)"
										})]
									})] }), /* @__PURE__ */ jsxs("g", {
										transform: "translate(200 200)",
										children: [
											/* @__PURE__ */ jsx("circle", {
												r: "135",
												fill: "url(#globeGrad)",
												stroke: "url(#gld)",
												strokeWidth: "1",
												opacity: "0.95"
											}),
											/* @__PURE__ */ jsxs("g", {
												opacity: "0.45",
												stroke: "url(#gld)",
												strokeWidth: "1",
												children: [
													/* @__PURE__ */ jsx("ellipse", {
														rx: "135",
														ry: "50",
														children: /* @__PURE__ */ jsx("animateTransform", {
															attributeName: "transform",
															type: "rotate",
															from: "0",
															to: "360",
															dur: "22s",
															repeatCount: "indefinite"
														})
													}),
													/* @__PURE__ */ jsx("ellipse", {
														rx: "135",
														ry: "80",
														children: /* @__PURE__ */ jsx("animateTransform", {
															attributeName: "transform",
															type: "rotate",
															from: "360",
															to: "0",
															dur: "28s",
															repeatCount: "indefinite"
														})
													}),
													/* @__PURE__ */ jsx("ellipse", {
														rx: "135",
														ry: "115",
														children: /* @__PURE__ */ jsx("animateTransform", {
															attributeName: "transform",
															type: "rotate",
															from: "0",
															to: "360",
															dur: "34s",
															repeatCount: "indefinite"
														})
													})
												]
											}),
											/* @__PURE__ */ jsx("line", {
												x1: "0",
												y1: "-135",
												x2: "0",
												y2: "135",
												stroke: "url(#gld)",
												strokeWidth: "0.8",
												opacity: "0.4"
											}),
											/* @__PURE__ */ jsx("ellipse", {
												rx: "135",
												ry: "40",
												stroke: "url(#gld)",
												strokeWidth: "0.8",
												opacity: "0.3"
											}),
											/* @__PURE__ */ jsxs("g", {
												fill: "oklch(0.78 0.12 85)",
												opacity: "0.85",
												children: [
													/* @__PURE__ */ jsx("path", { d: "M -90 -40 q 12 -18 28 -10 t 22 14 q -4 18 -22 14 t -28 -18 z" }),
													/* @__PURE__ */ jsx("path", { d: "M -30 10 q 18 -14 36 -4 t 18 28 q -10 14 -28 8 t -26 -32 z" }),
													/* @__PURE__ */ jsx("path", { d: "M 35 -55 q 20 -8 38 6 t 20 22 q -14 10 -32 2 t -26 -30 z" }),
													/* @__PURE__ */ jsx("path", { d: "M 50 30 q 16 4 26 22 t -6 28 q -22 -4 -28 -22 t 8 -28 z" })
												]
											}),
											/* @__PURE__ */ jsxs("g", {
												fill: "oklch(0.88 0.08 88)",
												children: [
													/* @__PURE__ */ jsx("circle", {
														cx: "-70",
														cy: "-30",
														r: "4",
														children: /* @__PURE__ */ jsx("animate", {
															attributeName: "r",
															values: "3;6;3",
															dur: "2.4s",
															repeatCount: "indefinite"
														})
													}),
													/* @__PURE__ */ jsx("circle", {
														cx: "60",
														cy: "-40",
														r: "4",
														children: /* @__PURE__ */ jsx("animate", {
															attributeName: "r",
															values: "3;6;3",
															dur: "2.8s",
															begin: "0.6s",
															repeatCount: "indefinite"
														})
													}),
													/* @__PURE__ */ jsx("circle", {
														cx: "20",
														cy: "60",
														r: "4",
														children: /* @__PURE__ */ jsx("animate", {
															attributeName: "r",
															values: "3;6;3",
															dur: "2.6s",
															begin: "1.1s",
															repeatCount: "indefinite"
														})
													}),
													/* @__PURE__ */ jsx("circle", {
														cx: "-40",
														cy: "40",
														r: "4",
														children: /* @__PURE__ */ jsx("animate", {
															attributeName: "r",
															values: "3;6;3",
															dur: "3s",
															begin: "0.3s",
															repeatCount: "indefinite"
														})
													})
												]
											}),
											/* @__PURE__ */ jsxs("g", {
												fill: "none",
												stroke: "url(#gld)",
												strokeWidth: "1.6",
												strokeLinecap: "round",
												children: [
													/* @__PURE__ */ jsx("path", {
														d: "M -70 -30 Q 0 -130 60 -40",
														strokeDasharray: "180",
														strokeDashoffset: "180",
														children: /* @__PURE__ */ jsx("animate", {
															attributeName: "stroke-dashoffset",
															from: "180",
															to: "0",
															dur: "2.6s",
															repeatCount: "indefinite"
														})
													}),
													/* @__PURE__ */ jsx("path", {
														d: "M 60 -40 Q 80 30 20 60",
														strokeDasharray: "160",
														strokeDashoffset: "160",
														children: /* @__PURE__ */ jsx("animate", {
															attributeName: "stroke-dashoffset",
															from: "160",
															to: "0",
															dur: "2.8s",
															begin: "0.4s",
															repeatCount: "indefinite"
														})
													}),
													/* @__PURE__ */ jsx("path", {
														d: "M 20 60 Q -40 90 -40 40",
														strokeDasharray: "140",
														strokeDashoffset: "140",
														children: /* @__PURE__ */ jsx("animate", {
															attributeName: "stroke-dashoffset",
															from: "140",
															to: "0",
															dur: "2.4s",
															begin: "0.8s",
															repeatCount: "indefinite"
														})
													}),
													/* @__PURE__ */ jsx("path", {
														d: "M -40 40 Q -100 0 -70 -30",
														strokeDasharray: "140",
														strokeDashoffset: "140",
														children: /* @__PURE__ */ jsx("animate", {
															attributeName: "stroke-dashoffset",
															from: "140",
															to: "0",
															dur: "2.6s",
															begin: "1.2s",
															repeatCount: "indefinite"
														})
													})
												]
											}),
											/* @__PURE__ */ jsx("g", {
												fill: "oklch(0.88 0.08 88)",
												children: /* @__PURE__ */ jsx("path", {
													d: "M -6 0 L 8 -2 L 10 0 L 8 2 Z M -2 -4 L 2 0 L -2 4 Z",
													transform: "rotate(0)",
													children: /* @__PURE__ */ jsx("animateMotion", {
														dur: "6s",
														repeatCount: "indefinite",
														rotate: "auto",
														path: "M -70 -30 Q 0 -130 60 -40"
													})
												})
											}),
											/* @__PURE__ */ jsxs("g", {
												transform: "translate(-70 110)",
												children: [
													/* @__PURE__ */ jsx("animateTransform", {
														attributeName: "transform",
														type: "translate",
														values: "-90 110; -50 110; -90 110",
														dur: "9s",
														repeatCount: "indefinite"
													}),
													/* @__PURE__ */ jsx("rect", {
														x: "-26",
														y: "-14",
														width: "12",
														height: "8",
														fill: "oklch(0.78 0.12 85)"
													}),
													/* @__PURE__ */ jsx("rect", {
														x: "-12",
														y: "-14",
														width: "12",
														height: "8",
														fill: "oklch(0.88 0.08 88)"
													}),
													/* @__PURE__ */ jsx("rect", {
														x: "2",
														y: "-14",
														width: "12",
														height: "8",
														fill: "oklch(0.78 0.12 85)"
													}),
													/* @__PURE__ */ jsx("rect", {
														x: "-19",
														y: "-22",
														width: "12",
														height: "8",
														fill: "oklch(0.88 0.08 88)"
													}),
													/* @__PURE__ */ jsx("rect", {
														x: "-5",
														y: "-22",
														width: "12",
														height: "8",
														fill: "oklch(0.78 0.12 85)"
													}),
													/* @__PURE__ */ jsx("path", {
														d: "M -32 -6 L 22 -6 L 16 6 L -26 6 Z",
														fill: "oklch(0.55 0.015 255)"
													}),
													/* @__PURE__ */ jsx("path", {
														d: "M -40 8 q 8 4 18 0 t 18 0 t 18 0",
														stroke: "oklch(0.88 0.005 250)",
														strokeWidth: "1",
														opacity: "0.45",
														fill: "none",
														children: /* @__PURE__ */ jsx("animate", {
															attributeName: "opacity",
															values: "0.2;0.55;0.2",
															dur: "2s",
															repeatCount: "indefinite"
														})
													})
												]
											})
										]
									})]
								})]
							})
						})]
					})
				}),
				/* @__PURE__ */ jsx("div", {
					className: "border-t border-white/10",
					children: /* @__PURE__ */ jsxs("div", {
						className: "container-x py-6 flex flex-wrap items-center justify-between gap-4 text-xs uppercase tracking-widest text-silver/50",
						children: [
							/* @__PURE__ */ jsx("span", { children: "Operaciones · Colombia" }),
							/* @__PURE__ */ jsx("span", { children: "Sourcing · China" }),
							/* @__PURE__ */ jsx("span", { children: "Distribución · LATAM" }),
							/* @__PURE__ */ jsx("span", { children: "Logística · Global" })
						]
					})
				})
			]
		}),
		/* @__PURE__ */ jsx("section", {
			className: "py-24 bg-background",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container-x",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "max-w-3xl mb-14",
					children: [
						/* @__PURE__ */ jsx("p", {
							className: "text-gold text-sm uppercase tracking-widest font-semibold mb-3",
							children: "¿POR QUÉ ETL GLOBAL?"
						}),
						/* @__PURE__ */ jsx("h2", {
							className: "text-3xl md:text-5xl font-bold text-navy-deep",
							children: "Importar no debería sentirse como una apuesta."
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-muted-foreground mt-4 text-lg",
							children: "Resolvemos los puntos donde la mayoría de operaciones internacionales fracasan."
						})
					]
				}), /* @__PURE__ */ jsx("div", {
					className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6",
					children: problems.map((p, i) => /* @__PURE__ */ jsxs("div", {
						className: "p-8 rounded-xl bg-card border border-border hover:border-gold/40 hover:-translate-y-1 transition-all",
						style: { boxShadow: "var(--shadow-card)" },
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "w-12 h-12 rounded-lg bg-navy-deep text-gold flex items-center justify-center mb-5",
								children: /* @__PURE__ */ jsx(p.icon, { size: 22 })
							}),
							/* @__PURE__ */ jsx("h3", {
								className: "font-semibold text-lg text-navy-deep mb-2",
								children: p.t
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-sm text-muted-foreground leading-relaxed",
								children: p.d
							})
						]
					}, i))
				})]
			})
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "py-24 bg-navy-deep text-white relative overflow-hidden",
			children: [/* @__PURE__ */ jsx("div", {
				className: "absolute inset-0 opacity-20",
				style: { background: "var(--gradient-navy-glow)" }
			}), /* @__PURE__ */ jsxs("div", {
				className: "container-x relative",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "max-w-3xl mb-14",
					children: [
						/* @__PURE__ */ jsx("p", {
							className: "text-gold text-sm uppercase tracking-widest font-semibold mb-3",
							children: "Nuestro proceso"
						}),
						/* @__PURE__ */ jsx("h2", {
							className: "text-3xl md:text-5xl font-bold",
							children: "Una operación auditada en cada etapa."
						}),
						/* @__PURE__ */ jsx("p", {
							className: "text-silver/70 mt-4 text-lg",
							children: "Seis fases de control para que tu mercancía llegue exactamente como la necesitas."
						})
					]
				}), /* @__PURE__ */ jsx("div", {
					className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 rounded-xl overflow-hidden",
					children: process.map((p) => /* @__PURE__ */ jsxs("div", {
						className: "p-8 bg-navy-deep hover:bg-navy transition-colors",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "text-5xl font-bold text-gold/80 mb-3",
								children: p.n
							}),
							/* @__PURE__ */ jsx("h3", {
								className: "text-xl font-semibold mb-2",
								children: p.t
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-sm text-silver/70 leading-relaxed",
								children: p.d
							})
						]
					}, p.n))
				})]
			})]
		}),
		/* @__PURE__ */ jsx("section", {
			className: "py-24 bg-background",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container-x",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex flex-wrap items-end justify-between gap-6 mb-14",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "max-w-2xl",
						children: [/* @__PURE__ */ jsx("p", {
							className: "text-gold text-sm uppercase tracking-widest font-semibold mb-3",
							children: "Servicios"
						}), /* @__PURE__ */ jsx("h2", {
							className: "text-3xl md:text-5xl font-bold text-navy-deep",
							children: "Operaciones de comercio exterior, de extremo a extremo."
						})]
					}), /* @__PURE__ */ jsxs(Link, {
						to: "/servicios",
						className: "inline-flex items-center gap-2 text-navy font-semibold hover:text-gold",
						children: ["Ver todos los servicios ", /* @__PURE__ */ jsx(ArrowRight, { size: 18 })]
					})]
				}), /* @__PURE__ */ jsx("div", {
					className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6",
					children: services.map((s, i) => /* @__PURE__ */ jsxs("div", {
						className: "group p-8 rounded-xl bg-card border border-border hover:border-navy hover:shadow-card-soft transition-all",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "w-12 h-12 rounded-lg flex items-center justify-center mb-5",
								style: { background: "var(--gradient-gold)" },
								children: /* @__PURE__ */ jsx(s.icon, {
									size: 22,
									className: "text-navy-deep"
								})
							}),
							/* @__PURE__ */ jsx("h3", {
								className: "font-semibold text-lg text-navy-deep mb-2 group-hover:text-navy",
								children: s.t
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-sm text-muted-foreground leading-relaxed",
								children: s.d
							})
						]
					}, i))
				})]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "py-24 bg-secondary",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container-x",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "max-w-3xl mb-14",
					children: [/* @__PURE__ */ jsx("p", {
						className: "text-gold text-sm uppercase tracking-widest font-semibold mb-3",
						children: "Sectores que atendemos"
					}), /* @__PURE__ */ jsx("h2", {
						className: "text-3xl md:text-5xl font-bold text-navy-deep",
						children: "Soluciones adaptadas a la madurez de tu operación."
					})]
				}), /* @__PURE__ */ jsx("div", {
					className: "grid md:grid-cols-2 lg:grid-cols-5 gap-4",
					children: sectors.map((s, i) => /* @__PURE__ */ jsxs(Link, {
						to: "/sectores",
						className: "p-6 rounded-xl bg-card border border-border hover:border-gold hover:-translate-y-1 transition-all",
						children: [
							/* @__PURE__ */ jsx(s.icon, {
								size: 28,
								className: "text-navy mb-4"
							}),
							/* @__PURE__ */ jsx("h3", {
								className: "font-semibold text-navy-deep mb-1",
								children: s.t
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-xs text-muted-foreground",
								children: s.d
							})
						]
					}, i))
				})]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "py-24 bg-background",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container-x grid lg:grid-cols-2 gap-16 items-center",
				children: [/* @__PURE__ */ jsxs("div", { children: [
					/* @__PURE__ */ jsx("p", {
						className: "text-gold text-sm uppercase tracking-widest font-semibold mb-3",
						children: "Diferenciadores"
					}),
					/* @__PURE__ */ jsx("h2", {
						className: "text-3xl md:text-5xl font-bold text-navy-deep mb-6",
						children: "Importación segura. Operación transparente."
					}),
					/* @__PURE__ */ jsx("div", {
						className: "space-y-5",
						children: [
							"Importación sin riesgo para emprendedores, pymes y empresas.",
							"Acompañamiento integral del proveedor a tu bodega.",
							"Trazabilidad y reporte de cada etapa de la operación.",
							"Cálculo de costo total real antes de avanzar.",
							"Importamos lo que tú necesitas, no lo que queremos vender."
						].map((b, i) => /* @__PURE__ */ jsxs("div", {
							className: "flex gap-3",
							children: [/* @__PURE__ */ jsx(CheckCircle2, {
								className: "text-gold shrink-0 mt-1",
								size: 20
							}), /* @__PURE__ */ jsx("p", {
								className: "text-foreground",
								children: b
							})]
						}, i))
					})
				] }), /* @__PURE__ */ jsx("div", {
					className: "relative",
					children: /* @__PURE__ */ jsxs("div", {
						className: "rounded-2xl bg-hero text-white p-10 shadow-elegant relative overflow-hidden",
						children: [/* @__PURE__ */ jsx("div", {
							className: "absolute inset-0 opacity-30",
							style: { background: "var(--gradient-navy-glow)" }
						}), /* @__PURE__ */ jsxs("div", {
							className: "relative",
							children: [
								/* @__PURE__ */ jsx("p", {
									className: "text-gold text-xs uppercase tracking-widest font-semibold mb-3",
									children: "¿LISTO PARA IMPORTAR?"
								}),
								/* @__PURE__ */ jsx("h3", {
									className: "text-2xl md:text-3xl font-bold mb-4",
									children: "Solicita una propuesta personalizada para tu importación."
								}),
								/* @__PURE__ */ jsx("p", {
									className: "text-silver/80 mb-6",
									children: "Cuéntanos qué necesitas. Te entregamos un escenario operativo claro, con costos y tiempos verificables."
								}),
								/* @__PURE__ */ jsxs(Link, {
									to: "/contacto",
									className: "inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-gold text-navy-deep font-semibold hover:bg-gold-soft",
									children: ["Iniciar cotización ", /* @__PURE__ */ jsx(ArrowRight, { size: 18 })]
								})
							]
						})]
					})
				})]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "py-24 bg-secondary",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container-x grid lg:grid-cols-3 gap-12",
				children: [/* @__PURE__ */ jsxs("div", { children: [
					/* @__PURE__ */ jsx("p", {
						className: "text-gold text-sm uppercase tracking-widest font-semibold mb-3",
						children: "Preguntas frecuentes"
					}),
					/* @__PURE__ */ jsx("h2", {
						className: "text-3xl md:text-4xl font-bold text-navy-deep mb-6",
						children: "Resolvemos las dudas más comunes antes de tu primera importación."
					}),
					/* @__PURE__ */ jsxs(Link, {
						to: "/faq",
						className: "inline-flex items-center gap-2 text-navy font-semibold hover:text-gold",
						children: ["Ver todas las preguntas ", /* @__PURE__ */ jsx(ArrowRight, { size: 18 })]
					})
				] }), /* @__PURE__ */ jsx("div", {
					className: "lg:col-span-2 space-y-4",
					children: faqs.map((f, i) => /* @__PURE__ */ jsxs("details", {
						className: "group rounded-xl bg-card border border-border p-6 hover:border-gold/40 transition-colors",
						children: [/* @__PURE__ */ jsxs("summary", {
							className: "flex justify-between items-center cursor-pointer font-semibold text-navy-deep list-none",
							children: [f.q, /* @__PURE__ */ jsx("span", {
								className: "ml-4 text-gold group-open:rotate-45 transition-transform text-2xl",
								children: "+"
							})]
						}), /* @__PURE__ */ jsx("p", {
							className: "text-muted-foreground mt-3 leading-relaxed",
							children: f.a
						})]
					}, i))
				})]
			})
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "py-24 bg-hero text-white relative overflow-hidden",
			children: [/* @__PURE__ */ jsx("div", {
				className: "absolute inset-0 opacity-30",
				style: { background: "var(--gradient-navy-glow)" }
			}), /* @__PURE__ */ jsxs("div", {
				className: "container-x relative max-w-3xl text-center",
				children: [
					/* @__PURE__ */ jsx("h2", {
						className: "text-3xl md:text-5xl font-bold mb-4",
						children: "¿Listo para importar con respaldo profesional?"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "text-silver/80 text-lg mb-8",
						children: "Solicita una cotización personalizada y descubre qué tan rentable puede ser tu próxima operación internacional."
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "flex flex-wrap justify-center gap-4",
						children: [/* @__PURE__ */ jsxs(Link, {
							to: "/contacto",
							className: "inline-flex items-center gap-2 px-8 py-4 rounded-md bg-gold text-navy-deep font-semibold hover:bg-gold-soft",
							style: { boxShadow: "var(--shadow-gold)" },
							children: ["Solicitar Cotización ", /* @__PURE__ */ jsx(ArrowRight, { size: 18 })]
						}), /* @__PURE__ */ jsx("a", {
							href: "https://wa.me/573204454529?text=Hola%20ETL%20Global%2C%20quiero%20cotizar%20una%20importaci%C3%B3n.",
							target: "_blank",
							rel: "noopener noreferrer",
							className: "inline-flex items-center gap-2 px-8 py-4 rounded-md border border-white/30 hover:bg-white/10 font-semibold",
							children: "Hablar por WhatsApp"
						})]
					})
				]
			})]
		})
	] });
}
//#endregion
export { Home as component };
