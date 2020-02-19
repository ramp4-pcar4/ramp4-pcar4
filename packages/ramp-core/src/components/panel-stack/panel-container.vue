<template>
    <div class="shadow-tm bg-white w-350 h-full xs:mr-0 sm:mr-12 last:mr-0 pointer-events-auto">
        <!-- this renders a panel screen which is currently in view -->
        <!-- TODO: add animation transition animation here -->
        <component :is="panelConfig.route.id" v-bind="panelConfig.route.props" :panel="panel"></component>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Get, Sync, Call } from 'vuex-pathify';

import PanelScreenV from './panel-screen.vue';
import PinV from './controls/pin.vue';
import CloseV from './controls/close.vue';
import PanelOptionsMenuV from './controls/panel-options-menu.vue';

Vue.component('panel-screen', PanelScreenV);
Vue.component('pin', PinV);
Vue.component('close', CloseV);
Vue.component('panel-options-menu', PanelOptionsMenuV);

import { PanelConfig } from '@/store/modules/panel';
import { PanelItemAPI } from '@/api';

@Component
export default class PanelContainerV extends Vue {
    @Prop() panelConfig!: PanelConfig;

    get panel(): PanelItemAPI {
        // wrap a panel config into a PanelItemAPI and pass it to the fixture components that render inside the panel-screen
        return new PanelItemAPI(this.$iApi, this.panelConfig);
    }
}
</script>

<style lang="scss" scoped></style>
