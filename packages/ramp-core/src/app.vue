<template>
    <div id="app">
        <rv-shell></rv-shell>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import RvShell from '@/components/rv-shell.vue';

import ro from '@/scripts/resize-observer.js';

@Component({
    components: {
        RvShell
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
@import './styles/main.css';

#app {
    height: 900px;
}
</style>
