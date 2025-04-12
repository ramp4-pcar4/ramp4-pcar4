class u {
  constructor() {
    this._outer = /* @__PURE__ */ new Map();
  }
  clear() {
    this._outer.clear();
  }
  get empty() {
    return this._outer.size === 0;
  }
  get(t, e) {
    return this._outer.get(t)?.get(e);
  }
  set(t, e, r) {
    const s = this._outer.get(t);
    s ? s.set(e, r) : this._outer.set(t, /* @__PURE__ */ new Map([[e, r]]));
  }
  delete(t, e) {
    const r = this._outer.get(t);
    r && (r.delete(e), r.size === 0 && this._outer.delete(t));
  }
  forEach(t) {
    this._outer.forEach((e, r) => t(e, r));
  }
}
export {
  u as t
};
//# sourceMappingURL=NestedMap-CJlcHrNH.js.map
