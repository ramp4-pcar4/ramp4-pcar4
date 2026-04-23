import { U as e, W as t, s as n } from "./main-Bz1ia27O.js";
import { t as r } from "./table-state-manager-BHsqyEJn.js";
import { markRaw as i } from "vue";
//#region src/fixtures/grid/api/grid.ts
var a = class extends n {
	gridStore = e(this.$vApp.$pinia);
	toggleGrid(e, t) {
		let n = this.gridStore.getGridId(e);
		if (!n) {
			let t = this.getLayerFixtureConfigs();
			this.gridStore.addGrid({
				id: e,
				layerIds: [e],
				state: new r(t[e]),
				fieldMap: {}
			});
		}
		let i = this.gridStore.currentId;
		this.gridStore.currentId = n ?? e;
		let a = this.$iApi.panel.get("grid");
		if (t === !1) {
			a.close();
			return;
		}
		!a.isOpen || !a.isVisible ? this.$iApi.panel.open("grid") : i !== e || t === !0 ? a.show({
			screen: "grid-screen",
			props: { key: e }
		}) : a.close();
	}
	_parseConfig(e) {
		this.handlePanelWidths(["grid"]), this.handlePanelTeleports(["grid"]);
		let t = this.getLayerFixtureConfigs();
		e && e.mergeGrids && e.mergeGrids.forEach((e) => {
			let n = [], { gridId: i, layers: a, fieldMap: o, options: s } = e;
			a.forEach((e) => {
				e.sublayers ? e.sublayers?.forEach((r) => {
					let i = this.$iApi.geo.layer.sublayerId(e.layerId, r);
					n.push(i), delete t[i];
				}) : (n.push(e.layerId), delete t[e.layerId]);
			});
			let c = {};
			o?.forEach((e) => {
				e.sources.forEach((t) => {
					c[t] = e.field;
				});
			});
			let l = {
				id: i,
				layerIds: n,
				state: new r(s),
				fieldMap: c
			};
			this.gridStore.addGrid(l);
		}), Object.keys(t).forEach((e) => {
			let n = {
				id: e,
				layerIds: [e],
				state: new r(t[e]),
				fieldMap: {}
			};
			this.gridStore.addGrid(n);
		});
	}
}, o = {
	en: {
		"grid.title": "Datatable",
		"grid.alertName": "Grid",
		"grid.splash.error": "Error: Failed to load the layer's data.",
		"grid.splash.loading": "Loading data...",
		"grid.splash.building": "Building table...",
		"grid.splash.cancel": "Cancel",
		"grid.search.clear": "Clear search filter",
		"grid.clearAll": "Clear search and grid-based filters",
		"grid.layer.loading": "The layer is loading...",
		"grid.label.pinColumns": "Pin columns",
		"grid.label.export": "Export",
		"grid.label.columns": "Hide columns",
		"grid.label.copied": "Copied",
		"grid.label.copy": "Press ctrl + c or double click to copy",
		"grid.label.specialColumn": "Special Column",
		"grid.label.filters.show": "Show filters",
		"grid.label.filters.hide": "Hide filters",
		"grid.label.filters.apply": "Apply filters to map",
		"grid.header.sort.0": "Sort ascending",
		"grid.header.sort.1": "Sort descending",
		"grid.header.sort.2": "Sort default",
		"grid.header.reorder.left": "Move left",
		"grid.header.reorder.right": "Move right",
		"grid.filters.label.global": "Search table",
		"grid.filters.column.label.text": "Search {0}...",
		"grid.filters.clear": "Clear filters",
		"grid.filters.number.max": "Max",
		"grid.filters.number.min": "Min",
		"grid.filters.date.max": "Max Date",
		"grid.filters.date.min": "Min Date",
		"grid.filters.label.info": "{range} of {total} entries shown",
		"grid.filters.label.filtered": "(filtered from {max} total entries)",
		"grid.filters.label.hidden": "Layer hidden",
		"grid.filters.label.extent": "Filter by extent",
		"grid.cells.controls": "Use arrow keys to navigate grid cells. Press Tab to proceed",
		"grid.cells.zoom": "Zoom to feature",
		"grid.cells.zoom.zooming": "Zooming...",
		"grid.cells.zoom.error": "Zoom failed",
		"grid.cells.zoom.zoomed": "Zoomed",
		"grid.cells.alert.zoom": "Zoomed into feature",
		"grid.cells.details": "Details",
		"grid.button.title": "Grid"
	},
	fr: {
		"grid.title": "Tableau de données",
		"grid.alertName": "Grille",
		"grid.splash.error": "Erreur\xA0: Échec du chargement des données de la couche.",
		"grid.splash.loading": "Chargement des données...",
		"grid.splash.building": "Création du tableau...",
		"grid.splash.cancel": "Annuler",
		"grid.search.clear": "Effacer le filtre de recherche",
		"grid.clearAll": "Effacer la recherche et les filtres de la grille",
		"grid.layer.loading": "La couche est en cours de téléchargement...",
		"grid.label.pinColumns": "Épingler les colonnes",
		"grid.label.export": "Exporter",
		"grid.label.columns": "Masquer les colonnes",
		"grid.label.copied": "Copié",
		"grid.label.copy": "Appuyez sur Ctrl + C ou double-cliquez pour copier",
		"grid.label.specialColumn": "Colonne spéciale",
		"grid.label.filters.show": "Afficher les filtres",
		"grid.label.filters.hide": "Masquer les filtres",
		"grid.label.filters.apply": "Appliquer les filtres à la carte",
		"grid.header.sort.0": "Tri ascendant",
		"grid.header.sort.1": "Tri descendant",
		"grid.header.sort.2": "Tri par défaut",
		"grid.header.reorder.left": "Déplacer vers la gauche",
		"grid.header.reorder.right": "Déplacer vers la droite",
		"grid.filters.label.global": "Tableau de recherche",
		"grid.filters.column.label.text": "Rechercher {0}...",
		"grid.filters.clear": "Supprimer les filtres",
		"grid.filters.number.max": "Max",
		"grid.filters.number.min": "Min",
		"grid.filters.date.max": "Date max",
		"grid.filters.date.min": "Date min",
		"grid.filters.label.info": "{range} de {total} saisies affichées",
		"grid.filters.label.filtered": "(filtré à partir d'un total de {max} saisies)",
		"grid.filters.label.hidden": "Couche masquée",
		"grid.filters.label.extent": "Filtrer par étendue",
		"grid.cells.controls": "Utilisez les flèches pour parcourir les cellules de la grille. Appuyez sur Tab pour continuer",
		"grid.cells.zoom": "Zoom à l'élément",
		"grid.cells.zoom.zooming": "Zoom en cours...",
		"grid.cells.zoom.error": "Échec du zoom",
		"grid.cells.zoom.zoomed": "Zoom terminé",
		"grid.cells.alert.zoom": "Zoom sur la caractéristique",
		"grid.cells.details": "Détails",
		"grid.button.title": "Grille"
	}
}, s = class extends a {
	async added() {
		this.$iApi.panel.register({ grid: {
			screens: { "grid-screen": () => i(import("./screen-CxoABPwf.js")) },
			style: { width: "450px" },
			controls: { expand: !0 },
			button: {
				tooltip: "grid.button.title",
				icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M0 0h24v24H0V0z\" fill=\"none\" /> <path d=\"M10 10.02h5V21h-5zM17 21h3c1.1 0 2-.9 2-2v-9h-5v11zm3-18H5c-1.1 0-2 .9-2 2v3h19V5c0-1.1-.9-2-2-2zM3 19c0 1.1.9 2 2 2h3V10H3v9z\" /></svg>"
			},
			expanded: !0,
			alertName: "grid.alertName"
		} }, { i18n: { messages: o } }), this._parseConfig(this.config);
	}
	removed() {
		this.$iApi.fixture.exists("appbar") && t(this.$vApp.$pinia).removeButton("grid"), e(this.$vApp.$pinia).$reset(), this.$iApi.panel.remove("grid");
	}
};
//#endregion
export { s as default };
