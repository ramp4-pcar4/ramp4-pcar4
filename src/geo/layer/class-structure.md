# Guide for devs on how layer classes hang together

## Inheritance Chain

LayerInstance: RAMP's internal "base class" for layers. Any code dealing with generic layers should use this class.

~ CommonLayer: The generic class for layers that are implemented inside RAMP core.

~ ~ MapLayer: The generic class for layers that implement a layer on the map.

~ ~ ~ TileLayer: Handles ArcGIS Server Tile layers.

~ ~ ~ ImageryLayer: Handles ArcGIS Server Imagery layers.

~ ~ ~ ImageryTileLayer: Handles ArcGIS Server Imagery Tile layers.

~ ~ ~ WMSLayer: Handles WMS layers.

~ ~ ~ MapImageLayer: Handles ArcGIS Server Map Image layers (formerly Dynamic layers).

~ ~ ~ AttributeLayer: The generic class for layers that deal with attributes / features.

~ ~ ~ ~ FeatureLayer: Handles ArcGIS Server Feature layers.

~ ~ ~ ~ MapImageSublayer: Handles sublayers of ArcGIS Server Map Image layers. These are instantiated by MapImageLayers.

~ ~ ~ ~ FileLayer: The generic class for layers that front-load all their feature data (no server refreshes).

~ ~ ~ ~ ~ CsvLayer: Handles layers populated by a CSV file.

~ ~ ~ ~ ~ GeoJsonLayer: Handles layers populated by a GeoJson object.

~ ~ ~ ~ ~ WfsLayer: Handles layers populated by a WFS service.

~ ~ ~ ~ ~ ShapefileLayer: Handles layers populated by a zipped shapefile.

~ ~ ~ CommonGraphicLayer: The generic class for Graphic layers.

~ ~ ~ ~ GraphicLayer: Handles basic client-side Graphic layer.

~ ~ DataLayer: The generic class for layers that do not have a layer on the map.

~ ~ ~ CsvDataLayer: Handles data layers populated by a CSV file. (Not created yet)

~ ~ ~ JsonDataLayer: Handles data layers populated by a Compact Json dataset

~ ~ ~ TableLayer: Handles data layers populated by an ArcGIS Table

## Initiation Chain

Useful for figuring out where to put checkpoints for "cancel load" kickouts.
This chain is the `onInitiate()` calls. They tend to go backwards (subclass --> superclass) with the exception of MapLayer calling CommonLayer as an early step.

~ CommonLayer: Just saftey checks.

~ ~ MapLayer: Just wires up layer events, sets statuses.

~ ~ ~ FeatureLayer, MapImageLayer, WMSLayer, TileLayer, ImageryLayer, ImageryTileLayer, GraphicLayer: Generates ESRI layer.

~ ~ ~ FileLayer: Converts GeoJSON to EsriJSON. Blocks, but only for projection validation

~ ~ ~ ~ GeoJsonLayer, CsvLayer, ShapefileLayer: Gets data, converts to GeoJSON. Blocks if file is server based. Some converters block but processing is local.

~ ~ ~ ~ WfsLayer: Blocks as it downloads GeoJSON.

~  MapImageSublayer: Just sets status.

~ DataLayer: Just data setup, local processing.

~ ~ JsonDataLayer: Gets data. Blocks if file is server based.

~ TableLayer: Does nothing.

~ AttributeLayer, CommonGraphicLayer: No method. Drills through to superclass.