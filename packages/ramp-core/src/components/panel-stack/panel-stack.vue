<template>
    <div class="sm:flex">
        <panel-container
            v-for="panelConfig in visible(isExtraSmall)"
            :key="`${panelConfig.id}`"
            :panel-config="panelConfig"
        ></panel-container>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Get, Sync, Call } from 'vuex-pathify';

import { PanelConfig } from '@/store/modules/panel';

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
    @Get('panel/getVisible!') visible!: (extraSmallScreen: boolean) => PanelConfig[];
    @Sync('panel/width') width!: number;
    isExtraSmall: boolean = !this.$root.$el.classList.contains('sm');

    mounted() {
        const resizeObserver = new ResizeObserver((entries: any) => {
            this.width = entries[0].contentRect.width;
            this.isExtraSmall = !this.$root.$el.classList.contains('sm');
        });

        resizeObserver.observe(this.$el);
    }
}
</script>

<style lang="scss" scoped></style>
