<template>
    <span class="border-b p-0 self-center w-2/3"></span>
</template>

<script lang="ts">
import { Vue, Watch, Component } from 'vue-property-decorator';
import { Get, Sync, Call } from 'vuex-pathify';

@Component
export default class DividerV extends Vue {}
</script>

<style lang="scss" scoped>
span {
    height: 0 !important;
}
</style>
