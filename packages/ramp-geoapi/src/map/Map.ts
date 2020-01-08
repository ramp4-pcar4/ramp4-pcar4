// a 2D esri map
// TODO add proper comments


import esri = __esri;
import { InfoBundle, RampMapConfig } from '../gapiTypes';
import MapBase from './MapBase';
import LayerBase from '../layer/BaseLayer';
import HighlightLayer from '../layer/HighlightLayer';

export class Map extends MapBase {

    // TODO think about how to expose. protected makes sense, but might want to make it public to allow hacking and use by a dev module if we decide to
    innerView: esri.MapView;

    constructor (infoBundle: InfoBundle, config: RampMapConfig, targetDiv: string) {

        super(infoBundle, config);

        const esriViewConfig: esri.MapViewProperties = {
            map: this.innerMap,
            container: targetDiv,
            constraints: {
                lods: <Array<esri.LOD>>config.lods
            },
            spatialReference: config.extent.spatialReference,
            extent: config.extent,

            // TODO remove these once starting extent is working
            // center: [-76.772, 44.423],
            // zoom: 10
        };

        // TODO extract more from config and set appropriate view properties (e.g. intial extent, initial projection, LODs)
        this.innerView = new this.esriBundle.MapView(esriViewConfig);
    }

    // TODO implement
    // promise resolves when layer gets added to map
    addLayer (layer: LayerBase): Promise<void> {
        return layer.isReadyForMap().then(() => {
            this.innerMap.add(layer.innerLayer);
        });
    }

    addHighlightLayer (highlightLayer: HighlightLayer): void {
        this.innerMap.add(highlightLayer.innerLayer);
    }

    // TODO passthrough functions, either by aly magic or make them hardcoded

    // TODO function to allow a second Map to be shot out, that shares this map but has a different scene

    // TODO basemap generation stuff (might need to be delayed due to lack of dojo dijit)

}

export default Map;