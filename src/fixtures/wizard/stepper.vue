<template>
    <div class="py-12">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, provide, reactive, watch } from 'vue';

const props = defineProps({
    activeStep: {
        type: Number,
        default: 0
    }
});

const step = computed(() => props.activeStep);
const watchers = reactive<Array<Function>>([]);

const stepper = reactive({
    activeIndex: props.activeStep,
    numSteps: 0
});

provide('stepper', stepper);

watchers.push(
    watch(step, () => {
        stepper.activeIndex = props.activeStep;
    })
);

onBeforeUnmount(() => {
    watchers.forEach(unwatch => unwatch());
});
</script>

<style lang="scss" scoped></style>
