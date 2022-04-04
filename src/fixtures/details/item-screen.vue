<template>
    <panel-screen :panel="panel">
        <template #header>
            {{ $t('details.items.title') }}
        </template>
        <template #content>
            <div v-if="result.loaded && activeGreedy === 0">
                <!-- layer name -->
                <div
                    class="p-8 font-bold break-words mb-8 bg-gray-100"
                    v-if="layerExists"
                >
                    {{ layerName }}
                </div>
                <!-- highlight toggle -->
                <div
                    class="p-8 mb-8 bg-gray-100 flex justify-between"
                    v-if="details.hasHilighter()"
                >
                    <div>{{ $t('details.togglehilight.title') }}</div>
                    <Toggle
                        :config="{
                            value: hilightToggle,
                            disabled: false
                        }"
                        @toggled="onHilightToggle"
                    ></Toggle>
                </div>
                <!-- paginator and list button for multiple features -->
                <div
                    class="flex flex-col justify-between p-8 mb-8 bg-gray-100"
                    v-if="layerExists && result.items.length > 1"
                >
                    <div class="flex justify-between">
                        <button
                            class="px-8 font-bold hover:bg-gray-200 focus:bg-gray-200"
                            :aria-label="$t('details.item.see.list')"
                            @click="seeList"
                        >
                            {{ $t('details.item.see.list') }}
                        </button>
                        <div class="flex bg-gray-200 py-8 items-center">
                            <button
                                :content="$t('details.item.previous.item')"
                                v-tippy="{ placement: 'top' }"
                                @click="advanceItemIndex(-1)"
                                class="mx-2 opacity-60 hover:opacity-90 disabled:opacity-30 disabled:cursor-default"
                                :aria-label="$t('details.item.previous.item')"
                                :disabled="currentIdx === 0"
                            >
                                <svg height="24" width="24" viewBox="0 0 23 23">
                                    <g>
                                        <path
                                            d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"
                                        />
                                    </g>
                                </svg>
                            </button>
                            <span class="px-8">
                                {{
                                    $t('details.item.count', [
                                        currentIdx + 1,
                                        result.items.length
                                    ])
                                }}
                            </span>
                            <button
                                :content="$t('details.item.next.item')"
                                v-tippy="{ placement: 'top' }"
                                @click="advanceItemIndex(1)"
                                class="mx-2 rotate-180 opacity-60 hover:opacity-90 disabled:opacity-30 disabled:cursor-default"
                                :aria-label="$t('details.item.next.item')"
                                :disabled="
                                    currentIdx === result.items.length - 1
                                "
                            >
                                <svg height="24" width="24" viewBox="0 0 23 23">
                                    <g>
                                        <path
                                            d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"
                                        />
                                    </g>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <!-- actual details section -->
                <div v-if="layerExists">
                    <div v-if="identifyItem.loaded">
                        <!-- fancy header for esri features -->
                        <div class="flex py-8" v-if="supportsFeatures">
                            <span
                                v-if="icon"
                                class="flex-none m-auto symbologyIcon"
                                v-html="icon"
                            ></span>
                            <div v-else class="m-auto">
                                <div
                                    class="animate-spin spinner h-20 w-20"
                                ></div>
                            </div>
                            <span class="flex-grow my-auto text-lg px-8">
                                {{ itemName }}
                            </span>
                            <button
                                :content="$t('details.item.zoom')"
                                v-tippy="{ placement: 'bottom' }"
                                :aria-label="$t('details.item.zoom')"
                                @click="zoomToFeature()"
                                class="text-gray-600 m-8"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    width="20"
                                >
                                    <path
                                        d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
                                    />
                                    <path d="M0 0h24v24H0V0z" fill="none" />
                                    <path
                                        d="M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"
                                    />
                                </svg>
                            </button>
                        </div>
                        <component
                            :is="detailsTemplate"
                            :identifyData="identifyItem"
                            :fields="fieldsList"
                        ></component>
                    </div>
                    <!-- identified item is loading -->
                    <div v-else class="flex justify-center py-10 items-center">
                        <span
                            class="animate-spin spinner h-20 w-20 px-5 mr-8"
                        ></span>
                        {{ $t('details.item.loading') }}
                    </div>
                </div>
                <!-- layer does not exist anymore, show no data text -->
                <div v-else class="p-5">
                    {{ $t('details.item.no.data') }}
                </div>
            </div>
            <!-- result is loading -->
            <div
                v-else-if="slowLoadingFlag"
                class="flex justify-center py-10 items-center"
            >
                <span class="animate-spin spinner h-20 w-20 px-5 mr-8"></span>
                {{ $t('details.item.loading') }}
            </div>
            <!-- clear panel when new identify request came in -->
            <div v-else></div>
        </template>
    </panel-screen>
</template>

<script lang="ts">
// This screen is the view of a single identified geometry (details panel)

import { defineComponent, type PropType } from 'vue';
import { DetailsStore } from './store';
import type { DetailsAPI } from './api/details';

import { GlobalEvents } from '@/api';
import { IdentifyResultFormat } from '@/geo/api';
import type { FieldDefinition, IdentifyResult, IdentifyItem } from '@/geo/api';
import type { LayerInstance, PanelInstance } from '@/api/internal';

import ESRIDefaultV from './templates/esri-default.vue';
import HTMLDefaultV from './templates/html-default.vue';
import Toggle from '../../components/controls/toggle-switch-control.vue';

export default defineComponent({
    name: 'DetailsItemScreenV',
    props: {
        panel: {
            type: Object as PropType<PanelInstance>,
            required: true
        },
        result: {
            type: Object as PropType<IdentifyResult>,
            required: true
        },
        // the index of the details item we want to display (optional)
        itemIndex: {
            type: Number,
            default: 0
        }
    },
    components: {
        'esri-default': ESRIDefaultV,
        'html-default': HTMLDefaultV,
        Toggle
    },
    data() {
        return {
            defaultTemplates: this.get(DetailsStore.defaultTemplates),
            detailProperties: this.get(DetailsStore.properties),
            activeGreedy: this.get(DetailsStore.activeGreedy),
            slowLoadingFlag: this.get(DetailsStore.slowLoadingFlag),
            identifyTypes: IdentifyResultFormat.UNKNOWN,
            icon: '' as string,
            currentIdx: 0,
            layerExists: false, // tracks whether the layer still exists
            handlers: [] as Array<string>,
            details: this.$iApi.fixture.get('details') as DetailsAPI,
            hilightToggle: true
        };
    },
    mounted() {
        // this is called when screen is first mounted
        this.initDetails();

        // close this panel if layer is removed
        this.handlers.push(
            this.$iApi.event.on(
                GlobalEvents.LAYER_REMOVE,
                (removedLayer: LayerInstance) => {
                    if (this.result.uid === removedLayer.uid) {
                        this.panel.close();
                    }
                }
            )
        );

        this.handlers.push(
            this.$iApi.event.on(
                GlobalEvents.PANEL_CLOSED,
                (panel: PanelInstance) => {
                    if (panel.id == 'details-items') {
                        this.detailsClosed();
                    }
                }
            )
        );

        this.handlers.push(
            this.$iApi.event.on(
                GlobalEvents.PANEL_MINIMIZED,
                (panel: PanelInstance) => {
                    if (panel.id == 'details-items') {
                        this.detailsMinimized();
                    }
                }
            )
        );

        this.handlers.push(
            this.$iApi.event.on(GlobalEvents.MAP_BASEMAPCHANGE, () => {
                if (this.hilightToggle) {
                    this.details.hilightDetailsItems(
                        this.result.items[this.currentIdx],
                        this.result.uid
                    );
                }
            })
        );

        this.handlers.push();
    },
    beforeUnmount() {
        this.handlers.forEach(handler => this.$iApi.event.off(handler));
    },
    beforeUpdate() {
        // this is called before the screen is updated (e.g. user clicked another layer from layer results screen)
        this.initDetails();
    },
    computed: {
        /**
         * Returns the information for a single identify result item, item index.
         */
        identifyItem(): IdentifyItem {
            return this.result.items[this.currentIdx];
        },

        itemName(): string {
            const layer: LayerInstance | undefined =
                this.$iApi.geo.layer.getLayer(this.result.uid);
            const nameField = layer?.nameField;
            return nameField && this.identifyItem.loaded
                ? this.identifyItem.data[nameField]
                : this.$t('details.items.title');
        },

        layerName(): string {
            const layer: LayerInstance | undefined =
                this.$iApi.geo.layer.getLayer(this.result.uid);
            if (
                layer &&
                this.detailProperties[layer.id] &&
                this.detailProperties[layer.id].name
            ) {
                return this.detailProperties[layer.id].name;
            }
            return layer?.name ?? '';
        },

        layerType(): string {
            const layer: LayerInstance | undefined =
                this.$iApi.geo.layer.getLayer(this.result.uid);
            return layer?.layerType || '';
        },

        supportsFeatures(): boolean {
            const layer: LayerInstance | undefined =
                this.$iApi.geo.layer.getLayer(this.result.uid);
            return layer?.supportsFeatures ?? false;
        },

        fieldsList(): Array<FieldDefinition> {
            // wms layers do not support fields
            if (!this.supportsFeatures) {
                return [];
            }

            const layer: LayerInstance | undefined =
                this.$iApi.geo.layer.getLayer(this.result.uid);
            const fields = layer?.fields;
            return fields || [];
        },

        detailsTemplate(): string {
            const layer: LayerInstance | undefined =
                this.$iApi.geo.layer.getLayer(this.result.uid);

            // If there is a custom template binding for this layer in the store, then
            // return its name.
            if (
                layer &&
                this.detailProperties[layer.id] &&
                this.detailProperties[layer.id].template
            ) {
                return this.detailProperties[layer.id].template;
            }

            // If nothing is found, use a default template from config
            if (
                this.defaultTemplates &&
                this.defaultTemplates[this.identifyItem.format]
            ) {
                return this.defaultTemplates[this.identifyItem.format];
            }

            // If default template is not specified, use our default template
            if (!this.supportsFeatures) {
                return 'html-default';
            } else {
                return 'esri-default';
            }
        }
    },
    methods: {
        /**
         * Clean up for when the details screen is closed.
         */
        detailsClosed() {
            this.details.removeDetailsHilight();
            this.$store.set(DetailsStore.hilightToggle, true);
        },

        /**
         * Clean up for when the details screen is minimized.
         */
        detailsMinimized() {
            this.details.removeDetailsHilight();
            // TODO: do we want to keep track of the index on minimize?
        },

        /**
         * Initialize the details screen
         */
        initDetails() {
            this.currentIdx = this.itemIndex ?? 0;
            this.layerExists = true;
            this.hilightToggle =
                this.$store.get(DetailsStore.hilightToggle) ??
                this.hilightToggle;
            this.itemChanged();
        },

        /**
         * Called whenever the displayed item changes
         */
        itemChanged() {
            if (this.identifyItem.loaded) {
                const layer: LayerInstance | undefined =
                    this.$iApi.geo.layer.getLayer(this.result.uid);
                if (!layer) {
                    // could not find this layer, so mark this result as invalid
                    // this handles the case where user minimized item screen -> deletes layer -> opens item screen again
                    this.layerExists = false;
                }

                this.fetchIcon();
                this.$iApi.updateAlert(
                    `${this.$iApi.$vApp.$t('details.item.alert.show.item', {
                        itemName: this.itemName
                    })} ${
                        this.result.items.length > 1
                            ? this.$iApi.$vApp.$t('details.item.count', [
                                  this.currentIdx + 1,
                                  this.result.items.length
                              ])
                            : ''
                    }`
                );
                if (this.hilightToggle) {
                    this.details.hilightDetailsItems(
                        this.result.items[this.currentIdx],
                        this.result.uid
                    );
                }
            } else {
                // wait for load.
                const localCurrentIndex = this.currentIdx;
                this.identifyItem.loading.then(() => {
                    // see if the screen is still on the item we were waiting for
                    // TODO do we also need to check if the screen itself changed to the list
                    //      view or closed? Would this vue component be unmounted and dead at
                    //      that point? Don't want stale updateAlerts pinging off after the fact.
                    //      Could implement another flag, set it on seeList() and panel close.
                    if (localCurrentIndex === this.currentIdx) {
                        // re-call, knowing the item is now loaded.
                        this.itemChanged();
                    }
                });

                // TODO do we need some type of updateAlert that says the screen is now
                //      in a loading state?
            }
        },

        /**
         * See all results from the identified layer
         */
        seeList() {
            this.panel.show({
                screen: 'results-screen',
                props: {
                    result: this.result,
                    previousItemIndex: this.currentIdx
                }
            });
        },

        /**
         * Advance the item index by direction
         */
        advanceItemIndex(direction: number) {
            this.currentIdx += direction;
            this.itemChanged();
        },

        /**
         * Get the icon of the identify result
         */
        fetchIcon() {
            this.icon = '';

            if (!(this.identifyItem && this.identifyItem.loaded)) {
                return;
            }

            const layer: LayerInstance | undefined =
                this.$iApi.geo.layer.getLayer(this.result.uid);
            if (layer === undefined) {
                console.warn(
                    `could not find layer for uid ${this.result.uid} during icon lookup`
                );
                return;
            }

            if (layer.supportsFeatures) {
                const oidField = layer.oidField;
                let lastIdx = this.currentIdx;
                layer
                    .getIcon(this.identifyItem.data[oidField])
                    .then((value: string) => {
                        // only update the icon if user is still on the same item
                        if (this.currentIdx === lastIdx) {
                            this.icon = value;
                        }
                    });
            }
        },

        /**
         * Zoom to feature on the map
         */
        zoomToFeature() {
            const layer: LayerInstance | undefined =
                this.$iApi.geo.layer.getLayer(this.result.uid);

            if (layer === undefined) {
                console.warn(
                    `Could not find layer for uid ${this.result.uid} during zoom geometry lookup`
                );
                return;
            }

            if (!this.identifyItem.loaded) {
                console.warn(
                    'Details zoomToFeature call on item that is still loading. Should be impossible, alert the devs.'
                );
                return;
            }

            const oid = this.identifyItem.data[layer.oidField];
            const opts = { getGeom: true };
            layer.getGraphic(oid, opts).then(g => {
                if (g.geometry.invalid()) {
                    console.error(`Could not find graphic for objectid ${oid}`);
                } else {
                    this.$iApi.geo.map.zoomMapTo(g.geometry, 50000);
                }
            });

            this.$iApi.updateAlert(
                this.$iApi.$vApp.$t('details.item.alert.zoom')
            );
        },

        onHilightToggle(value: boolean) {
            this.hilightToggle = value;
            this.details.onHilightToggle(
                value,
                this.result.items[this.currentIdx],
                this.result.uid
            );
        }
    }
});
</script>

<style lang="scss">
.rotate-180 {
    transform: rotate(-180deg);
}
</style>
