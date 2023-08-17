<template>
    <button
        v-if="isMapLayer"
        type="button"
        class="flex items-center justify-center w-42 h-38"
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
        <span v-else v-html="iApi.ui.getZoomIcon()"></span>
    </button>
</template>

<script setup lang="ts">
import { computed, inject, onBeforeUnmount, onMounted, ref } from 'vue';

import type { InstanceAPI, LayerInstance } from '@/api/internal';
import { useI18n } from 'vue-i18n';
import { useLayerStore } from '@/stores/layer';
import type { AttributeMapPair } from '../store';
import { GeometryType, LayerType } from '@/geo/api';

const zoomStatus = ref<'zooming' | 'zoomed' | 'error' | 'none'>('none');
const props = defineProps(['params']);
const iApi = inject<InstanceAPI>('iApi')!;
const layerStore = useLayerStore();
const button = ref<HTMLElement>();
const { t } = useI18n();

const isMapLayer = computed<boolean>((): boolean => {
    const layer: LayerInstance | undefined = layerStore.getLayerByUid(
        props.params.data.rvUid
    );
    return !!layer && layer.mapLayer;
});

const zoomToFeature = () => {
    if (zoomStatus.value !== 'none') {
        return;
    }
    zoomStatus.value = 'zooming';
    const layer: LayerInstance | undefined = layerStore.getLayerByUid(
        props.params.data.rvUid
    );

    if (layer === undefined || !layer.isLoaded) {
        updateZoomStatus('error');
        return;
    }

    // similar to the sql lookup, the details panel must use the original OID field to perform zoomies
    const oidPair = props.params.layerCols[layer.id].find(
        (pair: AttributeMapPair) => pair.origAttr === layer.oidField
    );
    const oid = props.params.data[oidPair.mappedAttr ?? oidPair.origAttr];

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
                    iApi.scrollToInstance();
                }
            })
            .catch(() => {
                updateZoomStatus('error');
            });
    };

    if (
        layer.layerType === LayerType.FEATURE &&
        layer.geomType !== GeometryType.POINT
    ) {
        layer
            .getGraphicExtent(oid)
            .then(e => {
                iApi.geo.map.zoomMapTo(e);
                updateZoomStatus('zoomed');
                iApi.updateAlert(iApi.$i18n.t('grid.cells.alert.zoom'));
                iApi.scrollToInstance();
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
    if (isMapLayer.value) {
        props.params.eGridCell.addEventListener(
            'keydown',
            (e: KeyboardEvent) => {
                if (e.key === 'Enter' && zoomStatus.value === 'none') {
                    zoomToFeature();
                }
            }
        );

        props.params.eGridCell.addEventListener('focus', () => {
            (button.value as any)?._tippy.show();
        });
        props.params.eGridCell.addEventListener('blur', () => {
            (button.value as any)?._tippy.hide();
        });
    }
});

onBeforeUnmount(() => {
    if (isMapLayer.value) {
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
    }
});
</script>

<style lang="scss" scoped></style>
