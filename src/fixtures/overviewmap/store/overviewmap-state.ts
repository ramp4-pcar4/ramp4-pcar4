import type { RampBasemapConfig } from '@/geo/api';

export class OverviewmapState {
    /**
     * The map configuration
     *
     * @type {RampMapConfig}
     * @memberof OverviewmapState
     */
    mapConfig: any = undefined;

    /**
     * A list of basemaps
     *
     * @type {{ [key: string]: RampBasemapConfig }}
     * @memberof OverviewmapState
     */
    basemaps: { [key: string]: RampBasemapConfig } = {};

    /**
     * Initial state of the overview map
     *
     * @type {boolean}
     * @memberof OverviewmapState
     */
    startMinimized = true;

    /**
     * Ratio of the overview map's extent size compared to the main map's extent size
     *
     * @type {number}
     * @memberof OverviewmapState
     */
    expandFactor = 1.5;

    /**
     * Colour of the area border
     *
     * @type {string}
     * @memberof OverviewmapState
     */
    borderColour = '#FF0000';

    /**
     * Width of the area border
     *
     * @type {number}
     * @memberof OverviewmapState
     */
    borderWidth = 1;

    /**
     * Colour of the area rectangle
     *
     * @type {string}
     * @memberof OverviewmapState
     */
    areaColour = '#000000';

    /**
     * Opacity of the area rectangle
     *
     * @type {number}
     * @memberof OverviewmapState
     */
    areaOpacity = 0.25;
}

export interface OverviewmapConfig {
    basemaps: { [key: string]: RampBasemapConfig };
    startMinimized: boolean;
    expandFactor: number;
    borderColour: string;
    borderWidth: number;
    areaColour: string;
    areaOpacity: number;
}
