window.rInstance = null;
document.title = 'Lambert Projection';

let config = {
    en: {
        map: {
            extentSets: [
                {
                    id: 'EXT_NRCAN_Lambert_3978',
                    default: {
                        xmax: 3549492,
                        xmin: -2681457,
                        ymax: 3482193,
                        ymin: -883440,
                        spatialReference: {
                            wkid: 3978
                        }
                    }
                }
            ],
            lodSets: [
                {
                    id: 'LOD_NRCAN_Lambert_3978',
                    lods: RAMP.GEO.defaultLODs(RAMP.GEO.defaultTileSchemas()[0])
                }
            ],
            tileSchemas: [
                {
                    id: 'DEFAULT_NRCAN_Lambert_3978',
                    name: 'Lambert Maps',
                    extentSetId: 'EXT_NRCAN_Lambert_3978',
                    lodSetId: 'LOD_NRCAN_Lambert_3978',
                    thumbnailTileUrls: ['/tile/8/285/268', '/tile/8/285/269'],
                    hasNorthPole: true
                }
            ],
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
        fixtures: {
            overviewmap: {
                map: {
                    extentSets: [
                        {
                            id: 'EXT_NRCAN_Lambert_3978',
                            default: {
                                xmax: 3549492,
                                xmin: -2681457,
                                ymax: 3482193,
                                ymin: -883440,
                                spatialReference: {
                                    wkid: 3978
                                }
                            }
                        }
                    ],
                    lodSets: [
                        {
                            id: 'LOD_NRCAN_Lambert_3978',
                            lods: RAMP.GEO.defaultLODs(
                                RAMP.GEO.defaultTileSchemas()[0]
                            )
                        }
                    ],
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
                    ]
                },
                startMinimized: true
            }
        }
    }
};

let options = {
    loadDefaultFixtures: false,
    loadDefaultEvents: true
};

rInstance = new RAMP.Instance(document.getElementById('app'), config, options);
rInstance.fixture.addDefaultFixtures(['northarrow', 'appbar', 'overviewmap']);
