import { V as e, X as t, ct as n, lt as r, s as i, tt as a } from "./main-BgfQyEh5.js";
//#region src/fixtures/pindrop/api/pindrop.ts
var o = "ramp-pin-identify", s = "ramp-pin-panel-open", c = "ramp-pin-panel-close", l = "ramp-pin-panel-min", u = "Ramp-Pin-Drop", d = {
	style: r.ICON,
	width: 12,
	height: 16,
	icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAZCAYAAADTyxWqAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAYdEVYdFNvZnR3YXJlAFBhaW50Lk5FVCA1LjEuN4vW9zkAAAC2ZVhJZklJKgAIAAAABQAaAQUAAQAAAEoAAAAbAQUAAQAAAFIAAAAoAQMAAQAAAAIAAAAxAQIAEAAAAFoAAABphwQAAQAAAGoAAAAAAAAAYAAAAAEAAABgAAAAAQAAAFBhaW50Lk5FVCA1LjEuNwADAACQBwAEAAAAMDIzMAGgAwABAAAAAQAAAAWgBAABAAAAlAAAAAAAAAACAAEAAgAEAAAAUjk4AAIABwAEAAAAMDEwMAAAAAAlR56NozS1xQAAAx1JREFUSEuVlV1Ik1EYx5+zuZnza26KWmp4odNUJLwQKUqxzFZgdRF0aRd9EBGGREnRRV3kVUl01U0gEVFQls4uuqgk0IwoY5VOan5O0U3TVlZup/95z7tXp1voDx7O/3nes/973vM1RhHIL7eXoDmC2IkoRKQgfIjPiBeIewM9DifaMMLM8sv3mlG6BnkUYVCKkfmDuM2JN7l6OudkaZkZjHKRtkGKUa2V90T8wEBP55BIFDMYWSBfQhaLfJ18wAgrMcJZvcisWfk30dQKHUK8ZWJ+gcb7psk7Okdej58Wk2IoMTZGdlgigxGzeMdc7QyTvRWFXoRiLBBG/cMzVF9XEayz7+KpVktgyuvVt3U819150s1sOSnEZdcQAUSZ3pqV1wixTSmBkFHLxfrgpfMNVFxUqM/JztIX2PJ0NdU7eFoC43fbu1lqcpz8gUSHmBdmVyE2KSUw7f9Nh6pKg5cvnCWTKU500jAYDKykaAt3u5zU555gJmPYJxtEZ5vUEt/gLO2rqeQmkynMKER8vEm3v7Yq6Bv8rlY0CsQPkqRWWQhQijlZzEFUlOcLi2qmkSTMZqRWsRhpZHRcLMaKOdbgynOrUU01ZoTZJ6kl2ZvN1PrQoZuYmIxo5kG99UGHLjsHhyUcp1iAdIhqmRMZY3T0btTL/JOjvKTIxs3JyeoTIvfQML/S3MIe9X5hmYkb1KrGLbHPMiH6EKlKCTDGqN/3g/ItCfxw7XaekZ4W9ExO6e47utjXWT/LsyQQ52EDn0SUqsfJfg5Ns9DL+RsI0jefHzsI5zrRSLmWeDLoIy5yA26RG4pZXrndANEFWS7ydfIKg6xyvXEEFTMBRleG5jUiVimsDQybKjCqjyLRziMOqgeLIe6p3bKyJhph9FTVS/dZCIzwGZo9Mvsvj2F0UNUKkWbzBGJKyqiMIU5JucQqM7zNjea0zKJyEv3GVa2hzdlyMH9OzN9GSLEoK7kOI3GZriLiplER99zKf6C32KpNql5FVDO8fR7NcUToeviFOObqcSzIdDURPzMEPncEn/sTUpzdM3hBu/IgIkT/AA0b/Z36q15CAAAAAElFTkSuQmCC",
	xOffset: 0,
	yOffset: 8
}, f = class extends i {
	_pinSymbol;
	_linkIdentify = !1;
	_linkDetails = !1;
	_pinPoint;
	_pinVisible = !1;
	_active = !0;
	get pinSymbol() {
		return this._pinSymbol.toOptions();
	}
	set pinSymbol(e) {
		this._pinSymbol = new t(e);
	}
	get active() {
		return this._active;
	}
	set active(e) {
		e || this.hidePin(), this._active = e;
	}
	get linkIdentify() {
		return this._linkIdentify;
	}
	set linkIdentify(e) {
		e !== this._linkIdentify && (this._linkIdentify = e, e ? this.$iApi.event.on("map/identify", async (e) => {
			this.dropPin(e.click.mapPoint);
		}, o) : this._cleanIdentify());
	}
	get linkDetails() {
		return this._linkDetails;
	}
	set linkDetails(t) {
		t !== this._linkDetails && (this._linkDetails = t, t ? (this.$iApi.event.on(e.PANEL_CLOSED, async (e) => {
			e.id === "details" && this.removePin();
		}, c), this.$iApi.event.on(e.PANEL_MINIMIZED, (e) => {
			e.id === "details" && this.hidePin();
		}, l), this.$iApi.event.on(e.PANEL_OPENED, (e) => {
			e.id === "details" && !this._pinVisible && this._pinPoint && this.restorePin();
		}, s)) : this._cleanDetails());
	}
	initialized() {
		this.initPinLayer();
	}
	cleanup() {
		this._linkDetails && this._cleanDetails(), this._linkIdentify && this._cleanIdentify();
	}
	_parseConfig(e) {
		let t = !0;
		e && (e.pinSymbol && (this.pinSymbol = e.pinSymbol, t = !1), this.linkDetails = !!e.linkDetails, this.linkIdentify = !!e.linkIdentify), t && (this.pinSymbol = d);
	}
	async initPinLayer() {
		let e = this.$iApi.geo, t = e.layer.createLayer({
			id: u,
			layerType: n.GRAPHIC,
			cosmetic: !0,
			system: !0,
			url: ""
		});
		await e.map.addLayer(t);
	}
	dropPin(e) {
		this.active && (this._pinPoint = e, this._insertPin());
	}
	removePin() {
		this._erasePin(), this._pinPoint = void 0;
	}
	hidePin() {
		this._erasePin();
	}
	restorePin() {
		this.active && this._pinPoint && !this._pinVisible && this._insertPin();
	}
	getPindropLayer() {
		return this.$iApi.geo.layer.getLayer(u);
	}
	get pindropLayerName() {
		return u;
	}
	_insertPin() {
		let e = this.getPindropLayer();
		if (e && this._pinPoint) {
			this._erasePin(e);
			let t = new a(this._pinPoint, "ramp-pin");
			t.style = this._pinSymbol, e.addGraphic(t), this._pinVisible = !0;
			let n = this.$iApi.geo, r = n.layer.layerOrderIds(), i = r.length - 1;
			r[i] !== u && n.map.reorder(e, i, !1);
		}
	}
	_erasePin(e) {
		if (this._pinVisible) {
			let t = e ?? this.getPindropLayer();
			t && t.removeGraphic(), this._pinVisible = !1;
		}
	}
	_cleanIdentify() {
		this.$iApi.event.off(o);
	}
	_cleanDetails() {
		let e = this.$iApi.event;
		e.off(c), e.off(s), e.off(l);
	}
}, p = class extends f {
	async added() {
		this._parseConfig(this.config);
		let e = this.$vApp.$watch(() => this.config, (e) => this._parseConfig(e));
		this.removed = () => {
			e(), this.cleanup();
		};
	}
};
//#endregion
export { p as default };
