<template>
    <!-- Yes Notifications -->
    <ul v-if="notificationStack.length > 0" v-focus-list>
        <template v-for="(notification, index) in notificationStack">
            <div
                v-if="index > 0"
                class="w-full border-b border-black"
                :key="notification.message + index + 'divider'"
            />
            <notification-item
                :key="notification.message + index + 'list-item'"
                :class="[notification.type]"
                :notification="notification"
                v-focus-item
            ></notification-item>
        </template>
    </ul>
    <!-- No Notifications -->
    <div v-else class="flex flex-col items-center h-full">
        <span class="flex-grow" />
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="h-48 w-48 fill-current"
        >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
                d="M18 7l-1.41-1.41-6.34 6.34 1.41 1.41L18 7zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12-1.42-1.41zM.41 13.41L6 19l1.41-1.41L1.83 12 .41 13.41z"
            />
        </svg>
        <span>{{ $t('notifications.empty') }}</span>
        <span style="flex-grow: 6;" />
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Get, Sync, Call } from 'vuex-pathify';

import NotificationItemV from './notification-item.vue';

@Component({
    components: {
        'notification-item': NotificationItemV
    }
})
export default class NotificationListV extends Vue {
    @Get('notification/notificationStack') notificationStack!: any[];
}
</script>

<style lang="scss" scoped></style>
