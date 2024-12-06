import { bY as Le, o7 as Z, o8 as Ie, c1 as P, c4 as L, c5 as le, cc as l, ci as r, fV as x, cj as K, ck as Y, fW as R, j4 as pe, f$ as M, ce as E, ix as oe, c7 as T, c9 as B, ch as j, cg as ie, iJ as ve, c2 as U, lX as ne, fZ as X, f_ as q, c6 as Q, ca as V, cf as $, c3 as ee, o9 as he, kW as Te, i$ as Se, oa as He, g1 as J, cd as ae, c8 as Ae, cb as ce, hG as ze, hH as Ce } from "./main-uCo5F72j.js";
import { H as De } from "./hilight-defs-DzKgjtLG.js";
import { T as Ee } from "./toggle-switch-control-BuYok8t9.js";
class Me {
  id;
  name;
  template;
  priority;
  fields;
  componentId;
  constructor(e) {
    const t = {
      ...typeof e == "string" ? { id: e, template: "", name: "", priority: 50 } : e
    };
    ({
      template: this.template,
      id: this.id,
      name: this.name,
      fields: this.fields,
      priority: this.priority
    } = t);
  }
}
const se = "details";
class Fe extends Le {
  detailsStore = Z(this.$vApp.$pinia);
  get config() {
    return super.config;
  }
  /**
   * Updates the identify result in the store, and then opens the details panel.
   *
   * @param {IdentifyResult[]} payload
   * @memberof DetailsAPI
   */
  openDetails(e) {
    e.forEach((i) => {
      this._loadDetailsConfig(this.$iApi.geo.layer.getLayer(i.uid));
    }), this.detailsStore.payload = e;
    const t = this.$iApi.panel.get("details");
    this.detailsStore.origin = "identify", t.button.tooltip = "details.layers.title.identifyOrigin", this.$iApi.panel.get("details").isOpen || this.$iApi.panel.open({
      id: "details"
    });
  }
  /**
   * Provided with the data for a single feature, shows or hides details panel.
   * If panel is closed or incoming data is different than current content, panel is shown.
   * If panel open and incoming data is what is currently shown, panel closes.
   * The `open` parameter can override the behavior.
   * featureData payload (can be empty if forcing closed)
   * - uid     : uid string of the layer hosting the feature
   * - format  : structure of the data. IdentifyResultFormat value.
   * - data    : source information for the feature. Analogous to the data property of an IdentifyItem
   * - layerId : optional layerId string of the layer hosting the feature. Will be looked up if not provided
   *
   * @param {{data: any, uid: string, format: IdentifyResultFormat}} featureData
   * @param {boolean | undefined} open can force the panel to open (true) or close (false) regardless of current panel state
   * @memberof DetailsAPI
   */
  toggleFeature(e, t) {
    const s = this.$iApi.panel.get("details");
    if (t === !1) {
      s.close(), this.detailsStore.currentFeatureId = void 0;
      return;
    }
    const i = this.$iApi.geo.layer.getLayer(e.uid), u = `${e.uid}-${// see https://github.com/ramp4-pcar4/ramp4-pcar4/issues/1767 for the reasoning behind this
    i?.supportsFeatures ? e.data[i?.oidField ?? ""] : JSON.stringify(e.data)}`;
    if (s.isOpen && u === this.detailsStore.currentFeatureId && t !== !0) {
      s.close(), this.detailsStore.currentFeatureId = void 0;
      return;
    }
    this.detailsStore.origin = "toggleEvent", s.button.tooltip = "details.layers.title.gridOrigin", this.detailsStore.currentFeatureId = u, this._loadDetailsConfig(i);
    const d = {
      items: [Ie.makeRawItem(e.format, e.data)],
      uid: e.uid,
      layerId: e.layerId || i?.id || "error-not-found",
      loading: Promise.resolve(),
      loaded: !0,
      errored: !1,
      requestTime: Date.now()
    };
    this.detailsStore.payload = [d], s.isOpen || s.open();
  }
  /**
   * Read the details section of the layers' fixture config
   *
   * @param {DetailsConfig} [config]
   * @memberof DetailsAPI
   */
  _parseConfig(e) {
    e && e.templates && (this.detailsStore.defaultTemplates = e.templates), this.handlePanelWidths(["details"]), this.handlePanelTeleports(["details"]);
    const t = this.getLayerFixtureConfigs(), s = [];
    Object.keys(t).forEach((u) => {
      s.push({
        id: u,
        name: t[u].name,
        template: t[u].template,
        fields: t[u].fields,
        priority: t[u].priority ?? 50
      });
    });
    const i = s.map((u) => new Me(u));
    this.detailsStore.properties = i.reduce((u, d) => (u[d.id] = d, u), {}), this._validateItems();
  }
  /**
   * Will see if we have this layer's detail fixture config cached, and if not,
   * cache it.
   *
   * @param layer the layer to check
   * @private
   */
  _loadDetailsConfig(e) {
    if (e && this.detailsStore.properties[e.id] === void 0) {
      const i = this.getLayerFixtureConfigs()[e.id];
      i && this.detailsStore.addConfigProperty({
        id: e.id,
        name: i.name,
        template: i.template,
        fields: i.fields,
        priority: i.priority ?? 50
      });
    }
  }
  /**
   * Check to see if the stored components are registered properly.
   *
   * @memberof DetailsAPI
   */
  _validateItems() {
    Object.values(this.detailsStore.properties).forEach((e) => {
      e.template in this.$vApp.$options.components && (this.detailsStore.properties[e.id].componentId = e.template);
    });
  }
  /**
   * Highlight identified items
   * @param items items to add
   * @param layerUid uid of layer the items belong to
   */
  async hilightDetailsItems(e, t) {
    const s = e instanceof Array ? e : [e], i = this.$iApi.fixture.get("hilight");
    if (i) {
      const u = await i.getGraphicsByKey(se);
      await i.removeHilight(u);
      const d = Date.now();
      this.detailsStore.lastHilight = d;
      const g = await this.getHilightGraphics(s, t);
      this.detailsStore.lastHilight === d && (await i.addHilight(g), this.detailsStore.lastHilight !== d && i.removeHilight(g));
    }
  }
  /**
   * Remove all details panel map hilights.
   */
  async removeDetailsHilight() {
    const e = this.$iApi.fixture.get("hilight");
    if (e) {
      this.detailsStore.lastHilight = Date.now();
      const t = await e.getGraphicsByKey(se);
      await e.removeHilight(t);
    }
  }
  /**
   * Reload map elements of the hilighter for a set of identify items.
   *
   * @param {IdentifyItem | Array<IdentifyItem>} items items to reload
   * @param {string} layerUid uid of layer the items belong to
   */
  async reloadDetailsHilight(e, t) {
    const s = e instanceof Array ? e : [e], i = this.$iApi.fixture.get("hilight");
    if (i) {
      const u = await this.getHilightGraphics(s, t);
      i.reloadHilight(u);
    }
  }
  /**
   * Return the graphics of the given IdentifyItems once the items have loaded.
   * @param {Array<IdentifyItem>} items identify items to hilight. Items should be of ESRI format
   * @param layerUid uid of layer the items belong to
   * @returns {Promise<Array<Graphic>>} resolves with array of graphics
   */
  async getHilightGraphics(e, t) {
    const s = this.$iApi.geo.layer.getLayer(t), i = this.$iApi.fixture.get("hilight"), u = [];
    return s && await Promise.all(
      e.map(async (d) => {
        await d.loading;
        const g = d.data[s.oidField], p = await s.getGraphic(g, {
          getGeom: !0,
          getAttribs: !0,
          getStyle: !0
        });
        p.id = i.constructGraphicKey(se, t, g), u.push(p);
      })
    ), u;
  }
  /**
   * Updates hilighted graphics when the hilight toggler is toggled.
   *
   * @param {boolean} hilightOn Whether the toggler has been turned on/off
   * @param {IdentifyItem | Array<IdentifyItem>} items The identify items to highlight. Only required if turning on
   * @param {string} layerUid the layer UID that owns the items. Only required if turning on
   */
  onHilightToggle(e, t, s) {
    this.detailsStore.hilightToggle = e, e && t && s ? this.hilightDetailsItems(t, s) : e || this.removeDetailsHilight();
  }
  /**
   * Return whether or not a HilightMode has been defined (other than NONE)
   */
  hasHilighter() {
    const e = this.$iApi.fixture.get("hilight");
    return e && e.hilightMode.mode !== De.NONE;
  }
}
const Ne = {
  key: 0,
  class: "relative"
}, Oe = {
  key: 0,
  class: "relative"
}, je = ["innerHTML"], Be = ["src"], Pe = {
  key: 1,
  class: "w-32 h-32"
}, Ge = { class: "symbologyIcon" }, qe = ["innerHTML"], Re = ["src"], Ve = { class: "badge z-50 rounded-full text-white absolute h-10 w-10 p-8 inline-flex items-center justify-center" }, Ze = {
  key: 0,
  class: "px-5"
}, Ue = {
  key: 1,
  class: "inline-flex justify-center items-center relative"
}, Ke = /* @__PURE__ */ P({
  __name: "symbology-stack",
  props: {
    layer: { type: Object, required: !0 },
    result: { type: Object, required: !0 }
  },
  setup(h) {
    const e = h, t = L([]);
    return le(() => {
      t.value = e.layer.legend;
    }), (s, i) => h.result.loaded ? (l(), r("div", Ne, [
      x("div", {
        class: R(h.result.items.length === 0 ? "opacity-50" : "")
      }, [
        t.value.length > 1 ? (l(), r("div", Oe, [
          (l(!0), r(K, null, Y(t.value.slice(0, 3).reverse(), (u, d) => (l(), r("div", {
            class: R(["absolute", [d == 0 ? "symbol-0" : d == 1 ? "left-3" : "left-6"]]),
            style: pe({ "z-index": 3 - d }),
            key: d
          }, [
            t.value[d].svgcode ? (l(), r("span", {
              key: 0,
              class: "symbologyIcon w-28 h-28",
              innerHTML: t.value[d].svgcode
            }, null, 8, je)) : t.value[d].imgUrl ? (l(), r("img", {
              key: 1,
              class: "symbologyIcon w-28 h-28",
              src: t.value[d].imgUrl
            }, null, 8, Be)) : M("", !0)
          ], 6))), 128))
        ])) : t.value.length > 0 ? (l(), r("div", Pe, [
          x("div", Ge, [
            t.value[0].svgcode ? (l(), r("span", {
              key: 0,
              innerHTML: t.value[0].svgcode
            }, null, 8, qe)) : t.value[0].imgUrl ? (l(), r("img", {
              key: 1,
              class: "symbologyIcon w-full h-full",
              src: t.value[0].imgUrl
            }, null, 8, Re)) : M("", !0)
          ])
        ])) : M("", !0)
      ], 2),
      x("div", Ve, [
        h.result.loaded ? (l(), r("div", Ze, E(h.result.items.length), 1)) : M("", !0)
      ])
    ])) : (l(), r("div", Ue, i[0] || (i[0] = [
      x("div", { class: "symbologyIcon h-32 w-32" }, [
        x("div", { class: "relative animate-spin spinner h-24 w-24" })
      ], -1)
    ])));
  }
}), We = /* @__PURE__ */ oe(Ke, [["__scopeId", "data-v-496d788d"]]), Je = ["content"], Ye = { class: "symbologyLayerName truncate" }, Xe = /* @__PURE__ */ P({
  __name: "symbology-item",
  props: {
    layer: { type: Object, required: !0 },
    result: { type: Object, required: !0 },
    selected: { type: Boolean, required: !0 }
  },
  setup(h) {
    const e = Z(), t = T(() => e.properties), s = h, i = () => {
      const u = s.layer;
      return u && t.value[u.id] && t.value[u.id].name ? t.value[u.id].name : u?.name ?? "";
    };
    return (u, d) => {
      const g = B("tippy");
      return j((l(), r("button", {
        class: R(["flex flex-grow justify-start items-center px-7 py-10 default-focus-style symbologyStackButton truncate", h.selected ? "detailsButtonSelected" : "px-11"]),
        onClick: d[0] || (d[0] = ve(() => {
        }, ["stop"])),
        content: i()
      }, [
        ie(We, {
          class: "symbStack w-32 h-32 mr-10",
          layer: h.layer,
          result: h.result
        }, null, 8, ["layer", "result"]),
        x("div", Ye, E(i()), 1)
      ], 10, Je)), [
        [g, { placement: "right", sticky: !0 }]
      ]);
    };
  }
}), Qe = ["content"], et = /* @__PURE__ */ P({
  __name: "symbology-list",
  props: {
    results: { type: Object, required: !0 },
    selected: { type: String, required: !0 }
  },
  emits: ["selection-changed"],
  setup(h, { emit: e }) {
    const { t } = U(), s = ne(), i = L(), u = () => {
      i.value._tippy.hide();
    }, d = (b) => {
      b.key === "Tab" && i.value?.matches(":focus") && i.value._tippy.show();
    }, g = e, p = h, v = L(""), f = L([]), c = L(!1), a = L(!1), m = (b) => s.getLayerByUid(b), S = (b) => {
      v.value = b, g("selection-changed", b), c.value = !1;
    }, F = () => {
      a.value || setTimeout(() => {
        c.value = a.value;
      }, 500), a.value = !0;
    }, C = () => {
      c.value = a.value = !1;
    }, y = () => {
      a.value || (c.value = !0), a.value = !0;
    }, H = () => {
      c.value = a.value = !1;
    };
    return X(() => {
      f.value.push(
        q(p, () => {
          v.value = p.selected;
        })
      );
    }), le(() => {
      i.value?.addEventListener("blur", u), i.value?.addEventListener("keyup", d);
    }), Q(() => {
      f.value.forEach((b) => b()), i.value?.removeEventListener("blur", u), i.value?.removeEventListener("keyup", d);
    }), (b, N) => {
      const O = B("focus-item"), z = B("focus-list"), A = B("tippy");
      return j((l(), r("div", {
        class: R(["symbology-list absolute overflow-hidden z-50 p-0 w-48 bg-white text-sm inline-flex flex-col", { "symbology-list-expanded": c.value }]),
        onMouseover: F,
        onMouseleave: C,
        onFocus: y,
        onBlur: ve(H, ["self"]),
        content: $(t)("details.layers.results.list.tooltip"),
        ref_key: "el",
        ref: i
      }, [
        (l(!0), r(K, null, Y(p.results, (o, _) => (l(), r("div", {
          class: "flex justify-start relative",
          key: _
        }, [
          j((l(), V(Xe, {
            key: o.uid,
            layer: m(o.uid),
            result: o,
            selected: o.uid === v.value,
            onClick: (k) => S(o.uid)
          }, null, 8, ["layer", "result", "selected", "onClick"])), [
            [O]
          ])
        ]))), 128))
      ], 42, Qe)), [
        [z],
        [A, {
          trigger: "manual",
          placement: "top-start"
        }]
      ]);
    };
  }
}), tt = { class: "inline font-bold" }, st = ["innerHTML"], it = /* @__PURE__ */ P({
  __name: "esri-default",
  props: {
    fixtureFields: {
      type: Object,
      required: !1
    },
    fields: {
      type: Object,
      required: !0
    },
    identifyData: {
      type: Object,
      required: !0
    }
  },
  setup(h) {
    const { t: e } = U(), t = ee("iApi"), s = h, i = (v, f, c, a) => {
      const m = v.find((S) => S[f].toLowerCase() === c.toLowerCase());
      m && delete a[m.name];
    }, u = () => {
      const v = Object.assign({}, s.identifyData.data);
      i(s.fields, "type", "geometry", v), t?.ui.exposeOids || i(s.fields, "type", "oid", v), t?.ui.exposeMeasurements || (i(s.fields, "name", "shape_length", v), i(s.fields, "name", "shape_area", v));
      const f = {};
      s.fields.forEach((a) => {
        const m = s.fixtureFields?.find((S) => a.name === S.field);
        f[a.name] = {
          name: m?.alias || a.alias || a.name,
          type: a.type,
          visible: m?.visible ?? !0
        };
      });
      const c = {};
      Object.keys(v).forEach((a) => {
        const m = f[a];
        if (m && m.visible) {
          const S = v[a];
          c[a] = {
            value: typeof S == "number" ? t?.ui.formatNumber(S) : S,
            alias: m.name,
            type: m.type
          };
        }
      });
      for (const [a] of Object.entries(c))
        t.ui.isPlainText(c[a].value) && (c[a].value = t.ui.escapeHtml(c[a].value));
      return c;
    }, d = (v, f, c) => {
      switch (c) {
        case "date":
          return p(v);
        default:
          return g(v, f);
      }
    }, g = (v, f) => {
      if (!v)
        return v;
      if (v.trim().match(/\.(jpeg|jpg|gif|png)$/) || v.trim().match(
        /^\s*data:([a-z]+\/[a-z]+(;[a-z\-]+\=[a-z\-]+)?)?(;base64)?,[a-z0-9\!\$\&\'\,\(\)\*\+\,\;\=\-\.\_\~\:\@\/\?\%\s]*\s*$/i
        //eslint-disable-line
      ))
        return `<img src="${v}" alt="${e("details.item.alert.defaultAltText", { alias: f })}" />`;
      const c = "underline text-blue-700 break-all", a = document.createElement("div");
      return a.innerHTML = v.trim(), a.firstElementChild?.tagName == "A" ? (a.firstElementChild.className = c, a.innerHTML) : he(v, {
        className: c,
        target: "_blank",
        validate: {
          url: (S) => /^https?:\/\//.test(S)
          // only links that begin with a protocol will be hyperlinked
        }
      });
    }, p = (v) => {
      const f = parseInt(v);
      return isNaN(f) ? v : new Date(f).toISOString().split("T")[0];
    };
    return (v, f) => (l(), r("div", null, [
      (l(!0), r(K, null, Y(u(), (c, a, m) => (l(), r("div", {
        class: "p-5 pl-3 flex justify-end flex-wrap even:bg-gray-300",
        key: m
      }, [
        x("span", tt, E(c.alias), 1),
        f[0] || (f[0] = x("span", { class: "flex-auto" }, null, -1)),
        x("span", {
          class: "inline",
          innerHTML: d(c.value, c.alias, c.type)
        }, null, 8, st)
      ]))), 128))
    ]));
  }
}), at = ["innerHTML"], lt = { key: 1 }, ot = /* @__PURE__ */ P({
  __name: "html-default",
  props: {
    identifyData: {
      type: Object,
      required: !0
    }
  },
  setup(h) {
    const { t: e } = U();
    return (t, s) => h.identifyData ? (l(), r("div", {
      key: 0,
      class: "whitespace-pre-wrap break-words h-full overflow-auto",
      innerHTML: h.identifyData.data.data ?? h.identifyData.data
    }, null, 8, at)) : (l(), r("div", lt, E($(e)("details.layers.results.empty")), 1));
  }
}), nt = { class: "relative flex flex-grow truncate" }, rt = {
  key: 0,
  class: "flex flex-grow items-center truncate"
}, ut = { class: "flex p-8 items-center" }, dt = ["innerHTML"], ct = {
  key: 1,
  class: "symbologyIcon p-6"
}, mt = ["content", "innerHTML", "tabindex"], pt = {
  key: 1,
  class: "flex p-6 flex-grow"
}, vt = {
  key: 2,
  class: "zoomButton text-center p-3"
}, ht = ["content", "aria-label"], ft = {
  key: 0,
  class: "m-auto animate-spin spinner h-20 w-20"
}, gt = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "green",
  class: "m-auto w-20 h-20"
}, yt = {
  key: 2,
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "red",
  class: "m-auto w-20 h-20"
}, _t = ["innerHTML"], me = /* @__PURE__ */ P({
  __name: "result-item",
  props: {
    uid: { type: String, required: !0 },
    data: { type: Object, required: !0 },
    open: { type: Boolean, required: !1 },
    inList: { type: Boolean, required: !1 }
  },
  setup(h) {
    const e = ne(), t = h, s = ee("iApi"), i = L([]), u = Z(), { t: d } = U(), g = L(""), p = L("none"), v = L(), f = () => e.getLayerByUid(t.uid), c = T(() => u.properties), a = T(() => u.defaultTemplates), m = T(() => f()?.supportsFeatures ?? !1), S = T(() => f()?.mapLayer ?? !1), F = T(() => {
      const o = f()?.nameField;
      let _ = o && t.data.loaded ? t.data.data[o] : s.$i18n.t("details.items.title");
      return s.ui.isPlainText(_) && (_ = s.ui.escapeHtml(_)), _;
    }), C = (o) => {
      if (typeof o == "string") {
        const _ = "underline text-blue-700 break-all", k = document.createElement("div");
        return k.innerHTML = o.trim(), k.firstElementChild?.tagName == "A" ? (k.firstElementChild.className = _, k.innerHTML) : he(o, {
          className: _,
          target: "_blank",
          validate: {
            url: (D) => /^https?:\/\//.test(D)
            // only links that begin with a protocol will be hyperlinked
          }
        });
      }
      return o;
    }, y = () => {
      z("none"), t.data.loaded ? H() : t.data.load().then(() => {
        H();
      });
    }, H = () => {
      if (g.value = "", !(t.data && t.data.loaded))
        return;
      const o = f();
      if (o === void 0) {
        console.warn(`could not find layer for uid ${t.uid} during icon lookup`);
        return;
      }
      if (o.supportsFeatures) {
        const _ = o.oidField;
        o.getIcon(t.data.data[_]).then((k) => {
          g.value = k;
        });
      }
    }, b = T(() => {
      const o = f();
      return o && c.value[o.id] && c.value[o.id].template ? c.value[o.id].template : a.value && a.value[t.data.format] ? a.value[t.data.format] : m.value ? it : ot;
    }), N = T(() => m.value ? f()?.fields || [] : []), O = T(() => {
      const o = f();
      if (o && c.value[o.id] && c.value[o.id].fields)
        return c.value[o.id].fields;
    }), z = (o) => {
      o === "zoomed" || o === "error" ? setTimeout(() => {
        p.value = o, v.value?._tippy.show(), setTimeout(() => {
          v.value?._tippy.hide(), p.value = "none";
        }, 3e3);
      }, 300) : p.value = o;
    }, A = () => {
      if (p.value !== "none")
        return;
      z("zooming");
      const o = f();
      if (o === void 0 || !o.isLoaded) {
        console.warn(`Could not find layer for uid ${t.uid} during zoom geometry lookup`), z("error");
        return;
      }
      if (!t.data.loaded) {
        console.warn("Details zoomToFeature call on item that is still loading. Should be impossible, alert the devs."), z("error");
        return;
      }
      const _ = t.data.data[o.oidField], k = () => {
        const I = { getGeom: !0 };
        o.getGraphic(_, I).then((D) => {
          D.geometry.invalid() ? (console.error(`Could not find graphic for objectid ${_}`), z("error")) : (s.geo.map.zoomMapTo(D.geometry), z("zoomed"), s.updateAlert(s.$i18n.t("details.item.alert.zoom")));
        }).catch(() => {
          z("error");
        });
      };
      o.layerType === Se.FEATURE && o.geomType !== He.POINT ? o.getGraphicExtent(_).then((I) => {
        s.geo.map.zoomMapTo(I), z("zoomed"), s.updateAlert(s.$i18n.t("details.item.alert.zoom"));
      }).catch(() => {
        k();
      }) : k();
    };
    return X(() => {
      i.value.push(
        q(
          t,
          () => {
            y();
          },
          {
            deep: !1,
            immediate: !0
          }
        )
      );
    }), Q(() => {
      i.value.forEach((o) => o());
    }), (o, _) => {
      const k = B("truncate"), I = B("tippy");
      return l(), r(K, null, [
        x("div", nt, [
          m.value ? (l(), r("div", rt, [
            x("div", ut, [
              h.data.loaded && g.value ? (l(), r("span", {
                key: 0,
                class: "flex-none symbologyIcon",
                innerHTML: g.value
              }, null, 8, dt)) : (l(), r("div", ct, _[1] || (_[1] = [
                x("div", { class: "animate-spin spinner h-20 w-20" }, null, -1)
              ])))
            ]),
            h.data.loaded ? j((l(), r("span", {
              key: 0,
              class: "pl-3 text-left flex-grow itemName",
              content: F.value,
              innerHTML: C(F.value),
              tabindex: h.inList ? -1 : 0
            }, null, 8, mt)), [
              [k, {
                options: { placement: "right" }
              }]
            ]) : (l(), r("div", pt, E($(d)("details.loading")), 1)),
            h.data.loaded ? (l(), r("span", vt, [
              S.value ? j((l(), r("button", {
                key: 0,
                type: "button",
                content: $(d)(`details.item.zoom${p.value === "none" ? "" : `.${p.value}`}`),
                "aria-label": $(d)(`grid.cells.zoom${p.value === "none" ? "" : `.${p.value}`}`),
                ref_key: "zoomButton",
                ref: v,
                onClick: _[0] || (_[0] = (D) => {
                  D.stopPropagation(), A();
                }),
                class: "text-gray-600 w-24 h-24 p-2 flex justify-center items-center"
              }, [
                p.value === "zooming" ? (l(), r("div", ft)) : p.value === "zoomed" ? (l(), r("svg", gt, _[2] || (_[2] = [
                  x("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    d: "M4.5 12.75l6 6 9-13.5"
                  }, null, -1)
                ]))) : p.value === "error" ? (l(), r("svg", yt, _[3] || (_[3] = [
                  x("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    d: "M6 18L18 6M6 6l12 12"
                  }, null, -1)
                ]))) : (l(), r("span", {
                  key: 3,
                  innerHTML: $(s).ui.getZoomIcon()
                }, null, 8, _t))
              ], 8, ht)), [
                [I, { placement: "bottom" }]
              ]) : M("", !0)
            ])) : M("", !0)
          ])) : M("", !0)
        ]),
        h.open ? (l(), V(Te(b.value), {
          key: 0,
          identifyData: h.data,
          fields: N.value,
          fixtureFields: O.value,
          class: "p-8"
        }, null, 8, ["identifyData", "fields", "fixtureFields"])) : M("", !0)
      ], 64);
    };
  }
}), bt = {
  key: 0,
  class: "layerName w-full flex-grow p-5 pb-8 font-bold truncate",
  tabIndex: "0"
}, xt = {
  key: 1,
  class: "p-8 mb-8 bg-gray-100 flex justify-between"
}, kt = { for: "toggle" }, wt = {
  key: 2,
  class: "flex flex-col justify-between p-8 mb-8 bg-gray-100"
}, $t = { class: "flex" }, Lt = ["aria-label"], It = ["content", "aria-label", "disabled"], Tt = { class: "px-3 text-center flex-grow" }, St = ["content", "aria-label", "disabled"], Ht = { key: 3 }, At = { key: 0 }, zt = ["content"], Ct = ["onClick"], Dt = {
  key: 1,
  class: "text-center"
}, Et = {
  key: 4,
  class: "p-5"
}, Mt = /* @__PURE__ */ P({
  __name: "result-list",
  props: {
    uid: { type: String, required: !0 },
    results: { type: Object, required: !0 }
  },
  setup(h) {
    const e = L(), t = () => {
      e.value._tippy.hide();
    }, s = (n) => {
      n.key === "Tab" && e.value?.matches(":focus") && e.value._tippy.show();
    }, i = ee("iApi"), u = Z(), d = ne(), g = h, { t: p } = U(), v = L(!1), f = L(i.fixture.get("details")), c = L(!0), a = L(!1), m = L(0), S = L(20), F = L([]), C = L([]), y = T(() => u.activeGreedy), H = T(() => u.properties), b = T(() => m.value + S.value), N = () => d.getLayerByUid(g.uid), O = () => g.results.find((n) => n.uid === g.uid), z = T(() => O()?.loaded ?? !1), A = T(() => O()?.requestTime), o = T(
      () => v.value && (!a.value && I().length > 1 || a.value && I().length > S.value)
    ), _ = T(() => {
      const n = N();
      return n && H.value[n.id] && H.value[n.id].name ? H.value[n.id].name : n?.name ?? "";
    }), k = T(() => g.uid), I = () => {
      const n = O();
      return n ? n.items : [];
    }, D = T(() => I()[m.value]), re = T(() => {
      if (f.value.hasHilighter()) {
        const n = N();
        if (n)
          return n.mapLayer && n.supportsFeatures;
      }
      return !1;
    }), fe = (n) => {
      c.value = n, u.hilightToggle = n, G();
    }, ge = () => {
      const n = N();
      m.value = m.value ?? 0, c.value = u.hilightToggle ?? c.value, a.value = !1, v.value = !!n, G();
    }, ue = (n) => {
      a.value ? (m.value += n * S.value, G()) : m.value += n;
    }, G = () => {
      const n = I();
      if (c.value && z.value && n.length > 0 && re.value)
        if (a.value)
          f.value.hilightDetailsItems(n.slice(m.value, b.value), g.uid);
        else {
          const w = n[m.value];
          w && f.value.hilightDetailsItems([w], g.uid);
        }
      else
        f.value.removeDetailsHilight();
    }, ye = () => {
      a.value = !0, m.value = Math.floor(m.value / S.value) * S.value, G();
    }, _e = () => {
      f.value.removeDetailsHilight();
    }, be = () => {
      f.value.removeDetailsHilight();
    }, xe = (n) => {
      const w = m.value;
      m.value = n, a.value = !1, w === n && G();
    };
    return le(() => {
      F.value.push(
        i.event.on(J.LAYER_REMOVE, (n) => {
          const w = i.panel.get("details");
          g.uid === n.uid && w && w.close();
        })
      ), F.value.push(
        i.event.on(J.PANEL_CLOSED, (n) => {
          n.id === "details" && _e();
        })
      ), F.value.push(
        i.event.on(J.PANEL_MINIMIZED, (n) => {
          n.id === "details" && be();
        })
      ), F.value.push(
        i.event.on(J.MAP_BASEMAPCHANGE, (n) => {
          c.value && n.schemaChanged && G();
        })
      ), e.value?.addEventListener("blur", t), e.value?.addEventListener("keyup", s);
    }), X(() => {
      C.value.push(
        q(
          D,
          () => {
            a.value || (ge(), D.value === void 0 && f.value.removeDetailsHilight());
          },
          {
            deep: !1,
            immediate: !0
          }
        )
      ), C.value.push(
        q(
          k,
          () => {
            const n = g.uid;
            if (a.value && n) {
              const w = O();
              w && w.loading.then(() => {
                g.uid === n && a.value && G();
              });
            }
          },
          {
            deep: !1,
            immediate: !0
          }
        )
      ), C.value.push(
        q(A, () => {
          m.value = 0;
        })
      ), C.value.push(
        q(
          () => g.uid,
          () => {
            m.value = 0;
          }
        )
      );
    }), Q(() => {
      C.value.forEach((n) => n()), F.value.forEach((n) => i.event.off(n)), e.value?.removeEventListener("blur", t), e.value?.removeEventListener("keyup", s);
    }), (n, w) => {
      const ke = B("truncate"), te = B("tippy"), we = B("focus-item"), $e = B("focus-list");
      return z.value && y.value === 0 ? (l(), r("div", {
        key: 0,
        class: "detailsContent relative flex flex-col flex-grow pl-5",
        style: pe(h.results.length > 1 ? { "margin-left": "42px" } : "")
      }, [
        v.value ? j((l(), r("h1", bt, [
          ae(E(_.value), 1)
        ])), [
          [ke, { options: { placement: "top-start" } }]
        ]) : M("", !0),
        re.value ? (l(), r("div", xt, [
          x("label", kt, E($(p)("details.togglehilight.title")), 1),
          ie(Ee, {
            config: {
              value: c.value,
              disabled: !1
            },
            onToggled: fe
          }, null, 8, ["config"])
        ])) : M("", !0),
        o.value ? (l(), r("div", wt, [
          x("div", $t, [
            a.value ? M("", !0) : (l(), r("button", {
              key: 0,
              type: "button",
              class: "px-8 font-bold hover:bg-gray-200 focus:bg-gray-200",
              "aria-label": $(p)("details.item.see.list"),
              onClick: w[0] || (w[0] = (W) => ye())
            }, E($(p)("details.item.see.list")), 9, Lt)),
            x("div", {
              class: R(["flex ml-auto bg-gray-200 py-8 items-center", { "w-full": a.value }])
            }, [
              j((l(), r("button", {
                type: "button",
                content: $(p)(a.value ? "details.items.previous" : "details.item.previous.item"),
                onClick: w[1] || (w[1] = (W) => ue(-1)),
                class: "mx-2 opacity-60 hover:opacity-90 disabled:opacity-30 disabled:cursor-default",
                "aria-label": $(p)(a.value ? "details.items.previous" : "details.item.previous.item"),
                disabled: m.value === 0
              }, w[3] || (w[3] = [
                x("svg", {
                  height: "24",
                  width: "24",
                  viewBox: "0 0 23 23"
                }, [
                  x("g", null, [
                    x("path", { d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z" })
                  ])
                ], -1)
              ]), 8, It)), [
                [te, { placement: "top" }]
              ]),
              x("span", Tt, E(a.value ? $(p)("details.items.range", [
                m.value + 1,
                Math.min(b.value, I().length),
                I().length
              ]) : $(p)("details.item.count", [m.value + 1, I().length])), 1),
              j((l(), r("button", {
                type: "button",
                content: $(p)(a.value ? "details.items.next" : "details.item.next.item"),
                onClick: w[2] || (w[2] = (W) => ue(1)),
                class: "mx-2 rotate-180 opacity-60 hover:opacity-90 disabled:opacity-30 disabled:cursor-default",
                "aria-label": $(p)(a.value ? "details.items.next" : "details.item.next.item"),
                disabled: !a.value && m.value === I().length - 1 || a.value && b.value >= I().length
              }, w[4] || (w[4] = [
                x("svg", {
                  height: "24",
                  width: "24",
                  viewBox: "0 0 23 23"
                }, [
                  x("g", null, [
                    x("path", { d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z" })
                  ])
                ], -1)
              ]), 8, St)), [
                [te, { placement: "top" }]
              ])
            ], 2)
          ])
        ])) : M("", !0),
        v.value ? (l(), r("div", Ht, [
          I().length > 0 ? (l(), r("div", At, [
            a.value ? j((l(), r("div", {
              key: 0,
              class: "flex flex-col",
              content: $(p)("details.layers.results.list.tooltip"),
              ref_key: "el",
              ref: e
            }, [
              (l(!0), r(K, null, Y(I().slice(m.value, b.value), (W, de) => j((l(), r("button", {
                class: "flex flex-grow truncate default-focus-style hover:bg-gray-200",
                key: de,
                onClick: (Gt) => xe(m.value + de)
              }, [
                ie(me, {
                  data: W,
                  uid: h.uid,
                  open: !1,
                  "in-list": !0
                }, null, 8, ["data", "uid"])
              ], 8, Ct)), [
                [we, "show-truncate"]
              ])), 128))
            ], 8, zt)), [
              [$e],
              [te, {
                trigger: "manual",
                placement: "top-start"
              }]
            ]) : (l(), V(me, {
              key: 1,
              data: D.value,
              uid: h.uid,
              open: !0,
              "in-list": !1
            }, null, 8, ["data", "uid"]))
          ])) : (l(), r("div", Dt, E($(p)("details.layers.results.empty.currentLayer")), 1))
        ])) : (l(), r("div", Et, E($(p)("details.item.no.data")), 1))
      ], 4)) : (l(), r("div", {
        key: 1,
        class: R(["flex justify-center py-10 items-center", h.results.length > 1 ? "ml-42" : ""])
      }, [
        w[5] || (w[5] = x("span", { class: "animate-spin spinner h-20 w-20 px-5 mr-8" }, null, -1)),
        ae(" " + E($(p)("details.item.loading")), 1)
      ], 2));
    };
  }
}), Ft = /* @__PURE__ */ oe(Mt, [["__scopeId", "data-v-4c39ec75"]]), Nt = { class: "relative h-full" }, Ot = { class: "detailsContentSection overflow-y-auto h-full" }, jt = /* @__PURE__ */ P({
  __name: "details-screen",
  props: {
    panel: {
      type: Object
    }
  },
  setup(h) {
    const { t: e } = U(), t = ee("iApi"), s = Z(), i = L([]), u = L([]), d = L([]), g = L(!1), p = L(""), v = T(() => s.activeGreedy), f = T(() => s.payload), c = T(() => s.properties), a = (y) => {
      p.value = y;
    }, m = (y) => d.value.find((H) => H.uid === y), S = (y) => {
      y !== void 0 && (s.activeGreedy = y.length === 0 ? 0 : y[0].requestTime, d.value = y, F(y));
    }, F = (y) => {
      if (p.value) {
        const H = m(p.value);
        H ? H.loading.then(() => {
          H.requestTime === v.value && (H.items.length > 0 ? (s.activeGreedy = 0, g.value = !1) : C(y));
        }) : C(y);
      } else
        C(y);
    }, C = (y, H) => {
      let b;
      if (H)
        b = H;
      else {
        const A = s.properties, o = y.map((k) => [
          A[k.layerId]?.priority ?? 50,
          k.layerId
        ]), _ = new Set(o.map((k) => k[0]));
        b = [], _.forEach((k) => {
          const I = o.filter((D) => D[0] === k).map((D) => D[1]);
          b.push([k, I]);
        }), b.sort((k, I) => I[0] - k[0]);
      }
      if (b.length === 0) {
        s.activeGreedy = 0, g.value = !0;
        return;
      }
      const N = b[b.length - 1][1], O = y.filter((A) => N.includes(A.layerId)).map(
        (A) => A.loading.then(() => A.items.length > 0 ? Promise.resolve(A) : Promise.reject())
      ), z = y.length === 0 ? 0 : y[0].requestTime;
      Promise.any(O).then((A) => {
        A.requestTime === v.value && (s.activeGreedy = 0, p.value = A.uid, g.value = !1);
      }).catch(() => {
        z === v.value && (b.pop(), C(y, b));
      });
    };
    return X(() => {
      u.value.push(
        q(
          f,
          (y) => {
            S(y);
          },
          {
            deep: !1,
            // was true when our array had undefineds. now that objects arrive intact, we dont want this triggering when innards update
            immediate: !0
          }
        )
      );
    }), Q(() => {
      i.value.forEach((y) => t.event.off(y)), u.value.forEach((y) => y());
    }), (y, H) => {
      const b = Ae("panel-screen");
      return l(), V(b, { panel: h.panel }, {
        header: ce(() => [
          ae(E(
            // Show different titles based on what requested the panel
            $(s).origin === "toggleEvent" ? $(e)("details.layers.title.gridOrigin") : $(e)("details.layers.title.identifyOrigin")
          ), 1)
        ]),
        content: ce(() => [
          x("div", Nt, [
            d.value.length > 1 ? (l(), V(et, {
              key: 0,
              results: d.value,
              detailsProperties: c.value,
              selected: p.value,
              onSelectionChanged: a
            }, null, 8, ["results", "detailsProperties", "selected"])) : M("", !0),
            x("div", Ot, [
              g.value ? (l(), r("div", {
                key: 1,
                class: R(["text-center", { "ml-42": d.value.length > 1 }])
              }, E(d.value.length >= 1 ? $(e)("details.layers.results.empty") : $(e)("details.layers.results.empty.noLayers")), 3)) : (l(), V(Ft, {
                key: 0,
                uid: p.value,
                results: d.value
              }, null, 8, ["uid", "results"]))
            ])
          ])
        ]),
        _: 1
      }, 8, ["panel"]);
    };
  }
}), Bt = /* @__PURE__ */ oe(jt, [["__scopeId", "data-v-2a8a1e06"]]), Pt = { en: { "details.layers.title.identifyOrigin": "Identify Details", "details.layers.title.gridOrigin": "Details", "details.layers.found": "Found {numResults} results in {numLayers} layers", "details.layers.loading": "The layer is loading...", "details.layers.error": "Error", "details.layers.results.empty": "No results found for any layer.", "details.layers.results.empty.currentLayer": "No results found for the selected layer.", "details.layers.results.empty.noLayers": "No layers for identification.", "details.layers.results.list.tooltip": "Use the arrow keys to navigate the items", "details.result.default.name": "Identify Item {0}", "details.loading": "Loading...", "details.items.title": "Details", "details.items.range": "{0} - {1} of {2}", "details.items.next": "Next page", "details.items.previous": "Previous page", "details.items.page": "Items per page", "details.item.see.list": "See List", "details.item.zoom": "Zoom to feature", "details.item.zoom.zooming": "Zooming...", "details.item.zoom.error": "Zoom failed", "details.item.zoom.zoomed": "Zoomed", "details.item.previous.item": "Previous item", "details.item.next.item": "Next item", "details.item.count": "{0} of {1}", "details.item.loading": "Loading results...", "details.item.no.data": "No data to show because the layer has been removed", "details.item.alert.zoom": "Zoomed into feature", "details.item.alert.show.item": "Showing result {itemName}", "details.item.alert.show.list": "Showing all results for {layerName}", "details.item.alert.defaultAltText": "Image associated with {alias} field", "details.togglehilight.title": "Toggle Highlight", "details.item.open": "Expand", "details.item.collapse": "Collapse" }, fr: { "details.layers.title.identifyOrigin": "Identifier les détails", "details.layers.title.gridOrigin": "Détails", "details.layers.found": "{numResults} résultats trouvés dans {numLayers} couches", "details.layers.loading": "La couche est en cours de chargement...", "details.layers.error": "Erreur", "details.layers.results.empty": "Aucun résultat trouvé pour aucune couche.", "details.layers.results.empty.currentLayer": "Aucun résultat trouvé pour la couche sélectionnée.", "details.layers.results.empty.noLayers": "Pas de couches pour l'identification.", "details.layers.results.list.tooltip": "Utilisez les touches fléchées pour naviguer entre les éléments", "details.result.default.name": "Désigner l'élément {0}", "details.loading": "Chargement en cours...", "details.items.title": "Détails", "details.items.range": "{0} - {1} de {2}", "details.items.next": "Page suivante", "details.items.previous": "Page précédente", "details.items.page": "éléments par page", "details.item.see.list": "Voir la liste", "details.item.zoom": "Zoom à l'élément", "details.item.zoom.zooming": "Zoom en cours...", "details.item.zoom.error": "Échec du zoom", "details.item.zoom.zoomed": "Zoom terminé", "details.item.previous.item": "Élément précédent", "details.item.next.item": "Élément suivant", "details.item.count": "{0} de {1}", "details.item.loading": "Chargement des résultats...", "details.item.no.data": "Aucune donnée à afficher", "details.item.alert.zoom": "Zoom sur la caractéristique", "details.item.alert.show.item": "Affichage du résultat {itemName}", "details.item.alert.show.list": "Affichage de tous les résultats pour {layerName}", "details.item.alert.defaultAltText": "Image associée au champ {alias}", "details.togglehilight.title": "Basculer vers l'élément principal", "details.item.open": "Développer", "details.item.collapse": "Réduire" } };
class Zt extends Fe {
  async added() {
    this.$iApi.panel.register(
      {
        details: {
          screens: {
            "details-screen": ze(Bt)
          },
          style: {
            width: "425px"
          },
          button: {
            tooltip: "details.layers.title.identifyOrigin",
            // https://fonts.google.com/icons?selected=Material%20Icons%3Aarticle%3A
            icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none" /><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" /></svg>'
          },
          alertName: "details.items.title"
        }
      },
      { i18n: { messages: Pt } }
    ), this._parseConfig(this.config);
    const e = this.$vApp.$watch(
      () => this.config,
      (t) => this._parseConfig(t)
    );
    this.removed = () => {
      e(), this.$iApi.panel.remove("details"), this.$iApi.fixture.exists("appbar") && Ce(this.$vApp.$pinia).removeButton("details"), Z(this.$vApp.$pinia).$reset();
    };
  }
}
export {
  Zt as default
};
//# sourceMappingURL=index-CIR36eC9.js.map
