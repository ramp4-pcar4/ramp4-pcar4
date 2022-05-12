# API Geometry Classes

In general, the constructors are very flexible in accepting the varying and mixed geometry formats. The geometry input is parsed recursively, so in almost all cases if it makes sense logically, the constructor will parse it.

This document uses the global `RAMP.geo.geom` object as the source of geometry constructors. However they are also available on the Ramp Instance API, via the `.geo.geom` object. So `RAMP.geo.geom.Point()` and `rInstance.geo.geom.Point()` are the same. Use whichever source is most convenient.

## Spatial Reference

This is fairly in-line with ESRI's format. It supports WKID and WKT, and optional latestWKID parameters.

```
const g = RAMP.geo.geom;
const lambertSR = new g.SpatialReference(3978);
const fancySRwithLatest = new g.SpatialReference(102100, 3857);
const azimuthSR = new g.SpatialReference('PROJCS["Sphere_ARC_INFO_Azimuthal_Equidistant",GEOGCS["GCS_Sphere_ARC_INFO",DATUM["D_Sphere_ARC_INFO",SPHEROID["Sphere_ARC_INFO",6370997.0,0.0]],PRIMEM["Greenwich",0.0],UNIT["Degree",0.0174532925199433]],PROJECTION["Azimuthal_Equidistant"],PARAMETER["False_Easting",0.0],PARAMETER["False_Northing",0.0],PARAMETER["Central_Meridian",-90.0],PARAMETER["Latitude_Of_Origin",90.0],UNIT["Meter",1.0]]');
const iAmFalse = lambertSR.isEqual(aziumthSR);
```

## Point

Various co-ordinate inputs of the constructors.

```
const g = RAMP.geo.geom;
const pt1 = new g.Point('myid', [-76.77, 44.42]);
const pt2 = new g.Point('myid', {x: -76.77, y: 44.42});
const pt3 = new g.Point('myid', pt2);
const pt4 = new g.Point('myid', [-76.77, '44.42']);
const pt5 = new g.Point('myid', {x: '-76.77', y: 44.42});
```

Various methods

```
const pt = new RAMP.geo.geom.Point('myid', [-76.77, 44.42]);
pt.type; // 'Point'
pt.id; // 'myid'
pt.sr; // { wkid: 4326 }
pt.x; // -76.77
pt.y; // 44.42
pt.toArray(); // [-76.77, 44.42]
pt.x = -77.13; // point has updated.
```

### Spatial References on Geometry

The optional constructor parameter for spatial references is available on all geometry. We will use `Point` to illustrate.

```
const g = RAMP.geo.geom;
const lambertSR = new g.SpatialReference(3978);
const lambertPt1 = new g.Point('myid', [1461066.3, -303263.6], lambertSR);
const lambertPt2 = new g.Point('myid', [1461066.3, -303263.6], 3978);
const lambertPt3 = new g.Point('myid', lambertPt); // Note no explicit spatial reference passed in. Single RAMP geometry inputs provide their SR to the new instance
const badLambertPt = new g.Point('myid', [1461066.3, -303263.6]); // will have lambert values and Lat-Long spatial reference
const wktPt = new g.Point('myid', [123, 456], 'wkt string value');
```

### Raw Input for Geometry

If the co-ordinate input is a well formed array of numbers (including that all polygon rings are closed), we can leverage the optional `raw` flag on the constructor. This is an efficiency flag, indicating the data can be consumed as is, there is no need to validate and parse the values. This option exists for all geometry types except `Extent`. If in doubt of the array format, it will always match the output of the `.toArray()` method of the particular geometry type.

While our `Point` example may seem trivial, performance gains are to be had when dealing with geometries having high vertex counts.

```
const lambertPt = new RAMP.geo.geom.Point('myid', [1461066.3, -303263.6], 3978, true);
```

## MultiPoint

Various co-ordinate inputs of the constructors.

```
const g = RAMP.geo.geom;
const mptFromCoords = new g.MultiPoint('myid', [[-76.77, 44.42], [-68.69, 51.39]]);
const mptFromMultiPt = new g.MultiPoint('myid', mptFromCoords);
const pt = new g.Point('myid', [-76.77, 44.42]);
const mptMixedPoints = new g.MultiPoint('myid', [pt, [-68.69, 51.39], {x: "-97.86", y: 55.74}]);
```

Various methods

```
const mpt = new RAMP.geo.geom.MultiPoint('myid', [[-76.77, 44.42], [-68.69, 51.39]]);
mpt.type;                // 'MultiPoint'
mpt.id;                  // 'myid'
mpt.sr;                  // { wkid: 4326 }
mpt.length;              // 2
mpt.pointArray;          // [Point, Point] where each Point corresponds to the co-ords and is typed as RAMP API Point. These Points are not bound to the MultiPoint.
mpt.toArray();           // [[-76.77, 44.42], [-68.69, 51.39]]

const pt = mpt.getAt(0); // Point corresponding to -76.77, 44.42. This object is not bound to the MultiPoint
pt.x = -78.22;           // pt has updated, mpt has not
mpt.updateAt(pt, 0);     // multipoint innards are now [[-78.22, 44.42], [-68.69, 51.39]]
```

## Line String

This has effectively the same interface as `MultiPoint`, so examples will be sparse. `LineString` enforces a minimum of two vertices.

```
const lineFromCoords = new RAMP.geo.geom.LineString('myid', [[-76.77, 44.42], [-68.69, 51.39]]);
const lineFromLine = new RAMP.geo.geom.LineString('myid', lineFromCoords); // also accepts MultiPoint
lineFromCoords.type; // 'LineString'
```

## Linear Ring

This also has effectively the same interface as `MultiPoint`. `LinearRing` enforces that the last vertex must be identical to the first vertex. However, being both smart and kind, the constructor will inject a closing vertex if it is missing from the source. After closure, `LinearRing` expects a minimum of four vertices. For optimal drawing, the vertices should be in a clockwise order.

```
const ringIncomplete = new RAMP.geo.geom.LinearRing('myid', [[-76.77, 44.42], [-97.86, 55.74], [-68.69, 51.39]]);
ringIncomplete.toArray(); // [[-76.77, 44.42], [-97.86, 55.74], [-68.69, 51.39], [-76.77, 44.42]]
ringIncomplete.type;      // 'LinearRing'
```

## Multi Line String

Various co-ordinate inputs of the constructors.

```
const g = RAMP.geo.geom;
const mlsFromCoords = new g.MultiLineString('myid', [[[-76.77, 44.42], [-80.95, 49.96], [-68.69, 51.39]], [[-97.86, 55.74], [-82.15, 49.34]]]);
const mlsFromMultiLine = new g.MultiLineString('myid', mlsFromCoords); // also accepts LineString, MultiPoint
const line = new g.LineString('myid', [[-97.86, 55.74], [-82.15, 49.34]]);
const point = new g.Point('myid', [-68.69, 51.39]);
const mlsFromMixedLines = new g.MultiLineString('myid', [[[-76.77, "44.42"], {x: "-80.95", y: 49.96}, point], line]);
```

Various methods

```
const mls = new RAMP.geo.geom.MultiLineString('myid', [[[-76.77, 44.42], [-80.95, 49.96], [-68.69, 51.39]], [[-97.86, 55.74], [-82.15, 49.34]]]);
mls.type;                // 'MultiLineString'
mls.id;                  // 'myid'
mls.sr;                  // { wkid: 4326 }
mls.length;              // 2
mls.lineArray;           // [LineString, LineString] where each LineString corresponds to the line co-ords and is typed as RAMP API LineString. These LineStrings are not bound to the MultiLineString.
mls.toArray();           // [[[-76.77, 44.42], [-80.95, 49.96], [-68.69, 51.39]], [[-97.86, 55.74], [-82.15, 49.34]]]

const ln = mls.getAt(1); // Line corresponding to [-97.86, 55.74], [-82.15, 49.34]. This object is not bound to the MultiLineString
const pt = new RAMP.geo.geom.Point('pt', [-99, 55]);
ln.updateAt(pt, 0);
mls.updateAt(ln, 1);     // multilinestring innards are now [[[-76.77, 44.42], [-80.95, 49.96], [-68.69, 51.39]], [[-99, 55], [-82.15, 49.34]]]
```

## Polygon

Various co-ordinate inputs of the constructors.

```
const g = RAMP.geo.geom;
const polyFromCoords = new g.Polygon('myid', [[[-76.77, 44.42], [-80.95, 49.96], [-68.69, 51.39], [-76.77, 44.42]], [[-97.86, 55.74], [-82.15, 49.34], [-116.95, 51.30], [-97.86, 55.74]]]);
const polyFromPoly = new g.Polygon('myid', polyFromCoords); // also accepts MultiLineString, LinearRing, LineString, MultiPoint
const line = new g.MultiPoint('myid', [[-97.86, 55.74], [-82.15, 49.34], [-76.77, 44.42]]);
const point = new g.Point('myid', [-68.69, 51.39]);
const polyFromMixedUnclosedRings = new g.Polygon('myid', [[[-116.95, 51.30], point, {x: "-80.95", y: 49.96}], line]);
```

Various methods

```
const poly = new RAMP.geo.geom.Polygon('myid', [[[-76.77, 44.42], [-80.95, 49.96], [-68.69, 51.39]], [[-97.86, 55.74], [-82.15, 49.34], [-116.95, 51.30]]]);
poly.type;                // 'Polygon'
poly.id;                  // 'myid'
poly.sr;                  // { wkid: 4326 }
poly.length;              // 2
poly.ringArray;           // [LinearRing, LinearRing] where each LinearRing corresponds to the ring co-ords (including closing vertex) and is typed as RAMP API LinearRing. These LinearRings are not bound to the Polygon.
poly.toArray();           // [[[-76.77, 44.42], [-80.95, 49.96], [-68.69, 51.39], [-76.77, 44.42]], [[-97.86, 55.74], [-82.15, 49.34], [-116.95, 51.30], [-97.86, 55.74]]]

const lr = new RAMP.geo.geom.LinearRing('lr', [[-97.86, 55.74], [-88, 44], [-116.95, 51.30]]);
poly.addLinearRings([lr]); // new ring is added
```

odds are more methods will be added to Polygon, including the `getAt()` and `updateAt()` that are present on other geometries.

## MultiPolygon

Various co-ordinate inputs of the constructors.

```
const mpyFromCoords = new RAMP.geo.geom.MultiPolygon('myid', [[[[-76.77, 44.42], [-80.95, 49.96], [-68.69, 51.39], [-76.77, 44.42]]], [[[-97.86, 55.74], [-82.15, 49.34], [-116.95, 51.30], [-97.86, 55.74]]]]);
const mpyFromMPoly = new RAMP.geo.geom.MultiPolygon('myid', mpyFromCoords); // also accepts Polygon, MultiLineString, LinearRing, LineString, MultiPoint
// the examples are getting large, so omitted, but rest assured the constructor will accept an array of mixed formats that equate to Polygon-esque structures
```

Various methods

```
const mpy = new RAMP.geo.geom.MultiPolygon('myid', [[[[-76.77, 44.42], [-80.95, 49.96], [-68.69, 51.39]]], [[[-97.86, 55.74], [-82.15, 49.34], [-116.95, 51.30]]]]);
mpy.type;                // 'MultiPolygon'
mpy.id;                  // 'myid'
mpy.sr;                  // { wkid: 4326 }
mpy.length;              // 2
mpy.polygonArray;        // [Polygon, Polygon] where each Polygon corresponds to the polygon co-ords and is typed as RAMP API Polygon. These Polygons are not bound to the MultiPolygon.
mpy.toArray();           // [[[[-76.77, 44.42], [-80.95, 49.96], [-68.69, 51.39], [-76.77, 44.42]]], [[[-97.86, 55.74], [-82.15, 49.34], [-116.95, 51.30], [-97.86, 55.74]]]]

const poly = new RAMP.geo.geom.Polygon('p', [[[-97.86, 55.74], [-88, 44], [-116.95, 51.30]]]);
mpy.addPolygon(poly); // new polygon is added
```

odds are more methods will be added to MultiPolygon, including the `getAt()` and `updateAt()` that are present on other geometries.

more to be added...