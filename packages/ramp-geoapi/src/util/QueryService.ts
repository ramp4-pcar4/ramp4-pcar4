// TODO add proper comments
// TODO change all the 'any' in this file to more strict types if possible

import esri = __esri;
import { InfoBundle, QueryFeaturesArcServerParams, QueryFeaturesGeoJsonParams, GetGraphicResult } from '../gapiTypes';
import BaseBase from '../BaseBase';
import BaseGeometry from '../api/geometry/BaseGeometry';
import Extent from '../api/geometry/Extent';
import Point from '../api/geometry/Point';
import RampMap from '../map/RampMap';
import SpatialReference from '../api/geometry/SpatialReference';
import { GeometryType } from '../api/apiDefs';

export default class QueryService extends BaseBase {

    constructor (infoBundle: InfoBundle) {
        super(infoBundle);
    }

    /**
     * Gets an array of OIDs from an arcgis server feature source that satisfy a query
     *
     * @param options contains properties that define the query and specificy request particulars.
     * @returns resolves with array of object ids.
     */
    async arcGisServerQueryIds(options: QueryFeaturesArcServerParams): Promise<Array<number>> {
        // create and set the esri query parameters

        const query = new this.esriBundle.Query();
        query.returnGeometry = false;

        if (options.filterSql) {
            query.where = options.filterSql;
        }
        if (options.filterGeometry) {
            query.geometry = this.queryGeometryHelper(options.filterGeometry, false, options.map.getScale(), options.sourceSR);
            query.spatialRelationship = 'intersects';
        }

        const queryTask = new this.esriBundle.QueryTask({ url: options.url });

        const oids = await queryTask.executeForIds(query);
        return Array.isArray(oids) ? oids : [];
    }

    /**
     * Gets an array of graphics from a locally stored feature layer (file, geojson) that satisfy a query
     *
     * @param options contains properties that define the query and specificy request particulars.
     * @returns resolves with array of graphic result objects.
     */
    async geoJsonQuery(options: QueryFeaturesGeoJsonParams): Promise<Array<GetGraphicResult>> {

        const query = new this.esriBundle.Query();
        query.returnGeometry = !!options.includeGeometry;
        query.outFields = ['*']; // TODO look into using the options value. test it well, as the .where gets wonky with outfields

        if (options.filterGeometry) {
            query.geometry = this.queryGeometryHelper(options.filterGeometry, true);
            query.spatialRelationship = 'intersects';
        }

        if (options.filterSql) {
            query.where = options.filterSql;
        }

        await options.layer.isLayerLoaded();

        // NOTE: for this to work, the outfields need to be set on the geojson layer when it is created.
        //       anything not in the outfields will not be available for the .where filter and will give
        //       an empty result.
        // NOTE: using ._innerView appears to be somewhat flawed. The query tends to only respect items that
        //       are in the visible view of the map. The layer query appears to be working now with local data
        //       (was not in earlier versions of ESRI API)
        const featSet = await options.layer._innerLayer.queryFeatures(query);

        // convert to our type. seems a bit wasteful, but we already want to convert to ramp geoms so do it
        return featSet.features.map((f, i) => {
            const ggr: GetGraphicResult = {
                attributes: f.attributes
            };
            if (query.returnGeometry) {
                ggr.geometry = this.gapi.utils.geom.geomEsriToRamp(f.geometry, `queryResult${i}`);
            }
            return ggr;
        });
    }

    // TODO think about splitting up a lot of the below functions into server specific
    //      and file specific functions.

    /**
     * Helper function to modify input geometries for queries. Will attempt to avoid various pitfalls,
     * usually around projections
     *
     * @private
     * @param {BaseGeometry} geometry the geometry to be used in a query as a filter
     * @param {Boolean} isFileLayer true if layer is not tied to an arcgis server
     * @param {Integer} [mapScale] optional scale value of the map to help detect problem situations
     * @param {SpatialReference} [sourceSR] optional spatial reference of the layer being queried to help detect problem situations
     * @return {Geometry} returns the input geometry in the most appropriate form based on the inputs
     */
    protected queryGeometryHelper(geometry: BaseGeometry, isFileLayer: boolean, mapScale?: number, sourceSR?: SpatialReference): esri.Geometry {
        // TODO consider casting sourceSR to our API SR class?
        let finalGeom: esri.Geometry;

        if (isFileLayer && geometry.type !== GeometryType.EXTENT) {
            // TODO verify this is still the case with new layerview queries.
            throw new Error('Cannot use geometries other than Extents in queries against non-ArcGIS Server based layers');
        }
        if (!isFileLayer && geometry.type === GeometryType.EXTENT) {
            // first check for case of very large extent in Lambert against a LatLong layer.
            // in this case, we tend to get better results keeping things in an Extent form
            // as it handles the north pole/180meridan crossage better.
            if (mapScale && sourceSR && mapScale > 20000000 &&  geometry.sr.wkid === 3978 && sourceSR.wkid === 4326) {
                finalGeom = this.gapi.utils.geom.geomRampToEsri(geometry);
            } else {
                // convert extent to polygon to avoid issues when a service in a different projection
                // attempts to warp the extent
                finalGeom = this.gapi.utils.geom.geomRampToEsri((<Extent>geometry).toPolygon());
            }
        } else {
            // take as is
            finalGeom = this.gapi.utils.geom.geomRampToEsri(geometry);
        }

        return finalGeom;
    }

    /**
     * Create an extent centered around a point, that is appropriate for the current map scale.
     *
     * @function makeClickBuffer
     * @param {Point} point         point on the map for extent center
     * @param {RampMap} map         map object the extent is relevant for
     * @param {Integer} tolerance   optional. distance in pixels from mouse point that qualifies as a hit. default is 5
     * @return {Extent} an extent of desired size and location
     */
    makeClickBuffer(point: Point, map: RampMap, tolerance: number = 5): Extent {
        // take pixel tolerance, convert to map units at current scale.
        const mapExt = map.getExtent();
        const buffSize = tolerance * (mapExt.xmax - mapExt.xmin) / map.getPixelWidth();

        // Build tolerance envelope of correct size
        return new Extent('ze_buffer', [point.x - buffSize, point.y - buffSize],
            [point.x + buffSize, point.y + buffSize], point.sr);
    }

}