<template>
    <li
        class="flex-col default-focus-style p-4"
        :content="t(open ? 'notifications.controls.collapse' : 'notifications.controls.expand')"
        v-tippy="{ onShow: tooltipShow, theme: 'ramp4', animation: 'scale' }"
        @click="open = !open"
        :class="notification.messageList ? 'cursor-pointer' : ''"
    >
        <div class="flex items-center text-left">
            <span
                >{{ icons[notification.type as NotificationType] }}
                <span class="select-text cursor-text">{{ notification.message }}</span></span
            >
            <span class="flex-grow"></span>
            <div
                class="dropdown-icon p-4 pointer-events-none"
                :class="{ 'transform -rotate-180': open }"
                v-if="notification.messageList"
            >
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                    <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
                </svg>
            </div>
            <button
                type="button"
                @click.stop="removeNotification(notification)"
                class="mx-4 p-4 text-gray-500 hover:text-black"
                :content="t('notifications.controls.dismiss')"
                v-tippy="{ theme: 'ramp4', animation: 'scale' }"
            >
                <svg
                    class="fill-current"
                    height="16"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 105.16 122.88"
                    fill-rule="evenodd"
                >
                    <path
                        d="M11.17,37.16H94.65a8.4,8.4,0,0,1,2,.16,5.93,5.93,0,0,1,2.88,1.56,5.43,5.43,0,0,1,1.64,3.34,7.65,7.65,0,0,1-.06,1.44L94,117.31v0l0,.13,0,.28v0a7.06,7.06,0,0,1-.2.9v0l0,.06v0a5.89,5.89,0,0,1-5.47,4.07H17.32a6.17,6.17,0,0,1-1.25-.19,6.17,6.17,0,0,1-1.16-.48h0a6.18,6.18,0,0,1-3.08-4.88l-7-73.49a7.69,7.69,0,0,1-.06-1.66,5.37,5.37,0,0,1,1.63-3.29,6,6,0,0,1,3-1.58,8.94,8.94,0,0,1,1.79-.13ZM5.65,8.8H37.12V6h0a2.44,2.44,0,0,1,0-.27,6,6,0,0,1,1.76-4h0A6,6,0,0,1,43.09,0H62.46l.3,0a6,6,0,0,1,5.7,6V6h0V8.8h32l.39,0a4.7,4.7,0,0,1,4.31,4.43c0,.18,0,.32,0,.5v9.86a2.59,2.59,0,0,1-2.59,2.59H2.59A2.59,2.59,0,0,1,0,23.62V13.53H0a1.56,1.56,0,0,1,0-.31v0A4.72,4.72,0,0,1,3.88,8.88,10.4,10.4,0,0,1,5.65,8.8Zm42.1,52.7a4.77,4.77,0,0,1,9.49,0v37a4.77,4.77,0,0,1-9.49,0v-37Zm23.73-.2a4.58,4.58,0,0,1,5-4.06,4.47,4.47,0,0,1,4.51,4.46l-2,37a4.57,4.57,0,0,1-5,4.06,4.47,4.47,0,0,1-4.51-4.46l2-37ZM25,61.7a4.46,4.46,0,0,1,4.5-4.46,4.58,4.58,0,0,1,5,4.06l2,37a4.47,4.47,0,0,1-4.51,4.46,4.57,4.57,0,0,1-5-4.06l-2-37Z"
                    />
                </svg>
            </button>
        </div>
        <div v-if="notification.messageList && open" class="text-left">
            <p v-for="(message, index) in notification.messageList" :key="notification.id + message + index">
                {{ message }}
            </p>
        </div>
    </li>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import { NotificationType } from '@/api/notifications';
import { useI18n } from 'vue-i18n';
import { useNotificationStore } from '@/stores/notification';

const notificationStore = useNotificationStore();
const { t } = useI18n();

const props = defineProps({
    notification: {
        type: Object,
        required: true
    }
});

const open = ref(false);
const icons = reactive({
    [NotificationType.WARNING]: '⚠',
    [NotificationType.INFO]: 'ℹ️',
    [NotificationType.ERROR]: '❌'
});

const removeNotification = (notif: any) => {
    notificationStore.removeNotification(notif);
};
const tooltipShow = () => {
    if (!props.notification.messageList) {
        return false;
    }
};
</script>

<style lang="scss">
.dropdown-icon {
    transition: transform 0.3s cubic-bezier(0.35, 0, 0.25, 1);
}
</style>
