<template>
    <div
        class="relative w-32 h-32 text-gray-600 hover:text-black"
        tabindex="-1"
    >
        <button
            class="w-full h-full default-focus-style focus:outline-none"
            @click="onClickFunction()"
            v-focus-item
            :content="tooltip"
            v-tippy="{ placement: 'left' }"
        >
            <slot></slot>
        </button>
    </div>
</template>

<script lang="ts">
import { Vue, Prop } from 'vue-property-decorator';

export default class MapnavButtonV extends Vue {
    @Prop() onClickFunction!: any;
    @Prop() tooltip?: string;
}
</script>

<style lang="scss" scoped></style>
