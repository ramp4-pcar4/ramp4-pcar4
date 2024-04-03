import { createInstance, geo } from '@/main';

window.debugInstance = null;

let config = {
    startingFixtures: [
        'export',
        'geosearch',
        'overviewmap',
        'basemap',
        'legend',
        'mapnav',
        'help',
        'appbar',
        'help',
        'grid',
        'crosshairs',
        'scrollguard',
        'panguard',
        'wizard',
        'layer-reorder',
        'details'
    ],
    configs: {
        en: {
            version: '4.0',
            fixtures: {
                geosearch: {
                    serviceUrls: {
                        geoNames:
                            'https://geogratis.gc.ca/services/geoname/en/geonames.json',
                        geoLocation:
                            'https://geogratis.gc.ca/services/geolocation/en/locate?q=',
                        geoProvince:
                            'https://geogratis.gc.ca/services/geoname/en/codes/province.json',
                        geoTypes:
                            'https://geogratis.gc.ca/services/geoname/en/codes/concise.json'
                    },
                    settings: {
                        categories: [
                            'CITY',
                            'HAM',
                            'IR',
                            'LTM',
                            'MUN1',
                            'MUN2',
                            'PROV',
                            'STM',
                            'TERR',
                            'TOWN',
                            'UTM',
                            'VILG',
                            'UNP'
                        ],
                        sortOrder: [
                            'CITY',
                            'HAM',
                            'IR',
                            'LTM',
                            'MUN1',
                            'MUN2',
                            'PROV',
                            'STM',
                            'TERR',
                            'TOWN',
                            'UTM',
                            'VILG',
                            'UNP'
                        ],
                        maxResults: 1000,
                        officialOnly: true,
                        disabledSearchTypes: []
                    }
                },
                export: {
                    title: {
                        selected: true,
                        selectable: true,
                        value: 'No export explosion test'
                    },
                    map: {
                        selected: true,
                        selectable: true
                    },
                    mapElements: {
                        selected: true,
                        selectable: true
                    },
                    legend: {
                        selected: true,
                        selectable: true,
                        columnWidth: 350
                    },
                    footnote: {
                        selected: true,
                        selectable: true,
                        value: 'TEST-FOOTNOTE'
                    },
                    timestamp: {
                        selected: true,
                        selectable: true,
                        value: '1970-01-01, 00:00:00AM'
                    }
                },
                overviewmap: {
                    basemaps: {},
                    startMinimized: false,
                    expandFactor: 2
                },
                legend: {
                    root: {
                        name: "I'm root",
                        children: [
                            {
                                symbologyExpanded: true,
                                layerId: 'Locations***5317dc33',
                                controls: [
                                    'opacity',
                                    'visibility',
                                    'identify',
                                    'metadata',
                                    'boundaryZoom',
                                    'refresh',
                                    'reload',
                                    'remove',
                                    'settings',
                                    'datatable',
                                    'symbology'
                                ]
                            }
                        ]
                    },
                    headerControls: [
                        'groupToggle',
                        'visibilityToggle',
                        'layerReorder'
                    ]
                },
                mapnav: {
                    zoomOption: 'buttons',
                    items: ['fullscreen', 'geolocator', 'home', 'help']
                },
                help: {
                    location: './help',
                    panelWidth: 350
                },
                appbar: {
                    items: ['legend', 'geosearch', 'basemap', 'export', 'help']
                }
            },
            layers: [
                {
                    name: 'Locations',
                    nameField: 'Facility',
                    controls: [
                        'opacity',
                        'visibility',
                        'identify',
                        'metadata',
                        'boundaryZoom',
                        'refresh',
                        'reload',
                        'remove',
                        'settings',
                        'datatable',
                        'symbology'
                    ],
                    state: {
                        opacity: 1,
                        visibility: true,
                        identify: true,
                        hovertips: true
                    },
                    fixtures: {
                        legend: {
                            toggleSymbology: true
                        },
                        grid: {
                            columns: []
                        }
                    },
                    id: 'Locations***5317dc33',
                    url: 'https://maps-cartes.dev.ec.gc.ca/arcgis/rest/services/StoryRAMP/60d407cc88794bc4a47429f6639125fd/MapServer/1',
                    expectedLoadTime: 4000,
                    mouseTolerance: 5,
                    layerType: 'esri-feature'
                }
            ],
            map: {
                initialBasemapId: 'baseNrCan',
                caption: {
                    mapCoords: {
                        disabled: false,
                        formatter: 'LAT_LONG_DMS'
                    },
                    scaleBar: {
                        disabled: false,
                        imperialScale: false
                    }
                },
                extentSets: [
                    {
                        id: 'EXT_NRCAN_Lambert_3978',
                        default: {
                            xmin: -5281457,
                            xmax: 3049492,
                            ymin: -983440,
                            ymax: 4482193,
                            spatialReference: {
                                wkid: 3978
                            }
                        }
                    },
                    {
                        id: 'EXT_ESRI_World_AuxMerc_3857',
                        default: {
                            xmin: -16632697.354854,
                            xmax: -5007771.626060756,
                            ymin: 5022907.964742964,
                            ymax: 10015875.184845109,
                            spatialReference: {
                                wkid: 102100,
                                latestWkid: 3857
                            }
                        }
                    }
                ],
                lodSets: [
                    {
                        id: 'LOD_NRCAN_Lambert_3978',
                        lods: [
                            {
                                level: 0,
                                resolution: 38364.660062653464,
                                scale: 145000000
                            },
                            {
                                level: 1,
                                resolution: 22489.62831258996,
                                scale: 85000000
                            },
                            {
                                level: 2,
                                resolution: 13229.193125052918,
                                scale: 50000000
                            },
                            {
                                level: 3,
                                resolution: 7937.5158750317505,
                                scale: 30000000
                            },
                            {
                                level: 4,
                                resolution: 4630.2175937685215,
                                scale: 17500000
                            },
                            {
                                level: 5,
                                resolution: 2645.8386250105837,
                                scale: 10000000
                            },
                            {
                                level: 6,
                                resolution: 1587.5031750063501,
                                scale: 6000000
                            },
                            {
                                level: 7,
                                resolution: 926.0435187537042,
                                scale: 3500000
                            },
                            {
                                level: 8,
                                resolution: 529.1677250021168,
                                scale: 2000000
                            },
                            {
                                level: 9,
                                resolution: 317.50063500127004,
                                scale: 1200000
                            },
                            {
                                level: 10,
                                resolution: 185.20870375074085,
                                scale: 700000
                            },
                            {
                                level: 11,
                                resolution: 111.12522225044451,
                                scale: 420000
                            },
                            {
                                level: 12,
                                resolution: 66.1459656252646,
                                scale: 250000
                            },
                            {
                                level: 13,
                                resolution: 38.36466006265346,
                                scale: 145000
                            },
                            {
                                level: 14,
                                resolution: 22.48962831258996,
                                scale: 85000
                            },
                            {
                                level: 15,
                                resolution: 13.229193125052918,
                                scale: 50000
                            },
                            {
                                level: 16,
                                resolution: 7.9375158750317505,
                                scale: 30000
                            },
                            {
                                level: 17,
                                resolution: 4.6302175937685215,
                                scale: 17500
                            }
                        ]
                    },
                    {
                        id: 'LOD_ESRI_World_AuxMerc_3857',
                        lods: [
                            {
                                level: 0,
                                resolution: 19567.87924099992,
                                scale: 73957190.948944
                            },
                            {
                                level: 1,
                                resolution: 9783.93962049996,
                                scale: 36978595.474472
                            },
                            {
                                level: 2,
                                resolution: 4891.96981024998,
                                scale: 18489297.737236
                            },
                            {
                                level: 3,
                                resolution: 2445.98490512499,
                                scale: 9244648.868618
                            },
                            {
                                level: 4,
                                resolution: 1222.992452562495,
                                scale: 4622324.434309
                            },
                            {
                                level: 5,
                                resolution: 611.4962262813797,
                                scale: 2311162.217155
                            },
                            {
                                level: 6,
                                resolution: 305.74811314055756,
                                scale: 1155581.108577
                            },
                            {
                                level: 7,
                                resolution: 152.87405657041106,
                                scale: 577790.554289
                            },
                            {
                                level: 8,
                                resolution: 76.43702828507324,
                                scale: 288895.277144
                            },
                            {
                                level: 9,
                                resolution: 38.21851414253662,
                                scale: 144447.638572
                            },
                            {
                                level: 10,
                                resolution: 19.10925707126831,
                                scale: 72223.819286
                            },
                            {
                                level: 11,
                                resolution: 9.554628535634155,
                                scale: 36111.909643
                            },
                            {
                                level: 12,
                                resolution: 4.77731426794937,
                                scale: 18055.954822
                            },
                            {
                                level: 13,
                                resolution: 2.388657133974685,
                                scale: 9027.977411
                            },
                            {
                                level: 14,
                                resolution: 1.1943285668550503,
                                scale: 4513.988705
                            },
                            {
                                level: 15,
                                resolution: 0.5971642835598172,
                                scale: 2256.994353
                            },
                            {
                                level: 16,
                                resolution: 0.29858214164761665,
                                scale: 1128.497176
                            },
                            {
                                level: 17,
                                resolution: 0.14929107082380833,
                                scale: 564.248588
                            },
                            {
                                level: 18,
                                resolution: 0.07464553541190416,
                                scale: 282.124294
                            },
                            {
                                level: 19,
                                resolution: 0.03732276770595208,
                                scale: 141.062147
                            },
                            {
                                level: 20,
                                resolution: 0.01866138385297604,
                                scale: 70.5310735
                            }
                        ]
                    }
                ],
                tileSchemas: [
                    {
                        id: 'EXT_NRCAN_Lambert_3978#LOD_NRCAN_Lambert_3978',
                        name: 'Lambert Maps',
                        extentSetId: 'EXT_NRCAN_Lambert_3978',
                        lodSetId: 'LOD_NRCAN_Lambert_3978',
                        thumbnailTileUrls: [],
                        hasNorthPole: true
                    },
                    {
                        id: 'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857',
                        name: 'Web Mercator Maps',
                        extentSetId: 'EXT_ESRI_World_AuxMerc_3857',
                        lodSetId: 'LOD_ESRI_World_AuxMerc_3857',
                        thumbnailTileUrls: [],
                        hasNorthPole: false
                    }
                ],
                basemaps: [
                    {
                        id: 'baseNrCan',
                        tileSchemaId:
                            'EXT_NRCAN_Lambert_3978#LOD_NRCAN_Lambert_3978',
                        name: 'Canada Base Map - Transportation (CBMT)',
                        description:
                            'The Canada Base Map - Transportation (CBMT) web mapping services of the Earth Sciences Sector at Natural Resources Canada, are intended primarily for online mapping application users and developers.',
                        altText: 'The Canada Base Map - Transportation (CBMT)',
                        layers: [
                            {
                                id: 'CBMT',
                                layerType: 'esri-tile',
                                url: 'https://maps-cartes.services.geo.ca/server2_serveur2/rest/services/BaseMaps/CBMT3978/MapServer',
                                opacity: 1
                            }
                        ]
                    },
                    {
                        id: 'baseSimple',
                        tileSchemaId:
                            'EXT_NRCAN_Lambert_3978#LOD_NRCAN_Lambert_3978',
                        name: 'Canada Base Map - Simple',
                        description: 'Canada Base Map - Simple',
                        altText: 'Canada base map - Simple',
                        layers: [
                            {
                                id: 'SMR',
                                layerType: 'esri-tile',
                                url: 'https://maps-cartes.services.geo.ca/server2_serveur2/rest/services/BaseMaps/Simple/MapServer',
                                opacity: 1
                            }
                        ]
                    },
                    {
                        id: 'baseCBME_CBCE_HS_RO_3978',
                        tileSchemaId:
                            'EXT_NRCAN_Lambert_3978#LOD_NRCAN_Lambert_3978',
                        name: 'Canada Base Map - Elevation (CBME)',
                        description:
                            'The Canada Base Map - Elevation (CBME) web mapping services of the Earth Sciences Sector at Natural Resources Canada, is intended primarily for online mapping application users and developers.',
                        altText: 'Canada Base Map - Elevation (CBME)',
                        layers: [
                            {
                                id: 'CBME_CBCE_HS_RO_3978',
                                layerType: 'esri-tile',
                                url: 'https://maps-cartes.services.geo.ca/server2_serveur2/rest/services/BaseMaps/CBME_CBCE_HS_RO_3978/MapServer',
                                opacity: 1
                            }
                        ]
                    },
                    {
                        id: 'baseCBMT_CBCT_GEOM_3978',
                        tileSchemaId:
                            'EXT_NRCAN_Lambert_3978#LOD_NRCAN_Lambert_3978',
                        name: 'Canada Base Map - Transportation (CBMT)',
                        description:
                            ' The Canada Base Map - Transportation (CBMT) web mapping services of the Earth Sciences Sector at Natural Resources Canada, are intended primarily for online mapping application users and developers.',
                        altText: 'Canada Base Map - Transportation (CBMT)',
                        layers: [
                            {
                                id: 'CBMT_CBCT_GEOM_3978',
                                layerType: 'esri-tile',
                                url: 'https://maps-cartes.services.geo.ca/server2_serveur2/rest/services/BaseMaps/CBMT_CBCT_GEOM_3978/MapServer',
                                opacity: 1
                            }
                        ]
                    },
                    {
                        id: 'baseEsriWorld',
                        tileSchemaId:
                            'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857',
                        name: 'World Imagery',
                        description:
                            'World Imagery provides one meter or better satellite and aerial imagery in many parts of the world and lower resolution satellite imagery worldwide.',
                        altText: 'World Imagery',
                        layers: [
                            {
                                id: 'World_Imagery',
                                layerType: 'esri-tile',
                                url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer',
                                opacity: 1
                            }
                        ]
                    },
                    {
                        id: 'baseEsriPhysical',
                        tileSchemaId:
                            'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857',
                        name: 'World Physical Map',
                        description:
                            'This map presents the Natural Earth physical map at 1.24km per pixel for the world and 500m for the coterminous United States.',
                        altText: 'World Physical Map',
                        layers: [
                            {
                                id: 'World_Physical_Map',
                                layerType: 'esri-tile',
                                url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Physical_Map/MapServer',
                                opacity: 1
                            }
                        ]
                    },
                    {
                        id: 'baseEsriRelief',
                        tileSchemaId:
                            'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857',
                        name: 'World Shaded Relief',
                        description:
                            'This map portrays surface elevation as shaded relief. This map is used as a basemap layer to add shaded relief to other GIS maps, such as the ArcGIS Online World Street Map.',
                        altText: 'World Shaded Relief',
                        layers: [
                            {
                                id: 'World_Shaded_Relief',
                                layerType: 'esri-tile',
                                url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Shaded_Relief/MapServer',
                                opacity: 1
                            }
                        ]
                    },
                    {
                        id: 'baseEsriStreet',
                        tileSchemaId:
                            'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857',
                        name: 'World Street Map',
                        description:
                            'This worldwide street map presents highway-level data for the world.',
                        altText: 'ESWorld Street Map',
                        layers: [
                            {
                                id: 'World_Street_Map',
                                layerType: 'esri-tile',
                                url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer',
                                opacity: 1
                            }
                        ]
                    },
                    {
                        id: 'baseEsriTerrain',
                        tileSchemaId:
                            'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857',
                        name: 'World Terrain Base',
                        description:
                            'This map is designed to be used as a base map by GIS professionals to overlay other thematic layers such as demographics or land cover.',
                        altText: 'World Terrain Base',
                        layers: [
                            {
                                id: 'World_Terrain_Base',
                                layerType: 'esri-tile',
                                url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Terrain_Base/MapServer',
                                opacity: 1
                            }
                        ]
                    },
                    {
                        id: 'baseEsriTopo',
                        tileSchemaId:
                            'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857',
                        name: 'World Topographic Map',
                        description:
                            'This map is designed to be used as a basemap by GIS professionals and as a reference map by anyone.',
                        altText: 'World Topographic Map',
                        layers: [
                            {
                                id: 'World_Topo_Map',
                                layerType: 'esri-tile',
                                url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Topo_Map/MapServer',
                                opacity: 1
                            }
                        ]
                    }
                ]
            },
            panels: {
                open: [
                    {
                        id: 'legend'
                    }
                ]
            },
            system: {
                animate: true,
                exposeOid: false,
                proxyUrl:
                    'https://maps.canada.ca/wmsproxy/ws/wmsproxy/executeFromProxy'
            }
        },
        fr: {
            version: '4.0',
            fixtures: {
                geosearch: {
                    serviceUrls: {
                        geoNames:
                            'https://geogratis.gc.ca/services/geoname/fr/geonames.json',
                        geoLocation:
                            'https://geogratis.gc.ca/services/geolocation/fr/locate?q=',
                        geoProvince:
                            'https://geogratis.gc.ca/services/geoname/fr/codes/province.json',
                        geoTypes:
                            'https://geogratis.gc.ca/services/geoname/fr/codes/concise.json'
                    },
                    settings: {
                        categories: [
                            'CITY',
                            'HAM',
                            'IR',
                            'LTM',
                            'MUN1',
                            'MUN2',
                            'PROV',
                            'STM',
                            'TERR',
                            'TOWN',
                            'UTM',
                            'VILG',
                            'UNP'
                        ],
                        sortOrder: [
                            'CITY',
                            'HAM',
                            'IR',
                            'LTM',
                            'MUN1',
                            'MUN2',
                            'PROV',
                            'STM',
                            'TERR',
                            'TOWN',
                            'UTM',
                            'VILG',
                            'UNP'
                        ],
                        maxResults: 1000,
                        officialOnly: true,
                        disabledSearchTypes: []
                    }
                },
                export: {
                    title: {
                        selected: true,
                        selectable: true,
                        value: ''
                    },
                    map: {
                        selected: true,
                        selectable: true
                    },
                    mapElements: {
                        selected: true,
                        selectable: true
                    },
                    legend: {
                        selected: true,
                        selectable: true,
                        columnWidth: 350
                    },
                    footnote: {
                        selected: true,
                        selectable: true,
                        value: ''
                    },
                    timestamp: {
                        selected: true,
                        selectable: true
                    }
                },
                overviewmap: {
                    basemaps: {},
                    startMinimized: false,
                    expandFactor: 2
                },
                legend: {
                    root: {
                        name: "I'm root",
                        children: [
                            {
                                symbologyExpanded: true,
                                layerId: 'Secteurs industriels clés***f24a1add',
                                controls: [
                                    'opacity',
                                    'visibility',
                                    'identify',
                                    'metadata',
                                    'boundaryZoom',
                                    'refresh',
                                    'reload',
                                    'remove',
                                    'settings',
                                    'datatable',
                                    'symbology'
                                ]
                            }
                        ]
                    },
                    headerControls: [
                        'groupToggle',
                        'visibilityToggle',
                        'layerReorder'
                    ]
                },
                mapnav: {
                    zoomOption: 'buttons',
                    items: ['fullscreen', 'geolocator', 'home', 'help']
                },
                help: {
                    location: './help',
                    panelWidth: 350
                },
                appbar: {
                    items: ['legend', 'geosearch', 'basemap', 'export', 'help']
                }
            },
            layers: [
                {
                    name: 'Secteurs industriels clés',
                    nameField: 'Facility',
                    controls: [
                        'opacity',
                        'visibility',
                        'identify',
                        'metadata',
                        'boundaryZoom',
                        'refresh',
                        'reload',
                        'remove',
                        'settings',
                        'datatable',
                        'symbology'
                    ],
                    state: {
                        opacity: 1,
                        visibility: true,
                        identify: true,
                        hovertips: true
                    },
                    fixtures: {
                        legend: {
                            toggleSymbology: true
                        },
                        grid: {
                            applyMap: false,
                            showFilter: true,
                            filterByExtent: false,
                            columns: []
                        }
                    },
                    id: 'Secteurs industriels clés***f24a1add',
                    url: 'https://maps-cartes.dev.ec.gc.ca/arcgis/rest/services/StoryRAMP/60d407cc88794bc4a47429f6639125fd/MapServer/0',
                    expectedLoadTime: 4000,
                    mouseTolerance: 5,
                    layerType: 'esri-feature'
                }
            ],
            map: {
                initialBasemapId: 'baseNrCan',
                caption: {
                    mapCoords: {
                        disabled: false,
                        formatter: 'LAT_LONG_DMS'
                    },
                    scaleBar: {
                        disabled: false,
                        imperialScale: false
                    }
                },
                extentSets: [
                    {
                        id: 'EXT_NRCAN_Lambert_3978',
                        default: {
                            xmin: -5281457,
                            xmax: 3049492,
                            ymin: -983440,
                            ymax: 4482193,
                            spatialReference: {
                                wkid: 3978
                            }
                        }
                    },
                    {
                        id: 'EXT_ESRI_World_AuxMerc_3857',
                        default: {
                            xmin: -16632697.354854,
                            xmax: -5007771.626060756,
                            ymin: 5022907.964742964,
                            ymax: 10015875.184845109,
                            spatialReference: {
                                wkid: 102100,
                                latestWkid: 3857
                            }
                        }
                    }
                ],
                lodSets: [
                    {
                        id: 'LOD_NRCAN_Lambert_3978',
                        lods: [
                            {
                                level: 0,
                                resolution: 38364.660062653464,
                                scale: 145000000
                            },
                            {
                                level: 1,
                                resolution: 22489.62831258996,
                                scale: 85000000
                            },
                            {
                                level: 2,
                                resolution: 13229.193125052918,
                                scale: 50000000
                            },
                            {
                                level: 3,
                                resolution: 7937.5158750317505,
                                scale: 30000000
                            },
                            {
                                level: 4,
                                resolution: 4630.2175937685215,
                                scale: 17500000
                            },
                            {
                                level: 5,
                                resolution: 2645.8386250105837,
                                scale: 10000000
                            },
                            {
                                level: 6,
                                resolution: 1587.5031750063501,
                                scale: 6000000
                            },
                            {
                                level: 7,
                                resolution: 926.0435187537042,
                                scale: 3500000
                            },
                            {
                                level: 8,
                                resolution: 529.1677250021168,
                                scale: 2000000
                            },
                            {
                                level: 9,
                                resolution: 317.50063500127004,
                                scale: 1200000
                            },
                            {
                                level: 10,
                                resolution: 185.20870375074085,
                                scale: 700000
                            },
                            {
                                level: 11,
                                resolution: 111.12522225044451,
                                scale: 420000
                            },
                            {
                                level: 12,
                                resolution: 66.1459656252646,
                                scale: 250000
                            },
                            {
                                level: 13,
                                resolution: 38.36466006265346,
                                scale: 145000
                            },
                            {
                                level: 14,
                                resolution: 22.48962831258996,
                                scale: 85000
                            },
                            {
                                level: 15,
                                resolution: 13.229193125052918,
                                scale: 50000
                            },
                            {
                                level: 16,
                                resolution: 7.9375158750317505,
                                scale: 30000
                            },
                            {
                                level: 17,
                                resolution: 4.6302175937685215,
                                scale: 17500
                            }
                        ]
                    },
                    {
                        id: 'LOD_ESRI_World_AuxMerc_3857',
                        lods: [
                            {
                                level: 0,
                                resolution: 19567.87924099992,
                                scale: 73957190.948944
                            },
                            {
                                level: 1,
                                resolution: 9783.93962049996,
                                scale: 36978595.474472
                            },
                            {
                                level: 2,
                                resolution: 4891.96981024998,
                                scale: 18489297.737236
                            },
                            {
                                level: 3,
                                resolution: 2445.98490512499,
                                scale: 9244648.868618
                            },
                            {
                                level: 4,
                                resolution: 1222.992452562495,
                                scale: 4622324.434309
                            },
                            {
                                level: 5,
                                resolution: 611.4962262813797,
                                scale: 2311162.217155
                            },
                            {
                                level: 6,
                                resolution: 305.74811314055756,
                                scale: 1155581.108577
                            },
                            {
                                level: 7,
                                resolution: 152.87405657041106,
                                scale: 577790.554289
                            },
                            {
                                level: 8,
                                resolution: 76.43702828507324,
                                scale: 288895.277144
                            },
                            {
                                level: 9,
                                resolution: 38.21851414253662,
                                scale: 144447.638572
                            },
                            {
                                level: 10,
                                resolution: 19.10925707126831,
                                scale: 72223.819286
                            },
                            {
                                level: 11,
                                resolution: 9.554628535634155,
                                scale: 36111.909643
                            },
                            {
                                level: 12,
                                resolution: 4.77731426794937,
                                scale: 18055.954822
                            },
                            {
                                level: 13,
                                resolution: 2.388657133974685,
                                scale: 9027.977411
                            },
                            {
                                level: 14,
                                resolution: 1.1943285668550503,
                                scale: 4513.988705
                            },
                            {
                                level: 15,
                                resolution: 0.5971642835598172,
                                scale: 2256.994353
                            },
                            {
                                level: 16,
                                resolution: 0.29858214164761665,
                                scale: 1128.497176
                            },
                            {
                                level: 17,
                                resolution: 0.14929107082380833,
                                scale: 564.248588
                            },
                            {
                                level: 18,
                                resolution: 0.07464553541190416,
                                scale: 282.124294
                            },
                            {
                                level: 19,
                                resolution: 0.03732276770595208,
                                scale: 141.062147
                            },
                            {
                                level: 20,
                                resolution: 0.01866138385297604,
                                scale: 70.5310735
                            }
                        ]
                    }
                ],
                tileSchemas: [
                    {
                        id: 'EXT_NRCAN_Lambert_3978#LOD_NRCAN_Lambert_3978',
                        name: 'Lambert Maps',
                        extentSetId: 'EXT_NRCAN_Lambert_3978',
                        lodSetId: 'LOD_NRCAN_Lambert_3978',
                        thumbnailTileUrls: [],
                        hasNorthPole: true
                    },
                    {
                        id: 'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857',
                        name: 'Web Mercator Maps',
                        extentSetId: 'EXT_ESRI_World_AuxMerc_3857',
                        lodSetId: 'LOD_ESRI_World_AuxMerc_3857',
                        thumbnailTileUrls: [],
                        hasNorthPole: false
                    }
                ],
                basemaps: [
                    {
                        id: 'baseNrCan',
                        tileSchemaId:
                            'EXT_NRCAN_Lambert_3978#LOD_NRCAN_Lambert_3978',
                        name: 'Carte de base du Canada – transport (CBCT) avec étiquettes',
                        description:
                            "La carte de base du Canada – transport (CBCT) du Secteur des sciences de la Terre de Ressources naturelles Canada est un service Internet qui s'adresse principalement aux utilisateurs et développeurs d'applications cartographiques en ligne.",
                        altText:
                            'La carte de base du Canada – transport (CBCT)',
                        layers: [
                            {
                                id: 'CBCT',
                                layerType: 'esri-tile',
                                url: 'https://maps-cartes.services.geo.ca/server2_serveur2/rest/services/BaseMaps/CBCT3978/MapServer',
                                opacity: 1
                            }
                        ]
                    },
                    {
                        id: 'baseSimple',
                        tileSchemaId:
                            'EXT_NRCAN_Lambert_3978#LOD_NRCAN_Lambert_3978',
                        name: 'Carte de base du Canada - simple',
                        description: 'La carte de base du Canada - simple',
                        altText: 'La carte de base du Canada - simple',
                        layers: [
                            {
                                id: 'SMR',
                                layerType: 'esri-tile',
                                url: 'https://maps-cartes.services.geo.ca/server2_serveur2/rest/services/BaseMaps/Simple/MapServer',
                                opacity: 1
                            },
                            {
                                id: 'SMW',
                                layerType: 'esri-tile',
                                url: 'https://maps-cartes.services.geo.ca/server2_serveur2/rest/services/BaseMaps/CBMT_TXT_3978/MapServer',
                                opacity: 1
                            }
                        ]
                    },
                    {
                        id: 'baseCBME_CBCE_HS_RO_3978',
                        tileSchemaId:
                            'EXT_NRCAN_Lambert_3978#LOD_NRCAN_Lambert_3978',
                        name: 'Carte de base du Canada - élevation (CBCE)',
                        description:
                            "La carte de base du Canada - élevation (CBCE) du Secteur des sciences de la Terre de Ressources naturelles Canada est un service Internet qui s'adresse principalement aux utilisateurs et développeurs d'applications cartographiques en ligne.",
                        altText:
                            'La carte de base du Canada - élevation (CBCE)',
                        layers: [
                            {
                                id: 'CBME_CBCE_HS_RO_3978',
                                layerType: 'esri-tile',
                                url: 'https://maps-cartes.services.geo.ca/server2_serveur2/rest/services/BaseMaps/CBME_CBCE_HS_RO_3978/MapServer',
                                opacity: 1
                            }
                        ]
                    },
                    {
                        id: 'baseCBMT_CBCT_GEOM_3978',
                        tileSchemaId:
                            'EXT_NRCAN_Lambert_3978#LOD_NRCAN_Lambert_3978',
                        name: 'Carte de base du Canada - transport (CBCT)',
                        description:
                            "La carte de base du Canada - transport (CBCT) du Secteur des sciences de la Terre de Ressources naturelles Canada est un service Internet qui s'adresse principalement aux utilisateurs et développeurs d'applications cartographiques en ligne.",
                        altText:
                            'La carte de base du Canada - transport (CBCT)',
                        layers: [
                            {
                                id: 'CBMT_CBCT_GEOM_3978',
                                layerType: 'esri-tile',
                                url: 'https://maps-cartes.services.geo.ca/server2_serveur2/rest/services/BaseMaps/CBMT_CBCT_GEOM_3978/MapServer',
                                opacity: 1
                            }
                        ]
                    },
                    {
                        id: 'baseEsriWorld',
                        tileSchemaId:
                            'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857',
                        name: 'Imagerie mondiale',
                        description:
                            "L'imagerie mondiale fournit une imagerie satellitaire et aérienne dans de nombreuses régions du monde avec une résolution de 1 mètres et moins et des images satellitaires de résolution inférieure dans le monde entier.",
                        altText: "L'imagerie mondiale",
                        layers: [
                            {
                                id: 'World_Imagery',
                                layerType: 'esri-tile',
                                url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer',
                                opacity: 1
                            }
                        ]
                    },
                    {
                        id: 'baseEsriPhysical',
                        tileSchemaId:
                            'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857',
                        name: 'Monde physique',
                        description:
                            "La carte du monde physique représente l'aspect physique naturel de la Terre à 1.24 kilomètres par pixel pour le monde et à 500 mètres pour les États-Unis.",
                        altText: 'La carte du monde physique',
                        layers: [
                            {
                                id: 'World_Physical_Map',
                                layerType: 'esri-tile',
                                url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Physical_Map/MapServer',
                                opacity: 1
                            }
                        ]
                    },
                    {
                        id: 'baseEsriRelief',
                        tileSchemaId:
                            'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857',
                        name: 'Monde en relief ombragé',
                        description:
                            "La carte du monde en relief ombragé représente l'élévation de la surface de la terre comme un relief ombragé. Cette carte est utilisée comme couche de fond afin d'ajouter un relief ombragé à d'autres cartes SIG, comme la carte ArcGIS Online World Street Map.",
                        altText: 'La carte du monde en relief ombragé',
                        layers: [
                            {
                                id: 'World_Shaded_Relief',
                                layerType: 'esri-tile',
                                url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Shaded_Relief/MapServer',
                                opacity: 1
                            }
                        ]
                    },
                    {
                        id: 'baseEsriStreet',
                        tileSchemaId:
                            'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857',
                        name: 'Monde routier',
                        description:
                            'La carte du monde routier présente des données au niveau des autoroutes pour le monde.',
                        altText: 'La carte du monde routier',
                        layers: [
                            {
                                id: 'World_Street_Map',
                                layerType: 'esri-tile',
                                url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer',
                                opacity: 1
                            }
                        ]
                    },
                    {
                        id: 'baseEsriTerrain',
                        tileSchemaId:
                            'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857',
                        name: 'Monde terrain',
                        description:
                            "La carte du monde terrain est conçue pour être utilisée comme une carte de base par les professionnels du SIG pour superposer d'autres couches thématiques comme la démographie ou la couverture terrestre.",
                        altText: 'La carte du monde terrain',
                        layers: [
                            {
                                id: 'World_Terrain_Base',
                                layerType: 'esri-tile',
                                url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Terrain_Base/MapServer',
                                opacity: 1
                            }
                        ]
                    },
                    {
                        id: 'baseEsriTopo',
                        tileSchemaId:
                            'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857',
                        name: 'Monde topographique',
                        description:
                            'La carte du monde topographique est conçue pour être utilisé comme une carte de base par les professionnels du SIG et comme une carte de référence par quiconque.',
                        altText: 'La carte du monde topographique',
                        layers: [
                            {
                                id: 'World_Topo_Map',
                                layerType: 'esri-tile',
                                url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Topo_Map/MapServer',
                                opacity: 1
                            }
                        ]
                    }
                ]
            },
            panels: {
                open: [
                    {
                        id: 'legend'
                    }
                ]
            },
            system: {
                animate: true,
                exposeOid: false,
                proxyUrl:
                    'https://maps.canada.ca/wmsproxy/ws/wmsproxy/executeFromProxy'
            }
        }
    }
};

let options = {
    loadDefaultFixtures: true,
    loadDefaultEvents: true,
    startRequired: false
};

const rInstance = createInstance(
    document.getElementById('app'),
    config,
    options
);

// add export fixtures
rInstance.fixture.add('export');

window.debugInstance = rInstance;
