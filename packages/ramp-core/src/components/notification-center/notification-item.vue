<template>
    <li
        class="flex-col default-focus-style px-4"
        :content="$t(open ? 'notifications.controls.collapse' : 'notifications.controls.expand')"
        v-tippy="{ onShow: tooltipShow, theme: 'ramp4', animation: 'scale' }"
        @click="open = !open"
        :class="notification.messageList ? 'cursor-pointer' : ''"
    >
        <div class="flex items-center h-32">
            <span>{{ icons[notification.type] }} {{ notification.message }}</span>
            <span class="flex-grow"></span>
            <div
                class="mx-4 p-4 pointer-events-none"
                :class="{ 'rotate-180': true }"
                v-if="notification.messageList"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    class="fill-current w-16 h-16"
                >
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
                </svg>
            </div>
            <button
                @click.stop="removeNotification(notification)"
                class="mx-4 p-4"
                :content="$t('notifications.controls.dismiss')"
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

<script lang="ts">
import { Vue, Prop } from 'vue-property-decorator';
import { call } from '@/store/pathify-helper';

import { NotificationType } from '@/api/notifications';

export default class NotificationListV extends Vue {
    @Prop() notification!: any;
    removeNotification: (notification: any) => void = call('notification/removeNotification');

    open: boolean = false;

    icons = {
        [NotificationType.WARNING]: '⚠',
        [NotificationType.INFO]: '☑',
        [NotificationType.ERROR]: '❌'
    };

    tooltipShow() {
        if (!this.notification.messageList) {
            return false;
        }
    }
}
</script>

<style lang="scss"></style>
