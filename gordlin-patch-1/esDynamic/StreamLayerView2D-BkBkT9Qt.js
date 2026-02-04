import { N as r, O as i, fx as p, P as c, U as u, s as d, fy as _, H as m, Y as l } from "./main-BEi6lHs4.js";
import { n as y, X as f } from "./FeatureLayerView2D-CIavv65R.js";
const g = (e) => {
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
  return r([i()], t.prototype, "_isUserPaused", void 0), r([i({ readOnly: !0 })], t.prototype, "connectionStatus", null), r([i({ type: p })], t.prototype, "filter", void 0), t = r([c("esri.layers.mixins.StreamLayerView")], t), t;
};
let n = class extends g(f) {
  constructor() {
    super(...arguments), this.pipelineConnectionStatus = "disconnected", this.pipelineErrorString = null;
  }
  initialize() {
    this.addHandles([u(() => this.layer.customParameters, (e) => this._worker.streamMessenger.updateCustomParameters(e)), this.layer.on("send-message-to-socket", (e) => this._worker.streamMessenger.sendMessageToSocket(e)), this.layer.on("send-message-to-client", (e) => {
      this._worker.streamMessenger.sendMessageToClient(e), this._isUserPaused && "type" in e && e.type === "clear" && this.incrementSourceRefreshVersion();
    }), u(() => this.layer.purgeOptions, () => this._update()), u(() => this.suspended, this._onSuspendedChange.bind(this))], "constructor"), this._doResume();
  }
  destroy() {
    this._doPause();
  }
  get connectionError() {
    return this.pipelineErrorString ? new d("stream-controller", this.pipelineErrorString) : null;
  }
  on(e, t) {
    if (Array.isArray(e)) return _(e.map((h) => this.on(h, t)));
    const s = ["data-received", "message-received"].includes(e);
    s && this._worker.streamMessenger.enableEvent(e, !0);
    const a = super.on(e, t), o = this;
    return m(() => {
      a.remove(), s && (o._worker.closed || o.hasEventListener(e) || o._worker.streamMessenger.enableEvent(e, !1));
    });
  }
  queryLatestObservations(e, t) {
    if (!(this.layer.timeInfo?.endField || this.layer.timeInfo?.startField || this.layer.timeInfo?.trackIdField)) throw new d("streamlayer-no-timeField", "queryLatestObservation can only be used with services that define a TrackIdField");
    return y(this._worker.features.executeQueryForLatestObservations(this._cleanUpQuery(e), t).then((s) => {
      const a = l.fromJSON(s);
      return a.features.forEach((o) => {
        o.layer = this.layer, o.sourceLayer = this.layer;
      }), a;
    }), new l({ features: [] }));
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
    this._worker.streamMessenger.disconnect(), this._doPause();
  }
  _doConnect() {
    this._worker.streamMessenger.connect(), this.resume();
  }
  _doClear() {
    this._worker.streamMessenger.clear(), this._refreshInterval == null && this.incrementSourceRefreshVersion();
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
r([i()], n.prototype, "pipelineConnectionStatus", void 0), r([i()], n.prototype, "pipelineErrorString", void 0), r([i({ readOnly: !0 })], n.prototype, "connectionError", null), r([i({ readOnly: !0 })], n.prototype, "_streamConnectionStatus", null), n = r([c("esri.views.2d.layers.StreamLayerView2D")], n);
const C = n;
export {
  C as default
};
//# sourceMappingURL=StreamLayerView2D-BkBkT9Qt.js.map
