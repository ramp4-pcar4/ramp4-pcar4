/*
Test 15: Vector Tile Layer
- Loads a vector tile layer from an external source (WDPA)
 */

const runPreTest = (config, options, utils) => {
    const wdpa = {
        id: 'WDPA',
        name: 'WDPA World Database of Protected Areas',
        layerType: 'esri-vector-tile',
        url: 'https://vectortileservices5.arcgis.com/Mj0hjvkNtV7NRhA7/arcgis/rest/services/WDPA_World_Database_of_Protected_Areas_VTS/VectorTileServer'
    };

    utils.addLayerLegend(wdpa);
    config.configs.en.map.initialBasemapId = 'baseEsriTerrain';
    config.configs.fr.map.initialBasemapId = 'baseEsriTerrain';

    return { config, options };
};

const runPostTest = () => {
    // Not used in this test
};

export { runPreTest, runPostTest };
