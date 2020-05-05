<template>
    <panel-screen>
        <template #header>
            Details
        </template>
        <template #controls>
            <back @click="panel.show({ screen: 'details-screen-result', props: { layerIndex: layerIndex } })" v-if="!isFeature"></back>
            <close @click="panel.close()"></close>
        </template>
        <template #content>
            <!-- ESRI Format -->
            <div v-if="identifyItem.format === identifyTypes.ESRI">
                <div
                    class="p-5 pl-3 flex justify-end flex-wrap even:bg-gray-300"
                    v-for="(val, name, itemIdx) in identifyItem.data"
                    :key="itemIdx"
                >
                    <span class="inline font-bold">{{ name }}</span>
                    <span class="flex-auto"></span>
                    <span class="inline" v-html="val"></span>
                </div>
            </div>

            <!-- Others... for now. -->
            <div v-else>
                <div v-html="item.data"></div>
            </div>
        </template>
    </panel-screen>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Get, Sync, Call } from 'vuex-pathify';
import { DetailsStore } from './store';

import { PanelInstance } from '@/api';
import { IdentifyResult, IdentifyResultSet, IdentifyItem, IdentifyResultFormat } from 'ramp-geoapi';

@Component({})
export default class DetailsItemV extends Vue {
    @Prop() panel!: PanelInstance;

    // the index of the details item we want to display
    @Prop() layerIndex!: number;
    @Prop() itemIndex!: number;

    // true if the current payload is a single IdentifyItem
    @Prop() isFeature!: boolean;

    // retrieve the identify payload from the store
    @Get(DetailsStore.payload) payload!: IdentifyResult[];

    identifyTypes: any = IdentifyResultFormat;

    /**
     * Returns the information for a single identify result, given the layer and item offsets.
     */
    get identifyItem() {
        if (this.isFeature) {
            return this.payload;
        } else {
            return this.payload[this.layerIndex].items[this.itemIndex];
        }
    }
}

</script>

<style lang="scss"></style>
