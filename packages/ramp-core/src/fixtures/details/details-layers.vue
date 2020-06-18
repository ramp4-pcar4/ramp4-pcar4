<template>
    <panel-screen>
        <template #header>
            Details
        </template>
        <template #controls>
            <close @click="panel.close()"></close>
        </template>
        <template #content>
            <div class="p-5">Found {{ payloadResults }} results in {{ payload.length }} layer{{ payload.length !== 1 ? 's' : '' }}</div>
            <div
                class="px-20 py-10 text-md flex hover:bg-gray-200 cursor-pointer"
                v-for="(item, idx) in payload"
                :key="idx"
                @click="openResult(idx)"
            >
                <div class="truncate">
                    {{ layerInfo(idx) }}
                </div>
                <div class="flex-auto"></div>
                <div class="text-gray-400 px-5">{{ item.items.length }}</div>
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
import BaseLayer from 'ramp-geoapi/dist/layer/BaseLayer';

@Component({})
export default class DetailsLayersV extends Vue {
    @Prop() panel!: PanelInstance;
    @Get(DetailsStore.payload) payload!: IdentifyResult[];
    @Get('layer/layers') layers!: BaseLayer[];

    /**
     * Switches the panel screen to display the data for a given result.
     */
    openResult(index: number) {
        this.panel.show({ screen: 'details-screen-result', props: { layerIndex: index } });
    }

    layerInfo(idx: number) {
        const layerInfo = this.payload[idx];

        // Check to see if there is a custom template defined for the selected layer.
        let item: BaseLayer | undefined = this.layers
            .map(layer => {
                let layerNode = layer.getLayerTree();

                if (!layerNode) return;

                // Determine if the selected UID is a child of this layer.
                if (layerNode.findChildByUid(layerInfo.uid) !== undefined) {
                    return layer;
                }
            })
            .filter(node => node != undefined)[0];

        if (!item) return;

        return item.getName() ? item.getName() : item.id;
    }

    /**
     * Calculates the total number of results received by identify.
     */
    get payloadResults(): number {
        return this.payload.map(r => r.items.length).reduce((a, b) => a + b, 0);
    }
}
</script>

<style lang="scss"></style>
