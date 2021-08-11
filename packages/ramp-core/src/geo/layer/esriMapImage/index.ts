import { AttribLayer, GlobalEvents, InstanceAPI } from '@/api/internal';
import {
    Extent,
    GeometryType,
    IdentifyParameters,
    IdentifyResult,
    IdentifyResultFormat,
    IdentifyResultSet,
    LayerType,
    Point,
    QueryFeaturesParams,
    RampLayerConfig,
    RampLayerMapImageLayerEntryConfig,
    TreeNode
} from '@/geo/api';
import { EsriMapImageLayer, EsriRequest } from '@/geo/esri';
import { MapImageFC } from './map-image-fc';
import { markRaw } from 'vue';

// Formerly known as DynamicLayer
class MapImageLayer extends AttribLayer {
    // indicates if sublayers can have opacity adjusted
    isDynamic: boolean;
    declare esriLayer: EsriMapImageLayer | undefined;

    constructor(rampConfig: RampLayerConfig, $iApi: InstanceAPI) {
        super(rampConfig, $iApi);
        this.supportsIdentify = true;
        this._layerType = LayerType.MAPIMAGE;
        this.isDynamic = false; // will get updated after layer load.
    }

    async initiate(): Promise<void> {
        this.esriLayer = markRaw(
            new EsriMapImageLayer(this.makeEsriLayerConfig(this.origRampConfig))
        );
        await super.initiate();
    }

    /**
     * Take a layer config from the RAMP application and derives a configuration for an ESRI layer
     *
     * @param rampLayerConfig snippet from RAMP for this layer
     * @returns configuration object for the ESRI layer representing this layer
     */
    protected makeEsriLayerConfig(
        rampLayerConfig: RampLayerConfig
    ): __esri.MapImageLayerProperties {
        // TODO flush out
        // NOTE: it would be nice to put esri.LayerProperties as the return type, but since we are cheating with refreshInterval it wont work
        //       we can make our own interface if it needs to happen (or can extent the esri one)
        const esriConfig: __esri.MapImageLayerProperties = super.makeEsriLayerConfig(
            rampLayerConfig
        );

        // TODO add any extra properties for attrib-based layers here
        // if we have a definition at load, apply it here to avoid cancellation errors on

        // override. make things invisible, revert to config setting after sublayers have been assigned visibilities and load finishes.
        esriConfig.visible = false;

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
     * Triggers when the layer loads.
     *
     * @function onLoadActions
     */
    onLoadActions(): Array<Promise<void>> {
        const loadPromises: Array<Promise<void>> = super.onLoadActions();

        if (!this.esriLayer) {
            this.noLayerErr();
            return loadPromises;
        }

        // a trick. this promise wont resolve until all the loading things have finished.
        // then we revert the layer visibility back to what the config wanted.
        // avoids multiple re-draws as child visibilities get set up.
        // so really the inner statement runs after everything else in this
        // function is done.
        this.isLayerLoaded().then(() => {
            if (this.origRampConfig && this.origRampConfig.state) {
                this.setVisibility(!!this.origRampConfig.state.visibility);
            }
        });

        this.isDynamic = this.esriLayer.capabilities.exportMap.supportsDynamicLayers;

        // TODO the whole "configIsComplete" logic in RAMP2 was never invoked by the client.
        //      Don't see the point in re-adding it here.

        // we run into a lot of funny business with functions/constructors modifying parameters.
        // this essentially clones an object to protect original objects against trickery.
        const jsonCloner = (inputObject: any) => {
            return JSON.parse(JSON.stringify(inputObject));
        };

        const findSublayer = (targetIndex: number): __esri.Sublayer => {
            const finder = this.esriLayer?.allSublayers.find(s => {
                return s.id === targetIndex;
            });
            if (!finder) {
                throw new Error('attempt to find map image sublayer failed');
            }
            return finder;
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
        const subConfigs: {
            [key: number]: RampLayerMapImageLayerEntryConfig;
        } = {};

        (<Array<RampLayerMapImageLayerEntryConfig>>(
            this.origRampConfig.layerEntries
        )).forEach((le: RampLayerMapImageLayerEntryConfig) => {
            // TODO the || 0 is there to handle missing index. probably will never happen. add an error check?
            subConfigs[le.index || 0] = le;
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
        const processSublayer = (
            subLayer: __esri.Sublayer,
            parentTreeNode: TreeNode
        ): void => {
            const sid: number = subLayer.id;
            const subC = subConfigs[sid];

            if (subLayer.sublayers && subLayer.sublayers.length > 0) {
                // group sublayer. set up our tree for the client, then crawl children.
                const gName = (subC ? subC.name : '') || subLayer.title || ''; // config if exists, else server, else none
                const treeGroup = new TreeNode(sid, '', gName, false); // TODO leaving uid blank. there is no object to tie back to. ensure not a problem for vue bindings
                parentTreeNode.children.push(treeGroup);

                // process the kids in the group.
                subLayer.sublayers.forEach((subSubLayer: __esri.Sublayer) => {
                    processSublayer(subSubLayer, treeGroup);
                });
            } else {
                // leaf sublayer. make placeholders, add leaf to the tree
                if (!this.fcs[sid]) {
                    const miFC = new MapImageFC(this, sid);
                    const lName =
                        (subC ? subC.name : '') || subLayer.title || ''; // config if exists, else server, else none
                    miFC.name = lName;
                    this.fcs[sid] = miFC;
                    leafsToInit.push(miFC);
                }

                const treeLeaf = new TreeNode(
                    sid,
                    this.fcs[sid].uid,
                    this.fcs[sid].name,
                    true
                );
                parentTreeNode.children.push(treeLeaf);

                subLayer.watch('visible', () => {
                    // Parent layer visibility
                    this.$iApi.event.emit(GlobalEvents.LAYER_VISIBILITYCHANGE, {
                        visibility: this.getVisibility(),
                        uid: this.uid
                    });
                    // Sublayer visibility
                    this.$iApi.event.emit(GlobalEvents.LAYER_VISIBILITYCHANGE, {
                        visibility: this.fcs[sid].getVisibility(),
                        uid: this.fcs[sid].uid
                    });
                });
            }
        };

        // process the child layers our config is interested in, and all their children.
        (<Array<RampLayerMapImageLayerEntryConfig>>(
            this.origRampConfig.layerEntries
        )).forEach(le => {
            if (!le.stateOnly) {
                // TODO add a check instead of 0 default on the index?
                const rootSub = findSublayer(le.index || 0);

                // TODO would need to validate layer tree every loop to shut up typescript. shutting it up with comment instead.
                // @ts-ignore
                processSublayer(rootSub, this.layerTree);
            }
        });

        // process each leaf FC we walked to in the sublayer tree crawl above
        leafsToInit.forEach((mlFC: MapImageFC) => {
            // NOTE: can consider alternates, like esriLayer.url + / + layerIdx
            mlFC.serviceUrl = findSublayer(mlFC.layerIdx).url;

            // TODO check if we have custom renderer, add to options parameter here
            const pLMD: Promise<void> = mlFC.loadLayerMetadata().then(() => {
                // apply any updates that were in the configuration snippets
                const subC = subConfigs[mlFC.layerIdx];
                if (subC) {
                    mlFC.setVisibility(!!subC.state?.visibility); // TODO do we need an init flag? perhaps the layer will already be invisible while this is getting set
                    if (!(typeof subC.state?.opacity === 'undefined')) {
                        // mlFC.setOpacity(subC.state.opacity); // TODO uncomment when opacity is coded
                    }
                    // mlFC.setQueryable(subC.state.query); // TODO uncomment when done

                    mlFC.nameField = subC.nameField || mlFC.nameField || '';
                    mlFC.processFieldMetadata(subC.fieldMetadata);
                } else {
                    // pulling from parent would be cool, but complex. all the promises would need to be resolved in tree-order
                    // maybe put defaulting here for visible/opac/query
                    mlFC.processFieldMetadata();
                }

                // do any things that are specific to feature or raster subtypes
                if (mlFC.supportsFeatures) {
                    if (!mlFC.attLoader) {
                        throw new Error(
                            'Map Image FC - expected attLoader to exist'
                        );
                    }
                    mlFC.attLoader.updateFieldList(mlFC.fieldList);
                    return mlFC.loadFeatureCount();
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
        this.esriLayer.allSublayers.forEach(s => {
            // find sublayers that are not groups, and dont exist in our initilazation array
            if (
                !s.sublayers &&
                !leafsToInit.find((fc: MapImageFC) => fc.layerIdx === s.id)
            ) {
                s.visible = false;
            }
        });

        // get mapName of the legend entry from the service to use as the name if not provided in config
        // TODO error handling on request?
        //      consider using   import to from 'await-to-js';
        if (!this.name) {
            const serviceRequest = EsriRequest(this.esriLayer.url, {
                query: {
                    f: 'json'
                }
            });
            const setTitle = serviceRequest.then(serviceResult => {
                if (serviceResult.data) {
                    this.name = serviceResult.data.mapName || '';
                    // @ts-ignore
                    this.layerTree.name = this.name;
                } else {
                    this.name = '[server error]';
                    // @ts-ignore
                    this.layerTree.name = '[server error]';
                    console.error(
                        // @ts-ignore
                        `Get map name service failed: ${this.esriLayer.url}`
                    );
                }
            });
            loadPromises.push(setTitle);
        }

        return loadPromises;
    }

    // ----------- LAYER MANAGEMENT -----------

    // Map Image Layer is an oddball, because the parent has state that is different from the state of the children.
    // so for properties that fall into this category, we intercept the common routies, and treat an undefined
    // layerIdx as targeting the layer proper (in other layers, undefined means take the default child)

    /**
     * Returns the name of the layer/sublayer.
     *
     * @function getName
     * @param {Integer | String} [layerIdx] targets a layer index or uid to get the name for. Uses first/only if omitted.
     * @returns {String} name of the layer/sublayer
     */
    getName(layerIdx: number | string | undefined = undefined): string {
        if (!this.sawLoad) {
            // layer has not been loaded yet

            if (typeof layerIdx === 'string') {
                // no uids at this point so we have no idea what's being requested
                return '';
            } else if (typeof layerIdx === 'number') {
                // layerIdx is a layer index
                const layerEntries: Array<RampLayerMapImageLayerEntryConfig> =
                    this.origRampConfig.layerEntries || [];
                const layer = (<Array<RampLayerMapImageLayerEntryConfig>>(
                    layerEntries
                )).filter((layer: any) => {
                    return layer.index === layerIdx;
                })[0];
                if (layer && layer.name) {
                    return layer.name;
                } else {
                    return '';
                }
            } else {
                // if the layer was added through the wizard, or the parent layer has a name in the config, this.name will be defined
                return this.name || '';
            }
        }
        const fc = this.getFC(layerIdx, true);
        if (!fc) {
            // layerIdx belongs to the parent layer
            return this.name || this.id;
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
    getVisibility(layerIdx: number | string | undefined = undefined): boolean {
        const fc = this.getFC(layerIdx, true);

        if (!fc) {
            return !!this.esriLayer?.visible;
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
    setVisibility(
        value: boolean,
        layerIdx: number | string | undefined = undefined
    ): void {
        const fc = this.getFC(layerIdx, true);
        if (!fc) {
            if (this.esriLayer) {
                this.esriLayer.visible = value;
            }
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
    getOpacity(layerIdx: number | string | undefined = undefined): number {
        const fc = this.getFC(layerIdx, true);
        if (!fc || !this.isDynamic) {
            return this.esriLayer?.opacity || 0;
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
    setOpacity(
        value: number,
        layerIdx: number | string | undefined = undefined
    ): void {
        const fc = this.getFC(layerIdx, true);
        if (!fc || !this.isDynamic) {
            if (this.esriLayer) {
                this.esriLayer.opacity = value;
            }

            // TODO check our implementation inside MapImageFC. we might need to adjust the opacity value of all the
            //      FCs if we are in the not-dynamic case
        } else {
            // see comment in getOpacity
            super.setOpacity(value, fc.layerIdx);
        }
    }

    /**
     * Returns the opacity of the layer/sublayer.
     *
     * @function getOpacity
     * @param {Integer | String} [layerIdx] targets a layer index or uid to get opacity for. Uses first/only if omitted.
     * @returns {Boolean} opacity of the layer/sublayer
     */
    // TODO need to verify if a MapImage root layer can have its own scaleset, or if it just
    //      uses the collation of all its children
    /*
    getScaleSet (layerIdx: number | string | undefined = undefined): ScaleSet {
        const fc = this.getFC(layerIdx, true);
        if (!fc) {
            return this.scaleSet;
        } else {
            return this.getFC(fc.layerIdx).scaleSet;
        }
    }
    */

    // ----------- LAYER ACTIONS -----------

    identify(options: IdentifyParameters): IdentifyResultSet {
        // NOTE: we are looping over queries on each sublayer instead of running an identify on the entire layer.
        //       reasons:
        //         the queries allow us to only return OIDs. identify always pulls all the features.
        //         identify returns results defined by server aliases instead of server field names, requiring us to reverse-engineer them
        //         the query allows us to utilze our quick cache with the OID. the first hit is more heavy than an identify,
        //         but this also means the result is now cached and odds are the user is going to click on/inspect the result anyway.
        //         also, if the grid has been opened, the identify can utilize the local attribute set.

        // early kickout check. not loaded/error
        if (!this.isValidState()) {
            // return empty result.
            return super.identify(options);
        }

        const map = this.$iApi.geo.map;

        // change any sublayer ids that are server indices to sublayer uids.
        if (options.sublayerIds) {
            options.sublayerIds = options.sublayerIds.map(
                (id: number | string) => {
                    if (typeof id === 'number') {
                        return <string>this.layerTree?.findChildByIdx(id)?.uid;
                    }
                    return id;
                }
            );
        }

        const activeFCs: Array<MapImageFC> = options.sublayerIds
            ? (<Array<MapImageFC>>this.fcs).filter((fc: MapImageFC) => {
                  // query for only the given sublayers
                  return options.sublayerIds?.includes(fc.uid);
              })
            : (<Array<MapImageFC>>this.fcs).filter((fc: MapImageFC) => {
                  // query for visible, queryable, on-scale sublayers
                  return (
                      fc.getVisibility() &&
                      fc.supportsFeatures &&
                      !fc.scaleSet.isOffScale(map.getScale()).offScale
                  );
                  // && fc.getQuery() // TODO add in query check once implemented
              });

        // early kickout check. all sublayers are one of: not visible; not queryable; off scale; a raster layer
        if (activeFCs.length === 0) {
            // return empty result.
            return super.identify(options);
        }

        const result: IdentifyResultSet = {
            results: [],
            done: Promise.resolve(), // set properly below
            parentUid: this.uid
        };

        // prepare a query
        // it may make more sense to have this made for each FC
        // TODO investigate if we need the sourceSR param set here
        const qOpts: QueryFeaturesParams = {
            includeGeometry: options.returnGeometry
        };

        let pointBuffer: Extent;
        if (options.geometry.type === GeometryType.POINT) {
            pointBuffer = this.$iApi.geo.utils.query.makeClickBuffer(
                <Point>options.geometry,
                options.tolerance
            );
        }

        // loop over active FCs. call query on each. prepare a geometry
        result.done = Promise.all(
            activeFCs.map(fc => {
                const innerResult: IdentifyResult = {
                    uid: fc.uid,
                    isLoading: true,
                    items: []
                };
                result.results.push(innerResult);

                if (fc.geomType !== GeometryType.POLYGON && pointBuffer) {
                    // we want to use a point buffer if
                    // - a point was used as identify input (aka a pointBuffer exists in the var)
                    // - the sublayer is not a polygon layer
                    qOpts.filterGeometry = pointBuffer;
                } else {
                    qOpts.filterGeometry = options.geometry;
                }

                qOpts.outFields = fc.fieldList;
                qOpts.filterSql = fc.getCombinedSqlFilter();

                return fc.queryFeatures(qOpts).then(results => {
                    // TODO might be a problem overwriting the array if something is watching/binding to the original
                    innerResult.items = results.map(gr => {
                        return {
                            // TODO this block is the same as in featurelayer. might want to abstract to a shared function. really depends if we keep the extra params
                            // TODO decide if we want to handle alias mapping here or not.
                            //      if we do, our "ESRI" format will need to include field metadata.
                            //      if we dont, we need to ensure an outside fixture can access field metadata via uid easily.
                            data: gr.attributes, // this.attributesToDetails(vAtt.attributes, layerData.fields),
                            format: IdentifyResultFormat.ESRI

                            // See comments on IdentifyItem interface definition; we may decide to not keep these properties
                            // id:  gr.attributes[fc.oidField].toString(),
                            // symbol: this.gapi.utils.symbology.getGraphicIcon(gr.attributes, fc.renderer) // TODO use fc.getIcon instead
                            // name: this.getFeatureName(vAtt.oid.toString(), vAtt.attributes),
                        };
                    });

                    innerResult.isLoading = false;
                });
            })
        ).then(() => Promise.resolve()); // just to stop typescript from crying about array result of .all()

        return result;
    }
}

export default MapImageLayer;
