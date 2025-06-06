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
                        lods: geo.defaultLODs(geo.defaultTileSchemas()[0])
                    },
                    {
                        id: 'LOD_ESRI_World_AuxMerc_3857',
                        lods: geo.defaultLODs(geo.defaultTileSchemas()[1])
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
                    id: 'Happy',
                    name: 'Happy',
                    layerType: 'file-geojson',
                    url: '../file-layers/geojson.json'
                },
                {
                    id: 'EthyleneGlycol',
                    layerType: 'esri-feature',
                    url: 'https://maps-cartes.ec.gc.ca/arcgis/rest/services/StoryRAMP/ea24000c_7dc3_49a9_baac_c55d28dcaeb9/MapServer/3'
                },
                {
                    id: 'WFSLayer',
                    layerType: 'ogc-wfs',
                    url: 'https://api.weather.gc.ca//collections/ahccd-trends/items?measurement_type__type_mesure=total_precip&period__periode=Ann&offset=0&limit=1000&province__province=on',
                    xyInAttribs: true,
                    colour: '#FFA500'
                }
            ],
            fixtures: {
                legend: {
                    root: {
                        children: [
                            {
                                layerId: 'Happy',
                                description: 'Icon render style with SQL queries specified.',
                                symbologyStack: [
                                    {
                                        image: 'https://i.imgur.com/uAo3o6l.jpg',
                                        text: 'Left Eye',
                                        sqlQuery: "name = 'Left Eye'"
                                    },
                                    {
                                        image: 'https://i.imgur.com/uAo3o6l.jpg',
                                        text: 'Right Eye',
                                        sqlQuery: "name = 'Right Eye'"
                                    },
                                    {
                                        image: 'data:image/jpeg;base64,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',
                                        text: 'Happy Mouth',
                                        sqlQuery: "name = 'Happy Mouth'"
                                    }
                                ]
                            },
                            {
                                layerId: 'EthyleneGlycol',
                                description: 'Image render style with SQL queries specified.',
                                symbologyRenderStyle: 'images',
                                symbologyStack: [
                                    {
                                        image: 'https://cdn.pixabay.com/photo/2013/08/06/19/13/plane-170272_960_720.jpg',
                                        text: 'Airports',
                                        sqlQuery: "Sector = 'Airports and Services to Airports'"
                                    },
                                    {
                                        image: 'https://cdn.pixabay.com/photo/2013/11/24/11/10/lab-217043_960_720.jpg',
                                        text: 'Chemicals',
                                        sqlQuery: "Sector = 'Chemicals'"
                                    },
                                    {
                                        image: 'https://cdn.pixabay.com/photo/2018/08/24/23/33/oil-rig-3629119__340.jpg',
                                        text: 'Oil and Gas',
                                        sqlQuery: "Sector = 'Oil and Gas (Conventional and Non-Conventional)'"
                                    },
                                    {
                                        image: 'https://cdn.pixabay.com/photo/2016/11/21/15/42/disposal-1846033__340.jpg',
                                        text: 'Waste',
                                        sqlQuery: "Sector = 'Waste Treatment and Disposal'"
                                    },
                                    {
                                        image: 'https://cdn.pixabay.com/photo/2018/03/23/22/11/knowledge-3255140__340.jpg',
                                        text: 'Other',
                                        sqlQuery: "Sector = 'All Other Sectors'"
                                    }
                                ]
                            },
                            {
                                layerId: 'WFSLayer',
                                description: 'Image render style. Only pictures and text.',
                                symbologyRenderStyle: 'images',
                                symbologyStack: [
                                    {
                                        image: 'data:image/png;base64,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',
                                        text: 'Inline base64 image'
                                    },
                                    {
                                        image: 'https://davidwalsh.name/wp-content/themes/punky/images/logo.png',
                                        text: 'Tainted image'
                                    },
                                    {
                                        image: 'https://i.imgur.com/8mnDomv.jpg',
                                        text: 'CORS image'
                                    }
                                ]
                            }
                        ]
                    }
                },
                appbar: {
                    items: ['legend', 'geosearch', 'basemap', 'export', 'layer-reorder']
                },
                mapnav: {
                    items: ['fullscreen', 'geolocator', 'help', 'home', 'basemap', 'legend', 'geosearch']
                },
                export: {
                    title: {
                        value: 'Enjoy this Export',
                        selectable: false
                    },
                    legend: {
                        selected: false
                    },
                    fileName: 'ramp-pcar-4-map-carte'
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

// add export fixtures
rInstance.fixture.add('export');

// load map if startRequired is true
// rInstance.start();

window.debugInstance = rInstance;
