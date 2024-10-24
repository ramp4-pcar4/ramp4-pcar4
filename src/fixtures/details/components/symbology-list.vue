<template>
    <div
        class="symbology-list absolute overflow-hidden z-50 p-0 w-48 bg-white text-sm inline-flex flex-col"
        :class="{ 'symbology-list-expanded': expanded }"
        @mouseover="handleMouseOver"
        @mouseleave="handleMouseLeave"
        @focus="handleItemFocus"
        @blur.self="handleItemBlur"
        v-focus-list
        :content="t('details.layers.results.list.tooltip')"
        v-tippy="{
            trigger: 'manual',
            placement: 'top-start'
        }"
        ref="el"
    >
        <div class="flex justify-start relative" v-for="(item, idx) in props.results" :key="idx">
            <SymbologyItem
                :key="item.uid"
                :layer="getLayerInfo(item.uid)"
                :result="item"
                :selected="item.uid === selectedLayer"
                @click="handleItemClick(item.uid)"
                v-focus-item
            ></SymbologyItem>
        </div>
    </div>
</template>

<script setup lang="ts">
// this renders the list of symbology items that run along the left side

import { ref, watch, onBeforeMount, onBeforeUnmount, onMounted } from 'vue';
import { useLayerStore } from '@/stores/layer';

import type { LayerInstance } from '@/api';
import { useI18n } from 'vue-i18n';

import SymbologyItem from './symbology-item.vue';

const { t } = useI18n();
const layerStore = useLayerStore();

const el = ref<Element>();
const blurEvent = () => {
    (el.value as any)._tippy.hide();
};
const keyupEvent = (e: Event) => {
    const evt = e as KeyboardEvent;
    if (evt.key === 'Tab' && el.value?.matches(':focus')) {
        (el.value as any)._tippy.show();
    }
};

const emit = defineEmits(['selection-changed']);
const props = defineProps({
    results: { type: Object as any, required: true },
    selected: { type: String, required: true }
});

// Keep track of the currently selected layer index.
const selectedLayer = ref<string>('');
const watchers = ref<Array<Function>>([]);

// Expanded is true if the sidebar is expanded. Hovering is true only if the cursor is currently over the sidebar.
const expanded = ref<Boolean>(false);
const hovering = ref<Boolean>(false);

/**
 * Return the LayerInstance that cooresponds with the provided UID.
 * @param uid the UID of the layer to look up.
 */
const getLayerInfo = (uid: string) => {
    let layer: LayerInstance | undefined = layerStore.getLayerByUid(uid);
    return layer;
};

/**
 * Handles when a user clicks on an item.
 * @param uid the UID of the clicked layer
 */
const handleItemClick = (uid: string) => {
    selectedLayer.value = uid;
    emit('selection-changed', uid);

    // Close the sidebar when an item is clicked.
    expanded.value = false;
};

/**
 * Handles when a user moves their mouse over the sidebar.
 */
const handleMouseOver = () => {
    if (!hovering.value) {
        // If not already hovering, delay expansion of the sidebar for 500ms.
        setTimeout(() => {
            expanded.value = hovering.value;
        }, 500);
    }

    hovering.value = true;
};

/**
 * Handles when the user moves their mouse away from the sidebar.
 */
const handleMouseLeave = () => {
    expanded.value = hovering.value = false;
};

/**
 * Activates when an item in the list is focused.
 */
const handleItemFocus = () => {
    if (!hovering.value) {
        expanded.value = true;
    }
    hovering.value = true;
};

/**
 * Activates when an item in the list is unfocused.
 */
const handleItemBlur = () => {
    expanded.value = hovering.value = false;
};

onBeforeMount(() => {
    // keep track of this watcher because it needs to be removed when this component is unmounted
    watchers.value.push(
        watch(props, () => {
            // Something has changed, so re-fetch the icon.
            selectedLayer.value = props.selected;
        })
    );
});

onMounted(() => {
    el.value?.addEventListener('blur', blurEvent);
    el.value?.addEventListener('keyup', keyupEvent);
});

onBeforeUnmount(() => {
    watchers.value.forEach(unwatch => unwatch());

    el.value?.removeEventListener('blur', blurEvent);
    el.value?.removeEventListener('keyup', keyupEvent);
});
</script>

<style lang="scss">
.symbology-list {
    /** fun magic to get the bar to take up the entire height */
    height: auto;
    top: 0px;
    bottom: -8px;

    border-right: 1px solid #eee;
    box-shadow: -1px 0px 5px rgba(0, 0, 0, 0.5);

    margin: -8px;
    margin-bottom: 0px;

    transition: all 0.3s cubic-bezier(0.35, 0, 0.25, 1);
}
.symbology-list-expanded {
    width: 70% !important;
    overflow-y: auto !important;
}
</style>
