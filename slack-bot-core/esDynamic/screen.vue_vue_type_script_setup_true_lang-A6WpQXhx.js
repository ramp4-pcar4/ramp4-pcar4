import { bC as M, bD as R, bK as j, bN as u, bT as x, fC as s, bS as _, bQ as r, bP as C, fD as I, bR as D, bM as $, i3 as N, it as z, fI as T, i4 as A, bE as K, is as U, bI as q, bF as g, fG as F, fH as G, bH as J, bJ as P, bL as L, bO as Q, iu as W, iv as X, ij as Y, ii as Z, bV as ee, bU as te, iw as ne } from "./main-CmejC-so.js";
import { m as S } from "./marked.esm-DgqJBp_S.js";
const oe = { key: 0 }, ae = ["content"], se = { class: "text-lg text-left flex-grow" }, le = ["innerHTML"], ie = /* @__PURE__ */ M({
  __name: "section",
  props: {
    helpSection: {
      type: Object,
      required: !0
    }
  },
  setup(i) {
    const { t: w } = R();
    return (b, l) => {
      const h = j("tippy");
      return i.helpSection.drawn ? (u(), x("div", oe, [
        s("div", null, [
          _((u(), x("button", {
            type: "button",
            class: "help-section-header flex items-center py-15 px-25 hover:bg-gray-200 cursor-pointer select-none w-full",
            onClick: l[0] || (l[0] = (p) => b.$emit("expand")),
            content: r(w)(i.helpSection.expanded ? "help.section.collapse" : "help.section.expand")
          }, [
            s("span", se, C(i.helpSection.header), 1),
            s("div", {
              class: I(["dropdown-icon", { "transform -rotate-180": i.helpSection.expanded }])
            }, l[1] || (l[1] = [
              s("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                height: "24",
                viewBox: "0 0 24 24",
                width: "24"
              }, [
                s("path", {
                  d: "M0 0h24v24H0V0z",
                  fill: "none"
                }),
                s("path", { d: "M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" })
              ], -1)
            ]), 2)
          ], 8, ae)), [
            [h, { placement: "top-end", hideOnClick: !1 }]
          ]),
          D(z, {
            name: "help-item",
            mode: "out-in"
          }, {
            default: $(() => [
              _(s("div", {
                innerHTML: i.helpSection.info,
                class: "ramp-markdown section-body px-20 pt-5 ml-10 overflow-hidden"
              }, null, 8, le), [
                [N, i.helpSection.expanded]
              ])
            ]),
            _: 1
          })
        ])
      ])) : T("", !0);
    };
  }
}), re = /* @__PURE__ */ A(ie, [["__scopeId", "data-v-7dc61532"]]), pe = { class: "h-26 mb-8 mx-8" }, de = ["placeholder", "aria-label"], ce = { key: 0 }, fe = /* @__PURE__ */ M({
  __name: "screen",
  props: {
    panel: {
      type: Object,
      required: !0
    }
  },
  setup(i) {
    const w = K("iApi"), b = U(), { t: l } = R(), h = q(() => b.location), p = g([]), y = g([]), k = g([]), E = g(!1);
    let f, m;
    function B(e, o) {
      const t = o.info.split(/(<[^>]*>)/);
      for (const [n, a] of t.entries())
        if (n % 2 === 0 && a.toLowerCase().indexOf(e.toLowerCase()) > -1)
          return !0;
      return !1;
    }
    function H(e, o) {
      const n = y.value[o].split(/(<[^>]*>)/);
      let a = "";
      for (const [v, d] of n.entries())
        v % 2 === 0 ? a += d.replace(
          new RegExp(e, "gi"),
          (c) => `<mark>${c}</mark>`
        ) : a += d;
      p.value[o].info = a;
    }
    function O(e, o) {
      f = 0, o.forEach((t, n) => {
        t.info = y.value[n], t.drawn = B(e, t) || t.header.toLowerCase().indexOf(e.toLowerCase()) > -1, f = t.drawn ? f + 1 : f, t.expanded = t.drawn && e.length > 2, t.drawn && e.length > 2 && H(e, n);
      }), E.value = f === 0;
    }
    function V(e) {
      e.expanded = !e.expanded;
    }
    return F(() => {
      k.value.push(
        G(
          () => w.language,
          (e, o) => {
            if (e === o) return;
            const t = new S.Renderer(), n = h.value.slice(-1) === "/" ? h.value : `${h.value}/`;
            t.image = (a, v, d) => (a.indexOf("http") === -1 && (a = `${n}images/` + a), `<img src="${a}" alt="${d}">`), ne.get(`${n}${e}.md`).then((a) => {
              const v = /^#\s(.*)\n{2}(?:.+|\n(?!\n{2,}))*/gm;
              let d = a.data.replace(new RegExp("\r", "g"), "");
              p.value = [];
              let c;
              for (; c = v.exec(d); )
                p.value.push({
                  header: c[1],
                  // parse markdown on info section, split/splice/join removes the header
                  // since we can't put info section into its own regex grouping
                  info: S(c[0].split(`
`).splice(2).join(`
`), {
                    renderer: t
                  }),
                  drawn: !0,
                  expanded: !1
                }), y.value.push(
                  S(c[0].split(`
`).splice(2).join(`
`), {
                    renderer: t
                  })
                );
            });
          },
          { immediate: !0 }
        )
      );
    }), J(() => {
      k.value.forEach((e) => e());
    }), (e, o) => {
      const t = P("panel-screen");
      return u(), L(t, { panel: i.panel }, {
        header: $(() => [
          Q(C(r(l)("help.title")), 1)
        ]),
        content: $(() => [
          s("div", pe, [
            _(s("input", {
              type: "search",
              class: "rv-help-search-bar border-b w-full text-base py-8 outline-none focus:shadow-outline border-gray-600 h-full min-w-0",
              placeholder: r(l)("help.search"),
              "onUpdate:modelValue": o[0] || (o[0] = (n) => X(m) ? m.value = n : m = n),
              "aria-label": r(l)("help.search"),
              onInput: o[1] || (o[1] = (n) => O(r(m), p.value)),
              onKeypress: o[2] || (o[2] = Y(Z(() => {
              }, ["prevent"]), ["enter"])),
              enterkeyhint: "done"
            }, null, 40, de), [
              [W, r(m)]
            ])
          ]),
          E.value ? (u(), x("div", ce, [
            s("p", null, C(r(l)("help.noResults")), 1)
          ])) : T("", !0),
          (u(!0), x(te, null, ee(p.value, (n, a) => (u(), L(re, {
            helpSection: n,
            key: a,
            onExpand: (v) => V(n)
          }, null, 8, ["helpSection", "onExpand"]))), 128))
        ]),
        _: 1
      }, 8, ["panel"]);
    };
  }
});
export {
  fe as _
};
//# sourceMappingURL=screen.vue_vue_type_script_setup_true_lang-A6WpQXhx.js.map
