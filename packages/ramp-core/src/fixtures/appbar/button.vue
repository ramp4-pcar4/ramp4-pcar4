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
            :content="tooltip"
            v-tippy="{ placement: 'right' }"
        >
            <slot></slot>
        </button>
    </div>
</template>

<script lang="ts">
import { Vue, Prop } from 'vue-property-decorator';

export default class AppbarButtonV extends Vue {
    @Prop() onClickFunction!: any;
    @Prop() id!: any;
    @Prop() tooltip?: string;

    onClick() {
        //TODO: change fixtures to use this instead of click handlers in <fixture>-appbar-button?
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
