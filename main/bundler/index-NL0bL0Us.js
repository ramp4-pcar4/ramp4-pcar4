import "tiny-emitter";
import { F as p, e as m, R as h, b as g } from "./main-6dWPqJr6.js";
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
import { markRaw as u } from "vue";
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
import { H as c } from "./hilight-defs-DzKgjtLG.js";
class f {
  id;
  name;
  template;
  priority;
  fields;
  componentId;
  constructor(t) {
    const e = {
      ...typeof t == "string" ? { id: t, template: "", name: "", priority: 50 } : t
    };
    ({
      template: this.template,
      id: this.id,
      name: this.name,
      fields: this.fields,
      priority: this.priority
    } = e);
  }
}
const r = "details";
class y extends p {
  detailsStore = m(this.$vApp.$pinia);
  get config() {
    return super.config;
  }
  /**
   * Updates the identify result in the store, and then opens the details panel.
   *
   * @param {IdentifyResult[]} payload
   * @memberof DetailsAPI
   */
  openDetails(t) {
    t.forEach((i) => {
      this._loadDetailsConfig(this.$iApi.geo.layer.getLayer(i.uid));
    }), this.detailsStore.payload = t;
    const e = this.$iApi.panel.get("details");
    this.detailsStore.origin = "identify", e.button.tooltip = "details.layers.title.identifyOrigin", this.$iApi.panel.get("details").isOpen || this.$iApi.panel.open({
      id: "details"
    });
  }
  /**
   * Provided with the data for a single feature, shows or hides details panel.
   * If panel is closed or incoming data is different than current content, panel is shown.
   * If panel open and incoming data is what is currently shown, panel closes.
   * The `open` parameter can override the behavior.
   * featureData payload (can be empty if forcing closed)
   * - uid     : uid string of the layer hosting the feature
   * - format  : structure of the data. IdentifyResultFormat value.
   * - data    : source information for the feature. Analogous to the data property of an IdentifyItem
   * - layerId : optional layerId string of the layer hosting the feature. Will be looked up if not provided
   *
   * @param {{data: any, uid: string, format: IdentifyResultFormat}} featureData
   * @param {boolean | undefined} open can force the panel to open (true) or close (false) regardless of current panel state
   * @memberof DetailsAPI
   */
  toggleFeature(t, e) {
    const s = this.$iApi.panel.get("details");
    if (e === !1) {
      s.close(), this.detailsStore.currentFeatureId = void 0;
      return;
    }
    const i = this.$iApi.geo.layer.getLayer(t.uid), a = `${t.uid}-${// see https://github.com/ramp4-pcar4/ramp4-pcar4/issues/1767 for the reasoning behind this
    i?.supportsFeatures ? t.data[i?.oidField ?? ""] : JSON.stringify(t.data)}`;
    if (s.isOpen && a === this.detailsStore.currentFeatureId && e !== !0) {
      s.close(), this.detailsStore.currentFeatureId = void 0;
      return;
    }
    this.detailsStore.origin = "toggleEvent", s.button.tooltip = "details.layers.title.gridOrigin", this.detailsStore.currentFeatureId = a, this._loadDetailsConfig(i);
    const l = {
      items: [h.makeRawItem(t.format, t.data)],
      uid: t.uid,
      layerId: t.layerId || i?.id || "error-not-found",
      loading: Promise.resolve(),
      loaded: !0,
      errored: !1,
      requestTime: Date.now()
    };
    this.detailsStore.payload = [l], s.isOpen || s.open();
  }
  /**
   * Read the details section of the layers' fixture config
   *
   * @param {DetailsConfig} [config]
   * @memberof DetailsAPI
   */
  _parseConfig(t) {
    t && t.templates && (this.detailsStore.defaultTemplates = t.templates), this.handlePanelWidths(["details"]), this.handlePanelTeleports(["details"]);
    const e = this.getLayerFixtureConfigs(), s = [];
    Object.keys(e).forEach((a) => {
      s.push({
        id: a,
        name: e[a].name,
        template: e[a].template,
        fields: e[a].fields,
        priority: e[a].priority ?? 50
      });
    });
    const i = s.map((a) => new f(a));
    this.detailsStore.properties = i.reduce((a, l) => (a[l.id] = l, a), {}), this._validateItems();
  }
  /**
   * Will see if we have this layer's detail fixture config cached, and if not,
   * cache it.
   *
   * @param layer the layer to check
   * @private
   */
  _loadDetailsConfig(t) {
    if (t && this.detailsStore.properties[t.id] === void 0) {
      const i = this.getLayerFixtureConfigs()[t.id];
      i && this.detailsStore.addConfigProperty({
        id: t.id,
        name: i.name,
        template: i.template,
        fields: i.fields,
        priority: i.priority ?? 50
      });
    }
  }
  /**
   * Check to see if the stored components are registered properly.
   *
   * @memberof DetailsAPI
   */
  _validateItems() {
    Object.values(this.detailsStore.properties).forEach((t) => {
      t.template in this.$vApp.$options.components && (this.detailsStore.properties[t.id].componentId = t.template);
    });
  }
  /**
   * Highlight identified items
   * @param items items to add
   * @param layerUid uid of layer the items belong to
   */
  async hilightDetailsItems(t, e) {
    const s = t instanceof Array ? t : [t], i = this.$iApi.fixture.get("hilight");
    if (i) {
      const a = await i.getGraphicsByKey(r);
      await i.removeHilight(a);
      const l = Date.now();
      this.detailsStore.lastHilight = l;
      const o = await this.getHilightGraphics(s, e);
      this.detailsStore.lastHilight === l && (await i.addHilight(o), this.detailsStore.lastHilight !== l && i.removeHilight(o));
    }
  }
  /**
   * Remove all details panel map hilights.
   */
  async removeDetailsHilight() {
    const t = this.$iApi.fixture.get("hilight");
    if (t) {
      this.detailsStore.lastHilight = Date.now();
      const e = await t.getGraphicsByKey(r);
      await t.removeHilight(e);
    }
  }
  /**
   * Reload map elements of the hilighter for a set of identify items.
   *
   * @param {IdentifyItem | Array<IdentifyItem>} items items to reload
   * @param {string} layerUid uid of layer the items belong to
   */
  async reloadDetailsHilight(t, e) {
    const s = t instanceof Array ? t : [t], i = this.$iApi.fixture.get("hilight");
    if (i) {
      const a = await this.getHilightGraphics(s, e);
      i.reloadHilight(a);
    }
  }
  /**
   * Return the graphics of the given IdentifyItems once the items have loaded.
   * @param {Array<IdentifyItem>} items identify items to hilight. Items should be of ESRI format
   * @param layerUid uid of layer the items belong to
   * @returns {Promise<Array<Graphic>>} resolves with array of graphics
   */
  async getHilightGraphics(t, e) {
    const s = this.$iApi.geo.layer.getLayer(e), i = this.$iApi.fixture.get("hilight"), a = [];
    return s && await Promise.all(
      t.map(async (l) => {
        await l.loading;
        const o = l.data[s.oidField], n = await s.getGraphic(o, {
          getGeom: !0,
          getAttribs: !0,
          getStyle: !0
        });
        n.id = i.constructGraphicKey(r, e, o), a.push(n);
      })
    ), a;
  }
  /**
   * Updates hilighted graphics when the hilight toggler is toggled.
   *
   * @param {boolean} hilightOn Whether the toggler has been turned on/off
   * @param {IdentifyItem | Array<IdentifyItem>} items The identify items to highlight. Only required if turning on
   * @param {string} layerUid the layer UID that owns the items. Only required if turning on
   */
  onHilightToggle(t, e, s) {
    this.detailsStore.hilightToggle = t, t && e && s ? this.hilightDetailsItems(e, s) : t || this.removeDetailsHilight();
  }
  /**
   * Return whether or not a HilightMode has been defined (other than NONE)
   */
  hasHilighter() {
    const t = this.$iApi.fixture.get("hilight");
    return t && t.hilightMode.mode !== c.NONE;
  }
}
const v = { en: { "details.layers.title.identifyOrigin": "Identify Details", "details.layers.title.gridOrigin": "Details", "details.layers.found": "Found {numResults} results in {numLayers} layers", "details.layers.loading": "The layer is loading...", "details.layers.error": "Error", "details.layers.results.empty": "No results found for any layer.", "details.layers.results.empty.currentLayer": "No results found for the selected layer.", "details.layers.results.empty.noLayers": "No layers for identification.", "details.layers.results.list.tooltip": "Use the arrow keys to navigate the items", "details.result.default.name": "Identify Item {0}", "details.loading": "Loading...", "details.items.title": "Details", "details.items.range": "{0} - {1} of {2}", "details.items.next": "Next page", "details.items.previous": "Previous page", "details.items.page": "Items per page", "details.item.see.list": "See List", "details.item.zoom": "Zoom to feature", "details.item.zoom.zooming": "Zooming...", "details.item.zoom.error": "Zoom failed", "details.item.zoom.zoomed": "Zoomed", "details.item.previous.item": "Previous item", "details.item.next.item": "Next item", "details.item.count": "{0} of {1}", "details.item.loading": "Loading results...", "details.item.no.data": "No data to show because the layer has been removed", "details.item.alert.zoom": "Zoomed into feature", "details.item.alert.show.item": "Showing result {itemName}", "details.item.alert.show.list": "Showing all results for {layerName}", "details.item.alert.defaultAltText": "Image associated with {alias} field", "details.togglehilight.title": "Toggle Highlight", "details.item.open": "Expand", "details.item.collapse": "Collapse", "details.template.notFound": "Could not find custom details template named {layer}. It may not have been registered correctly." }, fr: { "details.layers.title.identifyOrigin": "Identifier les détails", "details.layers.title.gridOrigin": "Détails", "details.layers.found": "{numResults} résultats trouvés dans {numLayers} couches", "details.layers.loading": "La couche est en cours de chargement...", "details.layers.error": "Erreur", "details.layers.results.empty": "Aucun résultat trouvé pour aucune couche.", "details.layers.results.empty.currentLayer": "Aucun résultat trouvé pour la couche sélectionnée.", "details.layers.results.empty.noLayers": "Pas de couches pour l'identification.", "details.layers.results.list.tooltip": "Utilisez les touches fléchées pour naviguer entre les éléments", "details.result.default.name": "Désigner l'élément {0}", "details.loading": "Chargement en cours...", "details.items.title": "Détails", "details.items.range": "{0} - {1} de {2}", "details.items.next": "Page suivante", "details.items.previous": "Page précédente", "details.items.page": "éléments par page", "details.item.see.list": "Voir la liste", "details.item.zoom": "Zoom à l'élément", "details.item.zoom.zooming": "Zoom en cours...", "details.item.zoom.error": "Échec du zoom", "details.item.zoom.zoomed": "Zoom terminé", "details.item.previous.item": "Élément précédent", "details.item.next.item": "Élément suivant", "details.item.count": "{0} de {1}", "details.item.loading": "Chargement des résultats...", "details.item.no.data": "Aucune donnée à afficher", "details.item.alert.zoom": "Zoom sur la caractéristique", "details.item.alert.show.item": "Affichage du résultat {itemName}", "details.item.alert.show.list": "Affichage de tous les résultats pour {layerName}", "details.item.alert.defaultAltText": "Image associée au champ {alias}", "details.togglehilight.title": "Basculer vers l'élément principal", "details.item.open": "Développer", "details.item.collapse": "Réduire", "details.template.notFound": "Impossible de trouver le modèle de détails personnalisé nommé {layer}. Il n'a peut-être pas été enregistré correctement." } };
class st extends y {
  async added() {
    this.$iApi.panel.register(
      {
        details: {
          screens: {
            "details-screen": () => u(import("./details-screen-DX81gQXj.js"))
          },
          style: {
            width: "425px"
          },
          button: {
            tooltip: "details.layers.title.identifyOrigin",
            // https://fonts.google.com/icons?selected=Material%20Icons%3Aarticle%3A
            icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none" /><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" /></svg>'
          },
          alertName: "details.items.title"
        }
      },
      { i18n: { messages: v } }
    ), this._parseConfig(this.config);
    const t = this.$vApp.$watch(
      () => this.config,
      (e) => this._parseConfig(e)
    );
    this.removed = () => {
      t(), this.$iApi.panel.remove("details"), this.$iApi.fixture.exists("appbar") && g(this.$vApp.$pinia).removeButton("details"), m(this.$vApp.$pinia).$reset();
    };
  }
}
export {
  st as default
};
