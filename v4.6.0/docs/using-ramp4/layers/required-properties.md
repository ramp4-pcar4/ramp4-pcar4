# Required Layer Properties

## id

*string*,  **Required**

Serves as an identifier for the layer. Must be unique to the RAMP instance the layer is added to. Can be used to find the Layer API object via the RAMP API.

```js
{
    id: "myLayer"
}
```

## layerType

*string*, **Required**

Defines the type of layer data we are consuming. Will determine how the layer is instantiated in RAMP.

Valid values:

- `esri-feature`: ESRI Feature Layer
- `esri-map-image`: ESRI Map Image Layer (formerly known as Dynamic Layer)
- `esri-tile`: ESRI Tile Layer
- `esri-imagery`: ESRI Image Service
- `esri-graphic`: ESRI Graphic Layer
- `ogc-wfs`: OGC WFS 3.0
- `ogc-wms`: OGC WMS
- `file-geojson`: GeoJSON
- `file-csv`: CSV File
- `file-shape`: Shapefile (zipped)
- `osm-tile`: OpenStreetMap Tile Layer
- `data-esri-table`  ESRI Table Layer
- `data-csv` Non Spatial CSV File
- `data-json` [Compact JSON](/docs/api-guides/layers.md#data-layers) File

```js
{
    layerType: "esri-feature"
}
```

## url

*string*, **Required**

The url where the layer definition and data should be loaded from.

- ESRI type layers will be an ArcGIS Server rest endpoint. Feature layers and Table layers must target the layer endpoint.
- WMS layers will be the WMS server url.
- WFS layers will be the server dataset url (i.e. something that returns GeoJSON).
- File type layers will point to a web hosted file, or an empty string if the `rawData` property is provided. Relative paths are supported. Data layers in file formats also apply.
- OSM layer is an empty string.

```js
{
    url: "https://mydomain.ca/arcgis/rest/services/fancymap/mapserver"
}
```