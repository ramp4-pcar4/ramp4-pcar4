window.rInstance = null;
document.title = 'Panel Party';

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
            tileSchemas: [
                {
                    id: 'EXT_NRCAN_Lambert_3978#LOD_NRCAN_Lambert_3978',
                    name: 'Lambert Maps',
                    extentSetId: 'EXT_NRCAN_Lambert_3978',
                    lodSetId: 'LOD_NRCAN_Lambert_3978',
                    thumbnailTileUrls: ['/tile/8/285/268', '/tile/8/285/269'],
                    hasNorthPole: true
                },
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
                    id: 'baseNrCan',
                    name: 'Canada Base Map - Transportation (CBMT)',
                    description:
                        'The Canada Base Map - Transportation (CBMT) web mapping services of the Earth Sciences Sector at Natural Resources Canada, are intended primarily for online mapping application users and developers.',
                    altText: 'The Canada Base Map - Transportation (CBMT)',
                    layers: [
                        {
                            id: 'CBMT',
                            layerType: 'esriTile',
                            url:
                                'https://geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT3978/MapServer'
                        }
                    ],
                    tileSchemaId: 'EXT_NRCAN_Lambert_3978#LOD_NRCAN_Lambert_3978',
                    wkid: 3978
                },
                {
                    id: 'baseSimple',
                    name: 'Canada Base Map - Simple',
                    description: 'Canada Base Map - Simple',
                    altText: 'Canada base map - Simple',
                    layers: [
                        {
                            id: 'SMR',
                            layerType: 'esriTile',
                            url:
                                'https://geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/Simple/MapServer'
                        }
                    ],
                    tileSchemaId: 'EXT_NRCAN_Lambert_3978#LOD_NRCAN_Lambert_3978',
                    wkid: 3978
                },
                {
                    id: 'baseCBME_CBCE_HS_RO_3978',
                    name: 'Canada Base Map - Elevation (CBME)',
                    description:
                        'The Canada Base Map - Elevation (CBME) web mapping services of the Earth Sciences Sector at Natural Resources Canada, is intended primarily for online mapping application users and developers.',
                    altText: 'Canada Base Map - Elevation (CBME)',
                    layers: [
                        {
                            id: 'CBME_CBCE_HS_RO_3978',
                            layerType: 'esriTile',
                            url:
                                'https://geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBME_CBCE_HS_RO_3978/MapServer'
                        }
                    ],
                    tileSchemaId: 'EXT_NRCAN_Lambert_3978#LOD_NRCAN_Lambert_3978',
                    wkid: 3978
                },
                {
                    id: 'baseCBMT_CBCT_GEOM_3978',
                    name: 'Canada Base Map - Transportation (CBMT)',
                    description:
                        ' The Canada Base Map - Transportation (CBMT) web mapping services of the Earth Sciences Sector at Natural Resources Canada, are intended primarily for online mapping application users and developers.',
                    altText: 'Canada Base Map - Transportation (CBMT)',
                    layers: [
                        {
                            id: 'CBMT_CBCT_GEOM_3978',
                            layerType: 'esriTile',
                            url:
                                'https://geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_CBCT_GEOM_3978/MapServer'
                        }
                    ],
                    tileSchemaId: 'EXT_NRCAN_Lambert_3978#LOD_NRCAN_Lambert_3978',
                    wkid: 3978
                },
                {
                    id: 'baseEsriWorld',
                    name: 'World Imagery',
                    description:
                        'World Imagery provides one meter or better satellite and aerial imagery in many parts of the world and lower resolution satellite imagery worldwide.',
                    altText: 'World Imagery',
                    layers: [
                        {
                            id: 'World_Imagery',
                            layerType: 'esriTile',
                            url:
                                'https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer'
                        }
                    ],
                    tileSchemaId: 'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857',
                    wkid: 102100,
                    attribution: {
                        text: {
                            disabled: true
                        },
                        logo: {
                            disabled: true
                        }
                    }
                },
                {
                    id: 'baseEsriPhysical',
                    name: 'World Physical Map',
                    description:
                        'This map presents the Natural Earth physical map at 1.24km per pixel for the world and 500m for the coterminous United States.',
                    altText: 'World Physical Map',
                    layers: [
                        {
                            id: 'World_Physical_Map',
                            layerType: 'esriTile',
                            url:
                                'https://services.arcgisonline.com/arcgis/rest/services/World_Physical_Map/MapServer'
                        }
                    ],
                    tileSchemaId: 'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857',
                    wkid: 102100
                },
                {
                    id: 'baseEsriRelief',
                    name: 'World Shaded Relief',
                    description:
                        'This map portrays surface elevation as shaded relief. This map is used as a basemap layer to add shaded relief to other GIS maps, such as the ArcGIS Online World Street Map.',
                    altText: 'World Shaded Relief',
                    layers: [
                        {
                            id: 'World_Shaded_Relief',
                            layerType: 'esriTile',
                            url:
                                'https://services.arcgisonline.com/arcgis/rest/services/World_Shaded_Relief/MapServer'
                        }
                    ],
                    tileSchemaId: 'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857',
                    wkid: 102100
                },
                {
                    id: 'baseEsriStreet',
                    name: 'World Street Map',
                    description:
                        'This worldwide street map presents highway-level data for the world.',
                    altText: 'ESWorld Street Map',
                    layers: [
                        {
                            id: 'World_Street_Map',
                            layerType: 'esriTile',
                            url:
                                'https://services.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer'
                        }
                    ],
                    tileSchemaId: 'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857',
                    wkid: 102100
                },
                {
                    id: 'baseEsriTerrain',
                    name: 'World Terrain Base',
                    description:
                        'This map is designed to be used as a base map by GIS professionals to overlay other thematic layers such as demographics or land cover.',
                    altText: 'World Terrain Base',
                    layers: [
                        {
                            id: 'World_Terrain_Base',
                            layerType: 'esriTile',
                            url:
                                'https://services.arcgisonline.com/arcgis/rest/services/World_Terrain_Base/MapServer'
                        }
                    ],
                    tileSchemaId: 'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857',
                    wkid: 102100
                },
                {
                    id: 'baseEsriTopo',
                    name: 'World Topographic Map',
                    description:
                        'This map is designed to be used as a basemap by GIS professionals and as a reference map by anyone.',
                    altText: 'World Topographic Map',
                    layers: [
                        {
                            id: 'World_Topo_Map',
                            layerType: 'esriTile',
                            url:
                                'https://services.arcgisonline.com/arcgis/rest/services/World_Topo_Map/MapServer'
                        }
                    ],
                    tileSchemaId: 'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857',
                    wkid: 102100
                }
            ],
            initialBasemapId: 'baseEsriWorld'
        },
        layers: [
            {
                id: 'WaterQuantity',
                name: 'Water quantity parent',
                layerType: 'esriMapImage',
                url: 'https://maps-cartes.ec.gc.ca/arcgis/rest/services/CESI/MapServer',
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
                                            name: 'Water Quantity in Nested Group',
                                            entryIndex: 1
                                        },
                                        {
                                            layerId: 'WaterQuality',
                                            name: 'Water Quality in Nested Group',
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
                    { id: 'gazebo', options: { colour: '#54a0ff' } },
                    'divider',
                    'snowman',
                    'legend',
                    'geosearch',
                    'basemap',
                    'divider',
                    'export-v1'
                ],
                temporaryButtons: [
                    { panelId: 'details-panel', appbarItem: 'details' },
                    'metadata',
                    'settings',
                    'grid'
                ]
            },
            mapnav: { items: ['fullscreen', 'help', 'home', 'basemap'] },
            details: {
                items: [
                    {
                        id: 'WaterQuantity',
                        template: 'Water-Quantity-Template'
                    },
                    {
                        id: 'WFSLayer',
                        template: 'WFSLayer-Custom'
                    }
                ]
            },
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
            tileSchemas: [
                {
                    id: 'EXT_NRCAN_Lambert_3978#LOD_NRCAN_Lambert_3978',
                    name: 'Lambert Maps',
                    extentSetId: 'EXT_NRCAN_Lambert_3978',
                    lodSetId: 'LOD_NRCAN_Lambert_3978',
                    thumbnailTileUrls: ['/tile/8/285/268', '/tile/8/285/269'],
                    hasNorthPole: true
                },
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
                    id: 'baseNrCan',
                    name: 'Canada Base Map - Transportation (CBMT)',
                    description:
                        'The Canada Base Map - Transportation (CBMT) web mapping services of the Earth Sciences Sector at Natural Resources Canada, are intended primarily for online mapping application users and developers.',
                    altText: 'The Canada Base Map - Transportation (CBMT)',
                    layers: [
                        {
                            id: 'CBMT',
                            layerType: 'esriTile',
                            url:
                                'https://geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT3978/MapServer'
                        }
                    ],
                    tileSchemaId: 'EXT_NRCAN_Lambert_3978#LOD_NRCAN_Lambert_3978',
                    wkid: 3978
                },
                {
                    id: 'baseSimple',
                    name: 'Canada Base Map - Simple',
                    description: 'Canada Base Map - Simple',
                    altText: 'Canada base map - Simple',
                    layers: [
                        {
                            id: 'SMR',
                            layerType: 'esriTile',
                            url:
                                'https://geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/Simple/MapServer'
                        }
                    ],
                    tileSchemaId: 'EXT_NRCAN_Lambert_3978#LOD_NRCAN_Lambert_3978',
                    wkid: 3978
                },
                {
                    id: 'baseCBME_CBCE_HS_RO_3978',
                    name: 'Canada Base Map - Elevation (CBME)',
                    description:
                        'The Canada Base Map - Elevation (CBME) web mapping services of the Earth Sciences Sector at Natural Resources Canada, is intended primarily for online mapping application users and developers.',
                    altText: 'Canada Base Map - Elevation (CBME)',
                    layers: [
                        {
                            id: 'CBME_CBCE_HS_RO_3978',
                            layerType: 'esriTile',
                            url:
                                'https://geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBME_CBCE_HS_RO_3978/MapServer'
                        }
                    ],
                    tileSchemaId: 'EXT_NRCAN_Lambert_3978#LOD_NRCAN_Lambert_3978',
                    wkid: 3978
                },
                {
                    id: 'baseCBMT_CBCT_GEOM_3978',
                    name: 'Canada Base Map - Transportation (CBMT)',
                    description:
                        ' The Canada Base Map - Transportation (CBMT) web mapping services of the Earth Sciences Sector at Natural Resources Canada, are intended primarily for online mapping application users and developers.',
                    altText: 'Canada Base Map - Transportation (CBMT)',
                    layers: [
                        {
                            id: 'CBMT_CBCT_GEOM_3978',
                            layerType: 'esriTile',
                            url:
                                'https://geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_CBCT_GEOM_3978/MapServer'
                        }
                    ],
                    tileSchemaId: 'EXT_NRCAN_Lambert_3978#LOD_NRCAN_Lambert_3978',
                    wkid: 3978
                },
                {
                    id: 'baseEsriWorld',
                    name: 'World Imagery',
                    description:
                        'World Imagery provides one meter or better satellite and aerial imagery in many parts of the world and lower resolution satellite imagery worldwide.',
                    altText: 'World Imagery',
                    layers: [
                        {
                            id: 'World_Imagery',
                            layerType: 'esriTile',
                            url:
                                'https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer'
                        }
                    ],
                    tileSchemaId: 'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857',
                    wkid: 102100,
                    attribution: {
                        text: {
                            disabled: true
                        },
                        logo: {
                            disabled: true
                        }
                    }
                },
                {
                    id: 'baseEsriPhysical',
                    name: 'World Physical Map',
                    description:
                        'This map presents the Natural Earth physical map at 1.24km per pixel for the world and 500m for the coterminous United States.',
                    altText: 'World Physical Map',
                    layers: [
                        {
                            id: 'World_Physical_Map',
                            layerType: 'esriTile',
                            url:
                                'https://services.arcgisonline.com/arcgis/rest/services/World_Physical_Map/MapServer'
                        }
                    ],
                    tileSchemaId: 'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857',
                    wkid: 102100
                },
                {
                    id: 'baseEsriRelief',
                    name: 'World Shaded Relief',
                    description:
                        'This map portrays surface elevation as shaded relief. This map is used as a basemap layer to add shaded relief to other GIS maps, such as the ArcGIS Online World Street Map.',
                    altText: 'World Shaded Relief',
                    layers: [
                        {
                            id: 'World_Shaded_Relief',
                            layerType: 'esriTile',
                            url:
                                'https://services.arcgisonline.com/arcgis/rest/services/World_Shaded_Relief/MapServer'
                        }
                    ],
                    tileSchemaId: 'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857',
                    wkid: 102100
                },
                {
                    id: 'baseEsriStreet',
                    name: 'World Street Map',
                    description:
                        'This worldwide street map presents highway-level data for the world.',
                    altText: 'ESWorld Street Map',
                    layers: [
                        {
                            id: 'World_Street_Map',
                            layerType: 'esriTile',
                            url:
                                'https://services.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer'
                        }
                    ],
                    tileSchemaId: 'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857',
                    wkid: 102100
                },
                {
                    id: 'baseEsriTerrain',
                    name: 'World Terrain Base',
                    description:
                        'This map is designed to be used as a base map by GIS professionals to overlay other thematic layers such as demographics or land cover.',
                    altText: 'World Terrain Base',
                    layers: [
                        {
                            id: 'World_Terrain_Base',
                            layerType: 'esriTile',
                            url:
                                'https://services.arcgisonline.com/arcgis/rest/services/World_Terrain_Base/MapServer'
                        }
                    ],
                    tileSchemaId: 'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857',
                    wkid: 102100
                },
                {
                    id: 'baseEsriTopo',
                    name: 'World Topographic Map',
                    description:
                        'This map is designed to be used as a basemap by GIS professionals and as a reference map by anyone.',
                    altText: 'World Topographic Map',
                    layers: [
                        {
                            id: 'World_Topo_Map',
                            layerType: 'esriTile',
                            url:
                                'https://services.arcgisonline.com/arcgis/rest/services/World_Topo_Map/MapServer'
                        }
                    ],
                    tileSchemaId: 'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857',
                    wkid: 102100
                }
            ],
            initialBasemapId: 'baseEsriWorld'
        },
        layers: [
            {
                id: 'WaterQuantity',
                name: 'Water quantity parent',
                layerType: 'esriMapImage',
                url: 'https://maps-cartes.ec.gc.ca/arcgis/rest/services/CESI/MapServer',
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
                                            name: 'Water Quantity in Nested Group',
                                            entryIndex: 1
                                        },
                                        {
                                            layerId: 'WaterQuality',
                                            name: 'Water Quality in Nested Group',
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
                    { id: 'gazebo', options: { colour: '#54a0ff' } },
                    'divider',
                    'snowman-appbar-button',
                    'legend',
                    'geosearch',
                    'basemap',
                    'divider',
                    'export-v1'
                ],
                temporaryButtons: [
                    { panelId: 'details-panel', appbarItem: 'details' },
                    'metadata',
                    'settings',
                    'grid'
                ]
            },
            mapnav: { items: ['fullscreen', 'help', 'home', 'basemap'] },
            details: {
                items: [
                    {
                        id: 'WaterQuantity',
                        template: 'Water-Quantity-Template'
                    },
                    {
                        id: 'WFSLayer',
                        template: 'WFSLayer-Custom'
                    }
                ]
            },
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

// TODO: fix console errors
// var iklobLoad = rInstance.event.on('fixture/added', fixture => {
//     if (fixture.id === 'iklob') {
//         rInstance.event.off(iklobLoad);
//         rInstance.panel.open('iklob-p1');
//     }
// });

rInstance.fixture.addDefaultFixtures().then(() => {
    rInstance.panel.open('geosearch-panel');
    rInstance.panel.open('basemap-panel');
    rInstance.panel.open('legend-panel');
    rInstance.panel.open('help-panel');
    // Emits an event to open the metadata panel. Usually, this is be done by any fixture that wants the metadata panel to open.
    rInstance.event.emit('metadata/open', {
        type: 'html',
        layer: 'Sample Layer Name',
        url: 'https://ryan-coulson.com/RAMPMetadataDemo.html'
    });
});

// Load custom templates.
rInstance.$element.component('WFSLayer-Custom', {
    props: ['identifyData'],
    template: `
        <div>
            <span>This is an example template that contains an image.</span>
            <img src="https://i.imgur.com/WtY0tdC.gif" />
        </div>
    `
});

rInstance.$element.component('Water-Quantity-Template', {
    props: ['identifyData'],
    template: `
        <div style="align-items: center; justify-content: center; font-size: .875rem; font-family: Arial, sans-serif;">
            <div v-html="renderHeader()" />
            <div v-html="createSection('Station ID', 'StationID')" />
            <div v-html="createSection('Province', 'E_Province')" />
            <div v-html="createSection('Report Year', 'Report_Year')" />
            <div style="display: flex; flex-direction: row; color: #a0aec0; font-weight: bold; padding-top: 5px;">
                <div style="flex: 1 1 0%; width: 100%;">
                    Latitude
                </div>
                <div style="flex: 1 1 0%; width: 100%;">
                    Longitude
                </div>
            </div>
            <div style="display: flex; flex-direction: row;">
                <div style="flex: 1 1 0%; width: 100%;">
                    {{this.identifyData.data['Latitude']}}
                </div>
                <div style="flex: 1 1 0%; width: 100%;">
                    {{this.identifyData.data['Longitude']}}
                </div>
            </div>
            <div style="display: flex; flex-direction: column; padding-top: 5px; color: #4299e1;">
                <span style="font-weight: bold; color: #a0aec0;">Links</span>
                <span v-html="this.identifyData.data['E_DetailPageURL']"></span>
                <span v-html="this.identifyData.data['E_URL_Historical']"></span>
                <span v-html="this.identifyData.data['E_URL_RealTime']"></span>
            </div>
        </div>
    `,
    methods: {
        renderHeader() {
            if (this.identifyData.data['Symbol'] === '3') {
                return `
                    <span style="display: flex; font-size: 1.25rem; background-color: #e53e3e; color: white; padding: 4px; text-align: center;">
                        ${this.identifyData.data['StationName']}
                    </span>
                `;
            } else {
                return `
                    <span style="display: flex; font-size: 1.25rem; background-color: #3182ce; color: white; padding: 4px; text-align: center;">
                        ${this.identifyData.data['StationName']}
                    </span>
                `;
            }
        },
        createSection(title, id) {
            return `
            <div style="display: flex; flex-direction: column; font-size: .875rem; padding-top: 5px;">
                <span style="color: #a0aec0; font-weight: bold;">
                    ${title}
                </span>
                <span>
                    ${this.identifyData.data[id]}
                </span>
            </div>
            `;
        }
    }
});

// start loading non-default fixtures; this is just an example

// TODO: fix console errors
rInstance.fixture.add('snowman');
// rInstance.fixture.add('gazebo').then(() => {
//     rInstance.panel
//         .get('p2')
//         .open({ screen: 'p-2-screen-2' })
//         .pin();
// });
// rInstance.fixture.add('diligord', window.hostFixtures.diligord).then(() => {
//     rInstance.panel.open('diligord-p1');
// });
// rInstance.fixture.add('mouruge', window.hostFixtures.mouruge).then(() => {
//     rInstance.panel.open('mouruge-p1');
// });

// add export-v1 fixtures
rInstance.fixture.add('export-v1');

// sample event declared by the page

// interesting race condition here. we could use rInstance.availableEvents to find the name,
// but given the async nature of fixture.add, the name will not be registered yet.
var gazeboEventName = 'gazebo/beholdMyText';

// a handler to react to a gazebo event
// click "see a cat" button to trigger console output
var handler = function(text) {
    // important to use get here, as the fixture might have been removed later on
    var diligord = rInstance.fixture.get('diligord');
    if (!diligord) {
        return;
    }
    diligord.doAThing(text);
};
rInstance.event.on(gazeboEventName, handler, 'SAMPLE_HANDLER');

// a one time handler. clicking "see a cat" many times should only result in one console log
var onceHandler = function(text) {
    console.log('EVENTS API SAMPLE: a one time event : ' + text);
};
rInstance.event.once(gazeboEventName, onceHandler, 'SAMPLE_HANDLER_ONCE');

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
    document.getElementById('animate-status').innerText = 'Animate: ' + rInstance.animate;
}
