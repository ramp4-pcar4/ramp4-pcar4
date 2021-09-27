<template>
    <div class="py-12">
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { defineComponent, provide, reactive } from 'vue';

export default defineComponent({
    name: 'WizardStepperV',
    props: {
        activeStep: {
            type: Number,
            default: 0
        }
    },

    setup(props) {
        const stepper = reactive({
            activeIndex: props.activeStep,
            numSteps: 0
        });

        provide('stepper', stepper);

        return { stepper };
    },

    watch: {
        activeStep() {
            this.stepper.activeIndex = this.activeStep;
        }
    }
});
</script>

<style lang="scss" scoped></style>
