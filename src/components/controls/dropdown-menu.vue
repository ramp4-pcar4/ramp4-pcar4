<template>
    <div>
        <button
            class="text-gray-500 hover:text-black dropdown-button"
            @click="open = !open"
            :content="tooltip"
            v-tippy="{
                placement: tooltipPlacement,
                theme: tooltipTheme,
                animation: tooltipAnimation,
                appendTo: 'parent'
            }"
            ref="dropdownTrigger"
        >
            <slot name="header"></slot>
        </button>
        <div
            v-show="open"
            @click="popper.update()"
            class="rv-dropdown shadow-md border border-gray:200 py-8 bg-white rounded z-10"
            :class="{ 'text-center': centered }"
            ref="dropdown"
        >
            <slot v-bind:close="() => (open = !open)"></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref, nextTick, onBeforeUnmount, watch } from 'vue';
import { createPopper } from '@popperjs/core';
import type { Placement } from '@popperjs/core';

const open = ref(false);
const popper = ref<any>(null) as any;
const watchers = ref<Array<Function>>([]);
const el = ref();
const dropdown = ref();
const dropdownTrigger = ref();

const props = defineProps({
    position: {
        type: String,
        default: 'bottom'
    },
    tooltip: { type: String },
    tooltipPlacement: { type: String, default: 'bottom' },
    tooltipTheme: { type: String, default: 'ramp4' },
    tooltipAnimation: { type: String, default: 'scale' },
    centered: { type: Boolean, default: true }
});

watchers.value.push(
    watch(open, () => {
        popper.value.update();
    })
);

onMounted(() => {
    window.addEventListener(
        'click',
        event => {
            if (!el.value.contains(event.target)) {
                open.value = false;
            }
        },
        { capture: true }
    );

    window.addEventListener('blur', () => {
        open.value = false;
    });
    window.addEventListener('focusin', event => {
        if (!el.contains(event.target)) {
            open.value = false;
        }
    });

    // nextTick should prevent any race conditions by letting the child elements render before trying to place them using popper
    nextTick(() => {
        popper.value = createPopper(
            dropdownTrigger.value as Element,
            dropdown.value as HTMLElement,
            {
                placement: (props.position || 'bottom') as Placement,
                modifiers: [
                    {
                        name: 'offset',
                        options: {
                            offset: [0, 5]
                        }
                    }
                ]
            }
        );
    });
});

onBeforeUnmount(() => {
    watchers.value.forEach(unwatch => unwatch());
    window.removeEventListener(
        'click',
        event => {
            if (!el.value.contains(event.target)) {
                open.value = false;
            }
        },
        { capture: true }
    );
    open.value = false;
});
</script>

<style lang="scss">
.rv-dropdown > * {
    display: block;
    padding: 0.5rem 1rem;
    color: #2d3748;
}
.rv-dropdown > *:hover:not(.disabled) {
    background-color: #eee;
}
</style>
