window.rInstance = null;
document.title = "WMS Layer"

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
            layers: [
                {
                    id: 'RailwayNetwork',
                    layerType: 'ogcWms',
                    url: 'http://maps.geogratis.gc.ca/wms/railway_en',
                    state: {
                        visibility: true
                    },
                    layerEntries: [
                        { id: "railway" },
                        { id: "railway.structure.line" },
                        { id: "railway.structure.point" },
                        { id: "railway.track" },
                        { id: "railway.ferry" },
                        { id: "railway.subdivision" },
                        { id: "railway.station" },
                        { id: "railway.marker_post" },
                        { id: "railway.crossing" }
                    ],
                    customRenderer: {}
                },
                {
                  id: "GeoMet",
                  layerType: "ogcWms",
                  url: "http://geo.weather.gc.ca/geomet/?lang=E&service=WMS&request=GetCapabilities",
                  state: {
                      visibility: true,
                      opacity: 0.5
                  },
                  disabledControls: [
                    "styles"
                  ],
                  layerEntries: [
                    {
                      id: "GDPS.ETA_UU",
                      allStyles: [
                        "WINDARROW",
                        "WINDARROWKMH"
                      ],
                      currentStyle: "WINDARROWKMH"
                    }
                  ],
                  customRenderer: {}
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
                                layerId: 'GeoMet',
                                name: 'Winds'
                            }
                        ]
                    }
                },
                appbar: {
                    items: [
                        'legend'
                    ]
                },
                mapnav: { items: ['fullscreen', 'legend', 'home', 'basemap'] },
                details: { items: [] }
            }
        }
    }

    let options = {
        loadDefaultFixtures: false,
        loadDefaultEvents: true
    };

    rInstance = new RAMP.Instance(document.getElementById('app'), config, options);
    rInstance.fixture.addDefaultFixtures(['mapnav', 'legend', 'appbar', 'grid', 'details']);
}
