window.rInstance = null;
document.title = 'Overview';

let config = {
    en: {
        map: {
            extent: {
                xmax: -5007771.626060756,
                xmin: -16632697.354854,
                ymax: 10015875.184845109,
                ymin: 5022907.964742964,
                spatialReference: {
                    wkid: 102100,
                    latestWkid: 3857
                }
            },
            lods: RAMP.GEO.defaultLODs(RAMP.GEO.defaultTileSchemas()[1]), // idx 1 = mercator
            basemaps: [
                {
                    id: 'esriImagery',
                    tileSchemaId: 'DEFAULT_ESRI_World_AuxMerc_3857',
                    layers: [
                        {
                            layerType: 'esriTile',
                            url:
                                'https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer'
                        }
                    ]
                }
            ],
            initialBasemapId: 'esriImagery'
        },
        fixtures: {
            overviewmap: {
                map: {
                    lods: [
                        {
                            level: 0,
                            resolution: 156543.03392800014,
                            scale: 591657527.591555
                        },
                        {
                            level: 1,
                            resolution: 78271.51696399994,
                            scale: 295828763.795777
                        },
                        {
                            level: 2,
                            resolution: 39135.75848200009,
                            scale: 147914381.897889
                        },
                        {
                            level: 3,
                            resolution: 19567.87924099992,
                            scale: 73957190.948944
                        },
                        {
                            level: 4,
                            resolution: 9783.93962049996,
                            scale: 36978595.474472
                        },
                        {
                            level: 5,
                            resolution: 4891.96981024998,
                            scale: 18489297.737236
                        },
                        {
                            level: 6,
                            resolution: 2445.98490512499,
                            scale: 9244648.868618
                        },
                        {
                            level: 7,
                            resolution: 1222.992452562495,
                            scale: 4622324.434309
                        },
                        {
                            level: 8,
                            resolution: 611.4962262813797,
                            scale: 2311162.217155
                        },
                        {
                            level: 9,
                            resolution: 305.74811314055756,
                            scale: 1155581.108577
                        },
                        {
                            level: 10,
                            resolution: 152.87405657041106,
                            scale: 577790.554289
                        },
                        {
                            level: 11,
                            resolution: 76.43702828507324,
                            scale: 288895.277144
                        },
                        {
                            level: 12,
                            resolution: 38.21851414253662,
                            scale: 144447.638572
                        },
                        {
                            level: 13,
                            resolution: 19.10925707126831,
                            scale: 72223.819286
                        }
                    ],
                    basemap: {
                        id: 'World_Terrain_Base',
                        tileSchemaId: 'DEFAULT_ESRI_World_AuxMerc_3857',
                        layers: [
                            {
                                layerType: 'esriTile',
                                url: 'http://services.arcgisonline.com/arcgis/rest/services/World_Terrain_Base/MapServer'
                            }
                        ]
                    },
                    spatialReference: {
                        wkid: 3857
                    }
                },
                startMinimized: false
            }
        }
    }
}

let options = {
    loadDefaultFixtures: false,
    loadDefaultEvents: true
};

rInstance = new RAMP.Instance(document.getElementById('app'), config, options);
rInstance.fixture.addDefaultFixtures(['overviewmap']);
