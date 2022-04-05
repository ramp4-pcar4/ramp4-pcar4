<template>
    <panel-screen>
        <template #header>
            {{ $t('layer-reorder.title') }}
        </template>

        <template #controls>
            <pin @click="panel.pin()" :active="isPinned()"></pin>
            <close @click="panel.close()"></close>
        </template>

        <template #content>
            <layer-reorder-component />
        </template>
    </panel-screen>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { PanelInstance } from '@/api';
import LayerReorderComponentV from './components/layer-component.vue';

export default defineComponent({
    name: 'LayerReorderScreenV',
    components: {
        'layer-reorder-component': LayerReorderComponentV
    },
    props: {
        panel: {
            type: Object as PropType<PanelInstance>,
            required: true
        }
    },
    methods: {
        isPinned(): boolean {
            return this.panel.isPinned;
        }
    }
});
</script>

<style lang="scss" scoped></style>
