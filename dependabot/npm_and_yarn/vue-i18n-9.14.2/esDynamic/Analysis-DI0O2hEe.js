import { e0 as n, bW as r, e1 as l, bm as o, O as s, P as i, Q as p, e2 as y } from "./main-uCo5F72j.js";
let c = 0, e = class extends n(r(l(y))) {
  constructor(a) {
    super(a), this.id = `${Date.now().toString(16)}-analysis-${c++}`, this.title = null;
  }
  get parent() {
    return this._get("parent");
  }
  set parent(a) {
    const t = this.parent;
    if (t != null) switch (t.type) {
      case "line-of-sight":
      case "dimension":
        t.releaseAnalysis(this);
        break;
      case "2d":
      case "3d":
        t.analyses.includes(this) && t.analyses.remove(this);
    }
    this._set("parent", a);
  }
  get isEditable() {
    return this.requiredPropertiesForEditing.every(o);
  }
};
s([i({ type: String, constructOnly: !0, clonable: !1 })], e.prototype, "id", void 0), s([i({ type: String })], e.prototype, "title", void 0), s([i({ clonable: !1, value: null })], e.prototype, "parent", null), s([i({ readOnly: !0 })], e.prototype, "isEditable", null), e = s([p("esri.analysis.Analysis")], e);
const u = e;
export {
  u as c
};
//# sourceMappingURL=Analysis-DI0O2hEe.js.map
