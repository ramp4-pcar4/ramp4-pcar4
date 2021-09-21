window.rInstance = null;
document.title = 'Map Image Layer';

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
        layers: [
            {
                id: 'AirEmissions',
                layerType: 'esriMapImage',
                url: 'https://maps-cartes.ec.gc.ca/arcgis/rest/services/CESI/MapServer',
                layerEntries: [
                    {
                        index: 9,
                        state: {
                            opacity: 1,
                            visibility: true
                        }
                    },
                    {
                        index: 18,
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
            }
        ],
        fixtures: {
            legend: {
                reorderable: true,
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
                        }
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
};

let options = {
    loadDefaultFixtures: false,
    loadDefaultEvents: true
};

rInstance = new RAMP.Instance(document.getElementById('app'), config, options);
rInstance.fixture.addDefaultFixtures(['mapnav', 'legend', 'appbar', 'grid', 'details']).then(() => {
    rInstance.panel.open('legend-panel');
});
