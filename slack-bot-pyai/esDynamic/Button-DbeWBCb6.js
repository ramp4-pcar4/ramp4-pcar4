import { z as f, i as R, C as _, ar as b, ak as T, am as g } from "./Theme-BKgnQH4T.js";
class p extends f {
  _beforeChanged() {
    super._beforeChanged(), (this.isDirty("cornerRadiusTL") || this.isDirty("cornerRadiusTR") || this.isDirty("cornerRadiusBR") || this.isDirty("cornerRadiusBL")) && (this._clear = !0);
  }
  _draw() {
    let s = this.width(), e = this.height(), t = s, i = e, c = t / Math.abs(s), l = i / Math.abs(e);
    if (_(t) && _(i)) {
      let d = Math.min(t, i) / 2, r = b(this.get("cornerRadiusTL", 8), d), n = b(this.get("cornerRadiusTR", 8), d), o = b(this.get("cornerRadiusBR", 8), d), h = b(this.get("cornerRadiusBL", 8), d), u = Math.min(Math.abs(t / 2), Math.abs(i / 2));
      r = g(r, 0, u), n = g(n, 0, u), o = g(o, 0, u), h = g(h, 0, u);
      const a = this._display;
      a.moveTo(r * c, 0), a.lineTo(t - n * c, 0), n > 0 && a.arcTo(t, 0, t, n * l, n), a.lineTo(t, i - o * l), o > 0 && a.arcTo(t, i, t - o * c, i, o), a.lineTo(h * c, i), h > 0 && a.arcTo(0, i, 0, i - h * l, h), a.lineTo(0, r * l), r > 0 && a.arcTo(0, 0, r * c, 0, r), a.closePath();
    }
  }
}
Object.defineProperty(p, "className", { enumerable: !0, configurable: !0, writable: !0, value: "RoundedRectangle" }), Object.defineProperty(p, "classNames", { enumerable: !0, configurable: !0, writable: !0, value: f.classNames.concat([p.className]) });
class m extends R {
  _afterNew() {
    this._settings.themeTags = T(this._settings.themeTags, ["button"]), super._afterNew(), this._settings.background || this.set("background", p.new(this._root, { themeTags: T(this._settings.themeTags, ["background"]) })), this.setPrivate("trustBounds", !0);
  }
  _prepareChildren() {
    if (super._prepareChildren(), this.isDirty("icon")) {
      const s = this._prevSettings.icon, e = this.get("icon");
      e !== s && (this._disposeProperty("icon"), s && s.dispose(), e && this.children.push(e), this._prevSettings.icon = e);
    }
    if (this.isDirty("label")) {
      const s = this._prevSettings.label, e = this.get("label");
      e !== s && (this._disposeProperty("label"), s && s.dispose(), e && this.children.push(e), this._prevSettings.label = e);
    }
  }
}
Object.defineProperty(m, "className", { enumerable: !0, configurable: !0, writable: !0, value: "Button" }), Object.defineProperty(m, "classNames", { enumerable: !0, configurable: !0, writable: !0, value: R.classNames.concat([m.className]) });
export {
  p as n,
  m as o
};
//# sourceMappingURL=Button-DbeWBCb6.js.map
