<template>
    <div class="h-full"></div>
</template>

<script lang="ts">
import { Vue, Watch, Component } from 'vue-property-decorator';
import { Get, Sync, Call } from 'vuex-pathify';
import { RampLayerConfig, RampMapConfig } from '@/geo/api';
import { GlobalEvents, LayerInstance, MapAPI } from '@/api/internal';
// import { window } from '@/main';

import { ConfigStore } from '@/store/modules/config';
import { LayerStore, layer } from '@/store/modules/layer';

@Component
export default class EsriMap extends Vue {
    @Get(ConfigStore.getMapConfig) mapConfig!: RampMapConfig;

    @Get(LayerStore.layers) layers!: LayerInstance[];

    @Get(LayerStore.layerConfigs) layerConfigs!: RampLayerConfig[];

    map!: MapAPI; // TODO assuming we need this as a local property for vue binding. if we don't, remove it and just use $iApi.geo.map

    created() {
        // temporarily print out loaded layers to console for grid testing purposes.
        console.log(this.layers);
    }

    @Watch('layerConfigs')
    onLayerConfigArrayChange(
        newValue: RampLayerConfig[],
        oldValue: RampLayerConfig[]
    ) {
        console.log('Saw layer config change', oldValue, newValue, !!this.map);

        // TODO we are getting frequent errors at startup; something reacts to layer array
        //      change before map exists. kicking out for now to make demos work.
        //      possibly this is evil in vue state land. if so, then someone figure out
        //      the root cause and fix that.
        if (!this.map) {
            return;
        }

        newValue
            .filter(lc => !oldValue.includes(lc))
            .forEach(layerConfig => {
                let defLoadProm: Promise<string>;

                // check if we need to load the layer class
                if (
                    this.$iApi.geo.layer.layerDefExists(layerConfig.layerType)
                ) {
                    defLoadProm = Promise.resolve(layerConfig.layerType);
                } else {
                    // if the definition is a custom number, the site host would have had to add the
                    // definition already. this block should only run for layer types that are bundled
                    // in the ramp core codebase.
                    defLoadProm = this.$iApi.geo.layer.addLayerDef(
                        layerConfig.layerType
                    );
                }

                // wait for definition to load, or ride the resolve if already loaded
                defLoadProm.then(() => {
                    // create the layer instantiation
                    this.$iApi.geo.layer
                        .createLayer(layerConfig)
                        .then(layer => {
                            // TODO call the new layer load method.
                            //      might need to wait on that (think file layers that are making asynch calls prior to creating esri layer)
                            //      see if layers are going to expose an "esri layer exists" promise, leverage that if they do
                            layer.initiate().then(() => {
                                // TODO do we need to care about map layer order?
                                this.map.addLayer(layer);
                            });

                            // add layer to layer store
                            // TODO need to revisit https://github.com/ramp4-pcar4/ramp4-pcar4/discussions/328
                            //      as we may be causing lots of problems putting these objects in vuex store.
                            this.$iApi.$vApp.$store.set(LayerStore.addLayers, [
                                layer
                            ]);
                        });
                });

                // a bit dangerous but ideally https://github.com/ramp4-pcar4/ramp4-pcar4/issues/126 and https://github.com/ramp4-pcar4/ramp4-pcar4/issues/173
                // will make this more seamless and not need to worry about having multiple listeners.
            });
    }

    @Watch('mapConfig')
    onMapConfigChange(newValue: RampMapConfig, oldValue: RampMapConfig) {
        if (newValue === oldValue) {
            return;
        }

        this.$iApi.geo.map.createMap(
            this.mapConfig,
            this.$el as HTMLDivElement
        );
        this.map = this.$iApi.geo.map;
        this.$iApi.event.emit(GlobalEvents.MAP_CREATED, this.$iApi.geo.map);

        // TODO see if we still need this. map config should trigger the array watcher due to the store.
        //      possibly layer config is processed before map config is done creating map?
        this.onLayerConfigArrayChange(this.layerConfigs, []);
    }
}
</script>

<style lang="scss" scoped></style>
