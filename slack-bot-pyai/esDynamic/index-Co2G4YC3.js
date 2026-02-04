import { a as r } from "./fabric-Du3FQpvO.js";
import { bx as f, by as s } from "./main-DhLeoxL5.js";
class g extends f {
  get config() {
    return this.$iApi.fixture.get("export").config?.footnote;
  }
  make(t) {
    const e = this.config, o = {
      text: "RAMP-PCAR",
      fontFamily: "Montserrat, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif",
      fill: "#000",
      fontSize: 20,
      top: 0
    };
    e?.value !== void 0 && (o.text = e.value);
    const i = s(o, t || {}), n = new r.fabric.Textbox(i.text, i);
    return Promise.resolve(n);
  }
}
export {
  g as default
};
//# sourceMappingURL=index-Co2G4YC3.js.map
