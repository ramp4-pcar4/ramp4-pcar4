<template>
    <div
        class="whitespace-pre-wrap break-words h-full overflow-auto"
        v-if="identifyData"
        v-html="itemData()"
    ></div>
    <div v-else>{{ t('details.layers.results.empty') }}</div>
</template>

<script setup lang="ts">
import { inject } from 'vue';
import type { PropType } from 'vue';
import type { IdentifyItem, InstanceAPI } from '@/api';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const iApi = inject<InstanceAPI>('iApi');

const props = defineProps({
    identifyData: {
        type: Object as PropType<IdentifyItem>,
        required: true
    }
});

const itemData = () => {
    let helper: any = props.identifyData.data.data
        ? structuredClone(props.identifyData.data.data)
        : structuredClone(props.identifyData.data);

    // only replace html special chars if string represents plain text
    if (typeof helper === 'string' && iApi!.ui.isPlainText(helper)) {
        helper = iApi!.ui.escapeHtml(helper);
    }

    return helper;
};
</script>

<style lang="scss"></style>
