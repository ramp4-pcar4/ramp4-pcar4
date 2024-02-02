<template>
    <div v-if="result.loaded" class="relative">
        <div :class="result.items.length === 0 ? 'opacity-50' : ''">
            <!-- Multiple icons to display -->
            <div v-if="stack.length > 1" class="relative">
                <!-- the :class line calculates margin-left for each of the 3 symbols, and gives a margin-top to symbols that arent the first -->
                <div
                    class="absolute"
                    :class="[
                        idx == 0 ? 'symbol-0' : idx == 1 ? 'left-3' : 'left-6'
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
            <div v-else-if="stack.length > 0" class="w-32 h-32">
                <div class="symbologyIcon">
                    <span
                        v-if="stack[0].svgcode"
                        v-html="stack[0].svgcode"
                    ></span>
                    <img
                        v-else-if="stack[0].imgUrl"
                        class="symbologyIcon w-full h-full"
                        :src="stack[0].imgUrl"
                    />
                </div>
            </div>
        </div>
        <!-- result counter -->
        <div
            class="badge z-50 rounded-full text-white absolute h-10 w-10 p-8 inline-flex items-center justify-center"
        >
            <div v-if="result.loaded" class="px-5">
                {{ result.items.length }}
            </div>
        </div>
    </div>
    <div v-else class="inline-flex justify-center items-center relative">
        <div class="symbologyIcon h-32 w-32">
            <div class="relative animate-spin spinner h-24 w-24"></div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { LayerInstance } from '@/api';

import { onMounted, type PropType, ref } from 'vue';

const props = defineProps({
    layer: { type: Object as PropType<LayerInstance>, required: true },
    result: { type: Object as any, required: true }
});

const stack = ref<any>([]); // ref instead of reactive to maintain reactivity after promise

onMounted(() => {
    stack.value = props.layer.legend;
});
</script>

<style lang="scss" scoped>
.badge {
    background-color: #576870;
    bottom: -5px;
    right: -5px;
    font-size: 8px;
}
</style>
