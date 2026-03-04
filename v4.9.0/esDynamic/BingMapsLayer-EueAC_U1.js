import { dV as M, dZ as U, dW as j, fh as b, bh as h, aU as x, az as B, a2 as c, fU as f, s as u, N as r, O as s, P as T, fV as P, e8 as R, eU as k, dX as $, d_ as _, a6 as I, fW as a } from "./main-DIdq27YS.js";
var v;
const y = new P("0/0/0", 0, 0, 0, void 0);
let d = v = class extends M(U(j(R))) {
  constructor() {
    super(...arguments), this.tileInfo = b.create({ spatialReference: h.WebMercator, size: 256 }), this.type = "base-tile", this.fullExtent = new x(-20037508342787e-6, -2003750834278e-5, 2003750834278e-5, 20037508342787e-6, h.WebMercator), this.spatialReference = h.WebMercator;
  }
  getTileBounds(e, t, i, l) {
    const n = l || B();
    return y.level = e, y.row = t, y.col = i, y.extent = n, this.tileInfo.updateTileInfo(y), y.extent = void 0, n;
  }
  fetchTile(e, t, i, l = {}) {
    const { signal: n } = l, p = this.getTileUrl(e, t, i), g = { responseType: "image", signal: n, query: { ...this.refreshParameters } };
    return c(p ?? "", g).then((m) => m.data);
  }
  async fetchImageBitmapTile(e, t, i, l = {}) {
    const { signal: n } = l;
    if (this.fetchTile !== v.prototype.fetchTile) {
      const S = await this.fetchTile(e, t, i, l);
      return f(S, e, t, i, n);
    }
    const p = this.getTileUrl(e, t, i) ?? "", g = { responseType: "blob", signal: n, query: { ...this.refreshParameters } }, { data: m } = await c(p, g);
    return f(m, e, t, i, n);
  }
  getTileUrl() {
    throw new u("basetilelayer:gettileurl-not-implemented", "getTileUrl() is not implemented");
  }
};
r([s({ type: b })], d.prototype, "tileInfo", void 0), r([s({ type: ["show", "hide"] })], d.prototype, "listMode", void 0), r([s({ readOnly: !0, value: "base-tile" })], d.prototype, "type", void 0), r([s({ nonNullable: !0 })], d.prototype, "fullExtent", void 0), r([s()], d.prototype, "spatialReference", void 0), d = v = r([T("esri.layers.BaseTileLayer")], d);
const L = d, w = new k({ BingMapsAerial: "aerial", BingMapsRoad: "road", BingMapsHybrid: "hybrid" }), O = "https://dev.virtualearth.net";
let o = class extends M($(_(L))) {
  constructor(e) {
    super(e), this.type = "bing-maps", this.tileInfo = new b({ size: [256, 256], dpi: 96, origin: new I({ x: -20037508342787e-6, y: 20037508342787e-6, spatialReference: h.WebMercator }), spatialReference: h.WebMercator, lods: [new a({ level: 1, resolution: 78271.5169639999, scale: 295828763795777e-6 }), new a({ level: 2, resolution: 39135.7584820001, scale: 147914381897889e-6 }), new a({ level: 3, resolution: 19567.8792409999, scale: 73957190948944e-6 }), new a({ level: 4, resolution: 9783.93962049996, scale: 36978595474472e-6 }), new a({ level: 5, resolution: 4891.96981024998, scale: 18489297737236e-6 }), new a({ level: 6, resolution: 2445.98490512499, scale: 9244648868618e-6 }), new a({ level: 7, resolution: 1222.99245256249, scale: 4622324434309e-6 }), new a({ level: 8, resolution: 611.49622628138, scale: 2311162217155e-6 }), new a({ level: 9, resolution: 305.748113140558, scale: 1155581108577e-6 }), new a({ level: 10, resolution: 152.874056570411, scale: 577790.554289 }), new a({ level: 11, resolution: 76.4370282850732, scale: 288895.277144 }), new a({ level: 12, resolution: 38.2185141425366, scale: 144447.638572 }), new a({ level: 13, resolution: 19.1092570712683, scale: 72223.819286 }), new a({ level: 14, resolution: 9.55462853563415, scale: 36111.909643 }), new a({ level: 15, resolution: 4.77731426794937, scale: 18055.954822 }), new a({ level: 16, resolution: 2.38865713397468, scale: 9027.977411 }), new a({ level: 17, resolution: 1.19432856685505, scale: 4513.988705 }), new a({ level: 18, resolution: 0.597164283559817, scale: 2256.994353 }), new a({ level: 19, resolution: 0.298582141647617, scale: 1128.497176 }), new a({ level: 20, resolution: 0.1492910708238085, scale: 564.248588 })] }), this.key = null, this.style = "road", this.culture = "en-US", this.region = null, this.portalUrl = null, this.hasAttributionData = !0;
  }
  get bingMetadata() {
    return this._get("bingMetadata");
  }
  set bingMetadata(e) {
    this._set("bingMetadata", e);
  }
  get copyright() {
    return this.bingMetadata != null ? this.bingMetadata.copyright : null;
  }
  get operationalLayerType() {
    return w.toJSON(this.style);
  }
  get bingLogo() {
    return this.bingMetadata != null ? this.bingMetadata.brandLogoUri : null;
  }
  load(e) {
    return this.key ? this.addResolvingPromise(this._getMetadata()) : this.portalUrl ? this.addResolvingPromise(this._getPortalBingKey().then(() => this._getMetadata())) : this.addResolvingPromise(Promise.reject(new u("bingmapslayer:load", "Bing layer must have bing key."))), Promise.resolve(this);
  }
  getTileUrl(e, t, i) {
    if (!this.loaded || this.bingMetadata == null) return null;
    const l = this.bingMetadata.resourceSets[0].resources[0], n = l.imageUrlSubdomains[t % l.imageUrlSubdomains.length], p = this._getQuadKey(e, t, i);
    return l.imageUrl.replace("{subdomain}", n).replace("{quadkey}", p);
  }
  async fetchAttributionData() {
    return this.load().then(() => this.bingMetadata == null ? null : { contributors: this.bingMetadata.resourceSets[0].resources[0].imageryProviders.map((e) => ({ attribution: e.attribution, coverageAreas: e.coverageAreas.map((t) => ({ zoomMin: t.zoomMin, zoomMax: t.zoomMax, score: 1, bbox: [t.bbox[0], t.bbox[1], t.bbox[2], t.bbox[3]] })) })) });
  }
  _getMetadata() {
    const e = { road: "roadOnDemand", aerial: "aerial", hybrid: "aerialWithLabelsOnDemand" }[this.style];
    return c(`${O}/REST/v1/Imagery/Metadata/${e}`, { responseType: "json", query: { include: "ImageryProviders", uriScheme: "https", key: this.key, suppressStatus: !0, output: "json", culture: this.culture, userRegion: this.region } }).then((t) => {
      const i = t.data;
      if (i.statusCode !== 200) throw new u("bingmapslayer:getmetadata", i.statusDescription);
      if (this.bingMetadata = i, this.bingMetadata.resourceSets.length === 0) throw new u("bingmapslayer:getmetadata", "no bing resourcesets");
      if (this.bingMetadata.resourceSets[0].resources.length === 0) throw new u("bingmapslayer:getmetadata", "no bing resources");
    }).catch((t) => {
      throw new u("bingmapslayer:getmetadata", t.message);
    });
  }
  _getPortalBingKey() {
    return c(this.portalUrl ?? "", { responseType: "json", authMode: "no-prompt", query: { f: "json" } }).then((e) => {
      if (!e.data.bingKey) throw new u("bingmapslayer:getportalbingkey", "The referenced Portal does not contain a valid bing key");
      this.key = e.data.bingKey;
    }).catch((e) => {
      throw new u("bingmapslayer:getportalbingkey", e.message);
    });
  }
  _getQuadKey(e, t, i) {
    let l = "";
    for (let n = e; n > 0; n--) {
      let p = 0;
      const g = 1 << n - 1;
      i & g && (p += 1), t & g && (p += 2), l += p.toString();
    }
    return l;
  }
};
r([s({ json: { read: !1, write: !1 }, value: null })], o.prototype, "bingMetadata", null), r([s({ json: { read: !1, write: !1 }, value: "bing-maps", readOnly: !0 })], o.prototype, "type", void 0), r([s({ type: b })], o.prototype, "tileInfo", void 0), r([s({ type: String, readOnly: !0, json: { read: !1, write: !1 } })], o.prototype, "copyright", null), r([s({ type: String, json: { write: !1, read: !1 } })], o.prototype, "key", void 0), r([s({ type: w.apiValues, nonNullable: !0, json: { read: { source: "layerType", reader: w.read } } })], o.prototype, "style", void 0), r([s({ type: ["BingMapsAerial", "BingMapsHybrid", "BingMapsRoad"] })], o.prototype, "operationalLayerType", null), r([s({ type: String, json: { write: !1, read: !1 } })], o.prototype, "culture", void 0), r([s({ type: String, json: { write: !1, read: !1 } })], o.prototype, "region", void 0), r([s({ type: String, json: { write: !0, read: !0 } })], o.prototype, "portalUrl", void 0), r([s({ type: Boolean, json: { write: !1, read: !1 } })], o.prototype, "hasAttributionData", void 0), r([s({ type: String, readOnly: !0 })], o.prototype, "bingLogo", null), o = r([T("esri.layers.BingMapsLayer")], o);
const z = o;
export {
  z as default
};
//# sourceMappingURL=BingMapsLayer-EueAC_U1.js.map
