<template>
    <component :is="templates[type]" :icon="icons[icon]" :name="name" :config="config" />
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Get, Sync, Call } from 'vuex-pathify';

import { PanelInstance } from '@/api';

// Import control templates.
import SliderControl from './templates/slider-control.vue';
import ToggleSwitchControl from './templates/toggle-switch-control.vue';
import ToggleButtonControl from './templates/toggle-button-control.vue';
import InputControl from './templates/input-control.vue';
import { svgIcons } from './templates/icons';

@Component
export default class SettingsComponentV extends Vue {
    @Prop() type!: string;
    @Prop() config!: any;
    @Prop() name!: string;
    @Prop() icon!: string;

    icons: any = svgIcons;

    // Binds each type to its respective Vue component.
    templates = {
        slider: SliderControl,
        toggle: ToggleSwitchControl,
        'toggle-button': ToggleButtonControl,
        input: InputControl
    };
}
</script>
