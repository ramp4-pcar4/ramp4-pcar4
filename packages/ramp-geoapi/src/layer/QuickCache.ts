// TODO add proper comments

import { Attributes } from "../api/apiDefs";
import BaseGeometry from '../api/geometry/BaseGeometry';

// manages the quick-lookup of attributes.
// i.e. when it makes sense to just download one instead of the entire set

// import esri = __esri;

/*
interface cacheResult {
    found: boolean;
    item: any;
}
*/
export default class QuickCache {

    // TODO if we come up with nice types for attribs or geoms, apply them

    private attribs: {[key: number]: Attributes};

    // the "any" type here is funny. for points, its BaseGeometry, for line/poly based, it's an object indexed by scale,
    // which then containts an object indexed by key (likely oid) and returns BaseGeometry.
    // will keep as any since it's private and the interfaces are casting to BaseGeometry. otherwise would need type shenannigans.
    private geoms: {[key: number]: any};

    readonly isPoint: boolean;

    constructor(geomType: string) {
        this.attribs = {};
        this.geoms = {};
        this.isPoint = geomType === 'point';
    }

    private getScaleStore(scale: number): {[key: number]: any} {
        if (!this.geoms[scale]) {
            // make a new store for this scale
            this.geoms[scale] = {};
        }
        return this.geoms[scale];
    }

    private getGeomStore(scale: number = undefined): {[key: number]: BaseGeometry} {
        // polygon and line layers have to also cache their geometry by scale level, as the
        // geometry can be simplified at smaller scales

        if (this.isPoint) {
            return this.geoms;
        } else {
            return this.getScaleStore(scale);
        }

        // dont think we need this error check, keeping in comments incase we need to restore it
        // throw new Error('LOD must be provided for geometry quickcache on line or polygon layer');
    }

    getAttribs(key: number): Attributes {
        return this.attribs[key];
    }

    setAttribs(key: number, atts: Attributes): void {
        this.attribs[key] = atts;
    }

    getGeom(key: number, scale: number = undefined): BaseGeometry {

        // polygon and line layers have to also cache their geometry by scale level, as the
        // geometry can be simplified at smaller scales
        return this.getGeomStore(scale)[key];
    }

    setGeom(key: number, geom: BaseGeometry, scale: number = undefined): void {
        const store = this.getGeomStore(scale);
        store[key] = geom;
    }

    // TODO if we decide not to use cacheResult, this function might be so underpowered its not worth having
    /*
    private finder(store: {[key: number]: any}, key: number): any {
        return store[key];


        const x = store[key];
        return {
            found: !!x,
            item: x
        }

    }
    */
}