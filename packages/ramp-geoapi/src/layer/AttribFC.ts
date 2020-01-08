// put things here that would be common to all FCs that rock with esri attributes
// TODO add proper comments

import esri = __esri;
import { InfoBundle, AttributeSet } from '../gapiTypes';
import BaseLayer from './BaseLayer';
import BaseFC from './BaseFC';
import { AttributeLoaderBase, AttributeLoaderDetails, ArcServerAttributeLoader } from '../util/AttributeLoader';
import { BaseRenderer } from '../util/Renderers';

export default class AttribFC extends BaseFC {

    geomType: string;
    layerType: string; // TODO revisit this. is value still useful?
    oidField: string;
    fields: Array<esri.Field>;
    nameField: string;
    extent: esri.Extent;
    legend: any; // TODO figure out what this is. i think it's our custom class. make a definition somewhere
    attLoader: AttributeLoaderBase;
    featureCount: number; // TODO figure out how to identify an unknown count. will use undefined for now. -1 would be other option
    renderer: BaseRenderer;

    constructor (infoBundle: InfoBundle, parent: BaseLayer, layerIdx: number = 0) {
        super(infoBundle, parent, layerIdx);

        this.geomType = '';
        this.oidField = '';
        this.nameField = '';
    }

    // NOTE this logic is for ArcGIS Server sourced things.
    //      other sourced attribute layers should override this function.
    // TODO consider moving a bulk of this out to LayerModule; the wizard may have use for running this (e.g. getting field list for a service url)
    loadLayerMetadata(serviceUrl: string, options: any = {}): Promise<void> {

        if (!serviceUrl) {
            // case where a non-server subclass ends up calling this via .super magic.
            // will avoid failed attempts at reading a non-existing service.
            // class should implement their own logic to load metadata (e.g. scrape from file layer)
            return Promise.resolve();
        }
        return new Promise ((resolve, reject) => {

            // extract info for this service
            const restReq: IPromise<esri.RequestResponse> = this.esriBundle.esriRequest(serviceUrl, { query: { f: 'json' } });

            // TODO revisit error handling. might need a try-catch? could also try then().error() to clean up
            restReq.then((serviceResult: esri.RequestResponse) => {
                if (serviceResult.data) {
                    const sData: any = serviceResult.data;

                    // properties for all endpoints
                    this.layerType = sData.type;
                    this.geomType = sData.geometryType || 'none'; // TODO need to decide what propert default is. Raster Layer has null gt.
                    this.scaleSet.minScale = sData.effectiveMinScale || sData.minScale;
                    this.scaleSet.maxScale = sData.effectiveMaxScale || sData.maxScale;
                    this.supportsFeatures = false; // saves us from having to keep comparing type to 'Feature Layer' on the client
                    this.extent = sData.extent; // TODO might need to cast/fromJson to a proper esri object

                    if (sData.type === 'Feature Layer') {
                        this.supportsFeatures = true;
                        this.fields = sData.fields.map((f: any) => this.esriBundle.Field.fromJSON(f)); // TODO need to use Field.fromJSON() to make things correct
                        this.nameField = sData.displayField;

                        // find object id field
                        const noFieldDefOid: boolean = this.fields.every((elem: esri.Field) => {
                            if (elem.type === 'oid') {
                                this.oidField = elem.name;
                                return false; // break the loop
                            }

                            return true; // keep looping
                        });

                        if (noFieldDefOid) {
                            // we encountered a service that does not mark a field as the object id.
                            // attempt to use alternate definition. if neither exists, we are toast.
                            this.oidField = sData.objectIdField ||
                                (() => { console.error(`Encountered service with no OID defined: ${serviceUrl}`); return ''; })();
                        }

                        // TODO revist. see https://github.com/james-rae/pocGAPI/issues/14
                        // ensure our attribute list contains the object id
                        /*
                        if (attribs !== '*') {
                            if (attribs.split(',').indexOf(layerData.oidField) === -1) {
                                attribs += (',' + layerData.oidField);
                            }
                        }
                        */

                        // TODO add in renderer and legend magic
                        // add renderer and legend
                        const sourceRenderer = (options && options.customRenderer && options.customRenderer.type) ?
                            options.customRenderer : sData.drawingInfo.renderer;
                        this.renderer = this.gapi.utils.symbology.makeRenderer(this.esriBundle.rendererUtils.fromJSON(sourceRenderer), this.fields);

                        // this array will have a set of promises that resolve when all the legend svg has drawn.
                        // for now, will not include that set (promise.all'd) on the layer load blocker;
                        // don't want to stop a layer from loading just because an icon won't draw.
                        // ideally we'll have placeholder symbol (white square, loading symbol, caution symbol, etc)
                        this.legend = this.gapi.utils.symbology.rendererToLegend(this.renderer);

                        // temporarily store things for delayed attributes
                        const loadData: AttributeLoaderDetails = {
                            // version number is only provided on 10.0 SP1 servers and up.
                            // servers 10.1 and higher support the query limit flag
                            supportsLimit: (sData.currentVersion || 1) >= 10.1,
                            serviceUrl,
                            oidField: this.oidField,
                            attribs: '*' // TODO re-align with our attribs decision above
                        };
                        this.attLoader = new ArcServerAttributeLoader(this.infoBundle(), loadData);
                    }

                    // tell caller we are donethanks
                    resolve();
                } else {
                    // case where service request was successful but no data appeared in result
                    console.warn('Service metadata load error');
                    reject(new Error('Unknown error loading service metadata'));
                }
            }, error => {
                // failed to load service info. reject with error
                // TODO investigate if this is proper location where EsriErrorDetails will appear
                console.warn('Service metadata load error : ' + error.EsriErrorDetails || error);
                reject(error);
            });
        });
    }

    loadFeatureCount(serviceUrl: string): Promise<void> {

        if (!serviceUrl) {
            // case where a non-server subclass ends up calling this via .super magic.
            // will avoid failed attempts at reading a non-existing service.
            // class should implement their own logic to load feature count (e.g. scrape from file layer)
            return Promise.resolve();
        }

        // TODO detect when we are in Raster Layer case? if we do this, we would need the caller of this
        //      function to wait on the loadLayerMetadata promise, then check this.supportsFeatures

        return new Promise ((resolve, reject) => {

            // extract info for this service
            const restParam: esri.RequestOptions = {
                query: {
                    f: 'json',
                    where: '1=1',
                    returnCountOnly: true,
                    returnGeometry: false
                }
            };
            const restReq: IPromise<esri.RequestResponse> = this.esriBundle.esriRequest(`${serviceUrl}/query`, restParam);

            // TODO revisit error handling. might need a try-catch?
            // TODO have discussion about error case. app shouldnt bomb without count. but how to handle? ignore? show error? console error? special error count val e.g. -2
            restReq.then((serviceResult: esri.RequestResponse) => {
                if (serviceResult.data) {

                    // TODO old geoApi had logic to execute web request twice; comment indicated first request could fail.
                    //      re-apply this if we notice the same thing. sounds like garbage server problem tbh.
                    // TODO need to decide on placeholder for unknown count.
                    this.featureCount = serviceResult.data.count;

                    // tell caller we are donethanks
                    resolve();
                } else {
                    // case where service request was successful but no data appeared in result
                    console.warn('Unable to load feature count: ' + serviceUrl);
                    resolve();
                }
            }, error => {
                // failed to load service info. reject with error
                // TODO investigate if this is proper location where EsriErrorDetails will appear
                console.warn('Unable to load feature count: ' + serviceUrl, error);
                resolve();
            });
        });
    }

    // formerly known as getFormattedAttributes
    // TODO making this work for now same as old way. do we want to think about different ways?
    //      e.g. have consumer parse the raw data and format it?
    //      doing it here has advantage because layer metadata is also here (e.g. fields array, symbol renderer)
    // TODO fancy types
    /**
     * Retrieves attributes from a layer for a specified feature index
     * @return {Promise}            promise resolving with formatted attributes to be consumed by the datagrid and esri feature identify
     */
    getTabularAttributes (): Promise<any> {
        // TODO rethink how this works. is it better to read from attributes every time?
        if (this.attLoader.tabularAttributesCache) {
            return this.attLoader.tabularAttributesCache;
        }

        // TODO after refactor, consider changing this to a warning and just return some dummy value
        // TODO make a layertype constant / enum?
        if (this.layerType === 'Raster Layer') {
            throw new Error('Attempting to get attributes on a raster layer.');
        }

        // TODO we could also wait on this.parentLayer.isLayerLoaded()
        //      but given FC's get created on the load event, it seems unlikely right now
        //      that anyone would be calling this pre-layer-load.
        this.attLoader.tabularAttributesCache = this.attLoader.getAttribs()
            .then((attSet: AttributeSet) => {
                // create columns array consumable by datables. We don't include the alias defined in the config here as
                // the grid handles it seperately.
                const columns = this.fields
                    .filter(field =>

                        // assuming there is at least one attribute - empty attribute budnle promises should be rejected, so it never even gets this far
                        // filter out fields where there is no corresponding attribute data
                        attSet.features[0].attributes.hasOwnProperty(field.name))
                    .map(field => ({
                        data: field.name,
                        title: field.alias || field.name
                    }));

                // derive the icon for the row
                // TODO figure out if we want to change the system attributes.
                const rows = attSet.features.map(feature => {
                    const att = feature.attributes;
                    att.rvInteractive = '';
                    att.rvSymbol = undefined; // TODO re-add this.gapi.symbology.getGraphicIcon(att, this.renderer);
                    return att;
                });

                // if a field name resembles a function, the data table will treat it as one.
                // to get around this, we add a function with the same name that returns the value,
                // tricking that silly datagrid.
                columns.forEach(c => {
                    if (c.data.substr(-2) === '()') {
                        // have to use function() to get .this to reference the row.
                        // arrow notation will reference the attribFC class.
                        const secretFunc = function() {
                            return this[c.data];
                        };

                        const stub = c.data.substr(0, c.data.length - 2); // function without brackets
                        rows.forEach(r => {
                            r[stub] = secretFunc;
                        });
                    }
                });

                return {
                    columns,
                    rows,
                    fields: this.fields, // keep fields for reference ...
                    oidField: this.oidField, // ... keep a reference to id field ...
                    oidIndex: attSet.oidIndex, // TODO determine if we need this anymore. who uses it? // ... and keep id mapping array
                    renderer: this.renderer
                };
            })
            .catch(e => {
                this.attLoader.tabularAttributesCache = undefined; // delete cached promise when the geoApi `getAttribs` call fails, so it will be requested again next time `getAttributes` is called;
                if (e === 'ABORTED') { // TODO see if we're still thowing an error with message ABORTED
                    throw new Error('ABORTED');
                } else {
                    throw new Error('Attrib loading failed');
                }
            });

        return this.attLoader.tabularAttributesCache;
    }
}