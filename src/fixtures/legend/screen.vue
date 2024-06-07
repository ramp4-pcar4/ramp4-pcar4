<template>
    <panel-screen :panel="panel">
        <template #header>
            {{ t('legend.title') }}
        </template>

        <template #content>
            <legend-header />
            <div
                v-focus-list
                :content="t('panels.controls.items')"
                v-tippy="{
                    trigger: 'manual',
                    placement: 'top-end',
                    maxWidth: 190
                }"
                ref="el"
            >
                <legend-item
                    v-for="item in children"
                    :legendItem="item"
                    :key="item.uid"
                />
            </div>
        </template>
    </panel-screen>
</template>

<script setup lang="ts">
import {
    computed,
    defineAsyncComponent,
    inject,
    onBeforeUnmount,
    onMounted,
    ref
} from 'vue';
import { useI18n } from 'vue-i18n';

import type { InstanceAPI, PanelInstance } from '@/api';
import type { PropType } from 'vue';
import type { LegendAPI } from './api/legend';
import type { LegendItem } from './store/legend-item';

const legendHeader = defineAsyncComponent(() => import('./header.vue'));
const legendItem = defineAsyncComponent(() => import('./components/item.vue'));

const { t } = useI18n();
const iApi = inject('iApi') as InstanceAPI;
const el = ref<Element>();

const blurEvent = () => {
    (el.value as any)._tippy.hide();
};

const keyupEvent = (e: Event) => {
    const evt = e as KeyboardEvent;
    if (evt.key === 'Tab' && el.value?.matches(':focus')) {
        (el.value as any)._tippy.show();
    }
};

onMounted(() => {
    el.value?.addEventListener('blur', blurEvent);

    el.value?.addEventListener('keyup', keyupEvent);
});

onBeforeUnmount(() => {
    el.value?.removeEventListener('blur', blurEvent);

    el.value?.removeEventListener('keyup', keyupEvent);
});

defineProps({
    panel: {
        type: Object as PropType<PanelInstance>,
        required: true
    }
});

const children = computed<Array<LegendItem>>(() => {
    let legendApi = iApi.fixture.get<LegendAPI>('legend');
    if (legendApi) {
        return [...legendApi.getLegend()];
    }
    return [];
});
</script>

<style lang="scss" scoped></style>
