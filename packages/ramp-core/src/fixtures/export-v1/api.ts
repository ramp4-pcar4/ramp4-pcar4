import { FixtureInstance } from '@/api/internal';

import { fabric } from 'fabric';

import FileSaver from 'file-saver';

const GLOBAL_MARGIN = {
    TOP: 20,
    RIGHT: 20,
    BOTTOM: 20,
    LEFT: 20
};

export class ExportV1API extends FixtureInstance {
    fcFabric: fabric.StaticCanvas | null = null;

    options = {
        runningHeight: 0,
        scale: 1
    };

    /**
     * Fetches an ExportV1 sub fixture
     *
     * @private
     * @param {string} name
     * @returns {ExportV1SubFixture}
     * @memberof ExportV1API
     */
    private getSubFixture(name: string): ExportV1SubFixture {
        return this.$iApi.fixture.get(name);
    }

    /**
     * Creates an export canvas.
     *
     * @param {HTMLCanvasElement} canvas
     * @param {number} panelWidth
     * @returns {Promise<void>}
     * @memberof ExportV1API
     */
    async make(canvas: HTMLCanvasElement, panelWidth: number): Promise<void> {
        this.fcFabric = new fabric.StaticCanvas(canvas, {
            backgroundColor: '#fff'
        });

        this.options.runningHeight = 0;

        const fbTitle = await this.getSubFixture('export-v1-title').make({
            /* text: '😸🤖🧙‍♂️🤦‍♀️🎶', */ top: this.options.runningHeight
        });
        this.options.runningHeight += fbTitle.height! + 40;

        const fbMap = await this.getSubFixture('export-v1-map').make({
            top: this.options.runningHeight
        });
        fbTitle.left = fbMap.width! / 2; // center title after we know the width of the group
        this.options.runningHeight += fbMap.height! + 40;

        this.options.scale =
            (panelWidth - GLOBAL_MARGIN.LEFT - GLOBAL_MARGIN.RIGHT) /
            fbMap.width!;

        const fbLegend = await this.getSubFixture('export-v1-legend').make({
            width: fbMap.width
        });

        fbLegend.top = this.options.runningHeight;
        this.options.runningHeight += fbLegend.height!;

        const fbGroup = new fabric.Group([fbTitle, fbMap, fbLegend], {
            top: GLOBAL_MARGIN.TOP,
            left: GLOBAL_MARGIN.LEFT,
            objectCaching: false // prevents blurriness <https://stackoverflow.com/questions/47513180/fabricjs-lines-in-group-become-blurry>
        });

        fbGroup.scale(this.options.scale);
        this.fcFabric.add(fbGroup);

        this.fcFabric.setDimensions({
            width: panelWidth,
            height:
                this.options.runningHeight * this.options.scale +
                GLOBAL_MARGIN.TOP +
                GLOBAL_MARGIN.BOTTOM
        });
        this.fcFabric.renderAll();

        // TODO: to make the best possible canvas quality, make two canvases, scale down and show one; keep other for export
        // if scale ratio is too small, the images comes out a bit blurry; using two separate canvases will avoid this problem
        // rescale up the canvas
        /* fbGroup.scale(1);
        fcFabric.setDimensions({
            width: panelWidth / this.options.scale - GLOBAL_MARGIN.LEFT - GLOBAL_MARGIN.RIGHT,
            height: this.options.runningHeight + GLOBAL_MARGIN.TOP + GLOBAL_MARGIN.BOTTOM
        }); */
    }

    export(): void {
        // TODO: make file name customizable
        if (!this.fcFabric) {
            return;
        }

        FileSaver.saveAs(
            this.fcFabric.toDataURL({
                format: 'png',
                quality: 1,
                multiplier: 1 / this.options.scale
            }),
            'export-image.png'
        );
    }
}

/**
 * A common interface for ExportV1 sub fixtures.
 *
 * @export
 * @interface ExportV1SubFixture
 * @extends {FixtureInstance}
 */
export interface ExportV1SubFixture extends FixtureInstance {
    /**
     * Creates an export image and returns it.
     *
     * @param {*} [options] fixture config options or any other options that a sub fixture accepts
     * @returns {Promise<fabric.Object>}
     * @memberof ExportV1SubFixture
     */
    make(options?: any): Promise<fabric.Object>;
}
