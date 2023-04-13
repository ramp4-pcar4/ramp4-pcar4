import { APIScope, InstanceAPI } from '@/api/internal';
import type {
    Attributes,
    AttributeSet,
    BaseGeometry,
    GetGraphicServiceDetails,
    TabularAttributeSet
} from '@/geo/api';
import { Graphic, NoGeometry } from '@/geo/api';
import { EsriGeometryFromJson, EsriRequest } from '@/geo/esri';
import to from 'await-to-js';
import { toRaw } from 'vue';

// NOTE has an esri type, which is bad, but this interface lives within the geo section so will permit it.
//      alternative would be swapping back and fourth between ramp and esri graphics which seems a waste
//      of cycles.
export interface AttributeLoaderDetails {
    supportsLimit?: boolean; // indicates if server will return information about what the maximum number of attributes will be downloaded in a single request
    attribs?: string; // comma delimited list of attributes to download. '*' for all
    serviceUrl?: string; // feature layer endpoint on an arcgis server
    sourceGraphics?: __esri.Collection<__esri.Graphic>; // set of graphics from non-ArcGIS server source
    maxId?: number; // current maximum OID we have downloaded. i.e. keeps track of where we are over multiple batches of downloads
    batchSize: number; // calculated maximum amount of attributes that can be downloaded in a single request
    oidField: string; // attribute name of the OID field
    permanentFilter?: string; // SQL to restrict the attributes to download
}

export class AttributeAPI extends APIScope {
    constructor(iApi: InstanceAPI) {
        super(iApi);
    }

    private oidIndexer(attSet: AttributeSet, oidField: string): void {
        // make index on object id
        attSet.features.forEach((feat, idx) => {
            // map object id to index of object in feature array
            attSet.oidIndex[feat[oidField]] = idx;
        });
    }

    private async arcGisBatchLoad(
        details: AttributeLoaderDetails,
        controller: AsynchAttribController
    ): Promise<Array<any>> {
        if (controller.loadAbortFlag) {
            // stop that stop that
            return [];
        }

        // construct additional filter if we have a permanent filter
        const permFilter = details.permanentFilter
            ? ` AND ${details.permanentFilter}`
            : '';

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
            console.error(
                `ArcGIS batch load error: ${details.serviceUrl}`,
                err
            );
            return Promise.reject(
                new Error(`ArcGIS batch load error: ${details.serviceUrl}`)
            );
        }

        if (!serviceResult.data || !serviceResult.data.features) {
            // case where service request was successful, but missing data
            console.error(
                `ArcGIS batch load gave no data/features: ${details.serviceUrl}`
            );
            return Promise.reject(
                new Error(
                    `ArcGIS batch load gave no data/features: ${details.serviceUrl}`
                )
            );
        }

        const feats: Array<any> = serviceResult.data.features;
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

            if (moreDataToLoad) {
                // call the service again for the next batch of data.
                // max id becomes last object id in the current batch

                details.maxId = feats[len - 1].attributes[details.oidField];
                const futureFeats = await this.arcGisBatchLoad(
                    details,
                    controller
                );
                // take our current batch, append on everything the recursive call loaded, and return
                // return empty list if aborted
                return controller.loadAbortFlag
                    ? []
                    : feats.concat(futureFeats);
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

    async loadArcGisServerAttributes(
        details: AttributeLoaderDetails,
        controller: AsynchAttribController
    ): Promise<AttributeSet> {
        details.maxId = -1;
        details.batchSize = -1;

        const serverResult: Array<any> = await this.arcGisBatchLoad(
            details,
            controller
        );

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

    async loadGraphicsAttributes(
        details: AttributeLoaderDetails,
        controller: AsynchAttribController
    ): Promise<AttributeSet> {
        if (!details.sourceGraphics) {
            throw new Error(
                'No .sourceGraphics provided to file layer attribute loader'
            );
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

        const pluckedAttributes = details.sourceGraphics.map(
            (g: __esri.Graphic) => {
                // TODO we may need to strip off attributes here based on what we decide to do.
                //      there is no network traffic advantage for files (all data is already loaded).
                //      but we may need to do it for stuff like populating a grid with reduced columns.
                //      if we do this, we may need to clone the attribute objects then remove properties;
                //      we don't want to mess with the original source in the layer.
                // If we do a stripping, use details.attribs as the source for what to keep.
                return toRaw(g).attributes;
            }
        );

        const attSet: AttributeSet = {
            features: pluckedAttributes.toArray(),
            oidIndex: {}
        };
        this.oidIndexer(attSet, details.oidField);

        controller.loadIsDone = true;
        controller.loadedCount = attSet.features.length;
        return attSet;
    }

    async loadSingleFeature(
        details: GetGraphicServiceDetails
    ): Promise<Graphic> {
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

        // TODO investigate adding `geometryPrecision` to the param.
        //      if we have bloated decimal places, this will drop them.
        //      need to be careful of the units of the map and the current scale.
        //      e.g. a basemap in lat long will certainly need decimal places.
        //      could add this to the tile schema object of our config. if missing we omit, but allow
        //      author to define a precision for better performance. could we apply that elsewhere? (e.g. featurelayers?)

        const [err, serviceResult] = await to<__esri.RequestResponse>(
            EsriRequest(details.serviceUrl + '/query', params)
        );
        if (!serviceResult) {
            // case where service request was unsuccessful
            console.error(
                `ArcGIS single feature load error: ${details.serviceUrl}`,
                err
            );
            return Promise.reject(
                new Error(
                    `ArcGIS single feature load error: ${details.serviceUrl}`
                )
            );
        }

        if (!serviceResult.data || !serviceResult.data.features) {
            // case where service request was successful, but missing data
            console.error(
                `Could not locate feature ${details.oid} for layer ${details.serviceUrl}`
            );
            return Promise.reject(
                new Error(
                    `Could not locate feature ${details.oid} for layer ${details.serviceUrl}`
                )
            );
        }

        const feats: Array<any> = serviceResult.data.features;
        if (feats.length > 0) {
            const feat = feats[0];
            let geom: BaseGeometry;

            if (details.includeGeometry) {
                // server result omits spatial reference
                feat.geometry.spatialReference =
                    serviceResult.data.spatialReference;
                const localEsriGeom = EsriGeometryFromJson(feat.geometry);
                geom = this.$iApi.geo.geom.geomEsriToRamp(localEsriGeom);
            } else {
                geom = new NoGeometry();
            }

            // attributes are always there, so we always return them. letter caller decide to discard them or not.
            return new Graphic(geom, '', feat.attributes);
        }

        // We got no features, so throw error
        return Promise.reject(
            new Error(
                `Could not locate feature ${details.oid} for layer ${details.serviceUrl}`
            )
        );
    }
}

// an object that is passed into the asynch attribute loader. the loader can read and update these properties on each iteration
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
     * Allows the list of field names to download to be updated. Allows support for diverant loading
     * flows between different layers.
     *
     * @param {string} newList
     */
    updateFieldList(newList: string): void {
        this.details.attribs = newList;
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
        return Promise.reject(
            new Error(
                'Subclass of AttributeLoaderBase did not implement loadPromiseGenerator'
            )
        );
    }
}

export class ArcServerAttributeLoader extends AttributeLoaderBase {
    constructor(iApi: InstanceAPI, details: AttributeLoaderDetails) {
        super(iApi, details);
    }

    protected loadPromiseGenerator(): Promise<AttributeSet> {
        return this.$iApi.geo.attributes.loadArcGisServerAttributes(
            this.details,
            this.aac
        );
    }
}

export class FileLayerAttributeLoader extends AttributeLoaderBase {
    constructor(iApi: InstanceAPI, details: AttributeLoaderDetails) {
        super(iApi, details);
    }

    protected loadPromiseGenerator(): Promise<AttributeSet> {
        return this.$iApi.geo.attributes.loadGraphicsAttributes(
            this.details,
            this.aac
        );
    }
}

// manages the quick-lookup of attributes.
// i.e. when it makes sense to just download one instead of the entire set
export class QuickCache {
    private attribs: { [key: number]: Attributes };

    // the "any" type here is funny. for points, its BaseGeometry, for line/poly based, it's an object indexed by scale,
    // which then containts an object indexed by key (likely oid) and returns BaseGeometry.
    // will keep as any since it's private and the interfaces are casting to BaseGeometry. otherwise would need type shenannigans.

    private geoms: { [key: number]: any };

    readonly isPoint: boolean;

    constructor(geomType: string) {
        this.attribs = {};
        this.geoms = {};
        this.isPoint = geomType === 'point';
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
                throw new Error(
                    'Attempted to access geometry store for non-point layer without providing a map scale'
                );
            }
            return this.getScaleStore(scale);
        }
    }

    getAttribs(key: number): Attributes {
        return this.attribs[key];
    }

    setAttribs(key: number, atts: Attributes): void {
        this.attribs[key] = atts;
    }

    getGeom(key: number, scale: number | undefined = undefined): BaseGeometry {
        // polygon and line layers have to also cache their geometry by scale level, as the
        // geometry can be simplified at smaller scales
        return this.getGeomStore(scale)[key];
    }

    setGeom(
        key: number,
        geom: BaseGeometry,
        scale: number | undefined = undefined
    ): void {
        const store = this.getGeomStore(scale);
        store[key] = geom;
    }

    clearAll(): void {
        this.attribs = {};
        this.geoms = {};
    }
}
