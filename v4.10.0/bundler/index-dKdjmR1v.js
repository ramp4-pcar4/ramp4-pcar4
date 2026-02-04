import "tiny-emitter";
import { x as O, L as I, y as d, v as P, z as R, l as G, B as z, F, G as l, _ as T } from "./main-C-NQiA0Q.js";
import "@arcgis/core/Basemap";
import "@arcgis/core/Color";
import "@arcgis/core/config";
import "@arcgis/core/geometry/Extent";
import "@arcgis/core/geometry/Multipoint";
import "@arcgis/core/geometry/Point";
import "@arcgis/core/geometry/Polygon";
import "@arcgis/core/geometry/Polyline";
import "@arcgis/core/geometry/SpatialReference";
import "@arcgis/core/geometry/support/jsonUtils";
import "@arcgis/core/Graphic";
import "@arcgis/core/layers/FeatureLayer";
import "@arcgis/core/layers/GraphicsLayer";
import "@arcgis/core/layers/ImageryLayer";
import "@arcgis/core/layers/MapImageLayer";
import "@arcgis/core/layers/OpenStreetMapLayer";
import "@arcgis/core/layers/TileLayer";
import "@arcgis/core/layers/WMSLayer";
import "@arcgis/core/layers/support/Field";
import "@arcgis/core/Map";
import "@arcgis/core/renderers/SimpleRenderer";
import "@arcgis/core/renderers/support/jsonUtils";
import "@arcgis/core/request";
import "@arcgis/core/rest/query";
import "@arcgis/core/rest/support/Query";
import "@arcgis/core/symbols/PictureMarkerSymbol";
import "@arcgis/core/symbols/SimpleFillSymbol";
import "@arcgis/core/symbols/SimpleLineSymbol";
import "@arcgis/core/symbols/SimpleMarkerSymbol";
import "@arcgis/core/symbols/support/jsonUtils";
import "@arcgis/core/layers/support/FeatureFilter";
import k from "@arcgis/core/views/MapView";
import "@arcgis/core/webmap/background/ColorBackground";
import "deepmerge";
import "terraformer";
import "proj4";
import { debounce as H } from "throttle-debounce";
import { markRaw as E, defineComponent as N, inject as W, ref as f, computed as v, reactive as x, onMounted as j, onBeforeUnmount as D, resolveDirective as q, openBlock as y, createElementBlock as g, createElementVNode as m, normalizeStyle as S, normalizeClass as U, withDirectives as X, unref as L } from "vue";
import "pinia";
import { useI18n as Y } from "vue-i18n";
import "screenfull";
import "lodash.clonedeep";
import "vue-tippy";
import "linkify-html";
import "@popperjs/core";
import "terraformer-arcgis-parser";
import "csv2geojson";
import "redaxios";
import "await-to-js";
import "svg.js";
class Z extends O {
  overviewGraphicLayer;
  overviewmapStore;
  /**
   * @constructor
   * @param {InstanceAPI} iApi the RAMP instance
   */
  constructor(e) {
    super(e), this.overviewGraphicLayer = this.$iApi.geo.layer.createLayer({
      id: "RampOverviewGraphic",
      layerType: I.GRAPHIC,
      url: "",
      cosmetic: !0
    }), this.overviewmapStore = d(this.$vApp.$pinia);
  }
  /**
   * Will generate a ESRI map view and add it to the page
   * Must provide the basemap or basemap id to be used when creating the map view
   *
   * @param {string | Basemap} basemap the id of the basemap that should be used when creating the map view
   * @protected
   */
  createMapView(e) {
    if (!e)
      throw new Error("Attempted to create overview map view without a basemap");
    const i = typeof e == "string" ? this.findBasemap(e) : e;
    this.applyBasemap(i), this._rampExtentSet = this.$iApi.geo.map.getExtentSet().clone(), this._rampSR = this._rampExtentSet.sr.clone();
    const r = this.overviewmapStore.expandFactor;
    this.esriView = E(
      new k({
        map: this.esriMap,
        container: this._targetDiv,
        constraints: {
          rotationEnabled: !1
        },
        spatialReference: this._rampSR.toESRI(),
        extent: this.$iApi.geo.map.getExtent().toESRI().expand(r)
        // use the expanded main map extent
      })
    ), this.esriView.ui.components = [], this.handlers.push({
      type: "mouse-wheel",
      handler: this.esriView.on("mouse-wheel", (t) => {
        t.stopPropagation();
      })
    }), this.handlers.push({
      type: "double-click",
      handler: this.esriView.on("double-click", (t) => {
        t.stopPropagation();
      })
    }), this.handlers.push({
      type: "key-down",
      handler: this.esriView.on("key-down", (t) => {
        t.stopPropagation();
      })
    }), this.handlers.push({
      type: "key-up",
      handler: this.esriView.on("key-up", (t) => {
        t.stopPropagation();
      })
    }), this.handlers.push({
      type: "drag",
      handler: this.esriView.on("drag", (t) => {
        t.stopPropagation(), this.mapDrag(t);
      })
    }), this.esriView.container.addEventListener("touchmove", (t) => {
      t.preventDefault();
    }), this.esriView.watch("fatalError", () => {
      const t = new IntersectionObserver((o) => {
        o.forEach((p) => {
          p.isIntersecting && (this.esriView?.tryFatalErrorRecovery(), t.disconnect());
        });
      });
      t.observe(this.esriView.container);
    }), this.esriView.when(() => {
      this._viewPromise.resolveMe(), this.created = !0;
    });
  }
  async addMapGraphicLayer() {
    if (!this.esriMap) {
      this.noMapErr();
      return;
    }
    const e = new P(this.$iApi.geo.map.getExtent(), "overview-graphic"), i = this.overviewmapStore.borderColour ?? "#FF0000", r = this.overviewmapStore.borderWidth ?? 1, t = this.overviewmapStore.areaColour ?? "#000000", o = this.overviewmapStore.areaOpacity ?? 0.25, p = `${t}${Math.round(o * 255).toString(16)}`;
    e.style = new R({
      fill: { colour: p },
      outline: {
        colour: i,
        width: r
      }
    }), await this.overviewGraphicLayer.initiate(), await this.overviewGraphicLayer.addGraphic(e), this.esriMap?.add(this.overviewGraphicLayer.esriLayer);
  }
  async removeMapGraphicLayer() {
    if (!this.esriMap) {
      this.noMapErr();
      return;
    }
    if (!this.overviewGraphicLayer.esriLayer)
      throw new Error(
        "Attempted to remove layer from the map without an esri layer. Likely layer.initiate() was not called or had not finished."
      );
    this.overviewGraphicLayer.removeGraphic(), this.esriMap.remove(this.overviewGraphicLayer.esriLayer), await this.overviewGraphicLayer.terminate();
  }
  /**
   * Destroys the ESRI map view
   *
   * @protected
   */
  destroyMapView() {
    this.esriView?.container.removeEventListener("touchmove", (e) => {
      e.preventDefault();
    }), super.destroyMapView();
  }
  /**
   * Searches the local basemap list and main map basemaps for a basemap with the given id
   * Throws error if basemap could not be found
   *
   * @param {string} id basemap id
   * @returns {Basemap} the found basemap
   * @protected
   */
  findBasemap(e) {
    const i = this._basemapStore.find((r) => r.id === e);
    if (i)
      return i;
    {
      const t = G(this.$vApp.$pinia).config.map;
      if (t) {
        const o = t.basemaps.find((p) => p.id === e);
        if (o)
          return new z(o);
      }
    }
    throw new Error(`Invalid basemap id requested: ${e}`);
  }
  /**
   * Sets the overview map's basemap to the basemap with the given id.
   * Will refresh the map view if set basemap uses different tile schema.
   *
   * Should only be called by the overview map component
   *
   * @param {string} basemapId the basemap id
   * @returns {boolean} indicates if the schema has changed
   */
  setBasemap(e) {
    if (!this.esriView || !this.esriMap)
      return this.noMapErr(), !1;
    const i = this.findBasemap(e), t = (this.getCurrentBasemapId() ? this.findBasemap(this.getCurrentBasemapId()) : void 0)?.tileSchemaId !== i.tileSchemaId;
    return t ? (this.destroyMapView(), this.createMapView(i)) : this.applyBasemap(i), t;
  }
  /**
   * Initial esri extent of graphic during drag
   *
   * @private
   */
  startExtent = null;
  /**
   * Moves graphic and zooms main map if extent graphic is dragged
   *
   * @param {__esri.ViewDragEvent} esriDrag
   * @private
   */
  async mapDrag(e) {
    if (e.native.pointerType === "mouse") {
      if (e.action === "start")
        await this.cursorHitTest(e) && (this.startExtent = E(
          this.overviewGraphicLayer.getEsriGraphic("overview-graphic").geometry
        ));
      else if (this.startExtent) {
        const i = this.esriView.toMap(e.origin), r = this.esriView.toMap({
          x: e.x,
          y: e.y
        }), t = this.startExtent.clone().offset(r.x - i.x, r.y - i.y, 0);
        this.overviewGraphicLayer.getEsriGraphic("overview-graphic").geometry = t, e.action === "end" && (this.$iApi.geo.map.zoomMapTo(this.$iApi.geo.geom.geomEsriToRamp(t), void 0, !1), this.startExtent = null);
      }
    }
  }
  /**
   * Updates overviewmap extent and graphic based on main map extent
   *
   * @param {Extent} newExtent new main map extent
   * @returns {Promise<void>} A promise that resolves when the overviewmap has finished updating
   */
  updateOverview(e) {
    const i = this.overviewmapStore.expandFactor, r = this.zoomMapTo(e.expand(i), void 0, !1), t = this.overviewGraphicLayer.getLocalGraphic("overview-graphic");
    return this.overviewGraphicLayer.removeGraphic(t), t.geometry = e, this.overviewGraphicLayer.addGraphic(t), r;
  }
  /**
   * Checks if mouse event intersects with extent graphic
   *
   * @param {MouseEvent} e
   * @returns {Promise<boolean>}
   */
  async cursorHitTest(e) {
    return (await this.esriView.hitTest(e)).results.length > 0;
  }
}
class J extends F {
  /**
   * Parses the overview map config JSON snippet from the config file and save to the fixture store.
   *
   * @param {OverviewmapConfig} [OverviewmapConfig]
   * @memberof OverviewmapAPI
   */
  _parseConfig(e) {
    const i = d(this.$vApp.$pinia);
    i.basemaps = e?.basemaps || {}, i.mapConfig.basemaps = e ? Object.values(e.basemaps) : [], i.startMinimized = e?.startMinimized ?? !0, i.expandFactor = e?.expandFactor ?? 1.5, i.borderColour = e?.borderColour ?? "#FF0000", i.borderWidth = e?.borderWidth ?? 1, i.areaColour = e?.areaColour ?? "#000000", i.areaOpacity = e?.areaOpacity ?? 0.25;
  }
  get config() {
    return super.config;
  }
}
const K = { class: "relative h-full w-full overflow-hidden" }, Q = { class: "absolute h-30 w-30 top-0 right-0" }, ee = ["content", "aria-label"], te = /* @__PURE__ */ N({
  __name: "overviewmap",
  setup(u) {
    const e = d(), { t: i } = Y(), r = W("iApi"), t = G(), o = f(), p = v(() => t.activeBasemapConfig), _ = v(() => e.mapConfig), b = v(() => e.basemaps), A = v(() => e.startMinimized);
    let a = x(new Z(r));
    const n = f(!0), M = f(!1), c = x([]);
    j(() => {
      r.geo.map.viewPromise.then(async () => {
        w(), a.createMap(_.value, o.value.querySelector(".overviewmap")), await a.viewPromise, await a.addMapGraphicLayer(), n.value = A.value;
        let h = a.updateOverview(r.geo.map.getExtent());
        c.push(
          r.event.on(
            l.MAP_EXTENTCHANGE,
            H(100, (s) => {
              h.then(() => {
                a.updateOverview(s);
              });
            })
          )
        ), c.push(
          r.event.on(l.MAP_CREATED, () => {
            w();
          })
        ), c.push(
          r.event.on(l.MAP_REFRESH_END, () => {
            w();
          })
        ), c.push(
          r.event.on(l.MAP_BASEMAPCHANGE, async (s) => {
            !s.schemaChanged && a.created && p.value && b.value[p.value.tileSchemaId] === void 0 && (await a.removeMapGraphicLayer(), a.setBasemap(s.basemapId), await a.addMapGraphicLayer());
          })
        );
      });
    }), D(() => {
      c.forEach((h) => r.event.off(h)), a.destroyMap();
    });
    const $ = async (h) => {
      M.value = !n.value && await a.cursorHitTest(h);
    }, B = () => ({
      height: `${n.value ? 48 : 200}px`,
      width: `${n.value ? 48 : 200}px`
    }), V = () => ({
      top: `${n.value ? -6 : -3}px`,
      right: `${n.value ? -6 : -3}px`,
      transform: `rotate(${n.value ? 225 : 45}deg)`
    }), w = () => {
      if (!p.value) {
        console.error("Overview Map could not obtain the basemap config used by the main map");
        return;
      }
      try {
        const h = p.value?.tileSchemaId;
        if (!h)
          throw new Error("Overview Map could not obtain the tile schema of the main map");
        const s = b.value[h];
        if (!s)
          throw new Error(
            "Overview Map could not find a suitable basemap that matches the tile schema of the main map"
          );
        a.created || e.updateInitialBasemap(s.id), a.created && a.viewPromise.then(() => a.setBasemap(s.id));
      } catch {
        a.created || e.updateInitialBasemap(p.value.id), a.viewPromise.then(() => a.setBasemap(p.value.id));
      }
    };
    return (h, s) => {
      const C = q("tippy");
      return y(), g("div", {
        class: "relative",
        ref_key: "el",
        ref: o
      }, [
        m("div", {
          style: S(B()),
          class: "pointer-events-auto absolute top-0 right-0 mt-12 mr-12 shadow-tm border-4 border-solid border-white bg-white transition-all duration-300 ease-out"
        }, [
          m("div", K, [
            m("div", {
              class: U(["overviewmap absolute top-0 right-0 h-192 w-192", { "cursor-move": M.value }]),
              onMousemove: $
            }, null, 34)
          ]),
          m("div", Q, [
            X((y(), g("button", {
              type: "button",
              tabindex: "0",
              class: "cursor-pointer absolute h-full w-full",
              onClick: s[0] || (s[0] = (ae) => n.value = !n.value),
              content: L(i)(n.value ? "overviewmap.expand" : "overviewmap.minimize"),
              "aria-label": L(i)(n.value ? "overviewmap.expand" : "overviewmap.minimize")
            }, [
              (y(), g("svg", {
                class: "absolute fill-current text-gray-500 transition-all duration-300 ease-out",
                style: S(V()),
                xmlns: "http://www.w3.org/2000/svg",
                fit: "",
                height: "100%",
                width: "100%",
                preserveAspectRatio: "xMidYMid meet",
                viewBox: "0 0 24 24",
                focusable: "false"
              }, s[1] || (s[1] = [
                m("g", { id: "apple-keyboard-control" }, [
                  m("path", { d: "M 19.7782,11.7782L 18.364,13.1924L 12,6.82843L 5.63604,13.1924L 4.22183,11.7782L 12,4L 19.7782,11.7782 Z " })
                ], -1)
              ]), 4))
            ], 8, ee)), [
              [C, { placement: "left", hideOnClick: !1 }]
            ])
          ])
        ], 4)
      ], 512);
    };
  }
}), ie = /* @__PURE__ */ T(te, [["__scopeId", "data-v-461fd934"]]), re = { en: { "overviewmap.expand": "Expand Overview", "overviewmap.minimize": "Minimize Overview" }, fr: { "overviewmap.expand": "Développer l'aperçu", "overviewmap.minimize": "Réduire l'aperçu" } };
class rt extends J {
  added() {
    Object.entries(re).forEach((o) => this.$iApi.$i18n.mergeLocaleMessage(...o)), this._parseConfig(this.config);
    const e = this.$vApp.$watch(
      () => this.config,
      (o) => this._parseConfig(o)
    ), { destroy: i, el: r } = this.mount(ie, {
      app: this.$element
    });
    this.$vApp.$el.getElementsByClassName("inner-shell")[0].appendChild(r.childNodes[0]), this.removed = () => {
      e(), i(), d(this.$vApp.$pinia).$reset();
    };
  }
}
export {
  rt as default
};
