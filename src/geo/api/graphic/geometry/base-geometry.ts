import { GeometryType, SpatialReference } from '@/geo/api';
import type { SrDef, IdDef } from '@/geo/api';
import type { EsriGeometry } from '@/geo/esri';
import type GeoJson from 'geojson';

/**
 * Baseclass of all geometries. All geometry types must derive from this class. Not intented to be instantiated on its own.
 */
export class BaseGeometry {
    /** Spatial Reference of the geometry */
    sr: SpatialReference;

    /** Id of the geometry */
    readonly id: string;

    constructor(id: IdDef, sr?: SrDef) {
        this.id = id ? id.toString() : '';
        this.sr = SpatialReference.parseSR(sr);
    }

    /**
     * Returns the type of the geometry object.
     * Function implementation in subclasses.
     */
    get type(): GeometryType {
        return GeometryType.UNKNOWN;
    }

    protected childIdGenerator(idx: number): string {
        return `${this.id}-${idx}`;
    }

    toESRI(): EsriGeometry {
        throw new Error(
            `.toESRI not implemented on geometry type ${this.type}`
        );
    }

    toGeoJSON(): GeoJson.DirectGeometryObject {
        throw new Error(
            `.toGeoJSON not implemented on geometry type ${this.type}`
        );
    }

    invalid(): boolean {
        return (
            this.type === GeometryType.NONE ||
            this.type === GeometryType.UNKNOWN
        );
    }

    protected geoJsonFactory(
        type: string,
        coords: Array<any>
    ): GeoJson.DirectGeometryObject {
        const gj: any = {
            type,
            coordinates: coords
        };
        if (this.sr) {
            gj.crs = this.sr.toGeoJSON();
        }
        return gj;
    }
}

// used for placeholder / to avoid undefined params when no geometry is relevant
export class NoGeometry extends BaseGeometry {
    constructor() {
        super('no_geometry');
    }
    get type(): GeometryType {
        return GeometryType.NONE;
    }
}
