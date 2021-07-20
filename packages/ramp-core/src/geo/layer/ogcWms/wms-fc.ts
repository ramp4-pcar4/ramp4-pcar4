// TODO add proper comments

import { CommonFC } from '@/api/internal';
import { DataFormat } from '@/geo/api';
import WmsLayer from './index';

/**
 * Searches for a layer title defined by a wms.
 * @function getWMSLayerTitle
 * @private
 * @param  {Object} wmsLayer     esri layer object for the wms
 * @param  {String} wmsLayerId   layer id as defined in the wms (i.e. not wmsLayer.id)
 * @return {String}              layer title as defined on the service, '' if no title defined
 */
function getWMSLayerTitle(wmsLayer: WmsLayer, wmsLayerId: string): string {
    // TODO move this to ogc.js module?
    if (!wmsLayer.esriLayer) {
        return '';
    }
    let targetEntry;
    // we use .some to allow the search to stop when we find something
    wmsLayer.esriLayer.allSublayers.some((sl: any) => {
        // wms ids are stored in .name
        if (sl.name === wmsLayerId) {
            targetEntry = sl.title;
            return true;
        }
    });
    return targetEntry || '';
}

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
    loadSymbology() {
        const configLayerEntries = this.parentLayer.config.layerEntries;
        const legendArray = this.parentLayer
            .getLegendUrls(
                configLayerEntries.map((le: any) => {
                    return {
                        id: le.id,
                        styleToUrl: le.styleToUrl,
                        currentStyle: le.currentStyle
                    };
                })
            )
            .map((imageUri, idx) => {
                // config specified name || server specified name || config id
                const name =
                    configLayerEntries[idx].name ||
                    getWMSLayerTitle(
                        this.parentLayer,
                        configLayerEntries[idx].id
                    ) ||
                    configLayerEntries[idx].id;
                const symbologyItem = {
                    label: name,
                    svgcode: '',
                    imgHeight: '',
                    imgWidth: ''
                };
                this.parentLayer.$iApi.geo.utils.symbology
                    .generateWMSSymbology(imageUri)
                    .then((data: any) => {
                        symbologyItem.svgcode = data.svgcode;
                        symbologyItem.imgHeight = data.imgHeight;
                        symbologyItem.imgWidth = data.imgWidth;
                    });
                return symbologyItem;
            });
        this.legend = legendArray;
        return Promise.resolve();
    }
}
