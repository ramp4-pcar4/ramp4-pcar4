<template>
    <div class="shadow-tm bg-white h-full xs:mr-0 sm:mr-12 last:mr-0 pointer-events-auto" :style="panel.style">
        <!-- this renders a panel screen which is currently in view -->
        <!-- TODO: add animation transition animation here -->
        <component :is="panel.route.screen" v-bind="panel.route.props" :panel="panel" v-focus-list></component>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Get, Sync, Call } from 'vuex-pathify';

import PanelScreenV from './panel-screen.vue';
import PinV from './controls/pin.vue';
import CloseV from './controls/close.vue';
import PanelOptionsMenuV from './controls/panel-options-menu.vue';
import DropdownMenuV from '@/components/controls/dropdown-menu.vue';

Vue.component('panel-screen', PanelScreenV);
Vue.component('pin', PinV);
Vue.component('close', CloseV);
Vue.component('panel-options-menu', PanelOptionsMenuV);
Vue.component('dropdown-menu', DropdownMenuV);

import { PanelInstance } from '@/api';

@Component
export default class PanelContainerV extends Vue {
    @Prop() panel!: PanelInstance;
}
</script>

<style lang="scss" scoped></style>
