<template>
    <div
        class="whitespace-pre-wrap break-words h-full overflow-auto"
        v-if="identifyData"
        v-html="identifyData.data"
    ></div>
    <div v-else>{{ $t('details.results.empty') }}</div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

import { IdentifyItem } from '@/geo/api';

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
