<template>
    <div>
        <header class="flex items-center border-b border-solid border-gray-600 px-2">
            <h2 class="flex-grow text-lg py-4 pl-2">
                <slot name="header"></slot>
            </h2>

            <slot name="controls"></slot>
        </header>

        <div class="m-2">
            <slot name="content"></slot>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Get, Sync, Call } from 'vuex-pathify';

@Component
export default class PanelScreenV extends Vue {}
</script>

<style lang="scss" scoped></style>
