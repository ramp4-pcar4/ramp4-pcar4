<template>
    <div class="rv-geosearch-bar flex h-16 pb-4">
        <input
            type="search"
            class="flex-grow border-b text-base px-12 py-8 outline-none focus:shadow-outline border-gray-600 mx-8 h-8"
            :placeholder="$t('searchText')"
            :value="searchVal"
            @input="onSearchTermChange($event.target.value)"
        />
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Get, Sync, Call } from 'vuex-pathify';

import { GeosearchStore } from './store';
import { debounce } from 'debounce';

@Component
export default class GeosearchBar extends Vue {
    // fetch geosearch search value from store
    @Get(GeosearchStore.searchVal) searchVal!: string;

    // import required geosearch actions
    @Call(GeosearchStore.setSearchTerm) setSearchTerm!: (searchTerm: string) => void;

    // debounce function for search term change
    onSearchTermChange = debounce((searchTerm: string) => {
        this.setSearchTerm(searchTerm);
    }, 500);
}
</script>

<style lang="scss" scoped></style>
