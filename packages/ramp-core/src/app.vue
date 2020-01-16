<template>
    <div id="app">
        <rv-shell></rv-shell>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import RvShell from '@/components/rv-shell.vue';

@Component({
    components: {
        RvShell
    }
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import './styles/main.css';

#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
