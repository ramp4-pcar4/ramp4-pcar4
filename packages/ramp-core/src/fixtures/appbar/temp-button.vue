<template>
    <appbar-button
        class="relative my-4 text-gray-400 hover:text-white h-48"
        tooltip="Testing Overflow"
    >
        <slot></slot>
    </appbar-button>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class TempAppbarButton extends Vue {}
</script>

<style lang="scss" scoped></style>
