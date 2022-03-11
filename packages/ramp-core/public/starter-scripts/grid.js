window.rInstance = null;

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
                    id: 'CarbonMonoxide',
                    layerType: 'esri-feature',
                    url: 'https://maps-cartes.ec.gc.ca/arcgis/rest/services/CESI/MapServer/9',
                    state: {
                        opacity: 1,
                        visibility: true
                    },
                    customRenderer: {}
                },
                {
                    id: 'CleanAir',
                    layerType: 'esri-feature',
                    url: 'https://maps-cartes.ec.gc.ca/arcgis/rest/services/EcoGeo/EcoGeo/MapServer/9',
                    state: {
                        opacity: 0.8,
                        visibility: true
                    },
                    customRenderer: {}
                },
                {
                    id: 'Shellfish',
                    layerType: 'esri-feature',
                    url: 'https://maps-cartes.ec.gc.ca/arcgis/rest/services/Shellfish_Classification_Mollusques/MapServer/6',
                    state: {
                        opacity: 1,
                        visibility: true
                    },
                    customRenderer: {}
                }
            ],
            fixtures: {
                legend: {
                    root: {
                        children: [
                            {
                                layerId: 'CleanAir',
                                name: 'Clean Air'
                            },
                            {
                                layerId: 'CarbonMonoxide',
                                name: 'Carbon monoxide'
                            },
                            {
                                layerId: 'Shellfish',
                                name: 'Shellfish'
                            }
                        ]
                    }
                },
                appbar: {
                    items: ['legend']
                },
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
    .addDefaultFixtures(['legend', 'appbar', 'grid', 'details'])
    .then(() => {
        rInstance.panel.open('legend-panel');
    });
