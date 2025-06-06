<template>
    <button
        type="button"
        class="flex items-center justify-center w-42 h-38"
        v-if="isButtonVisible"
        :content="props.params.config.tooltip"
        v-tippy="{ placement: 'top' }"
        @click="onButtonClick"
        tabindex="-1"
        ref="el"
    >
        <span v-html="props.params.config.icon"></span>
    </button>
</template>

<script setup lang="ts">
import { computed, inject, onBeforeUnmount, onMounted, ref } from 'vue';
import type { InstanceAPI, LayerInstance } from '@/api/internal';
import type { AttributeMapPair } from '../store';

const props = defineProps(['params']);
const iApi = inject('iApi') as InstanceAPI;
const el = ref<HTMLElement>();

const isButtonVisible = computed<boolean>(() => {
    const data = Object.assign({}, props.params.data);

    // Find the layer to determine whether this is a map layer or not.
    const layer: LayerInstance | undefined = iApi.geo.layer.getLayer(data['rvUid'])!;
    const visibility = props.params.config.displayOn;

    // Determine whether this button should be visible. If the visibility is set to data only, don't display if this is a map layer.
    if (!layer || (visibility === 'geo' && !layer.mapLayer) || (visibility === 'data' && layer.mapLayer)) {
        return false;
    }

    return true;
});

const onButtonClick = () => {
    const data = Object.assign({}, props.params.data);

    const layer: LayerInstance | undefined = iApi.geo.layer.getLayer(data['rvUid'])!;
    const oidPair = props.params.layerCols[layer.id].find((pair: AttributeMapPair) => pair.origAttr === layer.oidField);

    const oid = oidPair.mappedAttr ? data[oidPair.mappedAttr] : data[oidPair.origAttr];

    layer.getGraphic(oid, { getAttribs: true }).then(g => {
        iApi.event.emit(props.params.config.actionEvent, {
            data: g.attributes,
            layer: layer,
            uid: props.params.data.rvUid,
            oid: oid
        });
    });
};

onMounted(() => {
    // need to hoist events to top level cell wrapper to be keyboard accessible
    props.params.eGridCell.addEventListener('keydown', (e: KeyboardEvent) => {
        if (e.key === 'Enter') {
            onButtonClick();
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
    props.params.eGridCell.removeEventListener('keydown', (e: KeyboardEvent) => {
        if (e.key === 'Enter') {
            onButtonClick();
        }
    });

    props.params.eGridCell.removeEventListener('focus', () => {
        (el.value as any)._tippy.show();
    });
    props.params.eGridCell.removeEventListener('blur', () => {
        (el.value as any)._tippy.hide();
    });
});
</script>

<style lang="scss" scoped></style>
