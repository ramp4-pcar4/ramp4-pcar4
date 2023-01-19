<template>
    <div
        class="w-full h-6 relative overflow-hidden rounded-full indeterminate mb-14"
    >
        <div
            class="h-full progressbar bg-blue-800 rounded-full top-0"
            aria-valuemin="0"
            aria-valuemax="100"
        >
            <span class="flex items-center h-full">
                <slot></slot>
            </span>
        </div>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped>
@keyframes progress-indeterminate {
    0% {
        width: 30%;
        left: -40%;
    }
    60% {
        left: 100%;
        width: 100%;
    }
    to {
        left: 100%;
        width: 0;
    }
}
.progressbar {
    transition: width 0.25s ease;
}
.indeterminate .progressbar {
    animation: progress-indeterminate 1.4s ease infinite;
}
</style>
