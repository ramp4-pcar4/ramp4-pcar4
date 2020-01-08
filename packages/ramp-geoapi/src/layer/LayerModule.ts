// this makes the module that gets exposed on GeoAPI under .layer(s)
// TODO add proper comments

import esri = __esri;
import { InfoBundle, RampLayerConfig } from '../gapiTypes';
import BaseBase from '../BaseBase';
import FeatureLayer from './FeatureLayer';
import HighlightLayer from './HighlightLayer';
import FileUtils from './FileUtils';
import GeoJsonLayer from './GeoJsonLayer';
import MapImageLayer from './MapImageLayer';
// import Map from './Map';

export default class LayerModule extends BaseBase {

    file: FileUtils;

    constructor (infoBundle: InfoBundle) {
        super(infoBundle);
        this.file = new FileUtils(infoBundle);
    }

    // TODO make create layer set of functions
    // specific ones, maybe a string-driven one

    createFeatureLayer(config: RampLayerConfig): FeatureLayer {
        const l = new FeatureLayer(this.infoBundle(), config);
        return l;
    }

    // geoJson can be string or geoJson object
    // systemOptions is a work in progress. make a nice type when solidified. will contain optional stuff that wouldnt be in the ramp config, like current map spatial reference
    createGeoJSONLayer(config: RampLayerConfig, geoJson: any, systemOptions: any): GeoJsonLayer {
        return new GeoJsonLayer(this.infoBundle(), config, geoJson, systemOptions);
    }

    createMapImageLayer(config: RampLayerConfig): MapImageLayer {
        const l = new MapImageLayer(this.infoBundle(), config);
        return l;
    }

    createHighlightLayer(options: any): HighlightLayer {
        // TODO figure out parameters
        return new HighlightLayer(this.infoBundle(), options);
    }

    /*
    // TODO will we have a config type? is it bad to have something that is defined on the client be defined here?
    createMap(config: any, targetDiv: string): Map {
        const map: Map = new Map(config, this.esriBundle, targetDiv);
        return map;
    }
    */
}
