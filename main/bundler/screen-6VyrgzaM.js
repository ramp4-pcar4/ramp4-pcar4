import { defineComponent as $, inject as K, useTemplateRef as M, ref as L, computed as F, onMounted as V, onBeforeUnmount as j, resolveDirective as v, createElementBlock as s, openBlock as a, withDirectives as h, unref as B, createElementVNode as n, createCommentVNode as N, normalizeClass as C, Fragment as _, renderList as E, toDisplayString as S, withKeys as H, withModifiers as I, resolveComponent as R, createBlock as W, withCtx as z, createTextVNode as U, createVNode as G } from "vue";
import { useI18n as D } from "vue-i18n";
import { m as O, _ as J, k as P } from "./main-BAZ9S_nQ.js";
const Q = { class: "mb-10" }, X = ["aria-label"], Y = {
  key: 0,
  class: "w-full h-30 hidden"
}, Z = ["alt", "src"], ee = ["alt", "src"], te = ["alt"], ae = { class: "pl-5" }, se = { class: "ml-auto pr-5" }, le = ["content"], ne = {
  key: 0,
  class: "rv-basemap-check absolute top-0 right-0"
}, ie = /* @__PURE__ */ $({
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
    const { t: b } = D(), x = K("iApi"), i = O(), t = M("basemapInfo"), r = L(!1), u = F(() => i.activeBasemapConfig), f = (c) => {
      c.id !== u.value.id && x.geo.map.setBasemap(c.id);
    }, y = (c) => {
      c.key === "Tab" && t.value?.matches(":focus") && (r.value = !0, t.value._tippy.show());
    }, o = () => t.value?._tippy?.show(), d = () => t.value?._tippy?.hide(), g = () => {
      r.value = !1, t.value._tippy.hide();
    }, w = (c) => {
      c.pointerType === "touch" && (r.value = !r.value, r.value ? t.value._tippy.show() : t.value._tippy.hide());
    };
    return V(() => {
      t.value?.addEventListener("mouseenter", o), t.value?.addEventListener("mouseleave", d), t.value?.addEventListener("click", w), t.value?.addEventListener("keyup", y), t.value?.addEventListener("blur", g);
    }), j(() => {
      t.value?.removeEventListener("mouseenter", o), t.value?.removeEventListener("mouseleave", d), t.value?.removeEventListener("click", w), t.value?.removeEventListener("keyup", y), t.value?.removeEventListener("blur", g);
    }), (c, l) => {
      const m = v("truncate"), T = v("tippy"), k = v("focus-item");
      return a(), s("div", Q, [
        h((a(), s("button", {
          class: "basemap-item-button bg-gray-300 w-full h-full",
          type: "button",
          "aria-label": B(b)("basemap.select"),
          onClick: l[2] || (l[2] = (p) => f(e.basemap))
        }, [
          n("div", null, [
            n("div", {
              class: C(["flex hover:opacity-50 basemap-item-image basemap-item-container", e.basemap.hideThumbnail ? "h-30" : "h-180"])
            }, [
              e.basemap.hideThumbnail ? (a(), s("div", Y)) : e.basemap.thumbnailUrl ? (a(), s("img", {
                key: 1,
                class: "w-full h-180",
                alt: e.basemap.altText,
                src: e.basemap.thumbnailUrl
              }, null, 8, Z)) : e.tileSchema.thumbnailTileUrls && e.tileSchema.thumbnailTileUrls.length > 0 && e.basemap.layers.every((p) => p.layerType === "esri-tile") ? (a(!0), s(_, { key: 2 }, E(e.basemap.layers, (p) => (a(), s("div", {
                key: p.id,
                class: "flex basemap-item-inner h-180"
              }, [
                (a(!0), s(_, null, E(e.tileSchema.thumbnailTileUrls, (q, A) => (a(), s("img", {
                  class: "w-full",
                  alt: e.basemap.altText,
                  src: p.url + q,
                  key: A
                }, null, 8, ee))), 128))
              ]))), 128)) : (a(), s("img", {
                key: 3,
                class: "w-full bg-white h-180",
                alt: e.basemap.altText,
                src: "https://openclipart.org/image/800px/275366"
              }, null, 8, te))
            ], 2)
          ]),
          n("div", {
            class: C(["absolute flex w-full bg-black text-white h-30 bottom-6 items-center", e.basemap.hideThumbnail && e.basemap.id === u.value.id ? "opacity-85" : "opacity-75"])
          }, [
            h((a(), s("div", ae, [
              n("span", null, S(e.basemap.name), 1)
            ])), [
              [m]
            ]),
            n("div", se, [
              h((a(), s("a", {
                onClick: l[0] || (l[0] = I(() => {
                }, ["stop"])),
                onKeydown: l[1] || (l[1] = H(I(() => {
                }, ["prevent"]), ["enter", "space"])),
                content: e.basemap.description,
                ref_key: "basemapInfo",
                ref: t
              }, l[3] || (l[3] = [
                n("svg", {
                  class: "fill-current w-16 h-16",
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 24 24"
                }, [
                  n("path", {
                    d: "M0 0h24v24H0z",
                    fill: "none"
                  }),
                  n("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" })
                ], -1)
              ]), 40, le)), [
                [T, {
                  placement: "bottom",
                  trigger: "manual"
                }]
              ])
            ])
          ], 2),
          e.basemap.id === u.value.id && !e.basemap.hideThumbnail ? (a(), s("div", ne, l[4] || (l[4] = [
            n("svg", {
              class: "fill-current w-25 h-25 relative",
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 24 24"
            }, [
              n("path", { d: "M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" })
            ], -1)
          ]))) : N("", !0)
        ], 8, X)), [
          [k, "show-truncate"]
        ])
      ]);
    };
  }
}), oe = /* @__PURE__ */ J(ie, [["__scopeId", "data-v-148269d3"]]), re = ["content"], ce = { class: "h-600 overflow-y-auto" }, ue = { class: "font-bold text-xl" }, me = {
  key: 0,
  class: "border-t border-b border-gray-600"
}, he = /* @__PURE__ */ $({
  __name: "screen",
  props: {
    panel: {
      type: Object
    }
  },
  setup(e) {
    const { t: b } = D(), x = O(), i = M("el"), t = L([]), r = L([]), u = (o) => {
      P(o, i.value) && i.value._tippy.show();
    }, f = () => {
      i.value._tippy.hide();
    };
    V(() => {
      const o = x.config.map;
      t.value = o.tileSchemas, r.value = o.basemaps, i.value?.addEventListener("blur", f), i.value?.addEventListener("keyup", u);
    }), j(() => {
      i.value?.removeEventListener("blur", f), i.value?.removeEventListener("keyup", u);
    });
    const y = (o) => r.value.filter((d) => d.tileSchemaId === o);
    return (o, d) => {
      const g = R("panel-screen"), w = v("truncate"), c = v("focus-list"), l = v("tippy");
      return a(), W(g, { panel: e.panel }, {
        header: z(() => [
          U(S(B(b)("basemap.title")), 1)
        ]),
        content: z(() => [
          h((a(), s("div", {
            content: B(b)("panels.controls.items"),
            ref_key: "el",
            ref: i
          }, [
            n("div", ce, [
              (a(!0), s(_, null, E(t.value, (m, T) => (a(), s("div", {
                class: "mx-5",
                key: m.id
              }, [
                n("div", {
                  class: C((T === 0 ? "mt-5" : "mt-36") + " flex mb-5")
                }, [
                  h((a(), s("h3", ue, [
                    U(S(m.name), 1)
                  ])), [
                    [w]
                  ])
                ], 2),
                r.value.length > 0 ? (a(), s("ul", me, [
                  (a(!0), s(_, null, E(y(m.id), (k) => (a(), s("li", {
                    key: k.id
                  }, [
                    G(oe, {
                      basemap: k,
                      tileSchema: m,
                      class: "block relative overflow-hidden"
                    }, null, 8, ["basemap", "tileSchema"])
                  ]))), 128))
                ])) : N("", !0)
              ]))), 128))
            ])
          ], 8, re)), [
            [c],
            [l, {
              trigger: "manual",
              placement: "top-end",
              touch: !1,
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
  he as default
};
