<template>
    <div
        class="whitespace-pre-wrap break-words h-full overflow-auto"
        v-if="identifyData"
        v-html="identifyData.data"
    ></div>
    <div v-else>{{ $t('details.results.empty') }}</div>
</template>

<script lang="ts">
import { Vue, Prop } from 'vue-property-decorator';

import { IdentifyItem } from '@/geo/api';

export default class HTMLDefaultV extends Vue {
    @Prop() identifyData!: IdentifyItem;
}
</script>

<style lang="scss"></style>
