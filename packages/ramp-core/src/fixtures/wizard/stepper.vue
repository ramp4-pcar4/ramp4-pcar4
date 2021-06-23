<template>
    <div class="py-12">
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Watch, Prop, Provide } from 'vue-property-decorator';

@Component
export default class WizardStepperV extends Vue {
    @Prop({ default: 0 }) activeStep!: number;
    @Provide() stepper = { activeIndex: this.activeStep, numSteps: 0 };

    @Watch('activeStep')
    updateStep() {
        this.stepper.activeIndex = this.activeStep;
    }
}
</script>

<style lang="scss" scoped></style>
