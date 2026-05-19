import { SpatialReference, Extent, RampExtentSetConfig } from '..';
export declare class ExtentSet {
    id: string;
    sr: SpatialReference;
    private _defaultExtent;
    private _fullExtent;
    private _maximumExtent;
    constructor(id: string, defaultExtent: Extent, fullExtent?: Extent | undefined, maximumExtent?: Extent | undefined);
    get defaultExtent(): Extent;
    set defaultExtent(extent: Extent);
    /**
     * @return {Extent} the full extent (returns default extent if not provided)
     */
    get fullExtent(): Extent;
    set fullExtent(extent: Extent);
    /**
     * @return {Extent} the maximum extent (returns full extent if not provided)
     */
    get maximumExtent(): Extent;
    set maximumExtent(extent: Extent);
    /**
     * Parses a RAMP API Extent Set config into an ExtentSet object
     * @param {RampExtentSetConfig} extentSetConfig the extent set config
     * @returns {ExtentSet} the parsed ExtentSet object
     */
    static fromConfig(extentSetConfig: RampExtentSetConfig): ExtentSet;
    clone(): ExtentSet;
}
