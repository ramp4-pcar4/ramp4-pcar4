import SpatialReference from './geometry/SpatialReference';

// NOTE: some values have changed since RAMP2.
//       this is due to esri api 4 using different constants, and working exclusively in the
//       api domain of constants. RAMP2 we were often in the ArcGIS server domain.
//       e.g. 'esriSLSDashDot' is now 'dash-dot'

export enum GeometryType {
    POINT = 'Point',
    MULTIPOINT = 'MultiPoint',
    LINESTRING = 'LineString',
    MULTILINESTRING = 'MultiLineString',
    POLYGON = 'Polygon',
    MULTIPOLYGON = 'MultiPolygon',
    LINEARRING = 'LinearRing',
    EXTENT = 'Extent'
}

// TODO add support for PATH type?
//      would allow person to define a sybmol using svg. would need to enhance our style params to allow for svg path.
//      alternately we can hotwire the .icon field. so if PATH, use .icon. might also make sense to add ICON to the enum,
//      and have it be a special case just for the constructor and minimize confusion of callers.
export enum PointStyle {
    CIRCLE = 'circle',
    CROSS = 'cross',
    DIAMOND = 'diamond',
    SQUARE = 'square',
    TRIANGLE = 'triangle',
    X = 'x'
}

export enum LineStyle {
    DASH = 'dash',
    DASHDOT = 'dash-dot',
    DASHDOTDOT = 'short-dash-dot-dot', // for backwards compatibility
    DOT = 'dot',
    LONGDASH = 'long-dash',
    LONGDASHDOT = 'long-dash-dot',
    LONGDASHDOTDOT = 'long-dash-dot-dot',
    NONE = 'none',
    NULL = 'none', // for backwards compatibility
    SHORTDASH = 'short-dash',
    SHORTDASHDOT = 'short-dash-dot',
    SHORTDASHDOTDOT = 'short-dash-dot-dot',
    SHORTDOT = 'short-dot',
    SOLID = 'solid'
}

export enum FillStyle {
    BDIAG = 'backward-diagonal',
    CROSS = 'cross',
    DIAG_CROSS = 'diagonal-cross',
    FDIAG = 'forward-diagonal',
    HORIZONTAL = 'horizontal',
    NONE = 'none',
    NULL = 'none', // for backwards compatibility
    SOLID = 'solid',
    VERTICAL = 'vertical'
}

export interface ColourParams {
    r: number;
    g: number;
    b: number;
    a?: number;
}

export interface StyleParams {
    style?: string;
    colour?: Array<number> | string | ColourParams;
    width?: number;
}

export interface PointStyleParams extends StyleParams {
    style?: PointStyle;
    icon?: string;
    height?: number;
    xOffset?: number;
    yOffset?: number;
}

// essentially just pretties up the name. no new params
export interface LineStyleParams extends StyleParams {
    style?: LineStyle;
}

// TODO document the funnybusiness of this.
// because we extend interfaces, this param object has an extra set of things
export interface PolygonStyleParams extends StyleParams {
    outlineColor?: Array<number> | string | ColourParams;
    outlineWidth?: number;
    outlineStyle?: LineStyle;

    //the above 3 are for flexibility and backwards compatibility. the property below allows a shortcut by just supplying a line style
    outlineParams?: LineStyleParams;

    // again, mostly for backwards compatibility. opacity can now be provided on the colour itself. and we can use inherited style and colour for the fills as default
    // (these params will have priority)
    fillColor?: Array<number> | string | ColourParams;
    fillOpacity?: number;
    fillStyle?: FillStyle;
}

export interface Attributes {[key: string]: any};

export type SrDef = SpatialReference | string | number;

export type IdDef = string | number;