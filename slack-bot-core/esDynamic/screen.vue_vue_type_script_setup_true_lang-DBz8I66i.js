import { bC as E, bD as L, bE as x, bF as C, bG as I, bH as A, bI as B, bJ as D, bK as i, bL as l, bM as p, bN as n, bO as w, bP as N, bQ as s, bR as T, bS as V, bT as u, bU as j, bV as F, bW as d } from "./main-CmejC-so.js";
const H = ["content"], O = /* @__PURE__ */ E({
  __name: "screen",
  props: {
    panel: {
      type: Object,
      required: !0
    }
  },
  setup(b) {
    const v = d(() => import("./header-Dw8jwFEL.js")), m = d(() => import("./item-BS5QHFhI.js")), { t: r } = L(), _ = x("iApi"), e = C(), a = () => {
      e.value._tippy.hide();
    }, o = (t) => {
      t.key === "Tab" && e.value?.matches(":focus") && e.value._tippy.show();
    };
    I(() => {
      e.value?.addEventListener("blur", a), e.value?.addEventListener("keyup", o);
    }), A(() => {
      e.value?.removeEventListener("blur", a), e.value?.removeEventListener("keyup", o);
    });
    const f = B(() => {
      let t = _.fixture.get("legend");
      return t ? [...t.getLegend()] : [];
    });
    return (t, g) => {
      const y = D("panel-screen"), h = i("focus-list"), k = i("tippy");
      return n(), l(y, { panel: b.panel }, {
        header: p(() => [
          w(N(s(r)("legend.title")), 1)
        ]),
        content: p(() => [
          T(s(v)),
          V((n(), u("div", {
            content: s(r)("panels.controls.items"),
            ref_key: "el",
            ref: e
          }, [
            (n(!0), u(j, null, F(f.value, (c) => (n(), l(s(m), {
              legendItem: c,
              key: c.uid
            }, null, 8, ["legendItem"]))), 128))
          ], 8, H)), [
            [h],
            [k, {
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
  O as _
};
//# sourceMappingURL=screen.vue_vue_type_script_setup_true_lang-DBz8I66i.js.map
