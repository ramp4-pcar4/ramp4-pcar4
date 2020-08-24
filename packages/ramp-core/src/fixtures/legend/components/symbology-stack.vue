<template>
    <div v-if="!visible">
        <!-- Multiple icons to display -->
        <div v-if="stack.length > 1">
            <div :class="'symbol-' + idx" v-for="(item, idx) in stack" :key="idx">
                <span class="symbologyIcon" v-if="idx < 3" v-html="stack[2 - idx].svgcode"></span>
            </div>
        </div>

        <!-- Only one icon to display. -->
        <div v-else-if="stack.length > 0">
            <div class="symbologyIcon">
                <span v-html="stack[0].svgcode"></span>
            </div>
        </div>
    </div>
    <div v-else>
        <!-- If the symbology stack is already open, display an X in the place of the stack. -->
        <div class="closeSymbologyIcon">
            <close />
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Get, Sync, Call } from 'vuex-pathify';

import { LegendItem } from '../store/legend-defs';
import BaseLayer from 'ramp-geoapi/dist/layer/BaseLayer';

@Component
export default class SymbologyStack extends Vue {
    @Prop() visible!: boolean;
    @Prop() layer!: BaseLayer;

    stack: any = [];

    mounted() {
        // When the layer is loaded, get the icon.
        if (this.layer.state !== 'rv-loaded') {
            this.layer.stateChanged.listen(() => {
                this.getSymbologyStack();
            });
        } else {
            this.getSymbologyStack();
        }
    }

    /**
     * Retrieves the symbology stack. Waits on all symbols in the stack to finish loading before displaying.
     */
    getSymbologyStack(): any {
        Promise.all(this.layer.getLegend().map((l: any) => l.drawPromise)).then((r: any) => {
            this.stack = this.layer.getLegend();
        });
    }
}
</script>

<style lang="scss">
.symbologyIcon {
    @apply bg-white w-32 h-32 inline-flex justify-center items-center mr-15;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
}
.closeSymbologyIcon {
    @apply w-32 h-36 inline-flex justify-center items-center mr-15;
}
.symbol-1 {
    @apply ml-3;
    margin-top: -34px;
}
.symbol-2 {
    @apply ml-6;
    margin-top: -34px;
}
</style>
