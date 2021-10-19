<template>
    <div class="legend-item">
        <div
            class="legend-item-header"
            v-focus-item="'show-truncate'"
            truncate-trigger
        >
            <!-- smiley face. very important that we migrate this -->
            <div class="flex pr-10">
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
                        d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-2.5c2.33 0 4.32-1.45 5.12-3.5h-1.67c-.69 1.19-1.97 2-3.45 2s-2.75-.81-3.45-2H6.88c.8 2.05 2.79 3.5 5.12 3.5z"
                    />
                </svg>
            </div>

            <!-- name -->
            <div v-truncate="{ externalTrigger: true }">
                <span>{{ legendItem.name }}</span>
            </div>
        </div>

        <div class="flex-1 progress-line"></div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { get } from '@/store/pathify-helper';
import { LayerStore } from '@/store/modules/layer';
import { LayerInstance } from '@/api/internal';
import { LegendStore } from '../store';
import { LegendEntry } from '../store/legend-defs';

export default defineComponent({
    name: 'LegendPlaceholderV',
    props: {
        legendItem: { type: Object as PropType<LegendEntry>, required: true }
    },
    data() {
        return {
            layers: get(LayerStore.layers)
        };
    },
    mounted() {
        this.layerAdded(<LayerInstance[]>(<unknown>this.layers));
    },
    watch: {
        layers(newValue: LayerInstance[], _: LayerInstance[]) {
            this.layerAdded(newValue);
        }
    },
    methods: {
        /**
         * Add a new legend entry to the legend
         */
        layerAdded(newLayers: LayerInstance[]) {
            if (newLayers === undefined) {
                return;
            }
            let layer: LayerInstance | undefined = this.$iApi.$vApp.$store.get(
                LayerStore.getLayerById,
                this.legendItem.id
            );

            if (layer !== undefined) {
                layer?.isLayerLoaded().then(() => {
                    this.legendItem.setEntry(layer!);
                    if (this.legendItem.isDefault) {
                        this.$store.set(
                            LegendStore.updateDefaultEntry,
                            this.legendItem.id
                        );
                    }
                });
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

/* I got this loading bar code from http://dev.gojko.net/web/2015/09/19/material-design-progress-pure-css.html */
/* Feel free to replace it with our own at some point */
.progress-line,
.progress-line:before {
    height: 3px;
    width: 100%;
    margin: 0;
}
.progress-line {
    background-color: #b3d4fc;
    display: -webkit-flex;
    display: flex;
}
.progress-line:before {
    background-color: #3f51b5;
    content: '';
    -webkit-animation: running-progress 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
    animation: running-progress 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
}
@-webkit-keyframes running-progress {
    0% {
        margin-left: 0px;
        margin-right: 100%;
    }
    50% {
        margin-left: 25%;
        margin-right: 0%;
    }
    100% {
        margin-left: 100%;
        margin-right: 0;
    }
}
@keyframes running-progress {
    0% {
        margin-left: 0px;
        margin-right: 100%;
    }
    50% {
        margin-left: 25%;
        margin-right: 0%;
    }
    100% {
        margin-left: 100%;
        margin-right: 0;
    }
}
</style>
