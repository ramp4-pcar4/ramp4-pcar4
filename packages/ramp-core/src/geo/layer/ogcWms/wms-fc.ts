// TODO add proper comments

import { CommonFC } from '@/api/internal';
import { DataFormat } from '@/geo/api';
import WmsLayer from './index';

/**
 * Searches for a layer title defined by a wms.
 * @function getWMSLayerTitle
 * @private
 * @param  {Object} wmsLayer     esri layer object for the wms
 * @param  {String} wmsLayerId   layers id as defined in the wms (i.e. not wmsLayer.id)
 * @return {String}              layer title as defined on the service, '' if no title defined
 */
// TODO this code has yet to be migrated to ESRI 4. Required for symbology support for wms
/*
function getWMSLayerTitle(wmsLayer: EsriWMSLayer, wmsLayerId: string): string {
    // TODO move this to ogc.js module?

    let targetEntry = '';

    // crawl esri layerInfos (which is a nested structure),
    // returns sublayer that has matching id or null if not found.
    // written as function to allow recursion
    const crawlSubLayers = (subLayerInfos, wmsLayerId) => {

        // we use .some to allow the search to stop when we find something
        subLayerInfos.some(layerInfo => {
            // wms ids are stored in .name
            if (layerInfo.name === wmsLayerId) {
                // found it. save it and exit the search
                targetEntry = layerInfo;
                return true;
            } else if (layerInfo.subLayers) {
                // search children. if in children, will exit search, else will continue
                return crawlSubLayers(layerInfo.subLayers, wmsLayerId);
            } else {
                // continue search
                return false;
            }
        });

        return targetEntry;
    };

    // init search on root layerInfos, then process result
    const match = crawlSubLayers(wmsLayer.layerInfos, wmsLayerId);
    if (match && match.title) {
        return match.title;
    } else {
        return ''; // falsy!
    }
}
*/

export class WmsFC extends CommonFC {
    // @ts-ignore
    protected parentLayer: WmsLayer;

    constructor(parent: WmsLayer, layerIdx: number = 0) {
        super(parent, layerIdx);
        this.dataFormat = DataFormat.OGC_RASTER;
    }

    /**
     * Download or refresh the internal symbology for the FC.
     *
     * @function loadSymbology
     * @returns {Promise}         resolves when symbology has been downloaded
     */
    // TODO this code has yet to be migrated to ESRI 4. Required for symbology support for wms
    /*
    loadSymbology () {
        const configLayerEntries =  this._parent.config.layerEntries;
        const gApi = this._parent._apiRef;
        const legendArray = gApi.layer.ogc
            .getLegendUrls(this._parent._layer, configLayerEntries.map(le => {
                return {
                    id: le.id,
                    styleToURL: le.styleToURL,
                    currentStyle: le.currentStyle
                }
            }))
            .map((imageUri, idx) => {

                const symbologyItem = {
                    name: null,
                    svgcode: null
                };

                // config specified name || server specified name || config id
                const name = configLayerEntries[idx].name ||
                    getWMSLayerTitle(this._parent._layer, configLayerEntries[idx].id) ||
                    configLayerEntries[idx].id;

                gApi.symbology.generateWMSSymbology(name, imageUri).then(data => {
                    symbologyItem.name = data.name;
                    symbologyItem.svgcode = data.svgcode;
                });

                return symbologyItem;
            });
        this.symbology = legendArray;
        return Promise.resolve();
    }
    */
}
