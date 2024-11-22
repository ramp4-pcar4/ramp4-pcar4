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

    // add layers (same across langs)
    utils.addLayerLegend(natureLayer);
    utils.addLayerLegend(waterLayer);

    return { config, options };
};

const runPostTest = instance => {
    // add export fixtures
    instance.fixture.add('export');

    // create a fixture for the layer slider
    instance.fixture.add('swipe');
};

export { runPreTest, runPostTest };
