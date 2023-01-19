<template>
    <div
        class="rv-geosearch-top-filters sm:flex items-center w-full ml-8 mb-14"
    >
        <div
            class="w-fit inline-block sm:w-1/2 h-26 mb-8 sm:mb-0 pr-16 sm:pr-0"
        >
            <select
                class="form-select border-b border-b-gray-600 w-full h-full py-0 cursor-pointer"
                :value="queryParams.province"
                v-on:change="
                    setProvince({
                        province: ($event.target as HTMLSelectElement).value
                    })
                "
                v-truncate
            >
                <option value="" disabled hidden v-truncate>
                    {{ $t('geosearch.filters.province') }}
                </option>
                <option
                    v-for="province in provinces"
                    v-bind:key="province.code"
                    v-truncate
                >
                    {{ province.name }}
                </option>
            </select>
        </div>
        <div class="sm:w-1/2 h-26 sm:mx-16 flex">
            <select
                class="form-select border-b border-b-gray-600 w-full h-full py-0 cursor-pointer max-w-150"
                :value="queryParams.type"
                v-on:change="
                    setType({
                        type: ($event.target as HTMLSelectElement).value
                    })
                "
                v-truncate
            >
                <option value="" disabled hidden>
                    {{ $t('geosearch.filters.type') }}
                </option>
                <option v-for="type in types" :key="type.code">
                    {{ type.name }}
                </option>
            </select>
            <button
                type="button"
                class="text-gray-400 w-1/8 h-24 pl-8 pr-16 sm:pr-8 hover:text-black disabled:cursor-default disabled:text-gray-400"
                :disabled="!queryParams.type && !queryParams.province"
                v-on:click="clearFilters"
                :content="$t('geosearch.filters.clear')"
                v-tippy="{ placement: 'bottom' }"
            >
                <div class="rv-geosearch-icon">
                    <svg class="fill-current w-18 h-18" viewBox="0 0 23 21">
                        <path
                            d="M 14.7574,20.8284L 17.6036,17.9822L 14.7574,15.1716L 16.1716,13.7574L 19.0178,16.568L 21.8284,13.7574L 23.2426,15.1716L 20.432,17.9822L 23.2426,20.8284L 21.8284,22.2426L 19.0178,19.3964L 16.1716,22.2426L 14.7574,20.8284 Z M 2,2L 19.9888,2.00001L 20,2.00001L 20,2.01122L 20,3.99999L 19.9207,3.99999L 13,10.9207L 13,22.909L 8.99999,18.909L 8.99999,10.906L 2.09405,3.99999L 2,3.99999L 2,2 Z "
                        />
                    </svg>
                </div>
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { InstanceAPI } from '@/api';
import {
    computed,
    inject,
    onBeforeMount,
    onBeforeUnmount,
    ref,
    watch
} from 'vue';
import { useStore } from 'vuex';
import type { GeosearchAPI } from './api/geosearch';

import { GeosearchStore } from './store';
import type { QueryParams } from './store';
import { GeoSearchUI } from './store/geosearch.feature';

const iApi = inject<InstanceAPI>('iApi')!;
const store = useStore();

const provinces = ref<Array<any>>([]);
const types = ref<Array<any>>([]);
const watchers = ref<Array<Function>>([]);

const queryParams = computed<QueryParams>(
    () => store.get(GeosearchStore.queryParams)!
);
const language = computed<string>(() => iApi.language);

const setProvince = (payload: { province?: string; forceReRun?: boolean }) =>
    store.dispatch(GeosearchStore.setProvince, payload);
const setType = (payload: { type?: string; forceReRun?: boolean }) =>
    store.dispatch(GeosearchStore.setType, payload);

// Called when the `clear filters` button is clicked. Clears province and type filters.
const clearFilters = () => {
    setProvince({});
    setType({});
};

// Fetches the most up to date provinces and types.
// Because of the way the GSservice is structured, on language switch, we need to make a new GSservice in the updated language
// and then re fetch all the provinces and types again.
// TODO: In the future, we should look to refactor the code for this fixture to improve clarity and reduce the number of API calls.
const updateProvincesAndTypes = () => {
    store.dispatch(
        GeosearchStore.setGSservice,
        new GeoSearchUI(
            iApi.language,
            iApi.fixture.get<GeosearchAPI>('geosearch').config
        )
    );
    const queryProvCode = provinces.value.find(
        prov => queryParams.value.province === prov.name
    )?.code;
    const queryTypeCode = types.value.find(
        type => queryParams.value.type === type.name
    )?.code;
    (store.get(GeosearchStore.getProvinces) as Promise<Array<any>>).then(
        provs => {
            provinces.value = provs;
            setProvince({
                province: provs.find(prov => prov.code === queryProvCode)?.name,
                forceReRun: true
            });
        }
    );

    (store.get(GeosearchStore.getTypes) as Promise<Array<any>>).then(typs => {
        types.value = typs;
        setType({
            type: typs.find(type => type.code === queryTypeCode)?.name,
            forceReRun: true
        });
    });
};

onBeforeMount(() => {
    updateProvincesAndTypes();
    watchers.value.push(watch(language, updateProvincesAndTypes));
});

onBeforeUnmount(() => {
    watchers.value.forEach(unwatch => unwatch());
});
</script>

<style lang="scss" scoped></style>
