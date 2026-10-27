import { B as e, L as t, V as n, W as r, s as i, z as a } from "./main-BToQJL7R.js";
import { t as o } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { t as s } from "./keyboard-B1sq5rh1.js";
import { Fragment as c, computed as l, createBlock as u, createCommentVNode as d, createElementBlock as f, createElementVNode as p, createVNode as m, defineComponent as h, getCurrentInstance as g, inject as _, nextTick as v, normalizeClass as y, onBeforeMount as b, onBeforeUnmount as x, onMounted as S, onUpdated as C, openBlock as w, ref as T, renderList as E, renderSlot as D, resolveComponent as O, resolveDirective as k, resolveDynamicComponent as A, toDisplayString as j, unref as M, vShow as N, watch as P, withCtx as F, withDirectives as I } from "vue";
import { useI18n as L } from "vue-i18n";
import { createPopper as R } from "@popperjs/core";
import z from "popper-max-size-modifier";
//#region src/fixtures/appbar/store/appbar-state.ts
var B = class {
	id;
	options;
	componentId;
	constructor(e) {
		let t = {
			options: {},
			...e
		};
		({id: this.id, options: this.options, componentId: this.componentId} = t);
	}
}, V = ["innerHTML"], H = /* @__PURE__ */ h({
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
		let { t } = L(), n = _("iApi"), r = e, i = l(() => n.panel.get(r.panelId)?.button), a = () => {
			r.minimize ? n.panel.toggleMinimize(r.panelId) : n.panel.toggle(r.panelId);
		};
		return (n, r) => {
			let o = O("appbar-button");
			return i.value ? (w(), u(o, {
				key: 0,
				onClickFunction: a,
				tooltip: M(t)(i.value.tooltip),
				"button-id": e.panelId
			}, {
				default: F(() => [p("div", {
					class: y(["default fill-current w-24 h-24 ml-8 sm:ml-20", { "ml-20": e.overflow }]),
					innerHTML: i.value.icon
				}, null, 10, V)]),
				_: 1
			}, 8, ["tooltip", "button-id"])) : d("", !0);
		};
	}
}), U = {}, W = { class: "border-b p-0 self-center w-2/3" };
function G(e, t) {
	return w(), f("span", W);
}
var K = /*#__PURE__*/ o(U, [["render", G], ["__scopeId", "data-v-5d32b715"]]), q = ["content", "aria-label"], J = /*#__PURE__*/ o(/* @__PURE__ */ h({
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
		let { t: r } = L(), i = _("iApi"), a = e, o = n;
		function s() {
			o("updateParent");
		}
		let c = T(!1), l = T(0), u = T(), d = T(), m = T();
		function h() {
			s(), v(() => {
				g(), c.value = !c.value;
			});
		}
		P(() => a.renderWatch, () => {
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
					t.styles.popper.height = `${r}px`, m?.value?.offsetHeight && (m.value.style.height = `${r}px`), t.styles.popper.overflowY = "auto", t.styles.popper.overflowX = "hidden";
				}
			};
			d.value && m.value && (l.value++, R(d.value, m.value, {
				placement: a.position || "right-end",
				modifiers: [
					{
						...z,
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
		return S(() => {
			window.addEventListener("click", (e) => {
				e.target instanceof HTMLElement && !u.value?.contains(e.target) && (c.value = !1);
			}, { capture: !0 });
		}), x(() => {
			window.removeEventListener("click", (e) => {
				e.target instanceof HTMLElement && !u.value?.contains(e.target) && (c.value = !1);
			}, { capture: !0 });
		}), t({ rerender: h }), (e, t) => {
			let n = k("focus-item"), i = k("tippy");
			return w(), f("div", {
				class: "appbar-item relative inset-x-0 w-full text-center",
				ref_key: "el",
				ref: u
			}, [I((w(), f("button", {
				type: "button",
				class: "text-gray-400 w-full h-48 focus:outline-none hover:text-white",
				onClick: t[0] ||= (e) => g(),
				content: M(r)("appbar.more"),
				"aria-label": M(r)("appbar.more"),
				ref_key: "dropdownTrigger",
				ref: d
			}, [...t[1] ||= [p("svg", {
				class: "fill-current w-24 h-24 m-auto",
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 24 24"
			}, [p("path", {
				d: "M0 0h24v24H0z",
				fill: "none"
			}), p("path", { d: "M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" })], -1)]], 8, q)), [[n], [i, { placement: "right-end" }]]), I(p("div", {
				id: "dropdown",
				class: "dropdown shadow-md border border-gray:200 absolute w-64 flex flex-col bg-white rounded",
				ref_key: "dropdown",
				ref: m
			}, [D(e.$slots, "default", {}, void 0, !0)], 512), [[N, c.value]])], 512);
		};
	}
}), [["__scopeId", "data-v-87bcc276"]]), Y = {
	key: 0,
	class: "number absolute top-1 right-2 text-white w-18 rounded-full"
}, X = /*#__PURE__*/ o(/* @__PURE__ */ h({
	__name: "appbar-button",
	setup(e) {
		let t = a(), { t: n } = L(), r = _("iApi"), i = l(() => t.notificationNumber), o = () => {
			r.panel.toggle("notifications");
		};
		return (e, t) => {
			let r = O("appbar-button", !0);
			return w(), u(r, {
				onClickFunction: o,
				tooltip: M(n)("notifications.title"),
				class: "notification-button",
				"button-id": "notificationsButton"
			}, {
				default: F(() => [t[0] ||= p("svg", {
					class: "fill-current w-24 h-24 mx-8 sm:mx-20",
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 24 24"
				}, [p("path", { d: "M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" })], -1), i.value && i.value > 0 ? (w(), f("span", Y, j(i.value), 1)) : d("", !0)]),
				_: 1
			}, 8, ["tooltip"]);
		};
	}
}), [["__scopeId", "data-v-9d3c6152"]]), Z = ["content"], Q = /* @__PURE__ */ h({
	__name: "appbar",
	setup(n) {
		let i = e(), a = r(), o = T(0), p = T(0), h = l(() => a.visible), _ = l(() => a.temporary), { t: D } = L(), O = T(!1), j = T({}), P = T(), R = () => {
			v(() => {
				g()?.proxy?.$forceUpdate();
			});
		}, z = () => {
			P.value._tippy.hide();
		}, B = (e) => {
			s(e, P.value) && P.value._tippy.show();
		}, V = () => {
			let e = P.value, t, n = [...e.children], r = n[n.length - 2].getBoundingClientRect().top;
			i.mobileView || (r = e.getBoundingClientRect().bottom - 38);
			let a = e.querySelector("#dropdown");
			for (let e = n.length - 4; e >= 0; e--) {
				let i = n[e].getBoundingClientRect().bottom;
				if (r && a && (i > r || O.value && i + 56 > r)) n[e].classList.forEach((e) => {
					e.includes("identifier") && (t = e.slice(11));
				}), t && (j.value[t] = !0, t.includes("divider") || o.value++, p.value++), O.value ||= !0;
				else if (i !== 0) break;
			}
			let s = e.querySelector("#more"), c = s.getBoundingClientRect().bottom;
			if (t = void 0, O.value && r && s && a && c !== 0 && (c <= r - 56 || a.childElementCount == 1 && c <= r)) {
				let e = a.childElementCount, n = 0;
				for (; c <= r - 56 || e == 1;) {
					let r = a.children[n];
					if (r && (r.classList.forEach((e) => {
						e.includes("identifier") && (t = e.slice(11));
					}), t && (j.value[t] = !1, t.includes("divider") || o.value--), c += 48, --e, n += 1), e === 0) {
						O.value = !1;
						break;
					}
				}
			}
			Object.keys(j.value).forEach((t) => {
				e.querySelector(`.identifier-${t}`) || (delete j.value[t], t.includes("divider") || (o.value = Math.max(0, o.value - 1)), p.value++);
			});
		};
		return S(() => {
			P.value?.addEventListener("blur", z), P.value?.addEventListener("keyup", B);
		}), b(() => {
			let e = g();
			window.addEventListener("resize", () => e?.proxy?.$forceUpdate());
		}), x(() => {
			let e = g();
			window.removeEventListener("resize", () => e?.proxy?.$forceUpdate()), P.value?.removeEventListener("blur", z), P.value?.removeEventListener("keyup", B);
		}), C(async () => {
			setTimeout(() => V(), 0);
		}), (e, n) => {
			let r = k("focus-list"), i = k("tippy");
			return I((w(), f("div", {
				class: "absolute top-0 left-0 bottom-28 flex flex-col w-40 pointer-events-auto appbar z-50 sm:z-20 bg-black-75 sm:w-64 sm:bottom-38",
				content: M(D)("panels.controls.items"),
				ref_key: "el",
				ref: P
			}, [
				(w(!0), f(c, null, E(h.value, (e, t) => (w(), f(c, null, [(w(!0), f(c, null, E(e, (e, t) => (w(), f(c, null, [typeof e == "string" && j.value[`${e}-${t}`] !== !0 ? (w(), u(H, {
					key: `${e}-${t}-default`,
					panelId: e,
					class: y(["appbar-item h-48", `identifier-${e}-${t}`])
				}, null, 8, ["panelId", "class"])) : j.value[`${e.id}-${t}`] === !0 ? d("", !0) : (w(), u(A(e.componentId), {
					key: `${e.id}-${t}-custom`,
					options: e.options,
					class: y(["appbar-item h-48", `identifier-${e.id}-${t}`]),
					buttonId: e.id
				}, null, 8, [
					"options",
					"buttonId",
					"class"
				]))], 64))), 256)), j.value[`divider-${t}`] === !0 ? d("", !0) : (w(), u(K, {
					class: y(["appbar-item", `identifier-divider-${t}`]),
					key: `${e}-${t}-default`
				}, null, 8, ["class"]))], 64))), 256)),
				(w(!0), f(c, null, E(_.value?.filter((e) => j.value[`${e}-temp`] !== !0), (e) => (w(), u(H, {
					panelId: e,
					minimize: !0,
					key: `${e}-temp`,
					class: y([`identifier-${e}-temp`, "appbar-item h-48"])
				}, null, 8, ["panelId", "class"]))), 128)),
				I(m(J, {
					id: "more",
					numItems: o.value,
					renderWatch: p.value,
					onUpdateParent: R
				}, {
					default: F(() => [(w(!0), f(c, null, E(h.value, (e, t) => (w(), f(c, { key: t }, [(w(!0), f(c, null, E(e, (e, t) => (w(), f(c, null, [typeof e == "string" && j.value[`${e}-${t}`] ? (w(), u(H, {
						key: `${e}-${t}-default`,
						panelId: e,
						class: y(["text-black hover:bg-gray my-4 h-36", `identifier-${e}-${t}`]),
						overflow: ""
					}, null, 8, ["panelId", "class"])) : j.value[`${e.id}-${t}`] ? (w(), u(A(e.componentId), {
						key: `${e.id}-${t}-custom`,
						options: e.options,
						buttonId: e.id,
						class: y(["appbar-item h-48", `identifier-${e.id}-${t}`])
					}, null, 8, [
						"options",
						"buttonId",
						"class"
					])) : d("", !0)], 64))), 256)), j.value[`divider-${t}`] ? (w(), u(K, {
						key: 0,
						class: y(["border-black my-4", `identifier-divider-${t}`])
					}, null, 8, ["class"])) : d("", !0)], 64))), 128)), (w(!0), f(c, null, E(_.value?.filter((e) => j.value[`${e}-temp`]), (e) => (w(), u(H, {
						panelId: e,
						minimize: !0,
						key: `${e}-temp`,
						class: y([`identifier-${e}-temp`, "text-black hover:bg-gray my-4 h-36"]),
						overflow: ""
					}, null, 8, ["panelId", "class"]))), 128))]),
					_: 1
				}, 8, ["numItems", "renderWatch"]), [[N, O.value]]),
				m(X, { class: "appbar-item bottom-48 h-48 sm:display-none" }),
				m(t, {
					class: "absolute bottom-0 h-40 sm:display-none w-full text-center",
					position: "right-start"
				})
			], 8, Z)), [[r], [i, {
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
}), $ = class extends i {
	get config() {
		return super.config;
	}
	_parseConfig(e) {
		if (!e) return;
		let t = r(this.$vApp.$pinia), n;
		n = Array.isArray(e.items[0]) ? e.items : [e.items];
		let i = [];
		n.forEach((e) => {
			i.push(e.map((e) => typeof e == "string" ? e : new B(e)));
		}), t.items = i.flat().reduce((e, t) => (e[t instanceof B ? t.id : t] = t, e), {}), t.order = i.map((e) => e.map((e) => e instanceof B ? e.id : e)), this._validateItems();
	}
	_validateItems() {
		let e = r(this.$vApp.$pinia);
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
		let { destroy: e, el: t } = this.mount(Q, { app: this.$element }), i = this.$vApp.$el.getElementsByClassName("inner-shell")[0];
		i.insertBefore(t.childNodes[0], i.querySelector(".panel-stack")), this._parseConfig(this.config);
		let a = this.$vApp.$watch(() => this.config, (e) => this._parseConfig(e)), o = [];
		o.push(this.$iApi.event.on(n.COMPONENT, () => {
			this._parseConfig(this.config);
		})), this.removed = () => {
			let t = r(this.$vApp.$pinia);
			a(), o.forEach((e) => this.$iApi.event.off(e));
			let n = { ...t.items }, i = [...t.temporary];
			Object.keys(n).forEach((e) => t.removeButton(e)), i.forEach((e) => t.removeButton(e)), e(), t.$reset();
		};
	}
};
//#endregion
export { te as default };
