/*
Test 15: Pin Drop
- Adds the pin drop fixture to the sample.
 */

const runPreTest = (config, options, utils) => {
    const happy = {
        id: 'Happy',
        name: 'Pin Face',
        layerType: 'file-geojson',
        url: '../file-layers/geojson.json',
        colour: '#f52ac9',
        nameField: 'name'
    };

    utils.addLayerLegend(happy);

    config.startingFixtures.push('pindrop');

    const pinConfig = {
        linkIdentify: true,
        linkDetails: true
    };
    config.configs.en.fixtures.pindrop = structuredClone(pinConfig);
    config.configs.fr.fixtures.pindrop = structuredClone(pinConfig);

    return { config, options };
};

const runPostTest = () => {
    // Not used in this test
};

export { runPreTest, runPostTest };
