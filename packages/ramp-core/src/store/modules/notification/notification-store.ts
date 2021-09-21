import { ActionContext, Action, Mutation } from 'vuex';
import { make } from 'vuex-pathify';

import { Notification, NotificationState } from './notification-state';
import { NotificationGroup } from '@/api';
import { RootState } from '@/store/state';

type NotificationContext = ActionContext<NotificationState, RootState>;

type StoreActions = { [key: string]: Action<NotificationState, RootState> };
type StoreMutations = { [key: string]: Mutation<NotificationState> };

export enum NotificationAction {
    showNotification = 'showNotification',
    removeNotification = 'removeNotification',
    registerGroup = 'registerGroup',
    addToGroup = 'addToGroup',
    clearAll = 'clearAll'
}

export enum NotificationMutation {
    SHOW_NOTIFICATION = 'SHOW_NOTIFICATION',
    REMOVE_NOTIFICATION = 'REMOVE_NOTIFICATION',
    ADD_TO_GROUP = 'ADD_TO_GROUP',
    SHOW_GROUP = 'SHOW_GROUP',
    REMOVE_GROUP = 'REMOVE_GROUP',
    REGISTER_GROUP = 'REGISTER_GROUP',
    CLEAR_ALL = 'CLEAR_ALL'
}

const getters = {
    notificationNumber: (state: NotificationState): Number => {
        return state.notificationStack.length >= 99 ? 99 : state.notificationStack.length;
    }
};

const actions: StoreActions = {
    [NotificationAction.showNotification](
        context: NotificationContext,
        notification: Notification
    ) {
        context.commit('SHOW_NOTIFICATION', notification);
    },
    [NotificationAction.removeNotification](
        context: NotificationContext,
        notification: Notification | NotificationGroup
    ) {
        if (context.state.notificationStack.includes(notification)) {
            if (notification instanceof NotificationGroup) {
                context.commit('REMOVE_GROUP', notification);
            }
            context.commit('REMOVE_NOTIFICATION', notification);
        }
    },
    [NotificationAction.registerGroup](context: NotificationContext, group: NotificationGroup) {
        context.commit('REGISTER_GROUP', group);
    },
    [NotificationAction.addToGroup](
        context: NotificationContext,
        value: { id: string; message: string }
    ) {
        if (context.state.groups[value.id]) {
            context.commit('ADD_TO_GROUP', value);

            if (!context.state.notificationStack.includes(context.state.groups[value.id])) {
                context.commit('SHOW_GROUP', value.id);
            }
        }
    },
    [NotificationAction.clearAll](context: NotificationContext) {
        Object.values(context.state.groups).forEach(group =>
            context.commit(NotificationMutation.REMOVE_GROUP, group)
        );

        context.commit('CLEAR_ALL');
    }
};

const mutations: StoreMutations = {
    [NotificationMutation.SHOW_NOTIFICATION](state: NotificationState, notification: Notification) {
        state.notificationStack = [notification, ...state.notificationStack];
    },
    [NotificationMutation.REMOVE_NOTIFICATION](
        state: NotificationState,
        notification: Notification | NotificationGroup
    ) {
        const index = state.notificationStack.indexOf(notification);
        if (index > -1) {
            state.notificationStack.splice(index, 1);
        }
    },
    [NotificationMutation.ADD_TO_GROUP](
        state: NotificationState,
        value: { id: string; message: string }
    ) {
        state.groups[value.id].messageList.push(value.message);
    },
    [NotificationMutation.SHOW_GROUP](state: NotificationState, id: string) {
        state.notificationStack = [state.groups[id], ...state.notificationStack];
    },
    [NotificationMutation.REMOVE_GROUP](state: NotificationState, group: NotificationGroup) {
        const index = state.notificationStack.indexOf(group);
        if (index > -1) {
            state.notificationStack.splice(index, 1);
        }

        group.messageList = [];
    },
    [NotificationMutation.REGISTER_GROUP](state: NotificationState, group: NotificationGroup) {
        state.groups[group.id] = group;
    },
    [NotificationMutation.CLEAR_ALL](state: NotificationState) {
        state.notificationStack = [];
    }
};

export function notification() {
    const state = new NotificationState();

    return {
        namespaced: true,
        state,
        getters: { ...getters },
        actions: { ...actions },
        mutations: { ...mutations, ...make.mutations(state) }
    };
}
