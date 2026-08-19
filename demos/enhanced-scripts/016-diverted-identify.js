/*
Test 16: Diverted Identify Layer
- Sets up a vector tile layer that redirects to a feature layer.
 */

const runPreTest = (config, options, utils) => {
    // TODO if these layers get hosted on prod (or ideally external QA), update the urls and remove the notification in runPost

    const fancyVector = {
        id: 'whatsyourvectorvictor',
        name: 'Diverted Identify Vector Tile',
        layerType: 'esri-vector-tile',
        url: 'https://ramp-dev.np.ec.cloud-nuage.gc.ca/server/rest/services/Hosted/CNWI_VectorTile/VectorTileServer',
        disabledControls: ['datatable'],
        divertIdentifyLayer: {
            layerType: 'esri-feature',
            url: 'https://ramp-dev.np.ec.cloud-nuage.gc.ca/server/rest/services/Hosted/Canadian_National_Wetlands_Inventory___CNWI/FeatureServer/1'
        }
    };

    utils.addLayerLegend(fancyVector);

    return { config, options };

    // alt object to test wms. its random weather (rainfall areas) so might need to click around to get hit.
    // test on a rainy day if you're big-brained
    /*
        divertIdentifyLayer: {
            layerType: 'ogc-wms',
            url: 'http://geo.weather.gc.ca/geomet/?lang=E&service=WMS&request=GetCapabilities',

            sublayers: [
                {
                    id: 'RDPA.24F_PR',
                    currentStyle: 'PRECIPMM'
                }
            ],
            featureInfoMimeType: 'text/plain'
        }
    */
};

const runPostTest = instance => {
    instance.notify.show(
        'info',
        'Good day. This sample will only work on the ECCC internal network. The data table has been disabled since the feature source has over a million records.'
    );
    instance.geo.map.loadPromise().then(() => {
        const varty = new instance.geo.geom.Point('varty', [-76.8212, 44.4]);
        instance.geo.map.zoomMapTo(varty, 50000);
    });
};

export { runPreTest, runPostTest };
