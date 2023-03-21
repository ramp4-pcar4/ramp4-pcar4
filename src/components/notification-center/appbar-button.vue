<template>
    <appbar-button
        :onClickFunction="onClick"
        :tooltip="t('notifications.title')"
        class="notification-button"
        id=""
    >
        <!-- https://fonts.google.com/icons?selected=Material%20Icons%3Anotifications -->
        <svg
            class="fill-current w-24 h-24 mx-8 sm:mx-20"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
        >
            <path
                d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"
            />
        </svg>
        <span
            class="number absolute top-1 right-2 text-white w-18 rounded-full"
            v-if="number && number > 0"
            >{{ number }}</span
        >
    </appbar-button>
</template>

<script setup lang="ts">
import { inject, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useNotificationStore } from '@/stores/notification';
import type { InstanceAPI } from '@/api';

const notificationStore = useNotificationStore();
const { t } = useI18n();
const iApi = inject('iApi') as InstanceAPI;

const number = computed(() => notificationStore.notificationNumber);

const onClick = () => {
    iApi.panel.toggle('notifications');
};
</script>

<style lang="scss" scoped>
.number {
    background: red;
    font-size: 0.8em;
}

.notification-button {
    position: absolute !important;
}
</style>
