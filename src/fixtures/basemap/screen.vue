<template>
    <panel-screen :panel="panel">
        <template #header>
            {{ t('basemap.title') }}
        </template>

        <template #content>
            <div
                v-focus-list
                :content="t('panels.controls.items')"
                v-tippy="{
                    trigger: 'manual',
                    placement: 'top-end',
                    touch: false,
                    maxWidth: 190
                }"
                ref="el"
            >
                <div class="h-600 overflow-y-auto">
                    <div class="mx-5" v-for="(tileSchema, idx) in tileSchemas" :key="tileSchema.id">
                        <!-- use mt-5 if it's the first basemap title schema, use mt-36 otherwise -->
                        <div :class="(idx === 0 ? 'mt-5' : 'mt-36') + ' flex mb-5'">
                            <h3 class="font-bold text-xl" v-truncate>
                                {{ tileSchema.name }}
                            </h3>
                        </div>

                        <ul class="border-t border-b border-gray-600" v-if="basemaps.length > 0">
                            <li v-for="basemap in filterBasemaps(tileSchema.id)" :key="basemap.id">
                                <basemap-item
                                    :basemap="basemap"
                                    :tileSchema="tileSchema"
                                    class="block relative overflow-hidden"
                                ></basemap-item>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </template>
    </panel-screen>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref, useTemplateRef } from 'vue';
import type { PropType } from 'vue';

import BasemapItem from './item.vue';
import type { RampBasemapConfig, RampMapConfig, RampTileSchemaConfig } from '@/geo/api';
import type { PanelInstance } from '@/api';
import { useI18n } from 'vue-i18n';
import { useConfigStore } from '@/stores/config';

const { t } = useI18n();
const configStore = useConfigStore();
defineProps({
    panel: {
        type: Object as PropType<PanelInstance>
    }
});

const el = useTemplateRef('el');
const tileSchemas = ref<Array<RampTileSchemaConfig>>([]);
const basemaps = ref<Array<RampBasemapConfig>>([]);
const keyupEvent = (e: Event) => {
    const evt = e as KeyboardEvent;
    if (evt.key === 'Tab' && el.value?.matches(':focus')) {
        (el.value as any)._tippy.show();
    }
};
const blurEvent = () => {
    (el.value as any)._tippy.hide();
};

onMounted(() => {
    const mapConfig = configStore.config.map as RampMapConfig;
    tileSchemas.value = mapConfig.tileSchemas;
    basemaps.value = mapConfig.basemaps;
    el.value?.addEventListener('blur', blurEvent);
    el.value?.addEventListener('keyup', keyupEvent);
});

onBeforeUnmount(() => {
    el.value?.removeEventListener('blur', blurEvent);
    el.value?.removeEventListener('keyup', keyupEvent);
});

// filter out all the basemaps that match the current schema
const filterBasemaps = (schemaId: string) =>
    basemaps.value.filter((basemap: RampBasemapConfig) => basemap.tileSchemaId === schemaId);
</script>

<style lang="scss" scoped></style>
