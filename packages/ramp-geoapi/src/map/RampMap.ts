// a 2D esri map
// TODO add proper comments


import esri = __esri;
import { InfoBundle, RampMapConfig } from '../gapiTypes';
import MapBase from './MapBase';
import LayerBase from '../layer/BaseLayer';
import HighlightLayer from '../layer/HighlightLayer';
import Extent from '../api/geometry/Extent';
import Point from '../api/geometry/Point';
import SpatialReference from '../api/geometry/SpatialReference';
import BaseGeometry from '../api/geometry/BaseGeometry';
import { GeometryType } from '../api/apiDefs';

// NOTE naming this RampMap, to avoid collisions with javascript object `Map`
export class RampMap extends MapBase {

    // TODO think about how to expose. protected makes sense, but might want to make it public to allow hacking and use by a dev module if we decide to
    innerView: esri.MapView;

    private rampSR: SpatialReference;

    constructor (infoBundle: InfoBundle, config: RampMapConfig, targetDiv: string | HTMLDivElement) {

        super(infoBundle, config);

        this.rampSR = SpatialReference.fromConfig(config.extent.spatialReference);

        const esriViewConfig: esri.MapViewProperties = {
            map: this.innerMap,
            container: targetDiv,
            constraints: {
                lods: <Array<esri.LOD>>config.lods
            },
            spatialReference: this.gapi.utils.geom.convSrToEsri(this.rampSR),
            extent: config.extent,

            // TODO remove these once starting extent is working
            // center: [-76.772, 44.423],
            // zoom: 10
        };

        // TODO extract more from config and set appropriate view properties (e.g. intial extent, initial projection, LODs)
        this.innerView = new this.esriBundle.MapView(esriViewConfig);

    }

    private geomToMapSR(geom: BaseGeometry): Promise<BaseGeometry> {
        if (this.rampSR.isEqual(geom.sr)) {
            return Promise.resolve(geom);
        } else {
            return this.gapi.utils.proj.projectGeometry(this.rampSR, geom);
        }
    }

    // promise resolves when layer gets added to map
    async addLayer (layer: LayerBase): Promise<void> {
        await layer.isReadyForMap();
        this.innerMap.add(layer.innerLayer);
    }

    addHighlightLayer (highlightLayer: HighlightLayer): void {
        this.innerMap.add(highlightLayer.innerLayer);
    }

    // TODO passthrough functions, either by aly magic or make them hardcoded
    getScale(): number {
        return this.innerView.scale;
    }

    zoomMapTo(extent: Extent): Promise<void>;
    zoomMapTo(centerPoint: Point, mapScale: number): Promise<void>;
    zoomMapTo(geom: BaseGeometry, scale?: number): Promise<void> {
        // TODO technically this can accept any geometry. should we open up the suggested signatures to allow various things?

        return this.geomToMapSR(geom).then(g => {
            const zoomP: any = {
                target: this.gapi.utils.geom.geomRampToEsri(g)
            };

            if (g.type === GeometryType.POINT) {
                zoomP.scale = scale;
            }

            return this.innerView.goTo(zoomP);
        });

    }

    getExtent(): Extent {
        return this.gapi.utils.geom.convEsriExtentToRamp(this.innerView.extent);
    }

    setExtent(newExt: Extent): Promise<void> {
        return this.zoomMapTo(newExt);
    }

    getSR(): SpatialReference {
        return this.rampSR.clone();
    }

    // TODO function to allow a second Map to be shot out, that shares this map but has a different scene

    // TODO basemap generation stuff (might need to be delayed due to lack of dojo dijit)

}

export default RampMap;