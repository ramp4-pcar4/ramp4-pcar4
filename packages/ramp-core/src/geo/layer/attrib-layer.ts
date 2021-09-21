// put things here that would be common to all esri attribute layers.
// used for layer types defined by Core RAMP.
// TODO add proper comments

import { AttribFC, CommonLayer, InstanceAPI } from '@/api/internal';
import {
    AttributeSet,
    Extent,
    FieldDefinition,
    GetGraphicResult,
    GetGraphicParams,
    GeometryType,
    RampLayerConfig,
    TabularAttributeSet
} from '@/geo/api';

export class AttribLayer extends CommonLayer {
    protected constructor(rampConfig: RampLayerConfig, $iApi: InstanceAPI) {
        super(rampConfig, $iApi);
        this.supportsIdentify = true;
    }

    // only here to make typescript casting nice
    protected getFC(
        layerIdx: number | string | undefined,
        validRoot: boolean = false
    ): AttribFC | undefined {
        return <AttribFC>super.getFC(layerIdx, validRoot);
    }

    /**
     * Take a layer config from the RAMP application and derives a configuration for an ESRI layer
     *
     * @param rampLayerConfig snippet from RAMP for this layer
     * @returns configuration object for the ESRI layer representing this layer
     */
    protected makeEsriLayerConfig(rampLayerConfig: RampLayerConfig): any {
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
    getAttributes(layerIdx: number | string | undefined = undefined): Promise<AttributeSet> {
        const fc = this.getFC(layerIdx);
        if (fc && fc.attLoader) {
            return fc.attLoader.getAttribs();
        } else {
            this.noLayerErr();
            return Promise.resolve({ oidIndex: {}, features: [] });
        }
    }

    /**
     * Returns an array of field definitions about the given sublayer's fields. Raster layers will have empty arrays.
     *
     * @param {Integer | String} [layerIdx] targets a layer index or uid to get fields for. Uses first/only if omitted.
     * @returns {Array} list of field definitions
     */
    getFields(layerIdx: number | string | undefined = undefined): Array<FieldDefinition> {
        const fc = this.getFC(layerIdx);
        if (fc) {
            return fc.getFields();
        } else {
            this.noLayerErr();
            return [];
        }
    }

    /**
     * Returns the geometry type of the given sublayer.
     *
     * @param {Integer | String} [layerIdx] targets a layer index or uid to get the geometry type of. Uses first/only if omitted.
     * @returns {Array} list of field definitions
     */
    getGeomType(layerIdx: number | string | undefined = undefined): string {
        const fc = this.getFC(layerIdx);
        if (fc) {
            return fc.geomType;
        } else {
            this.noLayerErr();
            return GeometryType.UNKNOWN;
        }
    }

    /**
     * Returns the name field of the given sublayer.
     *
     * @param {Integer | String} [layerIdx] targets a layer index or uid to get the name field of. Uses first/only if omitted.
     * @returns {string} name field
     */
    getNameField(layerIdx: number | string | undefined = undefined): string {
        const fc = this.getFC(layerIdx);
        if (fc) {
            return fc.nameField;
        } else {
            this.noLayerErr();
            return '';
        }
    }

    /**
     * Returns the OID field of the given sublayer.
     *
     * @param {Integer | String} [layerIdx] targets a layer index or uid to get the OID field of. Uses first/only if omitted.
     * @returns {string} OID field
     */
    getOidField(layerIdx: number | string | undefined = undefined): string {
        const fc = this.getFC(layerIdx);
        if (fc) {
            return fc.oidField;
        } else {
            this.noLayerErr();
            return 'OBJECTID'; // bad but might save an error in a pinch
        }
    }

    /**
     * Requests that an attribute load request be aborted. Useful when encountering a massive dataset or a runaway process.
     *
     * @param {Integer | String} [layerIdx] targets a layer index or uid to stop loading attributes for. Uses first/only if omitted.
     */
    abortAttributeLoad(layerIdx: number | string | undefined = undefined): void {
        const fc = this.getFC(layerIdx);
        if (fc && fc.attLoader) {
            fc.attLoader.abortAttribLoad();
        } else {
            this.noLayerErr();
        }
    }

    /**
     * Requests that any downloaded attribute sets be removed from memory. The next getAttributes request will pull from the server again.
     *
     * @param {Integer | String} [layerIdx] targets a layer index or uid to detroy attributes for. Uses first/only if omitted.
     */
    destroyAttributes(layerIdx: number | string | undefined = undefined): void {
        const fc = this.getFC(layerIdx);
        if (fc && fc.attLoader) {
            fc.attLoader.destroyAttribs();
        } else {
            this.noLayerErr();
        }
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
    getTabularAttributes(
        layerIdx: number | string | undefined = undefined
    ): Promise<TabularAttributeSet> {
        const fc = this.getFC(layerIdx);
        if (fc) {
            return fc.getTabularAttributes();
        } else {
            this.noLayerErr();
            return Promise.resolve({
                columns: [],
                rows: [],
                fields: [],
                oidField: 'OBJECTID'
            });
        }
    }

    /**
     * Get the feature count for the given sublayer.
     *
     * @param {Integer | String} [layerIdx] targets a layer index or uid to get the feature count for. Uses first/only if omitted.
     * @returns {Integer} number of features in the sublayer
     */
    getFeatureCount(layerIdx: number | string | undefined = undefined): number {
        const fc = this.getFC(layerIdx);
        if (fc) {
            return fc.featureCount;
        } else {
            this.noLayerErr();
            return -1;
        }
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
    getGraphic(
        objectId: number,
        options: GetGraphicParams,
        layerIdx: number | string | undefined = undefined
    ): Promise<GetGraphicResult> {
        const fc = this.getFC(layerIdx);
        if (fc) {
            return fc.getGraphic(objectId, options);
        } else {
            this.noLayerErr();
            return Promise.resolve({});
        }
    }

    /**
     * Gets the icon for a specific feature, as an SVG string.
     *
     * @param {Integer} objectId the object id of the feature to find
     * @param {Integer | String} [layerIdx] targets a layer index or uid to find the icon in. Uses first/only if omitted.
     * @returns {Promise} resolves with an svg string encoding of the icon
     */
    getIcon(objectId: number, layerIdx: number | string | undefined = undefined): Promise<string> {
        const fc = this.getFC(layerIdx);
        if (fc) {
            return fc.getIcon(objectId);
        } else {
            this.noLayerErr();
            return Promise.resolve(''); // TODO if we come up with a 'blank' svg use that here
        }
    }

    /**
     * Applies an SQL filter to the layer. Will overwrite any existing filter for the given key.
     * Use `1=2` for a "hide all" where clause.
     *
     * @param {String} filterKey the filter key / named filter to apply the SQL to
     * @param {String} whereClause the WHERE clause of the filter
     * @param {Integer | String} [layerIdx] targets a layer index or uid to apply the filter to. Uses first/only if omitted.
     */
    setSqlFilter(
        filterKey: string,
        whereClause: string,
        layerIdx: number | string | undefined = undefined
    ): void {
        const fc = this.getFC(layerIdx);
        if (fc) {
            fc.setSqlFilter(filterKey, whereClause);
        } else {
            this.noLayerErr();
        }
    }

    /**
     * Returns the value of a named SQL filter for a given sublayer.
     *
     * @param {String} filterKey the filter key / named filter to view
     * @param {Integer | String} [layerIdx] targets a layer index or uid that has the filter. Uses first/only if omitted.
     * @returns {String} the value of the where clause for the filter. Empty string if not defined.
     */
    getSqlFilter(filterKey: string, layerIdx: number | string | undefined = undefined): string {
        const fc = this.getFC(layerIdx);
        if (fc) {
            return fc.getSqlFilter(filterKey);
        } else {
            this.noLayerErr();
            return '';
        }
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
    getFilterOIDs(
        exclusions: Array<string> = [],
        extent: Extent | undefined = undefined,
        layerIdx: number | string | undefined = undefined
    ): Promise<Array<number> | undefined> {
        const fc = this.getFC(layerIdx);
        if (fc) {
            return fc.getFilterOIDs(exclusions, extent);
        } else {
            this.noLayerErr();
            return Promise.resolve(undefined);
        }
    }

    /**
     * Applies the current filter settings to the physical map layer.
     *
     * @function applySqlFilter
     * @param {Array} [exclusions] list of any filters to exclude from the result. omission includes all keys
     * @param {Integer | String} [layerIdx] targets a layer index or uid to update. Uses first/only if omitted.
     */
    applySqlFilter(
        exclusions: Array<string> = [],
        layerIdx: number | string | undefined = undefined
    ): void {
        const fc = this.getFC(layerIdx);
        if (fc) {
            fc.applySqlFilter(exclusions);
        } else {
            this.noLayerErr();
        }
    }

    protected notLoadedErr(): void {
        console.error('Attempted to manipulate the layer before it was loaded');
        console.trace();
    }
}
