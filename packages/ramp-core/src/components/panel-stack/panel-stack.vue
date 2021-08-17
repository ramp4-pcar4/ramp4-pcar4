<template>
    <transition-group
        @enter="enter"
        @leave="leave"
        name="panel-container"
        tag="div"
    >
        <!-- TODO: pass a corresponding fixture instance to the panel component as it can be useful -->
        <panel-container
            v-for="panel in visible($iApi.screenSize)"
            :key="`${panel.id}`"
            :panel="panel"
        ></panel-container>
    </transition-group>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-property-decorator';
import { Get, Sync } from 'vuex-pathify';
import { get, sync } from '@/store/pathify-helper';
import { ComputedRef, WritableComputedRef } from 'vue';

import anime from 'animejs';

import { PanelInstance } from '@/api';

import PanelContainerV from './panel-container.vue';

declare class ResizeObserver {
    constructor(callback: Function);
    observe(target: Element): void;
    unobserve(target: Element): void;
    disconnect(): void;
}

@Options({
    components: {
        'panel-container': PanelContainerV
    }
})
export default class PanelStackV extends Vue {
    visible: ComputedRef<(extraSmallScreen: boolean) => PanelInstance[]> = get(
        'panel/getVisible'
    );

    // @Get('panel/getVisible!') visible!: (
    //     extraSmallScreen: boolean
    // ) => PanelInstance[];
    stackWidth: WritableComputedRef<number> = sync('panel/stackWidth');

    mounted(): void {
        // sync the `panel-stack` width into the store so that visible can get calculated
        const resizeObserver = new ResizeObserver((entries: any) => {
            this.stackWidth = entries[0].contentRect.width;
        });

        resizeObserver.observe(this.$el);
    }

    enter(el: HTMLElement, done: () => void): void {
        this.animateTransition(el, done, [
            [6, 0],
            [0, 1]
        ]);
    }

    leave(el: HTMLElement, done: () => {}): void {
        const [bbox, pbbox] = [
            el.children[0].getBoundingClientRect(),
            el.parentElement!.getBoundingClientRect()
        ];

        // the panel will be positioned `absolute` and it will screw up its dimensions
        // to prevent this, set width/height/left manually before detaching the panel
        el.style.width = `${bbox.width}px`;
        el.style.height = `${bbox.height}px`;
        el.style.left = `${bbox.left - pbbox.left}px`;

        // without this, the FLIP transition won't work
        el.style.position = 'absolute';

        this.animateTransition(el, done, [
            [0, -6],
            [1, 0]
        ]);
    }

    /**
     * Animate transition between panel screen components by fading them in/out.
     */
    animateTransition(
        el: HTMLElement,
        done: () => void,
        values: number[][]
    ): void {
        anime({
            targets: el,
            duration: 300,
            translateY: {
                value: values[0],
                easing: 'cubicBezier(.5, .05, .1, .3)'
            },
            opacity: {
                value: values[1],
                duration: 250,
                easing: 'cubicBezier(.5, .05, .1, .3)'
            },
            complete: done
        });
    }
}
</script>

<style lang="scss" scoped>
// this is needed to trigger the FLIP list transition; doesn't seem possible to do it using JS only
// https://vuejs.org/v2/guide/transitions.html#List-Move-Transitions
.panel-container-move {
    transition: 0.3s transform cubic-bezier(0.22, 0.61, 0.36, 1);
}
</style>
