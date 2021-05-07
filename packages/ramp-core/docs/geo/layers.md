# Geo Layer Classes

In this doc, `Layer` refers to any class that implements the `LayerBase` interface.

## Conceptual Fun - Physical vs Logical

Layers can be viewed in two different ways due to how they are constructed.

### Physical Layer

This represents one slice in the map stack as it is drawn on the page. The slice can be a collection of vector geometries, or an image (also known as a raster). The image can be composed of pictures (e.g. a satellite image) or the rasterization of vector geometries.

The `Layer` objects maintain a one-to-one relationship with a physical layer in the map.

### Logical Layer

These represent a logical set of geographic data. The term "Feature Class" is often used to describe logical sets of vector data and their attributes. We also include other types of data in our definition, such as a set of images. Generally, one would expect items within a logical layer to share common characteristics, like geometry type, attribute field schema, projection, visible scale levels, etc.

While most physical layers have one logical layer, some can have multiple logical layers. For example, an ESRI Map Image Layer (formerly known as a Dynamic Layer) can be composed of many feature classes from the server, and are all rendered into a single image to be placed in the map stack.

### Layer Tree, UIDs, and Fancy Parameters

Every `Layer` object has a method `.getLayerTree()`. This returns a heirarchical object that describes the logical layout of the layer.

Most layers have one single logical component and a basic tree. The structure is a bit redundant, but keeps things aligned and predictable.

```json
{
    layerIdx: -1,
    name: "Fancy Layer",
    children: [
        {
            layerIdx: 4,
            name: "Fancy Layer",
            children: [],
            isLayer: true,
            uid: "432rubbishasdfsdfad"
        }
    ],
    isLayer: false,
    uid: "ABCDskipafewYbecauseihavetogo4aP&Z4U"
}
```

A Map Image Layer composed of multiple sources could have a more structured result.

```json
{
    layerIdx: -1,
    name: "Restaurants",
    children: [
        {
            layerIdx: 4,
            name: "Fine Dining",
            children: [],
            isLayer: true,
            uid: "432rubbishasdfsdfad"
        },
        {
            layerIdx: 6,
            name: "Fast Food",
            children: [
                {
                    layerIdx: 7,
                    name: "Burger Joints",
                    children: [],
                    isLayer: true,
                    uid: "765rubbishasdfsdfad"
                },
                {
                    layerIdx: 9,
                    name: "Pizza Parlours",
                    children: [],
                    isLayer: true,
                    uid: "988rubbishasdfsdfad"
                }
            ],
            isLayer: false,
            uid: ""
        }
    ],
    isLayer: false,
    uid: "ABCDskipafewYbecauseihavetogo4aP&Z4U"
}
```

There are two ways to reference parts of the layer structure.

`uid`s are used to uniquely identify both physical and logical layers in `Layer` objects. Note that sub-folder structures for Map Image Layers do not have a `uid`.

`layerIdx` indicates the index on the server for the item. We use `-1` as a placeholder index value to denote the physical layer root. For layers that are not tied to an ArcGIS Server, we use `0` as the index value.

Most methods on the `Layer` objects support an optional parameter to target the logical layer to use in the method. This parameter can be the `layerIdx` (integer), the `uid` (string), or can be left blank in most cases.

If a layer is not a Map Image Layer, leaving the parameter blank will cause the layer to use the one and only logical layer. For a Map Image Layer, the blank parameter will target the layer's root (e.g. to set the visibility of the entire layer image instead of adjusting one of the component logical sublayers). If the method makes no sense on the layer root (e.g. asking for a record count), the first sublayer will be used. TODO THIS IS CURRENTLY IN DESIGN DEBATE. Using the first helps avoid crashing errors, but can also give an unexpected result without it being obvious. Switching to a hard error will force stricter param use, but might cause more runtime fails.

Examples

```js
// using the first simple tree sample
fancyLayer.getName(); // "Fancy Layer"
fancyLayer.getName(4); // "Fancy Layer"
fancyLayer.getName('ABCDskipafewYbecauseihavetogo4aP&Z4U'); // "Fancy Layer"
fancyLayer.getName(5); // Error

// using the second Map Image Layer tree sample
restoLayer.getName(); // "Restaurants"
restoLayer.getName(-1); // "Restaurants"
restoLayer.getName('ABCDskipafewYbecauseihavetogo4aP&Z4U'); // "Restaurants"
restoLayer.getName(7); // "Burger Joints"
restoLayer.getName('988rubbishasdfsdfad'); // "Pizza Parlours"
restoLayer.getFeatureCount(7); // 324
restoLayer.getFeatureCount(); // 871 (count for index 4, default first index)
```

## Supported Layer Types

The following formats have support built in the codebase.

- ESRI Feature Layer (ArcGIS Server)
- ESRI Map Image Layer (ArcGIS Server) (formerly known as Dynamic Layer)
- GeoJSON
- WFS 3.0

*Planned Additional Support*

- ESRI Tile Layer
- ESRI Image Service
- WMS
- CSV
- Shapefile

## Layer Creation

Layers are created by providing a configuration object to the creation function in the `geo` API.

```js
var simpleConfig = { id: "funlayer", layerType: "esriFeature", url: "http://maptown.com/maps/rest/fancyService/4" };
var featureLayer = await instanceApi.geo.layers.createLayer(simpleConfig));
```

### Inner Layer Management

The creation of the layer just generates the controlling object. To generate an ESRI layer (which the mapping API uses to render stuff on the map), use the `initiate()` method on the layer. To remove/trash the ESRI layer, use `terminate()`. These functions can be used to orchestrate things like layer reloads, projection changes, etc.

## Common Operations

In general, these items should only be accessed after the layer has loaded. Attempts to use prior to that may result in the data not existing. The perscribed way to do this is as follows. Of course, you can gate areas of logic so that code only runs after the layer is known to be loaded, and then you don't need to continually check the status.

```js
await myLayer.isLayerLoaded();
myLayer.dostuff();
```

**Supports:** All Layer types

### Visibility and Opacity

For `Layer`s with singular logical sublayers (every layer type except Map Image Layer), the visibility and opacity effect the entire layer. For Map Image Layers, the sublayers can be independently adjusted (some services may not support sublayer opacity).

```js
myLayer.setVisibility(false);
myLayer.getVisibility(); // false
myMapImgLayer.setVisibility(false, 'sublayeruid');

myLayer.setOpacity(0.6);
myLayer.getOpacity(); // 0.6
myMapImgLayer.setOpacity(0.4, 3); // using index 3 instead of uid
myMapImgLayer.setOpacity(0.7);    // setting opacity of entire layer image
```

### Layer Metadata

Get the layer name (defined by configuration, and if not supplied, any server value that is present).

```js
myLayer.getName('uid'); // "Fancy Layer"
```

Get the state of the layer. This property does not apply to sublayers.

```js
myLayer.state; // 'rv-loaded'
```

Determine if the layer is in a valid state. Invalid states would be pre-loaded or an error state. This can also be used as an alternative to `isLayerLoaded()` if the calling code does not require a `Promise` to wait on. This property does not apply to sublayers.

```js
myLayer.isValidState(); // true
```

Get the visible scale ranges for layer or sublayer. A value of `0` on a range indicates there is no limit. Scales are fractions (i.e. a value of `2000` actually means 1/2000 scale), so `min` and `max` are counter intuitive (large scale means the view is closer to real life size, so the viewport is closer to the ground level).

```js
myLayer.getScaleSet('uid'); // { minScale: 0, maxScale: 8500 }
```

Determine if the layer supports our standard features.

```js
myLayer.supportsFeatures('uid'); // true
```

Get legend iconography and names.

TODO hotlink to any symbology / legend pages we create.

```js
myLayer.getLegend('uid'); // [{ legend object }, { legend object }]
```

Determine if the layer is file-based (this includes WFS, as it gets pre-loaded and is disconnected from its service while on the map). This property does not apply to sublayers.

```js
myLayer.isFile; // false
```

## Identify

**Supports:** Feature Layers, Map Image Layers, WMS Layers, WFS Layers, File-Based Layers

dont forget `supportsIdentify` property.

Determine if the layer supports the identify function. This property does not apply to sublayers. This property exists on all layer types, not just the supported ones.

```js
myLayer.supportsIdentify; // true
```

Run an identify on the layer. Identify is not directly called on logical sublayers. COMING SOON the ability to omit sublayers from the request.

Options parameter object:

```js
{
   geometry,       // The geometry to query. A RAMP API Geometry. Intersecting features will be returned.
   returnGeometry, // an optional boolean to indicate the geometry of the result features should also be downloaded. Defaults to `false`
   tolerance       // an optional integer number to buffer the query geometry. Is only useful if the geometry is a point.
                   // The number represents pixels to buffer by (so 5 would be a 10x10 pixel square around the point at the current map scale level).
                   // TODO if there is a default, list it here.
}
```

The result object is on the fancy side, as there are a few levels identify acts up. The topmost level is tied to the `Layer` object, providing the layer `uid`, a promise that resolves on completion, and the array of results. The result array has an entry for each logical layer involved, including the logical `uid`, a loading flag, and another array of results (called items) for the logical layer. The items array contains a format specification and a property containing data that aligns to the given format. TODO flush out formats once things are nailed down.

```js
{
    parentUid,               // uid of the layer object
    done,                    // a promise, resolves when request is done
    results: [
        {
            uid,             // uid of the sublayer / logical layer this set of results belongs to
            isLoading,       // boolean flag indicating if items are still loading
            items: [
                {
                    format,  // string indicating what format the data is in
                    data     // the data describing an item that satisfied the identify request
                },
                ...
            ]
        },
        ...
    ]
}
```

Example call

```js
var opts = { geometry: myPoint, tolerance: 3 };
var result = myLayer.identify(opts);
await result.done
result.results.forEach(r => processResults(r));
```

## Attribute Related Operations

**Supports:** Feature Layers, Map Image Layers, WFS Layers, File Based Layers

Note that Map Image Layers can have sublayers that are Raster in nature. These sublayers will not return any meaningful results for Attribute related calls.

Attribute operations always target a logical layer. Attempts to call operations against a Map Image Layer while targeting the layer root or not providing a sublayer identifier will result in using the first child (for now!).

Get the total number of features in a logical layer.

```js
myLayer.getFeatureCount('uid'); // 254
```

Get the geometry type of the logical layer.

```js
myLayer.getGeomType('uid'); // "polygon"
```

Request the set of attributes for the logical layer. The first request will incur the server hit. Subsequent requests will use the cached result. TODO flush out the return value

```js
myLayer.getAttributes('uid'); // Promise resolving with a set of attributes.
```

Request the loading process of attributes be halted. The end result of this request is the appearance of the layer not having loaded attributes. TODO figure out and document how the load count/status can be monitored.

```js
myLayer.abortAttributeLoad('uid');
```

Remove any attributes that had been loaded. The end result of this request is the appearance of the layer not having loaded attributes. Note this will not interrupt any loading process that is currently active. Use `abortAttributeLoad` to interrupt any enormous loads or hung calls.

```js
myLayer.destroyAttributes('uid');
```

Request the attributes in a tabular format with column metadata, suitable for grid or table consumption. This will use any pre-loaded attribute set, and if none exist, will execute the `getAttributes` request. TODO flush out the return value

```js
myLayer.getTabularAttributes('uid'); // Promise resolving with tabular attribute object.
```

Request an individual graphic. This can include the geometry, the attributes, or both. The function uses a caching strategy so multiple requests for the same data will be server friendly. TODO flush out details.

```js
var opts = { getGeom: true, getAttribs: true };
var objectId = 61;
var result = await myLayer.getGraphic(objectId, opts, 'guid');
console.log(g.attributes, g.geometry);
```

Request the icon symbol for a specific feature. The icon corresponds to the legend representation of how the layer renderer would display this feature. The icon is encoded as an SVG string.

```js
var objectId = 61;
var svg = await myLayer.getIcon(objectId, 'guid');
console.log(svg);
```

### Filters

Apply a SQL filter on a logical layer. This will alert any listeners on the `layer.filterChanged` event. Core SQL filters include `grid`, `symbol`, and `api`

```js
myLayer.setSqlFilter('dogfilter', `breed = 'terrier'`, 'uid');
```

Get the current value of a SQL filter on a logical layer.

```js
myLayer.getSqlFilter('dogfilter', 'uid'); // "breed = 'terrier'"
```

Get an array of object ids that currently satisfy all active filters. An exclusion list can be provided, this will cause the result to ignore the effects of all filters being excluded. A map Extent can also be provided to limit the results to a given section of the map.

Requests for OIDs use a caching strategy, so multiple requests when nothing has changed will be server friendly.

```js
// exclude our dog filter. respect all dogs
var oids = await myLayer.getFilterOIDs(['dogfilter'], myMap.extent, 'guid');
oids.forEach(oid => console.log('matched this object id', oid));

// sample call without any fancy parameters
var fullFilterResult = myLayer.getFilterOIDs(undefined, undefined, 'guid');

// with a non-Map Image Layer, everything can be defaulted
var fullFilterResult = myLayer.getFilterOIDs();
```

Apply all active SQL filters to the layer on the map. This will actually change how the layer appears on the map; features that don't pass the filter will not appear. Again, we can provide an exclusion array of keys to omit certain filters from the action

```js
// use all filters
myLayer.applySqlFilter(undefined, 'uid');

// ignore the grid filters
myLayer.applySqlFilter(['grid'], 'uid');
```
## Custom Layers

TODO flush out as part of issue ###
Provide an example (e.g. a pre-cooked layer that always loads the happy json)