import { l as r } from "./highlightReasons-ByJQwf6T.js";
class l {
  constructor() {
    this._idToCounters = /* @__PURE__ */ new Map();
  }
  get empty() {
    return this._idToCounters.size === 0;
  }
  addReason(s, t) {
    for (const o of s) {
      let e = this._idToCounters.get(o);
      e || (e = /* @__PURE__ */ new Map(), this._idToCounters.set(o, e)), e.set(t, (e.get(t) || 0) + 1);
    }
  }
  deleteReason(s, t) {
    for (const o of s) {
      const e = this._idToCounters.get(o);
      if (!e) continue;
      let n = e.get(t);
      if (n == null) return;
      n--, n > 0 ? e.set(t, n) : e.delete(t), e.size === 0 && this._idToCounters.delete(o);
    }
  }
  getHighestReason(s) {
    const t = this._idToCounters.get(s);
    if (!t) return null;
    let o = null;
    for (const e of r) t.get(e) && (o = e);
    return o || null;
  }
  ids() {
    return this._idToCounters.keys();
  }
}
export {
  l as t
};
//# sourceMappingURL=HighlightCounter-CjYBuZAO.js.map
