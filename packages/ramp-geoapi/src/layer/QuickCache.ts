// TODO add proper comments

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

    private attribs: {[key: number]: any};
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

    private getGeomStore(scale: number = undefined): {[key: number]: any} {
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

    getAttribs(key: number): any {
        return this.attribs[key];
    }

    setAttribs(key: number, atts: any): void {
        this.attribs[key] = atts;
    }

    getGeom(key: number, scale: number = undefined): any {

        // polygon and line layers have to also cache their geometry by scale level, as the
        // geometry can be simplified at smaller scales
        return this.getGeomStore(scale)[key];
    }

    setGeom(key: number, geom: any, scale: number = undefined): void {
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