import { FixtureInstance } from '@/api/internal';
import { useExportStore } from '../store';
import type { ExportConfig } from '../store';

import { fabric } from 'fabric';
// prevents blurriness <https://stackoverflow.com/questions/47513180/fabricjs-lines-in-group-become-blurry>
fabric.Object.prototype.objectCaching = false;

import FileSaver from 'file-saver';

const DEFAULT_WIDTH = 1200;

const GLOBAL_MARGIN = {
    TOP: 40,
    RIGHT: 40,
    BOTTOM: 40,
    LEFT: 40
};

export class ExportAPI extends FixtureInstance {
    fcFabric: fabric.StaticCanvas | undefined;
    // download canvas will remain unscaled and only be used for download
    fcFabricDownload: fabric.StaticCanvas | undefined;

    options = {
        runningHeight: 0,
        scale: 1
    };

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
    }

    /**
     * Fetches an Export sub fixture
     *
     * @private
     * @param {string} name
     * @returns {ExportSubFixture}
     * @memberof ExportAPI
     */
    private getSubFixture(name: string): ExportSubFixture {
        return this.$iApi.fixture.get(name);
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
        const exportStore = useExportStore(this.$vApp.$pinia);
        this.fcFabric = new fabric.StaticCanvas(canvas, {
            backgroundColor: '#fff'
        });

        this.fcFabricDownload = new fabric.StaticCanvas(null, {
            backgroundColor: '#fff'
        });

        this.options.runningHeight = 0;

        const selectedState = exportStore.componentSelectedState;

        const exportTitleFixture: ExportSubFixture =
            this.getSubFixture('export-title');
        const exportMapFixture: ExportSubFixture =
            this.getSubFixture('export-map');
        const exportScaleBarFixture: ExportSubFixture =
            this.getSubFixture('export-scalebar');
        const exportNorthArrowFixture: ExportSubFixture =
            this.getSubFixture('export-northarrow');
        const exportLegendFixture: ExportSubFixture =
            this.getSubFixture('export-legend');

        let fbTitle: fabric.Object | undefined;
        let fbMap: fabric.Object | undefined;
        let fbScaleBar: fabric.Object | undefined;
        let fbNorthArrow: fabric.Object | undefined;
        let fbLegend: fabric.Object | undefined;
        const selectedExportComponents: Array<fabric.Object> = [];

        if (selectedState.title) {
            fbTitle = await exportTitleFixture.make({
                /* text: '😸🤖🧙‍♂️🤦‍♀️🎶', */
                top: this.options.runningHeight,
                left: 0,
                originX: 'left',
                width: panelWidth,
                textAlign: 'center'
            });
            this.options.runningHeight += fbTitle.height! + 40;
            selectedExportComponents.push(fbTitle);
        }

        if (selectedState.map) {
            fbMap = await exportMapFixture.make({
                top: this.options.runningHeight
            });

            if (fbTitle) {
                // center title after we know the width of the group
                fbTitle.left = fbMap.width! / 2;
                fbTitle.originX = 'center';
            }

            this.options.runningHeight += fbMap.height! + 40;
            selectedExportComponents.push(fbMap);
        }

        // title should spread to length of canvas if map isn't rendered
        if (!fbMap && fbTitle) {
            fbTitle.width = DEFAULT_WIDTH;
        }

        this.options.scale =
            panelWidth /
            ((fbMap?.width ?? DEFAULT_WIDTH) +
                GLOBAL_MARGIN.LEFT +
                GLOBAL_MARGIN.RIGHT);

        if (selectedState.mapElements) {
            fbScaleBar = await exportScaleBarFixture.make({
                top: this.options.runningHeight,
                left: 0
            });
            this.options.runningHeight += fbScaleBar.height! + 40;
            selectedExportComponents.push(fbScaleBar);

            // keep it inline with the scale bar if scalebar is selected
            fbNorthArrow = await exportNorthArrowFixture.make({
                top: fbScaleBar.top,
                left: panelWidth / this.options.scale
            });

            // adjust position for height and width so it is properly centered
            fbNorthArrow.top! += fbNorthArrow.height! / 2 - 20;
            fbNorthArrow.left! += -fbNorthArrow.width! * 2;

            selectedExportComponents.push(fbNorthArrow);
        }

        if (selectedState.legend) {
            fbLegend = await exportLegendFixture.make({
                width:
                    exportLegendFixture.config?.columnWidth ??
                    fbMap?.width ??
                    DEFAULT_WIDTH
            });
            fbLegend.top = this.options.runningHeight;
            this.options.runningHeight += fbLegend.height!;
            selectedExportComponents.push(fbLegend);
        }

        const fbGroup = new fabric.Group(selectedExportComponents, {
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
            height:
                (this.options.runningHeight +
                    GLOBAL_MARGIN.TOP +
                    GLOBAL_MARGIN.BOTTOM) *
                this.options.scale
        });
        this.fcFabric.renderAll();

        this.fcFabricDownload!.setDimensions({
            width:
                (fbMap?.width! ?? DEFAULT_WIDTH) +
                GLOBAL_MARGIN.LEFT +
                GLOBAL_MARGIN.RIGHT,
            height:
                this.options.runningHeight +
                GLOBAL_MARGIN.TOP +
                GLOBAL_MARGIN.BOTTOM
        });
        this.fcFabricDownload.renderAll();
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
