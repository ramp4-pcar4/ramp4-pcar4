import { N as e, O as t, P as d, b_ as b, eK as R, eJ as S, aU as $, aR as P, V as O, bq as q, aw as A, s as U, U as l, go as p, b2 as _, jO as j, dT as V, jP as x, cR as I, dU as C, jQ as H, C as N, b5 as L } from "./main-DIdq27YS.js";
import { h as M } from "./Container-LRIpaeSJ.js";
let c = class extends b {
  get version() {
    return this.commitVersionProperties(), (this._get("version") || 0) + 1;
  }
};
e([t({ readOnly: !0 })], c.prototype, "version", null), c = e([d("esri.views.layers.support.ClipArea")], c);
const w = c;
var m;
let h = m = class extends w {
  constructor(r) {
    super(r), this.type = "rect", this.left = null, this.right = null, this.top = null, this.bottom = null;
  }
  clone() {
    return new m({ left: this.left, right: this.right, top: this.top, bottom: this.bottom });
  }
  commitVersionProperties() {
    this.commitProperty("left"), this.commitProperty("right"), this.commitProperty("top"), this.commitProperty("bottom");
  }
};
e([t({ type: [Number, String], json: { write: !0 } })], h.prototype, "left", void 0), e([t({ type: [Number, String], json: { write: !0 } })], h.prototype, "right", void 0), e([t({ type: [Number, String], json: { write: !0 } })], h.prototype, "top", void 0), e([t({ type: [Number, String], json: { write: !0 } })], h.prototype, "bottom", void 0), h = m = e([d("esri.views.layers.support.ClipRect")], h);
const T = h;
var f;
const E = { base: S, key: "type", typeMap: { extent: $, polygon: P } };
let y = f = class extends w {
  constructor(r) {
    super(r), this.type = "geometry", this.geometry = null;
  }
  clone() {
    return new f({ geometry: this.geometry?.clone() ?? null });
  }
  commitVersionProperties() {
    this.commitProperty("geometry");
  }
};
e([t({ types: E, json: { read: R, write: !0 } })], y.prototype, "geometry", void 0), y = f = e([d("esri.views.layers.support.Geometry")], y);
const k = y;
let g = class extends w {
  constructor(r) {
    super(r), this.type = "path", this.path = [];
  }
  commitVersionProperties() {
    this.commitProperty("path");
  }
};
e([t({ type: [[[Number]]], json: { write: !0 } })], g.prototype, "path", void 0), g = e([d("esri.views.layers.support.Path")], g);
const D = g, v = O.ofType({ key: "type", base: null, typeMap: { rect: T, path: D, geometry: k } }), B = (r) => {
  let a = class extends r {
    constructor() {
      super(...arguments), this.attached = !1, this.clips = new v(), this.lastUpdateId = -1, this.moving = !1, this.updateRequested = !1, this.visibleAtCurrentScale = !1, this.highlightOptions = null;
    }
    initialize() {
      const s = this.view?.spatialReferenceLocked ?? !0;
      this.view?.spatialReference && s && !this.spatialReferenceSupported ? this.addResolvingPromise(Promise.reject(new U("layerview:spatial-reference-incompatible", "The spatial reference of this layer does not meet the requirements of the view", { layer: this.layer }))) : (this.container || (this.container = new M()), this.container.fadeTransitionEnabled = !0, this.container.visible = !1, this.container.endTransitions(), this.addHandles([l(() => this.suspended, (i) => {
        this.container && (this.container.visible = !i);
      }, p), l(() => this.updateSuspended, (i) => {
        this.view && !i && this.updateRequested && this.view.requestUpdate();
      }, p), l(() => this.layer?.opacity ?? 1, (i) => {
        this.container && (this.container.opacity = i);
      }, p), l(() => this.layer && "blendMode" in this.layer ? this.layer.blendMode : "normal", (i) => {
        this.container && (this.container.blendMode = i);
      }, p), l(() => this.layer && "effect" in this.layer ? this.layer.effect : null, (i) => {
        this.container && (this.container.effect = i);
      }, p), l(() => this.highlightOptions, (i) => this.container.highlightOptions = i, p), _(() => this.clips, "change", () => {
        this.container && (this.container.clips = this.clips);
      }, p), l(() => ({ scale: this.view?.scale, scaleRange: this.layer && "effectiveScaleRange" in this.layer ? this.layer.effectiveScaleRange : null }), ({ scale: i }) => {
        const u = i != null && this.isVisibleAtScale(i);
        u !== this.visibleAtCurrentScale && this._set("visibleAtCurrentScale", u);
      }, p)], "constructor"), this.view?.whenLayerView ? this.view.whenLayerView(this.layer).then((i) => {
        i === this && this.processAttach();
      }, () => {
      }) : this.when().then(() => {
        this.processAttach();
      }, () => {
      }));
    }
    destroy() {
      this.processDetach(), this.updateRequested = !1;
    }
    get spatialReferenceSupported() {
      const s = this.view?.spatialReference;
      return s == null || this.supportsSpatialReference(s);
    }
    get updateSuspended() {
      return this.suspended;
    }
    get updating() {
      return this.spatialReferenceSupported && (!this.attached || !this.suspended && (this.updateRequested || this.isUpdating()) || !!this._updatingHandles?.updating);
    }
    processAttach() {
      this.isResolved() && !this.attached && !this.destroyed && this.spatialReferenceSupported && (this.attach(), this.attached = !0, this.requestUpdate());
    }
    processDetach() {
      this.attached && (this.attached = !1, this.removeHandles("attach"), this.detach(), this.updateRequested = !1);
    }
    isVisibleAtScale(s) {
      const o = this.layer && "effectiveScaleRange" in this.layer ? this.layer.effectiveScaleRange : null;
      if (!o) return !0;
      const { minScale: i, maxScale: u } = o;
      return j(s, i, u);
    }
    requestUpdate() {
      this.destroyed || this.updateRequested || (this.updateRequested = !0, this.updateSuspended || this.view.requestUpdate());
    }
    processUpdate(s) {
      !this.isFulfilled() || this.isResolved() ? (this._set("updateParameters", s), this.updateRequested && !this.updateSuspended && (this.updateRequested = !1, this.update(s))) : this.updateRequested = !1;
    }
    hitTest(s, o) {
      return Promise.resolve(null);
    }
    supportsSpatialReference(s) {
      return !0;
    }
    canResume() {
      return !!this.spatialReferenceSupported && !!super.canResume() && this.visibleAtCurrentScale;
    }
    getSuspendInfo() {
      const s = super.getSuspendInfo(), o = !this.spatialReferenceSupported, i = this.visibleAtCurrentScale;
      return o && (s.spatialReferenceNotSupported = o), i && (s.outsideScaleRange = i), s;
    }
    addAttachHandles(s) {
      this.addHandles(s, "attach");
    }
  };
  return e([t()], a.prototype, "attached", void 0), e([t({ type: v, set(s) {
    const o = q(s, this._get("clips"), v);
    this._set("clips", o);
  } })], a.prototype, "clips", void 0), e([t()], a.prototype, "container", void 0), e([t()], a.prototype, "moving", void 0), e([t({ readOnly: !0 })], a.prototype, "spatialReferenceSupported", null), e([t({ readOnly: !0 })], a.prototype, "updateParameters", void 0), e([t()], a.prototype, "updateRequested", void 0), e([t()], a.prototype, "updateSuspended", null), e([t()], a.prototype, "updating", null), e([t()], a.prototype, "view", void 0), e([t({ readOnly: !0 })], a.prototype, "visibleAtCurrentScale", void 0), e([t({ type: A })], a.prototype, "highlightOptions", void 0), a = e([d("esri.views.2d.layers.LayerView2D")], a), a;
};
let n = class extends V(x(I.EventedMixin(C))) {
  constructor(r) {
    super(r), this._updatingHandles = new H(), this.layer = null, this.parent = null;
  }
  initialize() {
    this.when().catch((r) => {
      if (r.name !== "layerview:create-error") {
        const a = this.layer && this.layer.id || "no id", s = this.layer?.title || "no title";
        N.getLogger(this).error("#resolve()", `Failed to resolve layer view (layer title: '${s}', id: '${a}')`, r);
      }
    });
  }
  destroy() {
    this._updatingHandles = L(this._updatingHandles);
  }
  get fullOpacity() {
    return (this.layer?.opacity ?? 1) * (this.parent?.fullOpacity ?? 1);
  }
  get suspended() {
    return !this.canResume();
  }
  get suspendInfo() {
    return this.getSuspendInfo();
  }
  get legendEnabled() {
    return !this.suspended && this.layer?.legendEnabled === !0;
  }
  get updating() {
    return !(!this._updatingHandles?.updating && !this.isUpdating());
  }
  get updatingProgress() {
    return this.updating ? 0 : 1;
  }
  get visible() {
    return this.layer?.visible === !0;
  }
  set visible(r) {
    this._overrideIfSome("visible", r);
  }
  canResume() {
    return this.visible && this.layer?.loaded && !this.parent?.suspended && this.view?.ready || !1;
  }
  getSuspendInfo() {
    const r = this.parent?.suspended ? this.parent.suspendInfo : {};
    return this.view?.ready || (r.viewNotReady = !0), this.layer && this.layer.loaded || (r.layerNotLoaded = !0), this.visible || (r.layerInvisible = !0), r;
  }
  isUpdating() {
    return !1;
  }
};
e([t()], n.prototype, "fullOpacity", null), e([t()], n.prototype, "layer", void 0), e([t()], n.prototype, "parent", void 0), e([t({ readOnly: !0 })], n.prototype, "suspended", null), e([t({ readOnly: !0 })], n.prototype, "suspendInfo", null), e([t({ readOnly: !0 })], n.prototype, "legendEnabled", null), e([t({ type: Boolean, readOnly: !0 })], n.prototype, "updating", null), e([t({ readOnly: !0 })], n.prototype, "updatingProgress", null), e([t()], n.prototype, "visible", null), e([t()], n.prototype, "view", void 0), n = e([d("esri.views.layers.LayerView")], n);
const G = n;
export {
  k as a,
  B as m,
  G as u
};
//# sourceMappingURL=LayerView-uykJUj8Q.js.map
