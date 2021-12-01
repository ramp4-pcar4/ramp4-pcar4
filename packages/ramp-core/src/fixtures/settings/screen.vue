<template>
    <panel-screen>
        <template #header>
            {{ $t('settings.title') }}:
            {{ layerName || $t('settings.layer.loading') }}
        </template>

        <template #controls>
            <minimize @click="panel.minimize()" />
            <close @click="panel.close()" />
        </template>

        <template #content>
            <div class="flex flex-col justify-center">
                <span class="rv-subheader">{{
                    $t('settings.label.display')
                }}</span>

                <div class="rv-settings-divider"></div>

                <settings-component
                    class="rv-subsection"
                    type="toggle"
                    :name="$t('settings.label.visibility')"
                    icon="visibility"
                    :config="{
                        onChange: updateVisibility,
                        value: visibilityModel
                    }"
                ></settings-component>

                <div class="rv-settings-divider"></div>

                <settings-component
                    class="rv-subsection"
                    type="slider"
                    :name="$t('settings.label.opacity')"
                    icon="opacity"
                    :config="{ onChange: updateOpacity, value: opacityModel }"
                ></settings-component>

                <div class="rv-settings-divider"></div>

                <settings-component
                    class="rv-subsection"
                    type="toggle"
                    :name="$t('settings.label.boundingBox')"
                    icon="box"
                    :config="{
                        onChange: () => {},
                        value: false,
                        disabled: true
                    }"
                ></settings-component>

                <div class="rv-settings-divider"></div>
            </div>

            <div class="flex flex-col justify-center">
                <span class="rv-subheader">{{
                    $t('settings.label.data')
                }}</span>

                <div class="rv-settings-divider"></div>

                <settings-component
                    class="rv-subsection"
                    type="toggle"
                    :name="$t('settings.label.query')"
                    icon="location"
                    :config="{
                        onChange: () => {},
                        value: false,
                        disabled: true
                    }"
                ></settings-component>

                <div class="rv-settings-divider"></div>
            </div>

            <div class="flex flex-col justify-center">
                <span class="rv-subheader">{{
                    $t('settings.label.interval')
                }}</span>

                <div class="rv-settings-divider"></div>

                <settings-component
                    class="rv-subsection"
                    type="input"
                    :name="$t('settings.label.refreshHint')"
                    icon="location"
                    :config="{ onChange: () => {}, value: 0 }"
                ></settings-component>

                <div class="rv-settings-divider"></div>
            </div>
        </template>
    </panel-screen>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { PanelInstance } from '@/api';
import SettingsComponentV from './component.vue';
import { GlobalEvents, LayerInstance } from '@/api/internal';
import { LegendEntry } from '../legend/store/legend-defs';
import { LayerType } from '@/geo/api';

export default defineComponent({
    name: 'SettingsScreenV',
    props: {
        panel: { type: Object as PropType<PanelInstance>, required: true },
        layer: { type: Object as PropType<LayerInstance>, required: true },
        uid: { type: String, required: true },
        legendItem: { type: Object as PropType<LegendEntry>, required: true }
    },
    components: {
        'settings-component': SettingsComponentV
    },
    data() {
        return {
            layerName: '',
            visibilityModel: this.layer.visibility,
            opacityModel: this.layer.opacity * 100,
            snapshotToggle: false,
            handlers: [] as Array<string>
        };
    },
    mounted() {
        // Listen for a layer load event. Some of these values may change when the layer fully loads.
        this.layer.isLayerLoaded().then(() => {
            this.visibilityModel = this.layer.visibility;
            this.opacityModel = this.layer.opacity * 100;
            this.layerName = this.layer.name;
        });

        this.handlers.push(
            this.$iApi.event.on(
                GlobalEvents.LAYER_VISIBILITYCHANGE,
                (newVisibility: any) => {
                    if (this.uid === newVisibility.uid) {
                        this.visibilityModel = newVisibility.visibility;
                    }
                }
            )
        );

        this.handlers.push(
            this.$iApi.event.on(
                GlobalEvents.LAYER_RELOAD_END,
                (reloadedLayer: LayerInstance) => {
                    reloadedLayer.isLayerLoaded().then(() => {
                        if (this.uid === reloadedLayer.uid) {
                            this.visibilityModel = this.layer.visibility;
                            this.opacityModel = this.layer.opacity * 100;
                        }
                    });
                }
            )
        );
    },
    beforeUnmount() {
        // Remove all event handlers for this component
        this.handlers.forEach(handler => this.$iApi.event.off(handler));
    },
    methods: {
        // Update the layer visibility.
        updateVisibility(val: any) {
            this.legendItem.toggleVisibility(val.value);
            this.visibilityModel = val.value;
        },

        // Update the layer opacity.
        updateOpacity(val: number) {
            this.legendItem.setOpacity(this.opacityModel / 100);
            this.opacityModel = val;
        },

        // Toggle snapshot mode for the layer.
        toggleSnapshot() {
            this.snapshotToggle = !this.snapshotToggle;
            // TODO: make necessary changes to layer
        }
    }
});
</script>

<style lang="scss" scoped>
.rv-subsection {
    @apply p-8;
}
.rv-subheader {
    @apply p-8 pt-15 text-lg text-gray-600;
}
.rv-settings-divider {
    @apply block;
    border-bottom: 1px solid #eee;
    margin: 0 -8px;
}
</style>
