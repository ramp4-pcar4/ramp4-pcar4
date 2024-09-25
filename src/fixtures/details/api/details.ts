import { FixtureInstance, LayerInstance, ReactiveIdentifyFactory } from '@/api';
import type { IdentifyItem, IdentifyResult } from '@/api';
import type { Graphic, IdentifyResultFormat } from '@/geo/api';
import { DetailsItemInstance, useDetailsStore } from '../store';

import type { DetailsConfig, DetailsConfigItem, DetailsItemSet } from '../store';

import type { HilightAPI } from '../../hilight/api/hilight';
import { HilightMode } from '../../hilight/api/hilight-defs';

export const ORIGIN_DETAILS = 'details';

export class DetailsAPI extends FixtureInstance {
    private detailsStore = useDetailsStore(this.$vApp.$pinia);

    get config(): DetailsConfig | undefined {
        return super.config;
    }

    /**
     * Updates the identify result in the store, and then opens the details panel.
     *
     * @param {IdentifyResult[]} payload
     * @memberof DetailsAPI
     */
    openDetails(payload: IdentifyResult[]): void {
        // Save the provided identify result in the store.
        this.detailsStore.payload = payload;

        const panel = this.$iApi.panel.get('details');
        // Indicate this request for the details panel comes from clicking on the map
        this.detailsStore.origin = 'identify';
        panel.button.tooltip = 'details.layers.title.identifyOrigin';

        // Check to see if each layer has a fixture config in the store.
        payload.forEach(p => {
            const layer: LayerInstance | undefined = (this as any).$iApi.useStore('layer').getLayerByUid(p.uid);

            this._loadDetailsConfig(layer);
        });

        // Open the details panel.
        const detailsPanel = this.$iApi.panel.get('details');
        if (!detailsPanel.isOpen) {
            this.$iApi.panel.open({
                id: 'details'
            });
        }
    }

    /**
     * Provided with the data for a single feature, shows or hides details panel.
     * If panel is closed or incoming data is different than current content, panel is shown.
     * If panel open and incoming data is what is currently shown, panel closes.
     * The `open` parameter can override the behavior.
     * featureData payload (can be empty if forcing closed)
     * - uid     : uid string of the layer hosting the feature
     * - format  : structure of the data. IdentifyResultFormat value.
     * - data    : source information for the feature. Analogous to the data property of an IdentifyItem
     * - layerId : optional layerId string of the layer hosting the feature. Will be looked up if not provided
     *
     * @param {{data: any, uid: string, format: IdentifyResultFormat}} featureData
     * @param {boolean | undefined} open can force the panel to open (true) or close (false) regardless of current panel state
     * @memberof DetailsAPI
     */
    toggleFeature(
        featureData: {
            data: any;
            uid: string;
            layerId?: string;
            format: IdentifyResultFormat;
        },
        open: boolean | undefined
    ): void {
        const panel = this.$iApi.panel.get('details');

        if (open === false) {
            // close panel and run away. allows a close without providing featureData
            panel.close();
            this.detailsStore.currentFeatureId = undefined;
            return;
        }

        // feature ids are composed of the layer uid and feature object id
        const layer: LayerInstance | undefined = this.$iApi.geo.layer.getLayer(featureData.uid);
        const currFeatureId = `${featureData.uid}-${
            // see https://github.com/ramp4-pcar4/ramp4-pcar4/issues/1767 for the reasoning behind this
            layer?.supportsFeatures ? featureData.data[layer?.oidField ?? ''] : JSON.stringify(featureData.data)
        }`;

        if (panel.isOpen && currFeatureId === this.detailsStore.currentFeatureId && !(open === true)) {
            // panel is open, same request was fired at it, and not a force-open. Close it.
            panel.close();
            this.detailsStore.currentFeatureId = undefined;
            return;
        }

        // at this point, we are showing the payload

        // Indicate this request for the details panel comes from a grid item
        this.detailsStore.origin = 'toggleEvent';

        panel.button.tooltip = 'details.layers.title.gridOrigin';

        this.detailsStore.currentFeatureId = currFeatureId;

        // Check to see if the layer has a fixture config in the store.
        this._loadDetailsConfig(layer);

        const fakeResult: IdentifyResult = {
            items: [ReactiveIdentifyFactory.makeRawItem(featureData.format, featureData.data)],
            uid: featureData.uid,
            layerId: featureData.layerId || layer?.id || 'error-not-found',
            loading: Promise.resolve(),
            loaded: true,
            errored: false,
            requestTime: Date.now()
        };

        this.detailsStore.payload = [fakeResult];

        if (!panel.isOpen) {
            panel.open();
        }
    }

    /**
     * Read the details section of the layers' fixture config
     *
     * @param {DetailsConfig} [config]
     * @memberof DetailsAPI
     */
    _parseConfig(config?: DetailsConfig) {
        // set the default templates if provided
        if (config && config.templates) {
            this.detailsStore.defaultTemplates = config.templates;
        }

        this.handlePanelWidths(['details']);
        this.handlePanelTeleports(['details']);

        // get all layer fixture configs
        const layerDetailsConfigs: any = this.getLayerFixtureConfigs();
        const detailsConfigItems: DetailsConfigItem[] = [];

        // construct the details config from the layer fixture configs
        Object.keys(layerDetailsConfigs).forEach((layerId: string) => {
            detailsConfigItems.push({
                id: layerId,
                name: layerDetailsConfigs[layerId].name,
                template: layerDetailsConfigs[layerId].template,
                fields: layerDetailsConfigs[layerId].fields
            });
        });

        const detailsItems = detailsConfigItems.map((item: any) => new DetailsItemInstance(item));

        // save the items in the store
        this.detailsStore.properties = detailsItems.reduce<DetailsItemSet>((map, item) => {
            map[item.id] = item;
            return map;
        }, {});

        this._validateItems();
    }

    _loadDetailsConfig(layer: LayerInstance | undefined) {
        // Check to see if the layer has a fixture config in the store.
        if (layer) {
            // Check to see if we've already saved this layer's details config.
            const detailsItem = this.detailsStore.properties[layer.id];

            // If we haven't and the layer has a details config set, add it to the details store.
            if (detailsItem === undefined) {
                const layerDetailsConfigs: any = this.getLayerFixtureConfigs();

                if (layerDetailsConfigs[layer.id] !== undefined) {
                    this.detailsStore.addConfigProperty({
                        id: layer.id,
                        name: layerDetailsConfigs[layer.id].name,
                        template: layerDetailsConfigs[layer.id].template,
                        fields: layerDetailsConfigs[layer.id].fields
                    });
                }
            }
        }
    }

    /**
     * Check to see if the stored components are registered properly.
     *
     * @memberof DetailsAPI
     */
    _validateItems() {
        Object.values<DetailsConfigItem>(this.detailsStore.properties).forEach(item => {
            if (item.template in this.$vApp.$options.components!) {
                this.detailsStore.properties[item.id].componentId = item.template;
            }
        });
    }

    /**
     * Highlight identified items
     * @param items items to add
     * @param layerUid uid of layer the items belong to
     */
    async hilightDetailsItems(items: IdentifyItem | Array<IdentifyItem>, layerUid: string) {
        // hilight all provided identify items for this layer
        const hItems = items instanceof Array ? items : [items];
        const hilightFix: HilightAPI = this.$iApi.fixture.get('hilight');
        if (hilightFix) {
            const gsByKey = await hilightFix.getGraphicsByKey(ORIGIN_DETAILS);
            await hilightFix.removeHilight(gsByKey);

            // calculate after the above removeHilight call, since it also does a timestamp.
            // NOTE if the two calls are too fast (same time) then we can add optional param to
            //      not stamp when removing, or pass in this stamp.
            // mark and save this highlight session
            const thisHighlight = Date.now();
            this.detailsStore.lastHilight = thisHighlight;

            const graphics: Array<Graphic> = await this.getHilightGraphics(hItems, layerUid);

            if (this.detailsStore.lastHilight === thisHighlight) {
                // our request on this thread is still the most recent one. begin to add graphics to highlighter
                await hilightFix.addHilight(graphics);

                // while unlikely, given everything is async its possible that a delete request completes before
                // the graphics could be added to the hilight layer.
                // so check one again. If we're now stale, remove the hilight.
                if (this.detailsStore.lastHilight !== thisHighlight) {
                    // hilight removal will gracefully exit if something else already deleted any of these graphics.
                    hilightFix.removeHilight(graphics);
                }
            }
        }
    }

    /**
     * Remove all details panel map hilights.
     */
    async removeDetailsHilight() {
        const hilightFix: HilightAPI = this.$iApi.fixture.get('hilight');
        if (hilightFix) {
            // mark that we are removing. any in-progress highlights will
            // see this new timestamp and know they are stale once finished.
            this.detailsStore.lastHilight = Date.now();
            const gsByKey = await hilightFix.getGraphicsByKey(ORIGIN_DETAILS);
            await hilightFix.removeHilight(gsByKey);
        }
    }

    /**
     * Reload map elements of the hilighter for a set of identify items.
     *
     * @param {IdentifyItem | Array<IdentifyItem>} items items to reload
     * @param {string} layerUid uid of layer the items belong to
     */
    async reloadDetailsHilight(items: IdentifyItem | Array<IdentifyItem>, layerUid: string) {
        // DEV NOTE: this call is not being used anymore. But since part of public API, remains
        //           for respectful compatibility

        // TODO this method doesn't use the lastHilight flag, so in theory if a stale
        //      batch of identify items is passed, they will end up drawing.
        //      Might be easier to depreciate this method? Breaks API but
        //      the method is really just a shortcut to remove + add, without the
        //      smarter code of those methods.
        //      Alternate, replace all the guts with
        //        await removeDetailsHilight
        //        await hilightDetailsItems(items, layerUid)
        //      but that technically changes the method behavior

        // hilight all provided identify items for this layer
        const hItems = items instanceof Array ? items : [items];
        const hilightFix: HilightAPI = this.$iApi.fixture.get('hilight');
        if (hilightFix) {
            const graphics: Array<Graphic> = await this.getHilightGraphics(hItems, layerUid);
            hilightFix.reloadHilight(graphics);
        }
    }

    /**
     * Return the graphics of the given IdentifyItems once the items have loaded.
     * @param {Array<IdentifyItem>} items identify items to hilight. Items should be of ESRI format
     * @param layerUid uid of layer the items belong to
     * @returns {Promise<Array<Graphic>>} resolves with array of graphics
     */
    async getHilightGraphics(items: Array<IdentifyItem>, layerUid: string): Promise<Array<Graphic>> {
        const layer: LayerInstance = this.$iApi.geo.layer.getLayer(layerUid)!;
        const hilightFix: HilightAPI = this.$iApi.fixture.get('hilight');
        const gs: Array<Graphic> = [];
        if (layer) {
            // get all the identified Graphics
            await Promise.all(
                items.map(async item => {
                    // ensure item finishes loading
                    await item.loading;

                    const oid = item.data[layer.oidField];
                    const g = await layer.getGraphic(oid, {
                        getGeom: true,
                        getAttribs: true,
                        getStyle: true
                    });
                    g.id = hilightFix.constructGraphicKey(ORIGIN_DETAILS, layerUid, oid);
                    gs.push(g);
                })
            );
        }
        return gs;
    }

    /**
     * Updates hilighted graphics when the hilight toggler is toggled.
     *
     * @param {boolean} hilightOn Whether the toggler has been turned on/off
     * @param {IdentifyItem | Array<IdentifyItem>} items The identify items to highlight. Only required if turning on
     * @param {string} layerUid the layer UID that owns the items. Only required if turning on
     */
    onHilightToggle(hilightOn: boolean, items?: IdentifyItem | Array<IdentifyItem>, layerUid?: string) {
        // DEV NOTE: this call is not being used anymore. But since part of public API, remains
        //           for respectful compatibility

        this.detailsStore.hilightToggle = hilightOn;

        if (hilightOn && items && layerUid) {
            // hilight got turned on, and valid params provided
            this.hilightDetailsItems(items, layerUid);
        } else if (!hilightOn) {
            // hilight got turned off
            this.removeDetailsHilight();
        }
    }

    /**
     * Return whether or not a HilightMode has been defined (other than NONE)
     */
    hasHilighter(): boolean {
        const hilightFix: HilightAPI = this.$iApi.fixture.get('hilight');
        return hilightFix && hilightFix.hilightMode.mode !== HilightMode.NONE;
    }
}
