<template>
    <div class="appbar-item relative inset-x-0 w-full text-center" ref="el">
        <!-- this is for appbar overflow button  -->
        <button
            type="button"
            class="text-gray-400 w-full h-48 focus:outline-none hover:text-white"
            @click="popperSetUp()"
            v-focus-item
            :content="t('appbar.more')"
            :aria-label="t('appbar.more')"
            v-tippy="{ placement: 'right-end' }"
            ref="dropdownTrigger"
        >
            <svg class="fill-current w-24 h-24 m-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M0 0h24v24H0z" fill="none" />
                <path
                    d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
                />
            </svg>
        </button>
        <!-- this is for appbar overflow menu  -->
        <div
            v-show="open"
            id="dropdown"
            class="dropdown shadow-md border border-gray:200 absolute w-64 flex flex-col bg-white rounded"
            ref="dropdown"
        >
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import { inject, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import type { InstanceAPI } from '@/api/internal';

import type { Placement, Modifier, State } from '@popperjs/core';
import { createPopper } from '@popperjs/core';
import maxSize from 'popper-max-size-modifier';

const { t } = useI18n();
const iApi = inject('iApi') as InstanceAPI;

const props = defineProps({
    position: {
        type: String,
        default: 'right-end'
    },
    popperOptions: {
        type: Object,
        default() {
            return {};
        }
    },
    numItems: {
        type: Number,
        default: 1
    },

    renderWatch: {
        type: Number,
        default: 0
    }
});
const emit = defineEmits(['updateParent']);

function updateParent() {
    emit('updateParent');
}

const open = ref(false);
const numRenders = ref(0);
const el = ref<Element>();
const dropdownTrigger = ref<Element>();
const dropdown = ref<HTMLElement>();

function rerender() {
    updateParent();
    nextTick(() => {
        popperSetUp();
        open.value = !open.value;
    });
}

watch(
    () => props.renderWatch,
    () => {
        rerender();
    }
);

const popperSetUp = () => {
    open.value = !open.value;

    const innerShell = iApi.$vApp.$el.querySelector('.inner-shell');

    const applyMaxSize = {
        name: 'applyMaxSize',
        enabled: true,
        phase: 'beforeWrite',
        requires: ['maxSize'],
        fn({ state }: { state: State }) {
            // The `maxSize` modifier provides this data
            const { width } = state.modifiersData.maxSize;

            state.styles.popper = {
                ...state.styles.popper,
                maxWidth: `${width}px`,
                maxHeight: `${innerShell.offsetHeight - 45}px`
            };

            const realHeight = Math.min(
                props.numItems <= 0 ? 0 : 55 + 44 * (props.numItems - 1),
                innerShell.offsetHeight - 45
            );

            state.styles.popper.height = `${realHeight}px`;
            if (dropdown?.value?.offsetHeight) {
                dropdown.value.style.height = `${realHeight}px`;
            }

            state.styles.popper.overflowY = 'auto';
            state.styles.popper.overflowX = 'hidden';
        }
    };

    if (dropdownTrigger.value && dropdown.value) {
        numRenders.value++;
        createPopper(dropdownTrigger.value as Element, dropdown.value as HTMLElement, {
            placement: (props.position || 'right-end') as Placement,
            modifiers: [
                {
                    ...maxSize,
                    options: {
                        boundary: innerShell
                    }
                },
                applyMaxSize as Modifier<'applyMaxsize', {}>,
                {
                    name: 'offset',
                    options: {
                        offset: [0, 5]
                    }
                },
                {
                    name: 'preventOverflow',
                    enabled: true,
                    options: {
                        boundary: innerShell
                    }
                }
            ],
            ...props.popperOptions
        });
    }

    // if this is the first time the popper is being rendered, re-render it
    if (numRenders.value === 1) rerender();
};

onMounted(() => {
    window.addEventListener(
        'click',
        event => {
            if (event.target instanceof HTMLElement && !el.value?.contains(event.target)) {
                open.value = false;
            }
        },
        { capture: true }
    );
});

onBeforeUnmount(() => {
    window.removeEventListener(
        'click',
        event => {
            if (event.target instanceof HTMLElement && !el.value?.contains(event.target)) {
                open.value = false;
            }
        },
        { capture: true }
    );
});

defineExpose({
    rerender
});
</script>

<style lang="scss" scoped>
.dropdown {
    @apply left-full bottom-0;
}
</style>
