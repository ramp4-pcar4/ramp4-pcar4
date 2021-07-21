<template>
    <div class="rv-geosearch-bar flex h-16 pb-4">
        <input
            type="search"
            class="flex-grow border-b text-base px-12 py-8 outline-none focus:shadow-outline border-gray-600 mx-8 h-8 min-w-0"
            :placeholder="$t('geosearch.searchText')"
            :value="searchVal"
            @input="onSearchTermChange($event.target.value)"
        />
    </div>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator';
import { Get, Call } from 'vuex-pathify';

import { GeosearchStore } from './store';
import { debounce } from 'throttle-debounce';

export default class GeosearchSearchBarV extends Vue {
    // fetch geosearch search value from store
    @Get(GeosearchStore.searchVal) searchVal!: string;

    // import required geosearch actions
    @Call(GeosearchStore.setSearchTerm) setSearchTerm!: (
        searchTerm: string
    ) => void;

    // debounce function for search term change
    onSearchTermChange = debounce(500, (searchTerm: string) => {
        this.setSearchTerm(searchTerm);
    });
}
</script>

<style lang="scss" scoped></style>
