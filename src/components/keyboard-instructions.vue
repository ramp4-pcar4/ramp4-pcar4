<template>
    <div
        class="absolute inset-0 flex justify-center items-center bg-opacity-30 bg-black z-50 pointer-events-auto"
        v-if="open"
        @click="open = false"
        @keydown="onKeydown"
    >
        <div
            class="bg-white w-500 pointer-events-auto shadow-2xl p-20 flex flex-col"
            @click.stop.prevent
            tabindex="0"
            ref="firstEl"
        >
            <div class="flex items-center mb-20">
                <h2 class="text-xl">{{ t('keyboardInstructions.title') }}</h2>
                <close class="ml-auto" @click="open = false" />
            </div>
            <p
                class="whitespace-pre-line pb-10"
                v-for="section in instructionSections"
                :key="section"
            >
                {{ t(`keyboardInstructions.${section}`) }}
            </p>
            <button
                type="button"
                class="mt-auto self-end mr-10 mb-10 px-20 py-10"
                @click="open = false"
                ref="lastEl"
            >
                {{ t('keyboardInstructions.OK') }}
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { inject, nextTick, onBeforeUnmount, onMounted, ref } from 'vue';
import type { InstanceAPI } from '@/api';
import { useI18n } from 'vue-i18n';

const iApi = inject<InstanceAPI>('iApi');
const { t } = useI18n();

const open = ref(false);
const instructionSections = ref(['app', 'lists', 'map']);
const handlers = ref([] as Array<string>);

const firstEl = ref(null as unknown as HTMLElement);
const lastEl = ref(null as unknown as HTMLElement);

onMounted(() => {
    handlers.value.push(
        iApi!.event.on('openKeyboardInstructions', () => {
            open.value = true;
            nextTick(() => {
                firstEl.value.focus();
            });
        })
    );
});

onBeforeUnmount(() => {
    handlers.value.forEach(handler => iApi?.event.off(handler));
});

const onKeydown = (event: KeyboardEvent) => {
    if (event.key === 'Tab') {
        if (event.shiftKey && event.target === firstEl.value) {
            event.preventDefault();
            lastEl.value.focus();
        } else if (!event.shiftKey && event.target === lastEl.value) {
            event.preventDefault();
            firstEl.value.focus();
        }
    } else if (event.key === 'Escape') {
        event.preventDefault();
        open.value = false;
    }
};
</script>

<style lang="scss" scoped></style>
