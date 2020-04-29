// TODO add proper comments
// TODO change all the 'any' in this file to more strict types if possible

import esri = __esri;
import { InfoBundle, QueryFeaturesArcServerParams, QueryFeaturesGeoJsonParams, GetGraphicResult } from '../gapiTypes';
import BaseBase from '../BaseBase';
import Aql from './Aql';
import BaseGeometry from '../api/geometry/BaseGeometry';
import Extent from '../api/geometry/Extent';
import Point from '../api/geometry/Point';
import RampMap from '../map/RampMap';
import { GeometryType } from '../api/apiDefs';

export default class QueryService extends BaseBase {

    constructor (infoBundle: InfoBundle) {
        super(infoBundle);
    }

    // gets array of oids matching a query from an arcgis server feature source
    arcGisServerQueryIds(options: QueryFeaturesArcServerParams): Promise<Array<number>> {
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
        query.outFields = options.outFields ? options.outFields.split(',').map(s => s.trim()) : ['*'];

        const queryTask = new this.esriBundle.QueryTask({ url: options.url });

        return queryTask.executeForIds(query);
    }

    // for now, the any is attributes. figure why just return the ids when everything is local;
    // would just need another loop to map ids to attributes.
    geoJsonQuery(options: QueryFeaturesGeoJsonParams): Promise<Array<GetGraphicResult>> {
        // NOTE in ESRI4, you cant just dig into the underlying feature arrays of a layer.
        //      so we use a blank query if there is no geometry.
        const query = new this.esriBundle.Query();
        query.returnGeometry = !!options.includeGeometry;

        if (options.filterGeometry) {
            query.geometry = this.queryGeometryHelper(options.filterGeometry, true);
            query.spatialRelationship = 'intersects';
        }

        return (<esri.FeatureLayer>options.layer._innerLayer).queryFeatures(query).then(featSet => {
            let feats: any = featSet.features;
            if (options.filterSql && feats.length > 0) {
                // aql
                feats = this.sqlAttributeFilter(feats, options.filterSql, true);
            }

            // convert to our type. seems a bit wasteful, maybe find better way
            return feats.map(f => ({
                attributes: f.attributes,
                geometry: f.geometry
            }));
        });
    }

    // TODO think about splitting up a lot of the below functions into server specific
    //      and file specific functions.  File specific should utilze AQL.

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
    protected queryGeometryHelper(geometry: BaseGeometry, isFileLayer: boolean, mapScale?: number, sourceSR?: esri.SpatialReference): esri.Geometry {
        // TODO consider casting sourceSR to our API SR class?
        let finalGeom: esri.Geometry;

        if (isFileLayer && geometry.type !== GeometryType.EXTENT) {
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

    // TODO slated for review / removal, as has been made obsolete by functions up above and in the FCs.
    /**
     * Fetch attributes from a layer that intersects with the given geometry
     * Accepts the following options:
     *   - geometry: Required. geometry to intersect with the layer.
     *               Layers that are not hosted on an ArcGIS Server (e.g. file layers, WFS) can only use Extent geometries
     *   - url: Required if server based layer. Url to the map service layer to query against. Endpoint must support
     *          ESRI REST query interface. E.g. A feature layer endpoint.
     *   - featureLayer: Required if file based layer. Feature layer to query against
     *   - outFields: Optional. Array of strings containing field names to include in the results. Defaults to all fields.
     *   - where: Optional. A SQL where clause to filter results further. Useful when dealing with more results than the server can return.
     *            Cannot be used with layers that are not hosted on an ArcGIS Server (e.g. file layers, WFS)
     *   - returnGeometry: Optional. A boolean indicating if result geometery should be returned with results.  Defaults to false
     *   - sourceWkid: Optional. An integer indicating the WKID that the queried layer is natively stored in on the server.
     *                 If provided, allows query to attempt to mitigate any extent projection issues. Irrelevant for file based layers.
     *   - mapScale: Optional. An integer indicating the current map scale. If provided, allows query to attempt to mitigate any
     *               extent projection issues. Irrelevant for file based layers.
     *   - outSpatialReference: Required if returnGeometry is true. The spatial reference the return geometry should be in.
     * @param {Object} options settings to determine the details and behaviors of the query.
     * @return {Promise} resolves with a feature set of features that satisfy the query
     */
    obsoleteQueryGeometry(options: any): Promise<esri.FeatureSet> {

        const isFile = !!options.featureLayer;
        const query = new this.esriBundle.Query();

        query.returnGeometry = options.returnGeometry || false;
        if (options.returnGeometry) {
            query.outSpatialReference = options.outSpatialReference;
        }
        if (options.outFields) {
            query.outFields = options.outFields;
        } else {
            query.outFields = ['*'];
        }
        if (options.where) {
            if (isFile) {
                throw new Error('Cannot use WHERE clauses in queries against non-ArcGIS Server based layers');
            }
            query.where = options.where;
        }

        query.geometry = this.queryGeometryHelper(options.geometry, isFile, options.mapScale, options.sourceWkid);

        // TODO find the updated constant (if it exists). but the default is `intersects` anyway so may not need it
        // query.spatialRelationship = esriBundle.Query.SPATIAL_REL_INTERSECTS; // esriSpatialRelIntersects

        return new Promise((resolve, reject) => {
            // run the query. server based layers use a query task. file based layers use the layer's query function.
            if (options.url) {
                const queryTask = new this.esriBundle.QueryTask(options.url);

                // issue the map server query request
                queryTask.execute(query).then(featureSet => {
                    resolve(featureSet);
                }).catch(error => {
                    reject(error);
                });
            } else if (isFile) {
                // run the query on the layers internal data
                (<esri.FeatureLayer>options.featureLayer).queryFeatures(query).then(featureSet => {
                    resolve(featureSet);
                }).catch(error => {
                    reject(error);
                });
            }
        });

    }

    // TODO slated for review / removal, as has been made obsolete by functions up above and in the FCs.
    //      we may want to make a specific "getIDs" on the attrib layers. server is direct call. file
    //      can be normal query that then just extracts the OIDs. or make a special direct query..should be similar
    //
    // similar to queryGeometry, but only returns OIDs, allowing us to run more efficient web requests.
    // specifically, we can ignore the result limit on the server. Also doesn't require a geomtery, can just be
    // where clause
    /**
     * Fetch the Object IDs of features from a layer that satisfies the options
     * Accepts the following options:
     *   - geometry: Optional. geometry to intersect with the layer.
     *               Layers that are not hosted on an ArcGIS Server (e.g. file layers, WFS) can only use Extent geometries
     *   - url: Required if server based layer. Url to the map service layer to query against. Endpoint must support
     *          ESRI REST query interface. E.g. A feature layer endpoint.
     *   - featureLayer: Required if file based layer. Feature layer to query against
     *   - where: Optional. A SQL where clause to filter results further. Useful when dealing with more results than the server can return,
     *            or if additional filters are active.
     *            Cannot be used with layers that are not hosted on an ArcGIS Server (e.g. file layers, WFS)
     *   - sourceWkid: Optional. An integer indicating the WKID that the queried layer is natively stored in on the server.
     *                 If provided, allows query to attempt to mitigate any extent projection issues. Irrelevant for file based layers.
     *   - mapScale: Optional. An integer indicating the current map scale. If provided, allows query to attempt to mitigate any
     *               extent projection issues. Irrelevant for file based layers.
     * @param {Object} options settings to determine the details of the query
     * @return {Promise} resolves with an array of Object Ids that satisfy the query
     */
    obsoleteQueryIds(options: any): Promise<number[]> {

        // create and set the esri query parameters

        const isFile = !!options.featureLayer;
        const query = new this.esriBundle.Query();
        query.returnGeometry = false;

        if (options.where) {
            if (isFile) {
                throw new Error('Cannot use WHERE clauses in queries against non-ArcGIS Server based layers');
            }
            query.where = options.where;
        }
        if (options.geometry) {
            query.geometry = this.queryGeometryHelper(options.geometry, isFile, options.mapScale, options.sourceWkid);

            // TODO find the updated constant (if it exists). but the default is `intersects` anyway so may not need it
            // query.spatialRelationship = esriBundle.Query.SPATIAL_REL_INTERSECTS; // esriSpatialRelIntersects
        }

        return new Promise((resolve, reject) => {
            // run the query. server based layers use a query task. file based layers use the layer's query function.
            if (options.url) {
                const queryTask = new this.esriBundle.QueryTask(options.url);

                // issue the map server query request
                queryTask.executeForIds(query).then(oidArray => {
                    resolve(oidArray);
                }).catch(error => {
                    reject(error);
                });
            } else if (isFile) {
                // run the query on the layers internal data
                (<esri.FeatureLayer>options.featureLayer).queryObjectIds(query).then(oidArray => {
                    resolve(oidArray);
                }).catch(error => {
                    reject(error);
                });
            }
        });

    }

    /**
     * Given an SQL WHERE condition, will search an array of attribute objects and return a filtered
     * array containing attributes that satisfy the WHERE condition.
     * Array can contain raw attribute objects, or objects with a propery `attributes` that contain
     * an attribute object.
     *
     * @function sqlAttributeFilter
     * @param {Array} attributeArray               array of attribute objects or objects with `attributes` property.
     * @param {String} sqlWhere                    a SQL WHERE clause (without the word `WHERE`) that has field names matching the attribute property names.
     * @param {Boolean} [attribAsProperty=false]    indicates if the attribute object resides in a propery called `attributes`. Set to false if array contains raw attribute objects.
     * @returns {Array} array of attribute objects that meet the conditions of the filter. the result objects will be in the same form as they were passed in
     */
    sqlAttributeFilter (attributeArray: any, sqlWhere: string, attribAsProperty: boolean = false): Array<any> {
        // attribAsProperty means where the attribute lives in relation to the array
        // {att} is a standard key-value object of attributes
        // [ {att} , {att} ] would be the false case.  this is the format of attributes from the geoApi attribute loader
        // [ {attributes:{att}}, {attributes:{att}} ] would be the true case. this is the format of attributes sitting in the graphics array of a filebased layer

        // TODO if we want to get fancy we could type the array as Array<RampAPI.Graphic> | Array<esri.Graphic> | Array<RampAPI.Attributes> | Array<generickeyvalueobject>
        //      seems a bit overkill for now, lets just have good documentation

        // convert the sql where clause to an attribute query language tree, then
        // use that to evaluate against each attribute.
        const aql = Aql.fromSql(sqlWhere);

        // split in two to avoid doing boolean check at every iteration
        if (attribAsProperty) {
            return attributeArray.filter((a: { attributes: any; }) => {
                return aql.evaluate(a.attributes);
            });
        } else {
            return attributeArray.filter((a: any) => {
                return aql.evaluate(a);
            });
        }
    }

    /**
     * Given an SQL WHERE condition, will search an array of Graphics adjust their visibility
     * based on if they satisfy the WHERE condition.
     *
     * @function sqlEsriGraphicsVisibility
     * @param {Array} graphics          array of Graphics.
     * @param {String} sqlWhere         a SQL WHERE clause (without the word `WHERE`) that has field names matching the attribute property names.
     * @returns {Array} array of attributes of visible features.
     */
    sqlEsriGraphicsVisibility (graphics: Array<esri.Graphic>, sqlWhere: string): void {
        // R4MP NOTES:
        // since we never had a usecase in RAMP2 for the return value, am removing it for now
        // to boost speed (as this can get executed often when filters are engaged)
        // we are also strongly typing for ESRI graphics, as this function is for ESRI trickery.
        // we may decide to make a mirror'd function that does RAMP graphics, which could
        // support sql queries on SimpleLayer graphics in theory (though maybe not, we
        // likely would need to target their underlying esri graphics as well).
        // Since this has an ESRI type on the function interface, we don't want non-GeoAPI
        // code using it. At minimum put some warnings on the JSDoc indicating lack
        // of support and discouragment of use.
        // If we want to make things more intense, we could technically migrate
        // this function into GeoJsonFC, though it would seem odd as the logic
        // really seems to fit the theme of queryservice file.

        // variant of sqlAttributeFilter.  customized for turning graphics visibility on and off.
        // since we need to turn off the items "not in the query", this saves us doing multiple iterations.
        // however it becomes limited in that it really needs arrays of Graphic objects.

        // convert the sql where clause to an attribute query language tree, then
        // use that to evaluate against each attribute.

        // a function that decides what the visibility of a graphic should be
        let brain: (g: esri.Graphic) => boolean;

        if (sqlWhere === '') {
            // no restrictions. show everything
            brain = g => true;
        } else if (sqlWhere === '1=2') {
            // everything off. hide everything
            brain = g => false;
        } else {
            // real sql. construct an AQL query from it and set our vis logic to use it
            const aql = Aql.fromSql(sqlWhere);
            brain = g => aql.evaluate(g.attributes);
        }

        // run our brain logic against every graphic in the array
        graphics.forEach(g => g.visible = brain(g));
    }

}