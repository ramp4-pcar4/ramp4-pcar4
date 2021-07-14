<template>
    <div
        class="map-caption absolute bottom-0 flex justify-center pointer-events-none text-gray-400 bg-black-75 left-0 right-0 py-2 z-50"
    >
        <span
            class="relative ml-10 truncate top-1"
            v-if="!attribution.logo.disabled"
        >
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

        <span
            class="relative ml-10 truncate top-1"
            v-if="!attribution.text.disabled"
        >
            {{ attribution.text.value }}
        </span>

        <span class="flex-grow w-15"></span>

        <!-- TODO: find out if any ARIA attributes are needed for the map scale -->

        <span class="flex-shrink-0 relative top-1 pr-14 pl-14">
            {{ cursorCoords }}
        </span>

        <button
            class="flex-shrink-0 mx-10 px-4 pointer-events-auto h-20 cursor-pointer border-none"
            @click="onScaleClick"
            :aria-pressed="scale.isImperialScale"
            :aria-label="$t('map.toggleScaleUnits')"
            v-tippy="{ placement: 'top', hideOnClick: false }"
            :content="$t('map.toggleScaleUnits')"
        >
            <span
                class="border-solid border-2 border-white border-t-0 h-5 mr-2 inline-block"
                :style="{ width: scale.width }"
            ></span>
            {{ scale.label }}
        </button>

        <dropdown-menu
            class="relative pointer-events-auto h-20 focus:outline-none px-4 mr-4"
            position="top-right"
            :tooltip="$t('map.changeLanguage')"
            tooltip-placement="top"
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
import { Vue, Component } from 'vue-property-decorator';
import { Get } from 'vuex-pathify';
import { Attribution, ScaleBarProperties } from '@/geo/api';
import { GlobalEvents } from '@/api';
import { MapCaptionStore } from '@/store/modules/map-caption';

@Component
export default class MapCaptionV extends Vue {
    @Get(MapCaptionStore.scale) scale!: ScaleBarProperties;
    @Get(MapCaptionStore.attribution) attribution!: Attribution;
    @Get(MapCaptionStore.cursorCoords) cursorCoords!: string;
    lang: string[] = [];

    mounted() {
        // When map is created update scale

        // TODO consider giving this handler a specific name and put in the document.
        //      since it happens at map create, could be risky/tricky putting it in the "default" events
        //      as odds are if there is any delay, the handler will miss the MAP_CREATED event.
        //      But having a specific name means someone can remove it later at their lesiure.

        // TODO consider what happens when a map is re-created. We might need to check if common handlers pre-exist.
        //      or do some type of "one time only" boolean so we don't have double-handlers each time a projection changes.
        //      we also need to be careful of the scenario where someone removes these default handlers after the map loads;
        //      we would not want to re-add them back during a projection change -- want to respect the new custom handlers.

        this.$iApi.event.on(GlobalEvents.MAP_CREATED, () => {
            this.$iApi.geo.map.updateScale();
        });
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
        this.$iApi.$vApp.$store.set(MapCaptionStore.toggleScale, {});
        this.$iApi.geo.map.updateScale();
    }
}
</script>

<style lang="scss" scoped>
.map-caption {
    backdrop-filter: blur(5px);
}
</style>
