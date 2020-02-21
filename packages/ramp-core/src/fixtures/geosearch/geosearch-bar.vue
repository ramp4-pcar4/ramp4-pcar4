<template>
    <div class="rv-geosearch-bar flex h-16 py-4">
        <input
            type="search"
            class="form-input flex-grow border-b border-gray-600 mx-8 h-8"
            placeholder="Search text"
            v-model="mutableSearchTerm"
            v-on:change="onSearchTermChange(mutableSearchTerm)"
        />

        <!-- <button class="text-gray-500 cursor-default" disabled>
            <div class="geosearch-icon-container">
                <svg class="fill-current w-16 h-16" viewBox="0 0 20 20">
                    <g id="search">
                        <path
                            d="M 15.5 14 h -0.79 l -0.28 -0.27 C 15.41 12.59 16 11.11 16 9.5 C 16 5.91 13.09 3 9.5 3 S 3 5.91 3 9.5 S 5.91 16 9.5 16 c 1.61 0 3.09 -0.59 4.23 -1.57 l 0.27 0.28 v 0.79 l 5 4.99 L 20.49 19 l -4.99 -5 Z m -6 0 C 7.01 14 5 11.99 5 9.5 S 7.01 5 9.5 5 S 14 7.01 14 9.5 S 11.99 14 9.5 14 Z"
                        />
                    </g>
                </svg>
            </div>
        </button> -->
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Get, Sync, Call } from 'vuex-pathify';
import { GeosearchStore } from './store';

@Component({})
export default class GeosearchBar extends Vue {
    @Prop() searchTerm!: string;
    mutableSearchTerm!: string;

    @Call(GeosearchStore.setSearchTerm) setSearchTerm!: (searchTerm: string) => any;

    data() {
        return {
            mutableSearchTerm: this.searchTerm
        };
    }

    onSearchTermChange(searchTerm: string) {
        this.setSearchTerm(searchTerm);
    }
}
</script>

<style lang="scss" scoped></style>
