# Basic Layer Properties

## controls

*array of string*

Defines what controls should be available for this layer in the app. This list acts as the "layer default", but controls on specific fixtures can be overridden by that fixture's configuration structure (typically in the `fixtures` object of the layer configuration, or the configuration object of the fixture itself).

See the [list of control names](./additional-layer-sections.md#control-names) for valid values. If missing, all the valid controls will be included as a default. If `disabledControls` is also present on the layer config, that list will take priority and **any specified controls list will be ignored**.

Generally speaking, this config option is useful when there is a small list of controls to enable, avoiding defining a long list in `disabledControls`.

```js
{
    controls: ["visibility", "opacity"]
}
```

## cosmetic

*boolean*, only applies to [map layers](./additional-layer-sections.md#layer-abilities)

Indicates if a layer should be treated as cosmetic; i.e. something that appears on the map to give additional context, but is generally not interacted with when using common functions. If missing, defaults to `false`.

```js
{
    cosmetic: true
}
```

## disabledControls

*array of string*

Defines what controls should be omitted / disabled for this layer in the app. This list acts as the "layer default", but disabled controls on specifc fixtures can be overridden by that fixture's configuration structure (typically in the `fixtures` object of the layer configuration, or the configuration object of the fixture itself).

See the [list of control names](./additional-layer-sections.md#control-names) for valid values. If missing, enabled controls will be determined by the `controls` config value, or all valid controls will be enabled if `controls` is also missing.

Generally speaking, this config option is useful when there is a small list of controls to disable, avoiding defining a long list in `controls`.

```js
{
    disabledControls: ["identify", "remove"]
}
```

## expectedDrawTime

*integer*, only applies to [map layers](./additional-layer-sections.md#layer-abilities)

Defines a time limit, in milliseconds, for the expected time it would take for the layer to draw itself (i.e. the fetching and processing of data to render the layer in the current extent). If the limit is exceeded, a notification will be issued in the app. If missing, the map level configuration will be used. This defaults to 10000 (10 seconds). Setting to `0` will disable the notification.

```js
{
    expectedDrawTime: 5000
}
```

## expectedLoadTime

*integer*

Defines a time limit, in milliseconds, for the expected time it would take for the layer load (i.e. establishing contact with a server, the fetching of metadata, the downloading of data for file or WFS type layers). If the limit is exceeded, a notification will be issued in the app. If missing, the map level configuration will be used. This defaults to 10000 (10 seconds). Setting to `0` will disable the notification.

```js
{
    expectedLoadTime: 5000
}
```

## extent

*object*, only applies to [map layers](./additional-layer-sections.md#layer-abilities)

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

## maxLoadTime

*integer*

Defines a time limit, in milliseconds, for the max amount of time it would take for the layer load (i.e. establishing contact with a server, the fetching of metadata, the downloading of data for file or WFS type layers). If the limit is exceeded, the layer will stop loading and produce an error. If missing, a default of 20 seconds will be used. Setting to `0` will allow the layer to load forever.

```js
{
    maxLoadTime: 10000
}
```

## metadata

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

## name

*string*

Defines the name of the layer. If missing, the name defined on the layer source will be used if possible.

```js
{
    name: "Fancy Layer"
}
```

## state

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