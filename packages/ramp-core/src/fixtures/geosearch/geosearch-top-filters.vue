<template>
    <div class="rv-geosearch-top-filters w-full mt-16">
        <div class="inline-block w-128 h-40 mx-12">
            <select
                class="form-select border-b border-b-gray-600 w-80 h-auto py-0"
                v-model="mutableSelectedProvince"
                v-on:change="setNewProvince(mutableSelectedProvince)"
            >
                <option value="" disabled hidden>Province</option>
                <option v-for="province in provinces" v-bind:key="province.code">
                    {{ province.name }}
                </option>
            </select>
        </div>
        <div class="inline-block w-96 h-40 mx-12">
            <select
                class="form-select border-b border-b-gray-600 w-48 h-auto py-0"
                v-model="mutableSelectedType"
                v-on:change="setNewType(mutableSelectedType)"
            >
                <option value="" disabled hidden>Type</option>
                <option v-for="type in types" v-bind:key="type.code">
                    {{ type.name }}
                </option>
            </select>
        </div>
        <button
            class="inline-block text-gray-500 hover:text-black float-right"
            :disabled="!mutableSelectedType && !mutableSelectedProvince"
            v-on:click="clearFilters"
        >
            <div class="rv-geosearch-icon">
                <svg class="fill-current w-16 pr-8 h-16 pt-4" viewBox="0 0 23 21">
                    <path
                        d="M 14.7574,20.8284L 17.6036,17.9822L 14.7574,15.1716L 16.1716,13.7574L 19.0178,16.568L 21.8284,13.7574L 23.2426,15.1716L 20.432,17.9822L 23.2426,20.8284L 21.8284,22.2426L 19.0178,19.3964L 16.1716,22.2426L 14.7574,20.8284 Z M 2,2L 19.9888,2.00001L 20,2.00001L 20,2.01122L 20,3.99999L 19.9207,3.99999L 13,10.9207L 13,22.909L 8.99999,18.909L 8.99999,10.906L 2.09405,3.99999L 2,3.99999L 2,2 Z "
                    />
                </svg>
                <span
                    class="text-center text-white rounded absolute bg-gray-200 invisible group-hover:visible w-28 top-400 left-200 -ml-64 z-4"
                >
                    Clear filters
                </span>
            </div>
        </button>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Get, Sync, Call } from 'vuex-pathify';

import { GeosearchStore } from './store';
import { ConfigStore } from '@/store/modules/config';

@Component({})
export default class GeosearchTopFilters extends Vue {
    @Prop() provinces!: Array<any>;
    @Prop() types!: Array<any>;
    @Prop() selectedProvince!: string;
    @Prop() selectedType!: string;

    @Call(GeosearchStore.setProvince) setProvince!: (prov: any) => any;
    @Call(GeosearchStore.setType) setType!: (type: any) => any;

    mutableSelectedProvince!: string;
    mutableSelectedType!: string;

    data() {
        return {
            mutableSelectedProvince: this.selectedProvince,
            mutableSelectedType: this.selectedType
        };
    }

    setNewProvince(province: string): void {
        this.setProvince(province);
    }

    setNewType(type: string): void {
        this.setType(type);
    }

    clearFilters(): void {
        this.mutableSelectedProvince = '';
        this.mutableSelectedType = '';
        this.setProvince(undefined);
        this.setType(undefined);
    }
}
</script>

<style lang="scss" scoped></style>
