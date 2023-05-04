<template>
    <div class="w-32 h-32">
        <button
            type="button"
            class="text-gray-500 hover:text-black focus:text-black w-full h-full flex justify-center items-center"
            :content="t(`panels.controls.${active ? 'collapse' : 'expand'}`)"
            v-tippy="{
                placement: 'bottom',
                theme: 'ramp4',
                animation: 'scale',
                hideOnClick: false
            }"
        >
            <!-- EXPAND https://fonts.google.com/icons?selected=Material%20Icons%3Aexpand%3A -->
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                class="h-24 w-24 fill-current transform rotate-90"
                v-if="!active"
            >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path
                    d="M4 20h16v2H4zM4 2h16v2H4zm9 7h3l-4-4-4 4h3v6H8l4 4 4-4h-3z"
                />
            </svg>

            <!-- Collapse/shrink/compress/etc. https://fonts.google.com/icons?selected=Material%20Icons%3Acompress%3A -->
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                class="h-24 w-24 fill-current transform rotate-90"
                v-else
            >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path
                    d="M8 19h3v3h2v-3h3l-4-4-4 4zm8-15h-3V1h-2v3H8l4 4 4-4zM4 9v2h16V9H4z"
                />
                <path d="M4 12h16v2H4z" />
            </svg>
        </button>
    </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

defineProps({
    active: Boolean
});
const { t } = useI18n();
</script>
