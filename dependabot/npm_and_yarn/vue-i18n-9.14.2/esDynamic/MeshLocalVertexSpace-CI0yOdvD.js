import { bW as s, O as e, dY as i, P as n, Q as p, bX as a, aG as l } from "./main-uCo5F72j.js";
let o = class extends s(a) {
  constructor(t) {
    super(t), this.type = "georeferenced", this.origin = null;
  }
};
e([i({ georeferenced: "georeferenced" }, { readOnly: !0 })], o.prototype, "type", void 0), e([n({ type: [Number], nonNullable: !1, json: { write: !0 } })], o.prototype, "origin", void 0), o = e([p("esri.geometry.support.MeshGeoreferencedVertexSpace")], o);
const y = o;
let r = class extends s(a) {
  constructor(t) {
    super(t), this.type = "local", this.origin = l();
  }
};
e([i({ local: "local" }, { readOnly: !0 })], r.prototype, "type", void 0), e([n({ type: [Number], nonNullable: !0, json: { write: !0 } })], r.prototype, "origin", void 0), r = e([p("esri.geometry.support.MeshLocalVertexSpace")], r);
const d = r;
export {
  d as a,
  y as i
};
//# sourceMappingURL=MeshLocalVertexSpace-CI0yOdvD.js.map
