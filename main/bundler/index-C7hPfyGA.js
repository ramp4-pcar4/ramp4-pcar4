import "tiny-emitter";
import { F as u, i as p, b } from "./main-6dWPqJr6.js";
import "@arcgis/core/Color";
import "@arcgis/core/config";
import "@arcgis/core/core/reactiveUtils.js";
import "@arcgis/core/geometry/Extent";
import "@arcgis/core/geometry/Multipoint";
import "@arcgis/core/geometry/Point";
import "@arcgis/core/geometry/Polygon";
import "@arcgis/core/geometry/Polyline";
import "@arcgis/core/geometry/SpatialReference";
import "@arcgis/core/geometry/support/jsonUtils";
import "@arcgis/core/Graphic";
import "@arcgis/core/request";
import "@arcgis/core/symbols/PictureMarkerSymbol";
import "@arcgis/core/symbols/SimpleFillSymbol";
import "@arcgis/core/symbols/SimpleLineSymbol";
import "@arcgis/core/symbols/SimpleMarkerSymbol";
import "@arcgis/core/symbols/support/jsonUtils";
import "@arcgis/map-components/components/arcgis-swipe";
import "deepmerge";
import "@terraformer/spatial";
import "proj4";
import "throttle-debounce";
import { markRaw as x } from "vue";
import "pinia";
import "vue-i18n";
import "screenfull";
import "lodash-es";
import "vue-tippy";
import "linkify-html";
import "@popperjs/core";
import "@terraformer/arcgis";
import "csv2geojson";
import "redaxios";
import "await-to-js";
import "svg.js";
import { T as d } from "./table-state-manager-DpPT-TES.js";
class y extends u {
  gridStore = p(this.$vApp.$pinia);
  /**
   * Open the grid with the given id.
   *
   * @param {string} id
   * @param {boolean} [open] force panel open or closed
   * @memberof GridAPI
   */
  toggleGrid(e, r) {
    const i = this.gridStore.getGridId(e);
    if (!i) {
      const s = this.getLayerFixtureConfigs();
      this.gridStore.addGrid({
        id: e,
        layerIds: [e],
        state: new d(s[e]),
        fieldMap: {}
      });
    }
    const t = this.gridStore.currentId;
    this.gridStore.currentId = i ?? e;
    const o = this.$iApi.panel.get("grid");
    if (r === !1) {
      o.close();
      return;
    }
    !o.isOpen || !o.isVisible ? this.$iApi.panel.open("grid") : t !== e || r === !0 ? o.show({ screen: "grid-screen", props: { key: e } }) : o.close();
  }
  /**
   * Parses the grid config JSON snippet from the config file.
   *
   * @param {any} config
   * @memberof GridAPI
   */
  _parseConfig(e) {
    this.handlePanelWidths(["grid"]), this.handlePanelTeleports(["grid"]);
    const r = this.getLayerFixtureConfigs();
    e && e.mergeGrids && e.mergeGrids.forEach((i) => {
      const t = [], { gridId: o, layers: s, fieldMap: m, options: h } = i;
      s.forEach((l) => {
        l.sublayers ? l.sublayers?.forEach((a) => {
          const n = this.$iApi.geo.layer.sublayerId(l.layerId, a);
          t.push(n), delete r[n];
        }) : (t.push(l.layerId), delete r[l.layerId]);
      });
      const g = {};
      m?.forEach((l) => {
        l.sources.forEach((a) => {
          g[a] = l.field;
        });
      });
      const f = {
        id: o,
        layerIds: t,
        state: new d(h),
        fieldMap: g
      };
      this.gridStore.addGrid(f);
    }), Object.keys(r).forEach((i) => {
      const t = {
        id: i,
        layerIds: [i],
        state: new d(r[i]),
        fieldMap: {}
      };
      this.gridStore.addGrid(t);
    });
  }
}
const C = { en: { "grid.title": "Datatable", "grid.alertName": "Grid", "grid.splash.error": "Error: Failed to load the layer's data.", "grid.splash.loading": "Loading data...", "grid.splash.building": "Building table...", "grid.splash.cancel": "Cancel", "grid.search.clear": "Clear search filter", "grid.clearAll": "Clear search and grid-based filters", "grid.layer.loading": "The layer is loading...", "grid.label.pinColumns": "Pin columns", "grid.label.export": "Export", "grid.label.columns": "Hide columns", "grid.label.copied": "Copied", "grid.label.copy": "Press ctrl + c or double click to copy", "grid.label.specialColumn": "Special Column", "grid.label.filters.show": "Show filters", "grid.label.filters.hide": "Hide filters", "grid.label.filters.apply": "Apply filters to map", "grid.header.sort.0": "Sort ascending", "grid.header.sort.1": "Sort descending", "grid.header.sort.2": "Sort default", "grid.header.reorder.left": "Move left", "grid.header.reorder.right": "Move right", "grid.filters.label.global": "Search table", "grid.filters.column.label.text": "Search {0}...", "grid.filters.clear": "Clear filters", "grid.filters.number.max": "Max", "grid.filters.number.min": "Min", "grid.filters.date.max": "Max Date", "grid.filters.date.min": "Min Date", "grid.filters.label.info": "{range} of {total} entries shown", "grid.filters.label.filtered": "(filtered from {max} total entries)", "grid.filters.label.hidden": "Layer hidden", "grid.filters.label.extent": "Filter by extent", "grid.cells.controls": "Use arrow keys to navigate grid cells. Press Tab to proceed", "grid.cells.zoom": "Zoom to feature", "grid.cells.zoom.zooming": "Zooming...", "grid.cells.zoom.error": "Zoom failed", "grid.cells.zoom.zoomed": "Zoomed", "grid.cells.alert.zoom": "Zoomed into feature", "grid.cells.details": "Details", "grid.button.title": "Grid" }, fr: { "grid.title": "Tableau de données", "grid.alertName": "Grille", "grid.splash.error": "Erreur : Échec du chargement des données de la couche.", "grid.splash.loading": "Chargement des données...", "grid.splash.building": "Création du tableau...", "grid.splash.cancel": "Annuler", "grid.search.clear": "Effacer le filtre de recherche", "grid.clearAll": "Effacer la recherche et les filtres de la grille", "grid.layer.loading": "La couche est en cours de téléchargement...", "grid.label.pinColumns": "Épingler les colonnes", "grid.label.export": "Exporter", "grid.label.columns": "Masquer les colonnes", "grid.label.copied": "Copié", "grid.label.copy": "Appuyez sur Ctrl + C ou double-cliquez pour copier", "grid.label.specialColumn": "Colonne spéciale", "grid.label.filters.show": "Afficher les filtres", "grid.label.filters.hide": "Masquer les filtres", "grid.label.filters.apply": "Appliquer les filtres à la carte", "grid.header.sort.0": "Tri ascendant", "grid.header.sort.1": "Tri descendant", "grid.header.sort.2": "Tri par défaut", "grid.header.reorder.left": "Déplacer vers la gauche", "grid.header.reorder.right": "Déplacer vers la droite", "grid.filters.label.global": "Tableau de recherche", "grid.filters.column.label.text": "Rechercher {0}...", "grid.filters.clear": "Supprimer les filtres", "grid.filters.number.max": "Max", "grid.filters.number.min": "Min", "grid.filters.date.max": "Date max", "grid.filters.date.min": "Date min", "grid.filters.label.info": "{range} de {total} saisies affichées", "grid.filters.label.filtered": "(filtré à partir d'un total de {max} saisies)", "grid.filters.label.hidden": "Couche masquée", "grid.filters.label.extent": "Filtrer par étendue", "grid.cells.controls": "Utilisez les flèches pour parcourir les cellules de la grille. Appuyez sur Tab pour continuer", "grid.cells.zoom": "Zoom à l'élément", "grid.cells.zoom.zooming": "Zoom en cours...", "grid.cells.zoom.error": "Échec du zoom", "grid.cells.zoom.zoomed": "Zoom terminé", "grid.cells.alert.zoom": "Zoom sur la caractéristique", "grid.cells.details": "Détails", "grid.button.title": "Grille" } };
class oe extends y {
  async added() {
    this.$iApi.panel.register(
      {
        grid: {
          screens: {
            "grid-screen": () => x(import("./screen-COi8DaZr.js"))
          },
          style: {
            width: "450px"
          },
          controls: {
            expand: !0
          },
          button: {
            tooltip: "grid.button.title",
            // https://fonts.google.com/icons?selected=Material%20Icons%3Atable_chart
            icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none" /> <path d="M10 10.02h5V21h-5zM17 21h3c1.1 0 2-.9 2-2v-9h-5v11zm3-18H5c-1.1 0-2 .9-2 2v3h19V5c0-1.1-.9-2-2-2zM3 19c0 1.1.9 2 2 2h3V10H3v9z" /></svg>'
          },
          expanded: !0,
          alertName: "grid.alertName"
        }
      },
      { i18n: { messages: C } }
    ), this._parseConfig(this.config);
  }
  removed() {
    this.$iApi.fixture.exists("appbar") && b(this.$vApp.$pinia).removeButton("grid"), p(this.$vApp.$pinia).$reset(), this.$iApi.panel.remove("grid");
  }
}
export {
  oe as default
};
