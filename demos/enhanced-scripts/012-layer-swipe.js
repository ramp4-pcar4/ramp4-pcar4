/*
Test 12: Layer Swipe

 */

const runPreTest = (config, options, utils) => {
    const natureLayer = {
        id: 'Nature',
        layerType: 'esri-feature',
        identifyMode: 'symbolic',
        url: 'https://maps-cartes.qa.ec.gc.ca/arcgis/rest/services/TestData/EcoAction/MapServer/6'
    };

    const waterLayer = {
        id: 'Water',
        layerType: 'esri-feature',
        identifyMode: 'symbolic',
        url: 'https://maps-cartes.qa.ec.gc.ca/arcgis/rest/services/TestData/EcoAction/MapServer/8'
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
        identifyMode: 'symbolic',
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

    // Add layers (same across langs). These layers will be used by the Swipe fixture
    utils.addLayerLegend(natureLayer);
    utils.addLayerLegend(waterLayer);
    utils.addLayerLegend(wfsLayer);
    utils.addLayerLegend(cloudCoverageLayer);

    return { config, options };
};

const runPostTest = async instance => {
    // add export fixtures
    instance.fixture.add('export');

    // Create a fixture for the layer slider
    instance.fixture.add('swipe');
};

export { runPreTest, runPostTest };
