<template>
    <panel-screen :panel="panel" :footer="true">
        <template #header> {{ t('export.title') }} </template>

        <template #content>
            <div class="overflow-hidden border border-gray-200">
                <canvas class="export-canvas"></canvas>
            </div>
        </template>

        <template #footer>
            <div class="flex">
                <button
                    type="button"
                    @click="fixture?.export()"
                    class="bg-green-500 hover:bg-green-700 text-white font-bold py-8 px-8 sm:px-16 mr-8 sm:mr-16"
                    :aria-label="t('export.download')"
                >
                    {{ t('export.download') }}
                </button>

                <button
                    type="button"
                    @click="make()"
                    class="py-8 px-4 sm:px-16"
                    :aria-label="t('export.refresh')"
                >
                    {{ t('export.refresh') }}
                </button>

                <export-settings
                    :componentSelectedState="selectedComponents"
                    :onComponentToggle="make()"
                    class="ml-auto flex px-4 sm:px-8"
                ></export-settings>
            </div>
        </template>
    </panel-screen>
</template>

<script setup lang="ts">
import {
    computed,
    getCurrentInstance,
    inject,
    onBeforeUnmount,
    onMounted,
    ref
} from 'vue';
import type { PropType } from 'vue';
import type { InstanceAPI, PanelInstance } from '@/api';
import type { ExportAPI } from './api/export';

import { debounce } from 'throttle-debounce';

import ExportSettings from './settings-button.vue';
import { useExportStore } from './store';
import { useI18n } from 'vue-i18n';

defineProps({
    panel: {
        type: Object as PropType<PanelInstance>,
        required: true
    }
});

const { t } = useI18n();
const iApi = inject<InstanceAPI>('iApi')!;
const exportStore = useExportStore();

const fixture = ref<ExportAPI>();
const resizeObserver = ref<ResizeObserver | undefined>(undefined);

const el = computed<Element>(() => getCurrentInstance()?.proxy?.$el);
const componentSelectedState = computed(
    () => exportStore.componentSelectedState
);
const selectedComponents = computed<any>(() => {
    let state: any = {};
    if (fixture.value) {
        Object.keys(componentSelectedState.value).forEach(
            (component: string) => {
                state[component] = {
                    name: component,
                    selected:
                        componentSelectedState.value[
                            component as
                                | 'title'
                                | 'map'
                                | 'mapElements'
                                | 'legend'
                                | 'footnote'
                                | 'timestamp'
                        ] ?? false,
                    selectable:
                        (fixture.value?.config as any)[component]?.selectable ??
                        true
                };
            }
        );
    }
    return state;
});

const make = debounce(300, () => {
    if (!fixture.value) {
        return;
    }

    const canvasElement = el.value.querySelector(
        '.export-canvas'
    ) as HTMLCanvasElement;

    // TODO: detect size of the canvas container properly
    fixture.value.make(canvasElement, el.value.clientWidth - 16);
});

onMounted(() => {
    fixture.value = iApi.fixture.get('export') as ExportAPI;
    resizeObserver.value = new ResizeObserver(() => {
        make();
    });
    resizeObserver.value.observe(el.value);
});

onBeforeUnmount(() => {
    // remove the resize observer
    resizeObserver.value!.disconnect();
});
</script>

<style lang="scss" scoped></style>
