// idea is import an export everything, making one module to import as { * }

// can use the following to import. figure out later if this is the best way
// import {Point} from './api'

// import Attributes from './Attributes';
import Extent from './geometry/Extent';
import Graphic from './Graphic';
import Hover from './Hover';
import LineString from './geometry/LineString';
import LineStyleOptions from './style/LineStyleOptions';
import LinearRing from './geometry/LinearRing';
import MultiLineString from './geometry/MultiLineString';
import MultiPoint from './geometry/MultiPoint';
import MultiPolygon from './geometry/MultiPolygon';
import Point from './geometry/Point';
import PointStyleOptions from './style/PointStyleOptions';
import Polygon from './geometry/Polygon';
import PolygonStyleOptions from './style/PolygonStyleOptions';
import SpatialReference from './geometry/SpatialReference';

// TODO break into subcollection? like geometry, style? maybe do that on the actual API (which will consume these)
export {
    // Attributes,
    Extent,
    Graphic,
    Hover,
    LineString,
    LineStyleOptions,
    LinearRing,
    MultiLineString,
    MultiPoint,
    MultiPolygon,
    Point,
    PointStyleOptions,
    Polygon,
    PolygonStyleOptions,
    SpatialReference
};
