import { APIScope, InstanceAPI } from './internal';

import NotificationsScreenV from '@/components/notification-center/screen.vue';

export class NotificationAPI extends APIScope {
    /**
     * Creates an instance of Notification API
     *
     * @param iApi The instance API for the RAMP that this should be associated with.
     */
    constructor(iApi: InstanceAPI) {
        super(iApi);

        this.$iApi.panel.register({
            id: 'notifications-panel',
            config: {
                screens: { 'notifications-screen': NotificationsScreenV }
            }
        });
    }

    /**
     * Shows an error notification with the message provided
     *
     *
     * @param {string} message The message to display in the notification
     * @memberof NotificationAPI
     */
    showError(message: string) {
        this.$vApp.$store.dispatch('notification/showNotification', {
            type: 'error',
            message
        });
    }

    /**
     * Shows an warning notification with the message provided
     *
     *
     * @param {string} message The message to display in the notification
     * @memberof NotificationAPI
     */
    showWarning(message: string) {
        this.$vApp.$store.dispatch('notification/showNotification', {
            type: 'warning',
            message
        });
    }

    /**
     * Shows an info notification with the message provided
     *
     *
     * @param {string} message The message to display in the notification
     * @memberof NotificationAPI
     */
    showInfo(message: string) {
        this.$vApp.$store.dispatch('notification/showNotification', {
            type: 'info',
            message
        });
    }

    /**
     * Adds a notification group, which can be used to hold multiple messages
     *
     * @param {string} id The id for the group
     * @param {string} type The type of notification the group will hold, 'error' 'warning' or 'info'
     * @param {string} message The "main" message for the notification, describing the grouped messages
     * @memberof NotificationAPI
     */
    addGroup(id: string, type: string, message: string) {
        const group = new NotificationGroup(this.$iApi, id, type, message);

        this.$vApp.$store.dispatch('notification/registerGroup', group);
        return group;
    }

    /**
     * Returns the group with the id provided, returns `undefined` if there is no such group
     *
     * @param {string} id The id of the group wanted
     * @returns {Notification Group | undefined}
     * @memberof NotificationAPI
     */
    getGroup(id: string) {
        const group: NotificationGroup | undefined = this.$vApp.$store.get(
            `notification/groups@${id}`
        );

        return group;
    }
}

export class NotificationGroup extends APIScope {
    readonly id: string;
    readonly message: string;
    readonly type: string;

    messageList: string[] = [];

    /**
     * Creates an instance of Notification Group
     *
     * @param $iApi
     * @param id The id for the group
     * @param type The type of notification the group will show
     * @param message The main message for the group
     */
    constructor($iApi: InstanceAPI, id: string, type: string, message: string) {
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
        this.$vApp.$store.dispatch('notification/addToGroup', {
            id: this.id,
            message
        });
    }
}
