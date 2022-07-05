<template>
    <div
        class="map-caption absolute bottom-0 flex justify-end pointer-events-auto cursor-default select-none text-gray-400 bg-black-75 left-0 right-0 py-2 sm:py-6"
    >
        <about-ramp-dropdown
            class="sm:block display-none ml-8 mr-4"
            position="top-end"
        ></about-ramp-dropdown>

        <notifications-caption-button
            class="sm:block display-none"
        ></notifications-caption-button>

        <span
            class="relative top-2 sm:top-1 ml-4 sm:ml-0 shrink-0"
            v-if="!attribution.logo.disabled"
        >
            <a
                class="pointer-events-auto cursor-pointer"
                :href="attribution.logo.link"
                target="_blank"
                :aria-label="attribution.logo.altText"
            >
                <img
                    class="object-contain h-18 sm:h-26"
                    :src="attribution.logo.value"
                    :alt="attribution.logo.altText"
                />
            </a>
        </span>

        <span
            class="relative ml-10 top-2 text-sm sm:text-base"
            v-if="!attribution.text.disabled"
            v-truncate="{
                options: {
                    placement: 'top',
                    hideOnClick: false,
                    theme: 'ramp4',
                    animation: 'scale'
                }
            }"
        >
            {{ attribution.text.value }}
        </span>

        <span class="flex-grow w-15"></span>

        <!-- TODO: find out if any ARIA attributes are needed for the map scale -->

        <div class="flex min-w-fit justify-end">
            <div
                v-if="!cursorCoords.disabled"
                class="relative top-2 pl-8 px-14 sm:block display-none"
                v-truncate="{
                    options: {
                        hideOnClick: false,
                        theme: 'ramp4',
                        animation: 'scale'
                    }
                }"
            >
                {{ cursorCoords.formattedString }}
            </div>

            <button
                v-if="!scale.disabled"
                class="flex-shrink-0 mx-2 sm:mx-10 px-4 pointer-events-auto cursor-pointer border-none"
                @click="onScaleClick"
                :aria-pressed="scale.isImperialScale"
                :aria-label="$t('map.toggleScaleUnits')"
                v-tippy="{
                    placement: 'top',
                    hideOnClick: false,
                    theme: 'ramp4',
                    animation: 'scale'
                }"
                :content="$t('map.toggleScaleUnits')"
            >
                <span
                    class="border-solid border-2 border-white border-t-0 h-5 mr-4 inline-block"
                    :style="{ width: scale.width }"
                ></span>
                <span class="relative text-sm sm:text-base">
                    {{ scale.label }}
                </span>
            </button>

            <dropdown-menu
                class="flex-shrink-0 pointer-events-auto focus:outline-none px-4 mr-4"
                position="top-end"
                :tooltip="$t('map.changeLanguage')"
                tooltip-placement="top-end"
            >
                <template #header>
                    <span
                        class="text-gray-400 hover:text-white text-sm sm:text-base pb-5"
                    >
                        {{ $t('map.language.short') }}
                    </span>
                </template>
                <a
                    v-for="(item, index) in lang"
                    :key="`${item}-${index}`"
                    class="flex-auto items-center text-sm sm:text-base cursor-pointer"
                    :class="{ 'font-bold': item === $iApi.$vApp.$i18n.locale }"
                    href="javascript:;"
                    @click="changeLang(item)"
                >
                    {{ $t('map.language.' + item) }}
                    <span
                        class="sr-only"
                        v-if="item === $iApi.$vApp.$i18n.locale"
                    >
                        {{ $t('map.language.curr') }}
                    </span>
                </a>
            </dropdown-menu>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import type { RampMapConfig } from '@/geo/api';
import { MapCaptionStore } from '@/store/modules/map-caption';
import { ConfigStore } from '@/store/modules/config';
import NotificationsCaptionButtonV from '@/components/notification-center/caption-button.vue';
import AboutRampDropdown from '@/components/about-ramp/about-ramp-dropdown.vue';

export default defineComponent({
    data() {
        return {
            scale: this.get(MapCaptionStore.scale),
            attribution: this.get(MapCaptionStore.attribution),
            cursorCoords: this.get(MapCaptionStore.cursorCoords),
            mapConfig: this.get(ConfigStore.getMapConfig),
            lang: [] as Array<string>,
            watchers: [] as Array<Function>
        };
    },

    components: {
        'notifications-caption-button': NotificationsCaptionButtonV,
        'about-ramp-dropdown': AboutRampDropdown
    },

    created() {
        this.watchers.push(
            this.$watch('mapConfig', (newConfig: RampMapConfig) => {
                if (!newConfig) {
                    return;
                }
                this.$iApi.geo.map.caption.createCaption(
                    this.mapConfig.caption
                );
            })
        );
    },

    beforeUnmount() {
        this.watchers.forEach(unwatch => unwatch());
    },

    updated() {
        this.$nextTick(function () {
            if (this.$iApi.$vApp.$i18n && this.lang.length == 0) {
                this.lang = this.$iApi.$vApp.$i18n.availableLocales;
            }
        });
    },
    methods: {
        changeLang(lang: string) {
            if (this.$iApi.$vApp.$i18n.locale != lang) {
                this.$iApi.setLanguage(lang);
            }
        },
        /**
         * Toggle the scale units
         */
        onScaleClick() {
            // undefined argument will toggle the scale unit
            this.$iApi.$vApp.$store.set(MapCaptionStore.toggleScale, undefined);
            this.$iApi.geo.map.caption.updateScale();
        }
    }
});
</script>

<style lang="scss" scoped>
.map-caption {
    backdrop-filter: blur(5px);
}
</style>
