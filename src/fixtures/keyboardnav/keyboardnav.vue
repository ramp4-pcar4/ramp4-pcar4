<template>
    <div v-if="helpVisible" class="ramp-keyboardnav-overlay absolute inset-0 flex items-center justify-center z-50">
        <div
            class="bg-black-75 text-white p-6 rounded-md max-w-md max-h-96 overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-live="polite"
        >
            <h2 class="text-lg font-bold mb-2">{{ t('keyboardnav.helpTitle') }}</h2>
            <ul class="mb-2">
                <li v-for="ns in namespaceList" :key="ns" class="mb-1">
                    <span class="font-mono">SHIFT + {{ ns }}</span
                    >:
                    {{ t(`keyboardnav.ns.${ns}`) }}
                </li>
            </ul>
            <div v-if="activeNamespace" class="pt-2 border-t border-white-75">
                <h3 class="font-bold mb-1">
                    {{ t('keyboardnav.keysTitle', { name: t(`keyboardnav.ns.${activeNamespace}`) }) }}
                </h3>
                <ul>
                    <li v-for="item in activeKeys" :key="item.key" class="mb-1">
                        <span class="font-mono">{{ item.key }}</span
                        >:
                        {{ t(`keyboardnav.key.${activeNamespace}.${item.key}`) }}
                    </li>
                </ul>
            </div>
        </div>
        <div v-if="indicatorText" class="ramp-keyboardnav-indicator" role="status" aria-live="assertive">
            {{ indicatorText }}
        </div>
    </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useKeyboardnavStore } from './store/keyboardnav-store';
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const store = useKeyboardnavStore();
const { activeNamespace, namespaces, helpVisible } = storeToRefs(store);
const { t } = useI18n();

const indicatorText = computed(() => {
    if (!activeNamespace.value) return '';
    const name = t(`keyboardnav.ns.${activeNamespace.value}`);
    return t('keyboardnav.activeNamespace', { name });
});

const namespaceList = computed(() => Object.keys(namespaces.value));
const activeKeys = computed(() => {
    const ns = activeNamespace.value;
    if (!ns) return [];
    return namespaces.value[ns]?.keys || [];
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
.ramp-keyboardnav-overlay {
    background-color: rgba(0, 0, 0, 0.4);
}
</style>
