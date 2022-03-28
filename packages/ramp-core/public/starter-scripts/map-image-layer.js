window.rInstance = null;
document.title = 'Map Image Layer';

let config = {
    configs: {
        en: {
            map: {
                extentSets: [
                    {
                        id: 'EXT_ESRI_World_AuxMerc_3857',
                        default: {
                            xmax: -5007771.626060756,
                            xmin: -16632697.354854,
                            ymax: 10015875.184845109,
                            ymin: 5022907.964742964,
                            spatialReference: {
                                wkid: 102100,
                                latestWkid: 3857
                            }
                        }
                    }
                ],
                lodSets: [
                    {
                        id: 'LOD_ESRI_World_AuxMerc_3857',
                        lods: RAMP.GEO.defaultLODs(
                            RAMP.GEO.defaultTileSchemas()[1]
                        )
                    }
                ],
                tileSchemas: [
                    {
                        id: 'DEFAULT_ESRI_World_AuxMerc_3857',
                        name: 'Web Mercator Maps',
                        extentSetId: 'EXT_ESRI_World_AuxMerc_3857',
                        lodSetId: 'LOD_ESRI_World_AuxMerc_3857',
                        thumbnailTileUrls: ['/tile/8/91/74', '/tile/8/91/75']
                    }
                ],
                basemaps: [
                    {
                        id: 'esriImagery',
                        tileSchemaId: 'DEFAULT_ESRI_World_AuxMerc_3857',
                        layers: [
                            {
                                layerType: 'esri-tile',
                                url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer'
                            }
                        ]
                    }
                ],
                initialBasemapId: 'esriImagery'
            },
            layers: [
                {
                    id: 'AirEmissions',
                    layerType: 'esri-map-image',
                    url: 'https://maps-cartes.ec.gc.ca/arcgis/rest/services/CESI/MapServer',
                    layerEntries: [
                        {
                            index: 9,
                            state: {
                                opacity: 1,
                                visibility: true
                            },
                            fixtures: {
                                legend: {
                                    toggleSymbology: false
                                }
                            }
                        },
                        {
                            index: 18,
                            state: {
                                opacity: 1,
                                visibility: true
                            },
                            fixtures: {
                                legend: {
                                    toggleSymbology: false
                                }
                            }
                        }
                    ],
                    state: {
                        opacity: 1,
                        visibility: true
                    },
                    customRenderer: {} // just to chill things out. real ramp will have all properties defaulted and filled in
                },
                { id: 'userOSM', layerType: 'osm-tile' }
            ],
            fixtures: {
                legend: {
                    root: {
                        children: [
                            {
                                name: 'Air emissions',
                                children: [
                                    {
                                        layerId: 'AirEmissions',
                                        name: 'Carbon monoxide emissions by facility',
                                        entryIndex: 9
                                    },
                                    {
                                        layerId: 'AirEmissions',
                                        name: 'Sulphur oxide emissions by facility',
                                        entryIndex: 18
                                    }
                                ]
                            },
                            { layerId: 'userOSM', name: 'Open Street Map' }
                        ]
                    }
                },
                appbar: {
                    items: ['legend']
                },
                mapnav: { items: ['fullscreen', 'legend', 'home', 'basemap'] },
                details: { items: [] }
            }
        }
    }
};

let options = {
    loadDefaultFixtures: false,
    loadDefaultEvents: true
};

rInstance = new RAMP.Instance(document.getElementById('app'), config, options);
rInstance.fixture
    .addDefaultFixtures(['mapnav', 'legend', 'appbar', 'grid', 'details'])
    .then(() => {
        rInstance.panel.open('legend-panel');
    });
