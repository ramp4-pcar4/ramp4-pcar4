window.rInstance = null;
document.title = 'Lambert Projection';

let config = {
    en: {
        map: {
            extent: {
                xmax: 3549492,
                xmin: -2681457,
                ymax: 3482193,
                ymin: -883440,
                spatialReference: {
                    wkid: 3978
                }
            },
            lods: RAMP.GEO.defaultLODs(RAMP.GEO.defaultTileSchemas()[0]), // idx 1 = mercator
            basemaps: [
                {
                    id: 'CBCT',
                    tileSchemaId: 'DEFAULT_NRCAN_Lambert_3978',
                    layers: [
                        {
                            layerType: 'esriTile',
                            url: 'https://geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBCT3978/MapServer'
                        }
                    ]
                }
            ],
            initialBasemapId: 'CBCT'
        },
        fixtures: {}
    }
}

let options = {
    loadDefaultFixtures: false,
    loadDefaultEvents: false
};

rInstance = new RAMP.Instance(document.getElementById('app'), config, options);
rInstance.fixture.addDefaultFixtures(['northarrow', 'appbar', 'overviewmap']);
