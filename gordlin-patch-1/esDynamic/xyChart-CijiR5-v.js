import { aD as It, i as S, r as k, b as G, z as nt, a3 as te, h as ct, aE as ee, N as mt, W as gt, w, aF as Ct, C as v, aG as Ot, ak as F, q as Xt, c as ie, aH as j, aI as se, a6 as ae, aJ as oe, am as kt, al as Vt, ar as _t, aK as Gt, at as B, au as E, aL as q, K as ne, an as re, ap as ht, aa as Yt, F as dt, a as tt, ad as et, aA as Et, f as St, aM as Ft, aN as le, m as he, ay as Lt } from "./Theme-C0yiVzv3.js";
import { s as Rt } from "./ColorSet-CNbhzXMr.js";
import { l as Y } from "./DefaultTheme-BbdMMTFb.js";
import { R as Nt, D as zt, _ as Bt, g as ot, U as Wt, V as Ut, k as V, I as de } from "./Tick-0vmAB56H.js";
import { o as ce, n as jt } from "./Button-57zyy30H.js";
import { eP as it } from "./main-BEi6lHs4.js";
function Ht(P) {
  return typeof P == "object" && "length" in P ? P : Array.from(P);
}
function Zt(P) {
  this._context = P;
}
function $t(P) {
  return new Zt(P);
}
function qt(P) {
  return P[0];
}
function Kt(P) {
  return P[1];
}
function Jt(P, t) {
  var e = V(!0), i = null, s = $t, a = null, n = Ut(r);
  function r(o) {
    var l, c, h, d = (o = Ht(o)).length, g = !1;
    for (i == null && (a = s(h = n())), l = 0; l <= d; ++l) !(l < d && e(c = o[l], l, o)) === g && ((g = !g) ? a.lineStart() : a.lineEnd()), g && a.point(+P(c, l, o), +t(c, l, o));
    if (h) return a = null, h + "" || null;
  }
  return P = typeof P == "function" ? P : P === void 0 ? qt : V(P), t = typeof t == "function" ? t : t === void 0 ? Kt : V(t), r.x = function(o) {
    return arguments.length ? (P = typeof o == "function" ? o : V(+o), r) : P;
  }, r.y = function(o) {
    return arguments.length ? (t = typeof o == "function" ? o : V(+o), r) : t;
  }, r.defined = function(o) {
    return arguments.length ? (e = typeof o == "function" ? o : V(!!o), r) : e;
  }, r.curve = function(o) {
    return arguments.length ? (s = o, i != null && (a = s(i)), r) : s;
  }, r.context = function(o) {
    return arguments.length ? (o == null ? i = a = null : a = s(i = o), r) : i;
  }, r;
}
function ge(P, t, e) {
  var i = null, s = V(!0), a = null, n = $t, r = null, o = Ut(l);
  function l(h) {
    var d, g, p, m, u, _ = (h = Ht(h)).length, f = !1, x = new Array(_), b = new Array(_);
    for (a == null && (r = n(u = o())), d = 0; d <= _; ++d) {
      if (!(d < _ && s(m = h[d], d, h)) === f) if (f = !f) g = d, r.areaStart(), r.lineStart();
      else {
        for (r.lineEnd(), r.lineStart(), p = d - 1; p >= g; --p) r.point(x[p], b[p]);
        r.lineEnd(), r.areaEnd();
      }
      f && (x[d] = +P(m, d, h), b[d] = +t(m, d, h), r.point(i ? +i(m, d, h) : x[d], e ? +e(m, d, h) : b[d]));
    }
    if (u) return r = null, u + "" || null;
  }
  function c() {
    return Jt().defined(s).curve(n).context(a);
  }
  return P = typeof P == "function" ? P : P === void 0 ? qt : V(+P), t = typeof t == "function" ? t : V(t === void 0 ? 0 : +t), e = typeof e == "function" ? e : e === void 0 ? Kt : V(+e), l.x = function(h) {
    return arguments.length ? (P = typeof h == "function" ? h : V(+h), i = null, l) : P;
  }, l.x0 = function(h) {
    return arguments.length ? (P = typeof h == "function" ? h : V(+h), l) : P;
  }, l.x1 = function(h) {
    return arguments.length ? (i = h == null ? null : typeof h == "function" ? h : V(+h), l) : i;
  }, l.y = function(h) {
    return arguments.length ? (t = typeof h == "function" ? h : V(+h), e = null, l) : t;
  }, l.y0 = function(h) {
    return arguments.length ? (t = typeof h == "function" ? h : V(+h), l) : t;
  }, l.y1 = function(h) {
    return arguments.length ? (e = h == null ? null : typeof h == "function" ? h : V(+h), l) : e;
  }, l.lineX0 = l.lineY0 = function() {
    return c().x(P).y(t);
  }, l.lineY1 = function() {
    return c().x(P).y(e);
  }, l.lineX1 = function() {
    return c().x(i).y(t);
  }, l.defined = function(h) {
    return arguments.length ? (s = typeof h == "function" ? h : V(!!h), l) : s;
  }, l.curve = function(h) {
    return arguments.length ? (n = h, a != null && (r = n(a)), l) : n;
  }, l.context = function(h) {
    return arguments.length ? (h == null ? a = r = null : r = n(a = h), l) : a;
  }, l;
}
Zt.prototype = { areaStart: function() {
  this._line = 0;
}, areaEnd: function() {
  this._line = NaN;
}, lineStart: function() {
  this._point = 0;
}, lineEnd: function() {
  (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
}, point: function(P, t) {
  switch (P = +P, t = +t, this._point) {
    case 0:
      this._point = 1, this._line ? this._context.lineTo(P, t) : this._context.moveTo(P, t);
      break;
    case 1:
      this._point = 2;
    default:
      this._context.lineTo(P, t);
  }
} };
class ue extends re {
  setupDefaultRules() {
    super.setupDefaultRules();
    const t = this._root.interfaceColors, e = this._root.language, i = this.rule.bind(this);
    i("XYChart").setAll({ colors: Rt.new(this._root, {}), paddingLeft: 20, paddingRight: 20, paddingTop: 16, paddingBottom: 16, panX: !1, panY: !1, wheelStep: 0.25, arrangeTooltips: !0, pinchZoomX: !1, pinchZoomY: !1 }), i("XYSeries").setAll({ legendLabelText: "{name}" }), i("XYChart", ["scrollbar", "chart"]).setAll({ paddingBottom: 0, paddingLeft: 0, paddingTop: 0, paddingRight: 0, colors: Rt.new(this._root, { saturation: 0 }) });
    {
      const o = i("Graphics", ["scrollbar", "overlay"]);
      o.setAll({ fillOpacity: 0.5 }), Y(o, "fill", t, "background");
    }
    i("RoundedRectangle", ["xy", "scrollbar", "thumb"]).setAll({ cornerRadiusTR: 0, cornerRadiusTL: 0, cornerRadiusBR: 0, cornerRadiusBL: 0, fillOpacity: 0, focusable: !0 }), i("RoundedRectangle", ["xy", "scrollbar", "thumb"]).states.create("hover", { fillOpacity: 0.4 }), i("RoundedRectangle", ["xy", "scrollbar", "chart", "background"]).setAll({ cornerRadiusTL: 0, cornerRadiusBL: 0, cornerRadiusTR: 0, cornerRadiusBR: 0 }), i("RoundedRectangle", ["xy", "scrollbar", "chart", "background", "resize", "button"]).setAll({ cornerRadiusBL: 40, cornerRadiusBR: 40, cornerRadiusTL: 40, cornerRadiusTR: 40 }), i("AxisRendererX", ["xy", "chart", "scrollbar"]).setAll({ strokeOpacity: 0, inside: !0 }), i("AxisRendererY", ["xy", "chart", "scrollbar"]).setAll({ strokeOpacity: 0, inside: !0, minGridDistance: 5 }), i("AxisLabel", ["xy", "scrollbar", "x"]).setAll({ opacity: 0.5, centerY: k, minPosition: 0.01, maxPosition: 0.99, fontSize: "0.8em" }), i("AxisLabel", ["category"]).setAll({ text: "{category}", populateText: !0 }), i("AxisLabel", ["x"]).setAll({ centerY: 0 }), i("AxisLabel", ["x", "inside"]).setAll({ centerY: k }), i("AxisLabel", ["x", "inside", "opposite"]).setAll({ centerY: 0 }), i("AxisLabel", ["x", "opposite"]).setAll({ centerY: k }), i("AxisLabel", ["y"]).setAll({ centerX: k }), i("AxisLabel", ["y", "inside"]).setAll({ centerX: 0 }), i("AxisLabel", ["y", "inside", "opposite"]).setAll({ centerX: k }), i("AxisLabel", ["y", "opposite"]).setAll({ centerX: 0 }), i("AxisLabel", ["minor"]).setAll({ fontSize: "0.6em" }), i("AxisLabel", ["xy", "scrollbar", "y"]).setAll({ visible: !1 }), i("Grid", ["xy", "scrollbar", "y"]).setAll({ visible: !1 }), i("Grid", ["xy", "scrollbar", "x"]).setAll({ opacity: 0.5 }), i("XYCursor").setAll({ behavior: "none", layer: 30, exportable: !1, snapToSeriesBy: "xy", moveThreshold: 1 });
    {
      const o = i("Grid", ["cursor", "x"]);
      o.setAll({ strokeOpacity: 0.8, strokeDasharray: [2, 2], ariaLabel: e.translate("Use left and right arrows to move selection") }), Y(o, "stroke", t, "alternativeBackground");
    }
    {
      const o = i("Grid", ["cursor", "y"]);
      o.setAll({ strokeOpacity: 0.8, strokeDasharray: [2, 2], ariaLabel: e.translate("Use up and down arrows to move selection") }), Y(o, "stroke", t, "alternativeBackground");
    }
    {
      const o = i("Graphics", ["cursor", "selection"]);
      o.setAll({ fillOpacity: 0.15 }), Y(o, "fill", t, "alternativeBackground");
    }
    i("Axis").setAll({ start: 0, end: 1, minZoomCount: 1, maxZoomCount: 1 / 0, maxZoomFactor: 1e3, maxDeviation: 0.1, snapTooltip: !0, tooltipLocation: 0.5, panX: !0, panY: !0, zoomX: !0, zoomY: !0, fixAxisSize: !0 }), i("AxisLabel").setAll({ location: 0.5, multiLocation: 0, centerX: ht, centerY: ht, paddingTop: 3, paddingBottom: 3, paddingLeft: 5, paddingRight: 5 }), i("Container", ["axis", "header"]).setAll({ layer: 30 }), i("Rectangle", ["axis", "header", "background"]).setAll({ crisp: !0 });
    {
      const o = i("AxisRenderer");
      o.setAll({ crisp: !0, strokeOpacity: 0 }), Y(o, "stroke", t, "grid");
    }
    i("AxisRendererX").setAll({ minGridDistance: 120, opposite: !1, inversed: !1, cellStartLocation: 0, cellEndLocation: 1, width: k }), i("AxisRendererY").setAll({ minGridDistance: 40, opposite: !1, inversed: !1, cellStartLocation: 0, cellEndLocation: 1, height: k });
    {
      const o = i("Rectangle", ["axis", "thumb"]);
      o.setAll({ fillOpacity: 0 }), Y(o, "fill", t, "alternativeBackground"), o.states.create("hover", { fillOpacity: 0.1 });
    }
    i("Rectangle", ["axis", "thumb", "x"]).setAll({ cursorOverStyle: "ew-resize" }), i("Rectangle", ["axis", "thumb", "y"]).setAll({ cursorOverStyle: "ns-resize" });
    {
      const o = i("Grid");
      o.setAll({ location: 0, strokeOpacity: 0.15, crisp: !0 }), Y(o, "stroke", t, "grid");
    }
    {
      const o = i("Grid", ["minor"]);
      o.setAll({ location: 0, strokeOpacity: 0.07, crisp: !0 }), Y(o, "stroke", t, "grid");
    }
    i("Grid", ["base"]).setAll({ strokeOpacity: 0.3 });
    {
      const o = i("Graphics", ["axis", "fill"]);
      o.setAll({ visible: !1, isMeasured: !1, position: "absolute", fillOpacity: 0.05 }), Y(o, "fill", t, "alternativeBackground");
    }
    i("Graphics", ["axis", "fill", "range"]).setAll({ isMeasured: !0 }), i("Graphics", ["series", "fill", "range"]).setAll({ visible: !1, isMeasured: !0 }), i("Grid", ["series", "range"]).setAll({ visible: !1 }), i("AxisTick", ["series", "range"]).setAll({ visible: !1 }), i("AxisLabel", ["series", "range"]).setAll({ visible: !1 });
    {
      const o = i("AxisTick");
      o.setAll({ location: 0.5, multiLocation: 0, strokeOpacity: 1, isMeasured: !1, position: "absolute", visible: !1 }), Y(o, "stroke", t, "grid");
    }
    i("CategoryAxis").setAll({ startLocation: 0, endLocation: 1, fillRule: (o, l) => {
      const c = o.get("axisFill");
      c && (v(l) && l % 2 != 0 ? c.setPrivate("visible", !1) : c.setPrivate("visible", !0));
    } });
    const s = [{ timeUnit: "millisecond", count: 1 }, { timeUnit: "millisecond", count: 5 }, { timeUnit: "millisecond", count: 10 }, { timeUnit: "millisecond", count: 50 }, { timeUnit: "millisecond", count: 100 }, { timeUnit: "millisecond", count: 500 }, { timeUnit: "second", count: 1 }, { timeUnit: "second", count: 5 }, { timeUnit: "second", count: 10 }, { timeUnit: "second", count: 30 }, { timeUnit: "minute", count: 1 }, { timeUnit: "minute", count: 5 }, { timeUnit: "minute", count: 10 }, { timeUnit: "minute", count: 15 }, { timeUnit: "minute", count: 30 }, { timeUnit: "hour", count: 1 }, { timeUnit: "hour", count: 3 }, { timeUnit: "hour", count: 6 }, { timeUnit: "hour", count: 12 }, { timeUnit: "day", count: 1 }, { timeUnit: "day", count: 2 }, { timeUnit: "day", count: 3 }, { timeUnit: "day", count: 4 }, { timeUnit: "day", count: 5 }, { timeUnit: "week", count: 1 }, { timeUnit: "month", count: 1 }, { timeUnit: "month", count: 2 }, { timeUnit: "month", count: 3 }, { timeUnit: "month", count: 6 }, { timeUnit: "year", count: 1 }, { timeUnit: "year", count: 2 }, { timeUnit: "year", count: 5 }, { timeUnit: "year", count: 10 }, { timeUnit: "year", count: 50 }, { timeUnit: "year", count: 100 }, { timeUnit: "year", count: 200 }, { timeUnit: "year", count: 500 }, { timeUnit: "year", count: 1e3 }, { timeUnit: "year", count: 2e3 }, { timeUnit: "year", count: 5e3 }, { timeUnit: "year", count: 1e4 }, { timeUnit: "year", count: 1e5 }], a = { millisecond: e.translate("_date_millisecond"), second: e.translate("_date_second"), minute: e.translate("_date_minute"), hour: e.translate("_date_hour"), day: e.translate("_date_day"), week: e.translate("_date_day"), month: e.translate("_date_month"), year: e.translate("_date_year") }, n = { millisecond: e.translate("_date_millisecond"), second: e.translate("_date_second"), minute: e.translate("_date_minute"), hour: e.translate("_date_day"), day: e.translate("_date_day"), week: e.translate("_date_day"), month: e.translate("_date_month") + " " + e.translate("_date_year"), year: e.translate("_date_year") }, r = { millisecond: e.translate("_date_millisecond_full"), second: e.translate("_date_second_full"), minute: e.translate("_date_minute_full"), hour: e.translate("_date_hour_full"), day: e.translate("_date_day_full"), week: e.translate("_date_week_full"), month: e.translate("_date_month_full"), year: e.translate("_date_year") };
    i("CategoryDateAxis").setAll({ markUnitChange: !0, gridIntervals: Yt(s), dateFormats: dt(a), periodChangeDateFormats: dt(n) }), i("DateAxis").setAll({ maxZoomFactor: null, strictMinMax: !0, startLocation: 0, endLocation: 1, markUnitChange: !0, groupData: !1, groupCount: 500, gridIntervals: Yt(s), dateFormats: dt(a), periodChangeDateFormats: dt(n), tooltipDateFormats: r, groupIntervals: [{ timeUnit: "millisecond", count: 1 }, { timeUnit: "millisecond", count: 10 }, { timeUnit: "millisecond", count: 100 }, { timeUnit: "second", count: 1 }, { timeUnit: "second", count: 10 }, { timeUnit: "minute", count: 1 }, { timeUnit: "minute", count: 10 }, { timeUnit: "hour", count: 1 }, { timeUnit: "day", count: 1 }, { timeUnit: "week", count: 1 }, { timeUnit: "month", count: 1 }, { timeUnit: "year", count: 1 }], fillRule: (o) => {
      const l = o.get("axisFill");
      if (l) {
        const c = o.component, h = o.get("value"), d = o.get("endValue"), g = c.intervalDuration(), p = c.getPrivate("baseInterval"), m = c.getPrivate("gridInterval", p);
        let u = c.getPrivate("min", 0);
        if (u = de(new Date(u), m.timeUnit, m.count, this._root.locale.firstDayOfWeek, this._root.utc, void 0, this._root.timezone).getTime(), h != null && d != null) {
          const _ = Math.round(Math.round((h - u) / g)) / 2;
          _ == Math.round(_) ? l.setPrivate("visible", !0) : l.setPrivate("visible", !1);
        }
      }
    } }), i("GaplessDateAxis").setAll({ fillRule: (o) => {
      const l = o.get("axisFill");
      if (l) {
        const c = o.get("index");
        let h = !1;
        v(c) && c % 2 != 0 || (h = !0), l.setPrivate("visible", h);
      }
    } }), i("ValueAxis").setAll({ baseValue: 0, logarithmic: !1, strictMinMax: !1, autoZoom: !0, fillRule: (o) => {
      const l = o.get("axisFill");
      if (l) {
        const c = o.component, h = o.get("value"), d = c.getPrivate("step");
        v(h) && v(d) && (j(h / d / 2, 5) == Math.round(h / d / 2) ? l.setPrivate("visible", !1) : l.setPrivate("visible", !0));
      }
    } }), i("DurationAxis").setAll({ baseUnit: "second" }), i("XYSeries").setAll({ maskBullets: !0, stackToNegative: !0, locationX: 0.5, locationY: 0.5, snapTooltip: !1, openValueXGrouped: "open", openValueYGrouped: "open", valueXGrouped: "close", valueYGrouped: "close", seriesTooltipTarget: "series" }), i("BaseColumnSeries").setAll({ adjustBulletPosition: !0 }), i("ColumnSeries").setAll({ clustered: !0 }), i("RoundedRectangle", ["series", "column"]).setAll({ position: "absolute", isMeasured: !1, width: tt(70), height: tt(70), strokeWidth: 1, strokeOpacity: 1, cornerRadiusBL: 0, cornerRadiusTL: 0, cornerRadiusBR: 0, cornerRadiusTR: 0, fillOpacity: 1, role: "figure" }), i("LineSeries").setAll({ connect: !0, autoGapCount: 1.1, stackToNegative: !1 }), i("Graphics", ["series", "stroke"]).setAll({ position: "absolute", strokeWidth: 1, strokeOpacity: 1, isMeasured: !1 }), i("Graphics", ["series", "fill"]).setAll({ visible: !1, fillOpacity: 0, position: "absolute", strokeWidth: 0, strokeOpacity: 0, isMeasured: !1 }), i("Graphics", ["line", "series", "legend", "marker", "stroke"]).setAll({ draw: (o, l) => {
      const c = l.parent;
      if (c) {
        const h = c.height(), d = c.width();
        o.moveTo(0, h / 2), o.lineTo(d, h / 2);
      }
    } });
    {
      const o = i("Graphics", ["line", "series", "legend", "marker", "stroke"]).states.create("disabled", {});
      Y(o, "stroke", t, "disabled");
    }
    i("Graphics", ["line", "series", "legend", "marker", "fill"]).setAll({ draw: (o, l) => {
      const c = l.parent;
      if (c) {
        const h = c.height(), d = c.width();
        o.moveTo(0, 0), o.lineTo(d, 0), o.lineTo(d, h), o.lineTo(0, h), o.lineTo(0, 0);
      }
    } });
    {
      const o = i("Graphics", ["line", "series", "legend", "marker", "fill"]).states.create("disabled", {});
      Y(o, "stroke", t, "disabled");
    }
    i("SmoothedXYLineSeries").setAll({ tension: 0.5 }), i("SmoothedXLineSeries").setAll({ tension: 0.5 }), i("SmoothedYLineSeries").setAll({ tension: 0.5 }), i("Candlestick").setAll({ position: "absolute", isMeasured: !1, width: tt(50), height: tt(50), strokeWidth: 1, strokeOpacity: 1, cornerRadiusBL: 0, cornerRadiusTL: 0, cornerRadiusBR: 0, cornerRadiusTR: 0, fillOpacity: 1, role: "figure" }), i("OHLC").setAll({ width: tt(80), height: tt(80) }), i("CandlestickSeries").setAll({ lowValueXGrouped: "low", lowValueYGrouped: "low", highValueXGrouped: "high", highValueYGrouped: "high", openValueXGrouped: "open", openValueYGrouped: "open", valueXGrouped: "close", valueYGrouped: "close" });
    {
      const o = i("Rectangle", ["column", "autocolor"]).states.create("riseFromOpen", {});
      Y(o, "fill", t, "positive"), Y(o, "stroke", t, "positive");
    }
    {
      const o = i("Rectangle", ["column", "autocolor"]).states.create("dropFromOpen", {});
      Y(o, "fill", t, "negative"), Y(o, "stroke", t, "negative");
    }
    i("Rectangle", ["column", "autocolor", "pro"]).states.create("riseFromOpen", { fillOpacity: 0 }), i("Rectangle", ["column", "autocolor", "pro"]).states.create("dropFromOpen", { fillOpacity: 1 });
    {
      const o = i("Rectangle", ["column", "autocolor", "pro"]).states.create("riseFromPrevious", {});
      Y(o, "fill", t, "positive"), Y(o, "stroke", t, "positive");
    }
    {
      const o = i("Rectangle", ["column", "autocolor", "pro"]).states.create("dropFromPrevious", {});
      Y(o, "fill", t, "negative"), Y(o, "stroke", t, "negative");
    }
    i("RoundedRectangle", ["rangegrip"]).setAll({ strokeOpacity: 0, fillOpacity: 0, strokeWidth: 1, width: 12, height: 12 });
    {
      const o = i("Graphics", ["rangegrip", "button", "icon"]);
      o.setAll({ interactive: !1, crisp: !0, strokeOpacity: 0.5, draw: (l) => {
        l.moveTo(0, 0.5), l.lineTo(0, 12.5), l.moveTo(2, 0.5), l.lineTo(2, 12.5), l.moveTo(4, 0.5), l.lineTo(4, 12.5);
      } }), Y(o, "stroke", t, "secondaryButtonText");
    }
    i("Button", ["rangegrip"]).setAll({ draggable: !0, paddingTop: 0, paddingBottom: 0 }), i("Button", ["rangegrip", "vertical"]).setAll({ rotation: 90, cursorOverStyle: "ns-resize", centerX: ht }), i("Button", ["rangegrip", "horizontal"]).setAll({ cursorOverStyle: "ew-resize", centerX: ht }), i("Button", ["rangegrip", "vertical", "left"]).setAll({ centerY: k }), i("Button", ["rangegrip", "vertical", "right"]).setAll({ centerY: 0 }), i("Button", ["rangegrip", "horizontal", "top"]).setAll({ centerY: 0 }), i("Button", ["rangegrip", "horizontal", "bottom"]).setAll({ centerY: k });
  }
}
class ft extends Nt {
  constructor() {
    super(...arguments), Object.defineProperty(this, "xAxes", { enumerable: !0, configurable: !0, writable: !0, value: new It() }), Object.defineProperty(this, "yAxes", { enumerable: !0, configurable: !0, writable: !0, value: new It() }), Object.defineProperty(this, "topAxesContainer", { enumerable: !0, configurable: !0, writable: !0, value: this.chartContainer.children.push(S.new(this._root, { width: k, layout: this._root.verticalLayout })) }), Object.defineProperty(this, "yAxesAndPlotContainer", { enumerable: !0, configurable: !0, writable: !0, value: this.chartContainer.children.push(S.new(this._root, { width: k, height: k, layout: this._root.horizontalLayout })) }), Object.defineProperty(this, "bottomAxesContainer", { enumerable: !0, configurable: !0, writable: !0, value: this.chartContainer.children.push(S.new(this._root, { width: k, layout: this._root.verticalLayout })) }), Object.defineProperty(this, "leftAxesContainer", { enumerable: !0, configurable: !0, writable: !0, value: this.yAxesAndPlotContainer.children.push(S.new(this._root, { height: k, layout: this._root.horizontalLayout })) }), Object.defineProperty(this, "plotsContainer", { enumerable: !0, configurable: !0, writable: !0, value: this.yAxesAndPlotContainer.children.push(S.new(this._root, { width: k, height: k, maskContent: !1 })) }), Object.defineProperty(this, "plotContainer", { enumerable: !0, configurable: !0, writable: !0, value: this.plotsContainer.children.push(S.new(this._root, { width: k, height: k })) }), Object.defineProperty(this, "topPlotContainer", { enumerable: !0, configurable: !0, writable: !0, value: this.plotsContainer.children.push(S.new(this._root, { width: k, height: k })) }), Object.defineProperty(this, "gridContainer", { enumerable: !0, configurable: !0, writable: !0, value: this.plotContainer.children.push(S.new(this._root, { width: k, height: k, isMeasured: !1 })) }), Object.defineProperty(this, "topGridContainer", { enumerable: !0, configurable: !0, writable: !0, value: S.new(this._root, { width: k, height: k, isMeasured: !1 }) }), Object.defineProperty(this, "rightAxesContainer", { enumerable: !0, configurable: !0, writable: !0, value: this.yAxesAndPlotContainer.children.push(S.new(this._root, { height: k, layout: this._root.horizontalLayout })) }), Object.defineProperty(this, "axisHeadersContainer", { enumerable: !0, configurable: !0, writable: !0, value: this.plotContainer.children.push(S.new(this._root, {})) }), Object.defineProperty(this, "zoomOutButton", { enumerable: !0, configurable: !0, writable: !0, value: this.topPlotContainer.children.push(ce.new(this._root, { themeTags: ["zoom"], icon: G.new(this._root, { themeTags: ["button", "icon"] }) })) }), Object.defineProperty(this, "_movePoint", { enumerable: !0, configurable: !0, writable: !0, value: { x: 0, y: 0 } }), Object.defineProperty(this, "_wheelDp", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_otherCharts", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_movePoints", { enumerable: !0, configurable: !0, writable: !0, value: {} }), Object.defineProperty(this, "_downStartX", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_downEndX", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_downStartY", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_downEndY", { enumerable: !0, configurable: !0, writable: !0, value: void 0 });
  }
  _afterNew() {
    this._defaultThemes.push(ue.new(this._root)), super._afterNew(), this._disposers.push(this.xAxes), this._disposers.push(this.yAxes);
    const t = this._root;
    let e = this._root.verticalLayout;
    const i = this.zoomOutButton;
    i.events.on("click", () => {
      this.zoomOut();
    }), i.hide(0), i.states.lookup("default").set("opacity", 1), this.chartContainer.set("layout", e);
    const s = this.plotContainer;
    s.children.push(this.seriesContainer), this._disposers.push(this._processAxis(this.xAxes, this.bottomAxesContainer)), this._disposers.push(this._processAxis(this.yAxes, this.leftAxesContainer)), s.children.push(this.topGridContainer), s.children.push(this.bulletsContainer), s.set("interactive", !0), s.set("interactiveChildren", !1), s.set("background", nt.new(t, { themeTags: ["xy", "background"], fill: te.fromHex(0), fillOpacity: 0 })), this._disposers.push(s.events.on("pointerdown", (a) => {
      this._handlePlotDown(a);
    })), this._disposers.push(s.events.on("globalpointerup", (a) => {
      this._handlePlotUp(a);
    })), this._disposers.push(s.events.on("globalpointermove", (a) => {
      this._handlePlotMove(a);
    })), this._maskGrid(), this._setUpTouch();
  }
  _beforeChanged() {
    super._beforeChanged(), (this.isDirty("pinchZoomX") || this.isDirty("pinchZoomY") || this.get("panX") || this.get("panY")) && this._setUpTouch();
  }
  _setUpTouch() {
    this.plotContainer._display.cancelTouch || (this.plotContainer._display.cancelTouch = !!(this.get("pinchZoomX") || this.get("pinchZoomY") || this.get("panX") || this.get("panY")));
  }
  _maskGrid() {
    this.gridContainer.set("maskContent", !0), this.topGridContainer.set("maskContent", !0);
  }
  _removeSeries(t) {
    t._unstack(), t._posXDp && t._posXDp.dispose(), t._posYDp && t._posYDp.dispose(), t.set("baseAxis", void 0);
    const e = t.get("xAxis");
    e && (ct(e.series, t), e.markDirtyExtremes());
    const i = t.get("yAxis");
    i && (ct(i.series, t), i.markDirtyExtremes());
    const s = this.get("cursor");
    if (s) {
      const a = s.get("snapToSeries");
      a && ct(a, t);
    }
    super._removeSeries(t);
  }
  handleWheel(t) {
    const e = this.get("wheelX"), i = this.get("wheelY"), s = this.plotContainer, a = t.originalEvent;
    if (!ee(a, this)) return;
    a.preventDefault();
    const n = s.toLocal(t.point), r = this.get("wheelStep", 0.2), o = a.deltaY / 100, l = a.deltaX / 100, c = this.get("wheelZoomPositionX"), h = this.get("wheelZoomPositionY");
    e !== "zoomX" && e !== "zoomXY" || l == 0 || this.xAxes.each((d) => {
      if (d.get("zoomX")) {
        let g = d.get("start"), p = d.get("end"), m = d.fixPosition(n.x / s.width());
        c != null && (m = c);
        let u = g - r * (p - g) * l * m, _ = p + r * (p - g) * l * (1 - m);
        1 / (_ - u) < d.getPrivate("maxZoomFactor", 1 / 0) / d.get("minZoomCount", 1) && this._handleWheelAnimation(d.zoom(u, _));
      }
    }), i !== "zoomX" && i !== "zoomXY" || o == 0 || this.xAxes.each((d) => {
      if (d.get("zoomX")) {
        let g = d.get("start"), p = d.get("end"), m = d.fixPosition(n.x / s.width());
        c != null && (m = c);
        let u = g - r * (p - g) * o * m, _ = p + r * (p - g) * o * (1 - m);
        1 / (_ - u) < d.getPrivate("maxZoomFactor", 1 / 0) / d.get("minZoomCount", 1) && this._handleWheelAnimation(d.zoom(u, _));
      }
    }), e !== "zoomY" && e !== "zoomXY" || l == 0 || this.yAxes.each((d) => {
      if (d.get("zoomY")) {
        let g = d.get("start"), p = d.get("end"), m = d.fixPosition(n.y / s.height());
        h != null && (m = h);
        let u = g - r * (p - g) * l * m, _ = p + r * (p - g) * l * (1 - m);
        1 / (_ - u) < d.getPrivate("maxZoomFactor", 1 / 0) / d.get("minZoomCount", 1) && this._handleWheelAnimation(d.zoom(u, _));
      }
    }), i !== "zoomY" && i !== "zoomXY" || o == 0 || this.yAxes.each((d) => {
      if (d.get("zoomY")) {
        let g = d.get("start"), p = d.get("end"), m = d.fixPosition(n.y / s.height());
        h != null && (m = h);
        let u = g - r * (p - g) * o * m, _ = p + r * (p - g) * o * (1 - m);
        1 / (_ - u) < d.getPrivate("maxZoomFactor", 1 / 0) / d.get("minZoomCount", 1) && this._handleWheelAnimation(d.zoom(u, _));
      }
    }), e !== "panX" && e !== "panXY" || l == 0 || this.xAxes.each((d) => {
      if (d.get("panX")) {
        let g = d.get("start"), p = d.get("end"), m = this._getWheelSign(d) * r * (p - g) * l, u = g + m, _ = p + m, f = this._fixWheel(u, _);
        u = f[0], _ = f[1], this._handleWheelAnimation(d.zoom(u, _));
      }
    }), i !== "panX" && i !== "panXY" || o == 0 || this.xAxes.each((d) => {
      if (d.get("panX")) {
        let g = d.get("start"), p = d.get("end"), m = this._getWheelSign(d) * r * (p - g) * o, u = g + m, _ = p + m, f = this._fixWheel(u, _);
        u = f[0], _ = f[1], this._handleWheelAnimation(d.zoom(u, _));
      }
    }), e !== "panY" && e !== "panXY" || l == 0 || this.yAxes.each((d) => {
      if (d.get("panY")) {
        let g = d.get("start"), p = d.get("end"), m = this._getWheelSign(d) * r * (p - g) * l, u = g + m, _ = p + m, f = this._fixWheel(u, _);
        u = f[0], _ = f[1], this._handleWheelAnimation(d.zoom(u, _));
      }
    }), i !== "panY" && i !== "panXY" || o == 0 || this.yAxes.each((d) => {
      if (d.get("panY")) {
        let g = d.get("start"), p = d.get("end"), m = this._getWheelSign(d) * r * (p - g) * o, u = g - m, _ = p - m, f = this._fixWheel(u, _);
        u = f[0], _ = f[1], this._handleWheelAnimation(d.zoom(u, _));
      }
    });
  }
  _handleSetWheel() {
    const t = this.get("wheelX"), e = this.get("wheelY"), i = this.plotContainer;
    t !== "none" || e !== "none" ? (this._wheelDp = i.events.on("wheel", (s) => {
      const a = s.originalEvent;
      (t !== "none" && Math.abs(a.deltaX) != 0 || e !== "none" && Math.abs(a.deltaY) != 0) && this.handleWheel(s);
    }), this._disposers.push(this._wheelDp)) : this._wheelDp && this._wheelDp.dispose();
  }
  _getWheelSign(t) {
    let e = 1;
    return t.get("renderer").get("inversed") && (e = -1), e;
  }
  _fixWheel(t, e) {
    const i = e - t;
    return t < 0 && (e = (t = 0) + i), e > 1 && (t = (e = 1) - i), [t, e];
  }
  _handlePlotDown(t) {
    const e = t.originalEvent;
    if (e.button == 2) return;
    const i = this.plotContainer;
    let s = i.toLocal(t.point);
    if ((this.get("pinchZoomX") || this.get("pinchZoomY")) && e.pointerId && mt(i._downPoints).length > 0) {
      const a = this.xAxes.getIndex(0), n = this.yAxes.getIndex(0);
      a && (this._downStartX = a.get("start", 0), this._downEndX = a.get("end", 1)), n && (this._downStartY = n.get("start", 0), this._downEndY = n.get("end", 1));
    }
    if ((this.get("panX") || this.get("panY")) && s.x >= 0 && s.y >= 0 && s.x <= i.width() && s.y <= this.height()) {
      this._downPoint = { x: e.clientX, y: e.clientY };
      const a = this.get("panX"), n = this.get("panY");
      a && this.xAxes.each((o) => {
        o._panStart = o.get("start"), o._panEnd = o.get("end");
      }), n && this.yAxes.each((o) => {
        o._panStart = o.get("start"), o._panEnd = o.get("end");
      });
      const r = "panstarted";
      this.events.isEnabled(r) && this.events.dispatch(r, { type: r, target: this, originalEvent: t.originalEvent });
    }
  }
  _handleWheelAnimation(t) {
    t ? t.events.on("stopped", () => {
      this._dispatchWheelAnimation();
    }) : this._dispatchWheelAnimation();
  }
  _dispatchWheelAnimation() {
    const t = "wheelended";
    this.events.isEnabled(t) && this.events.dispatch(t, { type: t, target: this });
  }
  _handlePlotUp(t) {
    const e = this._downPoint;
    if (e && (this.get("panX") || this.get("panY"))) {
      let i = this.plotContainer.toLocal(t.point);
      if (i.x == e.x && i.y == e.y) {
        const a = "pancancelled";
        this.events.isEnabled(a) && this.events.dispatch(a, { type: a, target: this, originalEvent: t.originalEvent });
      }
      const s = "panended";
      this.events.isEnabled(s) && this.events.dispatch(s, { type: s, target: this, originalEvent: t.originalEvent });
    }
    this._downPoint = void 0, this.xAxes.each((i) => {
      i._isPanning = !1;
    }), this.yAxes.each((i) => {
      i._isPanning = !1;
    });
  }
  _handlePlotMove(t) {
    const e = this.plotContainer;
    if (this.get("pinchZoomX") || this.get("pinchZoomY")) {
      const s = t.originalEvent.pointerId;
      if (s && (this._movePoints[s] = t.point, mt(e._downPoints).length > 1)) return void this._handlePinch();
    }
    let i = this._downPoint;
    if (i) {
      i = e.toLocal(this._root.documentPointToRoot(i));
      let s = e.toLocal(t.point);
      const a = this.get("panX"), n = this.get("panY");
      if (a) {
        let r = this.get("scrollbarX");
        r && r.events.disableType("rangechanged"), this.xAxes.each((o) => {
          if (o.get("panX")) {
            o._isPanning = !0;
            let l = o._panStart, c = o._panEnd, h = (c - l) * (i.x - s.x) / e.width();
            o.get("renderer").get("inversed") && (h *= -1);
            let d = l + h, g = c + h;
            g - d < 1 + 2 * o.get("maxDeviation", 1) && (o.set("start", d), o.set("end", g));
          }
        }), r && r.events.enableType("rangechanged");
      }
      if (n) {
        let r = this.get("scrollbarY");
        r && r.events.disableType("rangechanged"), this.yAxes.each((o) => {
          if (o.get("panY")) {
            o._isPanning = !0;
            let l = o._panStart, c = o._panEnd, h = (c - l) * (i.y - s.y) / e.height();
            o.get("renderer").get("inversed") && (h *= -1);
            let d = l - h, g = c - h;
            g - d < 1 + 2 * o.get("maxDeviation", 1) && (o.set("start", d), o.set("end", g));
          }
        }), r && r.events.enableType("rangechanged");
      }
    }
  }
  _handlePinch() {
    const t = this.plotContainer;
    let e = 0, i = [], s = [];
    if (gt(t._downPoints, (a, n) => {
      i[e] = n;
      let r = this._movePoints[a];
      r && (s[e] = r), e++;
    }), i.length > 1 && s.length > 1) {
      const a = t.width(), n = t.height();
      let r = i[0], o = i[1], l = s[0], c = s[1];
      if (r && o && l && c) {
        if (l = t.toLocal(l), c = t.toLocal(c), r = t.toLocal(r), o = t.toLocal(o), this.get("pinchZoomX")) {
          const h = this._downStartX, d = this._downEndX;
          if (h != null && d != null) {
            r.x > o.x && ([r, o] = [o, r], [l, c] = [c, l]);
            let g = h + r.x / a * (d - h), p = h + o.x / a * (d - h), m = h + l.x / a * (d - h), u = h + c.x / a * (d - h), _ = Math.max(1e-3, p - g) / Math.max(1e-3, u - m), f = h * _ + g - m * _, x = d * _ + p - u * _;
            this.xAxes.each((b) => {
              let y = b.fixPosition(f), A = b.fixPosition(x);
              b.zoom(y, A, 0);
            });
          }
        }
        if (this.get("pinchZoomY")) {
          const h = this._downStartY, d = this._downEndY;
          if (h != null && d != null) {
            r.y < o.y && ([r, o] = [o, r], [l, c] = [c, l]);
            let g = h + (1 - r.y / n) * (d - h), p = h + (1 - o.y / n) * (d - h), m = h + (1 - l.y / n) * (d - h), u = h + (1 - c.y / n) * (d - h), _ = Math.max(1e-3, p - g) / Math.max(1e-3, u - m), f = h * _ + g - m * _, x = d * _ + p - u * _;
            this.yAxes.each((b) => {
              let y = b.fixPosition(f), A = b.fixPosition(x);
              b.zoom(y, A, 0);
            });
          }
        }
      }
    }
  }
  _handleCursorPosition() {
    const t = this.get("cursor");
    if (t) {
      const e = t.getPrivate("point");
      let i = t.get("snapToSeries");
      if (t._downPoint && (i = void 0), i && e) {
        const s = t.get("snapToSeriesBy"), a = [];
        w(i, (o) => {
          if (!o.isHidden() && !o.isHiding()) if (s != "x!" && s != "y!") {
            const l = o.startIndex(), c = o.endIndex();
            for (let h = l; h < c; h++) {
              const d = o.dataItems[h];
              d && !d.isHidden() && a.push(d);
            }
          } else {
            const l = o.get("tooltipDataItem");
            l && a.push(l);
          }
        });
        let n, r = 1 / 0;
        if (w(a, (o) => {
          const l = o.get("point");
          if (l) {
            let c = 0;
            c = s == "x" || s == "x!" ? Math.abs(e.x - l.x) : s == "y" || s == "y!" ? Math.abs(e.y - l.y) : Math.hypot(e.x - l.x, e.y - l.y), c < r && (r = c, n = o);
          }
        }), w(i, (o) => {
          const l = o.get("tooltip");
          l && l._setDataItem(void 0);
        }), n) {
          let o = n.component;
          o.showDataItemTooltip(n);
          const l = n.get("point");
          l && t.handleMove(o.toGlobal({ x: l.x - o.x(), y: l.y - o.y() }), !0);
        }
      }
    }
  }
  _updateCursor() {
    let t = this.get("cursor");
    t && t.updateCursor();
  }
  _addCursor(t) {
    this.plotContainer.children.push(t);
  }
  _prepareChildren() {
    if (super._prepareChildren(), this.series.each((t) => {
      this._colorize(t);
    }), (this.isDirty("wheelX") || this.isDirty("wheelY")) && this._handleSetWheel(), this.isDirty("cursor")) {
      const t = this._prevSettings.cursor, e = this.get("cursor");
      e !== t && (this._disposeProperty("cursor"), t && t.dispose(), e && (e._setChart(this), this._addCursor(e), this._pushPropertyDisposer("cursor", e.events.on("selectended", () => {
        this._handleCursorSelectEnd();
      }))), this._prevSettings.cursor = e);
    }
    if (this.isDirty("scrollbarX")) {
      const t = this._prevSettings.scrollbarX, e = this.get("scrollbarX");
      e !== t && (this._disposeProperty("scrollbarX"), t && t.dispose(), e && (e.parent || this.topAxesContainer.children.push(e), this._pushPropertyDisposer("scrollbarX", e.events.on("rangechanged", (i) => {
        this._handleScrollbar(this.xAxes, i.start, i.end, i.grip);
      })), e.setPrivate("positionTextFunction", (i) => {
        const s = this.xAxes.getIndex(0);
        return s && s.getTooltipText(i, !1) || "";
      })), this._prevSettings.scrollbarX = e);
    }
    if (this.isDirty("scrollbarY")) {
      const t = this._prevSettings.scrollbarY, e = this.get("scrollbarY");
      e !== t && (this._disposeProperty("scrollbarY"), t && t.dispose(), e && (e.parent || this.rightAxesContainer.children.push(e), this._pushPropertyDisposer("scrollbarY", e.events.on("rangechanged", (i) => {
        this._handleScrollbar(this.yAxes, i.start, i.end, i.grip);
      })), e.setPrivate("positionTextFunction", (i) => {
        const s = this.yAxes.getIndex(0);
        return s && s.getTooltipText(i, !1) || "";
      })), this._prevSettings.scrollbarY = e);
    }
    this._handleZoomOut();
  }
  _processSeries(t) {
    super._processSeries(t);
    const e = t.get("xAxis"), i = t.get("yAxis");
    Ct(e.series, t), Ct(i.series, t), t._posXDp = t.addDisposer(e.events.on("positionchanged", () => {
      t._fixPosition();
    })), t._posXDp = t.addDisposer(i.events.on("positionchanged", () => {
      t._fixPosition();
    })), t.get("baseAxis") || (i.isType("CategoryAxis") || i.isType("DateAxis") ? t.set("baseAxis", i) : t.set("baseAxis", e)), t.get("stacked") && (t._markDirtyKey("stacked"), w(t.dataItems, (s) => {
      s.set("stackToItemY", void 0), s.set("stackToItemX", void 0);
    })), t._markDirtyAxes(), i.markDirtyExtremes(), e.markDirtyExtremes(), e._seriesAdded = !0, i._seriesAdded = !0, this._colorize(t);
  }
  _colorize(t) {
    const e = this.get("colors");
    if (e && t.get("fill") == null) {
      const i = e.next();
      t._setSoft("stroke", i), t._setSoft("fill", i);
    }
  }
  _handleCursorSelectEnd() {
    const t = this.get("cursor"), e = t.get("behavior"), i = t.getPrivate("downPositionX", 0), s = t.getPrivate("downPositionY", 0), a = Math.min(1, Math.max(0, t.getPrivate("positionX", 0.5))), n = Math.min(1, Math.max(0, t.getPrivate("positionY", 0.5)));
    this.xAxes.each((r) => {
      if (e === "zoomX" || e === "zoomXY") {
        let o = r.toAxisPosition(i), l = r.toAxisPosition(a);
        r.zoom(o, l);
      }
      r.setPrivate("updateScrollbar", !0);
    }), this.yAxes.each((r) => {
      if (e === "zoomY" || e === "zoomXY") {
        let o = r.toAxisPosition(s), l = r.toAxisPosition(n);
        r.zoom(o, l);
      }
      r.setPrivate("updateScrollbar", !0);
    });
  }
  _handleScrollbar(t, e, i, s) {
    t.each((a) => {
      let n = a.fixPosition(e), r = a.fixPosition(i), o = a.zoom(n, r, void 0, s);
      const l = "updateScrollbar";
      a.setPrivateRaw(l, !1), o ? o.events.on("stopped", () => {
        a.setPrivateRaw(l, !0);
      }) : a.setPrivateRaw(l, !0);
    });
  }
  _processAxis(t, e) {
    return t.events.onAll((i) => {
      if (i.type === "clear") w(i.oldValues, (s) => {
        this._removeAxis(s);
      });
      else if (i.type === "push") e.children.push(i.newValue), i.newValue.processChart(this);
      else if (i.type === "setIndex") e.children.setIndex(i.index, i.newValue), i.newValue.processChart(this);
      else if (i.type === "insertIndex") e.children.insertIndex(i.index, i.newValue), i.newValue.processChart(this);
      else if (i.type === "removeIndex") this._removeAxis(i.oldValue);
      else {
        if (i.type !== "moveIndex") throw new Error("Unknown IListEvent type");
        e.children.moveValue(i.value, i.newIndex), i.value.processChart(this);
      }
    });
  }
  _removeAxis(t) {
    if (!t.isDisposed()) {
      const e = t.parent;
      e && e.children.removeValue(t);
      const i = t.gridContainer, s = i.parent;
      s && s.children.removeValue(i);
      const a = t.topGridContainer, n = a.parent;
      n && n.children.removeValue(a);
    }
  }
  _updateChartLayout() {
    const t = this.leftAxesContainer.width(), e = this.rightAxesContainer.width(), i = this.bottomAxesContainer;
    i.set("paddingLeft", t), i.set("paddingRight", e);
    const s = this.topAxesContainer;
    s.set("paddingLeft", t), s.set("paddingRight", e);
  }
  processAxis(t) {
    this.get("cursor") && (this.addDisposer(t.on("start", () => {
      this._updateCursor();
    })), this.addDisposer(t.on("end", () => {
      this._updateCursor();
    })));
  }
  _handleAxisSelection(t, e) {
    let i = t.fixPosition(t.get("start", 0)), s = t.fixPosition(t.get("end", 1));
    if (i > s && ([i, s] = [s, i]), this.xAxes.indexOf(t) != -1) {
      if (e || t.getPrivate("updateScrollbar")) {
        let a = this.get("scrollbarX");
        !a || a.getPrivate("isBusy") && !e || (a.setRaw("start", i), a.setRaw("end", s), a.updateGrips());
      }
    } else if (this.yAxes.indexOf(t) != -1 && (e || t.getPrivate("updateScrollbar"))) {
      let a = this.get("scrollbarY");
      !a || a.getPrivate("isBusy") && !e || (a.setRaw("start", i), a.setRaw("end", s), a.updateGrips());
    }
    this._handleZoomOut();
  }
  _handleZoomOut() {
    let t = this.zoomOutButton;
    if (t && t.parent) {
      let e = !1;
      this.xAxes.each((i) => {
        i.get("start") == 0 && i.get("end") == 1 || (e = !0);
      }), this.yAxes.each((i) => {
        i.get("start") == 0 && i.get("end") == 1 || (e = !0);
      }), e ? t.isHidden() && t.show() : t.hide();
    }
  }
  inPlot(t) {
    const e = this.plotContainer, i = this.getPrivate("otherCharts", this._otherCharts), s = e.toGlobal(t);
    if (t.x >= -0.5 && t.y >= -0.5 && t.x <= e.width() + 0.5 && t.y <= e.height() + 0.5) return !0;
    if (i) for (let a = i.length - 1; a >= 0; a--) {
      const n = i[a];
      if (n != this) {
        const r = n.plotContainer, o = this._root.rootPointToDocument(s), l = n._root.documentPointToRoot(o), c = r.toLocal(l);
        if (c.x >= -0.1 && c.y >= -0.1 && c.x <= r.width() + 0.1 && c.y <= r.height() + 0.1) return !0;
      }
    }
    return !1;
  }
  arrangeTooltips() {
    const t = this.plotContainer, e = t.width(), i = t.height(), s = this.height();
    let a = t._display.toGlobal({ x: 0, y: 0 }), n = t._display.toGlobal({ x: e, y: i });
    const r = [];
    let o, l, c = 0, h = 1 / 0, d = this._movePoint, g = this.get("maxTooltipDistance"), p = this.get("maxTooltipDistanceBy", "xy");
    v(g) && this.series.each((u) => {
      if (!u.isHidden()) {
        const _ = u.get("tooltip");
        if (_) {
          let f = _.get("pointTo");
          if (f) {
            let x = Math.hypot(d.x - f.x, d.y - f.y);
            p == "x" ? x = Math.abs(d.x - f.x) : p == "y" && (x = Math.abs(d.y - f.y)), x < h && (h = x, o = u, l = f);
          }
        }
      }
    });
    const m = [];
    if (this.series.each((u) => {
      const _ = u.get("tooltip");
      if (_ && !_.get("forceHidden")) {
        let f = !1, x = _.get("pointTo");
        if (x) {
          if (g >= 0) {
            let b = _.get("pointTo");
            if (b && l && u != o) {
              let y = Math.hypot(l.x - b.x, l.y - b.y);
              p == "x" ? y = Math.abs(l.x - b.x) : p == "y" && (y = Math.abs(l.y - b.y)), y > g && (f = !0);
            }
          } else g == -1 && u != o && (f = !0);
          this.inPlot(this._tooltipToLocal(x)) && _.dataItem ? f || (c += x.y) : f = !0, f || u.isHidden() || u.isHiding() ? _.hide(0) : (_.show(), r.push(_), m.push(u));
        }
      }
    }), this.setPrivate("tooltipSeries", m), this.get("arrangeTooltips")) {
      const u = this._root.tooltipContainer, _ = r.length;
      if (c / _ > i / 2 + a.y) {
        r.sort((x, b) => Ot(b.get("pointTo").y, x.get("pointTo").y));
        let f = n.y;
        if (w(r, (x) => {
          let b = x.height(), y = x.get("centerY");
          y instanceof et && (b *= y.value), b += x.get("marginBottom", 0), x.set("bounds", { left: a.x, top: a.y, right: n.x, bottom: f }), x.setPrivate("customData", { left: a.x, top: a.y, right: n.x, bottom: f }), f = Math.min(f - b, x._fy - b), x.parent == u && u.children.moveValue(x, 0);
        }), f < 0) {
          r.reverse();
          let x = f;
          w(r, (b) => {
            let y = b.get("bounds");
            if (y) {
              let A = y.top - f, I = y.bottom - f;
              A < x && (A = x, I = A + b.height()), b.set("bounds", { left: y.left, top: A, right: y.right, bottom: I }), x = y.bottom - f + b.get("marginBottom", 0);
            }
          });
        }
      } else {
        r.reverse(), r.sort((x, b) => Ot(x.get("pointTo").y, b.get("pointTo").y));
        let f = 0;
        if (w(r, (x) => {
          let b = x.height(), y = x.get("centerY");
          y instanceof et && (b *= y.value), b += x.get("marginBottom", 0), x.set("bounds", { left: a.x, top: f, right: n.x, bottom: Math.max(a.y + s, f + b) }), x.parent == u && u.children.moveValue(x, 0), f = Math.max(f + b, x._fy + b);
        }), f > s) {
          r.reverse();
          let x = s;
          w(r, (b) => {
            let y = b.get("bounds");
            if (y) {
              let A = y.top - (s - f), I = y.bottom - (s - f);
              I > x && (I = x, A = I - b.height()), b.set("bounds", { left: y.left, top: A, right: y.right, bottom: I }), x = I - b.height() - b.get("marginBottom", 0);
            }
          });
        }
      }
    }
  }
  _tooltipToLocal(t) {
    return this.plotContainer.toLocal(t);
  }
  zoomOut() {
    this.xAxes.each((t) => {
      t.setPrivate("updateScrollbar", !0), t.zoom(0, 1);
    }), this.yAxes.each((t) => {
      t.setPrivate("updateScrollbar", !0), t.zoom(0, 1);
    });
  }
}
Object.defineProperty(ft, "className", { enumerable: !0, configurable: !0, writable: !0, value: "XYChart" }), Object.defineProperty(ft, "classNames", { enumerable: !0, configurable: !0, writable: !0, value: Nt.classNames.concat([ft.className]) });
class st extends G {
  _beforeChanged() {
    super._beforeChanged(), (this.isPrivateDirty("width") || this.isPrivateDirty("height")) && (this._clear = !0);
  }
}
Object.defineProperty(st, "className", { enumerable: !0, configurable: !0, writable: !0, value: "Grid" }), Object.defineProperty(st, "classNames", { enumerable: !0, configurable: !0, writable: !0, value: G.classNames.concat([st.className]) });
class vt extends S {
  constructor() {
    super(...arguments), Object.defineProperty(this, "lineX", { enumerable: !0, configurable: !0, writable: !0, value: this.children.push(st.new(this._root, { themeTags: ["x"] })) }), Object.defineProperty(this, "lineY", { enumerable: !0, configurable: !0, writable: !0, value: this.children.push(st.new(this._root, { themeTags: ["y"] })) }), Object.defineProperty(this, "selection", { enumerable: !0, configurable: !0, writable: !0, value: this.children.push(G.new(this._root, { themeTags: ["selection", "cursor"], layer: 30 })) }), Object.defineProperty(this, "_movePoint", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_lastPoint", { enumerable: !0, configurable: !0, writable: !0, value: { x: 0, y: 0 } }), Object.defineProperty(this, "_tooltipX", { enumerable: !0, configurable: !0, writable: !0, value: !1 }), Object.defineProperty(this, "_tooltipY", { enumerable: !0, configurable: !0, writable: !0, value: !1 }), Object.defineProperty(this, "chart", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_toX", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_toY", { enumerable: !0, configurable: !0, writable: !0, value: void 0 });
  }
  _afterNew() {
    this._settings.themeTags = F(this._settings.themeTags, ["xy", "cursor"]), super._afterNew(), this.setAll({ width: k, height: k, isMeasured: !0, position: "absolute" }), this.states.create("hidden", { visible: !0, opacity: 0 }), this._drawLines(), this.setPrivateRaw("visible", !1), this._disposers.push(this.setTimeout(() => {
      this.setPrivate("visible", !0);
    }, 500)), this._disposers.push(this.lineX.events.on("positionchanged", () => {
      this._handleXLine();
    })), this._disposers.push(this.lineY.events.on("positionchanged", () => {
      this._handleYLine();
    })), this._disposers.push(this.lineX.events.on("focus", (t) => this._handleLineFocus(t.target))), this._disposers.push(this.lineX.events.on("blur", (t) => this._handleLineBlur(t.target))), this._disposers.push(this.lineY.events.on("focus", (t) => this._handleLineFocus(t.target))), this._disposers.push(this.lineY.events.on("blur", (t) => this._handleLineBlur(t.target))), Xt("keyboardevents") && this._disposers.push(ie(document, "keydown", (t) => {
      this._handleLineMove(t.keyCode);
    }));
  }
  _setUpTouch() {
    const t = this.chart;
    t && (t.plotContainer._display.cancelTouch = this.get("behavior") != "none");
  }
  _handleXLine() {
    let t = this.lineX.x(), e = !0;
    (t < 0 || t > this.width()) && (e = !1), this.lineX.setPrivate("visible", e);
  }
  _handleYLine() {
    let t = this.lineY.y(), e = !0;
    (t < 0 || t > this.height()) && (e = !1), this.lineY.setPrivate("visible", e);
  }
  _handleLineMove(t) {
    let e = "", i = 0, s = 0.1;
    const a = this.chart;
    this._root.focused(this.lineX) ? (a && a.xAxes.length && (s = a.xAxes.getIndex(0).getCellWidthPosition()), i = this.getPrivate("positionX", 0), e = "positionX", t == 37 ? i -= s : t == 39 && (i += s)) : this._root.focused(this.lineY) && (a && a.yAxes.length && (s = a.yAxes.getIndex(0).getCellWidthPosition()), i = this.getPrivate("positionY", 0), e = "positionY", t == 38 ? i -= s : t == 40 && (i += s)), i < 0 ? i = 0 : i > 1 && (i = 1), e != "" && this.set(e, i);
  }
  _handleLineFocus(t) {
    this.setAll({ positionX: this.getPrivate("positionX"), positionY: this.getPrivate("positionY"), alwaysShow: !0 });
  }
  _handleLineBlur(t) {
    this.setAll({ positionX: void 0, positionY: void 0, alwaysShow: !1 });
  }
  _prepareChildren() {
    if (super._prepareChildren(), this.isDirty("xAxis")) {
      this._tooltipX = !1;
      const t = this.get("xAxis");
      if (t) {
        const e = t.get("tooltip");
        e && (this._tooltipX = !0, this._disposers.push(e.on("pointTo", () => {
          this._updateXLine(e);
        })));
      }
    }
    if (this.isDirty("yAxis")) {
      this._tooltipY = !1;
      const t = this.get("yAxis");
      if (t) {
        const e = t.get("tooltip");
        e && (this._tooltipY = !0, this._disposers.push(e.on("pointTo", () => {
          this._updateYLine(e);
        })));
      }
    }
  }
  _handleSyncWith() {
    const t = this.chart;
    if (t) {
      const e = this.get("syncWith"), i = [];
      e && w(e, (s) => {
        const a = s.chart;
        a && i.push(a);
      }), t._otherCharts = i;
    }
  }
  _updateChildren() {
    if (super._updateChildren(), this._handleSyncWith(), this.isDirty("positionX") || this.isDirty("positionY")) {
      const t = this.get("positionX"), e = this.get("positionY");
      t == null && e == null ? this.hide(0) : (this._movePoint = this.toGlobal(this._getPoint(this.get("positionX", 0), this.get("positionY", 0))), this.handleMove());
    }
  }
  _updateXLine(t) {
    let e = j(this._display.toLocal(t.get("pointTo", { x: 0, y: 0 })).x, 2);
    this._toX != e && (this.lineX.animate({ key: "x", to: e, duration: t.get("animationDuration", 0), easing: t.get("animationEasing") }), this._toX = e);
  }
  _updateYLine(t) {
    let e = j(this._display.toLocal(t.get("pointTo", { x: 0, y: 0 })).y, 2);
    this._toY != e && (this.lineY.animate({ key: "y", to: e, duration: t.get("animationDuration", 0), easing: t.get("animationEasing") }), this._toY = e);
  }
  _drawLines() {
    this.lineX.set("draw", (t) => {
      t.moveTo(0, 0), t.lineTo(0, this.height());
    }), this.lineY.set("draw", (t) => {
      t.moveTo(0, 0), t.lineTo(this.width(), 0);
    });
  }
  updateCursor() {
    this.get("alwaysShow") && (this._movePoint = this.toGlobal(this._getPoint(this.get("positionX", 0), this.get("positionY", 0)))), this.handleMove();
  }
  _setChart(t) {
    this.chart = t, this._handleSyncWith();
    const e = t.plotContainer;
    this.events.on("boundschanged", () => {
      this._disposers.push(this.setTimeout(() => {
        this.updateCursor();
      }, 50));
    }), Xt("touchevents") && (this._disposers.push(e.events.on("click", (s) => {
      se(s.originalEvent) && this._handleMove(s);
    })), this._setUpTouch()), this._disposers.push(e.events.on("pointerdown", (s) => {
      this._handleCursorDown(s);
    })), this._disposers.push(e.events.on("globalpointerup", (s) => {
      this._handleCursorUp(s), s.native || this.isHidden() || this._handleMove(s);
    })), this._disposers.push(e.events.on("globalpointermove", (s) => {
      (this.get("syncWith") || mt(e._downPoints).length != 0 || s.native || !this.isHidden()) && this._handleMove(s);
    }));
    const i = this.parent;
    i && i.children.moveValue(this.selection);
  }
  _inPlot(t) {
    const e = this.chart;
    return !!e && e.inPlot(t);
  }
  _handleCursorDown(t) {
    if (t.originalEvent.button == 2) return;
    const e = t.point;
    let i = this._display.toLocal(e);
    const s = this.chart;
    if (this.selection.set("draw", () => {
    }), s && this._inPlot(i)) {
      if (this._downPoint = i, this.get("behavior") != "none") {
        this.selection.show();
        const r = "selectstarted";
        this.events.isEnabled(r) && this.events.dispatch(r, { type: r, target: this, originalEvent: t.originalEvent });
      }
      let a = this._getPosition(i).x, n = this._getPosition(i).y;
      this.setPrivate("downPositionX", a), this.setPrivate("downPositionY", n);
    }
  }
  _handleCursorUp(t) {
    if (this._downPoint) {
      const e = this.get("behavior", "none");
      if (e != "none") {
        e.charAt(0) === "z" && this.selection.hide();
        const i = t.point;
        let s = this._display.toLocal(i);
        const a = this._downPoint, n = this.get("moveThreshold", 1);
        if (s && a) {
          let r = !1;
          if (e !== "zoomX" && e !== "zoomXY" && e !== "selectX" && e !== "selectXY" || Math.abs(s.x - a.x) > n && (r = !0), e !== "zoomY" && e !== "zoomXY" && e !== "selectY" && e !== "selectXY" || Math.abs(s.y - a.y) > n && (r = !0), r) {
            const o = "selectended";
            this.events.isEnabled(o) && this.events.dispatch(o, { type: o, target: this, originalEvent: t.originalEvent });
          } else {
            const o = "selectcancelled";
            this.events.isEnabled(o) && this.events.dispatch(o, { type: o, target: this, originalEvent: t.originalEvent });
          }
        }
      }
    }
    this._downPoint = void 0;
  }
  _handleMove(t) {
    if (this.getPrivate("visible")) {
      const e = this.chart;
      if (e && mt(e.plotContainer._downPoints).length > 1) return void this.set("forceHidden", !0);
      this.set("forceHidden", !1);
      const i = t.point, s = this._lastPoint;
      if (Math.round(s.x) === Math.round(i.x) && Math.round(s.y) === Math.round(i.y)) return;
      this._lastPoint = i, this.setPrivate("lastPoint", i), this.handleMove({ x: i.x, y: i.y }, !1, t.originalEvent);
    }
  }
  _getPosition(t) {
    return { x: t.x / this.width(), y: t.y / this.height() };
  }
  handleMove(t, e, i) {
    t || (t = this._movePoint);
    const s = this.get("alwaysShow");
    if (!t) return void this.hide(0);
    this._movePoint = t;
    let a = this._display.toLocal(t), n = this.chart;
    if (n && (this._inPlot(a) || this._downPoint)) {
      n._movePoint = t, this.isHidden() && (this.show(), this.get("behavior", "").charAt(0) == "z" && this.selection.set("draw", () => {
      }));
      let r = a.x, o = a.y, l = this._getPosition(a);
      this.setPrivate("point", a);
      let c = this.get("snapToSeries");
      this._downPoint && (c = void 0);
      let h = this.get("positionX"), d = l.x;
      v(h) && (d = h);
      let g = this.get("positionY"), p = l.y;
      v(g) && (p = g), this.setPrivate("positionX", d), this.setPrivate("positionY", p);
      const m = this._getPoint(d, p);
      if (r = m.x, o = m.y, n.xAxes.each((u) => {
        u._handleCursorPosition(d, c), s && u.handleCursorShow();
      }), n.yAxes.each((u) => {
        u._handleCursorPosition(p, c), s && u.handleCursorShow();
      }), !e) {
        n._handleCursorPosition();
        const u = "cursormoved";
        this.events.isEnabled(u) && this.events.dispatch(u, { type: u, target: this, point: t, originalEvent: i });
      }
      this._updateLines(r, o), n.arrangeTooltips();
    } else if (!this._downPoint && !s) {
      this.hide(0);
      const r = "cursorhidden";
      this.events.isEnabled(r) && this.events.dispatch(r, { type: r, target: this });
    }
    this._downPoint && this.get("behavior") != "none" && this._updateSelection(a);
  }
  _getPoint(t, e) {
    return { x: this.width() * t, y: this.height() * e };
  }
  _updateLines(t, e) {
    this._tooltipX || this.lineX.set("x", t), this._tooltipY || this.lineY.set("y", e), this._drawLines();
  }
  _updateSelection(t) {
    const e = this.selection, i = this.get("behavior"), s = this.width(), a = this.height();
    t.x < 0 && (t.x = 0), t.x > s && (t.x = s), t.y < 0 && (t.y = 0), t.y > a && (t.y = a), e.set("draw", (n) => {
      const r = this._downPoint;
      r && (i === "zoomXY" || i === "selectXY" ? (n.moveTo(r.x, r.y), n.lineTo(r.x, t.y), n.lineTo(t.x, t.y), n.lineTo(t.x, r.y), n.lineTo(r.x, r.y)) : i === "zoomX" || i === "selectX" ? (n.moveTo(r.x, 0), n.lineTo(r.x, a), n.lineTo(t.x, a), n.lineTo(t.x, 0), n.lineTo(r.x, 0)) : i !== "zoomY" && i !== "selectY" || (n.moveTo(0, r.y), n.lineTo(s, r.y), n.lineTo(s, t.y), n.lineTo(0, t.y), n.lineTo(0, r.y)));
    });
  }
  _onHide() {
    if (this.isHidden()) {
      let t = this.chart;
      t && (t.xAxes.each((e) => {
        e.handleCursorHide();
      }), t.yAxes.each((e) => {
        e.handleCursorHide();
      }), t.series.each((e) => {
        e.handleCursorHide();
      }));
    }
    super._onHide();
  }
  _onShow() {
    if (!this.isHidden()) {
      let t = this.chart;
      t && (t.xAxes.each((e) => {
        e.handleCursorShow();
      }), t.yAxes.each((e) => {
        e.handleCursorShow();
      }));
    }
    super._onShow();
  }
  _dispose() {
    super._dispose(), this.selection.dispose();
  }
}
function pe(P, t) {
  return P == null ? t : t == null ? P : t < P ? t : P;
}
function me(P, t) {
  return P == null ? t : t == null ? P : t > P ? t : P;
}
Object.defineProperty(vt, "className", { enumerable: !0, configurable: !0, writable: !0, value: "XYCursor" }), Object.defineProperty(vt, "classNames", { enumerable: !0, configurable: !0, writable: !0, value: S.classNames.concat([vt.className]) });
class U extends zt {
  constructor() {
    super(...arguments), Object.defineProperty(this, "_xField", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_yField", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_xOpenField", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_yOpenField", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_xLowField", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_xHighField", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_yLowField", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_yHighField", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_axesDirty", { enumerable: !0, configurable: !0, writable: !0, value: !1 }), Object.defineProperty(this, "_stackDirty", { enumerable: !0, configurable: !0, writable: !0, value: !1 }), Object.defineProperty(this, "_selectionProcessed", { enumerable: !0, configurable: !0, writable: !0, value: !1 }), Object.defineProperty(this, "_dataSets", { enumerable: !0, configurable: !0, writable: !0, value: {} }), Object.defineProperty(this, "_mainContainerMask", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_x", { enumerable: !0, configurable: !0, writable: !0, value: 0 }), Object.defineProperty(this, "_y", { enumerable: !0, configurable: !0, writable: !0, value: 0 }), Object.defineProperty(this, "_bullets", { enumerable: !0, configurable: !0, writable: !0, value: {} }), Object.defineProperty(this, "mainContainer", { enumerable: !0, configurable: !0, writable: !0, value: this.children.push(S.new(this._root, {})) }), Object.defineProperty(this, "axisRanges", { enumerable: !0, configurable: !0, writable: !0, value: new Et() }), Object.defineProperty(this, "_skipped", { enumerable: !0, configurable: !0, writable: !0, value: !1 }), Object.defineProperty(this, "_couldStackTo", { enumerable: !0, configurable: !0, writable: !0, value: [] }), Object.defineProperty(this, "_reallyStackedTo", { enumerable: !0, configurable: !0, writable: !0, value: {} }), Object.defineProperty(this, "_stackedSeries", { enumerable: !0, configurable: !0, writable: !0, value: {} }), Object.defineProperty(this, "_aLocationX0", { enumerable: !0, configurable: !0, writable: !0, value: 0 }), Object.defineProperty(this, "_aLocationX1", { enumerable: !0, configurable: !0, writable: !0, value: 1 }), Object.defineProperty(this, "_aLocationY0", { enumerable: !0, configurable: !0, writable: !0, value: 0 }), Object.defineProperty(this, "_aLocationY1", { enumerable: !0, configurable: !0, writable: !0, value: 1 }), Object.defineProperty(this, "_showBullets", { enumerable: !0, configurable: !0, writable: !0, value: !0 }), Object.defineProperty(this, "valueXFields", { enumerable: !0, configurable: !0, writable: !0, value: ["valueX", "openValueX", "lowValueX", "highValueX"] }), Object.defineProperty(this, "valueYFields", { enumerable: !0, configurable: !0, writable: !0, value: ["valueY", "openValueY", "lowValueY", "highValueY"] }), Object.defineProperty(this, "_valueXFields", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_valueYFields", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_valueXShowFields", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_valueYShowFields", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "__valueXShowFields", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "__valueYShowFields", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_emptyDataItem", { enumerable: !0, configurable: !0, writable: !0, value: new ot(this, void 0, {}) }), Object.defineProperty(this, "_dataSetId", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_tooltipFieldX", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_tooltipFieldY", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_posXDp", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_posYDp", { enumerable: !0, configurable: !0, writable: !0, value: void 0 });
  }
  _afterNew() {
    this.fields.push("categoryX", "categoryY", "openCategoryX", "openCategoryY"), this.valueFields.push("valueX", "valueY", "openValueX", "openValueY", "lowValueX", "lowValueY", "highValueX", "highValueY"), this._setRawDefault("vcx", 1), this._setRawDefault("vcy", 1), this._setRawDefault("valueXShow", "valueXWorking"), this._setRawDefault("valueYShow", "valueYWorking"), this._setRawDefault("openValueXShow", "openValueXWorking"), this._setRawDefault("openValueYShow", "openValueYWorking"), this._setRawDefault("lowValueXShow", "lowValueXWorking"), this._setRawDefault("lowValueYShow", "lowValueYWorking"), this._setRawDefault("highValueXShow", "highValueXWorking"), this._setRawDefault("highValueYShow", "highValueYWorking"), this._setRawDefault("lowValueXGrouped", "low"), this._setRawDefault("lowValueYGrouped", "low"), this._setRawDefault("highValueXGrouped", "high"), this._setRawDefault("highValueYGrouped", "high"), super._afterNew(), this.set("maskContent", !0), this._disposers.push(this.axisRanges.events.onAll((t) => {
      if (t.type === "clear") w(t.oldValues, (e) => {
        this._removeAxisRange(e);
      });
      else if (t.type === "push") this._processAxisRange(t.newValue);
      else if (t.type === "setIndex") this._processAxisRange(t.newValue);
      else if (t.type === "insertIndex") this._processAxisRange(t.newValue);
      else if (t.type === "removeIndex") this._removeAxisRange(t.oldValue);
      else {
        if (t.type !== "moveIndex") throw new Error("Unknown IStreamEvent type");
        this._processAxisRange(t.value);
      }
    })), this.states.create("hidden", { opacity: 1, visible: !1 }), this.onPrivate("startIndex", () => {
      this.updateLegendValue();
    }), this.onPrivate("endIndex", () => {
      this.updateLegendValue();
    }), this._makeFieldNames();
  }
  _processAxisRange(t) {
    const e = S.new(this._root, {});
    t.container = e, this.children.push(e), t.series = this;
    const i = t.axisDataItem;
    i.setRaw("isRange", !0);
    const s = i.component;
    if (s) {
      s._processAxisRange(i, ["range", "series"]);
      const a = i.get("bullet");
      if (a) {
        const r = a.get("sprite");
        r && r.setPrivate("visible", !1);
      }
      const n = i.get("axisFill");
      n && e.set("mask", n), s._seriesAxisRanges.push(i);
    }
  }
  _removeAxisRange(t) {
    const e = t.axisDataItem, i = e.component;
    i.disposeDataItem(e), ct(i._seriesAxisRanges, e);
    const s = t.container;
    s && s.dispose();
  }
  _updateFields() {
    super._updateFields(), this._valueXFields = [], this._valueYFields = [], this._valueXShowFields = [], this._valueYShowFields = [], this.__valueXShowFields = [], this.__valueYShowFields = [], this.valueXFields && w(this.valueXFields, (t) => {
      if (this.get(t + "Field")) {
        this._valueXFields.push(t);
        let e = this.get(t + "Show");
        this.__valueXShowFields.push(e), e.indexOf("Working") != -1 ? this._valueXShowFields.push(e.split("Working")[0]) : this._valueXShowFields.push(e);
      }
    }), this.valueYFields && w(this.valueYFields, (t) => {
      if (this.get(t + "Field")) {
        this._valueYFields.push(t);
        let e = this.get(t + "Show");
        this.__valueYShowFields.push(e), e.indexOf("Working") != -1 ? this._valueYShowFields.push(e.split("Working")[0]) : this._valueYShowFields.push(e);
      }
    });
  }
  _dispose() {
    super._dispose(), this._bullets = {};
    const t = this.chart;
    t && t.series.removeValue(this), St(this.get("xAxis").series, this), St(this.get("yAxis").series, this);
  }
  _min(t, e) {
    let i = pe(this.getPrivate(t), e);
    this.setPrivate(t, i);
  }
  _max(t, e) {
    let i = me(this.getPrivate(t), e);
    this.setPrivate(t, i);
  }
  _shouldMakeBullet(t) {
    const e = this.get("xAxis"), i = this.get("yAxis"), s = this.get("baseAxis");
    if (!e.inited || !i.inited) return !1;
    const a = this.get("minBulletDistance", 0);
    if (a > 0) {
      let n = this.startIndex(), r = this.endIndex() - n;
      if (e == s) {
        if (e.get("renderer").axisLength() / r < a / 5) return !1;
      } else if (i == s && i.get("renderer").axisLength() / r < a / 5) return !1;
    }
    return t.get(this._xField) != null && t.get(this._yField) != null;
  }
  _makeFieldNames() {
    const t = this.get("xAxis"), e = this.get("yAxis"), i = t.getPrivate("name"), s = Ft(i), a = e.getPrivate("name"), n = Ft(a), r = t.get("renderer").getPrivate("letter"), o = e.get("renderer").getPrivate("letter"), l = "open", c = "low", h = "high", d = "Show";
    t.className === "ValueAxis" ? (this._xField = this.get(i + r + d), this._xOpenField = this.get(l + s + r + d), this._xLowField = this.get(c + s + r + d), this._xHighField = this.get(h + s + r + d)) : (this._xField = i + r, this._xOpenField = l + s + r, this._xLowField = c + s + r, this._xHighField = h + s + r), e.className === "ValueAxis" ? (this._yField = this.get(a + o + d), this._yOpenField = this.get(l + n + o + d), this._yLowField = this.get(c + n + o + d), this._yHighField = this.get(h + n + o + d)) : (this._yField = a + o, this._yOpenField = l + n + o, this._yLowField = c + n + o, this._yHighField = h + n + o);
  }
  _fixVC() {
    const t = this.get("xAxis"), e = this.get("yAxis"), i = this.get("baseAxis"), s = this.states.lookup("hidden"), a = this.get("sequencedInterpolation");
    if (s) {
      let n = 0;
      a && (n = 0.999999999999), t === i ? s.set("vcy", n) : (e === i || s.set("vcy", n), s.set("vcx", n));
    }
  }
  _handleMaskBullets() {
    this.isDirty("maskBullets") && this.bulletsContainer.set("maskContent", this.get("maskBullets"));
  }
  _fixPosition() {
    const t = this.get("xAxis"), e = this.get("yAxis");
    this.set("x", t.x() - _t(t.get("centerX", 0), t.width()) - t.parent.get("paddingLeft", 0)), this.set("y", e.y() - _t(e.get("centerY", 0), e.height()) - e.parent.get("paddingTop", 0)), this.bulletsContainer.set("y", this.y()), this.bulletsContainer.set("x", this.x());
  }
  _prepareChildren() {
    super._prepareChildren(), this._bullets = {}, (this.isDirty("valueYShow") || this.isDirty("valueXShow") || this.isDirty("openValueYShow") || this.isDirty("openValueXShow") || this.isDirty("lowValueYShow") || this.isDirty("lowValueXShow") || this.isDirty("highValueYShow") || this.isDirty("highValueXShow")) && (this._updateFields(), this._makeFieldNames(), this._valuesDirty = !0), (this.isDirty("xAxis") || this.isDirty("yAxis")) && (this._valuesDirty = !0), this.set("width", this.get("xAxis").width()), this.set("height", this.get("yAxis").height()), this._handleMaskBullets();
    const t = this.get("xAxis"), e = this.get("yAxis"), i = this.get("baseAxis");
    let s;
    switch (this.get("tooltipPositionX")) {
      case "open":
        s = this._xOpenField;
        break;
      case "low":
        s = this._xLowField;
        break;
      case "high":
        s = this._xHighField;
        break;
      default:
        s = this._xField;
    }
    this._tooltipFieldX = s;
    let a;
    switch (this.get("tooltipPositionY")) {
      case "open":
        a = this._yOpenField;
        break;
      case "low":
        a = this._yLowField;
        break;
      case "high":
        a = this._yHighField;
        break;
      default:
        a = this._yField;
    }
    this._tooltipFieldY = a, this.isDirty("baseAxis") && this._fixVC(), this._fixPosition();
    const n = this.get("stacked");
    if (this.isDirty("stacked") && (n ? this._valuesDirty && !this._dataProcessed || this._stack() : this._unstack()), this._valuesDirty && !this._dataProcessed && (this._dataProcessed = !0, n && this._stack(), w(this.dataItems, (r) => {
      w(this._valueXShowFields, (o) => {
        let l = r.get(o);
        l != null && (n && (l += this.getStackedXValue(r, o)), this._min("minX", l), this._max("maxX", l));
      }), w(this._valueYShowFields, (o) => {
        let l = r.get(o);
        l != null && (n && (l += this.getStackedYValue(r, o)), this._min("minY", l), this._max("maxY", l));
      }), t.processSeriesDataItem(r, this._valueXFields), e.processSeriesDataItem(r, this._valueYFields);
    }), t._seriesValuesDirty = !0, e._seriesValuesDirty = !0, this.get("ignoreMinMax") || ((this.isPrivateDirty("minX") || this.isPrivateDirty("maxX")) && t.markDirtyExtremes(), (this.isPrivateDirty("minY") || this.isPrivateDirty("maxY")) && e.markDirtyExtremes()), this._markStakedDirtyStack(), this.get("tooltipDataItem") || this.updateLegendValue(void 0)), (this.isDirty("vcx") || this.isDirty("vcy")) && this._markStakedDirtyStack(), this._dataGrouped || (t._groupSeriesData(this), e._groupSeriesData(this), this._dataGrouped = !0), this._valuesDirty || this.isPrivateDirty("startIndex") || this.isPrivateDirty("adjustedStartIndex") || this.isPrivateDirty("endIndex") || this.isDirty("vcx") || this.isDirty("vcy") || this._stackDirty || this._sizeDirty) {
      let r = this.startIndex(), o = this.endIndex(), l = this.get("minBulletDistance", 0);
      if (l > 0 && i && (i.get("renderer").axisLength() / (o - r) > l ? this._showBullets = !0 : this._showBullets = !1), (this._psi != r || this._pei != o || this.isDirty("vcx") || this.isDirty("vcy") || this.isPrivateDirty("adjustedStartIndex") || this._stackDirty || this._valuesDirty) && !this._selectionProcessed) {
        this._selectionProcessed = !0;
        const c = this.get("vcx", 1), h = this.get("vcy", 1), d = this.get("stacked", !1), g = this.getPrivate("outOfSelection");
        if (i === t || !i) if (e._calculateTotals(), this.setPrivateRaw("selectionMinY", void 0), this.setPrivateRaw("selectionMaxY", void 0), g) e.markDirtySelectionExtremes();
        else for (let p = r; p < o; p++) this.processYSelectionDataItem(this.dataItems[p], h, d);
        if (i === e || !i) if (t._calculateTotals(), this.setPrivateRaw("selectionMinX", void 0), this.setPrivateRaw("selectionMaxX", void 0), g) e.markDirtySelectionExtremes();
        else for (let p = r; p < o; p++) this.processXSelectionDataItem(this.dataItems[p], c, d);
        if ((i === t || !i) && this.get("valueYShow") !== "valueYWorking") {
          const p = this.getPrivate("selectionMinY");
          p != null && (this.setPrivateRaw("minY", p), e.markDirtyExtremes());
          const m = this.getPrivate("selectionMaxY");
          m != null && (this.setPrivateRaw("maxY", m), e.markDirtyExtremes());
        }
        if ((i === e || !i) && this.get("valueXShow") !== "valueXWorking") {
          const p = this.getPrivate("selectionMinX");
          p != null && (this.setPrivateRaw("minX", p), e.markDirtyExtremes());
          const m = this.getPrivate("selectionMaxX");
          m != null && (this.setPrivateRaw("maxX", m), t.markDirtyExtremes());
        }
        (this.isPrivateDirty("selectionMinX") || this.isPrivateDirty("selectionMaxX")) && t.markDirtySelectionExtremes(), (this.isPrivateDirty("selectionMinY") || this.isPrivateDirty("selectionMaxY")) && e.markDirtySelectionExtremes();
      }
    }
  }
  _makeRangeMask() {
    if (this.axisRanges.length > 0) {
      let t = this._mainContainerMask;
      t == null && (t = this.children.push(G.new(this._root, {})), this._mainContainerMask = t, t.set("draw", (e, i) => {
        const s = this.parent;
        if (s) {
          const a = this._root.container.width(), n = this._root.container.height();
          e.moveTo(-a, -n), e.lineTo(-a, 2 * n), e.lineTo(2 * a, 2 * n), e.lineTo(2 * a, -n), e.lineTo(-a, -n), this.axisRanges.each((r) => {
            const o = r.axisDataItem.get("axisFill");
            if (s && o) {
              let l = o.get("draw");
              l && l(e, i);
            }
          });
        }
        this.mainContainer._display.mask = t._display;
      })), t.markDirty(), t._markDirtyKey("fill");
    } else this.mainContainer._display.mask = null;
  }
  _updateChildren() {
    super._updateChildren(), this._x = this.x(), this._y = this.y(), this._makeRangeMask();
  }
  _stack() {
    const t = this.chart;
    if (t) {
      const e = t.series.indexOf(this);
      if (this._couldStackTo = [], e > 0) {
        let i;
        for (let s = e - 1; s >= 0 && (i = t.series.getIndex(s), i.get("xAxis") !== this.get("xAxis") || i.get("yAxis") !== this.get("yAxis") || i.className !== this.className || (this._couldStackTo.push(i), i.get("stacked"))); s--) ;
      }
      this._stackDataItems();
    }
  }
  _unstack() {
    gt(this._reallyStackedTo, (t, e) => {
      delete e._stackedSeries[this.uid];
    }), this._reallyStackedTo = {}, w(this.dataItems, (t) => {
      t.setRaw("stackToItemY", void 0), t.setRaw("stackToItemX", void 0);
    });
  }
  _stackDataItems() {
    const t = this.get("baseAxis"), e = this.get("xAxis"), i = this.get("yAxis");
    let s, a;
    t === e ? (s = "valueY", a = "stackToItemY") : t === i && (s = "valueX", a = "stackToItemX");
    let n = this._couldStackTo.length, r = 0;
    const o = this.get("stackToNegative");
    this._reallyStackedTo = {}, w(this.dataItems, (l) => {
      for (let c = 0; c < n; c++) {
        let h = this._couldStackTo[c], d = h.dataItems[r], g = l.get(s);
        if (d) {
          let p = d.get(s);
          if (o) {
            if (!v(g)) break;
            if (v(p)) {
              if (g >= 0 && p >= 0) {
                l.setRaw(a, d), this._reallyStackedTo[h.uid] = h, h._stackedSeries[this.uid] = this;
                break;
              }
              if (g < 0 && p < 0) {
                l.setRaw(a, d), this._reallyStackedTo[h.uid] = h, h._stackedSeries[this.uid] = this;
                break;
              }
            }
          } else if (v(g) && v(p)) {
            l.setRaw(a, d), this._reallyStackedTo[h.uid] = h, h._stackedSeries[this.uid] = this;
            break;
          }
        }
      }
      r++;
    });
  }
  processXSelectionDataItem(t, e, i) {
    w(this.__valueXShowFields, (s) => {
      let a = t.get(s);
      a != null && (i && (a += this.getStackedXValueWorking(t, s)), this._min("selectionMinX", a), this._max("selectionMaxX", a * e));
    });
  }
  processYSelectionDataItem(t, e, i) {
    w(this.__valueYShowFields, (s) => {
      let a = t.get(s);
      a != null && (i && (a += this.getStackedYValueWorking(t, s)), this._min("selectionMinY", a), this._max("selectionMaxY", a * e));
    });
  }
  getStackedYValueWorking(t, e) {
    const i = t.get("stackToItemY");
    if (i) {
      const s = i.component;
      return i.get(e, 0) * s.get("vcy", 1) + this.getStackedYValueWorking(i, e);
    }
    return 0;
  }
  getStackedXValueWorking(t, e) {
    const i = t.get("stackToItemX");
    if (i) {
      const s = i.component;
      return i.get(e, 0) * s.get("vcx", 1) + this.getStackedXValueWorking(i, e);
    }
    return 0;
  }
  getStackedYValue(t, e) {
    const i = t.get("stackToItemY");
    return i ? i.get(e, 0) + this.getStackedYValue(i, e) : 0;
  }
  getStackedXValue(t, e) {
    const i = t.get("stackToItemX");
    return i ? i.get(e, 0) + this.getStackedXValue(i, e) : 0;
  }
  createLegendMarker(t) {
    this.updateLegendMarker();
  }
  _markDirtyAxes() {
    this._axesDirty = !0, this.markDirty();
  }
  _markDataSetDirty() {
    this._afterDataChange(), this._valuesDirty = !0, this._dataProcessed = !1, this._aggregatesCalculated = !1, this.markDirty();
  }
  _clearDirty() {
    super._clearDirty(), this._axesDirty = !1, this._selectionProcessed = !1, this._stackDirty = !1, this._dataProcessed = !1;
  }
  _positionBullet(t) {
    let e = t.get("sprite");
    if (e) {
      let i = e.dataItem, s = t.get("locationX", i.get("locationX", 0.5)), a = t.get("locationY", i.get("locationY", 0.5)), n = this.get("xAxis"), r = this.get("yAxis"), o = n.getDataItemPositionX(i, this._xField, s, this.get("vcx", 1)), l = r.getDataItemPositionY(i, this._yField, a, this.get("vcy", 1)), c = this.getPoint(o, l), h = i.get("left", c.x), d = i.get("right", c.x), g = i.get("top", c.y), p = i.get("bottom", c.y), m = 0, u = 0, _ = d - h, f = p - g;
      if (this._shouldShowBullet(o, l)) {
        e.setPrivate("visible", !t.getPrivate("hidden"));
        let x = t.get("field");
        const b = this.get("baseAxis"), y = this.get("xAxis"), A = this.get("yAxis");
        if (x != null) {
          let D;
          b == y ? (x == "value" ? D = this._yField : x == "open" ? D = this._yOpenField : x == "high" ? D = this._yHighField : x == "low" && (D = this._yLowField), D && (l = A.getDataItemPositionY(i, D, 0, this.get("vcy", 1)), c = A.get("renderer").positionToPoint(l), u = c.y, m = h + _ * s)) : (x == "value" ? D = this._xField : x == "open" ? D = this._xOpenField : x == "high" ? D = this._xHighField : x == "low" && (D = this._xLowField), D && (o = y.getDataItemPositionX(i, D, 0, this.get("vcx", 1)), c = y.get("renderer").positionToPoint(o), m = c.x, u = p - f * a));
        } else m = h + _ * s, u = p - f * a;
        const I = t.get("stacked");
        if (I) {
          const D = this.chart;
          if (b == y) {
            let O = this._bullets[o + "_" + l];
            if (O) {
              let T = O.bounds(), C = e.localBounds(), N = u;
              u = T.top, I == "down" ? u = T.bottom - C.top : I == "auto" ? D && (N < D.plotContainer.height() / 2 ? u = T.bottom - C.top : u += C.bottom) : u += C.bottom;
            }
            this._bullets[o + "_" + l] = e;
          } else {
            let O = this._bullets[o + "_" + l];
            if (O) {
              let T = O.bounds(), C = e.localBounds(), N = m;
              m = T.right, I == "down" ? m = T.left - C.right : I == "auto" ? D && (N < D.plotContainer.width() / 2 ? m = T.left - C.right : m -= C.left) : m -= C.left;
            }
            this._bullets[o + "_" + l] = e;
          }
        }
        e.isType("Label") && (e.setPrivate("maxWidth", Math.abs(_)), e.setPrivate("maxHeight", Math.abs(f))), e.setAll({ x: m, y: u });
      } else e.setPrivate("visible", !1);
    }
  }
  _shouldShowBullet(t, e) {
    return this._showBullets;
  }
  setDataSet(t) {
    if (this._dataSets[t]) {
      this._handleDataSetChange(), this._dataItems = this._dataSets[t], this._markDataSetDirty(), this._dataSetId = t;
      const e = "datasetchanged";
      this.events.isEnabled(e) && this.events.dispatch(e, { type: e, target: this, id: t });
    }
  }
  resetGrouping() {
    gt(this._dataSets, (t, e) => {
      e != this._mainDataItems && w(e, (i) => {
        this.disposeDataItem(i);
      });
    }), this._dataSets = {}, this._dataItems = this.mainDataItems;
  }
  _handleDataSetChange() {
    w(this._dataItems, (t) => {
      let e = t.bullets;
      e && w(e, (i) => {
        if (i) {
          let s = i.get("sprite");
          s && s.setPrivate("visible", !1);
        }
      });
    }), this._selectionProcessed = !1;
  }
  show(t) {
    const e = Object.create(null, { show: { get: () => super.show } });
    return it(this, void 0, void 0, function* () {
      this._fixVC();
      let i = [];
      i.push(e.show.call(this, t).then(() => {
        this._isShowing = !1;
        let s = this.get("xAxis"), a = this.get("yAxis"), n = this.get("baseAxis");
        a !== n && a.markDirtySelectionExtremes(), s !== n && s.markDirtySelectionExtremes();
      })), i.push(this.bulletsContainer.show(t)), i.push(this._sequencedShowHide(!0, t)), yield Promise.all(i);
    });
  }
  hide(t) {
    const e = Object.create(null, { hide: { get: () => super.hide } });
    return it(this, void 0, void 0, function* () {
      this._fixVC();
      let i = [];
      i.push(e.hide.call(this, t).then(() => {
        this._isHiding = !1;
      })), i.push(this.bulletsContainer.hide(t)), i.push(this._sequencedShowHide(!1, t)), yield Promise.all(i);
    });
  }
  showDataItem(t, e) {
    const i = Object.create(null, { showDataItem: { get: () => super.showDataItem } });
    return it(this, void 0, void 0, function* () {
      const s = [i.showDataItem.call(this, t, e)];
      v(e) || (e = this.get("stateAnimationDuration", 0));
      const a = this.get("stateAnimationEasing");
      w(this._valueFields, (n) => {
        s.push(t.animate({ key: n + "Working", to: t.get(n), duration: e, easing: a }).waitForStop());
      }), yield Promise.all(s);
    });
  }
  hideDataItem(t, e) {
    const i = Object.create(null, { hideDataItem: { get: () => super.hideDataItem } });
    return it(this, void 0, void 0, function* () {
      const s = [i.hideDataItem.call(this, t, e)], a = this.states.create("hidden", {});
      v(e) || (e = a.get("stateAnimationDuration", this.get("stateAnimationDuration", 0)));
      const n = a.get("stateAnimationEasing", this.get("stateAnimationEasing")), r = this.get("xAxis"), o = this.get("yAxis"), l = this.get("baseAxis"), c = this.get("stacked");
      if (l !== r && l || w(this._valueYFields, (h) => {
        let d = o.getPrivate("min"), g = o.baseValue();
        v(d) && d > g && (g = d), c && (g = 0), t.get(h) != null && s.push(t.animate({ key: h + "Working", to: g, duration: e, easing: n }).waitForStop());
      }), l === o || !l) {
        let h = r.getPrivate("min"), d = r.baseValue();
        v(h) && h > d && (d = h), c && (d = 0), w(this._valueXFields, (g) => {
          t.get(g) != null && s.push(t.animate({ key: g + "Working", to: d, duration: e, easing: n }).waitForStop());
        });
      }
      yield Promise.all(s);
    });
  }
  _markDirtyStack() {
    this._stackDirty = !0, this.markDirty(), this._markStakedDirtyStack();
  }
  _markStakedDirtyStack() {
    const t = this._stackedSeries;
    t && gt(t, (e, i) => {
      i._stackDirty || i._markDirtyStack();
    });
  }
  _afterChanged() {
    super._afterChanged(), this._skipped && (this._markDirtyAxes(), this._skipped = !1);
  }
  showDataItemTooltip(t) {
    this.getPrivate("doNotUpdateLegend") || (this.updateLegendMarker(t), this.updateLegendValue(t));
    const e = this.get("tooltip");
    if (e) {
      if (this.isHidden()) this.hideTooltip();
      else if (e._setDataItem(t), t) {
        let i = this.get("locationX", 0), s = this.get("locationY", 1), a = t.get("locationX", i), n = t.get("locationY", s);
        const r = this.get("xAxis"), o = this.get("yAxis"), l = this.get("vcx", 1), c = this.get("vcy", 1), h = r.getDataItemPositionX(t, this._tooltipFieldX, this._aLocationX0 + (this._aLocationX1 - this._aLocationX0) * a, l), d = o.getDataItemPositionY(t, this._tooltipFieldY, this._aLocationY0 + (this._aLocationY1 - this._aLocationY0) * n, c), g = this.getPoint(h, d);
        let p = !0;
        if (w(this._valueFields, (m) => {
          t.get(m) == null && (p = !1);
        }), p) {
          const m = this.chart;
          m && m.inPlot(g) ? (e.label.text.markDirtyText(), e.set("tooltipTarget", this._getTooltipTarget(t)), e.set("pointTo", this._display.toGlobal({ x: g.x, y: g.y }))) : e._setDataItem(void 0);
        } else e._setDataItem(void 0);
      }
    }
  }
  hideTooltip() {
    const t = this.get("tooltip");
    return t && t.set("tooltipTarget", this), super.hideTooltip();
  }
  _getTooltipTarget(t) {
    if (this.get("seriesTooltipTarget") == "bullet") {
      const e = t.bullets;
      if (e && e.length > 0) {
        const i = e[0].get("sprite");
        if (i) return i;
      }
    }
    return this;
  }
  updateLegendValue(t) {
    const e = this.get("legendDataItem");
    if (e) {
      const i = e.get("label");
      if (i) {
        let a = "";
        t ? (i._setDataItem(t), a = this.get("legendLabelText", i.get("text", this.get("name", "")))) : (i._setDataItem(this._emptyDataItem), a = this.get("legendRangeLabelText", this.get("legendLabelText", i.get("text", this.get("name", ""))))), i.set("text", a);
      }
      const s = e.get("valueLabel");
      if (s) {
        let a = "";
        t ? (s._setDataItem(t), a = this.get("legendValueText", s.get("text", ""))) : (s._setDataItem(this._emptyDataItem), a = this.get("legendRangeValueText", s.get("text", ""))), s.set("text", a);
      }
    }
  }
  _getItemReaderLabel() {
    let t = "X: {" + this._xField;
    return this.get("xAxis").isType("DateAxis") && (t += ".formatDate()"), t += "}; Y: {" + this._yField, this.get("yAxis").isType("DateAxis") && (t += ".formatDate()"), t += "}", t;
  }
  getPoint(t, e) {
    let i = this.get("xAxis").get("renderer").positionToCoordinate(t), s = this.get("yAxis").get("renderer").positionToCoordinate(e), a = 999999999;
    return s < -a && (s = -a), s > a && (s = a), i < -a && (i = -a), i > a && (i = a), { x: i, y: s };
  }
  _shouldInclude(t) {
    return !0;
  }
  handleCursorHide() {
    this.hideTooltip(), this.updateLegendValue(void 0), this.updateLegendMarker(void 0);
  }
  _afterDataChange() {
    super._afterDataChange(), this.get("xAxis")._markDirtyKey("start"), this.get("yAxis")._markDirtyKey("start"), this.resetExtremes();
  }
  resetExtremes() {
    this.setPrivate("selectionMinX", void 0), this.setPrivate("selectionMaxX", void 0), this.setPrivate("selectionMinY", void 0), this.setPrivate("selectionMaxY", void 0), this.setPrivate("minX", void 0), this.setPrivate("minY", void 0), this.setPrivate("maxX", void 0), this.setPrivate("maxY", void 0);
  }
  createAxisRange(t) {
    return this.axisRanges.push({ axisDataItem: t });
  }
  get mainDataItems() {
    return this._mainDataItems;
  }
  _adjustStartIndex(t) {
    const e = this.get("xAxis");
    if (this.get("baseAxis") == e && e.isType("DateAxis")) {
      const i = e.baseDuration(), s = e.getPrivate("selectionMin", e.getPrivate("min", 0)), a = i * this.get("locationX", 0.5);
      let n = -1 / 0;
      for (; n < s; ) {
        const r = this.dataItems[t];
        if (!r) break;
        {
          const o = r.open;
          if (n = o ? o.valueX : r.get("valueX", 0), n += a, !(n < s)) break;
          t++;
        }
      }
    }
    return t;
  }
}
Object.defineProperty(U, "className", { enumerable: !0, configurable: !0, writable: !0, value: "XYSeries" }), Object.defineProperty(U, "classNames", { enumerable: !0, configurable: !0, writable: !0, value: zt.classNames.concat([U.className]) });
class H extends Bt {
  constructor() {
    super(...arguments), Object.defineProperty(this, "_series", { enumerable: !0, configurable: !0, writable: !0, value: [] }), Object.defineProperty(this, "_isPanning", { enumerable: !0, configurable: !0, writable: !0, value: !1 }), Object.defineProperty(this, "minorDataItems", { enumerable: !0, configurable: !0, writable: !0, value: [] }), Object.defineProperty(this, "labelsContainer", { enumerable: !0, configurable: !0, writable: !0, value: this.children.push(S.new(this._root, {})) }), Object.defineProperty(this, "gridContainer", { enumerable: !0, configurable: !0, writable: !0, value: S.new(this._root, { width: k, height: k }) }), Object.defineProperty(this, "topGridContainer", { enumerable: !0, configurable: !0, writable: !0, value: S.new(this._root, { width: k, height: k }) }), Object.defineProperty(this, "bulletsContainer", { enumerable: !0, configurable: !0, writable: !0, value: this.children.push(S.new(this._root, { isMeasured: !1, width: k, height: k, position: "absolute" })) }), Object.defineProperty(this, "chart", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_rangesDirty", { enumerable: !0, configurable: !0, writable: !0, value: !1 }), Object.defineProperty(this, "_panStart", { enumerable: !0, configurable: !0, writable: !0, value: 0 }), Object.defineProperty(this, "_panEnd", { enumerable: !0, configurable: !0, writable: !0, value: 1 }), Object.defineProperty(this, "_sAnimation", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_eAnimation", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_skipSync", { enumerable: !0, configurable: !0, writable: !0, value: !1 }), Object.defineProperty(this, "axisRanges", { enumerable: !0, configurable: !0, writable: !0, value: new Et() }), Object.defineProperty(this, "_seriesAxisRanges", { enumerable: !0, configurable: !0, writable: !0, value: [] }), Object.defineProperty(this, "ghostLabel", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_cursorPosition", { enumerable: !0, configurable: !0, writable: !0, value: -1 }), Object.defineProperty(this, "_snapToSeries", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_seriesValuesDirty", { enumerable: !0, configurable: !0, writable: !0, value: !1 }), Object.defineProperty(this, "_seriesAdded", { enumerable: !0, configurable: !0, writable: !0, value: !1 }), Object.defineProperty(this, "axisHeader", { enumerable: !0, configurable: !0, writable: !0, value: this.children.push(S.new(this._root, { themeTags: ["axis", "header"], position: "absolute", background: nt.new(this._root, { themeTags: ["header", "background"], fill: this._root.interfaceColors.get("background") }) })) }), Object.defineProperty(this, "_bullets", { enumerable: !0, configurable: !0, writable: !0, value: {} });
  }
  _dispose() {
    this.gridContainer.dispose(), this.topGridContainer.dispose(), this.bulletsContainer.dispose(), this.labelsContainer.dispose(), this.axisHeader.dispose(), super._dispose();
  }
  _afterNew() {
    super._afterNew(), this.setPrivate("updateScrollbar", !0), this._disposers.push(this.axisRanges.events.onAll((e) => {
      if (e.type === "clear") w(e.oldValues, (i) => {
        this.disposeDataItem(i);
      });
      else if (e.type === "push") this._processAxisRange(e.newValue, ["range"]);
      else if (e.type === "setIndex") this._processAxisRange(e.newValue, ["range"]);
      else if (e.type === "insertIndex") this._processAxisRange(e.newValue, ["range"]);
      else if (e.type === "removeIndex") this.disposeDataItem(e.oldValue);
      else {
        if (e.type !== "moveIndex") throw new Error("Unknown IStreamEvent type");
        this._processAxisRange(e.value, ["range"]);
      }
    }));
    const t = this.get("renderer");
    t && (t.axis = this, t.processAxis()), this.children.push(t), this.ghostLabel = t.makeLabel(new ot(this, void 0, {}), []), this.ghostLabel.adapters.disable("text"), this.ghostLabel.setAll({ opacity: 0, tooltipText: void 0, tooltipHTML: void 0, interactive: !1 }), this.ghostLabel.events.disable();
  }
  _updateFinals(t, e) {
  }
  zoom(t, e, i, s) {
    if (this.get("zoomable", !0)) if (this._updateFinals(t, e), this.get("start") !== t || this.get("end") != e) {
      let a = this._sAnimation, n = this._eAnimation, r = this.get("maxDeviation", 0.5) * Math.min(1, e - t);
      t < -r && (t = -r), e > 1 + r && (e = 1 + r), t > e && ([t, e] = [e, t]), v(i) || (i = this.get("interpolationDuration", 0)), s || (s = "end");
      let o = this.getPrivate("maxZoomFactor", this.get("maxZoomFactor", 100)), l = o;
      e === 1 && t !== 0 && (s = t < this.get("start", 0) ? "start" : "end"), t === 0 && e !== 1 && (s = e > this.get("end", 1) ? "end" : "start");
      let c = this.get("minZoomCount", 0), h = this.get("maxZoomCount", 1 / 0);
      v(c) && (o = l / c);
      let d = 1;
      if (v(h) && (d = l / h), s === "start" ? (h > 0 && 1 / (e - t) < d && (e = t + 1 / d), 1 / (e - t) > o && (e = t + 1 / o), e > 1 && e - t < 1 / o && (t = e - 1 / o)) : (h > 0 && 1 / (e - t) < d && (t = e - 1 / d), 1 / (e - t) > o && (t = e - 1 / o), t < 0 && e - t < 1 / o && (e = t + 1 / o)), 1 / (e - t) > o && (e = t + 1 / o), 1 / (e - t) > o && (t = e - 1 / o), h != null && c != null && t == this.get("start") && e == this.get("end")) {
        const g = this.chart;
        g && g._handleAxisSelection(this, !0);
      }
      if ((a && a.playing && a.to == t || this.get("start") == t) && (n && n.playing && n.to == e || this.get("end") == e)) return;
      if (i > 0) {
        let g, p, m = this.get("interpolationEasing");
        if (this.get("start") != t && (g = this.animate({ key: "start", to: t, duration: i, easing: m })), this.get("end") != e && (p = this.animate({ key: "end", to: e, duration: i, easing: m })), this._sAnimation = g, this._eAnimation = p, g) return g;
        if (p) return p;
      } else this.set("start", t), this.set("end", e), this._root.events.once("frameended", () => {
        this._markDirtyKey("start"), this._root._markDirty();
      });
    } else this._sAnimation && this._sAnimation.stop(), this._eAnimation && this._eAnimation.stop();
  }
  get series() {
    return this._series;
  }
  _processAxisRange(t, e) {
    t.setRaw("isRange", !0), this._createAssets(t, e), this._rangesDirty = !0, this._prepareDataItem(t);
    const i = t.get("above"), s = this.topGridContainer, a = t.get("grid");
    i && a && s.children.moveValue(a);
    const n = t.get("axisFill");
    i && n && s.children.moveValue(n);
  }
  _prepareDataItem(t, e) {
  }
  markDirtyExtremes() {
  }
  markDirtySelectionExtremes() {
  }
  _calculateTotals() {
  }
  _updateAxisRanges() {
    this._bullets = {}, this.axisRanges.each((t) => {
      this._prepareDataItem(t);
    }), w(this._seriesAxisRanges, (t) => {
      this._prepareDataItem(t);
    });
  }
  _prepareChildren() {
    if (super._prepareChildren(), this.get("fixAxisSize") ? this.ghostLabel.set("visible", !0) : this.ghostLabel.set("visible", !1), this.isDirty("start") || this.isDirty("end")) {
      const e = this.chart;
      e && e._updateCursor();
      let i = this.get("start", 0), s = this.get("end", 1), a = this.get("maxDeviation", 0.5) * Math.min(1, s - i);
      if (i < -a) {
        let n = i + a;
        i = -a, this.setRaw("start", i), this.isDirty("end") && this.setRaw("end", s - n);
      }
      if (s > 1 + a) {
        let n = s - 1 - a;
        s = 1 + a, this.setRaw("end", s), this.isDirty("start") && this.setRaw("start", i - n);
      }
    }
    const t = this.get("renderer");
    if (t._start = this.get("start"), t._end = this.get("end"), t._inversed = t.get("inversed", !1), t._axisLength = t.axisLength() / (t._end - t._start), t._updateLC(), this.isDirty("tooltip")) {
      const e = this.get("tooltip");
      if (e) {
        const i = t.get("themeTags");
        e.addTag("axis"), e.addTag(this.className.toLowerCase()), e._applyThemes(), i && (e.set("themeTags", F(e.get("themeTags"), i)), e.label._applyThemes());
      }
    }
  }
  _updateTooltipBounds() {
    const t = this.get("tooltip");
    t && this.get("renderer").updateTooltipBounds(t);
  }
  _updateBounds() {
    super._updateBounds(), this._updateTooltipBounds();
  }
  processChart(t) {
    this.chart = t, this.get("renderer").chart = t, t.gridContainer.children.push(this.gridContainer), t.topGridContainer.children.push(this.topGridContainer), t.axisHeadersContainer.children.push(this.axisHeader), this.on("start", () => {
      t._handleAxisSelection(this);
    }), this.on("end", () => {
      t._handleAxisSelection(this);
    }), t.plotContainer.onPrivate("width", () => {
      this.markDirtySize();
    }), t.plotContainer.onPrivate("height", () => {
      this.markDirtySize();
    }), t.processAxis(this);
  }
  hideDataItem(t) {
    return this._toggleFHDataItem(t, !0), super.hideDataItem(t);
  }
  showDataItem(t) {
    return this._toggleFHDataItem(t, !1), super.showDataItem(t);
  }
  _toggleFHDataItem(t, e) {
    const i = "forceHidden", s = t.get("label");
    s && s.set(i, e);
    const a = t.get("grid");
    a && a.set(i, e);
    const n = t.get("tick");
    n && n.set(i, e);
    const r = t.get("axisFill");
    r && r.set(i, e);
    const o = t.get("bullet");
    if (o) {
      const l = o.get("sprite");
      l && l.set(i, e);
    }
  }
  _toggleDataItem(t, e) {
    const i = t.get("label"), s = "visible";
    i && i.setPrivate(s, e);
    const a = t.get("grid");
    a && a.setPrivate(s, e);
    const n = t.get("tick");
    n && n.setPrivate(s, e);
    const r = t.get("axisFill");
    r && r.setPrivate(s, e);
    const o = t.get("bullet");
    if (o) {
      const l = o.get("sprite");
      l && l.setPrivate(s, e);
    }
  }
  _createAssets(t, e, i) {
    var s, a, n;
    const r = this.get("renderer");
    let o = "minor";
    const l = t.get("label");
    if (l) {
      let d = l.get("themeTags"), g = !1;
      i ? d?.indexOf(o) == -1 && (g = !0) : d?.indexOf(o) != -1 && (g = !0), g && ((s = l.parent) === null || s === void 0 || s.children.removeValue(l), r.makeLabel(t, e), l.dispose(), r.labels.removeValue(l));
    } else r.makeLabel(t, e);
    const c = t.get("grid");
    if (c) {
      let d = c.get("themeTags"), g = !1;
      i ? d?.indexOf(o) == -1 && (g = !0) : d?.indexOf(o) != -1 && (g = !0), g && ((a = c.parent) === null || a === void 0 || a.children.removeValue(c), r.makeGrid(t, e), c.dispose(), r.grid.removeValue(c));
    } else r.makeGrid(t, e);
    const h = t.get("tick");
    if (h) {
      let d = !1, g = h.get("themeTags");
      i ? g?.indexOf(o) == -1 && (d = !0) : g?.indexOf(o) != -1 && (d = !0), d && ((n = h.parent) === null || n === void 0 || n.children.removeValue(h), r.makeTick(t, e), h.dispose(), r.ticks.removeValue(h));
    } else r.makeTick(t, e);
    i || t.get("axisFill") || r.makeAxisFill(t, e), this._processBullet(t);
  }
  _processBullet(t) {
    let e = t.get("bullet"), i = this.get("bullet");
    if (e || !i || t.get("isRange") || (e = i(this._root, this, t)), e) {
      e.axis = this;
      const s = e.get("sprite");
      s && (s._setDataItem(t), t.setRaw("bullet", e), s.parent || this.bulletsContainer.children.push(s));
    }
  }
  _afterChanged() {
    super._afterChanged();
    const t = this.chart;
    t && (t._updateChartLayout(), t.axisHeadersContainer.markDirtySize()), this.get("renderer")._updatePositions(), this._seriesAdded = !1;
  }
  disposeDataItem(t) {
    super.disposeDataItem(t);
    const e = this.get("renderer"), i = t.get("label");
    i && (e.labels.removeValue(i), i.dispose());
    const s = t.get("tick");
    s && (e.ticks.removeValue(s), s.dispose());
    const a = t.get("grid");
    a && (e.grid.removeValue(a), a.dispose());
    const n = t.get("axisFill");
    n && (e.axisFills.removeValue(n), n.dispose());
    const r = t.get("bullet");
    r && r.dispose();
  }
  _updateGhost() {
    this.setPrivate("cellWidth", this.getCellWidthPosition() * this.get("renderer").axisLength());
    const t = this.ghostLabel;
    if (!t.isHidden()) {
      const s = t.localBounds(), a = Math.ceil(s.right - s.left);
      let n = t.get("text");
      w(this.dataItems, (r) => {
        const o = r.get("label");
        if (o && !o.isHidden()) {
          const l = o.localBounds();
          Math.ceil(l.right - l.left) > a && (n = o.text._getText());
        }
      }), t.set("text", n);
    }
    let e = this.get("start", 0), i = this.get("end", 1);
    this.get("renderer").updateLabel(t, e + 0.5 * (i - e));
  }
  _handleCursorPosition(t, e) {
    t = this.get("renderer").toAxisPosition(t), this._cursorPosition = t, this._snapToSeries = e, this.updateTooltip();
  }
  updateTooltip() {
    const t = this._snapToSeries;
    let e = this._cursorPosition;
    const i = this.get("tooltip"), s = this.get("renderer");
    v(e) && (w(this.series, (a) => {
      if (a.get("baseAxis") === this) {
        const n = this.getSeriesItem(a, e, this.get("tooltipLocation"));
        a.setRaw("tooltipDataItem", n), t && t.indexOf(a) != -1 ? (a.updateLegendMarker(n), a.updateLegendValue(n)) : a.showDataItemTooltip(n);
      }
    }), i && (s.updateTooltipBounds(i), this.get("snapTooltip") && (e = this.roundAxisPosition(e, this.get("tooltipLocation", 0.5))), q(e) ? i.hide(0) : (this.setPrivateRaw("tooltipPosition", e), this._updateTooltipText(i, e), s.positionTooltip(i, e), e < this.get("start", 0) || e > this.get("end", 1) ? i.hide(0) : i.show(0))));
  }
  _updateTooltipText(t, e) {
    t.label.set("text", this.getTooltipText(e));
  }
  roundAxisPosition(t, e) {
    return t;
  }
  handleCursorShow() {
    let t = this.get("tooltip");
    t && t.show();
  }
  handleCursorHide() {
    let t = this.get("tooltip");
    t && t.hide();
  }
  processSeriesDataItem(t, e) {
  }
  _clearDirty() {
    super._clearDirty(), this._sizeDirty = !1, this._rangesDirty = !1;
  }
  coordinateToPosition(t) {
    const e = this.get("renderer");
    return e.toAxisPosition(t / e.axisLength());
  }
  toAxisPosition(t) {
    return this.get("renderer").toAxisPosition(t);
  }
  toGlobalPosition(t) {
    return this.get("renderer").toGlobalPosition(t);
  }
  fixPosition(t) {
    return this.get("renderer").fixPosition(t);
  }
  shouldGap(t, e, i, s) {
    return !1;
  }
  createAxisRange(t) {
    return this.axisRanges.push(t);
  }
  _groupSeriesData(t) {
  }
  getCellWidthPosition() {
    return 0.05;
  }
}
Object.defineProperty(H, "className", { enumerable: !0, configurable: !0, writable: !0, value: "Axis" }), Object.defineProperty(H, "classNames", { enumerable: !0, configurable: !0, writable: !0, value: Bt.classNames.concat([H.className]) });
class yt extends H {
  constructor() {
    super(...arguments), Object.defineProperty(this, "_dirtyExtremes", { enumerable: !0, configurable: !0, writable: !0, value: !1 }), Object.defineProperty(this, "_dirtySelectionExtremes", { enumerable: !0, configurable: !0, writable: !0, value: !1 }), Object.defineProperty(this, "_deltaMinMax", { enumerable: !0, configurable: !0, writable: !0, value: 1 }), Object.defineProperty(this, "_minReal", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_maxReal", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_baseValue", { enumerable: !0, configurable: !0, writable: !0, value: 0 }), Object.defineProperty(this, "_syncDp", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_minLogAdjusted", { enumerable: !0, configurable: !0, writable: !0, value: 1 });
  }
  markDirtyExtremes() {
    this._dirtyExtremes = !0, this.markDirty();
  }
  markDirtySelectionExtremes() {
    this._dirtySelectionExtremes = !0, this.markDirty();
  }
  _afterNew() {
    this._settings.themeTags = F(this._settings.themeTags, ["axis"]), this.setPrivateRaw("name", "value"), this.addTag("value"), super._afterNew();
  }
  _prepareChildren() {
    if (super._prepareChildren(), this.isDirty("syncWithAxis")) {
      this._prevSettings.syncWithAxis && this._syncDp && this._syncDp.dispose();
      let e = this.get("syncWithAxis");
      e && (this._syncDp = new ae([e.onPrivate("selectionMinFinal", () => {
        this._dirtySelectionExtremes = !0;
      }), e.onPrivate("selectionMaxFinal", () => {
        this._dirtySelectionExtremes = !0;
      })]));
    }
    let t = !1;
    (this.isDirty("min") || this.isDirty("max") || this.isDirty("maxPrecision") || this.isDirty("numberFormat")) && (t = !0, this.ghostLabel.set("text", "")), (this._sizeDirty || this._dirtyExtremes || this._valuesDirty || t || this.isPrivateDirty("width") || this.isPrivateDirty("height") || this.isDirty("extraMin") || this.isDirty("extraMax") || this.isDirty("logarithmic") || this.isDirty("treatZeroAs") || this.isDirty("baseValue") || this.isDirty("strictMinMax") || this.isDirty("strictMinMaxSelection")) && (this._getMinMax(), this._dirtyExtremes = !1), this._dirtySelectionExtremes && !this._isPanning && this.get("autoZoom", !0) && (this._getSelectionMinMax(), this._dirtySelectionExtremes = !1), this._groupData(), (this._sizeDirty || this._valuesDirty || this.isDirty("start") || this.isDirty("end") || this.isPrivateDirty("min") || this.isPrivateDirty("selectionMax") || this.isPrivateDirty("selectionMin") || this.isPrivateDirty("max") || this.isPrivateDirty("step") || this.isPrivateDirty("width") || this.isPrivateDirty("height") || this.isDirty("logarithmic")) && (this._handleRangeChange(), this._prepareAxisItems(), this._updateAxisRanges()), this._baseValue = this.baseValue();
  }
  _groupData() {
  }
  _formatText(t) {
    const e = this.get("numberFormat"), i = this.getNumberFormatter();
    let s = "";
    return s = e ? i.format(t, e) : i.format(t, void 0, this.getPrivate("stepDecimalPlaces")), s;
  }
  _prepareAxisItems() {
    const t = this.getPrivate("min"), e = this.getPrivate("max");
    if (v(t) && v(e)) {
      const i = this.get("logarithmic"), s = this.getPrivate("step"), a = this.getPrivate("selectionMin"), n = this.getPrivate("selectionMax") + s;
      let r = a - s, o = 1, l = t;
      if (i) {
        if (r = this._minLogAdjusted, r < a) for (; r < a; ) r += s;
        l = r, l <= 0 && (l = 1, s < 1 && (l = s)), o = Math.log(n - s) * Math.LOG10E - Math.log(l) * Math.LOG10E, o > 2 && (r = Math.pow(10, Math.log(l) * Math.LOG10E - 5));
      }
      const c = this.get("renderer"), h = c.get("minorLabelsEnabled"), d = c.get("minorGridEnabled", h);
      let g = Math.pow(10, Math.floor(Math.log(Math.abs(s)) * Math.LOG10E));
      const p = Math.round(s / g);
      let m = 2;
      j(p / 5, 10) % 1 == 0 && (m = 5), j(p / 10, 10) % 1 == 0 && (m = 10);
      let u = s / m, _ = 0, f = 0, x = -1 / 0;
      for (; r < n; ) {
        let b;
        this.dataItems.length < _ + 1 ? (b = new ot(this, void 0, {}), this._dataItems.push(b), this.processDataItem(b)) : b = this.dataItems[_], this._createAssets(b, []), this._toggleDataItem(b, !0), b.setRaw("value", r);
        const y = b.get("label");
        y && y.set("text", this._formatText(r)), this._prepareDataItem(b);
        let A = r;
        if (i && o > 2 ? A = Math.pow(10, Math.log(l) * Math.LOG10E + _ - 5) : A += s, d) {
          let D = r + u;
          for (i && (o > 2 && (u = this._adjustMinMax(r, A, 10).step), D = r + u); D < A - 1e-11 * s; ) {
            let O;
            this.minorDataItems.length < f + 1 ? (O = new ot(this, void 0, {}), this.minorDataItems.push(O), this.processDataItem(O)) : O = this.minorDataItems[f], this._createAssets(O, ["minor"], !0), this._toggleDataItem(O, !0), O.setRaw("value", D);
            const T = O.get("label");
            T && (h ? T.set("text", this._formatText(D)) : T.setPrivate("visible", !1)), this._prepareDataItem(O), D += u, f++;
          }
        }
        if (r = A, x == r) break;
        let I = Math.pow(10, Math.floor(Math.log(Math.abs(s)) * Math.LOG10E));
        if (I < 1) {
          let D = Math.round(Math.abs(Math.log(Math.abs(I)) * Math.LOG10E)) + 2;
          r = j(r, D);
        }
        _++, x = r;
      }
      for (let b = _; b < this.dataItems.length; b++) this._toggleDataItem(this.dataItems[b], !1);
      for (let b = f; b < this.minorDataItems.length; b++) this._toggleDataItem(this.minorDataItems[b], !1);
      w(this.series, (b) => {
        b.inited && b._markDirtyAxes();
      }), this._updateGhost();
    }
  }
  _prepareDataItem(t, e) {
    let i = this.get("renderer"), s = t.get("value"), a = t.get("endValue"), n = this.valueToPosition(s), r = n, o = this.valueToPosition(s + this.getPrivate("step"));
    v(a) && (r = this.valueToPosition(a), o = r), t.get("isRange") && a == null && (o = n);
    let l = r, c = t.get("labelEndValue");
    c != null && (l = this.valueToPosition(c)), i.updateLabel(t.get("label"), n, l, e);
    const h = t.get("grid");
    if (i.updateGrid(h, n, r), h && (s == this.get("baseValue", 0) ? (h.addTag("base"), h._applyThemes()) : h.hasTag("base") && (h.removeTag("base"), h._applyThemes())), i.updateTick(t.get("tick"), n, l, e), i.updateFill(t.get("axisFill"), n, o), this._processBullet(t), i.updateBullet(t.get("bullet"), n, r), !t.get("isRange")) {
      const d = this.get("fillRule");
      d && d(t);
    }
  }
  _handleRangeChange() {
    let t = this.positionToValue(this.get("start", 0)), e = this.positionToValue(this.get("end", 1));
    const i = this.get("renderer").gridCount();
    let s = this._adjustMinMax(t, e, i, !0), a = oe(s.step);
    this.setPrivateRaw("stepDecimalPlaces", a), t = j(t, a), e = j(e, a), s = this._adjustMinMax(t, e, i, !0);
    let n = s.step;
    t = s.min, e = s.max, this.getPrivate("selectionMin") === t && this.getPrivate("selectionMax") === e && this.getPrivate("step") === n || (this.setPrivateRaw("selectionMin", t), this.setPrivateRaw("selectionMax", e), this.setPrivateRaw("step", n));
  }
  positionToValue(t) {
    const e = this.getPrivate("min"), i = this.getPrivate("max");
    return this.get("logarithmic") ? Math.pow(Math.E, (t * (Math.log(i) * Math.LOG10E - Math.log(e) * Math.LOG10E) + Math.log(e) * Math.LOG10E) / Math.LOG10E) : t * (i - e) + e;
  }
  valueToPosition(t) {
    const e = this.getPrivate("min"), i = this.getPrivate("max");
    if (this.get("logarithmic")) {
      if (t <= 0) {
        let s = this.get("treatZeroAs");
        v(s) && (t = s);
      }
      return (Math.log(t) * Math.LOG10E - Math.log(e) * Math.LOG10E) / (Math.log(i) * Math.LOG10E - Math.log(e) * Math.LOG10E);
    }
    return (t - e) / (i - e);
  }
  valueToFinalPosition(t) {
    const e = this.getPrivate("minFinal"), i = this.getPrivate("maxFinal");
    if (this.get("logarithmic")) {
      if (t <= 0) {
        let s = this.get("treatZeroAs");
        v(s) && (t = s);
      }
      return (Math.log(t) * Math.LOG10E - Math.log(e) * Math.LOG10E) / (Math.log(i) * Math.LOG10E - Math.log(e) * Math.LOG10E);
    }
    return (t - e) / (i - e);
  }
  getX(t, e, i) {
    t = i + (t - i) * e;
    const s = this.valueToPosition(t);
    return this._settings.renderer.positionToCoordinate(s);
  }
  getY(t, e, i) {
    t = i + (t - i) * e;
    const s = this.valueToPosition(t);
    return this._settings.renderer.positionToCoordinate(s);
  }
  getDataItemCoordinateX(t, e, i, s) {
    return this._settings.renderer.positionToCoordinate(this.getDataItemPositionX(t, e, i, s));
  }
  getDataItemPositionX(t, e, i, s) {
    let a = t.get(e);
    return t.get("stackToItemX") ? a = a * s + t.component.getStackedXValueWorking(t, e) : a = this._baseValue + (a - this._baseValue) * s, this.valueToPosition(a);
  }
  getDataItemCoordinateY(t, e, i, s) {
    return this._settings.renderer.positionToCoordinate(this.getDataItemPositionY(t, e, i, s));
  }
  getDataItemPositionY(t, e, i, s) {
    let a = t.get(e);
    return t.get("stackToItemY") ? a = a * s + t.component.getStackedYValueWorking(t, e) : a = this._baseValue + (a - this._baseValue) * s, this.valueToPosition(a);
  }
  basePosition() {
    return this.valueToPosition(this.baseValue());
  }
  baseValue() {
    const t = Math.min(this.getPrivate("minFinal", -1 / 0), this.getPrivate("selectionMin", -1 / 0)), e = Math.max(this.getPrivate("maxFinal", 1 / 0), this.getPrivate("selectionMax", 1 / 0));
    let i = this.get("baseValue", 0);
    return i < t && (i = t), i > e && (i = e), i;
  }
  cellEndValue(t) {
    return t;
  }
  fixSmallStep(t) {
    return 1 + t === 1 ? (t *= 2, this.fixSmallStep(t)) : t;
  }
  _fixMin(t) {
    return t;
  }
  _fixMax(t) {
    return t;
  }
  _calculateTotals() {
    if (this.get("calculateTotals")) {
      let t = this.series[0];
      if (t) {
        let e = t.startIndex();
        if (t.dataItems.length > 0) {
          e > 0 && e--;
          let i, s, a = t.endIndex();
          a < t.dataItems.length && a++, t.get("yAxis") == this ? (i = "valueY", s = "vcy") : t.get("xAxis") == this && (i = "valueX", s = "vcx");
          let n = i + "Working";
          if (i) for (let r = e; r < a; r++) {
            let o = 0, l = 0;
            w(this.series, (c) => {
              if (!c.get("excludeFromTotal")) {
                let h = c.dataItems[r];
                if (h) {
                  let d = h.get(n) * c.get(s);
                  q(d) || (o += d, l += Math.abs(d));
                }
              }
            }), w(this.series, (c) => {
              if (!c.get("excludeFromTotal")) {
                let h = c.dataItems[r];
                if (h) {
                  let d = h.get(n) * c.get(s);
                  q(d) || (h.set(i + "Total", l), h.set(i + "Sum", o), h.set(i + "TotalPercent", d / l * 100));
                }
              }
            });
          }
        }
      }
    }
  }
  _getSelectionMinMax() {
    const t = this.getPrivate("minFinal"), e = this.getPrivate("maxFinal"), i = this.get("min"), s = this.get("max");
    let a = this.get("extraMin", 0), n = this.get("extraMax", 0);
    this.get("logarithmic") && (this.get("extraMin") == null && (a = 0.1), this.get("extraMax") == null && (n = 0.2));
    const r = this.get("renderer").gridCount(), o = this.get("strictMinMaxSelection");
    let l = this.get("strictMinMax");
    if (v(t) && v(e)) {
      let c = e, h = t;
      if (w(this.series, (x) => {
        if (!x.get("ignoreMinMax")) {
          let b, y;
          const A = x.getPrivate("outOfSelection");
          if (x.get("xAxis") === this) {
            if (!A) {
              let I = x.getPrivate("minX"), D = x.getPrivate("maxX");
              x.startIndex() == 0 && x.endIndex() == x.dataItems.length || (I = void 0, D = void 0), b = x.getPrivate("selectionMinX", I), y = x.getPrivate("selectionMaxX", D);
            }
          } else if (x.get("yAxis") === this && !A) {
            let I = x.getPrivate("minY"), D = x.getPrivate("maxY");
            x.startIndex() == 0 && x.endIndex() == x.dataItems.length || (I = void 0, D = void 0), b = x.getPrivate("selectionMinY", I), y = x.getPrivate("selectionMaxY", D);
          }
          x.isHidden() || x.isShowing() || (v(b) && (c = Math.min(c, b)), v(y) && (h = Math.max(h, y)));
        }
      }), this.axisRanges.each((x) => {
        if (x.get("affectsMinMax")) {
          let b = x.get("value");
          b != null && (c = Math.min(c, b), h = Math.max(h, b)), b = x.get("endValue"), b != null && (c = Math.min(c, b), h = Math.max(h, b));
        }
      }), c > h && ([c, h] = [h, c]), v(i) ? c = l ? i : t : l && v(this._minReal) && (c = this._minReal), v(s) ? h = l ? s : e : l && v(this._maxReal) && (h = this._maxReal), c === h) {
        let x = c;
        if (c -= this._deltaMinMax, h += this._deltaMinMax, c < t) {
          let y = x - t;
          y == 0 && (y = this._deltaMinMax), c = x - y, h = x + y, l = !0;
        }
        let b = this._adjustMinMax(c, h, r, l);
        c = b.min, h = b.max;
      }
      let d = c, g = h;
      c -= (h - c) * a, h += (h - c) * n;
      let p = this._adjustMinMax(c, h, r);
      c = p.min, h = p.max, c = kt(c, t, e), h = kt(h, t, e), p = this._adjustMinMax(c, h, r, !0), l || (c = p.min, h = p.max);
      const m = this.get("syncWithAxis");
      m && (p = this._syncAxes(c, h, p.step, m.getPrivate("selectionMinFinal", m.getPrivate("minFinal", 0)), m.getPrivate("selectionMaxFinal", m.getPrivate("maxFinal", 1)), m.getPrivate("selectionStepFinal", m.getPrivate("step", 1))), c = p.min, h = p.max), l && (v(i) && (c = Math.max(c, i)), v(s) && (h = Math.min(h, s))), o && (c = d - (h - c) * a, h = g + (h - c) * n), this.get("logarithmic") && (c <= 0 && (c = d * (1 - Math.min(a, 0.99))), c < t && (c = t), h > e && (h = e));
      let u = Math.min(20, Math.ceil(Math.log(this.getPrivate("maxZoomFactor", 100) + 1) / Math.LN10) + 2), _ = j(this.valueToFinalPosition(c), u), f = j(this.valueToFinalPosition(h), u);
      this.setPrivateRaw("selectionMinFinal", c), this.setPrivateRaw("selectionMaxFinal", h), this.setPrivateRaw("selectionStepFinal", p.step), this.zoom(_, f);
    }
  }
  _getMinMax() {
    let t = this.get("min"), e = this.get("max"), i = 1 / 0, s = -1 / 0, a = this.get("extraMin", 0), n = this.get("extraMax", 0);
    this.get("logarithmic") && (this.get("extraMin") == null && (a = 0.1), this.get("extraMax") == null && (n = 0.2));
    let r = 1 / 0;
    if (w(this.series, (x) => {
      if (!x.get("ignoreMinMax")) {
        let b, y;
        if (x.get("xAxis") === this ? (b = x.getPrivate("minX"), y = x.getPrivate("maxX")) : x.get("yAxis") === this && (b = x.getPrivate("minY"), y = x.getPrivate("maxY")), v(b) && v(y)) {
          i = Math.min(i, b), s = Math.max(s, y);
          let A = y - b;
          A <= 0 && (A = Math.abs(y / 100)), A < r && (r = A);
        }
      }
    }), this.axisRanges.each((x) => {
      if (x.get("affectsMinMax")) {
        let b = x.get("value");
        b != null && (i = Math.min(i, b), s = Math.max(s, b)), b = x.get("endValue"), b != null && (i = Math.min(i, b), s = Math.max(s, b));
      }
    }), this.get("logarithmic")) {
      let x = this.get("treatZeroAs");
      v(x) && i <= 0 && (i = x);
    }
    if (i === 0 && s === 0 && (s = 0.9, i = -0.9), v(t) && (i = t), v(e) && (s = e), i === 1 / 0 || s === -1 / 0) return this.setPrivate("minFinal", void 0), void this.setPrivate("maxFinal", void 0);
    const o = i, l = s;
    let c = this.adapters.fold("min", i), h = this.adapters.fold("max", s);
    v(c) && (i = c), v(h) && (s = h), i = this._fixMin(i), s = this._fixMax(s), s - i <= 1 / Math.pow(10, 15) && (s - i != 0 ? this._deltaMinMax = (s - i) / 2 : this._getDelta(s), i -= this._deltaMinMax, s += this._deltaMinMax), i -= (s - i) * a, s += (s - i) * n, this.get("logarithmic") && (i < 0 && o >= 0 && (i = 0), s > 0 && l <= 0 && (s = 0)), this._minReal = i, this._maxReal = s;
    let d = this.get("strictMinMax"), g = this.get("strictMinMaxSelection", !1);
    g && (d = g);
    let p = d;
    v(e) && (p = !0);
    let m = this.get("renderer").gridCount(), u = this._adjustMinMax(i, s, m, p);
    i = u.min, s = u.max, u = this._adjustMinMax(i, s, m, !0), i = u.min, s = u.max, d && (i = v(t) ? t : this._minReal, s = v(e) ? e : this._maxReal, s - i <= 1e-8 && (i -= this._deltaMinMax, s += this._deltaMinMax), i -= (s - i) * a, s += (s - i) * n), c = this.adapters.fold("min", i), h = this.adapters.fold("max", s), v(c) && (i = c), v(h) && (s = h), r == 1 / 0 && (r = s - i);
    let _ = Math.round(Math.abs(Math.log(Math.abs(s - i)) * Math.LOG10E)) + 5;
    i = j(i, _), s = j(s, _);
    const f = this.get("syncWithAxis");
    if (f && (u = this._syncAxes(i, s, u.step, f.getPrivate("minFinal", f.getPrivate("min", 0)), f.getPrivate("maxFinal", f.getPrivate("max", 1)), f.getPrivate("step", 1)), i = u.min, s = u.max), this.setPrivateRaw("maxZoomFactor", Math.max(1, Math.ceil((s - i) / r * this.get("maxZoomFactor", 100)))), this._fixZoomFactor(), this.get("logarithmic") && (this._minLogAdjusted = i, i = this._minReal, s = this._maxReal, i <= 0 && (i = o * (1 - Math.min(a, 0.99)))), v(i) && v(s) && (this.getPrivate("minFinal") !== i || this.getPrivate("maxFinal") !== s)) {
      this.setPrivate("minFinal", i), this.setPrivate("maxFinal", s), this._saveMinMax(i, s);
      const x = this.get("interpolationDuration", 0), b = this.get("interpolationEasing");
      this.animatePrivate({ key: "min", to: i, duration: x, easing: b }), this.animatePrivate({ key: "max", to: s, duration: x, easing: b });
    }
  }
  _fixZoomFactor() {
  }
  _getDelta(t) {
    let e = Math.log(Math.abs(t)) * Math.LOG10E, i = Math.pow(10, Math.floor(e));
    i /= 10, this._deltaMinMax = i;
  }
  _saveMinMax(t, e) {
  }
  _adjustMinMax(t, e, i, s) {
    i <= 1 && (i = 1), i = Math.round(i);
    let a = t, n = e, r = e - t;
    r === 0 && (r = Math.abs(e));
    let o = Math.log(Math.abs(r)) * Math.LOG10E, l = Math.pow(10, Math.floor(o));
    l /= 10;
    let c = l;
    s && (c = 0), s ? (t = Math.floor(t / l) * l, e = Math.ceil(e / l) * l) : (t = Math.ceil(t / l) * l - c, e = Math.floor(e / l) * l + c), t < 0 && a >= 0 && (t = 0), e > 0 && n <= 0 && (e = 0), o = Math.log(Math.abs(r)) * Math.LOG10E, l = Math.pow(10, Math.floor(o)), l /= 100;
    let h = Math.ceil(r / i / l) * l, d = Math.pow(10, Math.floor(Math.log(Math.abs(h)) * Math.LOG10E)), g = Math.ceil(h / d);
    g > 5 ? g = 10 : g <= 5 && g > 2 && (g = 5), h = Math.ceil(h / (d * g)) * d * g;
    let p = this.get("maxPrecision");
    if (v(p)) {
      let f = le(h, p);
      p < Number.MAX_VALUE && h !== f && (h = f);
    }
    let m = 0;
    d < 1 && (m = Math.round(Math.abs(Math.log(Math.abs(d)) * Math.LOG10E)) + 1, h = j(h, m));
    let u, _ = Math.floor(t / h);
    return t = j(h * _, m), u = s ? Math.floor(e / h) : Math.ceil(e / h), u === _ && u++, (e = j(h * u, m)) < n && (e += h), t > a && (t -= h), h = this.fixSmallStep(h), { min: t, max: e, step: h };
  }
  getTooltipText(t, e) {
    const i = this.get("tooltipNumberFormat", this.get("numberFormat")), s = this.getNumberFormatter(), a = this.get("extraTooltipPrecision", 0), n = this.getPrivate("stepDecimalPlaces", 0) + a, r = j(this.positionToValue(t), n);
    return i ? s.format(r, i) : s.format(r, void 0, n);
  }
  getSeriesItem(t, e) {
    let i, s, a = this.getPrivate("name") + this.get("renderer").getPrivate("letter"), n = this.positionToValue(e);
    if (w(t.dataItems, (r, o) => {
      const l = Math.abs(r.get(a) - n);
      (i === void 0 || l < s) && (i = o, s = l);
    }), i != null) return t.dataItems[i];
  }
  zoomToValues(t, e, i) {
    const s = this.getPrivate("minFinal", 0), a = this.getPrivate("maxFinal", 0);
    this.getPrivate("min") != null && this.getPrivate("max") != null && this.zoom((t - s) / (a - s), (e - s) / (a - s), i);
  }
  _syncAxes(t, e, i, s, a, n) {
    if (this.get("syncWithAxis")) {
      let r = Math.round(a - s) / n, o = Math.round((e - t) / i), l = this.get("renderer").gridCount();
      if (v(r) && v(o)) {
        let c = !1, h = 0, d = 0.01 * (e - t), g = t, p = e, m = i;
        for (; c != 1; ) if (c = this._checkSync(g, p, m, r), h++, h > 500 && (c = !0), c) t = g, e = p, i = m;
        else {
          h / 3 == Math.round(h / 3) ? (g = t - d * h, t >= 0 && g < 0 && (g = 0)) : (p = e + d * h, p <= 0 && p > 0 && (p = 0));
          let u = this._adjustMinMax(g, p, l, !0);
          g = u.min, p = u.max, m = u.step;
        }
      }
    }
    return { min: t, max: e, step: i };
  }
  _checkSync(t, e, i, s) {
    let a = (e - t) / i;
    for (let n = 1; n < s; n++) if (j(a / n, 1) == s || a * n == s) return !0;
    return !1;
  }
  getCellWidthPosition() {
    let t = this.getPrivate("selectionMax", this.getPrivate("max")), e = this.getPrivate("selectionMin", this.getPrivate("min"));
    return v(t) && v(e) ? this.getPrivate("step", 1) / (t - e) : 0.05;
  }
}
Object.defineProperty(yt, "className", { enumerable: !0, configurable: !0, writable: !0, value: "ValueAxis" }), Object.defineProperty(yt, "classNames", { enumerable: !0, configurable: !0, writable: !0, value: H.classNames.concat([yt.className]) });
class ut extends Vt {
  constructor() {
    super(...arguments), Object.defineProperty(this, "_tickPoints", { enumerable: !0, configurable: !0, writable: !0, value: [] });
  }
}
Object.defineProperty(ut, "className", { enumerable: !0, configurable: !0, writable: !0, value: "AxisLabel" }), Object.defineProperty(ut, "classNames", { enumerable: !0, configurable: !0, writable: !0, value: Vt.classNames.concat([ut.className]) });
class pt extends Wt {
  constructor() {
    super(...arguments), Object.defineProperty(this, "_tickPoints", { enumerable: !0, configurable: !0, writable: !0, value: [] });
  }
}
Object.defineProperty(pt, "className", { enumerable: !0, configurable: !0, writable: !0, value: "AxisTick" }), Object.defineProperty(pt, "classNames", { enumerable: !0, configurable: !0, writable: !0, value: Wt.classNames.concat([pt.className]) });
class Z extends G {
  constructor() {
    super(...arguments), Object.defineProperty(this, "_axisLength", { enumerable: !0, configurable: !0, writable: !0, value: 100 }), Object.defineProperty(this, "_start", { enumerable: !0, configurable: !0, writable: !0, value: 0 }), Object.defineProperty(this, "_end", { enumerable: !0, configurable: !0, writable: !0, value: 1 }), Object.defineProperty(this, "_inversed", { enumerable: !0, configurable: !0, writable: !0, value: !1 }), Object.defineProperty(this, "_minSize", { enumerable: !0, configurable: !0, writable: !0, value: 0 }), Object.defineProperty(this, "chart", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_lc", { enumerable: !0, configurable: !0, writable: !0, value: 1 }), Object.defineProperty(this, "_ls", { enumerable: !0, configurable: !0, writable: !0, value: 0 }), Object.defineProperty(this, "_thumbDownPoint", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_downStart", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_downEnd", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "ticks", { enumerable: !0, configurable: !0, writable: !0, value: new B(E.new({}), () => pt._new(this._root, { themeTags: F(this.ticks.template.get("themeTags", []), this.get("themeTags", [])) }, [this.ticks.template])) }), Object.defineProperty(this, "grid", { enumerable: !0, configurable: !0, writable: !0, value: new B(E.new({}), () => st._new(this._root, { themeTags: F(this.grid.template.get("themeTags", []), this.get("themeTags", [])) }, [this.grid.template])) }), Object.defineProperty(this, "axisFills", { enumerable: !0, configurable: !0, writable: !0, value: new B(E.new({}), () => G._new(this._root, { themeTags: F(this.axisFills.template.get("themeTags", ["axis", "fill"]), this.get("themeTags", [])) }, [this.axisFills.template])) }), Object.defineProperty(this, "labels", { enumerable: !0, configurable: !0, writable: !0, value: new B(E.new({}), () => ut._new(this._root, { themeTags: F(this.labels.template.get("themeTags", []), this.get("themeTags", [])) }, [this.labels.template])) }), Object.defineProperty(this, "axis", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "thumb", { enumerable: !0, configurable: !0, writable: !0, value: void 0 });
  }
  makeTick(t, e) {
    const i = this.ticks.make();
    return i._setDataItem(t), t.setRaw("tick", i), i.set("themeTags", F(i.get("themeTags"), e)), this.axis.labelsContainer.children.push(i), this.ticks.push(i), i;
  }
  makeGrid(t, e) {
    const i = this.grid.make();
    return i._setDataItem(t), t.setRaw("grid", i), i.set("themeTags", F(i.get("themeTags"), e)), this.axis.gridContainer.children.push(i), this.grid.push(i), i;
  }
  makeAxisFill(t, e) {
    const i = this.axisFills.make();
    return i._setDataItem(t), i.set("themeTags", F(i.get("themeTags"), e)), this.axis.gridContainer.children.push(i), t.setRaw("axisFill", i), this.axisFills.push(i), i;
  }
  makeLabel(t, e) {
    const i = this.labels.make();
    return i.set("themeTags", F(i.get("themeTags"), e)), this.axis.labelsContainer.children.moveValue(i, 0), i._setDataItem(t), t.setRaw("label", i), this.labels.push(i), i;
  }
  axisLength() {
    return 0;
  }
  gridCount() {
    return this.axisLength() / this.get("minGridDistance", 50);
  }
  _updatePositions() {
  }
  _afterNew() {
    super._afterNew(), this.set("isMeasured", !1);
    const t = this.thumb;
    t && (this._disposers.push(t.events.on("pointerdown", (e) => {
      this._handleThumbDown(e);
    })), this._disposers.push(t.events.on("globalpointerup", (e) => {
      this._handleThumbUp(e);
    })), this._disposers.push(t.events.on("globalpointermove", (e) => {
      this._handleThumbMove(e);
    })));
  }
  _beforeChanged() {
    super._beforeChanged(), this.isDirty("minGridDistance") && this.root.events.once("frameended", () => {
      this.axis.markDirtySize();
    });
  }
  _changed() {
    if (super._changed(), this.isDirty("pan")) {
      const t = this.thumb;
      if (t) {
        const e = this.axis.labelsContainer, i = this.get("pan");
        i == "zoom" ? e.children.push(t) : i == "none" && e.children.removeValue(t);
      }
    }
  }
  _handleThumbDown(t) {
    this._thumbDownPoint = this.toLocal(t.point);
    const e = this.axis;
    this._downStart = e.get("start"), this._downEnd = e.get("end");
  }
  _handleThumbUp(t) {
    this._thumbDownPoint = void 0;
  }
  _handleThumbMove(t) {
    const e = this._thumbDownPoint;
    if (e) {
      const i = this.toLocal(t.point), s = this._downStart, a = this._downEnd, n = this._getPan(i, e) * Math.min(1, a - s) / 2;
      this.axis.zoom(s - n, a + n, 0);
    }
  }
  _getPan(t, e) {
    return 0;
  }
  positionToCoordinate(t) {
    return this._inversed ? (this._end - t) * this._axisLength : (t - this._start) * this._axisLength;
  }
  updateTooltipBounds(t) {
  }
  _updateSize() {
    this.markDirty(), this._clear = !0;
  }
  toAxisPosition(t) {
    const e = this._start || 0, i = this._end || 1;
    return t *= i - e, t = this.get("inversed") ? i - t : e + t;
  }
  toGlobalPosition(t) {
    const e = this._start || 0, i = this._end || 1;
    return this.get("inversed") ? t = i - t : t -= e, t /= i - e;
  }
  fixPosition(t) {
    return this.get("inversed") ? 1 - t : t;
  }
  _updateLC() {
  }
  toggleVisibility(t, e, i, s) {
    let a = this.axis;
    const n = a.get("start", 0), r = a.get("end", 1);
    e < n + (r - n) * (i - 1e-4) || e > n + (r - n) * (s + 1e-4) ? t.setPrivate("visible", !1) : t.setPrivate("visible", !0);
  }
  _positionTooltip(t, e) {
    const i = this.chart;
    i && (t.set("pointTo", this._display.toGlobal(e)), i.inPlot(e) || t.hide());
  }
  processAxis() {
  }
}
Object.defineProperty(Z, "className", { enumerable: !0, configurable: !0, writable: !0, value: "AxisRenderer" }), Object.defineProperty(Z, "classNames", { enumerable: !0, configurable: !0, writable: !0, value: G.classNames.concat([Z.className]) });
class Pt extends Z {
  constructor() {
    super(...arguments), Object.defineProperty(this, "thumb", { enumerable: !0, configurable: !0, writable: !0, value: nt.new(this._root, { width: k, isMeasured: !1, themeTags: ["axis", "x", "thumb"] }) });
  }
  _afterNew() {
    this._settings.themeTags = F(this._settings.themeTags, ["renderer", "x"]), super._afterNew(), this.setPrivateRaw("letter", "X");
    const t = this.grid.template;
    t.set("height", k), t.set("width", 0), t.set("draw", (e, i) => {
      e.moveTo(0, 0), e.lineTo(0, i.height());
    }), this.set("draw", (e, i) => {
      e.moveTo(0, 0), e.lineTo(i.width(), 0);
    });
  }
  _changed() {
    super._changed();
    const t = this.axis;
    t.ghostLabel.setPrivate("visible", !this.get("inside")), t.ghostLabel.set("x", -1e3);
    const e = "opposite", i = "inside";
    if (this.isDirty(e) || this.isDirty(i)) {
      const s = this.chart, a = t.children;
      if (this.get(i) ? t.addTag(i) : t.removeTag(i), s) {
        if (this.get(e)) {
          const n = s.topAxesContainer.children;
          n.indexOf(t) == -1 && n.insertIndex(0, t), t.addTag(e), a.moveValue(this);
        } else {
          const n = s.bottomAxesContainer.children;
          n.indexOf(t) == -1 && n.moveValue(t), t.removeTag(e), a.moveValue(this, 0);
        }
        t.ghostLabel._applyThemes(), this.labels.each((n) => {
          n._applyThemes();
        }), this.root._markDirtyRedraw();
      }
      t.markDirtySize();
    }
    this.thumb.setPrivate("height", t.labelsContainer.height());
  }
  _getPan(t, e) {
    return (e.x - t.x) / this.width();
  }
  toAxisPosition(t) {
    const e = this._start || 0, i = this._end || 1;
    return t = (t -= this._ls) * (i - e) / this._lc, t = this.get("inversed") ? i - t : e + t;
  }
  toGlobalPosition(t) {
    const e = this._start || 0, i = this._end || 1;
    return this.get("inversed") ? t = i - t : t -= e, t = t / (i - e) * this._lc, t += this._ls;
  }
  _updateLC() {
    const t = this.axis, e = t.parent;
    if (e) {
      const i = e.innerWidth();
      this._lc = this.axisLength() / i, this._ls = (t.x() - e.get("paddingLeft", 0)) / i;
    }
  }
  _updatePositions() {
    const t = this.axis, e = t.x() - _t(t.get("centerX", 0), t.width()) - t.parent.get("paddingLeft", 0);
    t.gridContainer.set("x", e), t.topGridContainer.set("x", e), t.bulletsContainer.set("y", this.y());
    const i = t.chart;
    if (i) {
      const s = i.plotContainer, a = t.axisHeader;
      let n = t.get("marginLeft", 0), r = t.x() - n;
      const o = t.parent;
      o && (r -= o.get("paddingLeft", 0)), a.children.length > 0 ? (n = t.axisHeader.width(), t.set("marginLeft", n + 1)) : a.set("width", n), a.setAll({ x: r, y: -1, height: s.height() + 2 });
    }
  }
  processAxis() {
    super.processAxis();
    const t = this.axis;
    t.get("width") == null && t.set("width", k);
    const e = this._root.verticalLayout;
    t.set("layout", e), t.labelsContainer.set("width", k), t.axisHeader.setAll({ layout: e });
  }
  axisLength() {
    return this.axis.width();
  }
  positionToPoint(t) {
    return { x: this.positionToCoordinate(t), y: 0 };
  }
  updateTick(t, e, i, s) {
    if (t) {
      v(e) || (e = 0);
      let a = 0.5;
      a = v(s) && s > 1 ? t.get("multiLocation", a) : t.get("location", a), v(i) && i != e && (e += (i - e) * a), t.set("x", this.positionToCoordinate(e));
      let n = t.get("length", 0);
      const r = t.get("inside", this.get("inside", !1));
      this.get("opposite") ? (t.set("y", k), r || (n *= -1)) : (t.set("y", 0), r && (n *= -1)), t.set("draw", (o) => {
        o.moveTo(0, 0), o.lineTo(0, n);
      }), this.toggleVisibility(t, e, t.get("minPosition", 0), t.get("maxPosition", 1));
    }
  }
  updateLabel(t, e, i, s) {
    if (t) {
      let a = 0.5;
      a = v(s) && s > 1 ? t.get("multiLocation", a) : t.get("location", a), v(e) || (e = 0);
      const n = t.get("inside", this.get("inside", !1));
      this.get("opposite") ? n ? (t.set("position", "absolute"), t.set("y", 0)) : (t.set("position", "relative"), t.set("y", k)) : n ? (t.set("y", 0), t.set("position", "absolute")) : (t.set("y", void 0), t.set("position", "relative")), v(i) && i != e && (e += (i - e) * a), t.set("x", this.positionToCoordinate(e)), this.toggleVisibility(t, e, t.get("minPosition", 0), t.get("maxPosition", 1));
    }
  }
  updateGrid(t, e, i) {
    if (t) {
      v(e) || (e = 0);
      let s = t.get("location", 0.5);
      v(i) && i != e && (e += (i - e) * s), t.set("x", this.positionToCoordinate(e)), this.toggleVisibility(t, e, 0, 1);
    }
  }
  updateBullet(t, e, i) {
    if (t) {
      const s = t.get("sprite");
      if (s) {
        v(e) || (e = 0);
        let a = t.get("location", 0.5);
        v(i) && i != e && (e += (i - e) * a);
        let n = this.axis.roundAxisPosition(e, a), r = this.axis._bullets[n], o = -1;
        if (this.get("opposite") && (o = 1), t.get("stacked")) if (r) {
          let l = r.get("sprite");
          l && s.set("y", l.y() + l.height() * o);
        } else s.set("y", 0);
        this.axis._bullets[n] = t, s.set("x", this.positionToCoordinate(e)), this.toggleVisibility(s, e, 0, 1);
      }
    }
  }
  updateFill(t, e, i) {
    if (t) {
      v(e) || (e = 0), v(i) || (i = 1);
      let s = this.positionToCoordinate(e), a = this.positionToCoordinate(i);
      this.fillDrawMethod(t, s, a);
    }
  }
  fillDrawMethod(t, e, i) {
    t.set("draw", (s) => {
      const a = this.axis.gridContainer.height(), n = this.width();
      i < e && ([i, e] = [e, i]), e > n || i < 0 || (s.moveTo(e, 0), s.lineTo(i, 0), s.lineTo(i, a), s.lineTo(e, a), s.lineTo(e, 0));
    });
  }
  positionTooltip(t, e) {
    this._positionTooltip(t, { x: this.positionToCoordinate(e), y: 0 });
  }
  updateTooltipBounds(t) {
    const e = this.get("inside"), i = 1e5;
    let s = this._display.toGlobal({ x: 0, y: 0 }), a = s.x, n = 0, r = this.axisLength(), o = i, l = "up";
    this.get("opposite") ? e ? (l = "up", n = s.y, o = i) : (l = "down", n = s.y - i, o = i) : e ? (l = "down", n = s.y - i, o = i) : (l = "up", n = s.y, o = i);
    const c = { left: a, right: a + r, top: n, bottom: n + o }, h = t.get("bounds");
    Gt(c, h) || (t.set("bounds", c), t.set("pointerOrientation", l));
  }
}
Object.defineProperty(Pt, "className", { enumerable: !0, configurable: !0, writable: !0, value: "AxisRendererX" }), Object.defineProperty(Pt, "classNames", { enumerable: !0, configurable: !0, writable: !0, value: Z.classNames.concat([Pt.className]) });
class wt extends Z {
  constructor() {
    super(...arguments), Object.defineProperty(this, "_downY", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "thumb", { enumerable: !0, configurable: !0, writable: !0, value: nt.new(this._root, { height: k, isMeasured: !1, themeTags: ["axis", "y", "thumb"] }) });
  }
  _afterNew() {
    this._settings.themeTags = F(this._settings.themeTags, ["renderer", "y"]), this._settings.opposite && this._settings.themeTags.push("opposite"), super._afterNew(), this.setPrivateRaw("letter", "Y");
    const t = this.grid.template;
    t.set("width", k), t.set("height", 0), t.set("draw", (e, i) => {
      e.moveTo(0, 0), e.lineTo(i.width(), 0);
    }), this.set("draw", (e, i) => {
      e.moveTo(0, 0), e.lineTo(0, i.height());
    });
  }
  _getPan(t, e) {
    return (t.y - e.y) / this.height();
  }
  _changed() {
    super._changed();
    const t = this.axis;
    t.ghostLabel.setPrivate("visible", !this.get("inside")), t.ghostLabel.set("y", -1e3);
    const e = this.thumb, i = "opposite", s = "inside", a = this.chart;
    if (this.isDirty(i) || this.isDirty(s)) {
      const r = t.children;
      if (this.get(s) ? t.addTag(s) : t.removeTag(s), a) {
        if (this.get(i)) {
          const o = a.rightAxesContainer.children;
          o.indexOf(t) == -1 && o.moveValue(t, 0), t.addTag(i), r.moveValue(this, 0);
        } else {
          const o = a.leftAxesContainer.children;
          o.indexOf(t) == -1 && o.moveValue(t), t.removeTag(i), r.moveValue(this);
        }
        t.ghostLabel._applyThemes(), this.labels.each((o) => {
          o._applyThemes();
        }), this.root._markDirtyRedraw();
      }
      t.markDirtySize();
    }
    const n = t.labelsContainer.width();
    a && (this.get(i) ? e.set("centerX", 0) : e.set("centerX", n)), e.setPrivate("width", n);
  }
  processAxis() {
    super.processAxis();
    const t = this.axis;
    t.get("height") == null && t.set("height", k);
    const e = this._root.horizontalLayout;
    t.set("layout", e), t.labelsContainer.set("height", k), t.axisHeader.set("layout", e);
  }
  _updatePositions() {
    const t = this.axis, e = t.y() - _t(t.get("centerY", 0), t.height());
    t.gridContainer.set("y", e), t.topGridContainer.set("y", e), t.bulletsContainer.set("x", this.x());
    const i = t.chart;
    if (i) {
      const s = i.plotContainer, a = t.axisHeader;
      let n = t.get("marginTop", 0);
      a.children.length > 0 ? (n = t.axisHeader.height(), t.set("marginTop", n + 1)) : a.set("height", n), a.setAll({ y: t.y() - n, x: -1, width: s.width() + 2 });
    }
  }
  axisLength() {
    return this.axis.innerHeight();
  }
  positionToPoint(t) {
    return { x: 0, y: this.positionToCoordinate(t) };
  }
  updateLabel(t, e, i, s) {
    if (t) {
      v(e) || (e = 0);
      let a = 0.5;
      a = v(s) && s > 1 ? t.get("multiLocation", a) : t.get("location", a);
      const n = this.get("opposite"), r = t.get("inside", this.get("inside", !1));
      n ? (t.set("x", 0), r ? t.set("position", "absolute") : t.set("position", "relative")) : r ? (t.set("x", 0), t.set("position", "absolute")) : (t.set("x", void 0), t.set("position", "relative")), v(i) && i != e && (e += (i - e) * a), t.set("y", this.positionToCoordinate(e)), this.toggleVisibility(t, e, t.get("minPosition", 0), t.get("maxPosition", 1));
    }
  }
  updateGrid(t, e, i) {
    if (t) {
      v(e) || (e = 0);
      let s = t.get("location", 0.5);
      v(i) && i != e && (e += (i - e) * s), t.set("y", this.positionToCoordinate(e)), this.toggleVisibility(t, e, 0, 1);
    }
  }
  updateTick(t, e, i, s) {
    if (t) {
      v(e) || (e = 0);
      let a = 0.5;
      a = v(s) && s > 1 ? t.get("multiLocation", a) : t.get("location", a), v(i) && i != e && (e += (i - e) * a), t.set("y", this.positionToCoordinate(e));
      let n = t.get("length", 0);
      const r = t.get("inside", this.get("inside", !1));
      this.get("opposite") ? (t.set("x", 0), r && (n *= -1)) : r || (n *= -1), t.set("draw", (o) => {
        o.moveTo(0, 0), o.lineTo(n, 0);
      }), this.toggleVisibility(t, e, t.get("minPosition", 0), t.get("maxPosition", 1));
    }
  }
  updateBullet(t, e, i) {
    if (t) {
      const s = t.get("sprite");
      if (s) {
        v(e) || (e = 0);
        let a = t.get("location", 0.5);
        v(i) && i != e && (e += (i - e) * a);
        let n = this.axis.roundAxisPosition(e, a), r = this.axis._bullets[n], o = 1;
        if (this.get("opposite") && (o = -1), t.get("stacked")) if (r) {
          let l = r.get("sprite");
          l && s.set("x", l.x() + l.width() * o);
        } else s.set("x", 0);
        this.axis._bullets[n] = t, s.set("y", this.positionToCoordinate(e)), this.toggleVisibility(s, e, 0, 1);
      }
    }
  }
  updateFill(t, e, i) {
    if (t) {
      v(e) || (e = 0), v(i) || (i = 1);
      let s = this.positionToCoordinate(e), a = this.positionToCoordinate(i);
      this.fillDrawMethod(t, s, a);
    }
  }
  fillDrawMethod(t, e, i) {
    t.set("draw", (s) => {
      const a = this.axis.gridContainer.width(), n = this.height();
      i < e && ([i, e] = [e, i]), e > n || i < 0 || (s.moveTo(0, e), s.lineTo(a, e), s.lineTo(a, i), s.lineTo(0, i), s.lineTo(0, e));
    });
  }
  positionToCoordinate(t) {
    return this._inversed ? (t - this._start) * this._axisLength : (this._end - t) * this._axisLength;
  }
  positionTooltip(t, e) {
    this._positionTooltip(t, { x: 0, y: this.positionToCoordinate(e) });
  }
  updateTooltipBounds(t) {
    const e = this.get("inside"), i = 1e5;
    let s = this._display.toGlobal({ x: 0, y: 0 }), a = s.y, n = 0, r = this.axisLength(), o = i, l = "right";
    this.get("opposite") ? e ? (l = "right", n = s.x - i, o = i) : (l = "left", n = s.x, o = i) : e ? (l = "left", n = s.x, o = i) : (l = "right", n = s.x - i, o = i);
    const c = { left: n, right: n + o, top: a, bottom: a + r }, h = t.get("bounds");
    Gt(c, h) || (t.set("bounds", c), t.set("pointerOrientation", l));
  }
  _updateLC() {
    const t = this.axis, e = t.parent;
    if (e) {
      const i = e.innerHeight();
      this._lc = this.axisLength() / i, this._ls = t.y() / i;
    }
  }
  toAxisPosition(t) {
    const e = this._start || 0, i = this._end || 1;
    return t = (t -= this._ls) * (i - e) / this._lc, t = this.get("inversed") ? e + t : i - t;
  }
  toGlobalPosition(t) {
    const e = this._start || 0, i = this._end || 1;
    return this.get("inversed") ? t -= e : t = i - t, t = t / (i - e) * this._lc, t += this._ls;
  }
  fixPosition(t) {
    return this.get("inversed") ? t : 1 - t;
  }
}
Object.defineProperty(wt, "className", { enumerable: !0, configurable: !0, writable: !0, value: "AxisRendererY" }), Object.defineProperty(wt, "classNames", { enumerable: !0, configurable: !0, writable: !0, value: Z.classNames.concat([wt.className]) });
class Dt extends U {
  constructor() {
    super(...arguments), Object.defineProperty(this, "_endIndex", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_strokeGenerator", { enumerable: !0, configurable: !0, writable: !0, value: Jt() }), Object.defineProperty(this, "_fillGenerator", { enumerable: !0, configurable: !0, writable: !0, value: ge() }), Object.defineProperty(this, "_legendStroke", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_legendFill", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "strokes", { enumerable: !0, configurable: !0, writable: !0, value: new B(E.new({}), () => G._new(this._root, { themeTags: F(this.strokes.template.get("themeTags", []), ["line", "series", "stroke"]) }, [this.strokes.template])) }), Object.defineProperty(this, "fills", { enumerable: !0, configurable: !0, writable: !0, value: new B(E.new({}), () => G._new(this._root, { themeTags: F(this.strokes.template.get("themeTags", []), ["line", "series", "fill"]) }, [this.fills.template])) }), Object.defineProperty(this, "_fillTemplate", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_strokeTemplate", { enumerable: !0, configurable: !0, writable: !0, value: void 0 }), Object.defineProperty(this, "_previousPoint", { enumerable: !0, configurable: !0, writable: !0, value: [0, 0, 0, 0] }), Object.defineProperty(this, "_dindex", { enumerable: !0, configurable: !0, writable: !0, value: 0 }), Object.defineProperty(this, "_sindex", { enumerable: !0, configurable: !0, writable: !0, value: 0 });
  }
  _afterNew() {
    this._fillGenerator.y0(function(t) {
      return t[3];
    }), this._fillGenerator.x0(function(t) {
      return t[2];
    }), this._fillGenerator.y1(function(t) {
      return t[1];
    }), this._fillGenerator.x1(function(t) {
      return t[0];
    }), super._afterNew();
  }
  makeStroke(t) {
    const e = this.mainContainer.children.push(t.make());
    return t.push(e), e;
  }
  makeFill(t) {
    const e = this.mainContainer.children.push(t.make());
    return t.push(e), e;
  }
  _updateChildren() {
    this._strokeTemplate = void 0, this._fillTemplate = void 0;
    let t = this.get("xAxis"), e = this.get("yAxis");
    if (this.isDirty("stroke")) {
      const i = this.get("stroke");
      this.strokes.template.set("stroke", i);
      const s = this._legendStroke;
      s && s.states.lookup("default").set("stroke", i);
    }
    if (this.isDirty("fill")) {
      const i = this.get("fill");
      this.fills.template.set("fill", i);
      const s = this._legendFill;
      s && s.states.lookup("default").set("fill", i);
    }
    if (this.isDirty("curveFactory")) {
      const i = this.get("curveFactory");
      i && (this._strokeGenerator.curve(i), this._fillGenerator.curve(i));
    }
    if (t.inited && e.inited) {
      if (this._axesDirty || this._valuesDirty || this._stackDirty || this.isDirty("vcx") || this.isDirty("vcy") || this._sizeDirty || this.isDirty("connect") || this.isDirty("curveFactory")) {
        this.fills.each((c) => {
          c.setPrivate("visible", !1);
        }), this.strokes.each((c) => {
          c.setPrivate("visible", !1);
        }), this.axisRanges.each((c) => {
          let h = c.fills;
          h && h.each((g) => {
            g.setPrivate("visible", !1);
          });
          let d = c.strokes;
          d && d.each((g) => {
            g.setPrivate("visible", !1);
          });
        });
        let i = this.startIndex(), s = this.strokes.template.get("templateField"), a = this.fills.template.get("templateField"), n = !0, r = !0;
        s && (n = !1), a && (r = !1);
        for (let c = i - 1; c >= 0; c--) {
          let h = this.dataItems[c], d = !0, g = h.dataContext;
          if (s && g[s] && (n = !0), a && g[a] && (r = !0), w(this._valueFields, (p) => {
            v(h.get(p)) || (d = !1);
          }), d && n && r) {
            i = c;
            break;
          }
        }
        let o = this.dataItems.length, l = this.endIndex();
        if (l < o) {
          l++;
          for (let c = l; c < o; c++) {
            let h = this.dataItems[c], d = !0;
            if (w(this._valueFields, (g) => {
              v(h.get(g)) || (d = !1);
            }), d) {
              l = c + 1;
              break;
            }
          }
        }
        if (i > 0 && i--, this._endIndex = l, this._clearGraphics(), this._sindex = 0, this._dindex = i, this.dataItems.length == 1) this._startSegment(0);
        else for (; this._dindex < l - 1; ) this._startSegment(this._dindex), this._sindex++;
      }
    } else this._skipped = !0;
    super._updateChildren();
  }
  _clearGraphics() {
    this.strokes.clear(), this.fills.clear();
  }
  _startSegment(t) {
    let e = this._endIndex, i = e;
    const s = this.get("autoGapCount"), a = this.get("connect"), n = this.makeFill(this.fills), r = this._fillTemplate, o = this.fills.template;
    r && r != o && (n.template = r), n.setPrivate("visible", !0);
    const l = this.makeStroke(this.strokes), c = this._strokeTemplate;
    c && c != this.strokes.template && (l.template = c), l.setPrivate("visible", !0);
    let h = this.get("xAxis"), d = this.get("yAxis"), g = this.get("baseAxis"), p = this.get("vcx", 1), m = this.get("vcy", 1), u = this._xField, _ = this._yField, f = this._xOpenField, x = this._yOpenField;
    const b = this.get("openValueXField"), y = this.get("openValueYField");
    b || (f = this._xField), y || (x = this._yField);
    const A = this.get("stacked"), I = h.basePosition(), D = d.basePosition();
    let O;
    O = g === d ? this._yField : this._xField;
    const T = [];
    let C = [];
    T.push(C);
    const N = this.strokes.template.get("templateField"), W = this.fills.template.get("templateField");
    let K = this.get("locationX", 0.5), J = this.get("locationY", 0.5), rt = this.get("openLocationX", K), L = this.get("openLocationY", J);
    const R = this.get("minDistance", 0);
    let M, Tt = this.fills.template.get("visible");
    this.axisRanges.length > 0 && (Tt = !0);
    let Mt = !1;
    (A || b || y) && (Mt = !0);
    const xt = { points: C, segments: T, stacked: A, getOpen: Mt, basePosX: I, basePosY: D, fillVisible: Tt, xField: u, yField: _, xOpenField: f, yOpenField: x, vcx: p, vcy: m, baseAxis: g, xAxis: h, yAxis: d, locationX: K, locationY: J, openLocationX: rt, openLocationY: L, minDistance: R };
    for (M = t; M < i; M++) {
      this._dindex = M;
      const z = this._dataItems[M];
      let Q = z.get(u), bt = z.get(_);
      if (Q == null || bt == null ? a || (C = [], T.push(C), xt.points = C) : this._getPoints(z, xt), N) {
        let X = z.dataContext[N];
        if (X) {
          if (X instanceof E || (X = E.new(X)), this._strokeTemplate = X, M > t) {
            i = M;
            break;
          }
          l.template = X;
        }
      }
      if (W) {
        let X = z.dataContext[W];
        if (X) {
          if (X instanceof E || (X = E.new(X)), this._fillTemplate = X, M > t) {
            i = M;
            break;
          }
          n.template = X;
        }
      }
      if (!a) {
        let X = this.dataItems[M + 1];
        X && g.shouldGap(z, X, s, O) && (C = [], T.push(C), xt.points = C);
      }
    }
    n.setRaw("userData", [t, M]), l.setRaw("userData", [t, M]), M === e && this._endLine(C, T[0][0]), l && this._drawStroke(l, T), n && this._drawFill(n, T), this.axisRanges.each((z) => {
      const Q = z.container, bt = z.fills, X = this.makeFill(bt);
      Q && Q.children.push(X), X.setPrivate("visible", !0), this._drawFill(X, T);
      const Qt = z.strokes, lt = this.makeStroke(Qt);
      Q && Q.children.push(lt), lt.setPrivate("visible", !0), this._drawStroke(lt, T), X.setRaw("userData", [t, M]), lt.setRaw("userData", [t, M]);
    });
  }
  _getPoints(t, e) {
    let i = e.points, s = t.get("locationX", e.locationX), a = t.get("locationY", e.locationY), n = e.xAxis.getDataItemPositionX(t, e.xField, s, e.vcx), r = e.yAxis.getDataItemPositionY(t, e.yField, a, e.vcy);
    if (this._shouldInclude(n)) {
      const o = this.getPoint(n, r), l = [o.x, o.y];
      if (o.x += this._x, o.y += this._y, t.set("point", o), e.fillVisible) {
        let c = n, h = r;
        if (e.baseAxis === e.xAxis ? h = e.basePosY : e.baseAxis === e.yAxis && (c = e.basePosX), e.getOpen) {
          let g = t.get(e.xOpenField), p = t.get(e.yOpenField);
          if (g != null && p != null) {
            let m = t.get("openLocationX", e.openLocationX), u = t.get("openLocationY", e.openLocationY);
            if (e.stacked) {
              let _ = t.get("stackToItemX"), f = t.get("stackToItemY");
              _ ? (c = e.xAxis.getDataItemPositionX(_, e.xField, m, _.component.get("vcx")), q(c) && (c = e.basePosX)) : c = e.yAxis === e.baseAxis ? e.basePosX : e.xAxis.getDataItemPositionX(t, e.xOpenField, m, e.vcx), f ? (h = e.yAxis.getDataItemPositionY(f, e.yField, u, f.component.get("vcy")), q(h) && (h = e.basePosY)) : h = e.xAxis === e.baseAxis ? e.basePosY : e.yAxis.getDataItemPositionY(t, e.yOpenField, u, e.vcy);
            } else c = e.xAxis.getDataItemPositionX(t, e.xOpenField, m, e.vcx), h = e.yAxis.getDataItemPositionY(t, e.yOpenField, u, e.vcy);
          }
        }
        let d = this.getPoint(c, h);
        l[2] = d.x, l[3] = d.y;
      }
      if (e.minDistance > 0) {
        const c = l[0], h = l[1], d = l[2], g = l[3], p = this._previousPoint, m = p[0], u = p[1], _ = p[2], f = p[3];
        (Math.hypot(c - m, h - u) > e.minDistance || d && g && Math.hypot(d - _, g - f) > e.minDistance) && (i.push(l), this._previousPoint = l);
      } else i.push(l);
    }
  }
  _endLine(t, e) {
  }
  _drawStroke(t, e) {
    t.get("visible") && !t.get("forceHidden") && t.set("draw", (i) => {
      w(e, (s) => {
        this._strokeGenerator.context(i), this._strokeGenerator(s);
      });
    });
  }
  _drawFill(t, e) {
    t.get("visible") && !t.get("forceHidden") && t.set("draw", (i) => {
      w(e, (s) => {
        this._fillGenerator.context(i), this._fillGenerator(s);
      });
    });
  }
  _processAxisRange(t) {
    super._processAxisRange(t), t.fills = new B(E.new({}), () => G._new(this._root, { themeTags: F(t.fills.template.get("themeTags", []), ["line", "series", "fill"]) }, [this.fills.template, t.fills.template])), t.strokes = new B(E.new({}), () => G._new(this._root, { themeTags: F(t.strokes.template.get("themeTags", []), ["line", "series", "stroke"]) }, [this.strokes.template, t.strokes.template]));
  }
  createLegendMarker(t) {
    const e = this.get("legendDataItem");
    if (e) {
      const i = e.get("marker"), s = e.get("markerRectangle");
      s && s.setPrivate("visible", !1), i.set("background", nt.new(i._root, { fillOpacity: 0, fill: ne(0) }));
      const a = i.children.push(G._new(i._root, { themeTags: ["line", "series", "legend", "marker", "stroke"], interactive: !1 }, [this.strokes.template]));
      this._legendStroke = a;
      const n = i.children.push(G._new(i._root, { themeTags: ["line", "series", "legend", "marker", "fill"] }, [this.fills.template]));
      this._legendFill = n;
      const r = this._root.interfaceColors.get("disabled");
      if (a.states.create("disabled", { fill: r, stroke: r }), n.states.create("disabled", { fill: r, stroke: r }), this.bullets.length > 0) {
        const o = this.bullets.getIndex(0);
        if (o) {
          const l = o(i._root, this, new ot(this, { legend: !0 }, {}));
          if (l) {
            const c = l.get("sprite");
            c instanceof G && c.states.create("disabled", { fill: r, stroke: r }), c && (c.set("tooltipText", void 0), c.set("tooltipHTML", void 0), i.children.push(c), c.setAll({ x: i.width() / 2, y: i.height() / 2 }), i.events.on("boundschanged", () => {
              c.setAll({ x: i.width() / 2, y: i.height() / 2 });
            }));
          }
        }
      }
    }
  }
}
Object.defineProperty(Dt, "className", { enumerable: !0, configurable: !0, writable: !0, value: "LineSeries" }), Object.defineProperty(Dt, "classNames", { enumerable: !0, configurable: !0, writable: !0, value: U.classNames.concat([Dt.className]) });
class $ extends U {
  constructor() {
    super(...arguments), Object.defineProperty(this, "_ph", { enumerable: !0, configurable: !0, writable: !0, value: 0 }), Object.defineProperty(this, "_pw", { enumerable: !0, configurable: !0, writable: !0, value: 0 });
  }
  _makeGraphics(t, e) {
    return this.makeColumn(e, t);
  }
  _makeFieldNames() {
    super._makeFieldNames();
    const t = this.get("xAxis"), e = this.get("yAxis"), i = "CategoryAxis", s = "ValueAxis";
    t.isType(i) && (this.get("openCategoryXField") || (this._xOpenField = this._xField)), t.isType(s) && (this.get("openValueXField") || (this._xOpenField = this._xField)), e.isType(i) && (this.get("openCategoryYField") || (this._yOpenField = this._yField)), e.isType(s) && (this.get("openValueYField") || (this._yOpenField = this._yField));
  }
  _prepareChildren() {
    super._prepareChildren();
    const t = this.get("xAxis"), e = this.get("yAxis"), i = this.dataItems.length, s = Math.max(0, this.startIndex() - 2), a = Math.min(this.endIndex() + 2, i - 1);
    if (t.inited && e.inited) for (let n = s; n <= a; n++) {
      let r = this.dataItems[n];
      this._createGraphics(r);
    }
  }
  _updateChildren() {
    const t = this.chart;
    t && (this._ph = t.plotContainer.height(), this._pw = t.plotContainer.width());
    const e = this.get("xAxis"), i = this.get("yAxis"), s = this.get("baseAxis"), a = this.columns.template;
    this.isDirty("fill") && a.get("fill") == null && a.set("fill", this.get("fill")), this.isDirty("stroke") && a.get("stroke") == null && a.set("stroke", this.get("stroke"));
    let n = 0, r = 0, o = 0;
    w(s.series, (_) => {
      if (_ instanceof $) {
        const f = _.get("stacked");
        f && o == 0 && r++, !f && _.get("clustered") && r++;
      }
      _ === this && (n = r - 1), o++;
    }), this.get("clustered") || (n = 0, r = 1), r === 0 && (r = 1, n = 0);
    const l = e.get("renderer"), c = i.get("renderer"), h = "cellStartLocation", d = "cellEndLocation", g = l.get(h, 0), p = l.get(d, 1), m = c.get(h, 0), u = c.get(d, 1);
    if (this._aLocationX0 = g + n / r * (p - g), this._aLocationX1 = g + (n + 1) / r * (p - g), this._aLocationY0 = m + n / r * (u - m), this._aLocationY1 = m + (n + 1) / r * (u - m), e.inited && i.inited) {
      if (this._axesDirty || this._valuesDirty || this._stackDirty || this.isDirty("vcx") || this.isDirty("vcy") || this._sizeDirty) {
        const _ = this.dataItems.length;
        let f = Math.max(0, this.startIndex() - 2), x = Math.min(this.endIndex() + 2, _ - 1);
        for (let y = 0; y < f; y++) this._toggleColumn(this.dataItems[y], !1);
        let b = this.dataItems[f];
        for (let y = f; y <= x; y++) {
          let A = this.dataItems[y];
          if (A.get("valueX") != null && A.get("valueY") != null) {
            if (b = A, y > 0 && f > 0) for (let I = y - 1; I >= 0; I--) {
              let D = this.dataItems[I];
              if (D.get("valueX") != null && D.get("valueY") != null) {
                b = D;
                break;
              }
            }
            break;
          }
          this._toggleColumn(A, !1);
        }
        for (let y = f; y <= x; y++) {
          let A = this.dataItems[y];
          this._updateGraphics(A, b), A.get("valueX") != null && A.get("valueY") != null && (b = A);
        }
        for (let y = x + 1; y < _; y++) this._toggleColumn(this.dataItems[y], !1);
      }
    } else this._skipped = !0;
    this.updateLegendMarker(this.get("tooltipDataItem")), super._updateChildren();
  }
  _createGraphics(t) {
    let e = t.get("graphics");
    if (!e) {
      e = this._makeGraphics(this.columns, t), t.set("graphics", e), e._setDataItem(t);
      const i = t.get("legendDataItem");
      if (i) {
        const a = i.get("markerRectangle");
        if (a) {
          const n = a.states.lookup("default");
          w(Lt, (r) => {
            const o = e.get(r, this.get(r));
            a.set(r, o), n.set(r, o);
          });
        }
      }
      let s = t.get("rangeGraphics");
      s && w(s, (a) => {
        a.dispose();
      }), s = [], t.setRaw("rangeGraphics", s), this.axisRanges.each((a) => {
        const n = a.container, r = this._makeGraphics(a.columns, t);
        s && s.push(r), r.setPrivate("list", a.columns), n.children.push(r);
      });
    }
  }
  createAxisRange(t) {
    return w(this.dataItems, (e) => {
      const i = e.get("graphics");
      i && (i.dispose(), e.set("graphics", void 0));
    }), super.createAxisRange(t);
  }
  _updateGraphics(t, e) {
    let i = t.get("graphics");
    const s = this._xField, a = this._yField, n = t.get(s), r = t.get(a);
    if (n != null && r != null) {
      const o = this._xOpenField, l = this._yOpenField, c = this.get("locationX", t.get("locationX", 0.5)), h = this.get("locationY", t.get("locationY", 0.5)), d = this.get("openLocationX", t.get("openLocationX", c)), g = this.get("openLocationY", t.get("openLocationY", h)), p = i.get("width"), m = i.get("height"), u = this.get("stacked"), _ = this.get("xAxis"), f = this.get("yAxis"), x = this.get("baseAxis"), b = _.get("start"), y = _.get("end"), A = f.get("start"), I = f.get("end");
      let D, O, T, C, N = this.get("vcy", 1), W = this.get("vcx", 1), K = !1, J = !1;
      if (f.isType("CategoryAxis") && _.isType("CategoryAxis")) {
        let L = this._aLocationX0 + d - 0.5, R = this._aLocationX1 + c - 0.5;
        if (p instanceof et) {
          let M = (R - L) * (1 - p.value) / 2;
          L += M, R -= M;
        }
        if (D = _.getDataItemPositionX(t, o, L, W), O = _.getDataItemPositionX(t, s, R, W), L = this._aLocationY0 + g - 0.5, R = this._aLocationY1 + h - 0.5, m instanceof et) {
          let M = (R - L) * (1 - m.value) / 2;
          L += M, R -= M;
        }
        T = f.getDataItemPositionY(t, l, L, N), C = f.getDataItemPositionY(t, a, R, N), t.setRaw("point", { x: D + (O - D) / 2, y: T + (C - T) / 2 });
      } else if (_ === x) {
        let L = this._aLocationX0 + d - 0.5, R = this._aLocationX1 + c - 0.5;
        if (p instanceof et) {
          let M = (R - L) * (1 - p.value) / 2;
          L += M, R -= M;
        }
        if (D = _.getDataItemPositionX(t, o, L, W), O = _.getDataItemPositionX(t, s, R, W), T = f.getDataItemPositionY(t, a, h, N), this._yOpenField !== this._yField) C = f.getDataItemPositionY(t, l, g, N);
        else if (u) {
          let M = t.get("stackToItemY");
          C = M ? f.getDataItemPositionY(M, a, g, M.component.get("vcy")) : f.basePosition();
        } else C = f.basePosition();
        t.setRaw("point", { x: D + (O - D) / 2, y: T }), J = !0;
      } else if (f === x) {
        let L = this._aLocationY0 + g - 0.5, R = this._aLocationY1 + h - 0.5;
        if (m instanceof et) {
          let M = (R - L) * (1 - m.value) / 2;
          L += M, R -= M;
        }
        if (T = f.getDataItemPositionY(t, l, L, N), C = f.getDataItemPositionY(t, a, R, N), O = _.getDataItemPositionX(t, s, c, W), this._xOpenField !== this._xField) D = _.getDataItemPositionX(t, o, d, W);
        else if (u) {
          let M = t.get("stackToItemX");
          D = M ? _.getDataItemPositionX(M, s, d, M.component.get("vcx")) : _.basePosition();
        } else D = _.basePosition();
        K = !0, t.setRaw("point", { x: O, y: T + (C - T) / 2 });
      }
      this._updateSeriesGraphics(t, i, D, O, T, C, K, J), D < b && O < b || D > y && O > y || T < A && C <= A || T >= I && C > I || q(D) || q(T) ? this._toggleColumn(t, !1) : this._toggleColumn(t, !0);
      let rt = t.get("rangeGraphics");
      rt && w(rt, (L) => {
        this._updateSeriesGraphics(t, L, D, O, T, C, K, J);
      }), this._applyGraphicsStates(t, e);
    }
  }
  _updateSeriesGraphics(t, e, i, s, a, n, r, o) {
    const l = e.get("width"), c = e.get("height"), h = e.get("maxWidth"), d = e.get("maxHeight"), g = this.getPoint(i, a), p = this.getPoint(s, n), m = t.get("point");
    if (m) {
      const u = this.getPoint(m.x, m.y);
      m.x = u.x + this._x, m.y = u.y + this._y;
    }
    if (i = g.x, s = p.x, a = g.y, n = p.y, v(l)) {
      const u = (s - i - l) / 2;
      i += u, s -= u;
    }
    if (v(h) && h < Math.abs(s - i)) {
      const u = (s - i - h) / 2;
      i += u, s -= u;
    }
    if (v(c)) {
      const u = (n - a - c) / 2;
      a += u, n -= u;
    }
    if (v(d) && d < Math.abs(n - a)) {
      const u = (n - a - d) / 2;
      a += u, n -= u;
    }
    this.get("adjustBulletPosition") && (r && (s = Math.min(Math.max(0, s), this._pw), i = Math.min(Math.max(0, i), this._pw)), o && (a = Math.min(Math.max(0, a), this._ph), n = Math.min(Math.max(0, n), this._ph))), t.setRaw("left", i), t.setRaw("right", s), t.setRaw("top", a), t.setRaw("bottom", n), e.setPrivate("width", s - i), e.setPrivate("height", n - a), e.set("x", i), e.set("y", n - (n - a));
  }
  _handleDataSetChange() {
    super._handleDataSetChange(), w(this._dataItems, (t) => {
      this._toggleColumn(t, !1);
    });
  }
  _applyGraphicsStates(t, e) {
    const i = t.get("graphics"), s = i.states.lookup("dropFromOpen"), a = i.states.lookup("riseFromOpen"), n = i.states.lookup("dropFromPrevious"), r = i.states.lookup("riseFromPrevious");
    if (s || n || a || r) {
      const o = this.get("xAxis"), l = this.get("yAxis"), c = this.get("baseAxis");
      let h, d, g;
      c === o && l.isType("ValueAxis") ? (h = t.get(this._yOpenField), d = t.get(this._yField), g = e.get(this._yField)) : c === l && o.isType("ValueAxis") && (h = t.get(this._xOpenField), d = t.get(this._xField), g = e.get(this._xField)), v(h) && v(d) && (d < h ? s && s.apply() : a && a.apply(), v(g) && (d < g ? n && n.apply() : r && r.apply()));
    }
  }
  disposeDataItem(t) {
    super.disposeDataItem(t);
    const e = t.get("graphics");
    e && (this.columns.removeValue(e), e.dispose());
    const i = t.get("rangeGraphics");
    i && w(i, (s) => {
      const a = s.getPrivate("list");
      a && a.removeValue(s), s.dispose();
    });
  }
  hideDataItem(t, e) {
    const i = Object.create(null, { hideDataItem: { get: () => super.hideDataItem } });
    return it(this, void 0, void 0, function* () {
      const s = [i.hideDataItem.call(this, t, e)], a = t.get("graphics");
      a && s.push(a.hide(e));
      const n = t.get("rangeGraphics");
      n && w(n, (r) => {
        s.push(r.hide(e));
      }), yield Promise.all(s);
    });
  }
  _toggleColumn(t, e) {
    const i = t.get("graphics");
    i && i.setPrivate("visible", e);
    const s = t.get("rangeGraphics");
    s && w(s, (n) => {
      n.setPrivate("visible", e);
    });
    const a = t.bullets;
    a && w(a, (n) => {
      n.setPrivate("hidden", !e);
    });
  }
  showDataItem(t, e) {
    const i = Object.create(null, { showDataItem: { get: () => super.showDataItem } });
    return it(this, void 0, void 0, function* () {
      const s = [i.showDataItem.call(this, t, e)], a = t.get("graphics");
      a && s.push(a.show(e));
      const n = t.get("rangeGraphics");
      n && w(n, (r) => {
        s.push(r.show(e));
      }), yield Promise.all(s);
    });
  }
  updateLegendMarker(t) {
    let e = this.get("legendDataItem");
    if (this.get("useLastColorForLegendMarker") && !t) {
      const i = this.dataItems[this.endIndex() - 1];
      i && (t = i);
    }
    if (e) {
      let i = this.columns.template;
      if (t) {
        let a = t.get("graphics");
        a && (i = a);
      }
      const s = e.get("markerRectangle");
      if (s && !e.get("itemContainer").get("disabled")) {
        const a = s.states.lookup("default");
        w(Lt, (n) => {
          const r = i.get(n, this.get(n));
          s.set(n, r), a.set(n, r);
        });
      }
    }
  }
  _getTooltipTarget(t) {
    return this.get("seriesTooltipTarget") == "bullet" ? super._getTooltipTarget(t) : t.get("graphics") || this;
  }
}
Object.defineProperty($, "className", { enumerable: !0, configurable: !0, writable: !0, value: "BaseColumnSeries" }), Object.defineProperty($, "classNames", { enumerable: !0, configurable: !0, writable: !0, value: U.classNames.concat([$.className]) });
class at extends H {
  constructor() {
    super(...arguments), Object.defineProperty(this, "_frequency", { enumerable: !0, configurable: !0, writable: !0, value: 1 }), Object.defineProperty(this, "_itemMap", { enumerable: !0, configurable: !0, writable: !0, value: {} });
  }
  _afterNew() {
    this._settings.themeTags = F(this._settings.themeTags, ["axis"]), this.fields.push("category"), this.setPrivateRaw("name", "category"), this.addTag("category"), super._afterNew();
  }
  _prepareChildren() {
    super._prepareChildren();
    const t = this.dataItems.length;
    let e = 0;
    this._valuesDirty && (this._itemMap = {}, w(this.dataItems, (i) => {
      i.setRaw("index", e), this._itemMap[i.get("category")] = i, e++;
    }), this.setPrivateRaw("maxZoomFactor", t)), this.setPrivateRaw("startIndex", Math.max(Math.round(this.get("start", 0) * t), 0)), this.setPrivateRaw("endIndex", Math.min(Math.round(this.get("end", 1) * t), t)), (this._sizeDirty || this._valuesDirty || this.isDirty("start") || this.isDirty("end") || this.isPrivateDirty("endIndex") || this.isPrivateDirty("startIndex") || this.isPrivateDirty("width") || this.isPrivateDirty("height")) && this.dataItems.length > 0 && (this._handleRangeChange(), this._prepareAxisItems(), this._updateAxisRanges());
  }
  _handleRangeChange() {
    w(this.series, (t) => {
      let e = this.dataItems[this.startIndex()].get("category"), i = this.dataItems[this.endIndex() - 1].get("category"), s = t.get("baseAxis"), a = t.get("xAxis"), n = t.get("yAxis");
      if (a instanceof at && n instanceof at) t._markDirtyAxes();
      else if (s === this) {
        let r, o, l = n;
        if (a === s ? (t.get("categoryXField") && (r = "categoryX"), t.get("openCategoryXField") && (o = "openCategoryX")) : n === s && (t.get("categoryYField") && (r = "categoryY"), t.get("openCategoryYField") && (o = "openCategoryY"), l = a), l.className == "ValueAxis" && (r || o)) {
          let c, h;
          for (let m = 0, u = t.dataItems.length; m < u; m++) {
            let _ = t.dataItems[m];
            if (r && _.get(r) === e) {
              c = _;
              break;
            }
            if (o && _.get(o) === e) {
              c = _;
              break;
            }
          }
          for (let m = t.dataItems.length - 1; m >= 0; m--) {
            let u = t.dataItems[m];
            if (r && u.get(r) === i) {
              h = u;
              break;
            }
            if (o && u.get(o) === i) {
              h = u;
              break;
            }
          }
          let d = 0, g = t.dataItems.length;
          c && (d = t.dataItems.indexOf(c)), h && (g = t.dataItems.indexOf(h) + 1), t.setPrivate("startIndex", d), t.setPrivate("endIndex", g);
          let p = !1;
          for (let m = d; m < g; m++) {
            const u = t.dataItems[m];
            if (w(t.__valueXShowFields, (_) => {
              u.get(_) != null && (p = !0);
            }), w(t.__valueYShowFields, (_) => {
              u.get(_) != null && (p = !0);
            }), p) break;
          }
          t.setPrivate("outOfSelection", !p);
        }
        t._markDirtyAxes();
      }
    });
  }
  _prepareAxisItems() {
    var t;
    const e = this.get("renderer"), i = this.dataItems.length;
    let s = this.startIndex();
    s > 0 && s--;
    let a = this.endIndex();
    a < i && a++;
    const n = e.get("minorLabelsEnabled"), r = e.get("minorGridEnabled", n);
    let o = e.axisLength() / Math.max(e.get("minGridDistance"), 1), l = Math.max(1, Math.min(i, Math.ceil((a - s) / o)));
    s = Math.floor(s / l) * l, this._frequency = l;
    for (let h = 0; h < i; h++) this._toggleDataItem(this.dataItems[h], !1);
    let c = this.dataItems[s].get("index", 0);
    for (let h = s; h < a; h += l) {
      let d = this.dataItems[h];
      this._createAssets(d, []), this._toggleDataItem(d, !0);
      let g = l;
      r && (g = 1), this._prepareDataItem(d, c, g), c++;
    }
    if (e.get("minorGridEnabled")) for (let h = s; h < a; h++) {
      let d = this.dataItems[h];
      h % l != 0 && (this._createAssets(d, ["minor"], !0), this._toggleDataItem(d, !0), this._prepareDataItem(d, 0, 1), n || (t = d.get("label")) === null || t === void 0 || t.setPrivate("visible", !1));
    }
    this._updateGhost();
  }
  _prepareDataItem(t, e, i) {
    let s = this.get("renderer"), a = t.get("categoryLocation", 0), n = t.get("endCategoryLocation", 1), r = t.get("index");
    v(r) || (r = this.categoryToIndex(t.get("category")));
    let o, l = this.indexToPosition(r, a), c = t.get("endCategory");
    c ? (o = this.categoryToIndex(c), v(o) || (o = r)) : o = r;
    let h, d, g = this.indexToPosition(o, n);
    h = t.get("isRange") ? o : r + this._frequency - 1, d = this.indexToPosition(h, n), s.updateLabel(t.get("label"), l, g, i), s.updateGrid(t.get("grid"), l, g), s.updateTick(t.get("tick"), l, g, i), s.updateFill(t.get("axisFill"), l, d), this._processBullet(t), s.updateBullet(t.get("bullet"), l, g);
    const p = this.get("fillRule");
    p && p(t, e);
  }
  startIndex() {
    let t = this.dataItems.length;
    return Math.min(Math.max(this.getPrivate("startIndex", 0), 0), t - 1);
  }
  endIndex() {
    let t = this.dataItems.length;
    return Math.max(1, Math.min(this.getPrivate("endIndex", t), t));
  }
  baseValue() {
  }
  basePosition() {
    return 0;
  }
  getX(t) {
    let e = this._itemMap[t];
    return e ? this._settings.renderer.positionToCoordinate(this.indexToPosition(e.get("index", 0))) : NaN;
  }
  getY(t) {
    let e = this._itemMap[t];
    return e ? this._settings.renderer.positionToCoordinate(this.indexToPosition(e.get("index", 0))) : NaN;
  }
  getDataItemPositionX(t, e, i, s) {
    const a = t.get(e), n = this._itemMap[a];
    return n ? this.indexToPosition(n.get("index", 0), i) : NaN;
  }
  getDataItemCoordinateX(t, e, i, s) {
    return this._settings.renderer.positionToCoordinate(this.getDataItemPositionX(t, e, i, s));
  }
  getDataItemPositionY(t, e, i, s) {
    const a = t.get(e), n = this._itemMap[a];
    return n ? this.indexToPosition(n.get("index", 0), i) : NaN;
  }
  getDataItemCoordinateY(t, e, i, s) {
    return this._settings.renderer.positionToCoordinate(this.getDataItemPositionY(t, e, i, s));
  }
  indexToPosition(t, e) {
    v(e) || (e = 0.5);
    let i = this.dataItems.length, s = this.get("startLocation", 0);
    i -= s, i -= 1 - this.get("endLocation", 1);
    let a = (t + e - s) / i, n = this.dataItems[t];
    return n && (a += n.get("deltaPosition", 0)), a;
  }
  categoryToIndex(t) {
    let e = this._itemMap[t];
    return e ? e.get("index") : NaN;
  }
  dataItemToPosition(t) {
    return this.indexToPosition(t.get("index"));
  }
  roundAxisPosition(t, e) {
    return t += (0.5 - e) / this.dataItems.length, this.indexToPosition(this.axisPositionToIndex(t), e);
  }
  axisPositionToIndex(t) {
    let e = this.dataItems.length;
    return kt(Math.floor(t * e), 0, e - 1);
  }
  getTooltipText(t, e) {
    const i = this.dataItems[this.axisPositionToIndex(t)];
    if (i) {
      const s = i.get("label");
      if (s) return he(s, this.get("tooltipText", ""));
    }
  }
  _updateTooltipText(t, e) {
    t._setDataItem(this.dataItems[this.axisPositionToIndex(e)]), t.label.text.markDirtyText();
  }
  getSeriesItem(t, e) {
    if (this.dataItems.length > 0) {
      let i = this.getPrivate("name") + this.get("renderer").getPrivate("letter"), s = this.axisPositionToIndex(e), a = t.dataItems[s], n = this.dataItems[s], r = n.get("category");
      if (a && n && a.get(i) === r) return a;
      for (let o = 0, l = t.dataItems.length; o < l; o++) {
        let c = t.dataItems[o];
        if (c.get(i) === r) return c;
      }
    }
  }
  zoomToIndexes(t, e, i) {
    let s = this.dataItems.length;
    this.zoom(t / s, e / s, i);
  }
  zoomToCategories(t, e, i) {
    this.zoomToIndexes(this.categoryToIndex(t), this.categoryToIndex(e) + 1, i);
  }
  getCellWidthPosition() {
    return this._frequency / this.dataItems.length / (this.get("end", 1) - this.get("start", 0));
  }
}
Object.defineProperty(at, "className", { enumerable: !0, configurable: !0, writable: !0, value: "CategoryAxis" }), Object.defineProperty(at, "classNames", { enumerable: !0, configurable: !0, writable: !0, value: H.classNames.concat([at.className]) });
class At extends $ {
  constructor() {
    super(...arguments), Object.defineProperty(this, "columns", { enumerable: !0, configurable: !0, writable: !0, value: new B(E.new({}), () => jt._new(this._root, { position: "absolute", themeTags: F(this.columns.template.get("themeTags", []), ["series", "column"]) }, [this.columns.template])) });
  }
  makeColumn(t, e) {
    const i = this.mainContainer.children.push(e.make());
    return i._setDataItem(t), e.push(i), i;
  }
  _processAxisRange(t) {
    super._processAxisRange(t), t.columns = new B(E.new({}), () => jt._new(this._root, { position: "absolute", themeTags: F(t.columns.template.get("themeTags", []), ["series", "column"]) }, [this.columns.template, t.columns.template]));
  }
}
Object.defineProperty(At, "className", { enumerable: !0, configurable: !0, writable: !0, value: "ColumnSeries" }), Object.defineProperty(At, "classNames", { enumerable: !0, configurable: !0, writable: !0, value: $.classNames.concat([At.className]) });
export {
  Pt as AxisRendererXAm5,
  wt as AxisRendererYAm5,
  at as CategoryAxisAm5,
  At as ColumnSeriesAm5,
  Dt as LineSeriesAm5,
  yt as ValueAxisAm5,
  ft as XYChartAm5,
  vt as XYCursorAm5
};
//# sourceMappingURL=xyChart-CijiR5-v.js.map
