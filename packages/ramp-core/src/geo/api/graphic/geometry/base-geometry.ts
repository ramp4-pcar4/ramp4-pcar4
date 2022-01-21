// TODO add proper documentation

import { GeometryType, SpatialReference, SrDef, IdDef } from '@/geo/api';
import { EsriGeometry } from '@/geo/esri';
import GeoJson from 'geojson';

// TODO since this class is often used as a parameter type (i.e. something that accepts any of our geometries),
//      maybe pick a different name, like Geometry, AnyGeometry, RampGeometry, GeometryInstance

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
