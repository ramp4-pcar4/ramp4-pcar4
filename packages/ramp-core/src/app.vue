<template>
    <div class="ramp-app">
        <shell></shell>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import Shell from '@/components/shell.vue';

import ro from '@/scripts/resize-observer.js';

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
@import './styles/main.css';
</style>

<style lang="scss" scoped>
.ramp-app {
    height: 900px;
}
</style>
