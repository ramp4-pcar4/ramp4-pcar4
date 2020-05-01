<template>
    <panel-screen>
        <template #header>
            Details
        </template>
        <template #controls>
            <back @click="panel.show('details-screen-layers')"></back>
            <close @click="panel.close()"></close>
        </template>
        <template #content>
            <div
                class="px-20 py-10 text-md truncate hover:bg-gray-200 cursor-pointer"
                v-for="(item, idx) in identifyResult.items"
                :key="idx"
                @click="openResult(idx)"
                v-focus-item
            >
                <!-- TODO: Change this later. If the name attribute is added to the IdentifyItem class, that can be used. -->
                {{ item.data.Name || item.data.OBJECTID || 'Identify Result ' + (idx + 1) }}
            </div>
        </template>
    </panel-screen>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Get, Sync, Call } from 'vuex-pathify';
import { DetailsStore } from './store';

import { PanelInstance } from '@/api';
import { IdentifyResult } from 'ramp-geoapi';

@Component({})
export default class DetailsResultV extends Vue {
    @Prop() panel!: PanelInstance;
    @Prop() layerIndex!: number;

    @Get(DetailsStore.payload) payload!: IdentifyResult[];

    /**
     * Switches the panel screen to display the data for a given result. Provides the currently selected layer index and the currently selected feature index as props.
     */
    openResult(itemIndex: number) {
        this.panel.show({ screen: 'details-screen-item', props: { layerIndex: this.layerIndex, itemIndex: itemIndex } });
    }

    /**
     * Returns the identify information for the layer specified by layerIndex.
     */
    get identifyResult() {
        return this.payload[this.layerIndex];
    }
}
</script>

<style lang="scss"></style>
