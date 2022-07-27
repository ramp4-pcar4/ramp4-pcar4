<template>
    <div class="relative" tabindex="-1">
        <button
            class="p-8 move-left"
            :class="{
                'text-gray-500 hover:text-black focus:text-black': active,
                'text-gray-300': !active
            }"
            :content="$t('panels.controls.moveLeft')"
            v-tippy="{
                placement: 'bottom',
                theme: 'ramp4',
                animation: 'scale'
            }"
        >
            <svg
                class="fill-current w-16 h-16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="4 4 16 16"
                :aria-label="$t('panels.controls.moveLeft')"
            >
                <path
                    d="M 15.41 16.09 L 10.83 11.5 L 15.41 6.91 L 14 5.5 L 8 11.5 L 14 17.5 Z"
                />
            </svg>
        </button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'LeftV',
    props: {
        active: Boolean
    }
});
</script>

<style lang="scss" scoped></style>
