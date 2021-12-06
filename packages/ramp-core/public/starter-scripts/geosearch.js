window.rInstance = null;

let config = {
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
                    lods: RAMP.GEO.defaultLODs(RAMP.GEO.defaultTileSchemas()[1])
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
                            layerType: 'esriTile',
                            url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer'
                        }
                    ]
                }
            ],
            initialBasemapId: 'esriImagery'
        },
        layers: [],
        fixtures: {
            appbar: {
                items: ['geosearch']
            }
        }
    }
};

let options = {
    loadDefaultFixtures: false,
    loadDefaultEvents: false
};

rInstance = new RAMP.Instance(document.getElementById('app'), config, options);
rInstance.fixture.addDefaultFixtures(['appbar', 'geosearch']).then(() => {
    rInstance.panel.open('geosearch-panel');
});
