import { iO as A, iP as y, bx as M, fB as $, ha as O, fK as D, hb as B } from "./main-CmejC-so.js";
import { _ as k } from "./screen.vue_vue_type_script_setup_true_lang-IBqwKYqC.js";
var H = { exports: {} };
(function(S, i) {
  (function(n, a) {
    a();
  })(A, function() {
    function n(t, e) {
      return typeof e > "u" ? e = { autoBom: !1 } : typeof e != "object" && (console.warn("Deprecated: Expected third argument to be a object"), e = { autoBom: !e }), e.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type) ? new Blob(["\uFEFF", t], { type: t.type }) : t;
    }
    function a(t, e, l) {
      var o = new XMLHttpRequest();
      o.open("GET", t), o.responseType = "blob", o.onload = function() {
        v(o.response, e, l);
      }, o.onerror = function() {
        console.error("could not download file");
      }, o.send();
    }
    function w(t) {
      var e = new XMLHttpRequest();
      e.open("HEAD", t, !1);
      try {
        e.send();
      } catch {
      }
      return 200 <= e.status && 299 >= e.status;
    }
    function p(t) {
      try {
        t.dispatchEvent(new MouseEvent("click"));
      } catch {
        var e = document.createEvent("MouseEvents");
        e.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), t.dispatchEvent(e);
      }
    }
    var r = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof A == "object" && A.global === A ? A : void 0, b = r.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent), v = r.saveAs || (typeof window != "object" || window !== r ? function() {
    } : "download" in HTMLAnchorElement.prototype && !b ? function(t, e, l) {
      var o = r.URL || r.webkitURL, c = document.createElement("a");
      e = e || t.name || "download", c.download = e, c.rel = "noopener", typeof t == "string" ? (c.href = t, c.origin === location.origin ? p(c) : w(c.href) ? a(t, e, l) : p(c, c.target = "_blank")) : (c.href = o.createObjectURL(t), setTimeout(function() {
        o.revokeObjectURL(c.href);
      }, 4e4), setTimeout(function() {
        p(c);
      }, 0));
    } : "msSaveOrOpenBlob" in navigator ? function(t, e, l) {
      if (e = e || t.name || "download", typeof t != "string") navigator.msSaveOrOpenBlob(n(t, l), e);
      else if (w(t)) a(t, e, l);
      else {
        var o = document.createElement("a");
        o.href = t, o.target = "_blank", setTimeout(function() {
          p(o);
        });
      }
    } : function(t, e, l, o) {
      if (o = o || open("", "_blank"), o && (o.document.title = o.document.body.innerText = "downloading..."), typeof t == "string") return a(t, e, l);
      var c = t.type === "application/octet-stream", f = /constructor/i.test(r.HTMLElement) || r.safari, u = /CriOS\/[\d]+/.test(navigator.userAgent);
      if ((u || c && f || b) && typeof FileReader < "u") {
        var m = new FileReader();
        m.onloadend = function() {
          var s = m.result;
          s = u ? s : s.replace(/^data:[^;]*;/, "data:attachment/file;"), o ? o.location.href = s : location = s, o = null;
        }, m.readAsDataURL(t);
      } else {
        var d = r.URL || r.webkitURL, x = d.createObjectURL(t);
        o ? o.location = x : location.href = x, o = null, setTimeout(function() {
          d.revokeObjectURL(x);
        }, 4e4);
      }
    });
    r.saveAs = v.saveAs = v, S.exports = v;
  });
})(H);
var j = H.exports;
const N = /* @__PURE__ */ y(j), E = 1200, h = {
  TOP: 40,
  RIGHT: 40,
  BOTTOM: 40,
  LEFT: 40
};
class _ extends M {
  fcFabric;
  // download canvas will remain unscaled and only be used for download
  fcFabricDownload;
  options = {
    runningHeight: 0,
    scale: 1
  };
  // stores the custom render function if provided
  customRendererFunc = void 0;
  /**
   * Allows for a custom render callback function to be passed in to render the export canvas.
   * The function should accept the blank ramp canvas as its first parameter and use that canvas to draw on.
   * The width of the canvas is already set to the panel width, so the function only needs to set the height.
   *
   * Individual export elements like the map or the legend can be accessed from the `fabricObjects` object as the second parameter.
   * You can pick and chose which elements to add to the canvas, or modify them as needed. You can also add custom elements to the canvas.
   *
   * Finally, the `options` object is passed in as the third parameter. This object contains useful information such as the panel width, the default margins, the default canvas width, and the fabric object itself.
   *
   * Some canvas operations are asynchronous like fetching an image or cloning objects. In these cases you should return a promise so ramp waits for your operations to complete, otherwise returning nothing (void) is fine.
   *
   * ramp uses Fabric.js instead of the native canvas API. Read more about Fabric.js here: [Fabric.js](http://fabricjs.com/)
   *
   * @param {RenderCallback} renderCallback
   * @example myWatermarkingRenderer((canvas, fabricObjects, options) => {
   *   const watermark = new fabric.Text('Watermark', { ... });
   *   fabricObjects.map.addWithUpdate(watermark);
   *   canvas.add(fabricObjects.map);
   *   canvas.setHeight(1000);
   * });
   *
   * rInstance.fixture.isLoaded('export').then(() => {
   *   rInstance.fixture.get('export').customRenderer(myWatermarkingRenderer);
   * });
   * @memberof ExportAPI
   */
  customRenderer(i) {
    this.customRendererFunc = i;
  }
  /**
   * Returns `ExportConfig` section of the global config file.
   *
   * @readonly
   * @type {ExportConfig}
   * @memberof ExportAPI
   */
  get config() {
    return super.config;
  }
  /**
   * Parses the export config JSON snippet from the config file and save to the fixture store.
   *
   * @param {ExportConfig} [exportConfig]
   * @memberof ExportAPI
   */
  _parseConfig(i) {
    if (!i) return;
    const n = $(this.$vApp.$pinia);
    n.componentSelectedState = {
      title: i.title?.selected ?? !0,
      map: i.map?.selected ?? !0,
      mapElements: i.mapElements?.selected ?? !0,
      legend: i.legend?.selected ?? !0,
      footnote: i.footnote?.selected ?? !0,
      timestamp: i.timestamp?.selected ?? !0
    }, n.fileName = i.fileName || "", this.handlePanelWidths(["export"]), this.handlePanelTeleports(["export"]);
  }
  /**
   * Fetches an Export sub fixture
   *
   * @private
   * @param {string} name
   * @returns {ExportSubFixture | undefined}
   * @memberof ExportAPI
   */
  getSubFixture(i) {
    return this.$iApi.fixture.get(i);
  }
  /**
   * Creates an export canvas.
   *
   * @param {HTMLCanvasElement} canvas
   * @param {number} panelWidth
   * @returns {Promise<void>}
   * @memberof ExportAPI
   */
  async make(i, n) {
    const { fabric: a } = await import("./fabric-Csd7kFSl.js").then((g) => g.f);
    a.Object.prototype.objectCaching = !1;
    const w = $(this.$vApp.$pinia), p = {};
    this.fcFabric = new a.StaticCanvas(i, {
      backgroundColor: "#fff"
    }), this.fcFabricDownload = new a.StaticCanvas(null, {
      backgroundColor: "#fff"
    }), this.options.runningHeight = 0;
    const r = w.componentSelectedState, b = this.getSubFixture("export-title"), v = this.getSubFixture("export-map"), t = this.getSubFixture("export-scalebar"), e = this.getSubFixture("export-northarrow"), l = this.getSubFixture("export-legend"), o = this.getSubFixture("export-footnote"), c = this.getSubFixture("export-timestamp");
    let f, u, m, d, x, s, T;
    if (r.title && b && (f = await b.make({
      /* text: '😸🤖🧙‍♂️🤦‍♀️🎶', */
      top: this.options.runningHeight,
      left: 0,
      originX: "left",
      width: n,
      textAlign: "center"
    }), this.options.runningHeight += f.height + 40, p.title = f), r.map && v && (u = await v.make({
      top: this.options.runningHeight
    }), f && (f.left = u.width / 2, f.originX = "center"), this.options.runningHeight += u.height + 40, p.map = u), !u && f && (f.width = E), this.options.scale = n / ((u?.width ?? E) + h.LEFT + h.RIGHT), r.mapElements && t && (m = await t.make({
      top: this.options.runningHeight,
      left: 0
    }), this.options.runningHeight += m.height + 40, p.scaleBar = m, e && (d = await e.make({
      top: m.top,
      left: n / this.options.scale
    }), d.top += d.height / 2 - 20, d.left += -d.width * 2, p.northArrow = d)), r.legend && l && (x = await l.make({
      width: l.config?.columnWidth ?? u?.width ?? E
    }), x.top = this.options.runningHeight, this.options.runningHeight += x.height, p.legend = x), r.timestamp && c && (T = await c.make({
      top: this.options.runningHeight + 40,
      width: n
    }), this.options.runningHeight += !r.footnote || !o ? T.height + 40 : T.height + 20, p.timestamp = T), r.footnote && o && (s = await o.make({
      top: this.options.runningHeight - 2.5,
      // Magic number 2.5 prevents weird vertical offset between timestamp/footer
      left: n / this.options.scale + 40
    }), r.timestamp && c ? n - p.timestamp.getMinWidth() <= s.getMinWidth() + 30 ? (s.top += 30, s.left = 0, s.originX = "left", this.options.runningHeight += 20) : s.left += -s.width * 2 : (s.top += 20, s.left += -s.width * 2, this.options.runningHeight += 20), this.options.runningHeight += s.height, p.footnote = s), this.customRendererFunc) {
      this.fcFabric.setWidth(n);
      const g = {
        panelWidth: n,
        margin: h,
        defaultWidth: E,
        fabric: a
      };
      await this.customRendererFunc(this.fcFabric, p, g), this.fcFabric.renderAll(), this.fcFabric.clone((F) => {
        this.fcFabricDownload = F, this.fcFabricDownload.setDimensions({
          width: this.fcFabric?.getWidth(),
          height: this.fcFabric.getHeight()
        }), this.fcFabricDownload.renderAll();
      });
    } else {
      const g = new a.Group(Object.values(p), {
        top: h.TOP * this.options.scale,
        left: h.LEFT * this.options.scale
      }), F = await new Promise((R) => {
        g.clone((L) => {
          R(L);
        });
      });
      F.top = h.TOP, F.left = h.LEFT, this.fcFabricDownload.add(F), g.scale(this.options.scale), this.fcFabric.add(g), this.fcFabric.setDimensions({
        width: n,
        height: (this.options.runningHeight + h.TOP + h.BOTTOM) * this.options.scale
      }), this.fcFabric.renderAll(), this.fcFabricDownload.setDimensions({
        width: (u?.width ?? E) + h.LEFT + h.RIGHT,
        height: this.options.runningHeight + h.TOP + h.BOTTOM
      }), this.fcFabricDownload.renderAll();
    }
  }
  export() {
    if (!this.fcFabric)
      return;
    const i = /* @__PURE__ */ new Date(), n = this.config?.fileName || `map-carte - ${i.getFullYear()}-${i.getMonth()}-${i.getDay()}, ${i.getHours()}_${i.getMinutes()}`;
    N.saveAs(
      this.fcFabricDownload.toDataURL({
        format: "png",
        quality: 1
      }),
      `${n}.png`
    );
  }
}
const U = { en: { "export.title": "Export", "export.alertName": "Export", "export.download": "Download image", "export.refresh": "Refresh", "export.scaleBar.approx": "{0} approx.", "export.menu": "Settings Menu", "export.menu.component.title": "Title", "export.menu.component.map": "Map", "export.menu.component.mapElements": "North arrow and scalebar", "export.menu.component.legend": "Legend", "export.menu.component.footnote": "Footnote", "export.menu.component.timestamp": "Timestamp" }, fr: { "export.title": "Exporter", "export.alertName": "Exporter", "export.download": "Télécharger l'image", "export.refresh": "Rafraîchir", "export.scaleBar.approx": "Environ {0}", "export.menu": "Menu des paramètres", "export.menu.component.title": "Titre", "export.menu.component.map": "Carte", "export.menu.component.mapElements": "Flèche du nord et échelle graphique", "export.menu.component.legend": "Légende", "export.menu.component.footnote": "Référence", "export.menu.component.timestamp": "Horodatage" } };
class I extends _ {
  initialized() {
  }
  async needed() {
    const i = (await import("./index-ByKwpGMc.js")).default, n = (await import("./index-BNPSIGdR.js")).default, a = (await import("./index-DDoEkkr0.js")).default, w = (await import("./index-CpKlx6y2.js")).default, p = (await import("./index-D0jKl8wm.js")).default, r = (await import("./index-DUqFYmfQ.js")).default, b = (await import("./index-C0GluV23.js")).default;
    this.$iApi.fixture.add("export-title", i), this.$iApi.fixture.add("export-map", n), this.$iApi.fixture.add("export-legend", a), this.$iApi.fixture.add("export-northarrow", w), this.$iApi.fixture.add("export-scalebar", p), this.$iApi.fixture.add("export-timestamp", r), this.$iApi.fixture.add("export-footnote", b);
  }
  added() {
    this.$iApi.panel.register(
      {
        id: "export",
        config: {
          screens: {
            "export-screen": O(k)
          },
          style: {
            "flex-grow": "1",
            "max-width": "800px"
          },
          button: {
            tooltip: "export.title",
            // https://fonts.google.com/icons?selected=Material+Icons:layers&icon.query=export
            icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none" /><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" /></svg>'
          },
          alertName: "export.alertName"
        }
      },
      { i18n: { messages: U } }
    );
    const i = this.$iApi.event.on(D.PANEL_OPENED, async (a) => {
      a.id === "export" && (this.$iApi.event.off(i), await this.needed(), a.exportMake());
    });
    this._parseConfig(this.config);
    const n = this.$vApp.$watch(
      () => this.config,
      (a) => this._parseConfig(a)
    );
    this.removed = () => {
      n(), this.$iApi.fixture.get("export-title")?.remove(), this.$iApi.fixture.get("export-map")?.remove(), this.$iApi.fixture.get("export-legend")?.remove(), this.$iApi.fixture.get("export-northarrow")?.remove(), this.$iApi.fixture.get("export-scalebar")?.remove(), this.$iApi.fixture.get("export-timestamp")?.remove(), this.$iApi.fixture.get("export-footnote")?.remove(), this.$iApi.fixture.exists("appbar") && B(this.$vApp.$pinia).removeButton("export"), $(this.$vApp.$pinia).$reset(), this.$iApi.panel.remove("export");
    };
  }
}
export {
  I as default
};
//# sourceMappingURL=index-ldpIOKlx.js.map
