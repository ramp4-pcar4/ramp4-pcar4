import { B as e, G as t, K as n, L as r, V as i, s as a, z as o } from "./main-BgfQyEh5.js";
import { t as s } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { t as c } from "./keyboard-B1sq5rh1.js";
import { Fragment as l, computed as u, createBlock as d, createCommentVNode as f, createElementBlock as p, createElementVNode as m, createVNode as h, defineComponent as g, getCurrentInstance as _, inject as v, nextTick as y, normalizeClass as b, onBeforeMount as x, onBeforeUnmount as S, onMounted as C, onUpdated as w, openBlock as T, ref as E, renderList as D, renderSlot as O, resolveComponent as k, resolveDirective as A, resolveDynamicComponent as j, toDisplayString as M, unref as N, vShow as P, watch as F, withCtx as I, withDirectives as L } from "vue";
import { useI18n as R } from "vue-i18n";
import { createPopper as z } from "@popperjs/core";
import B from "popper-max-size-modifier";
//#region src/fixtures/appbar/default-button.vue?vue&type=script&setup=true&lang.ts
var V = ["innerHTML"], H = /* @__PURE__ */ g({
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
		overflow: { type: Boolean }
	},
	setup(e) {
		let { t } = R(), n = v("iApi"), r = e, i = u(() => n.panel.get(r.panelId)?.button), a = () => {
			r.minimize ? n.panel.toggleMinimize(r.panelId) : n.panel.toggle(r.panelId);
		};
		return (n, r) => {
			let o = k("appbar-button");
			return i.value ? (T(), d(o, {
				key: 0,
				onClickFunction: a,
				tooltip: N(t)(i.value.tooltip),
				"button-id": e.panelId
			}, {
				default: I(() => [m("div", {
					class: b(["default fill-current w-24 h-24 ml-8 sm:ml-20", { "ml-20": e.overflow }]),
					innerHTML: i.value.icon
				}, null, 10, V)]),
				_: 1
			}, 8, ["tooltip", "button-id"])) : f("", !0);
		};
	}
}), U = {}, W = { class: "border-b p-0 self-center w-2/3" };
function G(e, t) {
	return T(), p("span", W);
}
var K = /*#__PURE__*/ s(U, [["render", G], ["__scopeId", "data-v-5d32b715"]]), q = ["content", "aria-label"], J = /*#__PURE__*/ s(/* @__PURE__ */ g({
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
	setup(e, { expose: t, emit: n }) {
		let { t: r } = R(), i = v("iApi"), a = e, o = n;
		function s() {
			o("updateParent");
		}
		let c = E(!1), l = E(0), u = E(), d = E(), f = E();
		function h() {
			s(), y(() => {
				g(), c.value = !c.value;
			});
		}
		F(() => a.renderWatch, () => {
			h();
		});
		let g = () => {
			c.value = !c.value;
			let e = i.$vApp.$el.querySelector(".inner-shell"), t = {
				name: "applyMaxSize",
				enabled: !0,
				phase: "beforeWrite",
				requires: ["maxSize"],
				fn({ state: t }) {
					let { width: n } = t.modifiersData.maxSize;
					t.styles.popper = {
						...t.styles.popper,
						maxWidth: `${n}px`,
						maxHeight: `${e.offsetHeight - 45}px`
					};
					let r = Math.min(a.numItems <= 0 ? 0 : 55 + 44 * (a.numItems - 1), e.offsetHeight - 45);
					t.styles.popper.height = `${r}px`, f?.value?.offsetHeight && (f.value.style.height = `${r}px`), t.styles.popper.overflowY = "auto", t.styles.popper.overflowX = "hidden";
				}
			};
			d.value && f.value && (l.value++, z(d.value, f.value, {
				placement: a.position || "right-end",
				modifiers: [
					{
						...B,
						options: { boundary: e }
					},
					t,
					{
						name: "offset",
						options: { offset: [0, 5] }
					},
					{
						name: "preventOverflow",
						enabled: !0,
						options: { boundary: e }
					}
				],
				...a.popperOptions
			})), l.value === 1 && h();
		};
		return C(() => {
			window.addEventListener("click", (e) => {
				e.target instanceof HTMLElement && !u.value?.contains(e.target) && (c.value = !1);
			}, { capture: !0 });
		}), S(() => {
			window.removeEventListener("click", (e) => {
				e.target instanceof HTMLElement && !u.value?.contains(e.target) && (c.value = !1);
			}, { capture: !0 });
		}), t({ rerender: h }), (e, t) => {
			let n = A("focus-item"), i = A("tippy");
			return T(), p("div", {
				class: "appbar-item relative inset-x-0 w-full text-center",
				ref_key: "el",
				ref: u
			}, [L((T(), p("button", {
				type: "button",
				class: "text-gray-400 w-full h-48 focus:outline-none hover:text-white",
				onClick: t[0] ||= (e) => g(),
				content: N(r)("appbar.more"),
				"aria-label": N(r)("appbar.more"),
				ref_key: "dropdownTrigger",
				ref: d
			}, [...t[1] ||= [m("svg", {
				class: "fill-current w-24 h-24 m-auto",
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 24 24"
			}, [m("path", {
				d: "M0 0h24v24H0z",
				fill: "none"
			}), m("path", { d: "M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" })], -1)]], 8, q)), [[n], [i, { placement: "right-end" }]]), L(m("div", {
				id: "dropdown",
				class: "dropdown shadow-md border border-gray:200 absolute w-64 flex flex-col bg-white rounded",
				ref_key: "dropdown",
				ref: f
			}, [O(e.$slots, "default", {}, void 0, !0)], 512), [[P, c.value]])], 512);
		};
	}
}), [["__scopeId", "data-v-87bcc276"]]), Y = {
	key: 0,
	class: "number absolute top-1 right-2 text-white w-18 rounded-full"
}, X = /*#__PURE__*/ s(/* @__PURE__ */ g({
	__name: "appbar-button",
	setup(e) {
		let t = o(), { t: n } = R(), r = v("iApi"), i = u(() => t.notificationNumber), a = () => {
			r.panel.toggle("notifications");
		};
		return (e, t) => {
			let r = k("appbar-button", !0);
			return T(), d(r, {
				onClickFunction: a,
				tooltip: N(n)("notifications.title"),
				class: "notification-button",
				"button-id": "notificationsButton"
			}, {
				default: I(() => [t[0] ||= m("svg", {
					class: "fill-current w-24 h-24 mx-8 sm:mx-20",
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 24 24"
				}, [m("path", { d: "M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" })], -1), i.value && i.value > 0 ? (T(), p("span", Y, M(i.value), 1)) : f("", !0)]),
				_: 1
			}, 8, ["tooltip"]);
		};
	}
}), [["__scopeId", "data-v-9d3c6152"]]), Z = ["content"], Q = /* @__PURE__ */ g({
	__name: "appbar",
	setup(n) {
		let i = e(), a = t(), o = E(0), s = E(0), m = u(() => a.visible), g = u(() => a.temporary), { t: v } = R(), O = E(!1), k = E({}), M = E(), F = () => {
			y(() => {
				_()?.proxy?.$forceUpdate();
			});
		}, z = () => {
			M.value._tippy.hide();
		}, B = (e) => {
			c(e, M.value) && M.value._tippy.show();
		}, V = () => {
			let e = M.value, t, n = [...e.children], r = n[n.length - 2].getBoundingClientRect().top;
			i.mobileView || (r = e.getBoundingClientRect().bottom - 38);
			let a = e.querySelector("#dropdown");
			for (let e = n.length - 4; e >= 0; e--) {
				let i = n[e].getBoundingClientRect().bottom;
				if (r && a && (i > r || O.value && i + 56 > r)) n[e].classList.forEach((e) => {
					e.includes("identifier") && (t = e.slice(11));
				}), t && (k.value[t] = !0, t.includes("divider") || o.value++, s.value++), O.value ||= !0;
				else if (i !== 0) break;
			}
			let c = e.querySelector("#more"), l = c.getBoundingClientRect().bottom;
			if (t = void 0, O.value && r && c && a && l !== 0 && (l <= r - 56 || a.childElementCount == 1 && l <= r)) {
				let e = a.childElementCount, n = 0;
				for (; l <= r - 56 || e == 1;) {
					let r = a.children[n];
					if (r && (r.classList.forEach((e) => {
						e.includes("identifier") && (t = e.slice(11));
					}), t && (k.value[t] = !1, t.includes("divider") || o.value--), l += 48, --e, n += 1), e === 0) {
						O.value = !1;
						break;
					}
				}
			}
			Object.keys(k.value).forEach((t) => {
				e.querySelector(`.identifier-${t}`) || (delete k.value[t], t.includes("divider") || (o.value = Math.max(0, o.value - 1)), s.value++);
			});
		};
		return C(() => {
			M.value?.addEventListener("blur", z), M.value?.addEventListener("keyup", B);
		}), x(() => {
			let e = _();
			window.addEventListener("resize", () => e?.proxy?.$forceUpdate());
		}), S(() => {
			let e = _();
			window.removeEventListener("resize", () => e?.proxy?.$forceUpdate()), M.value?.removeEventListener("blur", z), M.value?.removeEventListener("keyup", B);
		}), w(async () => {
			setTimeout(() => V(), 0);
		}), (e, t) => {
			let n = A("focus-list"), i = A("tippy");
			return L((T(), p("div", {
				class: "absolute top-0 left-0 bottom-28 flex flex-col w-40 pointer-events-auto appbar z-50 sm:z-20 bg-black-75 sm:w-64 sm:bottom-38",
				content: N(v)("panels.controls.items"),
				ref_key: "el",
				ref: M
			}, [
				(T(!0), p(l, null, D(m.value, (e, t) => (T(), p(l, null, [(T(!0), p(l, null, D(e, (e, t) => (T(), p(l, null, [typeof e == "string" && k.value[`${e}-${t}`] !== !0 ? (T(), d(H, {
					key: `${e}-${t}-default`,
					panelId: e,
					class: b(["appbar-item h-48", `identifier-${e}-${t}`])
				}, null, 8, ["panelId", "class"])) : k.value[`${e.id}-${t}`] === !0 ? f("", !0) : (T(), d(j(e.componentId), {
					key: `${e.id}-${t}-custom`,
					options: e.options,
					class: b(["appbar-item h-48", `identifier-${e.id}-${t}`]),
					buttonId: e.id
				}, null, 8, [
					"options",
					"buttonId",
					"class"
				]))], 64))), 256)), k.value[`divider-${t}`] === !0 ? f("", !0) : (T(), d(K, {
					class: b(["appbar-item", `identifier-divider-${t}`]),
					key: `${e}-${t}-default`
				}, null, 8, ["class"]))], 64))), 256)),
				(T(!0), p(l, null, D(g.value?.filter((e) => k.value[`${e}-temp`] !== !0), (e) => (T(), d(H, {
					panelId: e,
					minimize: !0,
					key: `${e}-temp`,
					class: b([`identifier-${e}-temp`, "appbar-item h-48"])
				}, null, 8, ["panelId", "class"]))), 128)),
				L(h(J, {
					id: "more",
					numItems: o.value,
					renderWatch: s.value,
					onUpdateParent: F
				}, {
					default: I(() => [(T(!0), p(l, null, D(m.value, (e, t) => (T(), p(l, { key: t }, [(T(!0), p(l, null, D(e, (e, t) => (T(), p(l, null, [typeof e == "string" && k.value[`${e}-${t}`] ? (T(), d(H, {
						key: `${e}-${t}-default`,
						panelId: e,
						class: b(["text-black hover:bg-gray my-4 h-36", `identifier-${e}-${t}`]),
						overflow: ""
					}, null, 8, ["panelId", "class"])) : k.value[`${e.id}-${t}`] ? (T(), d(j(e.componentId), {
						key: `${e.id}-${t}-custom`,
						options: e.options,
						buttonId: e.id,
						class: b(["appbar-item h-48", `identifier-${e.id}-${t}`])
					}, null, 8, [
						"options",
						"buttonId",
						"class"
					])) : f("", !0)], 64))), 256)), k.value[`divider-${t}`] ? (T(), d(K, {
						key: 0,
						class: b(["border-black my-4", `identifier-divider-${t}`])
					}, null, 8, ["class"])) : f("", !0)], 64))), 128)), (T(!0), p(l, null, D(g.value?.filter((e) => k.value[`${e}-temp`]), (e) => (T(), d(H, {
						panelId: e,
						minimize: !0,
						key: `${e}-temp`,
						class: b([`identifier-${e}-temp`, "text-black hover:bg-gray my-4 h-36"]),
						overflow: ""
					}, null, 8, ["panelId", "class"]))), 128))]),
					_: 1
				}, 8, ["numItems", "renderWatch"]), [[P, O.value]]),
				h(X, { class: "appbar-item bottom-48 h-48 sm:display-none" }),
				h(r, {
					class: "absolute bottom-0 h-40 sm:display-none w-full text-center",
					position: "right-start"
				})
			], 8, Z)), [[n], [i, {
				trigger: "manual",
				touch: !1,
				placement: "top-end",
				popperOptions: {
					placement: "top",
					modifiers: [{
						name: "preventOverflow",
						options: { altAxis: !0 }
					}, {
						name: "flip",
						options: { fallbackPlacements: ["top"] }
					}]
				}
			}]]);
		};
	}
}), $ = class extends a {
	get config() {
		return super.config;
	}
	_parseConfig(e) {
		if (!e) return;
		let r = t(this.$vApp.$pinia), i;
		i = Array.isArray(e.items[0]) ? e.items : [e.items];
		let a = [];
		i.forEach((e) => {
			a.push(e.map((e) => typeof e == "string" ? e : new n(e)));
		}), r.items = a.flat().reduce((e, t) => (e[t instanceof n ? t.id : t] = t, e), {}), r.order = a.map((e) => e.map((e) => e instanceof n ? e.id : e)), this._validateItems();
	}
	_validateItems() {
		let e = t(this.$vApp.$pinia);
		e.order.flat().forEach((t) => {
			typeof e.items[t] != "string" && [t].some((n) => {
				this.$iApi.fixture.exists(n) && !e.items[t] && (e.items[t].componentId = `${n}-appbar-button`);
			});
		});
	}
}, ee = {
	en: {
		"appbar.navigation": "Navigation",
		"appbar.more": "More",
		"navigation.export": "Export",
		"navigation.map.export": "Export Map"
	},
	fr: {
		"appbar.navigation": "Navigation",
		"appbar.more": "Plus",
		"navigation.export": "Exporter",
		"navigation.map.export": "Exporter la Carte"
	}
}, te = class extends $ {
	initialized() {}
	async added() {
		Object.entries(ee).forEach((e) => this.$iApi.$i18n.mergeLocaleMessage(...e));
		let { destroy: e, el: n } = this.mount(Q, { app: this.$element }), r = this.$vApp.$el.getElementsByClassName("inner-shell")[0];
		r.insertBefore(n.childNodes[0], r.querySelector(".panel-stack")), this._parseConfig(this.config);
		let a = this.$vApp.$watch(() => this.config, (e) => this._parseConfig(e)), o = [];
		o.push(this.$iApi.event.on(i.COMPONENT, () => {
			this._parseConfig(this.config);
		})), this.removed = () => {
			let n = t(this.$vApp.$pinia);
			a(), o.forEach((e) => this.$iApi.event.off(e));
			let r = { ...n.items }, i = [...n.temporary];
			Object.keys(r).forEach((e) => n.removeButton(e)), i.forEach((e) => n.removeButton(e)), e(), n.$reset();
		};
	}
};
//#endregion
export { te as default };
