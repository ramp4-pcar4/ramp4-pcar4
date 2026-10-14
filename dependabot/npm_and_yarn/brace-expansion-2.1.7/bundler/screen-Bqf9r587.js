import { t as e } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { t } from "./store-CE7UzPRf.js";
import { Fragment as n, Transition as r, computed as i, createBlock as a, createCommentVNode as o, createElementBlock as s, createElementVNode as c, createTextVNode as l, createVNode as u, defineComponent as d, inject as f, normalizeClass as p, onBeforeMount as m, onBeforeUnmount as h, openBlock as g, ref as _, renderList as v, resolveComponent as y, resolveDirective as b, toDisplayString as x, unref as S, vModelText as C, vShow as w, watch as T, withCtx as E, withDirectives as D, withKeys as O, withModifiers as k } from "vue";
import { useI18n as A } from "vue-i18n";
import j from "redaxios";
import { marked as M } from "marked";
//#region src/fixtures/help/section.vue?vue&type=script&setup=true&lang.ts
var N = { key: 0 }, P = ["content"], F = { class: "text-lg text-left flex-grow" }, I = ["innerHTML"], L = /*#__PURE__*/ e(/* @__PURE__ */ d({
	__name: "section",
	props: { helpSection: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let { t } = A();
		return (n, i) => {
			let a = b("tippy");
			return e.helpSection.drawn ? (g(), s("div", N, [c("div", null, [D((g(), s("button", {
				type: "button",
				class: "help-section-header flex items-center py-15 px-25 hover:bg-gray-200 cursor-pointer select-none w-full",
				onClick: i[0] ||= (e) => n.$emit("expand"),
				content: S(t)(e.helpSection.expanded ? "help.section.collapse" : "help.section.expand")
			}, [c("span", F, x(e.helpSection.header), 1), c("div", { class: p(["dropdown-icon", { "transform -rotate-180": e.helpSection.expanded }]) }, [...i[1] ||= [c("svg", {
				xmlns: "http://www.w3.org/2000/svg",
				height: "24",
				viewBox: "0 0 24 24",
				width: "24"
			}, [c("path", {
				d: "M0 0h24v24H0V0z",
				fill: "none"
			}), c("path", { d: "M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" })], -1)]], 2)], 8, P)), [[a, {
				placement: "top-end",
				hideOnClick: !1
			}]]), u(r, {
				name: "help-item",
				mode: "out-in"
			}, {
				default: E(() => [D(c("div", {
					innerHTML: e.helpSection.info,
					class: "ramp-markdown section-body px-20 pt-5 ml-10 overflow-hidden"
				}, null, 8, I), [[w, e.helpSection.expanded]])]),
				_: 1
			})])])) : o("", !0);
		};
	}
}), [["__scopeId", "data-v-7dc61532"]]), R = { class: "h-26 mb-8 mx-8" }, z = ["placeholder", "aria-label"], B = { key: 0 }, V = /* @__PURE__ */ d({
	__name: "screen",
	props: { panel: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let r = f("iApi"), u = t(), { t: d } = A(), p = i(() => u.location), b = i(() => u.dynamicSections), w = _([]), N = _([]), P = _([]), F = _(!1), I, V = _(""), H = 0;
		function U(e) {
			let t = V.value.toLowerCase(), n = e.info.split(/(<[^>]*>)/);
			for (let [e, r] of n.entries()) if (e % 2 == 0 && r.toLowerCase().indexOf(t) > -1) return !0;
			return !1;
		}
		function W(e) {
			let t = V.value, n = N.value[e].split(/(<[^>]*>)/), r = "";
			for (let [e, i] of n.entries()) e % 2 == 0 ? r += i.replace(new RegExp(t, "gi"), (e) => `<mark>${e}</mark>`) : r += i;
			w.value[e].info = r;
		}
		function G(e) {
			let t = V.value, n = t.toLowerCase();
			I = 0, e.forEach((e, r) => {
				e.info = N.value[r], e.drawn = U(e) || e.header.toLowerCase().indexOf(n) > -1, I = e.drawn ? I + 1 : I, e.expanded = e.drawn && t.length > 2, e.drawn && t.length > 2 && W(r);
			}), F.value = I === 0;
		}
		function K(e) {
			e.expanded = !e.expanded;
		}
		function q(e, t) {
			if (typeof e == "string") return e;
			let n = t.split("-")[0];
			return e[t] ?? e[n] ?? e.en ?? Object.values(e)[0] ?? "";
		}
		function J(e) {
			let t = new M.Renderer();
			return t.image = (t) => {
				let n = t.href;
				return n.indexOf("http") === -1 && (n = `${e}images/` + n), `<img src="${n}" alt="${t.text}">`;
			}, t;
		}
		function Y(e, t) {
			let n = /^#\s(.*)\n{2}(?:.+|\n(?!\n{2,}))*/gm, r = [], i = [], a;
			for (; a = n.exec(e);) {
				let e = M(a[0].split("\n").splice(2).join("\n"), {
					renderer: t,
					async: !1
				});
				r.push({
					header: a[1],
					info: e,
					drawn: !0,
					expanded: !1
				}), i.push(e);
			}
			w.value = r, N.value = i, V.value.length ? G(w.value) : F.value = !1;
		}
		async function X(e) {
			let t = ++H, n = p.value.slice(-1) === "/" ? p.value : `${p.value}/`, r = J(n), i = await j.get(`${n}${e}.md`);
			t === H && Y([i.data.replace(/* @__PURE__ */ RegExp("\r", "g"), ""), b.value.map((t) => q(t.markdown, e)).filter((e) => e.trim().length > 0).join("\n\n").replace(/* @__PURE__ */ RegExp("\r", "g"), "")].filter(Boolean).join("\n\n"), r);
		}
		return m(() => {
			P.value.push(T([
				() => r.language,
				p,
				b
			], ([e]) => {
				X(e);
			}, {
				immediate: !0,
				deep: !0
			}));
		}), h(() => {
			P.value.forEach((e) => e());
		}), (t, r) => {
			let i = y("panel-screen");
			return g(), a(i, { panel: e.panel }, {
				header: E(() => [l(x(S(d)("help.title")), 1)]),
				content: E(() => [
					c("div", R, [D(c("input", {
						type: "search",
						class: "rv-help-search-bar border-b w-full text-base py-8 outline-none focus:shadow-outline border-gray-600 h-full min-w-0",
						placeholder: S(d)("help.search"),
						"onUpdate:modelValue": r[0] ||= (e) => V.value = e,
						"aria-label": S(d)("help.search"),
						onInput: r[1] ||= (e) => G(w.value),
						onKeypress: r[2] ||= O(k(() => {}, ["prevent"]), ["enter"]),
						enterkeyhint: "done"
					}, null, 40, z), [[C, V.value]])]),
					F.value ? (g(), s("div", B, [c("p", null, x(S(d)("help.noResults")), 1)])) : o("", !0),
					(g(!0), s(n, null, v(w.value, (e, t) => (g(), a(L, {
						helpSection: e,
						key: t,
						onExpand: (t) => K(e)
					}, null, 8, ["helpSection", "onExpand"]))), 128))
				]),
				_: 1
			}, 8, ["panel"]);
		};
	}
});
//#endregion
export { V as default };
