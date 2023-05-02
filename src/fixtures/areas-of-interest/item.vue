<template>
    <div class="mt-10">
        <button
            type="button"
            class="area-of-interest-item-button bg-gray-300 w-full"
            :class="{ 'border border-gray-300': showThumbnail }"
            :aria-label="t('areas-of-interest.select')"
            @click="selectAreaOfInterest(area)"
            v-focus-item
        >
            <!-- thumbnail -->
            <div>
                <div
                    class="flex hover:opacity-50 area-of-interest-item-image"
                    :class="showThumbnail ? 'h-180' : 'h-30'"
                >
                    <!-- Use area of interest thumbnail url -->
                    <img
                        v-if="area.thumbnail"
                        class="w-full bg-white object-contain"
                        :alt="area.altText || area.title"
                        :src="area.thumbnail"
                    />
                    <img
                        v-else-if="showThumbnail"
                        class="w-full bg-white object-contain py-30"
                        :alt="area.altText || area.title"
                        src="https://openclipart.org/image/800px/160615"
                    />
                </div>
            </div>

            <div
                class="absolute flex w-full bg-black opacity-75 text-white h-30 bottom-6 items-center"
            >
                <!-- title text -->
                <div class="pl-5" v-truncate>
                    <span>{{ area.title }}</span>
                </div>

                <!-- description icon -->
                <div class="ml-auto pr-5" v-show="area.description">
                    <a
                        @click.stop
                        @keydown.enter.space.prevent
                        :content="area.description"
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
        </button>
    </div>
</template>

<script setup lang="ts">
import { inject } from 'vue';
import type { PropType } from 'vue';
import type { AreaOfInterest } from './store';
import { Extent } from '@/geo/api';
import type { InstanceAPI } from '@/api';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

defineProps({
    area: {
        type: Object as PropType<AreaOfInterest>,
        required: true
    },
    showThumbnail: {
        type: Boolean
    }
});

const iApi = inject<InstanceAPI>('iApi');

const selectAreaOfInterest = (area: any) => {
    if (!area.extent) {
        console.error(
            "selected area of interest doesn't have an extent specified."
        );
        return;
    }

    // zoom the map to this area's extent
    iApi?.geo.map.zoomMapTo(
        Extent.fromConfig(`area-of-interest-extent`, area.extent)
    );
};
</script>

<style lang="scss" scoped>
[focus-list]:focus [focus-item].focused.area-of-interest-item-button {
    border: solid black 2px;
}

[focus-list]:focus
    [focus-item].focused.area-of-interest-item-button
    .area-of-interest-item-image {
    opacity: 0.5;
}
</style>
