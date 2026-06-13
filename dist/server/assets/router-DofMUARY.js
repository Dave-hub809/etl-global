import { createFileRoute, createRouter, lazyRouteComponent } from "@tanstack/react-router";
import { QueryClient } from "@tanstack/react-query";
//#region src/routes/__root.tsx
var $$splitComponentImporter$2 = () => import("./__root-C_yhxWLd.js");
var Route$2 = createFileRoute("/")({
	head: () => ({
		meta: [
			{ title: "ETL Global — Importaciones desde China" },
			{
				name: "description",
				content: "Importamos desde China y el mundo: sourcing, validación de proveedores, gestión integral y logística para emprendedores, pymes e industria."
			},
			{
				property: "og:title",
				content: "ETL Global — Importaciones sin riesgo"
			},
			{
				property: "og:description",
				content: "Gestionamos todo tu proceso de comercio internacional: de la búsqueda del proveedor a la entrega final."
			},
			{
				property: "og:url",
				content: "/"
			}
		],
		links: [{
			rel: "canonical",
			href: "/"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
//#endregion
//#region src/routes/nosotros.tsx
var $$splitComponentImporter$1 = () => import("./nosotros-Ca2EYE2H.js");
var Route$1 = createFileRoute("/nosotros")({
	head: () => ({
		meta: [
			{ title: "Nosotros — ETL Global S.A.S." },
			{
				name: "description",
				content: "Compañía colombiana de comercio exterior, sourcing internacional y logística integral entre Colombia, China y LATAM."
			},
			{
				property: "og:title",
				content: "Sobre ETL Global S.A.S."
			},
			{
				property: "og:description",
				content: "Tu aliado estratégico de comercio internacional."
			},
			{
				property: "og:url",
				content: "/nosotros"
			}
		],
		links: [{
			rel: "canonical",
			href: "/nosotros"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
//#endregion
//#region src/routes/index.tsx
var $$splitComponentImporter = () => import("./routes-D3JXEZEq.js");
var Route = createFileRoute("/")({
	head: () => ({
		meta: [
			{ title: "ETL Global — Importaciones desde China" },
			{
				name: "description",
				content: "Importamos desde China y el mundo: sourcing, validación de proveedores, gestión integral y logística para emprendedores, pymes e industria."
			},
			{
				property: "og:title",
				content: "ETL Global — Importaciones sin riesgo"
			},
			{
				property: "og:description",
				content: "Gestionamos todo tu proceso de comercio internacional: de la búsqueda del proveedor a la entrega final."
			},
			{
				property: "og:url",
				content: "/"
			}
		],
		links: [{
			rel: "canonical",
			href: "/"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
//#region src/routeTree.gen.ts
var NosotrosRoute = Route$1.update({
	id: "/nosotros",
	path: "/nosotros",
	getParentRoute: () => Route$2
});
var rootRouteChildren = {
	IndexRoute: Route.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$2
	}),
	NosotrosRoute
};
var routeTree = Route$2._addFileChildren(rootRouteChildren)._addFileTypes();
//#endregion
//#region src/router.tsx
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
