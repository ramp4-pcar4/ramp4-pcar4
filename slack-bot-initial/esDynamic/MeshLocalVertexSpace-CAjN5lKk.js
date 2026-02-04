import { dS as s, N as e, dN as i, O as n, P as p, b_ as a, ci as c } from "./main-3gzXighg.js";
let o = class extends s(a) {
  constructor(t) {
    super(t), this.type = "georeferenced", this.origin = null;
  }
};
e([i({ georeferenced: "georeferenced" }, { readOnly: !0 })], o.prototype, "type", void 0), e([n({ type: [Number], nonNullable: !1, json: { write: !0 } })], o.prototype, "origin", void 0), o = e([p("esri.geometry.support.MeshGeoreferencedVertexSpace")], o);
const y = o;
let r = class extends s(a) {
  constructor(t) {
    super(t), this.type = "local", this.origin = c();
  }
};
e([i({ local: "local" }, { readOnly: !0 })], r.prototype, "type", void 0), e([n({ type: [Number], nonNullable: !0, json: { write: !0 } })], r.prototype, "origin", void 0), r = e([p("esri.geometry.support.MeshLocalVertexSpace")], r);
const d = r;
export {
  d as a,
  y as i
};
//# sourceMappingURL=MeshLocalVertexSpace-CAjN5lKk.js.map
