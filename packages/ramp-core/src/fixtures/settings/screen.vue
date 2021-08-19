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
                <span class="rv-subheader">{{ $t('settings.label.display') }}</span>

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
                <span class="rv-subheader">{{ $t('settings.label.data') }}</span>

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
                <span class="rv-subheader">{{ $t('settings.label.interval') }}</span>

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
import { Vue, Options, Prop } from 'vue-property-decorator';

import { PanelInstance } from '@/api';

import SettingsComponentV from './component.vue';
import { GlobalEvents, LayerInstance } from '@/api/internal';
import { LegendEntry } from '../legend/store/legend-defs';
import { LayerType } from '@/geo/api';

@Options({
    components: {
        'settings-component': SettingsComponentV
    }
})
export default class SettingsScreenV extends Vue {
    @Prop() panel!: PanelInstance;
    @Prop() layer!: LayerInstance;
    @Prop() uid!: string;
    @Prop() legendItem!: LegendEntry;

    // Models.
    layerName: string = '';
    visibilityModel: boolean = this.layer.getVisibility(this.uid);
    opacityModel: number = this.layer.getOpacity(this.uid) * 100;
    snapshotToggle: boolean = false;
    handlers: Array<string> = [];

    mounted() {
        // Listen for a layer load event. Some of these values may change when the layer fully loads.
        this.layer.isLayerLoaded().then(() => {
            this.visibilityModel = this.layer.getVisibility(this.uid);
            this.opacityModel = this.layer.getOpacity(this.uid) * 100;
            this.layerName = this.layer.getName(this.uid);
        });

        this.handlers.push(
            this.$iApi.event.on(GlobalEvents.LAYER_VISIBILITYCHANGE, (newVisibility: any) => {
                if (this.uid === newVisibility.uid) {
                    this.visibilityModel = newVisibility.visibility;
                }
            })
        );

        this.handlers.push(
            this.$iApi.event.on(GlobalEvents.LAYER_RELOAD_END, (reloadedLayer: LayerInstance) => {
                if (reloadedLayer.layerType === LayerType.MAPIMAGE) {
                    // Check if this.uid is a child of reloadedLayer
                    if (reloadedLayer.getLayerTree().findChildByUid(this.uid)) {
                        this.visibilityModel = true;
                    }
                } else if (this.uid === reloadedLayer.uid) {
                    this.visibilityModel = true;
                }
            })
        );
    }

    beforeDestroy() {
        // Remove all event handlers for this component
        this.handlers.forEach(handler => this.$iApi.event.off(handler));
    }

    // Update the layer visibility.
    updateVisibility(val: any) {
        this.legendItem.toggleVisibility(val.value);
        this.visibilityModel = val.value;
    }

    // Update the layer opacity.
    updateOpacity(val: number) {
        this.opacityModel = val;
        this.layer.setOpacity(this.opacityModel / 100, this.uid);
    }

    // Toggle snapshot mode for the layer.
    toggleSnapshot() {
        this.snapshotToggle = !this.snapshotToggle;
        // TODO: make necessary changes to layer
    }
}
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
