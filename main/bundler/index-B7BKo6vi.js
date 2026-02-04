import "tiny-emitter";
import { F as I } from "./main-6dWPqJr6.js";
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
import "vue";
import "pinia";
import "vue-i18n";
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
import { fabric as m } from "fabric";
const x = 30, M = 20, N = 16, T = 12, G = 8, f = 32, d = 32, L = 350, _ = 20, h = "Montserrat, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif";
class gt extends I {
  get config() {
    return this.$iApi.fixture.get("export").config?.legend;
  }
  async make(i) {
    const r = this.$iApi.geo.layer.allLayersOnMap().filter((a) => !a.isCosmetic);
    if (r.length === 0)
      return new m.Group([], {
        originX: "left"
      });
    const t = Math.min(
      r.length,
      Math.floor(i.width / (L + _)) || 1
      // round to 1 if floor is 0
    ), e = (i.width - (t - 1) * _) / t;
    let o = 0;
    const l = (await Promise.all(this._makeSegments(r, e))).map(({ title: a, items: p }, g) => {
      g > 0 && (o += x), a.top = o, o += a.height + M;
      const w = p.map(({ title: c, items: y }, C) => {
        const S = [];
        return c && !(p.length === 1 && c.text === a.text) && (C > 0 && (o += N), c.top = o, o += c.height + T, S.push(c)), y.forEach((u) => {
          u.top = o, o += u.height + G;
        }), [...S, ...y].filter((u) => u);
      });
      return new m.Group([a, ...w.flat()]);
    }).flat(), s = this._makeColumns(l, e, t);
    return Promise.resolve(s);
  }
  /**
   * Breaks up legend layers into columns
   *
   * @private
   * @param {fabric.Group[]} items
   * @param {number} columnWidth
   * @param {number} columns
   * @returns {fabric.Group}
   * @memberof ExportLegendFixture
   */
  _makeColumns(i, r, t) {
    let e = 0, o = 0, n = 0;
    const l = i[i.length - 1].aCoords.bl.y / t;
    return i.forEach((s, a) => {
      const p = a !== i.length - 1 ? i[a + 1].top - s.top : s.height, g = n > l * (e + 1), w = o !== 0 && p > l, c = t - e > i.length - a;
      (g || w || c) && e < t && (++e, o = 0), s.left = e * (r + _), s.top = o, o += p, n += p;
    }), new m.Group(i, {
      originX: "left"
    });
  }
  /**
   * Create segments of the export image based on the provided layers and layer configs.
   *
   * @private
   * @param {LayerInstance[]} layers
   * @param {RampLayerConfig[]} layerConfigs
   * @returns {Promise<Segment>[]}
   * @memberof ExportLegendFixture
   */
  _makeSegments(i, r) {
    return i.map(async (t) => {
      const e = new m.Textbox(t.name, {
        fontSize: 24,
        fontFamily: h,
        width: r
      }), o = this._getLayerTreeIds(t);
      let n = [];
      return n = t.supportsSublayers ? await Promise.all(
        this._makeSegmentChunks(o, t, r)
        // pass list of flatenned sublayer ids
      ) : await Promise.all(
        this._makeSegmentChunks([-1], t, r)
        // pass single -1 id so the root gets processed
      ), { title: e, items: n };
    });
  }
  /**
   * Creates segment chunks based on the provided layer and layer entry id.
   *
   * Used for layers that support sublayers (e.g. MapImageLayers)
   *
   * @private
   * @param {(number[] | string[])} ids
   * @param {LayerInstance} layer
   * @returns {Promise<SegmentChunk>[]}
   * @memberof ExportLegendFixture
   */
  _makeSegmentChunks(i, r, t) {
    const e = r;
    return i.map(async (o) => {
      const n = o === -1 ? e : e.getSublayer(o);
      if (!n)
        return {
          title: new m.Textbox("ERROR", {
            fontSize: 20,
            fontFamily: h,
            width: t
          }),
          items: []
        };
      await Promise.all(n.legend.map((p) => p.drawPromise));
      const l = n.legend, s = new m.Textbox(n.name, {
        fontSize: 20,
        fontFamily: h,
        width: t
      }), a = await Promise.all(this._makeChunkItems(l, t));
      return {
        title: s,
        items: a
      };
    });
  }
  /**
   * Creates layer entry symbology based on the provided symbology stack.
   *
   * @private
   * @param {LegendSymbology[]} symbologyStack
   * @returns {Promise<fabric.Group>[]}
   * @memberof ExportLegendFixture
   */
  _makeChunkItems(i, r) {
    return i.map(async (t) => {
      const e = (await F(m.loadSVGFromString)(t.svgcode))[0];
      if (t.esriStandard) {
        e.originY = "center", e.top = f / 2;
        const o = new m.Textbox(t.label, {
          fontSize: 12,
          fontFamily: h,
          originY: "center",
          left: d + 20,
          top: f / 2,
          width: r - d - 20
        });
        return new m.Group([e, o], {
          height: f
        });
      } else {
        const o = new m.Textbox(t.label, {
          fontSize: 12,
          fontFamily: h,
          originY: "center",
          left: 0,
          top: f / 2,
          width: r
        }), n = Number(t.imgWidth), l = Number(t.imgHeight), s = Math.min(1, r / n);
        return e && (e.originY = "center", e.top = l * s / 2 + f, e.scaleToHeight(l * s), e.scaleToWidth(n * s)), new m.Group([o, e].filter(Boolean), {
          height: l * s + f
        });
      }
    });
  }
  /**
   * Gets flattened array of ids from layer tree
   *
   * @private
   * @param {TreeNode} node
   * @returns {number[]}
   * @memberof ExportLegendFixture
   */
  _getLayerTreeIds(i) {
    const r = [], t = [...i.sublayers];
    for (; t.length > 0; ) {
      const e = t.shift();
      e && (e.visibility && r.push(e.layerIdx), t.push(...e.sublayers));
    }
    return r;
  }
}
const F = (b) => (i) => new Promise((r) => {
  b(i, (t) => {
    r(t);
  });
});
export {
  gt as default
};
