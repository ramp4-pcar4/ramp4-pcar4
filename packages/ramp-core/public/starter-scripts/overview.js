window.rInstance = null;
document.title = "Overview"

function initRAMP() {
    let config = {
        en: {
            map: {
                extent: {
                    xmax: -5007771.626060756,
                    xmin: -16632697.354854,
                    ymax: 10015875.184845109,
                    ymin: 5022907.964742964,
                    spatialReference: {
                        wkid: 102100,
                        latestWkid: 3857
                    }
                },
                lods: RAMP.geoapi.maps.defaultLODs(RAMP.geoapi.maps.defaultTileSchemas()[1]), // idx 1 = mercator
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
            fixtures: {
            }
        }
    }

    let options = {
        loadDefaultFixtures: false,
        loadDefaultEvents: true
    };

    rInstance = new RAMP.Instance(document.getElementById('app'), config, options);
    rInstance.fixture.addDefaultFixtures(['overviewmap']);
}
