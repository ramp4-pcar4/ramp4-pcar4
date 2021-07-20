<template>
    <dropdown-menu
        position="top-start"
        :tooltip="$t('notifications.title')"
        tooltipPlacement="top"
        class="pointer-events-auto sm:flex mx-16"
    >
        <template #header>
            <div class="flex items-center hover:text-white">
                <!-- https://fonts.google.com/icons?selected=Material%20Icons%3Anotifications -->
                <svg
                    class="fill-current w-24 h-24"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                >
                    <path
                        d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"
                    />
                </svg>
                <span
                    v-if="number && number > 0"
                    class="number rounded-full w-18 text-white"
                    >{{ number }}</span
                >
            </div>
        </template>
        <div
            class="notification-dropdown pointer-events-auto bg-white rounded text-center text-black w-500 h-256 flex flex-col p-0"
        >
            <h4 class="pb-8 border-b border-gray-600">
                {{ $t('notifications.title') }}
            </h4>
            <notification-list class="overflow-y-auto"></notification-list>
        </div>
    </dropdown-menu>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Get } from 'vuex-pathify';

import DropdownMenuV from '@/components/controls/dropdown-menu.vue';
import NotificationListV from './notification-list.vue';

@Component({
    components: {
        'dropdown-menu': DropdownMenuV,
        'notification-list': NotificationListV
    }
})
export default class NotificationsCaptionButtonV extends Vue {
    @Get('notification/notificationNumber') number!: Number;
}
</script>

<style lang="scss" scoped>
.number {
    background: red;
    font-size: 0.8em;
}
.notification-dropdown {
    min-height: 250px;
    &:hover {
        @apply bg-white #{!important};
    }
}
</style>
