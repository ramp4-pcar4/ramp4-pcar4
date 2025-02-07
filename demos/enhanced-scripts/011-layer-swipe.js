/*
Test 11: Layer Swipe
- 

 */

const runPreTest = (config, options, utils) => {
    const natureLayer = {
        id: 'Nature',
        layerType: 'esri-feature',
        url: 'https://section917.canadacentral.cloudapp.azure.com/arcgis/rest/services/TestData/EcoAction/MapServer/6'
    };

    const waterLayer = {
        id: 'Water',
        layerType: 'esri-feature',
        url: 'https://section917.canadacentral.cloudapp.azure.com/arcgis/rest/services/TestData/EcoAction/MapServer/8'
    };

    const cloudCoverageLayer = {
        id: 'GeoMet',
        layerType: 'ogc-wms',
        url: 'http://geo.weather.gc.ca/geomet/?lang=E&service=WMS&request=GetCapabilities',
        state: {
            visibility: true,
            opacity: 0.5
        },
        sublayers: [
            {
                id: 'RDPA.24F_PR',
                currentStyle: 'PRECIPMM'
            }
        ],
        featureInfoMimeType: 'text/plain',
        fixtures: {
            details: {
                template: 'GeoMet-Template'
            }
        }
    };

    const wfsLayer = {
        id: 'WFSLayer',
        layerType: 'ogc-wfs',
        url: 'https://api.weather.gc.ca//collections/ahccd-trends/items?measurement_type__type_mesure=total_precip&period__periode=Ann&offset=0&limit=150&province__province=on',
        xyInAttribs: true,
        colour: '#55ffff',
        fixtures: {
            details: {
                template: 'WFSLayer-Custom'
            }
        },
        fieldMetadata: {
            fieldInfo: [
                { name: 'station_name__nom_station' },
                { name: 'station_id__id_station' },
                { name: 'province__province' },
                { name: 'identifier__identifiant' },
                { name: 'year_range__annees' }
            ],
            exclusiveFields: false,
            enforceOrder: true
        }
    };

    // add layers (same across langs). These layers will be used by the Swipe fixture
    utils.addLayerLegend(natureLayer);
    utils.addLayerLegend(waterLayer);
    utils.addLayerLegend(wfsLayer);
    utils.addLayerLegend(cloudCoverageLayer);

    return { config, options };
};

const runPostTest = async instance => {
    // add export fixtures
    instance.fixture.add('export');

    // create a fixture for the layer slider
    instance.fixture.add('swipe').then(swipeFixture => {
        // TODO: two custom methods exist but are not available to call right away, not sure why. Try finding a better
        // solution
        setTimeout(() => {
            swipeFixture.addTrailingLayers(['Nature', 'WFSLayer']);
            swipeFixture.addLeadingLayers(['Water', 'GeoMet']);
        }, 3000);
    });
};

export { runPreTest, runPostTest };
