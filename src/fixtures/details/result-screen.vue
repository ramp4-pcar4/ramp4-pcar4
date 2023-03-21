<template>
    <panel-screen :panel="panel">
        <template #header>
            {{ t('details.items.title') }}
        </template>
        <template #content>
            <div v-if="result.loaded && activeGreedy === 0">
                <div v-if="layerExists">
                    <div v-if="result.items.length > 0">
                        <!-- layer name -->
                        <div
                            class="flex justify-between py-8 px-8 mb-8 bg-gray-100"
                            v-if="layerExists"
                        >
                            <div class="p-8 font-bold break-words">
                                {{ layerName }}
                            </div>
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

                        <!-- result list -->
                        <button
                            type="button"
                            class="w-full flex px-16 py-10 text-md hover:bg-gray-200 cursor-pointer"
                            v-for="(item, idx) in result.items"
                            :key="idx"
                            v-memo="[icon[idx]]"
                            @click="item.loaded && openResult(idx)"
                            :disabled="!item.loaded"
                            v-focus-item
                            v-truncate
                        >
                            <!-- ifs on each span as wrapper breaks aligment. smart person might improve things -->
                            <span
                                v-if="item.loaded"
                                v-html="itemIcon(item.data, idx)"
                                class="flex-none symbologyIcon"
                            ></span>
                            <span
                                class="flex-initial py-5 px-10"
                                v-truncate
                                v-if="item.loaded"
                            >
                                {{
                                    nameField
                                        ? item.data[nameField]
                                        : t('details.result.default.name', [
                                              idx + 1
                                          ])
                                }}
                            </span>
                            <span
                                v-if="!item.loaded"
                                class="animate-spin spinner h-20 w-20 px-5"
                            ></span>
                        </button>
                    </div>
                    <div v-else>{{ t('details.layers.results.empty') }}</div>
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
// This screen is the view of all geometries on a specific layer interrogated in the identify (details screen)

import { computed, inject, onBeforeUnmount, onMounted, ref } from 'vue';
import type { PropType } from 'vue';
import type { DetailsAPI } from './api/details';
import { useDetailsStore } from './store';
import type { DetailsItemInstance } from './store';
import { GlobalEvents } from '@/api';
import type { InstanceAPI, LayerInstance, PanelInstance } from '@/api';
import type { IdentifyResult } from '@/geo/api';
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
    previousItemIndex: {
        type: Number,
        default: -1
    }
});

const detailProperties = computed<{ [id: string]: DetailsItemInstance }>(
    () => detailsStore.properties
);
const activeGreedy = computed<number>(() => detailsStore.activeGreedy);
const slowLoadingFlag = computed<Boolean>(() => detailsStore.slowLoadingFlag);
const nameField = computed<string | undefined>(() => {
    const layer: LayerInstance | undefined = iApi.geo.layer.getLayer(
        props.result.uid
    );
    return layer?.nameField;
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

const icon = ref<string[]>([]);
const layerExists = ref<boolean>(false);
const handlers = ref<Array<string>>([]);
const details = ref<DetailsAPI>(iApi.fixture.get('details'));
const hilightToggle = ref<boolean>(true);

onMounted(() => {
    layerExists.value = iApi.geo.layer.getLayer(props.result.uid) !== undefined;

    hilightToggle.value = detailsStore.hilightToggle ?? hilightToggle.value;
    if (hilightToggle.value) {
        details.value.hilightDetailsItems(props.result.items, props.result.uid);
    }

    iApi.updateAlert(
        iApi.$i18n.t('details.item.alert.show.list', {
            layerName: layerName.value
        })
    );

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
                    props.result.items,
                    props.result.uid
                );
            }
        })
    );
});

onBeforeUnmount(() => {
    handlers.value.forEach(handler => iApi.event.off(handler));
});

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
};

/**
 * Switches the panel screen to display the data for a given result. Provides the currently selected layer index and the currently selected feature index as props.
 */
const openResult = (itemIndex: number) => {
    props.panel.show({
        screen: 'item-screen',
        props: { result: props.result, itemIndex: itemIndex }
    });
};

/**
 * Updates the value of icon[idx] with the svg string of the item.
 *
 * @param {any} data data of item in identifyResult.items
 * @param {number} idx index of item in identifyResult.items
 */
const itemIcon = (data: any, idx: number) => {
    const layer: LayerInstance | undefined = iApi.geo.layer.getLayer(
        props.result.uid
    );
    if (layer === undefined) {
        console.warn(
            `could not find layer for uid ${props.result.uid} during icon lookup`
        );
        return;
    }

    const oidField = layer.oidField;
    layer.getIcon(data[oidField]).then(value => {
        if (icon.value[idx] !== value) {
            icon.value[idx] = value;
        }
    });

    return icon.value[idx];
};

const onHilightToggle = (value: boolean) => {
    hilightToggle.value = value;
    details.value.onHilightToggle(value, props.result.items, props.result.uid);
};
</script>

<style lang="scss"></style>
