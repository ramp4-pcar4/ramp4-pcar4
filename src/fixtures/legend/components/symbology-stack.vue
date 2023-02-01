<template>
    <div v-if="!visible">
        <!-- Multiple icons to display -->
        <div v-if="stack.length > 1" class="relative left-3">
            <!-- the :class line calculates margin-left for each of the 3 symbols, and gives a margin-top to symbols that arent the first -->
            <div
                class="absolute"
                :class="[
                    idx == 0
                        ? 'symbol-0'
                        : idx == 1
                        ? 'left-3 symbol-1'
                        : 'left-6 symbol-2'
                ]"
                :style="{ 'z-index': 3 - idx }"
                v-for="(item, idx) in stack.slice(0, 3).reverse()"
                :key="idx"
            >
                <span
                    v-if="stack[idx].svgcode"
                    class="symbologyIcon w-28 h-28"
                    v-html="stack[idx].svgcode"
                ></span>
                <img
                    v-else-if="stack[idx].imgUrl"
                    class="symbologyIcon w-28 h-28"
                    :src="stack[idx].imgUrl"
                />
            </div>
        </div>

        <!-- Only one icon to display. -->
        <div v-else-if="stack.length > 0" class="symbologyIcon w-32 h-32">
            <span v-if="stack[0].svgcode" v-html="stack[0].svgcode"></span>
            <img
                v-else-if="stack[0].imgUrl"
                class="symbologyIcon w-full h-full"
                :src="stack[0].imgUrl"
            />
        </div>
    </div>

    <!-- If the symbology stack is already open, display an X in the place of the stack. -->
    <div v-else class="h-32 w-32 inline-flex justify-center items-center">
        <svg
            class="fill-current w-16 h-16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 352 512"
        >
            <path
                d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
            />
        </svg>
    </div>
</template>

<script setup lang="ts">
import type { LegendSymbology } from '@/geo/api';
import { toRaw, onMounted, type PropType, ref } from 'vue';
import type { LayerItem } from '../store/layer-item';

const props = defineProps({
    visible: { type: Boolean, required: true },
    legendItem: { type: Object as PropType<LayerItem>, required: true }
});

const stack = ref<Array<LegendSymbology>>([]); // ref instead of reactive to maintain reactivity after promise

onMounted(() => {
    // wait for the layer item to load
    props.legendItem.loadPromise.then(() => {
        if (props.legendItem.layerUid !== undefined) {
            // retrieve the symbology stack
            // waits on all symbols in the stack to finish loading before displaying.
            Promise.all(
                toRaw(props.legendItem.symbologyStack).map(
                    (l: any) => l.drawPromise
                )
            ).then(() => {
                stack.value = toRaw(props.legendItem).symbologyStack;
            });
        }
    });
});
</script>

<style lang="scss" scoped>
.symbol-0 {
    :hover > & {
        transform: rotate(-10deg);
        transform-origin: bottom center;
    }
}
.symbol-2 {
    :hover > & {
        transform: rotate(10deg);
        transform-origin: bottom center;
    }
}
.ramp-app.animation-enabled .symbol-0 {
    transition-duration: 0.2s;
}
.ramp-app.animation-enabled .symbol-2 {
    transition-duration: 0.2s;
}
</style>
