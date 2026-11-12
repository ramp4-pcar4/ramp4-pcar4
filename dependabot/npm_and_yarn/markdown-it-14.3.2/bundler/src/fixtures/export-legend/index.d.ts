import { FixtureInstance } from '../../api/internal';
import { ExportSubFixture } from '../export/api/export';
import { fabric } from 'fabric';
declare class ExportLegendFixture extends FixtureInstance implements ExportSubFixture {
    get config(): any;
    make(options: any): Promise<fabric.Group>;
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
    private _makeColumns;
    /**
     * Create segments of the export image based on the provided layers and layer configs.
     *
     * @private
     * @param {LayerInstance[]} layers
     * @param {RampLayerConfig[]} layerConfigs
     * @returns {Promise<Segment>[]}
     * @memberof ExportLegendFixture
     */
    private _makeSegments;
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
    private _makeSegmentChunks;
    /**
     * Creates layer entry symbology based on the provided symbology stack.
     *
     * @private
     * @param {LegendSymbology[]} symbologyStack
     * @returns {Promise<fabric.Group>[]}
     * @memberof ExportLegendFixture
     */
    private _makeChunkItems;
    /**
     * Gets flattened array of ids from layer tree
     *
     * @private
     * @param {TreeNode} node
     * @returns {number[]}
     * @memberof ExportLegendFixture
     */
    private _getLayerTreeIds;
}
export default ExportLegendFixture;
