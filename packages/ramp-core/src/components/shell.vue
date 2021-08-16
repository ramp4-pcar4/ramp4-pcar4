<template>
    <div class="h-full relative">
        <!-- TODO: should inner shell be a separate component? -->
        <div
            class="
                inner-shell
                absolute
                top-0
                left-0
                h-full
                w-full
                pointer-events-none
            "
        >
            <panel-stack
                class="
                    sm:flex
                    absolute
                    inset-0
                    overflow-hidden
                    xs:pl-40
                    sm:p-12
                    sm:pl-80
                    z-10
                    sm:pb-36
                    xs:pb-28
                "
            ></panel-stack>
            <notification-floating-button
                v-if="!appbarFixture"
            ></notification-floating-button>
            <map-caption class="z-10"></map-caption>
        </div>

        <esri-map v-if="start"></esri-map>
        <div v-else class="w-full h-full">
            <div class="spinner relative inset-x-1/2 inset-y-9/20"></div>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import EsriMapV from '@/components/map/esri-map.vue';
import PanelStackV from '@/components/panel-stack/panel-stack.vue';
import MapCaptionV from '@/components/map/map-caption.vue';
import NotificationsFloatingButtonV from '@/components/notification-center/floating-button.vue';
import { Get } from 'vuex-pathify';
import { FixtureInstance } from '@/api';
import { GlobalEvents } from '@/api';

@Component({
    components: {
        'esri-map': EsriMapV,
        'panel-stack': PanelStackV,
        'map-caption': MapCaptionV,
        'notification-floating-button': NotificationsFloatingButtonV
    }
})
export default class Shell extends Vue {
    @Get(`fixture/items@appbar`) appbarFixture?: FixtureInstance;
    start: boolean = false;

    created() {
        if (this.$iApi.startRequired) {
            this.$iApi.event.once(GlobalEvents.MAP_START, () => {
                this.start = true;
            });
        } else {
            this.$iApi.event.emit(GlobalEvents.MAP_START);
            this.start = true;
        }
    }
}
</script>

<style lang="scss" scoped>
.spinner {
    border: 10px solid #b3d4fc;
    border-top: 10px solid #3f51b5;
    border-radius: 50%;
    width: 100px;
    height: 100px;
    animation: spin 2s ease-in-out infinite;
}
</style>
