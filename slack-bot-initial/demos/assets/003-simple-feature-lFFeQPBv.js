/*
Test 03: Simple Feature Layers
- Loads two feature layers from EcoGeo.
 */

const runPreTest = (config, options, utils) => {
    const nature = {
        id: 'Nature',
        layerType: 'esri-feature',
        url: 'https://section917.canadacentral.cloudapp.azure.com/arcgis/rest/services/TestData/EcoAction/MapServer/6'
    };

    const water = {
        id: 'Water',
        layerType: 'esri-feature',
        url: 'https://section917.canadacentral.cloudapp.azure.com/arcgis/rest/services/TestData/EcoAction/MapServer/8'
    };

    utils.addLayerLegend(nature);
    utils.addLayerLegend(water);

    return { config, options };
};

const runPostTest = (instance, utils) => {
    // Not used in this test
};

export { runPostTest, runPreTest };
