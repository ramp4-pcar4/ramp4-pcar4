<template>
    <div class="relative w-32 h-32 text-gray-600 hover:text-black" tabindex="-1">
        <button class="w-full h-full default-focus-style focus:outline-none" @click="onClickFunction()" v-focus-item>
            <slot name="icon"></slot>
        </button>
        <tooltip position="left">
            <slot name="tooltip"></slot>
        </tooltip>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class MapnavButtonV extends Vue {
    @Prop() onClickFunction!: any;
}
</script>

<style lang="scss" scoped></style>
