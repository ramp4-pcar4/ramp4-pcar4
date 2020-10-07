<template>
    <panel-screen>
        <template #header>
            <div class="flex">
                <span v-html=icon class="flex-initial"> </span>
                <span class="flex-initial"> {{ itemName }} </span>
            </div>
        </template>
        <template #controls>
            <back @click="panel.show({ screen: 'details-screen-result', props: { layerIndex: layerIndex } })" v-if="!isFeature"></back>
            <close @click="panel.close()"></close>
        </template>
        <template #content>
            <component :is="detailsTemplate" :identifyData="identifyItem"></component>
        </template>
    </panel-screen>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Get, Sync, Call } from 'vuex-pathify';
import { DetailsStore, DetailsItemInstance } from './store';

import { PanelInstance } from '@/api';
import { IdentifyResult, IdentifyResultSet, IdentifyItem, IdentifyResultFormat } from 'ramp-geoapi';
import BaseLayer from 'ramp-geoapi/dist/layer/BaseLayer';

import ESRIDefaultV from './templates/esri-default.vue';

@Component({
    components: {
        'esri-default': ESRIDefaultV
    }
})
export default class DetailsItemV extends Vue {
    @Get('details/items') templateBindings!: { [id: string]: DetailsItemInstance };

    @Prop() panel!: PanelInstance;

    // the index of the details item we want to display
    @Prop() layerIndex!: number;
    @Prop() itemIndex!: number;

    // true if the current payload is a single IdentifyItem
    @Prop() isFeature!: boolean;
    @Prop() uid!: string;

    // retrieve the identify payload from the store
    @Get(DetailsStore.payload) payload!: IdentifyResult[];
    @Get('layer/layers') layers!: BaseLayer[];
    @Get('layer/getLayerByUid') getLayerByUid!: (id: string) => BaseLayer | undefined;

    identifyTypes: any = IdentifyResultFormat;
    icon: string = '';

    mounted() {
        this.itemIcon;
    }

    /**
     * Returns the information for a single identify result, given the layer and item offsets.
     */
    get identifyItem() {
        const item: any = this.isFeature ? this.payload : this.payload[this.layerIndex].items[this.itemIndex];
        return item;
    }

    get itemName() {
        // TODO get name field from layer once https://github.com/ramp4-pcar4/ramp4-pcar4/issues/272 is implemented.
        if (this.identifyItem.data.Name != undefined) return this.identifyItem.data.Name;
        else if (this.identifyItem.data.StationName != undefined) return this.identifyItem.data.StationName;
        return 'Details';
    }

    get itemIcon() {
        const layerInfo = this.payload[this.layerIndex];
        const uid = layerInfo?.uid || this.uid;
        const layer: BaseLayer | undefined = this.getLayerByUid(uid);
        if (layer === undefined) return '';
        // TODO get objectid field from layer once https://github.com/ramp4-pcar4/ramp4-pcar4/issues/273 is implemented.
        // TODO use second uid parameter in getIcon after https://github.com/ramp4-pcar4/ramp4-pcar4/issues/257 is implemented.
        return layer.getIcon(this.identifyItem.data.OBJECTID).then(value => this.icon = value);
    }

    get detailsTemplate() {
        const layerInfo = this.payload[this.layerIndex];
        const layer: BaseLayer | undefined = this.getLayerByUid(layerInfo?.uid || this.uid);

        // If there is a custom template binding for this layer in the store, then
        // return its name.
        if (layer && this.templateBindings[layer.id] && this.templateBindings[layer.id].componentId) {
            return this.templateBindings[layer.id].componentId;
        }

        // If nothing is found, use a default template.
        return 'esri-default';
    }
}
</script>

<style lang="scss"></style>
