import { B as e, X as t, j as n, s as r } from "./main-BtLSZphp.js";
//#region src/fixtures/extentguard/api/extentguard.ts
var i = class extends r {
	_parseConfig(e) {
		if (e) {
			let t = n(this.$vApp.$pinia);
			e.alwaysOn && t.setAlwaysOn(!0);
			let r = e.extentSetIds;
			r && Array.isArray(r) && r.length > 0 && t.setExtentSetIds(r);
		}
	}
	get config() {
		return super.config;
	}
};
//#endregion
//#region src/fixtures/extentguard/index.ts
function a(e, t, n, r) {
	let i = e - t, a = t + i / 2, o = Math.min(i, n - r);
	return a > n ? {
		min: n - o,
		max: n,
		changed: !0
	} : a < r ? {
		min: r,
		max: r + o,
		changed: !0
	} : {
		min: t,
		max: e,
		changed: !1
	};
}
var o = class extends i {
	schemaEH = "";
	extentEH = "";
	added() {
		this._parseConfig(this.config);
		let t = this.$vApp.$watch(() => this.config, (e) => this._parseConfig(e));
		this.removed = () => {
			t(), n(this.$vApp.$pinia).$reset(), this.evtOff("schemaEH"), this.evtOff("extentEH");
		}, this.schemaEH = this.$iApi.event.on(e.MAP_BASEMAPCHANGE, (e) => {
			e.schemaChanged && this.checkActive();
		}), this.$iApi.geo.map.created ? this.checkActive() : this.$iApi.event.once(e.MAP_CREATED, () => {
			this.checkActive();
		});
	}
	checkActive() {
		let t = n(this.$vApp.$pinia);
		t.alwaysOn || t.extentSetIds.includes(this.$iApi.geo.map.getExtentSet().id) ? t.active || (t.setActive(!0), this.extentEH = this.$iApi.event.on(e.MAP_EXTENTCHANGE, (e) => {
			t.enforcing || this.enforceBoundary(e, !1);
		})) : t.active && (t.setActive(!1), this.evtOff("extentEH"));
	}
	evtOff(e) {
		this[e] && (this.$iApi.event.off(this[e]), this[e] = "");
	}
	enforceBoundary(e, r) {
		let i = this.$iApi.geo.map.getExtentSet().maximumExtent, o = a(e.xmax, e.xmin, i.xmax, i.xmin), s = a(e.ymax, e.ymin, i.ymax, i.ymin);
		if (s.changed || o.changed) {
			r && (this.$iApi.geo.map.esriView.extent = i.toESRI());
			let a = t.fromParams("extguard", o.min, s.min, o.max, s.max, e.sr), c = n(this.$vApp.$pinia);
			c.setEnforcing(!0), setTimeout(() => {
				this.$iApi.geo.map.zoomMapTo(a, void 0, !0, 400, "ease-in-out").then(() => {
					c.setEnforcing(!1), this.enforceBoundary(this.$iApi.geo.map.getExtent(), !0);
				});
			}, 150);
		}
	}
};
//#endregion
export { o as default };
