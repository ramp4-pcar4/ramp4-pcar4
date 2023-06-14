<template>
    <div
        v-if="zoomStatus === 'zooming'"
        class="flex items-center justify-center"
    >
        <div class="animate-spin spinner h-20 w-20"></div>
        <span class="ml-4">{{ t('grid.cells.zoom.zooming') }}</span>
    </div>
    <div
        v-else-if="zoomStatus === 'zoomed'"
        class="flex items-center justify-center"
    >
        <svg
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
        <span class="ml-4">{{ t('grid.cells.zoom.success') }}</span>
    </div>
    <div
        v-else-if="zoomStatus === 'error'"
        class="flex items-center justify-center"
    >
        <svg
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
        <span class="ml-4">{{ t('grid.cells.zoom.fail') }}</span>
    </div>
    <button
        type="button"
        class="flex items-center justify-center w-100 h-44"
        :content="t('grid.cells.zoom')"
        v-tippy="{ placement: 'top' }"
        @click="zoomToFeature"
        tabindex="-1"
        ref="button"
        v-else
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
import {
    inject,
    onBeforeUnmount,
    onMounted,
    ref,
    watch,
    type WatchStopHandle
} from 'vue';

import type { InstanceAPI, LayerInstance } from '@/api/internal';
import { useI18n } from 'vue-i18n';
import { useLayerStore } from '@/stores/layer';
import { LayerType } from '@/geo/api';

const zoomStatus = ref<string>('');
const props = defineProps(['params']);
const iApi = inject<InstanceAPI>('iApi')!;
const layerStore = useLayerStore();
const button = ref<HTMLElement>();
const { t } = useI18n();

let zoomWatcher: WatchStopHandle;

const zoomToFeature = () => {
    zoomStatus.value = 'zooming';
    const layer: LayerInstance | undefined = layerStore.getLayerByUid(
        props.params.data.rvUid
    );
    if (layer === undefined) {
        setTimeout(() => {
            zoomStatus.value = 'error';
        }, 300);
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
                    setTimeout(() => {
                        zoomStatus.value = 'error';
                    }, 300);
                } else {
                    iApi.geo.map.zoomMapTo(g.geometry);
                    setTimeout(() => {
                        zoomStatus.value = 'zoomed';
                    }, 300);
                }
            })
            .catch(() => {
                setTimeout(() => {
                    zoomStatus.value = 'error';
                }, 300);
            });
    };

    if (layer.layerType === LayerType.FEATURE) {
        layer
            .queryExtent(oid)
            .then(e => {
                iApi.geo.map.zoomMapTo(e);
                setTimeout(() => {
                    zoomStatus.value = 'zoomed';
                }, 300);
            })
            .catch(() => {
                zoomUsingGraphic();
            });
    } else {
        zoomUsingGraphic();
    }
};

onMounted(() => {
    // need to hoist events to top level cell wrapper to be keyboard accessible
    props.params.eGridCell.addEventListener('keydown', (e: KeyboardEvent) => {
        if (e.key === 'Enter' && zoomStatus.value === '') {
            zoomToFeature();
        }
    });
    props.params.eGridCell.addEventListener('focus', () => {
        (button.value as any)?._tippy.show();
    });
    props.params.eGridCell.addEventListener('blur', () => {
        (button.value as any)?._tippy.hide();
    });

    // show the button again after 2 seconds of showing success/error
    zoomWatcher = watch(zoomStatus, (newValue, oldValue) => {
        if (newValue === 'error' || newValue === 'zoomed') {
            setTimeout(() => {
                zoomStatus.value = '';
            }, 2000);
        }
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
    zoomWatcher();
});
</script>

<style lang="scss" scoped></style>
