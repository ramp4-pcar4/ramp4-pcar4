import { a6 as q, er as U, az as W, C as K, H as X, ba as g, i8 as Y, dj as ee, s as d, dG as I, b9 as $, fq as te, i9 as L, gP as D, a1 as O, fV as Q, ia as ie, aT as A, aS as ne, ib as G } from "./main-3gzXighg.js";
const M = () => K.getLogger("esri.layers.support.ElevationSampler");
class H {
  queryElevation(e) {
    return le(e.clone(), this);
  }
  on() {
    return X();
  }
  projectIfRequired(e, t) {
    return B(e, t);
  }
}
class se extends H {
  get spatialReference() {
    return this.extent.spatialReference;
  }
  constructor(e, t, i) {
    super(), this.tile = e, this.noDataValue = i;
    const n = e.tile.extent;
    this.extent = U(n, t.spatialReference), this.extent.zmin = e.zmin, this.extent.zmax = e.zmax, this._aaExtent = n;
    const s = g(t.spatialReference), l = t.lodAt(e.tile.level).resolution * s;
    this.demResolution = { min: l, max: l };
  }
  contains(e) {
    const t = this.projectIfRequired(e, this.spatialReference);
    return t != null && this.containsAt(t.x, t.y);
  }
  containsAt(e, t) {
    return Y(this._aaExtent, e, t);
  }
  elevationAt(e, t) {
    if (!this.containsAt(e, t)) {
      const i = this.extent, n = `${i.xmin}, ${i.ymin}, ${i.xmax}, ${i.ymax}`;
      return M().warn("#elevationAt()", `Point used to sample elevation (${e}, ${t}) is outside of the sampler extent (${n})`), this.noDataValue;
    }
    return this.tile.sample(e, t) ?? this.noDataValue;
  }
}
class P extends H {
  get spatialReference() {
    return this.extent.spatialReference;
  }
  constructor(e, t, i) {
    let n;
    super(), typeof t == "number" ? (this.noDataValue = t, n = null) : (n = t, this.noDataValue = i), this.samplers = n ? e.map((l) => new se(l, n, this.noDataValue)) : e;
    const s = this.samplers[0];
    if (s) {
      this.extent = s.extent.clone();
      const { min: l, max: o } = s.demResolution;
      this.demResolution = { min: l, max: o };
      for (let a = 1; a < this.samplers.length; a++) {
        const r = this.samplers[a];
        this.extent.union(r.extent), this.demResolution.min = Math.min(this.demResolution.min, r.demResolution.min), this.demResolution.max = Math.max(this.demResolution.max, r.demResolution.max);
      }
    } else this.extent = U(W(), n.spatialReference), this.demResolution = { min: 0, max: 0 };
  }
  elevationAt(e, t) {
    let i, n = !1;
    for (const s of this.samplers) if (s.containsAt(e, t) && (n = !0, i = s.elevationAt(e, t), i !== s.noDataValue)) return i;
    return i ?? (n || M().warn("#elevationAt()", `Point used to sample elevation (${e}, ${t}) is outside of the sampler`), this.noDataValue);
  }
}
function le(c, e) {
  const t = B(c, e.spatialReference);
  if (!t) return null;
  switch (c.type) {
    case "point":
      ae(c, t, e);
      break;
    case "polyline":
      oe(c, t, e);
      break;
    case "multipoint":
      re(c, t, e);
  }
  return c;
}
function B(c, e) {
  if (c == null) return null;
  const t = c.spatialReference;
  if (t.equals(e)) return c;
  const i = ee(c, e);
  return i || M().error(`Cannot project geometry spatial reference (wkid:${t.wkid}) to elevation sampler spatial reference (wkid:${e.wkid})`), i;
}
function ae(c, e, t) {
  c.z = t.elevationAt(e.x, e.y);
}
function oe(c, e, t) {
  y.spatialReference = e.spatialReference;
  const i = c.hasM && !c.hasZ;
  for (let n = 0; n < c.paths.length; n++) {
    const s = c.paths[n], l = e.paths[n];
    for (let o = 0; o < s.length; o++) {
      const a = s[o], r = l[o];
      y.x = r[0], y.y = r[1], i && (a[3] = a[2]), a[2] = t.elevationAt(y.x, y.y);
    }
  }
  c.hasZ = !0;
}
function re(c, e, t) {
  y.spatialReference = e.spatialReference;
  const i = c.hasM && !c.hasZ;
  for (let n = 0; n < c.points.length; n++) {
    const s = c.points[n], l = e.points[n];
    y.x = l[0], y.y = l[1], i && (s[3] = s[2]), s[2] = t.elevationAt(y.x, y.y);
  }
  c.hasZ = !0;
}
const y = new q();
let ce = class {
  constructor(e, t) {
    this.data = e, this.safeWidth = 0.99999999 * (e.width - 1), this.dx = (e.width - 1) / (t[2] - t[0]), this.dy = (e.width - 1) / (t[3] - t[1]), this.x0 = t[0], this.y1 = t[3];
  }
};
class Z {
  constructor(e, t = null) {
    if (this.tile = e, t != null && e != null) {
      const i = e.extent;
      this._samplerData = new ce(t, i);
    }
  }
  get zmin() {
    return this._samplerData != null ? this._samplerData.data.minValue : 0;
  }
  get zmax() {
    return this._samplerData != null ? this._samplerData.data.maxValue : 0;
  }
  get hasNoDataValues() {
    return !!this._samplerData?.data.hasNoDataValues;
  }
  sample(e, t) {
    if (this._samplerData == null) return;
    const { safeWidth: i, data: n, dx: s, dy: l, y1: o, x0: a } = this._samplerData, { width: r, values: u, noDataValue: m } = n, p = N(l * (o - t), 0, i), h = N(s * (e - a), 0, i), T = Math.floor(p), z = Math.floor(h), _ = T * r + z, F = _ + r, R = u[_], E = u[F], V = u[_ + 1], S = u[F + 1];
    if (R !== m && E !== m && V !== m && S !== m) {
      const b = h - z, k = R + (V - R) * b;
      return k + (E + (S - E) * b - k) * (p - T);
    }
  }
}
function N(c, e, t) {
  return c < e ? e : c > t ? t : c;
}
class fe {
  async queryAll(e, t, i) {
    if (!(e = i && i.ignoreInvisibleLayers ? e.filter((r) => r.visible) : e.slice()).length) throw new d("elevation-query:invalid-layer", "Elevation queries require at least one elevation layer to fetch tiles from");
    const n = x.fromGeometry(t);
    let s = !1;
    i && i.returnSampleInfo || (s = !0);
    const l = { ...w, ...i, returnSampleInfo: !0 }, o = await this.query(e[e.length - 1], n, l), a = await this._queryAllContinue(e, o, l);
    return a.geometry = a.geometry.export(), s && delete a.sampleInfo, a;
  }
  async query(e, t, i) {
    if (!e) throw new d("elevation-query:invalid-layer", "Elevation queries require an elevation layer to fetch tiles from");
    if (!t || !(t instanceof x) && t.type !== "point" && t.type !== "multipoint" && t.type !== "polyline") throw new d("elevation-query:invalid-geometry", "Only point, polyline and multipoint geometries can be used to query elevation");
    const n = { ...w, ...i }, s = new ue(e, t.spatialReference, n), l = n.signal;
    return await e.load({ signal: l }), await this._createGeometryDescriptor(s, t, l), await this._selectTiles(s, l), await this._populateElevationTiles(s, l), this._sampleGeometryWithElevation(s), this._createQueryResult(s, l);
  }
  async createSampler(e, t, i) {
    if (!e) throw new d("elevation-query:invalid-layer", "Elevation queries require an elevation layer to fetch tiles from");
    if (!t || t.type !== "extent") throw new d("elevation-query:invalid-extent", "Invalid or undefined extent");
    const n = { ...w, ...i };
    return this._createSampler(e, t, n);
  }
  async createSamplerAll(e, t, i) {
    if (!(e = i && i.ignoreInvisibleLayers ? e.filter((l) => l.visible) : e.slice()).length) throw new d("elevation-query:invalid-layer", "Elevation queries require at least one elevation layer to fetch tiles from");
    if (!t || t.type !== "extent") throw new d("elevation-query:invalid-extent", "Invalid or undefined extent");
    const n = { ...w, ...i, returnSampleInfo: !0 }, s = await this._createSampler(e[e.length - 1], t, n);
    return this._createSamplerAllContinue(e, t, s, n);
  }
  async _createSampler(e, t, i, n) {
    const s = i.signal;
    await e.load({ signal: s });
    const l = t.spatialReference, o = e.tileInfo.spatialReference;
    l.equals(o) || (await I([{ source: l, dest: o }], { signal: s }), t = $(t, o));
    const a = new he(e, t, i, n);
    return await this._selectTiles(a, s), await this._populateElevationTiles(a, s), new P(a.elevationTiles, a.layer.tileInfo, a.options.noDataValue);
  }
  async _createSamplerAllContinue(e, t, i, n) {
    if (e.pop(), !e.length) return i;
    const s = i.samplers.filter((r) => !r.tile.hasNoDataValues).map((r) => te(r.extent)), l = await this._createSampler(e[e.length - 1], t, n, s);
    if (l.samplers.length === 0) return i;
    const o = i.samplers.concat(l.samplers), a = new P(o, n.noDataValue);
    return this._createSamplerAllContinue(e, t, a, n);
  }
  async _queryAllContinue(e, t, i) {
    const n = e.pop(), s = t.geometry.coordinates, l = t.sampleInfo;
    L(l);
    const o = [], a = [];
    for (let p = 0; p < s.length; p++) {
      const h = l[p];
      h.demResolution >= 0 ? h.source || (h.source = n) : e.length && (o.push(s[p]), a.push(p));
    }
    if (!e.length || o.length === 0) return t;
    const r = t.geometry.clone(o), u = await this.query(e[e.length - 1], r, i), m = u.sampleInfo;
    if (!m) throw new Error("no sampleInfo");
    return a.forEach((p, h) => {
      s[p].z = u.geometry.coordinates[h].z, l[p].demResolution = m[h].demResolution;
    }), this._queryAllContinue(e, t, i);
  }
  async _createQueryResult(e, t) {
    const i = await e.geometry.project(e.outSpatialReference, t);
    L(i);
    const n = { geometry: i.export(), noDataValue: e.options.noDataValue };
    return e.options.returnSampleInfo && (n.sampleInfo = this._extractSampleInfo(e)), e.geometry.coordinates.forEach((s) => {
      s.tile = null, s.elevationTile = null;
    }), n;
  }
  async _createGeometryDescriptor(e, t, i) {
    let n;
    const s = e.layer.tileInfo.spatialReference;
    if (t instanceof x ? n = await t.project(s, i) : (await I([{ source: t.spatialReference, dest: s }], { signal: i }), n = $(t, s)), !n) throw new d("elevation-query:spatial-reference-mismatch", `Cannot query elevation in '${t.spatialReference.wkid}' on an elevation service in '${s.wkid}'`);
    e.geometry = x.fromGeometry(n);
  }
  async _selectTiles(e, t) {
    e.type === "geometry" && this._preselectOutsideLayerExtent(e);
    const i = e.options.demResolution;
    if (typeof i == "number") this._selectTilesClosestResolution(e, i);
    else if (i === "finest-contiguous") await this._selectTilesFinestContiguous(e, t);
    else {
      if (i !== "auto") throw new d("elevation-query:invalid-dem-resolution", `Invalid dem resolution value '${i}', expected a number, "finest-contiguous" or "auto"`);
      await this._selectTilesAuto(e, t);
    }
  }
  _preselectOutsideLayerExtent(e) {
    if (e.layer.fullExtent == null) return;
    const t = new Z(null);
    t.sample = () => e.options.noDataValue, e.outsideExtentTile = t;
    const i = e.layer.fullExtent;
    e.geometry.coordinates.forEach((n) => {
      const s = n.x, l = n.y;
      (s < i.xmin || s > i.xmax || l < i.ymin || l > i.ymax) && (n.elevationTile = t);
    });
  }
  _selectTilesClosestResolution(e, t) {
    const i = this._findNearestDemResolutionLODIndex(e, t);
    e.selectTilesAtLOD(i);
  }
  _findNearestDemResolutionLODIndex(e, t) {
    const { tileInfo: i, tilemapCache: n } = e.layer, s = t / g(i.spatialReference), l = v(i, n);
    let o = l[0], a = 0;
    for (let r = 1; r < l.length; r++) {
      const u = l[r];
      Math.abs(u.resolution - s) < Math.abs(o.resolution - s) && (o = u, a = r);
    }
    return a;
  }
  async _selectTilesFinestContiguous(e, t) {
    const { tileInfo: i, tilemapCache: n } = e.layer, s = j(i, n, e.options.minDemResolution);
    await this._selectTilesFinestContiguousAt(e, s, t);
  }
  async _selectTilesFinestContiguousAt(e, t, i) {
    const n = e.layer;
    if (e.selectTilesAtLOD(t), t < 0) return;
    const s = n.tilemapCache, l = e.getTilesToFetch();
    try {
      if (s && !C(s)) await D(Promise.all(l.map((o) => s.fetchAvailability(o.level, o.row, o.col, { signal: i }))), i);
      else if (await this._populateElevationTiles(e, i), !e.allElevationTilesFetched()) throw e.clearElevationTiles(), new d("elevation-query:has-unavailable-tiles");
    } catch (o) {
      O(o), await this._selectTilesFinestContiguousAt(e, t - 1, i);
    }
  }
  async _populateElevationTiles(e, t) {
    const i = e.getTilesToFetch(), n = {}, s = e.options.cache, l = e.options.noDataValue, o = i.map(async (a) => {
      if (a.id == null) return;
      const r = `${e.layer.uid}:${a.id}:${l}`, u = s != null ? s.get(r) : null, m = u ?? await e.layer.fetchTile(a.level, a.row, a.col, { noDataValue: l, signal: t });
      s?.put(r, m), n[a.id] = new Z(a, m);
    });
    await D(Promise.allSettled(o), t), e.populateElevationTiles(n);
  }
  async _selectTilesAuto(e, t) {
    this._selectTilesAutoFinest(e), this._reduceTilesForMaximumRequests(e);
    const i = e.layer.tilemapCache;
    if (!i || C(i)) return this._selectTilesAutoPrefetchUpsample(e, t);
    const n = e.getTilesToFetch(), s = {}, l = n.map(async (o) => {
      const a = new Q(null, 0, 0, 0, W()), r = await ie(i.fetchAvailabilityUpsample(o.level, o.row, o.col, a, { signal: t }));
      r.ok !== !1 ? o.id != null && (s[o.id] = a) : O(r.error);
    });
    await D(Promise.all(l), t), e.remapTiles(s);
  }
  _reduceTilesForMaximumRequests(e) {
    const t = e.layer.tileInfo;
    let i = 0;
    const n = {}, s = (a) => {
      a.id != null && (a.id in n ? n[a.id]++ : (n[a.id] = 1, i++));
    }, l = (a) => {
      if (a.id == null) return;
      const r = n[a.id];
      r === 1 ? (delete n[a.id], i--) : n[a.id] = r - 1;
    };
    e.forEachTileToFetch(s, l);
    let o = !0;
    for (; o && (o = !1, e.forEachTileToFetch((a) => {
      i <= e.options.maximumAutoTileRequests || (l(a), t.upsampleTile(a) && (o = !0), s(a));
    }, l), o); ) ;
  }
  _selectTilesAutoFinest(e) {
    const { tileInfo: t, tilemapCache: i } = e.layer, n = j(t, i, e.options.minDemResolution);
    e.selectTilesAtLOD(n, e.options.maximumAutoTileRequests);
  }
  async _selectTilesAutoPrefetchUpsample(e, t) {
    const i = e.layer.tileInfo;
    await this._populateElevationTiles(e, t);
    let n = !1;
    e.forEachTileToFetch((s, l) => {
      i.upsampleTile(s) ? n = !0 : l();
    }), n && await this._selectTilesAutoPrefetchUpsample(e, t);
  }
  _sampleGeometryWithElevation(e) {
    e.geometry.coordinates.forEach((t) => {
      const i = t.elevationTile;
      let n = e.options.noDataValue;
      if (i) {
        const s = i.sample(t.x, t.y);
        s != null ? n = s : t.elevationTile = null;
      }
      t.z = n;
    });
  }
  _extractSampleInfo(e) {
    const t = e.layer.tileInfo, i = g(t.spatialReference);
    return e.geometry.coordinates.map((n) => {
      let s = -1;
      return n.elevationTile && n.elevationTile !== e.outsideExtentTile && (s = t.lodAt(n.elevationTile.tile.level).resolution * i), { demResolution: s };
    });
  }
}
class x {
  export() {
    return this._exporter(this.coordinates, this.spatialReference);
  }
  clone(e) {
    const t = new x();
    return t.geometry = this.geometry, t.spatialReference = this.spatialReference, t.coordinates = e || this.coordinates.map((i) => i.clone()), t._exporter = this._exporter, t;
  }
  async project(e, t) {
    if (this.spatialReference.equals(e)) return this.clone();
    await I([{ source: this.spatialReference, dest: e }], { signal: t });
    const i = new A({ spatialReference: this.spatialReference, points: this.coordinates.map((o) => [o.x, o.y]) }), n = $(i, e);
    if (!n) return null;
    const s = this.coordinates.map((o, a) => {
      const r = o.clone(), u = n.points[a];
      return r.x = u[0], r.y = u[1], r;
    }), l = this.clone(s);
    return l.spatialReference = e, l;
  }
  static fromGeometry(e) {
    const t = new x();
    if (t.geometry = e, t.spatialReference = e.spatialReference, e instanceof x) t.coordinates = e.coordinates.map((i) => i.clone()), t._exporter = (i, n) => {
      const s = e.clone(i);
      return s.spatialReference = n, s;
    };
    else switch (e.type) {
      case "point": {
        const i = e, { hasZ: n, hasM: s } = i;
        t.coordinates = n && s ? [new f(i.x, i.y, i.z, i.m)] : n ? [new f(i.x, i.y, i.z)] : s ? [new f(i.x, i.y, null, i.m)] : [new f(i.x, i.y)], t._exporter = (l, o) => e.hasM ? new q(l[0].x, l[0].y, l[0].z, l[0].m, o) : new q(l[0].x, l[0].y, l[0].z, o);
        break;
      }
      case "multipoint": {
        const i = e, { hasZ: n, hasM: s } = i;
        t.coordinates = n && s ? i.points.map((l) => new f(l[0], l[1], l[2], l[3])) : n ? i.points.map((l) => new f(l[0], l[1], l[2])) : s ? i.points.map((l) => new f(l[0], l[1], null, l[2])) : i.points.map((l) => new f(l[0], l[1])), t._exporter = (l, o) => e.hasM ? new A({ points: l.map((a) => [a.x, a.y, a.z, a.m]), hasZ: !0, hasM: !0, spatialReference: o }) : new A(l.map((a) => [a.x, a.y, a.z]), o);
        break;
      }
      case "polyline": {
        const i = e, n = [], s = [], { hasZ: l, hasM: o } = e;
        let a = 0;
        for (const r of i.paths) if (s.push([a, a + r.length]), a += r.length, l && o) for (const u of r) n.push(new f(u[0], u[1], u[2], u[3]));
        else if (l) for (const u of r) n.push(new f(u[0], u[1], u[2]));
        else if (o) for (const u of r) n.push(new f(u[0], u[1], null, u[2]));
        else for (const u of r) n.push(new f(u[0], u[1]));
        t.coordinates = n, t._exporter = (r, u) => {
          const m = e.hasM ? r.map((h) => [h.x, h.y, h.z, h.m]) : r.map((h) => [h.x, h.y, h.z]), p = s.map((h) => m.slice(h[0], h[1]));
          return new ne({ paths: p, hasM: e.hasM, hasZ: !0, spatialReference: u });
        };
        break;
      }
    }
    return t;
  }
}
class f {
  constructor(e, t, i = null, n = null, s = null, l = null) {
    this.x = e, this.y = t, this.z = i, this.m = n, this.tile = s, this.elevationTile = l;
  }
  clone() {
    return new f(this.x, this.y, this.z, this.m);
  }
}
class J {
  constructor(e, t) {
    this.layer = e, this.options = t;
  }
}
class ue extends J {
  constructor(e, t, i) {
    super(e, i), this.outSpatialReference = t, this.type = "geometry";
  }
  selectTilesAtLOD(e) {
    if (e < 0) this.geometry.coordinates.forEach((t) => t.tile = null);
    else {
      const { tileInfo: t, tilemapCache: i } = this.layer, n = v(t, i)[e].level;
      this.geometry.coordinates.forEach((s) => s.tile = t.tileAt(n, s.x, s.y));
    }
  }
  allElevationTilesFetched() {
    return !this.geometry.coordinates.some((e) => !e.elevationTile);
  }
  clearElevationTiles() {
    for (const e of this.geometry.coordinates) e.elevationTile !== this.outsideExtentTile && (e.elevationTile = null);
  }
  populateElevationTiles(e) {
    for (const t of this.geometry.coordinates) !t.elevationTile && t.tile?.id && (t.elevationTile = e[t.tile.id]);
  }
  remapTiles(e) {
    for (const t of this.geometry.coordinates) {
      const i = t.tile?.id;
      t.tile = i ? e[i] : null;
    }
  }
  getTilesToFetch() {
    const e = {}, t = [];
    for (const i of this.geometry.coordinates) {
      const n = i.tile;
      if (!n) continue;
      const s = i.tile?.id;
      i.elevationTile || !s || e[s] || (e[s] = n, t.push(n));
    }
    return t;
  }
  forEachTileToFetch(e) {
    for (const t of this.geometry.coordinates) t.tile && !t.elevationTile && e(t.tile, () => {
      t.tile = null;
    });
  }
}
class he extends J {
  constructor(e, t, i, n) {
    super(e, i), this.type = "extent", this.elevationTiles = [], this._candidateTiles = [], this._fetchedCandidates = /* @__PURE__ */ new Set(), this.extent = t.clone().intersection(e.fullExtent), this.maskExtents = n;
  }
  selectTilesAtLOD(e, t) {
    const i = this._maximumLodForRequests(t), n = Math.min(i, e);
    n < 0 ? this._candidateTiles.length = 0 : this._selectCandidateTilesCoveringExtentAt(n);
  }
  _maximumLodForRequests(e) {
    const { tileInfo: t, tilemapCache: i } = this.layer, n = v(t, i);
    if (!e) return n.length - 1;
    const s = this.extent;
    if (s == null) return -1;
    for (let l = n.length - 1; l >= 0; l--) {
      const o = n[l], a = o.resolution * t.size[0], r = o.resolution * t.size[1];
      if (Math.ceil(s.width / a) * Math.ceil(s.height / r) <= e) return l;
    }
    return -1;
  }
  allElevationTilesFetched() {
    return this._candidateTiles.length === this.elevationTiles.length;
  }
  clearElevationTiles() {
    this.elevationTiles.length = 0, this._fetchedCandidates.clear();
  }
  populateElevationTiles(e) {
    for (const t of this._candidateTiles) {
      const i = t.id && e[t.id];
      i && (this._fetchedCandidates.add(t), this.elevationTiles.push(i));
    }
  }
  remapTiles(e) {
    this._candidateTiles = this._uniqueNonOverlappingTiles(this._candidateTiles.map((t) => e[t.id]));
  }
  getTilesToFetch() {
    return this._candidateTiles;
  }
  forEachTileToFetch(e, t) {
    const i = this._candidateTiles;
    this._candidateTiles = [], i.forEach((n) => {
      if (this._fetchedCandidates.has(n)) return void (t && t(n));
      let s = !1;
      e(n, () => s = !0), s ? t && t(n) : this._candidateTiles.push(n);
    }), this._candidateTiles = this._uniqueNonOverlappingTiles(this._candidateTiles, t);
  }
  _uniqueNonOverlappingTiles(e, t) {
    const i = {}, n = [];
    for (const l of e) {
      const o = l.id;
      o && !i[o] ? (i[o] = l, n.push(l)) : t && t(l);
    }
    const s = n.sort((l, o) => l.level - o.level);
    return s.filter((l, o) => {
      for (let a = 0; a < o; a++) {
        const r = s[a].extent;
        if (r && l.extent && G(r, l.extent)) return t && t(l), !1;
      }
      return !0;
    });
  }
  _selectCandidateTilesCoveringExtentAt(e) {
    this._candidateTiles.length = 0;
    const t = this.extent;
    if (t == null) return;
    const { tileInfo: i, tilemapCache: n } = this.layer, s = v(i, n)[e], l = i.tileAt(s.level, t.xmin, t.ymin), o = l.extent;
    if (o == null) return;
    const a = s.resolution * i.size[0], r = s.resolution * i.size[1], u = Math.ceil((t.xmax - o[0]) / a), m = Math.ceil((t.ymax - o[1]) / r);
    for (let p = 0; p < m; p++) for (let h = 0; h < u; h++) {
      const T = new Q(null, l.level, l.row - p, l.col + h);
      i.updateTileInfo(T), this._tileIsMasked(T) || this._candidateTiles.push(T);
    }
  }
  _tileIsMasked(e) {
    return !!this.maskExtents && this.maskExtents.some((t) => e.extent && G(t, e.extent));
  }
}
function j(c, e, t = 0) {
  const i = v(c, e);
  let n = i.length - 1;
  if (t > 0) {
    const s = t / g(c.spatialReference), l = i.findIndex((o) => o.resolution < s);
    l === 0 ? n = 0 : l > 0 && (n = l - 1);
  }
  return n;
}
const w = { maximumAutoTileRequests: 20, noDataValue: 0, returnSampleInfo: !1, demResolution: "auto", minDemResolution: 0 };
function v(c, e) {
  const t = c.lods;
  if (C(e)) {
    const { effectiveMinLOD: i, effectiveMaxLOD: n } = e;
    return t.filter((s) => s.level >= i && s.level <= n);
  }
  return t;
}
function C(c) {
  return c?.tileInfo != null;
}
export {
  fe as ElevationQuery,
  x as GeometryDescriptor,
  j as getFinestLodIndex
};
//# sourceMappingURL=ElevationQuery-CvaxZJVc.js.map
