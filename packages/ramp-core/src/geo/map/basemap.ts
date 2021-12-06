// these are for actual basemap objects in the map

import { LayerType, RampBasemapConfig } from '@/geo/api';
import { EsriBasemap, EsriMapImageLayer, EsriTileLayer } from '@/geo/esri';

export class Basemap {
    innerBasemap: EsriBasemap;
    config: RampBasemapConfig;

    constructor(rampConfig: RampBasemapConfig) {
        this.config = rampConfig;

        this.innerBasemap = new EsriBasemap({
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
}
