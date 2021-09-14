<template>
    <div class="py-12">
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { Vue, Watch, Prop, Provide } from 'vue-property-decorator';
// import { defineComponent } from 'vue';

export default class WizardStepperV extends Vue {
    @Prop({ default: 0 }) activeStep!: number;
    @Provide() stepper = { activeIndex: this.activeStep, numSteps: 0 };

    @Watch('activeStep')
    updateStep() {
        this.stepper.activeIndex = this.activeStep;
    }
}
// export default defineComponent({
//     name: 'WizardStepperV',
//     props: {
//         activeStep: {
//             type: Number,
//             default: 0
//         }
//     },

//     provide() {
//         return {
//             stepper: {
//                 activeIndex: this.activeStep,
//                 numSteps: 0
//             }
//         };
//     },

//     watch: {
//         activeStep() {
//             this.stepper.activeIndex = this.activeStep;
//         }
//     }
// });
</script>

<style lang="scss" scoped></style>
