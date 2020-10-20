<template>
    <panel-screen>
        <template #header>
            {{ $t('details.title') }}
        </template>
        <template #controls>
            <back @click="panel.show({ screen: 'details-screen-result', props: { layerIndex: layerIndex } })" v-if="!isFeature"></back>
            <close @click="panel.close()"></close>
        </template>
        <template #content>
            <div class="flex py-8">
                <span v-html=icon class="symbologyIcon"> </span>
                <span class="flex-grow my-auto text-lg"> {{ itemName }} </span>
                <button @click="zoomToFeature()" class="text-gray-600 m-8">
                    <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24" width="20">
                        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                        <path d="M0 0h24v24H0V0z" fill="none"/>
                        <path d="M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"/>
                    </svg>
                </button>
            </div>
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
        const layerInfo = this.payload[this.layerIndex];
        const layer: BaseLayer | undefined = this.getLayerByUid(layerInfo?.uid || this.uid);
        const nameField = layer?.getNameField();
        return nameField ? this.identifyItem.data[nameField] : 'Details';
    }

    get itemIcon() {
        const layerInfo = this.payload[this.layerIndex];
        const uid = layerInfo?.uid || this.uid;
        const layer: BaseLayer | undefined = this.getLayerByUid(uid);
        if (layer === undefined) {
            console.warn(`could not find layer for uid ${uid} during icon lookup`);
            return '';
        }
        const oidField = layer.getOidField();
        return layer.getIcon(this.identifyItem.data[oidField], uid).then(value => this.icon = value);
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

    zoomToFeature() {
        const layerInfo = this.payload[this.layerIndex];
        const uid = layerInfo?.uid || this.uid;
        const layer: BaseLayer | undefined = this.getLayerByUid(uid);
        if (layer === undefined) {
            console.warn(`Could not find layer for uid ${uid} during zoom geometry lookup`);
            return;
        }
        const oid = this.identifyItem.data[layer.getOidField()];
        const opts = { getGeom: true };
        layer.getGraphic(oid, opts).then(g => {
            if (g.geometry === undefined) {
                console.error(`Could not find graphic for objectid ${oid}`);
            } else {
                this.$iApi.map.zoomMapTo(g.geometry, 50000);
            }
        });
    }
}
</script>

<style lang="scss"></style>
