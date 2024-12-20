import { O as r, P as a, fP as p, Q as l, S as u, s as c, f2 as y, J as m, U as d } from "./main-DMoCLB29.js";
import { n as _, r as g } from "./FeatureLayerView2D-sX9yGfZx.js";
const f = (e) => {
  let t = class extends e {
    resume() {
      this._isUserPaused = !1, this.suspended || this._doResume();
    }
    pause() {
      this._isUserPaused = !0, this.suspended || this._doPause();
    }
    disconnect() {
      this._doDisconnect();
    }
    connect() {
      this._doConnect();
    }
    clear() {
      this._doClear();
    }
    constructor(...s) {
      super(...s), this._isUserPaused = !1, this.filter = null;
    }
    get connectionStatus() {
      return (this._isUserPaused || this.suspended) && this._streamConnectionStatus === "connected" ? "paused" : this._streamConnectionStatus;
    }
    _onSuspendedChange(s) {
      s ? this._doPause() : this._isUserPaused || this._doResume();
    }
  };
  return r([a()], t.prototype, "_isUserPaused", void 0), r([a({ readOnly: !0 })], t.prototype, "connectionStatus", null), r([a({ type: p })], t.prototype, "filter", void 0), t = r([l("esri.views.layers.StreamLayerView")], t), t;
};
let i = class extends f(g) {
  constructor() {
    super(...arguments), this.pipelineConnectionStatus = "disconnected", this.pipelineErrorString = null;
  }
  initialize() {
    this.addHandles([u(() => this.layer.customParameters, async (e) => {
      (await this.getWorker()).streamMessenger.updateCustomParameters(e);
    }), this.layer.on("send-message-to-socket", async (e) => {
      (await this.getWorker()).streamMessenger.sendMessageToSocket(e);
    }), this.layer.on("send-message-to-client", async (e) => {
      (await this.getWorker()).streamMessenger.sendMessageToClient(e), this._isUserPaused && "type" in e && e.type === "clear" && this.incrementSourceRefreshVersion();
    }), u(() => this.layer.purgeOptions, () => this._update()), u(() => this.suspended, this._onSuspendedChange.bind(this))], "constructor"), this._doResume();
  }
  destroy() {
    this._doPause();
  }
  get connectionError() {
    return this.pipelineErrorString ? new c("stream-controller", this.pipelineErrorString) : null;
  }
  on(e, t) {
    if (Array.isArray(e)) return y(e.map((n) => this.on(n, t)));
    const s = ["data-received", "message-received"].includes(e);
    s && this.getWorker().then((n) => n.streamMessenger.enableEvent(e, !0));
    const h = super.on(e, t), o = this;
    return m(() => {
      h.remove(), s && (o._workerProxy.closed || o.hasEventListener(e) || o.getWorker().then((n) => n.streamMessenger.enableEvent(e, !1)));
    });
  }
  async queryLatestObservations(e, t) {
    if (!(this.layer.timeInfo?.endField || this.layer.timeInfo?.startField || this.layer.timeInfo?.trackIdField)) throw new c("streamlayer-no-timeField", "queryLatestObservation can only be used with services that define a TrackIdField");
    const s = await this.getWorker();
    return _(s.features.executeQueryForLatestObservations(this._cleanUpQuery(e), t).then((h) => {
      const o = d.fromJSON(h);
      return o.features.forEach((n) => {
        n.layer = this.layer, n.sourceLayer = this.layer;
      }), o;
    }), new d({ features: [] }));
  }
  detach() {
    super.detach(), this.pipelineConnectionStatus = "disconnected";
  }
  get _streamConnectionStatus() {
    return this.pipelineConnectionStatus;
  }
  _doPause() {
    this._refreshInterval != null && (clearInterval(this._refreshInterval), this._refreshInterval = null);
  }
  _doResume() {
    this._refreshInterval = setInterval(() => this.incrementSourceRefreshVersion(), this.layer.updateInterval);
  }
  _doDisconnect() {
    this.getWorker().then((e) => e.streamMessenger.disconnect()), this._doPause();
  }
  _doConnect() {
    this.getWorker().then((e) => e.streamMessenger.connect()), this.resume();
  }
  _doClear() {
    this.getWorker().then((e) => e.streamMessenger.clear()), this._refreshInterval == null && this.incrementSourceRefreshVersion();
  }
  _createClientOptions() {
    const e = super._createClientOptions(), t = this;
    return { ...e, get container() {
      return t.featureContainer;
    }, setProperty: (s) => {
      this.set(s.propertyName, s.value);
    } };
  }
};
r([a()], i.prototype, "pipelineConnectionStatus", void 0), r([a()], i.prototype, "pipelineErrorString", void 0), r([a({ readOnly: !0 })], i.prototype, "connectionError", null), r([a({ readOnly: !0 })], i.prototype, "_streamConnectionStatus", null), i = r([l("esri.views.2d.layers.StreamLayerView2D")], i);
const C = i;
export {
  C as default
};
//# sourceMappingURL=StreamLayerView2D-DFQmdaLh.js.map
