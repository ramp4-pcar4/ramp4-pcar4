/*
Test 10: Identify Priority
- Adds layers with and without identify priorities
- Layer polygons overlap to give a number of test cases
*/

const runPreTest = (config, options, utils) => {
    // Add layers
    const priority = {
        id: 'priority',
        nameField: 'thing_name',
        name: 'High Priority',
        layerType: 'file-geojson',
        colour: '#40d91a',
        state: { opacity: 0.7 },
        url: '../file-layers/greedy-priority.json',
        fixtures: {
            details: {
                priority: 0
            }
        }
    };

    const neutralA = {
        id: 'neutralA',
        nameField: 'thing_name',
        name: 'Neutral Priority Purple',
        layerType: 'file-geojson',
        colour: '#752fd6',
        state: { opacity: 0.7 },
        url: '../file-layers/greedy-neutral-a.json',
        fixtures: {
            details: {
                priority: 50
            }
        }
    };

    const neutralZ = {
        id: 'neutralZ',
        nameField: 'thing_name',
        name: 'Neutral Priority Blue',
        layerType: 'file-geojson',
        colour: '#1e7cd4',
        state: { opacity: 0.7 },
        url: '../file-layers/greedy-neutral-z.json'
    };

    const low = {
        id: 'low',
        nameField: 'thing_name',
        name: 'Low Priority',
        layerType: 'file-geojson',
        colour: '#db1241',
        state: { opacity: 0.7 },
        url: '../file-layers/greedy-low.json',
        fixtures: {
            details: {
                priority: 100
            }
        }
    };

    utils.addLayerLegend(neutralA);
    utils.addLayerLegend(priority);
    utils.addLayerLegend(low);
    utils.addLayerLegend(neutralZ);

    return { config, options };
};

const runPostTest = (instance, utils) => {
    // Nothing for this test
};

export { runPostTest, runPreTest };
