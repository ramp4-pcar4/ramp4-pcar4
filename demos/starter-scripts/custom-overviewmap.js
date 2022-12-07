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
                lodSets: [
                    {
                        id: 'LOD_ESRI_World_AuxMerc_3857',
                        lods: geo.defaultLODs(geo.defaultTileSchemas()[1])
                    }
                ],
                tileSchemas: [
                    {
                        id: 'DEFAULT_ESRI_World_AuxMerc_3857',
                        name: 'Web Mercator Maps',
                        extentSetId: 'EXT_ESRI_World_AuxMerc_3857',
                        lodSetId: 'LOD_ESRI_World_AuxMerc_3857',
                        thumbnailTileUrls: ['/tile/8/91/74', '/tile/8/91/75']
                    }
                ],
                basemaps: [
                    {
                        id: 'esriImagery',
                        tileSchemaId: 'DEFAULT_ESRI_World_AuxMerc_3857',
                        layers: [
                            {
                                layerType: 'esri-tile',
                                url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer'
                            }
                        ]
                    }
                ],
                initialBasemapId: 'esriImagery'
            },
            fixtures: {
                overviewmap: {
                    basemaps: {
                        DEFAULT_ESRI_World_AuxMerc_3857: {
                            id: 'World_Terrain_Base',
                            tileSchemaId: 'DEFAULT_ESRI_World_AuxMerc_3857',
                            layers: [
                                {
                                    layerType: 'esri-tile',
                                    url: 'http://services.arcgisonline.com/arcgis/rest/services/World_Terrain_Base/MapServer'
                                }
                            ]
                        }
                    },
                    startMinimized: false,
                    expandFactor: 3,
                    areaOpacity: 0.5,
                    areaColour: '#5D591F',
                    borderColour: '#00FF00',
                    borderWidth: 2
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
rInstance.fixture.addDefaultFixtures(['overviewmap']);

window.debugInstance = rInstance;
