<template>
    <panel-screen :panel="panel">
        <template #header>
            {{ t('notifications.title') }}
        </template>

        <template #content>
            <div class="h-full flex flex-col">
                <div class="w-full flex mb-6">
                    <button
                        type="button"
                        @click="clearAll"
                        class="p-4 ml-auto"
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
                            animation: 'scale'
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
                </div>
                <notification-list class="overflow-y-auto"></notification-list>
            </div>
        </template>
    </panel-screen>
</template>

<script setup lang="ts">
import { computed, type PropType } from 'vue';
import notificationList from './notification-list.vue';
import { useI18n } from 'vue-i18n';
import type { PanelInstance } from '@/api';
import { useNotificationStore } from '@/stores/notification';

const notificationStore = useNotificationStore();
const { t } = useI18n();

defineProps({
    panel: {
        type: Object as PropType<PanelInstance>,
        required: true
    }
});

const number = computed(() => notificationStore.notificationNumber);

const clearAll = () => notificationStore.clearAll();
</script>

<style lang="scss"></style>
