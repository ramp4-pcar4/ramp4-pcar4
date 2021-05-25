// TODO add proper documentation

import {
    BaseGeometry,
    GeometryType,
    Point,
    Polygon,
    SpatialReference,
    SrDef,
    IdDef,
    RampExtentConfig
} from '@/geo/api';

export class Extent extends BaseGeometry {
    // doing things a bit different for Extents.
    // tried array of arrays to be consistent with other geometeries, but
    // was more extra coding and overhead of unrequired array
    protected rawMin: Array<number>;
    protected rawMax: Array<number>;

    /**
     * Constructs an Extent from the given source of verticies
     *
     * @param {String | Integer} id An identifier for the Extent
     * @param {Array | Point | Object} minGeometry A point equivalent marking the minimal value corner of the extent. Supported formats of [xVal, yVal], {x: xVal, y: yVal}, or Point
     * @param {Array | Point | Object} maxGeometry A point equivalent marking the maximal value corner of the extent. Supported formats of [xVal, yVal], {x: xVal, y: yVal}, or Point
     * @param {SpatialReference | number | string} [sr] A spatial reference for the geometry. Defaults to Lat/Long if not provided
     */
    // from two things that can be interpreted as points
    constructor(id: IdDef, minPoint: Point, maxPoint: Point, sr?: SrDef);
    constructor(
        id: IdDef,
        minCoords: Array<number>,
        maxCoords: Array<number>,
        sr?: SrDef
    );
    constructor(id: IdDef, minXY: object, maxXY: object, sr?: SrDef);
    constructor(id: IdDef, minAnyFormat: any, maxAnyFormat: any, sr?: SrDef);
    constructor(id: IdDef, minGeometry: any, maxGeometry: any, sr?: SrDef) {
        super(id, minGeometry.sr || sr);

        this.rawMin = Point.parseXY(minGeometry);
        this.rawMax = Point.parseXY(maxGeometry);
    }

    // TODO getter / setter for individul values? classic [x|y][min|max] set

    /** Returns the string 'Extent'. */
    get type(): GeometryType {
        return GeometryType.EXTENT;
    }

    get xmin(): number {
        return this.rawMin[0];
    }

    get ymin(): number {
        return this.rawMin[1];
    }

    get xmax(): number {
        return this.rawMax[0];
    }

    get ymax(): number {
        return this.rawMax[1];
    }

    center(): Point {
        return new Point(
            this.id + '_centerPoint',
            [
                (this.xmax - this.xmin) / 2.0 + this.xmin,
                (this.ymax - this.ymin) / 2.0 + this.ymin
            ],
            this.sr,
            true
        );
    }

    clone(): Extent {
        return new Extent(this.id, this.rawMin, this.rawMax, this.sr);
    }

    /**
     * Returns an array of point arrays (e.g. [[x1, y1], [x2, y2]] )
     */
    toArray(): Array<Array<number>> {
        return [this.rawMin.slice(), this.rawMax.slice()];
    }

    toPolygonArray(): Array<Array<Array<number>>> {
        return [
            [
                this.rawMin.slice(),
                [this.xmin, this.ymax],
                this.rawMax.slice(),
                [this.xmax, this.ymin],
                this.rawMin.slice()
            ]
        ];
    }

    toPolygon(): Polygon {
        return new Polygon(this.id, this.toPolygonArray(), this.sr, true);
    }

    static fromParams(
        id: IdDef,
        xmin: string | number,
        ymin: string | number,
        xmax: string | number,
        ymax: string | number,
        sr?: SrDef
    ): Extent {
        return new Extent(id, [xmin, ymin], [xmax, ymax], sr);
    }

    static fromConfig(id: IdDef, configExtent: RampExtentConfig): Extent {
        return new Extent(
            id,
            [configExtent.xmin, configExtent.ymin],
            [configExtent.xmax, configExtent.ymax],
            SpatialReference.fromConfig(configExtent.spatialReference)
        );
    }

    isEqual(e: Extent | undefined): boolean {
        // TODO consider relaxing input type? so it can accept config extent, esri extent, etc.
        //      alternative is caller is forced to cast first then compare
        if (!e) {
            // a param was empty/nothing
            return false;
        }
        return (
            this.xmin === e.xmin &&
            this.ymin === e.ymin &&
            this.xmax === e.xmax &&
            this.ymax === e.ymax
        );
    }
}
