import { FixtureInstance } from '@/api/internal';
import { useExportStore } from '../store';
import type { ExportConfig } from '../store';
import type { fabric } from 'fabric';
import FileSaver from 'file-saver';

const DEFAULT_WIDTH = 1200;

const GLOBAL_MARGIN = {
    TOP: 40,
    RIGHT: 40,
    BOTTOM: 40,
    LEFT: 40
};

type RenderCallback = (
    canvas: fabric.StaticCanvas,
    fabricObjects: Record<string, fabric.Object>,
    options: {
        panelWidth: number;
        margin: typeof GLOBAL_MARGIN;
        defaultWidth: number;
        fabric: typeof fabric;
    }
) => Promise<void> | void;

export class ExportAPI extends FixtureInstance {
    fcFabric: fabric.StaticCanvas | undefined;
    // download canvas will remain unscaled and only be used for download
    fcFabricDownload: fabric.StaticCanvas | undefined;

    options = {
        runningHeight: 0,
        scale: 1
    };

    // stores the custom render function if provided
    customRendererFunc = undefined as RenderCallback | undefined;

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
    customRenderer(renderCallback: RenderCallback): void {
        this.customRendererFunc = renderCallback;
    }

    /**
     * Returns `ExportConfig` section of the global config file.
     *
     * @readonly
     * @type {ExportConfig}
     * @memberof ExportAPI
     */
    get config(): ExportConfig | undefined {
        return super.config;
    }

    /**
     * Parses the export config JSON snippet from the config file and save to the fixture store.
     *
     * @param {ExportConfig} [exportConfig]
     * @memberof ExportAPI
     */
    _parseConfig(exportConfig?: ExportConfig) {
        if (!exportConfig) return;

        const exportStore = useExportStore(this.$vApp.$pinia);

        exportStore.componentSelectedState = {
            title: exportConfig.title?.selected ?? true,
            map: exportConfig.map?.selected ?? true,
            mapElements: exportConfig.mapElements?.selected ?? true,
            legend: exportConfig.legend?.selected ?? true,
            footnote: exportConfig.footnote?.selected ?? true,
            timestamp: exportConfig.timestamp?.selected ?? true
        };

        exportStore.fileName = exportConfig.fileName || '';

        this.handlePanelWidths(['export']);
        this.handlePanelTeleports(['export']);
    }

    /**
     * Fetches an Export sub fixture
     *
     * @private
     * @param {string} name
     * @returns {ExportSubFixture | undefined}
     * @memberof ExportAPI
     */
    private getSubFixture(name: string): ExportSubFixture | undefined {
        return this.$iApi.fixture.get(name) as ExportSubFixture | undefined;
    }

    /**
     * Creates an export canvas.
     *
     * @param {HTMLCanvasElement} canvas
     * @param {number} panelWidth
     * @returns {Promise<void>}
     * @memberof ExportAPI
     */
    async make(canvas: HTMLCanvasElement, panelWidth: number): Promise<void> {
        const { fabric } = await import('fabric');
        // prevents blurriness <https://stackoverflow.com/questions/47513180/fabricjs-lines-in-group-become-blurry>
        fabric.Object.prototype.objectCaching = false;
        const exportStore = useExportStore(this.$vApp.$pinia);

        // stores the individual fabric objects for use with a custom render function
        const selectedFabricObjects: Record<string, fabric.Object> = {};

        this.fcFabric = new fabric.StaticCanvas(canvas, {
            backgroundColor: '#fff'
        });

        this.fcFabricDownload = new fabric.StaticCanvas(null, {
            backgroundColor: '#fff'
        });

        this.options.runningHeight = 0;

        const selectedState = exportStore.componentSelectedState;

        const exportTitleFixture = this.getSubFixture('export-title');
        const exportMapFixture = this.getSubFixture('export-map');
        const exportScaleBarFixture = this.getSubFixture('export-scalebar');
        const exportNorthArrowFixture = this.getSubFixture('export-northarrow');
        const exportLegendFixture = this.getSubFixture('export-legend');
        const exportFootnoteFixture = this.getSubFixture('export-footnote');
        const exportTimestampFixture = this.getSubFixture('export-timestamp');

        let fbTitle: fabric.Object | undefined;
        let fbMap: fabric.Object | undefined;
        let fbScaleBar: fabric.Object | undefined;
        let fbNorthArrow: fabric.Object | undefined;
        let fbLegend: fabric.Object | undefined;
        let fbFootnote: fabric.Object | undefined;
        let fbTimestamp: fabric.Object | undefined;

        if (selectedState.title && exportTitleFixture) {
            fbTitle = await exportTitleFixture.make({
                /* text: '😸🤖🧙‍♂️🤦‍♀️🎶', */
                top: this.options.runningHeight,
                left: 0,
                originX: 'left',
                width: panelWidth,
                textAlign: 'center'
            });
            this.options.runningHeight += fbTitle.height! + 40;
            selectedFabricObjects.title = fbTitle;
        }

        if (selectedState.map && exportMapFixture) {
            fbMap = await exportMapFixture.make({
                top: this.options.runningHeight
            });

            if (fbTitle) {
                // center title after we know the width of the group
                fbTitle.left = fbMap.width! / 2;
                fbTitle.originX = 'center';
            }

            this.options.runningHeight += fbMap.height! + 40;
            selectedFabricObjects.map = fbMap;
        }

        // title should spread to length of canvas if map isn't rendered
        if (!fbMap && fbTitle) {
            fbTitle.width = DEFAULT_WIDTH;
        }

        this.options.scale = panelWidth / ((fbMap?.width ?? DEFAULT_WIDTH) + GLOBAL_MARGIN.LEFT + GLOBAL_MARGIN.RIGHT);

        if (selectedState.mapElements && exportScaleBarFixture) {
            fbScaleBar = await exportScaleBarFixture.make({
                top: this.options.runningHeight,
                left: 0
            });
            this.options.runningHeight += fbScaleBar.height! + 40;
            selectedFabricObjects.scaleBar = fbScaleBar;

            if (exportNorthArrowFixture) {
                // keep it inline with the scale bar.
                fbNorthArrow = await exportNorthArrowFixture.make({
                    top: fbScaleBar.top,
                    left: panelWidth / this.options.scale
                });

                // adjust position for height and width so it is properly centered
                fbNorthArrow.top! += fbNorthArrow.height! / 2 - 20;
                fbNorthArrow.left! += -fbNorthArrow.width! * 2;

                selectedFabricObjects.northArrow = fbNorthArrow;
            }
        }

        if (selectedState.legend && exportLegendFixture) {
            fbLegend = await exportLegendFixture.make({
                width: exportLegendFixture.config?.columnWidth ?? fbMap?.width ?? DEFAULT_WIDTH
            });
            fbLegend.top = this.options.runningHeight;
            this.options.runningHeight += fbLegend.height!;
            selectedFabricObjects.legend = fbLegend;
        }

        if (selectedState.timestamp && exportTimestampFixture) {
            fbTimestamp = await exportTimestampFixture.make({
                top: this.options.runningHeight + 40,
                width: panelWidth * 1.5 // Magic number 1.5 prevents unnecessary linebreaks when there's still space
            });

            this.options.runningHeight +=
                !selectedState.footnote || !exportFootnoteFixture ? fbTimestamp.height! + 40 : fbTimestamp.height! + 20;
            selectedFabricObjects.timestamp = fbTimestamp;
        }

        if (selectedState.footnote && exportFootnoteFixture) {
            fbFootnote = await exportFootnoteFixture.make({
                top: this.options.runningHeight - 2.5, // Magic number 2.5 prevents weird vertical offset between timestamp/footer
                left: panelWidth / this.options.scale + 40
            });

            // Extra width to prevent slight overlaps between timestamp and footnote
            const BUFFER = 30;

            // First determine if timestamp exists
            if (selectedState.timestamp && exportTimestampFixture) {
                // CASE: Timestamp exists. Detect if the footnote overlaps with the timestamp
                // If they overlap, put footnote on next line; else keep side-by-side
                if (
                    panelWidth - (selectedFabricObjects.timestamp as fabric.Textbox).getMinWidth() <=
                    (fbFootnote as fabric.Textbox).getMinWidth() + BUFFER
                ) {
                    // CASE: Overlap

                    fbFootnote.top! += 30;
                    fbFootnote.left! = 0;
                    fbFootnote.originX! = 'left';
                    this.options.runningHeight += 20;
                } else {
                    // CASE: No overlap

                    fbFootnote.left! += -fbFootnote.width! * 2;
                }
            } else {
                // CASE: Timestamp doesn't exist

                fbFootnote.top! += 20;
                fbFootnote.left! += -fbFootnote.width! * 2;
                this.options.runningHeight += 20;
            }

            this.options.runningHeight += fbFootnote.height!;
            selectedFabricObjects.footnote = fbFootnote;
        }

        if (this.customRendererFunc) {
            this.fcFabric.setWidth(panelWidth);
            const options = {
                panelWidth,
                margin: GLOBAL_MARGIN,
                defaultWidth: DEFAULT_WIDTH,
                fabric: fabric
            };

            await this.customRendererFunc(this.fcFabric, selectedFabricObjects, options);

            this.fcFabric.renderAll();

            this.fcFabric.clone((clonedCanvas: fabric.StaticCanvas) => {
                this.fcFabricDownload = clonedCanvas;
                this.fcFabricDownload.setDimensions({
                    width: this.fcFabric?.getWidth() ?? panelWidth,
                    height: this.fcFabric!.getHeight()!
                });
                this.fcFabricDownload.renderAll();
            });
        } else {
            const fbGroup = new fabric.Group(Object.values(selectedFabricObjects), {
                top: GLOBAL_MARGIN.TOP * this.options.scale,
                left: GLOBAL_MARGIN.LEFT * this.options.scale
            });

            // clone items for download canvas
            const fbGroupDownload: fabric.Group = await new Promise(resolve => {
                fbGroup!.clone((g: fabric.Group) => {
                    resolve(g);
                });
            });
            fbGroupDownload.top = GLOBAL_MARGIN.TOP;
            fbGroupDownload.left = GLOBAL_MARGIN.LEFT;
            this.fcFabricDownload.add(fbGroupDownload);
            // scale down items for panel canvas
            fbGroup.scale(this.options.scale);
            this.fcFabric.add(fbGroup);

            this.fcFabric.setDimensions({
                width: panelWidth,
                height: (this.options.runningHeight + GLOBAL_MARGIN.TOP + GLOBAL_MARGIN.BOTTOM) * this.options.scale
            });
            this.fcFabric.renderAll();

            this.fcFabricDownload!.setDimensions({
                width: (fbMap?.width ?? DEFAULT_WIDTH) + GLOBAL_MARGIN.LEFT + GLOBAL_MARGIN.RIGHT,
                height: this.options.runningHeight + GLOBAL_MARGIN.TOP + GLOBAL_MARGIN.BOTTOM
            });
            this.fcFabricDownload.renderAll();
        }
    }

    export(): void {
        if (!this.fcFabric) {
            return;
        }

        // use the filename from the config, or generate a default filename
        const now = new Date();
        const fileName: string =
            this.config?.fileName ||
            `map-carte - ${now.getFullYear()}-${now.getMonth()}-${now.getDay()}, ${now.getHours()}_${now.getMinutes()}`;

        FileSaver.saveAs(
            this.fcFabricDownload!.toDataURL({
                format: 'png',
                quality: 1
            }),
            `${fileName}.png`
        );
    }
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
