import { FixtureInstance } from '../../../api/internal';
import { ExportConfig } from '../store';
import { fabric } from 'fabric';
declare const GLOBAL_MARGIN: {
    TOP: number;
    RIGHT: number;
    BOTTOM: number;
    LEFT: number;
};
type RenderCallback = (canvas: fabric.StaticCanvas, fabricObjects: Record<string, fabric.Object>, options: {
    panelWidth: number;
    margin: typeof GLOBAL_MARGIN;
    defaultWidth: number;
    fabric: typeof fabric;
}) => Promise<void> | void;
export declare class ExportAPI extends FixtureInstance {
    fcFabric: fabric.StaticCanvas | undefined;
    fcFabricDownload: fabric.StaticCanvas | undefined;
    options: {
        runningHeight: number;
        scale: number;
    };
    customRendererFunc: RenderCallback | undefined;
    /**
     * Allows for a custom render callback function to be passed in to render the export canvas.
     * The function should accept the blank ramp canvas as its first parameter and use that canvas to draw on.
     * The width of the canvas is already set to the panel width, so the function only needs to set the height.
     *
     * Individual export elements like the map or the legend can be accessed from the `fabricObjects` object as the second parameter.
     * You can pick and chose which elements to add to the canvas, or modify them as needed. You can also add custom elements to the canvas.
     *
     * Finally, the `options` object is passed in as the third parameter. This object contains useful information such as the panel width, the default margins, the default canvas width, and the fabric object itself.
     *
     * Some canvas operations are asynchronous like fetching an image or cloning objects. In these cases you should return a promise so ramp waits for your operations to complete, otherwise returning nothing (void) is fine.
     *
     * ramp uses Fabric.js instead of the native canvas API. Read more about Fabric.js here: [Fabric.js](http://fabricjs.com/)
     *
     * @param {RenderCallback} renderCallback
     * @example myWatermarkingRenderer((canvas, fabricObjects, options) => {
     *   const watermark = new fabric.Text('Watermark', { ... });
     *   fabricObjects.map.addWithUpdate(watermark);
     *   canvas.add(fabricObjects.map);
     *   canvas.setHeight(1000);
     * });
     *
     * rInstance.fixture.isLoaded('export').then(() => {
     *   rInstance.fixture.get('export').customRenderer(myWatermarkingRenderer);
     * });
     * @memberof ExportAPI
     */
    customRenderer(renderCallback: RenderCallback): void;
    /**
     * Returns `ExportConfig` section of the global config file.
     *
     * @readonly
     * @type {ExportConfig}
     * @memberof ExportAPI
     */
    get config(): ExportConfig | undefined;
    /**
     * Parses the export config JSON snippet from the config file and save to the fixture store.
     *
     * @param {ExportConfig} [exportConfig]
     * @memberof ExportAPI
     */
    _parseConfig(exportConfig?: ExportConfig): void;
    /**
     * Fetches an Export sub fixture
     *
     * @private
     * @param {string} name
     * @returns {ExportSubFixture | undefined}
     * @memberof ExportAPI
     */
    private getSubFixture;
    /**
     * Creates an export canvas.
     *
     * @param {HTMLCanvasElement} canvas
     * @param {number} panelWidth
     * @returns {Promise<void>}
     * @memberof ExportAPI
     */
    make(canvas: HTMLCanvasElement, panelWidth: number): Promise<void>;
    export(): void;
}
/**
 * A common interface for Export sub fixtures.
 *
 * @export
 * @interface ExportSubFixture
 * @extends {FixtureInstance}
 */
export interface ExportSubFixture extends FixtureInstance {
    /**
     * Creates an export image and returns it.
     *
     * @param {*} [options] fixture config options or any other options that a sub fixture accepts
     * @returns {Promise<fabric.Object>}
     * @memberof ExportSubFixture
     */
    make(options?: any): Promise<fabric.Object>;
}
export {};
