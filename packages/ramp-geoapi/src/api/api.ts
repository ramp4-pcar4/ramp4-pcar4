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

export { Extent };
export { Graphic };
export { Hover };
export { LineString };
export { LineStyleOptions };
export { LinearRing };
export { MultiLineString };
export { MultiPoint };
export { MultiPolygon };
export { Point };
export { PointStyleOptions };
export { Polygon };
export { PolygonStyleOptions };
export { SpatialReference };

export * from './apiDefs';
