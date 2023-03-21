<template>
    <button
        type="button"
        class="flex items-center justify-center w-46 h-44"
        :content="t('grid.cells.zoom')"
        v-tippy="{ placement: 'top' }"
        @click="zoomToFeature"
        tabindex="-1"
        ref="el"
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

<script setup lang="ts">
import { inject, onBeforeUnmount, onMounted, ref } from 'vue';

import type { InstanceAPI, LayerInstance } from '@/api/internal';
import { useI18n } from 'vue-i18n';
import { useLayerStore } from '@/stores/layer';

const props = defineProps(['params']);
const iApi = inject<InstanceAPI>('iApi')!;
const layerStore = useLayerStore();
const el = ref<HTMLElement>();
const { t } = useI18n();

const getLayerByUid = (uid: string): LayerInstance | undefined =>
    layerStore.getLayerByUid(uid);

const zoomToFeature = () => {
    const layer: LayerInstance | undefined = getLayerByUid(props.params.uid);
    if (layer === undefined) return;
    const oid = props.params.data[props.params.oidField];
    const opts = { getGeom: true };
    layer.getGraphic(oid, opts).then(g => {
        if (g.geometry.invalid()) {
            console.error(`Could not find graphic for objectid ${oid}`);
        } else {
            iApi.geo.map.zoomMapTo(g.geometry);
        }
    });
};

onMounted(() => {
    // need to hoist events to top level cell wrapper to be keyboard accessible
    props.params.eGridCell.addEventListener('keydown', (e: KeyboardEvent) => {
        if (e.key === 'Enter') {
            zoomToFeature();
        }
    });
    props.params.eGridCell.addEventListener('focus', () => {
        (el.value as any)._tippy.show();
    });
    props.params.eGridCell.addEventListener('blur', () => {
        (el.value as any)._tippy.hide();
    });
});

onBeforeUnmount(() => {
    props.params.eGridCell.removeEventListener(
        'keydown',
        (e: KeyboardEvent) => {
            if (e.key === 'Enter') {
                zoomToFeature();
            }
        }
    );
    props.params.eGridCell.removeEventListener('focus', () => {
        (el.value as any)._tippy.show();
    });
    props.params.eGridCell.removeEventListener('blur', () => {
        (el.value as any)._tippy.hide();
    });
});
</script>

<style lang="scss" scoped></style>
