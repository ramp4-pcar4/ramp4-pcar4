import { F as e, P as t, s as n } from "./main-BtLSZphp.js";
import { storeToRefs as r } from "pinia";
import { Fragment as i, computed as a, createCommentVNode as o, createElementBlock as s, createElementVNode as c, defineComponent as l, inject as u, nextTick as d, normalizeClass as f, openBlock as p, ref as m, renderList as h, toDisplayString as g, unref as _, useTemplateRef as v, watch as y } from "vue";
import { useI18n as b } from "vue-i18n";
//#region src/fixtures/keyboardnav/lang/lang.csv?raw
var x = {
	en: {
		"keyboardnav.activeNamespace": "Namespace Active: {name}",
		"keyboardnav.helpTitle": "Keyboard Shortcuts",
		"keyboardnav.keysTitle": "Keys for {name}",
		"keyboardnav.helpDescription": "Press <span class=\"font-mono px-6 text-[0.825rem]/6 font-semibold rounded-lg px-1.5 ring-1 ring-inset ring-zinc-300 bg-zinc-400/10 text-zinc-500 dark:ring-zinc-400/30 dark:bg-zinc-400/10 dark:text-zinc-400\">S</span> to start fixture shortcuts then type the fixture key (for example <span class=\"font-mono px-6 text-[0.825rem]/6 font-semibold rounded-lg px-1.5 ring-1 ring-inset ring-zinc-300 bg-zinc-400/10 text-zinc-500 dark:ring-zinc-400/30 dark:bg-zinc-400/10 dark:text-zinc-400\">D</span>) followed by an action key like <span class=\"font-mono px-6 text-[0.825rem]/6 font-semibold rounded-lg px-1.5 ring-1 ring-inset ring-zinc-300 bg-zinc-400/10 text-zinc-500 dark:ring-zinc-400/30 dark:bg-zinc-400/10 dark:text-zinc-400\">L</span>. Use <span class=\"font-mono px-6 text-[0.825rem]/6 font-semibold rounded-lg px-1.5 ring-1 ring-inset ring-zinc-300 bg-zinc-400/10 text-zinc-500 dark:ring-zinc-400/30 dark:bg-zinc-400/10 dark:text-zinc-400\">Escape</span> to clear the chain or <span class=\"font-mono px-6 text-[0.825rem]/6 font-semibold rounded-lg px-1.5 ring-1 ring-inset ring-zinc-300 bg-zinc-400/10 text-zinc-500 dark:ring-zinc-400/30 dark:bg-zinc-400/10 dark:text-zinc-400\">Backspace</span> to undo the last key.",
		"keyboardnav.noShortcuts": "No shortcuts available.",
		"keyboardnav.mainShortcuts.title": "Global controls",
		"keyboardnav.mainShortcuts.numbers": "Focus on an open panel (1 being leftmost)",
		"keyboardnav.mainShortcuts.escape": "Clear the chain or close the focused panel",
		"keyboardnav.mainShortcuts.start": "Start or reset fixture shortcuts",
		"keyboardnav.mainShortcuts.backspace": "Remove the last key in the chain",
		"keyboardnav.chain.help": "Toggle shortcut guide"
	},
	fr: {
		"keyboardnav.activeNamespace": "Espace de noms actif : {name}",
		"keyboardnav.helpTitle": "Raccourcis clavier",
		"keyboardnav.keysTitle": "Raccourcis pour {name}",
		"keyboardnav.helpDescription": "Appuyez sur <span class=\"font-mono px-6 text-[0.825rem]/6 font-semibold rounded-lg px-1.5 ring-1 ring-inset ring-zinc-300 bg-zinc-400/10 text-zinc-500 dark:ring-zinc-400/30 dark:bg-zinc-400/10 dark:text-zinc-400\">S</span> pour démarrer les raccourcis de module puis saisissez la touche du module (par exemple <span class=\"font-mono px-6 text-[0.825rem]/6 font-semibold rounded-lg px-1.5 ring-1 ring-inset ring-zinc-300 bg-zinc-400/10 text-zinc-500 dark:ring-zinc-400/30 dark:bg-zinc-400/10 dark:text-zinc-400\">D</span>) suivie d'une touche d'action comme <span class=\"font-mono px-6 text-[0.825rem]/6 font-semibold rounded-lg px-1.5 ring-1 ring-inset ring-zinc-300 bg-zinc-400/10 text-zinc-500 dark:ring-zinc-400/30 dark:bg-zinc-400/10 dark:text-zinc-400\">L</span>. Utilisez <span class=\"font-mono px-6 text-[0.825rem]/6 font-semibold rounded-lg px-1.5 ring-1 ring-inset ring-zinc-300 bg-zinc-400/10 text-zinc-500 dark:ring-zinc-400/30 dark:bg-zinc-400/10 dark:text-zinc-400\">Échap</span> pour effacer la chaîne ou <span class=\"font-mono px-6 text-[0.825rem]/6 font-semibold rounded-lg px-1.5 ring-1 ring-inset ring-zinc-300 bg-zinc-400/10 text-zinc-500 dark:ring-zinc-400/30 dark:bg-zinc-400/10 dark:text-zinc-400\">Retour</span> pour enlever la dernière touche.",
		"keyboardnav.noShortcuts": "Aucun raccourci disponible.",
		"keyboardnav.mainShortcuts.title": "Contrôles globaux",
		"keyboardnav.mainShortcuts.numbers": "Concentrer sur un panneau ouvert (1 étant le plus à gauche)",
		"keyboardnav.mainShortcuts.escape": "Effacer la chaîne ou fermer le panneau actif",
		"keyboardnav.mainShortcuts.start": "Démarrer ou réinitialiser les raccourcis de module",
		"keyboardnav.mainShortcuts.backspace": "Retirer la dernière touche de la chaîne",
		"keyboardnav.chain.help": "Afficher ou masquer le guide des raccourcis"
	}
}, S = ["aria-label"], ee = { class: "border-b border-gray-200 bg-white px-4 py-20 sm:px-24" }, te = { class: "text-base font-semibold text-gray-900" }, C = ["innerHTML"], w = {
	role: "list",
	class: "m-0 max-w-[calc(var(--container-lg)-(--spacing(8)))] list-none divide-y divide-zinc-900/5 p-0 dark:divide-white/5"
}, T = { class: "pl-24 mb-8 py-16" }, E = { class: "flex items-center gap-x-12" }, D = { class: "font-mono text-md text-zinc-600" }, O = { class: "space-y-4 p-16 pl-24" }, k = { class: "flex items-center gap-x-12" }, A = { class: "font-mono text-md text-zinc-600" }, j = { class: "flex items-center gap-x-12" }, M = { class: "font-mono text-md text-zinc-600" }, N = { class: "flex items-center gap-x-12" }, P = { class: "font-mono text-md text-zinc-600" }, F = { class: "flex items-center gap-x-12" }, I = { class: "font-mono text-md text-zinc-600" }, L = {
	key: 0,
	class: "pl-24 mb-8 py-16 border-b"
}, R = { class: "font-mono text-md text-zinc-600" }, ne = { class: "flex items-center gap-x-4" }, z = { class: "font-mono px-6 text-[0.825rem]/6 font-semibold whitespace-nowrap rounded-lg px-1.5 ring-1 ring-inset ring-zinc-300 bg-zinc-400/10 text-zinc-500 dark:ring-zinc-400/30 dark:bg-zinc-400/10 dark:text-zinc-400" }, B = { class: "font-mono text-md text-zinc-600" }, V = {
	key: 0,
	class: "space-y-4 p-16 pl-24"
}, H = { class: "flex items-center gap-x-4" }, U = { class: "font-mono px-6 text-[0.825rem]/6 font-semibold whitespace-nowrap rounded-lg px-1.5 ring-1 ring-inset ring-zinc-300 bg-zinc-400/10 text-zinc-500 dark:ring-zinc-400/30 dark:bg-zinc-400/10 dark:text-zinc-400" }, W = { class: "font-mono text-md text-zinc-600" }, G = "button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex=\"-1\"])", K = /* @__PURE__ */ l({
	__name: "keyboardnav",
	setup(e) {
		let n = t(), { activeNamespace: l, namespaces: x, helpVisible: K } = r(n), { t: q } = b(), J = a(() => Object.entries(x.value).map(([e, t]) => ({
			id: e,
			keys: t?.keys ?? []
		}))), Y = v("dialogRef"), X = u("iApi"), Z = m(null);
		function Q(e) {
			return e ? (e.tabIndex < 0 && e.setAttribute("tabindex", "-1"), e) : null;
		}
		function re() {
			let e = Y.value;
			e && Q(e.querySelector(G) ?? e)?.focus({ preventScroll: !0 });
		}
		function ie() {
			let e = X?.geo?.map?.esriView?.container ?? document.getElementById("esriMap");
			return e ? e.querySelector(".esri-view-surface") ?? e.querySelector(G) ?? e : null;
		}
		function ae() {
			let e = ie(), t = Z.value && document.contains(Z.value) ? Z.value : null;
			Q(e ?? t)?.focus({ preventScroll: !0 }), Z.value = null;
		}
		function $() {
			n.setHelpVisible(!1), n.resetChain({ suppressHandler: !0 });
		}
		function oe(e) {
			e.target === e.currentTarget && $();
		}
		return y(K, async (e) => {
			e ? (Z.value = document.activeElement instanceof HTMLElement ? document.activeElement : null, await d(), K.value && re()) : (await d(), K.value || ae());
		}), (e, t) => _(K) ? (p(), s("div", {
			key: 0,
			class: "absolute inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 transition-opacity pointer-events-auto",
			tabindex: "-1",
			onClick: oe
		}, [c("div", {
			ref_key: "dialogRef",
			ref: Y,
			class: "relative w-[640px] max-h-[80vh] overflow-y-auto rounded-xl bg-white py-8 px-10 shadow-xl",
			role: "dialog",
			"aria-modal": "true",
			"aria-live": "polite"
		}, [
			c("button", {
				type: "button",
				class: "absolute right-8 top-8 text-gray-500 hover:text-black focus:text-black p-4",
				"aria-label": _(q)("panels.controls.close"),
				onClick: $
			}, [...t[0] ||= [c("svg", {
				class: "fill-current w-16 h-16",
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 352 512"
			}, [c("path", { d: "M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" })], -1)]], 8, S),
			c("div", ee, [c("h3", te, g(_(q)("keyboardnav.helpTitle")), 1), c("div", {
				innerHTML: _(q)("keyboardnav.helpDescription"),
				class: "mt-6 text-sm text-gray-500"
			}, null, 8, C)]),
			c("ul", w, [
				c("li", T, [c("div", E, [c("span", D, g(_(q)("keyboardnav.mainShortcuts.title")), 1)]), c("div", O, [
					c("div", k, [
						t[1] ||= c("span", { class: "font-mono px-6 text-[0.825rem]/6 font-semibold whitespace-nowrap rounded-lg px-1.5 ring-1 ring-inset ring-zinc-300 bg-zinc-400/10 text-zinc-500 dark:ring-zinc-400/30 dark:bg-zinc-400/10 dark:text-zinc-400" }, " 1-5 ", -1),
						t[2] ||= c("span", { class: "h-2 w-2 rounded-full bg-zinc-300 dark:bg-zinc-600" }, null, -1),
						c("span", A, g(_(q)("keyboardnav.mainShortcuts.numbers")), 1)
					]),
					c("div", j, [
						t[3] ||= c("span", { class: "font-mono px-6 text-[0.825rem]/6 font-semibold whitespace-nowrap rounded-lg px-1.5 ring-1 ring-inset ring-zinc-300 bg-zinc-400/10 text-zinc-500 dark:ring-zinc-400/30 dark:bg-zinc-400/10 dark:text-zinc-400" }, " ESC ", -1),
						t[4] ||= c("span", { class: "h-2 w-2 rounded-full bg-zinc-300 dark:bg-zinc-600" }, null, -1),
						c("span", M, g(_(q)("keyboardnav.mainShortcuts.escape")), 1)
					]),
					c("div", N, [
						t[5] ||= c("span", { class: "font-mono px-6 text-[0.825rem]/6 font-semibold whitespace-nowrap rounded-lg px-1.5 ring-1 ring-inset ring-zinc-300 bg-zinc-400/10 text-zinc-500 dark:ring-zinc-400/30 dark:bg-zinc-400/10 dark:text-zinc-400" }, " S ", -1),
						t[6] ||= c("span", { class: "h-2 w-2 rounded-full bg-zinc-300 dark:bg-zinc-600" }, null, -1),
						c("span", P, g(_(q)("keyboardnav.mainShortcuts.start")), 1)
					]),
					c("div", F, [
						t[7] ||= c("span", { class: "font-mono px-6 text-[0.825rem]/6 font-semibold whitespace-nowrap rounded-lg px-1.5 ring-1 ring-inset ring-zinc-300 bg-zinc-400/10 text-zinc-500 dark:ring-zinc-400/30 dark:bg-zinc-400/10 dark:text-zinc-400" }, " Backspace ", -1),
						t[8] ||= c("span", { class: "h-2 w-2 rounded-full bg-zinc-300 dark:bg-zinc-600" }, null, -1),
						c("span", I, g(_(q)("keyboardnav.mainShortcuts.backspace")), 1)
					])
				])]),
				J.value.length === 0 ? (p(), s("li", L, [c("p", R, g(_(q)("keyboardnav.noShortcuts")), 1)])) : o("", !0),
				(p(!0), s(i, null, h(J.value, (e) => (p(), s("li", {
					key: e.id,
					class: "pl-24 mb-8 py-16 border-b"
				}, [c("div", { class: f(["flex items-center gap-x-12", { "opacity-60": _(l) && _(l) !== e.id }]) }, [
					c("div", ne, [t[9] ||= c("span", { class: "font-mono px-6 text-[0.825rem]/6 font-semibold whitespace-nowrap rounded-lg px-1.5 ring-1 ring-inset ring-zinc-300 bg-zinc-400/10 text-zinc-500 dark:ring-zinc-400/30 dark:bg-zinc-400/10 dark:text-zinc-400" }, "S", -1), c("span", z, g(e.id), 1)]),
					t[10] ||= c("span", { class: "h-2 w-2 rounded-full bg-zinc-300 dark:bg-zinc-600" }, null, -1),
					c("span", B, g(_(q)(`keyboardnav.ns.${e.id}`)), 1)
				], 2), e.keys.length ? (p(), s("div", V, [(p(!0), s(i, null, h(e.keys, (n) => (p(), s("div", {
					key: n.key,
					class: "flex items-center gap-x-12"
				}, [
					c("div", H, [c("span", U, g(n.key), 1)]),
					t[11] ||= c("span", { class: "h-2 w-2 rounded-full bg-zinc-300 dark:bg-zinc-600" }, null, -1),
					c("span", W, g(_(q)(`keyboardnav.key.${e.id}.${n.key}`)), 1)
				]))), 128))])) : o("", !0)]))), 128))
			])
		], 512)])) : o("", !0);
	}
}), q = class extends n {
	keyboardnavStore = t(this.$vApp.$pinia);
	_isInput(e) {
		return !e || !(e instanceof HTMLElement) ? !1 : !!e.closest("input, textarea, [contenteditable=\"true\"]");
	}
	register(e, t) {
		let n = e.toUpperCase(), r = this.keyboardnavStore.register(n, t), i = `keyboardnav.ns.${r}`;
		return Object.entries(t.name).forEach(([e, t]) => {
			this.$iApi.$i18n.mergeLocaleMessage(e, { [i]: t });
		}), t.keys.forEach((e) => {
			let t = `keyboardnav.key.${r}.${e.key}`;
			Object.entries(e.description).forEach(([e, n]) => {
				this.$iApi.$i18n.mergeLocaleMessage(e, { [t]: n });
			});
		}), r;
	}
	unregister(e) {
		this.keyboardnavStore.unregister(e.toUpperCase());
	}
	reset() {
		let e = this.keyboardnavStore, t = e.activeNamespace ?? e.keyChain[1];
		return t ? (e.setChain(["S", t]), e.setLastAction(void 0), e.setChainState("awaitAction"), e.activeNamespace = t, "reset") : (e.resetChain({ suppressHandler: !0 }), "reset");
	}
	clear(e) {
		return this.keyboardnavStore.resetChain({
			event: e,
			suppressHandler: !0
		}), "clear";
	}
	added() {
		let e = this.$iApi.$rootEl;
		e?.addEventListener("keydown", this._handleKeyDown), e?.addEventListener("blur", this._handleBlur);
	}
	removed() {
		let e = this.$iApi.$rootEl;
		e?.removeEventListener("keydown", this._handleKeyDown), e?.removeEventListener("blur", this._handleBlur);
	}
	_handleKeyDown = (t) => {
		if (!(t instanceof KeyboardEvent)) return;
		let n = t;
		if (this._isInput(n.target)) return;
		let r = this.keyboardnavStore, i = r.keyChain, a = n.altKey || n.ctrlKey || n.metaKey;
		if (!n.shiftKey && !a && !i.length && /^[1-5]$/.test(n.key)) {
			let e = parseInt(n.key, 10) - 1, t = this.$iApi.panel.visible[e];
			t && (n.preventDefault(), this.$iApi.panel.focus(t));
			return;
		}
		let o = n.key, s = o.length === 1 ? o.toUpperCase() : o;
		if (!a && s === "Escape" && r.helpVisible) {
			n.preventDefault(), r.setHelpVisible(!1), r.resetChain({ suppressHandler: !0 });
			return;
		}
		if (!n.shiftKey && !a && s === "S") {
			n.preventDefault();
			let e = r.chainState === "complete";
			r.resetChain({ suppressHandler: e }), r.setChain(["S"]), r.setLastAction(void 0), r.setChainState("awaitNamespace");
			return;
		}
		if (r.chainState === "idle") {
			if (s === "Escape" && !n.shiftKey && !a) {
				let e = n.target.closest("[data-cy]");
				if (e && this.$iApi.$rootEl?.querySelector(".panel-container")?.contains(e)) {
					n.preventDefault();
					let t = e.getAttribute("data-cy");
					t && this.$iApi.panel.close(t);
				}
			}
			return;
		}
		if (s === "Escape") {
			n.preventDefault(), r.resetChain({ event: n });
			return;
		}
		if (s === "Backspace") {
			if (!i.length) return;
			n.preventDefault();
			let e = r.chainState;
			if (r.setLastAction(void 0), r.popChain(), !r.keyChain.length) {
				r.resetChain({ suppressHandler: !0 });
				return;
			}
			if (r.keyChain.length === 1) {
				r.setChainState("awaitNamespace"), r.deactivate(n);
				return;
			}
			if (r.keyChain.length === 2) {
				r.setChainState("awaitAction");
				let t = r.keyChain[1];
				e === "complete" && t && r.activate(t, n, { suppressHandler: !1 });
				return;
			}
			return;
		}
		if (!(n.shiftKey || a)) {
			if (r.chainState === "awaitNamespace") {
				let t = Object.keys(r.namespaces);
				if (s === "H") {
					n.preventDefault(), r.appendKey("H"), r.setLastAction({
						namespace: e,
						key: "H"
					}), r.finalizeChain({ event: n }), r.setHelpVisible(!r.helpVisible);
					return;
				}
				if (t.includes(s)) {
					n.preventDefault(), r.appendKey(s), r.setLastAction(void 0), r.activate(s, n), r.setChainState("awaitAction");
					return;
				}
				return;
			}
			if (r.chainState === "awaitAction") {
				let e = r.activeNamespace ?? (i[1] || ""), t = r.namespaces[e];
				if (!t) {
					r.resetChain({ suppressHandler: !0 });
					return;
				}
				if (!t.keys.map((e) => e.key.toUpperCase()).includes(s)) return;
				n.preventDefault(), r.appendKey(s);
				let a = r.trigger(s, n);
				if (a?.chainAction) return;
				a && r.setLastAction(a), r.finalizeChain({ event: n });
				return;
			}
		}
	};
	_handleBlur = () => {
		this.keyboardnavStore.resetChain(), this.keyboardnavStore.setHelpVisible(!1);
	};
}, J = class extends q {
	added() {
		Object.entries(x).forEach((e) => this.$iApi.$i18n.mergeLocaleMessage(...e));
		let { destroy: e, el: n } = this.mount(K, { app: this.$element });
		this.$vApp.$el.getElementsByClassName("inner-shell")[0].appendChild(n.childNodes[0]), super.added(), this.removed = () => {
			super.removed(), e(), t(this.$vApp.$pinia).$reset();
		};
	}
};
//#endregion
export { J as default };
