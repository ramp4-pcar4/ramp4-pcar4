import { NotificationType } from '../../api';
export interface Notification {
    message: string;
    type: NotificationType;
    id: string;
}
export interface NotificationGroup {
    message: string;
    type: NotificationType;
    id: string;
    messageList: string[];
}
