# Layer Classes

In this doc, "Layer" refers to any class that implements the `LayerInstance` generic class.

## Document Outline

- [Structural Concepts](#structural-concepts)
- [Supported Layer Types](#supported-layer-types)
- [Layer Lifecycle](#layer-lifecycle)
- [Sublayers](#sublayers)
- [Common Operations](#common-operations)
- [Identify](#identify)
- [Feature Related Operations](#feature-related-operations)

## Structural Concepts

Layers can be viewed in two different ways due to how they are constructed.

### Physical Layer

This represents one slice in the map stack as it is drawn on the page. The slice can be a collection of vector geometries, or an image (also known as a raster). The image can be composed of pictures (e.g. a satellite image) or the rasterization of vector geometries.

### Logical Layer

These represent a logical set of geographic data. The term "Feature Class" is often used to describe logical sets of vector data and their attributes. We also include other types of data in our definition, such as a set of images. Generally, one would expect items within a logical layer to share common characteristics, like geometry type, attribute field schema, projection, visible scale levels, etc.

While most physical layers have one logical layer, some can have multiple logical layers. For example, an ESRI Map Image Layer (formerly known as a Dynamic Layer) can be composed of many feature classes from the server, and are all rendered into a single image to be placed in the map stack.

### RAMP Layer Objects

RAMP Layer objects can represent different viewpoints of the layer. For layers with a single feature class (the majority of layers), the Layer controls both the physical and logical component of the layer.

For layers with many logical layers, we will have one Layer controlling the physical and a sublayer Layer to control each logical layer. See the [sublayers](#Sublayers) section below.

As an example, in a Map Image Layer, toggling the visibility on the Layer tied to the physical will just make the image on the client show or hide. Toggling the visibility on the Layer tied to one of the logical children will trigger a request for a new image to be generated on the map server.

### Identifiers

The **Layer ID** is tied to each physical layer. This is defined in the layer configuration object (as `"id"`), and is also applied to the underlying ESRI layer object (as `layerId`). Each Layer exposes this is via the `id` property.

The **Layer Index** refers to the index on the server for the logical aspect of the Layer. For Layers that are not tied to an ArcGIS Server, we use `0` as the index value. For a parent Layer (which is tied only to the physical aspect, and has sublayers to reference the logical) we use `-1` as a placeholder index value, indicating there is no index. This value is found on a Layer via the `layerIdx` property.

Note that sublayers will be assigned a composite `id` of the format `<parent layer id>-<sublayer index>`.

The **UID** is a string identifier assigned to every Layer that is unique across the RAMP instance. This allows a single key to be used to find or reference a Layer, avoiding the need to generate composite keys from the id and index. They are accessed on a Layer via the `uid` property. It is important to note the UID does not exist until the Layer is created (or in the case of sublayers, the layer load must complete), and cannot be predicted or assigned in the configuration beforehand.

### Layer Tree

Every Layer object has a method `getLayerTree()`. This returns a heirarchical object that describes the logical layout of the Layer.

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

Note that subfolder structures do not have a uid; they exist to organize the heirarchy but have no related Layer object.

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

The following formats have support built in the codebase. The configuration `layerType` is provided in brackets.

### Map Layers

The ESRI formats assume being hosted on an ArcGIS Server `MapServer`. `FeatureServer` may work but with some functionality missing. 

- ESRI Feature Layer (`esri-feature`)
- ESRI Map Image Layer (formerly known as Dynamic Layer) (`esri-map-image`)
- ESRI Tile Layer (`esri-tile`)
- ESRI Image Service (`esri-imagery`)
- ESRI Graphic Layer (`esri-graphic`)
- OGC WFS 3.0 (`ogc-wfs`)
- OGC WMS (`ogc-wms`)
- GeoJSON (`file-geojson`)
- CSV File (`file-csv`)
- Shapefile (`file-shape`)
- OpenStreetMap Tile Layer (`osm-tile`)

### Data Layers

- ESRI Table Layer (`data-esri-table`)
- Non Spatial CSV File (`data-csv`)
- Compact JSON File (`data-json`)

The Compact JSON file format is designed to remove duplicated field names. A sample is as follows

```js
{
    fields: ['Resto_Name', 'Resto_Type', 'Star_Rating'],
    data: [
        ['That is a Tasty Burger', 'Burger', 5],
        ['Value Patties', 'Burger', 2],
        ['The Hearty Slice', 'Pizza', 4]
    ]
}
```

## Layer Lifecycle

### Creation

Layers are created by providing a configuration object to the creation function in the `geo` API.

```js
var simpleConfig = {
    id: "funlayer",
    layerType: "esri-feature",
    url: "http://maptown.com/maps/rest/fancyService/4"
};
var featureLayer = instanceApi.geo.layer.createLayer(simpleConfig));
```

For details on the layer configuration objects, visit the [layer configuration](../using-ramp4/layer-config.md) page.

To have a Layer appear on the map, it must be added.

```js
instanceApi.geo.map.addLayer(layerObj);
```

Any layer configs defined in the instance configuration (within the `layers` array) will automatically be added to the map at startup.

### Internal Layer Management

The creation of the layer just generates the controlling Layer object. To generate an ESRI layer (which the mapping API uses to render stuff on the map), use the `initiate()` method on the Layer. To remove/trash the ESRI layer, use `terminate()`. These functions are used by the RAMP core to orchestrate things like layer reloads and projection changes, and can be utilzied externally for custom behaviors.

The `initiationState` property on the Layer will indicate the current state of the Layer in this matter.

If an uninitiated Layer is passed to `map.addLayer()`, it will be initialized automatically.

### Waiting For Layer Load

In general, most Layer properties and methods should only be accessed after the Layer has loaded. Attempts to use prior to that may result in critical data not existing (a console error will usually alert you to this mistake).

The Layer object exposes the `loadPromise()` method, which returns a promise that will not resolve until the load has completed.

Of course, you can gate areas of logic so that code only runs after the Layer is known to be loaded, and then you don't need to continually check the status.

```js
await myLayer.loadPromise();
myLayer.dostuff();
```

The properties `layerState` and `isLoaded` can also be used to do a synchronous check of the Layer's current load state.

### Finding A Layer

A Layer or sublayer registered with the instance can be retrieved via the `getLayer` API using the Layer ID or the UID.

```js
var myLayer = instanceApi.geo.layer.getLayer('fancyLayerId');
```

A sublayer can also be found using the parent LayerID and sublayer index. UIDs will not work on this call.

```js
var mySublayer = instanceApi.geo.layer.getSublayer('parentLayerId', 3);
```

Arrays of layers in various states can also be requested.

```js
// List of all layers registered with the instance
var allLayerArray = instanceApi.geo.layer.allLayers();

// List of layers in a use-able state (have initiated, are not in error state)
var allGoodMapLayerArray = instanceApi.geo.layer.allActiveLayers();

// List of layers in an error state
var errLayerArray = instanceApi.geo.layer.allErrorLayers();

// List of layers currently initiating
var initiatingLayerArray = instanceApi.geo.layer.allInitiatingLayers();

// List of layers occupying the map stack, in order (bottom to top). 
// If a layer has errored but is still in the map, it is included
var mapLayerArray = instanceApi.geo.layer.allLayersOnMap();

// List of data-based layers that have initiated
var dataLayersArray = instanceApi.geo.layer.allDataLayers();
```

## Sublayers

**Supports:** Map Image Layers

The property `supportsSublayers` provides a quick check to see if a Layer deals with sublayers at all.

The property `isSublayer` will indicate if a Layer is a sublayer.

The method `getSublayer(target)` is used to get a sublayer object. This should be called on the parent Layer. The `target` param can be the sublayer's layer index (integer) or the sublayers UID.

```js
var mySublayer = myMapImgLayer.getSublayer('sublayeruid');
var myOtherSublayer = myMapImgLayer.getSublayer(4);
```

The `sublayers` property provides an array containing all the sublayers of a Layer.

The `parentLayer` property of a sublayer will return the Layer that acts as the parent / root / physical view of the layer.

## Common Operations

**Supports:** All Layers

### Visibility and Opacity

For Layers with singular logical sublayers (every layer type except Map Image Layer), the visibility and opacity effect the entire Layer. For Map Image Layers, the sublayers can be independently adjusted (some services may not support sublayer opacity).

```js
myLayer.visibility = false;
myLayer.visibility; // false

myLayer.opacity = 0.6;
myLayer.opacity; // 0.6
```

Map Image Sublayers can also control the label visibility, assuming labels are defined on the host service.

```js
mySublayer.labelVisibility = true;
mySublayer.labelVisibility; // true
```

### Layer Metadata

Get the Layer name (defined by configuration, and if not supplied, any server value that is present).

```js
myLayer.name; // "Fancy Layer"
```

Determine if the Layer is loaded. This can also be used as an alternative to `loadPromise()` if the calling code does not require a `Promise` to wait on. It also serves as a shortcut to inspecting the `layerState` property.

```js
myLayer.isLoaded; // true
```

Get the load state of the Layer. This state tracks the loading life cycle. Possible values: `loading`, `loaded`, `error`, `new`

```js
myLayer.layerState; // 'loaded'
```

Get the initiation state of the Layer. This state tracks the initiation life cycle. Possible values: `new`, `initiating`, `initiated`, `terminating`, `terminated`

```js
myLayer.initiationState; // 'initiated'
```

Get the drawing state of the Layer. This state tracks the drawing life cycle (i.e. getting or processing spatial data for the current map view)

```js
myLayer.drawState; // 'refresh'
```

Get the Layer type. This matches the value that was provided in the config snippet. One can derive where the layer data came from and what functionality it can support.

```js
myLayer.layerType; // 'esri-tile'
```

Get the format of the Layer. This indicates the type of Esri layer that has been instantiated on the map stack for this Layer.

```js
myLayer.layerFormat; // 'feature'
```

Get the format of the spatial data in the Layer.

```js
myLayer.dataFormat; // 'esriRaster'
```

Determine if the Layer is designated as `cosmetic`. This means the Layer appears on the map but otherwise does not participate in normal interactions.

```js
myLayer.isCosmetic; // true
```

Get the visible scale ranges for the Layer or sublayer. A value of `0` on a range indicates there is no limit. Scales are fractions (i.e. a value of `2000` actually means 1/2000 scale), so `min` and `max` can be counterintuitive (large scale means the view is closer to real life size, so the viewport is closer to the ground level). Not supported by Data Layers.

```js
myLayer.scaleSet; // { minScale: 0, maxScale: 8500 }
```

Determine if the Layer supports our standard features (a feature is a geometry with an attribute set, conforming to a schema and symbolized by a renderer).

```js
myLayer.supportsFeatures; // true
```

Determine if the Layer can be displayed on the map. If `false`, the Layer contains attribute data only.

```js
myLayer.mapLayer; // true
```

Get legend iconography, names, and other metadata.

```js
myLayer.legend; // [{ legend object }, { legend object }]
```

Determine if the Layer is file-based (this includes WFS, as it gets pre-loaded and is disconnected from its service while on the map).

```js
myLayer.isFile; // false
```

Determine if the Layer was added by the user during the session.

```js
myLayer.userAdded; // true
```

Determine if the Layer has been removed from the map / session. This also applies to sublayers which can be removed but the parent Layer remains and retains the original layer tree.

```js
myLayer.isRemoved; // false
```

Request the layer's spatial reference in [RAMP's format](geometry.md#spatial-reference). Not supported by Data Layers.

```js
const sr = myLayer.getSR() // { wkid: 102100, latestWkid: 3857 }
```

## Identify

**Supports:** Feature Layers, Map Image Layers, WMS Layers, WFS Layers, File-Based Layers

Layers have the property `supportsIdentify`, which determines if the Layer has the ability to process an identify request.

```js
myLayer.supportsIdentify; // true
```

The `identify` property can set if a Layer should be considered as part of a maps identify process. This is useful for refining results on a busy map.

```js
myLayer.identify = false;
```

Layers also have method `canIdentify()` which indicates if the Layer would partipate in an identify at the current moment. This method takes into account things like layer visibility, the value of the `identify` toggle, if the Layer is in a loading or error state, etc.

```js
myLayer.canIdentify(); // true
```

Layers also have the property `identifyMode`. This can be `'geometric'` (using intersection against feature geometry), `'symbolic'` (using intersection against layer symbols), or `'hybrid'` (combining both types of intersections). Raster based Layers (Map Image, WMS) are always in `geometric` mode since there is no client side renderers to leverage. Vector based Layers can choose any of the modes.

```js
myLayer.identifyMode; // 'hybrid'
```

The typical identify process is run from the map, using `MapAPI.runIdentify()`. This will execute the identify across all valid Layers and collate the results. However, the following goes into the guts of how each Layer contributes to that process. Custom modules are allowed to run identifies directly off Layers if it is advantageous.

The `runIdentify()` method will execute an identify request on the Layer. For Map Image Layers, the identify is initiated from the parent Layer. Specific Sublayers can be omitted by using the options parameter object.

Options parameter object, with descriptions following:

```js
{
    geometry,
    sublayerIds,
    tolerance,
    hitTest
}
```

- The geometry to identify against. A RAMP API [Geometry](geometry.md). Intersecting features will be returned.
- An optional array of sublayer uids (string) or server indicies / layer indexes (number) that indicate which sublayers to include in the request.
- An optional integer number to buffer the geometry. Is generally only useful if the geometry is a point (i.e. where a mouse click / crosshair click occurred). The number represents pixels to buffer by (so 5 would be a 10x10 pixel square around the point at the current map scale level).
- Optional result of a local hit test (a promise resolving in an array of graphic hit results). Utilized when in hybrid identify mode; will ensure any local results are excluded from the server results, avoiding duplicates.

The result object of `runIdentify()` is on the fancy side, as there are a few levels identify acts upon. The topmost array of results has an entry for each logical layer involved, including:

- The `uid` of the logical layer
- A request timestamp (`requestTime`)
- An array of individual hits (`items`) for the logical layer
- A loaded flag (`loaded`) to indicate if `items` has been populated.
- A promise (`loading`) that resolves when `items` has been populated.
- A flag to indicate if the identify request failed (`errored`).

The loading properties here indicate when the items array as been populated, but be aware that individual `items` may still need to download their own data.

The objects in the `items` array manage each result. To limit lots of potential network calls from issuing on large uncached results, some items will need to be explicitly loaded at an approprite time. The item exposes:

- The result `data`. Will be undefined until the item is loaded.
- The expected `format` of the data.  Supported values include `esri` (standard attribute format), `text`, `image`, `html`, `xml`, `json`, `unknown`.
- A `started` flag that indicates if the data has begun (or finished) loading.
- A `loaded` flag indicating the data has loaded.
- A `loading` promise that resolves once the data is loaded.
- A `load()` method that will initiate the loading of the data. It returns the `loading` promise. There is no harm in calling load on an item that has already begun or finished loading; it will not start a duplicate request.


```js
[
    {
        uid,
        loaded,
        loading,
        errored,
        requestTime,
        items: [
            {
                loaded,
                loading,
                started,
                format,
                data,
                load()
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
            i.load().then(() => processResult(i.format, i.data));
        });
    });
});
```

## Feature Related Operations

**Supports:** Feature Layers, Map Image Sublayers, WFS Layers, File Based Layers, Data Layers

This section deals with Layers that have ESRI (or ESRI conforming) Features in a Feature Class. It will have features of the same geometry type, and those features will have attributes with the same set of fields.

Note that Map Image Layers can have sublayers that are Raster in nature. These sublayers will not return any meaningful results for Feature related calls.

Attribute operations always target a logical layer. Attempts to call operations against a Map Image Layer (the parent of the sublayers) will not work.

### Properties

Get the total number of features:

```js
myLayer.featureCount; // 254
```

Get the geometry type (`Point`, `MultiPoint`, `LineString`, `Polygon`, `None`) of the feature class:

```js
myLayer.geomType; // "Polygon"
```

Get the metadata for the attribute fields. Field type values are the same as the [ESRI types](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-support-Field.html#type).

```js
myLayer.fields; // [{field1}, {field2}]

// sample of 'fieldX' return object
{
  name: 'fieldname',
  alias: 'My Field Name',
  type: 'string',
  length: 255 // max length, only used for strings
}
```

Get the field name that is designated as the unique identifier of the feature.

```js
myLayer.oidField; // "OBJECTID"
```

Get the field name that is designated as the identifying name of the feature (used as a default for uncustomized map hovertips, identify panels, etc.).

```js
myLayer.nameField; // "site_name"
```

Get the draw order of the Layer. Not supported by Map Image Sublayers or Data Layers. Can only be set via layer configuration. ESRI currently only supports ordering by one field.

```js
myLayer.drawOrder; // [{ field: 'population', ascending: true }]
```

Get or set if the Layer features should show hovertips on the map. Not supported by Map Image Sublayers or Data Layers.

```js
myLayer.hovertips;         // true
myLayer.hovertips = false; // will no longer show hovertips
```

### Methods

Request the set of attributes. The result includes an array of attributes (key value objects), and an object that provides an indexed lookup by Object ID into the array. The first request will incur the server hit. Subsequent requests will use the cached result.

```js
myLayer.getAttributes(); // Promise resolving with a set of attributes.

// sample of attribute set structure
{
  features: [{oid: 23, a: 'w', b: 'x'}, {oid: 45, a: 'y', b: 'z'}],
  oidIndex: {23: 0, 45: 1}
}
```

Request the loading process of attributes be halted. The end result of this request is the appearance of the Layer not having loaded attributes.

```js
myLayer.abortAttributeLoad();
```

View the number of attributes currently downloaded during a `getAttributes()` call, which can be useful for monitoring progress or detecting problems.

```js
myLayer.loadedCount; // 45
```

Remove any cached attributes or geometries that have been loaded. The end result of this request is the appearance of the Layer not having loaded or cached attributes. Note this will not interfere with an active call to `getAttributes()` on the Layer. Use `abortAttributeLoad()` to interrupt any enormous loads or hung calls.

```js
myLayer.clearFeatureCache();
```

Request the attributes in a tabular format with column metadata, suitable for grid or table consumption. This will use any pre-loaded attribute set, and if none exist, will execute the `getAttributes()` request.

```js
myLayer.getTabularAttributes(); // Promise resolving with tabular attribute object.

// sample of tabular attribute object
{
  columns: [
    {data: 'oid', title: 'object id'},
    {data: 'a', title: 'Col A'},
    {data: 'b', title: 'Col B'}
  ],
  rows: [{oid: 23, a: 'w', b: 'x'}, {oid: 45, a: 'y', b: 'z'}],
  fields: [copy of layer .fields property],
  oidField: 'oid'
}
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

Filters allow certain Layer features to be hidden based on the values of their attributes. Multiple filters combine together (i.e joined with `AND` logical operators).

Filters use ESRI's [query expression syntax](https://desktop.arcgis.com/en/arcmap/10.3/map/working-with-layers/building-a-query-expression.htm), which is nearly identical to an SQL "WHERE" clause. A filter can be turned off using an empty string. For an absolute filter (hide everything), we recommend the filter `1=2`.

Use `setSqlFilter()` to apply a filter on a logical layer. This will also raise the `filter/change` event. Core SQL filters include `grid`, `symbol`, `extent`, `initial`, and `permanent`. Avoid using core filter names for custom filters. If no filter name is provided, the generic `api` value will be used. Note that `permanent` cannot be changed after the Layer is created.

```js
myLayer.setSqlFilter('dogfilter', `breed = 'terrier'`);
```

The current value of a SQL filter on a logical layer can also be inspected.

```js
myLayer.getSqlFilter('dogfilter'); // "breed = 'terrier'"
```

One can also get an array of object ids that currently satisfy all active filters. An exclusion list can be provided, this will cause the result to ignore the effects of all filters being excluded. A map Extent can also be provided to limit the results to a given section of the map.

Requests for OIDs use a caching strategy, so multiple requests when nothing has changed will be server friendly.

```js
// exclude our dog filter. respect all dogs
var oids = await myLayer.getFilterOIDs(['dogfilter'], myMap.extent);
oids.forEach(oid => console.log('matched this object id', oid));

// sample call without any fancy parameters
var fullFilterResult = myLayer.getFilterOIDs();
```

Use `applySqlFilter()` to apply all active SQL filters to the Layer on the map. This will actually change how the Layer appears on the map; features that don't pass the filter will not appear. Again, we can provide an exclusion array of keys to omit certain filters from the action. Not supported by Data Layers.

```js
// use all filters
myLayer.applySqlFilter();

// ignore the grid filters
myLayer.applySqlFilter(['grid']);
```
