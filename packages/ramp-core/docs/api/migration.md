# API Migration Guide

A list things that have changed (as in, breaking change) from the RAMP2 API

## Instance API

In RAMP2, most things were accessed by retrieving the Map API object via the global `RAMP` object.

`var myMap = RAMP.mapById('myMapId');`

In RAMP4, there is an Instance API for each incarnation of RAMP. This is similar to the RAMP2 Map API, but it serves as the entry point for all API calls. TODO link to API docpages and/or relevant other markdown docs.

## GEOM

- Geometries are no longer always in Lat-Long projection & co-ord values.
- `SpatialReference` is added and is a property of all geometry objects.
- `XY` class is removed, as it's main purpose was to shuttle values between Lat-Long and other projections.
- `XYBounds` class is now `Extent`, and shares the same base class as other geometries.
- All geometry constructors have optional spatial reference parameter. Not providing it will default to Lat-Long. Note that co-ord inputs will not be projected, they will be assumed to be in Lat-Long already.