import { defineComponent as _, inject as C, resolveDirective as l, openBlock as i, createElementBlock as r, withDirectives as s, normalizeClass as v, unref as h, createElementVNode as o, createCommentVNode as g, toDisplayString as x, withModifiers as b, withKeys as T, vShow as z, computed as I, ref as j, onMounted as A, resolveComponent as B, createBlock as M, withCtx as w, createTextVNode as O, Fragment as S, renderList as V, createVNode as $ } from "vue";
import { E, _ as N, c as D } from "./main-C-NQiA0Q.js";
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
import "@arcgis/core/views/MapView";
import "@arcgis/core/webmap/background/ColorBackground";
import "deepmerge";
import "terraformer";
import "proj4";
import { useI18n as y } from "vue-i18n";
const K = { class: "mt-10" }, q = ["aria-label"], F = ["alt", "src"], H = ["alt"], L = { class: "absolute flex w-full bg-black opacity-75 text-white h-30 bottom-6 items-center" }, G = { class: "pl-5" }, J = { class: "ml-auto pr-5" }, P = ["content"], Q = /* @__PURE__ */ _({
  __name: "item",
  props: {
    area: {
      type: Object,
      required: !0
    },
    showThumbnail: {
      type: Boolean
    }
  },
  setup(t) {
    const { t: c } = y(), m = C("iApi"), a = (n) => {
      if (!n.extent) {
        console.error("selected area of interest doesn't have an extent specified.");
        return;
      }
      m?.geo.map.zoomMapTo(E.fromConfig("area-of-interest-extent", n.extent));
    };
    return (n, e) => {
      const d = l("truncate"), p = l("tippy"), u = l("focus-item");
      return i(), r("div", K, [
        s((i(), r("button", {
          type: "button",
          class: v(["area-of-interest-item-button bg-gray-300 w-full", { "border border-gray-300": t.showThumbnail }]),
          "aria-label": h(c)("areas-of-interest.select"),
          onClick: e[2] || (e[2] = (f) => a(t.area))
        }, [
          o("div", null, [
            o("div", {
              class: v(["flex hover:opacity-50 area-of-interest-item-image", t.showThumbnail ? "h-180" : "h-30"])
            }, [
              t.area.thumbnail ? (i(), r("img", {
                key: 0,
                class: "w-full bg-white object-contain",
                alt: t.area.altText || t.area.title,
                src: t.area.thumbnail
              }, null, 8, F)) : t.showThumbnail ? (i(), r("img", {
                key: 1,
                class: "w-full bg-white object-contain py-30",
                alt: t.area.altText || t.area.title,
                src: "https://openclipart.org/image/800px/160615"
              }, null, 8, H)) : g("", !0)
            ], 2)
          ]),
          o("div", L, [
            s((i(), r("div", G, [
              o("span", null, x(t.area.title), 1)
            ])), [
              [d]
            ]),
            s(o("div", J, [
              s((i(), r("a", {
                onClick: e[0] || (e[0] = b(() => {
                }, ["stop"])),
                onKeydown: e[1] || (e[1] = T(b(() => {
                }, ["prevent"]), ["enter", "space"])),
                content: t.area.description
              }, e[3] || (e[3] = [
                o("svg", {
                  class: "fill-current w-16 h-16",
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 24 24"
                }, [
                  o("path", {
                    d: "M0 0h24v24H0z",
                    fill: "none"
                  }),
                  o("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" })
                ], -1)
              ]), 40, P)), [
                [p, {
                  placement: "bottom",
                  trigger: "click focus"
                }]
              ])
            ], 512), [
              [z, t.area.description]
            ])
          ])
        ], 10, q)), [
          [u]
        ])
      ]);
    };
  }
}), R = /* @__PURE__ */ N(Q, [["__scopeId", "data-v-06be115a"]]), U = { class: "h-600 overflow-y-auto" }, W = { class: "mx-5" }, X = { key: 0 }, Nt = /* @__PURE__ */ _({
  __name: "screen",
  props: {
    panel: {
      type: Object
    }
  },
  setup(t) {
    const { t: c } = y(), m = D(), a = I(() => m.areas);
    let n = j(!1);
    return A(() => {
      n.value = !!a.value?.some((e) => e.thumbnail);
    }), (e, d) => {
      const p = B("panel-screen"), u = l("focus-list");
      return i(), M(p, { panel: t.panel }, {
        header: w(() => [
          O(x(h(c)("areas-of-interest.title")), 1)
        ]),
        content: w(() => [
          o("div", U, [
            o("div", W, [
              a.value.length > 0 ? s((i(), r("ul", X, [
                (i(!0), r(S, null, V(a.value, (f, k) => (i(), r("li", { key: k }, [
                  $(R, {
                    area: f,
                    "show-thumbnail": h(n),
                    class: "block relative overflow-hidden"
                  }, null, 8, ["area", "show-thumbnail"])
                ]))), 128))
              ])), [
                [u]
              ]) : g("", !0)
            ])
          ])
        ]),
        _: 1
      }, 8, ["panel"]);
    };
  }
});
export {
  Nt as _
};
