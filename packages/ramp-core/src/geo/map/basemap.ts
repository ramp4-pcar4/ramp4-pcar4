// these are for actual basemap objects in the map

import { Attribution, LayerType, RampBasemapConfig } from '@/geo/api';
import { EsriBasemap, EsriMapImageLayer, EsriTileLayer } from '@/geo/esri';

export class Basemap {
    esriBasemap: EsriBasemap;
    readonly config: RampBasemapConfig;

    constructor(rampConfig: RampBasemapConfig) {
        this.config = rampConfig;

        this.esriBasemap = new EsriBasemap({
            // TODO split by type if we have to populate referenceLayers
            baseLayers: rampConfig.layers.map(layerConfig => {
                if (layerConfig.layerType === LayerType.TILE) {
                    return new EsriTileLayer({
                        url: layerConfig.url
                    });
                } else if (layerConfig.layerType === LayerType.MAPIMAGE) {
                    return new EsriMapImageLayer({
                        url: layerConfig.url
                    });
                } else {
                    throw new Error(
                        `Unsupported layer type provided to basemap config: ${layerConfig.layerType}`
                    );
                }

                // TODO maybe add support for WebTileLayer. WMS if that works
            }),
            title: rampConfig.name || '',
            id: rampConfig.id
        });
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
        this.config.name = value;
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
        this.config.description = value;
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
        this.config.altText = value;
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
}
