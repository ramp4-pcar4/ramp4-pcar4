import { c1 as M, c2 as T, c9 as H, cc as u, ci as x, fV as s, ch as b, cf as r, ce as $, fW as I, cg as N, cb as k, iw as z, iT as A, f$ as V, ix as D, c3 as K, iS as U, c7 as q, c4 as v, fZ as W, f_ as F, c6 as J, c8 as Z, ca as L, cd as G, iU as P, iV as Q, iK as X, iJ as Y, ck as ee, cj as te, iW as ne } from "./main-DMoCLB29.js";
import { m as _ } from "./marked.esm-DgqJBp_S.js";
const oe = { key: 0 }, ae = ["content"], se = { class: "text-lg text-left flex-grow" }, le = ["innerHTML"], ie = /* @__PURE__ */ M({
  __name: "section",
  props: {
    helpSection: {
      type: Object,
      required: !0
    }
  },
  setup(i) {
    const { t: w } = T();
    return (y, l) => {
      const h = H("tippy");
      return i.helpSection.drawn ? (u(), x("div", oe, [
        s("div", null, [
          b((u(), x("button", {
            type: "button",
            class: "help-section-header flex items-center py-15 px-25 hover:bg-gray-200 cursor-pointer select-none w-full",
            onClick: l[0] || (l[0] = (c) => y.$emit("expand")),
            content: r(w)(i.helpSection.expanded ? "help.section.collapse" : "help.section.expand")
          }, [
            s("span", se, $(i.helpSection.header), 1),
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
          N(A, {
            name: "help-item",
            mode: "out-in"
          }, {
            default: k(() => [
              b(s("div", {
                innerHTML: i.helpSection.info,
                class: "ramp-markdown section-body px-20 pt-5 ml-10 overflow-hidden"
              }, null, 8, le), [
                [z, i.helpSection.expanded]
              ])
            ]),
            _: 1
          })
        ])
      ])) : V("", !0);
    };
  }
}), re = /* @__PURE__ */ D(ie, [["__scopeId", "data-v-7dc61532"]]), ce = { class: "h-26 mb-8 mx-8" }, pe = ["placeholder", "aria-label"], de = { key: 0 }, fe = /* @__PURE__ */ M({
  __name: "screen",
  props: {
    panel: {
      type: Object,
      required: !0
    }
  },
  setup(i) {
    const w = K("iApi"), y = U(), { t: l } = T(), h = q(() => y.location), c = v([]), S = v([]), C = v([]), E = v(!1);
    let f, m;
    function B(e, o) {
      const t = o.info.split(/(<[^>]*>)/);
      for (const [n, a] of t.entries())
        if (n % 2 === 0 && a.toLowerCase().indexOf(e.toLowerCase()) > -1)
          return !0;
      return !1;
    }
    function R(e, o) {
      const n = S.value[o].split(/(<[^>]*>)/);
      let a = "";
      for (const [g, p] of n.entries())
        g % 2 === 0 ? a += p.replace(
          new RegExp(e, "gi"),
          (d) => `<mark>${d}</mark>`
        ) : a += p;
      c.value[o].info = a;
    }
    function j(e, o) {
      f = 0, o.forEach((t, n) => {
        t.info = S.value[n], t.drawn = B(e, t) || t.header.toLowerCase().indexOf(e.toLowerCase()) > -1, f = t.drawn ? f + 1 : f, t.expanded = t.drawn && e.length > 2, t.drawn && e.length > 2 && R(e, n);
      }), E.value = f === 0;
    }
    function O(e) {
      e.expanded = !e.expanded;
    }
    return W(() => {
      C.value.push(
        F(
          () => w.language,
          (e, o) => {
            if (e === o) return;
            const t = new _.Renderer(), n = h.value.slice(-1) === "/" ? h.value : `${h.value}/`;
            t.image = (a, g, p) => (a.indexOf("http") === -1 && (a = `${n}images/` + a), `<img src="${a}" alt="${p}">`), ne.get(`${n}${e}.md`).then((a) => {
              const g = /^#\s(.*)\n{2}(?:.+|\n(?!\n{2,}))*/gm;
              let p = a.data.replace(new RegExp("\r", "g"), "");
              c.value = [];
              let d;
              for (; d = g.exec(p); )
                c.value.push({
                  header: d[1],
                  // parse markdown on info section, split/splice/join removes the header
                  // since we can't put info section into its own regex grouping
                  info: _(d[0].split(`
`).splice(2).join(`
`), {
                    renderer: t
                  }),
                  drawn: !0,
                  expanded: !1
                }), S.value.push(
                  _(d[0].split(`
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
      C.value.forEach((e) => e());
    }), (e, o) => {
      const t = Z("panel-screen");
      return u(), L(t, { panel: i.panel }, {
        header: k(() => [
          G($(r(l)("help.title")), 1)
        ]),
        content: k(() => [
          s("div", ce, [
            b(s("input", {
              type: "search",
              class: "rv-help-search-bar border-b w-full text-base py-8 outline-none focus:shadow-outline border-gray-600 h-full min-w-0",
              placeholder: r(l)("help.search"),
              "onUpdate:modelValue": o[0] || (o[0] = (n) => Q(m) ? m.value = n : m = n),
              "aria-label": r(l)("help.search"),
              onInput: o[1] || (o[1] = (n) => j(r(m), c.value)),
              onKeypress: o[2] || (o[2] = X(Y(() => {
              }, ["prevent"]), ["enter"])),
              enterkeyhint: "done"
            }, null, 40, pe), [
              [P, r(m)]
            ])
          ]),
          E.value ? (u(), x("div", de, [
            s("p", null, $(r(l)("help.noResults")), 1)
          ])) : V("", !0),
          (u(!0), x(te, null, ee(c.value, (n, a) => (u(), L(re, {
            helpSection: n,
            key: a,
            onExpand: (g) => O(n)
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
//# sourceMappingURL=screen.vue_vue_type_script_setup_true_lang-BdkHC2J1.js.map
