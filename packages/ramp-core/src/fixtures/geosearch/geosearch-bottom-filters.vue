<template>
    <div class="rv-geosearch-bottom-filters">
        <label class="inline-flex">
            <div class="bg-white shadow">
                <input
                    type="checkbox"
                    class="form-checkbox border-2 mx-2 border-gray-600"
                    v-model="mutableVisibleOnly"
                    v-on:change="updateExtentFilters"
                />
                <span class="ml">Visible on map</span>
            </div>
        </label>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component({})
export default class GeosearchBottomFilters extends Vue {
    @Prop() visibleOnly!: boolean;

    mutableVisibleOnly!: boolean;

    data() {
        return {
            mutableVisibleOnly: this.visibleOnly
        };
    }

    updateExtentFilters(): void {
        // TODO: implement + call geosearch store action
    }
}
</script>

<style></style>
