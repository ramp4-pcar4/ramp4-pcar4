<template>
    <div class="rv-geosearch-bar relative h-26 mx-8 mb-8">
        <input
            type="text"
            class="border-b w-full text-base py-8 outline-none focus:shadow-outline border-gray-600 h-full min-w-0"
            :class="{ 'border-yellow-500': badChars }"
            :placeholder="t('geosearch.searchText')"
            :value="searchVal"
            @input="onSearchTermChange(($event.target as HTMLInputElement).value)"
            @keyup.enter="
                if (panelStore.mobileView) {
                    ($event.target as HTMLInputElement).blur();
                }
            "
            :aria-label="t('geosearch.searchText')"
            @keypress.enter.prevent
            enterkeyhint="done"
        />
        <span class="absolute inset-y-0 right-8 grid w-10 place-content-center">
            <button
                v-if="badChars"
                class="cursor-default"
                :aria-label="t('geosearch.badChars', { chars: badChars })"
                :content="t('geosearch.badChars', { chars: badChars })"
                v-tippy
            >
                ⚠
            </button>
        </span>
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
const badChars = computed<string>(() =>
    ['"', '$', '!', '*', '+', '?', '^', '{', '}', '(', ')', '|', '[', ']']
        .filter(bc => geosearchStore.searchVal.includes(bc))
        .join('')
);
const setSearchTerm = (value: string) => {
    geosearchStore.setSearchTerm(value);
    geosearchStore.setSearchRegex(value);
};

const onSearchTermChange = debounce(500, (searchTerm: string) => {
    setSearchTerm(searchTerm);
});
</script>

<style lang="scss" scoped></style>
