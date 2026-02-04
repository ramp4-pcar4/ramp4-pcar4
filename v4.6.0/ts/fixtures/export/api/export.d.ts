import { FixtureInstance } from '@/api/internal';
import type { ExportConfig } from '../store';
import { fabric } from 'fabric';
export declare class ExportAPI extends FixtureInstance {
    fcFabric: fabric.StaticCanvas | undefined;
    fcFabricDownload: fabric.StaticCanvas | undefined;
    options: {
        runningHeight: number;
        scale: number;
    };
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
