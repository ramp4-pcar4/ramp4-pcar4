<template>
    <panel-screen>
        <template #header>
            {{ $t('details.title') }}
        </template>
        <template #controls>
            <minimize @click="panel.minimize()" />
            <back
                @click="
                    panel.show({
                        screen: 'details-screen-result',
                        props: { resultIndex: resultIndex }
                    })
                "
                v-if="!isFeature && layerType !== 'ogcWms'"
            ></back>
            <back
                @click="panel.show({ screen: 'details-screen-layers' })"
                v-if="layerType === 'ogcWms'"
            ></back>
            <close @click="panel.close()" />
        </template>
        <template #content>
            <div class="flex py-8" v-if="layerType !== 'ogcWms'">
                <span
                    class="flex-none m-auto symbologyIcon"
                    v-html="icon"
                ></span>
                <span class="flex-grow my-auto text-lg px-8">
                    {{ itemName }}
                </span>
                <button @click="zoomToFeature()" class="text-gray-600 m-8">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="20"
                        viewBox="0 0 24 24"
                        width="20"
                    >
                        <path
                            d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
                        />
                        <path d="M0 0h24v24H0V0z" fill="none" />
                        <path d="M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z" />
                    </svg>
                </button>
            </div>
            <component
                :is="detailsTemplate"
                :identifyData="identifyItem"
            ></component>
        </template>
    </panel-screen>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Get } from 'vuex-pathify';
import { DetailsStore, DetailsItemInstance } from './store';

import { LayerInstance, PanelInstance } from '@/api/internal';
import { IdentifyResult, IdentifyResultFormat } from '@/geo/api';

import ESRIDefaultV from './templates/esri-default.vue';
import HTMLDefaultV from './templates/html-default.vue';

@Component({
    components: {
        'esri-default': ESRIDefaultV,
        'html-default': HTMLDefaultV
    }
})
export default class DetailsItemScreenV extends Vue {
    @Get(DetailsStore.templates) templateBindings!: {
        [id: string]: DetailsItemInstance;
    };

    @Prop() panel!: PanelInstance;

    // the index of the details item we want to display
    @Prop() resultIndex!: number;
    @Prop() itemIndex!: number;
    @Prop() layerType!: string;

    // true if the current payload is a single IdentifyItem
    @Prop() isFeature!: boolean;

    // retrieve the identify payload from the store
    @Get(DetailsStore.payload) payload!: IdentifyResult[];
    @Get('layer/getLayerByUid') getLayerByUid!: (
        uid: string
    ) => LayerInstance | undefined;

    identifyTypes: IdentifyResultFormat = IdentifyResultFormat.UNKNOWN;
    icon: string = '';

    mounted() {
        if (this.layerType !== 'ogcWms') {
            this.fetchIcon();
        }
    }

    /**
     * Returns the information for a single identify result, given the layer and item offsets.
     */
    get identifyItem() {
        return this.payload[this.resultIndex].items[this.itemIndex];
    }

    get itemName() {
        const layerInfo = this.payload[this.resultIndex];
        const uid = layerInfo.uid;
        const layer: LayerInstance | undefined = this.getLayerByUid(uid);
        const nameField = layer?.getNameField(uid);
        return nameField
            ? this.identifyItem.data[nameField]
            : this.$t('details.title');
    }

    fetchIcon() {
        const layerInfo = this.payload[this.resultIndex];
        const uid = layerInfo.uid;
        const layer: LayerInstance | undefined = this.getLayerByUid(uid);
        if (layer === undefined) {
            console.warn(
                `could not find layer for uid ${uid} during icon lookup`
            );
            return;
        }
        const oidField = layer.getOidField(uid);
        layer.getIcon(this.identifyItem.data[oidField], uid).then(value => {
            this.icon = value;
        });
    }

    get detailsTemplate() {
        const layerInfo = this.payload[this.resultIndex];
        const layer: LayerInstance | undefined = this.getLayerByUid(
            layerInfo.uid
        );

        // If there is a custom template binding for this layer in the store, then
        // return its name.
        if (
            layer &&
            this.templateBindings[layer.id] &&
            this.templateBindings[layer.id].componentId
        ) {
            return this.templateBindings[layer.id].componentId;
        }

        // If nothing is found, use a default template.
        if (this.layerType === 'ogcWms') {
            return 'html-default';
        } else {
            return 'esri-default';
        }
    }

    zoomToFeature() {
        const layerInfo = this.payload[this.resultIndex];
        const uid = layerInfo.uid;
        const layer: LayerInstance | undefined = this.getLayerByUid(uid);

        if (layer === undefined) {
            console.warn(
                `Could not find layer for uid ${uid} during zoom geometry lookup`
            );
            return;
        }
        const oid = this.identifyItem.data[layer.getOidField(uid)];
        const opts = { getGeom: true };
        layer.getGraphic(oid, opts, uid).then(g => {
            if (g.geometry === undefined) {
                console.error(`Could not find graphic for objectid ${oid}`);
            } else {
                this.$iApi.geo.map.zoomMapTo(g.geometry, 50000);
            }
        });
    }
}
</script>

<style lang="scss"></style>
