// TODO add proper comments

import { CommonFC } from '@/api/internal';
import { DataFormat, LegendSymbology } from '@/geo/api';
import WmsLayer from './index';

export class WmsFC extends CommonFC {
    // @ts-ignore
    protected parentLayer: WmsLayer;

    constructor(parent: WmsLayer, layerIdx: number = 0) {
        super(parent, layerIdx);
        this.dataFormat = DataFormat.OGC_RASTER;
    }

    /**
     * Searches for a layer title defined by a wms.
     * @function getWMSLayerTitle
     * @private
     * @param  {String} wmsLayerId   layer id as defined in the wms (i.e. not wmsLayer.id)
     * @return {String}              layer title as defined on the service, '' if no title defined
     */
    getWMSLayerTitle(wmsLayerId: string): string {
        // TODO move this to ogc.js module?
        if (!this.parentLayer.esriLayer) {
            return '';
        }
        let targetEntry;
        // we use .some to allow the search to stop when we find something
        this.parentLayer.esriLayer.allSublayers.some((sl: any) => {
            // wms ids are stored in .name
            if (sl.name === wmsLayerId) {
                targetEntry = sl.title;
                return true;
            }
        });

        return targetEntry || '';
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
                        styleLegends: le.styleLegends,
                        currentStyle: le.currentStyle
                    };
                })
            )
            .map((imageUri, idx) => {
                // config specified name || server specified name || config id
                const name =
                    configLayerEntries[idx].name ||
                    this.getWMSLayerTitle(configLayerEntries[idx].id) ||
                    configLayerEntries[idx].id;
                const symbologyItem: LegendSymbology = {
                    uid: RAMP.GEO.sharedUtils.generateUUID(),
                    label: name,
                    svgcode: '',
                    drawPromise: this.parentLayer.$iApi.geo.utils.symbology
                        .generateWMSSymbology(imageUri)
                        .then((data: any) => {
                            symbologyItem.svgcode = data.svgcode;
                            symbologyItem.imgHeight = data.imgHeight;
                            symbologyItem.imgWidth = data.imgWidth;
                        })
                };
                return symbologyItem;
            });
        this.legend = legendArray;
        return Promise.resolve();
    }
}
