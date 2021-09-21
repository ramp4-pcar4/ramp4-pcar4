// the structure of the geo element of the RAMP API

import { APIScope, InstanceAPI, LayerAPI, MapAPI, UtilsAPI } from '@/api/internal';

export class GeoAPI extends APIScope {
    map: MapAPI;
    layer: LayerAPI;
    utils: UtilsAPI;

    // TODO how to best expose the geometery/graphic stuff.
    //      .graphic would be proper, but thats a long word.
    //      put stuff right on the root?  e.g. api.geo.Point, api.geo.Graphic
    //      split things out? geo.geom for geometry, geo.graphic for others?
    //      everything under .geom?
    //      we might need this stuff in an independent outside class with no ties to the instance.

    /**
     * @constructor
     * @param {InstanceAPI} iApi the RAMP instance
     */
    constructor(iApi: InstanceAPI) {
        super(iApi);

        this.map = new MapAPI(iApi);
        this.utils = new UtilsAPI(iApi);
        this.layer = new LayerAPI(iApi);
    }
}
