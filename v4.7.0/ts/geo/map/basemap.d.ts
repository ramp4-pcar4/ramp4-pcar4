import type { Attribution, RampBasemapConfig } from '@/geo/api';
import { EsriBasemap } from '@/geo/esri';
export declare class Basemap {
    esriBasemap: EsriBasemap;
    readonly config: RampBasemapConfig;
    constructor(rampConfig: RampBasemapConfig);
    /**
     * Returns the tile schema id from the config
     */
    get tileSchemaId(): string;
    /**
     * Returns the basemap id from the config
     */
    get id(): string;
    /**
     * Get this basemap's name from the config
     */
    get name(): string | undefined;
    /**
     * Set this basemap's name
     */
    set name(value: string | undefined);
    /**
     * Get this basemap's description from the config
     */
    get description(): string | undefined;
    /**
     * Set this basemap's description
     */
    set description(value: string | undefined);
    /**
     * Get this basemap's alt text from the config
     */
    get altText(): string | undefined;
    /**
     * Set this basemap's alt text
     */
    set altText(value: string | undefined);
    /**
     * Get this basemap's attribution config
     */
    get attribution(): Attribution | undefined;
    /**
     * Set this basemap's attribution
     */
    set attribution(value: Attribution | undefined);
    /**
     * Get this basemap's background colour
     */
    get backgroundColour(): string;
}
