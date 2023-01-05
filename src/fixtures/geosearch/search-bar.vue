<template>
    <div class="rv-geosearch-bar h-26 mb-8 mx-8">
        <input
            type="search"
            class="border-b w-full text-base py-8 outline-none focus:shadow-outline border-gray-600 h-full min-w-0"
            :placeholder="$t('geosearch.searchText')"
            :value="searchVal"
            @input="onSearchTermChange($event.target.value)"
            @keyup.enter="
                if ($store.get('panel/mobileView')) {
                    $event?.target?.blur();
                }
            "
            :aria-label="$t('geosearch.searchText')"
            enterkeyhint="done"
        />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { GeosearchStore } from './store';
import { debounce } from 'throttle-debounce';

export default defineComponent({
    data() {
        return {
            // fetch search value and actions from store
            searchVal: this.get(GeosearchStore.searchVal),
            setSearchTerm: this.call(GeosearchStore.setSearchTerm),

            // debounce function for search term change
            onSearchTermChange: debounce(500, (searchTerm: string) => {
                this.setSearchTerm(searchTerm);
            })
        };
    }
});
</script>

<style lang="scss" scoped></style>
