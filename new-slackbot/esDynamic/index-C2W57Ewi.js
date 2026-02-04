import { bx as $e, nJ as U, nK as Ie, bC as P, bF as k, bG as le, bN as a, bT as r, fC as _, bU as K, bV as W, fD as q, iG as pe, fI as M, bP as D, i4 as oe, bI as $, bK as B, bS as O, bR as ie, ii as ve, bD as V, lu as ne, fG as Y, fH as j, bH as X, bL as R, bQ as L, bE as ee, nL as fe, kF as Te, iB as Se, nM as He, fK as Q, bO as ae, bJ as Ae, bM as ce, ha as ze, hb as De } from "./main-BpIyUAdL.js";
import { H as Ee } from "./hilight-defs-DzKgjtLG.js";
import { T as Me } from "./toggle-switch-control-0t7pwKIS.js";
class Ce {
  id;
  name;
  template;
  fields;
  componentId;
  constructor(e) {
    const t = {
      ...typeof e == "string" ? { id: e, template: "", name: "" } : e
    };
    ({ template: this.template, id: this.id, name: this.name, fields: this.fields } = t);
  }
}
const se = "details";
class Fe extends $e {
  detailsStore = U(this.$vApp.$pinia);
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
    this.detailsStore.payload = e;
    const t = this.$iApi.panel.get("details");
    this.detailsStore.origin = "identify", t.button.tooltip = "details.layers.title.identifyOrigin", e.forEach((l) => {
      const u = this.$iApi.useStore("layer").getLayerByUid(l.uid);
      this._loadDetailsConfig(u);
    }), this.$iApi.panel.get("details").isOpen || this.$iApi.panel.open({
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
    const l = this.$iApi.geo.layer.getLayer(e.uid), u = `${e.uid}-${// see https://github.com/ramp4-pcar4/ramp4-pcar4/issues/1767 for the reasoning behind this
    l?.supportsFeatures ? e.data[l?.oidField ?? ""] : JSON.stringify(e.data)}`;
    if (s.isOpen && u === this.detailsStore.currentFeatureId && t !== !0) {
      s.close(), this.detailsStore.currentFeatureId = void 0;
      return;
    }
    this.detailsStore.origin = "toggleEvent", s.button.tooltip = "details.layers.title.gridOrigin", this.detailsStore.currentFeatureId = u, this._loadDetailsConfig(l);
    const d = {
      items: [Ie.makeRawItem(e.format, e.data)],
      uid: e.uid,
      layerId: e.layerId || l?.id || "error-not-found",
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
        fields: t[u].fields
      });
    });
    const l = s.map((u) => new Ce(u));
    this.detailsStore.properties = l.reduce((u, d) => (u[d.id] = d, u), {}), this._validateItems();
  }
  _loadDetailsConfig(e) {
    if (e && this.detailsStore.properties[e.id] === void 0) {
      const s = this.getLayerFixtureConfigs();
      s[e.id] !== void 0 && this.detailsStore.addConfigProperty({
        id: e.id,
        name: s[e.id].name,
        template: s[e.id].template,
        fields: s[e.id].fields
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
    const s = e instanceof Array ? e : [e], l = this.$iApi.fixture.get("hilight");
    if (l) {
      const u = await l.getGraphicsByKey(se);
      await l.removeHilight(u);
      const d = Date.now();
      this.detailsStore.lastHilight = d;
      const g = await this.getHilightGraphics(s, t);
      this.detailsStore.lastHilight === d && (await l.addHilight(g), this.detailsStore.lastHilight !== d && l.removeHilight(g));
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
    const s = e instanceof Array ? e : [e], l = this.$iApi.fixture.get("hilight");
    if (l) {
      const u = await this.getHilightGraphics(s, t);
      l.reloadHilight(u);
    }
  }
  /**
   * Return the graphics of the given IdentifyItems once the items have loaded.
   * @param {Array<IdentifyItem>} items identify items to hilight. Items should be of ESRI format
   * @param layerUid uid of layer the items belong to
   * @returns {Promise<Array<Graphic>>} resolves with array of graphics
   */
  async getHilightGraphics(e, t) {
    const s = this.$iApi.geo.layer.getLayer(t), l = this.$iApi.fixture.get("hilight"), u = [];
    return s && await Promise.all(
      e.map(async (d) => {
        await d.loading;
        const g = d.data[s.oidField], v = await s.getGraphic(g, {
          getGeom: !0,
          getAttribs: !0,
          getStyle: !0
        });
        v.id = l.constructGraphicKey(se, t, g), u.push(v);
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
    return e && e.hilightMode.mode !== Ee.NONE;
  }
}
const Ne = {
  key: 0,
  class: "relative"
}, Oe = {
  key: 0,
  class: "relative"
}, Be = ["innerHTML"], je = ["src"], Pe = {
  key: 1,
  class: "w-32 h-32"
}, Ge = { class: "symbologyIcon" }, qe = ["innerHTML"], Re = ["src"], Ue = { class: "badge z-50 rounded-full text-white absolute h-10 w-10 p-8 inline-flex items-center justify-center" }, Ve = {
  key: 0,
  class: "px-5"
}, Ze = {
  key: 1,
  class: "inline-flex justify-center items-center relative"
}, Ke = /* @__PURE__ */ P({
  __name: "symbology-stack",
  props: {
    layer: { type: Object, required: !0 },
    result: { type: Object, required: !0 }
  },
  setup(h) {
    const e = h, t = k([]);
    return le(() => {
      t.value = e.layer.legend;
    }), (s, l) => h.result.loaded ? (a(), r("div", Ne, [
      _("div", {
        class: q(h.result.items.length === 0 ? "opacity-50" : "")
      }, [
        t.value.length > 1 ? (a(), r("div", Oe, [
          (a(!0), r(K, null, W(t.value.slice(0, 3).reverse(), (u, d) => (a(), r("div", {
            class: q(["absolute", [d == 0 ? "symbol-0" : d == 1 ? "left-3" : "left-6"]]),
            style: pe({ "z-index": 3 - d }),
            key: d
          }, [
            t.value[d].svgcode ? (a(), r("span", {
              key: 0,
              class: "symbologyIcon w-28 h-28",
              innerHTML: t.value[d].svgcode
            }, null, 8, Be)) : t.value[d].imgUrl ? (a(), r("img", {
              key: 1,
              class: "symbologyIcon w-28 h-28",
              src: t.value[d].imgUrl
            }, null, 8, je)) : M("", !0)
          ], 6))), 128))
        ])) : t.value.length > 0 ? (a(), r("div", Pe, [
          _("div", Ge, [
            t.value[0].svgcode ? (a(), r("span", {
              key: 0,
              innerHTML: t.value[0].svgcode
            }, null, 8, qe)) : t.value[0].imgUrl ? (a(), r("img", {
              key: 1,
              class: "symbologyIcon w-full h-full",
              src: t.value[0].imgUrl
            }, null, 8, Re)) : M("", !0)
          ])
        ])) : M("", !0)
      ], 2),
      _("div", Ue, [
        h.result.loaded ? (a(), r("div", Ve, D(h.result.items.length), 1)) : M("", !0)
      ])
    ])) : (a(), r("div", Ze, l[0] || (l[0] = [
      _("div", { class: "symbologyIcon h-32 w-32" }, [
        _("div", { class: "relative animate-spin spinner h-24 w-24" })
      ], -1)
    ])));
  }
}), Je = /* @__PURE__ */ oe(Ke, [["__scopeId", "data-v-496d788d"]]), Qe = ["content"], We = { class: "symbologyLayerName truncate" }, Ye = /* @__PURE__ */ P({
  __name: "symbology-item",
  props: {
    layer: { type: Object, required: !0 },
    result: { type: Object, required: !0 },
    selected: { type: Boolean, required: !0 }
  },
  setup(h) {
    const e = U(), t = $(() => e.properties), s = h, l = () => {
      const u = s.layer;
      return u && t.value[u.id] && t.value[u.id].name ? t.value[u.id].name : u?.name ?? "";
    };
    return (u, d) => {
      const g = B("tippy");
      return O((a(), r("button", {
        class: q(["flex flex-grow justify-start items-center px-7 py-10 default-focus-style symbologyStackButton truncate", h.selected ? "detailsButtonSelected" : "px-11"]),
        onClick: d[0] || (d[0] = ve(() => {
        }, ["stop"])),
        content: l()
      }, [
        ie(Je, {
          class: "symbStack w-32 h-32 mr-10",
          layer: h.layer,
          result: h.result
        }, null, 8, ["layer", "result"]),
        _("div", We, D(l()), 1)
      ], 10, Qe)), [
        [g, { placement: "right", sticky: !0 }]
      ]);
    };
  }
}), Xe = ["content"], et = /* @__PURE__ */ P({
  __name: "symbology-list",
  props: {
    results: { type: Object, required: !0 },
    selected: { type: String, required: !0 }
  },
  emits: ["selection-changed"],
  setup(h, { emit: e }) {
    const { t } = V(), s = ne(), l = k(), u = () => {
      l.value._tippy.hide();
    }, d = (x) => {
      x.key === "Tab" && l.value?.matches(":focus") && l.value._tippy.show();
    }, g = e, v = h, f = k(""), p = k([]), c = k(!1), i = k(!1), m = (x) => s.getLayerByUid(x), I = (x) => {
      f.value = x, g("selection-changed", x), c.value = !1;
    }, C = () => {
      i.value || setTimeout(() => {
        c.value = i.value;
      }, 500), i.value = !0;
    }, E = () => {
      c.value = i.value = !1;
    }, y = () => {
      i.value || (c.value = !0), i.value = !0;
    }, S = () => {
      c.value = i.value = !1;
    };
    return Y(() => {
      p.value.push(
        j(v, () => {
          f.value = v.selected;
        })
      );
    }), le(() => {
      l.value?.addEventListener("blur", u), l.value?.addEventListener("keyup", d);
    }), X(() => {
      p.value.forEach((x) => x()), l.value?.removeEventListener("blur", u), l.value?.removeEventListener("keyup", d);
    }), (x, H) => {
      const F = B("focus-item"), A = B("focus-list"), Z = B("tippy");
      return O((a(), r("div", {
        class: q(["symbology-list absolute overflow-hidden z-50 p-0 w-48 bg-white text-sm inline-flex flex-col", { "symbology-list-expanded": c.value }]),
        onMouseover: C,
        onMouseleave: E,
        onFocus: y,
        onBlur: ve(S, ["self"]),
        content: L(t)("details.layers.results.list.tooltip"),
        ref_key: "el",
        ref: l
      }, [
        (a(!0), r(K, null, W(v.results, (n, b) => (a(), r("div", {
          class: "flex justify-start relative",
          key: b
        }, [
          O((a(), R(Ye, {
            key: n.uid,
            layer: m(n.uid),
            result: n,
            selected: n.uid === f.value,
            onClick: (z) => I(n.uid)
          }, null, 8, ["layer", "result", "selected", "onClick"])), [
            [F]
          ])
        ]))), 128))
      ], 42, Xe)), [
        [A],
        [Z, {
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
    const { t: e } = V(), t = ee("iApi"), s = h, l = (f, p, c, i) => {
      const m = f.find((I) => I[p].toLowerCase() === c.toLowerCase());
      m && delete i[m.name];
    }, u = () => {
      const f = Object.assign({}, s.identifyData.data);
      l(s.fields, "type", "geometry", f), t?.ui.exposeOids || l(s.fields, "type", "oid", f), t?.ui.exposeMeasurements || (l(s.fields, "name", "shape_length", f), l(s.fields, "name", "shape_area", f));
      const p = {};
      s.fields.forEach((i) => {
        const m = s.fixtureFields?.find((I) => i.name === I.field);
        p[i.name] = {
          name: m?.alias || i.alias || i.name,
          type: i.type,
          visible: m?.visible ?? !0
        };
      });
      const c = {};
      Object.keys(f).forEach((i) => {
        const m = p[i];
        if (m && m.visible) {
          const I = f[i];
          c[i] = {
            value: typeof I == "number" ? t?.ui.formatNumber(I) : I,
            alias: m.name,
            type: m.type
          };
        }
      });
      for (const [i] of Object.entries(c))
        t.ui.isPlainText(c[i].value) && (c[i].value = t.ui.escapeHtml(c[i].value));
      return c;
    }, d = (f, p, c) => {
      switch (c) {
        case "date":
          return v(f);
        default:
          return g(f, p);
      }
    }, g = (f, p) => {
      if (!f)
        return f;
      if (f.trim().match(/\.(jpeg|jpg|gif|png)$/) || f.trim().match(
        /^\s*data:([a-z]+\/[a-z]+(;[a-z\-]+\=[a-z\-]+)?)?(;base64)?,[a-z0-9\!\$\&\'\,\(\)\*\+\,\;\=\-\.\_\~\:\@\/\?\%\s]*\s*$/i
        //eslint-disable-line
      ))
        return `<img src="${f}" alt="${e("details.item.alert.defaultAltText", { alias: p })}" />`;
      const c = "underline text-blue-700 break-all", i = document.createElement("div");
      return i.innerHTML = f.trim(), i.firstElementChild?.tagName == "A" ? (i.firstElementChild.className = c, i.innerHTML) : fe(f, {
        className: c,
        target: "_blank",
        validate: {
          url: (I) => /^https?:\/\//.test(I)
          // only links that begin with a protocol will be hyperlinked
        }
      });
    }, v = (f) => {
      const p = parseInt(f);
      return isNaN(p) ? f : new Date(p).toISOString().split("T")[0];
    };
    return (f, p) => (a(), r("div", null, [
      (a(!0), r(K, null, W(u(), (c, i, m) => (a(), r("div", {
        class: "p-5 pl-3 flex justify-end flex-wrap even:bg-gray-300",
        key: m
      }, [
        _("span", tt, D(c.alias), 1),
        p[0] || (p[0] = _("span", { class: "flex-auto" }, null, -1)),
        _("span", {
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
    const { t: e } = V();
    return (t, s) => h.identifyData ? (a(), r("div", {
      key: 0,
      class: "whitespace-pre-wrap break-words h-full overflow-auto",
      innerHTML: h.identifyData.data.data ?? h.identifyData.data
    }, null, 8, at)) : (a(), r("div", lt, D(L(e)("details.layers.results.empty")), 1));
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
}, ft = ["content", "aria-label"], ht = {
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
}, bt = ["innerHTML"], me = /* @__PURE__ */ P({
  __name: "result-item",
  props: {
    uid: { type: String, required: !0 },
    data: { type: Object, required: !0 },
    open: { type: Boolean, required: !1 },
    inList: { type: Boolean, required: !1 }
  },
  setup(h) {
    const e = ne(), t = h, s = ee("iApi"), l = k([]), u = U(), { t: d } = V(), g = k(""), v = k("none"), f = k(), p = () => e.getLayerByUid(t.uid), c = $(() => u.properties), i = $(() => u.defaultTemplates), m = $(() => p()?.supportsFeatures ?? !1), I = $(() => p()?.mapLayer ?? !1), C = $(() => {
      const n = p()?.nameField;
      let b = n && t.data.loaded ? t.data.data[n] : s.$i18n.t("details.items.title");
      return s.ui.isPlainText(b) && (b = s.ui.escapeHtml(b)), b;
    }), E = (n) => {
      if (typeof n == "string") {
        const b = "underline text-blue-700 break-all", z = document.createElement("div");
        return z.innerHTML = n.trim(), z.firstElementChild?.tagName == "A" ? (z.firstElementChild.className = b, z.innerHTML) : fe(n, {
          className: b,
          target: "_blank",
          validate: {
            url: (N) => /^https?:\/\//.test(N)
            // only links that begin with a protocol will be hyperlinked
          }
        });
      }
      return n;
    }, y = () => {
      A("none"), t.data.loaded ? S() : t.data.load().then(() => {
        S();
      });
    }, S = () => {
      if (g.value = "", !(t.data && t.data.loaded))
        return;
      const n = p();
      if (n === void 0) {
        console.warn(`could not find layer for uid ${t.uid} during icon lookup`);
        return;
      }
      if (n.supportsFeatures) {
        const b = n.oidField;
        n.getIcon(t.data.data[b]).then((z) => {
          g.value = z;
        });
      }
    }, x = $(() => {
      const n = p();
      return n && c.value[n.id] && c.value[n.id].template ? c.value[n.id].template : i.value && i.value[t.data.format] ? i.value[t.data.format] : m.value ? it : ot;
    }), H = $(() => m.value ? p()?.fields || [] : []), F = $(() => {
      const n = p();
      if (n && c.value[n.id] && c.value[n.id].fields)
        return c.value[n.id].fields;
    }), A = (n) => {
      n === "zoomed" || n === "error" ? setTimeout(() => {
        v.value = n, f.value?._tippy.show(), setTimeout(() => {
          f.value?._tippy.hide(), v.value = "none";
        }, 3e3);
      }, 300) : v.value = n;
    }, Z = () => {
      if (v.value !== "none")
        return;
      A("zooming");
      const n = p();
      if (n === void 0 || !n.isLoaded) {
        console.warn(`Could not find layer for uid ${t.uid} during zoom geometry lookup`), A("error");
        return;
      }
      if (!t.data.loaded) {
        console.warn("Details zoomToFeature call on item that is still loading. Should be impossible, alert the devs."), A("error");
        return;
      }
      const b = t.data.data[n.oidField], z = () => {
        const T = { getGeom: !0 };
        n.getGraphic(b, T).then((N) => {
          N.geometry.invalid() ? (console.error(`Could not find graphic for objectid ${b}`), A("error")) : (s.geo.map.zoomMapTo(N.geometry), A("zoomed"), s.updateAlert(s.$i18n.t("details.item.alert.zoom")));
        }).catch(() => {
          A("error");
        });
      };
      n.layerType === Se.FEATURE && n.geomType !== He.POINT ? n.getGraphicExtent(b).then((T) => {
        s.geo.map.zoomMapTo(T), A("zoomed"), s.updateAlert(s.$i18n.t("details.item.alert.zoom"));
      }).catch(() => {
        z();
      }) : z();
    };
    return Y(() => {
      l.value.push(
        j(
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
    }), X(() => {
      l.value.forEach((n) => n());
    }), (n, b) => {
      const z = B("truncate"), T = B("tippy");
      return a(), r(K, null, [
        _("div", nt, [
          m.value ? (a(), r("div", rt, [
            _("div", ut, [
              h.data.loaded && g.value ? (a(), r("span", {
                key: 0,
                class: "flex-none symbologyIcon",
                innerHTML: g.value
              }, null, 8, dt)) : (a(), r("div", ct, b[1] || (b[1] = [
                _("div", { class: "animate-spin spinner h-20 w-20" }, null, -1)
              ])))
            ]),
            h.data.loaded ? O((a(), r("span", {
              key: 0,
              class: "pl-3 text-left flex-grow itemName",
              content: C.value,
              innerHTML: E(C.value),
              tabindex: h.inList ? -1 : 0
            }, null, 8, mt)), [
              [z, {
                options: { placement: "right" }
              }]
            ]) : (a(), r("div", pt, D(L(d)("details.loading")), 1)),
            h.data.loaded ? (a(), r("span", vt, [
              I.value ? O((a(), r("button", {
                key: 0,
                type: "button",
                content: L(d)(`details.item.zoom${v.value === "none" ? "" : `.${v.value}`}`),
                "aria-label": L(d)(`grid.cells.zoom${v.value === "none" ? "" : `.${v.value}`}`),
                ref_key: "zoomButton",
                ref: f,
                onClick: b[0] || (b[0] = (N) => {
                  N.stopPropagation(), Z();
                }),
                class: "text-gray-600 w-24 h-24 p-2 flex justify-center items-center"
              }, [
                v.value === "zooming" ? (a(), r("div", ht)) : v.value === "zoomed" ? (a(), r("svg", gt, b[2] || (b[2] = [
                  _("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    d: "M4.5 12.75l6 6 9-13.5"
                  }, null, -1)
                ]))) : v.value === "error" ? (a(), r("svg", yt, b[3] || (b[3] = [
                  _("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    d: "M6 18L18 6M6 6l12 12"
                  }, null, -1)
                ]))) : (a(), r("span", {
                  key: 3,
                  innerHTML: L(s).ui.getZoomIcon()
                }, null, 8, bt))
              ], 8, ft)), [
                [T, { placement: "bottom" }]
              ]) : M("", !0)
            ])) : M("", !0)
          ])) : M("", !0)
        ]),
        h.open ? (a(), R(Te(x.value), {
          key: 0,
          identifyData: h.data,
          fields: H.value,
          fixtureFields: F.value,
          class: "p-8"
        }, null, 8, ["identifyData", "fields", "fixtureFields"])) : M("", !0)
      ], 64);
    };
  }
}), _t = {
  key: 0,
  class: "layerName w-full flex-grow p-5 pb-8 font-bold truncate",
  tabIndex: "0"
}, xt = {
  key: 1,
  class: "p-8 mb-8 bg-gray-100 flex justify-between"
}, kt = { for: "toggle" }, wt = {
  key: 2,
  class: "flex flex-col justify-between p-8 mb-8 bg-gray-100"
}, Lt = { class: "flex" }, $t = ["aria-label"], It = ["content", "aria-label", "disabled"], Tt = { class: "px-3 text-center flex-grow" }, St = ["content", "aria-label", "disabled"], Ht = { key: 3 }, At = { key: 0 }, zt = ["content"], Dt = ["onClick"], Et = {
  key: 1,
  class: "text-center"
}, Mt = {
  key: 4,
  class: "p-5"
}, Ct = /* @__PURE__ */ P({
  __name: "result-list",
  props: {
    uid: { type: String, required: !0 },
    results: { type: Object, required: !0 }
  },
  setup(h) {
    const e = k(), t = () => {
      e.value._tippy.hide();
    }, s = (o) => {
      o.key === "Tab" && e.value?.matches(":focus") && e.value._tippy.show();
    }, l = ee("iApi"), u = U(), d = ne(), g = h, { t: v } = V(), f = k(!1), p = k(l.fixture.get("details")), c = k(!0), i = k(!1), m = k(0), I = k(20), C = k([]), E = k([]), y = $(() => u.activeGreedy), S = $(() => u.properties), x = $(() => m.value + I.value), H = () => d.getLayerByUid(g.uid), F = () => g.results.find((o) => o.uid === g.uid), A = $(() => F()?.loaded ?? !1), Z = $(() => F()?.requestTime), n = $(
      () => f.value && (!i.value && T().length > 1 || i.value && T().length > I.value)
    ), b = $(() => {
      const o = H();
      return o && S.value[o.id] && S.value[o.id].name ? S.value[o.id].name : o?.name ?? "";
    }), z = $(() => g.uid), T = () => {
      const o = F();
      return o ? o.items : [];
    }, N = $(() => T()[m.value]), re = $(() => {
      if (p.value.hasHilighter()) {
        const o = H();
        if (o)
          return o.mapLayer && o.supportsFeatures;
      }
      return !1;
    }), he = (o) => {
      c.value = o, u.hilightToggle = o, G();
    }, ge = () => {
      const o = H();
      m.value = m.value ?? 0, c.value = u.hilightToggle ?? c.value, i.value = !1, f.value = !!o, G();
    }, ue = (o) => {
      i.value ? (m.value += o * I.value, G()) : m.value += o;
    }, G = () => {
      const o = T();
      if (c.value && A.value && o.length > 0 && re.value)
        if (i.value)
          p.value.hilightDetailsItems(o.slice(m.value, x.value), g.uid);
        else {
          const w = o[m.value];
          w && p.value.hilightDetailsItems([w], g.uid);
        }
      else
        p.value.removeDetailsHilight();
    }, ye = () => {
      i.value = !0, m.value = Math.floor(m.value / I.value) * I.value, G();
    }, be = () => {
      p.value.removeDetailsHilight();
    }, _e = () => {
      p.value.removeDetailsHilight();
    }, xe = (o) => {
      const w = m.value;
      m.value = o, i.value = !1, w === o && G();
    };
    return le(() => {
      C.value.push(
        l.event.on(Q.LAYER_REMOVE, (o) => {
          const w = l.panel.get("details");
          g.uid === o.uid && w && w.close();
        })
      ), C.value.push(
        l.event.on(Q.PANEL_CLOSED, (o) => {
          o.id === "details" && be();
        })
      ), C.value.push(
        l.event.on(Q.PANEL_MINIMIZED, (o) => {
          o.id === "details" && _e();
        })
      ), C.value.push(
        l.event.on(Q.MAP_BASEMAPCHANGE, (o) => {
          c.value && o.schemaChanged && G();
        })
      ), e.value?.addEventListener("blur", t), e.value?.addEventListener("keyup", s);
    }), Y(() => {
      E.value.push(
        j(
          N,
          () => {
            i.value || (ge(), N.value === void 0 && p.value.removeDetailsHilight());
          },
          {
            deep: !1,
            immediate: !0
          }
        )
      ), E.value.push(
        j(
          z,
          () => {
            const o = g.uid;
            if (i.value && o) {
              const w = F();
              w && w.loading.then(() => {
                g.uid === o && i.value && G();
              });
            }
          },
          {
            deep: !1,
            immediate: !0
          }
        )
      ), E.value.push(
        j(Z, () => {
          m.value = 0;
        })
      ), E.value.push(
        j(
          () => g.uid,
          () => {
            m.value = 0;
          }
        )
      );
    }), X(() => {
      E.value.forEach((o) => o()), C.value.forEach((o) => l.event.off(o)), e.value?.removeEventListener("blur", t), e.value?.removeEventListener("keyup", s);
    }), (o, w) => {
      const ke = B("truncate"), te = B("tippy"), we = B("focus-item"), Le = B("focus-list");
      return A.value && y.value === 0 ? (a(), r("div", {
        key: 0,
        class: "detailsContent relative flex flex-col flex-grow pl-5",
        style: pe(h.results.length > 1 ? { "margin-left": "42px" } : "")
      }, [
        f.value ? O((a(), r("h1", _t, [
          ae(D(b.value), 1)
        ])), [
          [ke, { options: { placement: "top-start" } }]
        ]) : M("", !0),
        re.value ? (a(), r("div", xt, [
          _("label", kt, D(L(v)("details.togglehilight.title")), 1),
          ie(Me, {
            config: {
              value: c.value,
              disabled: !1
            },
            onToggled: he
          }, null, 8, ["config"])
        ])) : M("", !0),
        n.value ? (a(), r("div", wt, [
          _("div", Lt, [
            i.value ? M("", !0) : (a(), r("button", {
              key: 0,
              type: "button",
              class: "px-8 font-bold hover:bg-gray-200 focus:bg-gray-200",
              "aria-label": L(v)("details.item.see.list"),
              onClick: w[0] || (w[0] = (J) => ye())
            }, D(L(v)("details.item.see.list")), 9, $t)),
            _("div", {
              class: q(["flex ml-auto bg-gray-200 py-8 items-center", { "w-full": i.value }])
            }, [
              O((a(), r("button", {
                type: "button",
                content: L(v)(i.value ? "details.items.previous" : "details.item.previous.item"),
                onClick: w[1] || (w[1] = (J) => ue(-1)),
                class: "mx-2 opacity-60 hover:opacity-90 disabled:opacity-30 disabled:cursor-default",
                "aria-label": L(v)(i.value ? "details.items.previous" : "details.item.previous.item"),
                disabled: m.value === 0
              }, w[3] || (w[3] = [
                _("svg", {
                  height: "24",
                  width: "24",
                  viewBox: "0 0 23 23"
                }, [
                  _("g", null, [
                    _("path", { d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z" })
                  ])
                ], -1)
              ]), 8, It)), [
                [te, { placement: "top" }]
              ]),
              _("span", Tt, D(i.value ? L(v)("details.items.range", [
                m.value + 1,
                Math.min(x.value, T().length),
                T().length
              ]) : L(v)("details.item.count", [m.value + 1, T().length])), 1),
              O((a(), r("button", {
                type: "button",
                content: L(v)(i.value ? "details.items.next" : "details.item.next.item"),
                onClick: w[2] || (w[2] = (J) => ue(1)),
                class: "mx-2 rotate-180 opacity-60 hover:opacity-90 disabled:opacity-30 disabled:cursor-default",
                "aria-label": L(v)(i.value ? "details.items.next" : "details.item.next.item"),
                disabled: !i.value && m.value === T().length - 1 || i.value && x.value >= T().length
              }, w[4] || (w[4] = [
                _("svg", {
                  height: "24",
                  width: "24",
                  viewBox: "0 0 23 23"
                }, [
                  _("g", null, [
                    _("path", { d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z" })
                  ])
                ], -1)
              ]), 8, St)), [
                [te, { placement: "top" }]
              ])
            ], 2)
          ])
        ])) : M("", !0),
        f.value ? (a(), r("div", Ht, [
          T().length > 0 ? (a(), r("div", At, [
            i.value ? O((a(), r("div", {
              key: 0,
              class: "flex flex-col",
              content: L(v)("details.layers.results.list.tooltip"),
              ref_key: "el",
              ref: e
            }, [
              (a(!0), r(K, null, W(T().slice(m.value, x.value), (J, de) => O((a(), r("button", {
                class: "flex flex-grow truncate default-focus-style hover:bg-gray-200",
                key: de,
                onClick: (Gt) => xe(m.value + de)
              }, [
                ie(me, {
                  data: J,
                  uid: h.uid,
                  open: !1,
                  "in-list": !0
                }, null, 8, ["data", "uid"])
              ], 8, Dt)), [
                [we, "show-truncate"]
              ])), 128))
            ], 8, zt)), [
              [Le],
              [te, {
                trigger: "manual",
                placement: "top-start"
              }]
            ]) : (a(), R(me, {
              key: 1,
              data: N.value,
              uid: h.uid,
              open: !0,
              "in-list": !1
            }, null, 8, ["data", "uid"]))
          ])) : (a(), r("div", Et, D(L(v)("details.layers.results.empty.currentLayer")), 1))
        ])) : (a(), r("div", Mt, D(L(v)("details.item.no.data")), 1))
      ], 4)) : (a(), r("div", {
        key: 1,
        class: q(["flex justify-center py-10 items-center", h.results.length > 1 ? "ml-42" : ""])
      }, [
        w[5] || (w[5] = _("span", { class: "animate-spin spinner h-20 w-20 px-5 mr-8" }, null, -1)),
        ae(" " + D(L(v)("details.item.loading")), 1)
      ], 2));
    };
  }
}), Ft = /* @__PURE__ */ oe(Ct, [["__scopeId", "data-v-4c39ec75"]]), Nt = { class: "relative h-full" }, Ot = { class: "detailsContentSection overflow-y-auto h-full" }, Bt = /* @__PURE__ */ P({
  __name: "details-screen",
  props: {
    panel: {
      type: Object
    }
  },
  setup(h) {
    const { t: e } = V(), t = ee("iApi"), s = U(), l = k([]), u = k([]), d = k([]), g = k(!1), v = k(""), f = k(!1), p = $(() => s.activeGreedy), c = $(() => s.payload), i = $(() => s.properties), m = (y) => {
      v.value = y, f.value = !0;
    }, I = (y) => {
      if (y === void 0)
        return;
      const S = y.length === 0 ? 0 : y[0].requestTime;
      s.activeGreedy = S, s.slowLoadingFlag = !1, d.value = y, C(y);
    }, C = (y) => {
      if (f.value) {
        const S = d.value.findIndex((x) => x.uid === v.value);
        if (S !== -1) {
          const x = d.value[S];
          x.loading.then(() => {
            x.requestTime === p.value && (x.items.length > 0 ? (s.activeGreedy = 0, f.value = !1, g.value = !1) : E(y));
          });
        } else
          E(y);
      } else
        E(y);
      setTimeout(() => {
        p.value !== 0 && y[0].requestTime === p.value && (s.slowLoadingFlag = !0);
      }, 500);
    }, E = (y) => {
      const S = y.map(
        (H) => H.loading.then(() => H.items.length > 0 ? Promise.resolve(H) : Promise.reject())
      ), x = y.length === 0 ? 0 : y[0].requestTime;
      Promise.any(S).then((H) => {
        if (H.requestTime !== p.value)
          return;
        const F = d.value.find((A) => A.uid === H.uid);
        s.activeGreedy = 0, F !== void 0 && (v.value = F.uid, g.value = !1);
      }).catch(() => {
        x === p.value && (s.activeGreedy = 0, g.value = !0);
      });
    };
    return Y(() => {
      u.value.push(
        j(
          c,
          (y) => {
            I(y);
          },
          {
            deep: !1,
            // was true when our array had undefineds. now that objects arrive intact, we dont want this triggering when innards update
            immediate: !0
          }
        )
      ), u.value.push(
        j(p, (y) => {
          y === 0 && (s.slowLoadingFlag = !1);
        })
      );
    }), X(() => {
      l.value.forEach((y) => t.event.off(y)), u.value.forEach((y) => y());
    }), (y, S) => {
      const x = Ae("panel-screen");
      return a(), R(x, { panel: h.panel }, {
        header: ce(() => [
          ae(D(
            // Show different titles based on what requested the panel
            L(s).origin === "toggleEvent" ? L(e)("details.layers.title.gridOrigin") : L(e)("details.layers.title.identifyOrigin")
          ), 1)
        ]),
        content: ce(() => [
          _("div", Nt, [
            d.value.length > 1 ? (a(), R(et, {
              key: 0,
              results: d.value,
              detailsProperties: i.value,
              selected: v.value,
              onSelectionChanged: m
            }, null, 8, ["results", "detailsProperties", "selected"])) : M("", !0),
            _("div", Ot, [
              g.value ? (a(), r("div", {
                key: 1,
                class: q(["text-center", { "ml-42": d.value.length > 1 }])
              }, D(d.value.length >= 1 ? L(e)("details.layers.results.empty") : L(e)("details.layers.results.empty.noLayers")), 3)) : (a(), R(Ft, {
                key: 0,
                uid: v.value,
                results: d.value
              }, null, 8, ["uid", "results"]))
            ])
          ])
        ]),
        _: 1
      }, 8, ["panel"]);
    };
  }
}), jt = /* @__PURE__ */ oe(Bt, [["__scopeId", "data-v-4932c3fb"]]), Pt = { en: { "details.layers.title.identifyOrigin": "Identify Details", "details.layers.title.gridOrigin": "Details", "details.layers.found": "Found {numResults} results in {numLayers} layers", "details.layers.loading": "The layer is loading...", "details.layers.error": "Error", "details.layers.results.empty": "No results found for any layer.", "details.layers.results.empty.currentLayer": "No results found for the selected layer.", "details.layers.results.empty.noLayers": "No layers for identification.", "details.layers.results.list.tooltip": "Use the arrow keys to navigate the items", "details.result.default.name": "Identify Item {0}", "details.loading": "Loading...", "details.items.title": "Details", "details.items.range": "{0} - {1} of {2}", "details.items.next": "Next page", "details.items.previous": "Previous page", "details.items.page": "Items per page", "details.item.see.list": "See List", "details.item.zoom": "Zoom to feature", "details.item.zoom.zooming": "Zooming...", "details.item.zoom.error": "Zoom failed", "details.item.zoom.zoomed": "Zoomed", "details.item.previous.item": "Previous item", "details.item.next.item": "Next item", "details.item.count": "{0} of {1}", "details.item.loading": "Loading results...", "details.item.no.data": "No data to show because the layer has been removed", "details.item.alert.zoom": "Zoomed into feature", "details.item.alert.show.item": "Showing result {itemName}", "details.item.alert.show.list": "Showing all results for {layerName}", "details.item.alert.defaultAltText": "Image associated with {alias} field", "details.togglehilight.title": "Toggle Highlight", "details.item.open": "Expand", "details.item.collapse": "Collapse" }, fr: { "details.layers.title.identifyOrigin": "Identifier les détails", "details.layers.title.gridOrigin": "Détails", "details.layers.found": "{numResults} résultats trouvés dans {numLayers} couches", "details.layers.loading": "La couche est en cours de chargement...", "details.layers.error": "Erreur", "details.layers.results.empty": "Aucun résultat trouvé pour aucune couche.", "details.layers.results.empty.currentLayer": "Aucun résultat trouvé pour la couche sélectionnée.", "details.layers.results.empty.noLayers": "Pas de couches pour l'identification.", "details.layers.results.list.tooltip": "Utilisez les touches fléchées pour naviguer entre les éléments", "details.result.default.name": "Désigner l'élément {0}", "details.loading": "Chargement en cours...", "details.items.title": "Détails", "details.items.range": "{0} - {1} de {2}", "details.items.next": "Page suivante", "details.items.previous": "Page précédente", "details.items.page": "éléments par page", "details.item.see.list": "Voir la liste", "details.item.zoom": "Zoom à l'élément", "details.item.zoom.zooming": "Zoom en cours...", "details.item.zoom.error": "Échec du zoom", "details.item.zoom.zoomed": "Zoom terminé", "details.item.previous.item": "Élément précédent", "details.item.next.item": "Élément suivant", "details.item.count": "{0} de {1}", "details.item.loading": "Chargement des résultats...", "details.item.no.data": "Aucune donnée à afficher", "details.item.alert.zoom": "Zoom sur la caractéristique", "details.item.alert.show.item": "Affichage du résultat {itemName}", "details.item.alert.show.list": "Affichage de tous les résultats pour {layerName}", "details.item.alert.defaultAltText": "Image associée au champ {alias}", "details.togglehilight.title": "Basculer vers l'élément principal", "details.item.open": "Développer", "details.item.collapse": "Réduire" } };
class Vt extends Fe {
  async added() {
    this.$iApi.panel.register(
      {
        details: {
          screens: {
            "details-screen": ze(jt)
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
      e(), this.$iApi.panel.remove("details"), this.$iApi.fixture.exists("appbar") && De(this.$vApp.$pinia).removeButton("details"), U(this.$vApp.$pinia).$reset();
    };
  }
}
export {
  Vt as default
};
//# sourceMappingURL=index-C2W57Ewi.js.map
