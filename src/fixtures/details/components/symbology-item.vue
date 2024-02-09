<template>
    <button
        class="flex flex-grow justify-start items-center px-7 py-10 default-focus-style symbologyStackButton truncate"
        :class="selected ? 'detailsButtonSelected' : 'px-11'"
        @click.stop=""
        :content="layerName()"
        v-tippy="{ placement: 'right', sticky: true }"
    >
        <SymbologyStack
            class="symbStack w-32 h-32 mr-10"
            :layer="layer"
            :result="result"
        ></SymbologyStack>
        <div class="symbologyLayerName truncate">
            {{ layerName() }}
        </div>
    </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import SymbologyStack from './symbology-stack.vue';
import { useDetailsStore } from '../store';

import type { DetailsItemInstance } from '../store';

const detailsStore = useDetailsStore();
const detailProperties = computed<{ [id: string]: DetailsItemInstance }>(
    () => detailsStore.properties
);

const props = defineProps({
    layer: { type: Object as any, required: true },
    result: { type: Object as any, required: true },
    selected: { type: Boolean, required: true }
});

/**
 * Retrieve the layer name.
 */
const layerName = () => {
    const layer = props.layer;
    if (
        layer &&
        detailProperties.value[layer.id] &&
        detailProperties.value[layer.id].name
    ) {
        return detailProperties.value[layer.id].name;
    }
    return layer?.name ?? '';
};
</script>

<style lang="scss">
.symbStack {
    flex: 0 0 32px;
}
.detailsButtonSelected {
    border-left: 3px solid #576870;
    padding-left: 4px !important;
}
.symbologyStackButton {
    transition: background 0.3s;
}
.symbologyStackButton:hover {
    background: #eee;
}
.symbologyLayerName {
    flex: 1 1 auto;
    text-align: left;
}

.symbologyStackButton:focus {
    outline: 2px solid black;
    z-index: 1;
}
</style>
