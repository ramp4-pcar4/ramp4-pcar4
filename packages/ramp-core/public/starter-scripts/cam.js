window.rInstance = null;

console.log('RAMP has loaded.');

let config = {
    en: {
        map: {
            extent: {
                xmax: 4549492,
                xmin: -3681457,
                ymax: 4482193,
                ymin: -983440,
                spatialReference: {
                    wkid: 3978
                }
            },
            caption: {
                mouseCoords: {
                    formatter: 'LAT_LONG_DMS'
                },
                scaleBar: {
                    imperialScale: false
                }
            },
            lods: RAMP.GEO.defaultLODs(RAMP.GEO.defaultTileSchemas()[0]), // idx 1 = mercator
            tileSchemas: [
                {
                    id: 'EXT_NRCAN_Lambert_3978#LOD_NRCAN_Lambert_3978',
                    name: 'Lambert Maps',
                    extentSetId: 'EXT_NRCAN_Lambert_3978',
                    lodSetId: 'LOD_NRCAN_Lambert_3978',
                    thumbnailTileUrls: ['/tile/8/285/268', '/tile/8/285/269'],
                    hasNorthPole: false
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
                            url: 'https://geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT3978/MapServer'
                        }
                    ],
                    tileSchemaId:
                        'EXT_NRCAN_Lambert_3978#LOD_NRCAN_Lambert_3978',
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
                            url: 'https://geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/Simple/MapServer'
                        }
                    ],
                    tileSchemaId:
                        'EXT_NRCAN_Lambert_3978#LOD_NRCAN_Lambert_3978',
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
                            url: 'https://geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBME_CBCE_HS_RO_3978/MapServer'
                        }
                    ],
                    tileSchemaId:
                        'EXT_NRCAN_Lambert_3978#LOD_NRCAN_Lambert_3978',
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
                            url: 'https://geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_CBCT_GEOM_3978/MapServer'
                        }
                    ],
                    tileSchemaId:
                        'EXT_NRCAN_Lambert_3978#LOD_NRCAN_Lambert_3978',
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
                            url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer'
                        }
                    ],
                    tileSchemaId:
                        'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857',
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
                            url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Physical_Map/MapServer'
                        }
                    ],
                    tileSchemaId:
                        'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857',
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
                            url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Shaded_Relief/MapServer'
                        }
                    ],
                    tileSchemaId:
                        'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857',
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
                            url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer'
                        }
                    ],
                    tileSchemaId:
                        'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857',
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
                            url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Terrain_Base/MapServer'
                        }
                    ],
                    tileSchemaId:
                        'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857',
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
                            url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Topo_Map/MapServer'
                        }
                    ],
                    tileSchemaId:
                        'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857',
                    wkid: 102100
                }
            ],
            initialBasemapId: 'baseNrCan'
        },
        layers: [
            {
                id: 'climateActionMap',
                name: 'Climate action map',
                layerType: 'esriMapImage',
                url: 'https://maps-cartes.ec.gc.ca/arcgis/rest/services/CAM/MapServer',
                layerEntries: [
                    {
                        index: 0,
                        name: 'Keyword search',
                        state: {
                            opacity: 1,
                            visibility: true
                        },
                        table: {
                            lazyFilter: true,
                            search: { enabled: false },
                            columns: [
                                {
                                    data: 'Category'
                                },
                                {
                                    data: 'Recipient_type'
                                },
                                {
                                    data: 'Department___Agency___Crown_Corporation'
                                },
                                {
                                    data: 'Province_Territory'
                                },
                                {
                                    data: 'Municipality___Community'
                                },
                                {
                                    data: 'Program_name'
                                },
                                {
                                    data: 'Project_name'
                                },
                                {
                                    data: 'Project_description'
                                },
                                {
                                    data: 'Ultimate_recipient_name'
                                },
                                {
                                    data: 'Funding_date___estimated_start_date'
                                },
                                {
                                    data: 'Program_contribution'
                                },
                                {
                                    data: 'Estimated_total_project_cost'
                                },
                                {
                                    data: 'Additional_information'
                                },
                                {
                                    data: 'Icon',
                                    visible: false
                                },
                                {
                                    data: 'OBJECTID'
                                }
                            ]
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
                            name: 'Keyword search',
                            layerId: 'climateActionMap',
                            symbologyExpanded: true,
                            entryIndex: 0
                        }
                    ]
                }
            },
            appbar: {
                items: ['legend', 'geosearch', 'export-v1'],
                temporaryButtons: ['details', 'grid']
            },
            mapnav: { items: ['fullscreen', 'geoLocator', 'home', 'help'] },
            'export-v1-title': {
                text: 'Climate action map'
            },
            geosearch: {
                enabled: true,
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
                    officialOnly: true
                },
                serviceUrls: {
                    geoNames:
                        'https://geogratis.gc.ca/services/geoname/en/geonames.json',
                    geoLocation:
                        'https://geogratis.gc.ca/services/geolocation/en/locate?q=',
                    geoSuggest:
                        'https://geogratis.gc.ca/services/geolocation/en/suggest?q=',
                    provinces:
                        'https://geogratis.gc.ca/services/geoname/en/codes/province.json',
                    types: 'https://geogratis.gc.ca/services/geoname/en/codes/concise.json'
                }
            }
        },
        animate: true
    },
    fr: {
        map: {
            extent: {
                xmax: 4549492,
                xmin: -3681457,
                ymax: 4482193,
                ymin: -983440,
                spatialReference: {
                    wkid: 3978
                }
            },
            caption: {
                mouseCoords: {
                    formatter: 'LAT_LONG_DMS'
                },
                scaleBar: {
                    imperialScale: false
                }
            },
            lods: RAMP.GEO.defaultLODs(RAMP.GEO.defaultTileSchemas()[0]), // idx 1 = mercator
            tileSchemas: [
                {
                    id: 'EXT_NRCAN_Lambert_3978#LOD_NRCAN_Lambert_3978',
                    name: 'Lambert Maps',
                    extentSetId: 'EXT_NRCAN_Lambert_3978',
                    lodSetId: 'LOD_NRCAN_Lambert_3978',
                    thumbnailTileUrls: ['/tile/8/285/268', '/tile/8/285/269'],
                    hasNorthPole: false
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
                            url: 'https://geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT3978/MapServer'
                        }
                    ],
                    tileSchemaId:
                        'EXT_NRCAN_Lambert_3978#LOD_NRCAN_Lambert_3978',
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
                            url: 'https://geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/Simple/MapServer'
                        }
                    ],
                    tileSchemaId:
                        'EXT_NRCAN_Lambert_3978#LOD_NRCAN_Lambert_3978',
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
                            url: 'https://geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBME_CBCE_HS_RO_3978/MapServer'
                        }
                    ],
                    tileSchemaId:
                        'EXT_NRCAN_Lambert_3978#LOD_NRCAN_Lambert_3978',
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
                            url: 'https://geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT_CBCT_GEOM_3978/MapServer'
                        }
                    ],
                    tileSchemaId:
                        'EXT_NRCAN_Lambert_3978#LOD_NRCAN_Lambert_3978',
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
                            url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer'
                        }
                    ],
                    tileSchemaId:
                        'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857',
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
                            url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Physical_Map/MapServer'
                        }
                    ],
                    tileSchemaId:
                        'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857',
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
                            url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Shaded_Relief/MapServer'
                        }
                    ],
                    tileSchemaId:
                        'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857',
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
                            url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer'
                        }
                    ],
                    tileSchemaId:
                        'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857',
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
                            url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Terrain_Base/MapServer'
                        }
                    ],
                    tileSchemaId:
                        'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857',
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
                            url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Topo_Map/MapServer'
                        }
                    ],
                    tileSchemaId:
                        'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857',
                    wkid: 102100
                }
            ],
            initialBasemapId: 'baseNrCan'
        },
        layers: [
            {
                id: 'climateActionMap',
                name: "Carte d'action climatique",
                layerType: 'esriMapImage',
                url: 'https://maps-cartes.ec.gc.ca/arcgis/rest/services/CAM/MapServer',
                layerEntries: [
                    {
                        index: 1,
                        name: 'Keyword search',
                        state: {
                            opacity: 1,
                            visibility: true
                        },
                        table: {
                            lazyFilter: true,
                            search: { enabled: false },
                            columns: [
                                {
                                    data: 'Category'
                                },
                                {
                                    data: 'Recipient_type'
                                },
                                {
                                    data: 'Department___Agency___Crown_Corporation'
                                },
                                {
                                    data: 'Province_Territory'
                                },
                                {
                                    data: 'Municipality___Community'
                                },
                                {
                                    data: 'Program_name'
                                },
                                {
                                    data: 'Project_name'
                                },
                                {
                                    data: 'Project_description'
                                },
                                {
                                    data: 'Ultimate_recipient_name'
                                },
                                {
                                    data: 'Funding_date___estimated_start_date'
                                },
                                {
                                    data: 'Program_contribution'
                                },
                                {
                                    data: 'Estimated_total_project_cost'
                                },
                                {
                                    data: 'Additional_information'
                                },
                                {
                                    data: 'Icon',
                                    visible: false
                                },
                                {
                                    data: 'OBJECTID'
                                }
                            ]
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
                            name: 'Keyword search',
                            layerId: 'climateActionMap',
                            symbologyExpanded: true,
                            entryIndex: 1
                        }
                    ]
                }
            },
            appbar: {
                items: ['legend', 'geosearch', 'export-v1'],
                temporaryButtons: ['details', 'grid']
            },
            mapnav: { items: ['fullscreen', 'geoLocator', 'home', 'help'] },
            'export-v1-title': {
                text: "Carte d'action climatique"
            },
            geosearch: {
                enabled: true,
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
                    officialOnly: true
                },
                serviceUrls: {
                    geoNames:
                        'https://geogratis.gc.ca/services/geoname/en/geonames.json',
                    geoLocation:
                        'https://geogratis.gc.ca/services/geolocation/en/locate?q=',
                    geoSuggest:
                        'https://geogratis.gc.ca/services/geolocation/en/suggest?q=',
                    provinces:
                        'https://geogratis.gc.ca/services/geoname/en/codes/province.json',
                    types: 'https://geogratis.gc.ca/services/geoname/en/codes/concise.json'
                }
            }
        },
        animate: true
    }
};

let options = {
    loadDefaultFixtures: false,
    loadDefaultEvents: true,
    startRequired: false
};

rInstance = new RAMP.Instance(document.getElementById('app'), config, options);
rInstance.fixture.addDefaultFixtures().then(() => {
    rInstance.panel.open('legend-panel');
});

rInstance.$element.component('WFSLayer-Custom', {
    props: ['identifyData'],
    template: `
        <div>
            <span>This is an example template that contains an image.</span>
            <img src="https://i.imgur.com/WtY0tdC.gif" />
        </div>
    `
});

// add export-v1 fixtures
rInstance.fixture.add('export-v1');

// load map if startRequired is true
rInstance.start();

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
    document.getElementById('animate-status').innerText =
        'Animate: ' + rInstance.animate;
}
