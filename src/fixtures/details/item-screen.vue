<template>
    <panel-screen :panel="panel">
        <template #header>
            {{ t('details.items.title') }}
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
                    <div>{{ t('details.togglehilight.title') }}</div>
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
                            type="button"
                            class="px-8 font-bold hover:bg-gray-200 focus:bg-gray-200"
                            :aria-label="t('details.item.see.list')"
                            @click="seeList"
                        >
                            {{ t('details.item.see.list') }}
                        </button>
                        <div class="flex bg-gray-200 py-8 items-center">
                            <button
                                type="button"
                                :content="t('details.item.previous.item')"
                                v-tippy="{ placement: 'top' }"
                                @click="advanceItemIndex(-1)"
                                class="mx-2 opacity-60 hover:opacity-90 disabled:opacity-30 disabled:cursor-default"
                                :aria-label="t('details.item.previous.item')"
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
                                    t('details.item.count', [
                                        currentIdx + 1,
                                        result.items.length
                                    ])
                                }}
                            </span>
                            <button
                                type="button"
                                :content="t('details.item.next.item')"
                                v-tippy="{ placement: 'top' }"
                                @click="advanceItemIndex(1)"
                                class="mx-2 rotate-180 opacity-60 hover:opacity-90 disabled:opacity-30 disabled:cursor-default"
                                :aria-label="t('details.item.next.item')"
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
                                type="button"
                                :content="t('details.item.zoom')"
                                v-tippy="{ placement: 'bottom' }"
                                :aria-label="t('details.item.zoom')"
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
                        {{ t('details.item.loading') }}
                    </div>
                </div>
                <!-- layer does not exist anymore, show no data text -->
                <div v-else class="p-5">
                    {{ t('details.item.no.data') }}
                </div>
            </div>
            <!-- result is loading -->
            <div
                v-else-if="slowLoadingFlag"
                class="flex justify-center py-10 items-center"
            >
                <span class="animate-spin spinner h-20 w-20 px-5 mr-8"></span>
                {{ t('details.item.loading') }}
            </div>
            <!-- clear panel when new identify request came in -->
            <div v-else></div>
        </template>
    </panel-screen>
</template>

<script setup lang="ts">
// This screen is the view of a single identified geometry (details panel)

import {
    computed,
    inject,
    onBeforeUnmount,
    onBeforeUpdate,
    onMounted,
    ref
} from 'vue';
import type { PropType } from 'vue';
import { DetailsItemInstance, useDetailsStore } from './store';
import type { DetailsAPI } from './api/details';

import { GlobalEvents, InstanceAPI } from '@/api';
import type { FieldDefinition, IdentifyResult, IdentifyItem } from '@/geo/api';
import type { LayerInstance, PanelInstance } from '@/api/internal';

import ESRIDefault from './templates/esri-default.vue';
import HTMLDefault from './templates/html-default.vue';
import Toggle from '../../components/controls/toggle-switch-control.vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const iApi = inject<InstanceAPI>('iApi')!;
const detailsStore = useDetailsStore();

const props = defineProps({
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
});

const defaultTemplates = computed<{ [type: string]: string }>(
    () => detailsStore.defaultTemplates
);
const detailProperties = computed<{ [id: string]: DetailsItemInstance }>(
    () => detailsStore.properties
);
const activeGreedy = computed<number>(() => detailsStore.activeGreedy);
const slowLoadingFlag = computed<Boolean>(() => detailsStore.slowLoadingFlag);
const identifyItem = computed<IdentifyItem>(
    () => props.result.items[currentIdx.value]
);
const itemName = computed<string>(() => {
    const layer: LayerInstance | undefined = iApi.geo.layer.getLayer(
        props.result.uid
    );
    const nameField = layer?.nameField;
    return nameField && identifyItem.value.loaded
        ? identifyItem.value.data[nameField]
        : iApi.$i18n.t('details.items.title');
});
const layerName = computed<string>(() => {
    const layer: LayerInstance | undefined = iApi.geo.layer.getLayer(
        props.result.uid
    );
    if (
        layer &&
        detailProperties.value[layer.id] &&
        detailProperties.value[layer.id].name
    ) {
        return detailProperties.value[layer.id].name;
    }
    return layer?.name ?? '';
});
const supportsFeatures = computed<Boolean>(() => {
    const layer: LayerInstance | undefined = iApi.geo.layer.getLayer(
        props.result.uid
    );
    return layer?.supportsFeatures ?? false;
});
const fieldsList = computed<Array<FieldDefinition>>(() => {
    // wms layers do not support fields
    if (!supportsFeatures.value) {
        return [];
    }
    const layer: LayerInstance | undefined = iApi.geo.layer.getLayer(
        props.result.uid
    );
    const fields = layer?.fields;
    return fields || [];
});
const detailsTemplate = computed(() => {
    const layer: LayerInstance | undefined = iApi.geo.layer.getLayer(
        props.result.uid
    );

    // If there is a custom template binding for this layer in the store, then
    // return its name.
    if (
        layer &&
        detailProperties.value[layer.id] &&
        detailProperties.value[layer.id].template
    ) {
        return detailProperties.value[layer.id].template;
    }

    // If nothing is found, use a default template from config
    if (
        defaultTemplates.value &&
        defaultTemplates.value[identifyItem.value.format]
    ) {
        return defaultTemplates.value[identifyItem.value.format];
    }

    // If default template is not specified, use our default template
    if (!supportsFeatures.value) {
        return HTMLDefault;
    } else {
        return ESRIDefault;
    }
});

const icon = ref<string>('');
const currentIdx = ref<number>(0);
const layerExists = ref<Boolean>(false);
const handlers = ref<Array<string>>([]);
const details = ref<DetailsAPI>(iApi.fixture.get('details'));
const hilightToggle = ref<boolean>(true);

/**
 * Clean up for when the details screen is closed.
 */
const detailsClosed = () => {
    details.value.removeDetailsHilight();
    detailsStore.hilightToggle = true;
};

/**
 * Clean up for when the details screen is minimized.
 */
const detailsMinimized = () => {
    details.value.removeDetailsHilight();
    // TODO: do we want to keep track of the index on minimize?
};

/**
 * Initialize the details screen
 */
const initDetails = () => {
    currentIdx.value = props.itemIndex ?? 0;
    layerExists.value = true;
    hilightToggle.value = detailsStore.hilightToggle ?? hilightToggle.value;
    itemChanged();
};

/**
 * Called whenever the displayed item changes
 */
const itemChanged = () => {
    if (identifyItem.value.loaded) {
        const layer: LayerInstance | undefined = iApi.geo.layer.getLayer(
            props.result.uid
        );
        if (!layer) {
            // could not find this layer, so mark this result as invalid
            // this handles the case where user minimized item screen -> deletes layer -> opens item screen again
            layerExists.value = false;
        }

        fetchIcon();
        iApi.updateAlert(
            `${iApi.$i18n.t('details.item.alert.show.item', {
                itemName: itemName.value
            })} ${
                props.result.items.length > 1
                    ? iApi.$i18n.t('details.item.count', [
                          currentIdx.value + 1,
                          props.result.items.length
                      ])
                    : ''
            }`
        );
        if (hilightToggle.value) {
            details.value.hilightDetailsItems(
                props.result.items[currentIdx.value],
                props.result.uid
            );
        }
    } else {
        // wait for load.
        const localCurrentIndex = currentIdx.value;
        identifyItem.value.loading.then(() => {
            // see if the screen is still on the item we were waiting for
            // TODO do we also need to check if the screen itself changed to the list
            //      view or closed? Would this vue component be unmounted and dead at
            //      that point? Don't want stale updateAlerts pinging off after the fact.
            //      Could implement another flag, set it on seeList() and panel close.
            if (localCurrentIndex === currentIdx.value) {
                // re-call, knowing the item is now loaded.
                itemChanged();
            }
        });

        // TODO do we need some type of updateAlert that says the screen is now
        //      in a loading state?
    }
};

/**
 * See all results from the identified layer
 */
const seeList = () => {
    props.panel.show({
        screen: 'results-screen',
        props: {
            result: props.result,
            previousItemIndex: currentIdx.value
        }
    });
};

/**
 * Advance the item index by direction
 */
const advanceItemIndex = (direction: number) => {
    currentIdx.value += direction;
    itemChanged();
};

/**
 * Get the icon of the identify result
 */
const fetchIcon = () => {
    icon.value = '';

    if (!(identifyItem.value && identifyItem.value.loaded)) {
        return;
    }

    const layer: LayerInstance | undefined = iApi.geo.layer.getLayer(
        props.result.uid
    );
    if (layer === undefined) {
        console.warn(
            `could not find layer for uid ${props.result.uid} during icon lookup`
        );
        return;
    }

    if (layer.supportsFeatures) {
        const oidField = layer.oidField;
        let lastIdx = currentIdx.value;
        layer
            .getIcon(identifyItem.value.data[oidField])
            .then((value: string) => {
                // only update the icon if user is still on the same item
                if (currentIdx.value === lastIdx) {
                    icon.value = value;
                }
            });
    }
};

/**
 * Zoom to feature on the map
 */
const zoomToFeature = () => {
    const layer: LayerInstance | undefined = iApi.geo.layer.getLayer(
        props.result.uid
    );

    if (layer === undefined) {
        console.warn(
            `Could not find layer for uid ${props.result.uid} during zoom geometry lookup`
        );
        return;
    }

    if (!identifyItem.value.loaded) {
        console.warn(
            'Details zoomToFeature call on item that is still loading. Should be impossible, alert the devs.'
        );
        return;
    }

    const oid = identifyItem.value.data[layer.oidField];
    const opts = { getGeom: true };
    layer.getGraphic(oid, opts).then(g => {
        if (g.geometry.invalid()) {
            console.error(`Could not find graphic for objectid ${oid}`);
        } else {
            iApi.geo.map.zoomMapTo(g.geometry);
        }
    });

    iApi.updateAlert(iApi.$i18n.t('details.item.alert.zoom'));
};

const onHilightToggle = (value: boolean) => {
    hilightToggle.value = value;
    details.value.onHilightToggle(
        value,
        props.result.items[currentIdx.value],
        props.result.uid
    );
};

onMounted(() => {
    // this is called when screen is first mounted
    initDetails();

    // close this panel if layer is removed
    handlers.value.push(
        iApi.event.on(
            GlobalEvents.LAYER_REMOVE,
            (removedLayer: LayerInstance) => {
                if (props.result.uid === removedLayer.uid) {
                    props.panel.close();
                }
            }
        )
    );

    handlers.value.push(
        iApi.event.on(GlobalEvents.PANEL_CLOSED, (panel: PanelInstance) => {
            if (panel.id == 'details-items') {
                detailsClosed();
            }
        })
    );

    handlers.value.push(
        iApi.event.on(GlobalEvents.PANEL_MINIMIZED, (panel: PanelInstance) => {
            if (panel.id == 'details-items') {
                detailsMinimized();
            }
        })
    );

    handlers.value.push(
        iApi.event.on(GlobalEvents.MAP_BASEMAPCHANGE, () => {
            if (hilightToggle.value) {
                details.value.reloadDetailsHilight(
                    props.result.items[currentIdx.value],
                    props.result.uid
                );
            }
        })
    );
});

onBeforeUnmount(() => {
    handlers.value.forEach(handler => iApi.event.off(handler));
});

onBeforeUpdate(() => {
    // this is called before the screen is updated (e.g. user clicked another layer from layer results screen)
    initDetails();
});
</script>

<style lang="scss">
.rotate-180 {
    transform: rotate(-180deg);
}
</style>
