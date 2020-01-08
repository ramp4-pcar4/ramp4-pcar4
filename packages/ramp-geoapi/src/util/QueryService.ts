// TODO add proper comments
// TODO change all the 'any' in this file to more strict types if possible

import esri = __esri;
import { InfoBundle } from '../gapiTypes';
import BaseBase from '../BaseBase';
import Aql from './Aql';

export default class QueryService extends BaseBase {

    constructor (infoBundle: InfoBundle) {
        super(infoBundle);
    }

    /**
     * Helper function to modify input geometries for queries. Will attempt to avoid various pitfalls,
     * usually around projections
     *
     * @private
     * @param {Object} geometry the geometry we want to query against
     * @param {Boolean} isFileLayer true if layer is not tied to an arcgis server
     * @param {Integer} [mapScale] optional scale value of the map to help detect problem situations
     * @param {Integer} [sourceWkid] optional WKID of the layer being queried to help detect problem situations
     * @return {Object} resolves with a feature set of features that satisfy the query
     */
    protected queryGeometryHelper(geometry: esri.Geometry, isFileLayer: boolean, mapScale?: number, sourceWkid?: number): esri.Geometry {
        // NOTE while we have attempted to make most projection things be based around spatial references,
        //      not wkids, for the time being will leave this as is. We only have logic to handle a specific
        //      case (projecting lat-long to lambert), and things run ok if no wkid is specified.
        //      If we ever need to update this logic to handle non-wkid projections, then we'll need
        //      some fancier code.

        let finalGeom: esri.Geometry;

        if (isFileLayer && geometry.type !== 'extent') {
            throw new Error('Cannot use geometries other than Extents in queries against non-ArcGIS Server based layers');
        }
        if (!isFileLayer && geometry.type === 'extent') {
            // first check for case of very large extent in Lambert against a LatLong layer.
            // in this case, we tend to get better results keeping things in an Extent form
            // as it handles the north pole/180meridan crossage better.
            if (mapScale && sourceWkid && mapScale > 20000000 && geometry.spatialReference &&
                geometry.spatialReference.wkid === 3978 && sourceWkid === 4326) {
                finalGeom = geometry;
            } else {
                // convert extent to polygon to avoid issues when a service in a different projection
                // attempts to warp the extent
                finalGeom = this.esriBundle.Polygon.fromExtent(<esri.Extent>geometry);
            }
        } else {
            // take as is
            finalGeom = geometry;
        }

        return finalGeom;
    }

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
    queryGeometry(options: any): Promise<esri.FeatureSet> {

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
    queryIds(options: any): Promise<number[]> {

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
    sqlAttributeFilter (attributeArray: any, sqlWhere: any, attribAsProperty: boolean = false): Array<Object> {
        // attribAsProperty means where the attribute lives in relation to the array
        // {att} is a standard key-value object of attributes
        // [ {att} , {att} ] would be the false case.  this is the format of attributes from the geoApi attribute loader
        // [ {attributes:{att}}, {attributes:{att}} ] would be the true case. this is the format of attributes sitting in the graphics array of a filebased layer

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
     * @function sqlGraphicsVisibility
     * @param {Array} graphics          array of Graphics.
     * @param {String} sqlWhere         a SQL WHERE clause (without the word `WHERE`) that has field names matching the attribute property names.
     * @returns {Array} array of attributes of visible features.
     */
    sqlGraphicsVisibility (graphics: any, sqlWhere: string): Array<any> {
        // variant of sqlAttributeFilter.  customized for turning graphics visibility on and off.
        // since we need to turn off the items "not in the query", this saves us doing multiple iterations.
        // however it becomes limited in that it really needs arrays of Graphic objects.

        // convert the sql where clause to an attribute query language tree, then
        // use that to evaluate against each attribute.

        if (sqlWhere === '') {
            // no restrictions. show everything
            graphics.forEach((g: { show: () => void; }) => g.show());
            return graphics;
        } else if (sqlWhere === '1=2') {
            // everything off. hide everything
            // TODO layer should be invisible, so maybe this is irrelevant? or is it better to be safe, as something else could use this function.
            graphics.forEach((g: { hide: () => void; }) => g.hide());
            return [];
        }

        // otherwise we have a sql query to evaluate
        const aql = Aql.fromSql(sqlWhere);
        const visibleAttributes = [];

        graphics.forEach((g: { attributes: any; show: () => void; hide: () => void; }) => {
            if (aql.evaluate(g.attributes)) {
                g.show();
                visibleAttributes.push(g.attributes);
            } else {
                g.hide();
            }
        });

        return visibleAttributes;
    }

}