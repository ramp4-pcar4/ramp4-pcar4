import { n as s, h as a } from "./WGLContainer-Dtu9wLrk.js";
import { E as t } from "./Container-B1L9L638.js";
class h extends s {
  constructor() {
    super(...arguments), this._hasCrossfade = !1;
  }
  get requiresDedicatedFBO() {
    return super.requiresDedicatedFBO || this._hasCrossfade;
  }
  beforeRender(e) {
    super.beforeRender(e), this._manageFade();
  }
  prepareRenderPasses(e) {
    const r = e.registerRenderPass({ name: "bitmap", brushes: [a.bitmap], target: () => this.children, drawPhase: t.MAP });
    return [...super.prepareRenderPasses(e), r];
  }
  _manageFade() {
    this.children.reduce((e, r) => e + (r.inFadeTransition ? 1 : 0), 0) >= 2 ? (this.children.forEach((e) => e.blendFunction = "additive"), this._hasCrossfade = !0) : (this.children.forEach((e) => e.blendFunction = "standard"), this._hasCrossfade = !1);
  }
}
export {
  h as a
};
//# sourceMappingURL=BitmapContainer-BBAXKGnn.js.map
