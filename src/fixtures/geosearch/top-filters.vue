<template>
    <div class="rv-geosearch-top-filters sm:flex items-center w-full ml-8 mb-14" ref="el">
        <div class="w-fit inline-block sm:w-1/2 h-26 mb-8 sm:mb-0 pr-16 sm:pr-0">
            <select
                class="border-b border-b-gray-600 w-full h-full py-0 cursor-pointer"
                :value="queryParams.province"
                :aria-label="t('geosearch.filters.province')"
                v-on:change="
                    setProvince({
                        province: ($event.target as HTMLSelectElement).value
                    })
                "
                v-truncate
                v-tippy="{
                    content: t('select.items'),
                    trigger: 'manual',
                    placement: 'top-start'
                }"
                ref="selectProvince"
            >
                <option value="" disabled hidden v-truncate>
                    {{ t('geosearch.filters.province') }}
                </option>
                <option v-for="province in provinces" v-bind:key="province.code" v-truncate>
                    {{ province.name }}
                </option>
            </select>
        </div>
        <div class="sm:w-1/2 h-26 sm:mx-16 flex">
            <select
                class="border-b border-b-gray-600 w-full h-full py-0 cursor-pointer max-w-150"
                :value="queryParams.type"
                :aria-label="t('geosearch.filters.type')"
                v-on:change="
                    setType({
                        type: ($event.target as HTMLSelectElement).value
                    })
                "
                v-truncate
                v-tippy="{
                    content: t('select.items'),
                    trigger: 'manual',
                    placement: 'top-start'
                }"
                ref="selectFilter"
            >
                <option value="" disabled hidden>
                    {{ t('geosearch.filters.type') }}
                </option>
                <option v-for="t in types" :key="t.code">
                    {{ t.name }}
                </option>
            </select>
            <button
                type="button"
                class="text-gray-500 w-1/8 h-24 pl-8 pr-16 sm:pr-8 hover:text-black disabled:cursor-default disabled:text-gray-400"
                :disabled="!queryParams.type && !queryParams.province"
                v-on:click="clearFilters"
                :content="t('geosearch.filters.clear')"
                :aria-label="t('geosearch.filters.clear')"
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
import { computed, inject, onBeforeMount, onBeforeUnmount, onMounted, ref, watch } from 'vue';
import type { GeosearchAPI } from './api/geosearch';
import { useGeosearchStore } from './store';
import type { QueryParams } from './store';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const iApi = inject<InstanceAPI>('iApi')!;
const geosearchStore = useGeosearchStore();
const el = ref<Element>();
const selectProvince = ref<Element>();
const selectFilter = ref<Element>();

const provinces = ref<Array<any>>([]);
const types = ref<Array<any>>([]);
const watchers = ref<Array<() => void>>([]);

const queryParams = computed<QueryParams>(() => geosearchStore.queryParams as QueryParams);
const language = computed<string>(() => iApi.language);

const setProvince = (payload: { province?: string; forceReRun?: boolean }) => geosearchStore.setProvince(payload);
const setType = (payload: { type?: string; forceReRun?: boolean }) => geosearchStore.setType(payload);

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
    geosearchStore.initService(iApi.language, iApi.fixture.get<GeosearchAPI>('geosearch').config);

    // convert current province and type selection to new lang
    const queryProvCode = provinces.value.find(prov => queryParams.value.province === prov.name)?.code;
    const queryTypeCode = types.value.find(type => queryParams.value.type === type.name)?.code;

    // populate province and type selection lists in new lang
    geosearchStore.getProvinces.then(provs => {
        provinces.value = provs;
        setProvince({
            province: provs.find(prov => prov.code === queryProvCode)?.name,
            forceReRun: true
        });
    });
    geosearchStore.getTypes.then(typs => {
        types.value = typs;
        setType({
            type: typs.find(type => type.code === queryTypeCode)?.name,
            forceReRun: true
        });
    });
};

const blurProvince = () => {
    (selectProvince.value as any)._tippy.hide();
};
const blurFilter = () => {
    (selectFilter.value as any)._tippy.hide();
};
const keyupProvince = (e: Event) => {
    const evt = e as KeyboardEvent;
    if (evt.key === 'Tab' && selectProvince.value?.matches(':focus') && navigator.userAgent.includes('Firefox')) {
        (selectProvince.value as any)._tippy.show();
    } else {
        (selectProvince.value as any)._tippy.hide();
    }
};
const keyupFilter = (e: Event) => {
    const evt = e as KeyboardEvent;
    if (evt.key === 'Tab' && selectFilter.value?.matches(':focus') && navigator.userAgent.includes('Firefox')) {
        (selectFilter.value as any)._tippy.show();
    } else {
        (selectFilter.value as any)._tippy.hide();
    }
};

onBeforeMount(() => {
    updateProvincesAndTypes();
    watchers.value.push(watch(language, updateProvincesAndTypes));
});

onMounted(() => {
    selectProvince.value?.addEventListener('blur', blurProvince);
    selectProvince.value?.addEventListener('keyup', keyupProvince);
    selectFilter.value?.addEventListener('blur', blurFilter);
    selectFilter.value?.addEventListener('keyup', keyupFilter);
});

onBeforeUnmount(() => {
    watchers.value.forEach(unwatch => unwatch());

    selectProvince.value?.removeEventListener('blur', blurProvince);
    selectProvince.value?.removeEventListener('keyup', keyupProvince);
    selectFilter.value?.removeEventListener('blur', blurFilter);
    selectFilter.value?.removeEventListener('keyup', keyupFilter);
});
</script>

<style lang="scss" scoped></style>
