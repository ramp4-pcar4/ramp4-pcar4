import { N as s, O as r, P as n, b_ as a, b$ as m } from "./main-DIdq27YS.js";
var o;
let e = o = class extends a {
  static from(t) {
    return m(o, t);
  }
  constructor(t) {
    super(t), this.sessionId = void 0, this.moment = null;
  }
};
s([r({ type: String, json: { write: !0 } })], e.prototype, "sessionId", void 0), s([r({ type: Date, json: { type: Number, write: { writer: (t, i) => {
  i.moment = t ? t.getTime() : null;
} } } })], e.prototype, "moment", void 0), e = o = s([n("esri.rest.versionManagement.gdbVersion.support.PostParameters")], e);
const d = e;
export {
  d as default
};
//# sourceMappingURL=DeleteForwardEditsParameters-Bra0AaJi.js.map
