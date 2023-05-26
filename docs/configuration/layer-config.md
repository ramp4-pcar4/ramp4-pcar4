# Layer Configuration

## Document Outline

Layer Configuration Properties

- [caching](#caching)
- [colour](#colour)
- [controls](#controls)
- [cosmetic](#cosmetic)
- [customRenderer](#customRenderer)
- [disabledControls](#disabledControls)
- [drawOrder](#drawOrder)
- [expectedDrawTime](#expectedDrawTime)
- [expectedLoadTime](#expectedLoadTime)
- [extent](#extent)
- [featureInfoMimeType](#featureInfoMimeType)
- [fieldMetadata](#fieldMetadata)
- [fixtures](#fixtures)
- [id](#id)
- [identifyMode](#identifyMode)
- [imageFormat](#imageFormat)
- [initialFilteredQuery](#initialFilteredQuery)
- [latField](#latField)
- [layerType](#layerType)
- [longField](#longField)
- [maxLoadTime](#maxLoadTime)
- [metadata](#metadata)
- [mouseTolerance](#mouseTolerance)
- [name](#name)
- [nameField](#nameField)
- [permanentFilteredQuery](#permanentFilteredQuery)
- [rawData](#rawData)
- [singleEntryCollapse](#singleEntryCollapse)
- [state](#state)
- [sublayers](#sublayers)
- [tooltipField](#tooltipField)
- [touchTolerance](#touchTolerance)
- [url](#url)
- [xyInAttribs](#xyInAttribs)

Additional Sections

- [Control Names](#control-names)
- [Image Format Types](#image-format-types)
- [Layer Abilities](#layer-abilities)
- [Map Image Sublayers](#map-image-sublayers)
- [WMS Sublayers](#wms-sublayers)

## Required Properties

### id

*string*,  **Required**

Serves as an identifier for the layer. Must be unique to the RAMP instance the layer is added to. Can be used to find the Layer API object via the RAMP API.

```js
{
    id: "myLayer"
}
```

### layerType

*string*, **Required**

Defines the type of layer data we are consuming. Will determine how the layer is instantiated in RAMP.

Valid values:

-  `esri-feature`: ESRI Feature Layer
-  `esri-map-image`: ESRI Map Image Layer (formerly known as Dynamic Layer)
-  `esri-tile`: ESRI Tile Layer
-  `esri-imagery`: ESRI Image Service
-  `esri-graphic`: ESRI Graphic Layer
-  `ogc-wfs`: OGC WFS 3.0
-  `ogc-wms`: OGC WMS
-  `file-geojson`: GeoJSON
-  `file-csv`: CSV File
-  `file-shape`: Shapefile (zipped)
-  `osm-tile`: OpenStreetMap Tile Layer

```js
{
    layerType: "esri-feature"
}
```

### url

*string*, **Required** 

The url where the layer definition and data should be loaded from. 

- ESRI type layers will be an ArcGIS Server rest endpoint. Feature layers must target the layer endpoint.
- WMS layers will be the WMS server url.
- WFS layers will be the server dataset url (i.e. something that returns GeoJSON).
- File type layers will point to a web hosted file, or an empty string if the `rawData` property is provided. Relative paths are supported.
- OSM layer is an empty string.

```js
{
    url: "https://mydomain.ca/arcgis/rest/services/fancymap/mapserver"
}
```

## Basic Properties

### controls

*array of string*

Defines what controls should be available for this layer in the app. This list acts as the "layer default", but controls on specific fixtures can be overridden by that fixture's configuration structure (typically in the `fixtures` object of the layer configuration, or the configuration object of the fixture itself).

See the [list of control names](#control-names) for valid values. If missing, all the valid controls will be included as a default. If `disabledControls` is also present on the layer config, that list will take priority and **any specified controls list will be ignored**.

Generally speaking, this config option is useful when there is a small list of controls to enable, avoiding defining a long list in `disabledControls`.

```js
{
    controls: ["visibility", "opacity"]
}
```

### cosmetic

*boolean*

Indicates if a layer should be treated as cosmetic; i.e. something that appears on the map to give additional context, but is generally not interacted with when using common functions. If missing, defaults to `false`.

```js
{
    cosmetic: true
}
```

### disabledControls

*array of string*

Defines what controls should be omitted / disabled for this layer in the app. This list acts as the "layer default", but disabled controls on specifc fixtures can be overridden by that fixture's configuration structure (typically in the `fixtures` object of the layer configuration, or the configuration object of the fixture itself).

See the [list of control names](#control-names) for valid values. If missing, enabled controls will be determined by the `controls` config value, or all valid controls will be enabled if `controls` is also missing.

Generally speaking, this config option is useful when there is a small list of controls to disable, avoiding defining a long list in `controls`.

```js
{
    disabledControls: ["identify", "remove"]
}
```

### expectedDrawTime

*integer*

Defines a time limit, in milliseconds, for the expected time it would take for the layer to draw itself (i.e. the fetching and processing of data to render the layer in the current extent). If the limit is exceeded, a notification will be issued in the app. If missing, a default of 10 seconds will be used. Setting to `0` will disable the notification.

```js
{
    expectedDrawTime: 5000
}
```

### expectedLoadTime

*integer*

Defines a time limit, in milliseconds, for the expected time it would take for the layer load (i.e. establishing contact with a server, the fetching of metadata, the downloading of data for file or WFS type layers). If the limit is exceeded, a notification will be issued in the app. If missing, a default of 4 seconds will be used. Setting to `0` will disable the notification.

```js
{
    expectedLoadTime: 5000
}
```

### extent

*object*

Defines a custom extent for the layer. Will be used in scenarios like the "Zoom To Layer Boundary" legend menu. If missing, the extent provided by the service or the extent of file contents will be used.

The object structure matches the ArcGIS Server [2D Envelope](https://developers.arcgis.com/documentation/common-data-types/geometry-objects.htm) schema. Spatial Reference schema is on the same page, we do not currently support `vcs` type references.

```js
{
    extent: {
        xmin: 22.2,
        ymin: 33.3,
        xmax: 44.4,
        ymax: 55.5,
        spatialReference: {
            wkid: 4326
        }
    }
}
```

### maxLoadTime

*integer*

Defines a time limit, in milliseconds, for the max amount of time it would take for the layer load (i.e. establishing contact with a server, the fetching of metadata, the downloading of data for file or WFS type layers). If the limit is exceeded, the layer will stop loading and produce an error. If missing, a default of 20 seconds will be used. Setting to `0` will allow the layer to load forever.

```js
{
    maxLoadTime: 10000
}
```

### metadata

*object*

Defines information about metadata for the layer. Only used if the `metadata` fixture (or comparable custom alternative) has been loaded in the application. In the standard case, the information is used to populate the metadata panel. If missing, the metadata controls option will not be shown for the layer.

TODO is there a name for the specification we support? What happens if it's just text file, is raw text shown?

```js
{
    metadata: {
        name: "My Custom Metadata Panel Name",
        url: "http://mydomain.ca/my_metadata_content.xml"
    }
}
```

### name

*string*

Defines the name of the layer. If missing, the name defined on the layer source will be used if possible.

```js
{
    name: "Fancy Layer"
}
```

### state

*object*

Defines the desired state of the layer at load time. 

- `visibility`: Boolean. If missing, will attempt to find an initial setting from the server, otherwise defaults to `true`.
- `opacity`: Decimal between 0 and 1. If missing, will default to full opacity.
- `identify`: Boolean. Ignored by layers that do not support identify requests. If missing, will default to `true`.
- `hovertips`: Boolean. Ignored by layers that do not support hover tips (usually raster-based layers). If missing, will default to `true`.
 
```js
{
    state: {
        visibility: true,
        opacity: 0.8,
        identify: false,
        hovertips: false
    }
}
```

## Fancy Properties

### caching

*boolean*, only applies to file based layers that have the [rawData](#rawdata) property set

Specifies if a layers raw data should be preserved after the layer is created. This type of layer does not have a server-based source to ask for the data again, so enabling caching will allow for reloads to occur. It will however double the memory footprint of the layer. If missing, defaults to `false`.

### colour

*string*, only applies to layers that [have vector client data](#layer-abilities)

Specifies a colour to use for a default basic renderer. E.g. loading a CSV File layer, this would define what colour the default circle symbol is filled with. The value is a standard colour hexcode string. If missing, a default colour is used.

If a `customRenderer` is configured, this is ignored. Any colours should be specified in the custom renderer.

Is ignored by ESRI Feature Layers since they have a server renderer or a custom renderer defined.

```js
{
    colour: "#F5F242"
}
```

### customRenderer

*object*, only applies to layers that [support attributes](#layer-abilities)

Specifies a renderer that determines how the layer features should be drawn. Currently only `simple`, `uniqueValue`, and `classBreaks` renderer types are supported. If missing, the server renderer will be used for Feature Layers, and basic renderers for other layer types (circles for Points, solid lines, solid polygons).

The object structure matches the ArcGIS Server [Renderer](https://developers.arcgis.com/documentation/common-data-types/renderer-objects.htm) schema. See also the [Symbol](https://developers.arcgis.com/documentation/common-data-types/symbol-objects.htm) schema. Example renderers can be found by inspecting the `json` output of ArcGIS Server feature layer endpoints.

```js
{
    customRenderer: { 
        type: "simple",
        label: "Fancy Sites",
        symbol: {
            type: "esriSMS",
            style: "esriSMSSquare",
            color: "#00FF00",
            size: 10
        }
    }
}
```

### drawOrder

*array of objects*, only applies to layers that [have vector client data](#layer-abilities)

Specifies the z-order of how graphics should be drawn on the map. While the array structure supports multiple fields, the current version of the ESRI API (`v4.24`) will only support one field. If missing, the default draw order will be used (usually Object ID, or an alternate primary index defined on the server).

It is highly recommended to use a field with unique values to avoid current limitations in the ESRI clients ability to determine a top-most feature (will impact maptip accuracy)

- `field`: string. The field name that contains the data to order by. Case sensitive.
- `ascending`: boolean. If `true`, smaller values will appear "on top" of larger values. `false` will produce the opposite order.

```js
{
    drawOrder: [
        {
            field: 'sortingId',
            ascending: true
        }
    ]
}
```

### fieldMetadata

*object*, only applies to layers that [support attributes](#layer-abilities)

Specifies additional attribute field information that will override the default values of the layer. Here we can specify custom field name aliases, and can instruct the layer to only use a subset of the available fields.

- `fieldInfo`: An array that contians objects having valid field names and a custom field alias. If using the `exclusiveFields` option, the alias can be left blank to use the field as-is. Field names are case sensitive.
- `exclusiveFields`: A boolean, if true, only fields in the `fieldInfo` array will be used in the layer.

Note that if the system requires additional fields that are missing in the `exclusiveFields` mode, they will be included in the map layer (e.g. an order-by field).

```js
{
    fieldMetadata: {
        fieldInfo: [
            {
                name: "comp_name",
                alias: "Company Name"
            },
            {
                name: "addr",
                alias: "Address"
            }
        ],
        exclusiveFields: true
    }
}
```

### fixtures

*object*

Specifies custom information for fixtures that require layer-specific configuration. E.g. the `grid` fixture displays content for one layer, so the configuration here could include a customized columns list to be applied to this layer.

The object structure is a string key being the fixture id, and a value being an object that the fixture will be expecting (i.e. entirely open-ended and fixture specific).

```js
{
    fixtures: { 
        grid: {
            title: "My Fancy Grid for this Layer"
        },
        myCustomFixture: {
            secretValue: 61,
            secretColour: "green"
        }
    }
}
```

### identifyMode

*string*, only applies to layers that [have vector client data](#layer-abilities)

Specifies the identify mode to use. Valid values are `geometric`, `symbolic`, or `hybrid`. If missing, `hybrid` will be used.

- Geometric involves doing a geometric intersection between the identify point (plus any tolerance buffering) and the geometery of the layer. This mode can be troublesome for point layers that have large or offset symbology, since a hit is based on the geographic location of the point, not how it is symbolized on the map.
- Symbolic involves detecting if the identify point intersected the symbol used to draw the feature. This can help mitigate the above scenario with point layers.
- Hybrid runs a geometric and symbolic query and combines the results.

Note that for layers with raster client data and that support identify, the `geometric` mode is used and is the only valid option (i.e. the operation is server side only). No configuration property is required.

```js
{
    identifyMode: "symbolic"
}
```

### imageFormat

*string*, only applies to  `esri-map-image`

Specifies the image format an ESRI Map Image Layer should return. See the [list of supported values](#image-format-types). If missing, `png32` is used (note the ESRI documentation claims `png24` is the default, but experimentation seems to indicate otherwise). In some cases, using a format that does not support image opacity will give undesired results.

```js
{
    imageFormat: "jpg"
}
```

### initialFilteredQuery

*string*, only applies to layers that [support attributes](#layer-abilities)

Specifies an attribute based filter to be applied to the layer at startup. Features that don't satisfy the filter will not be shown. At runtime, this filter can be accessed via the Layer API using the filter key `initial`.

Query format is that of an SQL WHERE clause, the part that comes after the keyword `WHERE`. See [this page](https://desktop.arcgis.com/en/arcmap/10.3/map/working-with-layers/building-a-query-expression.htm) for examples.

```js
{
    initialFilteredQuery: "resto_type = 'Pizza'"
}
```

### latField

*string*, only applies to `file-csv`

Specifies the attribute field containing the latitude co-ordinate of the layer. This property is required, and co-ordinates in alternate projections are not supported. Field name is case sensitive.

```js
{
    latField: "y"
}
```

### longField

*string*, only applies to `file-csv`

Specifies the attribute field containing the longitude co-ordinate of the layer. This property is required, and co-ordinates in alternate projections are not supported.Field name is case sensitive.

```js
{
    longField: "y"
}
```

### featureInfoMimeType

*string*, only applies to `ogc-wms`

Specifies the mime type of the result when running an identify (i.e. a `GetFeatureInfo` call). Valid values can vary based on what the target service supports. If missing, `text` is used.

```js
{
    featureInfoMimeType: "application/json"
}
```

### mouseTolerance

*integer*, only applies to layers that [support identify requests](#layer-abilities), with exceptions (see below)

Specifies a tolerance, in pixels, when requesting an identify result via a mouse click. E.g. if a tolerance of `3` is set, a hit box of 6 x 6 pixels will be created, centered at the click location. Thus any result that is orthogonally within 3 pixels will fall under the hit box and be included. If missing, a default of `5` is used.

Not supported for identify requests to WMS layers. While Map Image Layer Sublayers support identify requests, the tolerance is applied at the parent level and used for all sublayers.

```js
{
    mouseTolerance: 7
}
```

### nameField

*string*, only applies to layers that [support attributes](#layer-abilities)

Specifies an attribute field name to use as the "name" for a feature. This will be utilized in various places, such as the title of the basic Details panel. If missing, will attempt to find and use a name field specified by the host server, otherwise will use the Object ID. Field name is case sensitive.

```js
{
    nameField: "street_name"
}
```

### permanentFilteredQuery

*string*, only applies to layers that [support attributes](#layer-abilities)

Specifies an attribute based filter to be applied to the layer. Features that don't satisfy the filter will not be shown. At runtime, this filter can be read via the Layer API using the filter key `permanent`, but cannot be updated.

Query format is that of an SQL WHERE clause, the part that comes after the keyword `WHERE`. See [this page](https://desktop.arcgis.com/en/arcmap/10.3/map/working-with-layers/building-a-query-expression.htm) for examples.

This differs from the `initialFilteredQuery`, in that the filter is locked for the lifetime of the layer. For layers hosted on ArcGIS servers, this means other requests like fetching all attributes will only download valid matches. This can provide an efficiency and bandwidth saving if one is only focusing on a subset of a large layer.

File based layers will still download everything up-front, but will respect the filter afterwards. Same with WFS, but a WFS can apply a similar filter in its URL if the server will respect the parameter.

To align a legend symbol stack with a particular permanent filter, see the `symbologyStack` option of the [legend configuration](../app/legend.md#layer-item-1).

```js
{
    permanentFilteredQuery: "resto_type = 'Hamburger'"
}
```

### rawData

*string | object | ArrayBuffer*, only applies to file based layers

Specifies the file contents on the config. If provided, the `url` property will be ignored.

- `file-geojson`: The value can be a GeoJSON object, or a string containing the stringified GeoJSON object.
- `file-csv`: The value is the file content contained in a string, encoded in UTF-8.
- `file-shape`: The value is an `ArrayBuffer` containing the content of the zipped shapefile package. Given this is binary data, the `rawData` cannot be specified in a static config file, but can be provided if the configuration object is constructed at runtime.

```js
{
    rawData: {
        type: "FeatureCollection",
        features: [
            {
                type: "Feature",
                properties: {},
                geometry: {
                    coordinates: [
                        -76.769921,
                        44.423806
                    ],
                    type: "Point"
                }
            }
        ]
    }
}
```

### singleEntryCollapse

**This is currently not supported.** An alternative is to specify the `sublayerIndex` of the target child layer in the [legend configuration](../app/legend.md#layer-item-1).

*boolean*, only applies to `esri-map-image`

If `true`, will cause a default legend entry to be generated as a single entry, not a parent group with a child entry under it. Only valid if the Map Image Layer has one sublayer defined. If missing, defaults to `false.

```js
{
    singleEntryCollapse: true
}
```

### sublayers

*array of objects*, only applies to `esri-map-image` and `ogc-wms`

Contains metadata for the sublayers of a layer that supports them. See the [sublayers section](#sublayer-properties).

### tooltipField

*string*, only applies to layers that [have vector client data](#layer-abilities)

Specifies an attribute field name to use as the content for a tooltip when the mouse is over the feature. If missing, will use the `nameField` value. Field name is case sensitive.

```js
{
    tooltipField: "last_inspection"
}
```

### touchTolerance

*integer*, only applies to layers that [support identify requests](#layer-abilities), with exceptions (see below)

Specifies a tolerance, in pixels, when requesting an identify result via a screen touch. E.g. if a tolerance of `3` is set, a hit box of 6 x 6 pixels will be created, centered at the click location. Thus any result that is orthogonally within 3 pixels will fall under the hit box and be included. If missing, a default of `5` is used. Generally speaking, this tolerance should be larger than the layers `mouseTolerance` value due to the less precise nature of mashing ones finger on a touch screen.

Not supported for identify requests to WMS layers. While Map Image Layer Sublayers support identify requests, the tolerance is applied at the parent level and used for all sublayers.

```js
{
    touchTolerance: 7
}
```

### xyInAttribs

*boolean*, only applies to `ogc-wfs` layers with Point geometry

Specifies if the point geometry values should be copied into the feature attributes of the layer. If missing, defaults to `false`. When enabled, values will appear in fields `rvInternalCoordX` and `rvInternalCoordY`.

```js
{
    xyInAttribs: true
}
```

## Sublayer Properties

Sublayer objects define information about which sublayers are included and various properties about them.

### Map Image Sublayers

The required property is `index`, an integer that aligns to the layer index on the ArcGIS Server (called `id` in a Map Server's json response).

The sublayer also supports the following properties (see above for details). Some properties only apply to feature sublayers and not raster sublayers.

- `controls`
- `cosmetic`
- `customRenderer` (feature only)
- `disabledControls`
- `extent`
- `fieldMetadata` (feature only)
- `fixtures` 
- `initialFilteredQuery` (feature only)
- `name` 
- `nameField` (feature only)
- `state`

```js
{
    sublayers: [
        {
            index: 5,
            state: {
                opacity: 0.5
            },
            name: "Fancy Sublayer"
        },
        {
            index: 8
        }
    ]
}
```

### WMS Sublayers

The required property is `id`, a string that aligns to the layer `Name` on the WMS.

The sublayer also supports the following properties (see above for details).

- `controls`
- `disabledControls`
- `extent`
- `name` 
- `state`

```js
{
    sublayers: [
        {
            id: "Houses",
            state: {
                opacity: 0.7
            },
            name: "Nice Homes"
        }
    ]
}
```

#### Beta Property - styleLegends

This is not fully implemented, but the limited functionality can allow one to override the sublayer's legend graphic. It will only work on the sublayer's default style.

```js
{
    sublayers: [
        {
            id: "Houses",
            styleLegends: [
                {
                    name: "defaultStyleName",
                    url: "http://www.myserver.ca/custom-legend-graphic.png"
                }
            ]
        }
    ]
}
```

## Additional Information

### Control Names

These represent control names that can be enabled or disabled throughout the standard application fixtures.

- `boundaryZoom`: Zoom map to layer's boundary.
- `datatable`: Access to the Data Table fixture panel.
- `identify`: Layer reacts to identify requests.
- `metadata`: Access to the Metadata fixture panel.
- `opacity`: Layer opacity.
- `refresh`: Time-sensitive layer refresh interval. **Currently not supported**.
- `reload`: Reload the layer. 
- `remove`: Remove the layer from the map / application.
- `settings`: Access to the Settings fixture panel.
- `symbology`: Access to the symbology stack in the Legend fixture panel.
- `visibility`: Layer visibility.

### Image Format Types

These represent formats an ESRI Map Image Layer can return. 

- `png`
- `png8`
- `png24`
- `png32`
- `jpg`
- `pdf`
- `bmp`
- `gif`
- `svg`

### Layer Abilities

This indicates which layer types can support certain sets of abilities

| Layer Type      | Identify  | Attributes   | Local Data | Client Data Format |
| ----------- | ----------- | ------------ | ------------ | ------------ | 
| ESRI Feature Layer  |  Yes     | Yes               | No  | Vector |
| ESRI Map Image Layer | Yes | No | No | Raster |
| ESRI M.I.L. Feature Sublayer | Yes | Yes | No | Raster |
| ESRI M.I.L. Raster Sublayer | No | No | No | Raster |
| ESRI Image Server Layer | No | No | No | Raster |
| ESRI Tile Layer | No | No | No | Raster |
| OGC WMS Layer | Yes | No | No | Raster |
| OGC WFS 3.0 Layer | Yes | Yes | Yes | Vector |
| GeoJSON Layer | Yes | Yes | Yes | Vector |
| CSV Layer | Yes | Yes | Yes | Vector |
| Shapefile Layer | Yes | Yes | Yes | Vector |
| OpenStreetMap Tile Layer | No | No | No | Raster |
