<template>
    <div
        v-if="indicatorText"
        class="ramp-keyboardnav-indicator"
        role="status"
        aria-live="assertive"
    >
        {{ indicatorText }}
    </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useKeyboardnavStore } from './store/keyboardnav-store';
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

// grab store and expose its state
const store = useKeyboardnavStore();
const { activeNamespace } = storeToRefs(store);
const { t } = useI18n();

const indicatorText = computed(() => {
    if (!activeNamespace.value) return '';
    const name = t(`keyboardnav.ns.${activeNamespace.value}`);
    return t('keyboardnav.activeNamespace', { name });
});
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
