<template>
    <button
        class="w-38 h-48"
        :content="$t('grid.cells.zoom')"
        v-tippy="{ placement: 'top' }"
        @click="zoomToFeature"
        tabindex="-1"
    >
        <svg
            class="m-auto"
            xmlns="http://www.w3.org/2000/svg"
            height="16"
            viewBox="0 0 24 24"
            width="16"
        >
            <path
                d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
            />
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z" />
        </svg>
    </button>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator';
import { Get } from 'vuex-pathify';
import { LayerInstance } from '@/api/internal';

export default class ZoomButtonRendererV extends Vue {
    @Get('layer/getLayerByUid') getLayerByUid!: (
        uid: string
    ) => LayerInstance | undefined;

    params: any;

    mounted() {
        // need to hoist events to top level cell wrapper to be keyboard accessible
        this.params.eGridCell.addEventListener(
            'keydown',
            (e: KeyboardEvent) => {
                if (e.key === 'Enter') {
                    this.zoomToFeature();
                }
            }
        );
        this.params.eGridCell.addEventListener('focus', () => {
            (this.$el as any)._tippy.show();
        });
        this.params.eGridCell.addEventListener('blur', () => {
            (this.$el as any)._tippy.hide();
        });
    }

    zoomToFeature() {
        const layer: LayerInstance | undefined = this.getLayerByUid(
            this.params.uid
        );
        if (layer === undefined) return;
        const oid = this.params.data[this.params.oidField];
        const opts = { getGeom: true };
        layer.getGraphic(oid, opts, this.params.uid).then(g => {
            if (g.geometry === undefined) {
                console.error(`Could not find graphic for objectid ${oid}`);
            } else {
                this.$iApi.geo.map.zoomMapTo(g.geometry, 50000);
            }
        });
    }
}
</script>

<style lang="scss" scoped></style>
