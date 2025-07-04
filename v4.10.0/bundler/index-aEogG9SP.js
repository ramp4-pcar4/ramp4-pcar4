import "tiny-emitter";
import { F as I } from "./main-C-NQiA0Q.js";
import "@arcgis/core/Basemap";
import "@arcgis/core/Color";
import "@arcgis/core/config";
import "@arcgis/core/geometry/Extent";
import "@arcgis/core/geometry/Multipoint";
import "@arcgis/core/geometry/Point";
import "@arcgis/core/geometry/Polygon";
import "@arcgis/core/geometry/Polyline";
import "@arcgis/core/geometry/SpatialReference";
import "@arcgis/core/geometry/support/jsonUtils";
import "@arcgis/core/Graphic";
import "@arcgis/core/layers/FeatureLayer";
import "@arcgis/core/layers/GraphicsLayer";
import "@arcgis/core/layers/ImageryLayer";
import "@arcgis/core/layers/MapImageLayer";
import "@arcgis/core/layers/OpenStreetMapLayer";
import "@arcgis/core/layers/TileLayer";
import "@arcgis/core/layers/WMSLayer";
import "@arcgis/core/layers/support/Field";
import "@arcgis/core/Map";
import "@arcgis/core/renderers/SimpleRenderer";
import "@arcgis/core/renderers/support/jsonUtils";
import "@arcgis/core/request";
import "@arcgis/core/rest/query";
import "@arcgis/core/rest/support/Query";
import "@arcgis/core/symbols/PictureMarkerSymbol";
import "@arcgis/core/symbols/SimpleFillSymbol";
import "@arcgis/core/symbols/SimpleLineSymbol";
import "@arcgis/core/symbols/SimpleMarkerSymbol";
import "@arcgis/core/symbols/support/jsonUtils";
import "@arcgis/core/layers/support/FeatureFilter";
import "@arcgis/core/views/MapView";
import "@arcgis/core/webmap/background/ColorBackground";
import "deepmerge";
import "terraformer";
import "proj4";
import "throttle-debounce";
import "vue";
import "pinia";
import "vue-i18n";
import "screenfull";
import "lodash.clonedeep";
import "vue-tippy";
import "linkify-html";
import "@popperjs/core";
import "terraformer-arcgis-parser";
import "csv2geojson";
import "redaxios";
import "await-to-js";
import "svg.js";
import { fabric as a } from "fabric";
const x = 30, M = 20, N = 16, T = 12, G = 8, f = 32, d = 32, L = 350, _ = 20, h = "Montserrat, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif";
class Ft extends I {
  get config() {
    return this.$iApi.fixture.get("export").config?.legend;
  }
  async make(i) {
    const r = this.$iApi.geo.layer.allLayersOnMap().filter((m) => !m.isCosmetic);
    if (r.length === 0)
      return new a.Group([], {
        originX: "left"
      });
    const t = Math.min(
      r.length,
      Math.floor(i.width / (L + _)) || 1
      // round to 1 if floor is 0
    ), o = (i.width - (t - 1) * _) / t;
    let e = 0;
    const p = (await Promise.all(this._makeSegments(r, o))).map(({ title: m, items: l }, g) => {
      g > 0 && (e += x), m.top = e, e += m.height + M;
      const w = l.map(({ title: c, items: y }, C) => {
        const S = [];
        return c && !(l.length === 1 && c.text === m.text) && (C > 0 && (e += N), c.top = e, e += c.height + T, S.push(c)), y.forEach((u) => {
          u.top = e, e += u.height + G;
        }), [...S, ...y].filter((u) => u);
      });
      return new a.Group([m, ...w.flat()]);
    }).flat(), s = this._makeColumns(p, o, t);
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
    let o = 0, e = 0, n = 0;
    const p = i[i.length - 1].aCoords.bl.y / t;
    return i.forEach((s, m) => {
      const l = m !== i.length - 1 ? i[m + 1].top - s.top : s.height, g = n > p * (o + 1), w = e !== 0 && l > p, c = t - o > i.length - m;
      (g || w || c) && o < t && (++o, e = 0), s.left = o * (r + _), s.top = e, e += l, n += l;
    }), new a.Group(i, {
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
      const o = new a.Textbox(t.name, {
        fontSize: 24,
        fontFamily: h,
        width: r
      }), e = this._getLayerTreeIds(t);
      let n = [];
      return n = t.supportsSublayers ? await Promise.all(
        this._makeSegmentChunks(e, t, r)
        // pass list of flatenned sublayer ids
      ) : await Promise.all(
        this._makeSegmentChunks([-1], t, r)
        // pass single -1 id so the root gets processed
      ), { title: o, items: n };
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
    const o = r;
    return i.map(async (e) => {
      const n = e === -1 ? o : o.getSublayer(e);
      if (!n)
        return {
          title: new a.Textbox("ERROR", {
            fontSize: 20,
            fontFamily: h,
            width: t
          }),
          items: []
        };
      await Promise.all(n.legend.map((l) => l.drawPromise));
      const p = n.legend, s = new a.Textbox(n.name, {
        fontSize: 20,
        fontFamily: h,
        width: t
      }), m = await Promise.all(this._makeChunkItems(p, t));
      return {
        title: s,
        items: m
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
      const o = (await F(a.loadSVGFromString)(t.svgcode))[0];
      if (t.esriStandard) {
        o.originY = "center", o.top = f / 2;
        const e = new a.Textbox(t.label, {
          fontSize: 12,
          fontFamily: h,
          originY: "center",
          left: d + 20,
          top: f / 2,
          width: r - d - 20
        });
        return new a.Group([o, e], {
          height: f
        });
      } else {
        const e = new a.Textbox(t.label, {
          fontSize: 12,
          fontFamily: h,
          originY: "center",
          left: 0,
          top: f / 2,
          width: r
        }), n = Number(t.imgWidth), p = Number(t.imgHeight), s = Math.min(1, r / n);
        return o && (o.originY = "center", o.top = p * s / 2 + f, o.scaleToHeight(p * s), o.scaleToWidth(n * s)), new a.Group([e, o].filter(Boolean), {
          height: p * s + f
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
      const o = t.shift();
      o && (o.visibility && r.push(o.layerIdx), t.push(...o.sublayers));
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
  Ft as default
};
