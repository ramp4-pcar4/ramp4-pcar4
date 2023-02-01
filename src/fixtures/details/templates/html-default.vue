<template>
    <div
        class="whitespace-pre-wrap break-words h-full overflow-auto"
        v-if="identifyData"
        v-html="identifyData.data"
    ></div>
    <div v-else>{{ t('details.layers.results.empty') }}</div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import type { IdentifyItem } from '@/geo/api';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

defineProps({
    identifyData: {
        type: Object as PropType<IdentifyItem>,
        required: true
    }
});
</script>

<style lang="scss"></style>
