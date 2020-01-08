// TODO add proper comments

import esri = __esri;
import { InfoBundle, AttributeSet } from '../gapiTypes';
import BaseBase from '../BaseBase';

export class AttributeLoaderDetails {
    supportsLimit?: boolean; // indicates if server will return information about what the maximum number of attributes will be downloaded in a single request
    attribs?: string; // comma delimited list of attributes to download. '*' for all
    serviceUrl?: string; // feature layer endpoint on an arcgis server
    sourceGraphics?: esri.Collection<esri.Graphic>; // set of graphics from non-ArcGIS server source
    maxId?: number; // current maximum OID we have downloaded. i.e. keeps track of where we are over multiple batches of downloads
    batchSize?: number; // calculated maximum amount of attributes that can be downloaded in a single request
    oidField?: string; // attribute name of the OID field
}

// an object that is passed into the asynch attribute loader. the loader can read and update these properties on each iteration
export class AsynchAttribController {
    loadedCount: number;
    loadAbortFlag: boolean;
    loadIsDone: boolean;

    constructor() {
        this.loadedCount = 0;
        this.loadAbortFlag = false;
        this.loadAbortFlag = false;
    }
}

export class AttributeLoaderBase extends BaseBase {

    // TODO need to specificy either load url or load source (a file, a layer with baked attributes)

    protected aac: AsynchAttribController;
    protected loadPromise: Promise<AttributeSet>;
    protected details: AttributeLoaderDetails;
    tabularAttributesCache: Promise<any>; // TODO enhance type

    protected constructor (infoBundle: InfoBundle, details: AttributeLoaderDetails) {
        super(infoBundle);
        this.aac = new AsynchAttribController();
        this.details = details;
    }

    getAttribs(): Promise<AttributeSet> {
        if (!this.loadPromise) {
            // promise creation
            this.aac = new AsynchAttribController();
            this.loadPromise = this.loadPromiseGenerator();
        }
        return this.loadPromise;
    }

    abortAttribLoad(): void {
        this.aac.loadAbortFlag = true;

        // TODO nuke the promise?
        // this.destroyAttribs();
    }

    destroyAttribs(): void {
        // erase private promise
        this.loadPromise = undefined;
        this.tabularAttributesCache = undefined;
        this.aac.loadIsDone = false;
        this.aac.loadedCount = 0;
    }

    loadCount(): number {
        return this.aac.loadedCount;
    }

    // this will be overrideable.
    // so one function for arcgis server. another for baked featurelayer. another for json file source
    protected loadPromiseGenerator(): Promise<AttributeSet> {
        // this should never run
        return Promise.reject(new Error('Subclass of AttributeLoaderBase did not implement loadPromiseGenerator'));
    }

}

export class ArcServerAttributeLoader extends AttributeLoaderBase {

    constructor (infoBundle: InfoBundle, details: AttributeLoaderDetails) {
        super(infoBundle, details);
    }

    protected loadPromiseGenerator(): Promise<AttributeSet> {
        // TODO call arcgis loader
        return this.gapi.utils.attributes.loadArcGisServerAttributes(this.details, this.aac);
    }

}

export class FileLayerAttributeLoader extends AttributeLoaderBase {

    constructor (infoBundle: InfoBundle, details: AttributeLoaderDetails) {
        super(infoBundle, details);
    }

    protected loadPromiseGenerator(): Promise<AttributeSet> {
        return this.gapi.utils.attributes.loadGraphicsAttributes(this.details, this.aac);
    }

}