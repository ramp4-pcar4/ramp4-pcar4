<template>
    <panel-screen>
        <template #header> Settings: {{ layer.getName() }} </template>

        <template #controls>
            <close @click="panel.close()" />
        </template>

        <template #content>
            <div class="flex flex-col justify-center">
                <span class="rv-subheader">Display</span>

                <div class="rv-settings-divider"></div>

                <settings-component
                    class="rv-subsection"
                    type="toggle"
                    name="Show Layer"
                    icon="visibility"
                    :config="{ onChange: updateVisibility, value: visibilityModel }"
                ></settings-component>

                <div class="rv-settings-divider"></div>

                <settings-component
                    class="rv-subsection"
                    type="slider"
                    name="Opacity"
                    icon="opacity"
                    :config="{ onChange: updateOpacity, value: opacityModel }"
                ></settings-component>

                <div class="rv-settings-divider"></div>

                <settings-component
                    class="rv-subsection"
                    type="toggle"
                    name="Bounding box"
                    icon="box"
                    :config="{ onChange: () => {}, value: false, disabled: true }"
                ></settings-component>

                <div class="rv-settings-divider"></div>
            </div>

            <div class="flex flex-col justify-center">
                <span class="rv-subheader">Data</span>

                <div class="rv-settings-divider"></div>

                <settings-component
                    class="rv-subsection"
                    type="toggle"
                    name="Toggle Query"
                    icon="location"
                    :config="{ onChange: () => {}, value: false, disabled: true }"
                ></settings-component>

                <div class="rv-settings-divider"></div>

                <settings-component
                    class="rv-subsection"
                    type="toggle-button"
                    name="Snapshot"
                    icon="refresh"
                    :config="{ onChange: toggleSnapshot, value: snapshotToggle }"
                ></settings-component>

                <div class="rv-settings-divider"></div>
            </div>

            <div class="flex flex-col justify-center">
                <span class="rv-subheader">Refresh interval</span>

                <div class="rv-settings-divider"></div>

                <settings-component
                    class="rv-subsection"
                    type="input"
                    name="Refresh interval in minutes"
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
import { Get, Sync, Call } from 'vuex-pathify';

import { PanelInstance } from '@/api';
import BaseLayer from 'ramp-geoapi/dist/layer/BaseLayer';

import SettingsComponent from './SettingsComponentV.vue';

@Component({
    components: {
        'settings-component': SettingsComponent
    }
})
export default class SettingsV extends Vue {
    @Prop() panel!: PanelInstance;
    @Prop() layer!: BaseLayer;

    // Models.
    visibilityModel: boolean = this.layer.getVisibility();
    opacityModel: number = this.layer.getOpacity() * 100;
    snapshotToggle: boolean = false;

    mounted() {
        // Listen for a layer load event. Some of these values may change when the layer fully loads.
        this.layer.stateChanged.listen(payload => {
            this.visibilityModel = this.layer.getVisibility();
            this.opacityModel = this.layer.getOpacity() * 100;
        });
    }

    // Update the layer visibility.
    updateVisibility(val: any) {
        this.visibilityModel = val.value;
        this.layer.setVisibility(this.visibilityModel);
    }

    // Update the layer opacity.
    updateOpacity(val: number) {
        this.opacityModel = val;
        this.layer.setOpacity(this.opacityModel / 100);
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
