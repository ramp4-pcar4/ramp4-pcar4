/*
Test 13: Drawing Tools
- Adds a draw tool to the map
 */

const sampleDrawShapesUrl = '../draw-shapes/sample-13-draw-shapes.json';

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

    config.configs.en.fixtures.mapnav.items.push('draw');
    config.configs.fr.fixtures.mapnav.items.push('draw');
    return { config, options };
};

const runPostTest = async instance => {
    await instance.fixture.isLoaded('draw');
    const drawApi = instance.fixture.get('draw');

    const importSampleShapes = () => {
        drawApi
            .importShapes(sampleDrawShapesUrl)
            .catch(error => console.warn('Unable to import sample draw shapes.', error));
    };

    // Simple Draw API export examples for map authors. Shape IDs are shown in the Shape Inspector Edit tab.
    window.drawApi = drawApi;
    window.drawShapeIds = () => drawApi.getShapeIds();
    window.exportDrawShapesJson = selection => drawApi.exportShapes(selection);
    window.downloadDrawShapes = selection => drawApi.downloadShapes(selection);
    window.downloadFirstDrawShape = () => {
        const firstShapeId = drawApi.getShapeIds()[0];
        return firstShapeId ? drawApi.downloadShapes({ ids: firstShapeId, fileName: 'first-draw-shape.json' }) : false;
    };

    if (instance.geo.map.created) {
        importSampleShapes();
        return;
    }

    instance.event.once('map/created', importSampleShapes);
};

export { runPreTest, runPostTest };
