<template>
    <span
        role="tooltip"
        :position="position"
        class="rv-ui-tooltip pointer-events-none absolute opacity-0 invisible bg-black text-white text-center py-3 px-5 rounded z-50"
        ><slot></slot
    ></span>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class TooltipV extends Vue {
    @Prop({ default: 'top' }) position!: string;
    @Prop() tooltipfor!: HTMLElement | null;

    mounted() {
        //give the tooltip a random id and then set aria attributes as needed on parent
        this.$el.setAttribute('id', this.generateID());
        this.$el.previousElementSibling!.setAttribute('aria-labelledby', this.$el.id);

        // Handle hovering through events so that we can stop propogation
        (this.$el.previousElementSibling! as HTMLElement).addEventListener('mouseover', function(event: MouseEvent) {
            event.stopPropagation();
            this.classList.add('show-tooltip');
        });
        (this.$el.previousElementSibling! as HTMLElement).addEventListener('mouseout', function(event: MouseEvent) {
            if (this.classList.contains('show-tooltip')) {
                this.classList.remove('show-tooltip');
            }
        });
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
    transition-property: opacity font-size;
    width: max-content;
    font-size: x-small;
    
    &[position='top'] {
        @apply left-1/2 bottom-full;
        transform: translateX(-50%);
    }
    &[position='top-right'] {
        @apply right-0 bottom-full;
    }
    &[position='top-left'] {
        @apply left-0 bottom-full;
    }
    &[position='bottom'] {
        @apply left-1/2 top-full;
        transform: translateX(-50%);
    }
    &[position='bottom-right'] {
        @apply right-0 top-full;
    }
    &[position='bottom-left'] {
        @apply left-0 top-full;
    }
    &[position='left'] {
        @apply right-full top-1/2;
        transform: translateY(-50%);
    }
    &[position='right'] {
        @apply left-full top-1/2;
        transform: translateY(-50%);
    }

    .show-tooltip + &,
    :focus + &,
    :focus .focused + & {
        @apply visible opacity-100 text-base;
    }
}
</style>
