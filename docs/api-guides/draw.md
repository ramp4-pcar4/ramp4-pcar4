# Draw Fixture API

The Draw fixture API can be accessed through the RAMP instance once the `draw` fixture has loaded:

```js
await rInstance.fixture.isLoaded('draw');
const drawApi = rInstance.fixture.get('draw');
```

## Export Shapes

Use `exportShapes(selection)` to get draw shapes as a JSON object without starting a download. If no selection is supplied, all draw shapes are exported.

Each shape gets a short ID such as `R1000` or `P1000`. The ID prefix is based on the shape type: `T` point, `P` polyline, `G` polygon, `C` circle, and `R` rectangle. The ID is shown in the Shape Inspector on the Edit tab, is stored on each exported shape record as `id`, and is the value used to export specific shapes through the API.

```js
await rInstance.fixture.isLoaded('draw');

const drawApi = rInstance.fixture.get('draw');
const allShapesJson = drawApi.exportShapes();
```

To export specific shapes, pass one draw shape ID or an array of draw shape IDs. Shape IDs are also available on the draw store records:

```js
const shapeIds = drawApi.store.graphics.map(shape => shape.id);

const firstShapeJson = drawApi.exportShapes(shapeIds[0]);
const selectedShapesJson = drawApi.exportShapes(shapeIds.slice(0, 2));
```

Use `downloadShapes(selection)` to start a draw-shape JSON file download:

```js
drawApi.downloadShapes();
drawApi.downloadShapes(shapeIds[0]);
drawApi.downloadShapes({ ids: shapeIds.slice(0, 2), fileName: 'selected-draw-shapes.json' });
```

`exportShapes` returns a draw-shape export object. `downloadShapes` returns `true` when a file download is started, and `false` when there are no matching shapes to export.

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

The JSON format is the same format produced by `exportShapes`, `downloadShapes`, and the Draw fixture export buttons:

```js
await rInstance.fixture.get('draw').importShapes({
    fileType: 'ramp4-draw-shapes',
    version: 1,
    exportedAt: new Date().toISOString(),
    shapes: [
        {
            id: 'G1000',
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
                    segmentLetters: false,
                    vertexNumbers: false
                }
            }
        }
    ]
});
```

`importShapes` returns a promise that resolves to the number of valid shapes queued for import. It rejects if the URL cannot be loaded or the payload is not a valid draw-shape payload.
