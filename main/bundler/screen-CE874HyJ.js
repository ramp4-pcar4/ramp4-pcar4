import { defineComponent as S, ref as h, resolveDirective as x, withDirectives as f, createElementBlock as c, openBlock as s, unref as y, normalizeClass as M, createElementVNode as p, inject as j, computed as P, onMounted as U, onBeforeUnmount as F, createBlock as N, toDisplayString as E, withCtx as L, createCommentVNode as O, createVNode as C, Fragment as J, renderList as K, createTextVNode as z, toRaw as Q, nextTick as V, resolveComponent as W } from "vue";
import { _ as X, G as R, a3 as Z } from "./main-MXZmlokj.js";
import "pinia";
import { useI18n as $ } from "vue-i18n";
import "screenfull";
import "lodash.clonedeep";
import "vue-tippy";
import "linkify-html";
import "@popperjs/core";
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
import "@terraformer/arcgis";
import "csv2geojson";
import "redaxios";
import "await-to-js";
import "svg.js";
import ee from "vuedraggable";
const te = ["data-layer-id", "data-direction", "aria-disabled", "aria-label"], re = /* @__PURE__ */ S({
  __name: "reorder-button",
  props: {
    disabled: {
      type: Boolean
    },
    direction: {
      type: String,
      required: !0
    },
    layerId: {
      type: [String, Number],
      required: !0
    }
  },
  setup(v, { expose: n }) {
    const { t: d } = $(), i = h(null);
    return n({ buttonRef: i }), (b, g) => {
      const _ = x("focus-item"), w = x("tippy");
      return f((s(), c("button", {
        ref_key: "buttonRef",
        ref: i,
        type: "button",
        "data-layer-id": v.layerId,
        "data-direction": v.direction,
        class: M(`
            pb-10 p-8
            ${v.direction === "up" ? "rotate-180" : ""}
            ${v.disabled ? "text-gray-300 cursor-not-allowed" : "text-gray-500 hover:text-black"}
        `),
        "aria-disabled": v.disabled,
        "aria-label": y(d)(`layer-reorder.move.${v.direction}`)
      }, g[0] || (g[0] = [
        p("svg", {
          class: "fill-current w-20 h-20",
          viewBox: "0 0 23 21"
        }, [
          p("path", { d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" })
        ], -1)
      ]), 10, te)), [
        [_],
        [w, { content: y(d)(`layer-reorder.move.${v.direction}`), placement: "top-start", aria: "describedby" }]
      ]);
    };
  }
}), D = /* @__PURE__ */ X(re, [["__scopeId", "data-v-0f744ce1"]]), oe = {
  key: 0,
  class: "flex-1 ms-10"
}, ae = { class: "p-5" }, ne = ["aria-label", "content"], ie = { class: "flex items-center p-5 h-44 cursor-pointer hover:bg-gray-200" }, se = ["onClick", "content", "aria-label"], de = {
  key: 0,
  class: "fill-current w-20 h-20 mx-4",
  viewBox: "0 0 24 24"
}, le = {
  key: 1,
  class: "fill-current w-20 h-20 mx-4",
  viewBox: "0 0 24 24"
}, ce = { class: "flex-1 mx-10" }, pe = {
  key: 0,
  class: "items-center p-5 pl-30 default-focus-style cursor-pointer"
}, ue = ["content", "aria-label"], me = ["content", "aria-label"], ve = { class: "flex-1 mx-10" }, ye = /* @__PURE__ */ S({
  __name: "layer-component",
  setup(v) {
    const n = j("iApi"), { t: d } = $(), i = h([]), b = h({}), g = h([]), _ = h([]), w = h([]), G = P(() => n.animate), I = () => {
      const e = {};
      i.value.forEach((o) => {
        e[o.id] = o.isExpanded;
      }), i.value = [];
      const r = n.geo.layer.layerOrderIds(), a = [...Q(n.geo.layer.allLayersOnMap(!0))].filter(
        (o) => !o.isCosmetic && o.layerState !== Z.ERROR
      );
      i.value = a.reverse().map((o, l) => {
        const u = r.indexOf(o.id);
        return {
          id: o.id,
          uid: o.uid,
          name: "",
          orderIdx: u,
          componentIdx: l,
          isExpanded: e[o.id] || !1,
          isLoaded: !1,
          supportsSublayers: o.supportsSublayers,
          sublayers: []
        };
      }), a.forEach((o) => {
        o.loadPromise().then(() => {
          H(o);
        }).catch(() => 1);
      });
    }, H = (e) => {
      const r = i.value.find(
        (a) => a.id === e.id
      );
      r && (r.name = e.name, r.sublayers = e.sublayers.filter((a) => a !== void 0 && !a.isRemoved).map((a) => ({
        id: a.id,
        name: a.name
      })), r.isLoaded = !0);
    }, T = (e) => {
      e.supportsSublayers && (e.isExpanded = !e.isExpanded, n.updateAlert(
        d(e.isExpanded ? "layer-reorder.expanded" : "layer-reorder.collapsed", {
          name: e.name
        })
      ));
    }, q = () => {
      g.value = i.value.map((e) => e.orderIdx);
    }, Y = (e) => {
      if (!e.moved)
        return;
      const r = e.moved.element, a = e.moved.oldIndex, o = e.moved.newIndex;
      if (a === o)
        return;
      const l = n.geo.layer.getLayer(r.uid), u = g.value[o];
      n.geo.map.reorder(l, u), n.updateAlert(
        d("layer-reorder.layermoved", {
          name: r.name,
          index: u
        })
      );
    }, A = async (e, r) => {
      const a = n.geo.layer.getLayer(e.id), o = i.value.indexOf(e);
      if (a === void 0 || o === -1)
        return;
      const l = o - r;
      if (l < 0 || l >= i.value.length)
        return;
      const u = i.value[l].orderIdx;
      n.geo.map.reorder(a, u), n.updateAlert(
        d("layer-reorder.layermoved", {
          name: e.name,
          index: u
        })
      );
      const k = r === 1 ? "up" : "down";
      await V(), await V(), b.value[e.id + "-" + k]?.focus();
    }, B = (e) => e < 0 || e > i.value.length - 1;
    return U(() => {
      I(), _.value.push(
        n.event.on(R.LAYER_REMOVE, () => {
          I();
        })
      ), _.value.push(
        n.event.on(R.LAYER_LAYERSTATECHANGE, () => {
          I();
        })
      ), _.value.push(
        n.event.on(R.MAP_REORDER, () => {
          I();
        })
      );
    }), F(() => {
      _.value.forEach((e) => n.event.off(e)), w.value.forEach((e) => e());
    }), (e, r) => {
      const a = x("truncate"), o = x("focus-item"), l = x("tippy"), u = x("focus-container"), k = x("focus-list");
      return s(), c("div", null, [
        i.value.length === 0 ? f((s(), c("div", oe, [
          p("span", ae, E(y(d)("layer-reorder.nolayers")), 1)
        ])), [
          [a]
        ]) : (s(), N(y(ee), {
          key: 1,
          class: "p-3",
          modelValue: i.value,
          "onUpdate:modelValue": r[0] || (r[0] = (t) => i.value = t),
          "item-key": "uid",
          animation: G.value ? 200 : 0,
          onChange: Y,
          onStart: q
        }, {
          item: L(({ element: t }) => [
            t.isLoaded ? f((s(), c("div", {
              key: 0,
              class: M(`
                        mt-4
                        relative
                        ${t.isExpanded ? "hover:bg-gray-200" : ""}
                        border-2
                        border-gray-300
                        default-focus-style
                    `),
              "aria-label": t.name,
              content: t.name
            }, [
              r[3] || (r[3] = p("div", { class: "display-none" }, null, -1)),
              p("div", ie, [
                t.supportsSublayers ? f((s(), c("button", {
                  key: 0,
                  type: "button",
                  onClick: (m) => T(t),
                  class: "text-gray-500 hover:text-black p-5",
                  content: y(d)(`layer-reorder.${t.isExpanded ? "collapse" : "expand"}`),
                  "aria-label": y(d)(`layer-reorder.${t.isExpanded ? "collapse" : "expand"}`)
                }, [
                  t.isExpanded ? (s(), c("svg", de, r[1] || (r[1] = [
                    p("path", {
                      d: "M0 0h24v24H0z",
                      fill: "none"
                    }, null, -1),
                    p("path", { d: "M19 13H5v-2h14v2z" }, null, -1)
                  ]))) : (s(), c("svg", le, r[2] || (r[2] = [
                    p("path", { d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" }, null, -1)
                  ])))
                ], 8, se)), [
                  [o],
                  [l, {
                    placement: "right",
                    aria: "describedby"
                  }]
                ]) : O("", !0),
                f((s(), c("div", ce, [
                  p("span", null, E(t.name), 1)
                ])), [
                  [a]
                ]),
                C(D, {
                  ref: (m) => b.value[t.id + "-up"] = m?.buttonRef || null,
                  disabled: B(t.componentIdx - 1),
                  direction: "up",
                  layerId: t.id,
                  class: "px-7",
                  onClick: (m) => A(t, 1)
                }, null, 8, ["disabled", "layerId", "onClick"]),
                C(D, {
                  ref: (m) => b.value[t.id + "-down"] = m?.buttonRef || null,
                  disabled: B(t.componentIdx + 1),
                  direction: "down",
                  layerId: t.id,
                  class: "px-7",
                  onClick: (m) => A(t, -1)
                }, null, 8, ["disabled", "layerId", "onClick"])
              ]),
              t.isExpanded && t.sublayers.length > 0 ? f((s(), c("div", pe, [
                (s(!0), c(J, null, K(t.sublayers, (m) => f((s(), c("div", {
                  key: m.id,
                  class: "m-15 default-focus-style",
                  content: m.name,
                  "aria-label": m.name
                }, [
                  z(E(m.name), 1)
                ], 8, ue)), [
                  [a],
                  [l, {
                    placement: "bottom-start",
                    aria: "describedby"
                  }],
                  [u]
                ])), 128))
              ])), [
                [k]
              ]) : O("", !0)
            ], 10, ne)), [
              [l, {
                placement: "top-start",
                aria: "describedby"
              }],
              [u]
            ]) : f((s(), c("div", {
              key: 1,
              class: "flex items-center p-5 mx-8 h-44 default-focus-style",
              content: y(d)("layer-reorder.loading"),
              "aria-label": y(d)("layer-reorder.loading"),
              "truncate-trigger": ""
            }, [
              r[4] || (r[4] = p("div", { class: "animate-spin spinner h-20 w-20 px-5" }, null, -1)),
              p("div", ve, [
                p("span", null, E(y(d)("layer-reorder.loading")), 1)
              ])
            ], 8, me)), [
              [l, {
                placement: "top-start",
                aria: "describedby"
              }],
              [u]
            ])
          ]),
          _: 1
        }, 8, ["modelValue", "animation"]))
      ]);
    };
  }
}), Ze = /* @__PURE__ */ S({
  __name: "screen",
  props: {
    panel: {
      type: Object,
      required: !0
    }
  },
  setup(v) {
    const { t: n } = $();
    return (d, i) => {
      const b = W("panel-screen");
      return s(), N(b, { panel: v.panel }, {
        header: L(() => [
          z(E(y(n)("layer-reorder.title")), 1)
        ]),
        content: L(() => [
          C(ye)
        ]),
        _: 1
      }, 8, ["panel"]);
    };
  }
});
export {
  Ze as default
};
