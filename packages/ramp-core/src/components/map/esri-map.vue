<template>
    <div
        name="esriMap"
        class="h-full"
        v-tippy="{
            flip: false,
            allowHTML: true,
            zIndex: 5,
            theme: 'ramp',
            trigger: 'manual',
            arrow: false,
            delay: 200,
            duration: [200, 200]
        }"
    ></div>
</template>

<script lang="ts">
import { ComputedRef } from 'vue';
import { Vue, Watch } from 'vue-property-decorator';
import { Get } from 'vuex-pathify';
import { get } from '@/store/pathify-helper';
import { RampLayerConfig, RampMapConfig } from '@/geo/api';
import { GlobalEvents, LayerInstance, MapAPI } from '@/api/internal';

import { ConfigStore } from '@/store/modules/config';
import { LayerStore } from '@/store/modules/layer';

import to from 'await-to-js';
import { MaptipStore } from '@/store/modules/maptip';

export default class EsriMapV extends Vue {
    mapConfig: ComputedRef<RampMapConfig> = get(ConfigStore.getMapConfig);
    // @Get(ConfigStore.getMapConfig) mapConfig!: RampMapConfig;

    layers: ComputedRef<LayerInstance[]> = get(LayerStore.layers);
    // @Get(LayerStore.layers) layers!: LayerInstance[];

    layerConfigs: ComputedRef<RampLayerConfig[]> = get(LayerStore.layerConfigs);
    // @Get(LayerStore.layerConfigs) layerConfigs!: RampLayerConfig[];

    maptipProperties: any = get(MaptipStore.maptipProperties);
    // @Get(MaptipStore.maptipProperties) maptipProperties!: any;
    maptipInstance: any = get(MaptipStore.maptipInstance);
    // @Get(MaptipStore.maptipInstance) maptipInstance!: any;

    map!: MapAPI; // TODO assuming we need this as a local property for vue binding. if we don't, remove it and just use $iApi.geo.map

    created() {
        // temporarily print out loaded layers to console for grid testing purposes.
        console.log(this.layers, this.mapConfig);
    }

    @Watch('maptipProperties')
    onMaptipChange() {
        if (this.maptipProperties) {
            // Calculate offset from mappoint
            let offsetX, offsetY: number;
            const originX: number = this.$iApi.geo.map.getPixelWidth() / 2;
            const originY: number = 0;
            const screenPointFromMapPoint = this.$iApi.geo.map.mapPointToScreenPoint(
                this.maptipProperties.mapPoint
            );
            offsetX = screenPointFromMapPoint.screenX - originX;
            offsetY = originY - screenPointFromMapPoint.screenY;
            this.maptipInstance.setProps({
                offset: `${offsetX}, ${offsetY}`
            });
            this.maptipInstance.show();
        } else {
            this.maptipInstance.hide();
        }
    }

    @Watch('layerConfigs')
    async onLayerConfigArrayChange(
        newValue: RampLayerConfig[],
        oldValue: RampLayerConfig[]
    ) {
        console.log('Saw layer config change', oldValue, newValue, !!this.map);

        // TODO we are getting frequent errors at startup; something reacts to layer array
        //      change before map exists. kicking out for now to make demos work.
        //      possibly this is evil in vue state land. if so, then someone figure out
        //      the root cause and fix that.
        if (!this.map || !newValue) {
            return;
        }

        const layers = await Promise.all(
            newValue
                .filter(lc => !oldValue.includes(lc))
                .map(layerConfig => {
                    return new Promise<LayerInstance | null>(async resolve => {
                        let defLoadProm: Promise<string>;

                        // check if we need to load the layer class
                        if (
                            this.$iApi.geo.layer.layerDefExists(
                                layerConfig.layerType
                            )
                        ) {
                            defLoadProm = Promise.resolve(
                                layerConfig.layerType
                            );
                        } else {
                            // if the definition is a custom number, the site host would have had to add the
                            // definition already. this block should only run for layer types that are bundled
                            // in the ramp core codebase.
                            defLoadProm = this.$iApi.geo.layer.addLayerDef(
                                layerConfig.layerType
                            );
                        }

                        // wait for definition to load, or ride the resolve if already loaded
                        await defLoadProm;
                        // create the layer instantiation
                        const [createErr, layer] = await to(
                            this.$iApi.geo.layer.createLayer(layerConfig)
                        );

                        if (createErr) {
                            console.error(createErr);
                            resolve(null);
                            return;
                        }

                        // TODO call the new layer load method.
                        //      might need to wait on that (think file layers that are making asynch calls prior to creating esri layer)
                        //      see if layers are going to expose an "esri layer exists" promise, leverage that if they do
                        const [initiateErr] = await to(layer!.initiate());
                        if (initiateErr) {
                            console.error(initiateErr);
                        } else {
                            this.map.addLayer(layer!);
                        }

                        // add layers to layer store
                        // TODO need to revisit https://github.com/ramp4-pcar4/ramp4-pcar4/discussions/328
                        //      as we may be causing lots of problems putting these objects in vuex store.
                        this.$iApi.$vApp.$store.set(LayerStore.addLayers, [
                            layer
                        ]);

                        resolve(layer!);
                    });
                })
        );

        // need to wait for all layers before reordering since esri reorder does
        // not allow reordering/inserting into arbitrary indices (i.e. no holes)
        layers
            .filter(Boolean)
            .forEach((layer: LayerInstance | null, index: number) => {
                this.$iApi.geo.map.reorder(layer!, oldValue.length + index);
            });
    }

    @Watch('mapConfig')
    onMapConfigChange(newValue: RampMapConfig, oldValue: RampMapConfig) {
        console.log('new map config change: ', newValue, this.mapConfig);
        if (newValue === oldValue) {
            return;
        }

        const mapViewElement: Element | null = this.$el;

        this.$iApi.geo.map.createMap(
            newValue,
            mapViewElement as HTMLDivElement
        );
        this.map = this.$iApi.geo.map;
        this.$iApi.event.emit(GlobalEvents.MAP_CREATED, this.$iApi.geo.map);

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
    }
}
</script>

<style lang="scss" scoped></style>
