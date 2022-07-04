<template>
    <div
        name="esriMap"
        class="h-full"
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
import { defineComponent, ref } from 'vue';

import type { RampLayerConfig, RampMapConfig } from '@/geo/api';
import type { LayerInstance } from '@/api/internal';

import { ConfigStore } from '@/store/modules/config';
import { LayerStore } from '@/store/modules/layer';

import to from 'await-to-js';
import { MaptipStore } from '@/store/modules/maptip';

export default defineComponent({
    name: 'EsriMapV',
    data() {
        return {
            mapConfig: this.get(ConfigStore.getMapConfig),
            layers: this.get(LayerStore.layers),
            layerConfigs: this.get(LayerStore.layerConfigs),
            maptipPoint: this.get(MaptipStore.maptipPoint),
            maptipInstance: this.get(MaptipStore.maptipInstance),
            maptipContent: this.get(MaptipStore.content),
            map: ref(), // TODO assuming we need this as a local property for vue binding. if we don't, remove it and just use $iApi.geo.map,
            watchers: [] as Array<Function>
        };
    },

    created() {
        // temporarily print out loaded layers to console for grid testing purposes.
        console.log(this.layers, this.mapConfig);

        // Set config watcher up here to be able to call it immediately on created
        // regularly `immediate` makes it get called during `created`
        // Keep track of the unwatch method returned by each watch so we can call it when the component is unmounted
        this.watchers.push(
            this.$watch('mapConfig', this.onMapConfigChange, {
                immediate: true
            })
        );
        this.watchers.push(
            this.$watch('layerConfigs', this.onLayerConfigArrayChange, {
                immediate: true
            })
        );
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
        async onLayerConfigArrayChange(
            newValue: RampLayerConfig[],
            oldValue: RampLayerConfig[]
        ) {
            console.log(
                'Saw layer config change',
                oldValue,
                newValue,
                !!this.map
            );

            // TODO we are getting frequent errors at startup; something reacts to layer array
            //      change before map exists. kicking out for now to make demos work.
            //      possibly this is evil in vue state land. if so, then someone figure out
            //      the root cause and fix that.

            if (!this.map || !newValue) {
                return;
            }

            const layers = await Promise.all(
                newValue
                    .filter(lc => !oldValue || !oldValue.includes(lc))
                    .map(layerConfig => {
                        return new Promise<LayerInstance | null>(
                            async resolve => {
                                // create the layer instantiation
                                const layer =
                                    this.$iApi.geo.layer.createLayer(
                                        layerConfig
                                    );

                                // TODO call the new layer load method.
                                //      might need to wait on that (think file layers that are making asynch calls prior to creating esri layer)
                                //      see if layers are going to expose an "esri layer exists" promise, leverage that if they do
                                const [initiateErr] = await to(
                                    layer!.initiate()
                                );
                                if (initiateErr) {
                                    console.error(initiateErr);
                                } else {
                                    this.map.addLayer(layer!);
                                }

                                resolve(layer!);
                            }
                        );
                    })
            );

            // need to wait for all layers before reordering since esri reorder does
            // not allow reordering/inserting into arbitrary indices (i.e. no holes)
            layers
                .filter(Boolean)
                .forEach((layer: LayerInstance | null, index: number) => {
                    // wait on layer load to check for valid state
                    layer?.isLayerLoaded().then(() => {
                        if (layer?.isValidState) {
                            this.$iApi.geo.map.reorder(
                                layer!,
                                oldValue ? oldValue.length + index : index
                            );
                        }
                    });
                });
        },
        onMapConfigChange(newValue: RampMapConfig) {
            console.log('new map config change: ', newValue, this.mapConfig);

            if (!newValue) {
                return;
            }

            const mapViewElement: Element | null = this.$el;

            this.$iApi.geo.map.createMap(
                newValue,
                mapViewElement as HTMLDivElement
            );
            this.map = this.$iApi.geo.map;

            // Hide hovertip on map creation
            //@ts-ignore
            mapViewElement._tippy.hide(0);
            this.$iApi.$vApp.$store.set(
                MaptipStore.setMaptipInstance,
                //@ts-ignore
                mapViewElement._tippy
            );

            // TODO see if we still need this. map config should trigger the array watcher due to the store.
            //      possibly layer config is processed before map config is done creating map?
            this.onLayerConfigArrayChange(this.layerConfigs.value, []);
        },
        mouseFocus() {
            // focused the map using the mouse, as opposed to keyboard controls
            this.$iApi.geo.map.setMouseFocus();
        }
    }
});
</script>

<style lang="scss" scoped></style>
