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
                        hasNorthPole: true
                    },
                    {
                        id: 'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857',
                        name: 'Web Mercator Maps',
                        extentSetId: 'EXT_ESRI_World_AuxMerc_3857',
                        lodSetId: 'LOD_ESRI_World_AuxMerc_3857'
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
                        tileSchemaId:
                            'EXT_NRCAN_Lambert_3978#LOD_NRCAN_Lambert_3978'
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
                        tileSchemaId:
                            'EXT_NRCAN_Lambert_3978#LOD_NRCAN_Lambert_3978'
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
                        tileSchemaId:
                            'EXT_NRCAN_Lambert_3978#LOD_NRCAN_Lambert_3978'
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
                        tileSchemaId:
                            'EXT_NRCAN_Lambert_3978#LOD_NRCAN_Lambert_3978'
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
                        tileSchemaId:
                            'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857'
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
                        tileSchemaId:
                            'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857'
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
                        altText: 'World Terrain Base',
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
                        altText: 'World Topographic Map',
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
                    id: 'climateActionMap',
                    name: 'Climate action map',
                    layerType: 'esri-feature',
                    url: 'https://maps-cartes.ec.gc.ca/arcgis/rest/services/CAM/MapServer/0',
                    fixtures: {
                        grid: {
                            lazyFilter: true,
                            search: { enabled: false },
                            columns: [
                                {
                                    field: 'Category'
                                },
                                {
                                    field: 'Recipient_type'
                                },
                                {
                                    field: 'Department___Agency___Crown_Corporation'
                                },
                                {
                                    field: 'Province_Territory'
                                },
                                {
                                    field: 'Municipality___Community'
                                },
                                {
                                    field: 'Program_name'
                                },
                                {
                                    field: 'Project_name'
                                },
                                {
                                    field: 'Project_description'
                                },
                                {
                                    field: 'Ultimate_recipient_name'
                                },
                                {
                                    field: 'Funding_date___estimated_start_date'
                                },
                                {
                                    field: 'Program_contribution'
                                },
                                {
                                    field: 'Estimated_total_project_cost'
                                },
                                {
                                    field: 'Additional_information'
                                },
                                {
                                    field: 'Icon',
                                    visible: false
                                }
                            ]
                        }
                    },
                    mouseTolerance: 5,
                    identifyMode: 'hybrid',
                    drawOrder: [{ field: 'Program_name', ascending: true }],
                    state: {
                        opacity: 1,
                        visibility: true
                    },
                    customRenderer: {} // just to chill things out. real ramp will have all properties defaulted and filled in
                }
            ],
            fixtures: {
                legend: {
                    root: {
                        children: [
                            {
                                name: 'Keyword search',
                                layerId: 'climateActionMap',
                                symbologyExpanded: true
                            }
                        ]
                    }
                },
                appbar: {
                    items: ['legend', 'geosearch', 'export']
                },
                mapnav: { items: ['fullscreen', 'geolocator', 'home', 'help'] },
                export: {
                    title: {
                        value: 'Climate action map'
                    }
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
                        provinces:
                            'https://geogratis.gc.ca/services/geoname/en/codes/province.json',
                        types: 'https://geogratis.gc.ca/services/geoname/en/codes/concise.json'
                    }
                }
            },
            system: { animate: true }
        },
        fr: {
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
                        name: 'Lambert cartes',
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
                        altText:
                            'altText - La carte de base du Canada - transport (CBCT)',
                        layers: [
                            {
                                id: 'CBCT',
                                layerType: 'esri-tile',
                                url: 'https://maps-cartes.services.geo.ca/server2_serveur2/rest/services/BaseMaps/CBCT3978/MapServer'
                            }
                        ],
                        tileSchemaId:
                            'EXT_NRCAN_Lambert_3978#LOD_NRCAN_Lambert_3978'
                    },
                    {
                        id: 'baseSimple',
                        name: 'Carte de base du Canada - simple',
                        description: 'La carte de base du Canada - simple',
                        altText:
                            'altText - La carte de base du Canada - simple',
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
                        tileSchemaId:
                            'EXT_NRCAN_Lambert_3978#LOD_NRCAN_Lambert_3978'
                    },
                    {
                        id: 'baseCBME_CBCE_HS_RO_3978',
                        name: 'Carte de base du Canada - élévation (CBCE)',
                        description:
                            "La carte de base du Canada - élévation (CBCE) du Secteur des sciences de la Terre de Ressources naturelles Canada est un service Internet qui s'adresse principalement aux utilisateurs et développeurs d'applications cartographiques en ligne.",
                        altText:
                            'altText - La carte de base du Canada - élévation (CBCE)',
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
                        name: 'Carte de base du Canada - transport (CBCT)',
                        description:
                            "La carte de base du Canada - transport (CBCT) du Secteur des sciences de la Terre de Ressources naturelles Canada est un service Internet qui s'adresse principalement aux utilisateurs et développeurs d'applications cartographiques en ligne.",
                        altText:
                            'altText - La carte de base du Canada - transport (CBCT)',
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
                        tileSchemaId:
                            'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857'
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
                        tileSchemaId:
                            'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857'
                    },
                    {
                        id: 'baseEsriRelief',
                        name: 'Monde en relief ombragé',
                        description:
                            "La carte du monde en relief ombragé représente l'élévation de la surface de la terre comme un relief ombragé. Cette carte est utilisée comme couche de fond afin d'ajouter un relief ombragé à d'autres cartes SIG, comme la carte ArcGIS Online World Street Map.",
                        altText:
                            'altText - La carte du monde en relief ombragé',
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
                        name: 'Monde routier',
                        description:
                            'La carte du monde routier présente des données au niveau des autoroutes pour le monde.',
                        altText: 'altText - La carte du monde routier',
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
                        tileSchemaId:
                            'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857'
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
                        tileSchemaId:
                            'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857'
                    }
                ],
                initialBasemapId: 'baseNrCan'
            },
            layers: [
                {
                    id: 'climateActionMap',
                    layerType: 'esri-map-image',
                    url: 'https://maps-cartes.ec.gc.ca/arcgis/rest/services/CAM/MapServer',
                    tolerance: 20,
                    symbologyExpanded: true,
                    sublayers: [
                        {
                            index: 1,
                            name: 'Recherche de mot clé',
                            state: {
                                opacity: 1,
                                visibility: true
                            },
                            table: {
                                lazyFilter: true,
                                search: {
                                    enabled: false
                                },
                                columns: [
                                    {
                                        data: 'Catégorie'
                                    },
                                    {
                                        data: 'Type_de_destinataire'
                                    },
                                    {
                                        data: 'Ministère_organisme_société_d_état'
                                    },
                                    {
                                        data: 'Province_Territoire'
                                    },
                                    {
                                        data: 'Municipalité___Communauté'
                                    },
                                    {
                                        data: 'Nom_de_programme'
                                    },
                                    {
                                        data: 'Nom_de_projet'
                                    },
                                    {
                                        data: 'Description_du_projet'
                                    },
                                    {
                                        data: 'Nom_du_destinataire_final'
                                    },
                                    {
                                        data: 'Funding_date___Date_de_début_estimée'
                                    },
                                    {
                                        data: 'Contribution_du_programme'
                                    },
                                    {
                                        data: 'Coût_total_estimé_du_projet'
                                    },
                                    {
                                        data: 'informations_complémentaires'
                                    },
                                    {
                                        data: 'Icon',
                                        visible: false
                                    }
                                ]
                            }
                        }
                    ],
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
                                name: 'Recherche de mot clé',
                                layerId: 'climateActionMap',
                                symbologyExpanded: true,
                                sublayerIndex: 1
                            }
                        ]
                    }
                },
                appbar: {
                    items: ['legend', 'geosearch', 'export']
                },
                mapnav: { items: ['fullscreen', 'geolocator', 'home', 'help'] },
                export: {
                    title: {
                        value: 'Climate action map'
                    }
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
                            'https://geogratis.gc.ca/services/geoname/fr/geonames.json',
                        geoLocation:
                            'https://geogratis.gc.ca/services/geolocation/fr/locate?q=',
                        provinces:
                            'https://geogratis.gc.ca/services/geoname/fr/codes/province.json',
                        types: 'https://geogratis.gc.ca/services/geoname/fr/codes/concise.json'
                    }
                }
            },
            system: { animate: true }
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
