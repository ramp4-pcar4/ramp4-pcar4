<template>
    <div class="rv-geosearch-bar flex h-40 pb-4">
        <input
            type="search"
            class="flex-grow border-b text-base px-12 py-8 outline-none focus:shadow-outline border-gray-600 mx-8 h-26 min-w-0"
            :placeholder="$t('geosearch.searchText')"
            :value="searchVal"
            @input="onSearchTermChange($event.target.value)"
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
