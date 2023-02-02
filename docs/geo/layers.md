# Geo Layer Classes

In this doc, `Layer` refers to any class that implements the `LayerInstance` generic class.

## Conceptual Fun - Physical vs Logical

Layers can be viewed in two different ways due to how they are constructed.

### Physical Layer

This represents one slice in the map stack as it is drawn on the page. The slice can be a collection of vector geometries, or an image (also known as a raster). The image can be composed of pictures (e.g. a satellite image) or the rasterization of vector geometries.

### Logical Layer

These represent a logical set of geographic data. The term "Feature Class" is often used to describe logical sets of vector data and their attributes. We also include other types of data in our definition, such as a set of images. Generally, one would expect items within a logical layer to share common characteristics, like geometry type, attribute field schema, projection, visible scale levels, etc.

While most physical layers have one logical layer, some can have multiple logical layers. For example, an ESRI Map Image Layer (formerly known as a Dynamic Layer) can be composed of many feature classes from the server, and are all rendered into a single image to be placed in the map stack.

### RAMP Layer Objects

RAMP `Layer` objects can represent different viewpoints of the layer. For layers with a single feature class (the majority of layers), the `Layer` controls both the physical and logical component of the layer.

For layers with many logical layers, we will have one `Layer` controlling the physical and a sublayer `Layer` to control each logical layer. See the [sublayers](#Sublayers) section below.

As an example, in a Map Image Layer, toggling the visibility on the `Layer` tied to the physical will just make the image on the client show or hide. Toggling the visibility on the `Layer` tied to one of the logical children will trigger a request for a new image to be generated on the map server.

### Identifiers

The **Layer ID** is tied to each physical layer. This is defined in the layer configuration object (as `"id"`), and is also applied to the underlying ESRI layer object (as `layerId`). Each `Layer` exposes this is via the `.id` property. Note that sublayers will have the same `.id` as their parent layer.

The **Layer Index** refers to the index on the server for the logical aspect of the layer. For layers that are not tied to an ArcGIS Server, we use `0` as the index value. For a parent `Layer` (which is tied only to the physical aspect, and has sublayers to reference the logical) we use `-1` as a placeholder index value, indicating there is no index. This value is found on a `Layer` via the `.layerIdx` property.

The **UID** is a string identifier assigned to every `Layer` that is unique across the RAMP instance. This allows a single key to be used to find or reference a layer, avoiding the need to generate composite keys from the id and index. They are accessed on a `Layer` via the `.uid` property. It is important to note the UID does not exist until the layer is created (or in the case of sublayers, the layer load must complete), and cannot be predicted or assigned in the configuration beforehand.

### Layer Tree

Every `Layer` object has a method `.getLayerTree()`. This returns a heirarchical object that describes the logical layout of the layer.

Most layers have one single logical component and a basic tree.

```js
{
    layerIdx: 0,
    name: "Fancy Layer",
    children: [],
    isLayer: true,
    uid: "ABCDskipafewYbecauseihavetogo4aP&Z4U"
}
```

A Map Image Layer composed of multiple sources could have a more structured result with Map Image Sublayers. The tree is the easiest way to inspect the structure.

Note that subfolder structures do not have a uid; they exist to organize the heirarchy but have no related `Layer` object.

```js
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

## Supported Layer Types

The following formats have support built in the codebase. The ESRI formats assume being hosted on an ArcGIS Server `MapServer`. `FeatureServer` may work but with some functionality missing. The configuration `layerType` is provided in brackets.

-   ESRI Feature Layer (`esri-feature`)
-   ESRI Map Image Layer (formerly known as Dynamic Layer) (`esri-map-image`)
-   ESRI Tile Layer (`esri-tile`)
-   ESRI Image Service (`esri-imagery`)
-   ESRI Graphic Layer (`esri-graphic`)
-   OGC WFS 3.0 (`ogc-wfs`)
-   OGC WMS (`ogc-wms`)
-   GeoJSON (`file-geojson`)
-   CSV File (`file-csv`)
-   Shapefile (`file-shape`)
-   OpenStreetMap Tile Layer (`osm-tile`)

## Layer Creation

Layers are created by providing a configuration object to the creation function in the `geo` API.

```js
var simpleConfig = { id: "funlayer", layerType: "esri-feature", url: "http://maptown.com/maps/rest/fancyService/4" };
var featureLayer = instanceApi.geo.layer.createLayer(simpleConfig));
```

### Inner Layer Management

The creation of the layer just generates the controlling `Layer` object. To generate an ESRI layer (which the mapping API uses to render stuff on the map), use the `initiate()` method on the layer. To remove/trash the ESRI layer, use `terminate()`. These functions can be used to orchestrate things like layer reloads, projection changes, etc.

The `.initiationState` property on the `Layer` will indicate the current state of the layer in this matter.

### Waiting For Layer Load

In general, most layer properties and methods should only be accessed after the layer has loaded. Attempts to use prior to that may result in the data not existing (a console error will usually alert you to this mistake).

The `Layer` object expose the `loadPromise()` method, which returns a promise that will not resolve until the load has completed.

Of course, you can gate areas of logic so that code only runs after the layer is known to be loaded, and then you don't need to continually check the status.

```js
await myLayer.loadPromise();
myLayer.dostuff();
```

The property `.isValidSate` can also be used to do a synchronous check to see if the layer is in a loaded state.

## Sublayers

**Supports:** Map Image Layers

The property `.supportsSublayers` provides a quick check to see if a layer deals with sublayers at all.

The property `.isSublayer` will indicate if a `Layer` is a sublayer.

The method `.getSublayer(target)` is used to get a sublayer object. This should be called on the parent `Layer`. The `target` param can be the sublayer's layer index (integer) or the sublayers UID.

```js
var mySublayer = myMapImgLayer.getSublayer('sublayeruid');
var myOtherSublayer = myMapImgLayer.getSublayer(4);
```

The `.sublayers` property provides an array containing all the sublayers of a layer.

The `.parentLayer` property of a sublayer will return the `Layer` that acts as the parent / root / physical view of the layer.

## Common Operations

**Supports:** All Layers

### Finding A Layer

A layer can be retrieved via the instance API using the Layer ID or the UID. Note that when using Layer ID, if the layer has multiple sublayers (i.e. Map Image Layer), the parent layer will be returned.

```js
var myLayer = instanceApi.geo.layer.getLayer('fancyLayerId'));
```

### Visibility and Opacity

For `Layer`s with singular logical sublayers (every layer type except Map Image Layer), the visibility and opacity effect the entire layer. For Map Image Layers, the sublayers can be independently adjusted (some services may not support sublayer opacity).

```js
myLayer.visibility = false;
myLayer.visibility; // false

myLayer.opacity = 0.6;
myLayer.opacity; // 0.6
```

### Layer Metadata

Get the layer name (defined by configuration, and if not supplied, any server value that is present).

```js
myLayer.name; // "Fancy Layer"
```

Determine if the layer is loaded. This can also be used as an alternative to `loadPromise()` if the calling code does not require a `Promise` to wait on. It also serves as a shortcut to inspecting the `.layerState` property.

```js
myLayer.isLoaded; // true
```

Get the load state of the layer. This state tracks the loading life cycle (i.e. loading, loaded, error)

```js
myLayer.layerState; // 'loaded'
```

Get the layer state of the layer. This state tracks the initiation life cycle (i.e. initiating, initiated, terminating, terminated)

```js
myLayer.initiationState; // 'initiated'
```

Get the drawing state of the layer. This state tracks the drawing life cycle (i.e. getting or processing spatial data for the current map view)

```js
myLayer.drawState; // 'refresh'
```

Get the layer type. This matches the value that was provided in the config snippet. One can derive where the layer data came from and what functionality it can support.

```js
myLayer.layerType; // 'esri-tile'
```

Get the format of the layer. This indicates the type of Esri layer that has been instantiated on the map stack for this layer.

```js
myLayer.layerFormat; // 'feature'
```

Get the format of the spatial data in the layer.

```js
myLayer.dataFormat; // 'esriRaster'
```

Get the visible scale ranges for layer or sublayer. A value of `0` on a range indicates there is no limit. Scales are fractions (i.e. a value of `2000` actually means 1/2000 scale), so `min` and `max` can be counterintuitive (large scale means the view is closer to real life size, so the viewport is closer to the ground level).

```js
myLayer.scaleSet; // { minScale: 0, maxScale: 8500 }
```

Determine if the layer supports our standard features (a feature is a geometry with an attribute set, conforming to a schema and symbolized by a renderer).

```js
myLayer.supportsFeatures; // true
```

Get legend iconography and names.

TODO hotlink to any symbology / legend pages we create.

```js
myLayer.legend; // [{ legend object }, { legend object }]
```

Determine if the layer is file-based (this includes WFS, as it gets pre-loaded and is disconnected from its service while on the map).

```js
myLayer.isFile; // false
```

Determine if a layer was added by the user during the session.

```js
myLayer.userAdded; // true
```

Determine if a layer has been removed from the map / session. This also applies to sublayers which can be removed but the parent layer remains and retains the original layer tree.

```js
myLayer.isRemoved; // false
```

## Identify

**Supports:** Feature Layers, Map Image Layers, WMS Layers, WFS Layers, File-Based Layers

`Layer`s have the property `.supportsIdentify`, which determines if the layer can participate in an identify call.

```js
myLayer.supportsIdentify; // true
```

Layers also have method `.canIdentify()` which indicates if the layer would partipate in an identify at the current moment. This method takes into account things like layer visibility, the value of the `.identify` toggle, if the layer is in a loading or error state, etc.

```js
myLayer.canIdentify(); // true
```

Layers also have the property `.identifyMode`. This can be `'geometric'` (using intersection against feature geometry), `'symbolic'` (using intersection against layer symbols), or `'hybrid'` (combining both types of intersections). Raster based layers (Map Image, WMS) are always in `geometric` mode since there is no client side renderers to leverage. Vector based layers can choose any of the modes.

```js
myLayer.identifyMode; // 'hybrid'
```

The typical identify process is run from the map, using `MapAPI.runIdentify()`. This will execute the identify across all valid layers and collate the results. However, the following goes into the guts of how each layer contributes to that process. Custom modules are allowed to run identifies directly off layers if it is advantageous.

The `.runIdentify()` method will execute an identify request on the layer. Identify is not directly called on logical sublayers. RAMP's sublayer filter can be overridden using the below options parameter object.

Options parameter object:

```js
{
    geometry,       // The geometry to identify against. A RAMP API Geometry. Intersecting features will be returned.
    returnGeometry, // An optional boolean to indicate the geometry of the result features should also be downloaded. Defaults to `false`
    sublayerIds,    // An optional array of sublayer uids (string) or server indicies (number) that indicate which sublayers to include in the request.
    tolerance       // An optional integer number to buffer the geometry. Is generally only useful if the geometry is a point.
}                   // The number represents pixels to buffer by (so 5 would be a 10x10 pixel square around the point at the current map scale level).
```

The result object is on the fancy side, as there are a few levels identify acts up. The topmost array of results has an entry for each logical layer involved, including the logical `uid`, a loading flag and promise, and another array of individual hits (called items) for the logical layer. The loading properties here indicate when the items array as been populated, but be aware that individual items still may be downloading their own data.
The items array contains a loading flag and promise to track the download of its data, a format specification and a property to contain data that aligns to the given format.

TODO flush out formats once things are nailed down.

```js
[
    {
        uid,             // uid of the sublayer / logical layer this set of results belongs to
        loaded,          // boolean flag indicating if items array has been populated
        loading,         // promise that resolves when items array is populated
        items: [
            {
                loaded,  // boolean flag indicating if the item data has been populated
                loading, // promise that resolves when item data is populated
                format,  // string indicating what format the data is in
                data     // the data describing an item that satisfied the identify request
            },
        ]
    },
]
```

Example call

```js
var opts = { geometry: myPoint, tolerance: 3 };
var result = myLayer.runIdentify(opts);
await result.done;
result.forEach(r => {
    r.loading.then(() => {
        r.items.forEach(i => {
            i.loading.then(() => processResult(i));
        });
    });
});
```

## Attribute Related Operations

**Supports:** Feature Layers, Map Image Layers, WFS Layers, File Based Layers

Note that Map Image Layers can have sublayers that are Raster in nature. These sublayers will not return any meaningful results for Attribute related calls.

Attribute operations always target a logical layer. Attempts to call operations against a Map Image Layer parent will not work.

Get the total number of features in a logical layer.

```js
myLayer.featureCount; // 254
```

Get the geometry type of the logical layer.

```js
myLayer.geomType; // "polygon"
```

Get the draw order of the layer. Not supported by Map Image Layers. Can only be set via layer configuration. ESRI currently only supports ordering by one field.

```js
myLayer.drawOrder; // [{ field: 'name', ascending: true }]
```

Request the set of attributes for the logical layer. The first request will incur the server hit. Subsequent requests will use the cached result.
TODO flush out the return value

```js
myLayer.getAttributes(); // Promise resolving with a set of attributes.
```

Request the loading process of attributes be halted. The end result of this request is the appearance of the layer not having loaded attributes.
TODO figure out and document how the load count/status can be monitored.

```js
myLayer.abortAttributeLoad();
```

Remove any cached attributes or geometries that have been loaded. The end result of this request is the appearance of the layer not having loaded or cached attributes. Note this will not interrupt any loading process (`getAttributes()`) that is currently active. Use `abortAttributeLoad()` to interrupt any enormous loads or hung calls.

```js
myLayer.clearFeatureCache();
```

Request the attributes in a tabular format with column metadata, suitable for grid or table consumption. This will use any pre-loaded attribute set, and if none exist, will execute the `getAttributes` request.
TODO flush out the return value

```js
myLayer.getTabularAttributes(); // Promise resolving with tabular attribute object.
```

Request an individual graphic. This can include the geometry, the attributes, and the style. The function uses a caching strategy so multiple requests for the same data will be server friendly.

```js
var opts = { getGeom: true, getAttribs: true, getStyle: true };
var objectId = 61;
var result = await myLayer.getGraphic(objectId, opts);
console.log(g.attributes, g.geometry, g.style);
```

Request the icon symbol for a specific feature. The icon corresponds to the legend representation of how the layer renderer would display this feature. The icon is encoded as an SVG string.

```js
var objectId = 61;
var svg = await myLayer.getIcon(objectId);
console.log(svg);
```

### Filters

Apply a SQL filter on a logical layer. This will alert any listeners on the `layer.filterChanged` event. Core SQL filters include `grid`, `symbol`, `extent`, `initial`, and `permanent`. Avoid using core filter names for custom filters. If no filter name is provided, the generic `api` value will be used. Note that `permanent` cannot be changed after the layer is created.

```js
myLayer.setSqlFilter('dogfilter', `breed = 'terrier'`);
```

Get the current value of a SQL filter on a logical layer.

```js
myLayer.getSqlFilter('dogfilter'); // "breed = 'terrier'"
```

Get an array of object ids that currently satisfy all active filters. An exclusion list can be provided, this will cause the result to ignore the effects of all filters being excluded. A map Extent can also be provided to limit the results to a given section of the map.

Requests for OIDs use a caching strategy, so multiple requests when nothing has changed will be server friendly.

```js
// exclude our dog filter. respect all dogs
var oids = await myLayer.getFilterOIDs(['dogfilter'], myMap.extent);
oids.forEach(oid => console.log('matched this object id', oid));

// sample call without any fancy parameters
var fullFilterResult = myLayer.getFilterOIDs();
```

Apply all active SQL filters to the layer on the map. This will actually change how the layer appears on the map; features that don't pass the filter will not appear. Again, we can provide an exclusion array of keys to omit certain filters from the action

```js
// use all filters
myLayer.applySqlFilter();

// ignore the grid filters
myLayer.applySqlFilter(['grid']);
```
