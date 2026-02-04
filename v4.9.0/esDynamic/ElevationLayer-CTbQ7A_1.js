import { eL as _, C as f, H as g, i5 as w, a8 as u, i6 as b, ew as V, dX as T, dY as S, d_ as D, i7 as $, s as L, a1 as x, a2 as c, fn as k, N as o, O as l, d$ as y, hY as N, e2 as I, P as M, e8 as O } from "./main-DIdq27YS.js";
class j {
  constructor(e, t, i, a) {
    this._hasNoDataValues = null, this._minValue = null, this._maxValue = null, "pixelData" in e ? (this.values = e.pixelData, this.width = e.width, this.height = e.height, this.noDataValue = e.noDataValue) : (this.values = e, this.width = t, this.height = i, this.noDataValue = a);
  }
  get hasNoDataValues() {
    if (this._hasNoDataValues == null) {
      const e = this.noDataValue;
      this._hasNoDataValues = this.values.includes(e);
    }
    return this._hasNoDataValues;
  }
  get minValue() {
    return this._ensureBounds(), this._minValue;
  }
  get maxValue() {
    return this._ensureBounds(), this._maxValue;
  }
  _ensureBounds() {
    if (this._minValue != null) return;
    const { noDataValue: e, values: t } = this;
    let i = 1 / 0, a = -1 / 0, h = !0;
    for (const n of t) n === e ? this._hasNoDataValues = !0 : (i = n < i ? n : i, a = n > a ? n : a, h = !1);
    h ? (this._minValue = 0, this._maxValue = 0) : (this._minValue = i, this._maxValue = a > -3e38 ? a : 0);
  }
}
class C {
  constructor(e, t, i, a, h = {}) {
    this._mainMethod = t, this._transferLists = i, this._listeners = [], this._promise = _(e, { ...h, schedule: a }).then((n) => {
      if (this._thread === void 0) {
        this._thread = n, this._promise = null, h.hasInitialize && this.broadcast({}, "initialize");
        for (const d of this._listeners) this._connectListener(d);
      } else n.close();
    }), this._promise.catch((n) => f.getLogger("esri.core.workers.WorkerHandle").error(`Failed to initialize ${e} worker: ${n}`));
  }
  on(e, t) {
    const i = { removed: !1, eventName: e, callback: t, threadHandle: null };
    return this._listeners.push(i), this._connectListener(i), g(() => {
      i.removed = !0, w(this._listeners, i), this._thread && i.threadHandle != null && i.threadHandle.remove();
    });
  }
  destroy() {
    this._thread && (this._thread.close(), this._thread = null), this._promise = null, this._listeners.length = 0, this._transferLists = {};
  }
  invoke(e, t) {
    return this.invokeMethod(this._mainMethod, e, t);
  }
  invokeMethod(e, t, i) {
    if (this._thread) {
      const a = this._transferLists[e], h = a ? a(t) : [];
      return this._thread.invoke(e, t, { transferList: h, signal: i });
    }
    return this._promise ? this._promise.then(() => (u(i), this.invokeMethod(e, t, i))) : Promise.reject(null);
  }
  broadcast(e, t) {
    return this._thread ? Promise.all(this._thread.broadcast(t, e)).then(() => {
    }) : this._promise ? this._promise.then(() => this.broadcast(e, t)) : Promise.reject();
  }
  get promise() {
    return this._promise;
  }
  _connectListener(e) {
    this._thread && this._thread.on(e.eventName, e.callback).then((t) => {
      e.removed || (e.threadHandle = t);
    });
  }
}
class v extends C {
  constructor(e = null) {
    super("LercWorker", "_decode", { _decode: (t) => [t.buffer] }, e, { strategy: "dedicated" }), this.schedule = e, this.ref = 0;
  }
  decode(e, t, i) {
    return e && e.byteLength !== 0 ? this.invoke({ buffer: e, options: t }, i) : Promise.resolve(null);
  }
  release() {
    --this.ref <= 0 && (p.forEach((e, t) => {
      e === this && p.delete(t);
    }), this.destroy());
  }
}
const p = /* @__PURE__ */ new Map();
function E(s = null) {
  let e = p.get(s);
  return e || (s != null ? (e = new v((t) => s.immediate.schedule(t)), p.set(s, e)) : (e = new v(), p.set(null, e))), ++e.ref, e;
}
let r = class extends b(V(T(S(D(O))))) {
  constructor(...s) {
    super(...s), this.capabilities = { operations: { supportsTileMap: !1 } }, this.copyright = null, this.heightModelInfo = null, this.path = null, this.minScale = void 0, this.maxScale = void 0, this.opacity = 1, this.operationalLayerType = "ArcGISTiledElevationServiceLayer", this.sourceJSON = null, this.type = "elevation", this.url = null, this.version = null, this._lercDecoder = E();
  }
  normalizeCtorArgs(s, e) {
    return typeof s == "string" ? { url: s, ...e } : s;
  }
  destroy() {
    this._lercDecoder = $(this._lercDecoder);
  }
  readCapabilities(s, e) {
    const t = e.capabilities && e.capabilities.split(",").map((i) => i.toLowerCase().trim());
    return t ? { operations: { supportsTileMap: t.includes("tilemap") } } : { operations: { supportsTileMap: !1 } };
  }
  readVersion(s, e) {
    let t = e.currentVersion;
    return t || (t = 9.3), t;
  }
  load(s) {
    const e = s != null ? s.signal : null;
    return this.addResolvingPromise(this.loadFromPortal({ supportedTypes: ["Image Service"], supportsData: !1, validateItem: (t) => {
      if (t.typeKeywords) {
        for (let i = 0; i < t.typeKeywords.length; i++) if (t.typeKeywords[i].toLowerCase() === "elevation 3d layer") return !0;
      }
      throw new L("portal:invalid-layer-item-type", "Invalid layer item type '${type}', expected '${expectedType}' ", { type: "Image Service", expectedType: "Image Service Elevation 3D Layer" });
    } }, s).catch(x).then(() => this._fetchImageService(e))), Promise.resolve(this);
  }
  fetchTile(s, e, t, i) {
    const a = (i = i || { signal: null }).signal != null ? i.signal : i.signal = new AbortController().signal, h = { responseType: "array-buffer", signal: a }, n = { noDataValue: i.noDataValue, returnFileInfo: !0 };
    return this.load().then(() => this._fetchTileAvailability(s, e, t, i)).then(() => c(this.getTileUrl(s, e, t), h)).then((d) => this._lercDecoder.decode(d.data, n, a)).then((d) => new j(d));
  }
  getTileUrl(s, e, t) {
    const i = !this.capabilities.operations.supportsTileMap && this.supportsBlankTile, a = k({ ...this.parsedUrl.query, blankTile: !i && null });
    return `${this.parsedUrl.path}/tile/${s}/${e}/${t}${a ? "?" + a : ""}`;
  }
  async queryElevation(s, e) {
    const { ElevationQuery: t } = await import("./ElevationQuery-T_0vO_ML.js");
    return u(e), new t().query(this, s, e);
  }
  async createElevationSampler(s, e) {
    const { ElevationQuery: t } = await import("./ElevationQuery-T_0vO_ML.js");
    return u(e), new t().createSampler(this, s, e);
  }
  _fetchTileAvailability(s, e, t, i) {
    return this.tilemapCache ? this.tilemapCache.fetchAvailability(s, e, t, i) : Promise.resolve("unknown");
  }
  async _fetchImageService(s) {
    if (this.sourceJSON) return this.sourceJSON;
    const e = { query: { f: "json", ...this.parsedUrl.query }, responseType: "json", signal: s }, t = await c(this.parsedUrl.path, e);
    t.ssl && (this.url = this.url?.replace(/^http:/i, "https:")), this.sourceJSON = t.data, this.read(t.data, { origin: "service", url: this.parsedUrl });
  }
  get hasOverriddenFetchTile() {
    return !this.fetchTile[m];
  }
};
o([l({ readOnly: !0 })], r.prototype, "capabilities", void 0), o([y("service", "capabilities", ["capabilities"])], r.prototype, "readCapabilities", null), o([l({ json: { read: { source: "copyrightText" } } })], r.prototype, "copyright", void 0), o([l({ readOnly: !0, type: N })], r.prototype, "heightModelInfo", void 0), o([l({ type: String, json: { origins: { "web-scene": { read: !0, write: !0 } }, read: !1 } })], r.prototype, "path", void 0), o([l({ type: ["show", "hide"] })], r.prototype, "listMode", void 0), o([l({ json: { read: !1, write: !1, origins: { service: { read: !1, write: !1 }, "portal-item": { read: !1, write: !1 }, "web-document": { read: !1, write: !1 } } }, readOnly: !0 })], r.prototype, "minScale", void 0), o([l({ json: { read: !1, write: !1, origins: { service: { read: !1, write: !1 }, "portal-item": { read: !1, write: !1 }, "web-document": { read: !1, write: !1 } } }, readOnly: !0 })], r.prototype, "maxScale", void 0), o([l({ json: { read: !1, write: !1, origins: { "web-document": { read: !1, write: !1 } } } })], r.prototype, "opacity", void 0), o([l({ type: ["ArcGISTiledElevationServiceLayer"] })], r.prototype, "operationalLayerType", void 0), o([l()], r.prototype, "sourceJSON", void 0), o([l({ json: { read: !1 }, value: "elevation", readOnly: !0 })], r.prototype, "type", void 0), o([l(I)], r.prototype, "url", void 0), o([l()], r.prototype, "version", void 0), o([y("version", ["currentVersion"])], r.prototype, "readVersion", null), r = o([M("esri.layers.ElevationLayer")], r);
const m = Symbol("default-fetch-tile");
r.prototype.fetchTile[m] = !0;
const U = r;
export {
  U as default
};
//# sourceMappingURL=ElevationLayer-CTbQ7A_1.js.map
