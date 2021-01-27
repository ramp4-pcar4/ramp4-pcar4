// This will collate all the util stuff into one endpoint

// this makes the module that gets exposed on GeoAPI under .util(s)
// TODO add proper comments

import { APIScope, InstanceAPI } from '@/api/internal';
import { AttributeAPI, EpsgLookup, GeometryAPI, ProjectionAPI, QueryAPI, SharedUtilsAPI, SymbologyAPI } from '@/geo/internal';

/*
import HighlightService from './HighlightService';
import OgcService from './OgcService';
*/

export class UtilsAPI extends APIScope {

    attributes: AttributeAPI;
    geom: GeometryAPI;
    proj: ProjectionAPI;
    query: QueryAPI;
    shared: SharedUtilsAPI;
    symbology: SymbologyAPI;

    constructor (iApi: InstanceAPI, epsgFunction: EpsgLookup | undefined = undefined) {
        super(iApi);

        this.attributes = new AttributeAPI(iApi);
        this.geom = new GeometryAPI();
        this.proj = new ProjectionAPI(iApi, epsgFunction);
        this.query = new QueryAPI(iApi);
        this.shared = new SharedUtilsAPI();
        this.symbology = new SymbologyAPI(iApi);

        /*
        this.highlight = new HighlightService(infoBundle);
        */
    }

}