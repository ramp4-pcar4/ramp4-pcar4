# Guide for devs on how layer classes hang together

LayerInstance: RAMP's internal "base class" for layers. Any code dealing with generic layers should use this class.

~ CommonLayer: The generic class for layers that are implemented inside RAMP core.

~ ~ MapLayer: The generic class for layers that implement a layer on the map.

~ ~ ~ TileLayer: Handles ArcGIS Server Tile layers.

~ ~ ~ ImageryLayer: Handles ArcGIS Server Imagery layers.

~ ~ ~ WMSLayer: Handles WMS layers.

~ ~ ~ AttributeLayer: The generic class for layers that deal with attributes / features.

~ ~ ~ ~ FeatureLayer: Handles ArcGIS Server Feature layers.

~ ~ ~ ~ MapImageLayer: Handles ArcGIS Server Map Image layers (formerly Dynamic layers).

~ ~ ~ ~ MapImageSublayer: Handles sublayers of ArcGIS Server Map Image layers. These are instantiated by MapImageLayers.

~ ~ ~ ~ FileLayer: The generic class for layers that front-load all their feature data (no server refreshes).

~ ~ ~ ~ ~ CsvLayer: Handles layers populated by a CSV file.

~ ~ ~ ~ ~ GeoJsonLayer: Handles layers populated by a GeoJson object.

~ ~ ~ ~ ~ WfsLayer: Handles layers populated by a WFS service.

~ ~ ~ ~ ~ ShapefileLayer: Handles layers populated by a zipped shapefile.

~ ~ DataLayer: The generic class for layers that do not have a layer on the map.

~ ~ ~ CsvDataLayer: Handles data layers populated by a CSV file.

~ ~ ~ JsonDataLayer: Handles data layers populated by a Compact Json dataset

~ ~ ~ TableLayer: Handles data layers populated by an ArcGIS Table