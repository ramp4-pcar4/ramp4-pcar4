/*
Test 05: Simple File Layers
- Loads three file layers. A CSV, a GeoJSON, and a zipped Shape
 */

const runPreTest = (config, options, utils) => {
    const csv = {
        id: 'CSV',
        name: 'CSV',
        layerType: 'file-csv',
        url: '../file-layers/csv.csv',
        latField: 'Y',
        longField: 'X',
        colour: '#FF0000' // So that its not the same colour as the shape one
    };
    const geoJson = {
        id: 'GeoJson',
        name: 'GeoJson',
        layerType: 'file-geojson',
        url: '../file-layers/geojson.json',
        caching: true
    };
    const shape = {
        id: 'Shape',
        name: 'Shape',
        layerType: 'file-shape',
        url: '../file-layers/shape.zip'
    };

    utils.addLayerLegend(csv);
    utils.addLayerLegend(geoJson);
    utils.addLayerLegend(shape);

    // remove ~@~
    config.configs.en.map.layerTimeDefault = {
        expectedLoadTime: 25000,
        expectedDrawTime: 25000
    };
    options.initDelay = 4000;
    options.loadDelay = 4000;

    return { config, options };
};

const runPostTest = (instance, utils) => {
    // Not used in this test
};

export { runPreTest, runPostTest };
