import { APIScope, InstanceAPI } from './internal';
import { useNotificationStore } from '../stores/notification';
export declare const enum NotificationType {
    ERROR = "error",
    INFO = "info",
    WARNING = "warning"
}
export declare class NotificationAPI extends APIScope {
    notificationStore: ReturnType<typeof useNotificationStore>;
    /**
     * Creates an instance of Notification API
     *
     * @param iApi The instance API for the RAMP that this should be associated with.
     */
    constructor(iApi: InstanceAPI);
    /**
     * Shows a notification with the type and message provided
     *
     * @param {NotificationType} type The type of notification to display
     * @param {string} message The message to display in the notification
     * @memberof NotificationAPI
     */
    show(type: NotificationType, message: string): void;
    /**
     * Adds a notification group, which can be used to hold multiple messages.
     *
     * @param {string} id The id for the group
     * @param {NotificationType} type The type of notification the group will hold, 'error' 'warning' or 'info'
     * @param {string} message The "main" message for the notification, describing the grouped messages
     * @memberof NotificationAPI
     */
    addGroup(id: string, type: NotificationType, message: string): NotificationGroup;
    /**
     * Returns the group with the id provided, returns `undefined` if there is no such group
     *
     * @param {string} id The id of the group wanted
     * @returns {NotificationGroup | undefined}
     * @memberof NotificationAPI
     */
    getGroup(id: string): NotificationGroup;
}
export declare class NotificationGroup extends APIScope {
    notificationStore: import('pinia').Store<"notification", import('pinia')._UnwrapAll<Pick<import('../stores/notification').NotificationStore, "notificationStack" | "groups">>, Pick<import('../stores/notification').NotificationStore, "notificationNumber">, Pick<import('../stores/notification').NotificationStore, "showNotification" | "removeNotification" | "registerGroup" | "addToGroup" | "clearAll" | "removeGroup">>;
    readonly id: string;
    readonly message: string;
    readonly type: NotificationType;
    messageList: string[];
    /**
     * Creates an instance of Notification Group
     *
     * @param $iApi
     * @param id The id for the group
     * @param type The type of notification the group will show
     * @param message The main message for the group
     */
    constructor($iApi: InstanceAPI, id: string, type: NotificationType, message: string);
    /**
     * Shows a message under the group
     *
     * @param {string} message The message to show
     * @memberof NotificationGroup
     */
    show(message: string): void;
}
