/*
Test 11: Point Clusterers
- Loads some file layers. Slaps a clusterer on one
 */

const runPreTest = (config, options, utils) => {
    const geoJson = {
        id: 'GeoJson',
        name: 'Classic Happy',
        layerType: 'file-geojson',
        nameField: 'name',
        url: '../file-layers/geojson.json',
        caching: true
    };

    const cluster = {
        id: 'csvCluster',
        name: 'CSV Cluster',
        layerType: 'file-csv',
        url: '../file-layers/point-cluster.csv',
        latField: 'Y',
        longField: 'X',
        caching: true,
        nameArcade: `'Fun Point ' + Round($attr.X,2) + ' , ' + Round($attr.Y,2) `,
        geomClustering: {
            type: 'cluster', // type of feature reduction - theres clustering and binning
            clusterMaxSize: '60px', // symbol size of the largest cluster in points (or pixels). should also consider modifying clusterRadius if this is modified
            clusterMinSize: '24px', // symbol size of the smallest cluster in points (or pixels)
            clusterRadius: '100px', // radius in points (or pixels) of the area where multiple points will be grouped and visualized as a single cluster
            labelingInfo: [
                {
                    deconflictionStrategy: 'none',
                    labelExpressionInfo: {
                        expression: "Text($feature.cluster_count, '#,###')"
                    },
                    symbol: {
                        type: 'text',
                        color: '#fff52b',
                        font: {
                            weight: 'bold',
                            family: 'Noto Sans',
                            size: '12px'
                        }
                    },
                    labelPlacement: 'center-center'
                }
            ]
        }
    };

    utils.addLayerLegend(geoJson);
    utils.addLayerLegend(cluster);

    return { config, options };
};

const runPostTest = () => {
    // Not used in this test
};

export { runPreTest, runPostTest };
