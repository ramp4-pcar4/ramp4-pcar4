# Guide for devs on how layer classes hang together


LayerBase (Interface): every layer must implement this. A custom layer outside of RAMP would use this as its guide.

LayerInstance: RAMP's internal "base class" for layers. Implements `LayerBase`. Any code dealing with generic layers should use this class. A custom outside layer (that does not have access to RAMP internals) will get converted to this baseclass via `LayerInstance.updateBaseToInstance()`

- - CommonLayer: The generic class for layers that are implemented inside RAMP core.

- - - TileLayer: Handles ArcGIS Server Tile layers.

- - - ImageryLayer: Handles ArcGIS Server Imagery layers.

- - - WMSLayer: Handles WMS layers.

- - - AttributeLayer: The generic class for layers that deal with attributes / features.

- - - - FeatureLayer: Handles ArcGIS Server Feature layers.

- - - - MapImageLayer: Handles ArcGIS Server Map Image layers (formerly Dynamic layers).

- - - - FileLayer: The generic class for layers that front-load all their feature data (no server refreshes).

- - - - - CsvLayer: Handles layers populated by a CSV file.

- - - - - GeoJsonLayer: Handles layers populated by a GeoJson object.

- - - - - WfsLayer: Handles layers populated by a WFS service.

- - - - - ShapefileLayer: Handles layers populated by a zipped shapefile.