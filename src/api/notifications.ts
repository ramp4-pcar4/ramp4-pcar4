import { markRaw } from 'vue';
import { APIScope, InstanceAPI } from './internal';
import NotificationsScreenV from '@/components/notification-center/screen.vue';
import { useNotificationStore } from '@/stores/notification';

export const enum NotificationType {
    ERROR = 'error',
    INFO = 'info',
    WARNING = 'warning'
}

export class NotificationAPI extends APIScope {
    notificationStore: ReturnType<typeof useNotificationStore>;

    /**
     * Creates an instance of Notification API
     *
     * @param iApi The instance API for the RAMP that this should be associated with.
     */
    constructor(iApi: InstanceAPI) {
        super(iApi);

        this.$iApi.panel.register({
            id: 'notifications',
            config: {
                screens: {
                    'notifications-screen': markRaw(NotificationsScreenV)
                },
                alertName: 'notifications.title'
            }
        });

        this.notificationStore = useNotificationStore(this.$vApp.$pinia);
    }

    /**
     * Shows a notification with the type and message provided
     *
     * @param {NotificationType} type The type of notification to display
     * @param {string} message The message to display in the notification
     * @memberof NotificationAPI
     */
    show(type: NotificationType, message: string) {
        // @ts-expect-error the id on the notification will get injected inside showNotification. proper solution is to make two types (one with and one without id), or change params of store.showNotification to be two value params for type and message
        this.notificationStore.showNotification({ type, message });
    }

    /**
     * Adds a notification group, which can be used to hold multiple messages.
     *
     * @param {string} id The id for the group
     * @param {NotificationType} type The type of notification the group will hold, 'error' 'warning' or 'info'
     * @param {string} message The "main" message for the notification, describing the grouped messages
     * @memberof NotificationAPI
     */
    addGroup(id: string, type: NotificationType, message: string) {
        if (this.getGroup(id)) {
            throw new Error('Duplicate notification group id registration: ' + id);
        }
        const group = new NotificationGroup(this.$iApi, id, type, message);

        this.notificationStore.registerGroup(group);
        return group;
    }

    /**
     * Returns the group with the id provided, returns `undefined` if there is no such group
     *
     * @param {string} id The id of the group wanted
     * @returns {NotificationGroup | undefined}
     * @memberof NotificationAPI
     */
    getGroup(id: string) {
        const group: NotificationGroup | undefined = this.notificationStore.groups[id];
        return group;
    }
}

export class NotificationGroup extends APIScope {
    notificationStore = useNotificationStore(this.$vApp.$pinia);

    readonly id: string;
    readonly message: string;
    readonly type: NotificationType;

    messageList: string[] = [];

    /**
     * Creates an instance of Notification Group
     *
     * @param $iApi
     * @param id The id for the group
     * @param type The type of notification the group will show
     * @param message The main message for the group
     */
    constructor($iApi: InstanceAPI, id: string, type: NotificationType, message: string) {
        super($iApi);

        this.id = id;
        this.type = type;
        this.message = message;
    }

    /**
     * Shows a message under the group
     *
     * @param {string} message The message to show
     * @memberof NotificationGroup
     */
    show(message: string) {
        this.notificationStore.addToGroup(this.id, message);
    }
}
