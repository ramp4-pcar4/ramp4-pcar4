<template>
    <component
        :is="templates[type]"
        :icon="icons[icon]"
        :name="name"
        :config="config"
    />
</template>

<script lang="ts">
import { Vue, Prop } from 'vue-property-decorator';

// Import control templates.
import SliderControl from './templates/slider-control.vue';
import ToggleSwitchControl from './templates/toggle-switch-control.vue';
import ToggleButtonControl from './templates/toggle-button-control.vue';
import InputControl from './templates/input-control.vue';
import { svgIcons } from './templates/icons';

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
