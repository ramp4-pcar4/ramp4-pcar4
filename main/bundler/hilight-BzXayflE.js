import { B as e, K as t, c as n, l as r, mt as i, s as a, u as o } from "./main-Bz1ia27O.js";
import { t as s } from "./config-qfRoNiJ2.js";
import { i as c, n as l, r as u, t as d } from "./hilight-defs-BbuJMh5p.js";
//#region src/fixtures/hilight/api/hilight-mode/base-hilight-mode.ts
var f = class extends t {
	config = {};
	mode = c.NONE;
	constructor(e, t) {
		super(t), this.config = e, this.mode = e.mode;
	}
	async add(e) {
		this.notImplementedError("addGraphics");
	}
	async remove(e) {
		this.notImplementedError("removeGraphics");
	}
	async reloadHilight(e) {
		this.notImplementedError("reloadHilight");
	}
	async getHilightLayer() {
		let e = await this.layerFetcher();
		if (e) {
			if (e.isLoaded && e instanceof o) return e;
			console.warn("Hilight layer exists but is in bad form.");
			return;
		} else {
			console.warn("Hilight layer could not be fetched.");
			return;
		}
	}
	notImplementedError(e) {
		console.warn(`Hilight mode method ${e} was not implemented by subclass.`);
	}
	layerFetcher() {
		let e = this.$iApi.geo.layer.getLayer(u);
		return e ? Promise.resolve(e) : new Promise((e) => {
			let t = 0, n = setInterval(() => {
				let r = this.$iApi.geo.layer.getLayer(u);
				if (r) clearInterval(n), e(r);
				else if (t += 125, t >= 1125) {
					clearInterval(n), e(void 0);
					return;
				}
			}, 125);
		});
	}
}, p = class extends f {
	async add(e) {
		let t = await this.getHilightLayer();
		t && await t.addGraphic(e);
	}
	async remove(e) {
		let t = await this.getHilightLayer();
		t && t.removeGraphic(e);
	}
	async reloadHilight(e) {
		await this.remove(e), await this.add(e);
	}
}, m = class extends p {
	handlers = [];
	onOpacity;
	offOpacity;
	lastAdd = 0;
	constructor(t, n) {
		super(t, n), this.onOpacity = t.options?.onOpacity ?? .75, this.offOpacity = t.options?.offOpacity > .02 ? t.options.offOpacity : .02, this.$iApi.geo.map.created ? this.hilightSetup() : this.handlers.push(this.$iApi.event.on(e.MAP_CREATED, () => {
			this.hilightSetup();
		})), this.handlers.push(this.$iApi.event.on(e.MAP_BASEMAPCHANGE, () => {
			this.getHilightLayer().then((e) => {
				e && e.graphics.length === 0 && this.updateFogLayer();
			});
		}));
	}
	async hilightSetup() {
		let e = s(this.$vApp.$pinia).activeBasemapConfig;
		try {
			let t = this.$iApi.geo.layer.createLayer({
				id: l,
				layerType: i.TILE,
				cosmetic: !0,
				system: !0,
				url: e.layers[0].url
			});
			await this.$iApi.geo.map.addLayer(t), t.opacity = this.offOpacity, await this.reorderFogLayer();
		} catch {
			console.error("Something went wrong while setting up the hilighter.");
		}
	}
	async updateFogLayer() {
		this.$iApi.geo.map.removeLayer(l), await this.hilightSetup();
	}
	async reorderFogLayer() {
		let e = this.getFogLayer(), t = await this.getHilightLayer();
		if (!t || !e) return;
		let n = this.$iApi.geo.layer.layerOrderIds(), r = n.indexOf(e.id), i = n.indexOf(t.id);
		i < r && i > -1 && r > -1 && this.$iApi.geo.map.reorder(t, r, !1);
	}
	async add(e) {
		this.lastAdd = Date.now();
		let t = this.getFogLayer();
		t && (t.opacity = this.onOpacity, await super.add(e));
	}
	async remove(e) {
		await super.remove(e);
		let t = this.getFogLayer();
		if (!t) return;
		let n = Date.now(), r = await this.getHilightLayer();
		r && setTimeout(() => {
			this.lastAdd < n && !r.getGraphicCount() && (t.opacity = this.offOpacity);
		}, 300);
	}
	async reloadHilight(e) {
		await this.updateFogLayer(), await super.reloadHilight(e);
	}
	getFogLayer() {
		let e = this.$iApi.geo.layer.getLayer(l);
		if (e && e instanceof n) return e;
		console.warn("Hilight fog layer could not be fetched.");
	}
}, h = class extends p {
	handlers = [];
	constructor(t, n) {
		super(t, n), this.hilightSetup(t), this.handlers.push(this.$iApi.event.on(e.MAP_CREATED, () => {
			this.hilightSetup(t);
		}));
	}
	hilightSetup(e) {
		this.$iApi.geo.map.viewPromise.then(() => {
			this.$iApi.geo.map.esriView.highlights = [e.options];
		});
	}
	async add(e) {
		await super.add(e);
		let t = this.$iApi.geo.layer.getLayer(u);
		if (t && t.esriLayer && t.isLoaded && t instanceof r) {
			let n = e instanceof Array ? e : [e];
			await t.viewPromise(), t.esriView.highlight(n.map((e) => t.getEsriGraphic(e.id)));
		}
	}
	async remove(e) {
		await super.remove(e);
	}
}, g = class extends a {
	hilightMode = new f({}, this.$iApi);
	initialized() {
		this.initHilightLayer();
	}
	_parseConfig(e) {
		if (e) switch (e.mode) {
			case c.NONE:
				this.hilightMode = new f(e, this.$iApi);
				break;
			case c.GLOW:
				this.hilightMode = new h(e, this.$iApi);
				break;
			case c.LIFT:
				this.hilightMode = new p(e, this.$iApi);
				break;
			case c.FOG:
				this.hilightMode = new m(e, this.$iApi);
				break;
			default:
				console.error("Could not find hilight mode:", e.mode);
				break;
		}
		else this.hilightMode = new h(d, this.$iApi);
	}
	async initHilightLayer() {
		let e = this.$iApi.geo.layer.createLayer({
			id: u,
			layerType: i.GRAPHIC,
			cosmetic: !0,
			system: !0,
			url: ""
		});
		await this.$iApi.geo.map.addLayer(e);
	}
	async addHilight(e) {
		let t = e instanceof Array ? e : [e];
		await this.hilightMode.add(t);
	}
	async removeHilight(e) {
		let t = e ? e instanceof Array ? e : [e] : void 0;
		await this.hilightMode.remove(t);
	}
	async reloadHilight(e) {
		let t = e instanceof Array ? e : [e];
		await this.hilightMode.reloadHilight(t);
	}
	async getGraphicsByKey(e, t, n) {
		let r = await this.getHilightLayer();
		if (!r) return [];
		let i = r.graphics.map((e) => ({
			...this.deconstructGraphicKey(e.id),
			og: e
		}));
		return e && (i = i.filter((t) => t.origin === e)), t && (i = i.filter((e) => e.uid === t)), n && (i = i.filter((e) => e.oid === n)), i.map((e) => e.og);
	}
	constructGraphicKey(e, t, n) {
		return `${u}~${e}~${t}~${n}`;
	}
	deconstructGraphicKey(e, t = !1) {
		let n = e.split("~");
		return n.length !== 4 && !t && console.warn("Malformed Hilight Graphic key provided:", e), {
			origin: n[1],
			uid: n[2],
			oid: parseInt(n[3])
		};
	}
	async getHilightLayer() {
		if (this.hilightMode) return await this.hilightMode.getHilightLayer();
		console.warn("API get layer request before highlight mode object exists");
	}
	get hilightLayerName() {
		return u;
	}
}, _ = class extends g {
	async added() {
		this._parseConfig(this.config);
		let e = this.$vApp.$watch(() => this.config, (e) => this._parseConfig(e));
		this.removed = () => {
			e();
		};
	}
};
//#endregion
export { _ as default };
