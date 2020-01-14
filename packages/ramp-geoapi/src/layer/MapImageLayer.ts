// TODO add proper comments


import esri = __esri;
import { InfoBundle, LayerState, RampLayerConfig, RampLayerMapImageLayerEntryConfig, AttributeSet } from '../gapiTypes';
import AttribLayer from './AttribLayer';
import TreeNode from './TreeNode';
import MapImageFC from './MapImageFC';

// Formerly known as DynamicLayer
export default class MapImageLayer extends AttribLayer {

    // indicates if sublayers can have opacity adjusted
    isDynamic: boolean;

    constructor (infoBundle: InfoBundle, config: RampLayerConfig) {

        super(infoBundle, config);

        this.innerLayer = new this.esriBundle.MapImageLayer(this.makeEsriLayerConfig(config));

        this.initLayer();

    }

    // timesaver, sick of casting this var everywhere
    protected typedInnerLayer(): esri.MapImageLayer {
        return (<esri.MapImageLayer>this.innerLayer);
    }

    /**
     * Take a layer config from the RAMP application and derives a configuration for an ESRI layer
     *
     * @param rampLayerConfig snippet from RAMP for this layer
     * @returns configuration object for the ESRI layer representing this layer
     */
    protected makeEsriLayerConfig(rampLayerConfig: RampLayerConfig): esri.MapImageLayerProperties {
        // TODO flush out
        // NOTE: it would be nice to put esri.LayerProperties as the return type, but since we are cheating with refreshInterval it wont work
        //       we can make our own interface if it needs to happen (or can extent the esri one)
        const esriConfig: esri.MapImageLayerProperties = super.makeEsriLayerConfig(rampLayerConfig);

        // TODO add any extra properties for attrib-based layers here
        // if we have a definition at load, apply it here to avoid cancellation errors on

        // override. make things invisible, revert to config setting after sublayers have been assigned visibilities and load finishes.
        esriConfig.visible = false;

        /*
        const rampMapImageLayerConfig = {
            id: "extraFancyTest",
            name: "I was once called Dynamic",
            layerType: "esriDynamic", // TODO change this?
            layerEntries: [{ index: 21 }, { index: 17 }, { index: 19 }],
            disabledControls: ["opacity", "visibility"],
            state: {
            "opacity": 0,
            "visibility": false
            },
            url: "http://geoappext.nrcan.gc.ca/arcgis/rest/services/NACEI/energy_infrastructure_of_north_america_en/MapServer"
        };

        */

        // IMPORTANT NOTE: do not set esriConfig.sublayers here.
        //                 it will defeat our auto-crawl behavior of sublayer trees.
        //                 if we do decide we need to leverage sublayer initialization on the layer constructor,
        //                 we would need to query the service root and extract the tree structure from there
        //                 prior to running this function. essentially do tree traversal before this instead
        //                 of on onLoadActions like we currently do.
        /*
        if (rampLayerConfig.layerEntries) {
            // NOTE: important not to set esriConfig property to empty array, as that will request no sublayers
            // TODO documentation isn't clear if we should be using .sublayers or .allSublayers ; if .sublayers can it be flat array?
            //      play with their online sandbox using a nested service if cant figure it out.
            // let us all stop to appreciate this line of code.
            esriConfig.sublayers = (<Array<RampLayerMapImageLayerEntryConfig>>rampLayerConfig.layerEntries).map((le: RampLayerMapImageLayerEntryConfig) => {
                // the super call will set up the basics/common stuff like vis, opacity, def query
                // works because the sublayer property scheme is nearly identical to a normal layer
                const subby: esri.SublayerProperties = super.makeEsriLayerConfig(le);
                subby.id = le.index;

                // TODO process the other options
                return subby;
            })
        }
        */

        return esriConfig;
    }

    /**
     * Actions to take when the layer loads.
     *
     * @function onLoadActions
     */
    onLoadActions (): Array<Promise<void>> {
        const loadPromises: Array<Promise<void>> = super.onLoadActions();

        // a trick. this promise wont resolve until all the loading things have finished.
        // then we revert the layer visibility back to what the config wanted.
        // avoids multiple re-draws as child visibilities get set up.
        // so really the inner statement runs after everything else in this
        // function is done.
        this.isLayerLoaded().then(() => {
            this.setVisibility(this.origRampConfig.state.visibility);
        });

        this.isDynamic = this.typedInnerLayer().capabilities.exportMap.supportsDynamicLayers;

        // TODO the whole "configIsComplete" logic in RAMP2 was never invoked by the client.
        //      Don't see the point in re-adding it here.

        // we run into a lot of funny business with functions/constructors modifying parameters.
        // this essentially clones an object to protect original objects against trickery.
        const jsonCloner = (inputObject: any) => {
            return JSON.parse(JSON.stringify(inputObject));
        };

        const findSublayer = (targetIndex: number): esri.Sublayer => {
            return this.typedInnerLayer().allSublayers.find((s: esri.Sublayer) => {
                return s.id === targetIndex;
            });
        };

        // don't worry about structured legend. the legend part is separate from
        // the layers part. we just load what we are told to. the legend module
        // will handle the structured part.

        // a lack of the property means we use the layer definition
        /*
        const dummyState = {
            opacity: 1,
            visibility: false,
            query: false
        };
        */

        // TODO take another look at the query flag coming in from the config. figure out how we track all identifiable layers
        //      and make sure they get turned off/on according to settings

        // subfunction to clone a layerEntries config object.
        // since we are using typed objects with getters and setters,
        // our usual easy ways of cloning an object don't work (e.g. using
        // JSON.parse(JSON.stringify(x))). This is not a great solution (understatement),
        //  but is being done as a quick n dirty workaround. At a later time,
        // the guts of this function can be re-examined for a better,
        // less hardcoded solution.
        /*
        const cloneConfig = origConfig => {
            const clone = {};

            // direct copies, no defaulting
            clone.name = origConfig.name;
            clone.index = origConfig.index;
            clone.stateOnly = origConfig.stateOnly;
            clone.nameField = origConfig.nameField;
            clone.highlightFeature = origConfig.highlightFeature || true; // simple default

            // an empty string is a valid property, so be wary of falsy logic
            clone.outfields = origConfig.hasOwnProperty('outfields') ? origConfig.outfields : '*';

            // with state, we are either complete, or pure defaults.
            // in the non-complete case, we treat our state as unreliable and
            // expect the client to assign properties as it does parent-child inheritance
            // defaulting (which occurs after this onLoad function has completed)
            if (this._configIsComplete) {
                clone.state = {
                    visiblity: origConfig.visiblity,
                    opacity: origConfig.opacity,
                    query: origConfig.query
                };
            } else {
                clone.state = Object.assign({}, dummyState);
            }

            // if extent is present, we assume it is fully defined.
            // extents are not using fancy typed objects, so can directly reference
            clone.extent = origConfig.extent;

            return clone;
        };
        */

        // collate any relevant overrides from the config.
        const subConfigs: {[key: number]: RampLayerMapImageLayerEntryConfig} = {};

        (<Array<RampLayerMapImageLayerEntryConfig>>this.origRampConfig.layerEntries).forEach((le: RampLayerMapImageLayerEntryConfig) => {
            subConfigs[le.index] = le;
        });

        // subfunction to return a subconfig object.
        // if it does not exist or is not defaulted, will do that first
        // id param is an integer in string format

        /*
        const fetchSubConfig = (id, serverName = '') => {

            if (subConfigs[id]) {
                const subC = subConfigs[id];
                if (!subC.defaulted) {
                    // config is incomplete, fill in blanks
                    // we will never hit this code block a complete config was passed in

                    // apply a server name if no name exists
                    if (!subC.config.name) {
                        subC.config.name = serverName;
                    }

                    // mark as defaulted so we don't do this again
                    subC.defaulted = true;
                }
                return subC.config;
            } else {
                // no config at all. we apply defaults, and a name from the server if available
                const configSeed = {
                    name: serverName,
                    index: parseInt(id),
                    stateOnly: true
                };
                const newConfig = cloneConfig(configSeed);
                subConfigs[id] = {
                    config: newConfig,
                    defaulted: true
                };
                return newConfig;
            }
        };
        */

        // shortcut var to track all leafs that need attention
        // in the loading process
        const leafsToInit: Array<MapImageFC> = [];

        // this subfunction will recursively crawl a sublayer structure.
        // it will generate FCs for all leafs under the sublayer
        // we also generate a tree structure of our layer that is in a format
        // that makes the client happy
        const processSublayer = (subLayer: esri.Sublayer, parentTreeNode: TreeNode): void => {
            const sid: number = subLayer.id;
            const subC: RampLayerMapImageLayerEntryConfig = subConfigs[sid];

            if (subLayer.sublayers && subLayer.sublayers.length > 0) {
                // group sublayer. set up our tree for the client, then crawl childs.
                const gName = (subC ? subC.name : '') || subLayer.title || ''; // config if exists, else server, else none
                const treeGroup = new TreeNode(sid, '', gName, false); // TODO leaving uid blank. there is no object to tie back to. ensure not a problem for vue bindings
                parentTreeNode.childs.push(treeGroup);

                // process the kids in the group.
                subLayer.sublayers.forEach((subSubLayer: esri.Sublayer) => {
                    processSublayer(subSubLayer, treeGroup);
                });

            } else {
                // leaf sublayer. make placeholders, add leaf to the tree
                if (!this.fcs[sid]) {
                    const miFC = new MapImageFC(this.infoBundle(), this, sid);
                    const lName = (subC ? subC.name : '') || subLayer.title || ''; // config if exists, else server, else none
                    miFC.name = lName;
                    this.fcs[sid] = miFC;
                    leafsToInit.push(miFC);
                }

                const treeLeaf = new TreeNode(sid, this.fcs[sid].uid, this.fcs[sid].name, true);
                parentTreeNode.childs.push(treeLeaf);
            }
        };

        // TODO validate -1 is how we are notating a map image layer root (effectively service folder, no real index)
        this.layerTree = new TreeNode(-1, this.uid, this.origRampConfig.name, false); // public structure describing the tree

        // process the child layers our config is interested in, and all their children.
        (<Array<RampLayerMapImageLayerEntryConfig>>this.origRampConfig.layerEntries).forEach((le: RampLayerMapImageLayerEntryConfig) => {
            if (!le.stateOnly) {
                const rootSub: esri.Sublayer = findSublayer(le.index);
                processSublayer(rootSub, this.layerTree);
            }
        });

        // TODO figure out what we're doing with layer types
        /*
        // converts server layer type string to client layer type string
        const serverLayerTypeToClientLayerType = serverType => {
            switch (serverType) {
                case 'Feature Layer':
                    return shared.clientLayerType.ESRI_FEATURE;
                case 'Raster Layer':
                    return shared.clientLayerType.ESRI_RASTER;
                default:
                    console.warn('Unexpected layer type in serverLayerTypeToClientLayerType', serverType);
                    return shared.clientLayerType.UNKNOWN;
            }
        };
        */

        // process each leaf FC we walked to in the sublayer tree crawl above
        leafsToInit.forEach((mlFC: MapImageFC) => {

            // NOTE: can consider alternates, like innerLayer.url + / + layerIdx
            const serviceUrl: string = findSublayer(mlFC.layerIdx).url;

            // TODO check if we have custom renderer, add to options parameter here
            const pLMD: Promise<void> = mlFC.loadLayerMetadata(serviceUrl).then(() => {
                // apply any updates that were in the configuration snippets
                const subC: RampLayerMapImageLayerEntryConfig = subConfigs[mlFC.layerIdx];
                if (subC) {
                    mlFC.setVisibility(subC.state.visibility); // TODO do we need an init flag? perhaps the layer will already be invisible while this is getting set
                    if (!this.isUn(subC.state.opacity)) {
                        // mlFC.setOpacity(subC.state.opacity); // TODO uncomment when opacity is coded
                    }
                    // mlFC.setQueryable(subC.state.query); // TODO uncomment when done
                } else {
                    // pulling from parent would be cool, but complex. all the promises would need to be resolved in tree-order
                    // maybe put defaulting here for visible/opac/query
                }

                // TODO figure out what we're doing with layer types
                //      i believe load metadata is setting this now anyways
                // dFC.layerType = serverLayerTypeToClientLayerType(ld.layerType);

                // feature count if valid
                if (mlFC.supportsFeatures) {
                    return mlFC.loadFeatureCount(serviceUrl);
                } else {
                    return Promise.resolve();
                }
            });

            // TODO.  might need to wait for renderer to finish loading first on this.
            // load real symbols into our source
            // loadPromises.push(dFC.loadSymbology());

            loadPromises.push(pLMD);

        });

        // any sublayers not in our tree, we need to turn off.
        this.typedInnerLayer().allSublayers.forEach((s: esri.Sublayer) => {
            // find sublayers that are not groups, and dont exist in our initilazation array
            if (!s.sublayers && !leafsToInit.find((fc: MapImageFC) => fc.layerIdx === s.id)) {
                s.visible = false;
            }
        });

        // get mapName of the legend entry from the service to use as the name if not provided in config
        if (!this.name) {
            const serviceRequest: Promise<esri.RequestResponse> = this.esriBundle.esriRequest(this.typedInnerLayer().url, {
                query: {
                    f: 'json'
                }
            });
            const setTitle = serviceRequest.then((serviceResult: esri.RequestResponse) => {
                if (serviceResult.data) {
                    this.name = serviceResult.data.mapName || '';
                    this.layerTree.name = this.name;
                }
            });
            loadPromises.push(setTitle);
        }

        // TODO add back in promises
        // loadPromises.push(pLD, pFC, pLS);

        return loadPromises;
    }

    // ----------- LAYER MANAGEMENT -----------
    // Map Image Layer is an oddball, because the parent has state that is different from the state of the children.
    // so for properties that fall into this category, we intercept the common routies, and treat an undefined
    // layerIdx as targeting the layer proper (in other layers, undefined means take the default child)

    getName (layerIdx: number | string = undefined): string {
        const fc = this.getFC(layerIdx, true);
        if (this.isUn(fc)) {
            return this.name;
        } else {
            // see comment in getOpacity
            return super.getName(fc.layerIdx);
        }
    }

    /**
     * Returns the visibility of the layer/sublayer.
     *
     * @function getVisibility
     * @param {Integer} [layerIdx] targets a layer index to get visibility for. Layer visibility is used if omitted.
     * @returns {Boolean} visibility of the layer/sublayer
     */
    getVisibility (layerIdx: number | string = undefined): boolean {
        const fc = this.getFC(layerIdx, true);
        if (this.isUn(fc)) {
            return this.innerLayer.visible;
        } else {
            // see comment in getOpacity
            return super.getVisibility(fc.layerIdx);
        }
    }

    /**
     * Applies visibility to feature class.
     *
     * @function setVisibility
     * @param {Boolean} value the new visibility setting
     * @param {Integer} [layerIdx] targets a layer index to set visibility for. Layer visibility is set if omitted.
     */
    setVisibility (value: boolean, layerIdx: number | string = undefined): void {
        const fc = this.getFC(layerIdx, true);
        if (this.isUn(fc)) {
            this.innerLayer.visible = value;
        } else {
            // see comment in getOpacity
            super.setVisibility(value, fc.layerIdx);
        }
    }

    /**
     * Returns the opacity of the layer/sublayer.
     *
     * @function getOpacity
     * @param {Integer | String} [layerIdx] targets a layer index or uid to get opacity for. Layer opacity is used if omitted.
     * @returns {Boolean} opacity of the layer/sublayer
     */
    getOpacity (layerIdx: number | string = undefined): number {
        const fc = this.getFC(layerIdx, true);
        if (this.isUn(fc) || !this.isDynamic) {
            return this.innerLayer.opacity;
        } else {
            // this is a bit redundant / inefficient. we could just do fc.getOpacity()
            // current rationale is we keep the implementation in the baseclass
            // (i.e. only one piece of code does the opacity call on the FC, so if we
            // need to change it only changes in one spot)
            // can change to more direct (logic in two spots) if we need the efficiency gains.
            // this will apply to most of othe other things here that are doing "parent or fc"
            return super.getOpacity(fc.layerIdx);
        }

    }

    /**
     * Applies opacity to feature class.
     *
     * @function setOpacity
     * @param {Decimal} value the new opacity setting. Valid value is anything between 0 and 1, inclusive.
     * @param {Integer} [layerIdx] targets a layer index to get opacity for. Layer opacity is set if omitted.
     */
    setOpacity (value: number, layerIdx: number | string = undefined): void {
        const fc = this.getFC(layerIdx, true);
        if (this.isUn(fc) || !this.isDynamic) {
            this.innerLayer.opacity = value;

            // TODO check our implementation inside MapImageFC. we might need to adjust the opacity value of all the
            //      FCs if we are in the not-dynamic case
        } else {
            // see comment in getOpacity
            super.setOpacity(value, fc.layerIdx);
        }
    }

}