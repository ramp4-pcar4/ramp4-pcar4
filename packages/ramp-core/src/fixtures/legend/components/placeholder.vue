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
import { Vue, Options, Prop, Watch } from 'vue-property-decorator';
import { Get } from 'vuex-pathify';

import { LayerStore } from '@/store/modules/layer';
import { LayerInstance } from '@/api/internal';

import { LegendStore } from '../store';
import { LegendEntry, LegendGroup, LegendTypes } from '../store/legend-defs';

import LegendCheckboxV from './checkbox.vue';
import LegendSymbologyStackV from './symbology-stack.vue';
import { LegendSymbology } from '@/geo/api';

@Options({
    components: {
        checkbox: LegendCheckboxV,
        'symbology-stack': LegendSymbologyStackV
    }
})
export default class LegendPlaceholderV extends Vue {
    @Prop() legendItem!: LegendEntry;
    @Get(LayerStore.layers) layers!: LayerInstance[];

    layer: LayerInstance | undefined = undefined;

    @Watch('layers')
    layerAdded(newValue: LayerInstance[], oldValue: LayerInstance[]) {
        this.layer = newValue.find(
            (layer: LayerInstance) => layer.id === this.legendItem.id
        );

        if (this.layer !== undefined) {
            this.layer.isLayerLoaded().then(() => {
                // Wait for symbology to load too
                this.legendItem._layer = this.layer;
                this.legendItem._type = LegendTypes.Entry;
                this.legendItem._uid =
                    this.layer!.getLayerTree().findChildByIdx(
                        this.legendItem._layerIndex!
                    )?.uid || this.layer!.uid;
                if (this.legendItem.isDefault) {
                    this.$store.set(
                        LegendStore.updateDefaultEntry,
                        this.legendItem.id
                    );
                }
            });
        }
    }

    mounted() {
        // in case layer is added while placeholder component is dead
        this.layerAdded(this.layers, []);
    }
}
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
