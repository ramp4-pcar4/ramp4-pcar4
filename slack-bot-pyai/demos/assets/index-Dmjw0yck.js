import { bA as FixtureInstance } from './main-48Jy8Lgr.js';
import { a as fabric } from './fabric-DHxkKQiG.js';
import './preload-helper-dJJaZANz.js';

const SEGMENT_TOP_MARGIN = 30;
const SEGMENT_BOTTOM_MARGIN = 20;
const CHUNK_TOP_MARGIN = 16;
const CHUNK_BOTTOM_MARGIN = 12;
const ITEM_MARGIN = 8;
const ROW_HEIGHT = 32;
const ICON_WIDTH = 32;
const MIN_COLUMN_WIDTH = 350;
const COLUMN_SPACING = 20;
const DEFAULT_FONT = "Montserrat, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif";
class ExportLegendFixture extends FixtureInstance {
  get config() {
    const fixtureConfig = this.$iApi.fixture.get("export").config;
    return fixtureConfig?.legend;
  }
  async make(options) {
    const layers = this.$iApi.geo.layer.allLayersOnMap().filter((layer) => !layer.isCosmetic);
    if (layers.length === 0) {
      return new fabric.fabric.Group([], {
        originX: "left"
      });
    }
    const columns = Math.min(
      layers.length,
      Math.floor(options.width / (MIN_COLUMN_WIDTH + COLUMN_SPACING)) || 1
      // round to 1 if floor is 0
    );
    const columnWidth = (options.width - (columns - 1) * COLUMN_SPACING) / columns;
    let runningHeight = 0;
    const segments = await Promise.all(this._makeSegments(layers, columnWidth));
    const fbAllItems = segments.map(({ title: segmentTitle, items: chunks }, segmentIndex) => {
      if (segmentIndex > 0) {
        runningHeight += SEGMENT_TOP_MARGIN;
      }
      segmentTitle.top = runningHeight;
      runningHeight += segmentTitle.height + SEGMENT_BOTTOM_MARGIN;
      const allChunkItems = chunks.map(({ title: chunkTitle, items: chunkItems }, chunkIndex) => {
        const result = [];
        if (chunkTitle && !(chunks.length === 1 && chunkTitle.text === segmentTitle.text)) {
          if (chunkIndex > 0) {
            runningHeight += CHUNK_TOP_MARGIN;
          }
          chunkTitle.top = runningHeight;
          runningHeight += chunkTitle.height + CHUNK_BOTTOM_MARGIN;
          result.push(chunkTitle);
        }
        chunkItems.forEach((item) => {
          item.top = runningHeight;
          runningHeight += item.height + ITEM_MARGIN;
        });
        return [...result, ...chunkItems].filter((a) => a);
      });
      return new fabric.fabric.Group([segmentTitle, ...allChunkItems.flat()]);
    }).flat();
    const fbLegend = this._makeColumns(fbAllItems, columnWidth, columns);
    return Promise.resolve(fbLegend);
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
  _makeColumns(items, columnWidth, columns) {
    let curColumn = 0;
    let curTop = 0;
    let accumLength = 0;
    const targetHeight = items[items.length - 1].aCoords.bl.y / columns;
    items.forEach((group, index) => {
      const height = index !== items.length - 1 ? items[index + 1].top - group.top : group.height;
      const columnFull = accumLength > targetHeight * (curColumn + 1);
      const longLayer = curTop !== 0 && height > targetHeight;
      const fillColumns = columns - curColumn > items.length - index;
      if ((columnFull || longLayer || fillColumns) && curColumn < columns) {
        ++curColumn;
        curTop = 0;
      }
      group.left = curColumn * (columnWidth + COLUMN_SPACING);
      group.top = curTop;
      curTop += height;
      accumLength += height;
    });
    return new fabric.fabric.Group(items, {
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
  _makeSegments(layers, segmentWidth) {
    return layers.map(async (layer) => {
      const title = new fabric.fabric.Textbox(layer.name, {
        fontSize: 24,
        fontFamily: DEFAULT_FONT,
        width: segmentWidth
      });
      const ids = this._getLayerTreeIds(layer);
      let items = [];
      items = layer.supportsSublayers ? await Promise.all(
        this._makeSegmentChunks(ids, layer, segmentWidth)
        // pass list of flatenned sublayer ids
      ) : await Promise.all(
        this._makeSegmentChunks([-1], layer, segmentWidth)
        // pass single -1 id so the root gets processed
      );
      return { title, items };
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
  _makeSegmentChunks(ids, layer, segmentWidth) {
    const rootLayer = layer;
    return ids.map(async (idx) => {
      const currLayer = idx === -1 ? rootLayer : rootLayer.getSublayer(idx);
      if (!currLayer) {
        return {
          title: new fabric.fabric.Textbox("ERROR", {
            fontSize: 20,
            fontFamily: DEFAULT_FONT,
            width: segmentWidth
          }),
          items: []
        };
      }
      await Promise.all(currLayer.legend.map((lg) => lg.drawPromise));
      const symbologyStack = currLayer.legend;
      const title = new fabric.fabric.Textbox(currLayer.name, {
        fontSize: 20,
        fontFamily: DEFAULT_FONT,
        width: segmentWidth
      });
      const items = await Promise.all(this._makeChunkItems(symbologyStack, segmentWidth));
      return {
        title,
        items
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
  _makeChunkItems(symbologyStack, segmentWidth) {
    return symbologyStack.map(async (symbol) => {
      const fbSymbol = (await promisify(fabric.fabric.loadSVGFromString)(symbol.svgcode))[0];
      if (!symbol.esriStandard) {
        const fbLabel = new fabric.fabric.Textbox(symbol.label, {
          fontSize: 12,
          fontFamily: DEFAULT_FONT,
          originY: "center",
          left: 0,
          top: ROW_HEIGHT / 2,
          width: segmentWidth
        });
        const symbolWidth = Number(symbol.imgWidth);
        const symbolHeight = Number(symbol.imgHeight);
        const scale = Math.min(1, segmentWidth / symbolWidth);
        if (fbSymbol) {
          fbSymbol.originY = "center";
          fbSymbol.top = symbolHeight * scale / 2 + ROW_HEIGHT;
          fbSymbol.scaleToHeight(symbolHeight * scale);
          fbSymbol.scaleToWidth(symbolWidth * scale);
        }
        return new fabric.fabric.Group([fbLabel, fbSymbol].filter(Boolean), {
          height: symbolHeight * scale + ROW_HEIGHT
        });
      } else {
        fbSymbol.originY = "center";
        fbSymbol.top = ROW_HEIGHT / 2;
        const fbLabel = new fabric.fabric.Textbox(symbol.label, {
          fontSize: 12,
          fontFamily: DEFAULT_FONT,
          originY: "center",
          left: ICON_WIDTH + 20,
          top: ROW_HEIGHT / 2,
          width: segmentWidth - ICON_WIDTH - 20
        });
        return new fabric.fabric.Group([fbSymbol, fbLabel], {
          height: ROW_HEIGHT
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
  _getLayerTreeIds(rootLayer) {
    const ids = [];
    const queue = [...rootLayer.sublayers];
    while (queue.length > 0) {
      const sublayer = queue.shift();
      if (!sublayer) {
        continue;
      }
      sublayer.visibility && ids.push(sublayer.layerIdx);
      queue.push(...sublayer.sublayers);
    }
    return ids;
  }
}
const promisify = (fn) => {
  return (args) => new Promise((resolve) => {
    fn(args, (callbackArgs) => {
      resolve(callbackArgs);
    });
  });
};

export { ExportLegendFixture as default };
