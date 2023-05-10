<template>
    <div class="relative" ref="el">
        <div
            :style="mapStyle()"
            class="pointer-events-auto absolute top-0 right-0 mt-12 mr-12 shadow-tm border-4 border-solid border-white bg-white transition-all duration-300 ease-out"
        >
            <!-- map -->
            <div class="relative h-full w-full overflow-hidden">
                <div
                    class="overviewmap absolute top-0 right-0 h-192 w-192"
                    :class="{ 'cursor-move': hoverOnExtent }"
                    @mousemove="cursorHitTest"
                ></div>
            </div>
            <!-- toggle -->
            <div class="absolute h-30 w-30 top-0 right-0">
                <button
                    type="button"
                    tabindex="0"
                    class="cursor-pointer absolute h-full w-full"
                    @click="minimized = !minimized"
                    :content="
                        t(
                            minimized
                                ? 'overviewmap.expand'
                                : 'overviewmap.minimize'
                        )
                    "
                    v-tippy="{ placement: 'left', hideOnClick: false }"
                >
                    <svg
                        class="absolute fill-current text-gray-500 transition-all duration-300 ease-out"
                        :style="toggleStyle()"
                        xmlns="http://www.w3.org/2000/svg"
                        fit=""
                        height="100%"
                        width="100%"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 24 24"
                        focusable="false"
                    >
                        <g id="apple-keyboard-control">
                            <path
                                d="M 19.7782,11.7782L 18.364,13.1924L 12,6.82843L 5.63604,13.1924L 4.22183,11.7782L 12,4L 19.7782,11.7782 Z "
                            ></path>
                        </g>
                    </svg>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {
    computed,
    inject,
    onBeforeUnmount,
    onMounted,
    reactive,
    ref
} from 'vue';

import type { Extent, RampBasemapConfig } from '@/geo/api';
import { GlobalEvents, InstanceAPI, OverviewMapAPI } from '@/api/internal';
import { useOverviewmapStore } from './store';
import { debounce } from 'throttle-debounce';
import { useI18n } from 'vue-i18n';
import { useConfigStore } from '@/stores/config';

const overviewmapStore = useOverviewmapStore();
const { t } = useI18n();
const iApi = inject('iApi') as InstanceAPI;
const configStore = useConfigStore();
const el = ref();

const activeBasemap = computed<RampBasemapConfig>(
    () => configStore.activeBasemapConfig as RampBasemapConfig
);
const mapConfig = computed(() => overviewmapStore.mapConfig);
const basemaps = computed(
    () => overviewmapStore.basemaps as { [key: string]: RampBasemapConfig }
);
const startMinimized = computed(() => overviewmapStore.startMinimized);
let overviewMap = reactive(new OverviewMapAPI(iApi));
const minimized = ref(true);
const hoverOnExtent = ref(false);
const handlers = reactive<Array<string>>([]);

onMounted(() => {
    iApi.geo.map.viewPromise.then(async () => {
        _adaptBasemap();
        overviewMap.createMap(
            mapConfig.value!,
            el.value.querySelector('.overviewmap') as HTMLDivElement
        );

        await overviewMap.viewPromise;

        await overviewMap.addMapGraphicLayer();

        minimized.value = startMinimized.value!;

        // update the overview map with the current map extent
        let updatePromise = overviewMap.updateOverview(
            iApi.geo.map.getExtent()
        );
        // update the overview map whenever the extent changes
        handlers.push(
            iApi.event.on(
                GlobalEvents.MAP_EXTENTCHANGE,
                debounce(100, (newExtent: Extent) => {
                    updatePromise.then(() => {
                        overviewMap.updateOverview(newExtent);
                    });
                })
            )
        );

        // adapt the overview map's basemap whenever the main map is created
        handlers.push(
            iApi.event.on(GlobalEvents.MAP_CREATED, () => {
                _adaptBasemap();
            })
        );

        // adapt the overview map's basemap whenever the main map refreshes
        handlers.push(
            iApi.event.on(GlobalEvents.MAP_REFRESH_END, () => {
                _adaptBasemap();
            })
        );

        // adapt the overview map's basemap when the main map's basemap changes
        // note that this handler is for the same schema basemap change case where the overview map is using the main map's basemap
        handlers.push(
            iApi.event.on(
                GlobalEvents.MAP_BASEMAPCHANGE,
                (payload: { basemapId: string; schemaChanged: boolean }) => {
                    if (!payload.schemaChanged && overviewMap.created) {
                        if (
                            activeBasemap.value &&
                            basemaps.value[activeBasemap.value.tileSchemaId] ===
                                undefined
                        ) {
                            overviewMap.setBasemap(payload.basemapId);
                        }
                    }
                }
            )
        );
    });
});

onBeforeUnmount(() => {
    // Remove all event handlers for this component
    handlers.forEach(handler => iApi.event.off(handler));

    overviewMap.destroyMap();
});

const cursorHitTest = async (e: MouseEvent) => {
    hoverOnExtent.value =
        !minimized.value && (await overviewMap.cursorHitTest(e));
};

const mapStyle = () => {
    return {
        height: `${minimized.value ? 48 : 200}px`,
        width: `${minimized.value ? 48 : 200}px`
    };
};

const toggleStyle = () => {
    return {
        top: `${minimized.value ? -6 : -3}px`,
        right: `${minimized.value ? -6 : -3}px`,
        transform: `rotate(${minimized.value ? 225 : 45}deg)`
    };
};

/**
 * Adapts the overview map's basemap (and projection) to match that of the main map.
 * Will run when the overview map is being set up for the first time, and then whenever the main map refreshes.
 *
 * When looking for a suitable basemap to use, this method will first check the overview map config for any
 * provided basemaps that has a matching tile schema with the main map's basemap.
 *
 * If no suitable basemap could be found, it will use the same basemap as the main map.
 */
const _adaptBasemap = () => {
    // try to find a suitable basemap

    if (!activeBasemap.value) {
        console.error(
            'Overview Map could not obtain the basemap config used by the main map'
        );
        return;
    }

    try {
        const tileSchemaId: string | undefined =
            activeBasemap.value?.tileSchemaId;

        if (!tileSchemaId) {
            throw new Error(
                'Overview Map could not obtain the tile schema of the main map'
            );
        }

        // find a basemap in this tile schema
        const basemap = basemaps.value[tileSchemaId];

        if (!basemap) {
            throw new Error(
                'Overview Map could not find a suitable basemap that matches the tile schema of the main map'
            );
        }

        // override the intial basemap id in the overview map config
        if (!overviewMap.created) {
            overviewmapStore.updateInitialBasemap(basemap.id);
        }

        // set the basemap if the map has been created
        if (overviewMap.created) {
            overviewMap.viewPromise.then(() =>
                overviewMap.setBasemap(basemap.id)
            );
        }
    } catch (err) {
        // if we errored above, just use the main map's basemap

        // do we want this warning? will throw on every map refresh if no basemaps have been provided in the config (which is valid)
        //   JR: no, as it made me investigate what the problem was. If we want to put a warning for an error that is not the
        //       hardcoded one thrown above, we should compare the error text and only console if different. Can also shorten the
        //       above to a unique key of sorts, since it wont be visibile to eyes.
        // console.warn(`${err}. Will default to the main map's basemap.`);

        // override the intial basemap id in the overview map config
        if (!overviewMap.created) {
            overviewmapStore.updateInitialBasemap(activeBasemap.value.id);
        }

        // set the basemap once the map loads
        overviewMap.viewPromise.then(() =>
            overviewMap.setBasemap(activeBasemap.value.id)
        );
    }
};
</script>

<style lang="scss" scoped>
.overviewmap::before {
    @apply absolute w-0 h-0 top-0 right-0 border-solid;
    border-width: 0 40px 40px 0;
    border-color: transparent #eee transparent transparent;
    content: '';
}
</style>
