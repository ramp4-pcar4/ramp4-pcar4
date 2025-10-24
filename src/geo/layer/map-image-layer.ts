import {
    GlobalEvents,
    InstanceAPI,
    MapImageSublayer,
    MapLayer,
    NotificationType,
    ReactiveIdentifyFactory
} from '@/api/internal';
import type { IdentifyResult } from '@/api/internal';

import {
    CoreFilter,
    DefPromise,
    DrawState,
    Extent,
    GeometryType,
    LayerFormat,
    LayerIdentifyMode,
    LayerState,
    LayerType,
    TreeNode
} from '@/geo/api';
import type {
    IdentifyParameters,
    LoadLayerMetadataOptions,
    Point,
    QueryFeaturesParams,
    RampLayerConfig,
    RampLayerMapImageSublayerConfig
} from '@/geo/api';

import { EsriAPI, EsriWatch } from '@/geo/esri';
import type { EsriMapImageLayer } from '@/geo/esri';
import { markRaw, reactive } from 'vue';

// Formerly known as DynamicLayer
/**
 * A layer class which implements an ESRI Map Image Layer.
 */
export class MapImageLayer extends MapLayer {
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
        this.esriLayer = markRaw(await EsriAPI.MapImageLayer(this.makeEsriLayerConfig(this.origRampConfig)));

        await super.onInitiate();
    }

    /**
     * Take a layer config from the RAMP application and derives a configuration for an ESRI layer
     *
     * @param rampLayerConfig snippet from RAMP for this layer
     * @returns configuration object for the ESRI layer representing this layer
     */
    protected makeEsriLayerConfig(rampLayerConfig: RampLayerConfig): __esri.MapImageLayerProperties {
        // NOTE: it would be nice to put esri.LayerProperties as the return type, but since we are cheating with refreshInterval it wont work
        //       we can make our own interface if it needs to happen (or can extent the esri one)
        const esriConfig: __esri.MapImageLayerProperties = super.makeEsriLayerConfig(rampLayerConfig);

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
            // @ts-expect-error TODO: explain why this is needed or remove
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

    protected onLoadActions(): Array<Promise<void>> {
        const loadPromises: Array<Promise<void>> = super.onLoadActions();

        if (!this.layerExists) {
            this.noLayerErr();
            return loadPromises;
        }

        const startTime = Date.now();

        this.layerTree.name = this.name;

        // throw error for FeatureServer added as MIL, has no export map function
        if (!this.esriLayer!.capabilities.exportMap) {
            this.$iApi.notify.show(
                NotificationType.WARNING,
                this.$iApi.$i18n.t('layer.noexportmap', {
                    name: this.name || this.id
                })
            );

            throw new Error('Service does not support Map Image Layer, Map Export is not enabled');
        }
        this.isDynamic = this.esriLayer!.capabilities.exportMap.supportsDynamicLayers;

        this.extent = this.extent ?? Extent.fromESRI(this.esriLayer!.fullExtent!, this.id + '_extent');

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

        (<Array<RampLayerMapImageSublayerConfig>>this.origRampConfig.sublayers).forEach(
            (sublayer: RampLayerMapImageSublayerConfig) => {
                // TODO the || 0 is there to handle missing index. probably will never happen. add an error check?
                subConfigs[sublayer.index || 0] = sublayer;
            }
        );

        // shortcut var to track all leafs that need attention
        // in the loading process
        const leafsToInit: Array<MapImageSublayer> = [];

        // this subfunction will recursively crawl a sublayer structure.
        // it will generate MIL Sublayer objects for all leafs under the sublayer
        // we also generate a tree structure of our layer that is in a format
        // that makes the client happy
        const processSublayer = (subLayer: __esri.Sublayer, parentTreeNode: TreeNode): void => {
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
                subLayer.sublayers
                    .reverse() // need .reverse as MIL group objects in ESRI layer store their sublayers in reverse order
                    .forEach((subSubLayer: __esri.Sublayer) => {
                        processSublayer(subSubLayer, treeGroup);
                    });
            } else {
                // leaf sublayer. make placeholders, add leaf to the tree
                // below will run only during first load
                if (!this._sublayers[sid]) {
                    this._sublayers[sid] = new MapImageSublayer(
                        {
                            id: this.$iApi.geo.layer.sublayerId(this.id, sid),
                            index: sid,
                            // TODO: Revisit once issue #961 is implemented.
                            // See https://github.com/ramp4-pcar4/ramp4-pcar4/pull/1045#pullrequestreview-977116071
                            // ^ update: issue 961 seems to have nothing to do with this. The PR link implies this
                            //   comment is related to the parent state default line below. Best guess is that
                            //   issue #1394 was the impacted issue. It appears that the code in the leaf initializer
                            //   below is handling things, but leaving this here for now incase someone wants to
                            //   dig deeper (or a problem arises)
                            layerType: LayerType.SUBLAYER,
                            name: subC?.name,
                            // If the state isn't defined, use the same state as the parent.
                            state: subC?.state ?? {
                                opacity: this.opacity,
                                visibility: this.visibility,
                                hovertips: this.hovertips,
                                identify: this.identify
                            },
                            extent: subC?.extent,
                            controls: subC?.controls,
                            disabledControls: subC?.disabledControls,
                            initialFilteredQuery: subC?.initialFilteredQuery,
                            permanentFilteredQuery: subC?.permanentFilteredQuery,
                            labels: subC?.labels
                        },
                        this.$iApi,
                        this
                    );
                }

                const _sublayer = this._sublayers[sid] as MapImageSublayer;

                if (_sublayer.isRemoved) {
                    return; // no need to initialize a removed sublayer
                }

                _sublayer.name = subC?.name || subLayer.title || ''; // config if exists, else server, else none

                leafsToInit.push(_sublayer);

                // check if parent's children have already been initialized
                if (!parentTreeNode.children.map(node => node.layerIdx).includes(sid)) {
                    const treeLeaf = new TreeNode(sid, _sublayer.uid, (_sublayer as MapLayer).name, false);
                    parentTreeNode.children.push(treeLeaf);
                }
                _sublayer.esriWatches.push(
                    EsriWatch(
                        () => subLayer.visible,
                        () => {
                            this.$iApi.event.emit(GlobalEvents.LAYER_VISIBILITYCHANGE, {
                                visibility: _sublayer.visibility,
                                layer: _sublayer
                            });
                            (_sublayer.parentLayer as MapLayer) // the parent of a MapImageSublayer must be a MapLayer
                                ?.checkVisibility();
                        }
                    ),
                    EsriWatch(
                        () => subLayer.opacity,
                        (newval: number) => {
                            this.$iApi.event.emit(GlobalEvents.LAYER_OPACITYCHANGE, {
                                opacity: newval,
                                layer: _sublayer
                            });
                        }
                    )
                );
            }
        };

        // process the child layers our config is insested in, and all their children.
        (<Array<RampLayerMapImageSublayerConfig>>this.origRampConfig.sublayers).forEach(sublayer => {
            if (!sublayer.cosmetic) {
                const rootSub = findSublayer(sublayer.index || 0);
                processSublayer(rootSub, this.layerTree);
            }
        });

        // process each leaf sublayer we walked to in the sublayer tree crawl above.
        // leaf promises are added to our load actions promise array.
        const leafLoadProms = leafsToInit.map(async miSL => {
            // NOTE: can consider alternates, like esriLayer.url + / + layerIdx
            const sublayer = findSublayer(miSL.layerIdx);
            const config = subConfigs[miSL.layerIdx];
            miSL.serviceUrl = sublayer.url!;

            // the sublayer needs to be re-fetched because the initial sublayer was marked as "raw"
            miSL.fetchEsriSublayer(this);
            await miSL.initiate();

            if (startTime < this.lastCancel) {
                // cancelled, kickout.
                // in practice this is instant, but being safe incase things change.
                // Also fake testing delays can break stuff without it
                return;
            }

            // setting custom renderer here (if one is provided)
            // this code applies esri renderer. loadLayerMetadata will
            // generate the RAMP wrapper on the layer.
            const llmOptions: LoadLayerMetadataOptions = {};
            if (miSL.esriSubLayer && config?.customRenderer?.type) {
                const esriCustomRenderer = await EsriAPI.RendererFromJson(config.customRenderer);
                miSL.esriSubLayer.renderer = esriCustomRenderer;
                llmOptions.customRenderer = esriCustomRenderer;
            }

            await miSL.loadLayerMetadata(llmOptions);

            if (startTime < this.lastCancel) {
                // cancelled, kickout.
                return;
            }

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
                    : (subC.state?.visibility ??
                      (this.origState.visibility
                          ? (miSL._serverVisibility ?? this.origState.visibility)
                          : (this.origState.visibility ?? miSL._serverVisibility)) ??
                      true);
                miSL.opacity = subC.state?.opacity ?? this.origState.opacity ?? 1;

                this.$iApi.geo.attributes.applyFieldMetadata(miSL, subC.fieldMetadata);

                if (!miSL.canModifyLayer) {
                    this.$iApi.notify.show(
                        NotificationType.WARNING,
                        this.$iApi.$i18n.t(`layer.filtersdisabled`, {
                            name: miSL.name || miSL.id
                        })
                    );
                }

                // NOTE the miSL.identify property is currently getting set in onLoadActions() of
                //      MapImageSublayer. This will get called by this layer's onLoad after this
                //      function runs. Not sure why that one part is there, but suggest leave
                //      it alone unless things stop working. This comment just helps you find it.
            } else {
                // pulling from parent would be cool, but complex. all the promises would need to be resolved in tree-order
                // maybe put defaulting here for visible/opac/identify
                this.$iApi.geo.attributes.applyFieldMetadata(miSL);
            }

            // do any things that are specific to feature or raster subtypes
            if (miSL.supportsFeatures) {
                // ensure our massaged field lists get updated inside the sublayer
                miSL.updateFieldList();
                miSL.updateFieldsToTrim();

                // TODO this needs to run after field lists are set.
                //      .nameField already contains the service value of the sublayer from the miSL.loadLayerMetadata()
                //      call above.
                await miSL.nameInitializer(subC, miSL.nameField);
                await miSL.legendInitializer(subC, miSL.legendField);

                // get feature count
                const count = await this.$iApi.geo.layer.loadFeatureCount(
                    miSL.serviceUrl,
                    miSL.getSqlFilter(CoreFilter.PERMANENT)
                );

                if (startTime > this.lastCancel) {
                    miSL.featureCount = count;
                }
            }
        });

        loadPromises.push(...leafLoadProms);

        // any sublayers lurking in the ESRI layer that are not in our set of sublayers,
        // we need to deal with.
        this.esriLayer!.allSublayers.forEach(s => {
            if (!s.sublayers && !leafsToInit.find(sublayer => sublayer.layerIdx === s.id)) {
                // this sublayer is not a group, and doesn't exist in our initialization array.
                // make sure it doesn't appear on the map

                s.visible = false;
                s.opacity = 0; // might be overkill
            } else if (s.sublayers) {
                // this sublayer is a group. make sure it's visible or else it
                // can auto-hide any valid sublayers inside it

                s.visible = true;
            }
        });

        // defaults to true
        this.visibility = this.origState.visibility ?? true;

        return loadPromises;
    }

    updateLayerState(newState: LayerState, userCancel: boolean = false): void {
        // force any sublayers to also update their state and raise events
        super.updateLayerState(newState, userCancel);
        this.sublayers.forEach(sublayer => sublayer.updateLayerState(newState, userCancel));
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
            options.sublayerIds = options.sublayerIds.map((id: number | string) => {
                if (typeof id === 'number') {
                    return <string>this.layerTree?.findChildByIdx(id)?.uid;
                }
                return id;
            });
        }

        const activeSublayers: Array<MapImageSublayer> = options.sublayerIds
            ? (<Array<MapImageSublayer>>this._sublayers).filter((sublayer: MapImageSublayer) => {
                  // query for only the given sublayers
                  return options.sublayerIds?.includes(sublayer.uid);
              })
            : (<Array<MapImageSublayer>>this._sublayers).filter((sublayer: MapImageSublayer) => {
                  // query for visible, identifiable, on-scale sublayers
                  return sublayer.canIdentify();
              });

        // early kickout check. all sublayers are one of: not visible; not identifiable; off scale; a raster layer
        if (activeSublayers.length === 0) {
            // return empty result.
            return [];
        }

        // prepare a query

        let pointBuffer: Extent;
        if (options.geometry.type === GeometryType.POINT) {
            pointBuffer = this.$iApi.geo.query.makeClickBuffer(<Point>options.geometry, options.tolerance);
        }

        // loop over active sublayers. call query on each and generate an IdentifyItem to track it
        return activeSublayers.map(sublayer => {
            const dProm = new DefPromise<void>();
            const qOpts: QueryFeaturesParams = {};

            const result: IdentifyResult = reactive({
                items: [],
                loading: dProm.getPromise(),
                loaded: false,
                errored: false,
                uid: sublayer.uid,
                layerId: sublayer.id,
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
            qOpts.sourceSR = sublayer.sourceSR;

            sublayer
                .queryOIDs(qOpts)
                .then(results => {
                    results.forEach(hitOid => {
                        // push, incase something was bound to the array
                        result.items.push(ReactiveIdentifyFactory.makeOidItem(hitOid, sublayer));
                    });

                    // Resolve the loading promise, set the flag
                    // This promise only indicates we have an array of results (each may still be loading their internals)
                    result.loaded = true;
                    dProm.resolveMe();
                })
                .catch(() => {
                    result.errored = true;
                    dProm.resolveMe(); // keeping it this way so that we don't need to make annoying changes
                });

            return result;
        });
    }
}
