// put things here that would be common to both 2D and 3D maps
// might be empty for the beginning
// may be pointless and should be removed...limitied experience with 3D
// TODO add proper comments

import esri = __esri;
import { InfoBundle, RampMapConfig } from '../gapiTypes';
import BaseBase from '../BaseBase';
import Basemap from './Basemap';

// TODO would ideally call this BaseMap, but that would get confused with Basemap.
export default class MapBase extends BaseBase {

    // TODO think about how to expose. protected makes sense, but might want to make it public to allow hacking and use by a dev module if we decide to
    _innerMap: esri.Map;
    protected basemapStore: Array<Basemap>;

    protected constructor (infoBundle: InfoBundle, config: RampMapConfig) {
        super(infoBundle);

        this.basemapStore = config.basemaps.map(bmConfig => new Basemap(infoBundle, bmConfig));

        const esriConfig: esri.MapProperties = {};
        if (config.initialBasemapId) {
            esriConfig.basemap = this.findBasemap(config.initialBasemapId).innerBasemap;
        }
        this._innerMap = new this.esriBundle.Map(esriConfig);

    }

    protected findBasemap(id: string): Basemap {
        const bm: Basemap = this.basemapStore.find(bms => bms.id === id);
        if (bm) {
            return bm;
        } else {
            throw new Error(`Invalid basemap id requested: ${id}`);
        }
    }

    setBasemap(id: string): void {
        if (id) {
            const bm: Basemap = this.findBasemap(id);
            // TODO test tile schema here? trigger a map reload if new schema?
            //      or will this be handled by the basemap UI? might make sense to do it there;
            //      would need to back out of this function call and trigger something else if we
            //      detect here.

            this._innerMap.basemap = bm.innerBasemap;
        } else {
            // blank basemap case
            this._innerMap.basemap = undefined;
        }
    }

    // TODO shared Map (not view-based) functions could go here.
    //      Includes passthrough things. Could also include addLayer (assuming the LayerView gets handled automagically in 3D case?)

}