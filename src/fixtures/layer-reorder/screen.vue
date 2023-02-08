<template>
    <panel-screen :panel="panel">
        <template #header>
            {{ t('layer-reorder.title') }}
        </template>

        <template #content>
            <layer-reorder-component />
        </template>
    </panel-screen>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import type { PanelInstance } from '@/api';
import LayerReorderComponent from './components/layer-component.vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

defineProps({
    panel: {
        type: Object as PropType<PanelInstance>,
        required: true
    }
});
</script>

<style lang="scss" scoped></style>
