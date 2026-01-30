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
        nameField: 'Temperature change trend since 1948 (°C)'
    };

    utils.addLayerLegend(happy);

    return { config, options };
};

const runPostTest = () => {
    // Not used in this test
};

export { runPreTest, runPostTest };
