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
import { Vue, Component, Prop } from 'vue-property-decorator';

import { PanelInstance } from '@/api';

import SettingsComponentV from './component.vue';
import { LayerInstance } from '@/api/internal';

@Component({
    components: {
        'settings-component': SettingsComponentV
    }
})
export default class SettingsScreenV extends Vue {
    @Prop() panel!: PanelInstance;
    @Prop() layer!: LayerInstance;
    @Prop() uid!: string;

    // Models.
    visibilityModel: boolean = this.layer.getVisibility(this.uid);
    opacityModel: number = this.layer.getOpacity(this.uid) * 100;
    snapshotToggle: boolean = false;

    mounted() {
        // Listen for a layer load event. Some of these values may change when the layer fully loads.
        this.layer.isLayerLoaded().then(() => {
            this.visibilityModel = this.layer.getVisibility(this.uid);
            this.opacityModel = this.layer.getOpacity(this.uid) * 100;
        });
    }

    // Update the layer visibility.
    updateVisibility(val: any) {
        this.visibilityModel = val.value;
        this.layer.setVisibility(this.visibilityModel, this.uid);
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

    get layerName() {
        if (this.layer) {
            return this.layer.getName(this.uid);
        }
        return '';
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
