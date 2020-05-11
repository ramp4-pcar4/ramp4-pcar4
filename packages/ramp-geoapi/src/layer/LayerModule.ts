// this makes the module that gets exposed on GeoAPI under .layer(s)
// TODO add proper comments

import esri = __esri;
import { InfoBundle, RampLayerConfig } from '../gapiTypes';
import BaseBase from '../BaseBase';
import FeatureLayer from './FeatureLayer';
import FileUtils from './FileUtils';
import GeoJsonLayer from './GeoJsonLayer';
import HighlightLayer from './HighlightLayer';
import ImageryLayer from './ImageryLayer';
import MapImageLayer from './MapImageLayer';
import TileLayer from './TileLayer';
import TreeNode from './TreeNode';
import WmsLayer from './WmsLayer';

export default class LayerModule extends BaseBase {

    file: FileUtils;

    constructor (infoBundle: InfoBundle) {
        super(infoBundle);
        this.file = new FileUtils(infoBundle);
    }

    // TODO make create layer set of functions
    // specific ones, maybe a string-driven one

    createFeatureLayer(config: RampLayerConfig, reloadTree?: TreeNode): FeatureLayer {
        return new FeatureLayer(this.infoBundle(), config, reloadTree);
    }

    // geoJson can be string or geoJson object
    // systemOptions is a work in progress. make a nice type when solidified. will contain optional stuff that wouldnt be in the ramp config, like current map spatial reference
    createGeoJSONLayer(config: RampLayerConfig, geoJson: any, systemOptions: any, reloadTree?: TreeNode): GeoJsonLayer {
        return new GeoJsonLayer(this.infoBundle(), config, geoJson, systemOptions, reloadTree);
    }

    createMapImageLayer(config: RampLayerConfig, reloadTree?: TreeNode): MapImageLayer {
        return new MapImageLayer(this.infoBundle(), config, reloadTree);
    }

    createWmsLayer(config: RampLayerConfig, reloadTree?: TreeNode): WmsLayer {
        return new WmsLayer(this.infoBundle(), config, reloadTree);
    }

    createImageryLayer(config: RampLayerConfig, reloadTree?: TreeNode): ImageryLayer {
        return new ImageryLayer(this.infoBundle(), config, reloadTree);
    }

    createTileLayer(config: RampLayerConfig, reloadTree?: TreeNode): TileLayer {
        return new TileLayer(this.infoBundle(), config, reloadTree);
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
