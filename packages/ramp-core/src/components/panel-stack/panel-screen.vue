<template>
    <div class="h-full flex flex-col items-stretch">
        <header
            v-if="header"
            class="flex flex-shrink-0 items-center border-b border-solid border-gray-600 px-8 h-48 default-focus-style"
            v-focus-item="'show-truncate'"
        >
            <back v-if="$iApi.screenSize === 'xs'" @click="panel.close()"></back>
            <h2 class="flex-grow text-lg py-16 pl-8 min-w-0" v-truncate>
                <slot name="header"></slot>
            </h2>

            <slot name="controls"></slot>
        </header>

        <div v-if="content" class="p-8 flex-grow default-focus-style overflow-y-auto" v-focus-item>
            <slot name="content"></slot>
        </div>

        <div
            v-if="footer"
            class="px-16 py-16 border-t border-gray-400 default-focus-style"
            v-focus-item
        >
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Prop } from 'vue-property-decorator';
import { PanelInstance } from '@/api';

export default class PanelScreenV extends Vue {
    /**
     * A prop indicating if the `header` slot should be rendered.
     */
    @Prop({ default: true }) header!: boolean;

    /**
     * A prop indicating if the `content` slot should be rendered.
     */
    @Prop({ default: true }) content!: boolean;

    /**
     * A prop indicating if the `footer` slot should be rendered.
     */
    @Prop({ default: false }) footer!: boolean;

    @Prop() panel!: PanelInstance;
}
</script>

<style lang="scss" scoped></style>
