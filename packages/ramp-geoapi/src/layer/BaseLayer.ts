// put things here that would be common to all layers
// TODO add proper comments

import esri = __esri;
import { InfoBundle, LayerState, RampLayerConfig, LegendSymbology, IdentifyParameters, IdentifyResultSet, FilterEventParam } from '../gapiTypes';
import BaseBase from '../BaseBase';
import { TypedEvent } from '../Event';
import BaseFC from './BaseFC';
import TreeNode from './TreeNode';
import NaughtyPromise from '../util/NaughtyPromise';
import ScaleSet from './ScaleSet';



export default class BaseLayer extends BaseBase {

    uid: string;
    id: string;

    // TODO think about how to expose. protected makes sense, but might want to make it public to allow hacking and use by a dev module if we decide to
    //      could be the FCs need to access it so no choice
    innerLayer: esri.Layer;

    // events
    visibilityChanged: TypedEvent<boolean>;
    opacityChanged: TypedEvent<number>;
    stateChanged: TypedEvent<string>;
    filterChanged: TypedEvent<FilterEventParam>;

    // statuses
    state: LayerState;
    supportsIdentify: boolean;
    isFile: boolean;

    /**
     * Indicates layer had loaded and achieved one sucessful update. I.e. layer has been drawn on the map once.
     * @property initLoadDone
     */
    get initLoadDone (): boolean { return this.sawLoad && this.sawRefresh; }
    protected sawLoad: boolean;
    protected sawRefresh: boolean;
    protected name: string; // TODO re-evaluate this. using protected property here to store name until FCs get created. might be smarter way
    protected origRampConfig: RampLayerConfig;

    // TODO consider also having a loaded boolean property, allowing a synch check if layer has loaded or not. state can flip around to update, etc.
    //      alternately implement something like function layerLoaded() from old geoApi
    protected loadProimse: NaughtyPromise; // a promise that resolves when layer is fully ready and safe to use. for convenience of caller
    protected esriPromise: NaughtyPromise; // a promise that resolves when esri layer object has been created

    // FC management
    protected fcs: Array<BaseFC>;
    protected layerTree: TreeNode;
    protected reloadTree: TreeNode;

    // ----------- LAYER CONSTRUCTION AND INITIALIZAION -----------

    // NOTE since constructor needs to be called first, we might want to push a lot of initialization to an .init() function
    //      that actual implementer classes call in their constructors. e.g. for a file layer, might need to process file parts prior to running LayerBase stuff
    protected constructor (infoBundle: InfoBundle, rampConfig: RampLayerConfig, reloadTree?: TreeNode) {
        super(infoBundle);
        this.reloadTree = reloadTree; // this needs to be set before doing uid calculations
        this.uid = this.bestUid(-1);

        this.visibilityChanged = new TypedEvent<boolean>();
        this.opacityChanged = new TypedEvent<number>();
        this.stateChanged = new TypedEvent<string>();
        this.filterChanged = new TypedEvent<FilterEventParam>();

        this.state = LayerState.LOADING;
        this.supportsIdentify = false; // default state.
        this.isFile = false; // default state.
        this.sawLoad = false;
        this.sawRefresh = false;
        this.loadProimse = new NaughtyPromise();
        this.esriPromise = new NaughtyPromise();

        this.fcs = [];
        this.origRampConfig = rampConfig;
        this.name = rampConfig.name || '';
        this.id = rampConfig.id || '';

    }

    // will give a new uid to use. if appropriate, will recycle same uid from a previous
    // incarnation of a layer to preserve continuity during a reload
    bestUid(idx?: number): string {

        if (!this.isUn(idx) && !this.isUn(this.reloadTree)) {
            // we have the ingredients for a reload scenario.
            // if we find an old uid from the last incarnation, use it.
            const t = this.reloadTree.findChildByIdx(idx);
            if (t && t.uid) {
                return t.uid;
            }
        }

        // could find no previous uid, or situation does not apply. new uid.
        return this.gapi.utils.shared.generateUUID();
    }

    protected updateState(newState: LayerState): void {
        this.state = newState;
        this.stateChanged.fireEvent(newState);
    }

    // generic init stuff, like adding listeners/propogaters to events
    protected initLayer() {
        // TODO add event handlers.  basic stuff here, super classes can add more.
        // TODO clean up comment mass after design is settled and working

        // loading stuff
        // https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#loadStatus
        // https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#loaded

        // updateing (is now on the layer view)
        // need to figure out best way to do this. if we decide to support multiple map views, the updating flag
        // will be different on each map (i.e. map 1 pans, shows layer updating; map 2 chills, no animation).
        // at minimum we need to include the view id or map id on the event so client can inspect
        // and know it is dealing with an event it cares about
        // https://developers.arcgis.com/javascript/latest/api-reference/esri-views-layers-LayerView.html#updating

        // this also affects visible, opacity,etc. NO IT IS NOT. WRONG
        // so maybe need a bigger deal. NO. JUST THE UPDATEs apparently. I'm fine with other views showing updates.

        // https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html#allLayerViews
        // map (the view specifically) might need to be aware of layers registered to it
        // and have a way of passing the view to the layer once it's been created. then this can wire up events.

        // alternately we can try to use this event
        // https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-Layer.html#event-layerview-create
        // could do e.layerView.watch(updating).then(this.raiseEvent.visible({this.layerId, findGeoAPIMapId(e.view)}))
        //       would need a way to make IDs on views or link them to GeoAPI map object           ^

        // think i need to put this to the refactor chat proposal: do we support mutiple views, or always one

        // TODO consider putting lots of info on the events.  e.g. instead of just state changed, have .state, .layerid
        //      visibility might need an optional FC index (whatever we're calling that)

        this.innerLayer.watch('visibility', (newval: boolean) => {
            this.visibilityChanged.fireEvent(newval);
        });

        this.innerLayer.watch('opacity', (newval: number) => {
            this.opacityChanged.fireEvent(newval);
        });

        // TODO for state stuff, do we need to also synch this.state?
        //      if so probably want a protected worker changeMyState function that sets prop and fires event.

        this.innerLayer.watch('loadStatus', (newval: string) => {
            const statemap = {
                'not-loaded': LayerState.LOADING,
                loading: LayerState.LOADING,
                loaded: LayerState.LOADED,
                failed: LayerState.ERROR
            };

            if (newval === 'loaded') {
                // loaded is a special case. the Layer object (subclasses of BaseLayer) need to do
                // additional asynch work to fully set things up, so we delay firing the event until
                // that is done.
                this.onLoad();
                this.sawLoad = true; // TODO investigate if we need to push this to the same location that the event is fired
            } else {
                this.updateState(statemap[newval]);
            }
        });

        this.innerLayer.on('layerview-create', (e: esri.LayerLayerviewCreateEvent) => {
            e.layerView.watch('updating', (newval: boolean) => {
                this.updateState(newval ? LayerState.REFRESH : LayerState.LOADED );
                if (newval) {
                    this.sawRefresh = true;
                }
            });
        });

        this.esriPromise.resolveMe();

    }

    // TODO strongly type if it makes sense. unsure if we want client config definitions in here
    //      that said if client shema is different that here, things are gonna break so maybe this is good idea
    /**
     * Take a layer config from the RAMP application and derives a configuration for an ESRI layer
     *
     * @param rampLayerConfig snippet from RAMP for this layer
     * @returns configuration object for the ESRI layer representing this layer
     */
    protected makeEsriLayerConfig(rampLayerConfig: RampLayerConfig): any {
        // TODO flush out
        // NOTE: it would be nice to put esri.LayerProperties as the return type, but since we are cheating with refreshInterval it wont work
        //       we can make our own interface if it needs to happen (or can extent the esri one)

        const esriConfig: any = {
            id: rampLayerConfig.id,
            url: rampLayerConfig.url,
            opacity: rampLayerConfig.state.opacity,
            visible: rampLayerConfig.state.visibility
        };

        // TODO careful now. seems setting this willy nilly, even if undefined value, causes layer to keep pinging the server
        if (typeof rampLayerConfig.refreshInterval !== 'undefined') {
            esriConfig.refreshInterval = rampLayerConfig.refreshInterval;
        }
        return esriConfig;
    }

    // ----------- LAYER LOAD -----------

    // when esri layer loads, this will make sure the layer and FCs are in synch then let outsiders know its loaded
    protected onLoad(): void {

        // magic happens here. other layers will override onLoadActions,
        // meaning this will run the function appropriate for the layer who inherited LayerBase
        const loadPromises: Array<Promise<void>> = this.onLoadActions();
        Promise.all(loadPromises).then(() => {
            this.updateState(LayerState.LOADED);
            this.loadProimse.resolveMe();
        });
    }

    protected onLoadActions(): Array<Promise<void>> {
        if (!this.name) {
            // no name from config. attempt layer name
            this.name = this.innerLayer.title || '';
        }

        // make the root of the tree
        this.layerTree = new TreeNode(-1, this.uid, this.name, false);

        // TODO implement extent defaulting. Need to add property, get appropriate format from incoming ramp config, maybe need an interface
        /*
        if (!this.extent) {
            // no extent from config. attempt layer extent
            this.extent = this.innerLayer.fullExtent;
        }

        this.extent = shared.makeSafeExtent(this.extent);
        */

       // layer base class doesnt have spatial ref, but we will assume all our layers do.
       // consider adding fancy checks if its missing, and if so just promise.resolve
       const lookupPromise = this.gapi.utils.proj.checkProj((<any>this.innerLayer).spatialReference).then((goodSR: boolean) => {
            if (goodSR) {
                return Promise.resolve();
            } else {
                this.updateState(LayerState.ERROR);
                return Promise.reject();
            }
       });

        return [lookupPromise];
    }

    /**
     * Provides a promise that resolves when the layer has finished loading. If accessing layer properties that
     * depend on the layer being loaded, wait on this promise before accessing them.
     *
     * @method isLayerLoaded
     * @returns {Promise} resolves when the layer has finished loading
     */
    isLayerLoaded(): Promise<void> {
        return this.loadProimse.getPromise();
    }

    /**
     * Indicates if the layer is in a state that is makes sense to interact with.
     * I.e. False if layer has not done it's initial load, or is in error state.
     *
     * @method isValidState
     * @returns {Boolean} true if layer is in an interactive state
     */
    isValidState(): boolean {
        return (this.state === LayerState.LOADED || this.state === LayerState.REFRESH);
    }

    /**
     * Provides a promise that resolves when the layer is ready to be added to a map.
     * Adding to a map before this has resolved is ok, but it will not appear on the map until after
     * (really only relevant if the timing/order of adding layers is important)
     *
     * @method isReadyForMap
     * @returns {Promise} resolves when the layer has finished loading
     */
    isReadyForMap(): Promise<void> {
        return this.esriPromise.getPromise();
    }

    // ----------- LAYER MANAGEMENT -----------

    getLayerTree(): TreeNode {

        // TODO throw error if called too early? may want to standardize that error for other properties
        // TODO make basic tree code here (one child at root)
        return this.layerTree;
    }

    // finds an index corresponding to the uid.
    // -1 indicates the uid targets the root layer
    protected uidToIdx(uid: string): number {
        if (uid === this.uid) {
            return -1;
        } else {
            const fcIdx: number = this.fcs.findIndex(fc => fc.uid === uid);
            if (fcIdx === -1) {
                // no match
                throw new Error(`Attempt to access non-existing unique id [layerid ${this.innerLayer.id}, uid ${uid}]`);
            } else {
                return fcIdx;
            }
        }
    }

    // attempts to get an FC based on the index or uid passed.
    // will return undefined if a valid root request is made.
    // missing layerIdx will be treated as root request if validRoot, otherwise treated as first valid FC child.
    // will throw error if specific parameters cannot be found
    protected getFC(layerIdx: number | string, validRoot: boolean = false): BaseFC {
        // highscool cs IF party

        // default request
        if (this.isUn(layerIdx)) {
            if (validRoot) {
                // requesting the root layer, return nothing
                return undefined;
            } else {
                // find first fc (there could be indexes of nothing, thus the find)
                return this.fcs.find((fc: BaseFC) => fc);
            }
        }

        let workingIdx: number;

        if (typeof layerIdx === 'string') {
            // uid request
            workingIdx = this.uidToIdx(layerIdx);
        } else {
            // index request
            workingIdx = layerIdx;
        }

        if (workingIdx === -1) {
            if (validRoot) {
                // requesting the root layer, return nothing
                return undefined;
            } else {
                // asked for the root when not valid
                // TODO would it be kinder/friendlier to return the first child fc?
                throw new Error(`Attempt to access a function on layer root that only applies to an index of the layer [layerid ${this.innerLayer.id}]`);
            }
        } else if (this.isUn(this.fcs[workingIdx])) {
            // passed a non-existing index/uid
            throw new Error(`Attempt to access non-existing layer index [layerid ${this.innerLayer.id}, lookup value ${layerIdx}]`);
        } else {
            return this.fcs[workingIdx];
        }
    }

    getName(layerIdx: number | string = undefined): string {
        return this.getFC(layerIdx).name;
    }

    /**
     * Returns the visibility of the layer/sublayer.
     *
     * @function getVisibility
     * @param {Integer | String} [layerIdx] targets a layer index or uid to get visibility for. Uses first/only if omitted.
     * @returns {Boolean} visibility of the layer/sublayer
     */
    getVisibility (layerIdx: number | string = undefined): boolean {
        return this.getFC(layerIdx).getVisibility();
    }

    /**
     * Applies visibility to feature class.
     *
     * @function setVisibility
     * @param {Boolean} value the new visibility setting
     * @param {Integer | String} [layerIdx] targets a layer index or uid to get visibility for. Uses first/only if omitted.
     */
    setVisibility (value: boolean, layerIdx: number | string = undefined): void {
        this.getFC(layerIdx).setVisibility(value);
    }

    /**
     * Returns the opacity of the layer/sublayer.
     *
     * @function getOpacity
     * @param {Integer | String} [layerIdx] targets a layer index or uid to get opacity for. Uses first/only if omitted.
     * @returns {Boolean} opacity of the layer/sublayer
     */
    getOpacity (layerIdx: number | string = undefined): number {
        return this.getFC(layerIdx).getOpacity();
    }

    /**
     * Applies opacity to feature class.
     *
     * @function setOpacity
     * @param {Decimal} value the new opacity setting. Valid value is anything between 0 and 1, inclusive.
     * @param {Integer | String} [layerIdx] targets a layer index or uid to get opacity for. Uses first/only if omitted.
     */
    setOpacity (value: number, layerIdx: number | string = undefined): void {
        this.getFC(layerIdx).setOpacity(value);
    }

    /**
     * Returns the opacity of the layer/sublayer.
     *
     * @function getOpacity
     * @param {Integer | String} [layerIdx] targets a layer index or uid to get opacity for. Uses first/only if omitted.
     * @returns {Boolean} opacity of the layer/sublayer
     */
    getScaleSet (layerIdx: number | string = undefined): ScaleSet {
        return this.getFC(layerIdx).scaleSet;
    }

    /**
     * Indicates if a feature class supports features (false would be an image/raster/etc)
     *
     * @function supportsFeatures
     * @param {Integer | String} [layerIdx] targets a layer index or uid to get visibility for. Uses first/only if omitted.
     * @returns {Boolean} if the layer/sublayer supports features
     */
    supportsFeatures (layerIdx: number | string = undefined): boolean {
        return this.getFC(layerIdx).supportsFeatures;
    }

    getLegend (layerIdx: number | string = undefined): Array<LegendSymbology> {
        return this.getFC(layerIdx).legend;
    }

    // ----------- LAYER ACTIONS -----------

    identify(options: IdentifyParameters): IdentifyResultSet {
        // returns an empty set.
        // serves as a fallback incase someone tries to identify on a non-identifiyable layer
        // (callers can use this.supportsIdentify to check for that)
        // and also as a "no results" option for subclasses to use.
        return {
            results: [],
            done: Promise.resolve(),
            parentUid: this.uid
        };
    }

}