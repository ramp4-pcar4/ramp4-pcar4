window.rInstance = null;

console.log('RAMP has loaded.');

document.getElementById('ramp-version').innerText =
    'v.' +
    RAMP.version.major +
    '.' +
    RAMP.version.minor +
    '.' +
    RAMP.version.patch +
    ' [#' +
    RAMP.version.hash.slice(0, 6) +
    ']  -  built on ' +
    new Date(RAMP.version.timestamp).toLocaleDateString();

rInstance = new RAMP.Instance(document.getElementById('app'), {
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
                    ],
                    attribution: {
                        text: {
                            value: 'Custom attribution thanks'
                        },
                        logo: {
                            altText: 'custom logo alt text',
                            value:
                                'https://cdn.iconscout.com/icon/free/png-256/google-2981831-2476479.png',
                            link: 'https://www.google.ca/'
                        }
                    }
                }
            ],
            initialBasemapId: 'esriImagery'
        },
        layers: [
            {
                id: 'WaterQuantity',
                layerType: 'esriMapImage',
                url:
                    'https://maps-cartes.ec.gc.ca/arcgis/rest/services/CESI/MapServer',
                layerEntries: [
                    {
                        index: 1,
                        state: {
                            opacity: 1,
                            visibility: true
                        }
                    }
                ],
                state: {
                    opacity: 1,
                    visibility: true
                },
                customRenderer: {} // just to chill things out. real ramp will have all properties defaulted and filled in
            },
            {
                id: 'WaterQuality',
                layerType: 'esriMapImage',
                url:
                    'https://maps-cartes.ec.gc.ca/arcgis/rest/services/CESI/MapServer',
                layerEntries: [
                    {
                        index: 5,
                        state: {
                            opacity: 1,
                            visibility: true
                        }
                    }
                ],
                state: {
                    opacity: 1,
                    visibility: true
                },
                customRenderer: {} // just to chill things out. real ramp will have all properties defaulted and filled in
            },
            {
                id: 'CleanAir',
                layerType: 'esriFeature',
                url:
                    'https://maps-cartes.ec.gc.ca/arcgis/rest/services/EcoGeo/EcoGeo/MapServer/9',
                state: {
                    opacity: 0.8,
                    visibility: true
                },
                customRenderer: {} // just to chill things out. real ramp will have all properties defaulted and filled in
            },
            {
                id: 'WFSLayer',
                layerType: 'ogcWfs',
                url:
                    'https://geo.weather.gc.ca/geomet-beta/features/collections/hydrometric-stations/items?startindex=7740',
                state: {
                    visibility: true
                },
                customRenderer: {}
            },
            {
                id: 'Happy',
                layerType: 'esriFeature',
                fileType: 'geojson',
                url:
                    'https://fgpv-app.azureedge.net/demo/assets/sample_data/happy.json',
                state: {
                    visibility: true
                },
                customRenderer: {} // just to chill things out. real ramp will have all properties defaulted and filled in
            }

            /*
            {
                id: 'TestTile',
                layerType: 'esriTile',
                url: 'https://services.arcgisonline.com/arcgis/rest/services/USA_Topo_Maps/MapServer',
                state: {
                    opacity: 1,
                    visibility: true
                },
                customRenderer: {} // just to chill things out. real ramp will have all properties defaulted and filled in
            },
            {
                "id": "CanGRID_tmean_MAM_en",
                "layerType": "ogcWms",
                "url": "https://geo.weather.gc.ca/geomet-climate?SERVICE=WMS&VERSION=1.3.0",
                "name": "Total precipitation",
                "state": {
                    "opacity": 0.85,
                    "visibility": true
                },
                "layerEntries": [{"id": "CANGRD.TREND.TM_SPRING" }],
                "featureInfoMimeType": "application/json"
            }
            */
        ],
        fixtures: {
            legend: {
                reorderable: true,
                root: {
                    children: [
                        {
                            name: 'Visibility Set',
                            exclusiveVisibility: [
                                {
                                    layerId: 'CleanAir',
                                    name: 'Clean Air in Set'
                                },
                                {
                                    name: 'Group in Set',
                                    children: [
                                        {
                                            layerId: 'WaterQuantity',
                                            name:
                                                'Water Quantity in Nested Group'
                                        },
                                        {
                                            layerId: 'WaterQuality',
                                            name:
                                                'Water Quality in Nested Group'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            layerId: 'WFSLayer',
                            name: 'WFSLayer'
                        }
                    ]
                }
            },
            appbar: {
                items: [
                    { id: 'gazebo', options: { colour: '#54a0ff' } },
                    'divider',
                    'snowman-appbar-button',
                    'legend',
                    'geosearch',
                    'basemap',
                    'divider',
                    'export-v1'
                ]
            },
            mapnav: { items: ['fullscreen', 'help', 'home', 'basemap'] },
            details: {
                items: [
                    {
                        id: 'WaterQuantity',
                        template: 'Water-Quantity-Template'
                    },
                    {
                        id: 'WFSLayer',
                        template: 'WFSLayer-Custom'
                    }
                ]
            },
            'export-v1-title': {
                text: 'All Your Base are Belong to Us'
            }
        },
        animate: true
    },
    fr: {
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
                    ],
                    attribution: {
                        text: {
                            value: 'Merci d’attribution personnalisés'
                        },
                        logo: {
                            altText: 'custom logo alt text',
                            value:
                                'https://cdn.iconscout.com/icon/free/png-256/google-2981831-2476479.png',
                            link: 'https://www.google.ca/'
                        }
                    }
                }
            ],
            initialBasemapId: 'esriImagery'
        },
        layers: [
            {
                id: 'CleanWater',
                layerType: 'esriFeature',
                url:
                    'https://maps-cartes.ec.gc.ca/arcgis/rest/services/EcoGeo/EcoGeo/MapServer/3',
                state: {
                    opacity: 0.8,
                    visibility: true
                },
                customRenderer: {} // just to chill things out. real ramp will have all properties defaulted and filled in
            },
            {
                id: 'WFSLayer',
                layerType: 'ogcWfs',
                url:
                    'https://geo.weather.gc.ca/geomet-beta/features/collections/hydrometric-stations/items?startindex=6000',
                state: {
                    visibility: true
                },
                customRenderer: {}
            }
        ],
        fixtures: {
            appbar: {
                items: [
                    { id: 'gazebo', options: { colour: '#54a0ff' } },
                    'divider',
                    'snowman-appbar-button',
                    'legend',
                    'geosearch',
                    'basemap',
                    'divider',
                    'export-v1'
                ]
            },
            mapnav: { items: ['fullscreen', 'help', 'home', 'basemap'] },
            details: {
                items: [
                    {
                        id: 'WaterQuantity',
                        template: 'Water-Quantity-Template'
                    },
                    {
                        id: 'WFSLayer',
                        template: 'WFSLayer-Custom'
                    }
                ]
            },
            'export-v1-title': {
                text: 'All Your Base are Belong to Us'
            }
        },
        animate: true
    }
});

// Load custom templates.

Vue.component('WFSLayer-Custom', {
    props: ['identifyData'],
    render: function(h) {
        return h('div', [
            h('span', 'This is an example template that contains an image.'),
            h('span', {
                domProps: {
                    innerHTML: '<img src="https://i.imgur.com/WtY0tdC.gif" />'
                }
            })
        ]);
    }
});

Vue.component('Water-Quantity-Template', {
    props: ['identifyData'],
    render: function(h) {
        // Demonstrates that you can display different components in a template depending on an attribute value.
        let renderHeader = () => {
            if (this.identifyData.data['Symbol'] === '3') {
                return h(
                    'span',
                    {
                        style:
                            'display: flex; font-size: 1.25rem; background-color: #e53e3e; color: white; padding: 4px; text-align: center;'
                    },
                    this.identifyData.data['StationName']
                );
            } else {
                return h(
                    'span',
                    {
                        style:
                            'display: flex; font-size: 1.25rem; background-color: #3182ce; color: white; padding: 4px; text-align: center;'
                    },
                    this.identifyData.data['StationName']
                );
            }
        };

        let createSection = (title, id) => {
            return h(
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
                        title
                    ),
                    h('span', this.identifyData.data[id])
                ]
            );
        };

        return h(
            'div',
            {
                style:
                    'align-items: center; justify-content: center; font-size: .875rem; font-family: "Arial", sans-serif;'
            },
            [
                renderHeader(),
                createSection('Station ID', 'StationID'),
                createSection('Province', 'E_Province'),
                createSection('Report Year', 'Report_Year'),
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
                            'Latitude'
                        ),
                        h(
                            'div',
                            {
                                style: 'flex: 1 1 0%; width: 100%;'
                            },
                            'Longitude'
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
                            this.identifyData.data['Latitude']
                        ),
                        h(
                            'div',
                            {
                                style: 'flex: 1 1 0%; width: 100%;'
                            },
                            this.identifyData.data['Longitude']
                        )
                    ]
                ),
                h(
                    'div',
                    {
                        style:
                            'display: flex; flex-direction: column; padding-top: 5px; color: #4299e1;'
                    },
                    [
                        h(
                            'span',
                            {
                                style: 'font-weight: bold; color: #a0aec0;'
                            },
                            'Links'
                        ),
                        h('span', {
                            domProps: {
                                innerHTML: this.identifyData.data[
                                    'E_DetailPageURL'
                                ]
                            }
                        }),
                        h('span', {
                            domProps: {
                                innerHTML: this.identifyData.data[
                                    'E_URL_Historical'
                                ]
                            }
                        }),
                        h('span', {
                            domProps: {
                                innerHTML: this.identifyData.data[
                                    'E_URL_RealTime'
                                ]
                            }
                        })
                    ]
                )
            ]
        );
    }
});

// start loading non-default fixtures; this is just an example

rInstance.fixture.add('snowman');
rInstance.fixture.add('gazebo');

rInstance.fixture.add('diligord', window.hostFixtures.diligord);
rInstance.fixture.add('mouruge', window.hostFixtures.mouruge);

// add export-v1 fixtures
rInstance.fixture.add('export-v1');

// sample event declared by the page

// interesting race condition here. we could use rInstance.availableEvents to find the name,
// but given the async nature of fixture.add, the name will not be registered yet.
var gazeboEventName = 'gazebo/beholdMyText';

// a handler to react to a gazebo event
// click "see a cat" button to trigger console output
var handler = function(text) {
    // important to use get here, as the fixture might have been removed later on
    var diligord = rInstance.fixture.get('diligord');
    if (!diligord) {
        return;
    }
    diligord.doAThing(text);
};
rInstance.event.on(gazeboEventName, handler, 'SAMPLE_HANDLER');

// a one time handler. clicking "see a cat" many times should only result in one console log
var onceHandler = function(text) {
    console.log('EVENTS API SAMPLE: a one time event : ' + text);
};
rInstance.event.once(gazeboEventName, onceHandler, 'SAMPLE_HANDLER_ONCE');

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
