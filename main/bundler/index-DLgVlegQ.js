import { defineComponent as ge, inject as he, useTemplateRef as fe, reactive as ve, watch as ae, onMounted as be, onUnmounted as ke, createElementBlock as De, openBlock as Re, markRaw as Ae } from "vue";
import { u as Z } from "./draw-store-DYkFY3w9.js";
import "tiny-emitter";
import { G as le, L as Te, F as xe } from "./main-6dWPqJr6.js";
import "@arcgis/core/Color";
import "@arcgis/core/config";
import "@arcgis/core/core/reactiveUtils.js";
import "@arcgis/core/geometry/Extent";
import "@arcgis/core/geometry/Multipoint";
import X from "@arcgis/core/geometry/Point";
import M from "@arcgis/core/geometry/Polygon";
import $ from "@arcgis/core/geometry/Polyline";
import "@arcgis/core/geometry/SpatialReference";
import "@arcgis/core/geometry/support/jsonUtils";
import V from "@arcgis/core/Graphic";
import "@arcgis/core/request";
import "@arcgis/core/symbols/PictureMarkerSymbol";
import F from "@arcgis/core/symbols/SimpleFillSymbol";
import ne from "@arcgis/core/symbols/SimpleLineSymbol";
import Pe from "@arcgis/core/symbols/SimpleMarkerSymbol";
import "@arcgis/core/symbols/support/jsonUtils";
import "@arcgis/map-components/components/arcgis-swipe";
import "deepmerge";
import "@terraformer/spatial";
import "proj4";
import "throttle-debounce";
import "pinia";
import { useI18n as Ee } from "vue-i18n";
import "screenfull";
import "lodash-es";
import "vue-tippy";
import "linkify-html";
import "@popperjs/core";
import "@terraformer/arcgis";
import "csv2geojson";
import "redaxios";
import "await-to-js";
import "svg.js";
import "@arcgis/map-components/components/arcgis-sketch";
const Se = (H, a, T) => {
  const x = H[a];
  return x ? typeof x == "function" ? x() : Promise.resolve(x) : new Promise((b, o) => {
    (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(o.bind(null, /* @__PURE__ */ new Error("Unknown variable dynamic import: " + a + (a.split("/").length !== T ? ". Note that variables only represent file names one level deep." : ""))));
  });
}, j = "RampDrawGraphicsLayer", Ge = /* @__PURE__ */ ge({
  __name: "draw",
  setup(H) {
    const { t: a, availableLocales: T, locale: x } = Ee(), b = (e) => a(e ? `draw.${e}` : "draw.unknown"), o = he("iApi"), t = Z(), L = (e) => {
      const i = T.length ? T : [x.value], r = {};
      for (const l of i)
        r[l] = a(e, {}, { locale: l });
      return r;
    };
    let s = null;
    const _ = fe("sketchEl");
    let B = null, y = null, d = null, q = null, P = !1, v = null, w = [];
    const ee = ve([]);
    let E;
    async function ce() {
      const e = o.keyboardNav;
      if (!e) {
        console.warn("Keyboard navigation fixture is not available; draw shortcuts are disabled.");
        return;
      }
      E && (e.unregister(E), E = void 0), E = e.register("D", {
        name: L("draw.keyboard.namespace"),
        activeHandler: () => {
          t.setActiveTool("");
        },
        deactiveHandler: () => {
          t.setActiveTool(null);
        },
        keys: [
          {
            key: "P",
            description: L("draw.keyboard.key.point"),
            handler: () => {
              t.setActiveTool("point");
            }
          },
          {
            key: "L",
            description: L("draw.keyboard.key.polyline"),
            handler: () => {
              t.setActiveTool("polyline");
            }
          },
          {
            key: "G",
            description: L("draw.keyboard.key.polygon"),
            handler: () => {
              t.setActiveTool("polygon");
            }
          },
          {
            key: "C",
            description: L("draw.keyboard.key.circle"),
            handler: () => {
              t.setActiveTool("circle");
            }
          },
          {
            key: "R",
            description: L("draw.keyboard.key.rectangle"),
            handler: () => {
              t.setActiveTool("rectangle");
            }
          },
          {
            key: "E",
            description: L("draw.keyboard.key.edit"),
            handler: () => {
              t.setActiveTool("edit");
            }
          }
        ]
      });
    }
    const S = (e) => {
      if (q && (y?.remove(q), q = null), !e) return;
      let i;
      switch (e.geometry?.type) {
        case "point":
        case "multipoint":
          i = new Pe({
            color: [255, 255, 0, 0.8],
            size: 16,
            outline: {
              color: [255, 165, 0, 1],
              width: 3
            }
          });
          break;
        case "polyline":
          i = new ne({
            color: [255, 255, 0, 0.8],
            width: 6
          });
          break;
        default:
          i = new F({
            color: [255, 255, 0, 0.3],
            outline: {
              color: [255, 165, 0, 1],
              width: 3
            }
          });
      }
      q = new V({
        geometry: e.geometry,
        // @ts-expect-error esri type mismatch
        symbol: i
      }), y?.add(q);
    };
    ae(
      () => t.selectedGraphicId,
      (e, i) => {
        if (!(!s || !y)) {
          if (!e)
            s.cancel(), S();
          else if (e !== i) {
            const l = y.graphics.toArray().find((p) => p.attributes && p.attributes.id === e);
            l && (s.triggerUpdate([l]), S(l));
          }
        }
      }
    );
    const pe = async () => {
      if (!y || !s || t.activeTool !== "edit") return;
      await o.geo.map.viewPromise;
      const e = o.geo.map.esriView, i = { x: e.width / 2, y: e.height / 2 }, r = {
        x: i.x,
        y: i.y,
        width: 20,
        height: 20
      }, p = (await e.hitTest(r)).results.filter((u) => !("graphic" in u) || u.graphic.layer !== y ? !1 : !!u.graphic.attributes?.id);
      p.length > 0 ? (d = p[0].graphic, s.triggerUpdate([d]), d.attributes?.id && t.selectGraphic(d.attributes.id), o.updateAlert(
        a("draw.graphic.selected", {
          type: b(d.attributes?.type)
        })
      )) : (s.cancel(), d = null, t.clearSelection());
    }, de = async () => {
      if (!s || !t.activeTool) return;
      await o.geo.map.viewPromise;
      const e = o.geo.map.esriView, i = { x: Math.floor(e.width / 2), y: Math.floor(e.height / 2) }, r = e.toMap(i), l = e.extent, p = l.width, u = l.height, G = Math.min(p, u) / 10;
      let k;
      switch (t.activeTool) {
        case "point":
          k = new V({
            geometry: new X({
              x: r.x,
              y: r.y,
              spatialReference: e.spatialReference
            }),
            symbol: s.pointSymbol
          });
          break;
        case "polyline":
          k = new V({
            geometry: new $({
              paths: [
                [
                  [r.x - G / 2, r.y],
                  [r.x + G / 2, r.y]
                ]
              ],
              spatialReference: e.spatialReference
            }),
            symbol: s.polylineSymbol
          });
          break;
        case "polygon":
        case "rectangle":
          const m = G / 2;
          k = new V({
            geometry: new M({
              rings: [
                [
                  [r.x - m, r.y - m],
                  [r.x + m, r.y - m],
                  [r.x + m, r.y + m],
                  [r.x - m, r.y + m],
                  [r.x - m, r.y - m]
                ]
              ],
              spatialReference: e.spatialReference
            }),
            symbol: s.polygonSymbol || new F({
              color: [0, 255, 0, 0.3],
              outline: {
                color: [0, 255, 0, 1],
                width: 1
              }
            })
          });
          break;
        case "circle":
          const n = G / 2, c = 36, U = [];
          for (let N = 0; N <= c; N++) {
            const C = N / c * 2 * Math.PI, I = r.x + n * Math.cos(C), g = r.y + n * Math.sin(C);
            U.push([I, g]);
          }
          k = new V({
            geometry: new M({
              rings: [U],
              spatialReference: e.spatialReference
            }),
            symbol: s.polygonSymbol || new F({
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
      if (k) {
        const m = `graphic-${Date.now()}`;
        k.attributes = { id: m, type: t.activeTool }, y?.add(k), t.addGraphic({
          id: m,
          type: t.activeTool,
          geometry: k.geometry,
          attributes: k.attributes
        }), t.activeTool !== "point" && (t.clearSelection(), t.setActiveTool(""), o.keyboardNav?.reset(), s.cancel()), o.updateAlert(
          a("draw.graphic.created", {
            type: b(t.activeTool)
          })
        );
      }
    }, te = (e) => {
      const i = o.geo.map.esriView?.container;
      if (!(!document.activeElement || !i?.contains(document.activeElement)))
        switch (e.key) {
          case "Enter":
            if (e.preventDefault(), t.activeTool && t.activeTool !== "edit")
              if ((t.activeTool === "polyline" || t.activeTool === "polygon") && (P || w.length === 0)) {
                const l = o.geo.map.esriView, p = { x: Math.floor(l.width / 2), y: Math.floor(l.height / 2) }, u = l.toMap(p);
                P ? (w.push([u.x, u.y]), t.activeTool === "polyline" ? v.geometry = new $({
                  paths: [w],
                  spatialReference: l.spatialReference
                }) : v.geometry = new M({
                  rings: [w],
                  spatialReference: l.spatialReference
                }), o.updateAlert(
                  a("draw.multiPoint.pointAdded", {
                    type: b(t.activeTool),
                    count: w.length
                  })
                )) : (P = !0, w = [[u.x, u.y]], t.activeTool === "polyline" ? v = new V({
                  geometry: new $({
                    paths: [w],
                    spatialReference: l.spatialReference
                  }),
                  symbol: s?.polylineSymbol || new ne({ color: [0, 0, 255, 1], width: 2 })
                }) : v = new V({
                  geometry: new M({
                    rings: [w],
                    spatialReference: l.spatialReference
                  }),
                  symbol: s?.polygonSymbol || new F({
                    color: [0, 255, 0, 0.3],
                    outline: { color: [0, 255, 0, 1], width: 1 }
                  })
                }), v.attributes = { id: `temp-graphic-${Date.now()}`, type: t.activeTool }, y?.add(v), o.updateAlert(
                  a("draw.multiPoint.started", {
                    type: b(t.activeTool),
                    count: 1
                  })
                ));
              } else
                de();
            else
              pe();
            break;
          case "Delete":
          case "Backspace":
            const r = o.geo.map.esriView;
            P && w.length > 1 ? (e.preventDefault(), w.pop(), t.activeTool === "polyline" ? v.geometry = new $({
              paths: [w],
              spatialReference: r.spatialReference
            }) : v.geometry = new M({
              rings: [w],
              spatialReference: r.spatialReference
            }), v.set("geometry", v?.geometry), o.updateAlert(
              a("draw.multiPoint.pointRemoved", {
                type: b(t.activeTool ?? void 0),
                count: w.length
              })
            )) : P && w.length === 1 ? (e.preventDefault(), v && y?.remove(v), v = null, w = [], P = !1, o.updateAlert(a("draw.multiPoint.canceled"))) : d && (e.preventDefault(), s?.delete(), y?.remove(d), typeof t.removeGraphic == "function" && t.removeGraphic(d.attributes.id), d = null, S(void 0), o.updateAlert(a("draw.graphic.deleted")));
            break;
          case "Escape":
            t.setActiveTool(null), s?.cancel(), d = null, S(void 0), t.clearSelection(), o.updateAlert(a("draw.tool.canceled"));
            break;
        }
    }, oe = (e) => {
      const i = o.geo.map.esriView.container;
      if (!document.activeElement || !i?.contains(document.activeElement) || !d || !["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.key)) return;
      e.preventDefault(), e.stopPropagation();
      const l = 10, p = e.shiftKey, u = e.altKey, G = o.geo.map.esriView;
      let k = 0, m = 0;
      e.key === "ArrowLeft" && (k = -l), e.key === "ArrowRight" && (k = l), e.key === "ArrowUp" && (m = -l), e.key === "ArrowDown" && (m = l);
      const n = d.geometry;
      let c;
      if (n.type === "point")
        c = { x: n.x, y: n.y };
      else {
        const f = n.extent;
        c = { x: (f.xmin + f.xmax) / 2, y: (f.ymin + f.ymax) / 2 };
      }
      const U = G.toScreen(
        new X({
          x: c.x,
          y: c.y,
          spatialReference: G.spatialReference
        })
      );
      U.x += k, U.y += m;
      const N = G.toMap(U), C = N.x - c.x, I = N.y - c.y;
      let g;
      if (n.type === "point")
        !p && !u ? g = new X({
          x: n.x + C,
          y: n.y + I,
          spatialReference: n.spatialReference
        }) : p ? (g = n.clone(), o.updateAlert(a("draw.point.resize.unsupported"))) : u && (g = n.clone(), o.updateAlert(a("draw.point.rotate.unsupported")));
      else if (n.type === "polyline") {
        if (!p && !u) {
          const h = n.paths.map((D) => D.map(([R, A]) => [R + C, A + I]));
          g = new $({
            paths: h,
            spatialReference: n.spatialReference
          });
        } else if (p) {
          const f = n, h = e.key === "ArrowUp" || e.key === "ArrowRight" ? 1.05 : 0.95, D = f.paths.map(
            (R) => R.map(([A, z]) => [c.x + (A - c.x) * h, c.y + (z - c.y) * h])
          );
          g = new $({
            paths: D,
            spatialReference: n.spatialReference
          });
        } else if (u) {
          const f = n, h = e.key === "ArrowLeft" ? -0.05 : e.key === "ArrowRight" ? 0.05 : 0;
          if (h !== 0) {
            const D = Math.cos(h), R = Math.sin(h), A = f.paths.map(
              (z) => z.map(([W, Y]) => {
                const K = W - c.x, O = Y - c.y, J = K * D - O * R, Q = K * R + O * D;
                return [c.x + J, c.y + Q];
              })
            );
            g = new $({
              paths: A,
              spatialReference: n.spatialReference
            });
          } else
            g = n.clone();
        }
      } else if (n.type === "polygon") {
        if (!p && !u) {
          const h = n.rings.map((D) => D.map(([R, A]) => [R + C, A + I]));
          g = new M({
            rings: h,
            spatialReference: n.spatialReference
          });
        } else if (p) {
          const f = n, h = e.key === "ArrowUp" || e.key === "ArrowRight" ? 1.05 : 0.95, D = f.rings.map(
            (R) => R.map(([A, z]) => [c.x + (A - c.x) * h, c.y + (z - c.y) * h])
          );
          g = new M({
            rings: D,
            spatialReference: n.spatialReference
          });
        } else if (u) {
          const f = n, h = e.key === "ArrowLeft" ? -0.05 : e.key === "ArrowRight" ? 0.05 : 0;
          if (h !== 0) {
            const D = Math.cos(h), R = Math.sin(h), A = f.rings.map(
              (z) => z.map(([W, Y]) => {
                const K = W - c.x, O = Y - c.y, J = K * D - O * R, Q = K * R + O * D;
                return [c.x + J, c.y + Q];
              })
            );
            g = new M({
              rings: A,
              spatialReference: n.spatialReference
            });
          } else
            g = n.clone();
        }
      }
      if (g) {
        d.geometry = g, d.set("geometry", g), S(d), d.attributes?.id && t.updateGraphicGeometry(d.attributes.id, g);
        const f = p ? "resized" : u ? "rotated" : "moved";
        o.updateAlert(a(`draw.graphic.${f}`));
      }
    }, ye = async (e) => {
      const l = (await o.geo.map.esriView.hitTest(e)).results.find(
        (p) => "graphic" in p && p.graphic.layer === y && !!p.graphic.attributes?.id
      );
      l && t.activeTool === "edit" ? s?.triggerUpdate([l.graphic]) : (s?.cancel(), d = null, t.clearSelection(), S());
    }, ue = async () => {
      await o.geo.map.viewPromise, o.geo.layer.getLayer(j) ? y = o.geo.layer.getLayer(j).esriLayer : (y = o.geo.layer.createLayer({
        id: j,
        layerType: Te.GRAPHIC,
        cosmetic: !0,
        system: !0,
        url: ""
      }), await o.geo.map.addLayer(y)), y?.esriLayer && (y = y.esriLayer), Object.assign(_.value, {
        view: o.geo.map.esriView,
        layer: y,
        availableCreateTools: ["point", "multipoint", "polyline", "polygon", "rectangle", "circle"],
        updateOnGraphicClick: !0,
        visibleElements: {
          createTools: { point: !0, polyline: !0, polygon: !0, rectangle: !0, circle: !0 },
          selectionTools: { enable: !0 },
          settingsMenu: !1
        },
        defaultUpdateOptions: { highlightOptions: { enabled: !1 } }
      }), o.geo.map.esriView.ui.add(_.value, "bottom-right"), _.value?.addEventListener("arcgisCreate", (e) => re(e.detail)), _.value?.addEventListener("arcgisUpdate", (e) => me(e.detail)), B = {
        remove: () => _.value?.removeEventListener("arcgisCreate", (e) => re(e.detail))
      }, s = _.value, o.geo.map.esriView.on("click", ye), document.addEventListener("keydown", te), document.addEventListener("keydown", oe, { capture: !0 });
    }, we = () => {
      if (!E) return;
      const e = o.keyboardNav;
      if (!e) {
        E = void 0;
        return;
      }
      e.unregister(E), E = void 0;
    }, ie = () => {
      we(), s && (o.geo.map.esriView && o.geo.map.esriView.ui.remove(s), B && B.remove(), s.destroy()), document.removeEventListener("keydown", te), document.removeEventListener("keydown", oe, { capture: !0 }), P = !1, v = null, w = [], s = null, y = null;
    }, re = (e) => {
      if (e.state === "complete") {
        const i = e.graphic, r = `graphic-${Date.now()}`;
        i.attributes = i.attributes || {}, i.attributes.id = r, t.addGraphic({
          id: r,
          type: e.tool,
          geometry: i.geometry,
          attributes: i.attributes
        }), e.tool !== "point" && (t.setActiveTool(""), o.keyboardNav?.reset());
      }
    }, me = (e) => {
      const i = e.graphics[0];
      if (i)
        if (e.state === "start") {
          if (t.activeTool !== "edit") {
            s.cancel();
            return;
          }
          d = i, i.attributes?.id && (t.selectGraphic(i.attributes.id), o.updateAlert(
            a("draw.graphic.selected", {
              type: b(i.attributes?.type)
            })
          ));
        } else e.state === "active" ? S(i) : e.state === "complete" && i.attributes?.id && (t.updateGraphicGeometry(i.attributes.id, i.geometry), o.updateAlert(a("draw.graphic.updated")));
    };
    return be(() => {
      ce(), ue(), ee.push(
        o.event.on(le.MAP_DESTROYED, () => {
          ie();
        })
      );
    }), ae(
      () => t.activeTool,
      (e) => {
        s.cancel(), S(), v = null, w = [], P = !1, e && e != "edit" && s.create(e);
      }
    ), ke(() => {
      ie(), ee.forEach((e) => o.event.off(e));
    }), (e, i) => (Re(), De("arcgis-sketch", {
      ref_key: "sketchEl",
      ref: _,
      style: { display: "none" }
    }, null, 512));
  }
}), se = [
  { type: "point" },
  { type: "polyline" },
  { type: "polygon" },
  { type: "circle" },
  { type: "rectangle" }
];
class Me extends xe {
  store;
  constructor(a, T) {
    super(a, T), this.store = Z(this.$vApp.$pinia);
  }
  /**
   * Parses the draw fixture configuration and sets up the draw store.
   * @param drawConfig The configuration object for the draw fixture.
   */
  _parseConfig(a) {
    if (!a) {
      this.store.setSupportedTypes(se);
      return;
    }
    if (a.types !== void 0) {
      const x = (a.types === null ? [] : a.types).filter((b) => b.enabled !== !1);
      this.store.setSupportedTypes(x);
    } else
      this.store.setSupportedTypes(se);
    a.defaultTool && this.store.setActiveTool(a.defaultTool);
  }
  /**
   * Returns the ID of the graphics layer used by the draw fixture.
   */
  get graphicsLayerId() {
    return j;
  }
}
const Le = { en: { "draw.multiPoint.started": "{type} drawing started with 1 point", "draw.multiPoint.pointAdded": "Point added {count} points total", "draw.multiPoint.pointRemoved": "Point removed {count} points remaining", "draw.multiPoint.canceled": "Drawing canceled", "draw.multiPoint.completed": "{type} completed with {count} points", "draw.multiPoint.notEnoughPoints": "Not enough points for {type} minimum {min} required", "draw.graphic.created": "{type} created", "draw.graphic.selected": "{type} selected", "draw.graphic.deselected": "Graphic deselected", "draw.graphic.deleted": "Graphic deleted", "draw.graphic.updated": "Graphic updated", "draw.graphic.none": "No graphic found", "draw.tool.canceled": "Drawing tool canceled", "draw.point.resize.unsupported": "Resizing not supported for point graphics", "draw.point.rotate.unsupported": "Rotation not supported for point graphics", "draw.move.up": "Moved up", "draw.move.down": "Moved down", "draw.move.left": "Moved left", "draw.move.right": "Moved right", "draw.resize.increase": "Increased size", "draw.resize.decrease": "Decreased size", "draw.rotate.clockwise": "Rotated clockwise", "draw.rotate.counterclockwise": "Rotated counter-clockwise", "draw.button.point": "Draw point", "draw.button.polyline": "Draw line", "draw.button.polygon": "Draw polygon", "draw.button.rectangle": "Draw rectangle", "draw.button.circle": "Draw circle", "draw.point.tooltip": "Draw point", "draw.polyline.tooltip": "Draw polyline", "draw.polygon.tooltip": "Draw polygon", "draw.circle.tooltip": "Draw circle", "draw.rectangle.tooltip": "Draw rectangle", "draw.edit.tooltip": "Edit Mode", "draw.keyboard.namespace": "Draw Tools", "draw.keyboard.key.point": "Draw a point", "draw.keyboard.key.polyline": "Draw a line", "draw.keyboard.key.polygon": "Draw a polygon", "draw.keyboard.key.circle": "Draw a circle", "draw.keyboard.key.rectangle": "Draw a rectangle", "draw.keyboard.key.edit": "Edit geometry", "draw.graphic.moved": "Graphic moved", "draw.shape": "shape", "draw.point": "point", "draw.multipoint": "multipoint", "draw.polyline": "polyline", "draw.polygon": "polygon", "draw.rectangle": "rectangle", "draw.circle": "circle", "draw.unknown": "unknown" }, fr: { "draw.multiPoint.started": "Dessin de {type} commencé avec 1 point", "draw.multiPoint.pointAdded": "Point ajouté", "draw.multiPoint.pointRemoved": "Point supprimé", "draw.multiPoint.canceled": "Dessin annulé", "draw.multiPoint.completed": "{type} terminé avec {count} points", "draw.multiPoint.notEnoughPoints": "Pas assez de points pour {type}", "draw.graphic.created": "{type} créé", "draw.graphic.selected": "{type} sélectionné", "draw.graphic.deselected": "Graphique désélectionné", "draw.graphic.deleted": "Graphique supprimé", "draw.graphic.updated": "Graphique mis à jour", "draw.graphic.none": "Aucun graphique trouvé", "draw.tool.canceled": "Outil de dessin annulé", "draw.point.resize.unsupported": "Le redimensionnement n'est pas pris en charge pour les points", "draw.point.rotate.unsupported": "La rotation n'est pas prise en charge pour les points", "draw.move.up": "Déplacé vers le haut", "draw.move.down": "Déplacé vers le bas", "draw.move.left": "Déplacé vers la gauche", "draw.move.right": "Déplacé vers la droite", "draw.resize.increase": "Taille augmentée", "draw.resize.decrease": "Taille réduite", "draw.rotate.clockwise": "Rotation dans le sens horaire", "draw.rotate.counterclockwise": "Rotation dans le sens antihoraire", "draw.button.point": "Dessiner un point", "draw.button.polyline": "Dessiner une ligne", "draw.button.polygon": "Dessiner un polygone", "draw.button.rectangle": "Dessiner un rectangle", "draw.button.circle": "Dessiner un cercle", "draw.point.tooltip": "Dessiner un point", "draw.polyline.tooltip": "Dessiner une polyligne", "draw.polygon.tooltip": "Dessiner un polygone", "draw.circle.tooltip": "Dessiner un cercle", "draw.rectangle.tooltip": "Dessiner un rectangle", "draw.edit.tooltip": "Mode édition", "draw.keyboard.namespace": "Outils de dessin", "draw.keyboard.key.point": "Dessine un point", "draw.keyboard.key.polyline": "Dessine une ligne", "draw.keyboard.key.polygon": "Dessine un polygone", "draw.keyboard.key.circle": "Dessine un cercle", "draw.keyboard.key.rectangle": "Dessine un rectangle", "draw.keyboard.key.edit": "Mode édition", "draw.graphic.moved": "Graphique déplacé", "draw.shape": "forme", "draw.point": "indiquer", "draw.multipoint": "multipoint", "draw.polyline": "polyligne", "draw.polygon": "polygone", "draw.rectangle": "rectangle", "draw.circle": "cercle", "draw.unknown": "inconnue" } };
class ft extends Me {
  async init() {
    Object.entries(Le).forEach((b) => this.$iApi.$i18n.mergeLocaleMessage(...b)), this._parseConfig(this.config), Z(this.$vApp.$pinia).supportedTypes.forEach((b) => {
      const o = `${b.type}-icon`;
      this.$iApi.component(o, Ae(Se(/* @__PURE__ */ Object.assign({ "./icons/circle-icon.vue": () => import("./circle-icon-lKyvGm2S.js"), "./icons/edit-icon.vue": () => import("./edit-icon-4M1ZX-wY.js"), "./icons/point-icon.vue": () => import("./point-icon-CIRT86WR.js"), "./icons/polygon-icon.vue": () => import("./polygon-icon-BuvUtbak.js"), "./icons/polyline-icon.vue": () => import("./polyline-icon-DD61ksCC.js"), "./icons/rectangle-icon.vue": () => import("./rectangle-icon-CfLgn9gg.js") }), `./icons/${b.type}-icon.vue`, 3)));
    });
    const { el: T } = this.mount(Ge, {
      app: this.$element
    });
    this.$vApp.$el.getElementsByClassName("inner-shell")[0].appendChild(T.childNodes[0]);
  }
  async added() {
    this.$iApi.event.on(le.MAP_CREATED, () => {
      this.init();
    });
  }
}
export {
  ft as default
};
