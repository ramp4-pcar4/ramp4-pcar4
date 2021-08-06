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
        <template v-slot:default="scope">
            <div
                class="notification-dropdown pointer-events-auto bg-white rounded text-center text-black w-500 h-256 flex flex-col p-0"
            >
                <div>
                    <h4 class="pb-8 border-b border-gray-600">
                        {{ $t('notifications.title') }}
                    </h4>
                    <div class="absolute flex right-3 top-3">
                        <button
                            @click="clearAll"
                            class="text-gray-500 hover:text-black p-4 mr-6"
                            :content="$t('notifications.controls.clearAll')"
                            v-tippy="{ placement: 'bottom' }"
                        >
                            <!-- https://fonts.google.com/icons?selected=Material%20Icons%3Aclear_all -->
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                class="fill-current h-24 w-24"
                            >
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path
                                    d="M5 13h14v-2H5v2zm-2 4h14v-2H3v2zM7 7v2h14V7H7z"
                                />
                            </svg>
                        </button>
                        <close @click="scope.close"></close>
                    </div>
                </div>
                <notification-list class="overflow-y-auto"></notification-list>
            </div>
        </template>
    </dropdown-menu>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-property-decorator';
import { Call, Get } from 'vuex-pathify';
import { get } from '@/store/pathify-helper';

import DropdownMenuV from '@/components/controls/dropdown-menu.vue';
import NotificationListV from './notification-list.vue';

@Options({
    components: {
        'dropdown-menu': DropdownMenuV,
        'notification-list': NotificationListV
    }
})
export default class NotificationsCaptionButtonV extends Vue {
    number: Number = get('notification/notificationNumber');
    // @Get('notification/notificationNumber') number!: Number;
    @Call('notification/clearAll') clearAll!: () => void;
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
