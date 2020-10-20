<template>
    <panel-screen :panel="panel">
        <template #header>
            {{ $t('details.title') }}
        </template>
        <template #controls>
            <back @click="panel.show('details-screen-layers')"></back>
            <close @click="panel.close()"></close>
        </template>
        <template #content>
            <div v-if="identifyResult.items.length > 0">
                <div
                    class="flex px-10 py-10 text-md truncate hover:bg-gray-200 cursor-pointer"
                    v-for="(item, idx) in identifyResult.items"
                    :key="idx"
                    @click="openResult(idx)"
                    v-focus-item
                >
                    <span v-html=icon[idx] class="flex-initial"> {{ itemIcon(item.data, idx) }} </span>
                    <span class="flex-initial p-5"> {{ item.data[nameField] || 'Identify Result ' + (idx + 1) }} </span>
                </div>
            </div>
            <div v-else>{{ $t('details.results.empty') }}</div>
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
export default class DetailsResultV extends Vue {
    @Prop() panel!: PanelInstance;
    @Prop() layerIndex!: number;

    @Get(DetailsStore.payload) payload!: IdentifyResult[];
    @Get('layer/getLayerByUid') getLayerByUid!: (id: string) => BaseLayer | undefined;

    icon: string[] = [];

    /**
     * Switches the panel screen to display the data for a given result. Provides the currently selected layer index and the currently selected feature index as props.
     */
    openResult(itemIndex: number) {
        this.panel.show({ screen: 'details-screen-item', props: { layerIndex: this.layerIndex, itemIndex: itemIndex } });
    }

    /**
     * Updates the value of icon[idx] with the svg string of the item.
     * 
     * @param {any} data data of item in identifyResult.items
     * @param {number} idx index of item in identifyResult.items
     */
    itemIcon(data: any, idx: number) {
        const uid = this.identifyResult.uid;
        const layer: BaseLayer | undefined = this.getLayerByUid(uid);
        if (layer === undefined) {
            console.warn(`could not find layer for uid ${uid} during icon lookup`);
            return;
        }
        const oidField = layer.getOidField();
        layer.getIcon(data[oidField], uid).then(value => {if (this.icon[idx] !== value) this.$set(this.icon, idx, value)});
    }

    /**
     * Returns the identify information for the layer specified by layerIndex.
     */
    get identifyResult() {
        return this.payload[this.layerIndex];
    }

    /**
     * Returns the name field for the layer specified by layerIndex.
     */
    get nameField() {
        const layerInfo = this.payload[this.layerIndex];
        const uid = layerInfo?.uid;
        const layer: BaseLayer | undefined = this.getLayerByUid(uid);
        return layer?.getNameField(uid);
    }
}
</script>

<style lang="scss"></style>
