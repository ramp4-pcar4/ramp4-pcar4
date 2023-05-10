<template>
    <li
        class="flex-col default-focus-style p-4"
        :content="
            t(
                open
                    ? 'notifications.controls.collapse'
                    : 'notifications.controls.expand'
            )
        "
        v-tippy="{ onShow: tooltipShow, theme: 'ramp4', animation: 'scale' }"
        @click="open = !open"
        :class="notification.messageList ? 'cursor-pointer' : ''"
    >
        <div class="flex items-center text-left">
            <span
                >{{ icons[notification.type as NotificationType] }}
                {{ notification.message }}</span
            >
            <span class="flex-grow"></span>
            <div
                class="dropdown-icon p-4 pointer-events-none"
                :class="{ 'transform -rotate-180': open }"
                v-if="notification.messageList"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                >
                    <path
                        d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"
                    />
                </svg>
            </div>
            <button
                type="button"
                @click.stop="removeNotification(notification)"
                class="mx-4 p-4"
                :content="t('notifications.controls.dismiss')"
                v-tippy="{ theme: 'ramp4', animation: 'scale' }"
            >
                <svg
                    class="fill-current w-16 h-16"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 352 512"
                >
                    <path
                        d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
                    />
                </svg>
            </button>
        </div>
        <div v-if="notification.messageList && open" class="text-left">
            <p
                v-for="(message, index) in notification.messageList"
                :key="notification.id + message + index"
            >
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
    [NotificationType.INFO]: '☑',
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
