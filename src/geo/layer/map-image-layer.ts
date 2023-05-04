/* eslint-disable @typescript-eslint/no-unused-vars */

import {
    AttribLayer,
    CommonLayer,
    GlobalEvents,
    InstanceAPI,
    MapImageSublayer
} from '@/api/internal';
import {
    DefPromise,
    DrawState,
    Extent,
    GeometryType,
    Graphic,
    IdentifyResultFormat,
    LayerFormat,
    LayerIdentifyMode,
    LayerState,
    LayerType,
    NoGeometry,
    TreeNode
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
    RampLayerMapImageSublayerConfig,
    TabularAttributeSet
} from '@/geo/api';

import { EsriMapImageLayer, EsriRendererFromJson } from '@/geo/esri';
import { markRaw, reactive } from 'vue';

// Formerly known as DynamicLayer
export class MapImageLayer extends AttribLayer {
    // indicates if sublayers can have opacity adjusted
    isDynamic: boolean;
    // used to remember state after load
    private origState: any;
    declare esriLayer: EsriMapImageLayer | undefined;

    constructor(rampConfig: RampLayerConfig, $iApi: InstanceAPI) {
        super(rampConfig, $iApi);
        this.supportsIdentify = true;
        this.supportsSublayers = true;
        this.layerType = LayerType.MAPIMAGE;
        this.layerFormat = LayerFormat.MAPIMAGE;
        this.isDynamic = false; // will get updated after layer load.
        this.hovertips = false;
        this.layerTree.layerIdx = -1;
        this.identifyMode = LayerIdentifyMode.GEOMETRIC;
    }

    protected async onInitiate(): Promise<void> {
        this.esriLayer = markRaw(
            new EsriMapImageLayer(this.makeEsriLayerConfig(this.origRampConfig))
        );
        await super.onInitiate();
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
        // NOTE: it would be nice to put esri.LayerProperties as the return type, but since we are cheating with refreshInterval it wont work
        //       we can make our own interface if it needs to happen (or can extent the esri one)
        const esriConfig: __esri.MapImageLayerProperties =
            super.makeEsriLayerConfig(rampLayerConfig);

        // if we have a definition at load, apply it here to avoid cancellation errors on

        // override. make things invisible, revert to config setting after sublayers have been assigned visibilities and load finishes.
        this.origState = {
            visibility: esriConfig.visible,
            opacity: esriConfig.opacity
        };
        esriConfig.visible = false;

        if (rampLayerConfig.imageFormat) {
            // very grouchy about the string. Since it will be blank/default most of the time,
            // dont want to code a giant verification check.
            // Configurators who provide bad values will enjoy their funny images.
            // Note png24 is esri default according to docs, but if you set it as default it wrecks the edges
            // of most features. My belief is the actual default is the best setting the server supports,
            // so will only set the esri config if we have an override
            // @ts-ignore
            esriConfig.imageFormat = rampLayerConfig.imageFormat;
        }

        // IMPORTANT NOTE: do not set esriConfig.sublayers here.
        //                 it will defeat our auto-crawl behavior of sublayer trees.
        //                 if we do decide we need to leverage sublayer initialization on the layer constructor,
        //                 we would need to query the service root and extract the tree structure from there
        //                 prior to running this function. essentially do tree traversal before this instead
        //                 of on onLoadActions like we currently do.
        /*
        if (rampLayerConfig.sublayers) {
            // NOTE: important not to set esriConfig property to empty array, as that will request no sublayers.
            //       Documentation isn't clear if we should be using .sublayers or .allSublayers ; if .sublayers can it be flat array?
            //       Play with their online sandbox using a nested service if cant figure it out.
            
            // let us all stop to appreciate this line of code.
            esriConfig.sublayers = (<Array<RampLayerMapImageSublayerConfig>>rampLayerConfig.sublayers).map((sublayer: RampLayerMapImageSublayerConfig) => {
            
                // the super call will set up the basics/common stuff like vis, opacity, def identify
                // works because the sublayer property scheme is nearly identical to a normal layer
                const subby: esri.SublayerProperties = super.makeEsriLayerConfig(sublayer);
                subby.id = sublayer.index;

                // process the other options
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

        this.isDynamic =
            this.esriLayer.capabilities.exportMap.supportsDynamicLayers;

        this.extent =
            this.extent ??
            Extent.fromESRI(this.esriLayer.fullExtent, this.id + '_extent');

        const findSublayer = (targetIndex: number): __esri.Sublayer => {
            const finder = this.esriLayer?.allSublayers.find(s => {
                return s.id === targetIndex;
            });
            if (!finder) {
                throw new Error('attempt to find map image sublayer failed');
            }
            return finder;
        };

        // collate any relevant overrides from the config.
        const subConfigs: {
            [key: number]: RampLayerMapImageSublayerConfig;
        } = {};

        (<Array<RampLayerMapImageSublayerConfig>>(
            this.origRampConfig.sublayers
        )).forEach((sublayer: RampLayerMapImageSublayerConfig) => {
            // TODO the || 0 is there to handle missing index. probably will never happen. add an error check?
            subConfigs[sublayer.index || 0] = sublayer;
        });

        // shortcut var to track all leafs that need attention
        // in the loading process
        const leafsToInit: Array<MapImageSublayer> = [];

        // this subfunction will recursively crawl a sublayer structure.
        // it will generate MIL Sublayer objects for all leafs under the sublayer
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
                const treeGroup = new TreeNode(sid, '', gName, false); // leaving uid blank. there is no object to tie back to. ensure not a problem for vue bindings
                if (!parentTreeNode.findChildByIdx(sid)) {
                    parentTreeNode.children.push(treeGroup); // prevent duplication of child on reload
                }

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
                            id: `${this.id}-${sid}`,
                            // TODO: Revisit once issue #961 is implemented.
                            // See https://github.com/ramp4-pcar4/ramp4-pcar4/pull/1045#pullrequestreview-977116071
                            // ^ update: issue 961 seems to have nothing to do with this. The PR link implies this
                            //   comment is related to the parent state default line below. Best guess is that
                            //   issue #1394 was the impacted issue. It appears that the code in the leaf initializer
                            //   below is handling things, but leaving this here for now incase someone wants to
                            //   dig deeper (or a problem arises)
                            layerType: LayerType.SUBLAYER,
                            name: subConfigs[sid]?.name,
                            // If the state isn't defined, use the same state as the parent.
                            state: subConfigs[sid]?.state ?? {
                                opacity: this.opacity,
                                visibility: this.visibility,
                                hovertips: this.hovertips,
                                identify: this.identify
                            },
                            extent: subConfigs[sid]?.extent,
                            controls: subConfigs[sid]?.controls,
                            disabledControls: subConfigs[sid]?.disabledControls,
                            initialFilteredQuery:
                                subConfigs[sid]?.initialFilteredQuery,
                            permanentFilteredQuery:
                                subConfigs[sid]?.permanentFilteredQuery
                        },
                        this.$iApi,
                        this,
                        sid
                    );
                }

                const _sublayer: MapImageSublayer = this._sublayers[
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
                        .includes(sid)
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
                                layer: _sublayer
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
                                layer: _sublayer
                            }
                        );
                    })
                );
            }
        };

        // process the child layers our config is insested in, and all their children.
        (<Array<RampLayerMapImageSublayerConfig>>(
            this.origRampConfig.sublayers
        )).forEach(sublayer => {
            if (!sublayer.cosmetic) {
                // TODO add a check instead of 0 default on the index?
                const rootSub = findSublayer(sublayer.index || 0);
                // would need to validate layer tree every loop to shut up typescript. shutting it up with comment instead.
                // @ts-ignore
                processSublayer(rootSub, this.layerTree);
            }
        });

        // process each leaf sublayer we walked to in the sublayer tree crawl above
        leafsToInit.forEach((miSL: MapImageSublayer) => {
            // NOTE: can consider alternates, like esriLayer.url + / + layerIdx
            const sublayer = findSublayer(miSL.layerIdx);
            const config = subConfigs[miSL.layerIdx];
            miSL.serviceUrl = sublayer.url;

            // the sublayer needs to be re-fetched because the initial sublayer was marked as "raw"
            miSL.fetchEsriSublayer(this);
            miSL.initiate();

            // setting custom renderer here (if one is provided)
            const hasCustRed =
                miSL.esriSubLayer && config?.customRenderer?.type;
            if (hasCustRed) {
                miSL.esriSubLayer!.renderer = EsriRendererFromJson(
                    config.customRenderer
                );
            }

            const pLMD: Promise<void> = miSL
                .loadLayerMetadata(
                    hasCustRed
                        ? { customRenderer: miSL.esriSubLayer?.renderer }
                        : {}
                )
                .then(() => {
                    // apply any updates that were in the configuration snippets
                    const subC = subConfigs[miSL.layerIdx];
                    if (subC) {
                        // If the sublayer is cancelled or removed, set to invisible.
                        // Otherwise, sublayer visibility is normally checked (and set) in the following order:
                        // sublayer config -> server -> parent config -> true.
                        // First value in the order that is defined is taken as the sublayer's visibility.
                        // However, if parent vis is set to false on config, we prioritize parent config over server vis.
                        // The order in that case is sublayer config -> parent config -> server -> true.
                        miSL.visibility = miSL.isRemoved
                            ? false
                            : subC.state?.visibility ??
                              (this.origState.visibility
                                  ? miSL._serverVisibility ??
                                    this.origState.visibility
                                  : this.origState.visibility ??
                                    miSL._serverVisibility) ??
                              true;
                        miSL.opacity =
                            subC.state?.opacity ?? this.origState.opacity ?? 1;
                        miSL.nameField = subC.nameField || miSL.nameField || '';
                        miSL.processFieldMetadata(subC.fieldMetadata);
                        // NOTE the miSL.identify property is currently getting set in onLoadActions() of
                        //      MapImageSublayer. This will get called by this layer's onLoad after this
                        //      function runs. Not sure why that one part is there, but suggest leave
                        //      it alone unless things stop working. This comment just helps you find it.
                    } else {
                        // pulling from parent would be cool, but complex. all the promises would need to be resolved in tree-order
                        // maybe put defaulting here for visible/opac/identify
                        miSL.processFieldMetadata();
                    }

                    // do any things that are specific to feature or raster subtypes
                    if (miSL.supportsFeatures) {
                        if (!miSL.attLoader) {
                            throw new Error(
                                'Map Image Sublayer - expected attLoader to exist'
                            );
                        }
                        miSL.attLoader.updateFieldList(miSL.fieldList);
                        return miSL.loadFeatureCount();
                    } else {
                        return Promise.resolve();
                    }
                });
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

        // defaults to true
        this.visibility = this.origState.visibility ?? true;

        return loadPromises;
    }

    updateLayerState(newState: LayerState): void {
        // force any sublayers to also update their state and raise events
        super.updateLayerState(newState);
        this.sublayers.forEach(sublayer => sublayer.updateLayerState(newState));
    }

    updateDrawState(newState: DrawState): void {
        // force any sublayers to also update their draw state and raise events
        super.updateDrawState(newState);
        this.sublayers.forEach(sublayer => sublayer.updateDrawState(newState));
    }

    // ----------- LAYER ACTIONS -----------

    runIdentify(options: IdentifyParameters): Array<IdentifyResult> {
        // NOTE: we are looping over queryFeatures on each sublayer instead of running an identify on the entire layer.
        //       reasons:
        //         The queries allow us to only return OIDs. identify always pulls all the features.
        //         Identify returns results defined by server aliases instead of server field names, requiring us to reverse-engineer them.
        //         The query allows us to utilze our quick cache with the OID. the first hit is more heavy than an identify,
        //         but this also means the result is now cached and odds are the user is going to click on/inspect the result anyway.
        //         Also, if the grid has been opened, the identify can utilize the local attribute set.

        // early kickout check. not loaded/error
        if (!this.canIdentify()) {
            // return empty result.
            return [];
        }

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
                      return sublayer.canIdentify();
                  }
              );

        // early kickout check. all sublayers are one of: not visible; not identifiable; off scale; a raster layer
        if (activeSublayers.length === 0) {
            // return empty result.
            return [];
        }

        // prepare a query

        // TODO investigate if we need the sourceSR param set here

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
            const qOpts: QueryFeaturesParams = {};

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
     * Invokes the process to get the full set of attribute values for the layer.
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
     * Requests that any downloaded attribute sets or cached geometry be removed from memory. The next requests will pull from the server again.
     *
     */
    clearFeatureCache(): void {
        this.noFeaturesErr();
    }

    // formerly known as getFormattedAttributes
    /**
     * Invokes the process to get the full set of attribute values for the layer,
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
            oidField: 'error'
        });
    }

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
     * Returns the value of a named SQL filter on the layer.
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
     * Gets array of object ids that currently pass any filters on the layer
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
