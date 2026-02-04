import { defineComponent as h, inject as u, resolveComponent as m, createBlock as f, openBlock as L, unref as I, withCtx as v, createElementVNode as p, markRaw as b } from "vue";
import "tiny-emitter";
import { F as S, p as s, S as x, q as g, r as A, s as c, L as w, b as E, d as C } from "./main-6dWPqJr6.js";
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
import "pinia";
import { useI18n as $ } from "vue-i18n";
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
class R extends S {
  /**
   * Parses the legend config JSON snippet from the config file and save resulting objects to the fixture store.
   *
   * @param {LegendConfig | undefined} legendConfig
   */
  _parseConfig(e) {
    const t = e?.headerControls?.slice() ?? [
      "wizard",
      "layerReorder",
      "groupToggle",
      "visibilityToggle"
    ];
    if (s(this.$vApp.$pinia).headerControls = t, !e || !e.root.children)
      return;
    s(this.$vApp.$pinia).multilineItems = e.multilineItems?.enabled ?? !0;
    const l = [1, 2, 3, 4, 5, 6];
    !e.multilineItems?.maxLines || !l.includes(e.multilineItems?.maxLines) ? s(this.$vApp.$pinia).maxLines = 3 : s(this.$vApp.$pinia).maxLines = e.multilineItems.maxLines, this.handlePanelWidths(["legend"]), this.handlePanelTeleports(["legend"]);
    const a = this.getLayerFixtureConfigs();
    e.root.children.forEach((r) => {
      r.layerLegendConfigs = a, this.addItem(r);
    }), this.$iApi.geo.layer.allLayers().forEach((r) => {
      this.updateLegend(r);
    });
  }
  // Create
  /**
   * Construct a legend item given the legend config
   *
   * @param {any} itemConf legend item config
   * @param {LegendItem | undefined} parent the parent legend item for the created item
   * @returns {LegendItem} returns the constructed legend item
   * @memberof LegendAPI
   */
  createItem(e, t) {
    let l;
    e.layerId === void 0 ? l = new x(this.$iApi, e, t) : (e.sublayerIndex !== void 0 && (e.layerId = this.$iApi.geo.layer.sublayerId(e.layerId, e.sublayerIndex)), l = new g(this.$iApi, e, t));
    const a = e.children;
    return a && a.forEach((r) => {
      e.layerLegendConfigs !== void 0 && (r.layerLegendConfigs = e.layerLegendConfigs), l.children.push(this.createItem(r, l));
    }), l;
  }
  /**
   * Add a legend item given the legend config, or legend item instance
   *
   * @param {any | LegendItem} item the config for the legend item or a legend item instance
   * @param {LegendItem | undefined} parent optional parent item to create this item under
   * @returns {LegendItem} the added legend item
   * @memberof LegendAPI
   */
  addItem(e, t) {
    const l = e instanceof A ? e : this.createItem(e, t);
    return this._insertItem(l, t), l;
  }
  /**
   * Add a layer legend item given a layer instance
   *
   * @param {LayerInstance} layer the layer to create an item for
   * @param {LegendItem | undefined} parent optional parent item to create this item under
   * @returns {Promise<LegendItem>} a promise that resolves with the added layer item
   * @memberof LegendAPI
   */
  async addLayerItem(e, t) {
    const l = new g(
      this.$iApi,
      {
        layerId: e.id,
        sublayerIndex: e.isSublayer ? e.layerIdx : void 0,
        name: e.name
      },
      t
    );
    return this._insertItem(l, t), this.updateLegend(e), l;
  }
  // Read
  /**
   * Returns `LegendConfig` section of the global config file.
   *
   * @readonly
   * @type {LegendConfig}
   * @memberof LegendAPI
   */
  get config() {
    return super.config;
  }
  /**
   * Returns the full legend tree.
   * Note: This returns a direct reference to the legend tree. Mutations will persist.
   *
   * @returns {Array<LegendItem>} returns the full legend tree
   * @memberof LegendAPI
   */
  getLegend() {
    return s(this.$vApp.$pinia).children || [];
  }
  /**
   * Maps the current legend tree into a legend config snippet.
   *
   * In addition to legend config schema properties, this snippet will also include
   * properties such as the item type, item's uid, layer uid etc.
   *
   * @returns {any} returns the legend config
   * @memberof LegendAPI
   */
  getLegendConfig() {
    return {
      root: {
        children: this.getLegend().map((e) => e.getConfig())
      }
    };
  }
  /**
   * Get a legend item given its uid.
   *
   * @param {string} uid the uid of the legend item
   * @returns {LegendItem | undefined} return legend item with given uid. returns undefined if item is not found.
   * @memberof LegendAPI
   */
  getItem(e) {
    const t = this.getLegend();
    let l;
    return t.some((a) => (l = this.searchTreeFirst(a, (r) => r.uid === e), l !== void 0)), l;
  }
  /**
   * Get the first found layer item connected to the layer with the given id/uid or the given layer instance.
   *
   * @param {string | LayerInstance} layer the id/uid of the layer or layer instance
   * @returns {LegendItem | undefined} return layer item tied to the found layer. returns undefined if no such item is found.
   * @memberof LegendAPI
   */
  getLayerItem(e) {
    let t, l, a;
    return typeof e == "string" ? (l = e, t = e) : (l = e.id, t = e.uid), this.getLegend().some((i) => (a = this.searchTreeFirst(
      i,
      (n) => n instanceof g && (n.layerId === l || n.uid === t)
    ), a !== void 0)), a;
  }
  /**
   * Get all legend items with the given expanded state.
   * Not specifying the expanded state will return all items with expanded set to `true`
   *
   * @param {boolean | undefined} expanded the expanded state to check for
   * @returns {Array<LegendItem>} the items with the given expanded state
   * @memberof LegendAPI
   */
  getAllExpanded(e) {
    const t = e ?? !0;
    return this.searchLegend((l) => l.children.length > 0 && l.expanded === t);
  }
  /**
   * Get all legend items with the given visibility state.
   * Not specifying the visibility state will return all items with visibility set to `true`
   *
   * @param {boolean | undefined} visibility the visibility state to check for
   * @returns {Array<LegendItem>} the items with the given expanded state
   * @memberof LegendAPI
   */
  getAllVisible(e) {
    const t = e ?? !0;
    return this.searchLegend((l) => l.visibility === t);
  }
  /**
   * Return every legend block bound to a registered layer. Parent-child layer types will
   * return everything tied to the entire layer (parent & children)
   *
   * @param {LayerInstance | string} layer a layer instance, layer id, or layer uid
   * @returns {Array<LayerItem>} all legend items bound to the layer
   */
  getLayerBoundItems(e) {
    let t = "";
    const l = e instanceof c ? e : this.$iApi.geo.layer.getLayer(e);
    if (l)
      t = l.isSublayer ? l.parentLayer?.id || "" : l.id;
    else
      return [];
    return this.searchLegend(
      (a) => a instanceof g && (a.layerId === t || a.parentLayerId === t)
    );
  }
  // Update
  /**
   * Update all layer items bound to the given layer.
   * Does nothing if no layer items are found
   *
   * @param {LayerInstance} layer the layer to update the legend with
   * @memberof LegendAPI
   */
  updateLegend(e) {
    const t = (l, a) => {
      const r = this.getLayerItem(l);
      a ? (r && l instanceof c && (r.layer = l), r?.error()) : r?.load(l instanceof c ? l : void 0);
    };
    e.loadPromise().then(() => {
      let l = this.getLayerItem(e);
      if (e.layerType === w.MAPIMAGE) {
        const a = (r) => {
          if (r.isLayerRoot && !r.isLogicalLayer)
            l = this.getLayerItem(e), t(e, !1), l && !l.treeGrown && (r.children.map((i) => this._treeWalker(e, i)).map((i) => this.addItem(i, l)), l.treeGrown = !0), r.children.forEach((i) => a(i));
          else if (!r.isLayerRoot && !r.isLogicalLayer) {
            if (l = this.getLayerItem(this.$iApi.geo.layer.sublayerId(e.id, r.layerIdx)), l) {
              const i = l.getConfig();
              delete i.layerId, delete i.sublayerIndex, delete i.children, i.name || delete i.name;
              const n = {
                ...this._treeWalker(e, r),
                ...i
              }, o = this.createItem(n);
              this._replaceItem(l, o);
            }
            r.children.forEach((i) => a(i));
          } else r.isLogicalLayer && t(this._treeWalker(e, r).layer, !1);
        };
        a(e.getLayerTree());
      } else
        t(e, !1);
    }).catch(() => {
      t(e, !0), e.supportsSublayers && e.config.sublayers.forEach((l) => {
        t(this.$iApi.geo.layer.sublayerId(e.id, l.index), !0);
      });
    });
  }
  /**
   * Set the expanded state of legend items to `expanded`
   *
   * @param {boolean} expanded the expanded state the items will be set to
   * @param {LegendItem | undefined} root the root item to start updating the expanded state from
   * @memberof LegendAPI
   */
  expandItems(e, t) {
    const l = this.getLegend(), a = t === void 0 ? l : t.children;
    t !== void 0 && this._toggleState(t, { expanded: e }), a.forEach((r) => {
      this._toggleState(r, { expanded: e });
    });
  }
  /**
   * Set the visibility state of legend items to `visibility`
   *
   * @param {boolean} visibility the visibility state the items will be set to
   * @param {LegendItem | undefined} root the root item to start updating the visibility state from
   * @memberof LegendAPI
   */
  showItems(e, t) {
    const l = this.getLegend(), a = t === void 0 ? l : t.children;
    t !== void 0 && this._toggleState(t, { visibility: e }), a.forEach((r) => {
      this._toggleState(r, { visibility: e });
    });
  }
  /**
   * Reload the all legend items connected to the given layer.
   * This preps the items for the reload. It does not reload the actual layer.
   * Parent-child layer types will prep all items related to the layer (both
   * parent and sublayers)
   *
   * @param {LayerInstance | string} layer a layer instance, layer id, or layer uid referencing the reloaded layer
   * @returns {boolean} returns true if item was successfully reloaded, false otherwise
   * @memberof LegendAPI
   */
  reloadLayerItem(e) {
    const t = this.getLayerBoundItems(e);
    return t.forEach((l) => l.reload()), t.length > 0;
  }
  // Delete
  /**
   * Removes the legend item with the given uid, or the item instance.
   *
   * @param {string | LegendItem} item the uid of item or legend item instance to be removed
   * @returns {boolean} returns true if item was removed, false otherwise
   * @memberof LegendAPI
   */
  removeItem(e) {
    const t = typeof e == "string" ? this.getItem(e) : e;
    return t !== void 0 ? this._deleteItem(t) : !1;
  }
  /**
   * Remove the layer item connected to the layer with the given id/uid or the given layer instance.
   *
   * @param {string | LayerInstance} layer the id/uid of the layer or layer instance
   * @returns {boolean} returns true if item was removed, false otherwise
   * @memberof LegendAPI
   */
  removeLayerItem(e) {
    const t = this.getLayerItem(e);
    return t !== void 0 ? this._deleteItem(t) : !1;
  }
  // _Helpers
  /**
   * Search for the first legend item that satisfies the predicate, starting from the given root item.
   *
   * @param {LegendItem} root the root item to start searching from
   * @param {(item: LegendItem) => boolean} predicate boolean predicate to test each item
   * @returns {LegendItem \ undefined} return the first item that satisfies the given predicate. returns undefined if item is not found.
   */
  searchTreeFirst(e, t) {
    if (t(e))
      return e;
    {
      let l;
      return e.children.some((a) => (l = this.searchTreeFirst(a, t), l !== void 0)), l;
    }
  }
  /**
   * Search for all legend items that satisfy the predicate, starting from the given root item.
   *
   * @param {LegendItem} root the root item to start searching from
   * @param {(item: LegendItem) => boolean} predicate predicate boolean predicate to test each item
   * @returns {Array<LegendItem>} return all items that satisfies the given predicate.
   */
  searchTreeAll(e, t) {
    const l = [], a = [e];
    for (; a.length > 0; ) {
      const r = a.shift();
      r && t(r) && l.push(r), r && a.push(...r.children);
    }
    return l;
  }
  /**
   * Search the entire legend for items that satisfy the predicate
   *
   * @param {(item: LegendItem) => boolean} predicate predicate boolean predicate to test each item
   * @returns {Array<LegendItem>} return all items that satisfies the given predicate.
   */
  searchLegend(e) {
    return this.getLegend().map((t) => this.searchTreeAll(t, e)).flat();
  }
  /**
   * Toggles visibility for all items or expands/collapses all groups.
   *
   * @param {LegendItem} item current legend item that is being checked
   * @param {any} options specifies whether visibility or expand/collapse functionality is to be changed
   */
  _toggleState(e, t) {
    const l = t.visibility, a = t.expanded;
    l !== void 0 && e.toggleVisibility(l), a !== void 0 && e.children.length > 0 && e.toggleExpanded(a), e.children && e.children.length > 0 && e.children.forEach((r) => {
      this._toggleState(r, t);
    });
  }
  /**
   * Add the given legend item to the legend store
   *
   * @param {Legenditem} item the legend item to be added
   * @param {LegendItem | undefined} parent the parent legend item for this item
   */
  _insertItem(e, t) {
    s(this.$vApp.$pinia).addItem({ item: e, parent: t });
  }
  /**
   * Deletes the given legend item from the legend store
   *
   * @param {Legenditem} item the legend item to be deleted
   * @returns {boolean} returns true if item was removed, false otherwise
   */
  _deleteItem(e) {
    const t = s(this.$vApp.$pinia), l = (a) => {
      a.children.length > 0 && a.children.forEach((r) => {
        l(r);
      }), a instanceof g && a.handlers.forEach((r) => this.$iApi.event.off(r)), t.removeItem(a);
    };
    return l(e), !0;
  }
  _replaceItem(e, t) {
    s(this.$vApp.$pinia).replaceItem({ oldItem: e, newItem: t });
  }
  // map out layer's layer tree children into a legend configs
  _treeWalker(e, t, l) {
    const r = ((n) => {
      const o = [e];
      for (; o.length > 0; ) {
        const d = o.shift();
        if (d && d.uid === n)
          return d;
        d && o.push(...d.sublayers);
      }
    })(t.uid), i = {};
    return t.isLayerRoot && !t.isLogicalLayer ? (i.layer = r, i.name = r.name, i.children = t.children.map((n) => this._treeWalker(e, n, l))) : !t.isLayerRoot && !t.isLogicalLayer ? (i.name = t.name, i.children = t.children.map((n) => this._treeWalker(e, n, l))) : t.isLogicalLayer && (i.layer = r, i.name = r.name, i.layerId = r.id, i.sublayerIndex = e.isSublayer ? e.layerIdx : void 0), { ...i, ...l };
  }
}
const _ = /* @__PURE__ */ h({
  __name: "nav-button",
  setup(y) {
    const { t: e } = $(), t = u("iApi"), l = () => {
      t.panel.toggle("legend");
    };
    return (a, r) => {
      const i = m("mapnav-button");
      return L(), f(i, {
        onClickFunction: l,
        tooltip: I(e)("legend.title")
      }, {
        default: v(() => r[0] || (r[0] = [
          p("svg", {
            class: "fill-current w-32 h-20",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24"
          }, [
            p("path", {
              d: "M0 0h24v24H0z",
              fill: "none"
            }),
            p("path", { d: "M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27-7.38 5.74zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16z" })
          ], -1)
        ])),
        _: 1
      }, 8, ["tooltip"]);
    };
  }
}), M = { en: { "legend.title": "Legend", "legend.header.addlayer": "Add Layer", "legend.header.reorderlayers": "Reorder Layers", "legend.header.groups": "Toggle Groups", "legend.header.groups.expand": "Expand All", "legend.header.groups.collapse": "Collapse All", "legend.header.visible": "Toggle Visibility", "legend.header.visible.show": "Show All Layers", "legend.header.visible.hide": "Hide All Layers", "legend.group.expand": "Expand Group", "legend.group.collapse": "Collapse Group", "legend.visibility.showLayer": "Show layer", "legend.visibility.hideLayer": "Hide layer", "legend.visibility.showSymbol": "Show symbol", "legend.visibility.hideSymbol": "Hide symbol", "legend.visibility.showGroup": "Show group", "legend.visibility.hideGroup": "Hide group", "legend.symbology.expand": "Expand legend", "legend.symbology.hide": "Hide legend", "legend.symbology.loading": "Loading...", "legend.layer.data": "Show more data", "legend.layer.data.only": "Layer not on map", "legend.layer.offscale": "Layer out of scale", "legend.layer.zoomToVisible": "Zoom to visible scale", "legend.layer.options": "More options", "legend.layer.controls.metadata": "Metadata", "legend.layer.controls.settings": "Settings", "legend.layer.controls.datatable": "Datatable", "legend.layer.controls.symbology": "Legend", "legend.layer.controls.boundaryzoom": "Zoom to Layer Boundary", "legend.layer.controls.cancel": "Cancel", "legend.layer.controls.remove": "Remove", "legend.layer.controls.reload": "Reload", "legend.layer.controls.reloadDisabled": "Layer cannot be reloaded", "legend.layer.features.count": "{count} features", "legend.layer.type.ESRIFeature": "ESRI Feature Layer", "legend.layer.type.ESRIMapImage": "ESRI Map Image Layer", "legend.layer.type.ESRITile": "ESRI Tile Layer", "legend.layer.type.ESRIImagery": "ESRI Image Service", "legend.layer.type.ESRIGraphic": "ESRI Graphic Layer", "legend.layer.type.wfs": "OGC WFS 3.0 Layer", "legend.layer.type.wms": "OGC WMS Layer", "legend.layer.type.geoJson": "GeoJSON Layer", "legend.layer.type.csv": "CSV File Layer", "legend.layer.type.shapefile": "Shapefile Layer", "legend.layer.type.osm": "OpenStreetMap Tile Layer", "legend.layer.type.datatable": "ESRI Table Layer", "legend.layer.type.dataCsv": "Non-Spatial CSV File Layer", "legend.layer.type.dataJson": "Compact JSON File Layer", "legend.layer.type.sublayer": "Sublayer", "legend.layer.type.unknown": "Unknown Layer Type", "legend.alert.symbologyExpanded": "Layer legend expanded", "legend.alert.symbologyCollapsed": "Layer legend collapsed", "legend.alert.groupExpanded": "Legend group expanded", "legend.alert.groupCollapsed": "Legend group collapsed", "legend.alert.layerAdded": "{name} layer added to legend", "legend.alert.layerRemoved": "{name} layer removed from legend" }, fr: { "legend.title": "Légende", "legend.header.addlayer": "Ajouter une couche", "legend.header.reorderlayers": "Réorganiser les couches", "legend.header.groups": "Basculer les Groupes", "legend.header.groups.expand": "Élargir les groupes", "legend.header.groups.collapse": "Réduire les groupes", "legend.header.visible": "Basculer la Visibilité", "legend.header.visible.show": "Montrer tous les couches", "legend.header.visible.hide": "Cacher tous les couches", "legend.group.expand": "Développer un groupe", "legend.group.collapse": "Réduire un groupe", "legend.visibility.showLayer": "Afficher la couche", "legend.visibility.hideLayer": "Masquer la couche", "legend.visibility.showSymbol": "Afficher le symbole", "legend.visibility.hideSymbol": "Masquer le symbole", "legend.visibility.showGroup": "Afficher le groupe", "legend.visibility.hideGroup": "Masquer le groupe", "legend.symbology.expand": "Développer la légende", "legend.symbology.hide": "Masquer la légende", "legend.symbology.loading": "Chargement en cours...", "legend.layer.data": "Afficher plus de données", "legend.layer.data.only": "Couche non visualisable", "legend.layer.offscale": "Couche hors de portée", "legend.layer.zoomToVisible": "Zoom sur l'échelle visible", "legend.layer.options": "Plus d'options", "legend.layer.controls.metadata": "Métadonnées", "legend.layer.controls.settings": "Paramètres", "legend.layer.controls.datatable": "Tableau de données", "legend.layer.controls.symbology": "Légende", "legend.layer.controls.boundaryzoom": "Zoomer à la limite", "legend.layer.controls.cancel": "Annuler", "legend.layer.controls.remove": "Retirer", "legend.layer.controls.reload": "Recharger", "legend.layer.controls.reloadDisabled": "Le calque ne peut pas être rechargé", "legend.layer.features.count": "{count} fonctionnalités", "legend.layer.type.ESRIFeature": "Couche d'entités ESRI", "legend.layer.type.ESRIMapImage": "Couche d'image cartographique ESRI", "legend.layer.type.ESRITile": "Couche de tuiles ESRI", "legend.layer.type.ESRIImagery": "Service d'images ESRI", "legend.layer.type.ESRIGraphic": "Couche graphique ESRI", "legend.layer.type.wfs": "Couche OGC WFS 3.0", "legend.layer.type.wms": "Couche WMS OGC", "legend.layer.type.geoJson": "Couche GeoJSON", "legend.layer.type.csv": "Couche de fichier CSV", "legend.layer.type.shapefile": "Couche Shapefile", "legend.layer.type.osm": "Couche de tuiles OpenStreetMap", "legend.layer.type.datatable": "Couche de table ESRI", "legend.layer.type.dataCsv": "Couche de fichier CSV non spatiale", "legend.layer.type.dataJson": "Couche de fichiers JSON compacte", "legend.layer.type.sublayer": "Sous-couche", "legend.layer.type.unknown": "Type de couche inconnu", "legend.alert.symbologyExpanded": "Légende de la couche développée", "legend.alert.symbologyCollapsed": "Légende de la couche réduite", "legend.alert.groupExpanded": "Groupe de légende développé", "legend.alert.groupCollapsed": "Groupe de légende réduit", "legend.alert.layerAdded": "{name} couche ajoutée à la légende", "legend.alert.layerRemoved": "Couche {name} retiré de la légende" } };
class ue extends R {
  added() {
    this.$iApi.component("legend-nav-button", _), this.$iApi.panel.register(
      {
        legend: {
          screens: {
            "legend-screen": () => b(import("./screen-D67K_xcM.js"))
          },
          style: {
            width: "350px"
          },
          alertName: "legend.title",
          button: {
            tooltip: "legend.title",
            // https://material.io/resources/icons/?icon=layers&style=baseline
            icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none" /><path d="M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27-7.38 5.74zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16z" /></svg>'
          }
        }
      },
      {
        i18n: { messages: M }
      }
    ), this._parseConfig(this.config !== void 0 ? JSON.parse(JSON.stringify(this.config)) : void 0);
    const e = this.$vApp.$watch(
      () => this.config,
      (t) => this._parseConfig(t !== void 0 ? JSON.parse(JSON.stringify(t)) : void 0)
    );
    this.removed = () => {
      e(), this.$iApi.fixture.exists("appbar") && E(this.$vApp.$pinia).removeButton("legend"), this.$iApi.fixture.exists("mapnav") && C(this.$vApp.$pinia).removeItem("legend"), s().$reset(), this.$iApi.panel.remove("legend");
    };
  }
}
export {
  ue as default
};
