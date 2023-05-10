<template>
    <button
        type="button"
        @click="iApi.panel.get('notifications').open()"
        class="pointer-events-auto items-center absolute left-8 bottom-36 p-6 block sm:display-none bg-black-75 rounded-full text-gray-400 hover:text-white"
        :content="t('notifications.title')"
        v-tippy
    >
        <!-- https://fonts.google.com/icons?selected=Material%20Icons%3Anotifications -->
        <svg
            class="fill-current w-24 h-24"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
        >
            <path
                d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"
            />
        </svg>
        <span
            v-if="number && number > 0"
            class="number absolute -top-2 -right-2 text-white w-18 rounded-full"
            >{{ number }}</span
        >
    </button>
</template>

<script setup lang="ts">
import type { InstanceAPI } from '@/api';
import { useNotificationStore } from '@/stores/notification';
import { computed, inject } from 'vue';
import { useI18n } from 'vue-i18n';

const notificationStore = useNotificationStore();
const iApi = inject('iApi') as InstanceAPI;
const { t } = useI18n();

const number = computed(() => notificationStore.notificationNumber);
</script>

<style lang="scss" scoped>
.number {
    background: red;
    font-size: 0.8em;
}
</style>
