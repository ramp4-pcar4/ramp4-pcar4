<template>
    <panel-screen>
        <template #header>
            {{ $t('notifications.title') }}
        </template>

        <template #controls>
            <pin @click="panel.pin()" :active="isPinned"></pin>
            <close @click="panel.close()"></close>
        </template>

        <template #content>
            <div class="h-full flex flex-col">
                <div class="w-full flex mb-6">
                    <button
                        @click="clearAll"
                        class="text-gray-500 hover:text-black p-4 ml-auto"
                        :content="$t('notifications.controls.clearAll')"
                        v-tippy="{ placement: 'bottom', theme: 'ramp4', animation: 'scale' }"
                    >
                        <!-- https://fonts.google.com/icons?selected=Material%20Icons%3Aclear_all -->
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            class="fill-current h-24 w-24"
                        >
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path d="M5 13h14v-2H5v2zm-2 4h14v-2H3v2zM7 7v2h14V7H7z" />
                        </svg>
                    </button>
                </div>
                <notification-list class="overflow-y-auto"></notification-list>
            </div>
        </template>
    </panel-screen>
</template>

<script lang="ts">
import { Vue, Options, Prop } from 'vue-property-decorator';
import { call } from '@/store/pathify-helper';

import { PanelInstance } from '@/api';

import NotificationListV from './notification-list.vue';

@Options({
    components: {
        'notification-list': NotificationListV
    }
})
export default class NotificationsScreenV extends Vue {
    @Prop() panel!: PanelInstance;

    clearAll: () => void = call('notification/clearAll');

    get isPinned(): boolean {
        return this.panel.isPinned;
    }
}
</script>

<style lang="scss"></style>
