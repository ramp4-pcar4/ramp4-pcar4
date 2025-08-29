import { iH as u, jV as f, fK as c, ik as m, iB as p, jW as L, jX as w, bx as A } from "./main-BpIyUAdL.js";
import { H as h, a as n, F as l, D as H } from "./hilight-defs-DzKgjtLG.js";
class d extends u {
  config = {};
  mode = h.NONE;
  constructor(e, i) {
    super(i), this.config = e, this.mode = e.mode;
  }
  /**
   * Adds the given graphics to the hilighter.
   *
   * @param {Graphic | Array<Graphic>} graphics one or more RAMP Graphics to hilight
   * @returns {Promise} resolves when graphics have been added
   */
  async add(e) {
    this.notImplementedError("addGraphics");
  }
  /**
   * Removes the given graphics from the hilighter. No parmeter removes all graphics.
   *
   * @param {Graphic | Array<Graphic> | undefined} graphics one or more RAMP Graphics to remove
   * @returns {Promise} resolves when graphics have been added
   */
  async remove(e) {
    this.notImplementedError("removeGraphics");
  }
  /**
   * Reload the provided graphics that are currently highlighted.
   *
   * @param {Graphic | Array<Graphic>} graphics one or more RAMP Graphics to reload
   * @returns {Promise} resolves when graphics have been reloaded
   */
  async reloadHilight(e) {
    this.notImplementedError("reloadHilight");
  }
  /**
   * Returns the Hilight layer, if it exists.
   *
   * @returns {Promise<CommonGraphicLayer | undefined>}
   */
  async getHilightLayer() {
    const e = await this.layerFetcher();
    if (e) {
      if (e.isLoaded && e instanceof f)
        return e;
      console.warn("Hilight layer exists but is in bad form.");
      return;
    } else {
      console.warn("Hilight layer could not be fetched.");
      return;
    }
  }
  notImplementedError(e) {
    console.warn(`Hilight mode method ${e} was not implemented by subclass.`);
  }
  /**
   * Provides a short grace period to avoid scenarios where the layer is still getting created.
   * Not overly long, as the highlight layer is a local graphics layer so no server lag involved.
   *
   * @returns Promise resolving in the LayerInstace, or undefined if we could not locate the layer.
   */
  layerFetcher() {
    const e = this.$iApi.geo.layer.getLayer(n);
    return e ? Promise.resolve(e) : new Promise((i) => {
      let t = 0;
      const r = setInterval(() => {
        const a = this.$iApi.geo.layer.getLayer(n);
        if (a)
          clearInterval(r), i(a);
        else if (t += 125, t >= 1125) {
          clearInterval(r), i(void 0);
          return;
        }
      }, 125);
    });
  }
}
class y extends d {
  async add(e) {
    const i = await this.getHilightLayer();
    i && await i.addGraphic(e);
  }
  async remove(e) {
    const i = await this.getHilightLayer();
    i && i.removeGraphic(e);
  }
  async reloadHilight(e) {
    await this.remove(e), await this.add(e);
  }
}
class $ extends y {
  handlers = [];
  // TODO: make these configurable later
  // See https://github.com/ramp4-pcar4/ramp4-pcar4/issues/1353
  onOpacity;
  offOpacity;
  lastAdd = 0;
  constructor(e, i) {
    super(e, i), this.onOpacity = e.options?.onOpacity ?? 0.75, this.offOpacity = e.options?.offOpacity > 0.02 ? e.options.offOpacity : 0.02, this.$iApi.geo.map.created ? this.hilightSetup() : this.handlers.push(
      this.$iApi.event.on(c.MAP_CREATED, () => {
        this.hilightSetup();
      })
    ), this.handlers.push(
      this.$iApi.event.on(c.MAP_BASEMAPCHANGE, () => {
        this.getHilightLayer().then((t) => {
          t && t.graphics.length === 0 && this.updateFogLayer();
        });
      })
    );
  }
  async hilightSetup() {
    const e = m(this.$vApp.$pinia).activeBasemapConfig;
    try {
      const i = this.$iApi.geo.layer.createLayer({
        id: l,
        layerType: p.TILE,
        cosmetic: !0,
        // TODO: what if there's more than 1 URL provided?
        // See https://github.com/ramp4-pcar4/ramp4-pcar4/discussions/1352
        url: e.layers[0].url
      });
      await this.$iApi.geo.map.addLayer(i), i.opacity = this.offOpacity, await this.reorderFogLayer();
    } catch {
      console.error("Something went wrong while setting up the hilighter.");
    }
  }
  async updateFogLayer() {
    this.$iApi.geo.map.removeLayer(l), await this.hilightSetup();
  }
  async reorderFogLayer() {
    const e = this.getFogLayer(), i = await this.getHilightLayer();
    if (!i || !e)
      return;
    const t = this.$iApi.geo.layer.layerOrderIds(), r = t.indexOf(e.id), a = t.indexOf(i.id);
    a < r && a > -1 && r > -1 && this.$iApi.geo.map.reorder(i, r, !1);
  }
  async add(e) {
    this.lastAdd = Date.now();
    const i = this.getFogLayer();
    i && (i.opacity = this.onOpacity, await super.add(e));
  }
  async remove(e) {
    await super.remove(e);
    const i = this.getFogLayer();
    if (!i)
      return;
    const t = Date.now(), r = await this.getHilightLayer();
    r && setTimeout(() => {
      this.lastAdd < t && !r.getGraphicCount() && (i.opacity = this.offOpacity);
    }, 300);
  }
  async reloadHilight(e) {
    await this.updateFogLayer(), await super.reloadHilight(e);
  }
  /**
   * Returns the "fog" tile layer.
   */
  getFogLayer() {
    const e = this.$iApi.geo.layer.getLayer(l);
    if (e && e instanceof L)
      return e;
    console.warn("Hilight fog layer could not be fetched.");
  }
}
class g extends y {
  handlers = [];
  constructor(e, i) {
    super(e, i), this.hilightSetup(e), this.handlers.push(
      this.$iApi.event.on(c.MAP_CREATED, () => {
        this.hilightSetup(e);
      })
    );
  }
  hilightSetup(e) {
    this.$iApi.geo.map.viewPromise.then(() => {
      this.$iApi.geo.map.esriView.highlightOptions = e.options;
    });
  }
  async add(e) {
    await super.add(e);
    const i = this.$iApi.geo.layer.getLayer(n);
    if (i && i.esriLayer && i.isLoaded && i instanceof w) {
      const t = e instanceof Array ? e : [e];
      this.$iApi.geo.map.esriView?.whenLayerView(i.esriLayer)?.then(function(r) {
        r.highlight(t.map((a) => i.getEsriGraphic(a.id)));
      });
    }
  }
  async remove(e) {
    await super.remove(e);
  }
}
class v extends A {
  hilightMode = new d({}, this.$iApi);
  initialized() {
    this.initHilightLayer();
  }
  _parseConfig(e) {
    if (e)
      switch (e.mode) {
        case h.NONE:
          this.hilightMode = new d(e, this.$iApi);
          break;
        case h.GLOW:
          this.hilightMode = new g(e, this.$iApi);
          break;
        case h.LIFT:
          this.hilightMode = new y(e, this.$iApi);
          break;
        case h.FOG:
          this.hilightMode = new $(e, this.$iApi);
          break;
        default:
          console.error("Could not find hilight mode:", e.mode);
          break;
      }
    else
      this.hilightMode = new g(H, this.$iApi);
  }
  /**
   * Initialize the Hilight layer.
   *
   * @returns {Promise} resolves when layer is initialized
   */
  async initHilightLayer() {
    const e = this.$iApi.geo.layer.createLayer({
      id: n,
      layerType: p.GRAPHIC,
      cosmetic: !0,
      url: ""
    });
    await this.$iApi.geo.map.addLayer(e);
  }
  /**
   * Add the given Graphics to the Hilighter
   *
   * @param {Graphic | Array<Graphic>} graphics Graphics to add
   * @returns {Promise} resolves when graphics have been added
   */
  async addHilight(e) {
    const i = e instanceof Array ? e : [e];
    await this.hilightMode.add(i);
  }
  /**
   * Remove the given Graphics from the Hilighter. If no graphics are provided,
   * all highlighted items will be removed.
   *
   * @param {Graphic | Array<Graphic> | undefined} graphics Graphics to remove
   * @returns {Promise} resolves when graphics have been removed
   */
  async removeHilight(e) {
    const i = e ? e instanceof Array ? e : [e] : void 0;
    await this.hilightMode.remove(i);
  }
  /**
   * Reload the provided graphics that are currently highlighted.
   *
   * @param {Array<Graphic> | Graphic} graphics
   */
  async reloadHilight(e) {
    const i = e instanceof Array ? e : [e];
    await this.hilightMode.reloadHilight(i);
  }
  /**
   * Return all Graphics that match the given origin/uid/oid
   *
   * @param origin Graphic origin
   * @param uid Associated layer UID of the Graphic
   * @param oid Associated OID of the Graphic
   */
  async getGraphicsByKey(e, i, t) {
    const r = await this.getHilightLayer();
    if (!r)
      return [];
    let a = r.graphics.map((s) => ({
      ...this.deconstructGraphicKey(s.id),
      og: s
    }));
    return e && (a = a.filter((s) => s.origin === e)), i && (a = a.filter((s) => s.uid === i)), t && (a = a.filter((s) => s.oid === t)), a.map((s) => s.og);
  }
  /**
   * Return a well-formed graphic key
   */
  constructGraphicKey(e, i, t) {
    return `${n}~${e}~${i}~${t}`;
  }
  /**
   * Return a deconstructed graphic key.
   *
   * @param key The graphic key to deconstruct
   */
  deconstructGraphicKey(e) {
    const i = e.split("~");
    return i.length !== 4 && console.warn("Malformed Hilight Graphic key provided:", e), { origin: i[1], uid: i[2], oid: parseInt(i[3]) };
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
class M extends v {
  async added() {
    this._parseConfig(this.config);
    const e = this.$vApp.$watch(
      () => this.config,
      (i) => this._parseConfig(i)
    );
    this.removed = () => {
      e();
    };
  }
}
export {
  M as default
};
//# sourceMappingURL=index-CbcKzr1q.js.map
