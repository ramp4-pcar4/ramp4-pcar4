import { APIScope, BaseRenderer, InstanceAPI } from '../../api/internal';
import { Attributes, FieldDefinition, LegendSymbology } from '../api';
import { EsriRenderer } from '../esri';
export declare class SymbologyAPI extends APIScope {
    constructor(iApi: InstanceAPI);
    protected SIMPLE: string;
    protected UNIQUE_VALUE: string;
    protected CLASS_BREAKS: string;
    protected NONE: string;
    protected CONTAINER_SIZE: number;
    protected CONTENT_SIZE: number;
    protected CONTENT_IMAGE_SIZE: number;
    protected CONTAINER_CENTER: number;
    protected CONTENT_PADDING: number;
    /**
     * Given feature attributes, return the image URL for that feature/graphic object.
     *
     * @method getGraphicIcon
     * @param {Object} attributes object of feature attribute key value pairs
     * @param {Object} renderer an enhanced renderer (see function enhanceRenderer)
     * @return {String} svgcode Url to the features symbology image
     */
    getGraphicIcon(attributes: Attributes, renderer: BaseRenderer): string;
    /**
     * Given feature attributes, return the symbol for that feature/graphic object.
     *
     * @method getGraphicSymbol
     * @param {Object} attributes object of feature attribute key value pairs
     * @param {Object} renderer an enhanced renderer (see function enhanceRenderer)
     * @return {Object} an ESRI Symbol object in server format
     */
    getGraphicSymbol(attributes: object, renderer: BaseRenderer): __esri.Symbol;
    makeRenderer(esriRenderer: EsriRenderer, fields: Array<FieldDefinition>, falseRenderer?: boolean): BaseRenderer;
    /**
     * Generates svg symbology for WMS layers.
     * @function generateWMSSymbology
     * @param {String} name label for the symbology item (it's not used right now, but is required to be consistent with other symbology generating functions)
     * @param {String} imageUri url or dataUrl of the legend image
     * @return {Promise} a promise resolving with symbology svg code and its label
     */
    generateWMSSymbology(imageUri: string): Promise<object>;
    /**
     * Converts a config-supplied list of symbology to the format used by layer records.
     *
     * @private
     * @function _listToSymbology
     * @param {(image: string) => Promise<string>} conversionFunction a conversion function to wrap the supplied image into an image or an icon style symbology container
     * @param {Array} list a list of config-supplied symbology items in the form of [ { text: <String>, image: <String> }, ... ] wher `image` can be dataURL or an actual url
     * @return {Array} an array of converted symbology symbols in the form of [ { name: <String>, image: <String>, svgcode: <String> }, ... ]; items will be populated async as conversions are done
     */
    private listToSymbology;
    listToIconSymbology(list: Array<any>): Array<any>;
    listToImageSymbology(list: Array<any>): Array<any>;
    /**
     * Renders a supplied image as an image-style symbology item (preserving the true image dimensions).
     *
     * @function renderSymbologyImage
     * @param {String} imageUri a image dataUrl or a regular url
     * @param {Object} draw [optional=null] an svg container to draw the image on; if not supplied, a new one is created
     */
    renderSymbologyImage(imageUri: string, draw?: any): Promise<string>;
    /**
     * Renders a supplied image as an icon-style symbology item (fitting an image inside an icon container, usually 32x32 pixels).
     *
     * @function renderSymbologyIcon
     * @param {String} imageUri a image dataUrl or a regular url
     * @param {Object} draw [optional=null] an svg container to draw the image on; if not supplied, a new one is created
     */
    renderSymbologyIcon(imageUri: string, draw?: any): Promise<string>;
    /**
     * Generates a placeholder symbology graphic.
     * @function generatePlaceholderSymbology
     * @private
     * @param  {String} name label symbology label
     * @param  {String} colour colour to use in the graphic
     * @return {Object} symbology svg code and its label
     */
    generatePlaceholderSymbology(name: string, colour?: string): any;
    generateBlankSymbology(): Promise<string>;
    /**
     * Generate an SVG string for an ESRI symbol.
     * @private
     * @param  {Object} symbol an ESRI symbol object in JS API format
     * @return {Promise} resolves to an SVG string representing the symbol
     */
    private symbolToSvg;
    /**
     * Renders a specified image on an svg element. This is a helper function that wraps around async `draw.image` call in the svg library.
     *
     * @function svgDrawImage
     * @private
     * @param {Object} draw svg element to render the image onto
     * @param {String} imageUri image url or dataURL of the image to render
     * @param {Number} width [optional = 0] width of the image
     * @param {Number} height [optional = 0] height of the image
     * @param {Boolean} crossOrigin [optional = true] specifies if the image should be loaded as crossOrigin
     * @return {Promise} promise resolving with the loaded image and its loader object (see svg.js http://documentup.com/wout/svg.js#image for details)
     */
    svgDrawImage(draw: any, imageUri: string, width?: number, height?: number, crossOrigin?: boolean): Promise<any>;
    /**
     * Fits svg element in the size specified
     * @param {Object} element svg element to fit
     * @param {Number} CONTAINER_SIZE width/height of a container to fit the element into
     */
    fitInto(element: any, CONTAINER_SIZE: number): void;
    /**
     * Generate a legend object based on an ESRI renderer.
     *
     * @param  {Object} renderer an ESRI renderer object in server JSON form
     * @return {Array} list of legend symbologies
     */
    rendererToLegend(renderer: BaseRenderer): Array<LegendSymbology>;
    /**
     * Returns the legend information of an ESRI map service.
     *
     * @function getMapServerLegend
     * @private
     * @param  {String} layerUrl service url (root service, not indexed endpoint)
     * @returns {Promise} resolves in an array of legend data in arcgis server json format
     *
     */
    private getMapServerLegend;
    /**
     * Our symbology engine works off of renderers. When dealing with layers with no renderers,
     * we need to take server-side legend and convert it to a fake renderer, which lets us
     * leverage all the existing symbology code.
     *
     * @function mapServerLegendToRenderer
     * @private
     * @param {Object} serverLegend legend json from an esri map server
     * @param {Integer} layerIndex  the index of the layer in the legend we are interested in
     * @returns {Promise<BaseRenderer>} resolves with a fake unique value renderer based off the legend
     *
     */
    private mapServerLegendToRenderer;
    /**
     * Our symbology engine works off of renderers. When dealing with layers with no renderers,
     * we need to take server-side legend and convert it to a fake renderer, which lets us
     * leverage all the existing symbology code.
     *
     * Same as mapServerLegendToRenderer function but combines all layer renderers.
     *
     * @function mapServerLegendToRendererAll
     * @private
     * @param {Object} serverLegend legend json from an esri map server
     * @returns {Promise<BaseRenderer>} resolves with a fake unique value renderer based off the legend
     */
    private mapServerLegendToRendererAll;
    /**
     * Orchestrator function that will:
     * - Fetch a legend from an esri map server
     * - Extract legend for a specific sub layer
     * - Convert server legend to a temporary renderer
     * - Convert temporary renderer to a viewer-formatted legend (return value)
     *
     * @function mapServerToLocalLegend
     * @param {String}    mapServerUrl  service url (root service, not indexed endpoint)
     * @param {Integer}   [layerIndex]  the index of the layer in the legend we are interested in. If not provided, all layers will be collapsed into a single legend
     * @returns {Promise} resolves in a viewer-compatible legend for the given server and layer index
     *
     */
    mapServerToLocalLegend(mapServerUrl: string, layerIndex?: number | string | undefined): Promise<Array<LegendSymbology>>;
}
