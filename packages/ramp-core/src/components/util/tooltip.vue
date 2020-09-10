<template>
    <span
        role="tooltip"
        :class="'rv-ui-tooltip-' + direction"
        class="rv-ui-tooltip absolute opacity-0 invisible bg-black text-white text-center py-3 px-5 rounded z-50"
        ><slot></slot
    ></span>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class TooltipV extends Vue {
    @Prop({ default: 'top' }) direction!: string;
    @Prop() tooltipfor!: HTMLElement | null;

    mounted() {
        //give the tooltip a random id and then set aria attributes as needed on parent
        this.$el.setAttribute('id', this.generateID());
        this.$el.previousElementSibling!.setAttribute('aria-labelledby', this.$el.id);
    }

    generateID(): string {
        let newID;
        do {
            newID =
                'tooltip-' +
                Math.random()
                    .toString(36)
                    .substring(2, 9);
        } while (document.getElementById(newID) !== null);

        return newID;
    }
}
</script>

<style lang="scss" scoped>
.rv-ui-tooltip {
    transition: opacity 0.3s;
    width: max-content;

    &::after {
        content: '';
        position: absolute;
        border-width: 5px;
    }

    :hover > &,
    :focus + &,
    :focus .focused + & {
        @apply visible opacity-100;
    }
}

.rv-ui-tooltip-top {
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);

    &::after {
        top: 100%;
        left: 50%;
        margin-left: -5px;
        border-color: black transparent transparent transparent;
    }
}

.rv-ui-tooltip-bottom {
    top: 100%;
    left: 50%;
    transform: translateX(-50%);

    &::after {
        bottom: 100%;
        left: 50%;
        margin-left: -5px;
        border-color: transparent transparent black transparent;
    }
}

.rv-ui-tooltip-left {
    right: 100%;
    top: 50%;
    transform: translateY(-50%);

    &::after {
        right: -9px;
        bottom: 50%;
        margin-bottom: -4px;
        border-color: transparent transparent transparent black;
    }
}

.rv-ui-tooltip-right {
    left: 100%;
    top: 50%;
    transform: translateY(-50%);

    &::after {
        left: -9px;
        bottom: 50%;
        margin-bottom: -4px;
        border-color: transparent black transparent transparent;
    }
}
</style>
