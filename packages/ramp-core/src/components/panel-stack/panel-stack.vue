<template>
    <div class="sm:flex">
        <panel-container v-for="panelConfig in visible" :key="`${panelConfig.id}`" :panel-config="panelConfig"></panel-container>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Get, Sync, Call } from 'vuex-pathify';

import { PanelConfig } from '@/store/modules/panel';

import PanelV from './panel-container.vue';

@Component({
    components: {
        'panel-container': PanelV
    }
})
export default class PanelStackV extends Vue {
    @Get('panel/visible') visible!: PanelConfig[];
}
</script>

<style lang="scss" scoped></style>
