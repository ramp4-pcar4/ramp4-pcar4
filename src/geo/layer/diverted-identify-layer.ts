// has the plumbing to divert an identify request (and supporting attribute-based methods) to a secret feature layer.
// will typically be inherited by layers that either dont support identify, or provide a more performant map
// layer than your classic Feature or MIL.

import { InstanceAPI, MapLayer, NotificationType } from '@/api/internal';
import type { IdentifyResult, LayerInstance } from '@/api/internal';

import { Extent, Graphic, LayerIdentifyMode, LayerState, LayerType } from '@/geo/api';
import type {
    Attributes,
    AttributeSet,
    GetGraphicParams,
    IdentifyParameters,
    RampLayerConfig,
    TabularAttributeSet
} from '@/geo/api';
import { toRaw } from 'vue';

/**
 * A common layer class which is inherited by layer classes that want to divert an identify to another layer.
 */
export class DivertedIdentifyLayer extends MapLayer {
    /**
     * The layer we divert identify requests to
     */
    private diLayer: LayerInstance | undefined;

    protected constructor(rampConfig: RampLayerConfig, $iApi: InstanceAPI) {
        super(rampConfig, $iApi);
    }

    protected onLoadActions(): Array<Promise<void>> {
        const proms = super.onLoadActions();

        if (this.origRampConfig.divertIdentifyLayer) {
            proms.push(
                new Promise<void>(async resolve => {
                    const layerConfig = structuredClone(toRaw(this.origRampConfig.divertIdentifyLayer!));

                    if (!layerConfig.id) {
                        layerConfig.id = this.id + '-divertedIdentify';
                    }

                    const isFeatureLayer = layerConfig.layerType === LayerType.FEATURE;
                    const isWMSLayer = layerConfig.layerType === LayerType.WMS;

                    if (isFeatureLayer) {
                        layerConfig.identifyMode = LayerIdentifyMode.GEOMETRIC;
                    }

                    // it doesn't draw, so dont notify about drawing
                    layerConfig.expectedDrawTime = 0;

                    try {
                        const secretLayer = this.$iApi.geo.layer.createLayer(layerConfig);
                        await secretLayer.initiate();

                        const origVis = secretLayer.esriLayer!.visible;

                        if (isWMSLayer) {
                            // Silly nonsense time.
                            // WMS servers dont have an ERSI-formatted SR on their metadata.
                            // So while ArcServer-based map layers just get that when they initialize,
                            // it seems WMS SR will remain null until the layer is added to the map.
                            // Then some magic code in the JS API seems to find a best match between the
                            // map's SR and the CRS list of the WMS, then slaps the ESRI SR object on the
                            // local map layer.
                            // We don't want this layer on the map, and thus dumb things must occur.
                            // Stick it in the map, watch for the SR to appear, then remove it.
                            // Will do raw insertion (bypassing ramps layer registry) to avoid events and such.

                            secretLayer.esriLayer!.visible = false;
                            this.$iApi.geo.map.esriMap?.add(secretLayer.esriLayer!, 0);

                            const srCheckerProm = new Promise<void>((resolve, reject) => {
                                let timer = 0;
                                const checkingFrequency = 150;
                                const busyWait = setInterval(() => {
                                    timer += checkingFrequency;
                                    // @ts-expect-error loves to grouse
                                    if (secretLayer.esriLayer?.spatialReference) {
                                        // the WMS has done its magic to derive an ESRI SR. continue
                                        clearInterval(busyWait);
                                        resolve();
                                    } else if (timer > 8000) {
                                        // taking too long, give up.
                                        // reject, which errors, which gets caught, which turns off alt identify
                                        clearInterval(busyWait);
                                        reject();
                                    }
                                }, checkingFrequency);
                            });

                            await srCheckerProm;
                        }

                        secretLayer.onLoad();
                        await secretLayer.loadPromise();

                        if (isWMSLayer) {
                            secretLayer.removeEsriLayer();
                            secretLayer.esriLayer!.visible = origVis;
                        }

                        this.diLayer = secretLayer;
                        this.divertedIdentify = true;
                        this.supportsIdentify = true;
                        this.identify = true;

                        if (isFeatureLayer) {
                            this.supportsFeatures = true;
                            this.oidField = secretLayer.oidField;
                            this.fields = secretLayer.fields;
                            this.featureCount = secretLayer.featureCount;
                        }

                        if (!this.legend.length) {
                            // TODO debateable to do this? Will port nicer legends over, but maybe we dont want that?
                            //      Could cause issues if divert layer legend doesnt accurately align with visible layer.
                            //      I think what shows in the legend fixture can be over-ridden, but thats extra work.
                            //      Either approach (do this or dont do it) results in the potential need for extra trickery
                            this.legend = secretLayer.legend;
                        }
                    } catch (e) {
                        // dont throw an error. the primary layer will still load, it will just not
                        // have the magical diversion stuff happening (altOn will remain false)
                        console.error(this.id + ': Diverted layer failed to load');
                        console.error(e);

                        this.$iApi.notify.show(
                            NotificationType.ERROR,
                            this.$iApi.$i18n.t('layer.diverted.error', {
                                id: this.name || this.id
                            })
                        );
                    }

                    resolve();
                })
            );
        }

        return proms;
    }

    async terminate(): Promise<void> {
        if (this.diLayer) {
            await this.diLayer.terminate();
        }

        await super.terminate();
    }

    /**
     * Validates that we should go ahead with an diverted layer operation
     */
    private diCheck(): boolean {
        // if we are not running a DI layer, this will false silently and layer acts normal (no identify).
        // if we are running one, and its being naughty, we still false (as to not brick the app), but ping the console to make devs aware

        if (this.divertedIdentify) {
            const layerBad = !(this.diLayer && this.diLayer.layerState === LayerState.LOADED);

            if (layerBad) {
                console.error('Layer ' + this.id + ' encountered diverted identify layer not loaded', this.diLayer);
            }
            return !layerBad;
        } else {
            return false;
        }
    }

    // DEV NOTE: there is probably a way to abstract the common pattern in most of these calls. Something like...
    //
    //      givver(methodName, ...prams):any {
    //          if (this.diCheck()) {
    //              return this.diLayer![methodName](...prams);
    //          }
    //          return super[methodName](...prams);
    //      }
    //
    //      but we would lose the strong typing, would be easy to miss a breaking change in one of the base layer classes.
    //      doing cut-n-paste party for now

    runIdentify(options: IdentifyParameters): Array<IdentifyResult> {
        // early kickout check. not loaded/error; not visible; not queryable; off scale
        if (!this.canIdentify()) {
            // return empty result.
            return [];
        }

        if (this.diCheck()) {
            const rawResults = this.diLayer!.runIdentify(options);

            // make it look like result came from this layer
            rawResults.forEach(nugget => {
                nugget.layerId = this.id;
                nugget.uid = this.uid;
            });

            return rawResults;
        }
        return super.runIdentify(options);
    }

    getAttributes(): Promise<AttributeSet> {
        if (this.diCheck()) {
            return this.diLayer!.getAttributes();
        }
        return super.getAttributes();
    }

    abortAttributeLoad(): void {
        if (this.diCheck()) {
            return this.diLayer!.abortAttributeLoad();
        }
        return super.abortAttributeLoad();
    }

    clearFeatureCache(): void {
        if (this.diCheck()) {
            return this.diLayer!.clearFeatureCache();
        }
        return super.clearFeatureCache();
    }

    downloadedAttributes(): number {
        if (this.diCheck()) {
            return this.diLayer!.downloadedAttributes();
        }
        return 0;
    }

    attribLoadAborted(): boolean {
        if (this.diCheck()) {
            return this.diLayer!.attribLoadAborted();
        }
        return false;
    }

    getTabularAttributes(): Promise<TabularAttributeSet> {
        if (this.diCheck()) {
            return this.diLayer!.getTabularAttributes();
        }
        return super.getTabularAttributes();
    }

    async getGraphic(objectId: number, options: GetGraphicParams): Promise<Graphic> {
        if (this.diCheck()) {
            options.serverOnly = true;
            return this.diLayer!.getGraphic(objectId, options);
        }
        return super.getGraphic(objectId, options);
    }

    async zoomToFeature(objectId: number): Promise<boolean> {
        if (this.diCheck()) {
            return this.diLayer!.zoomToFeature(objectId);
        }
        return super.zoomToFeature(objectId);
    }

    async getIcon(objectId: number): Promise<string> {
        if (this.diCheck()) {
            return this.diLayer!.getIcon(objectId);
        }
        return super.getIcon(objectId);
    }

    setSqlFilter(filterKey: string, whereClause: string): void {
        if (this.diCheck()) {
            return this.diLayer!.setSqlFilter(filterKey, whereClause);
        }
        return super.setSqlFilter(filterKey, whereClause);
    }

    applySqlFilter(exclusions: Array<string> = []): void {
        if (this.diCheck()) {
            this.diLayer!.applySqlFilter(exclusions);
        }
        super.applySqlFilter(exclusions);
    }

    getSqlFilter(filterKey: string): string {
        if (this.diCheck()) {
            return this.diLayer!.getSqlFilter(filterKey);
        }
        return super.getSqlFilter(filterKey);
    }

    async getFilterOIDs(
        exclusions: Array<string> = [],
        extent: Extent | undefined = undefined
    ): Promise<Array<number> | undefined> {
        if (this.diCheck()) {
            return this.diLayer!.getFilterOIDs(exclusions, extent);
        }
        return super.getFilterOIDs(exclusions, extent);
    }

    async getGraphicExtent(objectId: number): Promise<Extent | undefined> {
        if (this.diCheck()) {
            return this.diLayer!.getGraphicExtent(objectId);
        }
        return super.getGraphicExtent(objectId);
    }

    nameValue(attributes: Attributes): string {
        if (this.diCheck()) {
            return this.diLayer!.nameValue(attributes);
        }
        return super.nameValue(attributes);
    }
}
