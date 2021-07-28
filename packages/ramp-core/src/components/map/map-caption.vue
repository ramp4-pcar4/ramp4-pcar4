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
        "
    >
        <span class="relative ml-10 truncate top-1" v-if="!attribution.logo.disabled">
            <a
                class="pointer-events-auto cursor-pointer"
                :href="attribution.logo.link"
                target="_blank"
            >
                <img
                    class="object-contain h-24"
                    :src="attribution.logo.value"
                    :alt="attribution.logo.altText"
                />
            </a>
        </span>

        <span class="relative ml-10 truncate top-1" v-if="!attribution.text.disabled">
            {{ attribution.text.value }}
        </span>

        <notifications-caption-button class="sm:block display-none"></notifications-caption-button>

        <span class="flex-grow w-15"></span>

        <!-- TODO: find out if any ARIA attributes are needed for the map scale -->

        <span v-if="!cursorCoords.disabled" class="flex-shrink-0 relative top-1 pr-14 pl-14">
            {{ cursorCoords.formattedString }}
        </span>

        <button
            v-if="!scale.disabled"
            class="
                flex-shrink-0
                mx-10
                px-4
                pointer-events-auto
                h-20
                cursor-pointer
                border-none
            "
            @click="onScaleClick"
            :aria-pressed="scale.isImperialScale"
            :aria-label="$t('map.toggleScaleUnits')"
            v-tippy="{ placement: 'top', hideOnClick: false }"
            :content="$t('map.toggleScaleUnits')"
        >
            <span
                class="
                    border-solid border-2 border-white border-t-0
                    h-5
                    mr-2
                    inline-block
                "
                :style="{ width: scale.width }"
            ></span>
            {{ scale.label }}
        </button>

        <dropdown-menu
            class="
                flex-shrink-0
                pointer-events-auto
                h-20
                focus:outline-none
                px-4
                mr-4
            "
            position="top-end"
            :tooltip="$t('map.changeLanguage')"
            tooltip-placement="top-end"
        >
            <template #header>
                <span class="text-gray-400 hover:text-white">
                    {{ $t('map.language.short') }}
                </span>
            </template>
            <a
                v-for="(item, index) in lang"
                :key="`${item}-${index}`"
                class="flex-auto items-center"
                @click="changeLang(item)"
            >
                {{ $t('map.language.' + item) }}
            </a>
        </dropdown-menu>
    </div>
</template>

<script lang="ts">
import { Vue, Options, Watch } from 'vue-property-decorator';
import { Get } from 'vuex-pathify';
import { Attribution, MouseCoords, RampMapConfig, ScaleBar } from '@/geo/api';
import { MapCaptionStore } from '@/store/modules/map-caption';
import { ConfigStore } from '@/store/modules/config';
import NotificationsCaptionButtonV from '@/components/notification-center/caption-button.vue';

@Options({
    components: {
        'notifications-caption-button': NotificationsCaptionButtonV
    }
})
export default class MapCaptionV extends Vue {
    @Get(MapCaptionStore.scale) scale!: ScaleBar;
    @Get(MapCaptionStore.attribution) attribution!: Attribution;
    @Get(MapCaptionStore.cursorCoords) cursorCoords!: MouseCoords;
    @Get(ConfigStore.getMapConfig) mapConfig!: RampMapConfig;
    lang: string[] = [];

    @Watch('mapConfig')
    onMapConfigChange(newValue: RampMapConfig, oldValue: RampMapConfig) {
        if (newValue === oldValue) {
            return;
        }
        this.$iApi.geo.map.caption.createCaption(this.mapConfig.caption);
    }

    updated() {
        if (this.$iApi.$vApp.$i18n && this.lang.length == 0) {
            this.lang = this.$iApi.$vApp.$i18n.availableLocales;
        }
    }

    changeLang(lang: string) {
        if (this.$iApi.$vApp.$i18n.locale != lang) {
            this.$iApi.setLanguage(lang);
        }
    }

    /**
     * Toggle the scale units
     */
    onScaleClick() {
        // undefined argument will toggle the scale unit
        this.$iApi.$vApp.$store.set(MapCaptionStore.toggleScale, undefined);
        this.$iApi.geo.map.caption.updateScale();
    }
}
</script>

<style lang="scss" scoped>
.map-caption {
    backdrop-filter: blur(5px);
}
</style>
