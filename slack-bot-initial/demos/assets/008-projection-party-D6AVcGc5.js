/*
Test 08: Projection Party
- Loads layers in different projections.
- File Lat Long
- File Albers
- Feature Lat Long
- Feature Mercator
- Feature Lambert
*/

const runPreTest = (config, options, utils) => {
    const happy = {
        id: 'gjLatLong',
        name: 'GeoJson LatLon',
        layerType: 'file-geojson',
        url: '../file-layers/geojson.json',
        caching: true,
        colour: '#00FF7F',
        nameField: 'name'
    };

    const yarmouth = {
        id: 'gjFancyCRS',
        name: 'GeoJson CRS Great Lakes Albers',
        layerType: 'file-geojson',
        url: '../file-layers/yarmouth.json',
        caching: true,
        colour: '#FF8C00',
        nameField: 'name'
    };

    const duffers = {
        id: 'gjFancyWKT',
        name: 'GeoJson WKT Great Lakes Albers',
        layerType: 'file-geojson',
        url: '../file-layers/duffers.json',
        caching: true,
        colour: '#008CAA',
        nameField: 'name'
    };

    const latlonFL = {
        id: 'fLatLong',
        layerType: 'esri-feature',
        name: 'Feature LatLon',
        url: 'https://geoappext.nrcan.gc.ca/arcgis/rest/services/NACEI/energy_infrastructure_of_north_america_en/MapServer/5'
    };

    const mercFL = {
        id: 'fMerc',
        layerType: 'esri-feature',
        name: 'Feature Mercator',
        url: 'https://section917.canadacentral.cloudapp.azure.com/arcgis/rest/services/TestData/Oilsands/MapServer/0',
        permanentFilteredQuery: 'OBJECTID < 100'
    };

    const lambertFL = {
        id: 'fLambert',
        layerType: 'esri-feature',
        name: 'Feature Lambert',
        url: 'https://section917.canadacentral.cloudapp.azure.com/arcgis/rest/services/TestData/Surverses_des_egouts_unitaires_Combined_sewer_overflow/MapServer/34'
    };

    utils.addLayerLegend(latlonFL);
    utils.addLayerLegend(mercFL);
    utils.addLayerLegend(lambertFL);
    utils.addLayerLegend(happy);
    utils.addLayerLegend(yarmouth);
    utils.addLayerLegend(duffers);

    return { config, options };
};

const runPostTest = (instance, utils) => {
    // Not used in this test
};

export { runPostTest, runPreTest };
