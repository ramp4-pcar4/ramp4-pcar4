<template>
    <div class="rv-geosearch-bar h-26 mb-8 mx-8">
        <input
            type="search"
            class="border-b w-full text-base py-8 outline-none focus:shadow-outline border-gray-600 h-full min-w-0"
            :placeholder="t('geosearch.searchText')"
            :value="searchVal"
            @input="
                onSearchTermChange(($event.target as HTMLInputElement).value)
            "
            @keyup.enter="
                if (panelStore.mobileView) {
                    ($event.target as HTMLInputElement).blur();
                }
            "
            :aria-label="t('geosearch.searchText')"
            @keypress.enter.prevent
            enterkeyhint="done"
        />
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useGeosearchStore } from './store';
import { debounce } from 'throttle-debounce';
import { useI18n } from 'vue-i18n';
import { usePanelStore } from '@/stores/panel';

const { t } = useI18n();
const geosearchStore = useGeosearchStore();
const panelStore = usePanelStore();

const searchVal = computed(() => geosearchStore.searchVal);
const setSearchTerm = (value: string) => geosearchStore.setSearchTerm(value);
const onSearchTermChange = debounce(500, (searchTerm: string) => {
    setSearchTerm(searchTerm);
});
</script>

<style lang="scss" scoped></style>
