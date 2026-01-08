import type { ColumnDefinition, FilterParams } from '../table-component.vue';
export interface GridCustomTextFilter {
    filterValue: string;
    colDef: ColumnDefinition;
    params: FilterParams;
}
declare const _default: import("vue").DefineComponent<Readonly<{
    params?: any;
}>, {}, unknown, {}, {
    onParentModelChanged(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<Readonly<{
    params?: any;
}>>>, {
    readonly params?: any;
}, {}>;
export default _default;
