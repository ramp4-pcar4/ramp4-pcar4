// TODO add proper documentation

import SpatialReference from './SpatialReference';
import { GeometryType, SrDef, IdDef } from '../apiDefs';

// TODO since this class is often used as a parameter type (i.e. something that accepts any of our geometries),
//      maybe pick a different name, like Geometry, AnyGeometry, RampGeometry

/**
 * Baseclass of all geometries. All geometry types must derive from this class. Not intented to be instantiated on its own.
 */
export default class BaseGeometry {

    // TODO make this readonly? overkill?
    /** Spatial Reference of the geometry */
    sr: SpatialReference;

    /** Id of the geometry */
    readonly id: string;

    constructor(id: IdDef, sr?: SrDef) {
        this.id = id.toString();

        // default to lat long if no SR is provided
        if (!sr) {
            this.sr = SpatialReference.latLongSR();
        } else if (sr instanceof SpatialReference) {
            this.sr = sr.clone();
        } else {
            // cheating typescript. this will pass a string wkt or number wkid
            this.sr = new SpatialReference(<any>sr);
        }
    }

    /**
     * Returns the type of the geometry object.
     * Function implementation in subclasses.
     */
    get type(): GeometryType {
        return undefined;
    }

    protected childIdGenerator(idx: number): string {
        return `${this.id}-${idx}`;
    }

}