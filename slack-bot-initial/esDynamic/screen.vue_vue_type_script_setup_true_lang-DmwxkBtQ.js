import { bC as T, bD as E, ir as R, fA as D, bI as w, fF as I, bK as S, bN as s, bT as o, fC as a, fD as H, bQ as i, ij as P, ii as K, bS as x, bO as k, fI as L, bE as B, bF as M, fG as q, fH as F, bH as z, bP as m, bU as A, bV as j, bG as U, fK as O, i4 as Z, im as J, bJ as Q, bL as N, bM as G, bR as V, jT as X, jU as W } from "./main-3gzXighg.js";
const Y = { class: "rv-geosearch-bar relative h-26 mx-8 mb-8" }, ee = ["placeholder", "value", "aria-label"], te = { class: "absolute inset-y-0 right-8 grid w-10 place-content-center" }, se = ["aria-label", "content"], oe = /* @__PURE__ */ T({
  __name: "search-bar",
  setup(C) {
    const { t: n } = E(), u = R(), r = D(), _ = w(() => u.searchVal), d = w(
      () => ['"', "$", "!", "*", "+", "?", "^", "{", "}", "(", ")", "|", "[", "]"].filter((h) => u.searchVal.includes(h)).join("")
    ), f = (h) => {
      u.setSearchTerm(h), u.setSearchRegex(h);
    }, p = I(500, (h) => {
      f(h);
    });
    return (h, t) => {
      const e = S("tippy");
      return s(), o("div", Y, [
        a("input", {
          type: "text",
          class: H(["border-b w-full text-base py-8 outline-none focus:shadow-outline border-gray-600 h-full min-w-0", { "border-yellow-500": d.value }]),
          placeholder: i(n)("geosearch.searchText"),
          value: _.value,
          onInput: t[0] || (t[0] = (b) => i(p)(b.target.value)),
          onKeyup: t[1] || (t[1] = P((b) => {
            i(r).mobileView && b.target.blur();
          }, ["enter"])),
          "aria-label": i(n)("geosearch.searchText"),
          onKeypress: t[2] || (t[2] = P(K(() => {
          }, ["prevent"]), ["enter"])),
          enterkeyhint: "done"
        }, null, 42, ee),
        a("span", te, [
          d.value ? x((s(), o("button", {
            key: 0,
            class: "cursor-default",
            "aria-label": i(n)("geosearch.badChars", { chars: d.value }),
            content: i(n)("geosearch.badChars", { chars: d.value })
          }, t[3] || (t[3] = [
            k(" ⚠ ")
          ]), 8, se)), [
            [e]
          ]) : L("", !0)
        ])
      ]);
    };
  }
}), ae = { class: "rv-geosearch-top-filters sm:flex items-center w-full ml-8 mb-14" }, ne = { class: "w-fit inline-block sm:w-1/2 h-26 mb-8 sm:mb-0 pr-16 sm:pr-0" }, re = ["value", "aria-label"], le = {
  value: "",
  disabled: "",
  hidden: ""
}, ce = { class: "sm:w-1/2 h-26 sm:mx-16 flex" }, ie = ["value", "aria-label"], ue = {
  value: "",
  disabled: "",
  hidden: ""
}, de = ["disabled", "content", "aria-label"], pe = /* @__PURE__ */ T({
  __name: "top-filters",
  setup(C) {
    const { t: n } = E(), u = B("iApi"), r = R(), _ = M([]), d = M([]), f = M([]), p = w(() => r.queryParams), h = w(() => u.language), t = (v) => r.setProvince(v), e = (v) => r.setType(v), b = () => {
      t({}), e({});
    }, $ = () => {
      r.initService(u.language, u.fixture.get("geosearch").config);
      const v = _.value.find((c) => p.value.province === c.name)?.code, y = d.value.find((c) => p.value.type === c.name)?.code;
      r.getProvinces.then((c) => {
        _.value = c, t({
          province: c.find((l) => l.code === v)?.name,
          forceReRun: !0
        });
      }), r.getTypes.then((c) => {
        d.value = c, e({
          type: c.find((l) => l.code === y)?.name,
          forceReRun: !0
        });
      });
    };
    return q(() => {
      $(), f.value.push(F(h, $));
    }), z(() => {
      f.value.forEach((v) => v());
    }), (v, y) => {
      const c = S("truncate"), l = S("tippy");
      return s(), o("div", ae, [
        a("div", ne, [
          x((s(), o("select", {
            class: "border-b border-b-gray-600 w-full h-full py-0 cursor-pointer",
            value: p.value.province,
            "aria-label": i(n)("geosearch.filters.province"),
            onChange: y[0] || (y[0] = (g) => t({
              province: g.target.value
            }))
          }, [
            x((s(), o("option", le, [
              k(m(i(n)("geosearch.filters.province")), 1)
            ])), [
              [c]
            ]),
            (s(!0), o(A, null, j(_.value, (g) => x((s(), o("option", {
              key: g.code
            }, [
              k(m(g.name), 1)
            ])), [
              [c]
            ])), 128))
          ], 40, re)), [
            [c]
          ])
        ]),
        a("div", ce, [
          x((s(), o("select", {
            class: "border-b border-b-gray-600 w-full h-full py-0 cursor-pointer max-w-150",
            value: p.value.type,
            "aria-label": i(n)("geosearch.filters.type"),
            onChange: y[1] || (y[1] = (g) => e({
              type: g.target.value
            }))
          }, [
            a("option", ue, m(i(n)("geosearch.filters.type")), 1),
            (s(!0), o(A, null, j(d.value, (g) => (s(), o("option", {
              key: g.code
            }, m(g.name), 1))), 128))
          ], 40, ie)), [
            [c]
          ]),
          x((s(), o("button", {
            type: "button",
            class: "text-gray-500 w-1/8 h-24 pl-8 pr-16 sm:pr-8 hover:text-black disabled:cursor-default disabled:text-gray-400",
            disabled: !p.value.type && !p.value.province,
            onClick: b,
            content: i(n)("geosearch.filters.clear"),
            "aria-label": i(n)("geosearch.filters.clear")
          }, y[2] || (y[2] = [
            a("div", { class: "rv-geosearch-icon" }, [
              a("svg", {
                class: "fill-current w-18 h-18",
                viewBox: "0 0 23 21"
              }, [
                a("path", { d: "M 14.7574,20.8284L 17.6036,17.9822L 14.7574,15.1716L 16.1716,13.7574L 19.0178,16.568L 21.8284,13.7574L 23.2426,15.1716L 20.432,17.9822L 23.2426,20.8284L 21.8284,22.2426L 19.0178,19.3964L 16.1716,22.2426L 14.7574,20.8284 Z M 2,2L 19.9888,2.00001L 20,2.00001L 20,2.01122L 20,3.99999L 19.9207,3.99999L 13,10.9207L 13,22.909L 8.99999,18.909L 8.99999,10.906L 2.09405,3.99999L 2,3.99999L 2,2 Z " })
              ])
            ], -1)
          ]), 8, de)), [
            [l, { placement: "bottom" }]
          ])
        ])
      ]);
    };
  }
}), be = { class: "rv-geosearch-bottom-filters" }, he = { class: "bg-white" }, ve = { class: "ml-8 cursor-pointer font-normal" }, _e = ["checked"], fe = /* @__PURE__ */ T({
  __name: "bottom-filters",
  setup(C) {
    const { t: n } = E(), u = B("iApi"), r = R(), _ = w(() => r.resultsVisible), d = I(300, (t) => {
      p(t).then((e) => {
        f({
          extent: e,
          visible: _.value
        });
      });
    }), f = (t) => {
      r.setMapExtent(t);
    }, p = async (t) => t.sr.wkid === 4326 ? t : await u.geo.proj.projectGeometry(4326, t), h = (t) => {
      p(u.geo.map.getExtent()).then((e) => {
        f({
          extent: e,
          visible: t
        });
      });
    };
    return U(() => {
      u.event.on(O.MAP_EXTENTCHANGE, d, "geosearch_map_extent");
    }), z(() => {
      u.event.off("geosearch_map_extent");
    }), (t, e) => (s(), o("div", be, [
      a("div", he, [
        a("label", ve, [
          a("input", {
            type: "checkbox",
            class: "border-2 mx-8 border-gray-600 cursor-pointer",
            checked: _.value,
            onChange: e[0] || (e[0] = (b) => h(b.target.checked)),
            onKeypress: e[1] || (e[1] = P(K(() => {
            }, ["prevent"]), ["enter"]))
          }, null, 40, _e),
          k(m(i(n)("geosearch.visible")), 1)
        ])
      ])
    ]));
  }
}), ge = {}, me = { class: "w-full h-6 relative overflow-hidden rounded-full indeterminate mb-14" }, ye = {
  class: "h-full progressbar bg-blue-800 rounded-full top-0",
  "aria-valuemin": "0",
  "aria-valuemax": "100"
}, xe = { class: "flex items-center h-full" };
function we(C, n) {
  return s(), o("div", me, [
    a("div", ye, [
      a("span", xe, [
        J(C.$slots, "default", {}, void 0, !0)
      ])
    ])
  ]);
}
const Le = /* @__PURE__ */ Z(ge, [["render", we], ["__scopeId", "data-v-0a8d1c36"]]), $e = { class: "flex flex-col h-full" }, ke = {
  key: 1,
  class: "text-red-900 text-xs px-8 mb-10"
}, Ce = {
  key: 2,
  class: "px-8 mb-10 py-8 flex-grow text-wrap border-y border-gray-600 overflow-y-auto"
}, Se = { class: "relative h-48" }, Te = { class: "font-bold text-blue-600" }, Ee = {
  key: 3,
  class: "rv-results-list flex-grow mb-5 border-t border-b border-gray-600 overflow-y-auto"
}, Re = ["onClick"], Me = { class: "rv-result-description px-8" }, Ve = { class: "flex-1 text-left truncate font-bold leading-tight" }, Pe = ["innerHTML"], Ae = {
  key: 0,
  class: "text-gray-600 text-sm"
}, je = {
  key: 1,
  class: "hidden"
}, Be = {
  key: 2,
  class: "text-sm font-normal"
}, Ie = /* @__PURE__ */ T({
  __name: "screen",
  props: {
    panel: {
      type: Object
    }
  },
  setup(C) {
    const { t: n } = E(), u = B("iApi"), r = R(), _ = w(() => r.searchVal.replace(/["!*$+?^{}()|[\]\\]/g, "").trim()), d = w(() => r.searchResults), f = w(() => r.loadingResults), p = w(() => r.failedServices), h = (e) => {
      let b = new X(
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
        W.latLongSR(),
        !0
      );
      u.geo.map.zoomMapTo(b);
    }, t = (e, b) => {
      const $ = e.replace(
        new RegExp(`${r.searchRegex}`, "gi"),
        (v) => '<span class="font-bold text-blue-600">' + v + "</span>"
      );
      return b ? $ + "," : $;
    };
    return (e, b) => {
      const $ = Q("panel-screen"), v = S("truncate"), y = S("focus-item"), c = S("focus-list");
      return s(), N($, { panel: C.panel }, {
        header: G(() => [
          k(m(i(n)("geosearch.title")), 1)
        ]),
        content: G(() => [
          a("div", $e, [
            V(oe),
            V(pe),
            f.value ? (s(), N(Le, {
              key: 0,
              class: "flex-none"
            })) : L("", !0),
            p.value.length > 0 && !f.value ? (s(), o("div", ke, m(i(n)("geosearch.serviceError", {
              services: p.value.join(", ")
            })), 1)) : L("", !0),
            _.value && d.value.length === 0 && !f.value ? (s(), o("div", Ce, [
              a("span", Se, [
                k(m(i(n)("geosearch.noResults")), 1),
                a("span", Te, '"' + m(_.value) + '"', 1)
              ])
            ])) : L("", !0),
            d.value.length > 0 ? x((s(), o("ul", Ee, [
              (s(!0), o(A, null, j(d.value, (l, g) => (s(), o("li", {
                class: "relative h-56",
                key: g
              }, [
                x((s(), o("button", {
                  type: "button",
                  class: "absolute inset-0 h-full w-full hover:bg-gray-300 default-focus-style",
                  onClick: (Ne) => h(l),
                  style: { "border-bottom": "1px solid lightgray" },
                  "truncate-trigger": ""
                }, [
                  a("div", Me, [
                    x((s(), o("div", Ve, [
                      a("span", {
                        innerHTML: t(l.name, l.location.province)
                      }, null, 8, Pe),
                      l.location.province ? (s(), o("span", Ae, m(l.location.city ? " " + l.location.city + ", " + l.location.province.abbr : " " + l.location.province.abbr), 1)) : L("", !0),
                      l.type ? (s(), o("span", je, "; ")) : L("", !0),
                      l.type ? (s(), o("span", Be, [
                        b[0] || (b[0] = a("br", null, null, -1)),
                        k(m(l.type), 1)
                      ])) : L("", !0)
                    ])), [
                      [v, {
                        externalTrigger: !0,
                        options: { placement: "top-start" }
                      }]
                    ])
                  ])
                ], 8, Re)), [
                  [y, "show-truncate"]
                ])
              ]))), 128))
            ])), [
              [c]
            ]) : L("", !0),
            V(fe, { class: "mt-auto" })
          ])
        ]),
        _: 1
      }, 8, ["panel"]);
    };
  }
});
export {
  Ie as _
};
//# sourceMappingURL=screen.vue_vue_type_script_setup_true_lang-DmwxkBtQ.js.map
