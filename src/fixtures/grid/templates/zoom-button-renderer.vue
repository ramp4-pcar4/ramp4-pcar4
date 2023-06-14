<template>
    <button
        type="button"
        class="flex items-center justify-center w-46 h-44"
        :content="
            t(`grid.cells.zoom${zoomStatus === 'none' ? '' : `.${zoomStatus}`}`)
        "
        v-tippy="{ placement: 'top' }"
        @click="zoomToFeature"
        tabindex="-1"
        ref="button"
    >
        <div
            v-if="zoomStatus === 'zooming'"
            class="m-auto animate-spin spinner h-20 w-20"
        ></div>
        <svg
            v-else-if="zoomStatus === 'zoomed'"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="green"
            class="w-20 h-20"
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
            />
        </svg>
        <svg
            v-else-if="zoomStatus === 'error'"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="red"
            class="w-20 h-20"
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
            />
        </svg>
        <svg
            v-else
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
import { LayerType } from '@/geo/api';

const zoomStatus = ref<'zooming' | 'zoomed' | 'error' | 'none'>('none');
const props = defineProps(['params']);
const iApi = inject<InstanceAPI>('iApi')!;
const layerStore = useLayerStore();
const button = ref<HTMLElement>();
const { t } = useI18n();

const zoomToFeature = () => {
    if (zoomStatus.value !== 'none') {
        return;
    }

    zoomStatus.value = 'zooming';
    const layer: LayerInstance | undefined = layerStore.getLayerByUid(
        props.params.data.rvUid
    );
    if (layer === undefined) {
        updateZoomStatus('error');
        return;
    }
    const oid = props.params.data[props.params.oidField];

    const zoomUsingGraphic = () => {
        const opts = { getGeom: true };
        layer
            .getGraphic(oid, opts)
            .then(g => {
                if (g.geometry.invalid()) {
                    console.error(`Could not find graphic for objectid ${oid}`);
                    updateZoomStatus('error');
                } else {
                    iApi.geo.map.zoomMapTo(g.geometry);
                    updateZoomStatus('zoomed');
                    iApi.updateAlert(iApi.$i18n.t('grid.cells.alert.zoom'));
                }
            })
            .catch(() => {
                updateZoomStatus('error');
            });
    };

    if (layer.layerType === LayerType.FEATURE) {
        layer
            .getGraphicExtent(oid)
            .then(e => {
                iApi.geo.map.zoomMapTo(e);
                updateZoomStatus('zoomed');
                iApi.updateAlert(iApi.$i18n.t('grid.cells.alert.zoom'));
            })
            .catch(() => {
                zoomUsingGraphic();
            });
    } else {
        zoomUsingGraphic();
    }
};

const updateZoomStatus = (value: 'zooming' | 'zoomed' | 'error' | 'none') => {
    if (value === 'zoomed' || value === 'error') {
        setTimeout(() => {
            zoomStatus.value = value;
            (button.value as any)?._tippy.show();
            setTimeout(() => {
                (button.value as any)?._tippy.hide();
                zoomStatus.value = 'none';
            }, 3000);
        }, 300);
    } else {
        zoomStatus.value = value;
    }
};

onMounted(() => {
    // need to hoist events to top level cell wrapper to be keyboard accessible
    props.params.eGridCell.addEventListener('keydown', (e: KeyboardEvent) => {
        if (e.key === 'Enter' && zoomStatus.value === 'none') {
            zoomToFeature();
        }
    });
    props.params.eGridCell.addEventListener('focus', () => {
        (button.value as any)?._tippy.show();
    });
    props.params.eGridCell.addEventListener('blur', () => {
        (button.value as any)?._tippy.hide();
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
        (button.value as any)?._tippy.show();
    });
    props.params.eGridCell.removeEventListener('blur', () => {
        (button.value as any)?._tippy.hide();
    });
});
</script>

<style lang="scss" scoped></style>
