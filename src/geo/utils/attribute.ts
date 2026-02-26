import { APIScope, InstanceAPI, LayerInstance } from '@/api/internal';
import type {
    Attributes,
    AttributeSet,
    BaseGeometry,
    CompactJson,
    Extent,
    FieldDefinition,
    GetGraphicServiceDetails,
    RampLayerFieldInfoConfig,
    RampLayerFieldMetadataConfig,
    TabularAttributeSet
} from '@/geo/api';
import { DataFormat, GeometryType, Graphic, NoGeometry } from '@/geo/api';
import { EsriGeometryFromJson, EsriRequest } from '@/geo/esri';
import to from 'await-to-js';
import deepmerge from 'deepmerge';
import { toRaw } from 'vue';

// NOTE has an esri type, which is bad, but this interface lives within the geo section so will permit it.
//      alternative would be swapping back and fourth between ramp and esri graphics which seems a waste
//      of cycles.
export interface AttributeLoaderDetails {
    supportsLimit?: boolean; // indicates if server will return information about what the maximum number of attributes will be downloaded in a single request
    attribs?: string; // comma delimited list of attributes to download. '*' for all
    serviceUrl?: string; // feature layer endpoint on an arcgis server
    sourceGraphics?: __esri.Collection<__esri.Graphic>; // set of graphics from non-ArcGIS server source
    sourceDataJson?: CompactJson; // payload of raw attributes from a data layer source
    maxId?: number; // current maximum OID we have downloaded. i.e. keeps track of where we are over multiple batches of downloads
    batchSize: number; // calculated maximum amount of attributes that can be downloaded in a single request
    oidField: string; // attribute name of the OID field
    permanentFilter?: string; // SQL to restrict the attributes to download
    fieldsToTrim?: Array<string>; // All string fields whose values should be trimmed
}

// See valid DOV at https://developers.arcgis.com/javascript/latest/api-reference/esri-arcade.html#SimpleVariable
/**
 * Arcade data types we are currenlty supporting
 */
type EsriArcadeVarType = 'geometry' | 'number' | 'text' | 'date';

/**
 * Maps the ESRI field type to a matching ESRI arcade variable type
 */
const arcadeTypeMapper: Map<string, EsriArcadeVarType> = new Map([
    ['integer', 'number'],
    ['small-integer', 'number'],
    ['big-integer', 'number'],
    ['single', 'number'],
    ['double', 'number'],
    ['long', 'number'],
    ['oid', 'number'],
    ['string', 'text'],
    ['geometry', 'geometry'],
    ['date', 'date']
]);

/**
 * Provides methods for handling ESRI-style attributes
 */
export class AttributeAPI extends APIScope {
    /**
     * Will populate the object id index for an attribute set.
     *
     * @param attSet attribute set that has features populated
     * @param oidField name of the object id field in the attribute set
     */
    private oidIndexer(attSet: AttributeSet, oidField: string): void {
        // process features in array order
        attSet.features.forEach((feat, idx) => {
            // create mapping of this feature's object id and its position in the features array
            attSet.oidIndex[feat[oidField]] = idx;
        });
    }

    /**
     * Will load an attribute set from an ArcGIS Server, recursively batching to work around maximum result limits.
     *
     * @param details defines the parameters for what to load
     * @param controller the controller which provides asyncronous hooks into the load, including loaded count and ability to abort
     */
    private async arcGisBatchLoad(
        details: AttributeLoaderDetails,
        controller: AsynchAttribController
    ): Promise<Array<any>> {
        if (controller.loadAbortFlag) {
            // stop that stop that
            return [];
        }

        // construct additional filter if we have a permanent filter
        const permFilter = details.permanentFilter ? ` AND ${details.permanentFilter}` : '';

        // make a web call that downloads a chonk of attributes.
        const params: __esri.RequestOptions = {
            query: {
                where: `${details.oidField}>${details.maxId}${permFilter}`,
                outFields: details.attribs,
                orderByFields: details.oidField,
                returnGeometry: 'false',
                f: 'json'
            }
        };

        const [err, serviceResult] = await to<__esri.RequestResponse>(
            EsriRequest(details.serviceUrl + '/query', params)
        );
        if (!serviceResult) {
            // case where service request was unsuccessful
            console.error(`ArcGIS batch load error: ${details.serviceUrl}`, err);
            return Promise.reject(new Error(`ArcGIS batch load error: ${details.serviceUrl}`));
        }

        if (!serviceResult.data || !serviceResult.data.features) {
            // case where service request was successful, but missing data
            console.error(`ArcGIS batch load gave no data/features: ${details.serviceUrl}`);
            return Promise.reject(new Error(`ArcGIS batch load gave no data/features: ${details.serviceUrl}`));
        }

        let feats: Array<any> = serviceResult.data.features;

        const len = feats.length;

        if (len > 0) {
            // figure out if we hit the end of the data. different logic for newer vs older servers.
            controller.loadedCount += len;
            let moreDataToLoad: boolean;
            if (details.supportsLimit) {
                moreDataToLoad = serviceResult.data.exceededTransferLimit;
            } else {
                if (details.batchSize === -1) {
                    // this is our first batch. set the max batch size to this batch size
                    details.batchSize = len;
                }
                moreDataToLoad = len >= details.batchSize;
            }

            // Trim values in current batch
            feats = this.trimFeatureSetAttributes(feats, details.fieldsToTrim ?? []);

            if (moreDataToLoad) {
                // call the service again for the next batch of data.
                // max id becomes last object id in the current batch

                details.maxId = feats[len - 1].attributes[details.oidField];

                const futureFeats = await this.arcGisBatchLoad(details, controller);
                // take our current batch, append on everything the recursive call loaded, and return
                // return empty list if aborted
                return controller.loadAbortFlag ? [] : feats.concat(futureFeats);
            } else {
                // done thanks
                // return empty list if aborted

                return controller.loadAbortFlag ? [] : feats;
            }
        } else {
            // no more data.  we are done
            return [];
        }
    }

    /**
     * Will load an attribute set from an ArcGIS Server layer source.
     *
     * @param details defines the parameters for what to load
     * @param controller the controller which provides asyncronous hooks into the load, including loaded count and ability to abort
     */
    async loadArcGisServerAttributes(
        details: AttributeLoaderDetails,
        controller: AsynchAttribController
    ): Promise<AttributeSet> {
        details.maxId = -1;
        details.batchSize = -1;

        const serverResult: Array<any> = await this.arcGisBatchLoad(details, controller);

        // hoist the attributes from the .attributes property
        const attSet: AttributeSet = {
            features: serverResult.map(aa => aa.attributes),
            oidIndex: {}
        };

        this.oidIndexer(attSet, details.oidField);

        // done thanks
        controller.loadIsDone = true;
        return attSet;
    }

    /**
     * Will generate an attribute set from a feature layer with local data (i.e. a file layer).
     *
     * @param details defines the parameters for what to load
     * @param controller the controller which provides asyncronous hooks into the load, including loaded count and ability to abort
     */
    async loadGraphicsAttributes(
        details: AttributeLoaderDetails,
        controller: AsynchAttribController
    ): Promise<AttributeSet> {
        if (!details.sourceGraphics) {
            throw new Error('No .sourceGraphics provided to file layer attribute loader');
        }

        // Ideally we would have a way to strip out any graphics/attributes that do not pass a
        // permanent filter. Either here, or where we set sourceGraphics in the extractLayerMetadata
        // method of file-layer. Or even better, applied against the incoming GeoJSON prior to converting
        // it to a Feature Layer; this would be the most memory efficient, we end up with a feature layer
        // containing only things that pass the permanent filter.
        // However at the moment there is no nice sql filter thing available for these raw formats.
        // Could resurrect AQL and mod it for GeoJSON formats, good times.
        // https://github.com/fgpv-vpgf/fgpv-vpgf/blob/master/packages/ramp-geoapi/src/query.js#L218
        // But for now, everything gets loaded in the attribute bundle (it is already local so no
        // web traffic impact). Things will still be filtered out of identify and the table. The
        // only noticeable impacts of this lazy approach is memory waste (both in layer and in
        // attribute bundle), and the data grid will say "X records filtered from Y records",
        // which is true, but a permanent filter ideally should present things as if they were
        // never part of the layer.

        // NOTE: All attribute string trimming is done at layer creation, not here.
        // See file-utils.js --> geoJsonToEsriJson() for details/implementation.

        const pluckedAttributes = details.sourceGraphics.map(g => toRaw(g).attributes);

        const attSet: AttributeSet = {
            features: pluckedAttributes.toArray(),
            oidIndex: {}
        };
        this.oidIndexer(attSet, details.oidField);

        controller.loadIsDone = true;
        controller.loadedCount = attSet.features.length;
        return attSet;
    }

    /**
     * Will generate an attribute set from a compact json object. This is our base format for
     * DataLayer sources that are not hosted on ArcGIS server. Provided sourceDataJson on the details
     * parameter has already been cleaned and has object ids inserted.
     *
     * @param details defines the parameters for what to load
     * @param controller the controller which provides asyncronous hooks into the load, including loaded count and ability to abort
     */
    async loadCompactJsonAttributes(
        details: AttributeLoaderDetails,
        controller: AsynchAttribController
    ): Promise<AttributeSet> {
        if (!details.sourceDataJson) {
            throw new Error('No .sourceDataJson provided to file data-layer attribute loader');
        }

        const fields = details.sourceDataJson.fields;

        const fieldsToTrim = details.fieldsToTrim ?? [];

        // TODO is there a more efficient way to translate from compact json to attribute objects? Do we care?
        const rampAttributes: Array<Attributes> = details.sourceDataJson.data.map(attRow => {
            const attNugget: any = {};
            attRow.forEach((val: any, i: number) => {
                // Can just trim the values directly here
                attNugget[fields[i]] = typeof val === 'string' && fieldsToTrim.includes(fields[i]) ? val.trim() : val;
            });

            return attNugget;
        });

        const attSet: AttributeSet = {
            features: rampAttributes,
            oidIndex: {}
        };
        this.oidIndexer(attSet, details.oidField);

        controller.loadIsDone = true;
        controller.loadedCount = attSet.features.length;

        // at this point, we don't need the contents of .sourceDataJson anymore.
        // since the details object remains in the attribute loader as a property, the var
        // will persist and double the memory footprint.
        // so we clear it here.
        // TODO after things are working well, figure out if we need to preserve it as a caching type option.
        //      Will reloading non spatial data ever happen or make sense, other than it errored on load?
        details.sourceDataJson = undefined;

        return attSet;
    }

    async loadSingleFeature(details: GetGraphicServiceDetails): Promise<Graphic> {
        const params: __esri.RequestOptions = {
            query: {
                f: 'json',
                objectIds: details.oid,
                returnGeometry: details.includeGeometry,
                outFields: details.attribs
            }
        };
        if (typeof details.maxOffset !== 'undefined') {
            params.query.maxAllowableOffset = details.maxOffset;
        }
        if (typeof details.mapSR !== 'undefined') {
            params.query.outSR = details.mapSR;
        }

        // set geometry precision if value is a non-negative integer
        if (typeof details.geometryPrecision !== 'undefined' && details.geometryPrecision >= 0) {
            params.query.geometryPrecision = details.geometryPrecision;
        }

        const [err, serviceResult] = await to<__esri.RequestResponse>(
            EsriRequest(details.serviceUrl + '/query', params)
        );
        if (!serviceResult) {
            // case where service request was unsuccessful
            console.error(`ArcGIS single feature load error: ${details.serviceUrl}`, err);
            return Promise.reject(new Error(`ArcGIS single feature load error: ${details.serviceUrl}`));
        }

        if (!serviceResult.data || !serviceResult.data.features) {
            // case where service request was successful, but missing data
            console.error(`Could not locate feature ${details.oid} for layer ${details.serviceUrl}`);
            return Promise.reject(new Error(`Could not locate feature ${details.oid} for layer ${details.serviceUrl}`));
        }

        const feats: Array<any> = serviceResult.data.features;
        if (feats.length > 0) {
            let geom: BaseGeometry;

            const feat = this.trimFeatureSetAttributes([feats[0]], details.fieldsToTrim ?? [])[0];

            if (details.includeGeometry) {
                // server result omits spatial reference
                feat.geometry.spatialReference = serviceResult.data.spatialReference;
                const localEsriGeom = EsriGeometryFromJson(feat.geometry)!;
                geom = this.$iApi.geo.geom.geomEsriToRamp(localEsriGeom);
            } else {
                geom = new NoGeometry();
            }

            // attributes are always there, so we always return them. letter caller decide to discard them or not.
            return new Graphic(geom, '', feat.attributes);
        }

        // We got no features, so throw error
        return Promise.reject(new Error(`Could not locate feature ${details.oid} for layer ${details.serviceUrl}`));
    }

    /**
     * Trims the desired attribute values for a feature set's attribute groups.
     * @param features The featureset to be trimmed.
     * @param fieldsToTrim Array of string names of the attributes to be trimmed.
     * @returns The featureset, trimmed.
     */
    trimFeatureSetAttributes(features: Array<any>, fieldsToTrim: Array<string>): Array<any> {
        // For each attribute (column) to be trimmed, trim all fields in that column
        fieldsToTrim.forEach(attrToTrim => {
            features.forEach(feat => {
                // Only trim if value is a string
                if (typeof feat.attributes[attrToTrim] === 'string') {
                    feat.attributes[attrToTrim] = feat.attributes[attrToTrim].trim();
                }
            });
        });
        return features;
    }

    /**
     * Will order the fields of a layer based on its fieldInfo.
     *
     * @param currentFields the current order of the fields
     * @param orderInfo the fieldInfo config that contains the order the fields should be displayed in
     */
    orderFields(
        currentFields: Array<FieldDefinition>,
        orderInfo: Array<RampLayerFieldInfoConfig>
    ): Array<FieldDefinition> {
        const magicFinder = (sauce: Array<any>, targetName: string): number => {
            // finds index of matching name, -1 if not in array.
            return sauce.findIndex((protoField: any) => protoField.name === targetName);
        };

        const magicSorter = (field1: FieldDefinition, field2: FieldDefinition) => {
            // return value:
            // negative if f1 is less than f2; positive if f1 is greater than f2; zero if they are equal (should be impossible)

            // find in order, if exists
            const ordF1 = magicFinder(orderInfo, field1.name);
            const ordF2 = magicFinder(orderInfo, field2.name);

            if (ordF1 === -1 && ordF2 === -1) {
                // neither have order. fallback to source order,
                return magicFinder(currentFields, field1.name) - magicFinder(currentFields, field2.name);
            } else if (ordF1 === -1) {
                // field 1 is unordered, so field 2 must come before
                return 1;
            } else if (ordF2 === -1) {
                // field 2 is unordered, so field 1 must come before
                return -1;
            } else {
                return ordF1 - ordF2;
            }
        };

        // copy array so magicFinder doesn't start reading half-sorted values
        return currentFields.slice().sort(magicSorter);
    }

    /**
     * Will apply any field config metadata to a layer.
     * Should be used after loading process has populated .fields property of the layer
     *
     * @param layer the layer to apply the additional configuration to. Will be modified.
     * @param fieldMetadata field settings from the config object. can be undefined
     */
    applyFieldMetadata(
        layer: LayerInstance,
        fieldMetadata: RampLayerFieldMetadataConfig | undefined = undefined
    ): void {
        // TODO ensure we do not have to worry about case mismatch of field names.

        // check for no enhancements requested
        if (!fieldMetadata || !fieldMetadata.fieldInfo) {
            layer.fieldList = '*';
            return;
        }

        // Find the fields that should be trimmed (have trim = true)...
        const fieldsToTrim = fieldMetadata.fieldInfo.filter(elem => elem.trim).map(elem => elem.name);

        // ...and set their trim properties on the layer
        layer.fields.forEach(field => {
            if (fieldsToTrim.includes(field.name)) {
                field.trim = true;
            }
        });

        // if order enforced, order the fields first before doing exclusive fields check
        if (fieldMetadata?.enforceOrder && fieldMetadata?.fieldInfo && fieldMetadata?.fieldInfo.length > 0) {
            // demand respect for order
            layer.fields = this.orderFields(layer.fields, fieldMetadata.fieldInfo);
            layer.fieldList = fieldMetadata.fieldInfo.map(f => f.name).join(',');
        }

        // if exlusive fields, only respect fields in the field info array
        if (fieldMetadata.exclusiveFields) {
            // ensure object id field is included
            if (!fieldMetadata.fieldInfo.find(f => f.name === layer.oidField)) {
                fieldMetadata.fieldInfo.push({ name: layer.oidField });
            }

            // TODO do we also need to ensure fields required by other things are auto-included?
            //      e.g. maptip
            //           ref fields for class breaks or unique value renderers
            //           name field
            //      alternately, we don't, and insist config author properly defines their fields
            //      might also want to consider an additional attribute on fields, something like
            //      "coreHidden" that indicates the field has to exist, but should not be shown
            //      on things like details panes or grids

            layer.fieldList = fieldMetadata.fieldInfo.map(f => f.name).join(',');
            const tempFI = fieldMetadata.fieldInfo; // required because typescript is throwing a fit about undefineds inside the .filter
            layer.fields = layer.fields.filter(origField => {
                return tempFI.find(fInfo => fInfo.name === origField.name);
            });
        } else {
            layer.fieldList = '*';
        }

        // if any aliases overrides, apply them
        fieldMetadata.fieldInfo.forEach(cf => {
            if (cf.alias) {
                const ff = layer.fields.find(fff => fff.name === cf.name);
                if (ff) {
                    ff.alias = cf.alias;
                }
            }
        });
    }

    /**
     * Util function to manage trickery. Non-Arcgis layer sources can have field names that are bad keys.
     * Our loader will have corrected them, but the ramp layer config may still be referencing the original names
     * (e.g. nameField, maptipField).
     * This function will attempt to return the valid field name for a given original field name.
     *
     * @param fields array of valid fields for the layer
     * @param originalName field name as defined in the source
     * @returns a valid field name to use. Empty string if none found
     */
    fieldValidator(fields: Array<FieldDefinition>, originalName: string): string {
        if (fields.findIndex(f => f.name === originalName) === -1) {
            // no direct match found.
            const validField = fields.find(f => f.alias === originalName);
            if (validField) {
                return validField.name;
            } else {
                // give warning and return OBJECTID, which is guaranteed to exist in file layer.
                // Issue is not critical enough to blow up the app with an error
                console.warn(`Cannot find name field in layer field list: ${originalName}`);
                return '';
            }
        } else {
            // original name was ok
            return originalName;
        }
    }

    /**
     * Will generate the tabular transformation of an attribute set for a layer.
     * The result will also be cached in the attribute source.
     * If the result is already cached, it will be returned.
     * The layer must be the owner of the attribute source.
     * This method is generally called from an internal call within a layer.
     * It exists as a public API to allow re-use across diverging layer types.
     *
     * @param layer the layer owning the attributes and the attribute source
     * @param attSource the attribute source for the attributes to transform
     */
    async generateTabularAttributes(layer: LayerInstance, attSource: AttribSource): Promise<TabularAttributeSet> {
        if (!attSource.attLoader.tabularAttributesCache) {
            // do not use await here. we want to store the promise and pass it on, not block until the promise resolves.
            attSource.attLoader.tabularAttributesCache = this.$iApi.geo.attributes.generateTabularAttributesWorker(
                layer,
                attSource
            );
        }

        return attSource.attLoader.tabularAttributesCache;
    }

    /**
     * Worker method for the above generateTabularAttributes call.
     * Separating allows us to use async syntax for the heavy lifting,
     * but provides a promise via method that can easily be assigned to the
     * cache. Difficult to save your own async promise within your own method.
     *
     * @param layer the layer owning the attributes and the attribute source
     * @param attSource the attribute source for the attributes to transform
     */
    private async generateTabularAttributesWorker(
        layer: LayerInstance,
        attSource: AttribSource
    ): Promise<TabularAttributeSet> {
        // if we decide we want to cache the result in this method (could be done),
        // we need to remove the async keyword and manually manage our promises.
        // this will let us grab the result promise and store it in the attribute source.

        if (layer.dataFormat === DataFormat.ESRI_RASTER) {
            throw new Error('Attempting to get attributes on a raster layer.');
        }

        // TODO figure out how to handle a failure in .getAttribs. See comment catch block at bottom of function.
        const attSet = await attSource.attLoader.getAttribs();

        if (!attSet.features || attSet.features.length === 0) {
            // return empty attributes (this will happen if the attribute load was aborted)
            return {
                columns: [],
                rows: [],
                fields: [],
                oidField: ''
            };
        }

        // create columns array consumable by datables. We don't include the alias defined in the config here as
        // the grid handles it seperately.
        const columns = layer.fields
            .filter(field =>
                // assuming there is at least one attribute - empty attribute bundle promises should be rejected, so it never even gets this far
                // filter out fields where there is no corresponding attribute data
                Object.prototype.hasOwnProperty.call(attSet.features[0], toRaw(field).name)
            )
            .map(field => ({
                data: toRaw(field).name, // TODO calling this data is really unintuitive. consider global rename to fieldName, name, attribName, etc.
                title: toRaw(field).alias || toRaw(field).name
            }));

        // derive the icon for the row
        // TODO figure out if we want to change the system attributes. making a copy for now with deepmerge.
        // if we add rv properties to the feature in the attribute set, we may see those fields showing up in details panes, API outputs, etc.
        // that said, copying means we double the size of attributes in memory.
        const rows = attSet.features.map(feature => {
            const att = deepmerge({}, feature);
            att.rvInteractive = '';
            att.rvSymbol = layer.getIcon(feature[layer.oidField]); // this.renderer?.getGraphicIcon(feature);
            att.rvUid = layer.uid;
            return att;
        });

        // if a field name resembles a function, the data table will treat it as one.
        // to get around this, we add a function with the same name that returns the value,
        // tricking that silly datagrid.
        columns.forEach(c => {
            if (c.data.slice(-2) === '()') {
                // have to use function() to get .this to reference the row.
                // arrow notation will reference the attribFC class.
                const secretFunc = function () {
                    // @ts-expect-error TODO: explain why this is needed or remove
                    return this[c.data];
                };

                const stub = c.data.slice(0, -2); // function without brackets
                rows.forEach(r => {
                    r[stub] = secretFunc;
                });
            }
        });

        return {
            columns,
            rows,
            fields: layer.fields, // keep fields for reference ...
            oidField: layer.oidField // ... keep a reference to id field ...
        };

        /* OLD PROMISE CATCH BLOCK
            .catch(e => {
                this.attLoader.tabularAttributesCache = undefined; // delete cached promise when the geoApi `getAttribs` call fails, so it will be requested again next time `getAttributes` is called;
                if (e === 'ABORTED') { // TODO see if we're still thowing an error with message ABORTED
                    throw new Error('ABORTED');
                } else {
                    throw new Error('Attrib loading failed');
                }
            });
        */
    }

    /**
     * Gives an arcade variable type that corresponds to a field type.
     *
     * @param {string} fieldType a RAMP field type (same as ESRI field type)
     * @returns {EsriArcadeVarType | undefined} matching arcade type, or undefined if a valid mapping could not be derived
     */
    fieldTypeToArcade(fieldType: string): EsriArcadeVarType | undefined {
        return arcadeTypeMapper.get(fieldType);
    }
}

/**
 * Bundles all the attribute managing objects together and provides getters that avoid
 * undefined checks.
 * @internal
 */
export class AttribSource {
    /**
     * Actual attribute loader, if exists
     */
    private _attribLoader: AttributeLoaderBase | undefined;

    /**
     * Actual quick cache, if exists
     */
    private _quickCache: QuickCache | undefined;

    /**
     * Used to access the attribute loader in layer classes
     */
    get attLoader(): AttributeLoaderBase {
        if (this._attribLoader) {
            return this._attribLoader;
        } else {
            console.trace();
            throw new Error('Attempted to load attributes prior to layer being loaded.');
        }
    }

    set attLoader(v: AttributeLoaderBase) {
        this._attribLoader = v;
    }

    /**
     * Used to access the quick cache in layer classes
     */
    get quickCache(): QuickCache {
        if (this._quickCache) {
            return this._quickCache;
        } else {
            console.trace();
            throw new Error('Attempted to access attribute cache prior to layer being loaded.');
        }
    }

    set quickCache(v: QuickCache) {
        this._quickCache = v;
    }

    /**
     * Erase all local data in this object
     */
    clearAll(): void {
        if (this._attribLoader) {
            this._attribLoader.destroyAttribs();
        }
        if (this._quickCache) {
            this._quickCache.clearAll();
        }
    }
}

/**
 * An object that is passed into the asynch attribute loader. The loader can read and update these properties on each iteration
 * @internal
 */
export class AsynchAttribController {
    loadedCount: number;
    loadAbortFlag: boolean;
    loadIsDone: boolean;

    constructor() {
        this.loadedCount = 0;
        this.loadAbortFlag = false;
        this.loadIsDone = false;
    }
}

/**
 * Manages the downloading of an entire attribute set (feature class).
 * The base class contains common definitions, but is expected to be inherited.
 * @internal
 */
export class AttributeLoaderBase extends APIScope {
    protected aac: AsynchAttribController;
    protected loadPromise: Promise<AttributeSet> | undefined;
    protected details: AttributeLoaderDetails;
    tabularAttributesCache: Promise<TabularAttributeSet> | undefined;

    protected constructor(iApi: InstanceAPI, details: AttributeLoaderDetails) {
        super(iApi);
        this.aac = new AsynchAttribController();
        this.details = details;
    }

    /**
     * Allows the list of field names to download to be updated. Allows support for divergant loading
     * flows between different layers.
     *
     * @param {string} newList
     */
    updateFieldList(newList: string): void {
        this.details.attribs = newList;
    }

    updateFieldsToTrim(newFieldsToTrim: Array<string>): void {
        this.details.fieldsToTrim = newFieldsToTrim;
    }

    getAttribs(): Promise<AttributeSet> {
        if (!this.loadPromise) {
            // promise creation
            this.aac = new AsynchAttribController();
            this.loadPromise = this.loadPromiseGenerator();
        }
        return this.loadPromise;
    }

    abortAttribLoad(): void {
        this.aac.loadAbortFlag = true;

        // We do not destroy the promise at this point.
        // Abort simply stops the cycle. destroyAttribs()
        // will erase and reset the promise, and we let the
        // caller decide when to do that.
        // Caller would use the public method abortAttributeLoad()
        // on the layer.
    }

    destroyAttribs(): void {
        // erase private promise
        this.loadPromise = undefined;
        this.tabularAttributesCache = undefined;
        this.aac.loadIsDone = false;
        this.aac.loadedCount = 0;
    }

    loadCount(): number {
        return this.aac.loadedCount;
    }

    isLoaded(): boolean {
        return this.aac.loadIsDone;
    }

    isLoadAborted(): boolean {
        return this.aac.loadAbortFlag;
    }

    // this will be overrideable.
    // so one function for arcgis server. another for baked featurelayer. another for json file source
    protected loadPromiseGenerator(): Promise<AttributeSet> {
        // this should never run
        return Promise.reject(new Error('Subclass of AttributeLoaderBase did not implement loadPromiseGenerator'));
    }
}

/**
 * Manages the downloading of an entire attribute set (feature class) from an
 * ArcGIS Server.
 * @internal
 */
export class ArcServerAttributeLoader extends AttributeLoaderBase {
    constructor(iApi: InstanceAPI, details: AttributeLoaderDetails) {
        super(iApi, details);
    }

    protected loadPromiseGenerator(): Promise<AttributeSet> {
        return this.$iApi.geo.attributes.loadArcGisServerAttributes(this.details, this.aac);
    }
}

/**
 * Manages the extraction of an entire attribute set (feature class) from a
 * "File" type layer (something with data fully contained in the local layer).
 * @internal
 */
export class FileLayerAttributeLoader extends AttributeLoaderBase {
    constructor(iApi: InstanceAPI, details: AttributeLoaderDetails) {
        super(iApi, details);
    }

    protected loadPromiseGenerator(): Promise<AttributeSet> {
        return this.$iApi.geo.attributes.loadGraphicsAttributes(this.details, this.aac);
    }
}

/**
 * Manages the extraction of an entire attribute set (feature class) from a
 * Data Layer that is not hosted in an ArcGIS Table service (something with data fully loaded upfront).
 * @internal
 */
export class DataLayerAttributeLoader extends AttributeLoaderBase {
    constructor(iApi: InstanceAPI, details: AttributeLoaderDetails) {
        super(iApi, details);
    }

    protected loadPromiseGenerator(): Promise<AttributeSet> {
        return this.$iApi.geo.attributes.loadCompactJsonAttributes(this.details, this.aac);
    }
}

/**
 * Manages the quick lookup of attributes and geometries for individual features.
 * Used when it makes sense to just download a small set of data instead of the entire layer.
 * @internal
 */
export class QuickCache {
    private attribs: { [key: number]: Attributes };

    // the "any" type here is funny. for points, its BaseGeometry, for line/poly based, it's an object indexed by scale,
    // which then containts an object indexed by key (likely oid) and returns BaseGeometry.
    // will keep as any since it's private and the interfaces are casting to BaseGeometry. otherwise would need type shenannigans.

    private geoms: { [key: number]: any };

    // extents for feature layer graphics that do not have a point geometry
    private extents: { [key: number]: Extent };

    /**
     * Used to determine if we need to cache geometry at different scales.
     */
    readonly isPoint: boolean;

    constructor(geomType: GeometryType) {
        this.attribs = {};
        this.geoms = {};
        this.extents = {};
        this.isPoint = geomType === GeometryType.POINT || geomType === GeometryType.MULTIPOINT;
    }

    private getScaleStore(scale: number): { [key: number]: any } {
        if (!this.geoms[scale]) {
            // make a new store for this scale
            this.geoms[scale] = {};
        }
        return this.geoms[scale];
    }

    private getGeomStore(scale: number | undefined = undefined): {
        [key: number]: BaseGeometry;
    } {
        // polygon and line layers have to also cache their geometry by scale level, as the
        // geometry can be simplified at smaller scales

        if (this.isPoint) {
            return this.geoms;
        } else {
            if (typeof scale === 'undefined') {
                throw new Error('Attempted to access geometry store for non-point layer without providing a map scale');
            }
            return this.getScaleStore(scale);
        }
    }

    /**
     * Get the cached attributes of a feature
     *
     * @param key the OID of the feature
     * @returns the cached attributes of the feature, if it exists
     */
    getAttribs(key: number): Attributes {
        return this.attribs[key];
    }

    /**
     * Cache the attributes of a feature
     *
     * @param key the OID of the feature
     * @param atts the attributes of the feature
     */
    setAttribs(key: number, atts: Attributes): void {
        this.attribs[key] = atts;
    }

    /**
     * Get a cached geometry of a feature
     *
     * @param key the OID of the feature
     * @param scale the map scale the geometry is valid at. Ignored / not required for Point/Multipoint geometry.
     * @returns the cached geometry of the feature, if it exists
     */
    getGeom(key: number, scale: number | undefined = undefined): BaseGeometry | undefined {
        // polygon and line layers have to also cache their geometry by scale level, as the
        // geometry can be simplified at smaller scales
        return this.getGeomStore(scale)[key];
    }

    /**
     * Cache the geometry of a feature
     *
     * @param key the OID of the feature
     * @param geom the geometry of the feature
     * @param scale the map scale the geometry was drawn at. Ignored / not required for Point/Multipoint geometry.
     */
    setGeom(key: number, geom: BaseGeometry, scale: number | undefined = undefined): void {
        const store = this.getGeomStore(scale);
        store[key] = geom;
    }

    /**
     * Get a cached extent of a feature
     *
     * @param key the OID of the feature
     * @returns the cached extent of the feature, if it exists
     */
    getExtent(key: number): Extent | undefined {
        return this.extents[key];
    }

    /**
     * Cache the extent of a feature
     *
     * @param key the OID of the feature
     * @param extent the extent of the feature
     */
    setExtent(key: number, extent: Extent) {
        this.extents[key] = extent;
    }

    /**
     * Will attempt to find a cached geometry for a key across any scale
     */
    getAnyScaleGeom(key: number): BaseGeometry | undefined {
        // polygon and line layers have to also cache their geometry by scale level, as the
        // geometry can be simplified at smaller scales
        if (this.isPoint) {
            return this.getGeom(key);
        } else {
            // iterate each scale cache
            let winner: BaseGeometry | undefined = undefined;
            Object.values(this.geoms).some(scaleCache => {
                const test = scaleCache[key];
                if (test) {
                    winner = test;
                }
                // kick out of the .some() when we find a winner
                return test;
            });

            return winner;
        }
    }

    /**
     * Removed all cached data
     */
    clearAll(): void {
        this.attribs = {};
        this.geoms = {};
        this.extents = {};
    }
}
