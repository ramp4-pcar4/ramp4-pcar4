import { defineComponent as V, computed as w, resolveDirective as R, openBlock as t, createElementBlock as r, createElementVNode as a, normalizeClass as X, unref as l, withKeys as z, withModifiers as Z, withDirectives as x, createTextVNode as S, createCommentVNode as k, inject as q, ref as C, onBeforeMount as Q, watch as W, onMounted as J, onBeforeUnmount as O, toDisplayString as _, Fragment as G, renderList as I, renderSlot as Y, resolveComponent as ee, createBlock as D, withCtx as H, createVNode as N } from "vue";
import { h as A, a as te, G as oe, _ as re, I as se, J as ne } from "./main-C-NQiA0Q.js";
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
import { debounce as U } from "throttle-debounce";
import { useI18n as F } from "vue-i18n";
import "pinia";
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
const ae = { class: "rv-geosearch-bar relative h-26 mx-8 mb-8" }, ie = ["placeholder", "value", "aria-label"], le = { class: "absolute inset-y-0 right-8 grid w-10 place-content-center" }, ce = ["aria-label", "content"], pe = /* @__PURE__ */ V({
  __name: "search-bar",
  setup(T) {
    const { t: s } = F(), p = A(), c = te(), g = w(() => p.searchVal), n = w(
      () => ['"', "$", "!", "*", "+", "?", "^", "{", "}", "(", ")", "|", "[", "]"].filter((u) => p.searchVal.includes(u)).join("")
    ), i = (u) => {
      p.setSearchTerm(u), p.setSearchRegex(u);
    }, b = U(500, (u) => {
      i(u);
    });
    return (u, o) => {
      const e = R("tippy");
      return t(), r("div", ae, [
        a("input", {
          type: "text",
          class: X(["border-b w-full text-base py-8 outline-none focus:shadow-outline border-gray-600 h-full min-w-0", { "border-yellow-500": n.value }]),
          placeholder: l(s)("geosearch.searchText"),
          value: g.value,
          onInput: o[0] || (o[0] = (d) => l(b)(d.target.value)),
          onKeyup: o[1] || (o[1] = z((d) => {
            l(c).mobileView && d.target.blur();
          }, ["enter"])),
          "aria-label": l(s)("geosearch.searchText"),
          onKeypress: o[2] || (o[2] = z(Z(() => {
          }, ["prevent"]), ["enter"])),
          enterkeyhint: "done"
        }, null, 42, ie),
        a("span", le, [
          n.value ? x((t(), r("button", {
            key: 0,
            class: "cursor-default",
            "aria-label": l(s)("geosearch.badChars", { chars: n.value }),
            content: l(s)("geosearch.badChars", { chars: n.value })
          }, o[3] || (o[3] = [
            S(" ⚠ ")
          ]), 8, ce)), [
            [e]
          ]) : k("", !0)
        ])
      ]);
    };
  }
}), ue = { class: "w-fit inline-block sm:w-1/2 h-26 mb-8 sm:mb-0 pr-16 sm:pr-0" }, de = ["value", "aria-label"], me = {
  value: "",
  disabled: "",
  hidden: ""
}, ve = { class: "sm:w-1/2 h-26 sm:mx-16 flex" }, he = ["value", "aria-label"], be = {
  value: "",
  disabled: "",
  hidden: ""
}, _e = ["disabled", "content", "aria-label"], fe = /* @__PURE__ */ V({
  __name: "top-filters",
  setup(T) {
    const { t: s } = F(), p = q("iApi"), c = A(), g = C(), n = C(), i = C(), b = C([]), u = C([]), o = C([]), e = w(() => c.queryParams), d = w(() => p.language), L = (h) => c.setProvince(h), $ = (h) => c.setType(h), B = () => {
      L({}), $({});
    }, P = () => {
      c.initService(p.language, p.fixture.get("geosearch").config);
      const h = b.value.find((v) => e.value.province === v.name)?.code, f = u.value.find((v) => e.value.type === v.name)?.code;
      c.getProvinces.then((v) => {
        b.value = v, L({
          province: v.find((E) => E.code === h)?.name,
          forceReRun: !0
        });
      }), c.getTypes.then((v) => {
        u.value = v, $({
          type: v.find((E) => E.code === f)?.name,
          forceReRun: !0
        });
      });
    }, m = () => {
      n.value._tippy.hide();
    }, M = () => {
      i.value._tippy.hide();
    }, j = (h) => {
      h.key === "Tab" && n.value?.matches(":focus") && navigator.userAgent.includes("Firefox") ? n.value._tippy.show() : n.value._tippy.hide();
    }, K = (h) => {
      h.key === "Tab" && i.value?.matches(":focus") && navigator.userAgent.includes("Firefox") ? i.value._tippy.show() : i.value._tippy.hide();
    };
    return Q(() => {
      P(), o.value.push(W(d, P));
    }), J(() => {
      n.value?.addEventListener("blur", m), n.value?.addEventListener("keyup", j), i.value?.addEventListener("blur", M), i.value?.addEventListener("keyup", K);
    }), O(() => {
      o.value.forEach((h) => h()), n.value?.removeEventListener("blur", m), n.value?.removeEventListener("keyup", j), i.value?.removeEventListener("blur", M), i.value?.removeEventListener("keyup", K);
    }), (h, f) => {
      const v = R("truncate"), E = R("tippy");
      return t(), r("div", {
        class: "rv-geosearch-top-filters sm:flex items-center w-full ml-8 mb-14",
        ref_key: "el",
        ref: g
      }, [
        a("div", ue, [
          x((t(), r("select", {
            class: "border-b border-b-gray-600 w-full h-full py-0 cursor-pointer",
            value: e.value.province,
            "aria-label": l(s)("geosearch.filters.province"),
            onChange: f[0] || (f[0] = (y) => L({
              province: y.target.value
            })),
            ref_key: "selectProvince",
            ref: n
          }, [
            x((t(), r("option", me, [
              S(_(l(s)("geosearch.filters.province")), 1)
            ])), [
              [v]
            ]),
            (t(!0), r(G, null, I(b.value, (y) => x((t(), r("option", {
              key: y.code
            }, [
              S(_(y.name), 1)
            ])), [
              [v]
            ])), 128))
          ], 40, de)), [
            [v],
            [E, {
              content: l(s)("select.items"),
              trigger: "manual",
              placement: "top-start"
            }]
          ])
        ]),
        a("div", ve, [
          x((t(), r("select", {
            class: "border-b border-b-gray-600 w-full h-full py-0 cursor-pointer max-w-150",
            value: e.value.type,
            "aria-label": l(s)("geosearch.filters.type"),
            onChange: f[1] || (f[1] = (y) => $({
              type: y.target.value
            })),
            ref_key: "selectFilter",
            ref: i
          }, [
            a("option", be, _(l(s)("geosearch.filters.type")), 1),
            (t(!0), r(G, null, I(u.value, (y) => (t(), r("option", {
              key: y.code
            }, _(y.name), 1))), 128))
          ], 40, he)), [
            [v],
            [E, {
              content: l(s)("select.items"),
              trigger: "manual",
              placement: "top-start"
            }]
          ]),
          x((t(), r("button", {
            type: "button",
            class: "text-gray-500 w-1/8 h-24 pl-8 pr-16 sm:pr-8 hover:text-black disabled:cursor-default disabled:text-gray-400",
            disabled: !e.value.type && !e.value.province,
            onClick: B,
            content: l(s)("geosearch.filters.clear"),
            "aria-label": l(s)("geosearch.filters.clear")
          }, f[2] || (f[2] = [
            a("div", { class: "rv-geosearch-icon" }, [
              a("svg", {
                class: "fill-current w-18 h-18",
                viewBox: "0 0 23 21"
              }, [
                a("path", { d: "M 14.7574,20.8284L 17.6036,17.9822L 14.7574,15.1716L 16.1716,13.7574L 19.0178,16.568L 21.8284,13.7574L 23.2426,15.1716L 20.432,17.9822L 23.2426,20.8284L 21.8284,22.2426L 19.0178,19.3964L 16.1716,22.2426L 14.7574,20.8284 Z M 2,2L 19.9888,2.00001L 20,2.00001L 20,2.01122L 20,3.99999L 19.9207,3.99999L 13,10.9207L 13,22.909L 8.99999,18.909L 8.99999,10.906L 2.09405,3.99999L 2,3.99999L 2,2 Z " })
              ])
            ], -1)
          ]), 8, _e)), [
            [E, { placement: "bottom" }]
          ])
        ])
      ], 512);
    };
  }
}), ge = { class: "rv-geosearch-bottom-filters" }, ye = { class: "bg-white" }, xe = { class: "ml-8 cursor-pointer font-normal" }, we = ["checked"], Le = /* @__PURE__ */ V({
  __name: "bottom-filters",
  setup(T) {
    const { t: s } = F(), p = q("iApi"), c = A(), g = w(() => c.resultsVisible), n = U(300, (o) => {
      b(o).then((e) => {
        i({
          extent: e,
          visible: g.value
        });
      });
    }), i = (o) => {
      c.setMapExtent(o);
    }, b = async (o) => o.sr.wkid === 4326 ? o : await p.geo.proj.projectGeometry(4326, o), u = (o) => {
      b(p.geo.map.getExtent()).then((e) => {
        i({
          extent: e,
          visible: o
        });
      });
    };
    return J(() => {
      p.event.on(oe.MAP_EXTENTCHANGE, n, "geosearch_map_extent");
    }), O(() => {
      p.event.off("geosearch_map_extent");
    }), (o, e) => (t(), r("div", ge, [
      a("div", ye, [
        a("label", xe, [
          a("input", {
            type: "checkbox",
            class: "border-2 mx-8 border-gray-600 cursor-pointer",
            checked: g.value,
            onChange: e[0] || (e[0] = (d) => u(d.target.checked)),
            onKeypress: e[1] || (e[1] = z(Z(() => {
            }, ["prevent"]), ["enter"]))
          }, null, 40, we),
          S(_(l(s)("geosearch.visible")), 1)
        ])
      ])
    ]));
  }
}), ke = {}, $e = { class: "w-full h-6 relative overflow-hidden rounded-full indeterminate mb-14" }, Ee = {
  class: "h-full progressbar bg-blue-800 rounded-full top-0",
  "aria-valuemin": "0",
  "aria-valuemax": "100"
}, Se = { class: "flex items-center h-full" };
function Te(T, s) {
  return t(), r("div", $e, [
    a("div", Ee, [
      a("span", Se, [
        Y(T.$slots, "default", {}, void 0, !0)
      ])
    ])
  ]);
}
const Ce = /* @__PURE__ */ re(ke, [["render", Te], ["__scopeId", "data-v-0a8d1c36"]]), Re = { class: "flex flex-col h-full" }, Pe = {
  key: 1,
  class: "text-red-900 text-xs px-8 mb-10"
}, Me = {
  key: 2,
  class: "px-8 mb-10 py-8 flex-grow text-wrap border-y border-gray-600 overflow-y-auto"
}, Ve = { class: "relative h-48" }, Ae = { class: "font-bold text-blue-600" }, Fe = {
  key: 3,
  class: "rv-results-list flex-grow mb-5 border-t border-b border-gray-600 overflow-y-auto"
}, Be = ["onClick"], je = { class: "rv-result-description px-8" }, Ne = { class: "flex-1 text-left truncate font-bold leading-tight" }, ze = ["innerHTML"], Ge = {
  key: 0,
  class: "text-gray-600 text-sm"
}, Ie = {
  key: 1,
  class: "hidden"
}, qe = {
  key: 2,
  class: "text-sm font-normal"
}, Gt = /* @__PURE__ */ V({
  __name: "screen",
  props: {
    panel: {
      type: Object
    }
  },
  setup(T) {
    const { t: s } = F(), p = q("iApi"), c = A(), g = w(() => c.searchVal.replace(/["!*$+?^{}()|[\]\\]/g, "").trim()), n = w(() => c.searchResults), i = w(() => c.loadingResults), b = w(() => c.failedServices), u = (e) => {
      let d = new se(
        "zoomies",
        [
          [
            [e.bbox[0], e.bbox[1]],
            [e.bbox[0], e.bbox[3]],
            [e.bbox[2], e.bbox[3]],
            [e.bbox[2], e.bbox[1]],
            [e.bbox[0], e.bbox[1]]
          ]
        ],
        ne.latLongSR(),
        !0
      );
      p.geo.map.zoomMapTo(d);
    }, o = (e, d) => {
      const L = e.replace(
        new RegExp(`${c.searchRegex}`, "gi"),
        ($) => '<span class="font-bold text-blue-600">' + $ + "</span>"
      );
      return d ? L + "," : L;
    };
    return (e, d) => {
      const L = ee("panel-screen"), $ = R("truncate"), B = R("focus-item"), P = R("focus-list");
      return t(), D(L, { panel: T.panel }, {
        header: H(() => [
          S(_(l(s)("geosearch.title")), 1)
        ]),
        content: H(() => [
          a("div", Re, [
            N(pe),
            N(fe),
            i.value ? (t(), D(Ce, {
              key: 0,
              class: "flex-none"
            })) : k("", !0),
            b.value.length > 0 && !i.value ? (t(), r("div", Pe, _(l(s)("geosearch.serviceError", {
              services: b.value.join(", ")
            })), 1)) : k("", !0),
            g.value && n.value.length === 0 && !i.value ? (t(), r("div", Me, [
              a("span", Ve, [
                S(_(l(s)("geosearch.noResults")), 1),
                a("span", Ae, '"' + _(g.value) + '"', 1)
              ])
            ])) : k("", !0),
            n.value.length > 0 ? x((t(), r("ul", Fe, [
              (t(!0), r(G, null, I(n.value, (m, M) => (t(), r("li", {
                class: "relative h-56",
                key: M
              }, [
                x((t(), r("button", {
                  type: "button",
                  class: "absolute inset-0 h-full w-full hover:bg-gray-300 default-focus-style",
                  onClick: (j) => u(m),
                  style: { "border-bottom": "1px solid lightgray" },
                  "truncate-trigger": ""
                }, [
                  a("div", je, [
                    x((t(), r("div", Ne, [
                      a("span", {
                        innerHTML: o(m.name, m.location.province)
                      }, null, 8, ze),
                      m.location.province ? (t(), r("span", Ge, _(m.location.city ? " " + m.location.city + ", " + m.location.province.abbr : " " + m.location.province.abbr), 1)) : k("", !0),
                      m.type ? (t(), r("span", Ie, "; ")) : k("", !0),
                      m.type ? (t(), r("span", qe, [
                        d[0] || (d[0] = a("br", null, null, -1)),
                        S(_(m.type), 1)
                      ])) : k("", !0)
                    ])), [
                      [$, {
                        externalTrigger: !0,
                        options: { placement: "top-start" }
                      }]
                    ])
                  ])
                ], 8, Be)), [
                  [B, "show-truncate"]
                ])
              ]))), 128))
            ])), [
              [P]
            ]) : k("", !0),
            N(Le, { class: "mt-auto" })
          ])
        ]),
        _: 1
      }, 8, ["panel"]);
    };
  }
});
export {
  Gt as default
};
