<template>
    <panel-screen :header="false" class="screen-spinner">
        <template #content>
            <!-- TODO: fine a spinner that is actually good 🎍 -->
            <div class="loader"></div>
        </template>
    </panel-screen>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.loader {
    --width: 5px;
    animation: spinningColor 1.5s ease-in-out infinite;
    margin: 100px auto;
    border: var(--width) double #f0eff5;
    border-radius: 50%;
    width: 50px;
    height: 50px;
}

@keyframes spinningColor {
    0% {
        transform: rotate(360deg);
        border-top: var(--width) dashed #f56682;
        border-bottom: var(--width) dashed #387eff;
    }
    25% {
        border-top: var(--width) dashed #f591a6;
        border-bottom: var(--width) dashed #6da7f7;
    }
    50% {
        border-top: var(--width) dashed #fd878e;
        border-bottom: var(--width) dashed #4ba3ff;
    }
    75% {
        border-top: var(--width) dashed #f57f8f;
        border-bottom: var(--width) dashed #569dff;
    }
    100% {
        border-top: var(--width) dashed #f56682;
        border-bottom: var(--width) dashed #387eff;
    }
}
</style>
