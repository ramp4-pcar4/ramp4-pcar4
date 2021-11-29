<template>
    <div>
        <div
            class="p-5 pl-3 flex justify-end flex-wrap even:bg-gray-300"
            v-for="(val, name, itemIdx) in itemData()"
            :key="itemIdx"
        >
            <span class="inline font-bold">{{ val.alias }}</span>
            <span class="flex-auto"></span>
            <span class="inline" v-html="val.value"></span>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

import { FieldDefinition, IdentifyItem } from '@/geo/api';

export default defineComponent({
    name: 'ESRIDefaultV',
    props: {
        fields: {
            type: Object as PropType<Array<FieldDefinition>>,
            required: true
        },
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

            let aliases: any = {};
            this.fields.forEach(field => {
                aliases[field.name] = field.alias || field.name; // use the key name if alias is not defined
            });

            Object.keys(helper).map(key => {
                helper[key] = {
                    value:
                        typeof helper[key] === 'number'
                            ? this.$iApi.$vApp.$n(helper[key], 'number')
                            : helper[key],
                    alias: aliases[key] || key // use the key name if alias is undefined
                };
            });
            return helper;
        }
    }
});
</script>

<style lang="scss"></style>
