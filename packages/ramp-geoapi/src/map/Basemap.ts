// TODO add proper comments


import esri = __esri;
import { InfoBundle, RampBasemapConfig } from '../gapiTypes';
import BaseBase from '../BaseBase';

export default class Basemap extends BaseBase {

    innerBasemap: esri.Basemap;
    id: string;
    tileSchemaId: string;

    constructor (infoBundle: InfoBundle, rampConfig: RampBasemapConfig) {

        super(infoBundle);
        this.id = rampConfig.id;
        this.tileSchemaId = rampConfig.tileSchemaId;

        this.innerBasemap = new this.esriBundle.Basemap({
            // TODO split by type if we have to populate referenceLayers
            baseLayers: rampConfig.layers.map(layerConfig => {
                if (layerConfig.layerType === 'esriTile') {
                    return new this.esriBundle.TileLayer({
                        url: layerConfig.url
                    });
                } else if (layerConfig.layerType === 'esriMapImage') { // TODO verify our constant here matches what we decide to use in the config schema
                    return new this.esriBundle.MapImageLayer({
                        url: layerConfig.url
                    });
                } else {
                    throw new Error(`Unsupported layer type provided to basemap config: ${layerConfig.layerType}`);
                }

                // TODO maybe add support for WebTileLayer. WMS if that works
            }),
            title: rampConfig.name || '',
            id: rampConfig.id
        });
    }
}