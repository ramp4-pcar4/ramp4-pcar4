interface OffScaleStatus {
    offScale: boolean;
    zoomIn: boolean;
}
export declare class ScaleSet {
    minScale: number;
    maxScale: number;
    constructor(minScale?: number, maxScale?: number);
    /**
     * Indicates if the feature class is not visible at the given scale,
     * and if so, if we need to zoom in to see it or zoom out
     *
     * @function isOffScale
     * @param {Integer}  mapScale the scale to test against
     * @returns {Object} has boolean properties `offScale` and `zoomIn`
     */
    isOffScale(mapScale: number): OffScaleStatus;
}
export {};
