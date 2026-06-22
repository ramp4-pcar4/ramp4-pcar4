import { s as e } from "./main-BgfQyEh5.js";
import { fabric as t } from "fabric";
//#region src/fixtures/export-legend/index.ts
var n = 30, r = 20, i = 16, a = 12, o = 8, s = 32, c = 32, l = 20, u = "Montserrat, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif", d = class extends e {
	get config() {
		return this.$iApi.fixture.get("export").config?.legend;
	}
	async make(e) {
		let s = this.$iApi.geo.layer.allLayersOnMap().filter((e) => !e.isCosmetic);
		if (s.length === 0) return new t.Group([], { originX: "left" });
		let c = Math.min(s.length, Math.floor(e.width / 370) || 1), u = (e.width - (c - 1) * l) / c, d = 0, f = (await Promise.all(this._makeSegments(s, u))).map(({ title: e, items: s }, c) => {
			c > 0 && (d += n), e.top = d, d += e.height + r;
			let l = s.map(({ title: t, items: n }, r) => {
				let c = [];
				return t && !(s.length === 1 && t.text === e.text) && (r > 0 && (d += i), t.top = d, d += t.height + a, c.push(t)), n.forEach((e) => {
					e.top = d, d += e.height + o;
				}), [...c, ...n].filter((e) => e);
			});
			return new t.Group([e, ...l.flat()]);
		}).flat(), p = this._makeColumns(f, u, c);
		return Promise.resolve(p);
	}
	_makeColumns(e, n, r) {
		let i = 0, a = 0, o = 0, s = e[e.length - 1].aCoords.bl.y / r;
		return e.forEach((t, c) => {
			let u = c === e.length - 1 ? t.height : e[c + 1].top - t.top, d = o > s * (i + 1), f = a !== 0 && u > s, p = r - i > e.length - c;
			(d || f || p) && i < r && (++i, a = 0), t.left = i * (n + l), t.top = a, a += u, o += u;
		}), new t.Group(e, { originX: "left" });
	}
	_makeSegments(e, n) {
		return e.map(async (e) => {
			let r = new t.Textbox(e.name, {
				fontSize: 24,
				fontFamily: u,
				width: n
			}), i = this._getLayerTreeIds(e), a = [];
			return a = e.supportsSublayers ? await Promise.all(this._makeSegmentChunks(i, e, n)) : await Promise.all(this._makeSegmentChunks([-1], e, n)), {
				title: r,
				items: a
			};
		});
	}
	_makeSegmentChunks(e, n, r) {
		let i = n;
		return e.map(async (e) => {
			let n = e === -1 ? i : i.getSublayer(e);
			if (!n) return {
				title: new t.Textbox("ERROR", {
					fontSize: 20,
					fontFamily: u,
					width: r
				}),
				items: []
			};
			await Promise.all(n.legend.map((e) => e.drawPromise));
			let a = n.legend;
			return {
				title: new t.Textbox(n.name, {
					fontSize: 20,
					fontFamily: u,
					width: r
				}),
				items: await Promise.all(this._makeChunkItems(a, r))
			};
		});
	}
	_makeChunkItems(e, n) {
		return e.map(async (e) => {
			let r = (await f(t.loadSVGFromString)(e.svgcode))[0];
			if (e.esriStandard) {
				r.originY = "center", r.top = s / 2;
				let i = new t.Textbox(e.label, {
					fontSize: 12,
					fontFamily: u,
					originY: "center",
					left: 52,
					top: s / 2,
					width: n - c - 20
				});
				return new t.Group([r, i], { height: s });
			} else {
				let i = new t.Textbox(e.label, {
					fontSize: 12,
					fontFamily: u,
					originY: "center",
					left: 0,
					top: s / 2,
					width: n
				}), a = Number(e.imgWidth), o = Number(e.imgHeight), c = Math.min(1, n / a);
				return r && (r.originY = "center", r.top = o * c / 2 + s, r.scaleToHeight(o * c), r.scaleToWidth(a * c)), new t.Group([i, r].filter(Boolean), { height: o * c + s });
			}
		});
	}
	_getLayerTreeIds(e) {
		let t = [], n = [...e.sublayers];
		for (; n.length > 0;) {
			let e = n.shift();
			e && (e.visibility && t.push(e.layerIdx), n.push(...e.sublayers));
		}
		return t;
	}
}, f = (e) => (t) => new Promise((n) => {
	e(t, (e) => {
		n(e);
	});
});
//#endregion
export { d as default };
