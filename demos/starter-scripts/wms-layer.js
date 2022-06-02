window.rInstance = null;
document.title = 'WMS Layers';

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
                        id: 'DEFAULT_NRCAN_Lambert_3978',
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
                    },
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
                                url: 'https://geoappext.nrcan.gc.ca/arcgis/rest/services/BaseMaps/CBMT3978/MapServer'
                            }
                        ],
                        tileSchemaId: 'DEFAULT_NRCAN_Lambert_3978'
                    }
                ],
                initialBasemapId: 'esriImagery'
            },
            layers: [
                {
                    id: 'ahocevar',
                    layerType: 'ogc-wms',
                    url: 'https://ahocevar.com/geoserver/wms',
                    state: {
                        visibility: true
                    },
                    layerEntries: [
                        {
                            id: 'ne:ne'
                        }
                    ],
                    featureInfoMimeType: 'text/plain'
                },
                {
                    id: 'RailwayNetwork',
                    layerType: 'ogc-wms',
                    url: 'http://maps.geogratis.gc.ca/wms/railway_en',
                    state: {
                        visibility: true
                    },
                    layerEntries: [
                        { id: 'railway', name: 'Railway' },
                        { id: 'railway.structure.line' },
                        { id: 'railway.structure.point' },
                        { id: 'railway.track' },
                        { id: 'railway.ferry' },
                        { id: 'railway.subdivision' },
                        { id: 'railway.station' },
                        { id: 'railway.marker_post' },
                        { id: 'railway.crossing' }
                    ],
                    featureInfoMimeType: 'text/html'
                },
                {
                    id: 'GeoMet',
                    layerType: 'ogc-wms',
                    url: 'http://geo.weather.gc.ca/geomet/?lang=E&service=WMS&request=GetCapabilities',
                    state: {
                        visibility: true,
                        opacity: 0.5
                    },
                    layerEntries: [
                        {
                            id: 'RDPA.24F_PR',
                            currentStyle: 'PRECIPMM'
                        }
                    ],
                    featureInfoMimeType: 'text/plain',
                    fixtures: {
                        details: {
                            template: 'GeoMet-Template'
                        }
                    }
                }
            ],
            fixtures: {
                legend: {
                    root: {
                        children: [
                            {
                                layerId: 'RailwayNetwork',
                                name: 'Railways'
                            },
                            {
                                layerId: 'ahocevar',
                                name: 'ahocevar'
                            },
                            {
                                layerId: 'GeoMet',
                                name: 'Cloud Coverage'
                            }
                        ]
                    }
                },
                appbar: {
                    items: ['legend', 'layer-reorder', 'export']
                },
                mapnav: { items: ['fullscreen', 'legend', 'home', 'basemap'] },
                export: {
                    title: {
                        value: 'WMS'
                    }
                },
                details: {
                    templates: {
                        json: 'Details-Default-Template-WMS'
                    }
                }
            }
        },
        system: {
            animate: false
        }
    }
};

let options = {
    loadDefaultFixtures: false,
    loadDefaultEvents: true
};
rInstance = RAMP.createInstance(
    document.getElementById('app'),
    config,
    options
);

rInstance.$element.component('Details-Default-Template-WMS', {
    props: ['identifyData'],
    template: `<div v-html="identifyData.data.data" />`
});

rInstance.$element.component('GeoMet-Template', {
    props: ['identifyData'],
    template: `<div v-html="createTemplate()" />`,
    methods: {
        parseText(text) {
            let obj = {};
            let rx = /(\w+) = '(?:"([^"]*)"|([^']*))/g;
            while ((m = rx.exec(text)) !== null) {
                if (m[2]) {
                    obj[m[1]] = m[2];
                } else {
                    obj[m[1]] = m[3];
                }
            }
            return obj;
        },
        createTemplate() {
            if (!this.identifyData) return;
            let data = this.parseText(this.identifyData.data.data);
            return `
            <div style="align-items: center; justify-content: center; font-size: .875rem; font-family: Arial, sans-serif;">
                <span style="display: flex; font-size: 1.25rem; background-color: #3182ce; color: white; padding: 4px; text-align: center;">
                    GDPS.ETA_NT - Cloud Coverage (%)
                </span>
                <div style="display: flex; flex-direction: column; font-size: .875rem; padding-top: 5px;">
                    <span style="color: #a0aec0; font-weight: bold;">
                        Coverage
                    </span>
                    <span>
                        ${data.value_0}
                    </span>
                </div>
                <div style="display: flex; flex-direction: row; color: #a0aec0; font-weight: bold; padding-top: 5px;">
                    <div style="flex: 1 1 0%; width: 100%;">
                        x
                    </div>
                    <div style="flex: 1 1 0%; width: 100%;">
                        y
                    </div>
                </div>
                <div style="display: flex; flex-direction: row;">
                    <div style="flex: 1 1 0%; width: 100%;">
                        ${data.x}
                    </div>
                    <div style="flex: 1 1 0%; width: 100%;">
                        ${data.y}
                    </div>
                </div>
            </div>
            `;
        }
    }
});

rInstance.fixture
    .addDefaultFixtures([
        'mapnav',
        'legend',
        'appbar',
        'details',
        'grid',
        'wizard',
        'export',
        'basemap',
        'layer-reorder'
    ])
    .then(() => {
        rInstance.panel.open('legend');
    });
