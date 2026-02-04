import "tiny-emitter";
import { z as I, L as P, B as d, D as O, x as R, I as z, l as G, J as F, F as T, G as v, _ as k } from "./main-6dWPqJr6.js";
import "@arcgis/core/Color";
import "@arcgis/core/config";
import { watch as H } from "@arcgis/core/core/reactiveUtils.js";
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
import { debounce as N } from "throttle-debounce";
import { markRaw as x, defineComponent as D, inject as W, ref as f, computed as l, reactive as E, onMounted as j, onBeforeUnmount as q, resolveDirective as J, createElementBlock as y, openBlock as g, createElementVNode as c, normalizeStyle as S, normalizeClass as U, withDirectives as X, unref as L } from "vue";
import "pinia";
import { useI18n as Y } from "vue-i18n";
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
class Z extends I {
  overviewGraphicLayer;
  overviewmapStore;
  /**
   * @constructor
   * @param {InstanceAPI} iApi the RAMP instance
   */
  constructor(e) {
    super(e, "overview"), this.overviewGraphicLayer = this.$iApi.geo.layer.createLayer({
      id: "RampOverviewGraphic",
      layerType: P.GRAPHIC,
      url: "",
      cosmetic: !0,
      system: !0
    }), this.overviewmapStore = d(this.$vApp.$pinia);
  }
  /**
   * Will generate a ESRI map view and add it to the page
   * Must provide the basemap or basemap id to be used when creating the map view
   *
   * @param {string | Basemap} basemap the id of the basemap that should be used when creating the map view
   * @returns {Promise} resolves when the map view has been created.
   * @protected
   */
  async createMapView(e) {
    if (!e)
      throw new Error("Attempted to create overview map view without a basemap");
    const i = typeof e == "string" ? await this.findBasemap(e) : e;
    await this.applyBasemap(i), this._rampExtentSet = this.$iApi.geo.map.getExtentSet().clone(), this._rampSR = this._rampExtentSet.sr.clone();
    const a = this.overviewmapStore.expandFactor;
    this.esriView = x(
      await O.MapView({
        map: this.esriMap,
        container: this._targetDiv,
        constraints: {
          rotationEnabled: !1
        },
        spatialReference: this._rampSR.toESRI(),
        extent: this.$iApi.geo.map.getExtent().toESRI().expand(a)
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
    }), H(
      () => this.esriView.fatalError,
      () => {
        const t = new IntersectionObserver((o) => {
          o.forEach((n) => {
            n.isIntersecting && (this.esriView?.tryFatalErrorRecovery(), t.disconnect());
          });
        });
        t.observe(this.esriView.container);
      }
    ), this.esriView.when(() => {
      this._viewPromise.resolveMe(), this.created = !0;
    });
  }
  async addMapGraphicLayer() {
    if (!this.esriMap) {
      this.noMapErr();
      return;
    }
    const e = new R(this.$iApi.geo.map.getExtent(), "overview-graphic"), i = this.overviewmapStore.borderColour ?? "#FF0000", a = this.overviewmapStore.borderWidth ?? 1, t = this.overviewmapStore.areaColour ?? "#000000", o = this.overviewmapStore.areaOpacity ?? 0.25, n = `${t}${Math.round(o * 255).toString(16)}`;
    e.style = new z({
      fill: { colour: n },
      outline: {
        colour: i,
        width: a
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
   * Searches the local basemap list, then the main map basemaps for a basemap with the given id
   * Throws error if basemap could not be found
   *
   * @param {string} id basemap id
   * @returns {Promise<Basemap>} resolves with the found basemap
   * @protected
   */
  async findBasemap(e) {
    const i = this._basemapStore.find((a) => a.id === e);
    if (i)
      return i;
    {
      const t = G(this.$vApp.$pinia).config.map;
      if (t) {
        const o = t.basemaps.find((n) => n.id === e);
        if (o)
          return F.create(o);
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
   * @returns {Promise<boolean>} resolves with boolean indicates if the schema has changed
   */
  async setBasemap(e) {
    if (!this.esriView || !this.esriMap)
      return this.noMapErr(), !1;
    const i = await this.findBasemap(e), t = (this.getCurrentBasemapId() ? await this.findBasemap(this.getCurrentBasemapId()) : void 0)?.tileSchemaId !== i.tileSchemaId;
    return t ? (this.destroyMapView(), await this.createMapView(i)) : await this.applyBasemap(i), t;
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
        await this.cursorHitTest(e) && (this.startExtent = x(
          this.overviewGraphicLayer.getEsriGraphic("overview-graphic").geometry
        ));
      else if (this.startExtent) {
        const i = this.esriView.toMap(e.origin), a = this.esriView.toMap({
          x: e.x,
          y: e.y
        }), t = this.startExtent.clone().offset(a.x - i.x, a.y - i.y, 0);
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
    const i = this.overviewmapStore.expandFactor, a = this.zoomMapTo(e.expand(i), void 0, !1), t = this.overviewGraphicLayer.getLocalGraphic("overview-graphic");
    return this.overviewGraphicLayer.removeGraphic(t), t.geometry = e, this.overviewGraphicLayer.addGraphic(t), a;
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
class K extends T {
  /**
   * Parses the overview map config JSON snippet from the config file and save to the fixture store.
   *
   * @param {OverviewmapConfig} [OverviewmapConfig]
   * @memberof OverviewmapAPI
   */
  _parseConfig(e) {
    const i = d(this.$vApp.$pinia);
    i.basemaps = e?.basemaps || {}, i.mapConfig.basemaps = Object.values(i.basemaps), i.startMinimized = e?.startMinimized ?? !0, i.expandFactor = e?.expandFactor ?? 1.5, i.borderColour = e?.borderColour ?? "#FF0000", i.borderWidth = e?.borderWidth ?? 1, i.areaColour = e?.areaColour ?? "#000000", i.areaOpacity = e?.areaOpacity ?? 0.25;
  }
  get config() {
    return super.config;
  }
}
const Q = { class: "relative h-full w-full overflow-hidden" }, ee = { class: "absolute h-30 w-30 top-0 right-0" }, te = ["content", "aria-label"], ie = /* @__PURE__ */ D({
  __name: "overviewmap",
  setup(u) {
    const e = d(), { t: i } = Y(), a = W("iApi"), t = G(), o = f(), n = l(
      () => t.activeBasemapConfig
    ), _ = l(() => e.mapConfig), M = l(() => e.basemaps), A = l(() => e.startMinimized), r = E(new Z(a)), p = f(!0), b = f(!1), m = E([]);
    j(async () => {
      await a.geo.map.viewPromise, w(), await r.createMap(_.value, o.value.querySelector(".overviewmap")), await r.viewPromise, await r.addMapGraphicLayer(), p.value = A.value;
      const h = r.updateOverview(a.geo.map.getExtent());
      m.push(
        a.event.on(
          v.MAP_EXTENTCHANGE,
          N(100, (s) => {
            h.then(() => {
              r.updateOverview(s);
            });
          })
        )
      ), m.push(
        a.event.on(v.MAP_CREATED, () => {
          w();
        })
      ), m.push(
        a.event.on(v.MAP_REFRESH_END, () => {
          w();
        })
      ), m.push(
        a.event.on(v.MAP_BASEMAPCHANGE, async (s) => {
          !s.schemaChanged && r.created && n.value && M.value[n.value.tileSchemaId] === void 0 && (await r.removeMapGraphicLayer(), await r.setBasemap(s.basemapId), await r.addMapGraphicLayer());
        })
      );
    }), q(() => {
      m.forEach((h) => a.event.off(h)), r.removeMapGraphicLayer().then(() => {
        r.destroyMap();
      });
    });
    const $ = async (h) => {
      b.value = !p.value && await r.cursorHitTest(h);
    }, B = () => ({
      height: `${p.value ? 48 : 200}px`,
      width: `${p.value ? 48 : 200}px`
    }), C = () => ({
      top: `${p.value ? -6 : -3}px`,
      right: `${p.value ? -6 : -3}px`,
      transform: `rotate(${p.value ? 225 : 45}deg)`
    }), w = () => {
      if (!n.value) {
        console.error("Overview Map could not obtain the basemap config used by the main map");
        return;
      }
      try {
        const h = n.value?.tileSchemaId;
        if (!h)
          throw new Error("x");
        const s = M.value[h];
        if (!s)
          throw new Error("x");
        r.created ? r.viewPromise.then(() => r.setBasemap(s.id)) : e.updateInitialBasemap(s.id);
      } catch {
        r.created || e.updateInitialBasemap(n.value.id), r.viewPromise.then(() => r.setBasemap(n.value.id));
      }
    };
    return (h, s) => {
      const V = J("tippy");
      return g(), y("div", {
        class: "relative",
        ref_key: "el",
        ref: o
      }, [
        c("div", {
          style: S(B()),
          class: "pointer-events-auto absolute top-0 right-0 mt-12 mr-12 shadow-tm border-4 border-solid border-white bg-white transition-all duration-300 ease-out"
        }, [
          c("div", Q, [
            c("div", {
              class: U(["overviewmap absolute top-0 right-0 h-192 w-192", { "cursor-move": b.value }]),
              onMousemove: $
            }, null, 34)
          ]),
          c("div", ee, [
            X((g(), y("button", {
              type: "button",
              tabindex: "0",
              class: "cursor-pointer absolute h-full w-full",
              onClick: s[0] || (s[0] = (oe) => p.value = !p.value),
              content: L(i)(p.value ? "overviewmap.expand" : "overviewmap.minimize"),
              "aria-label": L(i)(p.value ? "overviewmap.expand" : "overviewmap.minimize")
            }, [
              (g(), y("svg", {
                class: "absolute fill-current text-gray-500 transition-all duration-300 ease-out",
                style: S(C()),
                xmlns: "http://www.w3.org/2000/svg",
                fit: "",
                height: "100%",
                width: "100%",
                preserveAspectRatio: "xMidYMid meet",
                viewBox: "0 0 24 24",
                focusable: "false"
              }, s[1] || (s[1] = [
                c("g", { id: "apple-keyboard-control" }, [
                  c("path", { d: "M 19.7782,11.7782L 18.364,13.1924L 12,6.82843L 5.63604,13.1924L 4.22183,11.7782L 12,4L 19.7782,11.7782 Z " })
                ], -1)
              ]), 4))
            ], 8, te)), [
              [V, { placement: "left", hideOnClick: !1 }]
            ])
          ])
        ], 4)
      ], 512);
    };
  }
}), ae = /* @__PURE__ */ k(ie, [["__scopeId", "data-v-6ffbe749"]]), re = { en: { "overviewmap.expand": "Expand Overview", "overviewmap.minimize": "Minimize Overview" }, fr: { "overviewmap.expand": "Développer l'aperçu", "overviewmap.minimize": "Réduire l'aperçu" } };
class De extends K {
  added() {
    Object.entries(re).forEach((o) => this.$iApi.$i18n.mergeLocaleMessage(...o)), this._parseConfig(this.config);
    const e = this.$vApp.$watch(
      () => this.config,
      (o) => this._parseConfig(o)
    ), { destroy: i, el: a } = this.mount(ae, {
      app: this.$element
    });
    this.$vApp.$el.getElementsByClassName("inner-shell")[0].appendChild(a.childNodes[0]), this.removed = () => {
      e(), i(), d(this.$vApp.$pinia).$reset();
    };
  }
}
export {
  De as default
};
