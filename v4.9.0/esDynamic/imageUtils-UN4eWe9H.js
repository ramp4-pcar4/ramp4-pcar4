import { fg as m, az as M, N as V, P as y } from "./main-DIdq27YS.js";
import { b as I } from "./Bitmap-Dod9T4ud.js";
import { r as T, h as _ } from "./WGLContainer-D2JrX9Hh.js";
import { E as c } from "./Container-LRIpaeSJ.js";
import { i as P } from "./TileContainer-BApmx8zG.js";
let A = class extends T {
  constructor(e, i, r, s, n, o, a = null) {
    super(e, i, r, s, n, o), this.bitmap = new I(a), this.bitmap.coordScale = [n, o], this.bitmap.once("isReady", () => this.ready());
  }
  destroy() {
    super.destroy(), this.bitmap.destroy();
  }
  beforeRender(e) {
    this.bitmap.beforeRender(e), super.beforeRender(e);
  }
  afterRender(e) {
    this.bitmap.afterRender(e), super.afterRender(e);
  }
  set stencilRef(e) {
    this.bitmap.stencilRef = e;
  }
  get stencilRef() {
    return this.bitmap.stencilRef;
  }
  _createTransforms() {
    return { displayViewScreenMat3: m(), tileMat3: m() };
  }
  setTransform(e) {
    super.setTransform(e), this.bitmap.transforms.displayViewScreenMat3 = this.transforms.displayViewScreenMat3;
  }
  onAttach() {
    this.bitmap.stage = this.stage;
  }
  onDetach() {
    this.bitmap && (this.bitmap.stage = null);
  }
}, F = class extends P {
  get requiresDedicatedFBO() {
    return this.children.some((e) => e.bitmap.blendFunction === "additive");
  }
  createTile(e) {
    const i = this._tileInfoView.getTileBounds(M(), e), r = this._tileInfoView.getTileResolution(e.level), [s, n] = this._tileInfoView.tileInfo.size;
    return new A(e, r, i[0], i[3], s, n);
  }
  prepareRenderPasses(e) {
    const i = e.registerRenderPass({ name: "bitmap (tile)", brushes: [_.bitmap], target: () => this.children.map((r) => r.bitmap), drawPhase: c.MAP });
    return [...super.prepareRenderPasses(e), i];
  }
  doRender(e) {
    this.visible && e.drawPhase === c.MAP && super.doRender(e);
  }
};
const O = (t) => {
  let e = class extends t {
    attach() {
      this.view.timeline.record(`${this.layer.title} (BitmapTileLayer) Attach`), this._bitmapView = new F(this._tileInfoView), this.container.addChild(this._bitmapView);
    }
    detach() {
      this.container.removeChild(this._bitmapView), this._bitmapView?.removeAllChildren(), this._bitmapView = null;
    }
  };
  return e = V([y("esri.views.2d.layers.BitmapTileLayerView2D")], e), e;
};
function L(t) {
  return t instanceof HTMLImageElement ? t.naturalWidth : t.width;
}
function $(t) {
  return t instanceof HTMLImageElement ? t.naturalHeight : t.height;
}
function X(t, e, i, r) {
  if (i.level === r.level) return e;
  const s = t.tileInfo.size, n = t.getTileResolution(i.level), o = t.getTileResolution(r.level);
  let a = t.getLODInfoAt(r.level);
  const p = a.getXForColumn(r.col), u = a.getYForRow(r.row);
  a = t.getLODInfoAt(i.level);
  const f = a.getXForColumn(i.col), b = a.getYForRow(i.row), l = L(e) / s[0], h = $(e) / s[1], w = Math.round(l * ((p - f) / n)), g = Math.round(h * (-(u - b) / n)), R = Math.round(l * s[0] * (o / n)), v = Math.round(h * s[1] * (o / n)), d = C(s);
  return d.getContext("2d").drawImage(e, w, g, R, v, 0, 0, s[0], s[1]), d;
}
function C(t) {
  const e = document.createElement("canvas");
  return [e.width, e.height] = t, e;
}
export {
  X as n,
  C as o,
  O as r
};
//# sourceMappingURL=imageUtils-UN4eWe9H.js.map
