import { t as e } from "./_plugin-vue_export-helper-B52Kst-M.js";
import { t } from "./store-BSbISna5.js";
import { Fragment as n, Transition as r, computed as i, createBlock as a, createCommentVNode as o, createElementBlock as s, createElementVNode as c, createTextVNode as l, createVNode as u, defineComponent as d, inject as f, isRef as p, normalizeClass as m, onBeforeMount as h, onBeforeUnmount as g, openBlock as _, ref as v, renderList as y, resolveComponent as b, resolveDirective as x, toDisplayString as S, unref as C, vModelText as w, vShow as T, watch as E, withCtx as D, withDirectives as O, withKeys as k, withModifiers as A } from "vue";
import { useI18n as j } from "vue-i18n";
import M from "redaxios";
import { marked as N } from "marked";
//#region src/fixtures/help/section.vue?vue&type=script&setup=true&lang.ts
var P = { key: 0 }, F = ["content"], I = { class: "text-lg text-left flex-grow" }, L = ["innerHTML"], R = /* @__PURE__ */ e(/* @__PURE__ */ d({
	__name: "section",
	props: { helpSection: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let { t } = j();
		return (n, i) => {
			let a = x("tippy");
			return e.helpSection.drawn ? (_(), s("div", P, [c("div", null, [O((_(), s("button", {
				type: "button",
				class: "help-section-header flex items-center py-15 px-25 hover:bg-gray-200 cursor-pointer select-none w-full",
				onClick: i[0] ||= (e) => n.$emit("expand"),
				content: C(t)(e.helpSection.expanded ? "help.section.collapse" : "help.section.expand")
			}, [c("span", I, S(e.helpSection.header), 1), c("div", { class: m(["dropdown-icon", { "transform -rotate-180": e.helpSection.expanded }]) }, [...i[1] ||= [c("svg", {
				xmlns: "http://www.w3.org/2000/svg",
				height: "24",
				viewBox: "0 0 24 24",
				width: "24"
			}, [c("path", {
				d: "M0 0h24v24H0V0z",
				fill: "none"
			}), c("path", { d: "M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" })], -1)]], 2)], 8, F)), [[a, {
				placement: "top-end",
				hideOnClick: !1
			}]]), u(r, {
				name: "help-item",
				mode: "out-in"
			}, {
				default: D(() => [O(c("div", {
					innerHTML: e.helpSection.info,
					class: "ramp-markdown section-body px-20 pt-5 ml-10 overflow-hidden"
				}, null, 8, L), [[T, e.helpSection.expanded]])]),
				_: 1
			})])])) : o("", !0);
		};
	}
}), [["__scopeId", "data-v-7dc61532"]]), z = { class: "h-26 mb-8 mx-8" }, B = ["placeholder", "aria-label"], V = { key: 0 }, H = /* @__PURE__ */ d({
	__name: "screen",
	props: { panel: {
		type: Object,
		required: !0
	} },
	setup(e) {
		let r = f("iApi"), u = t(), { t: d } = j(), m = i(() => u.location), x = v([]), T = v([]), P = v([]), F = v(!1), I, L;
		function H(e, t) {
			let n = t.info.split(/(<[^>]*>)/);
			for (let [t, r] of n.entries()) if (t % 2 == 0 && r.toLowerCase().indexOf(e.toLowerCase()) > -1) return !0;
			return !1;
		}
		function U(e, t) {
			let n = T.value[t].split(/(<[^>]*>)/), r = "";
			for (let [t, i] of n.entries()) t % 2 == 0 ? r += i.replace(new RegExp(e, "gi"), (e) => `<mark>${e}</mark>`) : r += i;
			x.value[t].info = r;
		}
		function W(e, t) {
			I = 0, t.forEach((t, n) => {
				t.info = T.value[n], t.drawn = H(e, t) || t.header.toLowerCase().indexOf(e.toLowerCase()) > -1, I = t.drawn ? I + 1 : I, t.expanded = t.drawn && e.length > 2, t.drawn && e.length > 2 && U(e, n);
			}), F.value = I === 0;
		}
		function G(e) {
			e.expanded = !e.expanded;
		}
		return h(() => {
			P.value.push(E(() => r.language, (e, t) => {
				if (e === t) return;
				let n = new N.Renderer(), r = m.value.slice(-1) === "/" ? m.value : `${m.value}/`;
				n.image = (e) => {
					let t = e.href;
					return t.indexOf("http") === -1 && (t = `${r}images/` + t), `<img src="${t}" alt="${e.text}">`;
				}, M.get(`${r}${e}.md`).then((e) => {
					let t = /^#\s(.*)\n{2}(?:.+|\n(?!\n{2,}))*/gm, r = e.data.replace(RegExp("\r", "g"), "");
					x.value = [];
					let i;
					for (; i = t.exec(r);) x.value.push({
						header: i[1],
						info: N(i[0].split("\n").splice(2).join("\n"), { renderer: n }),
						drawn: !0,
						expanded: !1
					}), T.value.push(N(i[0].split("\n").splice(2).join("\n"), { renderer: n }));
				});
			}, { immediate: !0 }));
		}), g(() => {
			P.value.forEach((e) => e());
		}), (t, r) => {
			let i = b("panel-screen");
			return _(), a(i, { panel: e.panel }, {
				header: D(() => [l(S(C(d)("help.title")), 1)]),
				content: D(() => [
					c("div", z, [O(c("input", {
						type: "search",
						class: "rv-help-search-bar border-b w-full text-base py-8 outline-none focus:shadow-outline border-gray-600 h-full min-w-0",
						placeholder: C(d)("help.search"),
						"onUpdate:modelValue": r[0] ||= (e) => p(L) ? L.value = e : L = e,
						"aria-label": C(d)("help.search"),
						onInput: r[1] ||= (e) => W(C(L), x.value),
						onKeypress: r[2] ||= k(A(() => {}, ["prevent"]), ["enter"]),
						enterkeyhint: "done"
					}, null, 40, B), [[w, C(L)]])]),
					F.value ? (_(), s("div", V, [c("p", null, S(C(d)("help.noResults")), 1)])) : o("", !0),
					(_(!0), s(n, null, y(x.value, (e, t) => (_(), a(R, {
						helpSection: e,
						key: t,
						onExpand: (t) => G(e)
					}, null, 8, ["helpSection", "onExpand"]))), 128))
				]),
				_: 1
			}, 8, ["panel"]);
		};
	}
});
//#endregion
export { H as default };
