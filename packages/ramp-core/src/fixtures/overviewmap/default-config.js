const lods = [
    {
        level: 0,
        resolution: 156543.03392800014,
        scale: 591657527.591555
    },
    {
        level: 1,
        resolution: 78271.51696399994,
        scale: 295828763.795777
    },
    {
        level: 2,
        resolution: 39135.75848200009,
        scale: 147914381.897889
    },
    {
        level: 3,
        resolution: 19567.87924099992,
        scale: 73957190.948944
    },
    {
        level: 4,
        resolution: 9783.93962049996,
        scale: 36978595.474472
    },
    {
        level: 5,
        resolution: 4891.96981024998,
        scale: 18489297.737236
    },
    {
        level: 6,
        resolution: 2445.98490512499,
        scale: 9244648.868618
    },
    {
        level: 7,
        resolution: 1222.992452562495,
        scale: 4622324.434309
    },
    {
        level: 8,
        resolution: 611.4962262813797,
        scale: 2311162.217155
    },
    {
        level: 9,
        resolution: 305.74811314055756,
        scale: 1155581.108577
    },
    {
        level: 10,
        resolution: 152.87405657041106,
        scale: 577790.554289
    },
    {
        level: 11,
        resolution: 76.43702828507324,
        scale: 288895.277144
    },
    {
        level: 12,
        resolution: 38.21851414253662,
        scale: 144447.638572
    },
    {
        level: 13,
        resolution: 19.10925707126831,
        scale: 72223.819286
    },
    {
        level: 14,
        resolution: 9.554628535634155,
        scale: 36111.909643
    },
    {
        level: 15,
        resolution: 4.77731426794937,
        scale: 18055.954822
    },
    {
        level: 16,
        resolution: 2.388657133974685,
        scale: 9027.977411
    },
    {
        level: 17,
        resolution: 1.1943285668550503,
        scale: 4513.988705
    },
    {
        level: 18,
        resolution: 0.5971642835598172,
        scale: 2256.994353
    },
    {
        level: 19,
        resolution: 0.29858214164761665,
        scale: 1128.497176
    },
    {
        level: 20,
        resolution: 0.14929107082380833,
        scale: 564.248588
    },
    {
        level: 21,
        resolution: 0.07464553541190416,
        scale: 282.124294
    },
    {
        level: 22,
        resolution: 0.03732276770595208,
        scale: 141.062147
    },
    {
        level: 23,
        resolution: 0.01866138385297604,
        scale: 70.5310735
    }
]

const defaultConfig = {
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
    lods: lods,
    basemaps: [
        {
            id: 'esriTopo',
            tileSchemaId: 'DEFAULT_ESRI_World_AuxMerc_3857',
            layers: [
                {
                    layerType: 'esriTile',
                    url: 'http://services.arcgisonline.com/arcgis/rest/services/World_Topo_Map/MapServer'
                }
            ]
        }
    ],
    initialBasemapId: 'esriTopo'
};

export default defaultConfig;
