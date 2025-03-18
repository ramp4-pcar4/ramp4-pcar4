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

    config.startingFixtures.push('draw');

    const drawConfig = {
        types: [
            { type: 'point' },
            { type: 'polyline' },
            { type: 'polygon' },
            { type: 'circle', enabled: false },
            { type: 'rectangle', options: {} }
        ]
    };
    config.configs.en.fixtures.draw = drawConfig;
    config.configs.fr.fixtures.draw = drawConfig;

    return { config, options };
};

const runPostTest = () => {
    // Not used in this test
};

export { runPreTest, runPostTest };
