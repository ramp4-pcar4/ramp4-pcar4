<template>
    <div class="ramp-app animation-enabled" :lang="$i18n.locale">
        <shell></shell>
        <div v-if="isIE()" class="absolute h-128 w-256 p-40 z-50 left-0 right-0 top-0 mx-auto my-16 border-2 border-red-500 text-lg bg-white">
            Internet Explorer is not a supported browser, please use a different browser.
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import Shell from '@/components/shell.vue';

import ro from '@/scripts/resize-observer.js';

import { FocusList, FocusItem } from '@/directives/focus-list';
Vue.directive('focus-list', FocusList);
Vue.directive('focus-item', FocusItem);

import TooltipV from '@/components/util/tooltip.vue';
Vue.component('tooltip', TooltipV);

@Component({
    components: {
        Shell
    }
})
export default class App extends Vue {
    mounted() {
        // let ResizeObserver observe the app div
        // it applies 'xs' 'sm' 'md' and 'lg' classes to the div depending on the size
        ro.observe(this.$el);
    }
    isIE(): boolean {
        let ua = navigator.userAgent;
        const IE = RegExp('MSIE');
        const IE11 = RegExp('Trident');
        return IE.test(ua) || IE11.test(ua);
    }
}
</script>

<style lang="scss">
// APP-WIDE STYLES
@use 'styles/main';
@use 'directives/focus-list/focus-list';
.ramp-app {
    @include focus-list.default-focused-styling;
    height: 700px;
}
</style>

<style lang="scss" scoped>
</style>
