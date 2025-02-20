import { N as t, O as e, P as o, b_ as h, a6 as G, aS as w, dU as g } from "./main-DIdq27YS.js";
let a = class extends h {
  constructor(s) {
    super(s), this.properties = null;
  }
};
t([e({ json: { write: !0 } })], a.prototype, "properties", void 0), a = t([o("esri.rest.knowledgeGraph.GraphObject")], a);
const c = a;
let i = class extends c {
  constructor(s) {
    super(s), this.typeName = null, this.id = null;
  }
};
t([e({ type: String, json: { write: !0 } })], i.prototype, "typeName", void 0), t([e({ type: String, json: { write: !0 } })], i.prototype, "id", void 0), i = t([o("esri.rest.knowledgeGraph.GraphNamedObject")], i);
const m = i;
let l = class extends m {
  constructor(s) {
    super(s), this.layoutGeometry = null;
  }
};
t([e({ type: G, json: { write: !0 } })], l.prototype, "layoutGeometry", void 0), l = t([o("esri.rest.knowledgeGraph.Entity")], l);
const b = l;
let n = class extends m {
  constructor(r) {
    super(r), this.originId = null, this.destinationId = null, this.layoutGeometry = null;
  }
};
t([e({ type: String, json: { write: !0 } })], n.prototype, "originId", void 0), t([e({ type: String, json: { write: !0 } })], n.prototype, "destinationId", void 0), t([e({ type: w, json: { write: !0 } })], n.prototype, "layoutGeometry", void 0), n = t([o("esri.rest.Relationship.Relationship")], n);
const P = n;
let y = class extends c {
  constructor(r) {
    super(r);
  }
};
y = t([o("esri.rest.knowledgeGraph.ObjectValue")], y);
const Q = y;
let u = class extends h {
  constructor(s) {
    super(s), this.path = null;
  }
};
t([e({ type: [c], json: { write: !0 } })], u.prototype, "path", void 0), u = t([o("esri.rest.knowledgeGraph.Path")], u);
const f = u;
let d = class extends g {
  constructor(r) {
    super(r), this.openCypherQuery = "";
  }
};
t([e()], d.prototype, "openCypherQuery", void 0), d = t([o("esri.rest.knowledgeGraph.GraphQuery")], d);
const v = d;
let p = class extends v {
  constructor(r) {
    super(r), this.bindParameters = null, this.bindGeometryQuantizationParameters = null, this.outputQuantizationParameters = null, this.outputSpatialReference = null;
  }
};
t([e()], p.prototype, "bindParameters", void 0), t([e()], p.prototype, "bindGeometryQuantizationParameters", void 0), t([e()], p.prototype, "outputQuantizationParameters", void 0), t([e()], p.prototype, "outputSpatialReference", void 0), p = t([o("esri.rest.knowledgeGraph.GraphQueryStreaming")], p);
const z = p;
export {
  z as a,
  f as c,
  b as m,
  P as p,
  Q as t
};
//# sourceMappingURL=GraphQueryStreaming-BgiYd5iK.js.map
