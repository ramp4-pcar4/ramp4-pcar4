import { FixtureInstance, LayerInstance } from '@/api/internal';
import { ExportV1SubFixture } from '@/fixtures/export-v1';
import { fabric } from 'fabric';
import { LegendSymbology, RampLayerConfig, RampLayerMapImageLayerEntryConfig } from '@/geo/api';

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

const DEFAULT_FONT = 'Montserrat, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif';

class ExportV1LegendFixture extends FixtureInstance implements ExportV1SubFixture {
    async make(options: any): Promise<fabric.Group> {
        const columns = 3;

        // read layers config directly from the global config and also get a lits of layer objects
        const layerConfigs = this.$iApi.getConfig().layers;
        const layers = this.$vApp.$store.get<LayerInstance[]>('layer/layers') || [];

        let runningHeight = 0;

        const segments = await Promise.all(this._makeSegments(layers, layerConfigs));

        //TODO: write logic to shoehorn legend into columns

        // string all the graphic legend elements together adding margins between them
        const fbAllItems = segments
            .map(({ title: segmentTitle, items: chunks }, segmentIndex) => {
                if (segmentIndex > 0) {
                    runningHeight += SEGMENT_TOP_MARGIN;
                }

                segmentTitle.top = runningHeight;
                runningHeight += segmentTitle.height! + SEGMENT_BOTTOM_MARGIN;

                const allChunkItems = chunks.map(({ title: chunkTitle, items: chunkItems }, chunkIndex) => {
                    const result = [];

                    // if a single chunk shares the title wit its parent segment, skip the chunk title
                    if (chunkTitle && !(chunks.length === 1 && chunkTitle.text === segmentTitle.text)) {
                        if (chunkIndex > 0) {
                            runningHeight += CHUNK_TOP_MARGIN;
                        }

                        chunkTitle.top = runningHeight;
                        runningHeight += chunkTitle.height! + CHUNK_BOTTOM_MARGIN;

                        result.push(chunkTitle);
                    }

                    chunkItems.forEach(item => {
                        item.top = runningHeight;
                        runningHeight += ROW_HEIGHT + ITEM_MARGIN;
                    });

                    return [...result, ...chunkItems].filter(a => a);
                });

                return [segmentTitle, ...allChunkItems.flat()];
            })
            .flat();

        const fbLegend = new fabric.Group(fbAllItems);

        return Promise.resolve(fbLegend);
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
    private _makeSegments(layers: LayerInstance[], layerConfigs: RampLayerConfig[]): Promise<Segment>[] {
        return layers.map(async (layer, index) => {
            // TODO: exclude invisible layers

            const layerConfig = layerConfigs[index];

            const title = new fabric.Text(layer.getName(layer.uid), {
                fontSize: 24,
                fontFamily: DEFAULT_FONT
            });

            // TODO: WMS layers are ignored right now
            const ids: number[] | string[] = layerConfig.layerEntries
                ? (layerConfig.layerEntries as RampLayerMapImageLayerEntryConfig[]).map(
                      (le: RampLayerMapImageLayerEntryConfig) => le.index as number
                  )
                : [layer.uid];

            const items = await Promise.all(this._makeSegmentChunks(ids, layer));

            return { title, items };
        });
    }

    /**
     * Creates segment chunks based on the provided layer and layer entry id.
     *
     * @private
     * @param {(number[] | string[])} ids
     * @param {LayerInstance} layer
     * @returns {Promise<SegmentChunk>[]}
     * @memberof ExportV1LegendFixture
     */
    private _makeSegmentChunks(ids: (number | string)[], layer: LayerInstance): Promise<SegmentChunk>[] {
        return ids.map<Promise<SegmentChunk>>(async (idx: number | string) => {
            // TODO: exclude invisible layer entries

            await Promise.all(layer.getLegend(idx).map(lg => lg.drawPromise));
            const symbologyStack = layer.getLegend(idx);

            const title = new fabric.Text(layer.getName(idx), {
                fontSize: 20,
                fontFamily: DEFAULT_FONT
            });

            const items = await Promise.all(this._makeChunkItems(symbologyStack));

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
    private _makeChunkItems(symbologyStack: LegendSymbology[]): Promise<fabric.Group>[] {
        return symbologyStack.map(async symbol => {
            const fbSymbol = (await promisify(fabric.loadSVGFromString)(symbol.svgcode))[0];

            fbSymbol.originY = 'center';
            fbSymbol.top = ROW_HEIGHT / 2;

            const fbLabel = new fabric.Text(symbol.label, {
                fontSize: 12,
                fontFamily: DEFAULT_FONT,
                originY: 'center',
                left: ICON_WIDTH + 20,
                top: ROW_HEIGHT / 2
            });

            return new fabric.Group([fbSymbol, fbLabel], { height: ROW_HEIGHT });
        });
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
const promisify = <T, A>(fn: (args: T, cb: Callback<A>) => void): ((args: T) => Promise<A>) => {
    return (args: T) =>
        new Promise(resolve => {
            fn(args, callbackArgs => {
                resolve(callbackArgs);
            });
        });
};

export default ExportV1LegendFixture;
