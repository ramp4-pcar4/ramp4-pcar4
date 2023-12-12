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
                    id: 'Water',
                    name: 'Feature Layer Cluster',
                    layerType: 'esri-feature',
                    url: 'https://maps-cartes.qa.ec.gc.ca/arcgis/rest/services/TestData/EcoAction/MapServer/8',
                    pointClustering: {
                        type: 'cluster',
                        clusterRadius: '100px',
                        clusterMinSize: '24px',
                        clusterMaxSize: '60px',
                        symbol: {
                            type: 'simple-marker',
                            style: 'circle',
                            color: '#69dcff',
                            outline: {
                                color: 'rgba(0, 139, 174, 0.5)',
                                width: 6
                            }
                        },
                        labelingInfo: [
                            {
                                deconflictionStrategy: 'none',
                                labelExpressionInfo: {
                                    expression: "Text($feature.cluster_count, '#,###')"
                                },
                                symbol: {
                                    type: 'text',
                                    color: '#004a5d',
                                    font: {
                                        weight: 'bold',
                                        family: 'Noto Sans',
                                        size: '12px'
                                    }
                                },
                                labelPlacement: 'center-center'
                            }
                        ]
                    }
                },
                {
                    id: 'Water-2',
                    name: 'Feature Layer',
                    layerType: 'esri-feature',
                    url: 'https://maps-cartes.qa.ec.gc.ca/arcgis/rest/services/TestData/EcoAction/MapServer/8'
                },
                {
                    id: 'WFSLayer',
                    name: 'WFS Layer Cluster',
                    layerType: 'ogc-wfs',
                    url: 'https://api.weather.gc.ca//collections/ahccd-trends/items?measurement_type__type_mesure=total_precip&period__periode=Ann&offset=0&limit=1000&province__province=on',
                    xyInAttribs: true,
                    colour: '#55ffff',
                    fixtures: {
                        details: {
                            template: 'WFSLayer-Custom'
                        }
                    },
                    pointClustering: {
                        type: 'cluster', // type of feature reduction - theres clustering and binning
                        clusterMaxSize: '60px', // symbol size of the largest cluster in points (or pixels). should also consider modifying clusterRadius if this is modified
                        clusterMinSize: '24px', // symbol size of the smallest cluster in points (or pixels)
                        clusterRadius: '100px', // radius in points (or pixels) of the area where multiple points will be grouped and visualized as a single cluster
                        labelingInfo: [
                            {
                                deconflictionStrategy: 'none',
                                labelExpressionInfo: {
                                    expression: "Text($feature.cluster_count, '#,###')"
                                },
                                symbol: {
                                    type: 'text',
                                    color: '#004a5d',
                                    font: {
                                        weight: 'bold',
                                        family: 'Noto Sans',
                                        size: '12px'
                                    }
                                },
                                labelPlacement: 'center-center'
                            }
                        ]
                    }
                },
                {
                    id: 'WFSLayer-2',
                    name: 'WFS Layer',
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
                    id: 'CSV',
                    name: 'CSV Cluster',
                    layerType: 'file-csv',
                    url: '../file-layers/point-cluster.csv',
                    latField: 'Y',
                    longField: 'X',
                    colour: '#FF0000', // So that its not the same colour as the shape one
                    pointClustering: {
                        type: 'cluster', // type of feature reduction - theres clustering and binning
                        clusterMaxSize: '60px', // symbol size of the largest cluster in points (or pixels). should also consider modifying clusterRadius if this is modified
                        clusterMinSize: '24px', // symbol size of the smallest cluster in points (or pixels)
                        clusterRadius: '100px', // radius in points (or pixels) of the area where multiple points will be grouped and visualized as a single cluster
                        labelingInfo: [
                            {
                                deconflictionStrategy: 'none',
                                labelExpressionInfo: {
                                    expression: "Text($feature.cluster_count, '#,###')"
                                },
                                symbol: {
                                    type: 'text',
                                    color: '#004a5d',
                                    font: {
                                        weight: 'bold',
                                        family: 'Noto Sans',
                                        size: '12px'
                                    }
                                },
                                labelPlacement: 'center-center'
                            }
                        ]
                    }
                },
                {
                    id: 'CSV-2',
                    name: 'CSV',
                    layerType: 'file-csv',
                    url: '../file-layers/point-cluster.csv',
                    latField: 'Y',
                    longField: 'X',
                    colour: '#FF0000' // So that its not the same colour as the shape one
                },
                {
                    id: 'GeoJson',
                    name: 'GeoJson Cluster',
                    layerType: 'file-geojson',
                    url: '../file-layers/point-cluster.json',
                    caching: true,
                    pointClustering: {
                        type: 'cluster', // type of feature reduction - theres clustering and binning
                        clusterMaxSize: '60px', // symbol size of the largest cluster in points (or pixels). should also consider modifying clusterRadius if this is modified
                        clusterMinSize: '24px', // symbol size of the smallest cluster in points (or pixels)
                        clusterRadius: '100px', // radius in points (or pixels) of the area where multiple points will be grouped and visualized as a single cluster
                        labelingInfo: [
                            {
                                deconflictionStrategy: 'none',
                                labelExpressionInfo: {
                                    expression: "Text($feature.cluster_count, '#,###')"
                                },
                                symbol: {
                                    type: 'text',
                                    color: '#004a5d',
                                    font: {
                                        weight: 'bold',
                                        family: 'Noto Sans',
                                        size: '12px'
                                    }
                                },
                                labelPlacement: 'center-center'
                            }
                        ]
                    }
                },
                {
                    id: 'GeoJson-2',
                    name: 'GeoJson',
                    layerType: 'file-geojson',
                    url: '../file-layers/point-cluster.json',
                    caching: true
                }
            ],
            fixtures: {
                legend: {
                    root: {
                        children: [
                            {
                                infoType: 'title',
                                content: 'Feature Layer Point Clustering',
                                controls: [],
                                children: [
                                    {
                                        infoType: 'text',
                                        content:
                                            'Two copies of a feature layer, with point clustering enabled for the first copy'
                                    },
                                    {
                                        layerId: 'Water'
                                    },
                                    {
                                        layerId: 'Water-2'
                                    }
                                ]
                            },
                            {
                                infoType: 'title',
                                content: 'WFS Layer Point Clustering',
                                controls: [],
                                children: [
                                    {
                                        infoType: 'text',
                                        content:
                                            'Two copies of a WFS layer, with point clustering enabled for the first copy'
                                    },
                                    {
                                        layerId: 'WFSLayer'
                                    },
                                    {
                                        layerId: 'WFSLayer-2'
                                    }
                                ]
                            },
                            {
                                infoType: 'title',
                                content: 'CSV File Layer Point Clustering',
                                controls: [],
                                children: [
                                    {
                                        infoType: 'text',
                                        content:
                                            'Two copies of a CSV file layer, with point clustering enabled for the first copy'
                                    },
                                    {
                                        layerId: 'CSV'
                                    },
                                    {
                                        layerId: 'CSV-2'
                                    }
                                ]
                            },
                            {
                                infoType: 'title',
                                content: 'GeoJson File Layer Point Clustering',
                                controls: [],
                                children: [
                                    {
                                        infoType: 'text',
                                        content:
                                            'Two copies of a GeoJson file layer, with point clustering enabled for the first copy'
                                    },
                                    {
                                        layerId: 'GeoJson'
                                    },
                                    {
                                        layerId: 'GeoJson-2'
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
                details: {
                    panelWidth: {
                        default: 350,
                        'details-items': 400
                    }
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
