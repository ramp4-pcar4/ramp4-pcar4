import { AttribLayer, FixtureInstance, LayerInstance } from '@/api';
import type { Graphic, IdentifyItem, IdentifyResult } from '@/geo/api';
import { DetailsItemInstance, useDetailsStore } from '../store';

import type {
    DetailsConfig,
    DetailsConfigItem,
    DetailsItemSet
} from '../store';

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

        // Open the details panel.
        const layersPanel = this.$iApi.panel.get('details-layers');
        if (!layersPanel.isOpen) {
            this.$iApi.panel.open({
                id: 'details-layers'
            });
        }
    }

    /**
     * Provided with the data for a single feature, toggles the details panel directly with the feature screen.
     *
     * @param {{data: any, uid: string, format: string}} featureData
     * @param {boolean | undefined} open
     * @memberof DetailsAPI
     */
    toggleFeature(
        featureData: { data: any; uid: string; format: string },
        open: boolean | undefined
    ): void {
        // Close the identified layers panel.
        const panel = this.$iApi.panel.get('details-layers');
        if (panel.isOpen) {
            this.$iApi.panel.close(panel);
        }

        // Toggle or update the items panel
        const itemsPanel = this.$iApi.panel.get('details-items');

        // result: is IdentifyResult class
        const props: any = {
            result: {
                items: [
                    {
                        data: featureData.data,
                        format: featureData.format,
                        loaded: true,
                        loading: Promise.resolve()
                    }
                ],
                uid: featureData.uid,
                loading: Promise.resolve(),
                loaded: true
            }
        };

        // feature ids are composed of the layer uid and feature object id
        const prevFeatureId = this.detailsStore.currentFeatureId;
        const currFeatureId = `${featureData.uid}-${featureData.data.OBJECTID}`;
        this.detailsStore.currentFeatureId = featureData.data
            ? currFeatureId
            : undefined;

        // toggle rules based on last opened details panel
        if (open === false) {
            this.$iApi.panel!.close(itemsPanel);
        } else if (!itemsPanel.isOpen) {
            // open the items panel
            this.$iApi.panel!.open({
                id: 'details-items',
                screen: 'item-screen',
                props: props
            });
        } else if (prevFeatureId !== currFeatureId || open === true) {
            // update the items screen
            itemsPanel!.show({
                screen: 'item-screen',
                props: props
            });
        } else {
            this.$iApi.panel!.close(itemsPanel);
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

        this.handlePanelWidths(['details-items', 'details-layers']);

        // get all layer fixture configs
        const layerDetailsConfigs: any = this.getLayerFixtureConfigs();
        const detailsConfigItems: DetailsConfigItem[] = [];

        // construct the details config from the layer fixture configs
        Object.keys(layerDetailsConfigs).forEach((layerId: string) => {
            detailsConfigItems.push({
                id: layerId,
                name: layerDetailsConfigs[layerId].name,
                template: layerDetailsConfigs[layerId].template
            });
        });

        const detailsItems = detailsConfigItems.map(
            (item: any) => new DetailsItemInstance(item)
        );

        // save the items in the store
        this.detailsStore.properties = detailsItems.reduce<DetailsItemSet>(
            (map, item) => {
                map[item.id] = item;
                return map;
            },
            {}
        );

        this._validateItems();
    }

    /**
     * Check to see if the stored components are registered properly.
     *
     * @memberof DetailsAPI
     */
    _validateItems() {
        Object.values(this.detailsStore.properties).forEach(item => {
            if (item.template in this.$vApp.$options.components!) {
                this.detailsStore.properties[item.id].componentId =
                    item.template;
            }
        });
    }

    /**
     * Highlight identified items
     * @param items items to add
     * @param layerUid uid of layer the items belong to
     */
    async hilightDetailsItems(
        items: IdentifyItem | Array<IdentifyItem>,
        layerUid: string
    ) {
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

            const graphics: Array<Graphic> = await this.getHilightGraphics(
                hItems,
                layerUid
            );

            if (this.detailsStore.lastHilight === thisHighlight) {
                // our request on this thread is still the most recent one. begin to add graphics to highlighter
                await hilightFix.addHilight(graphics);

                // NOTE if addHighlight is also slow, will need additional check here. this one is trickier, since
                //      our stale graphics have been added but need to get-gone. However, calling remove will
                //      remove everything; if a new fast request came in after it and alredy completed, then
                //      remove will erase that as well. May need to add timestamp to the origin key for
                //      targeted removal.
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
     * Reload map elements of the hilighter.
     * @param items items to reload
     * @param layerUid uid of layer the items belong to
     */
    async reloadDetailsHilight(
        items: IdentifyItem | Array<IdentifyItem>,
        layerUid: string
    ) {
        // hilight all provided identify items for this layer
        const hItems = items instanceof Array ? items : [items];
        const hilightFix: HilightAPI = this.$iApi.fixture.get('hilight');
        if (hilightFix) {
            const graphics: Array<Graphic> = await this.getHilightGraphics(
                hItems,
                layerUid
            );
            hilightFix.reloadHilight(graphics);
        }
    }

    /**
     * Return the graphics of the given IdentifyItems.
     * @param items items to hilight
     * @param layerUid uid of layer the items belong to
     */
    async getHilightGraphics(
        items: Array<IdentifyItem>,
        layerUid: string
    ): Promise<Array<Graphic>> {
        const layer: LayerInstance = this.$iApi.geo.layer.getLayer(layerUid)!;
        const hilightFix: HilightAPI = this.$iApi.fixture.get('hilight');
        const gs: Array<Graphic> = [];
        if (layer) {
            // get all the identified Graphics
            await Promise.all(
                items.map(async item => {
                    const oid = item.data[layer.oidField];
                    const g: Graphic = await (layer as AttribLayer).getGraphic(
                        oid,
                        {
                            getGeom: true,
                            getAttribs: true,
                            getStyle: true
                        }
                    );
                    g.id = hilightFix.constructGraphicKey(
                        ORIGIN_DETAILS,
                        layerUid,
                        oid
                    );
                    gs.push(g);
                })
            );
        }
        return gs;
    }

    /**
     * Updates hilighted graphics when the hilight toggler is toggled.
     *
     * @param hilightOn Whether the toggler has been turned on/off
     * @param items The items that are affected by the toggle
     * @param layerUid the layer UID
     */
    onHilightToggle(
        hilightOn: boolean,
        items: IdentifyItem | Array<IdentifyItem>,
        layerUid: string
    ) {
        if (hilightOn) {
            // hilight got turned on
            this.hilightDetailsItems(items, layerUid);
            this.detailsStore.hilightToggle = true;
        } else {
            // hilight got turned off
            this.removeDetailsHilight();
            this.detailsStore.hilightToggle = false;
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
