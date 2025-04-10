import { a2 as Ee, m9 as j, fk as ze, bk as re, eL as $e, ff as Ve, a1 as Fe, M, K as X, dQ as oe, dK as qe, nu as Ce, lS as He, az as F, k3 as Be, h0 as U, nv as ne, f9 as Ne, fa as We, fc as Qe, h2 as Je, fg as $, nw as Ke, lI as Ge, fh as Re, ap as ae, c1 as Ye, E as je, nx as Xe, ny as Ze, b5 as z, J as et, C as le, F as he, ag as tt, a6 as st, N as ce, O as it, P as rt } from "./main-DhLeoxL5.js";
import { E as L, I as v } from "./enums-qHpGJ28Q.js";
import { t as A } from "./Rect-DD6XS68q.js";
import { G as ot, D as Le, F as C, I as k, O as ue, R as B } from "./enums-Do5C4ZjN.js";
import { e as Pe, m as Ae } from "./Texture-DX36kIdt.js";
import { i as nt } from "./rasterizingUtils-Di4kSgBg.js";
import { w as at, d as lt } from "./GeometryUtils-DohtSXQP.js";
import { h as R } from "./Program-Bz_GT0wk.js";
import { o as E } from "./ProgramTemplate-BeH75DLk.js";
import { e as Q, t as ht, c as ct } from "./config-nuMERBvb.js";
import { r as Me } from "./WGLContainer-Cnz7j1HY.js";
import { n as ut, l as O, r as yt, i as Z, a as D } from "./StyleDefinition-CKpkeT8Q.js";
import { E as N } from "./Container-B4fR9B2k.js";
import { i as dt } from "./TileContainer-CTT7qXgn.js";
import { s as _t } from "./PooledRBush-D3N1JayG.js";
import { e as ye, s as de } from "./SourceLayerData-Bnku9omb.js";
import { L as ft, l as _e } from "./StyleRepository-C8cWK8lG.js";
import { m as pt, u as gt } from "./LayerView-BUXYmvJm.js";
let V = class {
  constructor(e, s) {
    this._width = 0, this._height = 0, this._free = [], this._width = e, this._height = s, this._free.push(new A(0, 0, e, s));
  }
  get width() {
    return this._width;
  }
  get height() {
    return this._height;
  }
  allocate(e, s) {
    if (e > this._width || s > this._height) return new A();
    let t = null, i = -1;
    for (let r = 0; r < this._free.length; ++r) {
      const n = this._free[r];
      e <= n.width && s <= n.height && (t === null || n.y <= t.y && n.x <= t.x) && (t = n, i = r);
    }
    return t === null ? new A() : (this._free.splice(i, 1), t.width < t.height ? (t.width > e && this._free.push(new A(t.x + e, t.y, t.width - e, s)), t.height > s && this._free.push(new A(t.x, t.y + s, t.width, t.height - s))) : (t.width > e && this._free.push(new A(t.x + e, t.y, t.width - e, t.height)), t.height > s && this._free.push(new A(t.x, t.y + s, e, t.height - s))), new A(t.x, t.y, e, s));
  }
  release(e) {
    for (let s = 0; s < this._free.length; ++s) {
      const t = this._free[s];
      if (t.y === e.y && t.height === e.height && t.x + t.width === e.x) t.width += e.width;
      else if (t.x === e.x && t.width === e.width && t.y + t.height === e.y) t.height += e.height;
      else if (e.y === t.y && e.height === t.height && e.x + e.width === t.x) t.x = e.x, t.width += e.width;
      else {
        if (e.x !== t.x || e.width !== t.width || e.y + e.height !== t.y) continue;
        t.y = e.y, t.height += e.height;
      }
      this._free.splice(s, 1), this.release(e);
    }
    this._free.push(e);
  }
}, fe = class {
  constructor(e, s, t) {
    this.width = 0, this.height = 0, this._dirties = [], this._glyphData = [], this._currentPage = 0, this._glyphIndex = {}, this._textures = [], this._rangePromises = /* @__PURE__ */ new Map(), this.width = e, this.height = s, this._glyphSource = t, this._binPack = new V(e - 4, s - 4), this._glyphData.push(new Uint8Array(e * s)), this._dirties.push(!0), this._textures.push(void 0);
  }
  getGlyphItems(e, s) {
    const t = [], i = this._glyphSource, r = /* @__PURE__ */ new Set(), n = 1 / 256;
    for (const a of s) {
      const l = Math.floor(a * n);
      r.add(l);
    }
    const o = [];
    return r.forEach((a) => {
      const l = e + a;
      if (this._rangePromises.has(l)) o.push(this._rangePromises.get(l));
      else {
        const c = i.getRange(e, a).then(() => {
          this._rangePromises.delete(l);
        }, () => {
          this._rangePromises.delete(l);
        });
        this._rangePromises.set(l, c), o.push(c);
      }
    }), Promise.all(o).then(() => {
      let a = this._glyphIndex[e];
      a || (a = {}, this._glyphIndex[e] = a);
      for (const l of s) {
        const c = a[l];
        if (c) {
          t[l] = { sdf: !0, rect: c.rect, metrics: c.metrics, page: c.page, code: l };
          continue;
        }
        const y = i.getGlyph(e, l);
        if (!y?.metrics) continue;
        const d = y.metrics;
        let u;
        if (d.width === 0) u = new A(0, 0, 0, 0);
        else {
          const f = d.width + 6, g = d.height + 2 * 3;
          let p = f % 4 ? 4 - f % 4 : 4, m = g % 4 ? 4 - g % 4 : 4;
          p === 1 && (p = 5), m === 1 && (m = 5), u = this._binPack.allocate(f + p, g + m), u.isEmpty && (this._dirties[this._currentPage] || (this._glyphData[this._currentPage] = null), this._currentPage = this._glyphData.length, this._glyphData.push(new Uint8Array(this.width * this.height)), this._dirties.push(!0), this._textures.push(void 0), this._binPack = new V(this.width - 4, this.height - 4), u = this._binPack.allocate(f + p, g + m));
          const b = this._glyphData[this._currentPage], S = y.bitmap;
          let I, w;
          if (S) for (let x = 0; x < g; x++) {
            I = f * x, w = this.width * (u.y + x + 1) + u.x;
            for (let P = 0; P < f; P++) b[w + P + 1] = S.at(I + P);
          }
        }
        a[l] = { rect: u, metrics: d, tileIDs: null, page: this._currentPage }, t[l] = { sdf: !0, rect: u, metrics: d, page: this._currentPage, code: l }, this._dirties[this._currentPage] = !0;
      }
      return t;
    });
  }
  removeGlyphs(e) {
    for (const s in this._glyphIndex) {
      const t = this._glyphIndex[s];
      if (!t) continue;
      let i;
      for (const r in t) if (i = t[r], i.tileIDs.delete(e), i.tileIDs.size === 0) {
        const n = this._glyphData[i.page], o = i.rect;
        let a, l;
        for (let c = 0; c < o.height; c++) for (a = this.width * (o.y + c) + o.x, l = 0; l < o.width; l++) n[a + l] = 0;
        delete t[r], this._dirties[i.page] = !0;
      }
    }
  }
  bind(e, s, t, i = 0) {
    if (!this._textures[t]) {
      const n = new Pe();
      n.pixelFormat = ot.ALPHA, n.wrapMode = Le.CLAMP_TO_EDGE, n.width = this.width, n.height = this.height, this._textures[t] = new Ae(e, n, new Uint8Array(this.width * this.height));
    }
    const r = this._textures[t];
    r.setSamplingMode(s), this._dirties[t] && r.setData(this._glyphData[t]), e.bindTexture(r, i), this._dirties[t] = !1;
  }
  destroy() {
    this.dispose();
  }
  dispose() {
    this._glyphData.length = 0, this._binPack = null;
    for (const e of this._textures) e && e.dispose();
    this._textures.length = 0;
  }
}, G = class {
  constructor(e) {
    if (this._metrics = [], !e) return void (this._allBitmaps = null);
    const s = /* @__PURE__ */ new Map();
    let t = 0;
    for (; e.next(); ) switch (e.tag()) {
      case 1: {
        const n = e.getMessage();
        for (; n.next(); ) switch (n.tag()) {
          case 3: {
            const o = n.getMessage();
            let a, l, c, y, d, u, _;
            for (; o.next(); ) switch (o.tag()) {
              case 1:
                a = o.getUInt32();
                break;
              case 2:
                l = o.getBytes();
                break;
              case 3:
                c = o.getUInt32();
                break;
              case 4:
                y = o.getUInt32();
                break;
              case 5:
                d = o.getSInt32();
                break;
              case 6:
                u = o.getSInt32();
                break;
              case 7:
                _ = o.getUInt32();
                break;
              default:
                o.skip();
            }
            if (o.release(), a) {
              const f = l?.length ?? 0;
              this._metrics[a] = { width: c, height: y, left: d, top: u, advance: _, startOffset: t, length: f }, s.set(a, l), t += f;
            }
            break;
          }
          default:
            n.skip();
        }
        n.release();
        break;
      }
      default:
        e.skip();
    }
    const i = new Uint8Array(t), r = this._metrics;
    for (const [n, o] of s) {
      const { startOffset: a, length: l } = r[n];
      if (o) for (let c = 0; c < l; ++c) i[a + c] = o[c];
    }
    this._allBitmaps = i;
  }
  getMetrics(e) {
    return this._metrics[e];
  }
  getBitmap(e) {
    if (!this._allBitmaps) return;
    const s = this._metrics[e];
    if (s === void 0) return;
    const { startOffset: t, length: i } = s;
    return i !== 0 ? new bt(this._allBitmaps, t, i) : void 0;
  }
}, mt = class {
  constructor() {
    this._ranges = [];
  }
  get ranges() {
    return this._ranges;
  }
  getRange(e) {
    return this._ranges[e];
  }
  addRange(e, s) {
    this._ranges[e] = s;
  }
}, pe = class {
  constructor(e) {
    this._glyphInfo = {}, this._baseURL = e;
  }
  getRange(e, s) {
    const t = this._getFontStack(e);
    if (t.getRange(s)) return Promise.resolve();
    const i = 256 * s, r = i + 255;
    if (this._baseURL) {
      const n = this._baseURL.replace("{fontstack}", e).replace("{range}", i + "-" + r);
      return Ee(n, { responseType: "array-buffer" }).then((o) => {
        t.addRange(s, new G(new j(new Uint8Array(o.data), new DataView(o.data))));
      }).catch(() => {
        t.addRange(s, new G());
      });
    }
    return t.addRange(s, new G()), Promise.resolve();
  }
  getGlyph(e, s) {
    const t = this._getFontStack(e);
    if (!t) return;
    const i = Math.floor(s / 256), r = t.getRange(i);
    return r ? { metrics: r.getMetrics(s), bitmap: r.getBitmap(s) } : void 0;
  }
  _getFontStack(e) {
    let s = this._glyphInfo[e];
    return s || (s = this._glyphInfo[e] = new mt()), s;
  }
}, bt = class {
  constructor(e, s, t) {
    this._array = e, this._start = s, this.length = t;
  }
  at(e) {
    return 0 <= e && e < this.length ? this._array[this._start + e] : void 0;
  }
};
const wt = "dasharray-";
let ge = class Oe {
  constructor(e, s, t = 0) {
    this._size = [], this._mosaicsData = [], this._textures = [], this._dirties = [], this._maxItemSize = 0, this._currentPage = 0, this._pageWidth = 0, this._pageHeight = 0, this._mosaicRects = {}, this.pixelRatio = 1, (e <= 0 || s <= 0) && console.error("Sprites mosaic defaultWidth and defaultHeight must be greater than zero!"), this._pageWidth = e, this._pageHeight = s, t > 0 && (this._maxItemSize = t), this._binPack = new V(e - 4, s - 4);
  }
  destroy() {
    this.dispose();
  }
  dispose() {
    this._binPack = null, this._mosaicsData.length = 0, this._mosaicRects = {};
    for (const e of this._textures) e && e.dispose();
    this._textures.length = 0;
  }
  getWidth(e) {
    return e >= this._size.length ? -1 : this._size[e][0];
  }
  getHeight(e) {
    return e >= this._size.length ? -1 : this._size[e][1];
  }
  getPageSize(e) {
    return e >= this._size.length ? null : this._size[e];
  }
  setSpriteSource(e) {
    if (this.dispose(), this.pixelRatio = e.devicePixelRatio, this._mosaicsData.length === 0) {
      this._binPack = new V(this._pageWidth - 4, this._pageHeight - 4);
      const s = Math.floor(this._pageWidth), t = Math.floor(this._pageHeight), i = new Uint32Array(s * t);
      this._mosaicsData[0] = i, this._dirties.push(!0), this._size.push([this._pageWidth, this._pageHeight]), this._textures.push(void 0);
    }
    this._sprites = e;
  }
  getSpriteItem(e, s = !1) {
    let t, i, r = this._mosaicRects[e];
    if (r) return r;
    if (!this._sprites || this._sprites.loadStatus !== "loaded" || (e && e.startsWith(wt) ? ([t, i] = this._rasterizeDash(e), s = !0) : t = this._sprites.getSpriteInfo(e), !t?.width || !t.height || t.width < 0 || t.height < 0)) return null;
    const n = t.width, o = t.height, [a, l, c] = this._allocateImage(n, o);
    return a.width <= 0 ? null : (this._copy(a, t, l, c, s, i), r = { type: "sprite", rect: a, width: n, height: o, sdf: t.sdf, simplePattern: !1, rasterizationScale: t.pixelRatio, page: l }, this._mosaicRects[e] = r, r);
  }
  getSpriteItems(e) {
    const s = {};
    for (const t of e) s[t.name] = this.getSpriteItem(t.name, t.repeat);
    return s;
  }
  getMosaicItemPosition(e, s) {
    const t = this.getSpriteItem(e, s), i = t && t.rect;
    if (!i) return null;
    i.width = t.width, i.height = t.height;
    const r = t.width, n = t.height, o = 2;
    return { tl: [i.x + o, i.y + o], br: [i.x + o + r, i.y + o + n], page: t.page };
  }
  bind(e, s, t = 0, i = 0) {
    if (t >= this._size.length || t >= this._mosaicsData.length) return;
    if (!this._textures[t]) {
      const n = new Pe();
      n.wrapMode = Le.CLAMP_TO_EDGE, n.width = this._size[t][0], n.height = this._size[t][1], this._textures[t] = new Ae(e, n, new Uint8Array(this._mosaicsData[t].buffer));
    }
    const r = this._textures[t];
    r.setSamplingMode(s), this._dirties[t] && r.setData(new Uint8Array(this._mosaicsData[t].buffer)), e.bindTexture(r, i), this._dirties[t] = !1;
  }
  static _copyBits(e, s, t, i, r, n, o, a, l, c, y) {
    let d = i * s + t, u = a * n + o;
    if (y) {
      u -= n;
      for (let _ = -1; _ <= c; _++, d = ((_ + c) % c + i) * s + t, u += n) for (let f = -1; f <= l; f++) r[u + f] = e[d + (f + l) % l];
    } else for (let _ = 0; _ < c; _++) {
      for (let f = 0; f < l; f++) r[u + f] = e[d + f];
      d += s, u += n;
    }
  }
  _copy(e, s, t, i, r, n) {
    if (!this._sprites || this._sprites.loadStatus !== "loaded" || t >= this._mosaicsData.length) return;
    const o = new Uint32Array(n ? n.buffer : this._sprites.image.buffer), a = this._mosaicsData[t];
    a && o || console.error("Source or target images are uninitialized!");
    const l = 2, c = n ? s.width : this._sprites.width;
    Oe._copyBits(o, c, s.x, s.y, a, i[0], e.x + l, e.y + l, s.width, s.height, r), this._dirties[t] = !0;
  }
  _allocateImage(e, s) {
    e += 2, s += 2;
    const t = Math.max(e, s);
    if (this._maxItemSize && this._maxItemSize < t) {
      const o = new A(0, 0, e, s);
      return this._mosaicsData.push(new Uint32Array(e * s)), this._dirties.push(!0), this._size.push([e, s]), this._textures.push(void 0), [o, this._mosaicsData.length - 1, [e, s]];
    }
    let i = e % 4 ? 4 - e % 4 : 4, r = s % 4 ? 4 - s % 4 : 4;
    i === 1 && (i = 5), r === 1 && (r = 5);
    const n = this._binPack.allocate(e + i, s + r);
    return n.width <= 0 ? (this._dirties[this._currentPage] || (this._mosaicsData[this._currentPage] = null), this._currentPage = this._mosaicsData.length, this._mosaicsData.push(new Uint32Array(this._pageWidth * this._pageHeight)), this._dirties.push(!0), this._size.push([this._pageWidth, this._pageHeight]), this._textures.push(void 0), this._binPack = new V(this._pageWidth - 4, this._pageHeight - 4), this._allocateImage(e, s)) : [n, this._currentPage, [this._pageWidth, this._pageHeight]];
  }
  _rasterizeDash(e) {
    const s = /\[(.*?)\]/, t = e.match(s);
    if (!t) return null;
    const i = t[1].split(",").map(Number), r = e.slice(e.lastIndexOf("-") + 1), [n, o, a] = nt(i, r);
    return [{ x: 0, y: 0, width: o, height: a, sdf: !0, pixelRatio: 1 }, new Uint8Array(n.buffer)];
  }
}, St = class {
  constructor(e, s, t, i) {
    this._layer = e, this._styleRepository = s, this.devicePixelRatio = t, this._sourceDataMaxLOD = i, this._spriteMosaic = null, this._glyphMosaic = null, this._connection = null, this._spriteSourceAbortController = null, this._startOptionsInputSignal = null, this._inputSignalEventListener = null;
  }
  destroy() {
    this._connection?.close(), this._connection = null, this._styleRepository = null, this._layer = null, this._spriteMosaic?.destroy(), this._spriteMosaic = null, this._glyphMosaic = null, this._spriteSourceAbortController = ze(this._spriteSourceAbortController), this._spriteSourcePromise = null, this._inputSignalEventListener && this._startOptionsInputSignal?.removeEventListener("abort", this._inputSignalEventListener), this._startOptionsInputSignal = null, this._inputSignalEventListener = null;
  }
  get spriteMosaic() {
    return this._spriteSourcePromise.then(() => this._spriteMosaic);
  }
  get glyphMosaic() {
    return this._glyphMosaic;
  }
  async start(e) {
    this._requestSprite(e);
    const s = this._layer.currentStyleInfo.glyphsUrl, t = new pe(s ? re(s, { ...this._layer.customParameters, token: this._layer.apiKey }) : null);
    this._glyphMosaic = new fe(1024, 1024, t), this._broadcastPromise = $e("WorkerTileHandler", { client: this, schedule: e.schedule, signal: e.signal }).then((i) => {
      if (this._layer && (this._connection?.close(), this._connection = i, this._layer && !this._connection.closed)) {
        const r = i.broadcast("setStyle", { style: this._layer.currentStyleInfo.style, sourceDataMaxLOD: this._sourceDataMaxLOD }, e);
        Promise.all(r).catch((n) => Ve(n));
      }
    });
  }
  _requestSprite(e) {
    this._spriteSourceAbortController?.abort();
    const s = new AbortController();
    this._spriteSourceAbortController = s;
    const t = e?.signal;
    this._inputSignalEventListener && this._startOptionsInputSignal?.removeEventListener("abort", this._inputSignalEventListener), this._startOptionsInputSignal = null, t && (this._inputSignalEventListener = xt(s), t.addEventListener("abort", this._inputSignalEventListener, { once: !0 }));
    const { signal: i } = s, r = { ...e, signal: i };
    this._spriteSourcePromise = this._layer.loadSpriteSource(this.devicePixelRatio, r), this._spriteSourcePromise.then((n) => {
      Fe(i), this._spriteMosaic = new ge(1024, 1024, 250), this._spriteMosaic.setSpriteSource(n);
    });
  }
  async updateStyle(e) {
    return await this._broadcastPromise, this._broadcastPromise = Promise.all(this._connection.broadcast("updateStyle", e)), this._broadcastPromise;
  }
  setSpriteSource(e) {
    const s = new ge(1024, 1024, 250);
    return s.setSpriteSource(e), this._spriteMosaic = s, this._spriteSourcePromise = Promise.resolve(e), this._spriteSourceAbortController = null, s;
  }
  async setStyle(e, s, t) {
    await this._broadcastPromise, this._styleRepository = e, this._sourceDataMaxLOD = t, this._requestSprite();
    const i = new pe(this._layer.currentStyleInfo.glyphsUrl ? re(this._layer.currentStyleInfo.glyphsUrl, { ...this._layer.customParameters, token: this._layer.apiKey }) : null);
    return this._glyphMosaic = new fe(1024, 1024, i), this._broadcastPromise = Promise.all(this._connection.broadcast("setStyle", { style: s, sourceDataMaxLOD: this._sourceDataMaxLOD })), this._broadcastPromise;
  }
  async fetchTileData(e, s) {
    const t = await this._getRefKeys(e, s);
    return this._getSourcesData(Object.keys(this._layer.sourceNameToSource), t, s);
  }
  async fetchTilePBFs(e) {
    const s = Object.keys(this._layer.sourceNameToSource), t = {}, i = await this._getRefKeys(e, t), r = [], n = [];
    for (let o = 0; o < i.length; o++) if (i[o].value == null || s[o] == null) n.push(null);
    else {
      const a = i[o].value, l = this._getTilePayload(a, s[o], t);
      l.then((c) => {
        r.push({ ...c, key: a });
      }), n.push(l);
    }
    return Promise.all(n).then(() => r);
  }
  async parseTileData(e, s) {
    const t = e && e.data;
    if (!t) return null;
    const { sourceName2DataAndRefKey: i, transferList: r } = t;
    return Object.keys(i).length === 0 ? null : this._broadcastPromise.then(() => this._connection.invoke("createTileAndParse", { key: e.key.id, sourceName2DataAndRefKey: i, styleLayerUIDs: e.styleLayerUIDs }, { ...s, transferList: r }));
  }
  async getSprites(e) {
    return await this._spriteSourcePromise, this._spriteMosaic.getSpriteItems(e);
  }
  getGlyphs(e) {
    return this._glyphMosaic.getGlyphItems(e.font, e.codePoints);
  }
  async _getTilePayload(e, s, t) {
    const i = M.pool.acquire(e.id), r = this._layer.sourceNameToSource[s], { level: n, row: o, col: a } = i;
    M.pool.release(i);
    try {
      return { protobuff: await r.requestTile(n, o, a, t), sourceName: s };
    } catch (l) {
      if (X(l)) throw l;
      return { protobuff: null, sourceName: s };
    }
  }
  async _getRefKeys(e, s) {
    const t = this._layer.sourceNameToSource, i = new Array();
    for (const r in t) {
      const n = t[r].getRefKey(e, s);
      i.push(n);
    }
    return oe(i);
  }
  _getSourcesData(e, s, t) {
    const i = [];
    for (let r = 0; r < s.length; r++) if (s[r].value == null || e[r] == null) i.push(null);
    else {
      const n = s[r].value, o = this._getTilePayload(n, e[r], t);
      i.push(o);
    }
    return oe(i).then((r) => {
      const n = {}, o = [];
      for (let a = 0; a < r.length; a++) {
        const l = r[a].value;
        if (l && l.protobuff && l.protobuff.byteLength > 0) {
          const c = s[a].value.id;
          n[l.sourceName] = { refKey: c, protobuff: l.protobuff }, o.push(l.protobuff);
        }
      }
      return { sourceName2DataAndRefKey: n, transferList: o };
    });
  }
};
function xt(h) {
  return () => h.abort();
}
const me = 512, It = 1e-6, Tt = (h, e) => h + 1 / (1 << 2 * e);
let be = class {
  constructor(e, s) {
    this._tiles = /* @__PURE__ */ new Map(), this._tileCache = new qe(40, (t) => t.dispose()), this._viewSize = [0, 0], this._visibleTiles = /* @__PURE__ */ new Map(), this.acquireTile = e.acquireTile, this.releaseTile = e.releaseTile, this.tileInfoView = e.tileInfoView, this._container = s;
  }
  destroy() {
    for (const [e, s] of this._tiles) s.dispose();
    this._tiles = null, this._tileCache.clear(), this._tileCache = null;
  }
  update(e) {
    this._updateCacheSize(e);
    const s = this.tileInfoView, t = s.getTileCoverage(e.state, 0, !0, "smallest");
    if (!t) return !0;
    const { spans: i, lodInfo: r } = t, { level: n } = r, o = this._tiles, a = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Set();
    for (const { row: y, colFrom: d, colTo: u } of i) for (let _ = d; _ <= u; _++) {
      const f = M.getId(n, y, r.normalizeCol(_), r.getWorldForColumn(_)), g = this._getOrAcquireTile(f);
      a.add(f), g.processed() ? this._addToContainer(g) : l.add(new M(f));
    }
    for (const [y, d] of o) d.isCoverage = a.has(y);
    for (const y of l) this._findPlaceholdersForMissingTiles(y, a);
    let c = !1;
    for (const [y, d] of o) d.neededForCoverage = a.has(y), d.neededForCoverage || d.isHoldingForFade && s.intersects(t, d.key) && a.add(y), d.isFading && (c = !0);
    for (const [y, d] of this._tiles) a.has(y) || this._releaseTile(y);
    return Ce.pool.release(t), !c;
  }
  clear() {
    this._tiles.clear(), this._tileCache.clear(), this._visibleTiles.clear();
  }
  clearCache() {
    this._tileCache.clear();
  }
  getIntersectingTiles(e, s, t, i, r) {
    const n = [0, 0], o = [0, 0];
    i.toMap(n, e - t, s + t), i.toMap(o, e + t, s - t);
    const a = Math.min(n[0], o[0]), l = Math.min(n[1], o[1]), c = Math.max(n[0], o[0]), y = Math.max(n[1], o[1]), d = He(a, l, c, y), u = F(), _ = [];
    for (const [f, g] of this._visibleTiles) this.tileInfoView.getTileBounds(u, g.key), Be(d, u) && _.push(g);
    if (r != null && r.length > 0) {
      const f = new Set(_.map((p) => p.id)), g = r.filter((p) => !f.has(p.tileKey.id)).map((p) => this._visibleTiles.get(p.tileKey.id)).filter((p) => p !== void 0);
      _.push(...g);
    }
    return _;
  }
  _findPlaceholdersForMissingTiles(e, s) {
    const t = [];
    for (const [r, n] of this._tiles) this._addPlaceholderChild(t, n, e, s);
    const i = t.reduce(Tt, 0);
    Math.abs(1 - i) < It || this._addPlaceholderParent(e.id, s);
  }
  _addPlaceholderChild(e, s, t, i) {
    s.key.level <= t.level || !s.hasData() || Dt(t, s.key) && (this._addToContainer(s), i.add(s.id), e.push(s.key.level - t.level));
  }
  _addPlaceholderParent(e, s) {
    const t = this._tiles;
    let i = e;
    for (; ; ) {
      if (i = vt(i), !i || s.has(i)) return;
      const r = t.get(i);
      if (r && r.hasData()) return this._addToContainer(r), void s.add(r.id);
    }
  }
  _getOrAcquireTile(e) {
    let s = this._tiles.get(e);
    return s || (s = this._tileCache.pop(e), s || (s = this.acquireTile(new M(e))), this._tiles.set(e, s), s);
  }
  _releaseTile(e) {
    const s = this._tiles.get(e);
    this.releaseTile(s), this._removeFromContainer(s), this._tiles.delete(e), s.hasData() ? this._tileCache.put(e, s, 1) : s.dispose();
  }
  _addToContainer(e) {
    let s;
    const t = [], i = this._container;
    if (i.contains(e)) return;
    const r = this._visibleTiles;
    for (const [n, o] of r) this._canConnectDirectly(e, o) && t.push(o), s == null && this._canConnectDirectly(o, e) && (s = o);
    if (s != null) {
      for (const n of t) s.childrenTiles.delete(n), e.childrenTiles.add(n), n.parentTile = e;
      s.childrenTiles.add(e), e.parentTile = s;
    } else for (const n of t) e.childrenTiles.add(n), n.parentTile = e;
    r.set(e.id, e), i.addChild(e);
  }
  _removeFromContainer(e) {
    if (this._visibleTiles.delete(e.id), this._container.removeChild(e), e.parentTile != null) {
      e.parentTile.childrenTiles.delete(e);
      for (const s of e.childrenTiles) e.parentTile != null && e.parentTile.childrenTiles.add(s);
    }
    for (const s of e.childrenTiles) s.parentTile = e.parentTile;
    e.parentTile = null, e.childrenTiles.clear();
  }
  _canConnectDirectly(e, s) {
    const t = e.key;
    let { level: i, row: r, col: n, world: o } = s.key;
    const a = this._visibleTiles;
    for (; i > 0; ) {
      if (i--, r >>= 1, n >>= 1, t.level === i && t.row === r && t.col === n && t.world === o) return !0;
      if (a.has(`${i}/${r}/${n}/${o}`)) return !1;
    }
    return !1;
  }
  _updateCacheSize(e) {
    const s = e.state.size;
    if (s[0] === this._viewSize[0] && s[1] === this._viewSize[1]) return;
    const t = Math.ceil(s[0] / me) + 1, i = Math.ceil(s[1] / me) + 1;
    this._viewSize[0] = s[0], this._viewSize[1] = s[1], this._tileCache.maxSize = 5 * t * i;
  }
};
function vt(h) {
  const [e, s, t, i] = h.split("/"), r = parseInt(e, 10);
  return r === 0 ? null : `${r - 1}/${parseInt(s, 10) >> 1}/${parseInt(t, 10) >> 1}/${parseInt(i, 10)}`;
}
function Dt(h, e) {
  const s = e.level - h.level;
  return h.row === e.row >> s && h.col === e.col >> s && h.world === e.world;
}
let Ct = class {
  constructor(e, s) {
    this.sourceTile = s, this.xTile = 0, this.yTile = 0, this.hash = 0, this.priority = 1, this.featureIndex = 0, this.colliders = [], this.textVertexRanges = [], this.iconVertexRanges = [], this.tile = e;
  }
};
class Rt {
  constructor() {
    this.tileSymbols = [], this.parts = [{ startTime: 0, startOpacity: 0, targetOpacity: 0, show: !1 }, { startTime: 0, startOpacity: 0, targetOpacity: 0, show: !1 }], this.show = !1;
  }
}
function we(h, e, s, t, i, r) {
  const n = s - i;
  if (n >= 0) return (e >> n) + (t - (r << n)) * (h >> n);
  const o = -n;
  return e - (r - (t << o)) * (h >> o) << o;
}
let ke = class {
  constructor(e, s, t) {
    this._rows = Math.ceil(s / t), this._columns = Math.ceil(e / t), this._cellSize = t, this.cells = new Array(this._rows);
    for (let i = 0; i < this._rows; i++) {
      this.cells[i] = new Array(this._columns);
      for (let r = 0; r < this._columns; r++) this.cells[i][r] = [];
    }
  }
  getCell(e, s) {
    const t = Math.min(Math.max(Math.floor(s / this._cellSize), 0), this._rows - 1), i = Math.min(Math.max(Math.floor(e / this._cellSize), 0), this._columns - 1);
    return this.cells[t] && this.cells[t][i] || null;
  }
  getCellSpan(e, s, t, i) {
    return [Math.min(Math.max(Math.floor(e / this._cellSize), 0), this.columns - 1), Math.min(Math.max(Math.floor(s / this._cellSize), 0), this.rows - 1), Math.min(Math.max(Math.floor(t / this._cellSize), 0), this.columns - 1), Math.min(Math.max(Math.floor(i / this._cellSize), 0), this.rows - 1)];
  }
  get cellSize() {
    return this._cellSize;
  }
  get columns() {
    return this._columns;
  }
  get rows() {
    return this._rows;
  }
};
function Lt(h, e, s, t, i, r, n) {
  const o = e[t++];
  for (let a = 0; a < o; a++) {
    const l = new Ct(r, n);
    l.xTile = e[t++], l.yTile = e[t++], l.hash = e[t++], l.priority = e[t++], l.featureIndex = e[t++];
    const c = e[t++];
    for (let u = 0; u < c; u++) {
      const _ = e[t++], f = e[t++], g = e[t++], p = e[t++], m = !!e[t++], b = e[t++], S = s[t++], I = s[t++], w = e[t++], x = e[t++];
      l.colliders.push({ xTile: _, yTile: f, dxPixels: g, dyPixels: p, hard: m, partIndex: b, width: w, height: x, minLod: S, maxLod: I });
    }
    const y = h[t++];
    for (let u = 0; u < y; u++) l.textVertexRanges.push([h[t++], h[t++]]);
    const d = h[t++];
    for (let u = 0; u < d; u++) l.iconVertexRanges.push([h[t++], h[t++]]);
    i.push(l);
  }
  return t;
}
function Pt(h, e, s) {
  for (const [t, i] of h.symbols) At(h, e, s, i, t);
}
function At(h, e, s, t, i) {
  const r = h.layerData.get(i);
  if (r.type === L.SYMBOL) {
    for (const n of t) {
      const o = n.unique;
      let a;
      if (n.selectedForRendering) {
        const l = o.parts[0], c = l.startOpacity, y = l.targetOpacity;
        h.allSymbolsFadingOut = h.allSymbolsFadingOut && y === 0;
        const d = Math.floor(127 * c) | y << 7;
        a = d << 24 | d << 16 | d << 8 | d;
      } else a = 0;
      for (const [l, c] of n.iconVertexRanges) for (let y = l; y < l + c; y += 4) r.iconOpacity[y / 4] = a;
      if (n.selectedForRendering) {
        const l = o.parts[1], c = l.startOpacity, y = l.targetOpacity;
        h.allSymbolsFadingOut = h.allSymbolsFadingOut && y === 0;
        const d = Math.floor(127 * c) | y << 7;
        a = d << 24 | d << 16 | d << 8 | d;
      } else a = 0;
      for (const [l, c] of n.textVertexRanges) for (let y = l; y < l + c; y += 4) r.textOpacity[y / 4] = a;
    }
    r.lastOpacityUpdate = e, r.opacityChanged = !0;
  }
}
function Mt(h, e, s, t) {
  const i = h.colliders;
  let r, n, o, a;
  for (const l of i)
    if (h.unique.show && h.unique.parts[l.partIndex].show && (r = l.xScreen - t[0] + l.dxScreen, n = l.yScreen - t[1] + l.dyScreen, o = r + l.width, a = n + l.height, at(s, e.x, e.y, r, n, o, a))) return !0;
  return !1;
}
let K = class {
  constructor(e, s) {
    this.layerUIDs = [], this.isDestroyed = !1, this._data = e;
    let t = 1;
    const i = new Uint32Array(e);
    this.layerUIDs = [];
    const r = i[t++];
    for (let n = 0; n < r; n++) this.layerUIDs[n] = i[t++];
    this.bufferDataOffset = t, s && (this.layer = s.getStyleLayerByUID(this.layerUIDs[0]));
  }
  get isPreparedForRendering() {
    return this._data == null;
  }
  get offset() {
    return this.bufferDataOffset;
  }
  get data() {
    return this._data;
  }
  destroy() {
    this.isDestroyed || (this.doDestroy(), this._data = null, this.isDestroyed = !0);
  }
  prepareForRendering(e) {
    this._data != null && (this.doPrepareForRendering(e, this._data, this.bufferDataOffset), this._data = null);
  }
};
class Ot extends K {
  constructor(e, s) {
    super(e, s), this.type = L.LINE, this.lineIndexStart = 0, this.lineIndexCount = 0;
    const t = new Uint32Array(e);
    let i = this.bufferDataOffset;
    this.lineIndexStart = t[i++], this.lineIndexCount = t[i++];
    const r = t[i++];
    if (r > 0) {
      this.patternMap = /* @__PURE__ */ new Map();
      for (let n = 0; n < r; n++) {
        const o = t[i++], a = t[i++], l = t[i++];
        this.patternMap.set(o, [a, l]);
      }
    }
    this.bufferDataOffset = i;
  }
  get memoryUsed() {
    return (this.data?.byteLength ?? 0) + (this.vao?.usedMemory ?? 0);
  }
  hasData() {
    return this.lineIndexCount > 0;
  }
  triangleCount() {
    return this.lineIndexCount / 3;
  }
  doDestroy() {
    this.vao = U(this.vao);
  }
  doPrepareForRendering(e, s, t) {
    const i = new Uint32Array(s), r = new Int32Array(i.buffer), n = i[t++], o = R.createVertex(e, C.STATIC_DRAW, new Int32Array(r.buffer, 4 * t, n));
    t += n;
    const a = i[t++], l = R.createIndex(e, C.STATIC_DRAW, new Uint32Array(i.buffer, 4 * t, a));
    t += a;
    const c = this.layer.lineMaterial;
    this.vao = new E(e, c.getAttributeLocations(), c.getLayoutInfo(), { geometry: o }, l);
  }
}
let kt = class extends K {
  constructor(e, s) {
    super(e, s), this.type = L.FILL, this.fillIndexStart = 0, this.fillIndexCount = 0, this.outlineIndexStart = 0, this.outlineIndexCount = 0;
    const t = new Uint32Array(e);
    let i = this.bufferDataOffset;
    this.fillIndexStart = t[i++], this.fillIndexCount = t[i++], this.outlineIndexStart = t[i++], this.outlineIndexCount = t[i++];
    const r = t[i++];
    if (r > 0) {
      this.patternMap = /* @__PURE__ */ new Map();
      for (let n = 0; n < r; n++) {
        const o = t[i++], a = t[i++], l = t[i++];
        this.patternMap.set(o, [a, l]);
      }
    }
    this.bufferDataOffset = i;
  }
  get memoryUsed() {
    return (this.data?.byteLength ?? 0) + (this.fillVAO?.usedMemory ?? 0) + (this.outlineVAO?.usedMemory ?? 0);
  }
  hasData() {
    return this.fillIndexCount > 0 || this.outlineIndexCount > 0;
  }
  triangleCount() {
    return (this.fillIndexCount + this.outlineIndexCount) / 3;
  }
  doDestroy() {
    this.fillVAO = U(this.fillVAO), this.outlineVAO = U(this.outlineVAO);
  }
  doPrepareForRendering(e, s, t) {
    const i = new Uint32Array(s), r = new Int32Array(i.buffer), n = i[t++], o = R.createVertex(e, C.STATIC_DRAW, new Int32Array(r.buffer, 4 * t, n));
    t += n;
    const a = i[t++], l = R.createIndex(e, C.STATIC_DRAW, new Uint32Array(i.buffer, 4 * t, a));
    t += a;
    const c = i[t++], y = R.createVertex(e, C.STATIC_DRAW, new Int32Array(r.buffer, 4 * t, c));
    t += c;
    const d = i[t++], u = R.createIndex(e, C.STATIC_DRAW, new Uint32Array(i.buffer, 4 * t, d));
    t += d;
    const _ = this.layer, f = _.fillMaterial, g = _.outlineMaterial;
    this.fillVAO = new E(e, f.getAttributeLocations(), f.getLayoutInfo(), { geometry: o }, l), this.outlineVAO = new E(e, g.getAttributeLocations(), g.getLayoutInfo(), { geometry: y }, u);
  }
}, Ut = class extends K {
  constructor(e, s, t) {
    super(e, s), this.type = L.SYMBOL, this.iconPerPageElementsMap = /* @__PURE__ */ new Map(), this.glyphPerPageElementsMap = /* @__PURE__ */ new Map(), this.symbolInstances = [], this.isIconSDF = !1, this.opacityChanged = !1, this.lastOpacityUpdate = 0, this.symbols = [];
    const i = new Uint32Array(e), r = new Int32Array(e), n = new Float32Array(e);
    let o = this.bufferDataOffset;
    this.isIconSDF = !!i[o++];
    const a = i[o++], l = i[o++], c = i[o++], y = new M(a, l, c, 0), d = i[o++];
    for (let g = 0; g < d; g++) {
      const p = i[o++], m = i[o++], b = i[o++];
      this.iconPerPageElementsMap.set(p, [m, b]);
    }
    const u = i[o++];
    for (let g = 0; g < u; g++) {
      const p = i[o++], m = i[o++], b = i[o++];
      this.glyphPerPageElementsMap.set(p, [m, b]);
    }
    const _ = i[o++], f = i[o++];
    this.iconOpacity = new Int32Array(_), this.textOpacity = new Int32Array(f), o = Lt(i, r, n, o, this.symbols, t, y), this.bufferDataOffset = o;
  }
  get memoryUsed() {
    return (this.data?.byteLength ?? 0) + (this.iconVAO?.usedMemory ?? 0) + (this.textVAO?.usedMemory ?? 0) + ne(this.iconOpacity) + ne(this.textOpacity);
  }
  hasData() {
    return this.iconPerPageElementsMap.size > 0 || this.glyphPerPageElementsMap.size > 0;
  }
  triangleCount() {
    let e = 0;
    for (const [s, t] of this.iconPerPageElementsMap) e += t[1];
    for (const [s, t] of this.glyphPerPageElementsMap) e += t[1];
    return e / 3;
  }
  doDestroy() {
    this.iconVAO = U(this.iconVAO), this.textVAO = U(this.textVAO);
  }
  updateOpacityInfo() {
    if (!this.opacityChanged) return;
    this.opacityChanged = !1;
    const e = this.iconOpacity, s = this.iconVAO.vertexBuffers.opacity;
    e.length > 0 && e.byteLength === s.usedMemory && s.setSubData(e, 0, 0, e.length);
    const t = this.textOpacity, i = this.textVAO.vertexBuffers.opacity;
    t.length > 0 && t.byteLength === i.usedMemory && i.setSubData(t, 0, 0, t.length);
  }
  doPrepareForRendering(e, s, t) {
    const i = new Uint32Array(s), r = new Int32Array(i.buffer), n = i[t++], o = R.createVertex(e, C.STATIC_DRAW, new Int32Array(r.buffer, 4 * t, n));
    t += n;
    const a = i[t++], l = R.createIndex(e, C.STATIC_DRAW, new Uint32Array(i.buffer, 4 * t, a));
    t += a;
    const c = i[t++], y = R.createVertex(e, C.STATIC_DRAW, new Int32Array(r.buffer, 4 * t, c));
    t += c;
    const d = i[t++], u = R.createIndex(e, C.STATIC_DRAW, new Uint32Array(i.buffer, 4 * t, d));
    t += d;
    const _ = R.createVertex(e, C.STATIC_DRAW, this.iconOpacity.buffer), f = R.createVertex(e, C.STATIC_DRAW, this.textOpacity.buffer), g = this.layer, p = g.iconMaterial, m = g.textMaterial;
    this.iconVAO = new E(e, p.getAttributeLocations(), p.getLayoutInfo(), { geometry: o, opacity: _ }, l), this.textVAO = new E(e, m.getAttributeLocations(), m.getLayoutInfo(), { geometry: y, opacity: f }, u);
  }
}, Et = class extends K {
  constructor(e, s) {
    super(e, s), this.type = L.CIRCLE, this.circleIndexStart = 0, this.circleIndexCount = 0;
    const t = new Uint32Array(e);
    let i = this.bufferDataOffset;
    this.circleIndexStart = t[i++], this.circleIndexCount = t[i++], this.bufferDataOffset = i;
  }
  get memoryUsed() {
    return (this.data?.byteLength ?? 0) + (this.vao?.usedMemory ?? 0);
  }
  hasData() {
    return this.circleIndexCount > 0;
  }
  triangleCount() {
    return this.circleIndexCount / 3;
  }
  doDestroy() {
    this.vao = U(this.vao);
  }
  doPrepareForRendering(e, s, t) {
    const i = new Uint32Array(s), r = new Int32Array(i.buffer), n = i[t++], o = R.createVertex(e, C.STATIC_DRAW, new Int32Array(r.buffer, 4 * t, n));
    t += n;
    const a = i[t++], l = R.createIndex(e, C.STATIC_DRAW, new Uint32Array(i.buffer, 4 * t, a));
    t += a;
    const c = this.layer.circleMaterial;
    this.vao = new E(e, c.getAttributeLocations(), c.getLayoutInfo(), { geometry: o }, l);
  }
}, zt = class Ue extends Me {
  constructor(e, s, t, i, r, n, o, a = null) {
    super(e, s, t, i, r, n, 4096, 4096), this.styleRepository = o, this._memCache = a, this.type = "vector-tile", this._referenced = 0, this._hasSymbolBuckets = !1, this._memoryUsedByLayerData = 0, this.layerData = /* @__PURE__ */ new Map(), this.status = "loading", this.allSymbolsFadingOut = !1, this.lastOpacityUpdate = 0, this.symbols = /* @__PURE__ */ new Map(), this.isCoverage = !1, this.neededForCoverage = !1, this.decluttered = !1, this.parentTile = null, this.childrenTiles = /* @__PURE__ */ new Set(), this.featureIndex = null, this.triangleCount = 0, this._processed = !1, this._referenced = 1, this.id = e.id;
  }
  get hasSymbolBuckets() {
    return this._hasSymbolBuckets;
  }
  get isFading() {
    return this._hasSymbolBuckets && performance.now() - this.lastOpacityUpdate < Q;
  }
  get isHoldingForFade() {
    return this._hasSymbolBuckets && (!this.allSymbolsFadingOut || performance.now() - this.lastOpacityUpdate < Q);
  }
  get wasRequested() {
    return this.status === "errored" || this.status === "loaded" || this.status === "reloading";
  }
  setData(e) {
    this.changeDataImpl(e), this.requestRender(), this.ready(), this._processed = !0;
  }
  deleteLayerData(e) {
    let s = !1;
    for (const t of e) {
      const i = this.layerData.get(t);
      i && (this._memoryUsedByLayerData -= i.memoryUsed, i.type === L.SYMBOL && this.symbols.delete(t) && (s = !0), i.destroy(), this.layerData.delete(t));
    }
    this._memCache?.updateSize(this.key.id, this, this._memoryUsedByLayerData), s && (this.featureIndex?.clear(), this.emit("symbols-changed")), this.requestRender();
  }
  processed() {
    return this._processed;
  }
  hasData() {
    return this.layerData.size > 0;
  }
  dispose() {
    this.status !== "unloaded" && (this.featureIndex = null, $t.delete(this), Ue._destroyRenderBuckets(this.layerData), this.layerData.clear(), this._memoryUsedByLayerData = 0, this.destroy(), this.status = "unloaded");
  }
  release() {
    return --this._referenced == 0 && (this.dispose(), this.stage = null, !0);
  }
  retain() {
    ++this._referenced;
  }
  get referenced() {
    return this._referenced;
  }
  get usedMemory() {
    return this._memoryUsedByLayerData + 256;
  }
  changeDataImpl(e) {
    this.featureIndex?.clear();
    let s = !1;
    if (e) {
      const { bucketsWithData: t, emptyBuckets: i } = e, r = this._createRenderBuckets(t);
      if (i && i.byteLength > 0) {
        const n = new Uint32Array(i);
        for (const o of n) this._deleteLayerData(o);
      }
      for (const [n, o] of r) this._deleteLayerData(n), o.type === L.SYMBOL && (this.symbols.set(n, o.symbols), s = !0), this._memoryUsedByLayerData += o.memoryUsed, this.layerData.set(n, o);
      this._memCache?.updateSize(this.key.id, this, this.usedMemory);
    }
    this._hasSymbolBuckets = !1;
    for (const [t, i] of this.layerData) i.type === L.SYMBOL && (this._hasSymbolBuckets = !0);
    s && this.emit("symbols-changed");
  }
  attachWithContext(e) {
    this.stage = { context: e, trashDisplayObject(s) {
      s.processDetach();
    }, untrashDisplayObject: () => !1 };
  }
  setTransform(e) {
    super.setTransform(e);
    const s = this.resolution / (e.resolution * e.pixelRatio), t = this.width / this.rangeX * s, i = this.height / this.rangeY * s, r = [0, 0];
    e.toScreen(r, [this.x, this.y]);
    const n = this.transforms.tileUnitsToPixels;
    Ne(n), We(n, n, r), Qe(n, n, Math.PI * e.rotation / 180), Je(n, n, [t, i, 1]);
  }
  _createTransforms() {
    return { displayViewScreenMat3: $(), tileMat3: $(), tileUnitsToPixels: $() };
  }
  static _destroyRenderBuckets(e) {
    if (!e) return;
    const s = /* @__PURE__ */ new Set();
    for (const t of e.values()) s.has(t) || (t.destroy(), s.add(t));
    e.clear();
  }
  _createRenderBuckets(e) {
    const s = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map();
    for (const i of e) {
      const r = this._deserializeBucket(i, t);
      for (const n of r.layerUIDs) s.set(n, r);
    }
    return s;
  }
  _deserializeBucket(e, s) {
    let t = s.get(e);
    if (t) return t;
    switch (new Uint32Array(e)[0]) {
      case L.FILL:
        t = new kt(e, this.styleRepository);
        break;
      case L.LINE:
        t = new Ot(e, this.styleRepository);
        break;
      case L.SYMBOL:
        t = new Ut(e, this.styleRepository, this);
        break;
      case L.CIRCLE:
        t = new Et(e, this.styleRepository);
    }
    return s.set(e, t), t;
  }
  _deleteLayerData(e) {
    if (!this.layerData.has(e)) return;
    const s = this.layerData.get(e);
    this._memoryUsedByLayerData -= s.memoryUsed, s.destroy(), this.layerData.delete(e);
  }
};
const $t = /* @__PURE__ */ new Map();
function Vt(h, e, s, t, i, r) {
  const { iconRotationAlignment: n, textRotationAlignment: o, iconTranslate: a, iconTranslateAnchor: l, textTranslate: c, textTranslateAnchor: y } = t;
  let d = 0;
  for (const u of h.colliders) {
    const [_, f] = u.partIndex === 0 ? a : c, g = u.partIndex === 0 ? l : y, p = u.minLod <= r && r <= u.maxLod;
    d += p ? 0 : 1, u.enabled = p, u.xScreen = u.xTile * i[0] + u.yTile * i[3] + i[6], u.yScreen = u.xTile * i[1] + u.yTile * i[4] + i[7], g === yt.MAP ? (u.xScreen += s * _ - e * f, u.yScreen += e * _ + s * f) : (u.xScreen += _, u.yScreen += f), O.VIEWPORT === (u.partIndex === 0 ? n : o) ? (u.dxScreen = u.dxPixels, u.dyScreen = u.dyPixels) : (u.dxScreen = s * (u.dxPixels + u.width / 2) - e * (u.dyPixels + u.height / 2) - u.width / 2, u.dyScreen = e * (u.dxPixels + u.width / 2) + s * (u.dyPixels + u.height / 2) - u.height / 2);
  }
  h.colliders.length > 0 && d === h.colliders.length && (h.unique.show = !1);
}
class Ft {
  constructor(e, s, t, i, r, n) {
    this._symbols = e, this._styleRepository = i, this._zoom = r, this._currentLayerCursor = 0, this._currentSymbolCursor = 0, this._styleProps = /* @__PURE__ */ new Map(), this._allNeededMatrices = /* @__PURE__ */ new Map(), this._gridIndex = new ke(s, t, ht), this._si = Math.sin(Math.PI * n / 180), this._co = Math.cos(Math.PI * n / 180);
    for (const o of e) for (const a of o.symbols) this._allNeededMatrices.has(a.tile) || this._allNeededMatrices.set(a.tile, Ke(a.tile.transforms.tileUnitsToPixels));
  }
  work(e) {
    const s = this._gridIndex;
    function t(r) {
      const n = r.xScreen + r.dxScreen, o = r.yScreen + r.dyScreen, a = n + r.width, l = o + r.height, [c, y, d, u] = s.getCellSpan(n, o, a, l);
      for (let _ = y; _ <= u; _++) for (let f = c; f <= d; f++) {
        const g = s.cells[_][f];
        for (const p of g) {
          const m = p.xScreen + p.dxScreen, b = p.yScreen + p.dyScreen, S = m + p.width, I = b + p.height;
          if (!(a < m || n > S || l < b || o > I)) return !0;
        }
      }
      return !1;
    }
    const i = performance.now();
    for (; this._currentLayerCursor < this._symbols.length; this._currentLayerCursor++, this._currentSymbolCursor = 0) {
      const r = this._symbols[this._currentLayerCursor], n = this._getProperties(r.styleLayerUID);
      for (; this._currentSymbolCursor < r.symbols.length; this._currentSymbolCursor++) {
        if (this._currentSymbolCursor % 100 == 99 && performance.now() - i > e) return !1;
        const o = r.symbols[this._currentSymbolCursor];
        if (!o.unique.show) continue;
        Vt(o, this._si, this._co, n, this._allNeededMatrices.get(o.tile), this._zoom);
        const a = o.unique;
        if (!a.show) continue;
        const { iconAllowOverlap: l, iconIgnorePlacement: c, textAllowOverlap: y, textIgnorePlacement: d } = n;
        for (const u of o.colliders) {
          if (!u.enabled) continue;
          const _ = a.parts[u.partIndex];
          _.show && !(u.partIndex ? y : l) && t(u) && (u.hard ? a.show = !1 : _.show = !1);
        }
        if (a.show) for (const u of o.colliders) {
          if (!u.enabled || (u.partIndex ? d : c) || !a.parts[u.partIndex].show) continue;
          const _ = u.xScreen + u.dxScreen, f = u.yScreen + u.dyScreen, g = _ + u.width, p = f + u.height, [m, b, S, I] = this._gridIndex.getCellSpan(_, f, g, p);
          for (let w = b; w <= I; w++) for (let x = m; x <= S; x++)
            this._gridIndex.cells[w][x].push(u);
        }
      }
    }
    return !0;
  }
  _getProperties(e) {
    const s = this._styleProps.get(e);
    if (s) return s;
    const t = this._zoom, i = this._styleRepository.getStyleLayerByUID(e), r = i.getLayoutValue("symbol-placement", t) !== ut.POINT;
    let n = i.getLayoutValue("icon-rotation-alignment", t);
    n === O.AUTO && (n = r ? O.MAP : O.VIEWPORT);
    let o = i.getLayoutValue("text-rotation-alignment", t);
    o === O.AUTO && (o = r ? O.MAP : O.VIEWPORT);
    const a = i.getPaintValue("icon-translate", t), l = i.getPaintValue("icon-translate-anchor", t), c = i.getPaintValue("text-translate", t), y = i.getPaintValue("text-translate-anchor", t), d = { iconAllowOverlap: i.getLayoutValue("icon-allow-overlap", t), iconIgnorePlacement: i.getLayoutValue("icon-ignore-placement", t), textAllowOverlap: i.getLayoutValue("text-allow-overlap", t), textIgnorePlacement: i.getLayoutValue("text-ignore-placement", t), iconRotationAlignment: n, textRotationAlignment: o, iconTranslateAnchor: l, iconTranslate: a, textTranslateAnchor: y, textTranslate: c };
    return this._styleProps.set(e, d), d;
  }
}
function qt(h, e) {
  if (h.priority - e.priority) return h.priority - e.priority;
  const s = h.tile.key, t = e.tile.key;
  return s.world - t.world ? s.world - t.world : s.level - t.level ? s.level - t.level : s.row - t.row ? s.row - t.row : s.col - t.col ? s.col - t.col : h.xTile - e.xTile ? h.xTile - e.xTile : h.yTile - e.yTile;
}
class Ht {
  get running() {
    return this._running;
  }
  constructor(e, s, t, i, r, n) {
    this._visibleTiles = e, this._symbolRepository = s, this._createCollisionJob = t, this._assignTileSymbolsOpacity = i, this._symbolLayerSorter = r, this._isLayerVisible = n, this._selectionJob = null, this._selectionJobCompleted = !1, this._collisionJob = null, this._collisionJobCompleted = !1, this._opacityJob = null, this._opacityJobCompleted = !1, this._running = !0;
  }
  setScreenSize(e, s) {
    this._screenWidth === e && this._screenHeight === s || this.restart(), this._screenWidth = e, this._screenHeight = s;
  }
  restart() {
    this._selectionJob = null, this._selectionJobCompleted = !1, this._collisionJob = null, this._collisionJobCompleted = !1, this._opacityJob = null, this._opacityJobCompleted = !1, this._running = !0;
  }
  continue(e) {
    if (this._selectionJob || (this._selectionJob = this._createSelectionJob()), !this._selectionJobCompleted) {
      const s = performance.now();
      if (!this._selectionJob.work(e) || (this._selectionJobCompleted = !0, (e = Math.max(0, e - (performance.now() - s))) === 0)) return !1;
    }
    if (this._collisionJob || (this._collisionJob = this._createCollisionJob(this._selectionJob.sortedSymbols, this._screenWidth, this._screenHeight)), !this._collisionJobCompleted) {
      const s = performance.now();
      if (!this._collisionJob.work(e) || (this._collisionJobCompleted = !0, (e = Math.max(0, e - (performance.now() - s))) === 0)) return !1;
    }
    if (this._opacityJob || (this._opacityJob = this._createOpacityJob()), !this._opacityJobCompleted) {
      const s = performance.now();
      if (!this._opacityJob.work(e) || (this._opacityJobCompleted = !0, (e = Math.max(0, e - (performance.now() - s))) === 0)) return !1;
    }
    return this._running = !1, !0;
  }
  _createSelectionJob() {
    const e = this._symbolRepository.uniqueSymbols;
    for (let a = 0; a < e.length; a++) {
      const l = e[a];
      for (let c = 0; c < l.uniqueSymbols.length; c++) {
        const y = l.uniqueSymbols[c];
        for (const d of y.tileSymbols) d.selectedForRendering = !1;
      }
    }
    const s = [];
    let t = 0, i = 0;
    const r = this._isLayerVisible;
    function n(a) {
      let l;
      const c = performance.now();
      for (; i < e.length; i++, t = 0) {
        const y = e[i], d = y.styleLayerUID;
        if (!r(d)) {
          s[i] || (s[i] = { styleLayerUID: d, symbols: [] });
          continue;
        }
        s[i] = s[i] || { styleLayerUID: d, symbols: [] };
        const u = s[i];
        for (; t < y.uniqueSymbols.length; t++) {
          if (l = y.uniqueSymbols[t], t % 100 == 99 && performance.now() - c > a) return !1;
          let _ = null, f = !1, g = !1;
          for (const p of l.tileSymbols) if (!g || !f) {
            const m = p.tile;
            (!_ || m.isCoverage || m.neededForCoverage && !f) && (_ = p, (m.neededForCoverage || m.isCoverage) && (g = !0), m.isCoverage && (f = !0));
          }
          if (_.selectedForRendering = !0, g) {
            u.symbols.push(_), l.show = !0;
            for (const p of l.parts) p.show = !0;
          } else l.show = !1;
        }
      }
      for (const y of s) y.symbols.sort(qt);
      return !0;
    }
    const o = this._symbolLayerSorter;
    return { work: n, get sortedSymbols() {
      return s.sort(o);
    } };
  }
  _createOpacityJob() {
    const e = this._assignTileSymbolsOpacity, s = this._visibleTiles;
    let t = 0;
    function i(r, n) {
      const o = r.symbols;
      for (const [a, l] of o) Bt(l, n);
      e(r, n);
      for (const a of r.childrenTiles) i(a, n);
    }
    return { work(r) {
      const n = performance.now();
      for (; t < s.length; t++) {
        if (performance.now() - n > r) return !1;
        const o = s[t];
        o.parentTile == null && i(o, performance.now());
      }
      return !0;
    } };
  }
}
function Bt(h, e) {
  for (const s of h) {
    const t = s.unique;
    for (const i of t.parts) {
      const r = i.targetOpacity > 0.5 ? 1 : -1;
      i.startOpacity += r * ((e - i.startTime) / Q), i.startOpacity = Math.min(Math.max(i.startOpacity, 0), 1), i.startTime = e, i.targetOpacity = t.show && i.show ? 1 : 0;
    }
  }
}
const Nt = 32, Wt = 8, Qt = 64;
class Jt {
  constructor(e, s, t) {
    this.tileCoordRange = e, this._visibleTiles = s, this._createUnique = t, this._tiles = /* @__PURE__ */ new Map(), this._uniqueSymbolsReferences = /* @__PURE__ */ new Map();
  }
  get uniqueSymbols() {
    return this._uniqueSymbolLayerArray == null && (this._uniqueSymbolLayerArray = this._createUniqueSymbolLayerArray()), this._uniqueSymbolLayerArray;
  }
  get uniqueSymbolsReferences() {
    return this._uniqueSymbolsReferences;
  }
  add(e, s) {
    this._uniqueSymbolLayerArray = null;
    let t = this._tiles.get(e.id);
    t || (t = { symbols: /* @__PURE__ */ new Map() }, this._tiles.set(e.id, t));
    const i = /* @__PURE__ */ new Map();
    if (s) for (const o of s) t.symbols.has(o) && (i.set(o, t.symbols.get(o)), t.symbols.delete(o));
    else for (const [o, a] of e.layerData) t.symbols.has(o) && (i.set(o, t.symbols.get(o)), t.symbols.delete(o));
    this._removeSymbols(i);
    const r = e.symbols, n = /* @__PURE__ */ new Map();
    for (const [o, a] of r) {
      let l = a.length;
      if (l >= Nt) {
        let c = this.tileCoordRange;
        do
          c /= 2, l /= 4;
        while (l > Wt && c > Qt);
        const y = new ke(this.tileCoordRange, this.tileCoordRange, c);
        n.set(o, { flat: a, index: y }), t.symbols.set(o, { flat: a, index: y });
        for (const d of a) y.getCell(d.xTile, d.yTile).push(d);
      } else n.set(o, { flat: a }), t.symbols.set(o, { flat: a });
    }
    this._addSymbols(e.key, r);
  }
  deleteStyleLayers(e) {
    this._uniqueSymbolLayerArray = null;
    for (const [s, t] of this._tiles) {
      const i = /* @__PURE__ */ new Map();
      for (const r of e) t.symbols.has(r) && (i.set(r, t.symbols.get(r)), t.symbols.delete(r));
      this._removeSymbols(i), t.symbols.size === 0 && this._tiles.delete(s);
    }
  }
  removeTile(e) {
    this._uniqueSymbolLayerArray = null;
    const s = this._tiles.get(e.id);
    if (!s) return;
    const t = /* @__PURE__ */ new Map();
    for (const [i, r] of e.symbols) s.symbols.has(i) && (t.set(i, s.symbols.get(i)), s.symbols.delete(i));
    this._removeSymbols(t), s.symbols.size === 0 && this._tiles.delete(e.id);
  }
  querySymbols(e, s, t, i) {
    const r = [], n = this.uniqueSymbols;
    for (const o of n) {
      const a = o.styleLayerUID, l = o.uniqueSymbols;
      for (const c of l) {
        const y = c.tileSymbols.find((d) => d.selectedForRendering);
        y && Mt(y, e, s * (window.devicePixelRatio || 1), t) && r.push({ vtlSymbol: y, styleLayerUID: a, tileKey: y.tile.key });
      }
    }
    return r;
  }
  _removeSymbols(e) {
    for (const [s, { flat: t }] of e) for (const i of t) {
      const r = i.unique, n = r.tileSymbols, o = n.length - 1;
      for (let a = 0; a < o; a++) if (n[a] === i) {
        n[a] = n[o];
        break;
      }
      if (n.length = o, o === 0) {
        const a = this._uniqueSymbolsReferences.get(s);
        a.delete(r), a.size === 0 && this._uniqueSymbolsReferences.delete(s);
      }
      i.unique = null;
    }
  }
  _addSymbols(e, s) {
    if (s.size === 0) return;
    const t = this._visibleTiles;
    for (const i of t) i.parentTile || i.key.world !== e.world || i.key.level === e.level && !i.key.equals(e) || this._matchSymbols(i, e, s);
    for (const [i, r] of s) for (const n of r) if (n.unique == null) {
      const o = this._createUnique();
      n.unique = o, o.tileSymbols.push(n);
      let a = this._uniqueSymbolsReferences.get(i);
      a || (a = /* @__PURE__ */ new Set(), this._uniqueSymbolsReferences.set(i, a)), a.add(o);
    }
  }
  _matchSymbols(e, s, t) {
    if (e.key.level > s.level) {
      const r = e.key.level - s.level;
      if (e.key.row >> r !== s.row || e.key.col >> r !== s.col) return;
    }
    if (s.level > e.key.level) {
      const r = s.level - e.key.level;
      if (s.row >> r !== e.key.row || s.col >> r !== e.key.col) return;
    }
    if (s.equals(e.key)) {
      for (const r of e.childrenTiles) this._matchSymbols(r, s, t);
      return;
    }
    const i = /* @__PURE__ */ new Map();
    for (const [r, n] of t) {
      const o = [];
      for (const y of n) {
        const d = we(this.tileCoordRange, y.xTile, s.level, s.col, e.key.level, e.key.col), u = we(this.tileCoordRange, y.yTile, s.level, s.row, e.key.level, e.key.row);
        d >= 0 && d < this.tileCoordRange && u >= 0 && u < this.tileCoordRange && o.push({ symbol: y, xTransformed: d, yTransformed: u });
      }
      const a = [], l = e.key.level < s.level ? 1 : 1 << e.key.level - s.level, c = this._tiles.get(e.id).symbols.get(r);
      if (c) {
        const y = c.flat;
        for (const d of o) {
          let u, _ = !1;
          const f = d.xTransformed, g = d.yTransformed;
          u = c.index != null ? c.index.getCell(f, g) : y;
          const p = d.symbol, m = p.hash;
          for (const b of u) if (m === b.hash && Math.abs(f - b.xTile) <= l && Math.abs(g - b.yTile) <= l) {
            const S = b.unique;
            p.unique = S, S.tileSymbols.push(p), _ = !0;
            break;
          }
          _ || a.push(p);
        }
      }
      a.length > 0 && i.set(r, a);
    }
    for (const r of e.childrenTiles) this._matchSymbols(r, s, i);
  }
  _createUniqueSymbolLayerArray() {
    const e = this._uniqueSymbolsReferences, s = new Array(e.size);
    let t, i = 0;
    for (const [r, n] of e) {
      const o = new Array(n.size);
      t = 0;
      for (const a of n) o[t++] = a;
      s[i] = { styleLayerUID: r, uniqueSymbols: o }, i++;
    }
    return s;
  }
}
const Kt = 0.5, Se = 1e-6;
class Gt {
  constructor(e, s) {
    this.styleRepository = e, this._tileToHandle = /* @__PURE__ */ new Map(), this._viewState = { scale: 0, rotation: 0, center: [0, 0], size: [0, 0] }, this._declutterViewState = { scale: 0, rotation: 0, center: [0, 0], size: [0, 0] }, this._offsetFromScreenCenter = [0, 0], this._completed = !1, this._fading = Ge(!1), this._symbolRepository = new Jt(4096, s, () => new Rt()), this._symbolDeclutterer = new Ht(s, this._symbolRepository, (t, i, r) => this._createCollisionJob(t, i, r), (t, i) => {
      t.allSymbolsFadingOut = !0, t.lastOpacityUpdate = i, Pt(t, i, !0), t.decluttered = !0, t.requestRender();
    }, (t, i) => this.styleRepository.getStyleLayerByUID(t.styleLayerUID).z - this.styleRepository.getStyleLayerByUID(i.styleLayerUID).z, (t) => {
      const i = this.styleRepository.getStyleLayerByUID(t);
      if (this._zoom + Se < i.minzoom || this._zoom - Se >= i.maxzoom) return !1;
      const r = i.getLayoutProperty("visibility");
      return !r || r.getValue() !== Z.NONE;
    });
  }
  get symbolRepository() {
    return this._symbolRepository;
  }
  _createCollisionJob(e, s, t) {
    return this.updateDecluttererViewState(), new Ft(e, s, t, this.styleRepository, this._zoom, this._viewState.rotation);
  }
  get fading() {
    return this._fading.value;
  }
  get decluttererOffset() {
    return this._offsetFromScreenCenter;
  }
  addTile(e) {
    e.decluttered = !1, this._tileToHandle.set(e, e.on("symbols-changed", () => {
      this._symbolRepository.add(e), this.restartDeclutter();
    })), this._symbolRepository.add(e), this.restartDeclutter();
  }
  removeTile(e) {
    const s = this._tileToHandle.get(e);
    s && (this._symbolRepository.removeTile(e), this.restartDeclutter(), s.remove(), this._tileToHandle.delete(e));
  }
  update(e, s) {
    this._zoom = e, this._viewState = { scale: s.scale, rotation: s.rotation, center: [s.center[0], s.center[1]], size: [s.size[0], s.size[1]] };
    const t = [0, 0];
    s.toScreen(t, s.center);
    const i = [0, 0];
    return s.toScreen(i, this._declutterViewState.center), this._offsetFromScreenCenter[0] = t[0] - i[0], this._offsetFromScreenCenter[1] = t[1] - i[1], this._continueDeclutter(), this._completed;
  }
  restartDeclutter() {
    this._completed = !1, this._symbolDeclutterer.restart(), this._notifyUnstable();
  }
  clear() {
    this._completed = !1, this._symbolRepository = null, this._symbolDeclutterer.restart(), this._tileToHandle.forEach((e) => e.remove()), this._tileToHandle.clear();
  }
  get stale() {
    return this._zoom !== this._declutterZoom || this._viewState.size[0] !== this._declutterViewState.size[0] || this._viewState.size[1] !== this._declutterViewState.size[1] || this._viewState.scale !== this._declutterViewState.scale || this._viewState.rotation !== this._declutterViewState.rotation;
  }
  deleteStyleLayers(e) {
    this._symbolRepository.deleteStyleLayers(e);
  }
  _continueDeclutter() {
    this._completed && !this.stale || (this._symbolDeclutterer.running || (this.updateDecluttererViewState(), this._symbolDeclutterer.restart()), this._symbolDeclutterer.setScreenSize(this._viewState.size[0], this._viewState.size[1]), this._completed = this._symbolDeclutterer.continue(ct), this._completed && this._scheduleNotifyStable());
  }
  _scheduleNotifyStable() {
    this._stableNotificationHandle != null && clearTimeout(this._stableNotificationHandle), this._stableNotificationHandle = setTimeout(() => {
      this._stableNotificationHandle = null, this._fading.value = !1;
    }, (1 + Kt) * Q);
  }
  _notifyUnstable() {
    this._stableNotificationHandle != null && (clearTimeout(this._stableNotificationHandle), this._stableNotificationHandle = null), this._fading.value = !0;
  }
  updateDecluttererViewState() {
    this._declutterZoom = this._zoom, this._declutterViewState.center[0] = this._viewState.center[0], this._declutterViewState.center[1] = this._viewState.center[1], this._declutterViewState.rotation = this._viewState.rotation, this._declutterViewState.scale = this._viewState.scale, this._declutterViewState.size[0] = this._viewState.size[0], this._declutterViewState.size[1] = this._viewState.size[1], this._offsetFromScreenCenter[0] = 0, this._offsetFromScreenCenter[1] = 0;
  }
}
let Yt = class extends Me {
  _createTransforms() {
    return { displayViewScreenMat3: $(), tileMat3: $() };
  }
};
const J = 1e-6;
function xe(h, e) {
  if (h) {
    const s = h.getLayoutProperty("visibility");
    if (!s || s.getValue() !== Z.NONE && (h.minzoom === void 0 || h.minzoom < e + J) && (h.maxzoom === void 0 || h.maxzoom >= e - J)) return !0;
  }
  return !1;
}
let jt = class extends dt {
  constructor(e) {
    super(e), this._backgroundTiles = [], this._computeDisplayInfoView(e);
  }
  destroy() {
    this.removeAllChildren(), this._spriteMosaic?.dispose(), this._spriteMosaic = null, this._glyphMosaic?.dispose(), this._glyphMosaic = null, this._symbolFader != null && (this._symbolFader.clear(), this._symbolFader = null), this._styleRepository = null, this._backgroundTiles = [];
  }
  get fading() {
    return this._symbolFader?.fading ?? !1;
  }
  get symbolFader() {
    return this._symbolFader;
  }
  get symbolRepository() {
    return this._symbolFader?.symbolRepository;
  }
  setStyleResources(e, s, t, i) {
    this._spriteMosaic = e, this._glyphMosaic = s, this._styleRepository = t, this._tileInfoView = i, this._computeDisplayInfoView(i), this._symbolFader == null && (this._symbolFader = new Gt(this._styleRepository, this.children)), this._symbolFader.styleRepository = t;
  }
  setSpriteMosaic(e) {
    this._spriteMosaic?.dispose(), this._spriteMosaic = e;
  }
  deleteStyleLayers(e) {
    this._symbolFader != null && this._symbolFader.deleteStyleLayers(e);
  }
  createRenderParams(e) {
    return { ...super.createRenderParams(e), renderPass: null, styleLayer: null, styleLayerUID: -1, glyphMosaic: this._glyphMosaic, spriteMosaic: this._spriteMosaic, hasClipping: !!this._clippingInfos };
  }
  doRender(e) {
    !this.visible || e.drawPhase !== N.MAP && e.drawPhase !== N.DEBUG || this._spriteMosaic === void 0 || super.doRender(e);
  }
  addChild(e) {
    return super.addChild(e), this._symbolFader != null ? this._symbolFader.addTile(e) : e.decluttered = !0, this.requestRender(), e;
  }
  removeChild(e) {
    return this._symbolFader != null && this._symbolFader.removeTile(e), this.requestRender(), super.removeChild(e);
  }
  renderChildren(e) {
    const { drawPhase: s } = e;
    s !== N.DEBUG ? this._doRender(e) : super.renderChildren(e);
  }
  removeAllChildren() {
    for (let e = 0; e < this.children.length; e++) {
      const s = this.children[e];
      this._symbolFader != null && this._symbolFader.removeTile(s), s.dispose();
    }
    super.removeAllChildren();
  }
  getStencilTarget() {
    return this.children.filter((e) => e.neededForCoverage && e.hasData());
  }
  restartDeclutter() {
    this._symbolFader != null && this._symbolFader.restartDeclutter();
  }
  _doRender(e) {
    const { context: s, state: t } = e, i = this._styleRepository;
    if (!i) return;
    const r = i.layers, n = this._displayInfo.scaleToZoom(t.scale);
    i.backgroundBucketIds.length > 0 && (e.renderPass = "background", this._renderBackgroundLayers(e, i.backgroundBucketIds, n)), super.renderChildren(e), e.drawPhase === N.MAP && this._fade(n, t);
    const o = this.children.filter((a) => a.visible && a.hasData());
    if (!o || o.length === 0) return s.bindVAO(), s.setStencilTestEnabled(!0), void s.setBlendingEnabled(!0);
    for (const a of o) a.triangleCount = 0;
    s.setStencilWriteMask(0), s.setColorMask(!0, !0, !0, !0), s.setStencilOp(k.KEEP, k.KEEP, k.REPLACE), s.setStencilTestEnabled(!0), s.setBlendingEnabled(!1), s.setDepthTestEnabled(!0), s.setDepthWriteEnabled(!0), s.setDepthFunction(ue.LEQUAL), s.setClearDepth(1), s.clear(s.gl.DEPTH_BUFFER_BIT), e.renderPass = "opaque";
    for (let a = r.length - 1; a >= 0; a--) this._renderStyleLayer(r[a], e, o);
    s.setDepthWriteEnabled(!1), s.setBlendingEnabled(!0), s.setBlendFunctionSeparate(B.ONE, B.ONE_MINUS_SRC_ALPHA, B.ONE, B.ONE_MINUS_SRC_ALPHA), e.renderPass = "translucent";
    for (let a = 0; a < r.length; a++) this._renderStyleLayer(r[a], e, o);
    s.bindVAO(), s.setStencilTestEnabled(!0), s.setBlendingEnabled(!0);
    for (const a of o) a.debugInfo.display.triangleCount = a.triangleCount;
  }
  _fade(e, s) {
    this._symbolFader != null && (this._symbolFader.update(e, s) || this.requestRender());
  }
  _renderStyleLayer(e, s, t) {
    const { displayLevel: i, painter: r, renderPass: n } = s;
    if (e === void 0) return;
    const o = e.getLayoutProperty("visibility");
    if (o && o.getValue() === Z.NONE) return;
    let a;
    switch (e.type) {
      case D.BACKGROUND:
        return;
      case D.FILL:
        if (n !== "opaque" && s.renderPass !== "translucent") return;
        a = "vtlFill";
        break;
      case D.LINE:
        if (n !== "translucent") return;
        a = "vtlLine";
        break;
      case D.CIRCLE:
        if (n !== "translucent") return;
        a = "vtlCircle";
        break;
      case D.SYMBOL:
        if (n !== "translucent") return;
        a = "vtlSymbol";
    }
    if (t = e.type === D.SYMBOL ? t.filter((c) => c.decluttered) : t.filter((c) => c.neededForCoverage), a !== "vtlSymbol" && (t.length === 0 || e.minzoom !== void 0 && e.minzoom >= i + J || e.maxzoom !== void 0 && e.maxzoom < i - J)) return;
    const l = e.uid;
    s.styleLayerUID = l, s.styleLayer = e;
    for (const c of t) if (c.layerData.has(l)) {
      r.renderObjects(s, t, a);
      break;
    }
  }
  _renderBackgroundLayers(e, s, t) {
    const { context: i, painter: r, state: n } = e, o = this._styleRepository;
    let a = !1;
    for (const b of s)
      if (o.getLayerById(b).type === D.BACKGROUND && xe(o.getLayerById(b), t)) {
        a = !0;
        break;
      }
    if (!a) return;
    const l = this._tileInfoView, c = l.getTileCoverage(e.state, 0, !0, "smallest"), { spans: y, lodInfo: d } = c, { level: u } = d, _ = F(), f = [];
    if (this._renderPasses) {
      const b = this._renderPasses[0];
      this._clippingInfos != null && (b.brushes[0].prepareState(e), b.brushes[0].drawMany(e, this._clippingInfos));
    }
    const g = this._backgroundTiles;
    let p, m = 0;
    for (const { row: b, colFrom: S, colTo: I } of y) for (let w = S; w <= I; w++) {
      if (m < g.length) p = g[m], p.key.set(u, b, d.normalizeCol(w), d.getWorldForColumn(w)), l.getTileBounds(_, p.key, !1), p.x = _[0], p.y = _[3], p.resolution = l.getTileResolution(u);
      else {
        const x = new M(u, b, d.normalizeCol(w), d.getWorldForColumn(w)), P = l.getTileBounds(F(), x), q = l.getTileResolution(u);
        p = new Yt(x, q, P[0], P[3], 512, 512, 4096, 4096), g.push(p);
      }
      p.setTransform(n), f.push(p), m++;
    }
    i.setStencilWriteMask(0), i.setColorMask(!0, !0, !0, !0), i.setStencilOp(k.KEEP, k.KEEP, k.REPLACE), i.setStencilFunction(ue.EQUAL, 0, 255), i.setStencilTestEnabled(!0);
    for (const b of s) {
      const S = o.getLayerById(b);
      S.type === D.BACKGROUND && xe(S, t) && (e.styleLayerUID = S.uid, e.styleLayer = S, r.renderObjects(e, f, "vtlBackground"));
    }
    Ce.pool.release(c);
  }
  _computeDisplayInfoView(e) {
    let s = e.tileInfo.lods[0].scale;
    const t = Math.max(25, e.tileInfo.lods.length), i = [];
    for (let r = 0; r <= t; r++) i.push(s), s /= 2;
    this._displayInfo = Re.create({ scales: i, size: 512, spatialReference: e.spatialReference, numLODs: t });
  }
};
const Xt = 8, Zt = 512, Ie = 4096, es = (h, e) => {
  const s = h.vtlSymbol.sourceTile, t = e.vtlSymbol.sourceTile;
  return s.level !== t.level ? s.level - t.level : s.row !== t.row ? s.row - t.row : s.col !== t.col ? s.col - t.col : h.styleLayerUID - e.styleLayerUID;
};
class ee {
  constructor(e, s, t, i, r) {
    this.tileKey = e, this._index = null, this._styleRepository = null, this._tileHandler = null, this._tileKeyToPBF = /* @__PURE__ */ new Map(), this._tileLayerData = s, this._styleRepository = t, this._tileHandler = i, this._parentLayer = r;
  }
  static create(e, s, t, i, r) {
    return new ee(e, s, t, i, r);
  }
  clear() {
    this._index?.clear(), this._tileKeyToPBF.clear();
  }
  async queryAttributes(e, s, t, i, r) {
    if (this._tileLayerData.size === 0 || !this._styleRepository || !this._tileHandler) return [];
    this._index === null && (this._index = new _t(100, ts), await this._indexLayers());
    const n = [];
    return this._queryIndex(n, e, s, t, this.tileKey.level, i), r && r?.length > 0 && await this._getSymbolsAttributes(n, r), n;
  }
  async _indexLayers() {
    const e = this.tileKey, s = this._styleRepository.layers, t = await this._getTilePayload(e);
    for (const [i, r] of this._tileLayerData) {
      const n = s[i], o = t.find((c) => c.sourceName === n.source);
      if (!o) continue;
      const { protobuff: a, key: l } = o;
      if (r.type !== L.SYMBOL) {
        const c = 1 << e.level - l.level, y = e.row - l.row * c, d = e.col - l.col * c;
        this._indexLayer(n, a, e.level, c, y, d);
      }
    }
  }
  _indexLayer(e, s, t, i, r, n) {
    const o = e.sourceLayer, a = e.getFeatureFilter(), l = t, c = t + 1, y = lt(l), d = new j(new Uint8Array(s), new DataView(s));
    for (; d.next(); ) switch (d.tag()) {
      case 3: {
        const u = d.getMessage(), _ = new ye(u);
        if (u.release(), _.name !== o) continue;
        const f = _.getData(), g = _.extent / i, p = g * n - y, m = g * r - y, b = p + g + 2 * y, S = m + g + 2 * y, I = g / Zt, w = Ie / g, x = g * n, P = g * r;
        for (; f.nextTag(2); ) {
          const q = f.getMessage(), H = new de(q, _);
          if (q.release(), a && !a.filter(H, t)) continue;
          const te = H.values || {}, se = te._minzoom, ie = te._maxzoom;
          if (se && se >= 10 * c || ie && ie <= 10 * l) continue;
          const T = e.getFeatureInflatedBounds(H, l, _.extent, I);
          T == null || T[0] > b || T[1] > S || T[2] < p || T[3] < m || (T[0] = (T[0] - x) * w, T[1] = (T[1] - P) * w, T[2] = (T[2] - x) * w, T[3] = (T[3] - P) * w, this._index.insert(new ft(e, H, T, w, x, P)));
        }
        break;
      }
      default:
        d.skip();
    }
  }
  async _getSymbolsAttributes(e, s) {
    if (!s || s.length === 0) return e;
    const t = [];
    s.sort(es);
    let i = s[0].styleLayerUID, r = 0;
    for (let l = 0; l < s.length; l++) i !== s[l].styleLayerUID && (t.push({ from: r, to: l, styleLayerUID: i, sourceTileKey: s[l].vtlSymbol.sourceTile }), r = l, i = s[l].styleLayerUID);
    t.push({ from: r, to: s.length, styleLayerUID: i, sourceTileKey: s[s.length - 1].vtlSymbol.sourceTile });
    const n = this._styleRepository.layers;
    let o, a = null;
    for (const l of t) {
      const c = await this._getTilePayload(l.sourceTileKey);
      o = n[l.styleLayerUID], a = !!o && c.find((y) => y.sourceName === o.source), a && this._addSymbolsAttributes(e, s.slice(l.from, l.to).map((y) => y.vtlSymbol), i, a);
    }
    return e;
  }
  _addSymbolsAttributes(e, s, t, i) {
    const r = this._styleRepository.layers, n = i.key, o = this.tileKey, a = 1 << o.level - n.level, l = o.row - n.row * a, c = o.col - n.col * a;
    this._getSymbolAttributes(i.protobuff, s, t, a, l, c).forEach((y) => {
      const { attributes: d, tilePoint: u } = y;
      e.push({ layerId: r[t].id, layerIndex: t, graphic: new ae({ attributes: d, origin: { type: "vector-tile", layerId: r[t].id, layerIndex: t, layer: this._parentLayer } }), tilePoint: u });
    });
  }
  _getSymbolAttributes(e, s, t, i, r, n) {
    const o = [], a = this._styleRepository.layers;
    let l = 0;
    s.sort((y, d) => y.featureIndex - d.featureIndex);
    const c = new j(new Uint8Array(e), new DataView(e));
    for (; c.next(); ) switch (c.tag()) {
      case 3: {
        const y = c.getMessage(), d = new ye(y);
        if (y.release(), d.name !== a[t].sourceLayer) continue;
        const u = d.getData(), _ = d.extent / i, f = Ie / _, g = _ * n, p = _ * r;
        let m = 0;
        for (; u.nextTag(2); ) {
          const b = u.getMessage();
          if (m++ === s[l].featureIndex) {
            const S = new de(b, d), I = S.values, w = S.getGeometry(), x = w != null ? [f * (w[0][0].x - g), f * (w[0][0].y - p)] : null;
            o.push({ attributes: I, tilePoint: x }), l++;
          }
          if (b.release(), l === s.length) return o;
        }
        break;
      }
      default:
        c.skip();
    }
    return o;
  }
  _queryIndex(e, s, t, i, r, n) {
    const o = Xt * i * (window.devicePixelRatio || 1);
    return this._index?.search({ minX: s - o, minY: t - o, maxX: s + o, maxY: t + o }, (a) => {
      const { layer: l, feature: c } = a;
      l.isIntersectingFeature(s, t, i, c, r, n, a) && e.push({ layerId: l.id, layerIndex: l.uid, tilePoint: null, graphic: new ae({ attributes: c.values, origin: { type: "vector-tile", layerId: a.layer.id, layerIndex: a.layer.uid, layer: this._parentLayer } }) });
    }), e;
  }
  async _getTilePayload(e) {
    return Ye(this._tileKeyToPBF, e.id, () => this._tileHandler.fetchTilePBFs(e)).then((s) => s);
  }
}
const ts = (h) => ({ minX: h.bounds[0], minY: h.bounds[1], maxX: h.bounds[2], maxY: h.bounds[3] });
class Te extends je {
  constructor() {
    super(...arguments), this._fullCacheLodInfos = null, this._levelByScale = {};
  }
  getTileParentId(e) {
    const s = M.pool.acquire(e), t = s.level === 0 ? null : M.getId(s.level - 1, s.row >> 1, s.col >> 1, s.world);
    return M.pool.release(s), t;
  }
  getTileCoverage(e, s, t = !0, i) {
    const r = super.getTileCoverage(e, s, t, i);
    if (!r) return r;
    const n = 1 << r.lodInfo.level;
    return r.spans = r.spans.filter((o) => o.row >= 0 && o.row < n), r;
  }
  scaleToLevel(e) {
    if (this._fullCacheLodInfos || this._initializeFullCacheLODs(this._lodInfos), this._levelByScale[e]) return this._levelByScale[e];
    {
      const s = this._fullCacheLodInfos;
      if (e > s[0].scale) return s[0].level;
      let t, i;
      for (let r = 0; r < s.length - 1; r++) if (i = s[r + 1], e > i.scale) return t = s[r], t.level + (t.scale - e) / (t.scale - i.scale);
      return s[s.length - 1].level;
    }
  }
  _initializeFullCacheLODs(e) {
    let s;
    if (e[0].level === 0) s = e.map((t) => ({ level: t.level, resolution: t.resolution, scale: t.scale }));
    else {
      const t = this.tileInfo.size[0], i = this.tileInfo.spatialReference;
      s = Re.create({ size: t, spatialReference: i }).lods.map((r) => ({ level: r.level, resolution: r.resolution, scale: r.scale }));
    }
    for (let t = 0; t < s.length; t++) this._levelByScale[s[t].scale] = s[t].level;
    this._fullCacheLodInfos = s;
  }
}
const Y = 2, ve = 8, De = 512;
let W = class extends pt(gt) {
  constructor() {
    super(...arguments), this._styleChanges = [], this._fetchQueue = null, this._parseQueue = null, this._tileHandlerPromise = null, this._isTileHandlerReady = !1;
  }
  get fading() {
    return this._vectorTileContainer?.fading ?? !1;
  }
  async hitTest(h, e) {
    const s = this._tileHandlerPromise, t = this._vectorTileContainer?.symbolFader;
    if (!s || !this._isTileHandlerReady || !t) return;
    await s;
    let i = null;
    const r = this._vectorTileContainer?.symbolRepository;
    r && (i = r.querySymbols(e, Y, t.decluttererOffset, {}));
    const n = this.view.state, o = this._tileManager.getIntersectingTiles(e.x, e.y, Y, n, i);
    if ((!o || o.length === 0) && i?.length === 0) return null;
    h = h.clone().normalize();
    const a = [], l = [];
    for (const c of o) a.push(this._queryTile(l, h, Y, this.view.state.rotation, c, i?.filter((y) => y.tileKey.id === c.id)));
    return await Promise.all(a), l;
  }
  update(h) {
    if (this._tileHandlerPromise && this._isTileHandlerReady) return h.pixelRatio !== this._tileHandler.devicePixelRatio ? (this._start(), void (this._tileHandler.devicePixelRatio = h.pixelRatio)) : void (this._styleChanges.length > 0 ? this._tileHandlerPromise = this._applyStyleChanges() : (this._fetchQueue.pause(), this._parseQueue.pause(), this._fetchQueue.state = h.state, this._parseQueue.state = h.state, this._tileManager.update(h) || this.requestUpdate(), this._parseQueue.resume(), this._fetchQueue.resume()));
  }
  attach() {
    const { style: h } = this.layer.currentStyleInfo;
    this._styleRepository = new _e(h), this._tileInfoView = new Te(this.layer.tileInfo, this.layer.fullExtent), this._vectorTileContainer = new jt(this._tileInfoView), this._tileHandler = new St(this.layer, this._styleRepository, window.devicePixelRatio || 1, this.layer.tileInfo.lods.length - 1), this.container.addChild(this._vectorTileContainer), this._start(), this.addAttachHandles([this.layer.on("paint-change", (e) => {
      if (e.isDataDriven) this._styleChanges.push({ type: v.PAINTER_CHANGED, data: e }), this.requestUpdate();
      else {
        const s = this._styleRepository, t = s.getLayerById(e.layer);
        if (!t) return;
        const i = t.type === D.SYMBOL;
        s.setPaintProperties(e.layer, e.paint), i && this._vectorTileContainer?.restartDeclutter(), this._vectorTileContainer?.requestRender();
      }
    }), this.layer.on("layout-change", (e) => {
      const s = this._styleRepository, t = s.getLayerById(e.layer);
      if (!t) return;
      const i = Xe(t.layout, e.layout);
      if (i != null) {
        if (Ze(i, "visibility") && ss(i) === 1) return s.setLayoutProperties(e.layer, e.layout), t.type === D.SYMBOL && this._vectorTileContainer?.restartDeclutter(), void this._vectorTileContainer?.requestRender();
        this._styleChanges.push({ type: v.LAYOUT_CHANGED, data: e }), this.requestUpdate();
      }
    }), this.layer.on("style-layer-visibility-change", (e) => {
      const s = this._styleRepository, t = s.getLayerById(e.layer);
      t && (s.setStyleLayerVisibility(e.layer, e.visibility), t.type === D.SYMBOL && this._vectorTileContainer?.restartDeclutter(), this._vectorTileContainer?.requestRender());
    }), this.layer.on("style-layer-change", (e) => {
      this._styleChanges.push({ type: v.LAYER_CHANGED, data: e }), this.requestUpdate();
    }), this.layer.on("delete-style-layer", (e) => {
      this._styleChanges.push({ type: v.LAYER_REMOVED, data: e }), this.requestUpdate();
    }), this.layer.on("load-style", () => this._loadStyle()), this.layer.on("spriteSource-change", (e) => {
      this._styleChanges.push({ type: v.SPRITES_CHANGED, data: e });
      const s = this._styleRepository.layers;
      for (const t of s) switch (t.type) {
        case D.SYMBOL:
          t.getLayoutProperty("icon-image") && this._styleChanges.push({ type: v.LAYOUT_CHANGED, data: { layer: t.id, layout: t.layout } });
          break;
        case D.LINE:
          t.getPaintProperty("line-pattern") && this._styleChanges.push({ type: v.PAINTER_CHANGED, data: { layer: t.id, paint: t.paint, isDataDriven: t.isPainterDataDriven() } });
          break;
        case D.FILL:
          t.getLayoutProperty("fill-pattern") && this._styleChanges.push({ type: v.PAINTER_CHANGED, data: { layer: t.id, paint: t.paint, isDataDriven: t.isPainterDataDriven() } });
      }
      this.requestUpdate();
    })]);
  }
  detach() {
    this._stop(), this.container.removeAllChildren(), this._vectorTileContainer = z(this._vectorTileContainer), this._tileHandler = z(this._tileHandler);
  }
  moveStart() {
    this.requestUpdate();
  }
  viewChange() {
    this.requestUpdate();
  }
  moveEnd() {
    this.requestUpdate();
  }
  supportsSpatialReference(h) {
    return et(this.layer.tileInfo?.spatialReference, h);
  }
  canResume() {
    let h = super.canResume();
    const { currentStyleInfo: e } = this.layer;
    if (h && e?.layerDefinition) {
      const s = this.view.scale, { minScale: t, maxScale: i } = e.layerDefinition;
      e?.layerDefinition && (t && t < s && (h = !1), i && i > s && (h = !1));
    }
    return h;
  }
  isUpdating() {
    return this.fading;
  }
  acquireTile(h) {
    const e = this._createVectorTile(h);
    return this._updatingHandles.addPromise(this._fetchQueue.push(e.key).then((s) => this._parseQueue.push({ key: e.key, data: s })).then((s) => {
      e.once("attach", () => this.requestUpdate()), e.setData(s), this.requestUpdate();
    }).catch((s) => {
      X(s) || le.getLogger(this).error(s);
    })), e;
  }
  releaseTile(h) {
    const e = h.key.id;
    this._fetchQueue.abort(e), this._parseQueue.abort(e), this.requestUpdate();
  }
  _start() {
    if (this._stop(), this._tileManager = new be({ acquireTile: (s) => this.acquireTile(s), releaseTile: (s) => this.releaseTile(s), tileInfoView: this._tileInfoView }, this._vectorTileContainer), !this.layer.currentStyleInfo) return;
    const h = new AbortController(), e = this._tileHandler.start({ signal: h.signal }).then(() => {
      this._fetchQueue = new he({ tileInfoView: this._tileInfoView, process: (s, t) => this._getTileData(s, t), concurrency: 15 }), this._parseQueue = new he({ tileInfoView: this._tileInfoView, process: (s, t) => this._parseTileData(s, t), concurrency: 8 }), this.requestUpdate(), this._isTileHandlerReady = !0;
    });
    this._tileHandler.spriteMosaic.then((s) => {
      this._vectorTileContainer.setStyleResources(s, this._tileHandler.glyphMosaic, this._styleRepository, this._tileInfoView), this.requestUpdate();
    }), this._tileHandlerAbortController = h, this._tileHandlerPromise = e;
  }
  _stop() {
    if (!this._tileHandlerAbortController || !this._vectorTileContainer) return;
    const h = this._tileHandlerAbortController;
    h && h.abort(), this._tileHandlerPromise = null, this._isTileHandlerReady = !1, this._fetchQueue = z(this._fetchQueue), this._parseQueue = z(this._parseQueue), this._tileManager = z(this._tileManager), this._vectorTileContainer.removeAllChildren();
  }
  async _getTileData(h, e) {
    return this._tileHandler.fetchTileData(h, e);
  }
  async _parseTileData(h, e) {
    return this._tileHandler.parseTileData(h, e);
  }
  async _applyStyleChanges() {
    this._isTileHandlerReady = !1, this._fetchQueue.pause(), this._parseQueue.pause(), this._fetchQueue.clear(), this._parseQueue.clear(), this._tileManager.clearCache();
    const h = this._styleChanges;
    try {
      await this._tileHandler.updateStyle(h);
    } catch (r) {
      le.getLogger(this).error("error applying vector-tiles style update", r.message), this._fetchQueue.resume(), this._parseQueue.resume(), this._isTileHandlerReady = !0;
    }
    const e = this._styleRepository, s = /* @__PURE__ */ new Set();
    h.forEach((r) => {
      if (r.type !== v.LAYER_REMOVED) return;
      const n = r.data, o = e.getLayerById(n.layer);
      o && s.add(o.uid);
    });
    const t = /* @__PURE__ */ new Set();
    h.forEach((r) => {
      let n;
      switch (r.type) {
        case v.PAINTER_CHANGED:
          e.setPaintProperties(r.data.layer, r.data.paint), n = r.data.layer;
          break;
        case v.LAYOUT_CHANGED:
          e.setLayoutProperties(r.data.layer, r.data.layout), n = r.data.layer;
          break;
        case v.LAYER_REMOVED:
          return void e.deleteStyleLayer(r.data.layer);
        case v.LAYER_CHANGED:
          e.setStyleLayer(r.data.layer, r.data.index), n = r.data.layer.id;
          break;
        case v.SPRITES_CHANGED:
          this._vectorTileContainer.setSpriteMosaic(this._tileHandler.setSpriteSource(r.data.spriteSource));
      }
      if (n) {
        const o = e.getLayerById(n);
        o && t.add(o.uid);
      }
    });
    const i = this._vectorTileContainer.children;
    if (s.size > 0) {
      const r = Array.from(s);
      this._vectorTileContainer.deleteStyleLayers(r);
      for (const n of i) n.deleteLayerData(r);
    }
    if (this._fetchQueue.resume(), this._parseQueue.resume(), t.size > 0) {
      const r = Array.from(t), n = [];
      for (const o of i) {
        const a = this._updatingHandles.addPromise(this._fetchQueue.push(o.key).then((l) => this._parseQueue.push({ key: o.key, data: l, styleLayerUIDs: r })).then((l) => o.setData(l)));
        n.push(a);
      }
      await Promise.all(n);
    }
    this._styleChanges = [], this._isTileHandlerReady = !0, this.requestUpdate();
  }
  async _loadStyle() {
    const { style: h } = this.layer.currentStyleInfo, e = tt(h);
    this._isTileHandlerReady = !1, this._fetchQueue.pause(), this._parseQueue.pause(), this._fetchQueue.clear(), this._parseQueue.clear(), this._styleRepository = new _e(e), this._vectorTileContainer.destroy(), this._tileManager.clear(), this._tileHandlerAbortController.abort(), this._tileHandlerAbortController = new AbortController();
    const { signal: s } = this._tileHandlerAbortController;
    try {
      this._tileHandlerPromise = this._tileHandler.setStyle(this._styleRepository, e, this.layer.tileInfo.lods.length - 1), await this._tileHandlerPromise;
    } catch (r) {
      if (!X(r)) throw r;
    }
    if (s.aborted) return this._fetchQueue.resume(), this._parseQueue.resume(), this._isTileHandlerReady = !0, void this.requestUpdate();
    const t = await this._tileHandler.spriteMosaic, i = this._vectorTileContainer;
    this._tileInfoView = new Te(this.layer.tileInfo, this.layer.fullExtent), i.setStyleResources(t, this._tileHandler.glyphMosaic, this._styleRepository, this._tileInfoView), this._tileManager = new be({ acquireTile: (r) => this.acquireTile(r), releaseTile: (r) => this.releaseTile(r), tileInfoView: this._tileInfoView }, this._vectorTileContainer), this._fetchQueue.resume(), this._parseQueue.resume(), this._isTileHandlerReady = !0, this.requestUpdate();
  }
  _createVectorTile(h) {
    const e = this._tileInfoView.getTileBounds(F(), h), s = this._tileInfoView.getTileResolution(h.level);
    return new zt(h, s, e[0], e[3], 512, 512, this._styleRepository);
  }
  async _queryTile(h, e, s, t, i, r) {
    if (i.layerData.size === 0) return;
    const n = this._ensureTileIndex(i), o = this._tileInfoView.getTileBounds(F(), i.key, !0), a = ve * De * ((e.x - o[0]) / (o[2] - o[0])), l = ve * De * (1 - (e.y - o[1]) / (o[3] - o[1])), c = await n.queryAttributes(a, l, s, t, r);
    for (const y of c) y.graphic.geometry = this._tileToMapPoint(y.tilePoint, i.transforms.tileUnitsToPixels), h.push({ type: "graphic", layer: this.layer, graphic: y.graphic, mapPoint: e.clone() });
    h.sort((y, d) => d.graphic.origin.layerIndex - y.graphic.origin.layerIndex);
  }
  _tileToMapPoint(h, e) {
    if (!h) return null;
    const s = h[0] * e[0] + h[1] * e[3] + e[6], t = h[0] * e[1] + h[1] * e[4] + e[7], i = this.view.state, r = [0, 0];
    return i.toMap(r, [s, t]), new st({ x: r[0], y: r[1], spatialReference: i.spatialReference });
  }
  _ensureTileIndex(h) {
    let e = h.featureIndex;
    return e || (e = ee.create(h.key, h.layerData, this._styleRepository, this._tileHandler, this.layer), h.featureIndex = e), e;
  }
};
function ss(h) {
  if (h == null) return 0;
  switch (h.type) {
    case "partial":
      return Object.keys(h.diff).length;
    case "complete":
      return Math.max(Object.keys(h.oldValue).length, Object.keys(h.newValue).length);
    case "collection":
      return Object.keys(h.added).length + Object.keys(h.changed).length + Object.keys(h.removed).length;
  }
}
ce([it()], W.prototype, "_isTileHandlerReady", void 0), W = ce([rt("esri.views.2d.layers.VectorTileLayerView2D")], W);
const zs = W;
export {
  zs as default
};
//# sourceMappingURL=VectorTileLayerView2D-Bls3CBo-.js.map
