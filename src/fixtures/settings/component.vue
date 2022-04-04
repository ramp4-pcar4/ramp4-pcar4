<template>
    <component
        :is="templates[type]"
        :icon="icons[icon]"
        :name="name"
        :config="config"
    />
</template>

<script lang="ts">
import { defineComponent, markRaw } from 'vue';

// Import control templates.
import SliderControl from './templates/slider-control.vue';
import ToggleSwitchControl from '../../components/controls/toggle-switch-control.vue';
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
                slider: markRaw(SliderControl),
                toggle: markRaw(ToggleSwitchControl),
                input: markRaw(InputControl)
            }
        };
    }
});
</script>
