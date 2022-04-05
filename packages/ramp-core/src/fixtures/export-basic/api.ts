import { FixtureInstance } from '@/api/internal';

import { fabric } from 'fabric';
// prevents blurriness <https://stackoverflow.com/questions/47513180/fabricjs-lines-in-group-become-blurry>
fabric.Object.prototype.objectCaching = false;

import FileSaver from 'file-saver';

const GLOBAL_MARGIN = {
    TOP: 40,
    RIGHT: 40,
    BOTTOM: 40,
    LEFT: 40
};

export class ExportBasicAPI extends FixtureInstance {
    fcFabric: fabric.StaticCanvas | null = null;
    // download canvas will remain unscaled and only be used for download
    fcFabricDownload: fabric.StaticCanvas | null = null;

    options = {
        runningHeight: 0,
        scale: 1
    };

    /**
     * Fetches an ExportBasic sub fixture
     *
     * @private
     * @param {string} name
     * @returns {ExportBasicSubFixture}
     * @memberof ExportBasicAPI
     */
    private getSubFixture(name: string): ExportBasicSubFixture {
        return this.$iApi.fixture.get(name);
    }

    /**
     * Creates an export canvas.
     *
     * @param {HTMLCanvasElement} canvas
     * @param {number} panelWidth
     * @returns {Promise<void>}
     * @memberof ExportBasicAPI
     */
    async make(canvas: HTMLCanvasElement, panelWidth: number): Promise<void> {
        this.fcFabric = new fabric.StaticCanvas(canvas, {
            backgroundColor: '#fff'
        });

        this.fcFabricDownload = new fabric.StaticCanvas(null, {
            backgroundColor: '#fff'
        });

        this.options.runningHeight = 0;

        const fbTitle = await this.getSubFixture('export-basic-title').make({
            /* text: '😸🤖🧙‍♂️🤦‍♀️🎶', */ top: this.options.runningHeight
        });
        this.options.runningHeight += fbTitle.height! + 40;

        const fbMap = await this.getSubFixture('export-basic-map').make({
            top: this.options.runningHeight
        });
        fbTitle.left = fbMap.width! / 2; // center title after we know the width of the group
        this.options.runningHeight += fbMap.height! + 40;

        this.options.scale =
            panelWidth /
            (fbMap.width! + GLOBAL_MARGIN.LEFT + GLOBAL_MARGIN.RIGHT);

        const fbLegend = await this.getSubFixture('export-basic-legend').make({
            width: fbMap.width
        });

        fbLegend.top = this.options.runningHeight;
        this.options.runningHeight += fbLegend.height!;

        const fbGroup = new fabric.Group([fbTitle, fbMap, fbLegend], {
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
            width: fbMap.width! + GLOBAL_MARGIN.LEFT + GLOBAL_MARGIN.RIGHT,
            height:
                this.options.runningHeight +
                GLOBAL_MARGIN.TOP +
                GLOBAL_MARGIN.BOTTOM
        });
        this.fcFabricDownload.renderAll();
    }

    export(): void {
        // TODO: make file name customizable
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
 * A common interface for ExportBasic sub fixtures.
 *
 * @export
 * @interface ExportBasicSubFixture
 * @extends {FixtureInstance}
 */
export interface ExportBasicSubFixture extends FixtureInstance {
    /**
     * Creates an export image and returns it.
     *
     * @param {*} [options] fixture config options or any other options that a sub fixture accepts
     * @returns {Promise<fabric.Object>}
     * @memberof ExportBasicSubFixture
     */
    make(options?: any): Promise<fabric.Object>;
}
