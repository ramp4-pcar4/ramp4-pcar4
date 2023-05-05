<template>
    <div ref="el">
        <button
            type="button"
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
import {
    ref,
    reactive,
    watch,
    nextTick,
    onMounted,
    onBeforeUnmount
} from 'vue';
import { createPopper, type Placement } from '@popperjs/core';

const open = ref<boolean>(false);
const popper = ref<any>(null);
const watchers = reactive<Array<Function>>([]);

const el = ref();
const dropdown = ref<HTMLElement>();
const dropdownTrigger = ref<Element>();

const props = defineProps({
    position: {
        type: String,
        default: 'bottom'
    },
    popperOptions: {
        type: Object,
        default() {
            return {};
        }
    },
    tooltip: { type: String },
    tooltipPlacement: { type: String, default: 'bottom' },
    tooltipTheme: { type: String, default: 'ramp4' },
    tooltipAnimation: { type: String, default: 'scale' },
    centered: { type: Boolean, default: true }
});

watchers.push(
    watch(open, () => {
        popper.value.update();
    })
);

onMounted(() => {
    window.addEventListener(
        'click',
        event => {
            if (!el.value || !el.value.contains(event.target)) {
                open.value = false;
            }
        },
        { capture: true }
    );

    window.addEventListener('blur', () => {
        open.value = false;
    });

    window.addEventListener('focusin', event => {
        if (!el.value || !el.value.contains(event.target)) {
            open.value = false;
        }
    });

    // nextTick should prevent any race conditions by letting the child elements render before trying to place them using popper
    nextTick(() => {
        if (dropdownTrigger.value && dropdown.value) {
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
                    ],
                    ...props.popperOptions
                }
            );
        }
    });
});

onBeforeUnmount(() => {
    watchers.forEach(unwatch => unwatch());

    window.removeEventListener(
        'click',
        event => {
            if (!el.value || !el.value.contains(event.target)) {
                open.value = false;
            }
        },
        { capture: true }
    );

    window.removeEventListener('blur', () => {
        open.value = false;
    });

    window.removeEventListener('focusin', event => {
        if (!el.value || !el.value.contains(event.target)) {
            open.value = false;
        }
    });

    open.value = false;
});
</script>

<style lang="scss">
.rv-dropdown > * {
    padding: 0.5rem 1rem;
    display: block !important;
    text-decoration: none !important;
}
.rv-dropdown > :not(.disabled) {
    color: #2d3748 !important;
}
.rv-dropdown > *:hover:not(.disabled) {
    background-color: #eee;
}
</style>
