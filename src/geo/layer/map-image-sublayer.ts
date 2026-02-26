import { AttribLayer, InstanceAPI, type MapImageLayer } from '@/api/internal';
import { DataFormat, InitiationState, LayerFormat, LayerType, SpatialReference } from '@/geo/api';
import type { RampLayerConfig, RampLayerMapImageSublayerConfig } from '@/geo/api';
import { markRaw } from 'vue';

/**
 * A layer class which implements an ESRI Map Image Sublayer.
 */
export class MapImageSublayer extends AttribLayer {
    constructor(config: RampLayerMapImageSublayerConfig, $iApi: InstanceAPI, parent: MapImageLayer) {
        // unknown is to force a narrower interface into the more common layer interface.
        super(config as unknown as RampLayerConfig, $iApi);

        this.layerType = LayerType.SUBLAYER;
        this.layerFormat = LayerFormat.MAPIMAGE;
        this.isSublayer = true;
        this.layerIdx = config.index;
        this.parentLayer = parent;
        this.isSystem = parent.isSystem;

        // these two props will get flipped to raster during the server metadata checks if needed.
        // has to be set here to allow for initial/permanent filters to be set immediately.
        // otherwise, layer will get a draw in without filters and pull mountains of data.
        // this means it won't catch a bad config where someone puts a filter on a raster child.
        // but that should explode as they test their site and get corrected.
        this.dataFormat = DataFormat.ESRI_FEATURE;
        this.supportsFeatures = true;

        this.maptips = false;
        this.url = this.parentLayer?.url;
        this.canReload = !!(this.url || this.origRampConfig.caching);

        if (!parent.esriLayer) {
            throw new Error('Map Image Layer with no internal esri layer encountered in sublayer creation');
        }

        this.fetchEsriSublayer(parent);

        // force-apply any active filters now to avoid stuff we don't want from drawing on the map
        if (config.initialFilteredQuery || config.permanentFilteredQuery) {
            this.applySqlFilter();
        }
    }

    /**
     * Set the ESRI sublayer using the parent's sublayer list
     *
     * @param {MapImageLayer} parent: Parent MapImageLayer object
     */
    fetchEsriSublayer(parent: MapImageLayer): void {
        if (!parent.esriLayer) {
            console.error('Attempted to fetch the ESRI sublayer when parent has no ESRI layer');
            return;
        }

        // not found check? - unlikely to happen but how do we handle that?
        this.esriSubLayer = markRaw(
            parent.esriLayer.allSublayers.find(s => {
                return s.id === this.layerIdx;
            })!
        );
    }

    /**
     * Load actions for a MapImage sublayer
     */
    protected onLoadActions(): Array<Promise<void>> {
        // Note we do not call super.onLoadActions, which you would see happen in
        //      every other layer. We don't want to wire up the standard "top level"
        //      layer stuff for sublayers.

        // use the tree node created by the parent
        this.layerTree = this.parentLayer!.getLayerTree().findChildByUid(this.uid)!;
        this.layerTree.name = this.name;
        this.layerTree.layerIdx = this.layerIdx;

        this.identify = !(this.config.state.identify == undefined) ? this.config.state.identify : this.supportsIdentify;

        return [];
    }

    /**
     * Initiate this sublayer
     *
     * This is called after the parent layer is initiated
     */
    protected async onInitiate(): Promise<void> {
        // initiate gets called from the MapImageLayer.onLoadActions
        // anything that needs to be set prior to the layer doing its initial draw should be done here.
        // this.esriSublayer will be set by the time this call runs.

        this.initiationState = InitiationState.INITIATED; // hardcoding this one because we don't want event API to fire here

        // see if any config stuff is overriding labels
        const vizOverr = this.labelVizOverride();
        if (vizOverr !== undefined) {
            this.labelVisibility = vizOverr;
        }
    }

    async reload(): Promise<void> {
        if (!this.$iApi.geo.map.esriMap) {
            console.error('Attempted layer reload when no map exists');
            return;
        }

        this.parentLayer?.reload();
    }

    cancelLoad(): void {
        // parent layer will exist, gets set on this objects constructor
        this.parentLayer?.cancelLoad();
    }

    /**
     * Indicates if the Esri map sublayer and the parent's Esri map layer exist.
     */
    get layerExists(): boolean {
        return !!(
            this.parentLayer?.layerExists &&
            this.esriSubLayer &&
            this.initiationState === InitiationState.INITIATED
        );
    }

    /**
     * Returns the visibility of the sublayer.
     *
     * @function getVisibility
     * @returns {Boolean} visibility of the sublayer
     */
    get visibility(): boolean {
        if (this.layerExists) {
            return this.esriSubLayer!.visible;
        } else {
            return false;
        }
    }

    /**
     * Applies visibility to sublayer.
     *
     * @function setVisibility
     * @param {Boolean} value the new visibility setting
     */
    set visibility(value: boolean) {
        if (this.layerExists) {
            this.esriSubLayer!.visible = value;
        } else {
            this.noLayerErr();
        }
    }

    /**
     * Returns the opacity of the sublayer.
     *
     * @function getOpacity
     * @returns {Boolean} opacity of the sublayer
     */
    get opacity(): number {
        if (this.layerExists) {
            return this.esriSubLayer!.opacity;
        } else {
            return 0;
        }
    }

    /**
     * Applies opacity to sublayer.
     *
     * @function setOpacity
     * @param {Boolean} value the new opacity setting
     */
    set opacity(value: number) {
        if (!this.layerExists) {
            this.noLayerErr();
            return;
        }
        if (!(this.parentLayer as MapImageLayer).isDynamic) {
            console.warn(
                `Opacity of a Map Image Sublayer was set. The service does not support sublayer opacity. LayerId ${this.id}`
            );
        }
        this.esriSubLayer!.opacity = value;
    }

    /**
     * Get the mouse tolerance in pixels for this sublayer's parent layer
     *
     * @returns {number} the mouse tolerance of the parent layer
     */
    get mouseTolerance(): number {
        if (this.layerExists) {
            return this.parentLayer!.mouseTolerance;
        } else {
            return 0;
        }
    }

    /**
     * Set the mouse tolerance for this sublayer's parent layer in pixels
     *
     * @param {number} tolerance the new mouse tolerance
     */
    set mouseTolerance(tolerance: number) {
        if (this.layerExists) {
            this.parentLayer!.mouseTolerance = tolerance;
        } else {
            this.noLayerErr();
        }
    }

    /**
     * Get the touch tolerance in pixels for this sublayer's parent layer
     *
     * @returns {number} the touch tolerance of the parent layer
     */
    get touchTolerance(): number {
        if (this.layerExists) {
            return this.parentLayer!.touchTolerance;
        } else {
            return 0;
        }
    }

    /**
     * Set the touch tolerance in pixels for this sublayer's parent layer
     *
     * @param {number} tolerance the new touch tolerance of the parent layer
     */
    set touchTolerance(tolerance: number) {
        if (this.layerExists) {
            this.parentLayer!.touchTolerance = tolerance;
        } else {
            this.noLayerErr();
        }
    }

    applySqlFilter(exclusions: Array<string> = []): void {
        // this can get set during constructor, so can't use .layerExists as it will fail
        // the initiated check. MILSubs are funny as they initiate when their parent is already
        // into the load phase. "Initiating" but layer exists.
        if (this.parentLayer?.layerExists && this.esriSubLayer) {
            if (this.supportsFeatures) {
                const sql = this.filter.getCombinedSql(exclusions);
                this.esriSubLayer!.definitionExpression = sql;
            } else {
                console.error(
                    'Attempted to apply an SQL filter to a sublayer that does not support it (likely Raster datatype)'
                );
            }
        } else {
            this.noLayerErr();
        }
    }

    /**
     * Provides the spatial reference of the parent MIL.
     *
     * @returns {SpatialReference} the layer spatial reference in RAMP API format
     */
    getSR(): SpatialReference {
        if (this.parentLayer?.esriLayer) {
            const sr = (<any>this._parentLayer?.esriLayer)?.spatialReference;
            return sr ? SpatialReference.fromESRI(sr) : SpatialReference.latLongSR();
        } else {
            this.noLayerErr();
            return SpatialReference.latLongSR();
        }
    }

    /**
     * A utility method to allow a parent layer to request this layer to
     * update its internal attribute loader after field data has been
     * properly processed.
     * Generally should only be called internally.
     */
    updateFieldList(): void {
        this.attribs.attLoader.updateFieldList(this.fieldList);
    }

    /**
     * A utility method to allow a parent layer to request this layer to
     * update its fields to be trimmed after field data is processed.
     * Generally should only be called internally.
     */
    updateFieldsToTrim(): void {
        this.attribs.attLoader.updateFieldsToTrim(this.getFieldsToTrim());
    }

    /**
     * Visibility of labels on this layer
     */
    get labelVisibility(): boolean {
        if (this.layerExists) {
            return this.esriSubLayer!.labelsVisible;
        } else {
            return false;
        }
    }

    set labelVisibility(val: boolean) {
        if (this.layerExists) {
            this.esriSubLayer!.labelsVisible = val;
        } else {
            this.noLayerErr();
        }
    }

    /**
     * Does any config override calculating for label visibility.
     *
     * @private
     * @returns {boolean | undefined} undefined if no overrides, otherwise the override value
     */
    protected labelVizOverride(): boolean | undefined {
        // NOTE if we start getting label magic on other layers, migrate this method to MapLayer class

        // layer specific config has first priority.
        let val = this.origRampConfig.labels?.visible;
        if (val !== undefined) {
            return val;
        }

        // map level override has second priority
        val = this.$iApi.geo.map.labelsDefault?.visible;
        if (val !== undefined) {
            return val;
        }

        // at this point, no config fun, so defer to service
        return undefined;
    }

    async zoomToFeature(objectId: number): Promise<boolean> {
        // just a check incase its Raster type sublayer. should never happen in reality (there are no OIDs)
        if (this.supportsFeatures) {
            // MIL children can't use the extent grabber magic like a feature layer can. But we can check
            // if there are any caches at ANY scale level. That will be good enough for a zoom.
            // The super.zoomToFeature will use getGraphic, which only considers the current scale level.
            // While points only have one scale cache, this will use that so might as well keep code simple
            // and test all geom types here.

            const efficientGeom = this.attribs.quickCache.getAnyScaleGeom(objectId);

            if (efficientGeom && !efficientGeom.invalid()) {
                await this.$iApi.geo.map.zoomMapTo(efficientGeom);
                return true;
            } else {
                // no sneaky shortcuts. do the standard routine
                return await super.zoomToFeature(objectId);
            }
        } else {
            return false;
        }
    }
}
