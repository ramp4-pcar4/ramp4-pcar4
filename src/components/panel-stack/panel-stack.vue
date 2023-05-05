<template>
    <transition-group
        @enter="enter"
        @leave="leave"
        name="panel-container"
        tag="div"
        ref="el"
    >
        <!-- TODO: pass a corresponding fixture instance to the panel component as it can be useful -->
        <panel-container
            v-for="panel in visible(iApi!.screenSize)"
            :key="`${panel.id}`"
            :panel="panel"
        ></panel-container>
    </transition-group>
</template>

<script setup lang="ts">
import { GlobalEvents } from '@/api';
import type { PanelInstance } from '@/api';
import anime from 'animejs';
import PanelContainer from './panel-container.vue';
import type { InstanceAPI } from '@/api';
import { computed, inject, onMounted, ref } from 'vue';
import type { ComponentPublicInstance } from 'vue';
import { usePanelStore } from '@/stores/panel';

const panelStore = usePanelStore();
const iApi = inject<InstanceAPI>('iApi');
const el = ref<ComponentPublicInstance>();

const mobileMode = computed(() => panelStore.mobileView);

onMounted(() => {
    // sync the `panel-stack` width into the store so that visible can get calculated
    const resizeObserver = new ResizeObserver((entries: any) => {
        // determine if app is in mobile mode (app container ONLY has the `xs` class on it,
        // if it contains `sm` then the screen is too large)
        const newMode = !(
            iApi?.$vApp.$root?.$refs['app-size'] as HTMLElement
        ).classList.contains('sm');
        const oldMode = mobileMode.value;

        // fire event when mobile mode changes
        if (oldMode !== newMode) {
            panelStore.mobileView = newMode;
            iApi?.event.emit(GlobalEvents.RAMP_MOBILEVIEW_CHANGE, newMode);
        }

        panelStore.setStackWidth(entries[0].contentRect.width);
    });

    resizeObserver.observe(el.value?.$el);
});

const visible = (screenSize: string | null): PanelInstance[] | undefined =>
    //@ts-ignore
    panelStore.getVisible(screenSize);

const enter = (el: Element, done: () => void): void => {
    animateTransition(el, done, [
        [6, 0],
        [0, 1]
    ]);
};

const leave = (el: Element, done: () => void): void => {
    const [bbox, pbbox] = [
        el.children[0].getBoundingClientRect(),
        el.parentElement!.getBoundingClientRect()
    ];

    // the panel will be positioned `absolute` and it will screw up its dimensions
    // to prevent this, set width/height/left manually before detaching the panel
    (el as HTMLElement).style.width = `${bbox.width}px`;
    (el as HTMLElement).style.height = `${bbox.height}px`;
    (el as HTMLElement).style.left = `${bbox.left - pbbox.left}px`;

    // without this, the FLIP transition won't work
    (el as HTMLElement).style.position = 'absolute';

    animateTransition(el, done, [
        [0, -6],
        [1, 0]
    ]);
};

/**
 * Animate transition between panel screen components by fading them in/out.
 */
const animateTransition = (
    el: Element,
    done: () => void,
    values: number[][]
): void => {
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
};

// @ts-ignore
declare class ResizeObserver {
    constructor(callback: Function);
    observe(target: Element): void;
    unobserve(target: Element): void;
    disconnect(): void;
}
</script>

<style lang="scss" scoped>
// this is needed to trigger the FLIP list transition; doesn't seem possible to do it using JS only
// https://vuejs.org/v2/guide/transitions.html#List-Move-Transitions
.panel-container-move {
    transition: 0.3s transform cubic-bezier(0.22, 0.61, 0.36, 1);
}
</style>
