import { SpatialReference, Extent } from '@/geo/api';
import type { RampExtentSetConfig } from '@/geo/api';
export class ExtentSet {
    id: string;
    sr: SpatialReference;
    private _defaultExtent: Extent;
    private _fullExtent: Extent | undefined;
    private _maximumExtent: Extent | undefined;

    constructor(
        id: string,
        defaultExtent: Extent,
        fullExtent: Extent | undefined = undefined,
        maximumExtent: Extent | undefined = undefined
    ) {
        this.id = id;
        this.sr = defaultExtent.sr.clone();
        this._defaultExtent = defaultExtent.clone();
        this._fullExtent = fullExtent?.clone();
        this._maximumExtent = maximumExtent?.clone();

        // quick extent spatial reference sanity check
        if (fullExtent && !fullExtent.sr.isEqual(this.sr)) {
            console.error(
                `Full extent provided in extent set has a mismatching spatial reference: ${fullExtent.sr}`
            );
        }
        if (maximumExtent && !maximumExtent.sr.isEqual(this.sr)) {
            console.error(
                `Maximum extent provided in extent set has a mismatching spatial reference: ${maximumExtent.sr}`
            );
        }
    }

    get defaultExtent(): Extent {
        return this._defaultExtent;
    }

    set defaultExtent(extent: Extent) {
        this._defaultExtent = extent.clone();
    }

    /**
     * @return {Extent} the full extent (returns default extent if not provided)
     */
    get fullExtent(): Extent {
        if (!this._fullExtent) {
            return this.defaultExtent;
        }
        return this._fullExtent;
    }

    set fullExtent(extent: Extent) {
        this._fullExtent = extent.clone();
    }

    /**
     * @return {Extent} the maximum extent (returns full extent if not provided)
     */
    get maximumExtent(): Extent {
        if (!this._maximumExtent) {
            return this.fullExtent;
        }
        return this._maximumExtent;
    }

    set maximumExtent(extent: Extent) {
        this._maximumExtent = extent.clone();
    }

    /**
     * Parses a RAMP API Extent Set config into an ExtentSet object
     * @param {RampExtentSetConfig} extentSetConfig the extent set config
     * @returns {ExtentSet} the parsed ExtentSet object
     */
    static fromConfig(extentSetConfig: RampExtentSetConfig): ExtentSet {
        return new ExtentSet(
            extentSetConfig.id,
            Extent.fromConfig(
                `${extentSetConfig.id}-extent-default`,
                extentSetConfig.default
            ),
            extentSetConfig.full !== undefined
                ? Extent.fromConfig(
                      `${extentSetConfig.id}-extent-full`,
                      extentSetConfig.full
                  )
                : undefined,
            extentSetConfig.maximum !== undefined
                ? Extent.fromConfig(
                      `${extentSetConfig.id}-extent-maximum`,
                      extentSetConfig.maximum
                  )
                : undefined
        );
    }

    clone(): ExtentSet {
        return new ExtentSet(
            this.id,
            this._defaultExtent,
            this._fullExtent,
            this._maximumExtent
        );
    }
}
