<template>
    <div>
        <div class="inline float-left text-xs w-1/2">
            <input class="rv-input" type="date" placeholder="date min" v-model="minVal" @change="minValChanged()" />
        </div>
        <div class="inline float-left w-1/2">
            <input class="rv-input" type="date" placeholder="date max" v-model="maxVal" @change="maxValChanged()" />
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Watch, Component, Prop } from 'vue-property-decorator';

@Component({})
export default class CustomNumberFilter extends Vue {
    minVal: any = null;
    maxVal: any = null;
    colDef: any;

    beforeMount() {
        this.colDef = this.params.column.colDef;
        this.minVal = this.params.minValDefault;
        this.maxVal = this.params.maxValDefault;
        this.minValChanged();
        this.maxValChanged();
    }

    minValChanged() {
        let that = this;
        this.params.parentFilterInstance(function(instance: any) {
            that.setFilterModel(instance);
            that.params.stateManager.setColumnFilter(that.colDef.field + ' min', that.minVal);
        });
    }

    maxValChanged() {
        let that = this;
        this.params.parentFilterInstance(function(instance: any) {
            that.setFilterModel(instance);
            that.params.stateManager.setColumnFilter(that.colDef.field + ' max', that.maxVal);
        });
    }

    setFilterModel(instance: any) {
        let that = this;
        let maxPossibleDate: Date | String = new Date(8640000000000000);
        maxPossibleDate = `${maxPossibleDate.getFullYear()}-${maxPossibleDate.getMonth() + 1}-${maxPossibleDate.getDate()}`;
        let minPossibleDate: Date | String = new Date(0);
        minPossibleDate = `${minPossibleDate.getFullYear()}-${minPossibleDate.getMonth() + 1}-${minPossibleDate.getDate()}`;

        if (that.maxVal !== '' && that.minVal !== '') {
            instance.setModel({
                filterType: 'date',
                type: 'inRange',
                dateFrom: that.minVal,
                dateTo: that.maxVal
            });
        } else if (that.minVal === '') {
            instance.setModel({
                filterType: 'date',
                type: 'inRange',
                dateFrom: minPossibleDate,
                dateTo: that.maxVal
            });
        } else if (that.maxVal === '') {
            instance.setModel({
                filterType: 'date',
                type: 'inRange',
                dateFrom: that.minVal,
                dateTo: maxPossibleDate
            });
        } else {
            instance.setModel(null);
        }
        this.params.api.onFilterChanged();
    }

    onParentModelChanged(parentModel: any) {}

    setModel() {
        return {
            filterType: 'date',
            type: 'inRange',
            filter: this.minVal,
            filterTo: this.maxVal
        };
    }
}

export default interface CustomNumberFilter {
    minVal: any;
    maxVal: any;
    colDef: any;
    params: any;
}
</script>

<style lang="scss" scoped>
.ag-floating-filter-full-body input,
.ag-floating-filter-full-body select,
.rv-global-search {
    @apply bg-transparent text-black-75 h-24 pb-8 border-0 border-b-2;
}
.rv-input {
    @apply m-0 py-1;
}
.rv-input[type=date]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    display: none;
}
</style>
