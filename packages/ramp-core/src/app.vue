<template>
    <div class="ramp-app animation-enabled" :lang="$i18n.locale">
        <shell></shell>
    </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';

import Shell from '@/components/shell.vue';

import ro from '@/scripts/resize-observer.js';

//TOOLTIPS
//@ts-ignore
import VueTippy, { setDefaultProps, tippy } from 'vue-tippy';

@Options({
    components: {
        Shell
    }
})
export default class App extends Vue {
    mounted() {
        // let ResizeObserver observe the app div
        // it applies 'xs' 'sm' 'md' and 'lg' classes to the div depending on the size
        ro.observe(this.$el);

        // Set tooltip defaults, theme does not get applied properly in prod builds if setting the defaults using vue-tippy
        // This bypasses the wrapper and sets the defaults at the tippy.js level
        setDefaultProps({
            aria: {
                content: 'labelledby'
            },
            // a11y: false, // can't find a replacement for Vue 3
            theme: 'ramp4',
            inertia: true,
            trigger: 'mouseenter manual focus',
            // needed to have tooltips in fullscreen, by default it appends to document.body
            appendTo: this.$el
        });

        let parent = this.$el.parentElement;
        parent?.style.setProperty('overflow', 'hidden');
    }
}
</script>

<style lang="scss">
$font-list: 'Montserrat', -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica,
    Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji;
@use 'directives/focus-list/focus-list';
.ramp-app {
    @include focus-list.default-focused-styling;
    height: 100vh;
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
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14),
        0px 2px 1px -1px rgba(0, 0, 0, 0.12);
}
</style>
