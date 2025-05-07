import { dR as n, dS as r, dT as l, b6 as o, N as s, O as i, P as p, dU as d } from "./main-DIdq27YS.js";
let c = 0, t = class extends n(r(l(d))) {
  constructor(a) {
    super(a), this.id = `${Date.now().toString(16)}-analysis-${c++}`, this.title = null;
  }
  get parent() {
    return this._get("parent");
  }
  set parent(a) {
    const e = this.parent;
    if (e != null) switch (e.type) {
      case "line-of-sight":
      case "dimension":
        e.releaseAnalysis(this);
        break;
      case "2d":
      case "3d":
        e.analyses.includes(this) && e.analyses.remove(this);
    }
    this._set("parent", a);
  }
  get isEditable() {
    return this.requiredPropertiesForEditing.every(o);
  }
};
s([i({ type: String, constructOnly: !0, clonable: !1 })], t.prototype, "id", void 0), s([i({ type: String })], t.prototype, "title", void 0), s([i({ clonable: !1, value: null })], t.prototype, "parent", null), s([i({ readOnly: !0 })], t.prototype, "isEditable", null), t = s([p("esri.analysis.Analysis")], t);
const u = t;
export {
  u as c
};
//# sourceMappingURL=Analysis-B5YFSHA2.js.map
