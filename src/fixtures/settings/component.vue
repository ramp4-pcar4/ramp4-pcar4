<template>
    <component
        :is="templates[type]"
        :icon="icons[icon]"
        :name="name"
        :config="config"
    />
</template>

<script setup lang="ts">
import { markRaw, reactive, type PropType } from 'vue';

// Import control templates.
import SliderControl from './templates/slider-control.vue';
import ToggleSwitchControl from '../../components/controls/toggle-switch-control.vue';
import InputControl from './templates/input-control.vue';
import { svgIcons } from './templates/icons';

defineProps({
    type: {
        type: String as PropType<'slider' | 'toggle' | 'input'>,
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
        type: String as PropType<
            'visibility' | 'opacity' | 'box' | 'location' | 'refresh'
        >,
        required: true
    }
});

const icons = reactive(svgIcons);
// binds each type to its respective Vue component.
const templates = reactive({
    slider: markRaw(SliderControl),
    toggle: markRaw(ToggleSwitchControl),
    input: markRaw(InputControl)
});
</script>
