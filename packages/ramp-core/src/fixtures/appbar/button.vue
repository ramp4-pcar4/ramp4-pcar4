<template>
    <div class="relative" tabindex="-1">
        <!-- <button
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
        > -->
        <button
            class="py-6 w-full h-full focus:outline-none"
            @click="
                () => {
                    onClickFunction();
                    onClick();
                }
            "
            :content="tooltip"
        >
            <slot></slot>
        </button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Vue, Prop } from 'vue-property-decorator';

export default defineComponent({
    name: 'AppbarButtonV',
    props: ['onClickFunction', 'id', 'tooltip', 'iApi'],
    methods: {
        onClick() {
            //TODO: change fixtures to use this instead of click handlers in <fixture>-appbar-button?
            this.iApi.event.emit('appbar/click', this.id);
        }
    }
});
</script>

<style lang="scss" scoped>
button {
    outline: none;

    &.focused {
        @apply bg-blue-900 text-white;
    }
}
</style>
