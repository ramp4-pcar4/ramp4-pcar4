/*
Test 07: Classic Main Sample
- Replicates the main sample from the classic test page
- Removes some of the wild stuff ??
- WFS layer with custom details template, ordered fields
- Poly feature layer with permanent filter
- Line feature layer with permanent filter, custom cover icon
- Three child MIL layer (cesi)
- Custom legend structure
  - Group that is also layer-bound
  - Info sections
- areas of interest fixture

 */

const runPreTest = (config, options, utils) => {
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
        url: 'https://section917.canadacentral.cloudapp.azure.com/arcgis/rest/services/CESI/MapServer/2',
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
                    name: 'TerritoriesPoly'
                },
                {
                    layerId: 'BasinLine',
                    name: 'BasinLine',
                    coverIcon:
                        'https://cdn-icons-png.flaticon.com/512/136/136893.png?w=826&t=st=1687287352~exp=1687287952~hmac=10dfcb5cc9522c65066d495e3f17973ecf30dc948bdbdfcb073c647b3b616365'
                }
            ]
        },
        {
            layerId: 'CESI',
            name: 'Releases of cadmium',
            sublayerIndex: 36,
            children: [
                {
                    layerId: 'CESI',
                    name: 'Releases of mercury',
                    sublayerIndex: 37
                },
                {
                    layerId: 'CESI',
                    name: 'Releases of lead',
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
                    name: 'TerritoriesPoly'
                },
                {
                    layerId: 'BasinLine',
                    name: 'BasinLine',
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

    // add layers (same across langs)
    utils.addLayer(wfsLayer);
    utils.addLayer(polyFeatureLayer);
    utils.addLayer(lineFeatureLayer);
    utils.addLayer(milCesiLayer);

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

export { runPostTest, runPreTest };
