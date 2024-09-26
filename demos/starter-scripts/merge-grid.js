import { createInstance, geo } from '@/main';

window.debugInstance = null;

let config = {
    configs: {
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
                mapMouseThrottle: 200,
                lodSets: [
                    {
                        id: 'LOD_NRCAN_Lambert_3978',
                        lods: geo.defaultLODs(geo.defaultTileSchemas()[0])
                    }
                ],
                tileSchemas: [
                    {
                        id: 'EXT_NRCAN_Lambert_3978#LOD_NRCAN_Lambert_3978',
                        name: 'Lambert Maps',
                        extentSetId: 'EXT_NRCAN_Lambert_3978',
                        lodSetId: 'LOD_NRCAN_Lambert_3978',
                        thumbnailTileUrls: ['/tile/8/285/268', '/tile/8/285/269'],
                        hasNorthPole: true
                    }
                ],
                basemaps: [
                    {
                        id: 'baseNrCan',
                        name: 'Canada Base Map - Transportation (CBMT)',
                        description:
                            'The Canada Base Map - Transportation (CBMT) web mapping services of the Earth Sciences Sector at Natural Resources Canada, are intended primarily for online mapping application users and developers.',
                        altText: 'The Canada Base Map - Transportation (CBMT)',
                        layers: [
                            {
                                id: 'CBMT',
                                layerType: 'esri-tile',
                                url: 'https://maps-cartes.services.geo.ca/server2_serveur2/rest/services/BaseMaps/CBMT3978/MapServer'
                            }
                        ],
                        tileSchemaId: 'EXT_NRCAN_Lambert_3978#LOD_NRCAN_Lambert_3978'
                    }
                ],
                initialBasemapId: 'baseNrCan'
            },
            layers: [
                {
                    id: 'NPRI',
                    layerType: 'esri-feature',
                    url: 'https://maps-cartes.ec.gc.ca/arcgis/rest/services/NPRI_INRP/NPRI_INRP/MapServer/0',
                    fixtures: {
                        grid: {
                            title: 'NPRI Data'
                        }
                    }
                },
                {
                    id: 'EcoGeo',
                    layerType: 'esri-map-image',
                    url: 'https://section917.canadacentral.cloudapp.azure.com/arcgis/rest/services/TestData/EcoAction/MapServer/',
                    sublayers: [{ index: 6 }, { index: 7 }, { index: 8 }]
                },
                {
                    id: 'EcoGeo-9',
                    layerType: 'esri-feature',
                    url: 'https://section917.canadacentral.cloudapp.azure.com/arcgis/rest/services/TestData/EcoAction/MapServer/9'
                },
                {
                    id: 'MajorCities',
                    layerType: 'esri-feature',
                    url: 'https://section917.canadacentral.cloudapp.azure.com/arcgis/rest/services/TestData/SupportData/MapServer/1'
                },
                {
                    id: 'Heroni',
                    layerType: 'esri-feature',
                    url: 'https://maps-cartes.ec.gc.ca/arcgis/rest/services/D01/456ce087-4711-442c-8445-30520f96e98e/MapServer/0'
                },
                {
                    id: 'CESI',
                    layerType: 'esri-map-image',
                    url: 'https://section917.canadacentral.cloudapp.azure.com/arcgis/rest/services/CESI/MapServer/',
                    sublayers: [{ index: 22 }, { index: 24 }, { index: 26 }]
                },
                {
                    id: 'ReleaseDisposals',
                    layerType: 'esri-feature',
                    url: 'https://maps-cartes.ec.gc.ca/arcgis/rest/services/StoryRAMP/410b88da_0ed1_4749_903f_5e76c24e2e5f/MapServer/2'
                },
                {
                    id: 'ErroredLayer',
                    layerType: 'esri-feature',
                    url: 'error'
                },
                {
                    id: 'dataJson',
                    name: 'Tasty Eats',
                    layerType: 'data-json',
                    rawData: {
                        fields: ['Name', 'Description', 'Category', 'Group_', 'Year_'],
                        data: [
                            ['Grouse Burgers', 'A very tasty burger.', 'Burger', 'Fast Food', '2019'],
                            ['Greasy Patties', 'A very greasy burger.', 'Burger', 'Fast Food', '2022'],
                            ['Big Dirty Slice', 'The best pizza in the world!', 'Pizza', 'Fast Food', '2023']
                        ]
                    }
                },
                {
                    id: 'table',
                    name: 'OilSands',
                    layerType: 'data-esri-table',
                    url: 'https://section917.canadacentral.cloudapp.azure.com/arcgis/rest/services/TestData/Oilsands/MapServer/5'
                }
            ],
            fixtures: {
                legend: {
                    root: {
                        children: [
                            {
                                infoType: 'title',
                                content: 'Single Layer Grid',
                                controls: [],
                                children: [
                                    {
                                        infoType: 'text',
                                        content: 'Represents a simple grid with a single layer.'
                                    },
                                    {
                                        name: 'NPRI',
                                        layerId: 'NPRI'
                                    }
                                ]
                            },
                            {
                                infoType: 'title',
                                content: 'Homogenous Merge Grid',
                                controls: [],
                                children: [
                                    {
                                        infoType: 'text',
                                        content:
                                            'Represents a grid merging 3 sublayers, a separately defined feature layer, and a JSON data layer with the exact same fields.'
                                    },

                                    {
                                        layerId: 'dataJson'
                                    },
                                    {
                                        layerId: 'EcoGeo',
                                        sublayerIndex: 6
                                    },
                                    {
                                        layerId: 'EcoGeo',
                                        sublayerIndex: 7
                                    },
                                    {
                                        layerId: 'EcoGeo',
                                        sublayerIndex: 8
                                    },
                                    {
                                        layerId: 'EcoGeo-9'
                                    }
                                ]
                            },
                            {
                                infoType: 'title',
                                content: 'Heterogenous Merge Grid',
                                controls: [],
                                children: [
                                    {
                                        infoType: 'text',
                                        content:
                                            'Represents a merge grid containing layers with differing fields (including oid field).'
                                    },
                                    {
                                        layerId: 'table'
                                    },
                                    {
                                        layerId: 'MajorCities',
                                        name: 'Major Cities'
                                    },
                                    {
                                        layerId: 'Heroni',
                                        name: 'Heroni'
                                    }
                                ]
                            },
                            {
                                infoType: 'title',
                                content: 'Homogenous Merge Grid with Map Filtering',
                                controls: [],
                                children: [
                                    {
                                        infoType: 'text',
                                        content:
                                            'Represents a merge grid with similar fields whose filters can be applied to the map. The Concentration (NO2/Ozone/PM2_5) and Symbol columns are field mapped.'
                                    },
                                    {
                                        layerId: 'CESI',
                                        sublayerIndex: 22,
                                        name: 'NO2 Concentration'
                                    },
                                    {
                                        layerId: 'CESI',
                                        sublayerIndex: 24,
                                        name: 'Ozone Concentration'
                                    },
                                    {
                                        layerId: 'CESI',
                                        sublayerIndex: 26,
                                        name: 'Particulate Concentration'
                                    }
                                ]
                            },
                            {
                                infoType: 'title',
                                content: 'Merge Grid with Errored Layer',
                                controls: [],
                                children: [
                                    {
                                        infoType: 'text',
                                        content: 'A merge grid where one layer has failed to load.'
                                    },
                                    {
                                        name: 'Release Disposals',
                                        layerId: 'ReleaseDisposals'
                                    },
                                    {
                                        name: 'Errored Layer',
                                        layerId: 'ErroredLayer'
                                    }
                                ]
                            }
                        ]
                    }
                },
                appbar: {
                    items: ['legend']
                },
                grid: {
                    mergeGrids: [
                        {
                            gridId: 'EcoGeoMergeGrid',
                            layers: [
                                {
                                    layerId: 'dataJson'
                                },
                                {
                                    layerId: 'EcoGeo',
                                    sublayers: [6, 7, 8]
                                },
                                {
                                    layerId: 'EcoGeo-9'
                                }
                            ],
                            options: {
                                title: 'EcoGeo Data'
                            }
                        },
                        {
                            gridId: 'HeteroMergeGrid',
                            layers: [
                                {
                                    layerId: 'table'
                                },
                                {
                                    layerId: 'MajorCities'
                                },
                                {
                                    layerId: 'Heroni'
                                }
                            ],
                            options: {
                                title: 'Hetero Data',
                                applyToMap: true
                            }
                        },
                        {
                            gridId: 'CESIMergeGrid',
                            layers: [
                                {
                                    layerId: 'CESI',
                                    sublayers: [22, 24, 26]
                                }
                            ],
                            options: {
                                title: 'CESI Data',
                                applyToMap: true,
                                columns: [
                                    {
                                        field: 'Concentration',
                                        title: 'Concentration (NO2/Ozone/PM2_5)'
                                    }
                                ]
                            },
                            fieldMap: [
                                {
                                    field: 'Concentration',
                                    sources: ['NO2', 'Ozone', 'PM2_5']
                                },
                                {
                                    field: 'Symbol',
                                    sources: ['NO2_Symbol', 'Ozone_Symbol', 'PM2_5_Symbol']
                                }
                            ]
                        },
                        {
                            gridId: 'ErrorMergeGrid',
                            layers: [
                                {
                                    layerId: 'ReleaseDisposals'
                                },
                                {
                                    layerId: 'ErroredLayer'
                                }
                            ],
                            options: {
                                title: 'Errored Data'
                            }
                        }
                    ]
                },
                mapnav: {
                    items: ['fullscreen', 'help', 'home', 'legend', 'geosearch']
                },
                help: {
                    location: '../help'
                }
            },
            panels: {
                open: [{ id: 'legend', pin: true }]
            },
            system: { animate: true }
        }
    }
};

let options = {
    loadDefaultFixtures: true,
    loadDefaultEvents: true,
    startRequired: false
};

const rInstance = createInstance(document.getElementById('app'), config, options);

// rInstance.fixture.addDefaultFixtures().then(() => {
//     rInstance.panel.open('legend');
//     rInstance.panel.pin('legend');
// });

// add export fixtures
rInstance.fixture.add('export');

// add areas of interest fixture
rInstance.fixture.add('areas-of-interest');

// load map if startRequired is true
// rInstance.start();

// function animateToggle() {
//     if (rInstance.$vApp.$el.classList.contains('animation-enabled')) {
//         rInstance.$vApp.$el.classList.remove('animation-enabled');
//     } else {
//         rInstance.$vApp.$el.classList.add('animation-enabled');
//     }
//     document.getElementById('animate-status').innerText =
//         'Animate: ' + rInstance.animate;
// }

window.debugInstance = rInstance;
