import { defineComponent as H, computed as D, useTemplateRef as T, inject as N, ref as M, watch as B, nextTick as C, createElementBlock as b, createCommentVNode as y, unref as p, openBlock as f, createElementVNode as n, toDisplayString as m, Fragment as E, renderList as A, normalizeClass as R } from "vue";
import { storeToRefs as F } from "pinia";
import { n as S, F as O, o as z, H as V } from "./main-6dWPqJr6.js";
import { useI18n as I } from "vue-i18n";
import "tiny-emitter";
import "@arcgis/core/Color";
import "@arcgis/core/config";
import "@arcgis/core/core/reactiveUtils.js";
import "@arcgis/core/geometry/Extent";
import "@arcgis/core/geometry/Multipoint";
import "@arcgis/core/geometry/Point";
import "@arcgis/core/geometry/Polygon";
import "@arcgis/core/geometry/Polyline";
import "@arcgis/core/geometry/SpatialReference";
import "@arcgis/core/geometry/support/jsonUtils";
import "@arcgis/core/Graphic";
import "@arcgis/core/request";
import "@arcgis/core/symbols/PictureMarkerSymbol";
import "@arcgis/core/symbols/SimpleFillSymbol";
import "@arcgis/core/symbols/SimpleLineSymbol";
import "@arcgis/core/symbols/SimpleMarkerSymbol";
import "@arcgis/core/symbols/support/jsonUtils";
import "@arcgis/map-components/components/arcgis-swipe";
import "deepmerge";
import "@terraformer/spatial";
import "proj4";
import "throttle-debounce";
import "screenfull";
import "lodash-es";
import "vue-tippy";
import "linkify-html";
import "@popperjs/core";
import "@terraformer/arcgis";
import "csv2geojson";
import "redaxios";
import "await-to-js";
import "svg.js";
const j = { en: { "keyboardnav.activeNamespace": "Namespace Active: {name}", "keyboardnav.helpTitle": "Keyboard Shortcuts", "keyboardnav.keysTitle": "Keys for {name}", "keyboardnav.helpDescription": 'Press <span class="font-mono px-6 text-[0.825rem]/6 font-semibold rounded-lg px-1.5 ring-1 ring-inset ring-zinc-300 bg-zinc-400/10 text-zinc-500 dark:ring-zinc-400/30 dark:bg-zinc-400/10 dark:text-zinc-400">S</span> to start fixture shortcuts then type the fixture key (for example <span class="font-mono px-6 text-[0.825rem]/6 font-semibold rounded-lg px-1.5 ring-1 ring-inset ring-zinc-300 bg-zinc-400/10 text-zinc-500 dark:ring-zinc-400/30 dark:bg-zinc-400/10 dark:text-zinc-400">D</span>) followed by an action key like <span class="font-mono px-6 text-[0.825rem]/6 font-semibold rounded-lg px-1.5 ring-1 ring-inset ring-zinc-300 bg-zinc-400/10 text-zinc-500 dark:ring-zinc-400/30 dark:bg-zinc-400/10 dark:text-zinc-400">L</span>. Use <span class="font-mono px-6 text-[0.825rem]/6 font-semibold rounded-lg px-1.5 ring-1 ring-inset ring-zinc-300 bg-zinc-400/10 text-zinc-500 dark:ring-zinc-400/30 dark:bg-zinc-400/10 dark:text-zinc-400">Escape</span> to clear the chain or <span class="font-mono px-6 text-[0.825rem]/6 font-semibold rounded-lg px-1.5 ring-1 ring-inset ring-zinc-300 bg-zinc-400/10 text-zinc-500 dark:ring-zinc-400/30 dark:bg-zinc-400/10 dark:text-zinc-400">Backspace</span> to undo the last key.', "keyboardnav.noShortcuts": "No shortcuts available.", "keyboardnav.mainShortcuts.title": "Global controls", "keyboardnav.mainShortcuts.numbers": "Focus on an open panel (1 being leftmost)", "keyboardnav.mainShortcuts.escape": "Clear the chain or close the focused panel", "keyboardnav.mainShortcuts.start": "Start or reset fixture shortcuts", "keyboardnav.mainShortcuts.backspace": "Remove the last key in the chain", "keyboardnav.chain.help": "Toggle shortcut guide" }, fr: { "keyboardnav.activeNamespace": "Espace de noms actif : {name}", "keyboardnav.helpTitle": "Raccourcis clavier", "keyboardnav.keysTitle": "Raccourcis pour {name}", "keyboardnav.helpDescription": `Appuyez sur <span class="font-mono px-6 text-[0.825rem]/6 font-semibold rounded-lg px-1.5 ring-1 ring-inset ring-zinc-300 bg-zinc-400/10 text-zinc-500 dark:ring-zinc-400/30 dark:bg-zinc-400/10 dark:text-zinc-400">S</span> pour démarrer les raccourcis de module puis saisissez la touche du module (par exemple <span class="font-mono px-6 text-[0.825rem]/6 font-semibold rounded-lg px-1.5 ring-1 ring-inset ring-zinc-300 bg-zinc-400/10 text-zinc-500 dark:ring-zinc-400/30 dark:bg-zinc-400/10 dark:text-zinc-400">D</span>) suivie d'une touche d'action comme <span class="font-mono px-6 text-[0.825rem]/6 font-semibold rounded-lg px-1.5 ring-1 ring-inset ring-zinc-300 bg-zinc-400/10 text-zinc-500 dark:ring-zinc-400/30 dark:bg-zinc-400/10 dark:text-zinc-400">L</span>. Utilisez <span class="font-mono px-6 text-[0.825rem]/6 font-semibold rounded-lg px-1.5 ring-1 ring-inset ring-zinc-300 bg-zinc-400/10 text-zinc-500 dark:ring-zinc-400/30 dark:bg-zinc-400/10 dark:text-zinc-400">Échap</span> pour effacer la chaîne ou <span class="font-mono px-6 text-[0.825rem]/6 font-semibold rounded-lg px-1.5 ring-1 ring-inset ring-zinc-300 bg-zinc-400/10 text-zinc-500 dark:ring-zinc-400/30 dark:bg-zinc-400/10 dark:text-zinc-400">Retour</span> pour enlever la dernière touche.`, "keyboardnav.noShortcuts": "Aucun raccourci disponible.", "keyboardnav.mainShortcuts.title": "Contrôles globaux", "keyboardnav.mainShortcuts.numbers": "Concentrer sur un panneau ouvert (1 étant le plus à gauche)", "keyboardnav.mainShortcuts.escape": "Effacer la chaîne ou fermer le panneau actif", "keyboardnav.mainShortcuts.start": "Démarrer ou réinitialiser les raccourcis de module", "keyboardnav.mainShortcuts.backspace": "Retirer la dernière touche de la chaîne", "keyboardnav.chain.help": "Afficher ou masquer le guide des raccourcis" } }, U = ["aria-label"], q = { class: "border-b border-gray-200 bg-white px-4 py-20 sm:px-24" }, P = { class: "text-base font-semibold text-gray-900" }, G = ["innerHTML"], Y = {
  role: "list",
  class: "m-0 max-w-[calc(var(--container-lg)-(--spacing(8)))] list-none divide-y divide-zinc-900/5 p-0 dark:divide-white/5"
}, J = { class: "pl-24 mb-8 py-16" }, Q = { class: "flex items-center gap-x-12" }, W = { class: "font-mono text-md text-zinc-600" }, X = { class: "space-y-4 p-16 pl-24" }, Z = { class: "flex items-center gap-x-12" }, ee = { class: "font-mono text-md text-zinc-600" }, te = { class: "flex items-center gap-x-12" }, ne = { class: "font-mono text-md text-zinc-600" }, ie = { class: "flex items-center gap-x-12" }, ae = { class: "font-mono text-md text-zinc-600" }, se = { class: "flex items-center gap-x-12" }, re = { class: "font-mono text-md text-zinc-600" }, oe = {
  key: 0,
  class: "pl-24 mb-8 py-16 border-b"
}, ce = { class: "font-mono text-md text-zinc-600" }, le = { class: "flex items-center gap-x-4" }, de = { class: "font-mono px-6 text-[0.825rem]/6 font-semibold whitespace-nowrap rounded-lg px-1.5 ring-1 ring-inset ring-zinc-300 bg-zinc-400/10 text-zinc-500 dark:ring-zinc-400/30 dark:bg-zinc-400/10 dark:text-zinc-400" }, pe = { class: "font-mono text-md text-zinc-600" }, ue = {
  key: 0,
  class: "space-y-4 p-16 pl-24"
}, me = { class: "flex items-center gap-x-4" }, ge = { class: "font-mono px-6 text-[0.825rem]/6 font-semibold whitespace-nowrap rounded-lg px-1.5 ring-1 ring-inset ring-zinc-300 bg-zinc-400/10 text-zinc-500 dark:ring-zinc-400/30 dark:bg-zinc-400/10 dark:text-zinc-400" }, be = { class: "font-mono text-md text-zinc-600" }, $ = 'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])', fe = /* @__PURE__ */ H({
  __name: "keyboardnav",
  setup(w) {
    const i = S(), { activeNamespace: t, namespaces: e, helpVisible: l } = F(i), { t: o } = I(), u = D(
      () => Object.entries(e.value).map(([s, a]) => ({
        id: s,
        keys: a?.keys ?? []
      }))
    ), c = T("dialogRef"), d = N("iApi"), r = M(null);
    function h(s) {
      return s ? (s.tabIndex < 0 && s.setAttribute("tabindex", "-1"), s) : null;
    }
    function k() {
      const s = c.value;
      if (!s) return;
      const a = s.querySelector($);
      h(a ?? s)?.focus({ preventScroll: !0 });
    }
    function x() {
      const s = d?.geo?.map?.esriView?.container ?? document.getElementById("esriMap");
      return s ? s.querySelector(".esri-view-surface") ?? s.querySelector($) ?? s : null;
    }
    function L() {
      const s = x(), a = r.value && document.contains(r.value) ? r.value : null;
      h(s ?? a)?.focus({ preventScroll: !0 }), r.value = null;
    }
    function _() {
      i.setHelpVisible(!1), i.resetChain({ suppressHandler: !0 });
    }
    function K(s) {
      s.target === s.currentTarget && _();
    }
    return B(l, async (s) => {
      s ? (r.value = document.activeElement instanceof HTMLElement ? document.activeElement : null, await C(), l.value && k()) : (await C(), l.value || L());
    }), (s, a) => p(l) ? (f(), b("div", {
      key: 0,
      class: "absolute inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 transition-opacity pointer-events-auto",
      tabindex: "-1",
      onClick: K
    }, [
      n("div", {
        ref_key: "dialogRef",
        ref: c,
        class: "relative w-[640px] max-h-[80vh] overflow-y-auto rounded-xl bg-white py-8 px-10 shadow-xl",
        role: "dialog",
        "aria-modal": "true",
        "aria-live": "polite"
      }, [
        n("button", {
          type: "button",
          class: "absolute right-8 top-8 text-gray-500 hover:text-black focus:text-black p-4",
          "aria-label": p(o)("panels.controls.close"),
          onClick: _
        }, a[0] || (a[0] = [
          n("svg", {
            class: "fill-current w-16 h-16",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 352 512"
          }, [
            n("path", { d: "M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" })
          ], -1)
        ]), 8, U),
        n("div", q, [
          n("h3", P, m(p(o)("keyboardnav.helpTitle")), 1),
          n("div", {
            innerHTML: p(o)("keyboardnav.helpDescription"),
            class: "mt-6 text-sm text-gray-500"
          }, null, 8, G)
        ]),
        n("ul", Y, [
          n("li", J, [
            n("div", Q, [
              n("span", W, m(p(o)("keyboardnav.mainShortcuts.title")), 1)
            ]),
            n("div", X, [
              n("div", Z, [
                a[1] || (a[1] = n("span", { class: "font-mono px-6 text-[0.825rem]/6 font-semibold whitespace-nowrap rounded-lg px-1.5 ring-1 ring-inset ring-zinc-300 bg-zinc-400/10 text-zinc-500 dark:ring-zinc-400/30 dark:bg-zinc-400/10 dark:text-zinc-400" }, " 1-5 ", -1)),
                a[2] || (a[2] = n("span", { class: "h-2 w-2 rounded-full bg-zinc-300 dark:bg-zinc-600" }, null, -1)),
                n("span", ee, m(p(o)("keyboardnav.mainShortcuts.numbers")), 1)
              ]),
              n("div", te, [
                a[3] || (a[3] = n("span", { class: "font-mono px-6 text-[0.825rem]/6 font-semibold whitespace-nowrap rounded-lg px-1.5 ring-1 ring-inset ring-zinc-300 bg-zinc-400/10 text-zinc-500 dark:ring-zinc-400/30 dark:bg-zinc-400/10 dark:text-zinc-400" }, " ESC ", -1)),
                a[4] || (a[4] = n("span", { class: "h-2 w-2 rounded-full bg-zinc-300 dark:bg-zinc-600" }, null, -1)),
                n("span", ne, m(p(o)("keyboardnav.mainShortcuts.escape")), 1)
              ]),
              n("div", ie, [
                a[5] || (a[5] = n("span", { class: "font-mono px-6 text-[0.825rem]/6 font-semibold whitespace-nowrap rounded-lg px-1.5 ring-1 ring-inset ring-zinc-300 bg-zinc-400/10 text-zinc-500 dark:ring-zinc-400/30 dark:bg-zinc-400/10 dark:text-zinc-400" }, " S ", -1)),
                a[6] || (a[6] = n("span", { class: "h-2 w-2 rounded-full bg-zinc-300 dark:bg-zinc-600" }, null, -1)),
                n("span", ae, m(p(o)("keyboardnav.mainShortcuts.start")), 1)
              ]),
              n("div", se, [
                a[7] || (a[7] = n("span", { class: "font-mono px-6 text-[0.825rem]/6 font-semibold whitespace-nowrap rounded-lg px-1.5 ring-1 ring-inset ring-zinc-300 bg-zinc-400/10 text-zinc-500 dark:ring-zinc-400/30 dark:bg-zinc-400/10 dark:text-zinc-400" }, " Backspace ", -1)),
                a[8] || (a[8] = n("span", { class: "h-2 w-2 rounded-full bg-zinc-300 dark:bg-zinc-600" }, null, -1)),
                n("span", re, m(p(o)("keyboardnav.mainShortcuts.backspace")), 1)
              ])
            ])
          ]),
          u.value.length === 0 ? (f(), b("li", oe, [
            n("p", ce, m(p(o)("keyboardnav.noShortcuts")), 1)
          ])) : y("", !0),
          (f(!0), b(E, null, A(u.value, (g) => (f(), b("li", {
            key: g.id,
            class: "pl-24 mb-8 py-16 border-b"
          }, [
            n("div", {
              class: R(["flex items-center gap-x-12", { "opacity-60": p(t) && p(t) !== g.id }])
            }, [
              n("div", le, [
                a[9] || (a[9] = n("span", { class: "font-mono px-6 text-[0.825rem]/6 font-semibold whitespace-nowrap rounded-lg px-1.5 ring-1 ring-inset ring-zinc-300 bg-zinc-400/10 text-zinc-500 dark:ring-zinc-400/30 dark:bg-zinc-400/10 dark:text-zinc-400" }, "S", -1)),
                n("span", de, m(g.id), 1)
              ]),
              a[10] || (a[10] = n("span", { class: "h-2 w-2 rounded-full bg-zinc-300 dark:bg-zinc-600" }, null, -1)),
              n("span", pe, m(p(o)(`keyboardnav.ns.${g.id}`)), 1)
            ], 2),
            g.keys.length ? (f(), b("div", ue, [
              (f(!0), b(E, null, A(g.keys, (v) => (f(), b("div", {
                key: v.key,
                class: "flex items-center gap-x-12"
              }, [
                n("div", me, [
                  n("span", ge, m(v.key), 1)
                ]),
                a[11] || (a[11] = n("span", { class: "h-2 w-2 rounded-full bg-zinc-300 dark:bg-zinc-600" }, null, -1)),
                n("span", be, m(p(o)(`keyboardnav.key.${g.id}.${v.key}`)), 1)
              ]))), 128))
            ])) : y("", !0)
          ]))), 128))
        ])
      ], 512)
    ])) : y("", !0);
  }
});
class he extends O {
  keyboardnavStore = S(this.$vApp.$pinia);
  _isInput(i) {
    return !i || !(i instanceof HTMLElement) ? !1 : !!i.closest('input, textarea, [contenteditable="true"]');
  }
  /**
   * Register a namespace letter and its keyboard options.
   *
   * @param namespace requested namespace letter.
   * @param options registration object describing keys and handlers.
   * @returns final namespace letter used for registration.
   */
  register(i, t) {
    const e = i.toUpperCase(), l = this.keyboardnavStore.register(e, t), o = `keyboardnav.ns.${l}`;
    return Object.entries(t.name).forEach(([u, c]) => {
      this.$iApi.$i18n.mergeLocaleMessage(u, { [o]: c });
    }), t.keys.forEach((u) => {
      const c = `keyboardnav.key.${l}.${u.key}`;
      Object.entries(u.description).forEach(([d, r]) => {
        this.$iApi.$i18n.mergeLocaleMessage(d, { [c]: r });
      });
    }), l;
  }
  /**
   * Removes a namespace registration and associated handlers.
   */
  unregister(i) {
    this.keyboardnavStore.unregister(i.toUpperCase());
  }
  /**
   * Returns the navigation chain to the active namespace so another action can be
   * selected without restarting the shortcut sequence.
   */
  reset() {
    const i = this.keyboardnavStore, t = i.activeNamespace ?? i.keyChain[1];
    return t ? (i.setChain([z, t]), i.setLastAction(void 0), i.setChainState("awaitAction"), i.activeNamespace = t, "reset") : (i.resetChain({ suppressHandler: !0 }), "reset");
  }
  /**
   * Clears the active navigation chain and returns the system to the idle state.
   */
  clear(i) {
    return this.keyboardnavStore.resetChain({ event: i, suppressHandler: !0 }), "clear";
  }
  /** @internal */
  added() {
    const i = this.$iApi.$rootEl;
    i?.addEventListener("keydown", this._handleKeyDown), i?.addEventListener("blur", this._handleBlur);
  }
  /** @internal */
  removed() {
    const i = this.$iApi.$rootEl;
    i?.removeEventListener("keydown", this._handleKeyDown), i?.removeEventListener("blur", this._handleBlur);
  }
  _handleKeyDown = (i) => {
    if (!(i instanceof KeyboardEvent)) return;
    const t = i;
    if (this._isInput(t.target)) return;
    const e = this.keyboardnavStore, l = e.keyChain, o = t.altKey || t.ctrlKey || t.metaKey;
    if (!t.shiftKey && !o && !l.length && /^[1-5]$/.test(t.key)) {
      const d = parseInt(t.key, 10) - 1, r = this.$iApi.panel.visible[d];
      r && (t.preventDefault(), this.$iApi.panel.focus(r));
      return;
    }
    const u = t.key, c = u.length === 1 ? u.toUpperCase() : u;
    if (!o && c === "Escape" && e.helpVisible) {
      t.preventDefault(), e.setHelpVisible(!1), e.resetChain({ suppressHandler: !0 });
      return;
    }
    if (!t.shiftKey && !o && c === z) {
      t.preventDefault();
      const d = e.chainState === "complete";
      e.resetChain({ suppressHandler: d }), e.setChain([z]), e.setLastAction(void 0), e.setChainState("awaitNamespace");
      return;
    }
    if (e.chainState === "idle") {
      if (c === "Escape" && !t.shiftKey && !o) {
        const r = t.target.closest("[data-cy]");
        if (r && this.$iApi.$rootEl?.querySelector(".panel-container")?.contains(r)) {
          t.preventDefault();
          const h = r.getAttribute("data-cy");
          h && this.$iApi.panel.close(h);
        }
      }
      return;
    }
    if (c === "Escape") {
      t.preventDefault(), e.resetChain({ event: t });
      return;
    }
    if (c === "Backspace") {
      if (!l.length) return;
      t.preventDefault();
      const d = e.chainState;
      if (e.setLastAction(void 0), e.popChain(), !e.keyChain.length) {
        e.resetChain({ suppressHandler: !0 });
        return;
      }
      if (e.keyChain.length === 1) {
        e.setChainState("awaitNamespace"), e.deactivate(t);
        return;
      }
      if (e.keyChain.length === 2) {
        e.setChainState("awaitAction");
        const r = e.keyChain[1];
        d === "complete" && r && e.activate(r, t, { suppressHandler: !1 });
        return;
      }
      return;
    }
    if (!(t.shiftKey || o)) {
      if (e.chainState === "awaitNamespace") {
        const d = Object.keys(e.namespaces);
        if (c === "H") {
          t.preventDefault(), e.appendKey("H"), e.setLastAction({ namespace: V, key: "H" }), e.finalizeChain({ event: t }), e.setHelpVisible(!e.helpVisible);
          return;
        }
        if (d.includes(c)) {
          t.preventDefault(), e.appendKey(c), e.setLastAction(void 0), e.activate(c, t), e.setChainState("awaitAction");
          return;
        }
        return;
      }
      if (e.chainState === "awaitAction") {
        const d = e.activeNamespace ?? (l[1] || ""), r = e.namespaces[d];
        if (!r) {
          e.resetChain({ suppressHandler: !0 });
          return;
        }
        if (!r.keys.map((x) => x.key.toUpperCase()).includes(c))
          return;
        t.preventDefault(), e.appendKey(c);
        const k = e.trigger(c, t);
        if (k?.chainAction)
          return;
        k && e.setLastAction(k), e.finalizeChain({ event: t });
        return;
      }
    }
  };
  _handleBlur = () => {
    this.keyboardnavStore.resetChain(), this.keyboardnavStore.setHelpVisible(!1);
  };
}
class tt extends he {
  added() {
    Object.entries(j).forEach((l) => this.$iApi.$i18n.mergeLocaleMessage(...l));
    const { destroy: i, el: t } = this.mount(fe, {
      app: this.$element
    });
    this.$vApp.$el.getElementsByClassName("inner-shell")[0].appendChild(t.childNodes[0]), super.added(), this.removed = () => {
      super.removed(), i(), S(this.$vApp.$pinia).$reset();
    };
  }
}
export {
  tt as default
};
