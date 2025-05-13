# Fancy Properties

## caching

*boolean*, only applies to file based layers that have the [rawData](#rawdata) property set

Specifies if a layers raw data should be preserved on the config object after the layer is created. Using this will double the memory footprint of the layer. 

If missing, defaults to `false`.

A scenario where this can be useful is a host page containing a collection of layer configuration objects and controls to allow users to add and remove these layer at whim. Without caching, the `rawData` will get erased after a first add and thus fail if removed and added again.

Enabling caching will allow for layer reloads to occur. In most scenarios there is no reason to reload this type of layer (the data is static, and any load errors will typically recur on reload).

## colour

*string*, only applies to layers that [have vector client data](./additional-layer-sections.md#layer-abilities)

Specifies a colour to use for a default basic renderer. E.g. loading a CSV File layer, this would define what colour the default circle symbol is filled with. The value is a standard colour hexcode string. If missing, a default colour is used.

If a `customRenderer` is configured, this is ignored. Any colours should be specified in the custom renderer.

Is ignored by ESRI Feature Layers since they have a server renderer or a custom renderer defined.

```js
{
    colour: "#F5F242"
}
```

## customRenderer

*object*, only applies to layers that [support attributes](./additional-layer-sections.md#layer-abilities), Data Layers excluded

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

## drawOrder

*array of objects*, only applies to layers that [have vector client data](./additional-layer-sections.md#layer-abilities)

Specifies the z-order of how graphics should be drawn on the map. While the array structure supports multiple fields, the current version of the ESRI API (`v4.29`) will only support one field. If missing, the draw order will be the order that features are returned from the source.

- `field`: string. The field name that contains the values to order by. Case sensitive. The field must have a numeric or date data type.
- `arcade`: string. An [Arcade](https://developers.arcgis.com/javascript/latest/arcade/) expression that evaluates to a number or date. Draw order will be based on the expression result.
- `ascending`: boolean. If `true`, smaller values will appear "on top" of larger values. `false` will produce the opposite order. Defaults to `true`.

One of `field` or `arcade` must be specified, but not both.

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

## featureInfoMimeType

*string*, only applies to `ogc-wms`

Specifies the mime type of the result when running an identify (i.e. a `GetFeatureInfo` call). Valid values can vary based on what the target service supports. If missing, `text` is used.

```js
{
    featureInfoMimeType: "application/json"
}
```

## fieldMetadata

*object*, only applies to layers that [support attributes](./additional-layer-sections.md#layer-abilities)

Specifies additional attribute field information that will override the default values of the layer. Here we can specify custom field name aliases, and can instruct the layer to only use a subset of the available fields.

- `fieldInfo`: An array that contians objects having valid field names and a custom field alias. If using the `exclusiveFields` option, the alias can be left blank to use the field as-is. Field names are case sensitive.
- `exclusiveFields`: A boolean, if true, only fields in the `fieldInfo` array will be used in the layer.
- `enforceOrder`: A boolean, if true, the order of the fields in the `fieldInfo` array will be enforced when the grid is displayed. If not all fields are specified in the `fieldInfo` array and the `exclusiveFields` option is not used or is false, then only the specified columns will be displayed in order, followed by the rest of the columns in the order as it appears in the source.

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
        exclusiveFields: true,
        enforceOrder: true
    }
}
```

## fixtures

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

## identifyMode

*string*, only applies to layers that [have vector client data](./additional-layer-sections.md#layer-abilities)

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

## imageFormat

*string*, only applies to  `esri-map-image`

Specifies the image format an ESRI Map Image Layer should return. See the [list of supported values](./additional-layer-sections.md#image-format-types). If missing, `png32` is used (note the ESRI documentation claims `png24` is the default, but experimentation seems to indicate otherwise). In some cases, using a format that does not support image opacity will give undesired results.

```js
{
    imageFormat: "jpg"
}
```

## initialFilteredQuery

*string*, only applies to layers that [support attributes](./additional-layer-sections.md#layer-abilities)

Specifies an attribute based filter to be applied to the layer at startup. Features that don't satisfy the filter will not be shown. At runtime, this filter can be accessed via the Layer API using the filter key `initial`.

Query format is that of an SQL WHERE clause, the part that comes after the keyword `WHERE`. See [this page](https://desktop.arcgis.com/en/arcmap/10.3/map/working-with-layers/building-a-query-expression.htm) for examples.

```js
{
    initialFilteredQuery: "resto_type = 'Pizza'"
}
```

## latField

*string*, only applies to `file-csv`

Specifies the attribute field containing the latitude co-ordinate of the layer. This property is required, and co-ordinates in alternate projections are not supported. Field name is case sensitive.

```js
{
    latField: "y"
}
```

## longField

*string*, only applies to `file-csv`

Specifies the attribute field containing the longitude co-ordinate of the layer. This property is required, and co-ordinates in alternate projections are not supported.Field name is case sensitive.

```js
{
    longField: "y"
}
```

## mouseTolerance

*integer*, only applies to layers that [support identify requests](./additional-layer-sections.md#layer-abilities), with exceptions (see below)

Specifies a tolerance, in pixels, when requesting an identify result via a mouse click. E.g. if a tolerance of `3` is set, a hit box of 6 x 6 pixels will be created, centered at the click location. Thus any result that is orthogonally within 3 pixels will fall under the hit box and be included. If missing, a default of `5` is used.

Not supported for identify requests to WMS layers. While Map Image Layer Sublayers support identify requests, the tolerance is applied at the parent level and used for all sublayers.

```js
{
    mouseTolerance: 7
}
```

## nameField

*string*, only applies to layers that [support attributes](./additional-layer-sections.md#layer-abilities)

Specifies an attribute field name to use as the "name" for a feature. This will be utilized in various places, such as the title of the basic Details panel. If missing, will attempt to find and use a name field specified by the host server, otherwise will use the Object ID. Field name is case sensitive.

```js
{
    nameField: "street_name"
}
```

## permanentFilteredQuery

*string*, only applies to layers that [support attributes](./additional-layer-sections.md#layer-abilities)

Specifies an attribute based filter to be applied to the layer. Features that don't satisfy the filter will not be shown. At runtime, this filter can be read via the Layer API using the filter key `permanent`, but cannot be updated.

Query format is that of an SQL WHERE clause, the part that comes after the keyword `WHERE`. See [this page](https://desktop.arcgis.com/en/arcmap/10.3/map/working-with-layers/building-a-query-expression.htm) for examples.

This differs from the `initialFilteredQuery`, in that the filter is locked for the lifetime of the layer. For layers hosted on ArcGIS servers, this means other requests like fetching all attributes will only download valid matches. This can provide an efficiency and bandwidth saving if one is only focusing on a subset of a large layer.

File based layers will still download everything up-front, but will respect the filter afterwards. Same with WFS, but a WFS can apply a similar filter in its URL if the server will respect the parameter.

To align a legend symbol stack with a particular permanent filter, see the `symbologyStack` option of the [legend configuration](/using-ramp4/fixtures/legend.md#layer-item-1).

```js
{
    permanentFilteredQuery: "resto_type = 'Hamburger'"
}
```

## rawData

*string | object | ArrayBuffer*, only applies to file based layers (including Data layers in file formats)

Specifies the file contents on the config. If provided, the `url` property will be ignored.

For memory considerations, this property will be deleted from the configuration object after the layer loads. If it needs to be preserved, enable the [caching](#caching) configuration.

- `file-geojson`: The value can be a GeoJSON object, or a string containing the stringified GeoJSON object.
- `file-csv`: The value is the file content contained in a string, encoded in UTF-8.
- `file-shape`: The value is an `ArrayBuffer` containing the content of the zipped shapefile package. Given this is binary data, the `rawData` cannot be specified in a static config file, but can be provided if the configuration object is constructed at runtime.
- `data-json`: The value can be a [Compact JSON](/api-guides/layers.md#data-layers) object, or a string containing the stringified Compact JSON object.

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

## singleEntryCollapse

**This is currently not supported.** An alternative is to specify the `sublayerIndex` of the target child layer in the [legend configuration](/using-ramp4/fixtures/legend.md#layer-item-1).

*boolean*, only applies to `esri-map-image`

If `true`, will cause a default legend entry to be generated as a single entry, not a parent group with a child entry under it. Only valid if the Map Image Layer has one sublayer defined. If missing, defaults to `false.

```js
{
    singleEntryCollapse: true
}
```

## sublayers

*array of objects*, only applies to `esri-map-image` and `ogc-wms`

Contains metadata for the sublayers of a layer that supports them. See the [sublayers section](./sublayer-properties.md).

## tooltipField

*string*, only applies to layers that [have vector client data](./additional-layer-sections.md#layer-abilities)

Specifies an attribute field name to use as the content for a tooltip when the mouse is over the feature. If missing, will use the `nameField` value. Field name is case sensitive.

```js
{
    tooltipField: "last_inspection"
}
```

## touchTolerance

*integer*, only applies to layers that [support identify requests](./additional-layer-sections.md#layer-abilities), with exceptions (see below)

Specifies a tolerance, in pixels, when requesting an identify result via a screen touch. E.g. if a tolerance of `3` is set, a hit box of 6 x 6 pixels will be created, centered at the click location. Thus any result that is orthogonally within 3 pixels will fall under the hit box and be included. If missing, a default of `5` is used. Generally speaking, this tolerance should be larger than the layers `mouseTolerance` value due to the less precise nature of mashing ones finger on a touch screen.

Not supported for identify requests to WMS layers. While Map Image Layer Sublayers support identify requests, the tolerance is applied at the parent level and used for all sublayers.

```js
{
    touchTolerance: 7
}
```

## xyInAttribs

*boolean*, only applies to `ogc-wfs` layers with Point geometry

Specifies if the point geometry values should be copied into the feature attributes of the layer. If missing, defaults to `false`. When enabled, values will appear in fields `rvInternalCoordX` and `rvInternalCoordY`.

```js
{
    xyInAttribs: true
}
```