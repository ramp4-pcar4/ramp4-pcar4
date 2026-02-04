import { bC as T, bD as q, bE as W, bI as O, bJ as X, bN as p, bL as x, bM as j, fC as A, fD as E, bQ as L, fI as B, i4 as G, bT as h, mp as te, bF as I, fH as ne, bG as Y, bH as Z, bK as P, bS as H, i3 as ee, im as oe, mq as V, mr as ae, ms as se, bP as re, fA as ie, hb as D, fG as le, mt as pe, bU as w, bV as z, bR as R, mu as F, kF as J, mv as ce, bx as ue, fK as de } from "./main-CmejC-so.js";
class U {
  id;
  /**
   * Optional object containing any options to be passed to the appbar component.
   *
   * @type {object}
   * @memberof AppbarItemInstance
   */
  options;
  /**
   * An actual id of the appbar Vue component to use when rendering in the template.
   *
   * @type {string}
   * @memberof AppbarItemInstance
   */
  componentId;
  constructor(a) {
    const n = {
      options: {},
      ...a
    };
    ({ id: this.id, options: this.options, componentId: this.componentId } = n);
  }
}
const fe = ["innerHTML"], N = /* @__PURE__ */ T({
  __name: "default-button",
  props: {
    panelId: {
      type: String,
      required: !0
    },
    minimize: {
      type: Boolean,
      default: !1
    },
    overflow: {
      type: Boolean
    }
  },
  setup($) {
    const { t: a } = q(), n = W("iApi"), o = $, d = O(() => n?.panel.get(o.panelId)?.button), l = () => {
      o.minimize ? n?.panel.toggleMinimize(o.panelId) : n?.panel.toggle(o.panelId);
    };
    return (e, y) => {
      const u = X("appbar-button");
      return d.value ? (p(), x(u, {
        key: 0,
        onClickFunction: l,
        tooltip: L(a)(d.value.tooltip),
        id: $.panelId
      }, {
        default: j(() => [
          A("div", {
            class: E(["default fill-current w-24 h-24 ml-8 sm:ml-20", { "ml-20": $.overflow }]),
            innerHTML: d.value.icon
          }, null, 10, fe)
        ]),
        _: 1
      }, 8, ["tooltip", "id"])) : B("", !0);
    };
  }
}), me = {}, ve = { class: "border-b p-0 self-center w-2/3" };
function he($, a) {
  return p(), h("span", ve);
}
const Q = /* @__PURE__ */ G(me, [["render", he], ["__scopeId", "data-v-5d32b715"]]);
var be = {
  name: "maxSize",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["offset", "preventOverflow", "flip"],
  fn: function(a) {
    var n = a.state, o = a.name, d = a.options, l = te(n, d), e = n.modifiersData.preventOverflow || {
      x: 0,
      y: 0
    }, y = e.x, u = e.y, c = n.rects.popper, v = c.width, S = c.height, _ = n.placement.split("-"), k = _[0], m = k === "left" ? "left" : "right", s = k === "top" ? "top" : "bottom";
    n.modifiersData[o] = {
      width: v - l[m] - y,
      height: S - l[s] - u
    };
  }
};
const ge = ["content", "aria-label"], $e = /* @__PURE__ */ T({
  __name: "more-button",
  props: {
    position: {
      type: String,
      default: "right-end"
    },
    popperOptions: {
      type: Object,
      default() {
        return {};
      }
    },
    numItems: {
      type: Number,
      default: 1
    },
    renderWatch: {
      type: Number,
      default: 0
    }
  },
  emits: ["updateParent"],
  setup($, { expose: a, emit: n }) {
    const { t: o } = q(), d = W("iApi"), l = $, e = n;
    function y() {
      e("updateParent");
    }
    const u = I(!1), c = I(0), v = I(), S = I(), _ = I();
    function k() {
      y(), V(() => {
        m(), u.value = !u.value;
      });
    }
    ne(
      () => l.renderWatch,
      () => {
        k();
      }
    );
    const m = () => {
      u.value = !u.value;
      const s = d.$vApp.$el.querySelector(".inner-shell"), b = {
        name: "applyMaxSize",
        enabled: !0,
        phase: "beforeWrite",
        requires: ["maxSize"],
        fn({ state: f }) {
          const { width: r } = f.modifiersData.maxSize;
          f.styles.popper = {
            ...f.styles.popper,
            maxWidth: `${r}px`,
            maxHeight: `${s.offsetHeight - 45}px`
          };
          const g = Math.min(
            l.numItems <= 0 ? 0 : 55 + 44 * (l.numItems - 1),
            s.offsetHeight - 45
          );
          f.styles.popper.height = `${g}px`, _?.value?.offsetHeight && (_.value.style.height = `${g}px`), f.styles.popper.overflowY = "auto", f.styles.popper.overflowX = "hidden";
        }
      };
      S.value && _.value && (c.value++, ae(S.value, _.value, {
        placement: l.position || "right-end",
        modifiers: [
          {
            ...be,
            options: {
              boundary: s
            }
          },
          b,
          {
            name: "offset",
            options: {
              offset: [0, 5]
            }
          },
          {
            name: "preventOverflow",
            enabled: !0,
            options: {
              boundary: s
            }
          }
        ],
        ...l.popperOptions
      })), c.value === 1 && k();
    };
    return Y(() => {
      window.addEventListener(
        "click",
        (s) => {
          s.target instanceof HTMLElement && !v.value?.contains(s.target) && (u.value = !1);
        },
        { capture: !0 }
      );
    }), Z(() => {
      window.removeEventListener(
        "click",
        (s) => {
          s.target instanceof HTMLElement && !v.value?.contains(s.target) && (u.value = !1);
        },
        { capture: !0 }
      );
    }), a({
      rerender: k
    }), (s, b) => {
      const f = P("focus-item"), r = P("tippy");
      return p(), h("div", {
        class: "appbar-item relative inset-x-0 w-full text-center",
        ref_key: "el",
        ref: v
      }, [
        H((p(), h("button", {
          type: "button",
          class: "text-gray-400 w-full h-48 focus:outline-none hover:text-white",
          onClick: b[0] || (b[0] = (g) => m()),
          content: L(o)("appbar.more"),
          "aria-label": L(o)("appbar.more"),
          ref_key: "dropdownTrigger",
          ref: S
        }, b[1] || (b[1] = [
          A("svg", {
            class: "fill-current w-24 h-24 m-auto",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24"
          }, [
            A("path", {
              d: "M0 0h24v24H0z",
              fill: "none"
            }),
            A("path", { d: "M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" })
          ], -1)
        ]), 8, ge)), [
          [f],
          [r, { placement: "right-end" }]
        ]),
        H(A("div", {
          id: "dropdown",
          class: "dropdown shadow-md border border-gray:200 absolute w-64 flex flex-col bg-white rounded",
          ref_key: "dropdown",
          ref: _
        }, [
          oe(s.$slots, "default", {}, void 0, !0)
        ], 512), [
          [ee, u.value]
        ])
      ], 512);
    };
  }
}), ye = /* @__PURE__ */ G($e, [["__scopeId", "data-v-93661050"]]), _e = {
  key: 0,
  class: "number absolute top-1 right-2 text-white w-18 rounded-full"
}, we = /* @__PURE__ */ T({
  __name: "appbar-button",
  setup($) {
    const a = se(), { t: n } = q(), o = W("iApi"), d = O(() => a.notificationNumber), l = () => {
      o.panel.toggle("notifications");
    };
    return (e, y) => {
      const u = X("appbar-button", !0);
      return p(), x(u, {
        onClickFunction: l,
        tooltip: L(n)("notifications.title"),
        class: "notification-button",
        id: ""
      }, {
        default: j(() => [
          y[0] || (y[0] = A("svg", {
            class: "fill-current w-24 h-24 mx-8 sm:mx-20",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24"
          }, [
            A("path", { d: "M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" })
          ], -1)),
          d.value && d.value > 0 ? (p(), h("span", _e, re(d.value), 1)) : B("", !0)
        ]),
        _: 1
      }, 8, ["tooltip"]);
    };
  }
}), xe = /* @__PURE__ */ G(we, [["__scopeId", "data-v-787da765"]]), Ie = ["content"], ke = /* @__PURE__ */ T({
  __name: "appbar",
  setup($) {
    const a = ie(), n = D(), o = I(0), d = I(0), l = O(() => n.visible), e = O(() => n.temporary), { t: y } = q(), u = I(!1), c = I({}), v = I(), S = () => {
      V(() => {
        F()?.proxy?.$forceUpdate();
      });
    }, _ = () => {
      v.value._tippy.hide();
    }, k = (m) => {
      m.key === "Tab" && v.value?.matches(":focus") && v.value._tippy.show();
    };
    return Y(() => {
      v.value?.addEventListener("blur", _), v.value?.addEventListener("keyup", k);
    }), le(() => {
      const m = F();
      window.addEventListener("resize", () => m?.proxy?.$forceUpdate());
    }), Z(() => {
      const m = F();
      window.removeEventListener("resize", () => m?.proxy?.$forceUpdate()), v.value?.removeEventListener("blur", _), v.value?.removeEventListener("keyup", k);
    }), pe(() => {
      V(() => {
        const m = v.value;
        let s, b = [...m.children], f = b[b.length - 2].getBoundingClientRect().top;
        a.mobileView || (f = m.getBoundingClientRect().bottom - 38);
        let r = m.querySelector("#dropdown");
        for (let i = b.length - 4; i >= 0; i--) {
          let C = b[i].getBoundingClientRect().bottom;
          if (f && r && (C > f || u.value && C + 56 > f))
            b[i].classList.forEach((M) => {
              M.includes("identifier") && (s = M.slice(11));
            }), s && (c.value[s] = !0, s.includes("divider") || o.value++, d.value++), u.value || (u.value = !0);
          else if (C !== 0)
            break;
        }
        let g = m.querySelector("#more"), t = g.getBoundingClientRect().bottom;
        if (s = void 0, u.value && f && g && r && t !== 0 && (t <= f - 56 || r.childElementCount == 1 && t <= f)) {
          let i = r.childElementCount, C = 0;
          for (; t <= f - 56 || i == 1; ) {
            let M = r.children[C];
            if (M && (M.classList.forEach((K) => {
              K.includes("identifier") && (s = K.slice(11));
            }), s && (c.value[s] = !1, s.includes("divider") || o.value--), t += 48, i -= 1, C += 1), i === 0) {
              u.value = !1;
              break;
            }
          }
        }
        Object.keys(c.value).forEach((i) => {
          m.querySelector(`.identifier-${i}`) || (delete c.value[i], i.includes("divider") || (o.value = Math.max(0, o.value - 1)), d.value++);
        });
      });
    }), (m, s) => {
      const b = P("focus-list"), f = P("tippy");
      return H((p(), h("div", {
        class: "absolute top-0 left-0 bottom-28 flex flex-col w-40 pointer-events-auto appbar z-50 sm:z-20 bg-black-75 sm:w-64 sm:bottom-38",
        content: L(y)("panels.controls.items"),
        ref_key: "el",
        ref: v
      }, [
        (p(!0), h(w, null, z(l.value, (r, g) => (p(), h(w, null, [
          (p(!0), h(w, null, z(r, (t, i) => (p(), h(w, null, [
            typeof t == "string" && c.value[`${t}-${i}`] !== !0 ? (p(), x(N, {
              key: `${t}-${i}-default`,
              panelId: t,
              class: E(["appbar-item h-48", `identifier-${t}-${i}`])
            }, null, 8, ["panelId", "class"])) : c.value[`${t}-${i}`] !== !0 ? (p(), x(J(t.componentId), {
              key: `${t}-${i}-custom`,
              options: t.options,
              class: E(["appbar-item h-48", `identifier-${t}-${i}`]),
              id: t.id
            }, null, 8, ["options", "id", "class"])) : B("", !0)
          ], 64))), 256)),
          c.value[`divider-${g}`] !== !0 ? (p(), x(Q, {
            class: E(["appbar-item", `identifier-divider-${g}`]),
            key: `${r}-${g}-default`
          }, null, 8, ["class"])) : B("", !0)
        ], 64))), 256)),
        (p(!0), h(w, null, z(e.value?.filter((r) => c.value[`${r}-temp`] !== !0), (r) => (p(), x(N, {
          panelId: r,
          minimize: !0,
          key: `${r}-temp`,
          class: E([`identifier-${r}-temp`, "appbar-item h-48"])
        }, null, 8, ["panelId", "class"]))), 128)),
        H(R(ye, {
          id: "more",
          numItems: o.value,
          renderWatch: d.value,
          onUpdateParent: S
        }, {
          default: j(() => [
            (p(!0), h(w, null, z(l.value, (r, g) => (p(), h(w, { key: g }, [
              (p(!0), h(w, null, z(r, (t, i) => (p(), h(w, null, [
                typeof t == "string" && c.value[`${t}-${i}`] ? (p(), x(N, {
                  key: `${t}-${i}-default`,
                  panelId: t,
                  class: E(["text-black hover:bg-gray my-4 h-36", `identifier-${t}-${i}`]),
                  overflow: ""
                }, null, 8, ["panelId", "class"])) : c.value[`${t}-${i}`] ? (p(), x(J(t.componentId), {
                  key: `${t}-${i}-custom`,
                  options: t.options,
                  id: t.id,
                  class: E(["appbar-item h-48", `identifier-${t}-${i}`])
                }, null, 8, ["options", "id", "class"])) : B("", !0)
              ], 64))), 256)),
              c.value[`divider-${g}`] ? (p(), x(Q, {
                key: 0,
                class: E(["border-black my-4", `identifier-divider-${g}`])
              }, null, 8, ["class"])) : B("", !0)
            ], 64))), 128)),
            (p(!0), h(w, null, z(e.value?.filter((r) => c.value[`${r}-temp`]), (r) => (p(), x(N, {
              panelId: r,
              minimize: !0,
              key: `${r}-temp`,
              class: E([`identifier-${r}-temp`, "text-black hover:bg-gray my-4 h-36"]),
              overflow: ""
            }, null, 8, ["panelId", "class"]))), 128))
          ]),
          _: 1
        }, 8, ["numItems", "renderWatch"]), [
          [ee, u.value]
        ]),
        R(xe, { class: "appbar-item bottom-48 h-48 sm:display-none" }),
        R(ce, {
          class: "absolute bottom-0 h-40 sm:display-none w-full text-center",
          position: "right-start"
        })
      ], 8, Ie)), [
        [b],
        [f, {
          trigger: "manual",
          placement: "top-end",
          popperOptions: {
            placement: "top",
            modifiers: [
              { name: "preventOverflow", options: { altAxis: !0 } },
              { name: "flip", options: { fallbackPlacements: ["top"] } }
            ]
          }
        }]
      ]);
    };
  }
});
class Ee extends ue {
  /**
   * Returns `AppbarFixtureConfig` section of the global config file.
   *
   * @readonly
   * @type {AppbarFixtureConfig}
   * @memberof AppbarFixture
   */
  get config() {
    return super.config;
  }
  /**
   * Parses the appbar config JSON snippet from the config file and save resulting objects to the fixture store.
   *
   * @param {AppbarFixtureConfig} [appbarConfig]
   * @returns
   * @memberof AppbarAPI
   */
  _parseConfig(a) {
    if (!a)
      return;
    const n = D(this.$vApp.$pinia);
    let o;
    Array.isArray(a.items[0]) ? o = a.items : o = [a.items];
    const d = [];
    o.forEach((l) => {
      d.push(
        l.map((e) => typeof e == "string" ? e : new U(e))
      );
    }), n.items = d.flat().reduce((l, e) => (l[e instanceof U ? e.id : e] = e, l), {}), n.order = d.map(
      (l) => l.map((e) => e instanceof U ? e.id : e)
    ), this._validateItems();
  }
  /**
   * Checks if components specified as appbar items are registered or not.
   *
   * @memberof AppbarAPI
   */
  _validateItems() {
    const a = D(this.$vApp.$pinia);
    a.order.flat().forEach((n) => {
      typeof a.items[n] != "string" && [n].some((o) => {
        this.$iApi.fixture.exists(o) && !a.items[n] && (a.items[n].componentId = `${o}-appbar-button`);
      });
    });
  }
}
const Se = { en: { "appbar.navigation": "Navigation", "appbar.more": "More", "navigation.export": "Export", "navigation.map.export": "Export Map" }, fr: { "appbar.navigation": "Navigation", "appbar.more": "Plus", "navigation.export": "Exporter", "navigation.map.export": "Exporter la Carte" } };
class Ce extends Ee {
  initialized() {
  }
  async added() {
    Object.entries(Se).forEach((e) => this.$iApi.$i18n.mergeLocaleMessage(...e));
    const { destroy: a, el: n } = this.mount(ke, {
      app: this.$element
    }), o = this.$vApp.$el.getElementsByClassName("inner-shell")[0];
    o.insertBefore(n.childNodes[0], o.querySelector(".panel-stack")), this._parseConfig(this.config);
    const d = this.$vApp.$watch(
      () => this.config,
      (e) => this._parseConfig(e)
    ), l = [];
    l.push(
      this.$iApi.event.on(de.COMPONENT, () => {
        this._parseConfig(this.config);
      })
    ), this.removed = () => {
      const e = D(this.$vApp.$pinia);
      d(), l.forEach((c) => this.$iApi.event.off(c));
      const y = { ...e.items }, u = [...e.temporary];
      Object.keys(y).forEach((c) => e.removeButton(c)), u.forEach((c) => e.removeButton(c)), a(), e.$reset();
    };
  }
}
export {
  Ce as default
};
//# sourceMappingURL=index-CAvykcvU.js.map
