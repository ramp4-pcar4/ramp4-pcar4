/*
Test 02: Custom Renderers
- adds 9 layers: [Feature, WFS, MIL] x [Simple, Unique, Class Breaks]
- adds custom legend (copied from Classic Sample 7)

QA TEST SCRIPT. Don't modify without chatting with QA first.
 */

const runPreTest = (config, options, utils) => {
    const simpleFeat = {
        id: 'FeatureSimple',
        layerType: 'esri-feature',
        url: 'https://maps-cartes.qa.ec.gc.ca/arcgis/rest/services/TestData/EcoAction/MapServer/9',
        customRenderer: {
            type: 'simple',
            label: 'Super Simple',
            symbol: {
                type: 'esriSMS',
                style: 'esriSMSCross',
                color: [255, 225, 0, 255],
                size: 8,
                angle: 0,
                xoffset: 0,
                yoffset: 0,
                outline: {
                    color: [255, 225, 0, 255],
                    width: 4
                }
            }
        },
        state: {
            opacity: 1,
            visibility: false
        }
    };

    const uniqueFeat = {
        id: 'FeatureUniqueValue',
        layerType: 'esri-feature',
        url: 'https://maps-cartes.qa.ec.gc.ca/arcgis/rest/services/TestData/EcoAction/MapServer/9',
        customRenderer: {
            type: 'uniqueValue',
            field1: 'Category',
            // defaultSymbol: {},
            // all possible values must be covered or use defaultSymbol
            uniqueValueInfos: [
                {
                    value: 'Clean Air',
                    label: 'The Cleanest Airs',
                    symbol: {
                        type: 'esriSMS',
                        style: 'esriSMSDiamond',
                        color: [225, 152, 234, 255],
                        size: 12,
                        angle: 0,
                        xoffset: 0,
                        yoffset: 0,
                        outline: {
                            color: [255, 255, 255, 255],
                            width: 0.5
                        }
                    }
                }
            ]
        },
        state: {
            opacity: 1,
            visibility: false
        }
    };

    const breaksFeat = {
        id: 'FeatureClassBreaks',
        layerType: 'esri-feature',
        url: 'https://maps-cartes.qa.ec.gc.ca/arcgis/rest/services/TestData/EcoAction/MapServer/9',
        customRenderer: {
            type: 'classBreaks',
            field: 'OBJECTID',
            // all possible values must be covered
            minValue: 0,
            classBreakInfos: [
                {
                    classMaxValue: 100,
                    symbol: {
                        type: 'esriSMS',
                        style: 'esriSMSCircle',
                        color: [122, 250, 255, 255],
                        size: 10,
                        outline: {
                            color: [0, 0, 0, 255],
                            width: 1
                        }
                    },
                    label: 'OID 0 to 100'
                },
                {
                    classMaxValue: 300,
                    symbol: {
                        type: 'esriSMS',
                        style: 'esriSMSCircle',
                        color: [55, 169, 255, 255],
                        size: 14,
                        outline: {
                            color: [0, 0, 0, 255],
                            width: 1
                        }
                    },
                    label: 'OID 100 to 300'
                },
                {
                    classMaxValue: 1000,
                    symbol: {
                        type: 'esriSMS',
                        style: 'esriSMSCircle',
                        color: [0, 27, 209, 255],
                        size: 18,
                        outline: {
                            color: [0, 0, 0, 255],
                            width: 1
                        }
                    },
                    label: 'OID 300 to 1000'
                }
            ]
        },
        state: {
            opacity: 1,
            visibility: true
        }
    };

    const simpleWfs = {
        id: 'WFSSimple',
        layerType: 'file-geojson',
        url: '../file-layers/fake-wfs.json',
        xyInAttribs: true,
        customRenderer: {
            type: 'simple',
            label: 'Ultra Simple',
            symbol: {
                type: 'esriSMS',
                style: 'esriSMSTriangle',
                color: [61, 255, 166, 255],
                size: 8,
                angle: 0,
                xoffset: 0,
                yoffset: 0,
                outline: {
                    color: [255, 255, 255, 255],
                    width: 0.5
                }
            }
        },
        state: {
            opacity: 1,
            visibility: false
        }
    };
    const uniqueWfs = {
        id: 'WFSUniqueValue',
        layerType: 'file-geojson',
        url: '../file-layers/fake-wfs.json',
        xyInAttribs: true,
        customRenderer: {
            type: 'uniqueValue',
            field1: 'joined__rejoint',
            defaultSymbol: {
                type: 'esriSMS',
                style: 'esriSMSCircle',
                color: [255, 255, 255, 255],
                size: 8,
                angle: 0,
                xoffset: 0,
                yoffset: 0,
                outline: {
                    color: [0, 0, 0, 255],
                    width: 2
                }
            },
            defaultLabel: 'Other',
            // all possible values must be covered or use defaultSymbol
            uniqueValueInfos: [
                {
                    value: 0,
                    symbol: {
                        type: 'esriSMS',
                        style: 'esriSMSDiamond',
                        color: [142, 0, 0, 255],
                        size: 10,
                        angle: 20,
                        xoffset: 0,
                        yoffset: 0,
                        outline: {
                            color: [0, 0, 0, 255],
                            width: 0.5
                        }
                    },
                    label: 'Not Joined'
                },
                {
                    value: 1,
                    symbol: {
                        type: 'esriSMS',
                        style: 'esriSMSDiamond',
                        color: [0, 142, 77, 255],
                        size: 10,
                        angle: 65,
                        xoffset: 0,
                        yoffset: 0,
                        outline: {
                            color: [255, 255, 255, 255],
                            width: 0.5
                        }
                    },
                    label: 'Joined'
                }
            ]
        },
        state: {
            opacity: 1,
            visibility: true
        }
    };

    const breaksWfs = {
        id: 'WFSClassBreaks',
        layerType: 'file-geojson',
        url: '../file-layers/fake-wfs.json',
        xyInAttribs: true,
        customRenderer: {
            type: 'classBreaks',
            field: 'OBJECTID',
            defaultSymbol: {
                type: 'esriSMS',
                style: 'esriSMSCross',
                color: [0, 0, 0, 255],
                size: 8,
                angle: 45,
                xoffset: 0,
                yoffset: 0,
                outline: {
                    color: [0, 0, 0, 255],
                    width: 4
                }
            },
            defaultLabel: 'Other',
            // all possible values must be covered
            minValue: 0,
            classBreakInfos: [
                {
                    classMaxValue: 50,
                    symbol: {
                        type: 'esriSMS',
                        style: 'esriSMSCross',
                        color: [255, 190, 124, 255],
                        size: 8,
                        angle: 45,
                        xoffset: 0,
                        yoffset: 0,
                        outline: {
                            color: [255, 190, 124, 255],
                            width: 4
                        }
                    },
                    label: 'OID 0 to 50'
                },
                {
                    classMaxValue: 100,
                    symbol: {
                        type: 'esriSMS',
                        style: 'esriSMSCross',
                        color: [190, 124, 255, 255],
                        size: 8,
                        angle: 45,
                        xoffset: 0,
                        yoffset: 0,
                        outline: {
                            color: [190, 124, 255, 255],
                            width: 4
                        }
                    },
                    label: 'OID 50 to 100'
                }
            ]
        },
        state: {
            opacity: 1,
            visibility: false
        }
    };

    const simpleMil = {
        id: 'MILSimple',
        layerType: 'esri-map-image',
        url: 'https://maps-cartes.qa.ec.gc.ca/arcgis/rest/services/CESI/MapServer',
        sublayers: [
            {
                index: 18,
                state: {
                    opacity: 0.7,
                    visibility: true
                },
                permanentFilteredQuery: 'OBJECTID < 30',
                customRenderer: {
                    type: 'simple',
                    label: 'Extra Simple',
                    symbol: {
                        type: 'esriSMS',
                        style: 'esriSMSCircle',
                        color: [169, 255, 112, 255],
                        size: 6,
                        outline: {
                            color: [71, 0, 24, 255],
                            width: 0.4
                        }
                    }
                }
            },
            {
                index: 1,
                state: {
                    opacity: 0.7,
                    visibility: true
                },
                permanentFilteredQuery: 'OBJECTID < 30',
                customRenderer: {
                    type: 'simple',
                    label: 'Very Simple',
                    symbol: {
                        type: 'esriSMS',
                        style: 'esriSMSCircle',
                        color: [127, 112, 255, 255],
                        size: 6,
                        outline: {
                            color: [71, 0, 24, 255],
                            width: 0.4
                        }
                    }
                }
            }
        ]
    };

    const uniqueMil = {
        id: 'MILUniqueValue',
        layerType: 'esri-map-image',
        url: 'https://maps-cartes.qa.ec.gc.ca/arcgis/rest/services/CESI/MapServer',
        sublayers: [
            {
                index: 18,
                state: {
                    opacity: 0.8,
                    visibility: false
                },
                permanentFilteredQuery: 'OBJECTID < 30',
                customRenderer: {
                    type: 'uniqueValue',
                    field1: 'GridColumn3', // aliased to Province
                    defaultSymbol: {
                        type: 'esriSMS',
                        style: 'esriSMSTriangle',
                        color: [255, 128, 179, 255],
                        size: 8,
                        outline: {
                            color: [71, 0, 24, 255],
                            width: 1
                        }
                    },
                    defaultLabel: 'Other',
                    // all possible values must be covered or use defaultSymbol
                    uniqueValueInfos: [
                        {
                            value: 'Saskatchewan',
                            symbol: {
                                type: 'esriSMS',
                                style: 'esriSMSTriangle',
                                color: [255, 102, 51, 255],
                                size: 12,
                                angle: 180,
                                outline: {
                                    color: [71, 0, 24, 255],
                                    width: 1
                                }
                            },
                            label: 'Saskatchewan'
                        },
                        {
                            value: 'Quebec',
                            symbol: {
                                type: 'esriSMS',
                                style: 'esriSMSTriangle',
                                color: [255, 234, 0, 255],
                                size: 12,
                                angle: 180,
                                outline: {
                                    color: [71, 0, 24, 255],
                                    width: 1
                                }
                            },
                            label: 'Quebec'
                        }
                    ]
                }
            }
        ]
    };

    const breaksMil = {
        id: 'MILClassBreaks',
        layerType: 'esri-map-image',
        url: 'https://maps-cartes.qa.ec.gc.ca/arcgis/rest/services/CESI/MapServer',
        sublayers: [
            {
                index: 18,
                state: {
                    opacity: 0.7,
                    visibility: false
                },
                permanentFilteredQuery: 'OBJECTID < 30',
                customRenderer: {
                    type: 'classBreaks',
                    field: 'Longitude',
                    defaultSymbol: {
                        type: 'esriSMS',
                        style: 'esriSMSSquare',
                        color: [0, 0, 0, 255],
                        size: 6,
                        outline: {
                            color: [255, 255, 255, 255],
                            width: 1
                        }
                    },
                    defaultLabel: 'Other',
                    // all possible values must be covered
                    minValue: -130,
                    classBreakInfos: [
                        {
                            classMaxValue: -85,
                            symbol: {
                                type: 'esriSMS',
                                style: 'esriSMSSquare',
                                color: [255, 61, 126, 255],
                                size: 6,
                                outline: {
                                    color: [0, 0, 0, 255],
                                    width: 1
                                }
                            },
                            label: 'Longitude -130 to -85'
                        },
                        {
                            classMaxValue: -40,
                            symbol: {
                                type: 'esriSMS',
                                style: 'esriSMSSquare',
                                color: [234, 77, 255, 255],
                                size: 6,
                                outline: {
                                    color: [0, 0, 0, 255],
                                    width: 1
                                }
                            },
                            label: 'Longitude -85 to -40'
                        }
                    ]
                }
            }
        ]
    };

    const layerBoat = [
        simpleFeat,
        uniqueFeat,
        breaksFeat,
        simpleWfs,
        uniqueWfs,
        breaksWfs,
        simpleMil,
        uniqueMil,
        breaksMil
    ];
    layerBoat.forEach(l => utils.addLayer(l));

    const legendChildren = [
        {
            name: 'Feature Layer',
            exclusive: true,
            children: [
                {
                    layerId: 'FeatureSimple',
                    name: 'Simple'
                },
                {
                    layerId: 'FeatureUniqueValue',
                    name: 'Unique Value'
                },
                {
                    layerId: 'FeatureClassBreaks',
                    name: 'Class Breaks'
                }
            ]
        },
        {
            name: '(fake) File Layer',
            exclusive: true,
            children: [
                {
                    layerId: 'WFSSimple',
                    name: 'Simple'
                },
                {
                    layerId: 'WFSUniqueValue',
                    name: 'Unique Value'
                },
                {
                    layerId: 'WFSClassBreaks',
                    name: 'Class Breaks'
                }
            ]
        },
        {
            name: 'Map Image Layer',
            exclusive: true,
            children: [
                {
                    name: 'Simple',
                    children: [
                        {
                            layerId: 'MILSimple',
                            name: 'Sulfur Oxide Emissions',
                            sublayerIndex: 18
                        },
                        {
                            layerId: 'MILSimple',
                            name: 'Water Quantity',
                            sublayerIndex: 1
                        }
                    ]
                },
                {
                    layerId: 'MILUniqueValue',
                    name: 'Unique Value',
                    sublayerIndex: 18
                },
                {
                    layerId: 'MILClassBreaks',
                    name: 'Class Breaks',
                    sublayerIndex: 18
                }
            ]
        }
    ];

    legendChildren.forEach(l => utils.addLegend(l));

    return { config, options };
};

const runPostTest = () => {
    // Not used in this test
};

export { runPreTest, runPostTest };
