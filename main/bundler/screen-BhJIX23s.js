import { defineComponent as x, ref as u, reactive as f, watch as S, onBeforeUnmount as V, createElementBlock as w, openBlock as g, createElementVNode as s, createTextVNode as I, toDisplayString as p, createVNode as b, unref as r, withKeys as T, withModifiers as N, markRaw as E, createBlock as B, resolveDynamicComponent as Y, inject as D, onMounted as G, resolveComponent as P, withCtx as O } from "vue";
import { _ as q, G as h, a4 as z } from "./main-6dWPqJr6.js";
import "pinia";
import { useI18n as R } from "vue-i18n";
import "screenfull";
import "lodash-es";
import "vue-tippy";
import "linkify-html";
import "@popperjs/core";
import "@arcgis/core/Color";
import "@arcgis/core/config";
import "@arcgis/core/core/reactiveUtils.js";
import "@arcgis/core/geometry/Extent";
import "@arcgis/core/geometry/Multipoint";
import "@arcgis/core/geometry/Point";
import "@arcgis/core/geometry/Polygon";
import "@arcgis/core/geometry/Polyline";
import "@arcgis/core/geometry/SpatialReference";
import "@arcgis/core/geometry/support/jsonUtils";
import "@arcgis/core/Graphic";
import "@arcgis/core/request";
import "@arcgis/core/symbols/PictureMarkerSymbol";
import "@arcgis/core/symbols/SimpleFillSymbol";
import "@arcgis/core/symbols/SimpleLineSymbol";
import "@arcgis/core/symbols/SimpleMarkerSymbol";
import "@arcgis/core/symbols/support/jsonUtils";
import "@arcgis/map-components/components/arcgis-swipe";
import "deepmerge";
import "@terraformer/spatial";
import "proj4";
import "throttle-debounce";
import "@terraformer/arcgis";
import "csv2geojson";
import "redaxios";
import "await-to-js";
import "svg.js";
import Z from "vue-slider-component";
import "vue-slider-component/theme/default.css";
import { T as U } from "./toggle-switch-control-ByqqIuAV.js";
const K = { class: "rv-label" }, F = ["innerHTML"], J = { class: "flex flex-row pl-30" }, Q = /* @__PURE__ */ x({
  __name: "slider-control",
  props: {
    name: String,
    icon: String,
    config: {
      type: Object,
      required: !0
    }
  },
  setup(i) {
    const n = i, o = u(n.config.value), t = u(!!n.config.disabled), d = f([]);
    return d.push(
      // watch the config for changes to the opacity value
      S(
        () => n.config,
        (a) => {
          o.value = a.value, t.value = !!a.disabled;
        },
        { deep: !0 }
      )
    ), V(() => {
      d.forEach((a) => a());
    }), (a, c) => (g(), w("div", null, [
      s("div", K, [
        s("div", {
          innerHTML: i.icon,
          class: "p-8 pl-0"
        }, null, 8, F),
        I(" " + p(i.name), 1)
      ]),
      s("div", J, [
        b(r(Z), {
          class: "mr-16",
          onChange: i.config.onChange,
          modelValue: o.value,
          "onUpdate:modelValue": c[0] || (c[0] = (v) => o.value = v),
          disabled: t.value,
          width: 250,
          min: 0,
          max: 100
        }, null, 8, ["onChange", "modelValue", "disabled"]),
        I(" " + p(i.config.value) + "% ", 1)
      ])
    ]));
  }
}), W = /* @__PURE__ */ q(Q, [["__scopeId", "data-v-73fcc175"]]), X = { class: "rv-label text-sm pt-10" }, ee = { class: "flex flex-row" }, te = ["value", "disabled"], ie = { class: "text-xs pt-10 text-gray-600 mb-20" }, ne = /* @__PURE__ */ x({
  __name: "input-control",
  props: {
    config: {
      type: Object,
      required: !0
    },
    name: {
      type: String,
      required: !0
    },
    icon: {
      type: String,
      required: !0
    }
  },
  setup(i) {
    const { t: n } = R(), o = i, t = u(!!o.config.disabled), d = f([]);
    return d.push(
      // watch the config for changes to the opacity value
      S(
        () => o.config,
        (a) => {
          t.value = !!a.disabled;
        },
        { deep: !0 }
      )
    ), V(() => {
      d.forEach((a) => a());
    }), (a, c) => (g(), w("div", null, [
      s("div", X, p(i.name), 1),
      s("div", ee, [
        s("input", {
          onKeypress: c[0] || (c[0] = T(N(() => {
          }, ["prevent"]), ["enter"])),
          class: "rv-input text-md w-full",
          type: "number",
          value: i.config.value,
          disabled: t.value,
          min: "0",
          max: "100"
        }, null, 40, te)
      ]),
      s("div", ie, p(r(n)("settings.label.refreshOff")), 1)
    ]));
  }
}), se = /* @__PURE__ */ q(ne, [["__scopeId", "data-v-df0e15c6"]]), oe = {
  visibility: '<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24" width="20"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>',
  opacity: '<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24" width="20"><path d="M24 0H0v24h24V0zm0 0H0v24h24V0zM0 24h24V0H0v24z" fill="none"/><path d="M17.66 8L12 2.35 6.34 8C4.78 9.56 4 11.64 4 13.64s.78 4.11 2.34 5.67 3.61 2.35 5.66 2.35 4.1-.79 5.66-2.35S20 15.64 20 13.64 19.22 9.56 17.66 8zM6 14c.01-2 .62-3.27 1.76-4.4L12 5.27l4.24 4.38C17.38 10.77 17.99 12 18 14H6z"/></svg>',
  box: '<svg xmlns="http://www.w3.org/2000/svg" fit="" height="20" width="20" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" focusable="false"><g id="cube-outline"><path d="M 21,16.5C 21,16.8812 20.7867,17.2125 20.473,17.3813L 12.5664,21.8243C 12.4054,21.9351 12.2103,22 12,22C 11.7897,22 11.5946,21.9351 11.4336,21.8243L 3.52716,17.3814C 3.21335,17.2127 3,16.8812 3,16.5L 3,7.5C 3,7.11876 3.21334,6.78735 3.52716,6.61864L 11.4336,2.17575C 11.5946,2.0649 11.7897,2.00001 12,2.00001C 12.2103,2.00001 12.4053,2.06489 12.5664,2.17574L 20.473,6.61872C 20.7867,6.78746 21,7.11883 21,7.5L 21,16.5 Z M 12.0009,4.15093L 6.04124,7.5L 12.0009,10.8491L 17.9591,7.5L 12.0009,4.15093 Z M 5,15.9149L 11,19.2866L 11,12.5806L 5,9.209L 5,15.9149 Z M 19,15.9149L 19,9.20901L 13,12.5806L 13,19.2875L 19,15.9149 Z "></path></g></svg>',
  location: '<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24" width="20"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>',
  refresh: '<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24" width="20"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z"/></svg>'
}, A = /* @__PURE__ */ x({
  __name: "component",
  props: {
    type: {
      type: String,
      required: !0
    },
    config: {
      type: Object,
      required: !0
    },
    name: {
      type: String,
      required: !0
    },
    icon: {
      type: String,
      required: !0
    },
    ariaLabel: {
      type: String,
      required: !0
    }
  },
  setup(i) {
    const n = f(oe), o = f({
      slider: E(W),
      toggle: E(U),
      input: E(se)
    });
    return (t, d) => (g(), B(Y(o[i.type]), {
      icon: n[i.icon],
      name: i.name,
      config: i.config,
      "aria-label": i.ariaLabel
    }, null, 8, ["icon", "name", "config", "aria-label"]));
  }
}), le = { key: 0 }, ae = { class: "p-8 font-bold break-words mb-8 bg-gray-100" }, re = { class: "flex flex-col justify-center" }, ce = { class: "rv-subheader" }, de = { class: "flex flex-col justify-center" }, ue = { class: "rv-subheader" }, pe = {
  key: 1,
  class: "p-5"
}, ve = /* @__PURE__ */ x({
  __name: "screen",
  props: {
    panel: { type: Object, required: !0 },
    layer: { type: Object, required: !0 }
  },
  setup(i) {
    const { t: n } = R(), o = D("iApi"), t = i, d = u(""), a = u(t.layer.uid), c = u(t.layer.visibility), v = u(t.layer.opacity * 100), L = u(t.layer.identify), _ = u(!1), y = f([]), H = f([]);
    _.value = t.layer !== void 0 && !t.layer.isRemoved, H.push(
      S(
        () => t.layer.uid,
        (e, l) => {
          e !== l && M();
        }
      )
    ), G(() => {
      M(), y.push(
        o.event.on(h.LAYER_VISIBILITYCHANGE, (e) => {
          a.value === e.layer.uid && (c.value = e.visibility);
        })
      ), y.push(
        o.event.on(h.LAYER_OPACITYCHANGE, (e) => {
          a.value === e.layer.uid && (v.value = Math.round(e.opacity * 100));
        })
      ), y.push(
        o.event.on(h.LAYER_RELOAD_END, (e) => {
          e.loadPromise().then(() => {
            a.value === e.uid && M();
          });
        })
      ), y.push(
        o.event.on(h.LAYER_REMOVE, (e) => {
          a.value === e.uid && t.panel.close();
        })
      );
    }), V(() => {
      y.forEach((e) => o.event.off(e)), H.forEach((e) => e());
    });
    const C = (e) => {
      const l = o.fixture.get("settings");
      if (!l || Object.keys(l).length === 0)
        return console.warn("Settings panel cannot check for layer control because it could not find settings fixture api"), !1;
      const m = l?.getLayerFixtureConfig(t.layer.id);
      return m && (m.controls || m.disabledControls) ? o.geo.shared.controlAvailable(e, m) : t.layer.controlAvailable(e);
    }, $ = (e) => {
      t.layer.visibility = e, c.value = e;
    }, j = (e) => {
      t.layer.opacity = e / 100, v.value = e;
    }, k = (e) => {
      t.layer.identify = e, L.value = e;
    }, M = () => {
      _.value = t.layer !== void 0 && !t.layer.isRemoved;
      const e = t.layer.uid;
      t.layer.loadPromise().then(() => {
        e === t.layer.uid && (c.value = t.layer.visibility, v.value = Math.round(t.layer.opacity * 100), L.value = t.layer.identify, d.value = t.layer.name);
      });
    };
    return (e, l) => {
      const m = P("panel-screen");
      return g(), B(m, { panel: i.panel }, {
        header: O(() => [
          I(p(r(n)("settings.title")), 1)
        ]),
        content: O(() => [
          _.value ? (g(), w("div", le, [
            s("div", ae, p(d.value), 1),
            s("div", re, [
              s("span", ce, p(r(n)("settings.label.display")), 1),
              l[0] || (l[0] = s("div", { class: "rv-settings-divider" }, null, -1)),
              b(A, {
                class: "rv-subsection",
                type: "toggle",
                icon: "visibility",
                onToggled: $,
                name: r(n)("settings.label.visibility"),
                config: {
                  value: c.value,
                  disabled: !C(r(z).Visibility)
                },
                ariaLabel: r(n)("settings.label.visibility")
              }, null, 8, ["name", "config", "ariaLabel"]),
              l[1] || (l[1] = s("div", { class: "rv-settings-divider" }, null, -1)),
              b(A, {
                class: "rv-subsection",
                type: "slider",
                name: r(n)("settings.label.opacity"),
                icon: "opacity",
                config: {
                  onChange: j,
                  value: v.value,
                  disabled: !C(r(z).Opacity)
                },
                ariaLabel: r(n)("settings.label.opacity")
              }, null, 8, ["name", "config", "ariaLabel"]),
              l[2] || (l[2] = s("div", { class: "rv-settings-divider" }, null, -1))
            ]),
            s("div", de, [
              s("span", ue, p(r(n)("settings.label.data")), 1),
              l[3] || (l[3] = s("div", { class: "rv-settings-divider" }, null, -1)),
              b(A, {
                class: "rv-subsection",
                type: "toggle",
                name: r(n)("settings.label.identify"),
                icon: "location",
                onToggled: k,
                config: {
                  value: L.value,
                  disabled: !(C(r(z).Identify) && t.layer.supportsIdentify)
                },
                ariaLabel: r(n)("settings.label.identify")
              }, null, 8, ["name", "config", "ariaLabel"]),
              l[4] || (l[4] = s("div", { class: "rv-settings-divider" }, null, -1))
            ])
          ])) : (g(), w("div", pe, [
            s("span", null, p(r(n)("settings.label.no.layer")), 1)
          ]))
        ]),
        _: 1
      }, 8, ["panel"]);
    };
  }
}), Xe = /* @__PURE__ */ q(ve, [["__scopeId", "data-v-9e8ca3ef"]]);
export {
  Xe as default
};
