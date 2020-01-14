<template>
    <esri-map></esri-map>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import EsriMap from '@/components/map/esri-map.vue';

@Component({
    components: {
        EsriMap
    }
})
export default class RvShell extends Vue {}
</script>

<style lang="scss" scoped></style>
