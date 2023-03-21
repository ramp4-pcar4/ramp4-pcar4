import type { RampBasemapConfig, RampMapConfig } from '@/geo/api';

export interface OverviewmapState {
    /**
     * The map configuration
     *
     * @type {RampMapConfig}
     * @memberof OverviewmapState
     */
    mapConfig: RampMapConfig;

    /**
     * A list of basemaps
     *
     * @type {{ [key: string]: RampBasemapConfig }}
     * @memberof OverviewmapState
     */
    basemaps: { [key: string]: RampBasemapConfig };

    /**
     * Initial state of the overview map
     *
     * @type {boolean}
     * @memberof OverviewmapState
     */
    startMinimized: boolean;

    /**
     * Ratio of the overview map's extent size compared to the main map's extent size
     *
     * @type {number}
     * @memberof OverviewmapState
     */
    expandFactor: number;

    /**
     * Colour of the area border
     *
     * @type {string}
     * @memberof OverviewmapState
     */
    borderColour: string;

    /**
     * Width of the area border
     *
     * @type {number}
     * @memberof OverviewmapState
     */
    borderWidth: number;

    /**
     * Colour of the area rectangle
     *
     * @type {string}
     * @memberof OverviewmapState
     */
    areaColour: string;

    /**
     * Opacity of the area rectangle
     *
     * @type {number}
     * @memberof OverviewmapState
     */
    areaOpacity: number;
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
