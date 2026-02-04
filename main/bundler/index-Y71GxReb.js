import "tiny-emitter";
import { k as m, C as u, G as p, l as f, L as g, T as L, m as w, F as A } from "./main-6dWPqJr6.js";
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
import "vue";
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
import { H as h, a as n, F as l, D as H } from "./hilight-defs-DzKgjtLG.js";
class d extends m {
  config = {};
  mode = h.NONE;
  constructor(i, e) {
    super(e), this.config = i, this.mode = i.mode;
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
    return i ? Promise.resolve(i) : new Promise((e) => {
      let t = 0;
      const r = setInterval(() => {
        const a = this.$iApi.geo.layer.getLayer(n);
        if (a)
          clearInterval(r), e(a);
        else if (t += 125, t >= 1125) {
          clearInterval(r), e(void 0);
          return;
        }
      }, 125);
    });
  }
}
class c extends d {
  async add(i) {
    const e = await this.getHilightLayer();
    e && await e.addGraphic(i);
  }
  async remove(i) {
    const e = await this.getHilightLayer();
    e && e.removeGraphic(i);
  }
  async reloadHilight(i) {
    await this.remove(i), await this.add(i);
  }
}
class v extends c {
  handlers = [];
  // TODO: make these configurable later
  // See https://github.com/ramp4-pcar4/ramp4-pcar4/issues/1353
  onOpacity;
  offOpacity;
  lastAdd = 0;
  constructor(i, e) {
    super(i, e), this.onOpacity = i.options?.onOpacity ?? 0.75, this.offOpacity = i.options?.offOpacity > 0.02 ? i.options.offOpacity : 0.02, this.$iApi.geo.map.created ? this.hilightSetup() : this.handlers.push(
      this.$iApi.event.on(p.MAP_CREATED, () => {
        this.hilightSetup();
      })
    ), this.handlers.push(
      this.$iApi.event.on(p.MAP_BASEMAPCHANGE, () => {
        this.getHilightLayer().then((t) => {
          t && t.graphics.length === 0 && this.updateFogLayer();
        });
      })
    );
  }
  async hilightSetup() {
    const i = f(this.$vApp.$pinia).activeBasemapConfig;
    try {
      const e = this.$iApi.geo.layer.createLayer({
        id: l,
        layerType: g.TILE,
        cosmetic: !0,
        system: !0,
        // TODO: what if there's more than 1 URL provided?
        // See https://github.com/ramp4-pcar4/ramp4-pcar4/discussions/1352
        url: i.layers[0].url
      });
      await this.$iApi.geo.map.addLayer(e), e.opacity = this.offOpacity, await this.reorderFogLayer();
    } catch {
      console.error("Something went wrong while setting up the hilighter.");
    }
  }
  async updateFogLayer() {
    this.$iApi.geo.map.removeLayer(l), await this.hilightSetup();
  }
  async reorderFogLayer() {
    const i = this.getFogLayer(), e = await this.getHilightLayer();
    if (!e || !i)
      return;
    const t = this.$iApi.geo.layer.layerOrderIds(), r = t.indexOf(i.id), a = t.indexOf(e.id);
    a < r && a > -1 && r > -1 && this.$iApi.geo.map.reorder(e, r, !1);
  }
  async add(i) {
    this.lastAdd = Date.now();
    const e = this.getFogLayer();
    e && (e.opacity = this.onOpacity, await super.add(i));
  }
  async remove(i) {
    await super.remove(i);
    const e = this.getFogLayer();
    if (!e)
      return;
    const t = Date.now(), r = await this.getHilightLayer();
    r && setTimeout(() => {
      this.lastAdd < t && !r.getGraphicCount() && (e.opacity = this.offOpacity);
    }, 300);
  }
  async reloadHilight(i) {
    await this.updateFogLayer(), await super.reloadHilight(i);
  }
  /**
   * Returns the "fog" tile layer.
   */
  getFogLayer() {
    const i = this.$iApi.geo.layer.getLayer(l);
    if (i && i instanceof L)
      return i;
    console.warn("Hilight fog layer could not be fetched.");
  }
}
class y extends c {
  handlers = [];
  constructor(i, e) {
    super(i, e), this.hilightSetup(i), this.handlers.push(
      this.$iApi.event.on(p.MAP_CREATED, () => {
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
    const e = this.$iApi.geo.layer.getLayer(n);
    if (e && e.esriLayer && e.isLoaded && e instanceof w) {
      const t = i instanceof Array ? i : [i];
      await e.viewPromise(), e.esriView.highlight(t.map((r) => e.getEsriGraphic(r.id)));
    }
  }
  async remove(i) {
    await super.remove(i);
  }
}
class $ extends A {
  hilightMode = new d({}, this.$iApi);
  initialized() {
    this.initHilightLayer();
  }
  _parseConfig(i) {
    if (i)
      switch (i.mode) {
        case h.NONE:
          this.hilightMode = new d(i, this.$iApi);
          break;
        case h.GLOW:
          this.hilightMode = new y(i, this.$iApi);
          break;
        case h.LIFT:
          this.hilightMode = new c(i, this.$iApi);
          break;
        case h.FOG:
          this.hilightMode = new v(i, this.$iApi);
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
      system: !0,
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
    const e = i instanceof Array ? i : [i];
    await this.hilightMode.add(e);
  }
  /**
   * Remove the given Graphics from the Hilighter. If no graphics are provided,
   * all highlighted items will be removed.
   *
   * @param {Graphic | Array<Graphic> | undefined} graphics Graphics to remove
   * @returns {Promise} resolves when graphics have been removed
   */
  async removeHilight(i) {
    const e = i ? i instanceof Array ? i : [i] : void 0;
    await this.hilightMode.remove(e);
  }
  /**
   * Reload the provided graphics that are currently highlighted.
   *
   * @param {Array<Graphic> | Graphic} graphics
   */
  async reloadHilight(i) {
    const e = i instanceof Array ? i : [i];
    await this.hilightMode.reloadHilight(e);
  }
  /**
   * Return all Graphics that match the given origin/uid/oid
   *
   * @param origin Graphic origin
   * @param uid Associated layer UID of the Graphic
   * @param oid Associated OID of the Graphic
   */
  async getGraphicsByKey(i, e, t) {
    const r = await this.getHilightLayer();
    if (!r)
      return [];
    let a = r.graphics.map((s) => ({
      ...this.deconstructGraphicKey(s.id),
      og: s
    }));
    return i && (a = a.filter((s) => s.origin === i)), e && (a = a.filter((s) => s.uid === e)), t && (a = a.filter((s) => s.oid === t)), a.map((s) => s.og);
  }
  /**
   * Return a well-formed graphic key
   */
  constructGraphicKey(i, e, t) {
    return `${n}~${i}~${e}~${t}`;
  }
  /**
   * Return a deconstructed graphic key.
   *
   * @param key The graphic key to deconstruct
   */
  deconstructGraphicKey(i) {
    const e = i.split("~");
    return e.length !== 4 && console.warn("Malformed Hilight Graphic key provided:", i), { origin: e[1], uid: e[2], oid: parseInt(e[3]) };
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
class ni extends $ {
  async added() {
    this._parseConfig(this.config);
    const i = this.$vApp.$watch(
      () => this.config,
      (e) => this._parseConfig(e)
    );
    this.removed = () => {
      i();
    };
  }
}
export {
  ni as default
};
