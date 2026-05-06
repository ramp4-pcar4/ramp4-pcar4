# Draw Fixture API

The Draw fixture API can be accessed through the RAMP instance once the `draw` fixture has loaded:

```js
await rInstance.fixture.isLoaded('draw');
const drawApi = rInstance.fixture.get('draw');
```

## Import Shapes

Use `importShapes(source)` to add one or more shapes to the draw graphics layer. The source can be either a URL that returns JSON, a draw-shape export object, a single shape record, or an array of shape records.

```js
await rInstance.fixture.isLoaded('draw');

await rInstance.fixture.get('draw').importShapes('/draw-shapes/sample-13-draw-shapes.json');
```

A page script can import shapes during startup by waiting for the fixture and then running the import when the map is created:

```js
const importStartupShapes = async rInstance => {
    await rInstance.fixture.isLoaded('draw');

    const addShapes = () => rInstance.fixture.get('draw').importShapes('/draw-shapes/sample-13-draw-shapes.json');

    if (rInstance.geo.map.created) {
        await addShapes();
        return;
    }

    rInstance.event.once('map/created', () => {
        addShapes().catch(error => console.warn('Unable to import draw shapes.', error));
    });
};
```

The JSON format is the same format produced by the Draw fixture export buttons:

```js
await rInstance.fixture.get('draw').importShapes({
    fileType: 'ramp4-draw-shapes',
    version: 1,
    exportedAt: new Date().toISOString(),
    shapes: [
        {
            type: 'polygon',
            geometry: {
                spatialReference: { wkid: 3978 },
                rings: [
                    [
                        [-100000, 500000],
                        [100000, 500000],
                        [100000, 300000],
                        [-100000, 300000],
                        [-100000, 500000]
                    ]
                ]
            },
            settings: {
                drawStyle: {
                    fillColor: '#0099db',
                    borderColor: '#006895',
                    bufferColor: '#75c8ec',
                    opacity: 35,
                    borderColorManual: false,
                    bufferColorManual: false
                },
                drawBuffer: {
                    distance: 0,
                    unit: 'kilometers'
                },
                drawIdentifyBufferMode: 'shape-buffer',
                drawMapLabels: {
                    areaLabel: false,
                    segmentLength: false,
                    vertexNumbers: false
                }
            }
        }
    ]
});
```

`importShapes` returns a promise that resolves to the number of valid shapes queued for import. It rejects if the URL cannot be loaded or the payload is not a valid draw-shape payload.
