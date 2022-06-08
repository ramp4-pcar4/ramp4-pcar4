<template>
    <div class="legend-item">
        <div
            class="legend-item-header bg-red-200"
            v-focus-item="'show-truncate'"
            truncate-trigger
        >
            <div class="flex pr-10">
                <!-- sad face for layer error -->
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="black"
                    width="24px"
                    height="24px"
                >
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <circle cx="15.5" cy="9.5" r="1.5" />
                    <circle cx="8.5" cy="9.5" r="1.5" />
                    <circle cx="15.5" cy="9.5" r="1.5" />
                    <circle cx="8.5" cy="9.5" r="1.5" />
                    <path
                        d="M 20,12C 20,7.6 16.4,4 12,4C 7.6,4 4,7.6 4,12C 4,16.4 7.6,20 12,20C 16.4,20 20,16.4 20,12 Z M 22,12C 22,17.5 17.5,22 12,22C 6.5,22 2,17.5 2,12C 2,6.5 6.5,2.00001 12,2.00001C 17.5,2.00001 22,6.5 22,12 Z M 15.5,8C 16.3,8 17,8.7 17,9.5C 17,10.3 16.3,11 15.5,11C 14.7,11 14,10.3 14,9.5C 14,8.7 14.7,8 15.5,8 Z M 10,9.5C 10,10.3 9.3,11 8.5,11C 7.7,11 7,10.3 7,9.5C 7,8.7 7.7,8 8.5,8C 9.3,8 10,8.7 10,9.5 Z M 12,14C 13.7524,14 15.2943,14.7212 16.1871,15.8129L 14.7697,17.2302C 14.3175,16.5078 13.2477,16 12,16C 10.7523,16 9.68254,16.5078 9.23024,17.2302L 7.81291,15.8129C 8.7057,14.7212 10.2476,14 12,14 Z"
                    ></path>
                </svg>
            </div>

            <!-- name -->
            <div
                class="flex-1 pointer-events-none"
                v-truncate="{ externalTrigger: true }"
            >
                <span>{{ legendItem.name }}</span>
            </div>

            <!-- reload -->
            <div class="relative">
                <button
                    class="text-gray-500 hover:text-black dropdown-button"
                    :class="{
                        disabled: !legendItem.controlAvailable(`reload`)
                    }"
                    @click="reloadLayer"
                >
                    <div class="flex p-8">
                        <svg
                            class="inline-block fill-current w-18 h-18"
                            viewBox="0 0 24 24"
                        >
                            <path
                                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
                            ></path>
                        </svg>
                    </div>
                </button>
            </div>

            <!-- error -->
            <!-- <div class="w-2 opacity-50 bg-red-600"></div> -->
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';

import to from 'await-to-js';

import { LayerStore } from '@/store/modules/layer';
import { LayerControls, type RampLayerConfig } from '@/geo/api';
import type { LayerInstance } from '@/api/internal';
import type { LegendEntry } from '../store/legend-defs';

export default defineComponent({
    name: 'LegendErrorV',
    props: {
        legendItem: { type: Object as PropType<LegendEntry>, required: true }
    },
    data() {
        return {
            layerConfigs: this.get(LayerStore.layerConfigs)
        };
    },
    methods: {
        /**
         * Reloads a layer on the map.
         */
        reloadLayer() {
            if (this.legendItem!.controlAvailable(LayerControls.Reload)) {
                // call reload on layer if it exists
                if (this.legendItem.layer !== undefined) {
                    this.legendItem!.layer!.reload();
                } else {
                    // otherwise attempt to re-create layer with layer config
                    const layerConfig = this.layerConfigs.find(
                        (lc: RampLayerConfig) => lc.id === this.legendItem.id
                    );
                    if (layerConfig !== undefined) {
                        this.recreateLayer(layerConfig);
                    }
                }

                // reload legend item state back to placeholder state
                this.legendItem.reload();
                // catch error if reload fails
                this.legendItem.loadPromise.catch(() => {
                    console.error(
                        'Failed to reload layer - ',
                        this.legendItem.name
                    );
                });
            }
        },
        /**
         * Attempt to recreate and instantiate layer from config.
         */
        async recreateLayer(layerConfig: RampLayerConfig) {
            try {
                // try to re-create new layer based on layerConfig
                // same code to how layers are initialized when layer config array changes, expose this as layer API method?
                await new Promise<LayerInstance>(async (resolve, reject) => {
                    const layer = this.$iApi.geo.layer.createLayer(layerConfig);
                    const [initiateErr] = await to(layer!.initiate());

                    if (initiateErr) {
                        reject(initiateErr);
                    } else {
                        this.$iApi.geo.map.addLayer(layer!);
                    }

                    resolve(layer!);
                });
            } catch {
                return;
            }
        }
    }
});
</script>

<style lang="scss" scoped>
.legend-item-header {
    @apply px-5 py-5 pb-10 pr-0 flex items-center align-middle;
}
.legend-item-header:hover {
    @apply bg-gray-200 cursor-pointer;
}
.disabled {
    @apply text-gray-400 cursor-default;
}
</style>
