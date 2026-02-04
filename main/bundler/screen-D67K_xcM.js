import { defineComponent as L, defineAsyncComponent as p, inject as b, ref as w, onMounted as C, onBeforeUnmount as A, computed as B, resolveComponent as F, resolveDirective as u, createBlock as a, openBlock as o, withCtx as d, createVNode as T, withDirectives as D, unref as r, createElementBlock as m, Fragment as j, renderList as N, createTextVNode as V, toDisplayString as q } from "vue";
import { useI18n as H } from "vue-i18n";
import { k as M } from "./keyboard-O-FN7ZtD.js";
const O = ["content"], G = /* @__PURE__ */ L({
  __name: "screen",
  props: {
    panel: {
      type: Object,
      required: !0
    }
  },
  setup(v) {
    const f = p(() => import("./header-DJwzvGMA.js")), _ = p(() => import("./item-CTss56dX.js")), { t: i } = H(), g = b("iApi"), e = w(), s = () => {
      e.value._tippy.hide();
    }, l = (t) => {
      M(t, e.value) && e.value._tippy.show();
    }, y = (t) => {
      const n = new CustomEvent("switchFocusItem", { detail: { focusItem: t } });
      e.value?.dispatchEvent(n);
    };
    C(() => {
      e.value?.addEventListener("blur", s), e.value?.addEventListener("keyup", l);
    }), A(() => {
      e.value?.removeEventListener("blur", s), e.value?.removeEventListener("keyup", l);
    });
    const h = B(() => {
      const t = g.fixture.get("legend");
      return t ? [...t.getLegend()] : [];
    });
    return (t, n) => {
      const k = F("panel-screen"), E = u("focus-list"), I = u("tippy");
      return o(), a(k, { panel: v.panel }, {
        header: d(() => [
          V(q(r(i)("legend.title")), 1)
        ]),
        content: d(() => [
          T(r(f)),
          D((o(), m("div", {
            content: r(i)("panels.controls.items"),
            ref_key: "el",
            ref: e
          }, [
            (o(!0), m(j, null, N(h.value, (c) => (o(), a(r(_), {
              legendItem: c,
              key: c.uid,
              onFocusItem: n[0] || (n[0] = (x, S) => y(x))
            }, null, 8, ["legendItem"]))), 128))
          ], 8, O)), [
            [E],
            [I, {
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
  G as default
};
