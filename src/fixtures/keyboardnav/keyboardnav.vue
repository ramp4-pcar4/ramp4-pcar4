<template>
    <div v-if="activeNamespace" class="ramp-keyboardnav-indicator" role="status" aria-live="assertive">
        {{ $t('keyboardnav.activeNamespace', { ns: activeNamespace }) }}
    </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useKeyboardnavStore } from './store/keyboardnav-store';

// grab store and expose its state
const store = useKeyboardnavStore();
const { activeNamespace } = storeToRefs(store);
</script>

<style scoped>
.ramp-keyboardnav-indicator {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background-color: rgba(0, 0, 0, 0.6);
    color: #fff;
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
    font-weight: bold;
    z-index: 1000;
}
</style>
