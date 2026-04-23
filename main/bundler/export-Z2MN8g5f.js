import { B as e, M as t, W as n, s as r } from "./main-Bz1ia27O.js";
import i from "./screen-gGE2WhZd.js";
import { markRaw as a } from "vue";
import o from "file-saver";
//#region src/fixtures/export/api/export.ts
var s = 1200, c = {
	TOP: 40,
	RIGHT: 40,
	BOTTOM: 40,
	LEFT: 40
}, l = class extends r {
	fcFabric;
	fcFabricDownload;
	options = {
		runningHeight: 0,
		scale: 1
	};
	customRendererFunc = void 0;
	customRenderer(e) {
		this.customRendererFunc = e;
	}
	get config() {
		return super.config;
	}
	_parseConfig(e) {
		if (!e) return;
		let n = t(this.$vApp.$pinia);
		n.componentSelectedState = {
			title: e.title?.selected ?? !0,
			map: e.map?.selected ?? !0,
			mapElements: e.mapElements?.selected ?? !0,
			legend: e.legend?.selected ?? !0,
			footnote: e.footnote?.selected ?? !0,
			timestamp: e.timestamp?.selected ?? !0
		}, n.fileName = e.fileName || "", this.handlePanelWidths(["export"]), this.handlePanelTeleports(["export"]);
	}
	getSubFixture(e) {
		return this.$iApi.fixture.get(e);
	}
	async make(e, n) {
		let { fabric: r } = await import("fabric");
		r.Object.prototype.objectCaching = !1;
		let i = t(this.$vApp.$pinia), a = {};
		this.fcFabric = new r.StaticCanvas(e, { backgroundColor: "#fff" }), this.fcFabricDownload = new r.StaticCanvas(null, { backgroundColor: "#fff" }), this.options.runningHeight = 0;
		let o = i.componentSelectedState, l = this.getSubFixture("export-title"), u = this.getSubFixture("export-map"), d = this.getSubFixture("export-scalebar"), f = this.getSubFixture("export-northarrow"), p = this.getSubFixture("export-legend"), m = this.getSubFixture("export-footnote"), h = this.getSubFixture("export-timestamp"), g, _, v, y, b, x, S;
		if (o.title && l && (g = await l.make({
			top: this.options.runningHeight,
			left: 0,
			originX: "left",
			width: n,
			textAlign: "center"
		}), this.options.runningHeight += g.height + 40, a.title = g), o.map && u && (_ = await u.make({ top: this.options.runningHeight }), g && (g.left = _.width / 2, g.originX = "center"), this.options.runningHeight += _.height + 40, a.map = _), !_ && g && (g.width = s), this.options.scale = n / ((_?.width ?? s) + c.LEFT + c.RIGHT), o.mapElements && d && (v = await d.make({
			top: this.options.runningHeight,
			left: 0
		}), this.options.runningHeight += v.height + 40, a.scaleBar = v, f && (y = await f.make({
			top: v.top,
			left: n / this.options.scale
		}), y.top += y.height / 2 - 20, y.left += -y.width * 2, a.northArrow = y)), o.legend && p && (b = await p.make({ width: p.config?.columnWidth ?? _?.width ?? s }), b.top = this.options.runningHeight, this.options.runningHeight += b.height, a.legend = b), o.timestamp && h && (S = await h.make({
			top: this.options.runningHeight + 40,
			width: n * 1.5
		}), this.options.runningHeight += !o.footnote || !m ? S.height + 40 : S.height + 20, a.timestamp = S), o.footnote && m && (x = await m.make({
			top: this.options.runningHeight - 2.5,
			left: n / this.options.scale + 40
		}), o.timestamp && h ? n - a.timestamp.getMinWidth() <= x.getMinWidth() + 30 ? (x.top += 30, x.left = 0, x.originX = "left", this.options.runningHeight += 20) : x.left += -x.width * 2 : (x.top += 20, x.left += -x.width * 2, this.options.runningHeight += 20), this.options.runningHeight += x.height, a.footnote = x), this.customRendererFunc) {
			this.fcFabric.setWidth(n);
			let e = {
				panelWidth: n,
				margin: c,
				defaultWidth: s,
				fabric: r
			};
			await this.customRendererFunc(this.fcFabric, a, e), this.fcFabric.renderAll(), this.fcFabric.clone((e) => {
				this.fcFabricDownload = e, this.fcFabricDownload.setDimensions({
					width: this.fcFabric?.getWidth() ?? n,
					height: this.fcFabric.getHeight()
				}), this.fcFabricDownload.renderAll();
			});
		} else {
			let e = new r.Group(Object.values(a), {
				top: c.TOP * this.options.scale,
				left: c.LEFT * this.options.scale
			}), t = await new Promise((t) => {
				e.clone((e) => {
					t(e);
				});
			});
			t.top = c.TOP, t.left = c.LEFT, this.fcFabricDownload.add(t), e.scale(this.options.scale), this.fcFabric.add(e), this.fcFabric.setDimensions({
				width: n,
				height: (this.options.runningHeight + c.TOP + c.BOTTOM) * this.options.scale
			}), this.fcFabric.renderAll(), this.fcFabricDownload.setDimensions({
				width: (_?.width ?? s) + c.LEFT + c.RIGHT,
				height: this.options.runningHeight + c.TOP + c.BOTTOM
			}), this.fcFabricDownload.renderAll();
		}
	}
	export() {
		if (!this.fcFabric) return;
		let e = /* @__PURE__ */ new Date(), t = this.config?.fileName || `map-carte - ${e.getFullYear()}-${e.getMonth()}-${e.getDay()}, ${e.getHours()}_${e.getMinutes()}`;
		o.saveAs(this.fcFabricDownload.toDataURL({
			format: "png",
			quality: 1
		}), `${t}.png`);
	}
}, u = {
	en: {
		"export.title": "Export",
		"export.alertName": "Export",
		"export.download": "Download image",
		"export.refresh": "Refresh",
		"export.scaleBar.approx": "{0} approx.",
		"export.menu": "Settings Menu",
		"export.menu.component.title": "Title",
		"export.menu.component.map": "Map",
		"export.menu.component.mapElements": "North arrow and scalebar",
		"export.menu.component.legend": "Legend",
		"export.menu.component.footnote": "Footnote",
		"export.menu.component.timestamp": "Timestamp"
	},
	fr: {
		"export.title": "Exporter",
		"export.alertName": "Exporter",
		"export.download": "Télécharger l'image",
		"export.refresh": "Rafraîchir",
		"export.scaleBar.approx": "Environ {0}",
		"export.menu": "Menu des paramètres",
		"export.menu.component.title": "Titre",
		"export.menu.component.map": "Carte",
		"export.menu.component.mapElements": "Flèche du nord et échelle graphique",
		"export.menu.component.legend": "Légende",
		"export.menu.component.footnote": "Référence",
		"export.menu.component.timestamp": "Horodatage"
	}
}, d = class extends l {
	initialized() {}
	async needed() {
		let e = (await import("./export-title-Cy8h8zY-.js")).default, t = (await import("./export-map-BKCatIWY.js")).default, n = (await import("./export-legend-D_dizW_0.js")).default, r = (await import("./export-northarrow-BsWCoNSZ.js")).default, i = (await import("./export-scalebar-CL-qt0ua.js")).default, a = (await import("./export-timestamp-CSCfQNK4.js")).default, o = (await import("./export-footnote-DxDJz5Ed.js")).default;
		this.$iApi.fixture.add("export-title", e), this.$iApi.fixture.add("export-map", t), this.$iApi.fixture.add("export-legend", n), this.$iApi.fixture.add("export-northarrow", r), this.$iApi.fixture.add("export-scalebar", i), this.$iApi.fixture.add("export-timestamp", a), this.$iApi.fixture.add("export-footnote", o);
	}
	added() {
		this.$iApi.panel.register({
			id: "export",
			config: {
				screens: { "export-screen": a(i) },
				style: {
					"flex-grow": "1",
					"max-width": "800px"
				},
				button: {
					tooltip: "export.title",
					icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M0 0h24v24H0z\" fill=\"none\" /><path d=\"M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z\" /></svg>"
				},
				alertName: "export.alertName"
			}
		}, { i18n: { messages: u } });
		let r = this.$iApi.event.on(e.PANEL_OPENED, async (e) => {
			e.id === "export" && (this.$iApi.event.off(r), await this.needed(), e.exportMake());
		});
		this._parseConfig(this.config);
		let o = this.$vApp.$watch(() => this.config, (e) => this._parseConfig(e));
		this.removed = () => {
			o(), this.$iApi.fixture.get("export-title")?.remove(), this.$iApi.fixture.get("export-map")?.remove(), this.$iApi.fixture.get("export-legend")?.remove(), this.$iApi.fixture.get("export-northarrow")?.remove(), this.$iApi.fixture.get("export-scalebar")?.remove(), this.$iApi.fixture.get("export-timestamp")?.remove(), this.$iApi.fixture.get("export-footnote")?.remove(), this.$iApi.fixture.exists("appbar") && n(this.$vApp.$pinia).removeButton("export"), t(this.$vApp.$pinia).$reset(), this.$iApi.panel.remove("export");
		};
	}
};
//#endregion
export { d as default };
