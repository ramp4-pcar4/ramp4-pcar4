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
                        v-tippy="{
                            placement: 'bottom',
                            theme: 'ramp4',
                            animation: 'scale'
                        }"
                    >
                        <!-- https://fonts.google.com/icons?selected=Material%20Icons%3Aclear_all -->
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            class="fill-current h-24 w-24"
                        >
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path
                                d="M5 13h14v-2H5v2zm-2 4h14v-2H3v2zM7 7v2h14V7H7z"
                            />
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
