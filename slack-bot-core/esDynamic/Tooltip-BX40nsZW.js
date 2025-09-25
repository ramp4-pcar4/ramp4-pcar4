import { b as M, i as N, ak as E, al as L, c as x, h as Y, a6 as W, a3 as j, ad as B, am as u } from "./Theme--eMZEbwP.js";
class D extends M {
  _beforeChanged() {
    super._beforeChanged(), (this.isDirty("pointerBaseWidth") || this.isDirty("cornerRadius") || this.isDirty("pointerLength") || this.isDirty("pointerX") || this.isDirty("pointerY") || this.isDirty("width") || this.isDirty("height")) && (this._clear = !0);
  }
  _changed() {
    if (super._changed(), this._clear) {
      this.markDirtyBounds();
      let t = this.width(), i = this.height();
      if (t > 0 && i > 0) {
        let e = this.get("cornerRadius", 8);
        e = u(e, 0, Math.min(t / 2, i / 2));
        let l = this.get("pointerX", 0), o = this.get("pointerY", 0), a = this.get("pointerBaseWidth", 15) / 2, T = 0, _ = 0, f = 0, c = (l - T) * (i - _) - (o - _) * (t - T), n = (l - f) * (0 - i) - (o - i) * (t - f);
        const s = this._display;
        if (s.moveTo(e, 0), c > 0 && n > 0) {
          let r = Math.round(u(l, e + a, t - a - e));
          o = u(o, -1 / 0, 0), s.lineTo(r - a, 0), s.lineTo(l, o), s.lineTo(r + a, 0);
        }
        if (s.lineTo(t - e, 0), s.arcTo(t, 0, t, e, e), c > 0 && n < 0) {
          let r = Math.round(u(o, e + a, i - a - e));
          l = u(l, t, 1 / 0), s.lineTo(t, e), s.lineTo(t, Math.max(r - a, e)), s.lineTo(l, o), s.lineTo(t, r + a);
        }
        if (s.lineTo(t, i - e), s.arcTo(t, i, t - e, i, e), c < 0 && n < 0) {
          let r = Math.round(u(l, e + a, t - a - e));
          o = u(o, i, 1 / 0), s.lineTo(t - e, i), s.lineTo(r + a, i), s.lineTo(l, o), s.lineTo(r - a, i);
        }
        if (s.lineTo(e, i), s.arcTo(0, i, 0, i - e, e), c < 0 && n > 0) {
          let r = Math.round(u(o, e + a, i - e - a));
          l = u(l, -1 / 0, 0), s.lineTo(0, i - e), s.lineTo(0, r + a), s.lineTo(l, o), s.lineTo(0, Math.max(r - a, e));
        }
        s.lineTo(0, e), s.arcTo(0, 0, e, 0, e), s.closePath();
      }
    }
  }
}
Object.defineProperty(D, "className", { enumerable: !0, configurable: !0, writable: !0, value: "PointedRectangle" }), Object.defineProperty(D, "classNames", { enumerable: !0, configurable: !0, writable: !0, value: M.classNames.concat([D.className]) });
class P extends N {
  constructor(t, i, e, l = []) {
    super(t, i, e, l), Object.defineProperty(this, "_fx", { enumerable: !0, configurable: !0, writable: !0, value: 0 }), Object.defineProperty(this, "_fy", { enumerable: !0, configurable: !0, writable: !0, value: 0 }), Object.defineProperty(this, "_label", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_fillDp", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_strokeDp", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_labelDp", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_w", { enumerable: !0, configurable: !0, writable: !0, value: 0 }), Object.defineProperty(this, "_h", { enumerable: !0, configurable: !0, writable: !0, value: 0 }), Object.defineProperty(this, "_keepHoverDp", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_htmlContentHovered", { enumerable: !0, configurable: !0, writable: !0, value: !1 });
  }
  _afterNew() {
    this._settings.themeTags = E(this._settings.themeTags, ["tooltip"]), super._afterNew(), this.set("background", D.new(this._root, { themeTags: ["tooltip", "background"] })), this._label = this.children.push(L.new(this._root, {})), this._disposers.push(this._label.events.on("boundschanged", () => {
      this._updateBackground();
    })), this._disposers.push(this.on("bounds", () => {
      this._updateBackground();
    })), this._updateTextColor(), this._root.tooltipContainer.children.push(this), this.hide(0), this._disposers.push(this.label.onPrivate("htmlElement", (t) => {
      t && (x(t, "pointerover", (i) => {
        this._htmlContentHovered = !0;
      }), x(t, "pointerout", (i) => {
        this._htmlContentHovered = !1;
      }));
    })), this._root._tooltips.push(this);
  }
  get label() {
    return this._label;
  }
  dispose() {
    super.dispose(), Y(this._root._tooltips, this);
  }
  _updateChildren() {
    super._updateChildren(), (this.isDirty("pointerOrientation") || this.isPrivateDirty("minWidth") || this.isPrivateDirty("minHeight")) && this.get("background")._markDirtyKey("width"), this.get("labelText") != null && this.label.set("text", this.get("labelText")), this.get("labelHTML") != null && this.label.set("html", this.get("labelHTML"));
  }
  _changed() {
    if (super._changed(), (this.isDirty("pointTo") || this.isDirty("pointerOrientation")) && this._updateBackground(), this.isDirty("tooltipTarget") && this.updateBackgroundColor(), this.isDirty("keepTargetHover"))
      if (this.get("keepTargetHover")) {
        const t = this.get("background");
        this._keepHoverDp = new W([t.events.on("pointerover", (i) => {
          let e = this.get("tooltipTarget");
          e && (e.parent && e.parent.getPrivate("tooltipTarget") == e && (e = e.parent), e.hover());
        }), t.events.on("pointerout", (i) => {
          let e = this.get("tooltipTarget");
          e && (e.parent && e.parent.getPrivate("tooltipTarget") == e && (e = e.parent), this._htmlContentHovered || e.unhover());
        })]), this.label.onPrivate("htmlElement", (i) => {
          this._keepHoverDp && i && this._keepHoverDp.disposers.push(x(i, "pointerleave", (e) => {
            const l = this.root._renderer.getEvent(e);
            t.events.dispatch("pointerout", { type: "pointerout", originalEvent: l.event, point: l.point, simulated: !1, target: t });
          }));
        });
      } else this._keepHoverDp && (this._keepHoverDp.dispose(), this._keepHoverDp = void 0);
  }
  _onShow() {
    super._onShow(), this.updateBackgroundColor();
  }
  updateBackgroundColor() {
    let t = this.get("tooltipTarget");
    const i = this.get("background");
    let e, l;
    t && i && (e = t.get("fill"), l = t.get("stroke"), e == null && (e = l), this.get("getFillFromSprite") && (this._fillDp && this._fillDp.dispose(), e != null && i.set("fill", e), this._fillDp = t.on("fill", (o) => {
      o != null && (i.set("fill", o), this._updateTextColor(o));
    }), this._disposers.push(this._fillDp)), this.get("getStrokeFromSprite") && (this._strokeDp && this._strokeDp.dispose(), e != null && i.set("stroke", e), this._strokeDp = t.on("fill", (o) => {
      o != null && i.set("stroke", o);
    }), this._disposers.push(this._strokeDp)), this.get("getLabelFillFromSprite") && (this._labelDp && this._labelDp.dispose(), e != null && this.label.set("fill", e), this._labelDp = t.on("fill", (o) => {
      o != null && this.label.set("fill", o);
    }), this._disposers.push(this._labelDp))), this._updateTextColor(e);
  }
  _updateTextColor(t) {
    this.get("autoTextColor") && (t == null && (t = this.get("background").get("fill")), t == null && (t = this._root.interfaceColors.get("background")), t instanceof j && this.label.set("fill", j.alternative(t, this._root.interfaceColors.get("alternativeText"), this._root.interfaceColors.get("text"))));
  }
  _setDataItem(t) {
    super._setDataItem(t), this.label._setDataItem(t);
  }
  _updateBackground() {
    super.updateBackground();
    const t = this._root.container;
    if (t) {
      let i = 0.5, e = 0.5, l = this.get("centerX");
      l instanceof B && (i = l.value);
      let o = this.get("centerY");
      o instanceof B && (e = o.value);
      let a = t.width(), T = t.height(), _ = this.parent, f = 0, c = 0;
      if (_) {
        f = _.x(), c = _.y();
        const d = _.get("layerMargin");
        d && (f += d.left || 0, c += d.top || 0, a += (d.left || 0) + (d.right || 0), T += (d.top || 0) + (d.bottom || 0));
      }
      const n = this.get("bounds", { left: -f, top: -c, right: a - f, bottom: T - c });
      this._updateBounds();
      let s = this.width(), r = this.height();
      s === 0 && (s = this._w), r === 0 && (r = this._h);
      let k = this.get("pointTo", { x: a / 2, y: T / 2 }), h = k.x, p = k.y, m = this.get("pointerOrientation"), b = this.get("background"), g = 0, v = 0, y = 0;
      b instanceof D && (g = b.get("pointerLength", 0), v = b.get("strokeWidth", 0) / 2, y = v, b.set("width", s), b.set("height", r));
      let C = 0, O = 0, H = n.right - n.left, S = n.bottom - n.top;
      m == "horizontal" || m == "left" || m == "right" ? (v = 0, m == "horizontal" ? h > n.left + H / 2 ? (h -= s * (1 - i) + g, y *= -1) : h += s * i + g : m == "left" ? h += s * (1 - i) + g : (h -= s * i + g, y *= -1)) : (y = 0, m == "vertical" ? p > n.top + r / 2 + g ? p -= r * (1 - e) + g : (p += r * e + g, v *= -1) : m == "down" ? p -= r * (1 - e) + g : (p += r * e + g, v *= -1)), h = u(h, n.left + s * i, n.left + H - s * (1 - i)) + y, p = u(p, n.top + r * e, n.top + S - r * (1 - e)) - v, C = k.x - h + s * i + y, O = k.y - p + r * e - v, this._fx = h, this._fy = p;
      const w = this.get("animationDuration", 0);
      if (w > 0 && this.get("visible") && this.get("opacity") > 0.1) {
        const d = this.get("animationEasing");
        this.animate({ key: "x", to: h, duration: w, easing: d }), this.animate({ key: "y", to: p, duration: w, easing: d });
      } else this.set("x", h), this.set("y", p);
      b instanceof D && (b.set("pointerX", C), b.set("pointerY", O)), s > 0 && (this._w = s), r > 0 && (this._h = r);
    }
  }
}
Object.defineProperty(P, "className", { enumerable: !0, configurable: !0, writable: !0, value: "Tooltip" }), Object.defineProperty(P, "classNames", { enumerable: !0, configurable: !0, writable: !0, value: N.classNames.concat([P.className]) });
export {
  P as u
};
//# sourceMappingURL=Tooltip-BX40nsZW.js.map
