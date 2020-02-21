<template>
    <span class="border-b pl-24 md:pl-48"></span>
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
