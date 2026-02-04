/*
Test 01: Happy
- Loads Happy.json layer in the legend. Very basic. Test 1 for fast loadup.
 */

const runPreTest = (config, options, utils) => {
    const happy = {
        id: 'Happy',
        name: 'Happy Tester',
        layerType: 'file-geojson',
        url: '../file-layers/geojson.json',
        colour: '#4ef542',
        nameField: 'name'
    };

    utils.addLayerLegend(happy);

    return { config, options };
};

const runPostTest = (instance, utils) => {
    // Not used in this test
};

export { runPostTest, runPreTest };
