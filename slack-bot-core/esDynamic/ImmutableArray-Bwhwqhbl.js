class r {
  constructor(t = []) {
    this._elements = t;
  }
  length() {
    return this._elements.length;
  }
  get(t) {
    return this._elements[t];
  }
  toArray() {
    const t = [];
    for (let e = 0; e < this.length(); e++) t.push(this.get(e));
    return t;
  }
}
export {
  r as t
};
//# sourceMappingURL=ImmutableArray-Bwhwqhbl.js.map
