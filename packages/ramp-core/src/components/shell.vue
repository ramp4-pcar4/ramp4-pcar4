<template>
    <div class="h-full relative">
        <esri-map></esri-map>

        <!-- TODO: should inner shell be a separate component? -->
        <div class="inner-shell absolute top-0 left-0 h-full w-full pointer-events-none">
            <panel-stack class="sm:flex absolute inset-0 overflow-hidden xs:pl-40 sm:p-12 sm:pl-80"></panel-stack>
            <map-nav class="absolute right-0 bottom-0 pb-12 pr-12"></map-nav>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Get, Sync, Call } from 'vuex-pathify';

import EsriMap from '@/components/map/esri-map.vue';
import PanelStackV from '@/components/panel-stack/panel-stack.vue';
import MapNavV from '@/components/mapnav/mapnav.vue';

@Component({
    components: {
        EsriMap,
        'panel-stack': PanelStackV,
        'map-nav': MapNavV
    }
})
export default class Shell extends Vue {}
</script>

<style lang="scss" scoped></style>
