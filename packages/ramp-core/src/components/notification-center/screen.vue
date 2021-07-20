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
            <notification-list></notification-list>
        </template>
    </panel-screen>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

import { PanelInstance } from '@/api';

import NotificationListV from './notification-list.vue';

@Component({
    components: {
        'notification-list': NotificationListV
    }
})
export default class NotificationsScreenV extends Vue {
    @Prop() panel!: PanelInstance;

    get isPinned(): boolean {
        return this.panel.isPinned;
    }
}
</script>

<style lang="scss" scoped></style>
