import { NotificationType } from '@/api';

export class NotificationState {
    notificationStack: (Notification | NotificationGroup)[] = [];

    groups: { [id: string]: NotificationGroup } = {};
}

export interface Notification {
    message: string;
    type: NotificationType;
}

export interface NotificationGroup {
    message: string;
    type: NotificationType;
    id: string;
    messageList: string[];
}
