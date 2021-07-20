<template>
    <div class="h-full relative">
        <!-- TODO: should inner shell be a separate component? -->
        <div
            class="inner-shell absolute top-0 left-0 h-full w-full pointer-events-none"
        >
            <panel-stack
                class="sm:flex absolute inset-0 overflow-hidden xs:pl-40 sm:p-12 sm:pl-80 z-10 sm:pb-36 xs:pb-28"
            ></panel-stack>
            <notification-floating-button
                v-show="noAppbar"
            ></notification-floating-button>
            <map-caption class="z-10"></map-caption>
        </div>

        <esri-map></esri-map>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import EsriMapV from '@/components/map/esri-map.vue';
import PanelStackV from '@/components/panel-stack/panel-stack.vue';
import MapCaptionV from '@/components/map/map-caption.vue';
import NotificationsFloatingButtonV from '@/components/notification-center/floating-button.vue';

@Component({
    components: {
        'esri-map': EsriMapV,
        'panel-stack': PanelStackV,
        'map-caption': MapCaptionV,
        'notification-floating-button': NotificationsFloatingButtonV
    }
})
export default class Shell extends Vue {}
</script>

<style lang="scss" scoped></style>
