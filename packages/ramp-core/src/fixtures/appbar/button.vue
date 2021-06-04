<template>
    <div class="relative" tabindex="-1">
        <button
            class="py-6 w-full h-full focus:outline-none"
            @click="
                () => {
                    onClickFunction();
                    onClick();
                }
            "
            v-focus-item
        >
            <slot name="icon"></slot>
        </button>
        <tooltip position="right">
            <slot name="tooltip"></slot>
        </tooltip>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class AppbarButtonV extends Vue {
    @Prop() onClickFunction!: any;
    @Prop() id!: any;

    onClick() {
        //TODO: change fixtures to use this instead of click handlers is <fixture>-appbar-button?
        this.$iApi.event.emit('appbar/click', this.id);
    }
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
