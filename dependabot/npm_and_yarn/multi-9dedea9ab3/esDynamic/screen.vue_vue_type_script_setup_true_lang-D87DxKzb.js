import { c1 as g, c2 as x, c3 as C, c9 as l, cc as s, ci as n, ch as c, fW as b, cf as m, fV as a, f$ as _, ce as y, iJ as p, iK as T, iw as j, g2 as z, ix as B, hF as I, c7 as V, c4 as $, c5 as A, c8 as M, ca as O, cb as w, cd as S, cj as N, ck as D, cg as K } from "./main-DMoCLB29.js";
const E = { class: "mt-10" }, F = ["aria-label"], q = ["alt", "src"], H = ["alt"], J = { class: "absolute flex w-full bg-black opacity-75 text-white h-30 bottom-6 items-center" }, L = { class: "pl-5" }, W = { class: "ml-auto pr-5" }, G = ["content"], P = /* @__PURE__ */ g({
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
  setup(e) {
    const { t: r } = x(), u = C("iApi"), i = (o) => {
      if (!o.extent) {
        console.error("selected area of interest doesn't have an extent specified.");
        return;
      }
      u?.geo.map.zoomMapTo(z.fromConfig("area-of-interest-extent", o.extent));
    };
    return (o, t) => {
      const f = l("truncate"), h = l("tippy"), d = l("focus-item");
      return s(), n("div", E, [
        c((s(), n("button", {
          type: "button",
          class: b(["area-of-interest-item-button bg-gray-300 w-full", { "border border-gray-300": e.showThumbnail }]),
          "aria-label": m(r)("areas-of-interest.select"),
          onClick: t[2] || (t[2] = (v) => i(e.area))
        }, [
          a("div", null, [
            a("div", {
              class: b(["flex hover:opacity-50 area-of-interest-item-image", e.showThumbnail ? "h-180" : "h-30"])
            }, [
              e.area.thumbnail ? (s(), n("img", {
                key: 0,
                class: "w-full bg-white object-contain",
                alt: e.area.altText || e.area.title,
                src: e.area.thumbnail
              }, null, 8, q)) : e.showThumbnail ? (s(), n("img", {
                key: 1,
                class: "w-full bg-white object-contain py-30",
                alt: e.area.altText || e.area.title,
                src: "https://openclipart.org/image/800px/160615"
              }, null, 8, H)) : _("", !0)
            ], 2)
          ]),
          a("div", J, [
            c((s(), n("div", L, [
              a("span", null, y(e.area.title), 1)
            ])), [
              [f]
            ]),
            c(a("div", W, [
              c((s(), n("a", {
                onClick: t[0] || (t[0] = p(() => {
                }, ["stop"])),
                onKeydown: t[1] || (t[1] = T(p(() => {
                }, ["prevent"]), ["enter", "space"])),
                content: e.area.description
              }, t[3] || (t[3] = [
                a("svg", {
                  class: "fill-current w-16 h-16",
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 24 24"
                }, [
                  a("path", {
                    d: "M0 0h24v24H0z",
                    fill: "none"
                  }),
                  a("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" })
                ], -1)
              ]), 40, G)), [
                [h, {
                  placement: "bottom",
                  trigger: "click focus"
                }]
              ])
            ], 512), [
              [j, e.area.description]
            ])
          ])
        ], 10, F)), [
          [d]
        ])
      ]);
    };
  }
}), Q = /* @__PURE__ */ B(P, [["__scopeId", "data-v-06be115a"]]), R = { class: "h-600 overflow-y-auto" }, U = { class: "mx-5" }, X = { key: 0 }, Z = /* @__PURE__ */ g({
  __name: "screen",
  props: {
    panel: {
      type: Object
    }
  },
  setup(e) {
    const { t: r } = x(), u = I(), i = V(() => u.areas);
    let o = $(!1);
    return A(() => {
      o.value = !!i.value?.some((t) => t.thumbnail);
    }), (t, f) => {
      const h = M("panel-screen"), d = l("focus-list");
      return s(), O(h, { panel: e.panel }, {
        header: w(() => [
          S(y(m(r)("areas-of-interest.title")), 1)
        ]),
        content: w(() => [
          a("div", R, [
            a("div", U, [
              i.value.length > 0 ? c((s(), n("ul", X, [
                (s(!0), n(N, null, D(i.value, (v, k) => (s(), n("li", { key: k }, [
                  K(Q, {
                    area: v,
                    "show-thumbnail": m(o),
                    class: "block relative overflow-hidden"
                  }, null, 8, ["area", "show-thumbnail"])
                ]))), 128))
              ])), [
                [d]
              ]) : _("", !0)
            ])
          ])
        ]),
        _: 1
      }, 8, ["panel"]);
    };
  }
});
export {
  Z as _
};
//# sourceMappingURL=screen.vue_vue_type_script_setup_true_lang-D87DxKzb.js.map
