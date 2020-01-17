<template>
    <div class="h-full">
        <esri-map></esri-map>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import EsriMap from '@/components/map/esri-map.vue';

@Component({
    components: {
        EsriMap
    }
})
export default class Shell extends Vue {}
</script>

<style lang="scss" scoped></style>
