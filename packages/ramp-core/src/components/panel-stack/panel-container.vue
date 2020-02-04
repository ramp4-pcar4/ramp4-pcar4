<template>
    <div class="shadow-tm bg-white w-350 h-full xs:mr-0 sm:mr-3 last:mr-0 pointer-events-auto">
        <!-- this renders a panel screen which is currently in view -->
        <!-- TODO: add animation transition animation here -->
        <component :is="panel.route.id" :panel="wrappedPanel"></component>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Get, Sync, Call } from 'vuex-pathify';

import PanelScreenV from './panel-screen.vue';
import PinV from './controls/pin.vue';

Vue.component('panel-screen', PanelScreenV);
Vue.component('pin', PinV);

import { Panel } from '@/store/modules/panel';
import { PanelItemAPI } from '../../api';

@Component
export default class PanelContainerV extends Vue {
    @Prop() panel!: Panel;

    get wrappedPanel(): PanelItemAPI {
        return new PanelItemAPI(this.$iApi, this.panel);
    }
}
</script>

<style lang="scss" scoped>
.w-350 {
    width: 350px;
}
</style>
