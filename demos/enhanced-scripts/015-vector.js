/*
Test 15: Vector Tile Layer
- Loads a vector tile layer from an external source (Mangroves)
 */

const runPreTest = (config, options, utils) => {
    const mangroves = {
        id: 'mangroves',
        name: 'Mangroves',
        layerType: 'esri-vector-tile',
        url: 'https://vectortileservices2.arcgis.com/TjBp1jQZXKD8DAF6/arcgis/rest/services/North_America_Mangroves_Py/VectorTileServer'
    };

    utils.addLayerLegend(mangroves);
    config.configs.en.map.initialBasemapId = 'baseEsriTerrain';
    config.configs.fr.map.initialBasemapId = 'baseEsriTerrain';

    return { config, options };
};

const runPostTest = () => {
    // Not used in this test
};

export { runPreTest, runPostTest };
