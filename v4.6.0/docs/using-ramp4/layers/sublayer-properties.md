# Sublayer Properties

Sublayer objects define information about which sublayers are included and various properties about them.

## Map Image Sublayers

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

## WMS Sublayers

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

### Beta Property - styleLegends

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