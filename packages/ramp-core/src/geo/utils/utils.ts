// This will collate all the util stuff into one endpoint

// this makes the module that gets exposed on GeoAPI under .util(s)
// TODO add proper comments

import {
    APIScope,
    AttributeAPI,
    InstanceAPI,
    QueryAPI,
    SymbologyAPI
} from '@/api/internal';
import { GeometryAPI, Point, ProjectionAPI, SharedUtilsAPI } from '@/geo/api';

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

    constructor(iApi: InstanceAPI) {
        super(iApi);

        this.attributes = new AttributeAPI(iApi);

        // Refer to global instance
        this.geom = RAMP.GEO.geom;
        this.proj = RAMP.GEO.proj;
        this.shared = RAMP.GEO.sharedUtils;

        this.query = new QueryAPI(iApi);
        this.symbology = new SymbologyAPI(iApi);

        /*
        this.highlight = new HighlightService(infoBundle);
        */
    }

    // TODO: Not the final location, will be moved once co-ords formatting is figured out
    /**
     * Formats a lat/long DMS string using mouse map point coordinates
     * Returns empty string if no map point is provided
     *
     * @param {Point | undefined} mapPoint the cursor map point
     * @returns { lat: string; lon: string } the formatted string using given cursor map coordinates
     */
    async formatLatLongDMSString(mapPoint: Point | undefined): Promise<string> {
        if (!mapPoint) {
            return '';
        }

        const latLongPoint: any = await RAMP.GEO.proj.projectGeometry(
            4326,
            mapPoint
        );

        const lat = latLongPoint.y;
        const lon = latLongPoint.x;

        if (lat < -90 || lat > 90 || lon < -180 || lon > 180) {
            console.warn(
                `formatLatLongDMSString received invalid lat/long coordinates: (${lat}, ${lon})`
            );
            return '';
        }

        const degreeSymbol = String.fromCharCode(176);

        const dy = Math.floor(Math.abs(lat)) * (lat < 0 ? -1 : 1);
        const my = Math.floor(Math.abs((lat - dy) * 60));
        const sy = Math.floor((Math.abs(lat) - Math.abs(dy) - my / 60) * 3600);

        const dx = Math.floor(Math.abs(lon)) * (lon < 0 ? -1 : 1);
        const mx = Math.floor(Math.abs((lon - dx) * 60));
        const sx = Math.floor((Math.abs(lon) - Math.abs(dx) - mx / 60) * 3600);

        const newY = `${Math.abs(dy)}${degreeSymbol} ${padZero(my)}' ${padZero(
            sy
        )}"`;
        const newX = `${Math.abs(dx)}${degreeSymbol} ${padZero(mx)}' ${padZero(
            sx
        )}"`;

        return `${newY} ${this.$iApi.$vApp.$i18n.t(
            'map.coordinates.' + (lat > 0 ? 'north' : 'south')
        )} | ${newX} ${this.$iApi.$vApp.$i18n.t(
            'map.coordinates.' + (0 > lon ? 'west' : 'east')
        )}`;

        /**
         * Pad value with leading 0 to make sure there is always 2 digits if number is below 10.
         *
         * @function padZero
         * @private
         * @param {Number} val value to pad with 0
         * @return {String} string with always 2 characters
         */
        function padZero(val: number) {
            return val >= 10 ? `${val}` : `0${val}`;
        }
    }
}
