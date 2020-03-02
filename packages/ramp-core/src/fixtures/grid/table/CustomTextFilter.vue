<template>
    <div>
        <input class="rv-input w-full" type="text" placeholder="text" @keyup="valueChanged()" v-model="filterValue" />
    </div>
</template>

<script lang="ts">
import { Vue, Watch, Component, Prop } from 'vue-property-decorator';

@Component({})
export default class CustomTextFilter extends Vue {
    data() {
        return {
            filterValue: '',
            colDef: {}
        };
    }

    beforeMount() {
        // would like better way to access panel state manager, pass it down as a prop? (didn't know how to do this)
        this.colDef = this.params.column.colDef;
    }

    valueChanged(): void {
        let that = this;
        this.params.parentFilterInstance(function(instance: any) {
            instance.setModel({
                filterType: 'text',
                type: 'contains',
                filter: that.filterValue
            });
            instance.onFilterChanged();
        });
    }

    onParentModelChanged(parentModel: any): void {
        this.filterValue = !parentModel ? '' : parentModel.filter;
    }

    setModel() {
        return {
            filterType: 'text',
            type: 'contains',
            filter: this.filterValue
        };
    }
}

export default interface CustomTextFilter {
    filterValue: string;
    colDef: any;
    params: any;
}
</script>
