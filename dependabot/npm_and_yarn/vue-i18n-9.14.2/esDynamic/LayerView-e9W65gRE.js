import { O as e, P as t, Q as d, bX as R, eV as $, eU as A, b8 as O, b5 as P, V as C, bG as q, aL as x, s as _, S as l, gT as o, bi as E, e1 as T, k8 as V, da as I, e2 as U, k9 as H, D as j, bl as L } from "./main-uCo5F72j.js";
import { h as N } from "./Container-D8I93PMs.js";
import { c as M, i as w } from "./layerViewUtils-DdVuZi0v.js";
let u = class extends R {
  get version() {
    return this.commitVersionProperties(), (this._get("version") || 0) + 1;
  }
};
e([t({ readOnly: !0 })], u.prototype, "version", null), u = e([d("esri.views.layers.support.ClipArea")], u);
const f = u;
var g;
let p = g = class extends f {
  constructor(i) {
    super(i), this.type = "rect", this.left = null, this.right = null, this.top = null, this.bottom = null;
  }
  clone() {
    return new g({ left: this.left, right: this.right, top: this.top, bottom: this.bottom });
  }
  commitVersionProperties() {
    this.commitProperty("left"), this.commitProperty("right"), this.commitProperty("top"), this.commitProperty("bottom");
  }
};
e([t({ type: [Number, String], json: { write: !0 } })], p.prototype, "left", void 0), e([t({ type: [Number, String], json: { write: !0 } })], p.prototype, "right", void 0), e([t({ type: [Number, String], json: { write: !0 } })], p.prototype, "top", void 0), e([t({ type: [Number, String], json: { write: !0 } })], p.prototype, "bottom", void 0), p = g = e([d("esri.views.layers.support.ClipRect")], p);
const k = p;
var m;
const D = { base: A, key: "type", typeMap: { extent: O, polygon: P } };
let c = m = class extends f {
  constructor(i) {
    super(i), this.type = "geometry", this.geometry = null;
  }
  clone() {
    return new m({ geometry: this.geometry?.clone() ?? null });
  }
  commitVersionProperties() {
    this.commitProperty("geometry");
  }
};
e([t({ types: D, json: { read: $, write: !0 } })], c.prototype, "geometry", void 0), c = m = e([d("esri.views.layers.support.Geometry")], c);
const z = c;
let y = class extends f {
  constructor(i) {
    super(i), this.type = "path", this.path = [];
  }
  commitVersionProperties() {
    this.commitProperty("path");
  }
};
e([t({ type: [[[Number]]], json: { write: !0 } })], y.prototype, "path", void 0), y = e([d("esri.views.layers.support.Path")], y);
const F = y, v = C.ofType({ key: "type", base: null, typeMap: { rect: k, path: F, geometry: z } }), X = (i) => {
  let s = class extends i {
    constructor() {
      super(...arguments), this.attached = !1, this.clips = new v(), this.highlightOptions = null, this.lastUpdateId = -1, this.moving = !1, this.updateRequested = !1, this._visibleAtCurrentScale = !0;
    }
    initialize() {
      const r = this.view?.spatialReferenceLocked ?? !0;
      this.view?.spatialReference && r && !this.spatialReferenceSupported ? this.addResolvingPromise(Promise.reject(new _("layerview:spatial-reference-incompatible", "The spatial reference of this layer does not meet the requirements of the view", { layer: this.layer }))) : (this.container || (this.container = new N()), this.container.fadeTransitionEnabled = !0, this.container.visible = !1, this.container.endTransitions(), this.addHandles([l(() => this.suspended, (a) => {
        this.container && (this.container.visible = !a);
      }, o), l(() => this.updateSuspended, (a) => {
        this.view && !a && this.updateRequested && this.view.requestUpdate();
      }, o), l(() => this.layer?.opacity ?? 1, (a) => {
        this.container && (this.container.opacity = a);
      }, o), l(() => this.layer && "blendMode" in this.layer ? this.layer.blendMode : "normal", (a) => {
        this.container && (this.container.blendMode = a);
      }, o), l(() => this.layer && "effect" in this.layer ? this.layer.effect : null, (a) => {
        this.container && (this.container.effect = a);
      }, o), l(() => this.highlightOptions, (a) => this.container.highlightOptions = a, o), E(() => this.clips, "change", () => {
        this.container && (this.container.clips = this.clips);
      }, o), l(() => ({ scale: this.view?.scale, scaleRange: this.layer && "effectiveScaleRange" in this.layer ? this.layer.effectiveScaleRange : null }), ({ scale: a, scaleRange: S }) => {
        const b = M(S, a);
        b !== this._visibleAtCurrentScale && (this._visibleAtCurrentScale = b);
      }, o)], "constructor"), this.view?.whenLayerView ? this.view.whenLayerView(this.layer).then((a) => {
        a === this && this.processAttach();
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
      const r = this.view?.spatialReference;
      return r == null || this.supportsSpatialReference(r);
    }
    get updating() {
      return this.spatialReferenceSupported && (!this.attached || !this.suspended && (this.updateRequested || this.isUpdating()) || !!this._updatingHandles?.updating);
    }
    get visibleAtCurrentScale() {
      return this._visibleAtCurrentScale;
    }
    processAttach() {
      this.isResolved() && !this.attached && !this.destroyed && this.spatialReferenceSupported && (this.attach(), this.attached = !0, this.requestUpdate());
    }
    processDetach() {
      this.attached && (this.attached = !1, this.removeHandles("attach"), this.detach(), this.updateRequested = !1);
    }
    requestUpdate() {
      this.destroyed || this.updateRequested || (this.updateRequested = !0, this.updateSuspended || this.view.requestUpdate());
    }
    processUpdate(r) {
      !this.isFulfilled() || this.isResolved() ? (this._set("updateParameters", r), this.updateRequested && !this.updateSuspended && (this.updateRequested = !1, this.update(r))) : this.updateRequested = !1;
    }
    hitTest(r, h) {
      return Promise.resolve(null);
    }
    supportsSpatialReference(r) {
      return !0;
    }
    canResume() {
      return !!this.spatialReferenceSupported && !!super.canResume() && this.visibleAtCurrentScale;
    }
    getSuspendInfo() {
      const r = super.getSuspendInfo(), h = !this.spatialReferenceSupported;
      return h && (r.spatialReferenceNotSupported = h), r;
    }
    addAttachHandles(r) {
      this.addHandles(r, "attach");
    }
  };
  return e([t()], s.prototype, "attached", void 0), e([t({ type: v, set(r) {
    const h = q(r, this._get("clips"), v);
    this._set("clips", h);
  } })], s.prototype, "clips", void 0), e([t()], s.prototype, "container", void 0), e([t({ type: x })], s.prototype, "highlightOptions", void 0), e([t()], s.prototype, "moving", void 0), e([t({ readOnly: !0 })], s.prototype, "spatialReferenceSupported", null), e([t({ readOnly: !0 })], s.prototype, "updateParameters", void 0), e([t()], s.prototype, "updateRequested", void 0), e([t()], s.prototype, "updating", null), e([t()], s.prototype, "view", void 0), e([t()], s.prototype, "_visibleAtCurrentScale", void 0), e([t({ readOnly: !0 })], s.prototype, "visibleAtCurrentScale", null), s = e([d("esri.views.2d.layers.LayerView2D")], s), s;
};
let n = class extends T(V(I.EventedMixin(U))) {
  constructor(i) {
    super(i), this._updatingHandles = new H(), this.layer = null, this.parent = null;
  }
  initialize() {
    this.when().catch((i) => {
      if (i.name !== "layerview:create-error") {
        const s = this.layer && this.layer.id || "no id", r = this.layer?.title || "no title";
        j.getLogger(this).error("#resolve()", `Failed to resolve layer view (layer title: '${r}', id: '${s}')`, i);
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
    return this.destroyed || !this.canResume();
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
  get updateSuspended() {
    return this.suspended;
  }
  get visible() {
    return this.layer?.visible === !0;
  }
  set visible(i) {
    this._overrideIfSome("visible", i);
  }
  get visibleAtCurrentScale() {
    return !0;
  }
  get visibleAtCurrentTimeExtent() {
    const i = this.view.timeExtent, s = this.layer?.visibilityTimeExtent;
    return !i || !s || !i.intersection(s).isEmpty;
  }
  canResume() {
    const i = this.layer && "effectiveScaleRange" in this.layer ? this.layer.effectiveScaleRange : null;
    return this.visible && this.layer?.loaded && !this.parent?.suspended && this.view?.ready && w(i) && this.visibleAtCurrentScale && this.visibleAtCurrentTimeExtent || !1;
  }
  getSuspendInfo() {
    const i = this.parent?.suspended ? this.parent.suspendInfo : {};
    this.view?.ready || (i.viewNotReady = !0), this.layer && this.layer.loaded || (i.layerNotLoaded = !0);
    const r = this.layer && "effectiveScaleRange" in this.layer ? this.layer.effectiveScaleRange : null;
    return w(r) && this.visibleAtCurrentScale || (i.outsideScaleRange = !0), this.visibleAtCurrentTimeExtent || (i.outsideVisibilityTimeExtent = !0), this.visible || (i.layerInvisible = !0), i;
  }
  isUpdating() {
    return !1;
  }
};
e([t()], n.prototype, "view", void 0), e([t()], n.prototype, "fullOpacity", null), e([t()], n.prototype, "layer", void 0), e([t()], n.prototype, "parent", void 0), e([t({ readOnly: !0 })], n.prototype, "suspended", null), e([t({ readOnly: !0 })], n.prototype, "suspendInfo", null), e([t({ readOnly: !0 })], n.prototype, "legendEnabled", null), e([t({ type: Boolean, readOnly: !0 })], n.prototype, "updating", null), e([t({ readOnly: !0 })], n.prototype, "updatingProgress", null), e([t()], n.prototype, "updateSuspended", null), e([t()], n.prototype, "visible", null), e([t({ readOnly: !0 })], n.prototype, "visibleAtCurrentScale", null), e([t({ readOnly: !0 })], n.prototype, "visibleAtCurrentTimeExtent", null), n = e([d("esri.views.layers.LayerView")], n);
const J = n;
export {
  z as a,
  X as f,
  J as y
};
//# sourceMappingURL=LayerView-e9W65gRE.js.map
