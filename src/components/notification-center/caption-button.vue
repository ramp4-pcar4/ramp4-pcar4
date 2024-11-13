<template>
    <dropdown-menu
        position="top-start"
        :tooltip="t('notifications.title')"
        tooltipPlacement="top"
        class="pointer-events-auto sm:flex ml-4 mr-8"
    >
        <template #header>
            <div class="flex items-center hover:text-white">
                <!-- https://fonts.google.com/icons?selected=Material%20Icons%3Anotifications -->
                <svg
                    class="fill-current w-24 h-24"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    :aria-label="t('notifications.open')"
                >
                    <path
                        d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"
                    />
                </svg>
                <span v-if="number && number > 0" class="number rounded-full w-18 text-white">{{ number }}</span>
            </div>
        </template>
        <template v-slot:default="scope">
            <div
                class="notification-dropdown pointer-events-auto bg-white rounded text-center text-black w-500 h-256 flex flex-col p-0"
            >
                <div>
                    <h4 class="pb-8 border-b border-gray-600">
                        {{ t('notifications.title') }}
                    </h4>
                    <div class="absolute flex right-3 top-3">
                        <button
                            type="button"
                            @click="clearAll"
                            class="p-4 mr-6"
                            :class="[
                                !number
                                    ? 'text-gray-300 cursor-default pointer-events-none'
                                    : 'text-gray-500 hover:text-black'
                            ]"
                            :content="t('notifications.controls.clearAll')"
                            :aria-label="t('notifications.controls.clearAll')"
                            v-tippy="{
                                placement: 'bottom',
                                theme: 'ramp4',
                                animation: 'scale',
                                appendTo: 'parent'
                            }"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="fill-current h-20 w-20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M13 17h-9a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6a2 2 0 1 1 4 0a7 7 0 0 1 4 6v2" />
                                <path d="M9 17v1a3 3 0 0 0 4.194 2.753" />
                                <path d="M22 22l-5 -5" />
                                <path d="M17 22l5 -5" />
                            </svg>
                        </button>
                        <close @click="scope.close"></close>
                    </div>
                </div>
                <notification-list class="overflow-y-auto h-230" />
            </div>
        </template>
    </dropdown-menu>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import DropdownMenu from '@/components/controls/dropdown-menu.vue';
import NotificationList from './notification-list.vue';
import { useNotificationStore } from '@/stores/notification';
import { useI18n } from 'vue-i18n';

const notificationStore = useNotificationStore();
const { t } = useI18n();

const number = computed(() => notificationStore.notificationNumber);
const clearAll = () => notificationStore.clearAll();
</script>

<style lang="scss" scoped>
.number {
    background: #e70404;
    font-size: 0.8em;
}
.notification-dropdown {
    min-height: 250px;
    @apply p-0 #{!important};
    &:hover {
        @apply bg-white #{!important};
    }
}
</style>
