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
                    icon="visibility"
                    @toggled="updateVisibility"
                    :name="$t('settings.label.visibility')"
                    :config="{
                        value: visibilityModel,
                        disabled: !legendItem._controlAvailable('visibility')
                    }"
                />

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
                    @toggled="() => {}"
                    :config="{
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
                    :name="$t('settings.label.identify')"
                    icon="location"
                    @toggled="updateIdentify"
                    :config="{
                        value: identifyModel
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
            identifyModel: this.layer.identify,
            snapshotToggle: false,
            handlers: [] as Array<string>
        };
    },
    watch: {
        uid(newUid: string, oldUid: string) {
            if (newUid !== oldUid) {
                this.loadLayerProperties();
            }
        }
    },
    mounted() {
        this.loadLayerProperties();

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
                            this.loadLayerProperties();
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
        updateVisibility(val: boolean) {
            this.legendItem.toggleVisibility(val);
            this.visibilityModel = val;
        },

        // Update the layer opacity.
        updateOpacity(val: number) {
            this.legendItem.setOpacity(val / 100);
            this.opacityModel = val;
        },

        // Update the layer's toggle identify.
        updateIdentify(val: boolean) {
            this.legendItem.toggleIdentify(val);
            this.identifyModel = val;
        },

        // Toggle snapshot mode for the layer.
        toggleSnapshot() {
            this.snapshotToggle = !this.snapshotToggle;
            // TODO: make necessary changes to layer
        },

        // load property data from layer
        loadLayerProperties() {
            const oldUid = this.layer.uid;
            this.layer.isLayerLoaded().then(() => {
                if (oldUid === this.layer.uid) {
                    // ensure that it's still the same layer
                    this.visibilityModel = this.layer.visibility;
                    this.opacityModel = Math.round(this.layer.opacity * 100);
                    this.identifyModel = this.layer.identify;
                    this.layerName = this.layer.name;
                }
            });
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
