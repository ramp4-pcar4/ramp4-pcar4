import { V as e, ct as t, h as n, m as r, st as i } from "./main-BgfQyEh5.js";
import { t as a } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { t as o } from "./form-input-KvmWYYlx.js";
import { Transition as s, computed as c, createBlock as l, createCommentVNode as u, createElementBlock as d, createElementVNode as f, createTextVNode as ee, createVNode as p, defineComponent as m, inject as te, nextTick as ne, normalizeClass as h, onBeforeUnmount as re, onErrorCaptured as ie, onMounted as ae, openBlock as g, provide as _, reactive as v, ref as y, renderSlot as b, resolveComponent as oe, resolveDirective as se, toDisplayString as x, unref as S, useId as ce, useTemplateRef as C, vShow as w, watch as T, withCtx as E, withDirectives as D, withModifiers as le } from "vue";
import { useI18n as ue } from "vue-i18n";
import { ColorPicker as de } from "vue-accessible-color-picker";
//#region src/fixtures/wizard/form-footer.vue?vue&type=script&setup=true&lang.ts
var O = { class: "flex justify-end mb-20" }, fe = ["disabled", "animation"], pe = { class: "button-text" }, k = /*#__PURE__*/ a(/* @__PURE__ */ m({
	__name: "form-footer",
	props: {
		animation: {
			type: Boolean,
			default: !1
		},
		disabled: {
			type: Boolean,
			default: !0
		}
	},
	setup(e) {
		let { t } = ue();
		return (n, r) => (g(), d("div", O, [f("button", {
			class: "hover:bg-gray-200 text-gray-600 font-bold py-8 px-16 m-2",
			type: "button",
			onClick: r[0] ||= (e) => n.$emit("cancel")
		}, x(S(t)("wizard.step.cancel")), 1), f("button", {
			class: h(["button bg-blue-700 hover:bg-blue-700 text-white font-bold py-8 px-16 m-2 disabled:bg-gray-200 disabled:cursor-default disabled:text-gray-400", { "button--loading": e.animation && e.disabled }]),
			type: "button",
			disabled: e.disabled,
			animation: e.animation,
			onClick: r[1] ||= (e) => n.$emit("submit")
		}, [f("span", pe, x(S(t)("wizard.step.continue")), 1)], 10, fe)]));
	}
}), [["__scopeId", "data-v-4802f647"]]), A = { class: "step relative flex flex-col px-12" }, j = { class: "stepper-header flex pb-24" }, M = {
	key: 1,
	class: "flex-none stepper-check w-24 h-24 text-gray-400"
}, N = { class: "flex flex-col overflow-hidden" }, P = { class: "pl-12 flex items-center text-md" }, F = { class: "pl-12 text-xs transition-opacity duration-1000 ease-out" }, me = /*#__PURE__*/ a(/* @__PURE__ */ m({
	__name: "stepper-item",
	props: {
		title: {
			type: String,
			required: !0
		},
		summary: { type: String }
	},
	emits: ["focusPanel", "focusFirstElement"],
	setup(e, { emit: t }) {
		let n = te("stepper"), r = y(), i = t, a = y(-1), o = (e) => {
			l() || (e.stopPropagation(), i("focusPanel"), i("focusFirstElement"));
		};
		ae(() => {
			a.value = n.numSteps++, r.value?.addEventListener("focusout", o);
		}), re(() => {
			r.value?.removeEventListener("focusout", o);
		});
		let c = () => n.activeIndex > a.value, l = () => n.activeIndex === a.value;
		return (t, n) => {
			let i = se("truncate");
			return g(), d("div", A, [f("div", j, [c() ? (g(), d("div", M, [...n[0] ||= [f("svg", {
				xmlns: "http://www.w3.org/2000/svg",
				height: "100%",
				width: "100%",
				preserveAspectRatio: "xMidYMid meet",
				viewBox: "0 0 24 24",
				focusable: "false"
			}, [f("g", { id: "check_circle" }, [f("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" })])], -1)]])) : (g(), d("div", {
				key: 0,
				class: h(["w-24 h-24 bg-gray-500 rounded-full flex justify-center items-center text-white text-xs font-semibold", { "bg-blue-500": l }])
			}, x(a.value + 1), 3)), f("div", N, [f("div", P, x(e.title), 1), D((g(), d("div", F, [ee(x(e.summary), 1)])), [[w, !l()], [i]])])]), p(s, {
				name: "step",
				mode: "out-in"
			}, {
				default: E(() => [D(f("div", {
					class: "pl-36",
					ref_key: "stepItem",
					ref: r
				}, [b(t.$slots, "default", {}, void 0, !0)], 512), [[w, l()]])]),
				_: 3
			})]);
		};
	}
}), [["__scopeId", "data-v-53b5c8d8"]]), I = { class: "py-12 h-auto stepper" }, he = /* @__PURE__ */ m({
	__name: "stepper",
	props: { activeStep: {
		type: Number,
		default: 0
	} },
	setup(e) {
		let t = e, n = c(() => t.activeStep), r = v([]), i = v({
			activeIndex: t.activeStep,
			numSteps: 0
		});
		return _("stepper", i), r.push(T(n, () => {
			i.activeIndex = t.activeStep;
		})), re(() => {
			r.forEach((e) => e());
		}), (e, t) => (g(), d("div", I, [b(e.$slots, "default")]));
	}
}), ge = { class: "block text-center mb-10" }, _e = {
	key: 0,
	class: "inline-flex items-center mb-10"
}, ve = { class: "px-5 text-xs" }, ye = {
	key: 0,
	class: "text-red-900 text-xs"
}, be = { key: 6 }, xe = ["for"], Se = {
	key: 7,
	class: "text-base font-bold"
}, Ce = { class: "sr-only" }, we = { class: "sr-only" }, L = /*#__PURE__*/ a(/* @__PURE__ */ m({
	__name: "screen",
	props: { panel: {
		type: Object,
		required: !0
	} },
	setup(a) {
		let s = r(), { t: m } = ue(), _ = te("iApi"), b = y(), se = ce(), w = y([]), T = c(() => s.layerSource), D = c(() => s.currStep), O = y(null), fe = y(), pe = y(0), A = y(!1), j = y(), M = C("stepOneStart"), N = C("stepTwoStart"), P = C("stepThreeStart"), F = y(!1), I = y(!1), L = y(!1), R = y(!1), z = y(!1), B = y(!1), V = y(!0), Te = y(""), H = y(""), U = y([]), W = v([
			{
				value: t.FEATURE,
				label: m("wizard.layerType.esriFeature")
			},
			{
				value: t.MAPIMAGE,
				label: m("wizard.layerType.esriMapImage")
			},
			{
				value: t.TILE,
				label: m("wizard.layerType.esriTile")
			},
			{
				value: t.IMAGERY,
				label: m("wizard.layerType.esriImagery")
			},
			{
				value: t.WMS,
				label: m("wizard.layerType.ogcWms")
			},
			{
				value: t.WFS,
				label: m("wizard.layerType.ogcWfs")
			}
		]), G = v([
			{
				value: t.GEOJSON,
				label: m("wizard.fileType.geojson")
			},
			{
				value: t.SHAPEFILE,
				label: m("wizard.fileType.shapefile")
			},
			{
				value: t.CSV,
				label: m("wizard.fileType.csv")
			}
		]), K = c({
			get() {
				return s.url;
			},
			set(e) {
				s.url = e;
			}
		}), q = c({
			get() {
				return s.fileData;
			},
			set(e) {
				s.fileData = e;
			}
		}), J = c({
			get() {
				return s.typeSelection;
			},
			set(e) {
				s.typeSelection = e;
			}
		}), Y = c({
			get() {
				return s.layerInfo;
			},
			set(e) {
				s.layerInfo = e;
			}
		}), Ee = c(() => {
			let e = _.geo.proxy !== "";
			switch (J.value) {
				case t.FEATURE:
				case t.MAPIMAGE:
				case t.TILE:
				case t.IMAGERY: return !e;
				case t.WFS: return !0;
				case t.WMS: return !e;
				case t.GEOJSON:
				case t.SHAPEFILE:
				case t.CSV: return !!($() && !q.value);
				default: return !1;
			}
		}), De = c(() => {
			let e = [m("wizard.format.type.error.failure")];
			return Ee.value && e.push(m("wizard.format.warn.cors")), e.push(m("wizard.format.warn.vpn")), e.join(". ") + ".";
		});
		ie(() => ((D.value === n.FORMAT || D.value === n.CONFIGURE) && (F.value = !0, s.goToStep(n.FORMAT)), !1)), ae(() => {
			w.value.push(_.event.on(e.LAYER_LAYERSTATECHANGE, (e) => {
				e.layer.userAdded && (Te.value = e.layer.name, B.value = e.state !== i.LOADING && e.state !== i.NEW, V.value = B.value && e.state === i.LOADED);
			})), D.value === n.CONFIGURE && (Y.value?.configOptions.includes("colour") && Ge(), R.value = !Y.value?.configOptions.includes("sublayers") && !!Y.value?.config.name);
		}), re(() => {
			w.value.forEach((e) => _.event.off(e));
		});
		let Oe = () => {
			j.value.el.dispatchEvent(new MouseEvent("click"));
		}, X = () => {
			switch (D.value) {
				case 0:
					Z(M);
					break;
				case 1:
					Z(N);
					break;
				case 2:
					Z(P);
					break;
			}
		};
		function Z(e) {
			(e.value?.$el.querySelectorAll("input, select")[0])?.focus();
		}
		let ke = async (e) => {
			let t = new FileReader();
			t.onload = (n) => {
				q.value = t.result, K.value = e.name, Q(n);
			}, t.readAsArrayBuffer(e);
		}, Q = (e) => {
			e?.preventDefault(), J.value = T.value.guessFormatFromURL(K.value), s.goToStep(n.FORMAT);
		}, Ae = async (e) => {
			e?.preventDefault(), O.value = new AbortController(), A.value = !0, F.value = !1, I.value = !1, R.value = !1, z.value = !0, s.goToStep(n.CONFIGURE), H.value = $() ? G.find((e) => e.value === J.value)?.label : W.find((e) => e.value === J.value)?.label;
			try {
				Y.value = $() ? await T.value.fetchFileInfo(K.value, J.value, q.value) : await T.value.fetchServiceInfo(K.value, J.value, s.nested, O.value.signal), $() && q.value && (Y.value.config.url = "");
			} catch (e) {
				e.name === "AbortError" ? z.value = !1 : I.value = !0, A.value = !1;
				return;
			}
			let r = J.value === t.FEATURE && !(Y.value && Y.value.fields);
			if (!Y.value || r) {
				F.value = !0, Y.value = {
					config: {
						id: "Placeholder",
						layerType: t.UNKNOWN,
						url: ""
					},
					configOptions: []
				}, A.value = !1;
				return;
			}
			Ge(), R.value = !(Y.value.configOptions.includes("sublayers") || !Y.value.config.name), A.value = !1, z.value = !1;
		}, je = async (t) => {
			t?.preventDefault();
			let r = Object.assign(Y.value.config, t);
			U.value = [], H.value = "";
			let i = _.geo.layer.createLayer(r);
			_.geo.map.addLayer(i).catch(() => {}), i.userAdded = !0, _.event.emit(e.USER_LAYER_ADDED, i), L.value = !1, s.goToStep(n.UPLOAD);
		}, Me = () => Y.value?.fields.map((e) => ({
			value: e.name,
			label: e.alias || e.name
		})), Ne = (e) => Y.value?.latLonFields[e].map((e) => ({
			value: e,
			label: e
		})), $ = () => q.value || K.value.match(/\.(zip|csv|json|geojson)$/), Pe = (e) => {
			ke(e), K.value = "";
		}, Fe = (e, t) => {
			K.value = e.trim(), L.value = t;
		}, Ie = (e) => {
			J.value = e, F.value = !1;
		}, Le = (e) => {
			Y.value.config.name = e.trim();
			let t = Y.value?.config.sublayers;
			R.value = !!(t ? e && t.length > 0 : e.trim());
		}, Re = (e) => {
			Y.value.config.sublayers = e, R.value = !!(e.length > 0 && Y.value?.config.name);
		}, ze = (e) => {
			if (s.nested = e, U.value = [], pe.value += 1, J.value === t.MAPIMAGE) {
				Y.value.layers = T.value.createLayerHierarchy(Y.value.layersRaw, s.nested);
				let e = new Set((Y.value?.config?.sublayers ?? []).map((e) => e.index));
				s.nested ? Be(Y, e) : He(Y, e);
			} else if (J.value === t.WMS) {
				Y.value.layers = T.value.mapWmsLayerList(Y.value.layersRaw, s.nested);
				let e = new Set((Y.value?.config?.sublayers ?? []).map((e) => e.id));
				s.nested ? Ve(Y, e) : Ue(Y, e);
			}
			Re(We(U.value));
		}, Be = (e, t) => {
			let n = /* @__PURE__ */ new Map();
			for (let t of e.value.layersRaw) if (t.parentLayerId !== -1) {
				let e = n.get(t.parentLayerId) || [];
				e.push(t.id), n.set(t.parentLayerId, e);
			}
			let r = (e) => {
				let i = n.get(e);
				return i ? i.every((e) => n.has(e) ? r(e) : t.has(e)) : !1;
			}, i = (e) => {
				if (r(e)) U.value.push(e);
				else {
					let r = n.get(e);
					if (r) for (let e of r) t.has(e) && U.value.push(e);
				}
			};
			for (let e of n.keys()) i(e);
			for (let r of e.value.layersRaw) r.parentLayerId === -1 && !n.has(r.id) && t.has(r.id) && U.value.push(r.id);
			U.value = Array.from(new Set(U.value));
		}, Ve = (e, t) => {
			let n = (e) => !e.layers || e.layers.length === 0 ? t.has(e.name) : e.layers.every((e) => n(e)), r = (e) => {
				n(e) ? U.value.push(e.name) : e.layers && e.layers.forEach(r);
			}, i = e.value.layersRaw[0];
			i && i.layers && i.layers.forEach((e) => r(e)), U.value = Array.from(new Set(U.value));
		}, He = (e, t) => {
			let n = (r) => {
				let i = e.value.layersRaw.filter((e) => e.parentLayerId === r);
				if (i.length > 0) for (let e of i) t.has(e.id) ? U.value.push(e.id) : n(e.id);
				else U.value.push(r);
			};
			for (let r of e.value.layersRaw) t.has(r.id) && n(r.id);
			U.value = Array.from(new Set(U.value));
		}, Ue = (e, t) => {
			let n = (e) => {
				e.layers && e.layers.length > 0 ? e.layers.forEach(n) : U.value.push(e.name);
			}, r = e.value.layersRaw[0];
			for (let e of t) {
				let t = r.layers.find((t) => t.name === e);
				t && t.layers && t.layers.length > 0 ? n(t) : t && U.value.push(t.name);
			}
			U.value = Array.from(new Set(U.value));
		}, We = (e) => e.map((e) => {
			switch (J.value) {
				case t.MAPIMAGE: return {
					index: e,
					state: {
						opacity: 1,
						visibility: !0
					}
				};
				case t.WMS: {
					let t = e.lastIndexOf("#");
					return { id: e.substring(0, t) };
				}
				default: return { id: e };
			}
		}), Ge = () => {
			fe.value = Y.value?.config.colour ?? "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
		}, Ke = (e) => {
			Y.value.config.colour = e.colors.hex.substring(0, 7), ne(() => {
				b.value.querySelector(".vacp-copy-button").style.backgroundColor = Y.value?.config.colour;
			});
		}, qe = () => {
			L.value = !1, s.goToStep(0), Z(M);
		}, Je = () => {
			A.value = !1, F.value = !1, I.value = !1, L.value = !!K.value, z.value = !1, s.goToStep(0), H.value = "";
		}, Ye = () => {
			U.value = [], R.value = !1, O.value?.abort(), s.goToStep(1);
		};
		return (e, t) => {
			let n = oe("panel-screen");
			return g(), l(n, {
				panel: a.panel,
				ref_key: "thePanel",
				ref: j
			}, {
				header: E(() => [ee(x(S(m)("wizard.title")), 1)]),
				content: E(() => [p(he, { activeStep: D.value }, {
					default: E(() => [
						p(me, {
							title: S(m)("wizard.upload.title"),
							summary: K.value,
							onFocusPanel: Oe,
							onFocusFirstElement: X
						}, {
							default: E(() => [f("form", {
								name: "upload",
								onSubmit: Q,
								onClick: t[1] ||= (e) => B.value = !1
							}, [
								p(o, {
									type: "file",
									name: "file",
									label: S(m)("wizard.upload.file.label"),
									help: S(m)("wizard.upload.file.help"),
									onUpload: Pe,
									"aria-label": S(m)("wizard.upload.file.label")
								}, null, 8, [
									"label",
									"help",
									"aria-label"
								]),
								f("span", ge, x(S(m)("wizard.upload.or")), 1),
								p(o, {
									type: "url",
									name: "url",
									modelValue: K.value,
									"onUpdate:modelValue": t[0] ||= (e) => K.value = e,
									label: S(m)("wizard.upload.url.label"),
									onLink: Fe,
									validation: !0,
									"validation-messages": {
										required: S(m)("wizard.upload.url.error.required"),
										invalid: S(m)("wizard.upload.url.error.url")
									},
									"aria-label": S(m)("wizard.upload.url.label"),
									ref_key: "stepOneStart",
									ref: M
								}, null, 8, [
									"modelValue",
									"label",
									"validation-messages",
									"aria-label"
								]),
								p(k, {
									onSubmit: Q,
									onCancel: qe,
									disabled: !L.value
								}, null, 8, ["disabled"])
							], 32)]),
							_: 1
						}, 8, ["title", "summary"]),
						p(me, {
							title: S(m)("wizard.format.title"),
							summary: H.value,
							onFocusFirstElement: X
						}, {
							default: E(() => [f("form", {
								name: "format",
								onSubmit: Ae
							}, [
								Ee.value ? (g(), d("div", _e, [t[11] ||= f("svg", {
									class: "inline-block fill-current w-16 h-16",
									xmlns: "http://www.w3.org/2000/svg",
									viewBox: "0 0 24 24"
								}, [f("path", {
									d: "M0 0h24v24H0z",
									fill: "none"
								}), f("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" })], -1), f("span", ve, x(S(m)("wizard.format.info.cors")), 1)])) : u("", !0),
								p(o, {
									type: "select",
									name: "type",
									modelValue: J.value,
									"onUpdate:modelValue": t[2] ||= (e) => J.value = e,
									onSelect: Ie,
									size: $() ? G.length : W.length,
									label: $() ? S(m)("wizard.format.type.file") : S(m)("wizard.format.type.service"),
									options: $() ? G : W,
									formatError: F.value,
									failureError: I.value,
									validation: z.value,
									"validation-messages": {
										required: S(m)("wizard.format.type.error.required"),
										invalid: S(m)("wizard.format.type.error.invalid"),
										failure: De.value
									},
									onKeydown: t[3] ||= le(() => {}, ["stop"]),
									"aria-label": S(m)("wizard.format.type.service"),
									ref_key: "stepTwoStart",
									ref: N
								}, null, 8, [
									"modelValue",
									"size",
									"label",
									"options",
									"formatError",
									"failureError",
									"validation",
									"validation-messages",
									"aria-label"
								]),
								p(k, {
									onSubmit: Ae,
									onCancel: Je,
									animation: !0,
									disabled: A.value
								}, null, 8, ["disabled"])
							], 32)]),
							_: 1
						}, 8, ["title", "summary"]),
						p(me, {
							title: S(m)("wizard.configure.title"),
							onFocusFirstElement: X
						}, {
							default: E(() => [f("form", {
								name: "configure",
								onSubmit: je,
								ref_key: "formElement",
								ref: b
							}, [
								z.value && (F.value || I.value) ? (g(), d("div", ye, x(F.value ? S(m)("wizard.format.type.error.invalid") : De.value), 1)) : u("", !0),
								Y.value?.configOptions.includes("name") ? (g(), l(o, {
									key: 1,
									type: "text",
									name: "name",
									modelValue: Y.value.config.name,
									"onUpdate:modelValue": t[4] ||= (e) => Y.value.config.name = e,
									onLink: Le,
									label: S(m)("wizard.configure.name.label"),
									"aria-label": S(m)("wizard.configure.name.label"),
									validation: !0,
									"validation-messages": { required: S(m)("wizard.configure.name.error.required") },
									ref_key: "stepThreeStart",
									ref: P,
									onFocusElement: X,
									activeStep: D.value,
									step: 2
								}, null, 8, [
									"modelValue",
									"label",
									"aria-label",
									"validation-messages",
									"activeStep"
								])) : u("", !0),
								Y.value?.configOptions.includes("nameField") ? (g(), l(o, {
									key: 2,
									type: "select",
									name: "nameField",
									modelValue: Y.value.config.nameField,
									"onUpdate:modelValue": t[5] ||= (e) => Y.value.config.nameField = e,
									label: S(m)("wizard.configure.nameField.label"),
									"aria-label": S(m)("wizard.configure.nameField.label"),
									defaultOption: !0,
									options: Me()
								}, null, 8, [
									"modelValue",
									"label",
									"aria-label",
									"options"
								])) : u("", !0),
								Y.value?.configOptions.includes("maptipField") ? (g(), l(o, {
									key: 3,
									type: "select",
									name: "maptipField",
									modelValue: Y.value.config.maptipField,
									"onUpdate:modelValue": t[6] ||= (e) => Y.value.config.maptipField = e,
									label: S(m)("wizard.configure.maptipField.label"),
									"aria-label": S(m)("wizard.configure.maptipField.label"),
									options: Me()
								}, null, 8, [
									"modelValue",
									"label",
									"aria-label",
									"options"
								])) : u("", !0),
								Y.value?.configOptions.includes("latField") ? (g(), l(o, {
									key: 4,
									type: "select",
									name: "latField",
									modelValue: Y.value.config.latField,
									"onUpdate:modelValue": t[7] ||= (e) => Y.value.config.latField = e,
									defaultOption: !0,
									label: S(m)("wizard.configure.latField.label"),
									"aria-label": S(m)("wizard.configure.latField.label"),
									options: Ne("lat")
								}, null, 8, [
									"modelValue",
									"label",
									"aria-label",
									"options"
								])) : u("", !0),
								Y.value?.configOptions.includes("longField") ? (g(), l(o, {
									key: 5,
									type: "select",
									name: "longField",
									modelValue: Y.value.config.longField,
									"onUpdate:modelValue": t[8] ||= (e) => Y.value.config.longField = e,
									defaultOption: !0,
									label: S(m)("wizard.configure.longField.label"),
									"aria-label": S(m)("wizard.configure.longField.label"),
									options: Ne("lon")
								}, null, 8, [
									"modelValue",
									"label",
									"aria-label",
									"options"
								])) : u("", !0),
								Y.value?.configOptions.includes("sublayers") ? (g(), d("div", be, [p(o, {
									type: "checkbox",
									name: "nested",
									onNested: ze,
									label: S(m)("wizard.configure.sublayers.nested"),
									"aria-label": S(m)("wizard.configure.sublayers.nested")
								}, null, 8, ["label", "aria-label"]), (g(), l(o, {
									type: "select",
									key: pe.value,
									name: "sublayers",
									modelValue: Y.value.config.sublayers,
									"onUpdate:modelValue": t[9] ||= (e) => Y.value.config.sublayers = e,
									onSelect: Re,
									label: S(m)("wizard.configure.sublayers.label"),
									"aria-label": S(m)("wizard.configure.sublayers.label"),
									options: Y.value.layers,
									selectedValues: U.value,
									sublayerOptions: We,
									multiple: !0,
									searchable: !0,
									validation: !0,
									"validation-messages": { required: S(m)("wizard.configure.sublayers.error.required") },
									onKeydown: t[10] ||= le(() => {}, ["stop"])
								}, null, 8, [
									"modelValue",
									"label",
									"aria-label",
									"options",
									"selectedValues",
									"validation-messages"
								]))])) : u("", !0),
								f("label", {
									class: "sr-only",
									for: `${S(se)}-color-hex`
								}, x(S(m)("wizard.configure.colour.hex")), 9, xe),
								Y.value?.configOptions.includes("colour") ? (g(), d("label", Se, x(S(m)("wizard.configure.colour.label")), 1)) : u("", !0),
								Y.value?.configOptions.includes("colour") ? (g(), l(S(de), {
									key: 8,
									"alpha-channel": "hide",
									"visible-formats": ["hex"],
									"default-format": "hex",
									id: S(se) + "-hue-slider",
									color: fe.value,
									onColorChange: Ke
								}, {
									"hue-range-input-label": E(() => [f("span", Ce, x(S(m)("wizard.configure.colour.hue")), 1)]),
									"copy-button": E(() => [f("span", we, x(S(m)("wizard.configure.colour.copy")), 1), t[12] ||= f("svg", {
										"aria-hidden": "true",
										xmlns: "http://www.w3.org/2000/svg",
										width: "15",
										height: "15",
										viewBox: "0 0 15 15"
									}, [f("path", {
										d: "M5 0v2H1v13h12v-3h-1v2H2V5h10v3h1V2H9V0zm1 1h2v2h3v1H3V3h3z",
										fill: "currentColor"
									}), f("path", {
										d: "M10 7v2h5v2h-5v2l-3-3zM3 6h5v1H3zm0 2h3v1H3zm0 2h3v1H3zm0 2h5v1H3z",
										fill: "currentColor"
									})], -1)]),
									_: 1
								}, 8, ["id", "color"])) : u("", !0),
								p(k, {
									onSubmit: je,
									onCancel: Ye,
									animation: A.value,
									disabled: !R.value
								}, null, 8, ["animation", "disabled"])
							], 544)]),
							_: 1
						}, 8, ["title"])
					]),
					_: 1
				}, 8, ["activeStep"]), B.value ? (g(), d("div", {
					key: 0,
					class: h(["p-3 border-solid border-2", V.value ? "bg-green-100 !border-green-900" : "bg-red-100 !border-red-900"])
				}, x(Te.value) + " " + x(S(m)(`wizard.upload.${V.value ? "success" : "fail"}`)), 3)) : u("", !0)]),
				_: 1
			}, 8, ["panel"]);
		};
	}
}), [["__scopeId", "data-v-c7ad6fde"]]);
//#endregion
export { L as default };
