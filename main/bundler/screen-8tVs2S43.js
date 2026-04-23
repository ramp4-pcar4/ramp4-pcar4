import { B as e, ft as t } from "./main-Bz1ia27O.js";
import { t as n } from "./_plugin-vue_export-helper-B52Kst-M.js";
import { t as r } from "./toggle-switch-control-CyM9ioaa.js";
import { createBlock as i, createElementBlock as a, createElementVNode as o, createTextVNode as s, createVNode as c, defineComponent as l, inject as u, markRaw as d, onBeforeUnmount as f, onMounted as p, openBlock as m, reactive as h, ref as g, resolveComponent as _, resolveDynamicComponent as v, toDisplayString as y, unref as b, watch as x, withCtx as S, withKeys as C, withModifiers as w } from "vue";
import { useI18n as T } from "vue-i18n";
import E from "vue-slider-component";
import "vue-slider-component/theme/default.css";
//#region src/fixtures/settings/templates/slider-control.vue?vue&type=script&setup=true&lang.ts
var D = { class: "rv-label" }, O = ["innerHTML"], k = { class: "flex flex-row pl-30" }, A = /* @__PURE__ */ n(/* @__PURE__ */ l({
	__name: "slider-control",
	props: {
		name: String,
		icon: String,
		config: {
			type: Object,
			required: !0
		}
	},
	setup(e) {
		let t = e, n = g(t.config.value), r = g(!!t.config.disabled), i = h([]);
		return i.push(x(() => t.config, (e) => {
			n.value = e.value, r.value = !!e.disabled;
		}, { deep: !0 })), f(() => {
			i.forEach((e) => e());
		}), (t, i) => (m(), a("div", null, [o("div", D, [o("div", {
			innerHTML: e.icon,
			class: "p-8 pl-0"
		}, null, 8, O), s(" " + y(e.name), 1)]), o("div", k, [c(b(E), {
			class: "mr-16",
			onChange: e.config.onChange,
			modelValue: n.value,
			"onUpdate:modelValue": i[0] ||= (e) => n.value = e,
			disabled: r.value,
			width: 250,
			min: 0,
			max: 100
		}, null, 8, [
			"onChange",
			"modelValue",
			"disabled"
		]), s(" " + y(e.config.value) + "% ", 1)])]));
	}
}), [["__scopeId", "data-v-73fcc175"]]), j = { class: "rv-label text-sm pt-10" }, M = { class: "flex flex-row" }, N = ["value", "disabled"], P = { class: "text-xs pt-10 text-gray-600 mb-20" }, F = /* @__PURE__ */ n(/* @__PURE__ */ l({
	__name: "input-control",
	props: {
		config: {
			type: Object,
			required: !0
		},
		name: {
			type: String,
			required: !0
		},
		icon: {
			type: String,
			required: !0
		}
	},
	setup(e) {
		let { t } = T(), n = e, r = g(!!n.config.disabled), i = h([]);
		return i.push(x(() => n.config, (e) => {
			r.value = !!e.disabled;
		}, { deep: !0 })), f(() => {
			i.forEach((e) => e());
		}), (n, i) => (m(), a("div", null, [
			o("div", j, y(e.name), 1),
			o("div", M, [o("input", {
				onKeypress: i[0] ||= C(w(() => {}, ["prevent"]), ["enter"]),
				class: "rv-input text-md w-full",
				type: "number",
				value: e.config.value,
				disabled: r.value,
				min: "0",
				max: "100"
			}, null, 40, N)]),
			o("div", P, y(b(t)("settings.label.refreshOff")), 1)
		]));
	}
}), [["__scopeId", "data-v-df0e15c6"]]), I = {
	visibility: "<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"20\" viewBox=\"0 0 24 24\" width=\"20\"><path d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z\"/></svg>",
	opacity: "<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"20\" viewBox=\"0 0 24 24\" width=\"20\"><path d=\"M24 0H0v24h24V0zm0 0H0v24h24V0zM0 24h24V0H0v24z\" fill=\"none\"/><path d=\"M17.66 8L12 2.35 6.34 8C4.78 9.56 4 11.64 4 13.64s.78 4.11 2.34 5.67 3.61 2.35 5.66 2.35 4.1-.79 5.66-2.35S20 15.64 20 13.64 19.22 9.56 17.66 8zM6 14c.01-2 .62-3.27 1.76-4.4L12 5.27l4.24 4.38C17.38 10.77 17.99 12 18 14H6z\"/></svg>",
	box: "<svg xmlns=\"http://www.w3.org/2000/svg\" fit=\"\" height=\"20\" width=\"20\" preserveAspectRatio=\"xMidYMid meet\" viewBox=\"0 0 24 24\" focusable=\"false\"><g id=\"cube-outline\"><path d=\"M 21,16.5C 21,16.8812 20.7867,17.2125 20.473,17.3813L 12.5664,21.8243C 12.4054,21.9351 12.2103,22 12,22C 11.7897,22 11.5946,21.9351 11.4336,21.8243L 3.52716,17.3814C 3.21335,17.2127 3,16.8812 3,16.5L 3,7.5C 3,7.11876 3.21334,6.78735 3.52716,6.61864L 11.4336,2.17575C 11.5946,2.0649 11.7897,2.00001 12,2.00001C 12.2103,2.00001 12.4053,2.06489 12.5664,2.17574L 20.473,6.61872C 20.7867,6.78746 21,7.11883 21,7.5L 21,16.5 Z M 12.0009,4.15093L 6.04124,7.5L 12.0009,10.8491L 17.9591,7.5L 12.0009,4.15093 Z M 5,15.9149L 11,19.2866L 11,12.5806L 5,9.209L 5,15.9149 Z M 19,15.9149L 19,9.20901L 13,12.5806L 13,19.2875L 19,15.9149 Z \"></path></g></svg>",
	location: "<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"20\" viewBox=\"0 0 24 24\" width=\"20\"><path d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z\"/></svg>",
	refresh: "<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"20\" viewBox=\"0 0 24 24\" width=\"20\"><path d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z\"/></svg>"
}, L = /* @__PURE__ */ l({
	__name: "component",
	props: {
		type: {
			type: String,
			required: !0
		},
		config: {
			type: Object,
			required: !0
		},
		name: {
			type: String,
			required: !0
		},
		icon: {
			type: String,
			required: !0
		},
		ariaLabel: {
			type: String,
			required: !0
		}
	},
	setup(e) {
		let t = h(I), n = h({
			slider: d(A),
			toggle: d(r),
			input: d(F)
		});
		return (r, a) => (m(), i(v(n[e.type]), {
			icon: t[e.icon],
			name: e.name,
			config: e.config,
			"aria-label": e.ariaLabel
		}, null, 8, [
			"icon",
			"name",
			"config",
			"aria-label"
		]));
	}
}), R = { key: 0 }, z = { class: "p-8 font-bold break-words mb-8 bg-gray-100" }, B = { class: "flex flex-col justify-center" }, V = { class: "rv-subheader" }, H = { class: "flex flex-col justify-center" }, U = { class: "rv-subheader" }, W = {
	key: 1,
	class: "p-5"
}, G = /* @__PURE__ */ n(/* @__PURE__ */ l({
	__name: "screen",
	props: {
		panel: {
			type: Object,
			required: !0
		},
		layer: {
			type: Object,
			required: !0
		}
	},
	setup(n) {
		let { t: r } = T(), l = u("iApi"), d = n, v = g(""), C = g(d.layer.uid), w = g(d.layer.visibility), E = g(d.layer.opacity * 100), D = g(d.layer.identify), O = g(!1), k = h([]), A = h([]);
		O.value = d.layer !== void 0 && !d.layer.isRemoved, A.push(x(() => d.layer.uid, (e, t) => {
			e !== t && F();
		})), p(() => {
			F(), k.push(l.event.on(e.LAYER_VISIBILITYCHANGE, (e) => {
				C.value === e.layer.uid && (w.value = e.visibility);
			})), k.push(l.event.on(e.LAYER_OPACITYCHANGE, (e) => {
				C.value === e.layer.uid && (E.value = Math.round(e.opacity * 100));
			})), k.push(l.event.on(e.LAYER_RELOAD_END, (e) => {
				e.loadPromise().then(() => {
					C.value === e.uid && F();
				});
			})), k.push(l.event.on(e.LAYER_REMOVE, (e) => {
				C.value === e.uid && d.panel.close();
			}));
		}), f(() => {
			k.forEach((e) => l.event.off(e)), A.forEach((e) => e());
		});
		let j = (e) => {
			let t = l.fixture.get("settings");
			if (!t || Object.keys(t).length === 0) return console.warn("Settings panel cannot check for layer control because it could not find settings fixture api"), !1;
			let n = t?.getLayerFixtureConfig(d.layer.id);
			return n && (n.controls || n.disabledControls) ? l.geo.shared.controlAvailable(e, n) : d.layer.controlAvailable(e);
		}, M = (e) => {
			d.layer.visibility = e, w.value = e;
		}, N = (e) => {
			d.layer.opacity = e / 100, E.value = e;
		}, P = (e) => {
			d.layer.identify = e, D.value = e;
		}, F = () => {
			O.value = d.layer !== void 0 && !d.layer.isRemoved;
			let e = d.layer.uid;
			d.layer.loadPromise().then(() => {
				e === d.layer.uid && (w.value = d.layer.visibility, E.value = Math.round(d.layer.opacity * 100), D.value = d.layer.identify, v.value = d.layer.name);
			});
		};
		return (e, l) => {
			let u = _("panel-screen");
			return m(), i(u, { panel: n.panel }, {
				header: S(() => [s(y(b(r)("settings.title")), 1)]),
				content: S(() => [O.value ? (m(), a("div", R, [
					o("div", z, y(v.value), 1),
					o("div", B, [
						o("span", V, y(b(r)("settings.label.display")), 1),
						l[0] ||= o("div", { class: "rv-settings-divider" }, null, -1),
						c(L, {
							class: "rv-subsection",
							type: "toggle",
							icon: "visibility",
							onToggled: M,
							name: b(r)("settings.label.visibility"),
							config: {
								value: w.value,
								disabled: !j(b(t).Visibility)
							},
							ariaLabel: b(r)("settings.label.visibility")
						}, null, 8, [
							"name",
							"config",
							"ariaLabel"
						]),
						l[1] ||= o("div", { class: "rv-settings-divider" }, null, -1),
						c(L, {
							class: "rv-subsection",
							type: "slider",
							name: b(r)("settings.label.opacity"),
							icon: "opacity",
							config: {
								onChange: N,
								value: E.value,
								disabled: !j(b(t).Opacity)
							},
							ariaLabel: b(r)("settings.label.opacity")
						}, null, 8, [
							"name",
							"config",
							"ariaLabel"
						]),
						l[2] ||= o("div", { class: "rv-settings-divider" }, null, -1)
					]),
					o("div", H, [
						o("span", U, y(b(r)("settings.label.data")), 1),
						l[3] ||= o("div", { class: "rv-settings-divider" }, null, -1),
						c(L, {
							class: "rv-subsection",
							type: "toggle",
							name: b(r)("settings.label.identify"),
							icon: "location",
							onToggled: P,
							config: {
								value: D.value,
								disabled: !(j(b(t).Identify) && d.layer.supportsIdentify)
							},
							ariaLabel: b(r)("settings.label.identify")
						}, null, 8, [
							"name",
							"config",
							"ariaLabel"
						]),
						l[4] ||= o("div", { class: "rv-settings-divider" }, null, -1)
					])
				])) : (m(), a("div", W, [o("span", null, y(b(r)("settings.label.no.layer")), 1)]))]),
				_: 1
			}, 8, ["panel"]);
		};
	}
}), [["__scopeId", "data-v-29542e32"]]);
//#endregion
export { G as default };
