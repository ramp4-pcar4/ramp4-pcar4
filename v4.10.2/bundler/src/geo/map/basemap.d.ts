import { Attribution, RampBasemapConfig } from '../api';
import { EsriBasemap } from '../esri';
export declare class Basemap {
    /**
     * The inner ESRI basemap class
     */
    esriBasemap: EsriBasemap;
    /**
     * Configuration source object
     */
    readonly config: RampBasemapConfig;
    /**
     * Used to inform the instance of any construction errors
     */
    createErr: boolean;
    /**
     * This constructor should not be called directly, as it will not populate the
     * underlying ESRI basemap.
     * Use static method Basemap.create(rampConfig)
     */
    constructor(rampConfig: RampBasemapConfig);
    /**
     * Will generate a populated basemap
     *
     * @param rampConfig configuration object for the basemap
     * @returns {Promise<Basemap>} resolves with generated basemap
     */
    static create(rampConfig: RampBasemapConfig): Promise<Basemap>;
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
