import { c1 as b, c2 as x, c3 as L, c4 as A, c5 as B, c6 as C, c7 as I, c8 as j, c9 as i, ca as l, cb as p, cc as n, cd as w, ce as D, cf as c, cg as N, ch as T, ci as u, cj as V, ck as q, cl as d } from "./main-C4pF0E7B.js";
const F = ["content"], M = /* @__PURE__ */ b({
  __name: "screen",
  props: {
    panel: {
      type: Object,
      required: !0
    }
  },
  setup(v) {
    const m = d(() => import("./header-D8hMZS33.js")), _ = d(() => import("./item-DUQpVcKP.js")), { t: s } = x(), f = L("iApi"), e = A(), r = () => {
      e.value._tippy.hide();
    }, a = (t) => {
      t.key === "Tab" && e.value?.matches(":focus") && e.value._tippy.show();
    };
    B(() => {
      e.value?.addEventListener("blur", r), e.value?.addEventListener("keyup", a);
    }), C(() => {
      e.value?.removeEventListener("blur", r), e.value?.removeEventListener("keyup", a);
    });
    const g = I(() => {
      let t = f.fixture.get("legend");
      return t ? [...t.getLegend()] : [];
    });
    return (t, y) => {
      const h = j("panel-screen"), k = i("focus-list"), E = i("tippy");
      return n(), l(h, { panel: v.panel }, {
        header: p(() => [
          w(D(c(s)("legend.title")), 1)
        ]),
        content: p(() => [
          N(c(m)),
          T((n(), u("div", {
            content: c(s)("panels.controls.items"),
            ref_key: "el",
            ref: e
          }, [
            (n(!0), u(V, null, q(g.value, (o) => (n(), l(c(_), {
              legendItem: o,
              key: o.uid
            }, null, 8, ["legendItem"]))), 128))
          ], 8, F)), [
            [k],
            [E, {
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
  M as _
};
//# sourceMappingURL=screen.vue_vue_type_script_setup_true_lang-D0vg7Z74.js.map
