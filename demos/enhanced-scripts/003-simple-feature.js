/*
Test 03: Simple Feature Layers
- Loads two feature layers from EcoGeo.
 */

const runPreTest = (config, options, utils) => {
    const nature = {
        id: 'Nature',
        layerType: 'esri-feature',
        url: 'https://maps-cartes.qa.ec.gc.ca/arcgis/rest/services/TestData/EcoAction/MapServer/6',
        nameArcade: `'I went to ' + $Attr.Name + ' in ' + $Attr.Year_`
    };

    const water = {
        id: 'Water',
        layerType: 'esri-feature',
        url: 'https://maps-cartes.qa.ec.gc.ca/arcgis/rest/services/TestData/EcoAction/MapServer/8'
    };

    utils.addLayerLegend(nature);
    utils.addLayerLegend(water);

    return { config, options };
};

const runPostTest = () => {
    // Not used in this test
};

export { runPreTest, runPostTest };
