<template>
    <div class="appbar-item relative inset-x-0 w-full text-center" ref="el">
        <button
            type="button"
            class="text-gray-400 w-full h-48 focus:outline-none hover:text-white"
            @click="open = !open"
            v-focus-item
            :content="t('appbar.more')"
            v-tippy="{ placement: 'right' }"
            ref="dropdownTrigger"
        >
            <svg
                class="fill-current w-24 h-24 m-auto"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
            >
                <path d="M0 0h24v24H0z" fill="none" />
                <path
                    d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
                />
            </svg>
        </button>
        <div
            v-show="open"
            @click="popper.update()"
            @blur="open = false"
            id="dropdown"
            class="dropdown shadow-md border border-gray:200 absolute w-64 flex flex-col bg-white rounded overflow-y-auto max-h-screen"
            ref="dropdown"
        >
            <slot v-bind:close="() => (open = !open)"></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';

import type { Placement, Modifier, State } from '@popperjs/core';
import { createPopper, detectOverflow } from '@popperjs/core';

const { t } = useI18n();

const props = defineProps({
    position: {
        type: String,
        default: 'right'
    },
    popperOptions: {
        type: Object,
        default() {
            return {};
        }
    }
});

const open = ref(false);
const popper = ref<any>(null);

const el = ref<Element>();
const dropdownTrigger = ref<Element>();
const dropdown = ref<HTMLElement>();

onMounted(() => {
    window.addEventListener(
        'click',
        event => {
            if (
                event.target instanceof HTMLElement &&
                !el.value?.contains(event.target)
            ) {
                open.value = false;
            }
        },
        { capture: true }
    );

    const overflowScrollModifier: Modifier<'overflowScroll', {}> = {
        name: 'overflowScroll',
        enabled: true,
        phase: 'main',
        fn({ state }: { state: State }) {
            const { bottom } = detectOverflow(state);
            if (bottom < 0) {
                state.styles.popper.overflowY = 'auto';
                state.styles.popper.overflowX = 'hidden';
                state.styles.popper.height =
                    bottom < -50
                        ? 'auto'
                        : `${state.rects.popper.height - bottom - 45}px`;
            } else {
                state.styles.popper.height = 'auto';
            }
        }
    };

    if (dropdownTrigger.value) {
        createPopper(
            dropdownTrigger.value as Element,
            dropdown.value as HTMLElement,
            {
                placement: (props.position || 'right') as Placement,
                modifiers: [
                    overflowScrollModifier,
                    {
                        name: 'offset',
                        options: {
                            offset: [0, 5]
                        }
                    }
                ],
                ...props.popperOptions
            }
        );
    }
});

onBeforeUnmount(() => {
    window.removeEventListener(
        'click',
        event => {
            if (
                event.target instanceof HTMLElement &&
                !el.value?.contains(event.target)
            ) {
                open.value = false;
            }
        },
        { capture: true }
    );
});
</script>

<style lang="scss" scoped>
.dropdown {
    @apply left-full bottom-0;
}
</style>
