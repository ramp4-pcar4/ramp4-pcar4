import { defineComponent as L, ref as v, resolveDirective as k, withDirectives as y, createElementBlock as c, openBlock as l, unref as m, normalizeClass as O, createElementVNode as p, inject as T, computed as q, onMounted as Y, onBeforeUnmount as j, createCommentVNode as I, createVNode as E, toDisplayString as b, withCtx as w, Fragment as P, renderList as U, createTextVNode as V, toRaw as F, resolveComponent as J, createBlock as K } from "vue";
import { _ as Q, G as R, a0 as W } from "./main-6dWPqJr6.js";
import "pinia";
import { useI18n as C } from "vue-i18n";
import "screenfull";
import "lodash-es";
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
import X from "vuedraggable";
const Z = ["data-layer-id", "data-direction", "aria-disabled", "aria-label"], ee = /* @__PURE__ */ L({
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
  setup(u, { expose: i }) {
    const { t: s } = C(), d = v(null);
    return i({ buttonRef: d }), (x, f) => {
      const h = k("tippy");
      return y((l(), c("button", {
        ref_key: "buttonRef",
        ref: d,
        type: "button",
        "data-layer-id": u.layerId,
        "data-direction": u.direction,
        class: O(`
            pb-10 p-8
            ${u.direction === "up" ? "rotate-180" : ""}
            ${u.disabled ? "text-gray-300 cursor-not-allowed" : "text-gray-500 hover:text-black"}
        `),
        "aria-disabled": u.disabled,
        "aria-label": m(s)(`layer-reorder.move.${u.direction}`)
      }, f[0] || (f[0] = [
        p("svg", {
          class: "fill-current w-20 h-20",
          viewBox: "0 0 23 21"
        }, [
          p("path", { d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" })
        ], -1)
      ]), 10, Z)), [
        [h, { content: m(s)(`layer-reorder.move.${u.direction}`), placement: "top-start", aria: "describedby" }]
      ]);
    };
  }
}), B = /* @__PURE__ */ Q(ee, [["__scopeId", "data-v-25464b9f"]]), te = {
  key: 0,
  class: "flex-1 ms-10"
}, re = { class: "p-5" }, oe = ["aria-label", "content"], ae = {
  class: "display-none",
  ref: "list"
}, ne = { class: "flex items-center p-5 h-44 cursor-pointer hover:bg-gray-200" }, ie = ["onClick", "content", "aria-label"], de = {
  key: 0,
  class: "fill-current w-20 h-20 mx-4",
  viewBox: "0 0 24 24"
}, se = {
  key: 1,
  class: "fill-current w-20 h-20 mx-4",
  viewBox: "0 0 24 24"
}, le = { class: "flex-1 mx-10" }, ce = {
  key: 0,
  class: "items-center p-5 pl-30 cursor-pointer"
}, pe = ["content", "aria-label"], ue = ["content", "aria-label"], me = { class: "flex-1 mx-10" }, ve = /* @__PURE__ */ L({
  __name: "layer-component",
  setup(u) {
    const i = T("iApi"), { t: s } = C(), d = v([]), x = v({}), f = v({}), h = v([]), _ = v([]), D = v([]), M = q(() => i.animate), g = () => {
      const e = {};
      d.value.forEach((r) => {
        e[r.id] = r.isExpanded;
      }), d.value = [];
      const o = i.geo.layer.layerOrderIds(), n = [...F(i.geo.layer.allLayersOnMap(!0))].filter(
        (r) => !r.isCosmetic && r.layerState !== W.ERROR
      );
      d.value = n.reverse().map((r, t) => {
        const a = o.indexOf(r.id);
        return {
          id: r.id,
          uid: r.uid,
          name: "",
          orderIdx: a,
          componentIdx: t,
          isExpanded: e[r.id] || !1,
          isLoaded: !1,
          supportsSublayers: r.supportsSublayers,
          sublayers: []
        };
      }), n.forEach((r) => {
        r.loadPromise().then(() => {
          N(r);
        }).catch(() => 1);
      });
    }, N = (e) => {
      const o = d.value.find(
        (n) => n.id === e.id
      );
      o && (o.name = e.name, o.sublayers = e.sublayers.filter((n) => n !== void 0 && !n.isRemoved).map((n) => ({
        id: n.id,
        name: n.name
      })), o.isLoaded = !0);
    }, z = (e) => {
      e.supportsSublayers && (e.isExpanded = !e.isExpanded, i.updateAlert(
        s(e.isExpanded ? "layer-reorder.expanded" : "layer-reorder.collapsed", {
          name: e.name
        })
      ));
    }, G = () => {
      h.value = d.value.map((e) => e.orderIdx);
    }, H = (e) => {
      if (!e.moved)
        return;
      const o = e.moved.element, n = e.moved.oldIndex, r = e.moved.newIndex;
      if (n === r)
        return;
      const t = i.geo.layer.getLayer(o.uid), a = h.value[r];
      i.geo.map.reorder(t, a), i.updateAlert(
        s("layer-reorder.layermoved", {
          name: o.name,
          index: a
        })
      );
    }, S = async (e, o) => {
      const n = i.geo.layer.getLayer(e.id), r = d.value.indexOf(e);
      if (n === void 0 || r === -1)
        return;
      const t = r - o;
      if (t < 0 || t >= d.value.length)
        return;
      const a = d.value[t].orderIdx;
      i.geo.map.reorder(n, a), i.updateAlert(
        s("layer-reorder.layermoved", {
          name: e.name,
          index: a
        })
      );
      const A = o === 1 ? "up" : "down";
      setTimeout(() => {
        x.value[e.id + "-" + A]?.focus();
      }, 0);
    }, $ = (e) => e < 0 || e > d.value.length - 1;
    return Y(async () => {
      g(), _.value.push(
        i.event.on(R.LAYER_REMOVE, () => {
          g();
        })
      ), _.value.push(
        i.event.on(R.LAYER_LAYERSTATECHANGE, () => {
          g();
        })
      ), _.value.push(
        i.event.on(R.MAP_REORDER, () => {
          g();
        })
      );
    }), j(() => {
      _.value.forEach((e) => i.event.off(e)), D.value.forEach((e) => e());
    }), (e, o) => {
      const n = k("truncate"), r = k("tippy");
      return l(), c("div", null, [
        d.value.length === 0 ? y((l(), c("div", te, [
          p("span", re, b(m(s)("layer-reorder.nolayers")), 1)
        ])), [
          [n]
        ]) : I("", !0),
        E(m(X), {
          class: "p-3",
          modelValue: d.value,
          "onUpdate:modelValue": o[0] || (o[0] = (t) => d.value = t),
          "item-key": "uid",
          animation: M.value ? 200 : 0,
          onChange: H,
          onStart: G
        }, {
          item: w(({ element: t }) => [
            t.isLoaded ? y((l(), c("div", {
              key: 0,
              class: O(`
                        mt-4
                        relative
                        ${t.isExpanded ? "hover:bg-gray-200" : ""}
                        border-2
                        border-gray-300
                    `),
              "aria-label": t.name,
              content: t.name,
              ref: (a) => f.value[t.id] = a || null
            }, [
              p("div", ae, null, 512),
              p("div", ne, [
                t.supportsSublayers ? y((l(), c("button", {
                  key: 0,
                  type: "button",
                  onClick: (a) => z(t),
                  class: "text-gray-500 hover:text-black p-5",
                  content: m(s)(`layer-reorder.${t.isExpanded ? "collapse" : "expand"}`),
                  "aria-label": m(s)(`layer-reorder.${t.isExpanded ? "collapse" : "expand"}`)
                }, [
                  t.isExpanded ? (l(), c("svg", de, o[1] || (o[1] = [
                    p("path", {
                      d: "M0 0h24v24H0z",
                      fill: "none"
                    }, null, -1),
                    p("path", { d: "M19 13H5v-2h14v2z" }, null, -1)
                  ]))) : (l(), c("svg", se, o[2] || (o[2] = [
                    p("path", { d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" }, null, -1)
                  ])))
                ], 8, ie)), [
                  [r, {
                    placement: "right",
                    aria: "describedby"
                  }]
                ]) : I("", !0),
                y((l(), c("div", le, [
                  p("span", null, b(t.name), 1)
                ])), [
                  [n]
                ]),
                E(B, {
                  ref: (a) => x.value[t.id + "-up"] = a?.buttonRef || null,
                  disabled: $(t.componentIdx - 1),
                  direction: "up",
                  layerId: t.id,
                  class: "px-7",
                  onClick: (a) => S(t, 1)
                }, null, 8, ["disabled", "layerId", "onClick"]),
                E(B, {
                  ref: (a) => x.value[t.id + "-down"] = a?.buttonRef || null,
                  disabled: $(t.componentIdx + 1),
                  direction: "down",
                  layerId: t.id,
                  class: "px-7",
                  onClick: (a) => S(t, -1)
                }, null, 8, ["disabled", "layerId", "onClick"])
              ]),
              t.isExpanded && t.sublayers.length > 0 ? (l(), c("div", ce, [
                (l(!0), c(P, null, U(t.sublayers, (a) => y((l(), c("div", {
                  key: a.id,
                  class: "m-15",
                  content: a.name,
                  "aria-label": a.name
                }, [
                  V(b(a.name), 1)
                ], 8, pe)), [
                  [n],
                  [r, {
                    placement: "bottom-start",
                    aria: "describedby"
                  }]
                ])), 128))
              ])) : I("", !0)
            ], 10, oe)), [
              [r, {
                placement: "top-start",
                aria: "describedby"
              }]
            ]) : y((l(), c("div", {
              key: 1,
              class: "flex items-center p-5 mx-8 h-44",
              content: m(s)("layer-reorder.loading"),
              "aria-label": m(s)("layer-reorder.loading"),
              "truncate-trigger": ""
            }, [
              o[3] || (o[3] = p("div", { class: "animate-spin spinner h-20 w-20 px-5" }, null, -1)),
              p("div", me, [
                p("span", null, b(m(s)("layer-reorder.loading")), 1)
              ])
            ], 8, ue)), [
              [r, {
                placement: "top-start",
                aria: "describedby"
              }]
            ])
          ]),
          _: 1
        }, 8, ["modelValue", "animation"])
      ]);
    };
  }
}), Ze = /* @__PURE__ */ L({
  __name: "screen",
  props: {
    panel: {
      type: Object,
      required: !0
    }
  },
  setup(u) {
    const { t: i } = C();
    return (s, d) => {
      const x = J("panel-screen");
      return l(), K(x, { panel: u.panel }, {
        header: w(() => [
          V(b(m(i)("layer-reorder.title")), 1)
        ]),
        content: w(() => [
          E(ve)
        ]),
        _: 1
      }, 8, ["panel"]);
    };
  }
});
export {
  Ze as default
};
