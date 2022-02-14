export const config = {
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
        lodSets: [
            {
                id: 'LOD_NRCAN_Lambert_3978',
                lods: RAMP.GEO.defaultLODs(RAMP.GEO.defaultTileSchemas()[0])
            },
            {
                id: 'LOD_ESRI_World_AuxMerc_3857',
                lods: RAMP.GEO.defaultLODs(RAMP.GEO.defaultTileSchemas()[1])
            }
        ],
        basemaps: [
            {
                id: 'esriTopo',
                tileSchemaId:
                    'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857',
                layers: [
                    {
                        layerType: 'esriTile',
                        url: 'http://services.arcgisonline.com/arcgis/rest/services/World_Topo_Map/MapServer'
                    }
                ]
            },
            {
                id: 'CBCT',
                tileSchemaId: 'EXT_NRCAN_Lambert_3978#LOD_NRCAN_Lambert_3978',
                layers: [
                    {
                        layerType: 'esriTile',
                        url: 'https://geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBCT3978/MapServer'
                    }
                ]
            }
        ]
    },
    startMinimized: true
};
