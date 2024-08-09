# Additional Layer Information

- [Control Names](#control-names)
- [Image Format Types](#image-format-types)
- [Layer Abilities](#layer-abilities)

## Control Names

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

Data Layers will ignore settings that are map-related, with the exception of `visibility`. In this case, visibility would control if attribute data is considered visible.

## Image Format Types

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

## Layer Abilities

This indicates which layer types can support certain sets of abilities

| Layer Type      | Map Layer | Identify  | Attributes   | Local Data | Client Data Format |
| ----------- | ----------- | ----------- | ------------ | ------------ | ------------ |
| ESRI Feature Layer  |  Yes  |  Yes     | Yes               | No  | Vector |
| ESRI Map Image Layer |  Yes  | Yes | No | No | Raster |
| ESRI M.I.L. Feature Sublayer |  Yes  | Yes | Yes | No | Raster |
| ESRI M.I.L. Raster Sublayer |  Yes  | No | No | No | Raster |
| ESRI Image Server Layer |  Yes  | No | No | No | Raster |
| ESRI Tile Layer |  Yes  | No | No | No | Raster |
| OGC WMS Layer |  Yes  | Yes | No | No | Raster |
| OGC WFS 3.0 Layer |  Yes  | Yes | Yes | Yes | Vector |
| GeoJSON Layer |  Yes  | Yes | Yes | Yes | Vector |
| CSV Layer |  Yes  | Yes | Yes | Yes | Vector |
| Shapefile Layer |  Yes  | Yes | Yes | Yes | Vector |
| OpenStreetMap Tile Layer |  Yes  | No | No | No | Raster |
| ESRI Table Layer |  No  | No | Yes | No | N/A |
| Non Spatial CSV Layer |  No  | No | Yes | Yes | N/A |
| Compact JSON Layer |  No  | No | Yes | Yes | N/A |