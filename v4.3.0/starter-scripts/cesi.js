/*global RAMP*/

window.debugInstance = null;

let config = {
    startingFixtures: [
        'appbar',
        'basemap',
        'crosshairs',
        'details',
        'geosearch',
        'grid',
        'help',
        'layer-reorder',
        'legend',
        'mapnav',
        'metadata',
        'northarrow',
        'overviewmap',
        'scrollguard',
        'panguard',
        'settings',
        'wizard',
        'export'
    ],
    configs: {
        en: {
            map: {
                extentSets: [
                    {
                        id: 'EXT_NRCAN_Lambert_3978',
                        default: {
                            xmax: 4549492,
                            xmin: -3681457,
                            ymax: 4482193,
                            ymin: -983440,
                            spatialReference: {
                                wkid: 3978
                            }
                        }
                    },
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
                        formatter: 'LAT_LONG_DMS'
                    },
                    scaleBar: {
                        imperialScale: false
                    }
                },
                lodSets: [
                    {
                        id: 'LOD_NRCAN_Lambert_3978',
                        lods: RAMP.geo.defaultLODs(
                            RAMP.geo.defaultTileSchemas()[0]
                        )
                    },
                    {
                        id: 'LOD_ESRI_World_AuxMerc_3857',
                        lods: RAMP.geo.defaultLODs(
                            RAMP.geo.defaultTileSchemas()[1]
                        )
                    }
                ],
                tileSchemas: [
                    {
                        id: 'EXT_NRCAN_Lambert_3978#LOD_NRCAN_Lambert_3978',
                        name: 'Lambert Maps',
                        extentSetId: 'EXT_NRCAN_Lambert_3978',
                        lodSetId: 'LOD_NRCAN_Lambert_3978',
                        thumbnailTileUrls: [
                            '/tile/8/285/268',
                            '/tile/8/285/269'
                        ],
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
                        altText:
                            'altText - The Canada Base Map - Transportation (CBMT)',
                        layers: [
                            {
                                id: 'CBMT',
                                layerType: 'esri-tile',
                                url: 'https://maps-cartes.services.geo.ca/server2_serveur2/rest/services/BaseMaps/CBMT3978/MapServer'
                            }
                        ],
                        tileSchemaId:
                            'EXT_NRCAN_Lambert_3978#LOD_NRCAN_Lambert_3978'
                    },
                    {
                        id: 'baseSimple',
                        name: 'Canada Base Map - Simple',
                        description: 'Canada Base Map - Simple',
                        altText: 'altText - Canada base map - Simple',
                        layers: [
                            {
                                id: 'SMR',
                                layerType: 'esri-tile',
                                url: 'https://maps-cartes.services.geo.ca/server2_serveur2/rest/services/BaseMaps/Simple/MapServer'
                            }
                        ],
                        tileSchemaId:
                            'EXT_NRCAN_Lambert_3978#LOD_NRCAN_Lambert_3978'
                    },
                    {
                        id: 'baseCBME_CBCE_HS_RO_3978',
                        name: 'Canada Base Map - Elevation (CBME)',
                        description:
                            'The Canada Base Map - Elevation (CBME) web mapping services of the Earth Sciences Sector at Natural Resources Canada, is intended primarily for online mapping application users and developers.',
                        altText: 'altText - Canada Base Map - Elevation (CBME)',
                        layers: [
                            {
                                id: 'CBME_CBCE_HS_RO_3978',
                                layerType: 'esri-tile',
                                url: 'https://maps-cartes.services.geo.ca/server2_serveur2/rest/services/BaseMaps/CBME_CBCE_HS_RO_3978/MapServer'
                            }
                        ],
                        tileSchemaId:
                            'EXT_NRCAN_Lambert_3978#LOD_NRCAN_Lambert_3978'
                    },
                    {
                        id: 'baseCBMT_CBCT_GEOM_3978',
                        name: 'Canada Base Map - Transportation (CBMT)',
                        description:
                            ' The Canada Base Map - Transportation (CBMT) web mapping services of the Earth Sciences Sector at Natural Resources Canada, are intended primarily for online mapping application users and developers.',
                        altText:
                            'altText - Canada Base Map - Transportation (CBMT)',
                        layers: [
                            {
                                id: 'CBMT_CBCT_GEOM_3978',
                                layerType: 'esri-tile',
                                url: 'https://maps-cartes.services.geo.ca/server2_serveur2/rest/services/BaseMaps/CBMT_CBCT_GEOM_3978/MapServer'
                            }
                        ],
                        tileSchemaId:
                            'EXT_NRCAN_Lambert_3978#LOD_NRCAN_Lambert_3978'
                    },
                    {
                        id: 'baseEsriWorld',
                        name: 'World Imagery',
                        description:
                            'World Imagery provides one meter or better satellite and aerial imagery in many parts of the world and lower resolution satellite imagery worldwide.',
                        altText: 'altText - World Imagery',
                        layers: [
                            {
                                id: 'World_Imagery',
                                layerType: 'esri-tile',
                                url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer'
                            }
                        ],
                        tileSchemaId:
                            'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857'
                    },
                    {
                        id: 'baseEsriPhysical',
                        name: 'World Physical Map',
                        description:
                            'This map presents the Natural Earth physical map at 1.24km per pixel for the world and 500m for the coterminous United States.',
                        altText: 'altText - World Physical Map',
                        layers: [
                            {
                                id: 'World_Physical_Map',
                                layerType: 'esri-tile',
                                url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Physical_Map/MapServer'
                            }
                        ],
                        tileSchemaId:
                            'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857'
                    },
                    {
                        id: 'baseEsriRelief',
                        name: 'World Shaded Relief',
                        description:
                            'This map portrays surface elevation as shaded relief. This map is used as a basemap layer to add shaded relief to other GIS maps, such as the ArcGIS Online World Street Map.',
                        altText: 'altText - World Shaded Relief',
                        layers: [
                            {
                                id: 'World_Shaded_Relief',
                                layerType: 'esri-tile',
                                url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Shaded_Relief/MapServer'
                            }
                        ],
                        tileSchemaId:
                            'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857'
                    },
                    {
                        id: 'baseEsriStreet',
                        name: 'World Street Map',
                        description:
                            'This worldwide street map presents highway-level data for the world.',
                        altText: 'altText - ESWorld Street Map',
                        layers: [
                            {
                                id: 'World_Street_Map',
                                layerType: 'esri-tile',
                                url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer'
                            }
                        ],
                        tileSchemaId:
                            'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857'
                    },
                    {
                        id: 'baseEsriTerrain',
                        name: 'World Terrain Base',
                        description:
                            'This map is designed to be used as a base map by GIS professionals to overlay other thematic layers such as demographics or land cover.',
                        altText: 'altText - World Terrain Base',
                        layers: [
                            {
                                id: 'World_Terrain_Base',
                                layerType: 'esri-tile',
                                url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Terrain_Base/MapServer'
                            }
                        ],
                        tileSchemaId:
                            'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857'
                    },
                    {
                        id: 'baseEsriTopo',
                        name: 'World Topographic Map',
                        description:
                            'This map is designed to be used as a basemap by GIS professionals and as a reference map by anyone.',
                        altText: 'altText - World Topographic Map',
                        layers: [
                            {
                                id: 'World_Topo_Map',
                                layerType: 'esri-tile',
                                url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Topo_Map/MapServer'
                            }
                        ],
                        tileSchemaId:
                            'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857'
                    }
                ],
                initialBasemapId: 'baseNrCan'
            },
            layers: [
                {
                    id: 'AirEmissions_GHG',
                    name: 'Greenhouse gas emissions from large facilities',
                    layerType: 'esri-map-image',
                    url: 'https://maps-cartes.ec.gc.ca/arcgis/rest/services/CESI/MapServer/',
                    metadataUrl:
                        'https://indicators-map.ec.gc.ca/metadata/en/Ammonia%20emissions%20by%20facility.xml',
                    catalogueUrl:
                        'https://open.canada.ca/data/en/dataset/4221c508-00c9-4011-aca6-b0a017fc90dc',
                    state: {
                        visibility: true,
                        opacity: 1
                    },
                    sublayers: [
                        {
                            index: 10,
                            state: {
                                visibility: true,
                                opacity: 1
                            },
                            nameField: 'Name',
                            fixtures: {
                                grid: {
                                    columns: [
                                        { name: 'CompanyName' },
                                        { name: 'Name' },
                                        { name: 'E_Province' },
                                        { name: 'City' },
                                        { name: 'Latitude' },
                                        { name: 'Longitude' },
                                        { name: 'E_NAIC_Name' },
                                        { name: 'CO2_eq' },
                                        { name: 'E_Units' },
                                        { name: 'Report_Year' },
                                        { name: 'E_DetailPageURL' }
                                    ]
                                }
                            }
                        }
                    ]
                },
                {
                    id: 'AirEmissions_SOx',
                    nameField: 'GridColumn1',
                    name: 'Sulphur oxide emissions by facility',
                    layerType: 'esri-feature',
                    url: 'https://maps-cartes.ec.gc.ca/arcgis/rest/services/CESI/MapServer/18',
                    metadataUrl:
                        'https://indicators-map.ec.gc.ca/metadata/en/Sulphur%20oxide%20emissions%20by%20facility.xml',
                    catalogueUrl:
                        'https://open.canada.ca/data/en/dataset/f4fb2aee-2d1b-4c75-aea1-2a7760cc4b58',
                    state: {
                        visibility: false
                    },
                    fixtures: {
                        grid: {
                            columns: [
                                { name: 'NPRI_ID' },
                                { name: 'GridColumn1' },
                                { name: 'Company_Name' },
                                { name: 'GridColumn3' },
                                { name: 'GridColumn2' },
                                { name: 'Address' },
                                { name: 'PostalCode' },
                                { name: 'Latitude' },
                                { name: 'Longitude' },
                                { name: 'E_NPRI_URL' },
                                { name: 'GridColumn5' },
                                { name: 'Units' },
                                { name: 'Report_Year' },
                                { name: 'E_DetailPageURL' }
                            ]
                        }
                    }
                },
                {
                    id: 'AirAmbient_AvgPM',
                    nameField: 'StationName',
                    name: 'Average fine particulate matter concentrations at monitoring stations',
                    layerType: 'esri-feature',
                    url: 'https://maps-cartes.ec.gc.ca/arcgis/rest/services/CESI/MapServer/26',
                    metadataUrl:
                        'https://indicators-map.ec.gc.ca/metadata/en/Average%20ambient%20fine%20particulate%20matter%20concentrations%20at%20monitoring%20stations.xml',
                    catalogueUrl:
                        'https://open.canada.ca/data/en/dataset/e6cc3ae2-92b1-4df6-87ff-698a1cd5a7bd',
                    state: {
                        visibility: false
                    },
                    fixtures: {
                        grid: {
                            columns: [
                                { name: 'StationName' },
                                { name: 'Address' },
                                { name: 'City' },
                                { name: 'E_Province' },
                                { name: 'Latitude' },
                                { name: 'Longitude' },
                                { name: 'PM2_5' },
                                { name: 'E_Units' },
                                { name: 'Report_Year' },
                                { name: 'E_DetailPageURL' }
                            ]
                        }
                    }
                },
                {
                    id: 'AirAmbient_SO2',
                    nameField: 'StationName',
                    name: 'Average sulphur dioxide concentrations at monitoring stations',
                    layerType: 'esri-feature',
                    url: 'https://maps-cartes.ec.gc.ca/arcgis/rest/services/CESI/MapServer/28',
                    metadataUrl:
                        'https://indicators-map.ec.gc.ca/metadata/en/Average%20ambient%20sulphur%20dioxide%20concentrations%20at%20monitoring%20stations.xml',
                    catalogueUrl:
                        'https://open.canada.ca/data/en/dataset/5f1b78ab-999a-41f0-82e9-351d236010ca',
                    state: {
                        visibility: false
                    },
                    fixtures: {
                        grid: {
                            columns: [
                                { name: 'StationName' },
                                { name: 'Address' },
                                { name: 'City' },
                                { name: 'E_Province' },
                                { name: 'Latitude' },
                                { name: 'Longitude' },
                                { name: 'SO2' },
                                { name: 'E_Units' },
                                { name: 'Report_Year' },
                                { name: 'E_DetailPageURL' }
                            ]
                        }
                    }
                },
                {
                    id: 'AirEmissions_Cd',
                    nameField: 'GridColumn1',
                    name: 'Cadmium emissions to air by facility',
                    layerType: 'esri-feature',
                    url: 'https://maps-cartes.ec.gc.ca/arcgis/rest/services/CESI/MapServer/13',
                    state: {
                        visibility: false
                    },
                    fixtures: {
                        grid: {
                            columns: [
                                { name: 'NPRI_ID' },
                                { name: 'GridColumn1' },
                                { name: 'Company_Name' },
                                { name: 'GridColumn3' },
                                { name: 'GridColumn2' },
                                { name: 'Address' },
                                { name: 'Latitude' },
                                { name: 'Longitude' },
                                { name: 'E_NPRI_URL' },
                                { name: 'GridColumn5' },
                                { name: 'E_Units' },
                                { name: 'Report_Year' },
                                { name: 'E_DetailPageURL' }
                            ]
                        }
                    },
                    disabledControls: ['metadata']
                },
                {
                    id: 'WaterToxics_Pb',
                    nameField: 'FacilityName',
                    name: 'Releases of lead to water by facility',
                    layerType: 'esri-feature',
                    url: 'https://maps-cartes.ec.gc.ca/arcgis/rest/services/CESI/MapServer/38',
                    metadataUrl:
                        'https://indicators-map.ec.gc.ca/metadata/en/Releases%20of%20lead%20to%20water%20by%20facility.xml',
                    catalogueUrl:
                        'https://open.canada.ca/data/en/dataset/334f4740-c9bd-4193-ba69-04c21443d2b6',
                    state: {
                        visibility: false
                    },
                    fixtures: {
                        grid: {
                            columns: [
                                { name: 'NPRI_ID' },
                                { name: 'FacilityName' },
                                { name: 'Company_Name' },
                                { name: 'Address' },
                                { name: 'City' },
                                { name: 'E_Province' },
                                { name: 'PostalCode' },
                                { name: 'Latitude' },
                                { name: 'Longitude' },
                                { name: 'E_NPRI_URL' },
                                { name: 'Pb' },
                                { name: 'E_Units' },
                                { name: 'Report_Year' },
                                { name: 'E_DetailPageURL' }
                            ]
                        }
                    }
                },
                {
                    id: 'Conserved_Areas',
                    name: 'Conserved areas',
                    layerType: 'esri-map-image',
                    url: 'https://maps-cartes.ec.gc.ca/arcgis/rest/services/CESI/MapServer',
                    metadataUrl:
                        'https://indicators-map.ec.gc.ca/metadata/en/Protected%20Areas.xml',
                    catalogueUrl:
                        'https://open.canada.ca/data/en/dataset/2888ff57-a21c-448c-a4fa-570c4cabd956',
                    state: {
                        visibility: false,
                        opacity: 1
                    },
                    sublayers: [
                        {
                            index: 32,
                            state: {
                                visibility: false,
                                opacity: 1
                            },
                            nameField: 'E_PA_Name',
                            fixtures: {
                                grid: {
                                    columns: [
                                        { name: 'E_PA_Name' },
                                        { name: 'E_PA_Bio_Name' },
                                        { name: 'E_Province' },
                                        { name: 'E_PA_Type' },
                                        { name: 'PA_Area_ha' },
                                        { name: 'Protected_Date' },
                                        { name: 'E_Management' },
                                        { name: 'E_PA_Zone_Desc' },
                                        { name: 'E_URL' },
                                        { name: 'Report_Year' },
                                        { name: 'E_DetailPageURL' }
                                    ]
                                }
                            }
                        }
                    ],
                    singleEntryCollapse: true
                },
                {
                    id: 'Water_Quality',
                    nameField: 'Name',
                    name: 'Water quality at monitoring sites',
                    layerType: 'esri-feature',
                    url: 'https://maps-cartes.ec.gc.ca/arcgis/rest/services/CESI/MapServer/5',
                    metadataUrl:
                        'https://indicators-map.ec.gc.ca/metadata/en/Water%20quality%20at%20monitoring%20sites.xml',
                    catalogueUrl:
                        'https://open.canada.ca/data/en/dataset/b6b6d5a6-bded-4b6e-9e8a-17f6e1b538dc',
                    state: {
                        visibility: false
                    }
                },
                {
                    id: 'Water_Quantity',
                    nameField: 'StationName',
                    name: 'Water quantity at monitoring stations',
                    layerType: 'esri-feature',
                    url: 'https://maps-cartes.ec.gc.ca/arcgis/rest/services/CESI/MapServer/1',
                    metadataUrl:
                        'https://indicators-map.ec.gc.ca/metadata/en/Water%20quantity%20at%20monitoring%20stations.xml',
                    catalogueUrl:
                        'https://open.canada.ca/data/en/dataset/c7cd1178-c72b-4a5a-aa63-9ae59d5bc532',
                    state: {
                        visibility: false
                    },
                    fixtures: {
                        grid: {
                            columns: [
                                { name: 'StationID' },
                                { name: 'StationName' },
                                { name: 'E_Overall_Condition' },
                                { name: 'E_SampleType' },
                                { name: 'E_Regulated' },
                                { name: 'DrainageArea_sqkm' },
                                { name: 'E_Province' },
                                { name: 'Latitude' },
                                { name: 'Longitude' },
                                { name: 'E_URL_RealTime' },
                                { name: 'E_URL_Historical' },
                                { name: 'E_Measure' },
                                { name: 'Report_Year' },
                                { name: 'E_DetailPageURL' }
                            ]
                        }
                    }
                },
                {
                    id: 'EZ',
                    name: 'Ecozones',
                    layerType: 'esri-map-image',
                    url: 'https://maps-cartes.ec.gc.ca/arcgis/rest/services/CESI/MapServer',
                    state: {
                        query: false,
                        visibility: true,
                        opacity: 1
                    },
                    sublayers: [
                        {
                            index: 33,
                            state: {
                                visibility: true,
                                opacity: 1
                            }
                        },
                        {
                            index: 34,
                            state: {
                                visibility: false,
                                opacity: 1
                            },
                            fixtures: {
                                grid: {
                                    columns: [
                                        { name: 'OBJECTID_2', visible: false }
                                    ]
                                }
                            }
                        }
                    ],
                    disabledControls: ['identify', 'data']
                }
            ],
            fixtures: {
                legend: {
                    root: {
                        children: [
                            {
                                name: 'Ecozones',
                                children: [
                                    {
                                        layerId: 'EZ',
                                        name: 'Ecozone',
                                        sublayerIndex: 33
                                    },
                                    {
                                        layerId: 'EZ',
                                        name: 'Ecozone boundary',
                                        sublayerIndex: 34
                                    }
                                ]
                            },
                            {
                                name: 'Water quantity at monitoring stations',
                                layerId: 'Water_Quantity'
                            },
                            {
                                name: 'Water quality at monitoring sites',
                                layerId: 'Water_Quality'
                            },
                            {
                                name: 'Conserved areas',
                                layerId: 'Conserved_Areas',
                                sublayerIndex: 32
                            },
                            {
                                name: 'Releases of lead to water by facility',
                                layerId: 'WaterToxics_Pb'
                            },
                            {
                                name: 'Cadmium emissions to air by facility',
                                layerId: 'AirEmissions_Cd'
                            },
                            {
                                name: 'Average sulphur dioxide concentrations at monitoring stations',
                                layerId: 'AirAmbient_SO2'
                            },
                            {
                                name: 'Average fine particulate matter concentrations at monitoring stations',
                                layerId: 'AirAmbient_AvgPM'
                            },
                            {
                                name: 'Sulphur oxide emissions by facility',
                                layerId: 'AirEmissions_SOx'
                            },
                            {
                                name: 'Greenhouse gas emissions from large facilities',
                                layerId: 'AirEmissions_GHG',
                                sublayerIndex: 10
                            }
                        ]
                    }
                },
                appbar: {
                    items: ['legend', 'geosearch', 'basemap', 'export']
                },
                mapnav: { items: ['fullscreen', 'geolocator', 'home', 'help'] },
                export: {
                    title: {
                        value: 'Canadian Environmental Sustainability Indicators (CESI)'
                    }
                }
            },
            system: {
                animate: true
            }
        }
    }
};

let options = {
    loadDefaultFixtures: false,
    loadDefaultEvents: true
};

const rInstance = RAMP.createInstance(
    document.getElementById('app'),
    config,
    options
);

window.debugInstance = rInstance;
