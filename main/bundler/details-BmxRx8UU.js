import { H as e, V as t, W as n, f as r, s as i } from "./main-Bz1ia27O.js";
import { i as a } from "./hilight-defs-BbuJMh5p.js";
import { markRaw as o } from "vue";
//#region src/fixtures/details/api/details.ts
var s = "details", c = class extends i {
	detailsStore = t(this.$vApp.$pinia);
	get config() {
		return super.config;
	}
	openDetails(e) {
		e.forEach((e) => {
			this._loadDetailsConfig(this.$iApi.geo.layer.getLayer(e.uid));
		}), this.detailsStore.payload = e;
		let t = this.$iApi.panel.get("details");
		this.detailsStore.origin = "identify", t.button.tooltip = "details.layers.title.identifyOrigin", this.$iApi.panel.get("details").isOpen || this.$iApi.panel.open({ id: "details" });
	}
	toggleFeature(e, t) {
		let n = this.$iApi.panel.get("details");
		if (t === !1) {
			n.close(), this.detailsStore.currentFeatureId = void 0;
			return;
		}
		let i = this.$iApi.geo.layer.getLayer(e.uid), a = `${e.uid}-${i?.supportsFeatures ? e.data[i?.oidField ?? ""] : JSON.stringify(e.data)}`;
		if (n.isOpen && a === this.detailsStore.currentFeatureId && t !== !0) {
			n.close(), this.detailsStore.currentFeatureId = void 0;
			return;
		}
		this.detailsStore.origin = "toggleEvent", n.button.tooltip = "details.layers.title.gridOrigin", this.detailsStore.currentFeatureId = a, this._loadDetailsConfig(i);
		let o = {
			items: [r.makeRawItem(e.format, e.data)],
			uid: e.uid,
			layerId: e.layerId || i?.id || "error-not-found",
			loading: Promise.resolve(),
			loaded: !0,
			errored: !1,
			requestTime: Date.now()
		};
		this.detailsStore.payload = [o], n.isOpen || n.open();
	}
	_parseConfig(t) {
		t && t.templates && (this.detailsStore.defaultTemplates = t.templates), this.handlePanelWidths(["details"]), this.handlePanelTeleports(["details"]);
		let n = this.getLayerFixtureConfigs(), r = [];
		Object.keys(n).forEach((e) => {
			r.push({
				id: e,
				name: n[e].name,
				template: n[e].template,
				fields: n[e].fields,
				priority: n[e].priority ?? 50
			});
		});
		let i = r.map((t) => new e(t));
		this.detailsStore.properties = i.reduce((e, t) => (e[t.id] = t, e), {}), this._validateItems();
	}
	_loadDetailsConfig(e) {
		if (e && this.detailsStore.properties[e.id] === void 0) {
			let t = this.getLayerFixtureConfigs()[e.id];
			t && this.detailsStore.addConfigProperty({
				id: e.id,
				name: t.name,
				template: t.template,
				fields: t.fields,
				priority: t.priority ?? 50
			});
		}
	}
	_validateItems() {
		Object.values(this.detailsStore.properties).forEach((e) => {
			e.template in this.$vApp.$options.components && (this.detailsStore.properties[e.id].componentId = e.template);
		});
	}
	async hilightDetailsItems(e, t) {
		let n = e instanceof Array ? e : [e], r = this.$iApi.fixture.get("hilight");
		if (r) {
			let e = await r.getGraphicsByKey(s);
			await r.removeHilight(e);
			let i = Date.now();
			this.detailsStore.lastHilight = i;
			let a = await this.getHilightGraphics(n, t);
			this.detailsStore.lastHilight === i && (await r.addHilight(a), this.detailsStore.lastHilight !== i && r.removeHilight(a));
		}
	}
	async removeDetailsHilight() {
		let e = this.$iApi.fixture.get("hilight");
		if (e) {
			this.detailsStore.lastHilight = Date.now();
			let t = await e.getGraphicsByKey(s);
			await e.removeHilight(t);
		}
	}
	async reloadDetailsHilight(e, t) {
		let n = e instanceof Array ? e : [e], r = this.$iApi.fixture.get("hilight");
		if (r) {
			let e = await this.getHilightGraphics(n, t);
			r.reloadHilight(e);
		}
	}
	async getHilightGraphics(e, t) {
		let n = this.$iApi.geo.layer.getLayer(t), r = this.$iApi.fixture.get("hilight"), i = [];
		return n && await Promise.all(e.map(async (e) => {
			await e.loading;
			let a = e.data[n.oidField], o = await n.getGraphic(a, {
				getGeom: !0,
				getAttribs: !0,
				getStyle: !0
			});
			o.id = r.constructGraphicKey(s, t, a), i.push(o);
		})), i;
	}
	onHilightToggle(e, t, n) {
		this.detailsStore.hilightToggle = e, e && t && n ? this.hilightDetailsItems(t, n) : e || this.removeDetailsHilight();
	}
	hasHilighter() {
		let e = this.$iApi.fixture.get("hilight");
		return e && e.hilightMode.mode !== a.NONE;
	}
}, l = {
	en: {
		"details.layers.title.identifyOrigin": "Identify Details",
		"details.layers.title.gridOrigin": "Details",
		"details.layers.found": "Found {numResults} results in {numLayers} layers",
		"details.layers.loading": "The layer is loading...",
		"details.layers.error": "Error",
		"details.layers.results.empty": "No results found for any layer.",
		"details.layers.results.empty.currentLayer": "No results found for the selected layer.",
		"details.layers.results.empty.noLayers": "No layers for identification.",
		"details.layers.results.list.tooltip": "Use the arrow keys to navigate the items",
		"details.result.default.name": "Identify Item {0}",
		"details.loading": "Loading...",
		"details.items.title": "Details",
		"details.items.range": "{0} - {1} of {2}",
		"details.items.next": "Next page",
		"details.items.previous": "Previous page",
		"details.items.page": "Items per page",
		"details.item.see.list": "See List",
		"details.item.zoom": "Zoom to feature",
		"details.item.zoom.zooming": "Zooming...",
		"details.item.zoom.error": "Zoom failed",
		"details.item.zoom.zoomed": "Zoomed",
		"details.item.previous.item": "Previous item",
		"details.item.next.item": "Next item",
		"details.item.count": "{0} of {1}",
		"details.item.loading": "Loading results...",
		"details.item.no.data": "No data to show because the layer has been removed",
		"details.item.alert.zoom": "Zoomed into feature",
		"details.item.alert.show.item": "Showing result {itemName}",
		"details.item.alert.show.list": "Showing all results for {layerName}",
		"details.item.alert.defaultAltText": "Image associated with {alias} field",
		"details.togglehilight.title": "Toggle Highlight",
		"details.item.open": "Expand",
		"details.item.collapse": "Collapse",
		"details.template.notFound": "Could not find custom details template named {layer}. It may not have been registered correctly."
	},
	fr: {
		"details.layers.title.identifyOrigin": "Identifier les détails",
		"details.layers.title.gridOrigin": "Détails",
		"details.layers.found": "{numResults} résultats trouvés dans {numLayers} couches",
		"details.layers.loading": "La couche est en cours de chargement...",
		"details.layers.error": "Erreur",
		"details.layers.results.empty": "Aucun résultat trouvé pour aucune couche.",
		"details.layers.results.empty.currentLayer": "Aucun résultat trouvé pour la couche sélectionnée.",
		"details.layers.results.empty.noLayers": "Pas de couches pour l'identification.",
		"details.layers.results.list.tooltip": "Utilisez les touches fléchées pour naviguer entre les éléments",
		"details.result.default.name": "Désigner l'élément {0}",
		"details.loading": "Chargement en cours...",
		"details.items.title": "Détails",
		"details.items.range": "{0} - {1} de {2}",
		"details.items.next": "Page suivante",
		"details.items.previous": "Page précédente",
		"details.items.page": "éléments par page",
		"details.item.see.list": "Voir la liste",
		"details.item.zoom": "Zoom à l'élément",
		"details.item.zoom.zooming": "Zoom en cours...",
		"details.item.zoom.error": "Échec du zoom",
		"details.item.zoom.zoomed": "Zoom terminé",
		"details.item.previous.item": "Élément précédent",
		"details.item.next.item": "Élément suivant",
		"details.item.count": "{0} de {1}",
		"details.item.loading": "Chargement des résultats...",
		"details.item.no.data": "Aucune donnée à afficher",
		"details.item.alert.zoom": "Zoom sur la caractéristique",
		"details.item.alert.show.item": "Affichage du résultat {itemName}",
		"details.item.alert.show.list": "Affichage de tous les résultats pour {layerName}",
		"details.item.alert.defaultAltText": "Image associée au champ {alias}",
		"details.togglehilight.title": "Basculer vers l'élément principal",
		"details.item.open": "Développer",
		"details.item.collapse": "Réduire",
		"details.template.notFound": "Impossible de trouver le modèle de détails personnalisé nommé {layer}. Il n'a peut-être pas été enregistré correctement."
	}
}, u = class extends c {
	async added() {
		this.$iApi.panel.register({ details: {
			screens: { "details-screen": () => o(import("./details-screen-C1CpQsOF.js")) },
			style: { width: "425px" },
			button: {
				tooltip: "details.layers.title.identifyOrigin",
				icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M0 0h24v24H0z\" fill=\"none\" /><path d=\"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z\" /></svg>"
			},
			alertName: "details.items.title"
		} }, { i18n: { messages: l } }), this._parseConfig(this.config);
		let e = this.$vApp.$watch(() => this.config, (e) => this._parseConfig(e));
		this.removed = () => {
			e(), this.$iApi.panel.remove("details"), this.$iApi.fixture.exists("appbar") && n(this.$vApp.$pinia).removeButton("details"), t(this.$vApp.$pinia).$reset();
		};
	}
};
//#endregion
export { u as default };
