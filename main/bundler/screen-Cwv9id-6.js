import { defineComponent as z, inject as I, computed as N, resolveDirective as m, openBlock as t, createElementBlock as a, withDirectives as p, unref as x, createElementVNode as l, normalizeClass as _, Fragment as b, renderList as f, toDisplayString as T, withModifiers as C, withKeys as D, createCommentVNode as U, useTemplateRef as O, ref as S, onMounted as q, onBeforeUnmount as A, resolveComponent as K, createBlock as F, withCtx as E, createTextVNode as L, createVNode as H } from "vue";
import { useI18n as $ } from "vue-i18n";
import { l as M, _ as R } from "./main-DP8bZMIm.js";
const W = { class: "mb-10" }, G = ["aria-label"], J = {
  key: 0,
  class: "w-full h-30 hidden"
}, P = ["alt", "src"], Q = ["alt", "src"], X = ["alt"], Y = { class: "pl-5" }, Z = { class: "ml-auto pr-5" }, ee = ["content"], te = {
  key: 0,
  class: "rv-basemap-check absolute top-0 right-0"
}, ae = /* @__PURE__ */ z({
  __name: "item",
  props: {
    basemap: {
      type: Object,
      required: !0
    },
    tileSchema: {
      type: Object,
      required: !0
    }
  },
  setup(e) {
    const { t: v } = $(), y = I("iApi"), i = M(), c = N(() => i.activeBasemapConfig), u = (r) => {
      r.id !== c.value.id && y?.geo.map.setBasemap(r.id);
    };
    return (r, s) => {
      const g = m("truncate"), n = m("tippy"), d = m("focus-item");
      return t(), a("div", W, [
        p((t(), a("button", {
          class: "basemap-item-button bg-gray-300 w-full h-full",
          type: "button",
          "aria-label": x(v)("basemap.select"),
          onClick: s[2] || (s[2] = (o) => u(e.basemap))
        }, [
          l("div", null, [
            l("div", {
              class: _(["flex hover:opacity-50 basemap-item-image basemap-item-container", e.basemap.hideThumbnail ? "h-30" : "h-180"])
            }, [
              e.basemap.hideThumbnail ? (t(), a("div", J)) : e.basemap.thumbnailUrl ? (t(), a("img", {
                key: 1,
                class: "w-full h-180",
                alt: e.basemap.altText,
                src: e.basemap.thumbnailUrl
              }, null, 8, P)) : e.tileSchema.thumbnailTileUrls && e.tileSchema.thumbnailTileUrls.length > 0 && e.basemap.layers.every((o) => o.layerType === "esri-tile") ? (t(!0), a(b, { key: 2 }, f(e.basemap.layers, (o) => (t(), a("div", {
                key: o.id,
                class: "flex basemap-item-inner h-180"
              }, [
                (t(!0), a(b, null, f(e.tileSchema.thumbnailTileUrls, (w, k) => (t(), a("img", {
                  class: "w-full",
                  alt: e.basemap.altText,
                  src: o.url + w,
                  key: k
                }, null, 8, Q))), 128))
              ]))), 128)) : (t(), a("img", {
                key: 3,
                class: "w-full bg-white h-180",
                alt: e.basemap.altText,
                src: "https://openclipart.org/image/800px/275366"
              }, null, 8, X))
            ], 2)
          ]),
          l("div", {
            class: _(["absolute flex w-full bg-black text-white h-30 bottom-6 items-center", e.basemap.hideThumbnail && e.basemap.id === c.value.id ? "opacity-85" : "opacity-75"])
          }, [
            p((t(), a("div", Y, [
              l("span", null, T(e.basemap.name), 1)
            ])), [
              [g]
            ]),
            l("div", Z, [
              p((t(), a("a", {
                onClick: s[0] || (s[0] = C(() => {
                }, ["stop"])),
                onKeydown: s[1] || (s[1] = D(C(() => {
                }, ["prevent"]), ["enter", "space"])),
                content: e.basemap.description
              }, s[3] || (s[3] = [
                l("svg", {
                  class: "fill-current w-16 h-16",
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 24 24"
                }, [
                  l("path", {
                    d: "M0 0h24v24H0z",
                    fill: "none"
                  }),
                  l("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" })
                ], -1)
              ]), 40, ee)), [
                [n, {
                  placement: "bottom",
                  trigger: "click focus"
                }]
              ])
            ])
          ], 2),
          e.basemap.id === c.value.id && !e.basemap.hideThumbnail ? (t(), a("div", te, s[4] || (s[4] = [
            l("svg", {
              class: "fill-current w-25 h-25 relative",
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 24 24"
            }, [
              l("path", { d: "M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" })
            ], -1)
          ]))) : U("", !0)
        ], 8, G)), [
          [d]
        ])
      ]);
    };
  }
}), se = /* @__PURE__ */ R(ae, [["__scopeId", "data-v-7cf27f80"]]), le = ["content"], ie = { class: "h-600 overflow-y-auto" }, ne = { class: "font-bold text-xl" }, oe = {
  key: 0,
  class: "border-t border-b border-gray-600"
}, ue = /* @__PURE__ */ z({
  __name: "screen",
  props: {
    panel: {
      type: Object
    }
  },
  setup(e) {
    const { t: v } = $(), y = M(), i = O("el"), c = S([]), u = S([]), r = (n) => {
      n.key === "Tab" && i.value?.matches(":focus") && i.value._tippy.show();
    }, s = () => {
      i.value._tippy.hide();
    };
    q(() => {
      const n = y.config.map;
      c.value = n.tileSchemas, u.value = n.basemaps, i.value?.addEventListener("blur", s), i.value?.addEventListener("keyup", r);
    }), A(() => {
      i.value?.removeEventListener("blur", s), i.value?.removeEventListener("keyup", r);
    });
    const g = (n) => u.value.filter((d) => d.tileSchemaId === n);
    return (n, d) => {
      const o = K("panel-screen"), w = m("truncate"), k = m("focus-list"), V = m("tippy");
      return t(), F(o, { panel: e.panel }, {
        header: E(() => [
          L(T(x(v)("basemap.title")), 1)
        ]),
        content: E(() => [
          p((t(), a("div", {
            content: x(v)("panels.controls.items"),
            ref_key: "el",
            ref: i
          }, [
            l("div", ie, [
              (t(!0), a(b, null, f(c.value, (h, j) => (t(), a("div", {
                class: "mx-5",
                key: h.id
              }, [
                l("div", {
                  class: _((j === 0 ? "mt-5" : "mt-36") + " flex mb-5")
                }, [
                  p((t(), a("h3", ne, [
                    L(T(h.name), 1)
                  ])), [
                    [w]
                  ])
                ], 2),
                u.value.length > 0 ? (t(), a("ul", oe, [
                  (t(!0), a(b, null, f(g(h.id), (B) => (t(), a("li", {
                    key: B.id
                  }, [
                    H(se, {
                      basemap: B,
                      tileSchema: h,
                      class: "block relative overflow-hidden"
                    }, null, 8, ["basemap", "tileSchema"])
                  ]))), 128))
                ])) : U("", !0)
              ]))), 128))
            ])
          ], 8, le)), [
            [k],
            [V, {
              trigger: "manual",
              placement: "top-end",
              maxWidth: 190
            }]
          ])
        ]),
        _: 1
      }, 8, ["panel"]);
    };
  }
});
export {
  ue as default
};
