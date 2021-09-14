<template>
    <div>
        <div
            class="p-5 pl-3 flex justify-end flex-wrap even:bg-gray-300"
            v-for="(val, name, itemIdx) in itemData()"
            :key="itemIdx"
        >
            <span class="inline font-bold">{{ name }}</span>
            <span class="flex-auto"></span>
            <span class="inline" v-html="val"></span>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

import { IdentifyItem } from '@/geo/api';

export default defineComponent({
    name: 'ESRIDefaultV',
    props: {
        identifyData: {
            type: Object as PropType<IdentifyItem>,
            required: true
        }
    },

    methods: {
        // clone identifyData and remove unwanted data
        itemData() {
            const helper: any = {};
            Object.assign(helper, this.identifyData.data);
            if (helper.Symbol !== undefined) delete helper.Symbol;
            return helper;
        }
    }
});
</script>

<style lang="scss"></style>
