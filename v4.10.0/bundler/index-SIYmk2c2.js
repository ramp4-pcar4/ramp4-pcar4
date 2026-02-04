import "tiny-emitter";
import { k as m, C as u, G as l, l as f, L as g, T as L, m as w, F as A } from "./main-C-NQiA0Q.js";
import "@arcgis/core/Basemap";
import "@arcgis/core/Color";
import "@arcgis/core/config";
import "@arcgis/core/geometry/Extent";
import "@arcgis/core/geometry/Multipoint";
import "@arcgis/core/geometry/Point";
import "@arcgis/core/geometry/Polygon";
import "@arcgis/core/geometry/Polyline";
import "@arcgis/core/geometry/SpatialReference";
import "@arcgis/core/geometry/support/jsonUtils";
import "@arcgis/core/Graphic";
import "@arcgis/core/layers/FeatureLayer";
import "@arcgis/core/layers/GraphicsLayer";
import "@arcgis/core/layers/ImageryLayer";
import "@arcgis/core/layers/MapImageLayer";
import "@arcgis/core/layers/OpenStreetMapLayer";
import "@arcgis/core/layers/TileLayer";
import "@arcgis/core/layers/WMSLayer";
import "@arcgis/core/layers/support/Field";
import "@arcgis/core/Map";
import "@arcgis/core/renderers/SimpleRenderer";
import "@arcgis/core/renderers/support/jsonUtils";
import "@arcgis/core/request";
import "@arcgis/core/rest/query";
import "@arcgis/core/rest/support/Query";
import "@arcgis/core/symbols/PictureMarkerSymbol";
import "@arcgis/core/symbols/SimpleFillSymbol";
import "@arcgis/core/symbols/SimpleLineSymbol";
import "@arcgis/core/symbols/SimpleMarkerSymbol";
import "@arcgis/core/symbols/support/jsonUtils";
import "@arcgis/core/layers/support/FeatureFilter";
import "@arcgis/core/views/MapView";
import "@arcgis/core/webmap/background/ColorBackground";
import "deepmerge";
import "terraformer";
import "proj4";
import "throttle-debounce";
import "vue";
import "pinia";
import "vue-i18n";
import "screenfull";
import "lodash.clonedeep";
import "vue-tippy";
import "linkify-html";
import "@popperjs/core";
import "terraformer-arcgis-parser";
import "csv2geojson";
import "redaxios";
import "await-to-js";
import "svg.js";
import { H as h, a as n, F as p, D as H } from "./hilight-defs-DzKgjtLG.js";
class c extends m {
  config = {};
  mode = h.NONE;
  constructor(i, t) {
    super(t), this.config = i, this.mode = i.mode;
  }
  /**
   * Adds the given graphics to the hilighter.
   *
   * @param {Graphic | Array<Graphic>} graphics one or more RAMP Graphics to hilight
   * @returns {Promise} resolves when graphics have been added
   */
  async add(i) {
    this.notImplementedError("addGraphics");
  }
  /**
   * Removes the given graphics from the hilighter. No parmeter removes all graphics.
   *
   * @param {Graphic | Array<Graphic> | undefined} graphics one or more RAMP Graphics to remove
   * @returns {Promise} resolves when graphics have been added
   */
  async remove(i) {
    this.notImplementedError("removeGraphics");
  }
  /**
   * Reload the provided graphics that are currently highlighted.
   *
   * @param {Graphic | Array<Graphic>} graphics one or more RAMP Graphics to reload
   * @returns {Promise} resolves when graphics have been reloaded
   */
  async reloadHilight(i) {
    this.notImplementedError("reloadHilight");
  }
  /**
   * Returns the Hilight layer, if it exists.
   *
   * @returns {Promise<CommonGraphicLayer | undefined>}
   */
  async getHilightLayer() {
    const i = await this.layerFetcher();
    if (i) {
      if (i.isLoaded && i instanceof u)
        return i;
      console.warn("Hilight layer exists but is in bad form.");
      return;
    } else {
      console.warn("Hilight layer could not be fetched.");
      return;
    }
  }
  notImplementedError(i) {
    console.warn(`Hilight mode method ${i} was not implemented by subclass.`);
  }
  /**
   * Provides a short grace period to avoid scenarios where the layer is still getting created.
   * Not overly long, as the highlight layer is a local graphics layer so no server lag involved.
   *
   * @returns Promise resolving in the LayerInstace, or undefined if we could not locate the layer.
   */
  layerFetcher() {
    const i = this.$iApi.geo.layer.getLayer(n);
    return i ? Promise.resolve(i) : new Promise((t) => {
      let e = 0;
      const a = setInterval(() => {
        const r = this.$iApi.geo.layer.getLayer(n);
        if (r)
          clearInterval(a), t(r);
        else if (e += 125, e >= 1125) {
          clearInterval(a), t(void 0);
          return;
        }
      }, 125);
    });
  }
}
class d extends c {
  async add(i) {
    const t = await this.getHilightLayer();
    t && await t.addGraphic(i);
  }
  async remove(i) {
    const t = await this.getHilightLayer();
    t && t.removeGraphic(i);
  }
  async reloadHilight(i) {
    await this.remove(i), await this.add(i);
  }
}
class $ extends d {
  handlers = [];
  // TODO: make these configurable later
  // See https://github.com/ramp4-pcar4/ramp4-pcar4/issues/1353
  onOpacity;
  offOpacity;
  lastAdd = 0;
  constructor(i, t) {
    super(i, t), this.onOpacity = i.options?.onOpacity ?? 0.75, this.offOpacity = i.options?.offOpacity > 0.02 ? i.options.offOpacity : 0.02, this.$iApi.geo.map.created ? this.hilightSetup() : this.handlers.push(
      this.$iApi.event.on(l.MAP_CREATED, () => {
        this.hilightSetup();
      })
    ), this.handlers.push(
      this.$iApi.event.on(l.MAP_BASEMAPCHANGE, () => {
        this.getHilightLayer().then((e) => {
          e && e.graphics.length === 0 && this.updateFogLayer();
        });
      })
    );
  }
  async hilightSetup() {
    const i = f(this.$vApp.$pinia).activeBasemapConfig;
    try {
      const t = this.$iApi.geo.layer.createLayer({
        id: p,
        layerType: g.TILE,
        cosmetic: !0,
        // TODO: what if there's more than 1 URL provided?
        // See https://github.com/ramp4-pcar4/ramp4-pcar4/discussions/1352
        url: i.layers[0].url
      });
      await this.$iApi.geo.map.addLayer(t), t.opacity = this.offOpacity, await this.reorderFogLayer();
    } catch {
      console.error("Something went wrong while setting up the hilighter.");
    }
  }
  async updateFogLayer() {
    this.$iApi.geo.map.removeLayer(p), await this.hilightSetup();
  }
  async reorderFogLayer() {
    const i = this.getFogLayer(), t = await this.getHilightLayer();
    if (!t || !i)
      return;
    const e = this.$iApi.geo.layer.layerOrderIds(), a = e.indexOf(i.id), r = e.indexOf(t.id);
    r < a && r > -1 && a > -1 && this.$iApi.geo.map.reorder(t, a, !1);
  }
  async add(i) {
    this.lastAdd = Date.now();
    const t = this.getFogLayer();
    t && (t.opacity = this.onOpacity, await super.add(i));
  }
  async remove(i) {
    await super.remove(i);
    const t = this.getFogLayer();
    if (!t)
      return;
    const e = Date.now(), a = await this.getHilightLayer();
    a && setTimeout(() => {
      this.lastAdd < e && !a.getGraphicCount() && (t.opacity = this.offOpacity);
    }, 300);
  }
  async reloadHilight(i) {
    await this.updateFogLayer(), await super.reloadHilight(i);
  }
  /**
   * Returns the "fog" tile layer.
   */
  getFogLayer() {
    const i = this.$iApi.geo.layer.getLayer(p);
    if (i && i instanceof L)
      return i;
    console.warn("Hilight fog layer could not be fetched.");
  }
}
class y extends d {
  handlers = [];
  constructor(i, t) {
    super(i, t), this.hilightSetup(i), this.handlers.push(
      this.$iApi.event.on(l.MAP_CREATED, () => {
        this.hilightSetup(i);
      })
    );
  }
  hilightSetup(i) {
    this.$iApi.geo.map.viewPromise.then(() => {
      this.$iApi.geo.map.esriView.highlightOptions = i.options;
    });
  }
  async add(i) {
    await super.add(i);
    const t = this.$iApi.geo.layer.getLayer(n);
    if (t && t.esriLayer && t.isLoaded && t instanceof w) {
      const e = i instanceof Array ? i : [i];
      this.$iApi.geo.map.esriView?.whenLayerView(t.esriLayer)?.then(function(a) {
        a.highlight(e.map((r) => t.getEsriGraphic(r.id)));
      });
    }
  }
  async remove(i) {
    await super.remove(i);
  }
}
class v extends A {
  hilightMode = new c({}, this.$iApi);
  initialized() {
    this.initHilightLayer();
  }
  _parseConfig(i) {
    if (i)
      switch (i.mode) {
        case h.NONE:
          this.hilightMode = new c(i, this.$iApi);
          break;
        case h.GLOW:
          this.hilightMode = new y(i, this.$iApi);
          break;
        case h.LIFT:
          this.hilightMode = new d(i, this.$iApi);
          break;
        case h.FOG:
          this.hilightMode = new $(i, this.$iApi);
          break;
        default:
          console.error("Could not find hilight mode:", i.mode);
          break;
      }
    else
      this.hilightMode = new y(H, this.$iApi);
  }
  /**
   * Initialize the Hilight layer.
   *
   * @returns {Promise} resolves when layer is initialized
   */
  async initHilightLayer() {
    const i = this.$iApi.geo.layer.createLayer({
      id: n,
      layerType: g.GRAPHIC,
      cosmetic: !0,
      url: ""
    });
    await this.$iApi.geo.map.addLayer(i);
  }
  /**
   * Add the given Graphics to the Hilighter
   *
   * @param {Graphic | Array<Graphic>} graphics Graphics to add
   * @returns {Promise} resolves when graphics have been added
   */
  async addHilight(i) {
    const t = i instanceof Array ? i : [i];
    await this.hilightMode.add(t);
  }
  /**
   * Remove the given Graphics from the Hilighter. If no graphics are provided,
   * all highlighted items will be removed.
   *
   * @param {Graphic | Array<Graphic> | undefined} graphics Graphics to remove
   * @returns {Promise} resolves when graphics have been removed
   */
  async removeHilight(i) {
    const t = i ? i instanceof Array ? i : [i] : void 0;
    await this.hilightMode.remove(t);
  }
  /**
   * Reload the provided graphics that are currently highlighted.
   *
   * @param {Array<Graphic> | Graphic} graphics
   */
  async reloadHilight(i) {
    const t = i instanceof Array ? i : [i];
    await this.hilightMode.reloadHilight(t);
  }
  /**
   * Return all Graphics that match the given origin/uid/oid
   *
   * @param origin Graphic origin
   * @param uid Associated layer UID of the Graphic
   * @param oid Associated OID of the Graphic
   */
  async getGraphicsByKey(i, t, e) {
    const a = await this.getHilightLayer();
    if (!a)
      return [];
    let r = a.graphics.map((o) => ({
      ...this.deconstructGraphicKey(o.id),
      og: o
    }));
    return i && (r = r.filter((o) => o.origin === i)), t && (r = r.filter((o) => o.uid === t)), e && (r = r.filter((o) => o.oid === e)), r.map((o) => o.og);
  }
  /**
   * Return a well-formed graphic key
   */
  constructGraphicKey(i, t, e) {
    return `${n}~${i}~${t}~${e}`;
  }
  /**
   * Return a deconstructed graphic key.
   *
   * @param key The graphic key to deconstruct
   */
  deconstructGraphicKey(i) {
    const t = i.split("~");
    return t.length !== 4 && console.warn("Malformed Hilight Graphic key provided:", i), { origin: t[1], uid: t[2], oid: parseInt(t[3]) };
  }
  /**
   * Return the hilightLayer
   */
  async getHilightLayer() {
    if (this.hilightMode)
      return await this.hilightMode.getHilightLayer();
    console.warn("API get layer request before highlight mode object exists");
  }
}
class vi extends v {
  async added() {
    this._parseConfig(this.config);
    const i = this.$vApp.$watch(
      () => this.config,
      (t) => this._parseConfig(t)
    );
    this.removed = () => {
      i();
    };
  }
}
export {
  vi as default
};
