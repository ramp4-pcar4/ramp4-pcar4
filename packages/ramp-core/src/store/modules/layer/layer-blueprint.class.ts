import to from 'await-to-js';
import deepmerge from 'deepmerge';
import axios from 'axios';

import BaseLayer from 'ramp-geoapi/dist/layer/BaseLayer';

import api from '@/api';

const GEO = {
    Layer: {
        Types: {
            ESRI_GRAPHICS: 'esriGraphics',
            ESRI_MAPIMAGE: 'esriMapImage',
            ESRI_FEATURE: 'esriFeature',
            ESRI_IMAGE: 'esriImage',
            ESRI_TILE: 'esriTile',
            ESRI_RASTER: 'esriRaster', // Note this type can only exist as a child of a map image layer. Can be used to check types via child proxy objects.
            OGC_WMS: 'ogcWms',
            OGC_WFS: 'ogcWfs'
        }
    },
    Service: {
        Types: {
            CSV: 'csv',
            GeoJSON: 'geojson',
            Shapefile: 'shapefile',

            FeatureLayer: 'featurelayer',
            RasterLayer: 'rasterlayer',
            GroupLayer: 'grouplayer',

            TileService: 'tileservice',
            FeatureService: 'featureservice',
            MapImageService: 'mapimageservice',
            ImageService: 'imageservice',

            WMS: 'wms',
            WFS: 'wfs',
            Unknown: 'unknown',
            Error: 'error'
        }
    }
};

// TODO: move mixin constructors into the util file
// NOTE: do not user async/await with Angular $q promises - they don't work always correctly and debugging such errors is a huge pain

type Constructor<T> = new (...args: any[]) => T;

// this a function for creating complex classes using mixins and avoiding the direct inheritance
// given a number of classes, a new class is created and all the properties from the supplied classes are copied into it (in cases of name collision, the last mixin with the same property wins)
// unfortunatelly, this method does not allow for `getters/setters` on the mixin classes (they will be copied as simple named properties, not functions)
// he original mixin approach (https://www.typescriptlang.org/docs/handbook/mixins.html) is more verboase and has more overhead
// the Deep Dive's mixin approach (https://basarat.gitbooks.io/typescript/docs/types/mixins.html) applies mixins outside of the class declaration making it hard to use mixins function/properties inside the decorated class
// adopted from: https://stackoverflow.com/questions/48372465/type-safe-mixin-decorator-in-typescript
function mixins<A>(CtorA: Constructor<A>): Constructor<A>;
function mixins<A, B>(CtorA: Constructor<A>, CtorB: Constructor<B>): Constructor<A & B>;
function mixins<A, B, C>(CtorA: Constructor<A>, CtorB: Constructor<B>, CtorC: Constructor<C>): Constructor<A & B & C>;
function mixins<A, B, C, D>(
    CtorA: Constructor<A>,
    CtorB: Constructor<B>,
    CtorC: Constructor<C>,
    CtorD: Constructor<D>
): Constructor<A & B & C & D>;
function mixins<A, B, C, D, E>(
    CtorA: Constructor<A>,
    CtorB: Constructor<B>,
    CtorC: Constructor<C>,
    CtorD: Constructor<D>,
    CtorE: Constructor<E>
): Constructor<A & B & C & D & E>;
function mixins<T>(...Ctors: Constructor<T>[]): Constructor<T> {
    class Class {}

    Ctors.forEach(Ctor => {
        Object.getOwnPropertyNames(Ctor.prototype).forEach(name => {
            (<any>Class).prototype[name] = Ctor.prototype[name];
        });
    });

    return Class as Constructor<T>;
}

// TODO modify type signature as required after other functions are created (csv and shapefile)
type LayerRecordFactory = (config: any, geoJson?: any, systemOptions?: any) => BaseLayer;

type WFSResponse = {
    data: { numberMatched: number; features: any[] };
};
type WFSData = { type: string; features: any[] };

type QueryMap = { [name: string]: string };

/**
 * @module LayerBlueprint
 * @memberof app.geo
 * @requires dependencies
 * @description
 *
 * LayerBlueprint is a construct which can load data (for WFS right now; need to implement file loading through the config), valide it, and create layers.
 *
 */

/**
 * The base class for the mixins. This just declares what base properties are available across mixins.
 *
 * @class LayerBlueprintMixin
 */
class LayerBlueprintMixin {
    config: any;
    type!: string;
    layerRecordFactory!: LayerRecordFactory;
}

/**
 * The mixin handling layers with client side-data (file-based layers and WFS).
 *
 * @class ClientSideData
 * @extends {LayerBlueprintMixin}
 */
class ClientSideData extends LayerBlueprintMixin {
    _layer: any;

    _rawData: any;
    _formattedData: any;
    _isDataValid: any;

    /**
     * Specifies if layer data can be reloaded. If the user imported a file from his local filesystem, there is no mechanism to automatically reload such a file.
     * In such cases, when `_returnFormattedData` is called with `force`, raw layer data will not be reset.
     *
     * @type {boolean}
     * @memberof ClientSideData
     */
    _isDataPreloaded!: boolean;

    /**
     * Sets raw layer's raw data. Using this function assumes there is no mechanism to reload the raw layer data.
     *
     * @memberof ClientSideData
     */
    setRawData(value: any = null) {
        this._rawData = value;
        this._isDataPreloaded = true;
    }

    // WFS layer overrides this since it has a special loading behaviour
    async loadData(): Promise<any> {
        // TODO: change type 'any' here if possible
        const [error, response] = await to<any>(
            axios.get(this.config.url, {
                responseType: 'blob'
            })
        );

        if (!response) {
            console.error(`File data failed to load for "${this.config.id}"`, error);
            return Promise.reject(error);
        }

        const reader = new FileReader();

        return new Promise((resolve: any, reject: any) => {
            reader.onerror = error => {
                console.error(`File data failed to load for "${this.config.id}"`, error);
                reject({ reason: 'error', message: 'Failed to read file' });
            };
            reader.onload = () => resolve(reader.result);

            reader.readAsArrayBuffer(response.data);
        });
    }

    /**
     * Checks if the layer data was previously loaded, and if not, load data.
     *
     * @returns {Promise<any>} a promise of the formatted data
     * @memberof ClientSideData
     */
    async checkDataLoaded(): Promise<any> {
        let error;

        // load data only once
        if (!this._rawData) {
            [error, this._rawData] = await to(this.loadData());

            if (error) {
                console.error(`Layer data failed to load for "${this.config.id}"`, error);
                return Promise.reject(error);
            }
        }

        // TODO figure out how to format data correctly. right now just added some code for geojson and wfs. probably wont work for csv/shapefile
        if (this.config.layerType === GEO.Layer.Types.OGC_WFS) {
            this._formattedData = this._rawData;
        } else {
            this._formattedData = JSON.parse(new TextDecoder('utf-8').decode(new Uint8Array(this._rawData)));
        }

        this._isDataValid = true;

        return Promise.resolve(this._formattedData);
    }

    /**
     * Loads (if required) the layer data and returns it.
     *
     * @param {boolean} [force=false] if `true`, the layer will be made even if it was already made earlier
     * @returns {Promise<any>}
     * @memberof ClientSideData
     */
    async _returnFormattedData(force: boolean = false): Promise<any> {
        if (this._rawData && !force) {
            return this._rawData;
        }

        // reset valid data flag and the raw data when force-reloading
        // during the validation step, raw data will be re-downloaded
        if (force && !this._isDataPreloaded) {
            [this._isDataValid, this._rawData] = [false, null];
        }

        await this.checkDataLoaded(); // TODO this used to be validation function, made it a function to get formatted data (which is currently only the raw data), change as required

        // TODO uncomment and remove temp
        // TODO: targetSR property should be added to the WFS layer config node
        // this.config.targetSR = configService.getSync.map.instance.spatialReference;

        // clone data because the makeSomethingLayer functions mangle the config data
        const clonedFormattedData = deepmerge({}, this._formattedData);

        if (!clonedFormattedData) {
            console.error(`Failed to get data for "${this.config.id}"`);
        }

        return clonedFormattedData;
    }
}

/**
 * The mixin handling layers with server-side data.
 *
 * @class ServerSideData
 * @extends {LayerBlueprintMixin}
 */
class ServerSideData extends LayerBlueprintMixin {}

/**
 * The base mixin of all LayerBlueprints. Because JS doesn't allow multiple inheritance, mixins are used. The base mixin provides/defines common functions across all blueprints like `makeLayer`.
 *
 * @class BlueprintBase
 * @extends {LayerBlueprintMixin}
 */
class BlueprintBase extends LayerBlueprintMixin {
    _originalConfig: any;
    _layer: any;

    /**
     * Takes in the raw JSON layer config definition, types it and stores it.
     *
     * @param {*} rawConfig
     * @param {new (config: any) => void} ConfigClass
     * @memberof BlueprintBase
     */
    _setConfig(rawConfig: any, ConfigClass: new (config: any) => void): void {
        this.config = new ConfigClass(rawConfig);
        // TODO uncomment
        // this.config.epsgLookup = appInfo.features.epsg.lookup;

        // if there was a bookmark with enhancements for this layer, apply them.
        if (rawConfig.bookmarkData) {
            this.config.applyBookmark(rawConfig.bookmarkData);
        }

        // TODO uncomment
        // hack fix for broken cors support
        // FIXME sometimes there is no map instance ready at this point (usually during initial language change). figure out if our timing is wrong
        // if (this.config.url && configService.getSync.map.instance) {
        //     // if ESRI JSAPI fixes it's CORS bug this can be removed
        //     configService.getSync.map.instance.checkCorsException(this.config.url);
        // }
    }

    /**
     * Creates and returns a promise resolving with a layer instance.
     * After this, the LayerBlueprint is passed to the layer registry which will call the `makeLayer` function again as it normally does when loading layers from the config. In such cases, the already created layer is returned.
     * When a layer is reloaded, the layer needs to be made anew.
     *
     * @param {boolean} [force=false] if `true`, the layer will be made even if it was already made earlier
     * @param {*} [geojson=null]
     * @param {*} [systemOptions=null]
     * @returns {Promise<any>}
     * @memberof BlueprintBase
     */
    // TODO modify type signature as required after other functions are created (csv and shapefile)
    makeLayer(force: boolean = false, geojson: any = null, systemOptions: any = null): Promise<BaseLayer> {
        // if the layer was previously generated (and force is false), just return that
        if (this._layer && !force) {
            return Promise.resolve(this._layer);
        }

        this._layer = this.layerRecordFactory(this.config, geojson, systemOptions);

        return Promise.resolve(this._layer);
    }
}

// #region [True Services]

/**
 * Feature layer blueprint.
 *
 * @class FeatureServiceSource
 * @extends {mixins(BlueprintBase, ServerSideData)}
 */
class FeatureServiceSource extends mixins(BlueprintBase, ServerSideData) {
    /**
     * Creates an instance of FeatureServiceSource.
     * @param {*} rawConfig a JSON object represing a layer config taken either from the config file or from the LayerSource service.
     * @memberof FeatureServiceSource
     */
    constructor(rawConfig: any) {
        super();

        // TODO uncomment and remove temp code
        // type the config object and apply defaults
        // this._setConfig(rawConfig, ConfigObject.layers.FeatureLayerNode);
        this.config = rawConfig;
    }

    get layerRecordFactory(): LayerRecordFactory {
        return config => api.geoapi.layers.createFeatureLayer(config); // TODO: gapiService.gapi.layer.createFeatureRecord;
    }

    /**
     * The service type.
     *
     * @readonly
     * @memberof FeatureServiceSource
     */
    get type() {
        return GEO.Service.Types.FeatureLayer;
    }
}

/**
 * Map image layer blueprint.
 *
 * @class MapImageServiceSource
 * @extends {mixins(BlueprintBase, ServerSideData)}
 */
class MapImageServiceSource extends mixins(BlueprintBase, ServerSideData) {
    constructor(rawConfig: any) {
        super();

        // TODO uncomment and remove temp code
        // this._setConfig(rawConfig, ConfigObject.layers.MapImageLayerNode);
        this.config = rawConfig;
    }

    get layerRecordFactory(): LayerRecordFactory {
        return config => api.geoapi.layers.createMapImageLayer(config); // TODO: gapiService.gapi.layer.createMapImageRecord;
    }

    get type() {
        return GEO.Service.Types.MapImageService;
    }
}

/**
 * WMS layer blueprint.
 *
 * @class WMSServiceSource
 * @extends {mixins(BlueprintBase, ServerSideData)}
 */
class WMSServiceSource extends mixins(BlueprintBase, ServerSideData) {
    constructor(rawConfig: any) {
        super();

        // TODO uncomment and remove temp code
        // this._setConfig(rawConfig, ConfigObject.layers.WMSLayerNode);
        this.config = rawConfig;
    }

    // TODO uncomment
    // get layerRecordFactory(): LayerRecordFactory {
    //     return undefined;  // TODO: gapiService.gapi.layer.createWmsRecord;
    // }

    get type() {
        return GEO.Service.Types.WMS;
    }
}

/**
 * Image layer blueprint.
 *
 * @class ImageServiceSource
 * @extends {mixins(BlueprintBase, ServerSideData)}
 */
class ImageServiceSource extends mixins(BlueprintBase, ServerSideData) {
    constructor(rawConfig: any) {
        super();

        // TODO uncomment and remove temp code
        // this._setConfig(rawConfig, ConfigObject.layers.BasicLayerNode);
        this.config = rawConfig;
    }

    // TODO uncomment
    // get layerRecordFactory(): LayerRecordFactory {
    //     return undefined;  // TODO: gapiService.gapi.layer.createImageRecord;
    // }

    get type() {
        return GEO.Service.Types.ImageService;
    }
}

/**
 * Tile layer blueprint.
 *
 * @class TileServiceSource
 * @extends {mixins(BlueprintBase, ServerSideData)}
 */
class TileServiceSource extends mixins(BlueprintBase, ServerSideData) {
    constructor(rawConfig: any) {
        super();

        // TODO uncomment and remove temp code
        // this._setConfig(rawConfig, ConfigObject.layers.BasicLayerNode);
        this.config = rawConfig;
    }

    // TODO uncomment
    // get layerRecordFactory(): LayerRecordFactory {
    //     return undefined;  // TODO: gapiService.gapi.layer.createTileRecord;
    // }

    get type() {
        return GEO.Service.Types.TileService;
    }
}

/**
 * WFS layer blueprint.
 *
 * @class WFSServiceSource
 * @extends {mixins(BlueprintBase, ClientSideData)}
 */
class WFSServiceSource extends mixins(BlueprintBase, ClientSideData) {
    _urlWrapper!: UrlWrapper;

    constructor(rawConfig: any) {
        super();

        // TODO uncomment and remove temp code
        // this._setConfig(rawConfig, ConfigObject.layers.WFSLayerNode);
        this.config = rawConfig;
    }

    /**
     * Creates an ESRI layer first (since WFS is based on the local data) and passes it to the base mixin's `makeLayer` function.
     *
     * @param {boolean} [force=false] if `true`, the layer will be made even if it was already made earlier
     * @returns {Promise<any>}
     * @memberof WFSServiceSource
     */
    async makeLayer(force: boolean = false): Promise<BaseLayer> {
        // TODO make this return type `WFSLayer` when implemented
        const formattedData = await super._returnFormattedData(force);
        return super.makeLayer(force, formattedData, { mapSR: { wkid: 102100 } }); // TODO remove hard coded value after
    }

    /**
     * Loads WFS data.
     *
     * @returns {Promise<any>}
     * @memberof WFSServiceSource
     */
    async loadData(): Promise<any> {
        this._urlWrapper = new UrlWrapper(this.config.url);

        // get start index and limit set on the url
        const { startindex, limit } = this._urlWrapper.queryMap;

        return this._getWFSData(-1, parseInt(startindex) || 0, parseInt(limit) || 1000);
    }

    get layerRecordFactory(): LayerRecordFactory {
        return (config, geoJson, systemOptions) => api.geoapi.layers.createGeoJSONLayer(config, geoJson, systemOptions);
    }

    get type() {
        return GEO.Service.Types.WFS;
    }

    /**
     *
     *
     * @param {number} [totalCount=-1] the total number of items available on that service
     * @param {number} [startindex=0] the index to start the querying from. default 0
     * @param {number} [limit=1000] the limit of how many results we want returned. default 10
     * @param {WFSData} [wfsData={
     *                 type: 'FeatureCollection',
     *                 features: []
     *             }] the resulting GeoJSON being populated as we receive layer information
     * @returns {Promise<any>} a promise resolving with the layer GeoJSON
     * @memberof WFSServiceSource
     */
    async _getWFSData(
        totalCount: number = -1,
        startindex: number = 0,
        limit: number = 1000,
        wfsData: WFSData = {
            type: 'FeatureCollection',
            features: []
        }
    ): Promise<any> {
        let newQueryMap: QueryMap = { startindex: startindex.toString(), limit: limit.toString() };

        // it seems that some WFS services do not return the number of matched records with every request
        // so, we need to get that explicitly first
        if (totalCount === -1) {
            // get the total number of records
            newQueryMap = {
                request: 'GetFeature',
                resultType: 'hits',
                limit: '0'
            };
        }

        const requestUrl = this._urlWrapper.updateQuery(newQueryMap);

        // use angular to make web request, instead of esriRequest. this is because we can't rely on services having jsonp
        const [error, response] = await to<WFSResponse>(axios.get(requestUrl));

        if (!response) {
            console.error(`WFS data failed to load for "${this.config.id}"`, error);
            return Promise.reject(error);
        }

        const data = response.data;

        // save the total number of records and start downloading the data
        if (totalCount === -1) {
            totalCount = response.data.numberMatched;
            return this._getWFSData(totalCount, startindex, limit, wfsData);
        }

        wfsData.features = [...wfsData.features, ...data.features]; // update the received features array

        // check if all the requested features are downloaded
        if (data.features.length < totalCount - startindex) {
            // the limit is either 1k or the number of remaining features
            const limit = Math.min(1000, totalCount - startindex - data.features.length);
            return this._getWFSData(totalCount, data.features.length + startindex, limit, wfsData);
        } else {
            if (this.config.xyInAttribs && wfsData.features.length > 0 && wfsData.features[0].geometry.type === 'Point') {
                // attempt copy of points to attributes.
                // if we extend this logic to all feature based layers (not just wfs),
                // suggest porting this block to geoApi.
                // for now, easier to modify as early as possible in the transformation

                wfsData.features.forEach(f => {
                    const p = f.geometry.coordinates;
                    f.properties.rvInternalCoordX = p[0];
                    f.properties.rvInternalCoordY = p[1];
                });
            }
            return wfsData;
        }
    }
}

// #endregion

// #region [True Files]

/**
 * CSV layer blueprint.
 *
 * @class CSVSource
 * @extends {mixins(BlueprintBase, ClientSideData)}
 */
class CSVSource extends mixins(BlueprintBase, ClientSideData) {
    constructor(rawConfig: any) {
        super();

        // TODO uncomment and remove temp code
        // this._setConfig(rawConfig, ConfigObject.layers.FileLayerNode);
        this.config = rawConfig;
    }

    /**
     * Creates an ESRI layer first (since file-based layer are based on the local data) and passes it to the base mixin's `makeLayer` function.
     *
     * @param {boolean} [force=false] if `true`, the layer will be made even if it was already made earlier
     * @returns {Promise<any>}
     * @memberof CSVSource
     */
    async makeLayer(force: boolean = false): Promise<BaseLayer> {
        // TODO make this return type `CSVLayer` when implemented
        const formattedData = await super._returnFormattedData(force);
        return super.makeLayer(force, formattedData, { mapSR: { wkid: 102100 } }); // TODO remove hard coded value after
    }

    // TODO uncomment
    // get layerRecordFactory(): LayerRecordFactory {
    //     return api.geoapi.layers.makeCsvLayer;  // TODO: gapiService.gapi.layer.createFeatureRecord;
    // }

    get type() {
        return GEO.Service.Types.CSV;
    }
}

class GeoJSONSource extends mixins(BlueprintBase, ClientSideData) {
    constructor(rawConfig: any) {
        super();

        // TODO uncomment and remove temp code
        // this._setConfig(rawConfig, ConfigObject.layers.FileLayerNode);
        this.config = rawConfig;
    }

    /**
     * Creates an ESRI layer first (since file-based layer are based on the local data) and passes it to the base mixin's `makeLayer` function.
     *
     * @param {boolean} [force=false] if `true`, the layer will be made even if it was already made earlier
     * @returns {Promise<any>}
     * @memberof GeoJSONSource
     */
    async makeLayer(force: boolean = false): Promise<BaseLayer> {
        // TODO make this return type `GeoJsonLayer` when implemented
        const formattedData = await super._returnFormattedData(force);
        return super.makeLayer(force, formattedData, { mapSR: { wkid: 102100 } }); // TODO remove hard coded value after
    }

    get layerRecordFactory(): LayerRecordFactory {
        return (config, geoJson, systemOptions) => api.geoapi.layers.createGeoJSONLayer(config, geoJson, systemOptions);
    }

    get type() {
        return GEO.Service.Types.GeoJSON;
    }
}

class ShapefileSource extends mixins(BlueprintBase, ClientSideData) {
    constructor(rawConfig: any) {
        super();

        // TODO uncomment and remove temp code
        // this._setConfig(rawConfig, ConfigObject.layers.FileLayerNode);
        this.config = rawConfig;
    }

    /**
     * Creates an ESRI layer first (since file-based layer are based on the local data) and passes it to the base mixin's `makeLayer` function.
     *
     * @param {boolean} [force=false] if `true`, the layer will be made even if it was already made earlier
     * @returns {Promise<any>}
     * @memberof ShapefileSource
     */
    async makeLayer(force: boolean = false): Promise<BaseLayer> {
        // TODO make this return type `ShapefileLayer` when implemented
        const formattedData = await super._returnFormattedData(force);
        return super.makeLayer(force, formattedData, { mapSR: { wkid: 102100 } }); // TODO remove hard coded value after
    }

    // TODO uncomment
    // get layerRecordFactory(): LayerRecordFactory {
    //     return api.geoapi.layers.createShapefileLayer;  // TODO: gapiService.gapi.layer.createFeatureRecord;
    // }

    get type() {
        return GEO.Service.Types.Shapefile;
    }
}

// #endregion

// #region [Util]

/**
 * This is a helper class to handle getting and setting query parameters on a url easy.
 *
 * @class UrlWrapper
 */
class UrlWrapper {
    _url: string;
    _base: string;
    _query: string;
    _queryMap: QueryMap = {};

    constructor(url: string) {
        this._url = url;
        // split the base and query
        [this._base, this._query] = url.split('?').concat('');

        // convert the query part into a mapped object
        this._queryMap = this._query.split('&').reduce((map: QueryMap, parameter: string) => {
            const [key, value] = parameter.split('=');
            map[key] = value;
            return map;
        }, {});
    }

    get query(): string {
        return this._query;
    }

    get base(): string {
        return this._base;
    }

    get queryMap(): QueryMap {
        return this._queryMap;
    }

    /**
     * Updates the query part of the url with passed in values.
     *
     * For example:
     *  - orginal url: http://example?flag=red&demohell=true
     *  - queryMapUpdate: {
     *     flag: undefined,
     *     demohell: false,
     *     acid: cat
     * }
     * - resulting url: http://example?demohell=false&acid=cat
     *
     *
     * @param {QueryMap} queryMapUpdate an object of values to be added or replaced on the query of the url; if any values are undefined, their corresponding keys will be removed from the query.
     * @returns {string}
     * @memberof UrlWrapper
     */
    updateQuery(queryMapUpdate: QueryMap): string {
        const requestQueryMap: QueryMap = <QueryMap>deepmerge.all([{}, this.queryMap, queryMapUpdate]);
        const requestUrl = `${this.base}${Object.entries(requestQueryMap)
            .filter(([_, value]) => value !== undefined)
            .map(([key, value], index) => `${index === 0 ? '?' : ''}${key}=${value}`)
            .join('&')}`;

        return requestUrl;
    }
}

// #endregion

function makeBlueprint(rawConfig: any): BlueprintBase {
    const constructors = {
        [GEO.Layer.Types.ESRI_MAPIMAGE]: MapImageServiceSource,
        [GEO.Layer.Types.ESRI_IMAGE]: ImageServiceSource,
        [GEO.Layer.Types.ESRI_TILE]: TileServiceSource,
        [GEO.Layer.Types.OGC_WMS]: WMSServiceSource,
        [GEO.Layer.Types.OGC_WFS]: WFSServiceSource,
        [GEO.Layer.Types.ESRI_FEATURE]: FeatureServiceSource,

        // service types used for loading file-layers through config
        [GEO.Service.Types.CSV]: CSVSource,
        [GEO.Service.Types.GeoJSON]: GeoJSONSource,
        [GEO.Service.Types.Shapefile]: ShapefileSource
    };

    // if 'fileType' is a property, then we know we are dealing with a file based layer.
    // the layerType for these will still be 'esriFeature' but we need to know which type of file it is using 'fileType'
    const serviceSource = new constructors[rawConfig.fileType ? rawConfig.fileType : rawConfig.layerType](rawConfig);
    return serviceSource;
}

const service = {
    FeatureServiceSource,
    MapImageServiceSource,
    WMSServiceSource,
    WFSServiceSource,
    ImageServiceSource,
    TileServiceSource,

    CSVSource,
    GeoJSONSource,
    ShapefileSource,

    makeBlueprint,

    UrlWrapper
};

export default service;
