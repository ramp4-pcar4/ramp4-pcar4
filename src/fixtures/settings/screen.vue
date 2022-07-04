<template>
    <panel-screen :panel="panel">
        <template #header>
            {{
                layerExists
                    ? `${$t('settings.title')}: ${layerName}`
                    : $t('settings.title')
            }}
        </template>

        <template #content>
            <div v-if="layerExists">
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
                            disabled: !controlAvailable(
                                LayerControls.Visibility
                            )
                        }"
                    />

                    <div class="rv-settings-divider"></div>

                    <settings-component
                        class="rv-subsection"
                        type="slider"
                        :name="$t('settings.label.opacity')"
                        icon="opacity"
                        :config="{
                            onChange: updateOpacity,
                            value: opacityModel,
                            disabled: !controlAvailable(LayerControls.Opacity)
                        }"
                    ></settings-component>

                    <div class="rv-settings-divider"></div>

                    <!-- Revist this in #194 -->
                    <!-- <settings-component
                        class="rv-subsection"
                        type="toggle"
                        :name="$t('settings.label.boundingBox')"
                        icon="box"
                        @toggled="() => {}"
                        :config="{
                            value: false,
                            disabled: !controlAvailable(
                                LayerControls.Boundingbox
                            )
                        }"
                    ></settings-component>
                    <div class="rv-settings-divider"></div> -->
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
                            value: identifyModel,
                            disabled: !controlAvailable(LayerControls.Identify)
                        }"
                    ></settings-component>

                    <div class="rv-settings-divider"></div>
                </div>

                <!-- TODO: revisit issue #1019 after v1.0.0 -->
                <!-- <div class="flex flex-col justify-center">
                <span class="rv-subheader">{{
                    $t('settings.label.interval')
                }}</span>

                <div class="rv-settings-divider"></div>

                <settings-component
                    class="rv-subsection"
                    type="input"
                    :name="$t('settings.label.refreshHint')"
                    icon="location"
                    :config="{
                        onChange: () => {},
                        value: 0,
                        disabled: !controlAvailable('refresh')
                    }"
                ></settings-component>

                <div class="rv-settings-divider"></div>
            </div> -->
            </div>
            <div v-else class="p-5">
                <span>{{ $t('settings.label.no.layer') }}</span>
            </div>
        </template>
    </panel-screen>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import type { PanelInstance } from '@/api';
import { GlobalEvents, LayerInstance } from '@/api/internal';
import { LayerControls } from '@/geo/api';
import type { LegendEntry } from '../legend/store/legend-defs';
import type { SettingsAPI } from './api/settings';
import SettingsComponentV from './component.vue';

export default defineComponent({
    name: 'SettingsScreenV',
    props: {
        panel: { type: Object as PropType<PanelInstance>, required: true },
        layer: { type: Object as PropType<LayerInstance>, required: true },
        legendItem: { type: Object as PropType<LegendEntry>, required: true }
    },
    components: {
        'settings-component': SettingsComponentV
    },
    data() {
        return {
            LayerControls,
            fixture: {},
            layerName: '',
            uid: this.layer.uid,
            visibilityModel: this.layer.visibility,
            opacityModel: this.layer.opacity * 100,
            identifyModel: this.layer.identify,
            snapshotToggle: false,
            layerExists: false, // tracks whether the layer still exists
            handlers: [] as Array<string>,
            watchers: [] as Array<Function>
        };
    },

    created() {
        this.fixture = this.$iApi.fixture.get('settings');

        this.layerExists = this.layer !== undefined && !this.layer!.isRemoved;

        this.watchers.push(
            this.$watch('layer.uid', (newUid: string, oldUid: string) => {
                if (newUid !== oldUid) {
                    this.loadLayerProperties();
                }
            })
        );
    },

    mounted() {
        this.loadLayerProperties();

        this.handlers.push(
            this.$iApi.event.on(
                GlobalEvents.LAYER_VISIBILITYCHANGE,
                (newVisibility: any) => {
                    if (this.uid === newVisibility.layer.uid) {
                        this.visibilityModel = newVisibility.visibility;
                    }
                }
            )
        );

        this.handlers.push(
            this.$iApi.event.on(
                GlobalEvents.LAYER_OPACITYCHANGE,
                (newOpacity: any) => {
                    if (this.uid === newOpacity.layer.uid) {
                        this.opacityModel = Math.round(
                            newOpacity.opacity * 100
                        );
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

        this.handlers.push(
            this.$iApi.event.on(
                GlobalEvents.LAYER_REMOVE,
                (removedLayer: LayerInstance) => {
                    if (this.uid === removedLayer.uid) {
                        this.panel.close();
                    }
                }
            )
        );
    },
    beforeUnmount() {
        // Remove all event handlers and watchers for this component
        this.handlers.forEach(handler => this.$iApi.event.off(handler));
        this.watchers.forEach(unwatch => unwatch());
    },
    methods: {
        /**
         * Check if control is enabled on this layer's settings config.
         * Default to layer controls if settings config is not defined.
         */
        controlAvailable(control: LayerControls): any {
            if (!this.fixture) {
                console.warn(
                    'Settings panel cannot check for layer control because it could not find settings fixture api'
                );
                return false;
            }
            const settingsConfig: any = (
                this.fixture as SettingsAPI
            )?.getLayerFixtureConfig(this.layer.id);

            // check disabled controls first
            if (settingsConfig?.disabledControls?.includes(control)) {
                return false;
            }
            // check controls list and default to layer controls if not defined
            return (
                settingsConfig?.controls?.includes(control) ??
                this.layer.controlAvailable(control)
            );
        },

        /**
         * Update the layer visibility.
         */
        updateVisibility(val: boolean) {
            // force update the visibility
            this.legendItem.toggleVisibility(val, true, true);
            this.visibilityModel = val;
        },

        /**
         * Update the layer opacity.
         */
        updateOpacity(val: number) {
            this.legendItem.setOpacity(val / 100);
            this.opacityModel = val;
        },

        /**
         * Update the layer's toggle identify.
         */
        updateIdentify(val: boolean) {
            this.legendItem.toggleIdentify(val);
            this.identifyModel = val;
        },

        /**
         * Toggle snapshot mode for the layer.
         */
        toggleSnapshot() {
            this.snapshotToggle = !this.snapshotToggle;
            // TODO: make necessary changes to layer
        },

        /**
         * Load property data from layer.
         */
        loadLayerProperties() {
            this.layerExists =
                this.layer !== undefined && !this.layer!.isRemoved;

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
