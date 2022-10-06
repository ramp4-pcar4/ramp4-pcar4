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
                <h2 class="text-xl">{{ $t('keyboardInstructions.title') }}</h2>
                <close class="ml-auto" @click="open = false"></close>
            </div>
            <p
                class="whitespace-pre-line pb-10"
                v-for="section in instructionSections"
                :key="section"
            >
                {{ $t(`keyboardInstructions.${section}`) }}
            </p>
            <button
                type="button"
                class="mt-auto self-end mr-10 mb-10 px-20 py-10"
                @click="open = false"
                ref="lastEl"
            >
                {{ $t('keyboardInstructions.OK') }}
            </button>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'KeyboardInstructionsModalV',
    data() {
        return {
            open: false,
            instructionSections: ['app', 'lists', 'map'],
            handlers: [] as Array<string>
        };
    },

    mounted() {
        this.handlers.push(
            this.$iApi.event.on('openKeyboardInstructions', () => {
                this.open = true;
                this.$nextTick(() => {
                    (this.$refs.firstEl as HTMLElement)?.focus();
                });
            })
        );
    },

    beforeUnmount() {
        this.handlers.forEach(handler => this.$iApi.event.off(handler));
    },

    methods: {
        onKeydown(event: KeyboardEvent) {
            if (event.key === 'Tab') {
                if (event.shiftKey && event.target === this.$refs.firstEl) {
                    event.preventDefault();
                    (this.$refs.lastEl as HTMLElement).focus();
                } else if (
                    !event.shiftKey &&
                    event.target == this.$refs.lastEl
                ) {
                    event.preventDefault();
                    (this.$refs.firstEl as HTMLElement).focus();
                }
            } else if (event.key === 'Escape') {
                event.preventDefault();
                this.open = false;
            }
        }
    }
});
</script>

<style lang="scss" scoped></style>
