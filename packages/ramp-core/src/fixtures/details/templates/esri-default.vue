<template>
    <div>
        <div class="p-5 pl-3 flex justify-end flex-wrap even:bg-gray-300" v-for="(val, name, itemIdx) in identifyData.data" :key="itemIdx">
            <span class="inline font-bold">{{ name }}</span>
            <span class="flex-auto"></span>
            <span class="inline" v-html="val"></span>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Get, Sync, Call } from 'vuex-pathify';

import { PanelInstance } from '@/api';
import { IdentifyResult, IdentifyResultSet, IdentifyItem, IdentifyResultFormat } from 'ramp-geoapi';

@Component({})
export default class ESRIDefaultV extends Vue {
    // passed in by the details panel. Contains all of the identify data.
    @Prop() identifyData!: Object;
}
</script>

<style lang="scss"></style>
