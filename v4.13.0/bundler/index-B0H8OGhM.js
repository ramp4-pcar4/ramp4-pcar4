import { defineComponent as pe, inject as de, useTemplateRef as ue, reactive as me, watch as te, onMounted as ye, onUnmounted as we, createElementBlock as ge, openBlock as he, markRaw as fe } from "vue";
import { u as Y } from "./draw-store-BEUmwV44.js";
import "tiny-emitter";
import { G as re, L as ve, F as be } from "./main-E8ivnWBI.js";
import "@arcgis/core/Color";
import "@arcgis/core/config";
import "@arcgis/core/core/reactiveUtils.js";
import "@arcgis/core/geometry/Extent";
import "@arcgis/core/geometry/Multipoint";
import W from "@arcgis/core/geometry/Point";
import E from "@arcgis/core/geometry/Polygon";
import M from "@arcgis/core/geometry/Polyline";
import "@arcgis/core/geometry/SpatialReference";
import "@arcgis/core/geometry/support/jsonUtils";
import L from "@arcgis/core/Graphic";
import "@arcgis/core/request";
import "@arcgis/core/symbols/PictureMarkerSymbol";
import O from "@arcgis/core/symbols/SimpleFillSymbol";
import ie from "@arcgis/core/symbols/SimpleLineSymbol";
import Re from "@arcgis/core/symbols/SimpleMarkerSymbol";
import "@arcgis/core/symbols/support/jsonUtils";
import "@arcgis/map-components/components/arcgis-swipe";
import "deepmerge";
import "@terraformer/spatial";
import "proj4";
import "throttle-debounce";
import "pinia";
import { useI18n as De } from "vue-i18n";
import "screenfull";
import "lodash.clonedeep";
import "vue-tippy";
import "linkify-html";
import "@popperjs/core";
import "@terraformer/arcgis";
import "csv2geojson";
import "redaxios";
import "await-to-js";
import "svg.js";
import "@arcgis/map-components/components/arcgis-sketch";
const Ae = (I, r, A) => {
  const i = I[r];
  return i ? typeof i == "function" ? i() : Promise.resolve(i) : new Promise((t, n) => {
    (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(n.bind(null, /* @__PURE__ */ new Error("Unknown variable dynamic import: " + r + (r.split("/").length !== A ? ". Note that variables only represent file names one level deep." : ""))));
  });
}, F = "RampDrawGraphicsLayer", ke = /* @__PURE__ */ pe({
  __name: "draw",
  setup(I) {
    const { t: r } = De(), A = (e) => r(e ? `draw.${e}` : "draw.unknown"), i = de("iApi"), t = Y();
    let n = null;
    const S = ue("sketchEl");
    let j = null, u = null, d = null, V = null, x = !1, v = null, y = [];
    const J = me([]), P = (e) => {
      if (V && (u?.remove(V), V = null), !e) return;
      let o;
      switch (e.geometry?.type) {
        case "point":
        case "multipoint":
          o = new Re({
            color: [255, 255, 0, 0.8],
            size: 16,
            outline: {
              color: [255, 165, 0, 1],
              width: 3
            }
          });
          break;
        case "polyline":
          o = new ie({
            color: [255, 255, 0, 0.8],
            width: 6
          });
          break;
        default:
          o = new O({
            color: [255, 255, 0, 0.3],
            outline: {
              color: [255, 165, 0, 1],
              width: 3
            }
          });
      }
      V = new L({
        geometry: e.geometry,
        // @ts-expect-error esri type mismatch
        symbol: o
      }), u?.add(V);
    };
    te(
      () => t.selectedGraphicId,
      (e, o) => {
        if (!(!n || !u)) {
          if (!e)
            n.cancel(), P();
          else if (e !== o) {
            const c = u.graphics.toArray().find((p) => p.attributes && p.attributes.id === e);
            c && (n.triggerUpdate([c]), P(c));
          }
        }
      }
    );
    const ne = async () => {
      if (!u || !n || t.activeTool !== "edit") return;
      await i.geo.map.viewPromise;
      const e = i.geo.map.esriView, o = { x: e.width / 2, y: e.height / 2 }, a = {
        x: o.x,
        y: o.y,
        width: 20,
        height: 20
      }, p = (await e.hitTest(a)).results.filter((m) => !("graphic" in m) || m.graphic.layer !== u ? !1 : !!m.graphic.attributes?.id);
      p.length > 0 ? (d = p[0].graphic, n.triggerUpdate([d]), d.attributes?.id && t.selectGraphic(d.attributes.id), i.updateAlert(
        r("draw.graphic.selected", {
          type: A(d.attributes?.type)
        })
      )) : (n.cancel(), d = null, t.clearSelection());
    }, ae = async () => {
      if (!n || !t.activeTool) return;
      await i.geo.map.viewPromise;
      const e = i.geo.map.esriView, o = { x: Math.floor(e.width / 2), y: Math.floor(e.height / 2) }, a = e.toMap(o), c = e.extent, p = c.width, m = c.height, T = Math.min(p, m) / 10;
      let b;
      switch (t.activeTool) {
        case "point":
          b = new L({
            geometry: new W({
              x: a.x,
              y: a.y,
              spatialReference: e.spatialReference
            }),
            symbol: n.pointSymbol
          });
          break;
        case "polyline":
          b = new L({
            geometry: new M({
              paths: [
                [
                  [a.x - T / 2, a.y],
                  [a.x + T / 2, a.y]
                ]
              ],
              spatialReference: e.spatialReference
            }),
            symbol: n.polylineSymbol
          });
          break;
        case "polygon":
        case "rectangle":
          const w = T / 2;
          b = new L({
            geometry: new E({
              rings: [
                [
                  [a.x - w, a.y - w],
                  [a.x + w, a.y - w],
                  [a.x + w, a.y + w],
                  [a.x - w, a.y + w],
                  [a.x - w, a.y - w]
                ]
              ],
              spatialReference: e.spatialReference
            }),
            symbol: n.polygonSymbol || new O({
              color: [0, 255, 0, 0.3],
              outline: {
                color: [0, 255, 0, 1],
                width: 1
              }
            })
          });
          break;
        case "circle":
          const s = T / 2, l = 36, _ = [];
          for (let z = 0; z <= l; z++) {
            const $ = z / l * 2 * Math.PI, U = a.x + s * Math.cos($), g = a.y + s * Math.sin($);
            _.push([U, g]);
          }
          b = new L({
            geometry: new E({
              rings: [_],
              spatialReference: e.spatialReference
            }),
            symbol: n.polygonSymbol || new O({
              color: [255, 0, 255, 0.3],
              outline: {
                color: [255, 0, 255, 1],
                width: 1
              }
            })
          });
          break;
        default:
          console.warn("Unknown tool type:", t.activeTool);
          return;
      }
      if (b) {
        const w = `graphic-${Date.now()}`;
        b.attributes = { id: w, type: t.activeTool }, u?.add(b), t.addGraphic({
          id: w,
          type: t.activeTool,
          geometry: b.geometry,
          attributes: b.attributes
        }), t.activeTool !== "point" && (t.clearSelection(), t.setActiveTool(null), n.cancel()), i.updateAlert(
          r("draw.graphic.created", {
            type: A(t.activeTool)
          })
        );
      }
    }, Q = (e) => {
      const o = i.geo.map.esriView?.container;
      if (!(!document.activeElement || !o?.contains(document.activeElement)))
        switch (e.key) {
          case "Enter":
            if (e.preventDefault(), t.activeTool && t.activeTool !== "edit")
              if ((t.activeTool === "polyline" || t.activeTool === "polygon") && (x || y.length === 0)) {
                const c = i.geo.map.esriView, p = { x: Math.floor(c.width / 2), y: Math.floor(c.height / 2) }, m = c.toMap(p);
                x ? (y.push([m.x, m.y]), t.activeTool === "polyline" ? v.geometry = new M({
                  paths: [y],
                  spatialReference: c.spatialReference
                }) : v.geometry = new E({
                  rings: [y],
                  spatialReference: c.spatialReference
                }), i.updateAlert(
                  r("draw.multiPoint.pointAdded", {
                    type: A(t.activeTool),
                    count: y.length
                  })
                )) : (x = !0, y = [[m.x, m.y]], t.activeTool === "polyline" ? v = new L({
                  geometry: new M({
                    paths: [y],
                    spatialReference: c.spatialReference
                  }),
                  symbol: n?.polylineSymbol || new ie({ color: [0, 0, 255, 1], width: 2 })
                }) : v = new L({
                  geometry: new E({
                    rings: [y],
                    spatialReference: c.spatialReference
                  }),
                  symbol: n?.polygonSymbol || new O({
                    color: [0, 255, 0, 0.3],
                    outline: { color: [0, 255, 0, 1], width: 1 }
                  })
                }), v.attributes = { id: `temp-graphic-${Date.now()}`, type: t.activeTool }, u?.add(v), i.updateAlert(
                  r("draw.multiPoint.started", {
                    type: A(t.activeTool),
                    count: 1
                  })
                ));
              } else
                ae();
            else
              ne();
            break;
          case "Delete":
          case "Backspace":
            const a = i.geo.map.esriView;
            x && y.length > 1 ? (e.preventDefault(), y.pop(), t.activeTool === "polyline" ? v.geometry = new M({
              paths: [y],
              spatialReference: a.spatialReference
            }) : v.geometry = new E({
              rings: [y],
              spatialReference: a.spatialReference
            }), v.set("geometry", v?.geometry), i.updateAlert(
              r("draw.multiPoint.pointRemoved", {
                type: A(t.activeTool ?? void 0),
                count: y.length
              })
            )) : x && y.length === 1 ? (e.preventDefault(), v && u?.remove(v), v = null, y = [], x = !1, i.updateAlert(r("draw.multiPoint.canceled"))) : d && (e.preventDefault(), n?.delete(), u?.remove(d), typeof t.removeGraphic == "function" && t.removeGraphic(d.attributes.id), d = null, P(void 0), i.updateAlert(r("draw.graphic.deleted")));
            break;
          case "Escape":
            t.setActiveTool(null), n?.cancel(), d = null, P(void 0), t.clearSelection(), i.updateAlert(r("draw.tool.canceled"));
            break;
        }
    }, X = (e) => {
      const o = i.geo.map.esriView.container;
      if (!document.activeElement || !o?.contains(document.activeElement) || !d || !["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.key)) return;
      e.preventDefault(), e.stopPropagation();
      const c = 10, p = e.shiftKey, m = e.altKey, T = i.geo.map.esriView;
      let b = 0, w = 0;
      e.key === "ArrowLeft" && (b = -c), e.key === "ArrowRight" && (b = c), e.key === "ArrowUp" && (w = -c), e.key === "ArrowDown" && (w = c);
      const s = d.geometry;
      let l;
      if (s.type === "point")
        l = { x: s.x, y: s.y };
      else {
        const f = s.extent;
        l = { x: (f.xmin + f.xmax) / 2, y: (f.ymin + f.ymax) / 2 };
      }
      const _ = T.toScreen(
        new W({
          x: l.x,
          y: l.y,
          spatialReference: T.spatialReference
        })
      );
      _.x += b, _.y += w;
      const z = T.toMap(_), $ = z.x - l.x, U = z.y - l.y;
      let g;
      if (s.type === "point")
        !p && !m ? g = new W({
          x: s.x + $,
          y: s.y + U,
          spatialReference: s.spatialReference
        }) : p ? (g = s.clone(), i.updateAlert(r("draw.point.resize.unsupported"))) : m && (g = s.clone(), i.updateAlert(r("draw.point.rotate.unsupported")));
      else if (s.type === "polyline") {
        if (!p && !m) {
          const h = s.paths.map((R) => R.map(([D, k]) => [D + $, k + U]));
          g = new M({
            paths: h,
            spatialReference: s.spatialReference
          });
        } else if (p) {
          const f = s, h = e.key === "ArrowUp" || e.key === "ArrowRight" ? 1.05 : 0.95, R = f.paths.map(
            (D) => D.map(([k, G]) => [l.x + (k - l.x) * h, l.y + (G - l.y) * h])
          );
          g = new M({
            paths: R,
            spatialReference: s.spatialReference
          });
        } else if (m) {
          const f = s, h = e.key === "ArrowLeft" ? -0.05 : e.key === "ArrowRight" ? 0.05 : 0;
          if (h !== 0) {
            const R = Math.cos(h), D = Math.sin(h), k = f.paths.map(
              (G) => G.map(([H, K]) => {
                const C = H - l.x, q = K - l.y, N = C * R - q * D, B = C * D + q * R;
                return [l.x + N, l.y + B];
              })
            );
            g = new M({
              paths: k,
              spatialReference: s.spatialReference
            });
          } else
            g = s.clone();
        }
      } else if (s.type === "polygon") {
        if (!p && !m) {
          const h = s.rings.map((R) => R.map(([D, k]) => [D + $, k + U]));
          g = new E({
            rings: h,
            spatialReference: s.spatialReference
          });
        } else if (p) {
          const f = s, h = e.key === "ArrowUp" || e.key === "ArrowRight" ? 1.05 : 0.95, R = f.rings.map(
            (D) => D.map(([k, G]) => [l.x + (k - l.x) * h, l.y + (G - l.y) * h])
          );
          g = new E({
            rings: R,
            spatialReference: s.spatialReference
          });
        } else if (m) {
          const f = s, h = e.key === "ArrowLeft" ? -0.05 : e.key === "ArrowRight" ? 0.05 : 0;
          if (h !== 0) {
            const R = Math.cos(h), D = Math.sin(h), k = f.rings.map(
              (G) => G.map(([H, K]) => {
                const C = H - l.x, q = K - l.y, N = C * R - q * D, B = C * D + q * R;
                return [l.x + N, l.y + B];
              })
            );
            g = new E({
              rings: k,
              spatialReference: s.spatialReference
            });
          } else
            g = s.clone();
        }
      }
      if (g) {
        d.geometry = g, d.set("geometry", g), P(d), d.attributes?.id && t.updateGraphicGeometry(d.attributes.id, g);
        const f = p ? "resized" : m ? "rotated" : "moved";
        i.updateAlert(r(`draw.graphic.${f}`));
      }
    }, se = async (e) => {
      const c = (await i.geo.map.esriView.hitTest(e)).results.find(
        (p) => "graphic" in p && p.graphic.layer === u && !!p.graphic.attributes?.id
      );
      c && t.activeTool === "edit" ? n?.triggerUpdate([c.graphic]) : (n?.cancel(), d = null, t.clearSelection(), P());
    }, le = async () => {
      await i.geo.map.viewPromise, i.geo.layer.getLayer(F) ? u = i.geo.layer.getLayer(F).esriLayer : (u = i.geo.layer.createLayer({
        id: F,
        layerType: ve.GRAPHIC,
        cosmetic: !0,
        system: !0,
        url: ""
      }), await i.geo.map.addLayer(u)), u?.esriLayer && (u = u.esriLayer), Object.assign(S.value, {
        view: i.geo.map.esriView,
        layer: u,
        availableCreateTools: ["point", "multipoint", "polyline", "polygon", "rectangle", "circle"],
        updateOnGraphicClick: !0,
        visibleElements: {
          createTools: { point: !0, polyline: !0, polygon: !0, rectangle: !0, circle: !0 },
          selectionTools: { enable: !0 },
          settingsMenu: !1
        },
        defaultUpdateOptions: { highlightOptions: { enabled: !1 } }
      }), i.geo.map.esriView.ui.add(S.value, "bottom-right"), S.value?.addEventListener("arcgisCreate", (e) => ee(e.detail)), S.value?.addEventListener("arcgisUpdate", (e) => ce(e.detail)), j = {
        remove: () => S.value?.removeEventListener("arcgisCreate", (e) => ee(e.detail))
      }, n = S.value, i.geo.map.esriView.on("click", se), document.addEventListener("keydown", Q), document.addEventListener("keydown", X, { capture: !0 });
    }, Z = () => {
      n && (i.geo.map.esriView && i.geo.map.esriView.ui.remove(n), j && j.remove(), n.destroy()), document.removeEventListener("keydown", Q), document.removeEventListener("keydown", X, { capture: !0 }), x = !1, v = null, y = [], n = null, u = null;
    }, ee = (e) => {
      if (e.state === "complete") {
        const o = e.graphic, a = `graphic-${Date.now()}`;
        o.attributes = o.attributes || {}, o.attributes.id = a, t.addGraphic({
          id: a,
          type: e.tool,
          geometry: o.geometry,
          attributes: o.attributes
        }), e.tool !== "point" && t.setActiveTool(null);
      }
    }, ce = (e) => {
      const o = e.graphics[0];
      if (o)
        if (e.state === "start") {
          if (t.activeTool !== "edit") {
            n.cancel();
            return;
          }
          d = o, o.attributes?.id && (t.selectGraphic(o.attributes.id), i.updateAlert(
            r("draw.graphic.selected", {
              type: A(o.attributes?.type)
            })
          ));
        } else e.state === "active" ? P(o) : e.state === "complete" && o.attributes?.id && (t.updateGraphicGeometry(o.attributes.id, o.geometry), i.updateAlert(r("draw.graphic.updated")));
    };
    return ye(() => {
      le(), J.push(
        i.event.on(re.MAP_DESTROYED, () => {
          Z();
        })
      );
    }), te(
      () => t.activeTool,
      (e) => {
        n.cancel(), P(), v = null, y = [], x = !1, e && e != "edit" && n.create(e);
      }
    ), we(() => {
      Z(), J.forEach((e) => i.event.off(e));
    }), (e, o) => (he(), ge("arcgis-sketch", {
      ref_key: "sketchEl",
      ref: S,
      style: { display: "none" }
    }, null, 512));
  }
}), oe = [
  { type: "point" },
  { type: "polyline" },
  { type: "polygon" },
  { type: "circle" },
  { type: "rectangle" }
];
class xe extends be {
  store;
  constructor(r, A) {
    super(r, A), this.store = Y(this.$vApp.$pinia);
  }
  /**
   * Parses the draw fixture configuration and sets up the draw store.
   * @param drawConfig The configuration object for the draw fixture.
   */
  _parseConfig(r) {
    if (!r) {
      this.store.setSupportedTypes(oe);
      return;
    }
    if (r.types !== void 0) {
      const i = (r.types === null ? [] : r.types).filter((t) => t.enabled !== !1);
      this.store.setSupportedTypes(i);
    } else
      this.store.setSupportedTypes(oe);
    r.defaultTool && this.store.setActiveTool(r.defaultTool);
  }
  /**
   * Returns the ID of the graphics layer used by the draw fixture.
   */
  get graphicsLayerId() {
    return F;
  }
}
const Pe = { en: { "draw.multiPoint.started": "{type} drawing started with 1 point", "draw.multiPoint.pointAdded": "Point added {count} points total", "draw.multiPoint.pointRemoved": "Point removed {count} points remaining", "draw.multiPoint.canceled": "Drawing canceled", "draw.multiPoint.completed": "{type} completed with {count} points", "draw.multiPoint.notEnoughPoints": "Not enough points for {type} minimum {min} required", "draw.graphic.created": "{type} created", "draw.graphic.selected": "{type} selected", "draw.graphic.deselected": "Graphic deselected", "draw.graphic.deleted": "Graphic deleted", "draw.graphic.updated": "Graphic updated", "draw.graphic.none": "No graphic found", "draw.tool.canceled": "Drawing tool canceled", "draw.point.resize.unsupported": "Resizing not supported for point graphics", "draw.point.rotate.unsupported": "Rotation not supported for point graphics", "draw.move.up": "Moved up", "draw.move.down": "Moved down", "draw.move.left": "Moved left", "draw.move.right": "Moved right", "draw.resize.increase": "Increased size", "draw.resize.decrease": "Decreased size", "draw.rotate.clockwise": "Rotated clockwise", "draw.rotate.counterclockwise": "Rotated counter-clockwise", "draw.button.point": "Draw point", "draw.button.polyline": "Draw line", "draw.button.polygon": "Draw polygon", "draw.button.rectangle": "Draw rectangle", "draw.button.circle": "Draw circle", "draw.point.tooltip": "Draw point", "draw.polyline.tooltip": "Draw polyline", "draw.polygon.tooltip": "Draw polygon", "draw.circle.tooltip": "Draw circle", "draw.rectangle.tooltip": "Draw rectangle", "draw.edit.tooltip": "Edit Mode", "draw.graphic.moved": "Graphic moved", "draw.shape": "shape", "draw.point": "point", "draw.multipoint": "multipoint", "draw.polyline": "polyline", "draw.polygon": "polygon", "draw.rectangle": "rectangle", "draw.circle": "circle", "draw.unknown": "unknown" }, fr: { "draw.multiPoint.started": "Dessin de {type} commencé avec 1 point", "draw.multiPoint.pointAdded": "Point ajouté", "draw.multiPoint.pointRemoved": "Point supprimé", "draw.multiPoint.canceled": "Dessin annulé", "draw.multiPoint.completed": "{type} terminé avec {count} points", "draw.multiPoint.notEnoughPoints": "Pas assez de points pour {type}", "draw.graphic.created": "{type} créé", "draw.graphic.selected": "{type} sélectionné", "draw.graphic.deselected": "Graphique désélectionné", "draw.graphic.deleted": "Graphique supprimé", "draw.graphic.updated": "Graphique mis à jour", "draw.graphic.none": "Aucun graphique trouvé", "draw.tool.canceled": "Outil de dessin annulé", "draw.point.resize.unsupported": "Le redimensionnement n'est pas pris en charge pour les points", "draw.point.rotate.unsupported": "La rotation n'est pas prise en charge pour les points", "draw.move.up": "Déplacé vers le haut", "draw.move.down": "Déplacé vers le bas", "draw.move.left": "Déplacé vers la gauche", "draw.move.right": "Déplacé vers la droite", "draw.resize.increase": "Taille augmentée", "draw.resize.decrease": "Taille réduite", "draw.rotate.clockwise": "Rotation dans le sens horaire", "draw.rotate.counterclockwise": "Rotation dans le sens antihoraire", "draw.button.point": "Dessiner un point", "draw.button.polyline": "Dessiner une ligne", "draw.button.polygon": "Dessiner un polygone", "draw.button.rectangle": "Dessiner un rectangle", "draw.button.circle": "Dessiner un cercle", "draw.point.tooltip": "Dessiner un point", "draw.polyline.tooltip": "Dessiner une polyligne", "draw.polygon.tooltip": "Dessiner un polygone", "draw.circle.tooltip": "Dessiner un cercle", "draw.rectangle.tooltip": "Dessiner un rectangle", "draw.edit.tooltip": "Mode édition", "draw.graphic.moved": "Graphique déplacé", "draw.shape": "forme", "draw.point": "indiquer", "draw.multipoint": "multipoint", "draw.polyline": "polyligne", "draw.polygon": "polygone", "draw.rectangle": "rectangle", "draw.circle": "cercle", "draw.unknown": "inconnue" } };
class ut extends xe {
  async init() {
    const { el: r } = this.mount(ke, {
      app: this.$element
    });
    this.$vApp.$el.getElementsByClassName("inner-shell")[0].appendChild(r.childNodes[0]), Object.entries(Pe).forEach((t) => this.$iApi.$i18n.mergeLocaleMessage(...t)), this._parseConfig(this.config), Y(this.$vApp.$pinia).supportedTypes.forEach((t) => {
      const n = `${t.type}-icon`;
      this.$iApi.component(n, fe(Ae(/* @__PURE__ */ Object.assign({ "./icons/circle-icon.vue": () => import("./circle-icon-p8gQwG7R.js"), "./icons/edit-icon.vue": () => import("./edit-icon-CPPd2nHf.js"), "./icons/point-icon.vue": () => import("./point-icon-WaEY1rH5.js"), "./icons/polygon-icon.vue": () => import("./polygon-icon-kze9RU3Z.js"), "./icons/polyline-icon.vue": () => import("./polyline-icon-Co6T38mc.js"), "./icons/rectangle-icon.vue": () => import("./rectangle-icon-qjkHLuTG.js") }), `./icons/${t.type}-icon.vue`, 3)));
    });
  }
  async added() {
    this.$iApi.event.on(re.MAP_CREATED, () => {
      this.init();
    });
  }
}
export {
  ut as default
};
