<template>
    <div class="mb-10">
        <button
            class="basemap-item-button bg-gray-300"
            type="button"
            :aria-label="t('basemap.select')"
            @click="selectBasemap(basemap)"
            v-focus-item
        >
            <!-- thumbnail -->
            <div>
                <div
                    class="flex hover:opacity-50 basemap-item-image basemap-item-container"
                    :class="!basemap.hideThumbnail ? 'h-180' : 'h-30'"
                >
                    <!-- text-only mode -->
                    <img v-if="basemap.hideThumbnail" class="w-full h-30" />
                    <!-- Else if, use basemap thumbnail url -->
                    <img
                        v-else-if="basemap.thumbnailUrl"
                        class="w-full h-180"
                        :alt="basemap.altText"
                        :src="basemap.thumbnailUrl"
                    />
                    <!-- Else if, Use tileSchema tile urls -->
                    <div
                        v-for="layer in basemap.layers"
                        :key="layer.id"
                        v-else-if="
                            tileSchema.thumbnailTileUrls &&
                            tileSchema.thumbnailTileUrls.length > 0 &&
                            basemap.layers.every(
                                layer => layer.layerType === 'esri-tile'
                            )
                        "
                        class="flex basemap-item-inner h-180"
                    >
                        <img
                            class="w-full"
                            v-for="(url, idx) in tileSchema.thumbnailTileUrls"
                            :alt="basemap.altText"
                            :src="layer.url + url"
                            :key="idx"
                        />
                    </div>
                    <!-- Else, Use placeholder image -->
                    <img
                        v-else
                        class="w-full bg-white h-180"
                        :alt="basemap.altText"
                        src="https://openclipart.org/image/800px/275366"
                    />
                </div>
            </div>

            <div
                class="absolute flex w-full bg-black text-white h-30 bottom-6 items-center"
                :class="
                    basemap.hideThumbnail && basemap.id === selectedBasemap.id
                        ? 'opacity-85'
                        : 'opacity-75'
                "
            >
                <div class="pl-5" v-truncate>
                    <span>{{ basemap.name }}</span>
                </div>

                <div class="ml-auto pr-5">
                    <a
                        @click.stop
                        @keydown.enter.space.prevent
                        :content="basemap.description"
                        v-tippy="{
                            placement: 'bottom',
                            trigger: 'click focus'
                        }"
                    >
                        <svg
                            class="fill-current w-16 h-16"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <path d="M0 0h24v24H0z" fill="none"></path>
                            <path
                                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"
                            />
                        </svg>
                    </a>
                </div>
            </div>

            <div
                class="rv-basemap-check absolute top-0 right-0"
                v-if="
                    basemap.id === selectedBasemap.id && !basemap.hideThumbnail
                "
            >
                <svg
                    class="fill-current w-25 h-25 relative"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                >
                    <path
                        d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"
                    />
                </svg>
            </div>
        </button>
    </div>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue';
import type { PropType } from 'vue';
import type { RampBasemapConfig, RampTileSchemaConfig } from '@/geo/api';

import type { InstanceAPI } from '@/api';
import { useI18n } from 'vue-i18n';
import { useConfigStore } from '@/stores/config';

const { t } = useI18n();
const iApi = inject<InstanceAPI>('iApi');
const configStore = useConfigStore();

defineProps({
    basemap: {
        type: Object as PropType<RampBasemapConfig>,
        required: true
    },
    tileSchema: {
        type: Object as PropType<RampTileSchemaConfig>,
        required: true
    }
});

const selectedBasemap = computed<RampBasemapConfig>(
    () => configStore.activeBasemapConfig as RampBasemapConfig
);

const selectBasemap = (basemap: any) => {
    if (basemap.id !== selectedBasemap.value.id) {
        iApi?.geo.map.setBasemap(basemap.id);
    }
};
</script>

<style lang="scss" scoped>
.basemap-item-container {
    display: grid;
    place-items: center;
    grid-template-areas: 'inner-div';
}

.basemap-item-inner {
    grid-area: inner-div;
}

[focus-list]:focus [focus-item].focused.basemap-item-button {
    border: solid black 2px;
}

[focus-list]:focus
    [focus-item].focused.basemap-item-button
    .basemap-item-image {
    opacity: 0.5;
}

.rv-basemap-check {
    &::before {
        content: '';
        position: absolute;
        border-top: 50px solid rgba(250, 250, 250, 1);
        border-left: 50px solid transparent;
        right: 0;
        top: 0;
    }
}
</style>
