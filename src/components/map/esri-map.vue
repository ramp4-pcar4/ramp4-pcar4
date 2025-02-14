<template>
    <div
        name="esriMap"
        id="esriMap"
        class="h-full overflow-hidden"
        v-tippy="{
            allowHTML: true,
            zIndex: 150,
            theme: 'ramp4',
            trigger: 'manual',
            appendTo: 'parent',
            arrow: false,
            delay: 200,
            duration: [200, 200]
        }"
        @mousedown="mouseFocus"
        @touchstart="isTouch = true"
        @touchend="isTouch = false"
        @keydown.up.down.left.right.prevent
    ></div>
</template>

<script setup lang="ts">
import { computed, inject, onBeforeUnmount, reactive, watch, ref } from 'vue';
import { useMaptipStore } from '@/stores/maptip';
import type { InstanceAPI } from '@/api';
import type { Point } from '@/geo/api';

const maptipStore = useMaptipStore();
const iApi = inject('iApi') as InstanceAPI;

const maptipPoint = computed(() => maptipStore.maptipPoint);
const maptipInstance = computed(() => maptipStore.maptipInstance);
const maptipContent = computed(() => maptipStore.content);
const watchers = reactive<Array<() => void>>([]);

const isTouch = ref(false);

watchers.push(
    watch(maptipPoint, () => {
        if (maptipPoint.value) {
            // Calculate offset from mappoint
            const originX: number = iApi.geo.map.getPixelWidth() / 2;
            const originY = 0;
            const screenPointFromMapPoint = iApi.geo.map.mapPointToScreenPoint(maptipPoint.value! as Point);
            const offsetX = screenPointFromMapPoint.screenX - originX;
            const offsetY = originY - screenPointFromMapPoint.screenY;
            maptipInstance.value.setProps({
                offset: isTouch.value ? [offsetX, offsetY + 25] : [offsetX, offsetY]
            });
            if (maptipContent.value && maptipContent.value !== '') {
                maptipInstance.value.show();
            }
        } else {
            maptipInstance.value.hide();
        }
    })
);

watchers.push(
    watch(maptipContent, (maptipContent: any) => {
        if (maptipContent && maptipContent !== '' && maptipPoint) {
            maptipInstance.value.setContent(maptipContent);
            maptipInstance.value.show();
        } else {
            maptipInstance.value.hide();
        }
    })
);

onBeforeUnmount(() => {
    watchers.forEach(unwatch => unwatch());
});

const mouseFocus = () => {
    // focused the map using the mouse, as opposed to keyboard controls
    iApi.geo.map.setMouseFocus();
};
</script>

<style lang="scss">
.esri-view-surface {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
</style>
