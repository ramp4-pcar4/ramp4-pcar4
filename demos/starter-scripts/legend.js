import { createInstance, geo } from '@/main';

window.debugInstance = null;

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
                caption: {
                    mapCoords: {
                        formatter: 'WEB_MERCATOR'
                    },
                    scaleBar: {
                        imperialScale: true
                    }
                },
                mapMouseThrottle: 200,
                lodSets: [
                    {
                        id: 'LOD_ESRI_World_AuxMerc_3857',
                        lods: geo.defaultLODs(geo.defaultTileSchemas()[1])
                    }
                ],
                tileSchemas: [
                    {
                        id: 'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857',
                        name: 'Web Mercator Maps',
                        extentSetId: 'EXT_ESRI_World_AuxMerc_3857',
                        lodSetId: 'LOD_ESRI_World_AuxMerc_3857',
                        thumbnailTileUrls: ['/tile/8/91/74', '/tile/8/91/75']
                    }
                ],
                basemaps: [
                    {
                        id: 'baseEsriWorld',
                        name: 'World Imagery',
                        description:
                            'World Imagery provides one meter or better satellite and aerial imagery in many parts of the world and lower resolution satellite imagery worldwide.',
                        altText: 'World Imagery',
                        layers: [
                            {
                                id: 'World_Imagery',
                                layerType: 'esri-tile',
                                url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer'
                            }
                        ],
                        tileSchemaId:
                            'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857',
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
                initialBasemapId: 'baseEsriWorld'
            },
            layers: [
                {
                    id: 'WaterQuantity',
                    layerType: 'esri-map-image',
                    url: 'https://maps-cartes.ec.gc.ca/arcgis/rest/services/CESI/MapServer',
                    sublayers: [
                        {
                            index: 1,
                            name: 'Water quantity child',
                            state: {
                                opacity: 1,
                                visibility: true
                            },
                            fixtures: {
                                settings: {
                                    controls: ['visibility', 'opacity']
                                }
                            }
                        },
                        {
                            index: 9,
                            name: 'Carbon monoxide emissions by facility',
                            state: {
                                opacity: 0.5,
                                visibility: true
                            },
                            disabledControls: ['opacity', 'visibility']
                        }
                    ],
                    state: {
                        opacity: 1,
                        visibility: true
                    },
                    metadata: {
                        url: 'https://raw.githubusercontent.com/ramp4-pcar4/ramp4-pcar4/main/README.md',
                        name: 'Read Me!'
                    },
                    customRenderer: {} // just to chill things out. real ramp will have all properties defaulted and filled in
                },
                {
                    id: 'WaterQuality',
                    layerType: 'esri-map-image',
                    url: 'https://maps-cartes.ec.gc.ca/arcgis/rest/services/CESI/MapServer',
                    sublayers: [
                        {
                            index: 5,
                            state: {}
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
                    layerType: 'esri-feature',
                    url: 'https://section917.canadacentral.cloudapp.azure.com/arcgis/rest/services/TestData/EcoAction/MapServer/9',
                    state: {
                        opacity: 0.8,
                        visibility: true,
                        hovertips: false
                    },
                    mouseTolerance: 10,
                    customRenderer: {} // just to chill things out. real ramp will have all properties defaulted and filled in
                },
                {
                    id: 'WFSLayer',
                    layerType: 'ogc-wfs',
                    url: 'https://api.weather.gc.ca//collections/ahccd-trends/items?measurement_type__type_mesure=total_precip&period__periode=Ann&startindex=0&limit=1000&province__province=on',
                    xyInAttribs: true,
                    colour: '#FF5555',
                    state: {
                        visibility: false
                    },
                    customRenderer: {},
                    metadata: {
                        url: 'https://raw.githubusercontent.com/ramp4-pcar4/ramp4-pcar4/main/README.md'
                    },
                    fixtures: {
                        details: {
                            template: 'WFSLayer-Custom'
                        }
                    }
                }
            ],
            fixtures: {
                legend: {
                    root: {
                        children: [
                            {
                                layerId: 'WFSLayer',
                                name: 'WFSLayer'
                            },
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
                                                name: 'Water Quantity in Nested Group',
                                                sublayerIndex: 1,
                                                controls: [
                                                    'datatable',
                                                    'metadata',
                                                    'reload',
                                                    'remove',
                                                    'settings',
                                                    'symbology'
                                                ]
                                            },
                                            {
                                                layerId: 'WaterQuantity',
                                                name: 'CO2 in Nested Group',
                                                sublayerIndex: 9
                                            },
                                            {
                                                layerId: 'WaterQuality',
                                                name: 'Water Quality in Nested Group',
                                                sublayerIndex: 5
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                },
                appbar: {
                    items: ['wizard', 'legend']
                }
            }
        }
    }
};

let options = {
    loadDefaultFixtures: false,
    loadDefaultEvents: true
};

const rInstance = createInstance(
    document.getElementById('app'),
    config,
    options
);

window.debugInstance = rInstance;

// add a minimal set of fixtures
rInstance.fixture
    .addDefaultFixtures([
        'appbar',
        'crosshairs',
        'grid',
        'legend',
        'metadata',
        'scrollguard',
        'panguard',
        'settings',
        'wizard'
    ])
    .then(async () => {
        rInstance.panel.open('legend');
        rInstance.panel.pin('legend');

        // manually override CleanAir item's uid for testing
        window.lApi = window.debugInstance.fixture.get('legend');
        let item = window.lApi.getLayerItem('CleanAir');
        item.uid = '😎';

        // run test suite
        await testSuite();
    });

// test suite method
const testSuite = async () => {
    console.log('===== RUNNING LEGEND API CRUD TESTS =====');

    console.log('*********** Create ***********');

    let group = window.lApi.createItem(
        {
            name: 'Created Group',
            children: []
        },
        window.lApi.getItem(window.lApi.getLegendConfig().root.children[1].uid)
    );

    console.log(
        'create group under "Visibility Set"',
        window.lApi.addItem(
            group,
            window.lApi.getItem(
                window.lApi.getLegendConfig().root.children[1].uid
            )
        )
    );

    const layer = window.debugInstance.geo.layer.createLayer({
        id: 'Oilsands',
        url: 'https://section917.canadacentral.cloudapp.azure.com/arcgis/rest/services/TestData/Oilsands/MapServer',
        layerType: 'esri-map-image',
        name: 'Oil Sands',
        sublayers: [
            {
                index: 0,
                state: {
                    opacity: 0.5,
                    visibility: true
                }
            },
            {
                index: 1,
                state: {
                    opacity: 1,
                    visibility: false
                }
            },
            {
                index: 2,
                state: {
                    opacity: 1,
                    visibility: false
                }
            }
        ],
        state: {
            opacity: 1,
            visibility: true
        }
    });
    await window.debugInstance.geo.map.addLayer(layer);
    let layerItem = await window.lApi.addLayerItem(layer, group);

    console.log('Add Oil Sands layer item under "Created Group"', layerItem);

    console.log('*********** Read ***********');

    console.log('get legend', window.lApi.getLegend());
    console.log('get legend config', window.lApi.getLegendConfig());
    console.log('get item WFSLayer', window.lApi.getItem('WFSLayer'));
    console.log(
        'get layer item with layer id CleanAir',
        window.lApi.getLayerItem('CleanAir')
    );
    console.log(
        'get item layer id MIL sublayer',
        window.lApi.getItem('WaterQuantity-9')
    );
    console.log('get item with uid', window.lApi.getItem('😎'));
    console.log(
        'get all expanded (undefined=true)',
        window.lApi.getAllExpanded()
    );
    console.log('get all expanded true', window.lApi.getAllExpanded(true));
    console.log('get all expanded false', window.lApi.getAllExpanded(false));
    console.log(
        'get all visible (undefined=true)',
        window.lApi.getAllVisible(true)
    );
    console.log('get all visible true', window.lApi.getAllVisible());
    console.log('get all visible false', window.lApi.getAllVisible(false));

    console.log('*********** Update ***********');

    console.log('toggle expand/visibility using the buttons in the legend');

    console.log('*********** Delete ***********');

    console.log(
        'remove item by legend id: run `window.lApi.removeItem(uid or legend item instance)`'
    );
    console.log(
        'remove item by legend id: run `window.lApi.removeLayerItem(layerId)`'
    );

    console.log('=========================================');
};
