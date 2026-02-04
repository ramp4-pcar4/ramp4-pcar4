import { markRaw as D } from "vue";
import "tiny-emitter";
import { F as M, f as A, G as O, b as R } from "./main-6dWPqJr6.js";
import "@arcgis/core/Color";
import "@arcgis/core/config";
import "@arcgis/core/core/reactiveUtils.js";
import "@arcgis/core/geometry/Extent";
import "@arcgis/core/geometry/Multipoint";
import "@arcgis/core/geometry/Point";
import "@arcgis/core/geometry/Polygon";
import "@arcgis/core/geometry/Polyline";
import "@arcgis/core/geometry/SpatialReference";
import "@arcgis/core/geometry/support/jsonUtils";
import "@arcgis/core/Graphic";
import "@arcgis/core/request";
import "@arcgis/core/symbols/PictureMarkerSymbol";
import "@arcgis/core/symbols/SimpleFillSymbol";
import "@arcgis/core/symbols/SimpleLineSymbol";
import "@arcgis/core/symbols/SimpleMarkerSymbol";
import "@arcgis/core/symbols/support/jsonUtils";
import "@arcgis/map-components/components/arcgis-swipe";
import "deepmerge";
import "@terraformer/spatial";
import "proj4";
import "throttle-debounce";
import "pinia";
import "vue-i18n";
import "screenfull";
import "lodash-es";
import "vue-tippy";
import "linkify-html";
import "@popperjs/core";
import "@terraformer/arcgis";
import "csv2geojson";
import "redaxios";
import "await-to-js";
import "svg.js";
import L from "file-saver";
import { _ as N } from "./screen.vue_vue_type_script_setup_true_lang-D1Z-xEm4.js";
const l = 1200, o = {
  TOP: 40,
  RIGHT: 40,
  BOTTOM: 40,
  LEFT: 40
};
class B extends M {
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
  customRenderer(t) {
    this.customRendererFunc = t;
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
  _parseConfig(t) {
    if (!t) return;
    const e = A(this.$vApp.$pinia);
    e.componentSelectedState = {
      title: t.title?.selected ?? !0,
      map: t.map?.selected ?? !0,
      mapElements: t.mapElements?.selected ?? !0,
      legend: t.legend?.selected ?? !0,
      footnote: t.footnote?.selected ?? !0,
      timestamp: t.timestamp?.selected ?? !0
    }, e.fileName = t.fileName || "", this.handlePanelWidths(["export"]), this.handlePanelTeleports(["export"]);
  }
  /**
   * Fetches an Export sub fixture
   *
   * @private
   * @param {string} name
   * @returns {ExportSubFixture | undefined}
   * @memberof ExportAPI
   */
  getSubFixture(t) {
    return this.$iApi.fixture.get(t);
  }
  /**
   * Creates an export canvas.
   *
   * @param {HTMLCanvasElement} canvas
   * @param {number} panelWidth
   * @returns {Promise<void>}
   * @memberof ExportAPI
   */
  async make(t, e) {
    const { fabric: i } = await import("fabric");
    i.Object.prototype.objectCaching = !1;
    const f = A(this.$vApp.$pinia), r = {};
    this.fcFabric = new i.StaticCanvas(t, {
      backgroundColor: "#fff"
    }), this.fcFabricDownload = new i.StaticCanvas(null, {
      backgroundColor: "#fff"
    }), this.options.runningHeight = 0;
    const p = f.componentSelectedState, u = this.getSubFixture("export-title"), $ = this.getSubFixture("export-map"), v = this.getSubFixture("export-scalebar"), T = this.getSubFixture("export-northarrow"), w = this.getSubFixture("export-legend"), F = this.getSubFixture("export-footnote"), b = this.getSubFixture("export-timestamp");
    let s, a, x, m, d, n, g;
    if (p.title && u && (s = await u.make({
      /* text: '😸🤖🧙‍♂️🤦‍♀️🎶', */
      top: this.options.runningHeight,
      left: 0,
      originX: "left",
      width: e,
      textAlign: "center"
    }), this.options.runningHeight += s.height + 40, r.title = s), p.map && $ && (a = await $.make({
      top: this.options.runningHeight
    }), s && (s.left = a.width / 2, s.originX = "center"), this.options.runningHeight += a.height + 40, r.map = a), !a && s && (s.width = l), this.options.scale = e / ((a?.width ?? l) + o.LEFT + o.RIGHT), p.mapElements && v && (x = await v.make({
      top: this.options.runningHeight,
      left: 0
    }), this.options.runningHeight += x.height + 40, r.scaleBar = x, T && (m = await T.make({
      top: x.top,
      left: e / this.options.scale
    }), m.top += m.height / 2 - 20, m.left += -m.width * 2, r.northArrow = m)), p.legend && w && (d = await w.make({
      width: w.config?.columnWidth ?? a?.width ?? l
    }), d.top = this.options.runningHeight, this.options.runningHeight += d.height, r.legend = d), p.timestamp && b && (g = await b.make({
      top: this.options.runningHeight + 40,
      width: e * 1.5
      // Magic number 1.5 prevents unnecessary linebreaks when there's still space
    }), this.options.runningHeight += !p.footnote || !F ? g.height + 40 : g.height + 20, r.timestamp = g), p.footnote && F && (n = await F.make({
      top: this.options.runningHeight - 2.5,
      // Magic number 2.5 prevents weird vertical offset between timestamp/footer
      left: e / this.options.scale + 40
    }), p.timestamp && b ? e - r.timestamp.getMinWidth() <= n.getMinWidth() + 30 ? (n.top += 30, n.left = 0, n.originX = "left", this.options.runningHeight += 20) : n.left += -n.width * 2 : (n.top += 20, n.left += -n.width * 2, this.options.runningHeight += 20), this.options.runningHeight += n.height, r.footnote = n), this.customRendererFunc) {
      this.fcFabric.setWidth(e);
      const h = {
        panelWidth: e,
        margin: o,
        defaultWidth: l,
        fabric: i
      };
      await this.customRendererFunc(this.fcFabric, r, h), this.fcFabric.renderAll(), this.fcFabric.clone((c) => {
        this.fcFabricDownload = c, this.fcFabricDownload.setDimensions({
          width: this.fcFabric?.getWidth() ?? e,
          height: this.fcFabric.getHeight()
        }), this.fcFabricDownload.renderAll();
      });
    } else {
      const h = new i.Group(Object.values(r), {
        top: o.TOP * this.options.scale,
        left: o.LEFT * this.options.scale
      }), c = await new Promise((S) => {
        h.clone((E) => {
          S(E);
        });
      });
      c.top = o.TOP, c.left = o.LEFT, this.fcFabricDownload.add(c), h.scale(this.options.scale), this.fcFabric.add(h), this.fcFabric.setDimensions({
        width: e,
        height: (this.options.runningHeight + o.TOP + o.BOTTOM) * this.options.scale
      }), this.fcFabric.renderAll(), this.fcFabricDownload.setDimensions({
        width: (a?.width ?? l) + o.LEFT + o.RIGHT,
        height: this.options.runningHeight + o.TOP + o.BOTTOM
      }), this.fcFabricDownload.renderAll();
    }
  }
  export() {
    if (!this.fcFabric)
      return;
    const t = /* @__PURE__ */ new Date(), e = this.config?.fileName || `map-carte - ${t.getFullYear()}-${t.getMonth()}-${t.getDay()}, ${t.getHours()}_${t.getMinutes()}`;
    L.saveAs(
      this.fcFabricDownload.toDataURL({
        format: "png",
        quality: 1
      }),
      `${e}.png`
    );
  }
}
const k = { en: { "export.title": "Export", "export.alertName": "Export", "export.download": "Download image", "export.refresh": "Refresh", "export.scaleBar.approx": "{0} approx.", "export.menu": "Settings Menu", "export.menu.component.title": "Title", "export.menu.component.map": "Map", "export.menu.component.mapElements": "North arrow and scalebar", "export.menu.component.legend": "Legend", "export.menu.component.footnote": "Footnote", "export.menu.component.timestamp": "Timestamp" }, fr: { "export.title": "Exporter", "export.alertName": "Exporter", "export.download": "Télécharger l'image", "export.refresh": "Rafraîchir", "export.scaleBar.approx": "Environ {0}", "export.menu": "Menu des paramètres", "export.menu.component.title": "Titre", "export.menu.component.map": "Carte", "export.menu.component.mapElements": "Flèche du nord et échelle graphique", "export.menu.component.legend": "Légende", "export.menu.component.footnote": "Référence", "export.menu.component.timestamp": "Horodatage" } };
class At extends B {
  initialized() {
  }
  async needed() {
    const t = (await import("./index-CcGakTj2.js")).default, e = (await import("./index-DHCQRb78.js")).default, i = (await import("./index-B7BKo6vi.js")).default, f = (await import("./index-C1xmy2yy.js")).default, r = (await import("./index-DzXRZMy1.js")).default, p = (await import("./index-Dy0F9GZa.js")).default, u = (await import("./index-DOqM8j57.js")).default;
    this.$iApi.fixture.add("export-title", t), this.$iApi.fixture.add("export-map", e), this.$iApi.fixture.add("export-legend", i), this.$iApi.fixture.add("export-northarrow", f), this.$iApi.fixture.add("export-scalebar", r), this.$iApi.fixture.add("export-timestamp", p), this.$iApi.fixture.add("export-footnote", u);
  }
  added() {
    this.$iApi.panel.register(
      {
        id: "export",
        config: {
          screens: {
            "export-screen": D(N)
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
      { i18n: { messages: k } }
    );
    const t = this.$iApi.event.on(O.PANEL_OPENED, async (i) => {
      i.id === "export" && (this.$iApi.event.off(t), await this.needed(), i.exportMake());
    });
    this._parseConfig(this.config);
    const e = this.$vApp.$watch(
      () => this.config,
      (i) => this._parseConfig(i)
    );
    this.removed = () => {
      e(), this.$iApi.fixture.get("export-title")?.remove(), this.$iApi.fixture.get("export-map")?.remove(), this.$iApi.fixture.get("export-legend")?.remove(), this.$iApi.fixture.get("export-northarrow")?.remove(), this.$iApi.fixture.get("export-scalebar")?.remove(), this.$iApi.fixture.get("export-timestamp")?.remove(), this.$iApi.fixture.get("export-footnote")?.remove(), this.$iApi.fixture.exists("appbar") && R(this.$vApp.$pinia).removeButton("export"), A(this.$vApp.$pinia).$reset(), this.$iApi.panel.remove("export");
    };
  }
}
export {
  At as default
};
