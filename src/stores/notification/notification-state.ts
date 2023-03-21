import type { NotificationType } from '@/api';

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
