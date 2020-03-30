<template>
    <div class="sm:flex">
        <panel-container v-for="panel in visible($iApi.screenSize)" :key="`${panel.id}`" :panel="panel"></panel-container>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Get, Sync, Call } from 'vuex-pathify';

import { PanelInstance } from '@/api';

import PanelV from './panel-container.vue';

declare class ResizeObserver {
    constructor(callback: Function);
    observe(target: Element): void;
    unobserve(target: Element): void;
    disconnect(): void;
}

@Component({
    components: {
        'panel-container': PanelV
    }
})
export default class PanelStackV extends Vue {
    @Get('panel/getVisible!') visible!: (extraSmallScreen: boolean) => PanelInstance[];
    @Sync('panel/stackWidth') stackWidth!: number;

    mounted() {
        // sync the `panel-stack` width into the store so that visible can get calculated
        const resizeObserver = new ResizeObserver((entries: any) => {
            this.stackWidth = entries[0].contentRect.width;
        });

        resizeObserver.observe(this.$el);
    }
}
</script>

<style lang="scss" scoped></style>
