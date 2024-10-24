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
        nameField: 'name',
        url: '../file-layers/geojson.json',
        caching: true
    };
    const shape = {
        id: 'Shape',
        name: 'Shape',
        nameField: 'name',
        layerType: 'file-shape',
        url: '../file-layers/shape.zip'
    };
    const zipGeoJson = {
        id: 'GeoZipson',
        name: 'Zipped GeoJson',
        nameField: 'zappy_name',
        colour: '#FF6E00',
        layerType: 'file-zip-geojson',
        url: '../file-layers/zgeojson.zip'
    };

    const zipFgb = {
        id: 'zfgb',
        name: 'Zipped FlatGeobeuf',
        nameField: 'STATE_NAME',
        colour: '#ff1493',
        layerType: 'file-zip-fgb',
        url: '../file-layers/states-fgb.zip',
        state: { opacity: 0.6 }
    };

    utils.addLayerLegend(zipFgb);
    utils.addLayerLegend(geoJson);
    utils.addLayerLegend(csv);
    utils.addLayerLegend(shape);
    utils.addLayerLegend(zipGeoJson);

    return { config, options };
};

const runPostTest = (instance, utils) => {
    // Not used in this test
};

export { runPostTest, runPreTest };
