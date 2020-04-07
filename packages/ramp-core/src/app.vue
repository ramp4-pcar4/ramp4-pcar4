<template>
    <div class="ramp-app">
        <p>{{ $t('hello') }}</p>
        <shell></shell>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import Shell from '@/components/shell.vue';

import ro from '@/scripts/resize-observer.js';

import { FocusList, FocusItem } from '@/directives/focus-list';
Vue.directive('focus-list', FocusList);
Vue.directive('focus-item', FocusItem);

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
.ramp-app {
}
</style>
