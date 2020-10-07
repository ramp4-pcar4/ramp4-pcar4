
// TODO add proper comments


import esri = __esri;
import { InfoBundle, AttributeSet, RampLayerConfig, GetGraphicParams, GetGraphicResult, FieldDefinition, TabularAttributeSet } from '../gapiTypes';
import BaseLayer from './BaseLayer';
import AttribFC from './AttribFC';
import Extent from '../api/geometry/Extent';
import TreeNode from './TreeNode';

export default class AttribLayer extends BaseLayer {

    protected constructor (infoBundle: InfoBundle, config: RampLayerConfig, reloadTree?: TreeNode) {

        super(infoBundle, config, reloadTree);
        this.supportsIdentify = true;
    }

    // only here to make typescript casting nice
    protected getFC(layerIdx: number|string, validRoot: boolean = false): AttribFC {
        return (<AttribFC>super.getFC(layerIdx, validRoot));
    }

    /**
     * Take a layer config from the RAMP application and derives a configuration for an ESRI layer
     *
     * @param rampLayerConfig snippet from RAMP for this layer
     * @returns configuration object for the ESRI layer representing this layer
     */
    protected makeEsriLayerConfig(rampLayerConfig: any): any {
        // TODO flush out
        // NOTE: it would be nice to put esri.LayerProperties as the return type, but since we are cheating with refreshInterval it wont work
        //       we can make our own interface if it needs to happen (or can extent the esri one)
        const esriConfig: any = super.makeEsriLayerConfig(rampLayerConfig);

        // TODO add any extra properties for attrib-based layers here
        // TODO definitionExpression / filter default support here?

        return esriConfig;
    }

    /**
     * Invokes the process to get the full set of attribute values for the given sublayer.
     * Repeat calls will re-use the downloaded values unless the values have been explicitly cleared.
     *
     * @param {Integer | String} [layerIdx] targets a layer index or uid to get attributes for. Uses first/only if omitted.
     * @returns {Promise} resolves with set of attribute values
     */
    getAttributes (layerIdx: number | string = undefined): Promise<AttributeSet> {
        return this.getFC(layerIdx).attLoader.getAttribs();
    }

    /**
     * Returns an array of field definitions about the given sublayer's fields. Raster layers will have empty arrays.
     *
     * @param {Integer | String} [layerIdx] targets a layer index or uid to get fields for. Uses first/only if omitted.
     * @returns {Array} list of field definitions
     */
    getFields (layerIdx: number | string = undefined): Array<FieldDefinition> {
        // extra fancy so we dont have to expose the ESRI field class
        return this.getFC(layerIdx).getFields();
    }

    /**
     * Returns the geometry type of the given sublayer.
     *
     * @param {Integer | String} [layerIdx] targets a layer index or uid to get the geometry type of. Uses first/only if omitted.
     * @returns {Array} list of field definitions
     */
    getGeomType (layerIdx: number | string = undefined): string {
        return this.getFC(layerIdx).geomType;
    }

    /**
     * Returns the name field of the given sublayer.
     *
     * @param {Integer | String} [layerIdx] targets a layer index or uid to get the name field of. Uses first/only if omitted.
     * @returns {string} name field
     */
    getNameField (layerIdx: number | string = undefined): string {
        return this.getFC(layerIdx).nameField;
    }

    /**
     * Returns the OID field of the given sublayer.
     *
     * @param {Integer | String} [layerIdx] targets a layer index or uid to get the OID field of. Uses first/only if omitted.
     * @returns {string} OID field
     */
    getOidField (layerIdx: number | string = undefined): string {
        return this.getFC(layerIdx).oidField;
    }

    /**
     * Requests that an attribute load request be aborted. Useful when encountering a massive dataset or a runaway process.
     *
     * @param {Integer | String} [layerIdx] targets a layer index or uid to stop loading attributes for. Uses first/only if omitted.
     */
    abortAttributeLoad (layerIdx: number | string = undefined): void {
        this.getFC(layerIdx).attLoader.abortAttribLoad();
    }

    /**
     * Requests that any downloaded attribute sets be removed from memory. The next getAttributes request will pull from the server again.
     *
     * @param {Integer | String} [layerIdx] targets a layer index or uid to detroy attributes for. Uses first/only if omitted.
     */
    destroyAttributes (layerIdx: number | string = undefined): void {
        this.getFC(layerIdx).attLoader.destroyAttribs();
    }

    // formerly known as getFormattedAttributes
    /**
     * Invokes the process to get the full set of attribute values for the given sublayer,
     * formatted in a tabular format. Additional data properties are also included.
     * Repeat calls will re-use the downloaded values unless the values have been explicitly cleared.
     *
     * @param {Integer | String} [layerIdx] targets a layer index or uid to get tabular attributes for. Uses first/only if omitted.
     * @returns {Promise} resolves with set of tabular attribute values
     */
    getTabularAttributes (layerIdx: number | string = undefined): Promise<TabularAttributeSet> {
        return this.getFC(layerIdx).getTabularAttributes();
    }

    /**
     * Get the feature count for the given sublayer.
     *
     * @param {Integer | String} [layerIdx] targets a layer index or uid to get the feature count for. Uses first/only if omitted.
     * @returns {Integer} number of features in the sublayer
     */
    getFeatureCount (layerIdx: number | string = undefined): number {
        return this.getFC(layerIdx).featureCount;
    }

    // TODO think about this name. using getGraphic for consistency.
    /**
     * Gets information on a graphic in the most efficient way possible. Options object properties:
     * - getGeom ; a boolean to indicate if the result should include graphic geometry
     * - getAttribs ; a boolean to indicate if the result should include graphic attributes
     * - unboundMap ; an optional RampMap reference. Only required if geometry was requested and the layer has not been added to a map.
     *
     * @param {Integer} objectId the object id of the graphic to find
     * @param {Object} options options object for the request, see above
     * @param {Integer | String} [layerIdx] targets a layer index or uid to find the graphic in. Uses first/only if omitted.
     * @returns {Promise} resolves with a fake graphic containing the requested information
     */
    getGraphic (objectId: number, options: GetGraphicParams, layerIdx: number | string = undefined): Promise<GetGraphicResult> {
        return this.getFC(layerIdx).getGraphic(objectId, options);
    }

    /**
     * Gets the icon for a specific feature, as an SVG string.
     *
     * @param {Integer} objectId the object id of the feature to find
     * @param {Integer | String} [layerIdx] targets a layer index or uid to find the icon in. Uses first/only if omitted.
     * @returns {Promise} resolves with an svg string encoding of the icon
     */
    getIcon (objectId: number, layerIdx: number | string = undefined): Promise<string> {
        return this.getFC(layerIdx).getIcon(objectId);
    }

    /**
     * Applies an SQL filter to the layer. Will overwrite any existing filter for the given key.
     * Use `1=2` for a "hide all" where clause.
     *
     * @param {String} filterKey the filter key / named filter to apply the SQL to
     * @param {String} whereClause the WHERE clause of the filter
     * @param {Integer | String} [layerIdx] targets a layer index or uid to apply the filter to. Uses first/only if omitted.
     */
    setSqlFilter(filterKey: string, whereClause: string, layerIdx: number | string = undefined): void {
        this.getFC(layerIdx).setSqlFilter(filterKey, whereClause);
    }

    /**
     * Returns the value of a named SQL filter for a given sublayer.
     *
     * @param {String} filterKey the filter key / named filter to view
     * @param {Integer | String} [layerIdx] targets a layer index or uid that has the filter. Uses first/only if omitted.
     * @returns {String} the value of the where clause for the filter. Empty string if not defined.
     */
    getSqlFilter(filterKey: string, layerIdx: number | string = undefined): string {
        return this.getFC(layerIdx).getSqlFilter(filterKey);
    }

    // TODO this makes for a fairly gnarly param. i.e. to target a sublayer with no extras, gotta call
    //      mylayer.getFilterOIDs(undefined, undefined, myUid)
    //      changing the two params to an options object somewhat helps, though that would also be optional param.
    /**
     * Gets array of object ids that currently pass any filters for the given sublayer
     *
     * @param {Array} [exclusions] list of any filters keys to exclude from the result. omission includes all filters
     * @param {Extent} [extent] if provided, the result list will only include features intersecting the extent
     * @param {Integer | String} [layerIdx] targets a layer index or uid to inspect. Uses first/only if omitted.
     * @returns {Promise} resolves with array of object ids that pass the filter. if no filters are active, resolves with undefined.
     */
    getFilterOIDs(exclusions: Array<string> = [], extent: Extent = undefined, layerIdx: number | string = undefined): Promise<Array<number>> {
        return this.getFC(layerIdx).getFilterOIDs(exclusions, extent);
    }

    /**
     * Applies the current filter settings to the physical map layer.
     *
     * @function applySqlFilter
     * @param {Array} [exclusions] list of any filters to exclude from the result. omission includes all keys
     * @param {Integer | String} [layerIdx] targets a layer index or uid to update. Uses first/only if omitted.
     */
    applySqlFilter (exclusions: Array<string> = [], layerIdx: number | string = undefined): void {
        this.getFC(layerIdx).applySqlFilter(exclusions);
    }

}