<template>
    <div class="ramp-app animation-enabled" :lang="$i18n.locale">
        <div class="h-full" ref="app-size">
            <shell></shell>
        </div>
    </div>
</template>

<script lang="ts">
import '@/styles/main.css';
import { defineComponent, getCurrentInstance, onMounted } from 'vue';
import Shell from '@/components/shell.vue';
// @ts-ignore
import ro from '@/scripts/resize-observer.js';
import 'tippy.js/animations/scale.css';
import { setDefaultProps } from 'vue-tippy';

export default defineComponent({
    name: 'App',
    components: { Shell },
    setup() {
        const instance = getCurrentInstance();
        onMounted(() => {
            // let ResizeObserver observe the app div
            // it applies 'xs' 'sm' 'md' and 'lg' classes to the div depending on the size
            ro.observe(instance?.proxy?.$refs['app-size']);
            // Set tooltip defaults, theme does not get applied properly in prod builds if setting the defaults using vue-tippy
            // This bypasses the wrapper and sets the defaults at the tippy.js level
            setDefaultProps({
                aria: {
                    content: 'labelledby'
                },
                theme: 'ramp4',
                animation: 'scale',
                inertia: true,
                trigger: 'mouseenter manual focus',
                touch: ['hold', 200],
                delay: [300, 0],
                // needed to have tooltips in fullscreen, by default it appends to document.body
                appendTo: instance?.proxy?.$el
            });
        });
    }
});
</script>

<style lang="scss">
$font-list: 'Montserrat', -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica,
    Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji;
@use 'directives/focus-list/focus-list';

.ramp-app {
    @include focus-list.default-focused-styling;
    height: 100%;
    font-family: $font-list;
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    .h1,
    .h2,
    .h3,
    .h4,
    .h5,
    .h6 {
        font-family: $font-list;
        line-height: 1.5;
    }
}
.symbologyIcon {
    @apply bg-white inline-flex justify-center items-center overflow-hidden;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
        0px 1px 1px 0px rgba(0, 0, 0, 0.14),
        0px 2px 1px -1px rgba(0, 0, 0, 0.12);
}
</style>
