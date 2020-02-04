<template>
    <div class="sm:flex">
        <panel-container v-for="panel in visible" :key="`${panel.id}`" :panel="panel"></panel-container>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Get, Sync, Call } from 'vuex-pathify';

import { Panel } from '@/store/modules/panel';

import PanelV from './panel-container.vue';

@Component({
    components: {
        'panel-container': PanelV
    }
})
export default class PanelStackV extends Vue {
    @Get('panel/visible') visible!: Panel[];
}
</script>

<style lang="scss" scoped></style>
