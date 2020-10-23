<template>
    <div v-if="!visible">
        <!-- Multiple icons to display -->
        <div v-if="stack.length > 1" class="-ml-2">
            <!-- the :class line calculates margin-left for each of the 3 symbols, and gives a margin-top to symbols that arent the first -->
            <div
                class="relative"
                :class="['ml-' + idx * 3, idx > 0 ? '-mt-32' : '', 'symbol-' + idx]"
                :style="{ 'z-index': 3 - idx }"
                v-for="(item, idx) in stack.slice(0, 3).reverse()"
                :key="idx"
            >
                <span class="symbologyIcon w-28 h-28" v-html="stack[idx].svgcode"></span>
            </div>
        </div>

        <!-- Only one icon to display. -->
        <div v-else-if="stack.length > 0" class="symbologyIcon w-32 h-32">
            <span v-html="stack[0].svgcode"></span>
        </div>
    </div>

    <!-- If the symbology stack is already open, display an X in the place of the stack. -->
    <div v-else class="h-32 w-32 inline-flex justify-center items-center">
        <svg class="fill-current w-16 h-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512">
            <path
                d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
            />
        </svg>
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

<style lang="scss" scoped>
.symbologyIcon {
    @apply bg-white inline-flex justify-center items-center overflow-hidden;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
}

.symbol-2 {
    transition-property: margin-left margin-top;
    transition-duration: 0.2s;

    :hover > & {
        @apply ml-8;
        margin-top: -32px;
        margin-bottom: -2px;
        margin-right: -2px;
    }
}
</style>
