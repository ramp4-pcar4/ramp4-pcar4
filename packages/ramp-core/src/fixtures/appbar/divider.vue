<template>
    <span class="border-b p-0 self-center w-2/3"></span>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator';

export default class DividerV extends Vue {}
</script>

<style lang="scss" scoped>
span {
    height: 0 !important;
}
</style>
