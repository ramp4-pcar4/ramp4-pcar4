<template>
    <button @click="toggleFullscreen()">
        <svg v-if="isFullscreen" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="fill-current w-32 h-20">
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="fill-current w-32 h-20">
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" />
        </svg>
    </button>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import screenfull from 'screenfull';

@Component
export default class FullscreenNavV extends Vue {
    /**
     * true iff this ramp app is fullscreen
     */
    isFullscreen: boolean = false;

    /**
     * Enters fullscreen if not fullscreen, otherwise exits
     */
    toggleFullscreen() {
        this.$iApi.toggleFullscreen();
    }

    /**
     * Updates the fullscreen flag so that the correct icon can be shown. Screenfull and vue bindings don't seem to work well together.
     */
    fullscreenCallback(event: Event) {
        if (screenfull.isEnabled) {
            // this is the only way I could find to get it to actually bind, no getter would work no matter what I was checking
            this.isFullscreen = screenfull.isFullscreen && screenfull.element === this.$iApi.$vApp.$root.$el;
        }
    }

    mounted() {
        if (screenfull.isEnabled) {
            this.isFullscreen = screenfull.isFullscreen;
            screenfull.onchange(this.fullscreenCallback);
        }
    }

    destroyed() {
        if (screenfull.isEnabled) {
            screenfull.off('change', this.fullscreenCallback);
        }
    }
}
</script>

<style lang="scss" scoped></style>
