<template>
    <div class="relative" tabindex="-1">
        <button class="py-6 w-full h-full focus:outline-none" @click="onClickFunction()" v-focus-item>
            <slot name="icon"></slot>
        </button>
        <tooltip direction="right">
            <slot name="tooltip"></slot>
        </tooltip>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class AppbarButtonV extends Vue {
    @Prop() onClickFunction!: any;
}
</script>

<style lang="scss" scoped>
button {
    outline: none;

    &.focused {
        @apply bg-blue-900 text-white;
    }
}
</style>
