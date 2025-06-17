<template>
    <div
        v-if="helpVisible"
        ref="overlayRef"
        class="absolute inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 transition-opacity pointer-events-auto"
        tabindex="-1"
        @click="handleOverlayClick"
    >
        <div
            class="relative w-[640px] max-h-[80vh] overflow-y-auto rounded-xl bg-white py-8 px-10 shadow-xl"
            role="dialog"
            aria-modal="true"
            aria-live="polite"
        >
            <button
                type="button"
                class="absolute right-8 top-8 rounded px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                @click="closeHelp"
            >
                {{ t('panels.controls.close') }}
            </button>
            <div class="border-b border-gray-200 bg-white px-4 py-20 sm:px-24">
                <h3 class="text-base font-semibold text-gray-900">{{ t('keyboardnav.helpTitle') }}</h3>
                <div v-html="t('keyboardnav.helpDescription')" class="mt-6 text-sm text-gray-500"></div>
            </div>
            <ul
                role="list"
                class="m-0 max-w-[calc(var(--container-lg)-(--spacing(8)))] list-none divide-y divide-zinc-900/5 p-0 dark:divide-white/5"
            >
                <li class="pl-24 mb-8 py-16">
                    <div class="flex items-center gap-x-12">
                        <span class="font-mono text-md text-zinc-600">
                            {{ t('keyboardnav.mainShortcuts.title') }}
                        </span>
                    </div>

                    <div class="space-y-4 p-16 pl-24">
                        <div class="flex items-center gap-x-12">
                            <span
                                class="font-mono px-6 text-[0.825rem]/6 font-semibold rounded-lg px-1.5 ring-1 ring-inset ring-zinc-300 bg-zinc-400/10 text-zinc-500 dark:ring-zinc-400/30 dark:bg-zinc-400/10 dark:text-zinc-400"
                            >
                                1-5
                            </span>
                            <span class="h-2 w-2 rounded-full bg-zinc-300 dark:bg-zinc-600"></span>
                            <span class="font-mono text-md text-zinc-600">
                                {{ t('keyboardnav.mainShortcuts.numbers') }}
                            </span>
                        </div>
                        <div class="flex items-center gap-x-12">
                            <span
                                class="font-mono px-6 text-[0.825rem]/6 font-semibold rounded-lg px-1.5 ring-1 ring-inset ring-zinc-300 bg-zinc-400/10 text-zinc-500 dark:ring-zinc-400/30 dark:bg-zinc-400/10 dark:text-zinc-400"
                            >
                                ESC
                            </span>
                            <span class="h-2 w-2 rounded-full bg-zinc-300 dark:bg-zinc-600"></span>
                            <span class="font-mono text-md text-zinc-600">
                                {{ t('keyboardnav.mainShortcuts.escape') }}
                            </span>
                        </div>
                        <div class="flex items-center gap-x-12">
                            <span
                                class="font-mono px-6 text-[0.825rem]/6 font-semibold rounded-lg px-1.5 ring-1 ring-inset ring-zinc-300 bg-zinc-400/10 text-zinc-500 dark:ring-zinc-400/30 dark:bg-zinc-400/10 dark:text-zinc-400"
                            >
                                S
                            </span>
                            <span class="h-2 w-2 rounded-full bg-zinc-300 dark:bg-zinc-600"></span>
                            <span class="font-mono text-md text-zinc-600">
                                {{ t('keyboardnav.mainShortcuts.start') }}
                            </span>
                        </div>
                        <div class="flex items-center gap-x-12">
                            <span
                                class="font-mono px-6 text-[0.825rem]/6 font-semibold rounded-lg px-1.5 ring-1 ring-inset ring-zinc-300 bg-zinc-400/10 text-zinc-500 dark:ring-zinc-400/30 dark:bg-zinc-400/10 dark:text-zinc-400"
                            >
                                Backspace
                            </span>
                            <span class="h-2 w-2 rounded-full bg-zinc-300 dark:bg-zinc-600"></span>
                            <span class="font-mono text-md text-zinc-600">
                                {{ t('keyboardnav.mainShortcuts.backspace') }}
                            </span>
                        </div>
                    </div>
                </li>
                <li v-if="namespaceEntries.length === 0" class="pl-24 mb-8 py-16 border-b">
                    <p class="font-mono text-md text-zinc-600">
                        {{ t('keyboardnav.noShortcuts') }}
                    </p>
                </li>
                <li v-for="entry in namespaceEntries" :key="entry.id" class="pl-24 mb-8 py-16 border-b">
                    <div
                        class="flex items-center gap-x-12"
                        :class="{ 'opacity-60': activeNamespace && activeNamespace !== entry.id }"
                    >
                        <div class="flex items-center gap-x-4">
                            <span
                                class="font-mono px-6 text-[0.825rem]/6 font-semibold rounded-lg px-1.5 ring-1 ring-inset ring-zinc-300 bg-zinc-400/10 text-zinc-500 dark:ring-zinc-400/30 dark:bg-zinc-400/10 dark:text-zinc-400"
                                >S</span
                            >
                            <span
                                class="font-mono px-6 text-[0.825rem]/6 font-semibold rounded-lg px-1.5 ring-1 ring-inset ring-zinc-300 bg-zinc-400/10 text-zinc-500 dark:ring-zinc-400/30 dark:bg-zinc-400/10 dark:text-zinc-400"
                                >{{ entry.id }}</span
                            >
                        </div>
                        <span class="h-2 w-2 rounded-full bg-zinc-300 dark:bg-zinc-600"></span>
                        <span class="font-mono text-md text-zinc-600">
                            {{ t(`keyboardnav.ns.${entry.id}`) }}
                        </span>
                    </div>

                    <div v-if="entry.keys.length" class="space-y-4 p-16 pl-24">
                        <div v-for="item in entry.keys" :key="item.key" class="flex items-center gap-x-12">
                            <div class="flex items-center gap-x-4">
                                <span
                                    class="font-mono px-6 text-[0.825rem]/6 font-semibold rounded-lg px-1.5 ring-1 ring-inset ring-zinc-300 bg-zinc-400/10 text-zinc-500 dark:ring-zinc-400/30 dark:bg-zinc-400/10 dark:text-zinc-400"
                                    >{{ item.key }}</span
                                >
                            </div>
                            <span class="h-2 w-2 rounded-full bg-zinc-300 dark:bg-zinc-600"></span>
                            <span class="font-mono text-md text-zinc-600">
                                {{ t(`keyboardnav.key.${entry.id}.${item.key}`) }}
                            </span>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useKeyboardnavStore } from './store/keyboardnav-store';
import { computed, useTemplateRef, watch, onBeforeUnmount } from 'vue';
import { useI18n } from 'vue-i18n';

const store = useKeyboardnavStore();
const { activeNamespace, namespaces, helpVisible } = storeToRefs(store);
const { t } = useI18n();

const namespaceEntries = computed(() =>
    Object.entries(namespaces.value).map(([id, options]) => ({
        id,
        keys: options?.keys ?? []
    }))
);

const overlayRef = useTemplateRef('overlayRef');
function closeHelp() {
    store.setHelpVisible(false);
    store.resetChain({ suppressHandler: true });
}

function handleFocusIn(e: FocusEvent) {
    const target = e.target as Node | null;
    if (overlayRef.value && target && !overlayRef.value.contains(target)) {
        closeHelp();
    }
}

function handleOverlayClick(e: MouseEvent) {
    // If the click is directly on the overlay (dark background) and not on the dialog
    if (e.target === e.currentTarget) {
        closeHelp();
    }
}

watch(helpVisible, val => {
    if (val) {
        document.addEventListener('focusin', handleFocusIn);
    } else {
        document.removeEventListener('focusin', handleFocusIn);
    }
});

onBeforeUnmount(() => {
    document.removeEventListener('focusin', handleFocusIn);
});
</script>

<style lang="scss">
.key {
    @apply contents font-mono px-6 text-[0.825rem]/6 font-semibold rounded-lg ring-1 ring-inset;

    &.indigo {
        @apply ring-indigo-300 bg-indigo-400/10 text-indigo-500 dark:ring-indigo-400/30 dark:bg-indigo-400/10 dark:text-indigo-400;
    }

    &.zinc {
        @apply ring-zinc-300 bg-zinc-400/10 text-zinc-500 dark:ring-zinc-400/30 dark:bg-zinc-400/10 dark:text-zinc-400;
    }
}
</style>
