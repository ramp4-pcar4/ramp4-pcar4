// these are for actual basemap objects in the map

import { LayerType } from '@/geo/api';
import type { Attribution, RampBasemapConfig } from '@/geo/api';
import { EsriAPI } from '@/geo/esri';
import type { EsriBasemap } from '@/geo/esri';

export class Basemap {
    /**
     * The inner ESRI basemap class
     */
    esriBasemap!: EsriBasemap;

    /**
     * Configuration source object
     */
    readonly config: RampBasemapConfig;

    /**
     * Used to inform the instance of any construction errors
     */
    createErr: boolean = false;

    /**
     * This constructor should not be called directly, as it will not populate the
     * underlying ESRI basemap.
     * Use static method Basemap.create(rampConfig)
     */
    constructor(rampConfig: RampBasemapConfig) {
        this.config = rampConfig;
    }

    /**
     * Will generate a populated basemap
     *
     * @param rampConfig configuration object for the basemap
     * @returns {Promise<Basemap>} resolves with generated basemap
     */
    static async create(rampConfig: RampBasemapConfig): Promise<Basemap> {
        const newBM = new Basemap(rampConfig);

        // generate the inner layers (async requests)
        const baseLayerProms = rampConfig.layers.map(layerConfig => {
            // convert to switch statement if we add more types?
            const universalNugget = {
                url: layerConfig.url,
                opacity: layerConfig.opacity
            };

            if (layerConfig.layerType === LayerType.TILE) {
                return EsriAPI.TileLayer(universalNugget);
            } else if (layerConfig.layerType === LayerType.VECTORTILE) {
                return EsriAPI.VectorTileLayer(universalNugget);
            } else if (layerConfig.layerType === LayerType.MAPIMAGE) {
                return EsriAPI.MapImageLayer(universalNugget);
            } else if (layerConfig.layerType === LayerType.OSM) {
                return EsriAPI.OpenStreetMapLayer(universalNugget);
            } else {
                throw new Error(`Unsupported layer type provided to basemap config: ${layerConfig.layerType}`);
            }

            // TODO maybe add support for WebTileLayer. WMS if that works
        });

        // wait & watch
        const baseResults = await Promise.allSettled(baseLayerProms);

        const baseLayers = baseResults
            .filter(promResult => {
                if (promResult.status === 'rejected') {
                    // allows instance know if went sour and generate notification
                    console.error(promResult.reason);
                    newBM.createErr = true;
                    return false;
                } else {
                    return true;
                }
            })
            .map(promResult => {
                if (promResult.status === 'fulfilled') {
                    return promResult.value;
                } else {
                    // this block will never run. However typescript cannot detect that only 'fulfilled'
                    // items passed the filter, so this is the easiest way to make it keep the nice inferred
                    // types on all the variables.
                    throw new Error('TS is fun');
                }
            });

        // finalize internal basemap
        newBM.esriBasemap = await EsriAPI.Basemap({
            baseLayers,
            title: rampConfig.name || '',
            id: rampConfig.id
        });

        return newBM;
    }

    /**
     * Returns the tile schema id from the config
     */
    get tileSchemaId(): string {
        return this.config.tileSchemaId;
    }

    /**
     * Returns the basemap id from the config
     */
    get id(): string {
        return this.config.id;
    }

    /**
     * Get this basemap's name from the config
     */
    get name(): string | undefined {
        return this.config.name;
    }

    /**
     * Set this basemap's name
     */
    set name(value: string | undefined) {
        this.config.name = value || '';
    }

    /**
     * Get this basemap's description from the config
     */
    get description(): string | undefined {
        return this.config.description;
    }

    /**
     * Set this basemap's description
     */
    set description(value: string | undefined) {
        this.config.description = value || '';
    }

    /**
     * Get this basemap's alt text from the config
     */
    get altText(): string | undefined {
        return this.config.altText;
    }

    /**
     * Set this basemap's alt text
     */
    set altText(value: string | undefined) {
        this.config.altText = value || '';
    }

    /**
     * Get this basemap's attribution config
     */
    get attribution(): Attribution | undefined {
        return this.config.attribution;
    }

    /**
     * Set this basemap's attribution
     */
    set attribution(value: Attribution | undefined) {
        this.config.attribution = value;
    }

    /**
     * Get this basemap's background colour
     */
    get backgroundColour(): string {
        return this.config.backgroundColour ?? '#FFFFFF';
    }
}
