import { V as e, ot as t } from "./main-BgfQyEh5.js";
import { t as n } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { t as r } from "./toggle-switch-control-BnkO6LC-.js";
import { t as i } from "./icons-B51WIEuY.js";
import { createBlock as a, createElementBlock as o, createElementVNode as s, createTextVNode as c, createVNode as l, defineComponent as u, inject as d, markRaw as f, onBeforeUnmount as p, onMounted as m, openBlock as h, reactive as g, ref as _, resolveComponent as v, resolveDynamicComponent as y, toDisplayString as b, unref as x, watch as S, withCtx as C, withKeys as w, withModifiers as T } from "vue";
import { useI18n as E } from "vue-i18n";
import D from "vue-slider-component";
import "vue-slider-component/theme/default.css";
//#region src/fixtures/settings/templates/slider-control.vue?vue&type=script&setup=true&lang.ts
var O = { class: "rv-label" }, k = ["innerHTML"], A = { class: "flex flex-row pl-30" }, j = /*#__PURE__*/ n(/* @__PURE__ */ u({
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
		let t = e, n = _(t.config.value), r = _(!!t.config.disabled), i = g([]);
		return i.push(S(() => t.config, (e) => {
			n.value = e.value, r.value = !!e.disabled;
		}, { deep: !0 })), p(() => {
			i.forEach((e) => e());
		}), (t, i) => (h(), o("div", null, [s("div", O, [s("div", {
			innerHTML: e.icon,
			class: "p-8 pl-0"
		}, null, 8, k), c(" " + b(e.name), 1)]), s("div", A, [l(x(D), {
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
		]), c(" " + b(e.config.value) + "% ", 1)])]));
	}
}), [["__scopeId", "data-v-73fcc175"]]), M = { class: "rv-label text-sm pt-10" }, N = { class: "flex flex-row" }, P = ["value", "disabled"], F = { class: "text-xs pt-10 text-gray-600 mb-20" }, I = /*#__PURE__*/ n(/* @__PURE__ */ u({
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
		let { t } = E(), n = e, r = _(!!n.config.disabled), i = g([]);
		return i.push(S(() => n.config, (e) => {
			r.value = !!e.disabled;
		}, { deep: !0 })), p(() => {
			i.forEach((e) => e());
		}), (n, i) => (h(), o("div", null, [
			s("div", M, b(e.name), 1),
			s("div", N, [s("input", {
				onKeypress: i[0] ||= w(T(() => {}, ["prevent"]), ["enter"]),
				class: "rv-input text-md w-full",
				type: "number",
				value: e.config.value,
				disabled: r.value,
				min: "0",
				max: "100"
			}, null, 40, P)]),
			s("div", F, b(x(t)("settings.label.refreshOff")), 1)
		]));
	}
}), [["__scopeId", "data-v-df0e15c6"]]), L = /* @__PURE__ */ u({
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
		let t = g(i), n = g({
			slider: f(j),
			toggle: f(r),
			input: f(I)
		});
		return (r, i) => (h(), a(y(n[e.type]), {
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
}, G = /*#__PURE__*/ n(/* @__PURE__ */ u({
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
		let { t: r } = E(), i = d("iApi"), u = n, f = _(""), y = _(u.layer.uid), w = _(u.layer.visibility), T = _(u.layer.opacity * 100), D = _(u.layer.identify), O = _(!1), k = g([]), A = g([]);
		O.value = u.layer !== void 0 && !u.layer.isRemoved, A.push(S(() => u.layer.uid, (e, t) => {
			e !== t && F();
		})), m(() => {
			F(), k.push(i.event.on(e.LAYER_VISIBILITYCHANGE, (e) => {
				y.value === e.layer.uid && (w.value = e.visibility);
			})), k.push(i.event.on(e.LAYER_OPACITYCHANGE, (e) => {
				y.value === e.layer.uid && (T.value = Math.round(e.opacity * 100));
			})), k.push(i.event.on(e.LAYER_RELOAD_END, (e) => {
				e.loadPromise().then(() => {
					y.value === e.uid && F();
				});
			})), k.push(i.event.on(e.LAYER_REMOVE, (e) => {
				y.value === e.uid && u.panel.close();
			}));
		}), p(() => {
			k.forEach((e) => i.event.off(e)), A.forEach((e) => e());
		});
		let j = (e) => {
			let t = i.fixture.get("settings");
			if (!t || Object.keys(t).length === 0) return console.warn("Settings panel cannot check for layer control because it could not find settings fixture api"), !1;
			let n = t?.getLayerFixtureConfig(u.layer.id);
			return n && (n.controls || n.disabledControls) ? i.geo.shared.controlAvailable(e, n) : u.layer.controlAvailable(e);
		}, M = (e) => {
			u.layer.visibility = e, w.value = e;
		}, N = (e) => {
			u.layer.opacity = e / 100, T.value = e;
		}, P = (e) => {
			u.layer.identify = e, D.value = e;
		}, F = () => {
			O.value = u.layer !== void 0 && !u.layer.isRemoved;
			let e = u.layer.uid;
			u.layer.loadPromise().then(() => {
				e === u.layer.uid && (w.value = u.layer.visibility, T.value = Math.round(u.layer.opacity * 100), D.value = u.layer.identify, f.value = u.layer.name);
			});
		};
		return (e, i) => {
			let d = v("panel-screen");
			return h(), a(d, { panel: n.panel }, {
				header: C(() => [c(b(x(r)("settings.title")), 1)]),
				content: C(() => [O.value ? (h(), o("div", R, [
					s("div", z, b(f.value), 1),
					s("div", B, [
						s("span", V, b(x(r)("settings.label.display")), 1),
						i[0] ||= s("div", { class: "rv-settings-divider" }, null, -1),
						l(L, {
							class: "rv-subsection",
							type: "toggle",
							icon: "visibility",
							onToggled: M,
							name: x(r)("settings.label.visibility"),
							config: {
								value: w.value,
								disabled: !j(x(t).Visibility)
							},
							ariaLabel: x(r)("settings.label.visibility")
						}, null, 8, [
							"name",
							"config",
							"ariaLabel"
						]),
						i[1] ||= s("div", { class: "rv-settings-divider" }, null, -1),
						l(L, {
							class: "rv-subsection",
							type: "slider",
							name: x(r)("settings.label.opacity"),
							icon: "opacity",
							config: {
								onChange: N,
								value: T.value,
								disabled: !j(x(t).Opacity)
							},
							ariaLabel: x(r)("settings.label.opacity")
						}, null, 8, [
							"name",
							"config",
							"ariaLabel"
						]),
						i[2] ||= s("div", { class: "rv-settings-divider" }, null, -1)
					]),
					s("div", H, [
						s("span", U, b(x(r)("settings.label.data")), 1),
						i[3] ||= s("div", { class: "rv-settings-divider" }, null, -1),
						l(L, {
							class: "rv-subsection",
							type: "toggle",
							name: x(r)("settings.label.identify"),
							icon: "location",
							onToggled: P,
							config: {
								value: D.value,
								disabled: !(j(x(t).Identify) && u.layer.supportsIdentify)
							},
							ariaLabel: x(r)("settings.label.identify")
						}, null, 8, [
							"name",
							"config",
							"ariaLabel"
						]),
						i[4] ||= s("div", { class: "rv-settings-divider" }, null, -1)
					])
				])) : (h(), o("div", W, [s("span", null, b(x(r)("settings.label.no.layer")), 1)]))]),
				_: 1
			}, 8, ["panel"]);
		};
	}
}), [["__scopeId", "data-v-29542e32"]]);
//#endregion
export { G as default };
