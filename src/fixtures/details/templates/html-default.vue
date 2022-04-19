<template>
    <div
        class="whitespace-pre-wrap break-words h-full overflow-auto"
        v-if="identifyData"
        v-html="identifyData.data"
    ></div>
    <div v-else>{{ $t('details.layers.results.empty') }}</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';
import type { IdentifyItem } from '@/geo/api';

export default defineComponent({
    name: 'HTMLDefaultV',
    props: {
        identifyData: {
            type: Object as PropType<IdentifyItem>,
            required: true
        }
    }
});
</script>

<style lang="scss"></style>
