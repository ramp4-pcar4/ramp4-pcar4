<template>
    <component :is="templates[type]" :icon="icons[icon]" :name="name" :config="config" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

// Import control templates.
import SliderControl from './templates/slider-control.vue';
import ToggleSwitchControl from './templates/toggle-switch-control.vue';
import ToggleButtonControl from './templates/toggle-button-control.vue';
import InputControl from './templates/input-control.vue';
import { svgIcons } from './templates/icons';

export default defineComponent({
    name: 'SettingsComponentV',
    props: {
        type: {
            type: String,
            required: true
        },
        config: {
            type: Object,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        icon: {
            type: String,
            required: true
        }
    },

    data() {
        return {
            icons: svgIcons,
            // binds each type to its respective Vue component.
            templates: {
                slider: SliderControl,
                toggle: ToggleSwitchControl,
                'toggle-button': ToggleButtonControl,
                input: InputControl
            }
        };
    }
});
</script>
