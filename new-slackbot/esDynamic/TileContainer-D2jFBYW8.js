import { af as l } from "./main-BpIyUAdL.js";
import { E as n } from "./Container-CTNRgS-d.js";
import { n as i, _ as a, y as o } from "./WGLContainer-Bk5jGrnu.js";
const c = (s, e) => s.key.level - e.key.level != 0 ? s.key.level - e.key.level : s.key.row - e.key.row != 0 ? s.key.row - e.key.row : s.key.col - e.key.col;
class p extends i {
  constructor(e) {
    super(), this._tileInfoView = e;
  }
  renderChildren(e) {
    this.sortChildren(c), this.setStencilReference(e), super.renderChildren(e);
  }
  createRenderParams(e) {
    const { state: r } = e, t = super.createRenderParams(e);
    return t.requiredLevel = this._tileInfoView.getClosestInfoForScale(r.scale).level, t.displayLevel = this._tileInfoView.tileInfo.scaleToZoom(r.scale), t;
  }
  prepareRenderPasses(e) {
    const r = super.prepareRenderPasses(e);
    return r.push(e.registerRenderPass({ name: "stencil", brushes: [a], drawPhase: n.DEBUG | n.MAP | n.HIGHLIGHT | n.LABEL, target: () => this.getStencilTarget() })), l("esri-tiles-debug") && r.push(e.registerRenderPass({ name: "tileInfo", brushes: [o], drawPhase: n.DEBUG, target: () => this.children })), r;
  }
  getStencilTarget() {
    return this.children;
  }
  setStencilReference(e) {
    let r = 1;
    for (const t of this.children) t.stencilRef = r++;
  }
}
export {
  p as i
};
//# sourceMappingURL=TileContainer-D2jFBYW8.js.map
