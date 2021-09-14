<template>
    <div class="step relative flex flex-col px-12 overflow-y-hidden">
        <div class="stepper-header flex pb-24">
            <!-- step number -->
            <div
                v-if="!done"
                class="w-24 h-24 bg-gray-400 rounded-full flex justify-center items-center text-white text-xs font-semibold"
                :class="{ 'bg-blue-500': active }"
            >
                {{ index + 1 }}
            </div>
            <!-- show checkmark if done -->
            <div v-else class="flex-none stepper-check w-24 h-24 text-gray-400">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="100%"
                    width="100%"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                    focusable="false"
                >
                    <g id="check_circle">
                        <path
                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                        ></path>
                    </g>
                </svg>
            </div>
            <div class="flex flex-col overflow-hidden">
                <!-- step title -->
                <div class="pl-12 flex items-center text-md">
                    {{ title }}
                </div>
                <!-- step summary -->
                <div
                    v-show="!active"
                    class="pl-12 text-xs transition-opacity duration-1000 ease-out"
                    v-truncate
                >
                    {{ summary }}
                </div>
            </div>
        </div>
        <transition name="step" mode="out-in">
            <div class="pl-36 " v-show="active">
                <!-- step content -->
                <slot></slot>
            </div>
        </transition>
    </div>
</template>

<script lang="ts">
import { Vue, Prop, Inject } from 'vue-property-decorator';
// import { defineComponent, inject } from 'vue';

export default class WizardStepperItemV extends Vue {
    @Prop() title!: string;
    @Prop() summary!: string;

    @Inject() stepper!: any;

    index: number = -1;

    mounted() {
        this.index = this.stepper.numSteps++;
    }

    get done() {
        return this.stepper.activeIndex > this.index;
    }

    get active() {
        return this.stepper.activeIndex === this.index;
    }
}
// export default defineComponent({
//     name: 'WizardStepperItemV',
//     props: {
//         title: {
//             type: String,
//             required: true
//         },
//         summary: {
//             type: String,
//             required: true
//         }
//     },
//     inject: ['stepper'],

//     data() {
//         return {
//             index: -1
//         };
//     },

//     mounted() {
//         this.index = this.stepper.numSteps++;
//     },

//     methods: {
//         done() {
//             return this.stepper.activeIndex > this.index;
//         },

//         active() {
//             return this.stepper.activeIndex === this.index;
//         }
//     }
// });
</script>

<style lang="scss" scoped>
.step {
    // draw line connecting steps
    &:after {
        width: 1px;
        position: absolute;
        top: 32px;
        bottom: 8px;
        left: 24px;
        background-color: black;
        content: ' ';
    }
    &:last-of-type:after {
        content: none;
    }
}

.stepper-check {
    > svg {
        transform: scale(1.2);
        transform-origin: 50% 50%;
        fill: currentColor;
    }
}

.step-leave-active,
.step-enter-active {
    transition: all 0.3s;
    max-height: 500px;
}
.step-enter-active {
    transition-delay: 0.1s;
}
.step-leave-to,
.step-enter {
    max-height: 0px;
    opacity: 0;
}
</style>
