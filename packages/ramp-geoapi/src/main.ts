import { GeoApi, DojoWindow, EsriBundle, InfoBundle, EpsgLookup, GeoApiOptions } from './gapiTypes';
// import { FakeNewsMapModule } from './fakenewsmap';
import MapModule from './map/MapModule';

// import agol from './util/agol';
// import events from './old_events';

import LayerModule from './layer/LayerModule';
import UtilModule from './util/UtilModule';
import * as apiDefs from './api/apiDefs';
import * as apiClasses from './api/api';

export * from './gapiTypes';
export { Map } from './map/Map';
export { FeatureLayer } from './layer/FeatureLayer';
export { WmsLayer } from './layer/WmsLayer';
export { MapImageLayer } from './layer/MapImageLayer';
export { GeoJsonLayer } from './layer/GeoJsonLayer';
export { HighlightLayer } from './layer/HighlightLayer';
export const ApiBundle = {
    ...apiClasses,
    ...apiDefs
};

// TODO figure out best way to export * from './api/api' so it can be consumed by whatever
//      on the client is making the actual API that gets exposed to everyone.

// TODO once working, try to use asynch / await keywords

/**
 * Invokes the dojo module loader. Loads a list of modules and returns in an object
 * @param {Array} modules  Array of arrays. inner arrays contain dojo module path in index 0, the name to call the module in index 1
 * @param {Object} window  reference to the browser's window
 * @return {Promise} resolves with a key-value pair object. Keys are module names. Values are the modules.
 */
function makeDojoRequests(modules: Array<Array<string>>, window: DojoWindow): Promise<EsriBundle> {
    return new Promise((resolve, reject) => {

        // NOTE: do not change the callback to an arrow function since we don't know if
        // Dojo's require has any expectations of the scope within that function or
        // does any odd metaprogramming

        // can't use 'arguments' if we have arrow function. so must leave it as standard notation
        window.require(modules.map(mod => mod[0]), function () {
            const esriBundle: EsriBundle = new EsriBundle();

            // iterate over arguments to avoid creating an ugly giant function call
            // arguments is not an array so we do this the hard way
            for (let i = 0; i < arguments.length; ++i) {
                esriBundle[modules[i][1]] = arguments[i];
            }
            resolve(esriBundle);
        });

        window.require.on('error', () => reject());
    });
}

// essentially sets up the main geoApi module object and initializes all the subcomponents
function initAll(esriBundle: EsriBundle, window: DojoWindow, epsgLookup: EpsgLookup = undefined): GeoApi {
    // make explicit object to avoid the question marks in the definition
    const api: GeoApi = {
        esriBundle: undefined,
        maps: undefined,
        layers: undefined,
        utils: undefined
    };
    const infoBundle: InfoBundle = {
        api,
        esriBundle,
        window
    };

    /*
    api.layer = layer(esriBundle, api);
    api.legend = legend();
    api.proj = proj(esriBundle);
    api.Map = esriMap(esriBundle, api);
    api.attribs = attribute(esriBundle, api);
    api.symbology = symbology(esriBundle, api, window);
    */

    // api.events = events(); // TODO figure out how this thing will really work in ESRI4 paradigm. might make sense to expose via dev module?
    // api.agol = agol(esriBundle); // TODO not 100% we are going to support AGOL in R4MP.

    // use of the following `esri` properties/functions are unsupported by ramp team.
    // they are provided for plugin developers who want to write advanced geo functions
    // and wish to directly consume the esri api objects AT THEIR OWN RISK !!!  :'O  !!!

    // access to the collection of ESRI API classes that geoApi loads for its own use
    api.esriBundle = esriBundle;
    api.maps = new MapModule(infoBundle);
    api.layers = new LayerModule(infoBundle);
    api.utils = new UtilModule(infoBundle, epsgLookup);
    // api.fakeNewsMaps = new FakeNewsMapModule(esriBundle); // TODO rem9ove me

    // function to load ESRI API classes that geoApi does not auto-load.
    // param `modules` is an array of arrays, the inner arrays are 2-element consisting
    // of the official library path as the first element, and the property name in the
    // result object to assign the class to.
    // e.g. [['esri/tasks/FindTask', 'findTaskClass'], ['esri/geometry/mathUtils', 'mathUtils']]
    // return value is object with properties containing the dojo classes defined in the param.
    // e.g. { findTaskClass: <FindTask Dojo Class>, mathUtils: <mathUtils Dojo Class> }
    api.dev = {};
    api.dev.esriLoadApiClasses = (modules: Array<Array<string>>) => makeDojoRequests(modules, window);
    // TODO test this^. will only be called at runtime via plugins so the typescript return value on makeDojoRequests shouldn't matter (i.e. a request will have modules not in EsriBunlde def)

    return api;
}

// TODO if we find we have more things like epsgLookup that need to be provided at initialization, consider changing the paremeter into an options object

/**
 * The main loader of the GeoAPI.
 * Options:
 * - apiUrl: url to an instance of the ESRI JS API 4.x. Default value is official source using the version that has passed development tests. Can override to older versions or a different host location.
 * - epsgLookup: a function that takes an EPSG code and returns a promise of a proj4 projection string for the EPSG code. Default function will use epsg.io service endpoint.
 * @param {Window} window a reference to the host page window. Required to dynamically add the script for the mapping api
 * @param {Object} [options] contains any of the above options
 * @returns {Promise} resolves with instantiated GeoAPI object
 */
export default async (window: DojoWindow, options: GeoApiOptions = {}): Promise<GeoApi> => {

    // esriDeps is an array pairing ESRI JSAPI dependencies with their imported names
    // in esriBundle
    const esriDeps: Array<Array<string>> = [
        // TODO add 3D Map for future support?  or keep out for now to avoid extra downloads
        // TODO validate that we are still using these in our code. Any module not being used should be removed

        // TODO remove these commented things once migration is finished
        // ['dojo/Deferred', 'Deferred'], // esri4 SHOULD be using promises instead of Deferred's now
        // ['esri/geometry/ScreenPoint', 'ScreenPoint'], // depreciated. need to find alternative.  Possibly MapView.toScreen()
        // ['esri/graphicsUtils', 'graphicsUtils'], // depreciated. may need to find alternative, especially for bounding box of graphics
        // ['esri/widgets/BasemapLayer', 'BasemapLayer'], // depreciated. everything lives within Basemap now
        // ['esri/widgets/OverviewMap', 'OverviewMap'], // depreciated. we likely need a 2nd MapView, or a separate synched map to do our overview. https://developers.arcgis.com/javascript/latest/sample-code/overview-map/index.html

        ['dojo/query', 'dojoQuery'],
        ['esri/Basemap', 'Basemap'],
        ['esri/Color', 'Color'],
        ['esri/config', 'esriConfig'],
        ['esri/geometry/Extent', 'Extent'],
        ['esri/geometry/Multipoint', 'Multipoint'],
        ['esri/geometry/Point', 'Point'],
        ['esri/geometry/Polygon', 'Polygon'],
        ['esri/geometry/Polyline', 'Polyline'],
        ['esri/geometry/SpatialReference', 'SpatialReference'],
        ['esri/Graphic', 'Graphic'],
        ['esri/layers/FeatureLayer', 'FeatureLayer'],
        ['esri/layers/GraphicsLayer', 'GraphicsLayer'],
        ['esri/layers/ImageryLayer', 'ImageryLayer'], // formerly known as ArcGISImageServiceLayer
        ['esri/layers/MapImageLayer', 'MapImageLayer'], // formerly known as ArcGISDynamicMapServiceLayer
        ['esri/layers/TileLayer', 'TileLayer'], // formerly known as ArcGISTiledMapServiceLayer
        ['esri/layers/WMSLayer', 'WmsLayer'],
        ['esri/layers/support/Field', 'Field'],
        ['esri/layers/support/ImageParameters', 'ImageParameters'],
        ['esri/layers/support/Sublayer', 'Sublayer'], // formerly known as LayerDrawingOptions
        ['esri/layers/support/WMSSublayer', 'WMSSublayer'], // formerly known as WMSLayerInfo
        ['esri/Map', 'Map'],
        ['esri/renderers/ClassBreaksRenderer', 'ClassBreaksRenderer'],
        ['esri/renderers/SimpleRenderer', 'SimpleRenderer'],
        ['esri/renderers/UniqueValueRenderer', 'UniqueValueRenderer'],
        ['esri/renderers/support/jsonUtils', 'rendererUtils'],
        ['esri/request', 'esriRequest'],
        ['esri/symbols/PictureMarkerSymbol', 'PictureMarkerSymbol'],
        ['esri/symbols/SimpleFillSymbol', 'SimpleFillSymbol'],
        ['esri/symbols/SimpleLineSymbol', 'SimpleLineSymbol'],
        ['esri/symbols/SimpleMarkerSymbol', 'SimpleMarkerSymbol'],
        ['esri/symbols/support/jsonUtils', 'symbolJsonUtils'],
        ['esri/tasks/GeometryService', 'GeometryService'],
        ['esri/tasks/IdentifyTask', 'IdentifyTask'],
        ['esri/tasks/PrintTask', 'PrintTask'],
        ['esri/tasks/QueryTask', 'QueryTask'],
        ['esri/tasks/support/IdentifyParameters', 'IdentifyParameters'],
        ['esri/tasks/support/PrintParameters', 'PrintParameters'],
        ['esri/tasks/support/PrintTemplate', 'PrintTemplate'],
        ['esri/tasks/support/ProjectParameters', 'ProjectParameters'],
        ['esri/tasks/support/Query', 'Query'],
        ['esri/views/MapView', 'MapView'],
        ['esri/widgets/BasemapGallery', 'BasemapGallery'],
        ['esri/widgets/ScaleBar', 'ScaleBar']
    ];

    // the startup for this module is:
    // 1. add a script tag to load the API (this typically points to a custom ESRI build)
    // 2. load all the ESRI and Dojo dependencies `makeDojoRequests()`
    // 3. initialize all of our modules
    // everything is done in an async model and the result is a promise which resolves to
    // a reference to our API
    await new Promise((resolve, reject) => {
        if (window.require) {
            console.warn('ESRI API Load Process: window.require already exists, ' +
                'attempting to reuse existing loader with no new script tag created');
            resolve();
            return;
        }
        // TODO try to add types, if we care.
        const oScript = window.document.createElement('script');
        const oHead = window.document.head || window.document.getElementsByTagName('head')[0];
        oScript.type = 'text\/javascript';
        oScript.onerror = (err: any) => reject(err);
        oScript.onload = () => resolve();
        oHead.appendChild(oScript);
        oScript.src = options.apiUrl || 'https://js.arcgis.com/4.14'; // default value should be used for general testing and be considered our "supported" version
    });

    const esriBundle = await makeDojoRequests(esriDeps, window);
    return initAll(esriBundle, window, options.epsgLookup);
};
