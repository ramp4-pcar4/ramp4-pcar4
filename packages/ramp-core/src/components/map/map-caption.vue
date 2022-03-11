<template>
    <div
        class="
            map-caption
            absolute
            bottom-0
            flex
            justify-center
            pointer-events-none
            text-gray-400
            bg-black-75
            left-0
            right-0
            py-2
            sm:py-6
        "
    >
        <about-ramp-dropdown
            class="sm:block display-none ml-8 mr-4"
            position="top-end"
        ></about-ramp-dropdown>

        <notifications-caption-button
            class="sm:block display-none"
        ></notifications-caption-button>

        <span
            class="relative truncate top-1 sm:block display-none"
            v-if="!attribution.logo.disabled"
        >
            <a
                class="pointer-events-auto cursor-pointer"
                :href="attribution.logo.link"
                target="_blank"
                :aria-label="attribution.logo.altText"
            >
                <img
                    class="object-contain h-26"
                    :src="attribution.logo.value"
                    :alt="attribution.logo.altText"
                />
            </a>
        </span>

        <span
            class="relative ml-10 truncate top-2 sm:block display-none"
            v-if="!attribution.text.disabled"
        >
            {{ attribution.text.value }}
        </span>

        <span class="flex-grow w-15"></span>

        <!-- TODO: find out if any ARIA attributes are needed for the map scale -->

        <span
            v-if="!cursorCoords.disabled"
            class="
                flex-shrink-0
                relative
                top-2
                pr-14
                pl-14
                text-sm
                sm:text-base
            "
        >
            {{ cursorCoords.formattedString }}
        </span>

        <button
            v-if="!scale.disabled"
            class="
                flex-shrink-0
                mx-10
                px-4
                pointer-events-auto
                cursor-pointer
                border-none
            "
            @click="onScaleClick"
            :aria-pressed="scale.isImperialScale"
            :aria-label="$t('map.toggleScaleUnits')"
            v-tippy="{
                placement: 'top',
                hideOnClick: false,
                theme: 'ramp4',
                animation: 'scale',
                appendTo: 'parent'
            }"
            :content="$t('map.toggleScaleUnits')"
        >
            <span
                class="
                    border-solid border-2 border-white border-t-0
                    h-5
                    mr-4
                    inline-block
                "
                :style="{ width: scale.width }"
            ></span>
            <span class="relative text-sm sm:text-base">
                {{ scale.label }}
            </span>
        </button>

        <dropdown-menu
            class="
                flex-shrink-0
                pointer-events-auto
                focus:outline-none
                px-4
                mr-4
            "
            position="top-end"
            :tooltip="$t('map.changeLanguage')"
            tooltip-placement="top-end"
        >
            <template #header>
                <span
                    class="
                        text-gray-400
                        hover:text-white
                        text-sm
                        sm:text-base
                        pb-5
                    "
                >
                    {{ $t('map.language.short') }}
                </span>
            </template>
            <a
                v-for="(item, index) in lang"
                :key="`${item}-${index}`"
                class="flex-auto items-center text-sm sm:text-base"
                @click="changeLang(item)"
            >
                {{ $t('map.language.' + item) }}
            </a>
        </dropdown-menu>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { get } from '@/store/pathify-helper';
import { RampMapConfig } from '@/geo/api';
import { MapCaptionStore } from '@/store/modules/map-caption';
import { ConfigStore } from '@/store/modules/config';
import NotificationsCaptionButtonV from '@/components/notification-center/caption-button.vue';
import AboutRampDropdown from '@/components/about-ramp/about-ramp-dropdown.vue';

export default defineComponent({
    data() {
        return {
            scale: get(MapCaptionStore.scale),
            attribution: get(MapCaptionStore.attribution),
            cursorCoords: get(MapCaptionStore.cursorCoords),
            mapConfig: get(ConfigStore.getMapConfig),
            lang: [] as string[]
        };
    },

    components: {
        'notifications-caption-button': NotificationsCaptionButtonV,
        'about-ramp-dropdown': AboutRampDropdown
    },

    watch: {
        mapConfig(newConfig: RampMapConfig, oldConfig: RampMapConfig) {
            if (newConfig === oldConfig) {
                return;
            }
            this.$iApi.geo.map.caption.createCaption(this.mapConfig.caption);
        }
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
