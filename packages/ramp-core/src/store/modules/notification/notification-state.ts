export class NotificationState {
    notificationStack: (Notification | NotificationGroup)[] = [
        {
            message: 'hello',
            type: 'info'
        },
        {
            message: 'AHHH',
            type: 'error'
        }
    ];

    groups: { [id: string]: NotificationGroup } = {};
}

export interface Notification {
    message: string;
    type: string;
}

export interface NotificationGroup {
    message: string;
    type: string;
    id: string;
    messageList: string[];
}
