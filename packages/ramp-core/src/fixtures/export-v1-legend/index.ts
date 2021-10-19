import { FixtureInstance, LayerInstance } from '@/api/internal';
import { LayerStore } from '@/store/modules/layer';
import { ExportV1SubFixture } from '@/fixtures/export-v1';
import { fabric } from 'fabric';
import { LegendSymbology } from '@/geo/api';

/**
 * Represents a map layer.
 *
 * @interface Segment
 */
interface Segment {
    title: fabric.Text;
    items: SegmentChunk[];
}

/**
 * Represents a map layer entry.
 *
 * @interface SegmentChunk
 */
interface SegmentChunk {
    title?: fabric.Text;

    /**
     * Represents layer entry symbology.
     *
     * @type {fabric.Group[]}
     * @memberof SegmentChunk
     */
    items: fabric.Group[];
}

const SEGMENT_TOP_MARGIN = 30;
const SEGMENT_BOTTOM_MARGIN = 20;
const CHUNK_TOP_MARGIN = 16;
const CHUNK_BOTTOM_MARGIN = 12;
const ITEM_MARGIN = 8;

const ROW_HEIGHT = 32;
const ICON_WIDTH = 32;

const MIN_COLUMN_WIDTH = 350;
const COLUMN_SPACING = 20;

const DEFAULT_FONT =
    'Montserrat, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif';

class ExportV1LegendFixture
    extends FixtureInstance
    implements ExportV1SubFixture
{
    async make(options: any): Promise<fabric.Group> {
        // filter out loading/errored and invisible layers
        const layers = this.$vApp.$store
            .get<LayerInstance[]>(LayerStore.layers)!
            .filter(layer => layer.isValidState && layer.visibility);

        // number of columns based on export width and min col width
        const columns = Math.min(
            layers.length,
            Math.floor(options.width / (MIN_COLUMN_WIDTH + COLUMN_SPACING))
        );

        // calculate column width such that columns are even spaced across entire export width
        const columnWidth =
            (options.width - (columns - 1) * COLUMN_SPACING) / columns;

        let runningHeight = 0;

        const segments = await Promise.all(
            this._makeSegments(layers, columnWidth)
        );

        // string all the graphic legend elements together adding margins between them
        const fbAllItems = segments
            .map(({ title: segmentTitle, items: chunks }, segmentIndex) => {
                if (segmentIndex > 0) {
                    runningHeight += SEGMENT_TOP_MARGIN;
                }

                segmentTitle.top = runningHeight;
                runningHeight += segmentTitle.height! + SEGMENT_BOTTOM_MARGIN;

                const allChunkItems = chunks.map(
                    ({ title: chunkTitle, items: chunkItems }, chunkIndex) => {
                        const result = [];

                        // if a single chunk shares the title with its parent segment, skip the chunk title
                        if (
                            chunkTitle &&
                            !(
                                chunks.length === 1 &&
                                chunkTitle.text === segmentTitle.text
                            )
                        ) {
                            if (chunkIndex > 0) {
                                runningHeight += CHUNK_TOP_MARGIN;
                            }

                            chunkTitle.top = runningHeight;
                            runningHeight +=
                                chunkTitle.height! + CHUNK_BOTTOM_MARGIN;

                            result.push(chunkTitle);
                        }

                        chunkItems.forEach(item => {
                            item.top = runningHeight;
                            runningHeight += item.height! + ITEM_MARGIN;
                        });

                        return [...result, ...chunkItems].filter(a => a);
                    }
                );

                // create a group for each config layer
                return new fabric.Group([
                    segmentTitle,
                    ...allChunkItems.flat()
                ]);
            })
            .flat();

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
     * @memberof ExportV1LegendFixture
     */
    private _makeColumns(
        items: fabric.Group[],
        columnWidth: number,
        columns: number
    ) {
        let curColumn: number = 0;
        let curTop: number = 0;
        let accumLength: number = 0;
        // target column height is the total length of all items divided by number of columns
        const targetHeight: number =
            items[items.length - 1].aCoords!.bl.y / columns;

        items.forEach((group, index) => {
            const height: number =
                index !== items.length - 1
                    ? items[index + 1].top! - group.top!
                    : group.height!;

            // reached end of column, try to evently split items
            const columnFull: boolean =
                accumLength > targetHeight * (curColumn + 1);
            // don't allow column to go over target if layer is very long
            const longLayer: boolean = curTop !== 0 && height > targetHeight;
            // ensure there are no empty columns on the right
            const fillColumns: boolean =
                columns - curColumn > items.length - index;

            if (
                (columnFull || longLayer || fillColumns) &&
                curColumn < columns
            ) {
                // move to next column
                ++curColumn;
                curTop = 0;
            }

            // update layer position in legend export
            group.left = curColumn * (columnWidth + COLUMN_SPACING);
            group.top = curTop;

            curTop += height;
            accumLength += height;
        });

        return new fabric.Group(items, {
            originX: 'center'
        });
    }

    /**
     * Create segments of the export image based on the provided layers and layer configs.
     *
     * @private
     * @param {LayerInstance[]} layers
     * @param {RampLayerConfig[]} layerConfigs
     * @returns {Promise<Segment>[]}
     * @memberof ExportV1LegendFixture
     */
    private _makeSegments(
        layers: LayerInstance[],
        segmentWidth: number
    ): Promise<Segment>[] {
        return layers.map(async (layer: LayerInstance) => {
            const title = new fabric.Textbox(layer.name, {
                fontSize: 24,
                fontFamily: DEFAULT_FONT,
                width: segmentWidth
            });

            // filter out invisible layer entries
            const ids = this._getLayerTreeIds(layer);

            let items: any = [];
            items = layer.supportsSublayers
                ? await Promise.all(
                      this._makeSegmentChunks(ids, layer, segmentWidth) // pass list of flatenned sublayer ids
                  )
                : await Promise.all(
                      this._makeSegmentChunks([-1], layer, segmentWidth) // pass single -1 id so the root gets processed
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
     * @memberof ExportV1LegendFixture
     */
    private _makeSegmentChunks(
        ids: number[],
        layer: LayerInstance,
        segmentWidth: number
    ): Promise<SegmentChunk>[] {
        const rootLayer: LayerInstance = layer;
        return ids.map<Promise<SegmentChunk>>(async (idx: number) => {
            let currLayer: LayerInstance | undefined =
                idx === -1 ? rootLayer : rootLayer.getSublayer(idx, true);

            if (!currLayer) {
                // This should not happen, but if it does return an ERROR label
                return {
                    title: new fabric.Textbox('ERROR', {
                        fontSize: 20,
                        fontFamily: DEFAULT_FONT,
                        width: segmentWidth
                    }),
                    items: []
                };
            }

            await Promise.all(currLayer.legend.map(lg => lg.drawPromise));
            const symbologyStack = currLayer.legend;

            const title = new fabric.Textbox(currLayer.name, {
                fontSize: 20,
                fontFamily: DEFAULT_FONT,
                width: segmentWidth
            });

            const items = await Promise.all(
                this._makeChunkItems(symbologyStack, segmentWidth)
            );

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
     * @memberof ExportV1LegendFixture
     */
    private _makeChunkItems(
        symbologyStack: LegendSymbology[],
        segmentWidth: number
    ): Promise<fabric.Group>[] {
        return symbologyStack.map(async symbol => {
            const fbSymbol = (
                await promisify(fabric.loadSVGFromString)(symbol.svgcode)
            )[0];

            if (symbol.hasOwnProperty('imgHeight')) {
                // WMS legend
                const fbLabel = new fabric.Textbox(symbol.label, {
                    fontSize: 12,
                    fontFamily: DEFAULT_FONT,
                    originY: 'center',
                    left: 0,
                    top: ROW_HEIGHT / 2,
                    width: segmentWidth
                });

                const symbolWidth = Number(symbol.imgWidth!);
                const symbolHeight = Number(symbol.imgHeight!);

                // scale down image if wider than column
                const scale = Math.min(1, segmentWidth / symbolWidth);

                if (fbSymbol) {
                    fbSymbol.originY = 'center';
                    fbSymbol.top = (symbolHeight * scale) / 2 + ROW_HEIGHT;
                    fbSymbol.scaleToHeight(symbolHeight * scale);
                    fbSymbol.scaleToWidth(symbolWidth * scale);
                }

                return new fabric.Group([fbLabel, fbSymbol].filter(Boolean), {
                    height: symbolHeight * scale + ROW_HEIGHT
                });
            } else {
                fbSymbol.originY = 'center';
                fbSymbol.top = ROW_HEIGHT / 2;

                const fbLabel = new fabric.Textbox(symbol.label, {
                    fontSize: 12,
                    fontFamily: DEFAULT_FONT,
                    originY: 'center',
                    left: ICON_WIDTH + 20,
                    top: ROW_HEIGHT / 2,
                    width: segmentWidth - ICON_WIDTH - 20
                });

                return new fabric.Group([fbSymbol, fbLabel], {
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
     * @memberof ExportV1LegendFixture
     */
    private _getLayerTreeIds(rootLayer: LayerInstance): number[] {
        let ids: Array<number> = [];
        let queue: Array<LayerInstance> = [...rootLayer.sublayers];

        while (queue.length > 0) {
            const sublayer: LayerInstance = queue.shift()!;
            if (!sublayer) {
                continue;
            }

            sublayer.visibility && ids.push(sublayer.layerIdx);
            queue.push(...sublayer.sublayers);
        }

        return ids;
    }
}

type Callback<A> = (args: A) => void;

/**
 * A utility function to promisify callback-based function.
 * TODO: move somewhere where this can be reused
 *
 * @param fn A
 * @returns
 */
const promisify = <T, A>(
    fn: (args: T, cb: Callback<A>) => void
): ((args: T) => Promise<A>) => {
    return (args: T) =>
        new Promise(resolve => {
            fn(args, callbackArgs => {
                resolve(callbackArgs);
            });
        });
};

export default ExportV1LegendFixture;
