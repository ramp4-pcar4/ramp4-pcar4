<template>
    <div class="h-full w-full flex flex-col items-stretch">
        <header class="flex flex-shrink-0 items-center border-b border-solid border-gray-600 px-8 h-48" focus-item>
            <h2 class="flex-grow text-lg py-16 pl-8">
                <slot name="header"></slot>
            </h2>

            <slot name="controls"></slot>
        </header>

        <div class="p-8 flex-grow" focus-item>
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

<style lang="scss" scoped>
.focused {
    @apply border border-black #{!important};
}
</style>
