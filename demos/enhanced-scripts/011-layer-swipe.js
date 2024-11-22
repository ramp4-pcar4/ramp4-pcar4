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

const waitForMethods = (fixture, timeLimit = 5000, maxAttempts = 100) => {
    return new Promise(resolve => {
        const startTime = Date.now();
        let attempts = 0;

        const checkMethods = () => {
            // Check if we've exceeded timeout or max attempts
            if (Date.now() - startTime > timeLimit) {
                console.error('waitForMethods: Timeout waiting for methods to become available');
                resolve();
            } else if (attempts >= maxAttempts) {
                console.error('waitForMethods: Maximum retry attempts reached');
                resolve();
            } else {
                attempts++;
                if (fixture.addTrailingLayer && fixture.addLeadingLayer) {
                    resolve(fixture);
                } else {
                    requestAnimationFrame(checkMethods);
                }
            }
        };
        checkMethods();
    });
};

const runPostTest = async instance => {
    // add export fixtures
    instance.fixture.add('export');

    // Create a fixture for the layer slider
    let swipeFixture = await instance.fixture.add('swipe');
    let trailingLayers = ['Nature', 'WFSLayer'];
    let leadingLayers = ['Water', 'GeoMet'];

    // Need to check if methods and layers exist before proceeding
    swipeFixture = await waitForMethods(swipeFixture);
    if (swipeFixture) {
        trailingLayers.forEach(layerId => {
            instance.geo.layer.awaitLayer(layerId).then(layerInstance => {
                swipeFixture.addTrailingLayer(layerInstance);
            });
        });

        leadingLayers.forEach(layerId => {
            instance.geo.layer.awaitLayer(layerId).then(layerInstance => {
                swipeFixture.addLeadingLayer(layerInstance);
            });
        });
    }
};

export { runPreTest, runPostTest };
