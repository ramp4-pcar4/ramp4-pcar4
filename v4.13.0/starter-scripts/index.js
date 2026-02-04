/*global RAMP*/

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
                    },
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
                caption: {
                    mapCoords: {
                        formatter: 'WEB_MERCATOR'
                    },
                    scaleBar: {
                        imperialScale: true
                    }
                },
                lodSets: [
                    {
                        id: 'LOD_NRCAN_Lambert_3978',
                        lods: RAMP.geo.defaultLODs(RAMP.geo.defaultTileSchemas()[0])
                    },
                    {
                        id: 'LOD_ESRI_World_AuxMerc_3857',
                        lods: RAMP.geo.defaultLODs(RAMP.geo.defaultTileSchemas()[1])
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
                                layerType: 'esri-tile',
                                url: 'https://maps-cartes.services.geo.ca/server2_serveur2/rest/services/BaseMaps/CBMT3978/MapServer'
                            }
                        ],
                        tileSchemaId: 'EXT_NRCAN_Lambert_3978#LOD_NRCAN_Lambert_3978'
                    },
                    {
                        id: 'baseSimple',
                        name: 'Canada Base Map - Simple',
                        description: 'Canada Base Map - Simple',
                        altText: 'Canada base map - Simple',
                        layers: [
                            {
                                id: 'SMR',
                                layerType: 'esri-tile',
                                url: 'https://maps-cartes.services.geo.ca/server2_serveur2/rest/services/BaseMaps/Simple/MapServer'
                            }
                        ],
                        tileSchemaId: 'EXT_NRCAN_Lambert_3978#LOD_NRCAN_Lambert_3978'
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
                                layerType: 'esri-tile',
                                url: 'https://maps-cartes.services.geo.ca/server2_serveur2/rest/services/BaseMaps/CBME_CBCE_HS_RO_3978/MapServer'
                            }
                        ],
                        tileSchemaId: 'EXT_NRCAN_Lambert_3978#LOD_NRCAN_Lambert_3978'
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
                                layerType: 'esri-tile',
                                url: 'https://maps-cartes.services.geo.ca/server2_serveur2/rest/services/BaseMaps/CBMT_CBCT_GEOM_3978/MapServer'
                            }
                        ],
                        tileSchemaId: 'EXT_NRCAN_Lambert_3978#LOD_NRCAN_Lambert_3978'
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
                                layerType: 'esri-tile',
                                url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer'
                            }
                        ],
                        tileSchemaId: 'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857',
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
                                layerType: 'esri-tile',
                                url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Physical_Map/MapServer'
                            }
                        ],
                        tileSchemaId: 'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857'
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
                                layerType: 'esri-tile',
                                url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Shaded_Relief/MapServer'
                            }
                        ],
                        tileSchemaId: 'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857'
                    },
                    {
                        id: 'baseEsriStreet',
                        name: 'World Street Map',
                        description: 'This worldwide street map presents highway-level data for the world.',
                        altText: 'ESWorld Street Map',
                        layers: [
                            {
                                id: 'World_Street_Map',
                                layerType: 'esri-tile',
                                url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer'
                            }
                        ],
                        tileSchemaId: 'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857'
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
                                layerType: 'esri-tile',
                                url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Terrain_Base/MapServer'
                            }
                        ],
                        tileSchemaId: 'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857'
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
                                layerType: 'esri-tile',
                                url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Topo_Map/MapServer'
                            }
                        ],
                        tileSchemaId: 'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857'
                    },
                    {
                        id: 'baseOpenStreetMap',
                        name: 'OpenStreetMap',
                        description: 'Open sourced topographical map.',
                        altText: 'OpenStreetMap',
                        layers: [
                            {
                                id: 'Open_Street_Map',
                                layerType: 'osm-tile'
                            }
                        ],
                        thumbnailUrl:
                            'https://www.openstreetmap.org/assets/about/osm-a74d2c94082260032c133b9d206ee2fdd911e5c82bf03daae10393a02d7b4809.png',
                        tileSchemaId: 'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857'
                    }
                ],
                initialBasemapId: 'baseEsriWorld'
            },
            layers: [
                {
                    id: 'WFSLayer',
                    layerType: 'ogc-wfs',
                    url: 'https://api.weather.gc.ca//collections/ahccd-trends/items?measurement_type__type_mesure=total_precip&period__periode=Ann&offset=0&limit=1000&province__province=on',
                    xyInAttribs: true,
                    colour: '#55ffff',
                    fixtures: {
                        details: {
                            template: 'WFSLayer-Custom'
                        }
                    }
                },
                {
                    id: 'TerritoriesPoly',
                    layerType: 'esri-feature',
                    url: 'https://maps-cartes.qa.ec.gc.ca/arcgis/rest/services/TestData/SupportData/MapServer/3',
                    permanentFilteredQuery: `Name = 'Nunavut' OR Name = 'Northwest Territories' OR Name = 'Yukon Territory'`
                },
                {
                    id: 'BasinLine',
                    layerType: 'esri-feature',
                    url: 'https://maps-cartes.qa.ec.gc.ca/arcgis/rest/services/CESI/MapServer/2',
                    permanentFilteredQuery: `OBJECTID > 80`
                },
                {
                    id: 'CESI',
                    layerType: 'esri-map-image',
                    url: 'https://maps-cartes.qa.ec.gc.ca/arcgis/rest/services/CESI/MapServer/',
                    sublayers: [{ index: 36 }, { index: 37 }, { index: 38 }]
                }
            ],
            fixtures: {
                legend: {
                    root: {
                        children: [
                            {
                                infoType: 'title',
                                name: 'Vector Layers',
                                children: [
                                    {
                                        layerId: 'WFSLayer'
                                    },
                                    {
                                        layerId: 'TerritoriesPoly',
                                        name: 'TerritoriesPoly'
                                    },
                                    {
                                        layerId: 'BasinLine',
                                        name: 'BasinLine',
                                        coverIcon:
                                            'https://cdn-icons-png.flaticon.com/512/136/136893.png?w=826&t=st=1687287352~exp=1687287952~hmac=10dfcb5cc9522c65066d495e3f17973ecf30dc948bdbdfcb073c647b3b616365'
                                    }
                                ]
                            },
                            {
                                layerId: 'CESI',
                                name: 'Releases of cadmium',
                                sublayerIndex: 36,
                                children: [
                                    {
                                        layerId: 'CESI',
                                        name: 'Releases of mercury',
                                        sublayerIndex: 37
                                    },
                                    {
                                        layerId: 'CESI',
                                        name: 'Releases of lead',
                                        sublayerIndex: 38
                                    }
                                ]
                            },
                            {
                                infoType: 'title',
                                content: 'Open me for a surprise!',
                                expanded: false,
                                children: [
                                    {
                                        infoType: 'text',
                                        content: 'Keep opening!',
                                        expanded: false,
                                        children: [
                                            {
                                                name: 'Custom Info Section',
                                                infoType: 'template',
                                                content: `<div>
                                                            <img src="https://i.imgur.com/0IcfK7s.gif" />
                                                            </div>`
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                },
                appbar: {
                    items: ['legend', 'geosearch', 'basemap', 'export', 'layer-reorder', 'areas-of-interest']
                },
                mapnav: {
                    items: ['fullscreen', 'geolocator', 'help', 'home', 'basemap', 'legend', 'geosearch']
                },
                export: {
                    fileName: 'ramp-pcar-4-map-carte'
                },
                help: {
                    location: '../help'
                },
                'areas-of-interest': {
                    areas: [
                        {
                            title: 'Reservoir Manicougan, Quebec, Canada',
                            thumbnail:
                                'https://maps-cartes.services.geo.ca/server2_serveur2/rest/services/BaseMaps/CBMT3978/MapServer/tile/8/285/268',
                            altText: 'Reservoir Manicougan, Quebec, Canada',
                            description:
                                'Manicouagan Reservoir (also Lake Manicouagan) is an annular lake in central Quebec, Canada, covering an area of 1,942 km2 (750 sq mi). The structure was created 214 (±1) million years ago, in the Late Triassic, by the impact of a meteorite 5 km (3 mi) in diameter.',
                            extent: {
                                xmax: 1840000,
                                xmin: 1750000,
                                ymax: 682193,
                                ymin: 583440,
                                spatialReference: {
                                    wkid: 3978
                                }
                            }
                        },
                        {
                            title: 'Gulf of St Lawrence',
                            thumbnail:
                                'https://maps-cartes.services.geo.ca/server2_serveur2/rest/services/BaseMaps/CBMT3978/MapServer/tile/8/286/270',
                            extent: {
                                xmin: 2050000,
                                xmax: 2240000,
                                ymin: 583440,
                                ymax: 682193,
                                spatialReference: {
                                    wkid: 3978
                                }
                            }
                        },
                        {
                            title: 'Lake Grandmesnil and surrounding lakes',
                            extent: {
                                xmin: 1800000,
                                xmax: 1840000,
                                ymin: 583440,
                                ymax: 682193,
                                spatialReference: {
                                    wkid: 3978
                                }
                            }
                        },
                        {
                            title: 'CN Tower',
                            thumbnail:
                                'https://upload.wikimedia.org/wikipedia/commons/9/9c/Toronto_-_ON_-_CN_Tower_Turmkorb.jpg',
                            description:
                                'The CN Tower is a 553.3 m-high concrete communications and observation tower in downtown Toronto, Ontario, Canada.',
                            extent: {
                                xmin: -8838051.849695725,
                                xmax: -8836512.572464375,
                                ymin: 5409988.501845284,
                                ymax: 5410763.023921062,
                                spatialReference: {
                                    wkid: 102100,
                                    latestWkid: 3857
                                }
                            }
                        }
                    ]
                }
            },
            panels: {
                open: [{ id: 'legend', pin: true }]
            },
            system: { animate: true }
        },
        fr: {
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
                    },
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
                        id: 'LOD_NRCAN_Lambert_3978',
                        lods: RAMP.geo.defaultLODs(RAMP.geo.defaultTileSchemas()[0])
                    },
                    {
                        id: 'LOD_ESRI_World_AuxMerc_3857',
                        lods: RAMP.geo.defaultLODs(RAMP.geo.defaultTileSchemas()[1])
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
                                layerType: 'esri-tile',
                                url: 'https://maps-cartes.services.geo.ca/server2_serveur2/rest/services/BaseMaps/CBMT3978/MapServer'
                            }
                        ],
                        tileSchemaId: 'EXT_NRCAN_Lambert_3978#LOD_NRCAN_Lambert_3978'
                    },
                    {
                        id: 'baseSimple',
                        name: 'Canada Base Map - Simple',
                        description: 'Canada Base Map - Simple',
                        altText: 'Canada base map - Simple',
                        layers: [
                            {
                                id: 'SMR',
                                layerType: 'esri-tile',
                                url: 'https://maps-cartes.services.geo.ca/server2_serveur2/rest/services/BaseMaps/Simple/MapServer'
                            }
                        ],
                        tileSchemaId: 'EXT_NRCAN_Lambert_3978#LOD_NRCAN_Lambert_3978'
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
                                layerType: 'esri-tile',
                                url: 'https://maps-cartes.services.geo.ca/server2_serveur2/rest/services/BaseMaps/CBME_CBCE_HS_RO_3978/MapServer'
                            }
                        ],
                        tileSchemaId: 'EXT_NRCAN_Lambert_3978#LOD_NRCAN_Lambert_3978'
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
                                layerType: 'esri-tile',
                                url: 'https://maps-cartes.services.geo.ca/server2_serveur2/rest/services/BaseMaps/CBMT_CBCT_GEOM_3978/MapServer'
                            }
                        ],
                        tileSchemaId: 'EXT_NRCAN_Lambert_3978#LOD_NRCAN_Lambert_3978'
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
                                layerType: 'esri-tile',
                                url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer'
                            }
                        ],
                        tileSchemaId: 'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857',
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
                                layerType: 'esri-tile',
                                url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Physical_Map/MapServer'
                            }
                        ],
                        tileSchemaId: 'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857'
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
                                layerType: 'esri-tile',
                                url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Shaded_Relief/MapServer'
                            }
                        ],
                        tileSchemaId: 'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857'
                    },
                    {
                        id: 'baseEsriStreet',
                        name: 'World Street Map',
                        description: 'This worldwide street map presents highway-level data for the world.',
                        altText: 'ESWorld Street Map',
                        layers: [
                            {
                                id: 'World_Street_Map',
                                layerType: 'esri-tile',
                                url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer'
                            }
                        ],
                        tileSchemaId: 'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857'
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
                                layerType: 'esri-tile',
                                url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Terrain_Base/MapServer'
                            }
                        ],
                        tileSchemaId: 'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857'
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
                                layerType: 'esri-tile',
                                url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Topo_Map/MapServer'
                            }
                        ],
                        tileSchemaId: 'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857'
                    },
                    {
                        id: 'baseOpenStreetMap',
                        name: 'OpenStreetMap',
                        description: 'Open sourced topographical map.',
                        altText: 'OpenStreetMap',
                        layers: [
                            {
                                id: 'Open_Street_Map',
                                layerType: 'osm-tile'
                            }
                        ],
                        thumbnailUrl:
                            'https://www.openstreetmap.org/assets/about/osm-a74d2c94082260032c133b9d206ee2fdd911e5c82bf03daae10393a02d7b4809.png',
                        tileSchemaId: 'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857'
                    }
                ],
                initialBasemapId: 'baseEsriWorld'
            },
            layers: [
                {
                    id: 'WFSLayer',
                    layerType: 'ogc-wfs',
                    url: 'https://api.weather.gc.ca//collections/ahccd-trends/items?measurement_type__type_mesure=total_precip&period__periode=Ann&offset=0&limit=1000&province__province=on',
                    xyInAttribs: true,
                    colour: '#55ffff',
                    fixtures: {
                        details: {
                            template: 'WFSLayer-Custom'
                        }
                    }
                },
                {
                    id: 'TerritoriesPoly',
                    layerType: 'esri-feature',
                    url: 'https://maps-cartes.qa.ec.gc.ca/arcgis/rest/services/TestData/SupportData/MapServer/3',
                    permanentFilteredQuery: `Name = 'Nunavut' OR Name = 'Northwest Territories' OR Name = 'Yukon Territory'`
                },
                {
                    id: 'BasinLine',
                    layerType: 'esri-feature',
                    url: 'https://maps-cartes.ec.gc.ca/arcgis/rest/services/ICDE/MapServer/2',
                    permanentFilteredQuery: `OBJECTID > 80`
                },
                {
                    id: 'CESI',
                    layerType: 'esri-map-image',
                    url: 'https://maps-cartes.qa.ec.gc.ca/arcgis/rest/services/ICDE/MapServer/',
                    sublayers: [{ index: 36 }, { index: 37 }, { index: 38 }]
                }
            ],
            fixtures: {
                legend: {
                    root: {
                        children: [
                            {
                                infoType: 'title',
                                name: 'Couches Vectorielles',
                                children: [
                                    {
                                        layerId: 'WFSLayer'
                                    },
                                    {
                                        layerId: 'TerritoriesPoly',
                                        name: 'TerritoriesPoly'
                                    },
                                    {
                                        layerId: 'BasinLine',
                                        name: 'BasinLine',
                                        coverIcon:
                                            'https://cdn-icons-png.flaticon.com/512/136/136893.png?w=826&t=st=1687287352~exp=1687287952~hmac=10dfcb5cc9522c65066d495e3f17973ecf30dc948bdbdfcb073c647b3b616365'
                                    }
                                ]
                            },
                            {
                                layerId: 'CESI',
                                name: 'Rejets de cadmium',
                                sublayerIndex: 36,
                                children: [
                                    {
                                        layerId: 'CESI',
                                        name: 'Rejets de mercure',
                                        sublayerIndex: 37
                                    },
                                    {
                                        layerId: 'CESI',
                                        name: 'Rejets de plomb',
                                        sublayerIndex: 38
                                    }
                                ]
                            },
                            {
                                infoType: 'title',
                                content: 'Ouvrez-moi pour une surprise!',
                                expanded: false,
                                children: [
                                    {
                                        infoType: 'text',
                                        content: 'Continuer à ouvrir!',
                                        expanded: false,
                                        children: [
                                            {
                                                name: 'Custom Info Section',
                                                infoType: 'template',
                                                content: `<div>
                                                            <img src="https://i.imgur.com/0IcfK7s.gif" />
                                                            </div>`
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                },
                appbar: {
                    items: ['legend', 'geosearch', 'basemap', 'export', 'layer-reorder', 'areas-of-interest']
                },
                mapnav: {
                    items: ['fullscreen', 'geolocator', 'help', 'home', 'basemap', 'legend', 'geosearch']
                },
                export: {
                    fileName: 'ramp-pcar-4-map-carte'
                },
                help: {
                    location: '../help'
                },
                'areas-of-interest': {
                    areas: [
                        {
                            title: 'Reservoir Manicougan, Quebec, Canada',
                            thumbnail:
                                'https://maps-cartes.services.geo.ca/server2_serveur2/rest/services/BaseMaps/CBMT3978/MapServer/tile/8/285/268',
                            altText: 'Reservoir Manicougan, Quebec, Canada',
                            description:
                                'Manicouagan Reservoir (also Lake Manicouagan) is an annular lake in central Quebec, Canada, covering an area of 1,942 km2 (750 sq mi). The structure was created 214 (±1) million years ago, in the Late Triassic, by the impact of a meteorite 5 km (3 mi) in diameter.',
                            extent: {
                                xmax: 1840000,
                                xmin: 1750000,
                                ymax: 682193,
                                ymin: 583440,
                                spatialReference: {
                                    wkid: 3978
                                }
                            }
                        },
                        {
                            title: 'Gulf of St Lawrence',
                            thumbnail:
                                'https://maps-cartes.services.geo.ca/server2_serveur2/rest/services/BaseMaps/CBMT3978/MapServer/tile/8/286/270',
                            extent: {
                                xmin: 2050000,
                                xmax: 2240000,
                                ymin: 583440,
                                ymax: 682193,
                                spatialReference: {
                                    wkid: 3978
                                }
                            }
                        },
                        {
                            title: 'Lake Grandmesnil and surrounding lakes',
                            extent: {
                                xmin: 1800000,
                                xmax: 1840000,
                                ymin: 583440,
                                ymax: 682193,
                                spatialReference: {
                                    wkid: 3978
                                }
                            }
                        },
                        {
                            title: 'CN Tower',
                            thumbnail:
                                'https://upload.wikimedia.org/wikipedia/commons/9/9c/Toronto_-_ON_-_CN_Tower_Turmkorb.jpg',
                            description:
                                'The CN Tower is a 553.3 m-high concrete communications and observation tower in downtown Toronto, Ontario, Canada.',
                            extent: {
                                xmin: -8838051.849695725,
                                xmax: -8836512.572464375,
                                ymin: 5409988.501845284,
                                ymax: 5410763.023921062,
                                spatialReference: {
                                    wkid: 102100,
                                    latestWkid: 3857
                                }
                            }
                        }
                    ]
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

const rInstance = RAMP.createInstance(document.getElementById('app'), config, options);

window.debugInstance = rInstance;

/* rInstance.fixture.addDefaultFixtures().then(() => {
    rInstance.panel.open('legend');
    rInstance.panel.pin('legend');
}); */

rInstance.$element.component('WFSLayer-Custom', {
    props: ['identifyData'],
    template: `
        <div>
            <span>This is an example template that contains an image.</span>
            <img src="https://i.imgur.com/WtY0tdC.gif" />
        </div>
    `
});

// add export fixture
rInstance.fixture.add('export');

// add areas of interest fixture
rInstance.fixture.add('areas-of-interest');

// load map if startRequired is true
// rInstance.start();

// function switchLang() {
//     if (rInstance.language === 'en') {
//         rInstance.setLanguage('fr');
//     } else {
//         rInstance.setLanguage('en');
//     }
//     document.getElementById('instance-language').innerText = rInstance.language;
// }

// function animateToggle() {
//     if (rInstance.$vApp.$el.classList.contains('animation-enabled')) {
//         rInstance.$vApp.$el.classList.remove('animation-enabled');
//     } else {
//         rInstance.$vApp.$el.classList.add('animation-enabled');
//     }
//     document.getElementById('animate-status').innerText =
//         'Animate: ' + rInstance.animate;
// }
