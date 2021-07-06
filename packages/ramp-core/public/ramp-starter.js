window.rInstance = null;

console.log('RAMP has loaded.');

// TODO: Location for version string needs to be finalized
// document.getElementById('ramp-version').innerText =
//     'v.' +
//     RAMP.version.major +
//     '.' +
//     RAMP.version.minor +
//     '.' +
//     RAMP.version.patch +
//     ' [#' +
//     RAMP.version.hash.slice(0, 6) +
//     ']  -  built on ' +
//     new Date(RAMP.version.timestamp).toLocaleDateString();

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
                    ],
                    attribution: {
                        text: {
                            disabled: true
                        },
                        logo: {
                            disabled: true
                        }
                    }
                }
            ],
            initialBasemapId: 'esriImagery'
        },
        layers: [
            {
                id: 'WaterQuantity',
                name: 'Water quantity parent',
                layerType: 'esriMapImage',
                url:
                    'https://maps-cartes.ec.gc.ca/arcgis/rest/services/CESI/MapServer',
                layerEntries: [
                    {
                        index: 1,
                        name: 'Water quantity child',
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
                url:
                    'https://maps-cartes.ec.gc.ca/arcgis/rest/services/CESI/MapServer',
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
                url:
                    'https://maps-cartes.ec.gc.ca/arcgis/rest/services/EcoGeo/EcoGeo/MapServer/9',
                state: {
                    opacity: 0.8,
                    visibility: true
                },
                customRenderer: {} // just to chill things out. real ramp will have all properties defaulted and filled in
            },
            {
                id: 'WFSLayer',
                layerType: 'ogcWfs',
                url:
                    'https://geo.weather.gc.ca/geomet-beta/features/collections/hydrometric-stations/items?startindex=7740',
                state: {
                    visibility: true
                },
                customRenderer: {}
            }
            /*
            {
                id: 'TestTile',
                layerType: 'esriTile',
                url: 'https://services.arcgisonline.com/arcgis/rest/services/USA_Topo_Maps/MapServer',
                state: {
                    opacity: 1,
                    visibility: true
                },
                customRenderer: {} // just to chill things out. real ramp will have all properties defaulted and filled in
            },
            {
                "id": "CanGRID_tmean_MAM_en",
                "layerType": "ogcWms",
                "url": "https://geo.weather.gc.ca/geomet-climate?SERVICE=WMS&VERSION=1.3.0",
                "name": "Total precipitation",
                "state": {
                    "opacity": 0.85,
                    "visibility": true
                },
                "layerEntries": [{"id": "CANGRD.TREND.TM_SPRING" }],
                "featureInfoMimeType": "application/json"
            }
            */
        ],
        fixtures: {
            legend: {
                reorderable: true,
                root: {
                    children: [
                        {
                            name: 'Visibility Set',
                            exclusiveVisibility: [
                                {
                                    layerId: 'CleanAir',
                                    name: 'Clean Air in Set'
                                },
                                {
                                    name: 'Group in Set',
                                    children: [
                                        {
                                            layerId: 'WaterQuantity',
                                            name:
                                                'Water Quantity in Nested Group',
                                            entryIndex: 1
                                        },
                                        {
                                            layerId: 'WaterQuality',
                                            name:
                                                'Water Quality in Nested Group',
                                            entryIndex: 5
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            layerId: 'WFSLayer',
                            name: 'WFSLayer'
                        }
                    ]
                }
            },
            appbar: {
                items: [
                    'legend',
                    'geosearch',
                    'basemap',
                    'divider',
                    'export-v1'
                ],
                temporaryButtons: ['details', 'grid']
            },
            mapnav: { items: ['fullscreen', 'help', 'home', 'basemap'] },
            'export-v1-title': {
                text: 'All Your Base are Belong to Us'
            }
        },
        animate: true
    },
    fr: {
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
                    ],
                    attribution: {
                        text: {
                            disabled: true
                        },
                        logo: {
                            disabled: true
                        }
                    }
                }
            ],
            initialBasemapId: 'esriImagery'
        },
        layers: [
            {
                id: 'CleanWater',
                layerType: 'esriFeature',
                url:
                    'https://maps-cartes.ec.gc.ca/arcgis/rest/services/EcoGeo/EcoGeo/MapServer/3',
                state: {
                    opacity: 0.8,
                    visibility: true
                },
                customRenderer: {} // just to chill things out. real ramp will have all properties defaulted and filled in
            },
            {
                id: 'WFSLayer',
                layerType: 'ogcWfs',
                url:
                    'https://geo.weather.gc.ca/geomet-beta/features/collections/hydrometric-stations/items?startindex=6000',
                state: {
                    visibility: true
                },
                customRenderer: {}
            }
        ],
        fixtures: {
            appbar: {
                items: [
                    'legend',
                    'geosearch',
                    'basemap',
                    'divider',
                    'export-v1'
                ],
                temporaryButtons: ['details', 'grid']
            },
            mapnav: { items: ['fullscreen', 'help', 'home', 'basemap'] },
            'export-v1-title': {
                text: 'All Your Base are Belong to Us'
            }
        },
        animate: true
    }
};

let options = {
    loadDefaultFixtures: false,
    loadDefaultEvents: true
};

rInstance = new RAMP.Instance(document.getElementById('app'), config, options);
rInstance.fixture.addDefaultFixtures().then(() => {
    rInstance.panel.open('legend-panel');
});

// add export-v1 fixtures
rInstance.fixture.add('export-v1');

function switchLang() {
    if (rInstance.language === 'en') {
        rInstance.setLanguage('fr');
    } else {
        rInstance.setLanguage('en');
    }
    document.getElementById('instance-language').innerText = rInstance.language;
}

function animateToggle() {
    if (rInstance.$vApp.$el.classList.contains('animation-enabled')) {
        rInstance.$vApp.$el.classList.remove('animation-enabled');
    } else {
        rInstance.$vApp.$el.classList.add('animation-enabled');
    }
    document.getElementById('animate-status').innerText =
        'Animate: ' + rInstance.animate;
}
