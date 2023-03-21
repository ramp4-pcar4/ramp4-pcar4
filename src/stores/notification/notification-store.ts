import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import type { Notification } from './notification-state';
import { NotificationGroup } from '@/api';

export const useNotificationStore = defineStore('notification', () => {
    const notificationStack = ref<(Notification | NotificationGroup)[]>([]);
    const groups = ref<{ [id: string]: NotificationGroup }>({});

    const notificationNumber = computed(() => {
        return notificationStack.value.length >= 99
            ? 99
            : notificationStack.value.length;
    });

    function showNotification(notification: Notification) {
        notificationStack.value = [notification, ...notificationStack.value];
    }

    function removeNotification(
        notification: Notification | NotificationGroup
    ) {
        if (notificationStack.value.includes(notification)) {
            const index = notificationStack.value.indexOf(notification);
            if (notification instanceof NotificationGroup) {
                removeGroup(notification);
            }
            if (index > -1) {
                notificationStack.value.splice(index, 1);
            }
        }
    }

    function registerGroup(group: NotificationGroup) {
        groups.value[group.id] = group;
    }

    function addToGroup(id: string, message: string) {
        if (groups.value[id]) {
            groups.value[id].messageList.push(message);

            if (!notificationStack.value.includes(groups.value[id])) {
                notificationStack.value = [
                    groups.value[id],
                    ...notificationStack.value
                ];
            }
        }
    }

    function clearAll() {
        Object.values(groups.value).forEach(group => removeGroup(group));
        notificationStack.value = [];
    }

    function removeGroup(group: NotificationGroup) {
        const index = notificationStack.value.indexOf(group);
        if (index > -1) {
            notificationStack.value.splice(index, 1);
        }

        group.messageList = [];
    }

    return {
        notificationStack,
        groups,
        notificationNumber,
        showNotification,
        removeNotification,
        registerGroup,
        addToGroup,
        clearAll
    };
});
