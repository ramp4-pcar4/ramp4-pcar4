import {
    AttribLayer,
    CommonLayer,
    GlobalEvents,
    InstanceAPI,
    MapImageSublayer
} from '@/api/internal';
import {
    DefPromise,
    Graphic,
    Extent,
    GeometryType,
    NoGeometry,
    TreeNode,
    LayerType,
    IdentifyResultFormat
} from '@/geo/api';

import type {
    AttributeSet,
    GetGraphicParams,
    IdentifyItem,
    IdentifyParameters,
    IdentifyResult,
    Point,
    QueryFeaturesParams,
    RampLayerConfig,
    RampLayerMapImageLayerEntryConfig,
    TabularAttributeSet
} from '@/geo/api';

import {
    EsriMapImageLayer,
    EsriRequest,
    EsriRendererFromJson
} from '@/geo/esri';
import { markRaw, reactive } from 'vue';

// Formerly known as DynamicLayer
export class MapImageLayer extends AttribLayer {
    // indicates if sublayers can have opacity adjusted
    isDynamic: boolean;
    declare esriLayer: EsriMapImageLayer | undefined;

    constructor(rampConfig: RampLayerConfig, $iApi: InstanceAPI) {
        super(rampConfig, $iApi);
        this.supportsIdentify = true;
        this.supportsSublayers = true;
        this.layerType = LayerType.MAPIMAGE;
        this.isDynamic = false; // will get updated after layer load.
        this.hovertips = false;
        this.layerTree.layerIdx = -1;
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
        const esriConfig: __esri.MapImageLayerProperties =
            super.makeEsriLayerConfig(rampLayerConfig);

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
                // the super call will set up the basics/common stuff like vis, opacity, def identify
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

        this.layerTree.name = this.name;

        // a trick. this promise wont resolve until all the loading things have finished.
        // then we revert the layer visibility back to what the config wanted.
        // avoids multiple re-draws as child visibilities get set up.
        // so really the inner statement runs after everything else in this
        // function is done.
        this.isLayerLoaded().then(() => {
            if (this.origRampConfig && this.origRampConfig.state) {
                this.visibility = !!this.origRampConfig.state.visibility;
            }
        });

        this.isDynamic =
            this.esriLayer.capabilities.exportMap.supportsDynamicLayers;

        this.extent = Extent.fromESRI(
            this.esriLayer.fullExtent,
            this.id + '_extent'
        );

        // TODO the whole "configIsComplete" logic in RAMP2 was never invoked by the client.
        //      Don't see the point in re-adding it here.

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
            identify: false
        };
        */

        // TODO take another look at the identify flag coming in from the config. figure out how we track all identifiable layers
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
                    identify: origConfig.identify
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
        const leafsToInit: Array<MapImageSublayer> = [];

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
                // below will run only during first load
                if (!this._sublayers[sid]) {
                    this._sublayers[sid] = new MapImageSublayer(
                        {
                            // TODO: Revisit once issue #961 is implemented.
                            // See https://github.com/ramp4-pcar4/ramp4-pcar4/pull/1045#pullrequestreview-977116071
                            layerType: LayerType.SUBLAYER,
                            // If the state isn't defined, use the same state as the parent.
                            state: subConfigs[sid]?.state ?? {
                                opacity: this.opacity,
                                visibility: this.visibility,
                                hovertips: this.hovertips,
                                identify: this.identify
                            },
                            controls: subConfigs[sid]?.controls,
                            disabledControls: subConfigs[sid]?.disabledControls
                        },
                        this.$iApi,
                        this,
                        sid
                    );
                }

                let _sublayer: MapImageSublayer = this._sublayers[
                    sid
                ] as MapImageSublayer;

                if (_sublayer.isRemoved) {
                    return; // no need to initialize a removed sublayer
                }

                const lName = (subC ? subC.name : '') || subLayer.title || ''; // config if exists, else server, else none
                (_sublayer as MapImageSublayer).name = lName;

                leafsToInit.push(_sublayer as MapImageSublayer);

                // check if parent's children have already been initialized
                if (
                    !parentTreeNode.children
                        .map(node => node.layerIdx)
                        .includes(sid) ||
                    !_sublayer.initialized
                ) {
                    const treeLeaf = new TreeNode(
                        sid,
                        _sublayer.uid,
                        (_sublayer as CommonLayer).name,
                        false
                    );
                    parentTreeNode.children.push(treeLeaf);
                }
                _sublayer.esriWatches.push(
                    subLayer.watch('visible', () => {
                        this.$iApi.event.emit(
                            GlobalEvents.LAYER_VISIBILITYCHANGE,
                            {
                                visibility: _sublayer.visibility,
                                uid: _sublayer.uid
                            }
                        );
                        (_sublayer.parentLayer as CommonLayer) // the parent of a MapImageSublayer must be a CommonLayer
                            ?.checkVisibility();
                    }),
                    subLayer.watch('opacity', (newval: number) => {
                        this.$iApi.event.emit(
                            GlobalEvents.LAYER_OPACITYCHANGE,
                            {
                                opacity: newval,
                                uid: _sublayer.uid
                            }
                        );
                    })
                );
            }
        };

        // process the child layers our config is insested in, and all their children.
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

        // process each leaf sublayer we walked to in the sublayer tree crawl above
        leafsToInit.forEach((mlFC: MapImageSublayer) => {
            // NOTE: can consider alternates, like esriLayer.url + / + layerIdx
            const sublayer = findSublayer(mlFC.layerIdx);
            const config = subConfigs[mlFC.layerIdx];
            mlFC.serviceUrl = sublayer.url;

            // the sublayer needs to be re-fetched because the initial sublayer was marked as "raw"
            mlFC.fetchEsriSublayer(this);

            // setting custom renderer here (if one is provided)
            const hasCustRed =
                mlFC.esriSubLayer && config?.customRenderer?.type;
            if (hasCustRed) {
                mlFC.esriSubLayer!.renderer = EsriRendererFromJson(
                    config.customRenderer
                );
            }

            // TODO check if we have custom renderer, add to options parameter here
            const pLMD: Promise<void> = mlFC
                .loadLayerMetadata(
                    hasCustRed
                        ? { customRenderer: mlFC.esriSubLayer?.renderer }
                        : {}
                )
                .then(() => {
                    // apply any updates that were in the configuration snippets
                    const subC = subConfigs[mlFC.layerIdx];
                    if (subC) {
                        mlFC.visibility = subC.state?.visibility || true;
                        mlFC.opacity = subC.state?.opacity || 1;
                        // mlFC.setQueryable(subC.state.identify); // TODO uncomment when done
                        mlFC.nameField = subC.nameField || mlFC.nameField || '';
                        mlFC.processFieldMetadata(subC.fieldMetadata);
                    } else {
                        // pulling from parent would be cool, but complex. all the promises would need to be resolved in tree-order
                        // maybe put defaulting here for visible/opac/identify
                        mlFC.processFieldMetadata();
                    }

                    // do any things that are specific to feature or raster subtypes
                    if (mlFC.supportsFeatures) {
                        if (!mlFC.attLoader) {
                            throw new Error(
                                'Map Image Sublayer - expected attLoader to exist'
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
            // loadPromises.push(mlFC.loadSymbology());

            loadPromises.push(pLMD);
        });

        // any sublayers not in our tree, we need to turn off.
        this.esriLayer.allSublayers.forEach(s => {
            // find sublayers that are not groups, and dont exist in our initilazation array
            if (
                !s.sublayers &&
                !leafsToInit.find(
                    (sublayer: MapImageSublayer) => sublayer.layerIdx === s.id
                )
            ) {
                s.visible = false;
                s.opacity = 0; // might be overkill
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

    // ----------- LAYER ACTIONS -----------

    runIdentify(options: IdentifyParameters): Array<IdentifyResult> {
        // NOTE: we are looping over queryFeatures on each sublayer instead of running an identify on the entire layer.
        //       reasons:
        //         the queries allow us to only return OIDs. identify always pulls all the features.
        //         identify returns results defined by server aliases instead of server field names, requiring us to reverse-engineer them
        //         the query allows us to utilze our quick cache with the OID. the first hit is more heavy than an identify,
        //         but this also means the result is now cached and odds are the user is going to click on/inspect the result anyway.
        //         also, if the grid has been opened, the identify can utilize the local attribute set.

        // early kickout check. not loaded/error
        if (!this.isValidState || !this.visibility) {
            // return empty result.
            return [];
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

        const activeSublayers: Array<MapImageSublayer> = options.sublayerIds
            ? (<Array<MapImageSublayer>>this._sublayers).filter(
                  (sublayer: MapImageSublayer) => {
                      // query for only the given sublayers
                      return options.sublayerIds?.includes(sublayer.uid);
                  }
              )
            : (<Array<MapImageSublayer>>this._sublayers).filter(
                  (sublayer: MapImageSublayer) => {
                      // query for visible, identifiable, on-scale sublayers
                      return (
                          sublayer.visibility &&
                          sublayer.supportsFeatures &&
                          sublayer.identify &&
                          !sublayer.scaleSet.isOffScale(map.getScale()).offScale
                      );
                  }
              );

        // early kickout check. all sublayers are one of: not visible; not identifiable; off scale; a raster layer
        if (activeSublayers.length === 0) {
            // return empty result.
            return [];
        }

        // prepare a query
        // it may make more sense to have this made for each sublayer
        // TODO investigate if we need the sourceSR param set here
        const qOpts: QueryFeaturesParams = {
            includeGeometry: options.returnGeometry
        };

        let pointBuffer: Extent;
        if (options.geometry.type === GeometryType.POINT) {
            pointBuffer = this.$iApi.geo.query.makeClickBuffer(
                <Point>options.geometry,
                options.tolerance
            );
        }

        // loop over active sublayers. call query on each and generate an IdentifyItem to track it
        return activeSublayers.map(sublayer => {
            const dProm = new DefPromise();

            const result: IdentifyResult = reactive({
                items: [],
                loading: dProm.getPromise(),
                loaded: false,
                uid: sublayer.uid,
                requestTime: Date.now()
            });

            if (sublayer.geomType !== GeometryType.POLYGON && pointBuffer) {
                // we want to use a point buffer if
                // - a point was used as identify input (aka a pointBuffer exists in the var)
                // - the sublayer is not a polygon layer
                qOpts.filterGeometry = pointBuffer;
            } else {
                qOpts.filterGeometry = options.geometry;
            }

            qOpts.outFields = sublayer.fieldList;
            qOpts.filterSql = sublayer.getCombinedSqlFilter();

            sublayer.queryFeaturesDiscrete(qOpts).then(results => {
                results.forEach(dgr => {
                    const item: IdentifyItem = reactive({
                        data: undefined,
                        format: IdentifyResultFormat.ESRI,
                        loaded: false,
                        loading: new Promise(resolve => {
                            dgr.graphic.then(g => {
                                item.data = g.attributes;
                                item.loaded = true;
                                resolve();
                            });
                        })
                    });

                    result.items.push(item); // push, incase something was bound to the array
                });

                // Resolve the loading promise, set the flag
                // This promise only indicates we have an array of results (each may still be loading their internals)
                result.loaded = true;
                dProm.resolveMe();
            });

            return result;
        });
    }

    private noFeaturesErr(): void {
        console.error(
            'This method targets features and must be called on a Sublayer.'
        );
        console.trace();
    }

    /**
     * Invokes the process to get the full set of attribute values for the given sublayer.
     * Repeat calls will re-use the downloaded values unless the values have been explicitly cleared.
     *
     * @returns {Promise} resolves with set of attribute values
     */
    getAttributes(): Promise<AttributeSet> {
        this.noFeaturesErr();
        return Promise.resolve({
            features: [],
            oidIndex: {}
        });
    }

    /**
     * Requests that an attribute load request be aborted. Useful when encountering a massive dataset or a runaway process.
     *
     */
    abortAttributeLoad(): void {
        this.noFeaturesErr();
    }

    /**
     * Requests that any downloaded attribute sets be removed from memory. The next getAttributes request will pull from the server again.
     *
     */
    destroyAttributes(): void {
        this.noFeaturesErr();
    }

    // formerly known as getFormattedAttributes
    /**
     * Invokes the process to get the full set of attribute values for the given sublayer,
     * formatted in a tabular format. Additional data properties are also included.
     * Repeat calls will re-use the downloaded values unless the values have been explicitly cleared.
     *
     * @returns {Promise} resolves with set of tabular attribute values
     */
    getTabularAttributes(): Promise<TabularAttributeSet> {
        this.noFeaturesErr();

        // nonsense to shut up typescript
        return Promise.resolve({
            columns: [],
            rows: [],
            fields: [],
            oidField: 'error',
            oidIndex: 0 // TODO determine if we need this anymore
        });
    }

    // TODO think about this name. using getGraphic for consistency.
    /**
     * Gets information on a graphic in the most efficient way possible. Options object properties:
     * - getGeom ; a boolean to indicate if the result should include graphic geometry
     * - getAttribs ; a boolean to indicate if the result should include graphic attributes
     * - unboundMap ; an optional RampMap reference. Only required if geometry was requested and the layer has not been added to a map.
     *
     * @param {Integer} objectId the object id of the graphic to find
     * @param {Object} options options object for the request, see above
     * @returns {Promise} resolves with a Graphic containing the requested information
     */
    getGraphic(objectId: number, options: GetGraphicParams): Promise<Graphic> {
        this.noFeaturesErr();
        return Promise.resolve(new Graphic(new NoGeometry()));
    }

    /**
     * Gets the icon for a specific feature, as an SVG string.
     *
     * @param {Integer} objectId the object id of the feature to find
     * @returns {Promise} resolves with an svg string encoding of the icon
     */
    getIcon(objectId: number): Promise<string> {
        this.noFeaturesErr();
        return Promise.resolve('');
    }

    /**
     * Returns the value of a named SQL filter for a given sublayer.
     *
     * @param {String} filterKey the filter key / named filter to view
     * @returns {String} the value of the where clause for the filter. Empty string if not defined.
     */
    getSqlFilter(filterKey: string): string {
        this.noFeaturesErr();
        return '';
    }

    /**
     * Applies the current filter settings to the physical map layer.
     *
     * @function applySqlFilter
     * @param {Array} [exclusions] list of any filters to exclude from the result. omission includes all keys
     */
    applySqlFilter(exclusions: Array<string> = []): void {
        this.noFeaturesErr();
    }

    /**
     * Gets array of object ids that currently pass any filters for the given sublayer
     *
     * @param {Array} [exclusions] list of any filters keys to exclude from the result. omission includes all filters
     * @param {Extent} [extent] if provided, the result list will only include features intersecting the extent
     * @returns {Promise} resolves with array of object ids that pass the filter. if no filters are active, resolves with undefined.
     */
    getFilterOIDs(
        exclusions: Array<string> = [],
        extent: Extent | undefined = undefined
    ): Promise<Array<number> | undefined> {
        this.noFeaturesErr();
        return Promise.resolve(undefined);
    }
}
