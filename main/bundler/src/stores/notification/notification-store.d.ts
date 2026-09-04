import { Notification } from './notification-state';
import { NotificationGroup } from '../../api';
import { ComputedRef, Ref } from '../../../vue/dist/vue.esm-bundler.js';
export interface NotificationStore {
    notificationStack: Ref<(Notification | NotificationGroup)[]>;
    groups: Ref<{
        [id: string]: NotificationGroup;
    }>;
    notificationNumber: ComputedRef<number>;
    showNotification: (notification: Notification) => void;
    removeNotification: (notification: Notification | NotificationGroup) => void;
    registerGroup: (group: NotificationGroup) => void;
    addToGroup: (id: string, message: string) => void;
    clearAll: () => void;
    removeGroup: (group: NotificationGroup) => void;
}
export declare const useNotificationStore: import('pinia').StoreDefinition<"notification", Pick<NotificationStore, "notificationStack" | "groups">, Pick<NotificationStore, "notificationNumber">, Pick<NotificationStore, "showNotification" | "removeNotification" | "registerGroup" | "addToGroup" | "clearAll" | "removeGroup">>;
