import { dS as c, b_ as f, N as i, O as t, P as m, ax as u, eu as g, ap as o, b5 as y, U as n, X as h } from "./main-BEi6lHs4.js";
import { m as d, u as b } from "./LayerView-De1FBOoa.js";
import { t as _ } from "./GraphicContainer-DP_dFFbK.js";
import { $ as T } from "./GraphicsView2D-DgGASnAm.js";
let s = class extends c(f) {
  constructor(e) {
    super(e), this.frameCenter = null, this.frameOutline = null, this.lineOfSight = null, this.sensorLocation = null, this.sensorTrail = null;
  }
};
i([t({ type: Boolean })], s.prototype, "frameCenter", void 0), i([t({ type: Boolean })], s.prototype, "frameOutline", void 0), i([t({ type: Boolean })], s.prototype, "lineOfSight", void 0), i([t({ type: Boolean })], s.prototype, "sensorLocation", void 0), i([t({ type: Boolean })], s.prototype, "sensorTrail", void 0), s = i([m("esri.layers.support.TelemetryDisplay")], s);
const p = s, a = new u([255, 127, 0]);
let r = class extends d(b) {
  constructor() {
    super(...arguments), this._graphicsLayer = new g(), this._frameOutlineGraphic = new o({ symbol: { type: "simple-fill", outline: { type: "simple-line", color: a } } }), this._sensorTrailGraphic = new o({ symbol: { type: "simple-line", color: a } }), this._lineOfSightGraphic = new o({ symbol: { type: "simple-line", color: a } }), this._sensorLocationGraphic = new o({ symbol: { type: "simple-marker", color: a } }), this._frameCenterGraphic = new o({ symbol: { type: "simple-marker", color: a } }), this.layer = null, this.symbolColor = a, this.visibleTelemetryElements = null;
  }
  destroy() {
    this._graphicsLayer = y(this._graphicsLayer);
  }
  initialize() {
    this.addHandles(n(() => this.symbolColor, () => {
      this._frameOutlineGraphic.symbol.outline.color = this.symbolColor, this._sensorTrailGraphic.symbol.color = this.symbolColor, this._lineOfSightGraphic.symbol.color = this.symbolColor, this._sensorLocationGraphic.symbol.color = this.symbolColor, this._frameCenterGraphic.symbol.color = this.symbolColor;
    }, h)), this._graphicsLayer.graphics.addMany([this._frameOutlineGraphic, this._sensorTrailGraphic, this._lineOfSightGraphic, this._sensorLocationGraphic, this._frameCenterGraphic]), this.visibleTelemetryElements = new p({ frameCenter: this.layer.telemetryDisplay?.frameCenter ?? !0, frameOutline: this.layer.telemetryDisplay?.frameOutline ?? !0, lineOfSight: this.layer.telemetryDisplay?.lineOfSight ?? !0, sensorLocation: this.layer.telemetryDisplay?.sensorLocation ?? !0, sensorTrail: this.layer.telemetryDisplay?.sensorTrail ?? !0 });
  }
  attach() {
    this.graphicsView = new T({ requestUpdateCallback: () => this.requestUpdate(), view: this.view, graphics: this._graphicsLayer.graphics, container: new _(this.view.featuresTilingScheme) }), this.container.addChild(this.graphicsView.container), this.addAttachHandles(this._graphicsLayer.on("graphic-update", this.graphicsView.graphicUpdateHandler)), this.addAttachHandles([n(() => [this.layer.telemetryDisplay?.frameCenter, this.layer.telemetryDisplay?.frameOutline, this.layer.telemetryDisplay?.sensorLocation, this.layer.telemetryDisplay?.sensorTrail, this.layer.telemetryDisplay?.lineOfSight], () => this._updateVisibleTelemetryElements(), h), n(() => [this.layer.telemetry, this.visibleTelemetryElements?.frameCenter, this.visibleTelemetryElements?.frameOutline, this.visibleTelemetryElements?.sensorLocation, this.visibleTelemetryElements?.sensorTrail, this.visibleTelemetryElements?.lineOfSight], () => this._updateGraphicGeometries(), h)]);
  }
  detach() {
    this.container.removeAllChildren(), this.graphicsView = y(this.graphicsView);
  }
  supportsSpatialReference(e) {
    return !0;
  }
  moveStart() {
  }
  moveEnd() {
  }
  viewChange() {
    this.graphicsView.viewChange();
  }
  update(e) {
    this.graphicsView.processUpdate(e);
  }
  isUpdating() {
    return !this.graphicsView || this.graphicsView.updating;
  }
  _updateVisibleTelemetryElements() {
    this.visibleTelemetryElements && this.layer.telemetryDisplay && (this.visibleTelemetryElements.frameCenter = this.layer.telemetryDisplay.frameCenter, this.visibleTelemetryElements.frameOutline = this.layer.telemetryDisplay.frameOutline, this.visibleTelemetryElements.lineOfSight = this.layer.telemetryDisplay.lineOfSight, this.visibleTelemetryElements.sensorLocation = this.layer.telemetryDisplay.sensorLocation, this.visibleTelemetryElements.sensorTrail = this.layer.telemetryDisplay.sensorTrail);
  }
  _updateGraphicGeometries() {
    const { telemetry: e } = this.layer, { visibleTelemetryElements: l } = this;
    e && l && (l.frameOutline && e.frameOutline ? this._frameOutlineGraphic.geometry = this.layer.telemetry.frameOutline : this._frameOutlineGraphic.geometry = null, l.sensorTrail && e.sensorTrail ? this._sensorTrailGraphic.geometry = this.layer.telemetry.sensorTrail : this._sensorTrailGraphic.geometry = null, l.lineOfSight && e.lineOfSight ? this._lineOfSightGraphic.geometry = this.layer.telemetry.lineOfSight : this._lineOfSightGraphic.geometry = null, l.sensorLocation && e.sensorLocation ? this._sensorLocationGraphic.geometry = this.layer.telemetry.sensorLocation : this._sensorLocationGraphic.geometry = null, l.frameCenter && e.frameCenter ? this._frameCenterGraphic.geometry = this.layer.telemetry.frameCenter : this._frameCenterGraphic.geometry = null);
  }
};
i([t()], r.prototype, "graphicsView", void 0), i([t()], r.prototype, "layer", void 0), i([t()], r.prototype, "symbolColor", void 0), i([t({ type: p })], r.prototype, "visibleTelemetryElements", void 0), r = i([m("esri.views.2d.layers.VideoLayerView2D")], r);
const w = r;
export {
  w as default
};
//# sourceMappingURL=VideoLayerView2D-RddMbtnP.js.map
