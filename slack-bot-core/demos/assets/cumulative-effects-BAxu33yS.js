import { z as geo, A as createInstance } from './main-B92PJIAd.js';
import './preload-helper-dJJaZANz.js';

// simple-feature.js

window.debugInstance = null;

const enConfig = {
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
                    xmax: 3049492,
                    xmin: -5281457,
                    ymax: 4482193,
                    ymin: -983440,
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
                tileSchemaId: 'EXT_NRCAN_Lambert_3978#LOD_NRCAN_Lambert_3978',
                backgroundColour: '#BFE8FE'
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
        initialBasemapId: 'baseNrCan'
    },
    layers: [
        {
            id: 'ce_polygons',
            name: 'Initiatives - Polygons',
            nameField: 'Initiative',
            layerType: 'esri-feature',
            expanded: true,
            url: 'https://section917.canadacentral.cloudapp.azure.com/arcgis/rest/services/EPB/cumulative_effects_effets_cumulatifs/MapServer/4',
            state: {
                opacity: 0.6,
                symbologyExpanded: false,
                visibility: true
            },
            identifyMode: 'hybrid',
            customRenderer: {},
            expectedDrawTime: 20000,
            expectedLoadTime: 20000,
            fieldMetadata: {
                fieldInfo: [
                    { name: 'Initiative' },
                    { name: 'Overarching_Initiative' },
                    { name: 'Description' },
                    { name: 'Initiative_Type' },
                    { name: 'Departments' },
                    { name: 'Partners' },
                    { name: 'Province_or_Territory' },
                    { name: 'Relevant_Industry' },
                    { name: 'Further_Information' },
                    { name: 'Related_OSDP_or_Open_Data_Links' },
                    { name: 'Related_Initiatives' }
                ],
                exclusiveFields: true
            }
        },
        {
            id: 'ce_multipoints',
            name: 'Initiatives - Multipoints',
            nameField: 'Initiative',
            layerType: 'esri-feature',
            url: 'https://section917.canadacentral.cloudapp.azure.com/arcgis/rest/services/EPB/cumulative_effects_effets_cumulatifs/MapServer/3',
            state: {
                visibility: true
            },
            customRenderer: {},
            expectedDrawTime: 20000,
            expectedLoadTime: 20000
        },
        {
            id: 'ce_lines',
            name: 'Initiatives - Lines',
            nameField: 'Initiative',
            layerType: 'esri-feature',
            url: 'https://section917.canadacentral.cloudapp.azure.com/arcgis/rest/services/EPB/cumulative_effects_effets_cumulatifs/MapServer/2',
            state: {
                visibility: true
            },
            customRenderer: {},
            expectedDrawTime: 20000,
            expectedLoadTime: 20000
        },
        {
            id: 'ce_points',
            name: 'Initiatives - Points',
            nameField: 'Initiative',
            layerType: 'esri-feature',
            url: 'https://section917.canadacentral.cloudapp.azure.com/arcgis/rest/services/EPB/cumulative_effects_effets_cumulatifs/MapServer/1',
            state: {
                visibility: true
            },
            customRenderer: {},
            expectedDrawTime: 20000,
            expectedLoadTime: 20000
        },
        {
            id: 'ce_table',
            name: 'Initiatives - Unmapped',
            nameField: 'Initiative',
            layerType: 'data-esri-table',
            url: 'https://section917.canadacentral.cloudapp.azure.com/arcgis/rest/services/EPB/cumulative_effects_effets_cumulatifs/MapServer/10',
            state: {
                visibility: true
            },
            customRenderer: {},
            expectedLoadTime: 20000
        }
    ],
    fixtures: {
        legend: {
            root: {
                children: [
                    {
                        layerId: 'ce_polygons',
                        name: 'Initiatives - Polygons',
                        symbologyExpanded: false
                    },
                    {
                        layerId: 'ce_multipoints',
                        name: 'Initiatives - Multipoints',
                        symbologyExpanded: false
                    },
                    {
                        layerId: 'ce_lines',
                        name: 'Initiatives - Lines',
                        symbologyExpanded: false
                    },
                    {
                        layerId: 'ce_points',
                        name: 'Initiatives - Points',
                        symbologyExpanded: false
                    },
                    {
                        layerId: 'ce_table',
                        name: 'Initiatives - Unmapped',
                        symbologyExpanded: false
                    }
                ]
            }
        },
        scrollguard: {
            enabled: true
        },
        grid: {
            panelTeleport: {
                target: document.getElementById('ramp-grid')
            },

            mergeGrids: [
                {
                    gridId: 'Umbrella_Initiative',
                    layers: [
                        {
                            layerId: 'ce_polygons'
                        },
                        {
                            layerId: 'ce_multipoints'
                        },
                        {
                            layerId: 'ce_lines'
                        },
                        {
                            layerId: 'ce_points'
                        },
                        { layerId: 'ce_table' }
                    ],
                    options: {
                        title: 'Merged Data Grid',
                        columns: [
                            { visible: false, field: 'Shape_Length' },
                            { visible: false, field: 'Shape_Area' },
                            { visible: false, field: 'Department' },
                            {
                                width: 235,
                                title: 'Management',
                                field: 'Management_Assessment_or_Monitoring'
                            },
                            { width: 235, field: 'Partners' }
                        ]
                    }
                }
            ]
        },
        appbar: {
            items: ['legend', 'geosearch', 'basemap', 'export', 'layer-reorder']
        },
        mapnav: {
            items: ['help', 'home', 'geolocator', 'basemap']
        },
        export: {
            title: {
                value: 'Cumulative Effects',
                selectable: false
            },
            legend: {
                selected: false
            },
            fileName: 'ce'
        },
        geosearch: {
            serviceUrls: {
                geoNames: 'https://geogratis.gc.ca/services/geoname/@{language}/geonames.json',
                geoLocation: 'https://geogratis.gc.ca/services/geolocation/@{language}/locate',
                geoTypes: 'https://geogratis.gc.ca/services/geoname/@{language}/codes/concise.json',
                geoProvince: 'https://geogratis.gc.ca/services/geoname/@{language}/codes/province.json'
            }
        }
    },
    panels: {
        open: [{ id: 'legend', pin: true }]
    },
    system: { animate: true }
};
const frConfig = {
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
                    xmax: 3049492,
                    xmin: -5281457,
                    ymax: 4482193,
                    ymin: -983440,
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
                name: 'Lambert cartes',
                extentSetId: 'EXT_NRCAN_Lambert_3978',
                lodSetId: 'LOD_NRCAN_Lambert_3978',
                thumbnailTileUrls: ['/tile/8/285/268', '/tile/8/285/269'],
                hasNorthPole: true
            },
            {
                id: 'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857',
                name: 'Cartes de Mercator Web',
                extentSetId: 'EXT_ESRI_World_AuxMerc_3857',
                lodSetId: 'LOD_ESRI_World_AuxMerc_3857',
                thumbnailTileUrls: ['/tile/8/91/74', '/tile/8/91/75']
            }
        ],
        basemaps: [
            {
                id: 'baseNrCan',
                name: 'Carte de base du Canada - transport (CBCT) avec étiquettes',
                description:
                    "La carte de base du Canada - transport (CBCT) du Secteur des sciences de la Terre de Ressources naturelles Canada est un service Internet qui s'adresse principalement aux utilisateurs et développeurs d'applications cartographiques en ligne.",
                altText: 'altText - La carte de base du Canada - transport (CBCT)',
                layers: [
                    {
                        id: 'CBCT',
                        layerType: 'esri-tile',
                        url: 'https://maps-cartes.services.geo.ca/server2_serveur2/rest/services/BaseMaps/CBCT3978/MapServer'
                    }
                ],
                tileSchemaId: 'EXT_NRCAN_Lambert_3978#LOD_NRCAN_Lambert_3978'
            },
            {
                id: 'baseSimple',
                name: 'Carte de base du Canada - simple',
                description: 'La carte de base du Canada - simple',
                altText: 'altText - La carte de base du Canada - simple',
                layers: [
                    {
                        id: 'SMR',
                        layerType: 'esri-tile',
                        url: 'https://maps-cartes.services.geo.ca/server2_serveur2/rest/services/BaseMaps/Simple/MapServer'
                    },
                    {
                        id: 'SMW',
                        layerType: 'esri-tile',
                        url: 'https://maps-cartes.services.geo.ca/server2_serveur2/rest/services/BaseMaps/CBMT_TXT_3978/MapServer'
                    }
                ],
                tileSchemaId: 'EXT_NRCAN_Lambert_3978#LOD_NRCAN_Lambert_3978'
            },
            {
                id: 'baseCBME_CBCE_HS_RO_3978',
                name: 'Carte de base du Canada - élévation (CBCE)',
                description:
                    "La carte de base du Canada - élévation (CBCE) du Secteur des sciences de la Terre de Ressources naturelles Canada est un service Internet qui s'adresse principalement aux utilisateurs et développeurs d'applications cartographiques en ligne.",
                altText: 'altText - La carte de base du Canada - élévation (CBCE)',
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
                name: 'Carte de base du Canada - transport (CBCT)',
                description:
                    "La carte de base du Canada - transport (CBCT) du Secteur des sciences de la Terre de Ressources naturelles Canada est un service Internet qui s'adresse principalement aux utilisateurs et développeurs d'applications cartographiques en ligne.",
                altText: 'altText - La carte de base du Canada - transport (CBCT)',
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
                name: 'Imagerie mondiale',
                description:
                    "L'imagerie mondiale fournit une imagerie satellitaire et aérienne dans de nombreuses régions du monde avec une résolution de 1 mètres et moins et des images satellitaires de résolution inférieure dans le monde entier.",
                altText: "altText - L'imagerie mondiale",
                layers: [
                    {
                        id: 'World_Imagery',
                        layerType: 'esri-tile',
                        url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer'
                    }
                ],
                tileSchemaId: 'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857'
            },
            {
                id: 'baseEsriPhysical',
                name: 'Monde physique',
                description:
                    "La carte du monde physique représente l'aspect physique naturel de la Terre à 1.24 kilomètres par pixel pour le monde et à 500 mètres pour les États-Unis.",
                altText: 'altText - La carte du monde physique',
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
                name: 'Monde en relief ombragé',
                description:
                    "La carte du monde en relief ombragé représente l'élévation de la surface de la Terre comme un relief ombragé. Cette carte est utilisée comme couche de fond afin d'ajouter un relief ombragé à d'autres cartes SIG, comme la carte ArcGIS Online World Street Map.",
                altText: 'altText - La carte du monde en relief ombragé',
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
                name: 'Monde routier',
                description: 'La carte du monde routier présente des données au niveau des autoroutes pour le monde.',
                altText: 'altText - La carte du monde routier',
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
                name: 'Monde terrain',
                description:
                    "La carte du monde terrain est conçue pour être utilisée comme une carte de base par les professionnels du SIG pour superposer d'autres couches thématiques comme la démographie ou la couverture terrestre.",
                altText: 'altText - La carte du monde terrain',
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
                name: 'Monde topographique',
                description:
                    'La carte du monde topographique est conçue pour être utilisée comme une carte de base par les professionnels du SIG et comme une carte de référence par quiconque.',
                altText: 'altText - La carte du monde topographique',
                layers: [
                    {
                        id: 'World_Topo_Map',
                        layerType: 'esri-tile',
                        url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Topo_Map/MapServer'
                    }
                ],
                tileSchemaId: 'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857'
            }
        ],
        initialBasemapId: 'baseNrCan'
    },
    layers: [
        {
            id: 'ce_polygons',
            name: '[FR] Initiatives - Polygons',
            nameField: 'Initiative',
            layerType: 'esri-feature',
            expanded: true,
            url: 'https://section917.canadacentral.cloudapp.azure.com/arcgis/rest/services/EPB/cumulative_effects_effets_cumulatifs/MapServer/9',
            state: {
                opacity: 0.6,
                symbologyExpanded: false,
                visibility: true
            },
            identifyMode: 'hybrid',
            customRenderer: {},
            expectedDrawTime: 20000,
            expectedLoadTime: 20000
        },
        {
            id: 'ce_multipoints',
            name: '[FR] Initiatives - Multipoints',
            nameField: 'Initiative',
            layerType: 'esri-feature',
            url: 'https://section917.canadacentral.cloudapp.azure.com/arcgis/rest/services/EPB/cumulative_effects_effets_cumulatifs/MapServer/8',
            state: {
                visibility: true
            },
            customRenderer: {},
            expectedDrawTime: 20000,
            expectedLoadTime: 20000
        },
        {
            id: 'ce_lines',
            name: 'Initiatives - Lines',
            nameField: 'Initiative',
            layerType: 'esri-feature',
            url: 'https://section917.canadacentral.cloudapp.azure.com/arcgis/rest/services/EPB/cumulative_effects_effets_cumulatifs/MapServer/7',
            state: {
                visibility: true
            },
            customRenderer: {},
            expectedDrawTime: 20000,
            expectedLoadTime: 20000
        },
        {
            id: 'ce_points',
            name: '[FR] Initiatives - Points',
            nameField: 'Initiative',
            layerType: 'esri-feature',
            url: 'https://section917.canadacentral.cloudapp.azure.com/arcgis/rest/services/EPB/cumulative_effects_effets_cumulatifs/MapServer/6',
            state: {
                visibility: true
            },
            customRenderer: {},
            expectedDrawTime: 20000,
            expectedLoadTime: 20000
        },
        {
            id: 'ce_table',
            name: '[FR] Initiatives - Unmapped',
            nameField: 'Initiative__EN_',
            layerType: 'data-esri-table',
            url: 'https://section917.canadacentral.cloudapp.azure.com/arcgis/rest/services/EPB/cumulative_effects_effets_cumulatifs/MapServer/11',
            state: {
                visibility: true
            },
            customRenderer: {},
            expectedLoadTime: 20000
        }
    ],
    fixtures: {
        legend: {
            root: {
                children: [
                    {
                        layerId: 'ce_polygons',
                        name: '[FR] Initiatives - Polygons',
                        symbologyExpanded: false
                    },
                    {
                        layerId: 'ce_multipoints',
                        name: '[FR] Initiatives - Multipoints',
                        symbologyExpanded: false
                    },
                    {
                        layerId: 'ce_lines',
                        name: '[FR] Initiatives - Lines',
                        symbologyExpanded: false
                    },
                    {
                        layerId: 'ce_points',
                        name: '[FR] Initiatives - Points',
                        symbologyExpanded: false
                    },
                    {
                        layerId: 'ce_table',
                        name: '[FR] Initiatives - Unmapped',
                        symbologyExpanded: false
                    }
                ]
            }
        },
        scrollguard: {
            enabled: true
        },
        grid: {
            panelTeleport: {
                target: document.getElementById('ramp-grid')
            },

            mergeGrids: [
                {
                    gridId: 'Umbrella_Initiative',
                    layers: [
                        {
                            layerId: 'ce_polygons'
                        },
                        {
                            layerId: 'ce_multipoints'
                        },
                        {
                            layerId: 'ce_lines'
                        },
                        {
                            layerId: 'ce_points'
                        },
                        { layerId: 'ce_table' }
                    ],
                    options: {
                        title: '[FR] Merged Data Grid',
                        columns: [
                            { visible: false, field: 'Shape_Length' },
                            { visible: false, field: 'Shape_Area' },
                            { visible: false, field: 'Department' }
                        ]
                    }
                }
            ]
        },
        appbar: {
            items: ['legend', 'geosearch', 'basemap', 'export', 'layer-reorder']
        },
        mapnav: {
            items: ['help', 'home', 'geolocator', 'basemap']
        },
        export: {
            title: {
                value: '[FR] Cumulative Effects',
                selectable: false
            },
            legend: {
                selected: false
            },
            fileName: 'ce'
        },
        geosearch: {
            serviceUrls: {
                geoNames: 'https://geogratis.gc.ca/services/geoname/@{language}/geonames.json',
                geoLocation: 'https://geogratis.gc.ca/services/geolocation/@{language}/locate',
                geoTypes: 'https://geogratis.gc.ca/services/geoname/@{language}/codes/concise.json',
                geoProvince: 'https://geogratis.gc.ca/services/geoname/@{language}/codes/province.json'
            }
        }
    },
    panels: {
        open: [{ id: 'legend', pin: true }]
    },
    system: { animate: true }
};

let config = {
    configs: {
        en: enConfig,
        fr: frConfig
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
