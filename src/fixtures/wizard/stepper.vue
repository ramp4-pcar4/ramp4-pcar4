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

    data() {
        return {
            watchers: [] as Array<Function>
        };
    },

    setup(props) {
        const stepper = reactive({
            activeIndex: props.activeStep,
            numSteps: 0
        });

        provide('stepper', stepper);

        return { stepper };
    },

    created() {
        this.watchers.push(
            this.$watch('activeStep', () => {
                this.stepper.activeIndex = this.activeStep;
            })
        );
    },

    beforeUnmount() {
        this.watchers.forEach(unwatch => unwatch());
    }
});
</script>

<style lang="scss" scoped></style>
