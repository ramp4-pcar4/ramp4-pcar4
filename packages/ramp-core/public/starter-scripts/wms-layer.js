window.rInstance = null;
document.title = 'WMS Layers';

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
            lods: RAMP.GEO.defaultLODs(RAMP.GEO.defaultTileSchemas()[1]), // idx 1 = mercator
            basemaps: [
                {
                    id: 'esriImagery',
                    tileSchemaId: 'DEFAULT_ESRI_World_AuxMerc_3857',
                    layers: [
                        {
                            layerType: 'esriTile',
                            url:
                                'https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer'
                        }
                    ]
                }
            ],
            initialBasemapId: 'esriImagery'
        },
        layers: [
            {
                id: 'ahocevar',
                layerType: 'ogcWms',
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
                layerType: 'ogcWms',
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
                layerType: 'ogcWms',
                url:
                    'http://geo.weather.gc.ca/geomet/?lang=E&service=WMS&request=GetCapabilities',
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
                featureInfoMimeType: 'text/plain'
            }
        ],
        fixtures: {
            legend: {
                reorderable: true,
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
                items: ['legend']
            },
            mapnav: { items: ['fullscreen', 'legend', 'home', 'basemap'] },
            details: {
                items: [
                    {
                        id: 'GeoMet',
                        template: 'GeoMet-Template'
                    }
                ]
            }
        }
    }
};

let options = {
    loadDefaultFixtures: false,
    loadDefaultEvents: true
};

Vue.component('GeoMet-Template', {
    props: ['identifyData'],
    render: function(h) {
        if (!this.identifyData) return;
        let parseText = text => {
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
        };

        let data = parseText(this.identifyData.data);

        return h(
            'div',
            {
                style:
                    'align-items: center; justify-content: center; font-size: .875rem; font-family: "Arial", sans-serif;'
            },
            [
                h(
                    'span',
                    {
                        style:
                            'display: flex; font-size: 1.25rem; background-color: #3182ce; color: white; padding: 4px; text-align: center;'
                    },
                    'GDPS.ETA_NT - Cloud Coverage (%)'
                ),
                h(
                    'div',
                    {
                        style:
                            'display: flex; flex-direction: column; font-size: .875rem; padding-top: 5px;'
                    },
                    [
                        h(
                            'span',
                            {
                                style: 'color: #a0aec0; font-weight: bold;'
                            },
                            'Coverage'
                        ),
                        h('span', data.value_0)
                    ]
                ),
                h(
                    'div',
                    {
                        style:
                            'display: flex; flex-direction: row; color: #a0aec0; font-weight: bold; padding-top: 5px;'
                    },
                    [
                        h(
                            'div',
                            {
                                style: 'flex: 1 1 0%; width: 100%;'
                            },
                            'x'
                        ),
                        h(
                            'div',
                            {
                                style: 'flex: 1 1 0%; width: 100%;'
                            },
                            'y'
                        )
                    ]
                ),
                h(
                    'div',
                    {
                        style: 'display: flex; flex-direction: row;'
                    },
                    [
                        h(
                            'div',
                            {
                                style: 'flex: 1 1 0%; width: 100%;'
                            },
                            data.x
                        ),
                        h(
                            'div',
                            {
                                style: 'flex: 1 1 0%; width: 100%;'
                            },
                            data.y
                        )
                    ]
                )
            ]
        );
    }
});

rInstance = new RAMP.Instance(document.getElementById('app'), config, options);
rInstance.fixture
    .addDefaultFixtures([
        'mapnav',
        'legend',
        'appbar',
        'grid',
        'details',
        'wizard'
    ])
    .then(() => {
        rInstance.panel.open('legend-panel');
    });
