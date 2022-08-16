<template>
    <div
        name="esriMap"
        id="esriMap"
        class="h-full overflow-hidden"
        v-tippy="{
            allowHTML: true,
            zIndex: 5,
            theme: 'ramp4',
            trigger: 'manual',
            appendTo: 'parent',
            arrow: false,
            delay: 200,
            duration: [200, 200]
        }"
        @mousedown="mouseFocus"
        @keydown.up.down.left.right.prevent
    ></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { MaptipStore } from '@/store/modules/maptip';

export default defineComponent({
    name: 'EsriMapV',
    data() {
        return {
            maptipPoint: this.get(MaptipStore.maptipPoint),
            maptipInstance: this.get(MaptipStore.maptipInstance),
            maptipContent: this.get(MaptipStore.content),
            watchers: [] as Array<Function>
        };
    },

    created() {
        // Set config watcher up here to be able to call it immediately on created
        // regularly `immediate` makes it get called during `created`
        // Keep track of the unwatch method returned by each watch so we can call it when the component is unmounted
        this.watchers.push(
            this.$watch('maptipPoint', (maptipPoint: any) => {
                if (this.maptipPoint) {
                    // Calculate offset from mappoint
                    let offsetX, offsetY: number;
                    const originX: number =
                        this.$iApi.geo.map.getPixelWidth() / 2;
                    const originY = 0;
                    const screenPointFromMapPoint =
                        this.$iApi.geo.map.mapPointToScreenPoint(
                            this.maptipPoint
                        );
                    offsetX = screenPointFromMapPoint.screenX - originX;
                    offsetY = originY - screenPointFromMapPoint.screenY;
                    this.maptipInstance.setProps({
                        offset: [offsetX, offsetY]
                    });
                    if (this.maptipContent && this.maptipContent !== '') {
                        this.maptipInstance.show();
                    }
                } else {
                    this.maptipInstance.hide();
                }
            })
        );
        this.watchers.push(
            this.$watch('maptipContent', (maptipContent: any) => {
                if (
                    this.maptipContent &&
                    this.maptipContent !== '' &&
                    this.maptipPoint
                ) {
                    this.maptipInstance.setContent(this.maptipContent);
                    this.maptipInstance.show();
                } else {
                    this.maptipInstance.hide();
                }
            })
        );
    },

    beforeUnmount() {
        this.watchers.forEach(unwatch => unwatch());
    },

    methods: {
        mouseFocus() {
            // focused the map using the mouse, as opposed to keyboard controls
            this.$iApi.geo.map.setMouseFocus();
        }
    }
});
</script>

<style lang="scss" scoped></style>
