import { bx as we, nJ as R, nK as Le, bC as j, bF as w, bG as le, bN as i, bT as o, fC as _, bU as Z, bV as W, fD as G, iG as me, fI as D, bP as z, i4 as ne, bI as I, bK as F, bS as C, bR as ie, ii as pe, bD as V, lu as oe, fG as Y, fH as P, bH as X, bL as q, bQ as L, bE as ee, nL as ve, kF as $e, iB as Ie, nM as Te, fK as Q, bO as ae, bJ as Se, bM as de, ha as He, hb as Ae } from "./main-0_0aEuXM.js";
import { H as ze } from "./hilight-defs-DzKgjtLG.js";
import { T as De } from "./toggle-switch-control-D7Z4iRV2.js";
class Ee {
  id;
  name;
  template;
  fields;
  componentId;
  constructor(e) {
    const t = {
      ...typeof e == "string" ? { id: e, template: "", name: "" } : e
    };
    ({
      template: this.template,
      id: this.id,
      name: this.name,
      fields: this.fields
    } = t);
  }
}
const se = "details";
class Me extends we {
  detailsStore = R(this.$vApp.$pinia);
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
    const t = this.$iApi.panel.get("details-panel");
    this.detailsStore.origin = "identify", t.button.tooltip = "details.layers.title.identifyOrigin", e.forEach((l) => {
      const r = this.$iApi.useStore("layer").getLayerByUid(l.uid);
      this._loadDetailsConfig(r);
    }), this.$iApi.panel.get("details-panel").isOpen || this.$iApi.panel.open({
      id: "details-panel"
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
    const s = this.$iApi.panel.get("details-panel");
    if (t === !1) {
      s.close(), this.detailsStore.currentFeatureId = void 0;
      return;
    }
    const l = this.$iApi.geo.layer.getLayer(
      e.uid
    ), r = `${e.uid}-${// see https://github.com/ramp4-pcar4/ramp4-pcar4/issues/1767 for the reasoning behind this
    l?.supportsFeatures ? e.data[l?.oidField ?? ""] : JSON.stringify(e.data)}`;
    if (s.isOpen && r === this.detailsStore.currentFeatureId && t !== !0) {
      s.close(), this.detailsStore.currentFeatureId = void 0;
      return;
    }
    this.detailsStore.origin = "toggleEvent", s.button.tooltip = "details.layers.title.gridOrigin", this.detailsStore.currentFeatureId = r, this._loadDetailsConfig(l);
    const u = {
      items: [
        Le.makeRawItem(
          e.format,
          e.data
        )
      ],
      uid: e.uid,
      layerId: e.layerId || l?.id || "error-not-found",
      loading: Promise.resolve(),
      loaded: !0,
      errored: !1,
      requestTime: Date.now()
    };
    this.detailsStore.payload = [u], s.isOpen || s.open();
  }
  /**
   * Read the details section of the layers' fixture config
   *
   * @param {DetailsConfig} [config]
   * @memberof DetailsAPI
   */
  _parseConfig(e) {
    e && e.templates && (this.detailsStore.defaultTemplates = e.templates), this.handlePanelWidths(["details-panel"]), this.handlePanelTeleports(["details-panel"]);
    const t = this.getLayerFixtureConfigs(), s = [];
    Object.keys(t).forEach((r) => {
      s.push({
        id: r,
        name: t[r].name,
        template: t[r].template,
        fields: t[r].fields
      });
    });
    const l = s.map(
      (r) => new Ee(r)
    );
    this.detailsStore.properties = l.reduce(
      (r, u) => (r[u.id] = u, r),
      {}
    ), this._validateItems();
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
    Object.values(this.detailsStore.properties).forEach(
      (e) => {
        e.template in this.$vApp.$options.components && (this.detailsStore.properties[e.id].componentId = e.template);
      }
    );
  }
  /**
   * Highlight identified items
   * @param items items to add
   * @param layerUid uid of layer the items belong to
   */
  async hilightDetailsItems(e, t) {
    const s = e instanceof Array ? e : [e], l = this.$iApi.fixture.get("hilight");
    if (l) {
      const r = await l.getGraphicsByKey(se);
      await l.removeHilight(r);
      const u = Date.now();
      this.detailsStore.lastHilight = u;
      const y = await this.getHilightGraphics(
        s,
        t
      );
      this.detailsStore.lastHilight === u && (await l.addHilight(y), this.detailsStore.lastHilight !== u && l.removeHilight(y));
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
      const r = await this.getHilightGraphics(
        s,
        t
      );
      l.reloadHilight(r);
    }
  }
  /**
   * Return the graphics of the given IdentifyItems once the items have loaded.
   * @param {Array<IdentifyItem>} items identify items to hilight. Items should be of ESRI format
   * @param layerUid uid of layer the items belong to
   * @returns {Promise<Array<Graphic>>} resolves with array of graphics
   */
  async getHilightGraphics(e, t) {
    const s = this.$iApi.geo.layer.getLayer(t), l = this.$iApi.fixture.get("hilight"), r = [];
    return s && await Promise.all(
      e.map(async (u) => {
        await u.loading;
        const y = u.data[s.oidField], v = await s.getGraphic(y, {
          getGeom: !0,
          getAttribs: !0,
          getStyle: !0
        });
        v.id = l.constructGraphicKey(
          se,
          t,
          y
        ), r.push(v);
      })
    ), r;
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
    return e && e.hilightMode.mode !== ze.NONE;
  }
}
const Ce = {
  key: 0,
  class: "relative"
}, Fe = {
  key: 0,
  class: "relative"
}, Ne = ["innerHTML"], Oe = ["src"], Be = {
  key: 1,
  class: "w-32 h-32"
}, je = { class: "symbologyIcon" }, Pe = ["innerHTML"], Ge = ["src"], qe = { class: "badge z-50 rounded-full text-white absolute h-10 w-10 p-8 inline-flex items-center justify-center" }, Re = {
  key: 0,
  class: "px-5"
}, Ve = {
  key: 1,
  class: "inline-flex justify-center items-center relative"
}, Ue = /* @__PURE__ */ j({
  __name: "symbology-stack",
  props: {
    layer: { type: Object, required: !0 },
    result: { type: Object, required: !0 }
  },
  setup(g) {
    const e = g, t = w([]);
    return le(() => {
      t.value = e.layer.legend;
    }), (s, l) => g.result.loaded ? (i(), o("div", Ce, [
      _("div", {
        class: G(g.result.items.length === 0 ? "opacity-50" : "")
      }, [
        t.value.length > 1 ? (i(), o("div", Fe, [
          (i(!0), o(Z, null, W(t.value.slice(0, 3).reverse(), (r, u) => (i(), o("div", {
            class: G(["absolute", [
              u == 0 ? "symbol-0" : u == 1 ? "left-3" : "left-6"
            ]]),
            style: me({ "z-index": 3 - u }),
            key: u
          }, [
            t.value[u].svgcode ? (i(), o("span", {
              key: 0,
              class: "symbologyIcon w-28 h-28",
              innerHTML: t.value[u].svgcode
            }, null, 8, Ne)) : t.value[u].imgUrl ? (i(), o("img", {
              key: 1,
              class: "symbologyIcon w-28 h-28",
              src: t.value[u].imgUrl
            }, null, 8, Oe)) : D("", !0)
          ], 6))), 128))
        ])) : t.value.length > 0 ? (i(), o("div", Be, [
          _("div", je, [
            t.value[0].svgcode ? (i(), o("span", {
              key: 0,
              innerHTML: t.value[0].svgcode
            }, null, 8, Pe)) : t.value[0].imgUrl ? (i(), o("img", {
              key: 1,
              class: "symbologyIcon w-full h-full",
              src: t.value[0].imgUrl
            }, null, 8, Ge)) : D("", !0)
          ])
        ])) : D("", !0)
      ], 2),
      _("div", qe, [
        g.result.loaded ? (i(), o("div", Re, z(g.result.items.length), 1)) : D("", !0)
      ])
    ])) : (i(), o("div", Ve, l[0] || (l[0] = [
      _("div", { class: "symbologyIcon h-32 w-32" }, [
        _("div", { class: "relative animate-spin spinner h-24 w-24" })
      ], -1)
    ])));
  }
}), Ze = /* @__PURE__ */ ne(Ue, [["__scopeId", "data-v-256f0518"]]), Ke = ["content"], Je = { class: "symbologyLayerName truncate" }, Qe = /* @__PURE__ */ j({
  __name: "symbology-item",
  props: {
    layer: { type: Object, required: !0 },
    result: { type: Object, required: !0 },
    selected: { type: Boolean, required: !0 }
  },
  setup(g) {
    const e = R(), t = I(
      () => e.properties
    ), s = g, l = () => {
      const r = s.layer;
      return r && t.value[r.id] && t.value[r.id].name ? t.value[r.id].name : r?.name ?? "";
    };
    return (r, u) => {
      const y = F("tippy");
      return C((i(), o("button", {
        class: G(["flex flex-grow justify-start items-center px-7 py-10 default-focus-style symbologyStackButton truncate", g.selected ? "detailsButtonSelected" : "px-11"]),
        onClick: u[0] || (u[0] = pe(() => {
        }, ["stop"])),
        content: l()
      }, [
        ie(Ze, {
          class: "symbStack w-32 h-32 mr-10",
          layer: g.layer,
          result: g.result
        }, null, 8, ["layer", "result"]),
        _("div", Je, z(l()), 1)
      ], 10, Ke)), [
        [y, { placement: "right", sticky: !0 }]
      ]);
    };
  }
}), We = ["content"], Ye = /* @__PURE__ */ j({
  __name: "symbology-list",
  props: {
    results: { type: Object, required: !0 },
    selected: { type: String, required: !0 }
  },
  emits: ["selection-changed"],
  setup(g, { emit: e }) {
    const { t } = V(), s = oe(), l = w(), r = () => {
      l.value._tippy.hide();
    }, u = (x) => {
      x.key === "Tab" && l.value?.matches(":focus") && l.value._tippy.show();
    }, y = e, v = g, f = w(""), c = w([]), d = w(!1), a = w(!1), m = (x) => s.getLayerByUid(x), $ = (x) => {
      f.value = x, y("selection-changed", x), d.value = !1;
    }, E = () => {
      a.value || setTimeout(() => {
        d.value = a.value;
      }, 500), a.value = !0;
    }, M = () => {
      d.value = a.value = !1;
    }, b = () => {
      a.value || (d.value = !0), a.value = !0;
    }, T = () => {
      d.value = a.value = !1;
    };
    return Y(() => {
      c.value.push(
        P(v, () => {
          f.value = v.selected;
        })
      );
    }), le(() => {
      l.value?.addEventListener("blur", r), l.value?.addEventListener("keyup", u);
    }), X(() => {
      c.value.forEach((x) => x()), l.value?.removeEventListener("blur", r), l.value?.removeEventListener("keyup", u);
    }), (x, S) => {
      const N = F("focus-item"), A = F("focus-list"), U = F("tippy");
      return C((i(), o("div", {
        class: G(["symbology-list absolute overflow-hidden z-50 p-0 w-48 bg-white text-sm inline-flex flex-col", { "symbology-list-expanded": d.value }]),
        onMouseover: E,
        onMouseleave: M,
        onFocus: b,
        onBlur: pe(T, ["self"]),
        content: L(t)("details.layers.results.list.tooltip"),
        ref_key: "el",
        ref: l
      }, [
        (i(!0), o(Z, null, W(v.results, (n, h) => (i(), o("div", {
          class: "flex justify-start relative",
          key: h
        }, [
          C((i(), q(Qe, {
            key: n.uid,
            layer: m(n.uid),
            result: n,
            selected: n.uid === f.value,
            onClick: (H) => $(n.uid)
          }, null, 8, ["layer", "result", "selected", "onClick"])), [
            [N]
          ])
        ]))), 128))
      ], 42, We)), [
        [A],
        [U, {
          trigger: "manual",
          placement: "top-start"
        }]
      ]);
    };
  }
}), Xe = { class: "inline font-bold" }, et = ["innerHTML"], tt = /* @__PURE__ */ j({
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
  setup(g) {
    const { t: e } = V(), t = ee("iApi"), s = g, l = (f, c, d, a) => {
      const m = f.find(
        ($) => $[c].toLowerCase() === d.toLowerCase()
      );
      m && delete a[m.name];
    }, r = () => {
      const f = Object.assign({}, s.identifyData.data);
      l(s.fields, "type", "geometry", f), t?.ui.exposeOids || l(s.fields, "type", "oid", f), t?.ui.exposeMeasurements || (l(s.fields, "name", "shape_length", f), l(s.fields, "name", "shape_area", f));
      const c = {};
      s.fields.forEach((a) => {
        const m = s.fixtureFields?.find(
          ($) => a.name === $.field
        );
        c[a.name] = {
          name: m?.alias || a.alias || a.name,
          type: a.type,
          visible: m?.visible ?? !0
        };
      });
      const d = {};
      Object.keys(f).forEach((a) => {
        const m = c[a];
        if (m && m.visible) {
          const $ = f[a];
          d[a] = {
            value: typeof $ == "number" ? t?.ui.formatNumber($) : $,
            alias: m.name,
            type: m.type
          };
        }
      });
      for (const [a] of Object.entries(d))
        t.ui.isPlainText(d[a].value) && (d[a].value = t.ui.escapeHtml(
          d[a].value
        ));
      return d;
    }, u = (f, c, d) => {
      switch (d) {
        case "date":
          return v(f);
        default:
          return y(f, c);
      }
    }, y = (f, c) => {
      if (!f)
        return f;
      if (f.trim().match(/\.(jpeg|jpg|gif|png)$/) || f.trim().match(
        /^\s*data:([a-z]+\/[a-z]+(;[a-z\-]+\=[a-z\-]+)?)?(;base64)?,[a-z0-9\!\$\&\'\,\(\)\*\+\,\;\=\-\.\_\~\:\@\/\?\%\s]*\s*$/i
        //eslint-disable-line
      ))
        return `<img src="${f}" alt="${e(
          "details.item.alert.defaultAltText",
          { alias: c }
        )}" />`;
      const d = "underline text-blue-700 break-all", a = document.createElement("div");
      return a.innerHTML = f.trim(), a.firstElementChild?.tagName == "A" ? (a.firstElementChild.className = d, a.innerHTML) : ve(f, {
        className: d,
        target: "_blank",
        validate: {
          url: ($) => /^https?:\/\//.test($)
          // only links that begin with a protocol will be hyperlinked
        }
      });
    }, v = (f) => {
      const c = parseInt(f);
      return isNaN(c) ? f : new Date(c).toISOString().split("T")[0];
    };
    return (f, c) => (i(), o("div", null, [
      (i(!0), o(Z, null, W(r(), (d, a, m) => (i(), o("div", {
        class: "p-5 pl-3 flex justify-end flex-wrap even:bg-gray-300",
        key: m
      }, [
        _("span", Xe, z(d.alias), 1),
        c[0] || (c[0] = _("span", { class: "flex-auto" }, null, -1)),
        _("span", {
          class: "inline",
          innerHTML: u(d.value, d.alias, d.type)
        }, null, 8, et)
      ]))), 128))
    ]));
  }
}), st = ["innerHTML"], it = { key: 1 }, at = /* @__PURE__ */ j({
  __name: "html-default",
  props: {
    identifyData: {
      type: Object,
      required: !0
    }
  },
  setup(g) {
    const { t: e } = V();
    return (t, s) => g.identifyData ? (i(), o("div", {
      key: 0,
      class: "whitespace-pre-wrap break-words h-full overflow-auto",
      innerHTML: g.identifyData.data.data ?? g.identifyData.data
    }, null, 8, st)) : (i(), o("div", it, z(L(e)("details.layers.results.empty")), 1));
  }
}), lt = { class: "relative flex flex-grow truncate" }, nt = {
  key: 0,
  class: "flex flex-grow items-center truncate"
}, ot = { class: "flex p-8 items-center" }, rt = ["innerHTML"], ut = {
  key: 1,
  class: "symbologyIcon p-6"
}, dt = ["content", "innerHTML", "tabindex"], ct = {
  key: 1,
  class: "flex p-6 flex-grow"
}, mt = {
  key: 2,
  class: "zoomButton text-center p-3"
}, pt = ["content", "aria-label"], vt = {
  key: 0,
  class: "m-auto animate-spin spinner h-20 w-20"
}, ft = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "green",
  class: "m-auto w-20 h-20"
}, ht = {
  key: 2,
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "red",
  class: "m-auto w-20 h-20"
}, gt = ["innerHTML"], ce = /* @__PURE__ */ j({
  __name: "result-item",
  props: {
    uid: { type: String, required: !0 },
    data: { type: Object, required: !0 },
    open: { type: Boolean, required: !1 },
    inList: { type: Boolean, required: !1 }
  },
  setup(g) {
    const e = oe(), t = g, s = ee("iApi"), l = w([]), r = R(), { t: u } = V(), y = w(""), v = w("none"), f = w(), c = () => e.getLayerByUid(t.uid), d = I(
      () => r.properties
    ), a = I(
      () => r.defaultTemplates
    ), m = I(() => c()?.supportsFeatures ?? !1), $ = I(() => c()?.mapLayer ?? !1), E = I(() => {
      const n = c()?.nameField;
      let h = n && t.data.loaded ? t.data.data[n] : s.$i18n.t("details.items.title");
      return s.ui.isPlainText(h) && (h = s.ui.escapeHtml(h)), h;
    }), M = (n) => {
      if (typeof n == "string") {
        const h = "underline text-blue-700 break-all", H = document.createElement("div");
        return H.innerHTML = n.trim(), H.firstElementChild?.tagName == "A" ? (H.firstElementChild.className = h, H.innerHTML) : ve(n, {
          className: h,
          target: "_blank",
          validate: {
            url: (B) => /^https?:\/\//.test(B)
            // only links that begin with a protocol will be hyperlinked
          }
        });
      }
      return n;
    }, b = () => {
      A("none"), t.data.loaded ? T() : t.data.load().then(() => {
        T();
      });
    }, T = () => {
      if (y.value = "", !(t.data && t.data.loaded))
        return;
      const n = c();
      if (n === void 0) {
        console.warn(
          `could not find layer for uid ${t.uid} during icon lookup`
        );
        return;
      }
      if (n.supportsFeatures) {
        const h = n.oidField;
        n.getIcon(t.data.data[h]).then((H) => {
          y.value = H;
        });
      }
    }, x = I(() => {
      const n = c();
      return n && d.value[n.id] && d.value[n.id].template ? d.value[n.id].template : a.value && a.value[t.data.format] ? a.value[t.data.format] : m.value ? tt : at;
    }), S = I(() => m.value ? c()?.fields || [] : []), N = I(() => {
      const n = c();
      if (n && d.value[n.id] && d.value[n.id].fields)
        return d.value[n.id].fields;
    }), A = (n) => {
      n === "zoomed" || n === "error" ? setTimeout(() => {
        v.value = n, f.value?._tippy.show(), setTimeout(() => {
          f.value?._tippy.hide(), v.value = "none";
        }, 3e3);
      }, 300) : v.value = n;
    }, U = () => {
      if (v.value !== "none")
        return;
      A("zooming");
      const n = c();
      if (n === void 0 || !n.isLoaded) {
        console.warn(
          `Could not find layer for uid ${t.uid} during zoom geometry lookup`
        ), A("error");
        return;
      }
      if (!t.data.loaded) {
        console.warn(
          "Details zoomToFeature call on item that is still loading. Should be impossible, alert the devs."
        ), A("error");
        return;
      }
      const h = t.data.data[n.oidField], H = () => {
        const O = { getGeom: !0 };
        n.getGraphic(h, O).then((B) => {
          B.geometry.invalid() ? (console.error(`Could not find graphic for objectid ${h}`), A("error")) : (s.geo.map.zoomMapTo(B.geometry), A("zoomed"), s.updateAlert(s.$i18n.t("details.item.alert.zoom")));
        }).catch(() => {
          A("error");
        });
      };
      n.layerType === Ie.FEATURE && n.geomType !== Te.POINT ? n.getGraphicExtent(h).then((O) => {
        s.geo.map.zoomMapTo(O), A("zoomed"), s.updateAlert(s.$i18n.t("details.item.alert.zoom"));
      }).catch(() => {
        H();
      }) : H();
    };
    return Y(() => {
      l.value.push(
        P(
          t,
          () => {
            b();
          },
          {
            deep: !1,
            immediate: !0
          }
        )
      );
    }), X(() => {
      l.value.forEach((n) => n());
    }), (n, h) => {
      const H = F("truncate"), O = F("tippy");
      return i(), o(Z, null, [
        _("div", lt, [
          m.value ? (i(), o("div", nt, [
            _("div", ot, [
              g.data.loaded && y.value ? (i(), o("span", {
                key: 0,
                class: "flex-none symbologyIcon",
                innerHTML: y.value
              }, null, 8, rt)) : (i(), o("div", ut, h[1] || (h[1] = [
                _("div", { class: "animate-spin spinner h-20 w-20" }, null, -1)
              ])))
            ]),
            g.data.loaded ? C((i(), o("span", {
              key: 0,
              class: "pl-3 text-left flex-grow itemName",
              content: E.value,
              innerHTML: M(E.value),
              tabindex: g.inList ? -1 : 0
            }, null, 8, dt)), [
              [H, {
                options: { placement: "right" }
              }]
            ]) : (i(), o("div", ct, z(L(u)("details.loading")), 1)),
            g.data.loaded ? (i(), o("span", mt, [
              $.value ? C((i(), o("button", {
                key: 0,
                type: "button",
                content: L(u)(
                  `details.item.zoom${v.value === "none" ? "" : `.${v.value}`}`
                ),
                "aria-label": L(u)(
                  `grid.cells.zoom${v.value === "none" ? "" : `.${v.value}`}`
                ),
                ref_key: "zoomButton",
                ref: f,
                onClick: h[0] || (h[0] = (B) => {
                  B.stopPropagation(), U();
                }),
                class: "text-gray-600 w-24 h-24 p-2 flex justify-center items-center"
              }, [
                v.value === "zooming" ? (i(), o("div", vt)) : v.value === "zoomed" ? (i(), o("svg", ft, h[2] || (h[2] = [
                  _("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    d: "M4.5 12.75l6 6 9-13.5"
                  }, null, -1)
                ]))) : v.value === "error" ? (i(), o("svg", ht, h[3] || (h[3] = [
                  _("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    d: "M6 18L18 6M6 6l12 12"
                  }, null, -1)
                ]))) : (i(), o("span", {
                  key: 3,
                  innerHTML: L(s).ui.getZoomIcon()
                }, null, 8, gt))
              ], 8, pt)), [
                [O, { placement: "bottom" }]
              ]) : D("", !0)
            ])) : D("", !0)
          ])) : D("", !0)
        ]),
        g.open ? (i(), q($e(x.value), {
          key: 0,
          identifyData: g.data,
          fields: S.value,
          fixtureFields: N.value,
          class: "p-8"
        }, null, 8, ["identifyData", "fields", "fixtureFields"])) : D("", !0)
      ], 64);
    };
  }
}), yt = {
  key: 0,
  class: "layerName w-full flex-grow p-5 pb-8 font-bold truncate",
  tabIndex: "0"
}, bt = {
  key: 1,
  class: "p-8 mb-8 bg-gray-100 flex justify-between"
}, _t = { for: "toggle" }, xt = {
  key: 2,
  class: "flex flex-col justify-between p-8 mb-8 bg-gray-100"
}, kt = { class: "flex" }, wt = ["aria-label"], Lt = ["content", "aria-label", "disabled"], $t = { class: "px-3 text-center flex-grow" }, It = ["content", "aria-label", "disabled"], Tt = { key: 3 }, St = { key: 0 }, Ht = ["content"], At = ["onClick"], zt = {
  key: 1,
  class: "text-center"
}, Dt = {
  key: 4,
  class: "p-5"
}, Et = /* @__PURE__ */ j({
  __name: "result-list",
  props: {
    uid: { type: String, required: !0 },
    results: { type: Object, required: !0 }
  },
  setup(g) {
    const e = w(), t = () => {
      e.value._tippy.hide();
    }, s = (p) => {
      p.key === "Tab" && e.value?.matches(":focus") && e.value._tippy.show();
    }, l = ee("iApi"), r = R(), u = oe(), y = g, { t: v } = V(), f = w(!1), c = w(l.fixture.get("details")), d = w(!0), a = w(!1), m = w(0), $ = w(20), E = w([]), M = w([]), b = I(() => r.activeGreedy), T = I(
      () => r.properties
    ), x = I(() => m.value + $.value), S = () => u.getLayerByUid(y.uid), N = I(() => y.results.find((k) => k.uid === y.uid)?.loaded ?? !1), A = I(() => y.results.find((k) => k.uid === y.uid)?.requestTime), U = I(
      () => f.value && (!a.value && h().length > 1 || a.value && h().length > $.value)
    ), n = I(() => {
      const p = S();
      return p && T.value[p.id] && T.value[p.id].name ? T.value[p.id].name : p?.name ?? "";
    }), h = () => {
      const p = y.results.find((k) => k.uid === y.uid);
      return p ? p.items : [];
    }, H = I(() => h()[m.value]), O = I(() => {
      if (c.value.hasHilighter()) {
        const p = S();
        if (p)
          return p.mapLayer && p.supportsFeatures;
      }
      return !1;
    }), B = (p) => {
      d.value = p, r.hilightToggle = p, K();
    }, fe = () => {
      const p = S();
      m.value = m.value ?? 0, d.value = r.hilightToggle ?? d.value, a.value = !1, f.value = !!p, K();
    }, re = (p) => {
      a.value ? m.value += p * $.value : m.value += p;
    }, K = () => {
      const p = h();
      if (d.value && N && p.length > 0 && O.value)
        if (a.value)
          c.value.hilightDetailsItems(
            p.slice(m.value, x.value),
            y.uid
          );
        else {
          const k = p[m.value];
          k && c.value.hilightDetailsItems([k], y.uid);
        }
      else
        c.value.removeDetailsHilight();
    }, he = () => {
      a.value = !0, m.value = Math.floor(m.value / $.value) * $.value, K();
    }, ge = () => {
      c.value.removeDetailsHilight();
    }, ye = () => {
      c.value.removeDetailsHilight();
    }, be = (p) => {
      m.value = p, a.value = !1;
    };
    return le(() => {
      E.value.push(
        l.event.on(
          Q.LAYER_REMOVE,
          (p) => {
            const k = l.panel.get("details-panel");
            y.uid === p.uid && k && k.close();
          }
        )
      ), E.value.push(
        l.event.on(Q.PANEL_CLOSED, (p) => {
          p.id == "details-panel" && ge();
        })
      ), E.value.push(
        l.event.on(Q.PANEL_MINIMIZED, (p) => {
          p.id == "details-panel" && ye();
        })
      ), E.value.push(
        l.event.on(Q.MAP_BASEMAPCHANGE, () => {
          d.value && K();
        })
      ), e.value?.addEventListener("blur", t), e.value?.addEventListener("keyup", s);
    }), Y(() => {
      M.value.push(
        P(
          () => h(),
          () => {
            fe(), H.value === void 0 && c.value.removeDetailsHilight();
          },
          {
            deep: !1,
            immediate: !0
          }
        )
      ), M.value.push(
        P(A, () => {
          m.value = 0;
        })
      ), M.value.push(
        P(
          () => y.uid,
          () => {
            m.value = 0;
          }
        )
      );
    }), X(() => {
      M.value.forEach((p) => p()), E.value.forEach((p) => l.event.off(p)), e.value?.removeEventListener("blur", t), e.value?.removeEventListener("keyup", s);
    }), (p, k) => {
      const _e = F("truncate"), te = F("tippy"), xe = F("focus-item"), ke = F("focus-list");
      return N.value && b.value === 0 ? (i(), o("div", {
        key: 0,
        class: "detailsContent relative flex flex-col flex-grow pl-5",
        style: me(g.results.length > 1 ? { "margin-left": "42px" } : "")
      }, [
        f.value ? C((i(), o("h1", yt, [
          ae(z(n.value), 1)
        ])), [
          [_e, { options: { placement: "top-start" } }]
        ]) : D("", !0),
        O.value ? (i(), o("div", bt, [
          _("label", _t, z(L(v)("details.togglehilight.title")), 1),
          ie(De, {
            config: {
              value: d.value,
              disabled: !1
            },
            onToggled: B
          }, null, 8, ["config"])
        ])) : D("", !0),
        U.value ? (i(), o("div", xt, [
          _("div", kt, [
            a.value ? D("", !0) : (i(), o("button", {
              key: 0,
              type: "button",
              class: "px-8 font-bold hover:bg-gray-200 focus:bg-gray-200",
              "aria-label": L(v)("details.item.see.list"),
              onClick: k[0] || (k[0] = (J) => he())
            }, z(L(v)("details.item.see.list")), 9, wt)),
            _("div", {
              class: G(["flex ml-auto bg-gray-200 py-8 items-center", { "w-full": a.value }])
            }, [
              C((i(), o("button", {
                type: "button",
                content: L(v)(
                  a.value ? "details.items.previous" : "details.item.previous.item"
                ),
                onClick: k[1] || (k[1] = (J) => re(-1)),
                class: "mx-2 opacity-60 hover:opacity-90 disabled:opacity-30 disabled:cursor-default",
                "aria-label": L(v)(
                  a.value ? "details.items.previous" : "details.item.previous.item"
                ),
                disabled: m.value === 0
              }, k[3] || (k[3] = [
                _("svg", {
                  height: "24",
                  width: "24",
                  viewBox: "0 0 23 23"
                }, [
                  _("g", null, [
                    _("path", { d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z" })
                  ])
                ], -1)
              ]), 8, Lt)), [
                [te, { placement: "top" }]
              ]),
              _("span", $t, z(a.value ? L(v)("details.items.range", [
                m.value + 1,
                Math.min(
                  x.value,
                  h().length
                ),
                h().length
              ]) : L(v)("details.item.count", [
                m.value + 1,
                h().length
              ])), 1),
              C((i(), o("button", {
                type: "button",
                content: L(v)(
                  a.value ? "details.items.next" : "details.item.next.item"
                ),
                onClick: k[2] || (k[2] = (J) => re(1)),
                class: "mx-2 rotate-180 opacity-60 hover:opacity-90 disabled:opacity-30 disabled:cursor-default",
                "aria-label": L(v)(
                  a.value ? "details.items.next" : "details.item.next.item"
                ),
                disabled: !a.value && m.value === h().length - 1 || a.value && x.value >= h().length
              }, k[4] || (k[4] = [
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
              ])
            ], 2)
          ])
        ])) : D("", !0),
        f.value ? (i(), o("div", Tt, [
          h().length > 0 ? (i(), o("div", St, [
            a.value ? C((i(), o("div", {
              key: 0,
              class: "flex flex-col",
              content: L(v)("details.layers.results.list.tooltip"),
              ref_key: "el",
              ref: e
            }, [
              (i(!0), o(Z, null, W(h().slice(
                m.value,
                x.value
              ), (J, ue) => C((i(), o("button", {
                class: "flex flex-grow truncate default-focus-style hover:bg-gray-200",
                key: ue,
                onClick: (jt) => be(m.value + ue)
              }, [
                ie(ce, {
                  data: J,
                  uid: g.uid,
                  open: !1,
                  "in-list": !0
                }, null, 8, ["data", "uid"])
              ], 8, At)), [
                [xe, "show-truncate"]
              ])), 128))
            ], 8, Ht)), [
              [ke],
              [te, {
                trigger: "manual",
                placement: "top-start"
              }]
            ]) : (i(), q(ce, {
              key: 1,
              data: H.value,
              uid: g.uid,
              open: !0,
              "in-list": !1
            }, null, 8, ["data", "uid"]))
          ])) : (i(), o("div", zt, z(L(v)("details.layers.results.empty.currentLayer")), 1))
        ])) : (i(), o("div", Dt, z(L(v)("details.item.no.data")), 1))
      ], 4)) : (i(), o("div", {
        key: 1,
        class: G(["flex justify-center py-10 items-center", g.results.length > 1 ? "ml-42" : ""])
      }, [
        k[5] || (k[5] = _("span", { class: "animate-spin spinner h-20 w-20 px-5 mr-8" }, null, -1)),
        ae(" " + z(L(v)("details.item.loading")), 1)
      ], 2));
    };
  }
}), Mt = /* @__PURE__ */ ne(Et, [["__scopeId", "data-v-0cb6a8dd"]]), Ct = { class: "relative h-full" }, Ft = { class: "detailsContentSection overflow-y-auto h-full" }, Nt = /* @__PURE__ */ j({
  __name: "details-screen",
  props: {
    panel: {
      type: Object
    }
  },
  setup(g) {
    const { t: e } = V(), t = ee("iApi"), s = R(), l = w([]), r = w([]), u = w([]), y = w(!1), v = w(""), f = w(!1), c = I(() => s.activeGreedy), d = I(() => s.payload), a = I(
      () => s.properties
    ), m = (b) => {
      v.value = b, f.value = !0;
    }, $ = (b) => {
      if (b === void 0)
        return;
      const T = b.length === 0 ? 0 : b[0].requestTime;
      s.activeGreedy = T, s.slowLoadingFlag = !1, u.value = b, E(b);
    }, E = (b) => {
      if (f.value) {
        const T = u.value.findIndex(
          (x) => x.uid === v.value
        );
        if (T !== -1) {
          const x = u.value[T];
          x.loading.then(() => {
            x.requestTime === c.value && (x.items.length > 0 ? (s.activeGreedy = 0, f.value = !1, y.value = !1) : M(b));
          });
        } else
          M(b);
      } else
        M(b);
      setTimeout(() => {
        c.value !== 0 && b[0].requestTime === c.value && (s.slowLoadingFlag = !0);
      }, 500);
    }, M = (b) => {
      const T = b.map(
        (S) => S.loading.then(
          () => S.items.length > 0 ? Promise.resolve(S) : Promise.reject()
        )
      ), x = b.length === 0 ? 0 : b[0].requestTime;
      Promise.any(T).then((S) => {
        if (S.requestTime !== c.value)
          return;
        const N = u.value.find(
          (A) => A.uid === S.uid
        );
        s.activeGreedy = 0, N !== void 0 && (v.value = N.uid, y.value = !1);
      }).catch(() => {
        x === c.value && (s.activeGreedy = 0, y.value = !0);
      });
    };
    return Y(() => {
      r.value.push(
        P(
          d,
          (b) => {
            $(b);
          },
          {
            deep: !1,
            // was true when our array had undefineds. now that objects arrive intact, we dont want this triggering when innards update
            immediate: !0
          }
        )
      ), r.value.push(
        P(c, (b) => {
          b === 0 && (s.slowLoadingFlag = !1);
        })
      );
    }), X(() => {
      l.value.forEach((b) => t.event.off(b)), r.value.forEach((b) => b());
    }), (b, T) => {
      const x = Se("panel-screen");
      return i(), q(x, { panel: g.panel }, {
        header: de(() => [
          ae(z(
            // Show different titles based on what requested the panel
            L(s).origin === "toggleEvent" ? L(e)("details.layers.title.gridOrigin") : L(e)("details.layers.title.identifyOrigin")
          ), 1)
        ]),
        content: de(() => [
          _("div", Ct, [
            u.value.length > 1 ? (i(), q(Ye, {
              key: 0,
              results: u.value,
              detailsProperties: a.value,
              selected: v.value,
              onSelectionChanged: m
            }, null, 8, ["results", "detailsProperties", "selected"])) : D("", !0),
            _("div", Ft, [
              y.value ? (i(), o("div", {
                key: 1,
                class: G([
                  "text-center",
                  { "ml-42": u.value.length > 1 }
                ])
              }, z(u.value.length >= 1 ? L(e)("details.layers.results.empty") : L(e)("details.layers.results.empty.noLayers")), 3)) : (i(), q(Mt, {
                key: 0,
                uid: v.value,
                results: u.value
              }, null, 8, ["uid", "results"]))
            ])
          ])
        ]),
        _: 1
      }, 8, ["panel"]);
    };
  }
}), Ot = /* @__PURE__ */ ne(Nt, [["__scopeId", "data-v-251e74c1"]]), Bt = { en: { "details.layers.title.identifyOrigin": "Identify Details", "details.layers.title.gridOrigin": "Details", "details.layers.found": "Found {numResults} results in {numLayers} layers", "details.layers.loading": "The layer is loading...", "details.layers.error": "Error", "details.layers.results.empty": "No results found for any layer.", "details.layers.results.empty.currentLayer": "No results found for the selected layer.", "details.layers.results.empty.noLayers": "No layers for identification.", "details.layers.results.list.tooltip": "Use the arrow keys to navigate the items", "details.result.default.name": "Identify Item {0}", "details.loading": "Loading...", "details.items.title": "Details", "details.items.range": "{0} - {1} of {2}", "details.items.next": "Next page", "details.items.previous": "Previous page", "details.items.page": "Items per page", "details.item.see.list": "See List", "details.item.zoom": "Zoom to feature", "details.item.zoom.zooming": "Zooming...", "details.item.zoom.error": "Zoom failed", "details.item.zoom.zoomed": "Zoomed", "details.item.previous.item": "Previous item", "details.item.next.item": "Next item", "details.item.count": "{0} of {1}", "details.item.loading": "Loading results...", "details.item.no.data": "No data to show because the layer has been removed", "details.item.alert.zoom": "Zoomed into feature", "details.item.alert.show.item": "Showing result {itemName}", "details.item.alert.show.list": "Showing all results for {layerName}", "details.item.alert.defaultAltText": "Image associated with {alias} field", "details.togglehilight.title": "Toggle Highlight", "details.item.open": "Expand", "details.item.collapse": "Collapse" }, fr: { "details.layers.title.identifyOrigin": "Identifier les détails", "details.layers.title.gridOrigin": "Détails", "details.layers.found": "{numResults} résultats trouvés dans {numLayers} couches", "details.layers.loading": "La couche est en cours de chargement...", "details.layers.error": "Erreur", "details.layers.results.empty": "Aucun résultat trouvé pour aucune couche.", "details.layers.results.empty.currentLayer": "Aucun résultat trouvé pour la couche sélectionnée.", "details.layers.results.empty.noLayers": "Pas de couches pour l'identification.", "details.layers.results.list.tooltip": "Utilisez les touches fléchées pour naviguer entre les éléments", "details.result.default.name": "Désigner l'élément {0}", "details.loading": "Chargement en cours...", "details.items.title": "Détails", "details.items.range": "{0} - {1} de {2}", "details.items.next": "Page suivante", "details.items.previous": "Page précédente", "details.items.page": "éléments par page", "details.item.see.list": "Voir la liste", "details.item.zoom": "Zoom à l'élément", "details.item.zoom.zooming": "Zoom en cours...", "details.item.zoom.error": "Échec du zoom", "details.item.zoom.zoomed": "Zoom terminé", "details.item.previous.item": "Élément précédent", "details.item.next.item": "Élément suivant", "details.item.count": "{0} de {1}", "details.item.loading": "Chargement des résultats...", "details.item.no.data": "Aucune donnée à afficher", "details.item.alert.zoom": "Zoom sur la caractéristique", "details.item.alert.show.item": "Affichage du résultat {itemName}", "details.item.alert.show.list": "Affichage de tous les résultats pour {layerName}", "details.item.alert.defaultAltText": "Image associée au champ {alias}", "details.togglehilight.title": "Basculer vers l'élément principal", "details.item.open": "Développer", "details.item.collapse": "Réduire" } };
class Rt extends Me {
  async added() {
    this.$iApi.panel.register(
      {
        "details-panel": {
          screens: {
            "details-screen": He(Ot)
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
      { i18n: { messages: Bt } }
    ), this._parseConfig(this.config);
    const e = this.$vApp.$watch(
      () => this.config,
      (t) => this._parseConfig(t)
    );
    this.removed = () => {
      e(), this.$iApi.panel.remove("details-panel"), this.$iApi.fixture.exists("appbar") && Ae(this.$vApp.$pinia).removeButton("details-panel"), R(this.$vApp.$pinia).$reset();
    };
  }
}
export {
  Rt as default
};
//# sourceMappingURL=index-CXxmmHia.js.map
