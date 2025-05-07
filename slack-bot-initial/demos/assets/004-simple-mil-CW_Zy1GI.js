/*
Test 04: Simple Map Image Layers
- Loads one map image layer from EcoGeo.
- Has two sublayers, distinct bound legend blocks (no treegrow)
 */

const runPreTest = (config, options, utils) => {
    const ecoGeoMIL = {
        id: 'EcoGeo',
        layerType: 'esri-map-image',
        url: 'https://section917.canadacentral.cloudapp.azure.com/arcgis/rest/services/TestData/EcoAction/MapServer/',
        sublayers: [{ index: 6 }, { index: 8 }]
    };

    utils.addLayer(ecoGeoMIL);
    utils.addLegend({
        layerId: 'EcoGeo',
        sublayerIndex: 6
    });
    utils.addLegend({
        layerId: 'EcoGeo',
        sublayerIndex: 8
    });

    return { config, options };
};

const runPostTest = (instance, utils) => {
    // Not used in this test
};

export { runPostTest, runPreTest };
