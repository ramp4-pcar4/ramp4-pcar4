import { B as e, at as t, et as n, it as r, mt as i, nt as a, ot as o, rt as s, s as c, tt as l } from "./main-BtLSZphp.js";
import { t as u } from "./store-BBZtsAi6.js";
import { createElementBlock as d, defineComponent as f, inject as p, markRaw as m, onMounted as h, onUnmounted as g, openBlock as _, reactive as v, useTemplateRef as y, watch as b } from "vue";
import { useI18n as x } from "vue-i18n";
//#region \0rolldown_dynamic_import_helper.js
var S = (e, t, n) => {
	let r = t.lastIndexOf("?"), i = e[r === -1 || r < t.lastIndexOf("/") ? t : t.slice(0, r)];
	return i ? typeof i == "function" ? i() : Promise.resolve(i) : new Promise((e, r) => {
		(typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(r.bind(null, /* @__PURE__ */ Error("Unknown variable dynamic import: " + t + (t.split("/").length === n ? "" : ". Note that variables only represent file names one level deep."))));
	});
}, C = "RampDrawGraphicsLayer", w = /* @__PURE__ */ f({
	__name: "draw",
	setup(c) {
		let { t: f, availableLocales: m, locale: S } = x(), w = (e) => f(e ? `draw.${e}` : "draw.unknown"), T = p("iApi"), E = u(), D = (e) => {
			let t = m.length ? m : [S.value], n = {};
			for (let r of t) n[r] = f(e, {}, { locale: r });
			return n;
		}, O = null, k = y("sketchEl"), A = null, j = null, M = null, N = null, P = !1, F = null, I = [], L = v([]), R;
		async function z() {
			let e = T.keyboardNav;
			if (!e) {
				console.warn("Keyboard navigation fixture is not available; draw shortcuts are disabled.");
				return;
			}
			R &&= (e.unregister(R), void 0), R = e.register("D", {
				name: D("draw.keyboard.namespace"),
				activeHandler: () => {
					E.setActiveTool("");
				},
				deactiveHandler: () => {
					E.setActiveTool(null);
				},
				keys: [
					{
						key: "P",
						description: D("draw.keyboard.key.point"),
						handler: () => {
							E.setActiveTool("point");
						}
					},
					{
						key: "L",
						description: D("draw.keyboard.key.polyline"),
						handler: () => {
							E.setActiveTool("polyline");
						}
					},
					{
						key: "G",
						description: D("draw.keyboard.key.polygon"),
						handler: () => {
							E.setActiveTool("polygon");
						}
					},
					{
						key: "C",
						description: D("draw.keyboard.key.circle"),
						handler: () => {
							E.setActiveTool("circle");
						}
					},
					{
						key: "R",
						description: D("draw.keyboard.key.rectangle"),
						handler: () => {
							E.setActiveTool("rectangle");
						}
					},
					{
						key: "E",
						description: D("draw.keyboard.key.edit"),
						handler: () => {
							E.setActiveTool("edit");
						}
					}
				]
			});
		}
		let B = (e) => {
			if (N &&= (j?.remove(N), null), !e) return;
			let i;
			switch (e.geometry?.type) {
				case "point":
				case "multipoint":
					i = new o({
						color: [
							255,
							255,
							0,
							.8
						],
						size: 16,
						outline: {
							color: [
								255,
								165,
								0,
								1
							],
							width: 3
						}
					});
					break;
				case "polyline":
					i = new t({
						color: [
							255,
							255,
							0,
							.8
						],
						width: 6
					});
					break;
				default: i = new r({
					color: [
						255,
						255,
						0,
						.3
					],
					outline: {
						color: [
							255,
							165,
							0,
							1
						],
						width: 3
					}
				});
			}
			N = new n({
				geometry: e.geometry,
				symbol: i
			}), j?.add(N);
		};
		b(() => E.selectedGraphicId, (e, t) => {
			if (!(!O || !j)) {
				if (!e) O.cancel(), B();
				else if (e !== t) {
					let t = j.graphics.toArray().find((t) => t.attributes && t.attributes.id === e);
					t && (O.triggerUpdate([t]), B(t));
				}
			}
		});
		let V = async () => {
			if (!j || !O || E.activeTool !== "edit") return;
			await T.geo.map.viewPromise;
			let e = T.geo.map.esriView, t = {
				x: e.width / 2,
				y: e.height / 2
			}, n = {
				x: t.x,
				y: t.y,
				width: 20,
				height: 20
			}, r = (await e.hitTest(n)).results.filter((e) => !("graphic" in e) || e.graphic.layer !== j ? !1 : !!e.graphic.attributes?.id);
			r.length > 0 ? (M = r[0].graphic, O.triggerUpdate([M]), M.attributes?.id && E.selectGraphic(M.attributes.id), T.updateAlert(f("draw.graphic.selected", { type: w(M.attributes?.type) }))) : (O.cancel(), M = null, E.clearSelection());
		}, H = async () => {
			if (!O || !E.activeTool) return;
			await T.geo.map.viewPromise;
			let e = T.geo.map.esriView, t = {
				x: Math.floor(e.width / 2),
				y: Math.floor(e.height / 2)
			}, i = e.toMap(t), o = e.extent, c = o.width, u = o.height, d = Math.min(c, u) / 10, p;
			switch (E.activeTool) {
				case "point":
					p = new n({
						geometry: new l({
							x: i.x,
							y: i.y,
							spatialReference: e.spatialReference
						}),
						symbol: O.pointSymbol
					});
					break;
				case "polyline":
					p = new n({
						geometry: new s({
							paths: [[[i.x - d / 2, i.y], [i.x + d / 2, i.y]]],
							spatialReference: e.spatialReference
						}),
						symbol: O.polylineSymbol
					});
					break;
				case "polygon":
				case "rectangle":
					let t = d / 2;
					p = new n({
						geometry: new a({
							rings: [[
								[i.x - t, i.y - t],
								[i.x + t, i.y - t],
								[i.x + t, i.y + t],
								[i.x - t, i.y + t],
								[i.x - t, i.y - t]
							]],
							spatialReference: e.spatialReference
						}),
						symbol: O.polygonSymbol || new r({
							color: [
								0,
								255,
								0,
								.3
							],
							outline: {
								color: [
									0,
									255,
									0,
									1
								],
								width: 1
							}
						})
					});
					break;
				case "circle":
					let o = d / 2, c = [];
					for (let e = 0; e <= 36; e++) {
						let t = e / 36 * 2 * Math.PI, n = i.x + o * Math.cos(t), r = i.y + o * Math.sin(t);
						c.push([n, r]);
					}
					p = new n({
						geometry: new a({
							rings: [c],
							spatialReference: e.spatialReference
						}),
						symbol: O.polygonSymbol || new r({
							color: [
								255,
								0,
								255,
								.3
							],
							outline: {
								color: [
									255,
									0,
									255,
									1
								],
								width: 1
							}
						})
					});
					break;
				default:
					console.warn("Unknown tool type:", E.activeTool);
					return;
			}
			if (p) {
				let e = `graphic-${Date.now()}`;
				p.attributes = {
					id: e,
					type: E.activeTool
				}, j?.add(p), E.addGraphic({
					id: e,
					type: E.activeTool,
					geometry: p.geometry,
					attributes: p.attributes
				}), E.activeTool !== "point" && (E.clearSelection(), E.setActiveTool(""), T.keyboardNav?.reset(), O.cancel()), T.updateAlert(f("draw.graphic.created", { type: w(E.activeTool) }));
			}
		}, U = (e) => {
			let i = T.geo.map.esriView?.container;
			if (!(!document.activeElement || !i?.contains(document.activeElement))) switch (e.key) {
				case "Enter":
					if (e.preventDefault(), E.activeTool && E.activeTool !== "edit") if ((E.activeTool === "polyline" || E.activeTool === "polygon") && (P || I.length === 0)) {
						let e = T.geo.map.esriView, i = {
							x: Math.floor(e.width / 2),
							y: Math.floor(e.height / 2)
						}, o = e.toMap(i);
						P ? (I.push([o.x, o.y]), E.activeTool === "polyline" ? F.geometry = new s({
							paths: [I],
							spatialReference: e.spatialReference
						}) : F.geometry = new a({
							rings: [I],
							spatialReference: e.spatialReference
						}), T.updateAlert(f("draw.multiPoint.pointAdded", {
							type: w(E.activeTool),
							count: I.length
						}))) : (P = !0, I = [[o.x, o.y]], F = E.activeTool === "polyline" ? new n({
							geometry: new s({
								paths: [I],
								spatialReference: e.spatialReference
							}),
							symbol: O?.polylineSymbol || new t({
								color: [
									0,
									0,
									255,
									1
								],
								width: 2
							})
						}) : new n({
							geometry: new a({
								rings: [I],
								spatialReference: e.spatialReference
							}),
							symbol: O?.polygonSymbol || new r({
								color: [
									0,
									255,
									0,
									.3
								],
								outline: {
									color: [
										0,
										255,
										0,
										1
									],
									width: 1
								}
							})
						}), F.attributes = {
							id: `temp-graphic-${Date.now()}`,
							type: E.activeTool
						}, j?.add(F), T.updateAlert(f("draw.multiPoint.started", {
							type: w(E.activeTool),
							count: 1
						})));
					} else H();
					else V();
					break;
				case "Delete":
				case "Backspace":
					let i = T.geo.map.esriView;
					P && I.length > 1 ? (e.preventDefault(), I.pop(), E.activeTool === "polyline" ? F.geometry = new s({
						paths: [I],
						spatialReference: i.spatialReference
					}) : F.geometry = new a({
						rings: [I],
						spatialReference: i.spatialReference
					}), F.set("geometry", F?.geometry), T.updateAlert(f("draw.multiPoint.pointRemoved", {
						type: w(E.activeTool ?? void 0),
						count: I.length
					}))) : P && I.length === 1 ? (e.preventDefault(), F && j?.remove(F), F = null, I = [], P = !1, T.updateAlert(f("draw.multiPoint.canceled"))) : M && (e.preventDefault(), O?.delete(), j?.remove(M), typeof E.removeGraphic == "function" && E.removeGraphic(M.attributes.id), M = null, B(void 0), T.updateAlert(f("draw.graphic.deleted")));
					break;
				case "Escape":
					E.setActiveTool(null), O?.cancel(), M = null, B(void 0), E.clearSelection(), T.updateAlert(f("draw.tool.canceled"));
					break;
			}
		}, W = (e) => {
			let t = T.geo.map.esriView.container;
			if (!document.activeElement || !t?.contains(document.activeElement) || !M || ![
				"ArrowUp",
				"ArrowDown",
				"ArrowLeft",
				"ArrowRight"
			].includes(e.key)) return;
			e.preventDefault(), e.stopPropagation();
			let n = e.shiftKey, r = e.altKey, i = T.geo.map.esriView, o = 0, c = 0;
			e.key === "ArrowLeft" && (o = -10), e.key === "ArrowRight" && (o = 10), e.key === "ArrowUp" && (c = -10), e.key === "ArrowDown" && (c = 10);
			let u = M.geometry, d;
			if (u.type === "point") d = {
				x: u.x,
				y: u.y
			};
			else {
				let e = u.extent;
				d = {
					x: (e.xmin + e.xmax) / 2,
					y: (e.ymin + e.ymax) / 2
				};
			}
			let p = i.toScreen(new l({
				x: d.x,
				y: d.y,
				spatialReference: i.spatialReference
			}));
			p.x += o, p.y += c;
			let m = i.toMap(p), h = m.x - d.x, g = m.y - d.y, _;
			if (u.type === "point") !n && !r ? _ = new l({
				x: u.x + h,
				y: u.y + g,
				spatialReference: u.spatialReference
			}) : n ? (_ = u.clone(), T.updateAlert(f("draw.point.resize.unsupported"))) : r && (_ = u.clone(), T.updateAlert(f("draw.point.rotate.unsupported")));
			else if (u.type === "polyline") {
				if (!n && !r) _ = new s({
					paths: u.paths.map((e) => e.map(([e, t]) => [e + h, t + g])),
					spatialReference: u.spatialReference
				});
				else if (n) {
					let t = u, n = e.key === "ArrowUp" || e.key === "ArrowRight" ? 1.05 : .95;
					_ = new s({
						paths: t.paths.map((e) => e.map(([e, t]) => [d.x + (e - d.x) * n, d.y + (t - d.y) * n])),
						spatialReference: u.spatialReference
					});
				} else if (r) {
					let t = u, n = e.key === "ArrowLeft" ? -.05 : e.key === "ArrowRight" ? .05 : 0;
					if (n !== 0) {
						let e = Math.cos(n), r = Math.sin(n);
						_ = new s({
							paths: t.paths.map((t) => t.map(([t, n]) => {
								let i = t - d.x, a = n - d.y, o = i * e - a * r, s = i * r + a * e;
								return [d.x + o, d.y + s];
							})),
							spatialReference: u.spatialReference
						});
					} else _ = u.clone();
				}
			} else if (u.type === "polygon") {
				if (!n && !r) _ = new a({
					rings: u.rings.map((e) => e.map(([e, t]) => [e + h, t + g])),
					spatialReference: u.spatialReference
				});
				else if (n) {
					let t = u, n = e.key === "ArrowUp" || e.key === "ArrowRight" ? 1.05 : .95;
					_ = new a({
						rings: t.rings.map((e) => e.map(([e, t]) => [d.x + (e - d.x) * n, d.y + (t - d.y) * n])),
						spatialReference: u.spatialReference
					});
				} else if (r) {
					let t = u, n = e.key === "ArrowLeft" ? -.05 : e.key === "ArrowRight" ? .05 : 0;
					if (n !== 0) {
						let e = Math.cos(n), r = Math.sin(n);
						_ = new a({
							rings: t.rings.map((t) => t.map(([t, n]) => {
								let i = t - d.x, a = n - d.y, o = i * e - a * r, s = i * r + a * e;
								return [d.x + o, d.y + s];
							})),
							spatialReference: u.spatialReference
						});
					} else _ = u.clone();
				}
			}
			if (_) {
				M.geometry = _, M.set("geometry", _), B(M), M.attributes?.id && E.updateGraphicGeometry(M.attributes.id, _);
				let e = n ? "resized" : r ? "rotated" : "moved";
				T.updateAlert(f(`draw.graphic.${e}`));
			}
		}, G = async (e) => {
			let t = (await T.geo.map.esriView.hitTest(e)).results.find((e) => "graphic" in e && e.graphic.layer === j && !!e.graphic.attributes?.id);
			t && E.activeTool === "edit" ? O?.triggerUpdate([t.graphic]) : (O?.cancel(), M = null, E.clearSelection(), B());
		}, K = async () => {
			await T.geo.map.viewPromise, T.geo.layer.getLayer("RampDrawGraphicsLayer") ? j = T.geo.layer.getLayer(C).esriLayer : (j = T.geo.layer.createLayer({
				id: C,
				layerType: i.GRAPHIC,
				cosmetic: !0,
				system: !0,
				url: ""
			}), await T.geo.map.addLayer(j)), j?.esriLayer && (j = j.esriLayer), Object.assign(k.value, {
				view: T.geo.map.esriView,
				layer: j,
				availableCreateTools: [
					"point",
					"multipoint",
					"polyline",
					"polygon",
					"rectangle",
					"circle"
				],
				updateOnGraphicClick: !0,
				visibleElements: {
					createTools: {
						point: !0,
						polyline: !0,
						polygon: !0,
						rectangle: !0,
						circle: !0
					},
					selectionTools: { enable: !0 },
					settingsMenu: !1
				},
				defaultUpdateOptions: { highlightOptions: { enabled: !1 } }
			}), T.geo.map.esriView.ui.add(k.value, "bottom-right"), k.value?.addEventListener("arcgisCreate", (e) => Y(e.detail)), k.value?.addEventListener("arcgisUpdate", (e) => X(e.detail)), A = { remove: () => k.value?.removeEventListener("arcgisCreate", (e) => Y(e.detail)) }, O = k.value, T.geo.map.esriView.on("click", G), document.addEventListener("keydown", U), document.addEventListener("keydown", W, { capture: !0 });
		}, q = () => {
			if (!R) return;
			let e = T.keyboardNav;
			if (!e) {
				R = void 0;
				return;
			}
			e.unregister(R), R = void 0;
		}, J = () => {
			q(), O && (T.geo.map.esriView && T.geo.map.esriView.ui.remove(O), A && A.remove(), O.destroy()), document.removeEventListener("keydown", U), document.removeEventListener("keydown", W, { capture: !0 }), P = !1, F = null, I = [], O = null, j = null;
		}, Y = (e) => {
			if (e.state === "complete") {
				let t = e.graphic;
				if (!t) return;
				let n = `graphic-${Date.now()}`;
				t.attributes = t.attributes || {}, t.attributes.id = n, E.addGraphic({
					id: n,
					type: e.tool,
					geometry: t.geometry,
					attributes: t.attributes
				}), e.tool !== "point" && (E.setActiveTool(""), T.keyboardNav?.reset());
			}
		}, X = (e) => {
			let t = e.graphics[0];
			if (t) if (e.state === "start") {
				if (E.activeTool !== "edit") {
					O.cancel();
					return;
				}
				M = t, t.attributes?.id && (E.selectGraphic(t.attributes.id), T.updateAlert(f("draw.graphic.selected", { type: w(t.attributes?.type) })));
			} else e.state === "active" ? B(t) : e.state === "complete" && t.attributes?.id && (E.updateGraphicGeometry(t.attributes.id, t.geometry), T.updateAlert(f("draw.graphic.updated")));
		};
		return h(() => {
			z(), K(), L.push(T.event.on(e.MAP_DESTROYED, () => {
				J();
			}));
		}), b(() => E.activeTool, (e) => {
			O.cancel(), B(), F = null, I = [], P = !1, e && e != "edit" && O.create(e);
		}), g(() => {
			J(), L.forEach((e) => T.event.off(e));
		}), (e, t) => (_(), d("arcgis-sketch", {
			ref_key: "sketchEl",
			ref: k,
			style: { display: "none" }
		}, null, 512));
	}
}), T = [
	{ type: "point" },
	{ type: "polyline" },
	{ type: "polygon" },
	{ type: "circle" },
	{ type: "rectangle" }
], E = class extends c {
	store;
	constructor(e, t) {
		super(e, t), this.store = u(this.$vApp.$pinia);
	}
	_parseConfig(e) {
		if (!e) {
			this.store.setSupportedTypes(T);
			return;
		}
		if (e.types !== void 0) {
			let t = (e.types === null ? [] : e.types).filter((e) => e.enabled !== !1);
			this.store.setSupportedTypes(t);
		} else this.store.setSupportedTypes(T);
		e.defaultTool && this.store.setActiveTool(e.defaultTool);
	}
	get graphicsLayerId() {
		return C;
	}
}, D = {
	en: {
		"draw.multiPoint.started": "{type} drawing started with 1 point",
		"draw.multiPoint.pointAdded": "Point added {count} points total",
		"draw.multiPoint.pointRemoved": "Point removed {count} points remaining",
		"draw.multiPoint.canceled": "Drawing canceled",
		"draw.multiPoint.completed": "{type} completed with {count} points",
		"draw.multiPoint.notEnoughPoints": "Not enough points for {type} minimum {min} required",
		"draw.graphic.created": "{type} created",
		"draw.graphic.selected": "{type} selected",
		"draw.graphic.deselected": "Graphic deselected",
		"draw.graphic.deleted": "Graphic deleted",
		"draw.graphic.updated": "Graphic updated",
		"draw.graphic.none": "No graphic found",
		"draw.tool.canceled": "Drawing tool canceled",
		"draw.point.resize.unsupported": "Resizing not supported for point graphics",
		"draw.point.rotate.unsupported": "Rotation not supported for point graphics",
		"draw.move.up": "Moved up",
		"draw.move.down": "Moved down",
		"draw.move.left": "Moved left",
		"draw.move.right": "Moved right",
		"draw.resize.increase": "Increased size",
		"draw.resize.decrease": "Decreased size",
		"draw.rotate.clockwise": "Rotated clockwise",
		"draw.rotate.counterclockwise": "Rotated counter-clockwise",
		"draw.button.point": "Draw point",
		"draw.button.polyline": "Draw line",
		"draw.button.polygon": "Draw polygon",
		"draw.button.rectangle": "Draw rectangle",
		"draw.button.circle": "Draw circle",
		"draw.point.tooltip": "Draw point",
		"draw.polyline.tooltip": "Draw polyline",
		"draw.polygon.tooltip": "Draw polygon",
		"draw.circle.tooltip": "Draw circle",
		"draw.rectangle.tooltip": "Draw rectangle",
		"draw.edit.tooltip": "Edit Mode",
		"draw.keyboard.namespace": "Draw Tools",
		"draw.keyboard.key.point": "Draw a point",
		"draw.keyboard.key.polyline": "Draw a line",
		"draw.keyboard.key.polygon": "Draw a polygon",
		"draw.keyboard.key.circle": "Draw a circle",
		"draw.keyboard.key.rectangle": "Draw a rectangle",
		"draw.keyboard.key.edit": "Edit geometry",
		"draw.graphic.moved": "Graphic moved",
		"draw.shape": "shape",
		"draw.point": "point",
		"draw.multipoint": "multipoint",
		"draw.polyline": "polyline",
		"draw.polygon": "polygon",
		"draw.rectangle": "rectangle",
		"draw.circle": "circle",
		"draw.unknown": "unknown"
	},
	fr: {
		"draw.multiPoint.started": "Dessin de {type} commencé avec 1 point",
		"draw.multiPoint.pointAdded": "Point ajouté",
		"draw.multiPoint.pointRemoved": "Point supprimé",
		"draw.multiPoint.canceled": "Dessin annulé",
		"draw.multiPoint.completed": "{type} terminé avec {count} points",
		"draw.multiPoint.notEnoughPoints": "Pas assez de points pour {type}",
		"draw.graphic.created": "{type} créé",
		"draw.graphic.selected": "{type} sélectionné",
		"draw.graphic.deselected": "Graphique désélectionné",
		"draw.graphic.deleted": "Graphique supprimé",
		"draw.graphic.updated": "Graphique mis à jour",
		"draw.graphic.none": "Aucun graphique trouvé",
		"draw.tool.canceled": "Outil de dessin annulé",
		"draw.point.resize.unsupported": "Le redimensionnement n'est pas pris en charge pour les points",
		"draw.point.rotate.unsupported": "La rotation n'est pas prise en charge pour les points",
		"draw.move.up": "Déplacé vers le haut",
		"draw.move.down": "Déplacé vers le bas",
		"draw.move.left": "Déplacé vers la gauche",
		"draw.move.right": "Déplacé vers la droite",
		"draw.resize.increase": "Taille augmentée",
		"draw.resize.decrease": "Taille réduite",
		"draw.rotate.clockwise": "Rotation dans le sens horaire",
		"draw.rotate.counterclockwise": "Rotation dans le sens antihoraire",
		"draw.button.point": "Dessiner un point",
		"draw.button.polyline": "Dessiner une ligne",
		"draw.button.polygon": "Dessiner un polygone",
		"draw.button.rectangle": "Dessiner un rectangle",
		"draw.button.circle": "Dessiner un cercle",
		"draw.point.tooltip": "Dessiner un point",
		"draw.polyline.tooltip": "Dessiner une polyligne",
		"draw.polygon.tooltip": "Dessiner un polygone",
		"draw.circle.tooltip": "Dessiner un cercle",
		"draw.rectangle.tooltip": "Dessiner un rectangle",
		"draw.edit.tooltip": "Mode édition",
		"draw.keyboard.namespace": "Outils de dessin",
		"draw.keyboard.key.point": "Dessine un point",
		"draw.keyboard.key.polyline": "Dessine une ligne",
		"draw.keyboard.key.polygon": "Dessine un polygone",
		"draw.keyboard.key.circle": "Dessine un cercle",
		"draw.keyboard.key.rectangle": "Dessine un rectangle",
		"draw.keyboard.key.edit": "Mode édition",
		"draw.graphic.moved": "Graphique déplacé",
		"draw.shape": "forme",
		"draw.point": "indiquer",
		"draw.multipoint": "multipoint",
		"draw.polyline": "polyligne",
		"draw.polygon": "polygone",
		"draw.rectangle": "rectangle",
		"draw.circle": "cercle",
		"draw.unknown": "inconnue"
	}
}, O = class extends E {
	async init() {
		Object.entries(D).forEach((e) => this.$iApi.$i18n.mergeLocaleMessage(...e)), this._parseConfig(this.config), u(this.$vApp.$pinia).supportedTypes.forEach((e) => {
			let t = `${e.type}-icon`;
			this.$iApi.component(t, m(S(/* @__PURE__ */ Object.assign({
				"./icons/circle-icon.vue": () => import("./circle-icon-l-MW3BsG.js"),
				"./icons/edit-icon.vue": () => import("./edit-icon-CdQGWBnd.js"),
				"./icons/point-icon.vue": () => import("./point-icon-CqBcZKw-.js"),
				"./icons/polygon-icon.vue": () => import("./polygon-icon-Cuub0vzq.js"),
				"./icons/polyline-icon.vue": () => import("./polyline-icon-DHkEaMJO.js"),
				"./icons/rectangle-icon.vue": () => import("./rectangle-icon-CgBD81-X.js")
			}), `./icons/${e.type}-icon.vue`, 3)));
		});
		let { el: e } = this.mount(w, { app: this.$element });
		this.$vApp.$el.getElementsByClassName("inner-shell")[0].appendChild(e.childNodes[0]);
	}
	async added() {
		this.$iApi.event.on(e.MAP_CREATED, () => {
			this.init();
		});
	}
};
//#endregion
export { O as default };
