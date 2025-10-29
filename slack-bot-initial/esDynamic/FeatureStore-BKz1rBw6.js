import { bl as u, cR as f, b6 as l, cS as m, C as a, s as n, cT as d, az as h } from "./main-3gzXighg.js";
import { o as g } from "./BoundsStore-PKMt2Ge3.js";
import { h as _ } from "./timeSupport-BSCelxJA.js";
import { o as y } from "./QueryEngine-D4an6-QA.js";
const c = u();
class S {
  constructor(e) {
    this.geometryInfo = e, this._boundsStore = new g(), this._featuresById = /* @__PURE__ */ new Map(), this._markedIds = /* @__PURE__ */ new Set(), this.events = new f(), this.featureAdapter = y;
  }
  get geometryType() {
    return this.geometryInfo.geometryType;
  }
  get hasM() {
    return this.geometryInfo.hasM;
  }
  get hasZ() {
    return this.geometryInfo.hasZ;
  }
  get numFeatures() {
    return this._featuresById.size;
  }
  get fullBounds() {
    return this._boundsStore.fullBounds;
  }
  get storeStatistics() {
    let e = 0;
    return this._featuresById.forEach((t) => {
      t.geometry != null && t.geometry.coords && (e += t.geometry.coords.length);
    }), { featureCount: this._featuresById.size, vertexCount: e / (this.hasZ ? this.hasM ? 4 : 3 : this.hasM ? 3 : 2) };
  }
  getFullExtent(e) {
    if (this.fullBounds == null) return null;
    const [t, s, r, o] = this.fullBounds;
    return { xmin: t, ymin: s, xmax: r, ymax: o, spatialReference: _(e) };
  }
  add(e) {
    this._add(e), this._emitChanged();
  }
  addMany(e) {
    for (const t of e) this._add(t);
    this._emitChanged();
  }
  upsertMany(e) {
    const t = e.map((s) => this._upsert(s));
    return this._emitChanged(), t.filter(l);
  }
  clear() {
    this._featuresById.clear(), this._boundsStore.clear(), this._emitChanged();
  }
  removeById(e) {
    const t = this._featuresById.get(e);
    return t ? (this._remove(t), this._emitChanged(), t) : null;
  }
  removeManyById(e) {
    this._boundsStore.invalidateIndex();
    for (const t of e) {
      const s = this._featuresById.get(t);
      s && this._remove(s);
    }
    this._emitChanged();
  }
  forEachBounds(e, t) {
    for (const s of e) {
      const r = this._boundsStore.get(s.objectId);
      r && t(m(c, r));
    }
  }
  getFeature(e) {
    return this._featuresById.get(e);
  }
  has(e) {
    return this._featuresById.has(e);
  }
  forEach(e) {
    this._featuresById.forEach((t) => e(t));
  }
  forEachInBounds(e, t) {
    this._boundsStore.forEachInBounds(e, (s) => {
      t(this._featuresById.get(s));
    });
  }
  startMarkingUsedFeatures() {
    this._boundsStore.invalidateIndex(), this._markedIds.clear();
  }
  sweep() {
    let e = !1;
    this._featuresById.forEach((t, s) => {
      this._markedIds.has(s) || (e = !0, this._remove(t));
    }), this._markedIds.clear(), e && this._emitChanged();
  }
  _emitChanged() {
    this.events.emit("changed", void 0);
  }
  _add(e) {
    if (!e) return;
    const t = e.objectId;
    if (t == null) return void a.getLogger("esri.layers.graphics.data.FeatureStore").error(new n("featurestore:invalid-feature", "feature id is missing", { feature: e }));
    const s = this._featuresById.get(t);
    let r;
    if (this._markedIds.add(t), s ? (e.displayId = s.displayId, r = this._boundsStore.get(t), this._boundsStore.delete(t)) : this.onFeatureAdd != null && this.onFeatureAdd(e), !e.geometry?.coords?.length) return this._boundsStore.set(t, null), void this._featuresById.set(t, e);
    r = d(r ?? h(), e.geometry, this.geometryInfo.hasZ, this.geometryInfo.hasM), r != null && this._boundsStore.set(t, r), this._featuresById.set(t, e);
  }
  _upsert(e) {
    const t = e?.objectId;
    if (t == null) return a.getLogger("esri.layers.graphics.data.FeatureStore").error(new n("featurestore:invalid-feature", "feature id is missing", { feature: e })), null;
    const s = this._featuresById.get(t);
    if (!s) return this._add(e), e;
    this._markedIds.add(t);
    const { geometry: r, attributes: o } = e;
    for (const i in o) s.attributes[i] = o[i];
    return r && (s.geometry = r, this._boundsStore.set(t, d(h(), r, this.geometryInfo.hasZ, this.geometryInfo.hasM) ?? null)), s;
  }
  _remove(e) {
    this.onFeatureRemove != null && this.onFeatureRemove(e);
    const t = e.objectId;
    return this._markedIds.delete(t), this._boundsStore.delete(t), this._featuresById.delete(t), e;
  }
}
export {
  S as m
};
//# sourceMappingURL=FeatureStore-BKz1rBw6.js.map
