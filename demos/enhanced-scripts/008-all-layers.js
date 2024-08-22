/*
Test 08: All Layers
- Designed to test the various aspects of the mini-icons, including the svg 
  icons for each
*/

const runPreTest = (config, options, utils) => {
    // Do any config setup & options setup here, if any
    const wfsLayer = {
        id: 'WFSLayer',
        layerType: 'ogc-wfs',
        url: 'https://api.weather.gc.ca//collections/ahccd-trends/items?measurement_type__type_mesure=total_precip&period__periode=Ann&offset=0&limit=150&province__province=on',
        xyInAttribs: true,
        colour: '#55ffff',
        fixtures: {
            details: {
                template: 'WFSLayer-Custom'
            }
        },
        fieldMetadata: {
            fieldInfo: [
                { name: 'station_name__nom_station' },
                { name: 'station_id__id_station' },
                { name: 'province__province' },
                { name: 'identifier__identifiant' },
                { name: 'year_range__annees' }
            ],
            exclusiveFields: false,
            enforceOrder: true
        }
    };

    const polyFeatureLayer = {
        id: 'TerritoriesPoly',
        layerType: 'esri-feature',
        url: 'https://section917.canadacentral.cloudapp.azure.com/arcgis/rest/services/TestData/SupportData/MapServer/3',
        permanentFilteredQuery: `Name = 'Nunavut' OR Name = 'Northwest Territories' OR Name = 'Yukon Territory'`
    };

    const lineFeatureLayer = {
        id: 'BasinLine',
        layerType: 'esri-feature',
        url: 'https://section917.canadacentral.cloudapp.azure.com/arcgis/rest/services/CESI/MpServer/2',
        permanentFilteredQuery: `OBJECTID > 80`
    };

    const milCesiLayer = {
        id: 'CESI',
        layerType: 'esri-map-image',
        url: 'https://section917.canadacentral.cloudapp.azure.com/arcgis/rest/services/CESI/MapServer/',
        sublayers: [{ index: 36 }, { index: 37 }, { index: 38 }]
    };

    const legendRootEn = [
        {
            infoType: 'title',
            name: 'Vector Layers',
            children: [
                {
                    layerId: 'WFSLayer'
                },
                {
                    layerId: 'TerritoriesPoly',
                    name: 'Feature Layer 1 (polygons)'
                },
                {
                    layerId: 'BasinLine',
                    name: 'Broken Feature Layer (line)',
                    coverIcon:
                        'https://cdn-icons-png.flaticon.com/512/136/136893.png?w=826&t=st=1687287352~exp=1687287952~hmac=10dfcb5cc9522c65066d495e3f17973ecf30dc948bdbdfcb073c647b3b616365'
                }
            ]
        },
        {
            layerId: 'CESI',
            name: 'CESI MIL 1 (Parent)',
            sublayerIndex: 36,
            children: [
                {
                    layerId: 'CESI',
                    name: 'CESI MIL 2',
                    sublayerIndex: 37
                },
                {
                    layerId: 'CESI',
                    name: 'CESI MIL 3',
                    sublayerIndex: 38
                }
            ]
        },
        {
            infoType: 'title',
            content: 'Open me for a surprise!',
            expanded: false,
            children: [
                {
                    infoType: 'text',
                    content: 'Keep opening!',
                    expanded: false,
                    children: [
                        {
                            name: 'Custom Info Section',
                            infoType: 'template',
                            content: `<div>
                                    <img src="https://i.imgur.com/0IcfK7s.gif" />
                                    </div>`
                        }
                    ]
                }
            ]
        }
    ];

    const legendRootFr = [
        {
            infoType: 'title',
            name: 'Couches Vectorielles',
            children: [
                {
                    layerId: 'WFSLayer'
                },
                {
                    layerId: 'TerritoriesPoly',
                    name: 'Feature Layer 1 (poly)'
                },
                {
                    layerId: 'BasinLine',
                    name: 'Feature Layer 2 (line)',
                    coverIcon:
                        'https://cdn-icons-png.flaticon.com/512/136/136893.png?w=826&t=st=1687287352~exp=1687287952~hmac=10dfcb5cc9522c65066d495e3f17973ecf30dc948bdbdfcb073c647b3b616365'
                }
            ]
        },
        {
            layerId: 'CESI',
            name: 'Rejets de cadmium',
            sublayerIndex: 36,
            children: [
                {
                    layerId: 'CESI',
                    name: 'Rejets de mercure',
                    sublayerIndex: 37
                },
                {
                    layerId: 'CESI',
                    name: 'Rejets de plomb',
                    sublayerIndex: 38
                }
            ]
        },
        {
            infoType: 'title',
            content: 'Ouvrez-moi pour une surprise!',
            expanded: false,
            children: [
                {
                    infoType: 'text',
                    content: 'Continuer à ouvrir!',
                    expanded: false,
                    children: [
                        {
                            name: 'Custom Info Section',
                            infoType: 'template',
                            content: `<div>
                                    <img src="https://i.imgur.com/0IcfK7s.gif" />
                                    </div>`
                        }
                    ]
                }
            ]
        }
    ];

    const customJson = {
        id: 'dataJson',
        name: 'Compact JSON',
        layerType: 'data-json',
        rawData:
            '{"fields":["Resto Name","Resto Type","Stars"],"data":[["Grouse Burgers","Burger",5],["Greasy Patties","Burger",2],["Big Dirty Slice","Pizza",3]]}',
        nameField: 'Resto-Name',
        fixtures: {
            details: {
                template: 'Tasty-Template'
            }
        }
    };

    const esriTable = {
        id: 'table',
        name: 'ESRI Table Layer',
        layerType: 'data-esri-table',
        url: 'https://section917.canadacentral.cloudapp.azure.com/arcgis/rest/services/TestData/Oilsands/MapServer/5'
    };

    const csv = {
        id: 'CSV',
        name: 'CSV',
        layerType: 'file-csv',
        url: '../file-layers/csv.csv',
        latField: 'Y',
        longField: 'X',
        colour: '#FF0000' // So that its not the same colour as the shape one
    };
    const geoJson = {
        id: 'GeoJson',
        name: 'GeoJson',
        layerType: 'file-geojson',
        url: '../file-layers/geojson.json',
        caching: true
    };
    const shape = {
        id: 'Shape',
        name: 'Shape',
        layerType: 'file-shape',
        url: '../file-layers/shape.zip'
    };

    const ecoGeoMIL = {
        id: 'EcoGeo',
        layerType: 'esri-map-image',
        url: 'https://section917.canadacentral.cloudapp.azure.com/arcgis/rest/services/TestData/EcoAction/MapServer/',
        sublayers: [{ index: 6 }, { index: 8 }]
    };

    const nature = {
        id: 'Nature',
        layerType: 'esri-feature',
        name: 'Feature Layer 1',
        url: 'https://section917.canadacentral.cloudapp.azure.com/arcgis/rest/services/TestData/EcoAction/MapServer/6'
    };

    const water = {
        id: 'Water',
        name: 'Feature Layer 2',
        layerType: 'esri-feature',
        url: 'https://section917.canadacentral.cloudapp.azure.com/arcgis/rest/services/TestData/EcoAction/MapServer/8'
    };
    const osm = {
        id: 'userOSM',
        layerType: 'osm-tile',
        name: 'OSM Layer'
    };

    // add layers (same across langs)
    utils.addLayer(wfsLayer);
    utils.addLayer(polyFeatureLayer);
    utils.addLayer(lineFeatureLayer);
    utils.addLayer(milCesiLayer);
    utils.addLayerLegend(customJson);
    utils.addLayerLegend(esriTable);
    utils.addLayerLegend(csv);
    utils.addLayerLegend(geoJson);
    utils.addLayerLegend(shape);
    utils.addLayer(ecoGeoMIL);
    utils.addLayerLegend(nature);
    utils.addLayerLegend(water);
    utils.addLayerLegend(osm);

    utils.addLegend({
        layerId: 'EcoGeo',
        name: 'MIL Sublayer 1',
        sublayerIndex: 6
    });
    utils.addLegend({
        layerId: 'EcoGeo',
        name: 'MIL Sublayer 2',
        sublayerIndex: 8
    });

    // add legend blocks to appropriate langs
    [
        ['en', legendRootEn],
        ['fr', legendRootFr]
    ].forEach(legendNugget => {
        // go through every root legend item to add
        legendNugget[1].forEach(rootLegendItem => {
            // add to appropriate lang config
            utils.addLegendLang(rootLegendItem, legendNugget[0]);
        });
    });

    return { config, options };
};

const runPostTest = (instance, utils) => {
    // Do any test steps on the instantiated instnace, if any

    // template with our friend Rick.
    instance.$element.component('WFSLayer-Custom', {
        props: ['identifyData'],
        template: `
            <div>
                <span>This is an example template that contains an image.</span>
                <img src="https://i.imgur.com/WtY0tdC.gif" />
            </div>
        `
    });

    // add areas of interest fixture
    instance.fixture.add('areas-of-interest');
};

export { runPreTest, runPostTest };
