<template>
    <div class="legend-item">
        <div class="legend-item-header">
            <!-- smiley face. very important that we migrate this -->
            <div class="flex pr-10">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="24px" height="24px">
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
            <div class="truncate">
                <span>{{ legendItem.name }}</span>
            </div>
        </div>

        <div class="flex-1 progress-line"></div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import { Get, Sync, Call } from 'vuex-pathify';

import { LayerStore, layer } from '@/store/modules/layer';
import BaseLayer from 'ramp-geoapi/dist/layer/BaseLayer';

import { LegendStore } from '../store';
import { LegendEntry, LegendTypes } from '../store/legend-defs';

import CheckboxV from './checkbox.vue';
import SymbologyStack from './symbology-stack.vue';

@Component({
    components: {
        checkbox: CheckboxV,
        'symbology-stack': SymbologyStack
    }
})
export default class LegendPlaceholderV extends Vue {
    @Prop() legendItem!: LegendEntry;
    @Prop() props!: any;
    @Get(LayerStore.layers) layers!: BaseLayer[];

    layer: BaseLayer | undefined = undefined;

    @Watch('layers')
    layerAdded(newValue: BaseLayer[], oldValue: BaseLayer[]) {
        this.layer = newValue.find((layer: BaseLayer) => layer.id === this.legendItem.id);

        if (this.layer !== undefined) {
            this.layer.isLayerLoaded().then(r => {
                this.legendItem._layer = this.layer;
                this.legendItem._type = LegendTypes.Entry;
                this.legendItem._uid = this.layer!.getLayerTree().findChildByIdx(this.legendItem._layerIndex!)?.uid || this.layer!.uid;
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
