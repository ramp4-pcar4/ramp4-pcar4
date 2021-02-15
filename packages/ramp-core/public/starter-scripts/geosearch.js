window.rInstance = null;
function initRAMP() {
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
                lods: RAMP.geoapi.maps.defaultLODs(RAMP.geoapi.maps.defaultTileSchemas()[1]), // idx 1 = mercator
                basemaps: [
                    {
                        id: 'esriImagery',
                        tileSchemaId: 'DEFAULT_ESRI_World_AuxMerc_3857',
                        layers: [
                            {
                                layerType: 'esriTile',
                                url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer'
                            }
                        ]
                    }
                ],
                initialBasemapId: 'esriImagery'
            },
            layers: [
                {
                    id: 'WaterQuantity',
                    layerType: 'esriMapImage',
                    url: 'https://maps-cartes.ec.gc.ca/arcgis/rest/services/CESI/MapServer',
                    layerEntries: [
                        {
                            index: 1,
                            state: {
                                opacity: 1,
                                visibility: true
                            }
                        }
                    ],
                    state: {
                        opacity: 1,
                        visibility: true
                    },
                    customRenderer: {} // just to chill things out. real ramp will have all properties defaulted and filled in
                },
                {
                    id: 'WaterQuality',
                    layerType: 'esriMapImage',
                    url: 'https://maps-cartes.ec.gc.ca/arcgis/rest/services/CESI/MapServer',
                    layerEntries: [
                        {
                            index: 5,
                            state: {
                                opacity: 1,
                                visibility: true
                            }
                        }
                    ],
                    state: {
                        opacity: 1,
                        visibility: true
                    },
                    customRenderer: {} // just to chill things out. real ramp will have all properties defaulted and filled in
                },
                {
                    id: 'CleanAir',
                    layerType: 'esriFeature',
                    url: 'https://maps-cartes.ec.gc.ca/arcgis/rest/services/EcoGeo/EcoGeo/MapServer/9',
                    state: {
                        opacity: 0.8,
                        visibility: true
                    },
                    customRenderer: {} // just to chill things out. real ramp will have all properties defaulted and filled in
                },
                {
                    id: 'WFSLayer',
                    layerType: 'ogcWfs',
                    url: 'https://geo.weather.gc.ca/geomet-beta/features/collections/hydrometric-stations/items?startindex=7740',
                    state: {
                        visibility: true
                    },
                    customRenderer: {}
                }
            ],
            fixtures: {
                appbar: {
                    items: [
                        'geosearch'
                    ]
                }
            }
        }
    }

    let options = {
        loadDefaultFixtures: false,
        loadDefaultEvents: false
    };

    rInstance = new RAMP.Instance(document.getElementById('app'), config, options);
    rInstance.fixture.addDefaultFixtures(['appbar', 'geosearch']);
}
