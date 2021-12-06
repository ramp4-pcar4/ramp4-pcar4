<template>
    <div class="mb-10">
        <button
            class="basemap-item-button bg-gray-300"
            :aria-label="$t('basemap.select')"
            @click="selectBasemap(basemap)"
            v-focus-item
        >
            <div>
                <div>
                    <div
                        class="flex h-180 hover:opacity-50 basemap-item-image"
                        v-for="layer in basemap.layers"
                        :key="layer.id"
                    >
                        <!-- Use basemap thumbnail url -->
                        <img
                            v-if="basemap.thumbnailUrl"
                            class="w-full"
                            :alt="basemap.altText"
                            :src="basemap.thumbnailUrl"
                        />
                        <!-- Else if, Use tileSchema tile urls -->
                        <img
                            v-else-if="tileSchema.thumbnailTileUrls"
                            v-for="(url, idx) in tileSchema.thumbnailTileUrls"
                            class="w-full"
                            :alt="basemap.altText"
                            :src="layer.url + url"
                            :key="idx"
                        />
                        <!-- Else, Use placeholder image -->
                        <img
                            v-else
                            class="w-full bg-white"
                            :alt="basemap.altText"
                            src="https://openclipart.org/image/800px/275366"
                        />
                    </div>
                </div>
            </div>

            <div
                class="
                    absolute
                    flex
                    w-full
                    bg-black
                    opacity-75
                    text-white
                    h-30
                    bottom-6
                    items-center
                "
            >
                <div class="pl-5" v-truncate>
                    <span>{{ basemap.name }}</span>
                </div>

                <div class="ml-auto pr-5">
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
                </div>
            </div>

            <div
                class="rv-basemap-check absolute top-0 right-0"
                v-if="basemap.id === selectedBasemap.id"
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

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { RampBasemapConfig, RampTileSchemaConfig } from '@/geo/api';
import { get } from '@/store/pathify-helper';
import { ConfigStore } from '@/store/modules/config';

export default defineComponent({
    name: 'BasemapItemV',
    props: {
        basemap: {
            type: Object as PropType<RampBasemapConfig>,
            required: true
        },
        tileSchema: {
            type: Object as PropType<RampTileSchemaConfig>,
            required: true
        }
    },
    data() {
        return {
            selectedBasemap: get(ConfigStore.getActiveBasemapConfig)
        };
    },
    methods: {
        selectBasemap(basemap: any) {
            this.$iApi.geo.map.setBasemap(basemap.id);
        }
    }
});
</script>

<style lang="scss" scoped>
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
