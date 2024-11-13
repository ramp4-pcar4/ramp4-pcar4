<template>
    <div>
        <!-- Yes Notifications -->
        <ul
            v-if="notificationStack.length > 0"
            v-focus-list
            :content="t('panels.controls.items')"
            v-tippy="{ trigger: 'manual', placement: 'top-start' }"
            ref="el"
        >
            <template v-for="(notification, index) in notificationStack" :key="notification.message + index">
                <div v-if="index > 0" class="w-full border-b border-black" />
                <notification-item
                    :class="[notification.type]"
                    :notification="notification"
                    v-focus-item
                ></notification-item>
            </template>
        </ul>
        <!-- No Notifications -->
        <div v-else class="flex flex-col items-center h-full">
            <span class="flex-grow" />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-48 w-48 fill-current">
                <path d="M0 0h24v24H0z" fill="none" />
                <path
                    d="M18 7l-1.41-1.41-6.34 6.34 1.41 1.41L18 7zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12-1.42-1.41zM.41 13.41L6 19l1.41-1.41L1.83 12 .41 13.41z"
                />
            </svg>
            <span>{{ t('notifications.empty') }}</span>
            <span style="flex-grow: 6" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useNotificationStore } from '@/stores/notification';
import NotificationItem from './notification-item.vue';

const notificationStore = useNotificationStore();
const { t } = useI18n();
const el = ref<Element>();

const blurEvent = () => {
    (el.value as any)._tippy.hide();
};

const keyupEvent = (e: Event) => {
    const evt = e as KeyboardEvent;
    if (evt.key === 'Tab' && el.value?.matches(':focus')) {
        (el.value as any)._tippy.show();
    }
};

onMounted(() => {
    el.value?.addEventListener('blur', blurEvent);

    el.value?.addEventListener('keyup', keyupEvent);
});

onBeforeUnmount(() => {
    el.value?.removeEventListener('blur', blurEvent);

    el.value?.removeEventListener('keyup', keyupEvent);
});

const notificationStack = computed(() => notificationStore.notificationStack);
</script>

<style lang="scss" scoped></style>
