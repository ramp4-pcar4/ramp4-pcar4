<template>
    <div class="rv-geosearch-bar h-4 pb-2">
        <button class="text-gray-500 hover:text-black h-4">
            <div class="geosearch-icon-container">
                <svg class="fill-current w-4 h-4" viewBox="0 0 18 18">
                    <g id="menu"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" /></g>
                </svg>
                <!-- <span
                    class="text-center text-white rounded absolute bg-gray-200 invisible group-hover:visible w-7 top-100 left-50 -ml-16 z-1"
                >
                    Menu
                </span> -->
            </div>
        </button>

        <input
            type="search"
            class="form-input border-b border-gray-600 mx-2 h-2 w-2/3"
            placeholder="Search text"
            v-model="mutableSearchTerm"
            v-on:change="onSearchTermChange(mutableSearchTerm)"
        />

        <button class="text-gray-500 cursor-default" disabled>
            <div class="geosearch-icon-container">
                <svg class="fill-current w-4 h-4" viewBox="0 0 20 20">
                    <g id="search">
                        <path
                            d="M 15.5 14 h -0.79 l -0.28 -0.27 C 15.41 12.59 16 11.11 16 9.5 C 16 5.91 13.09 3 9.5 3 S 3 5.91 3 9.5 S 5.91 16 9.5 16 c 1.61 0 3.09 -0.59 4.23 -1.57 l 0.27 0.28 v 0.79 l 5 4.99 L 20.49 19 l -4.99 -5 Z m -6 0 C 7.01 14 5 11.99 5 9.5 S 7.01 5 9.5 5 S 14 7.01 14 9.5 S 11.99 14 9.5 14 Z"
                        />
                    </g>
                </svg>
                <!-- <span
                    class="text-center text-white rounded absolute bg-gray-200 invisible group-hover:visible w-7 top-100 left-50 -ml-16 z-1"
                >
                    Geolocation search
                </span> -->
            </div>
        </button>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Get, Sync, Call } from 'vuex-pathify';
import { GeosearchStore } from '@/store/modules/geosearch';

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
