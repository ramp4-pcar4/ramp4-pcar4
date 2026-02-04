export declare const useExportStore: import("pinia").StoreDefinition<"export", import("pinia")._UnwrapAll<Pick<{
    componentSelectedState: import("vue").Ref<{
        title: boolean;
        map: boolean;
        mapElements: boolean;
        legend: boolean;
        footnote: boolean;
        timestamp: boolean;
    }>;
    fileName: import("vue").Ref<string>;
    toggleSelected: (value: {
        name: 'title' | 'map' | 'mapElements' | 'legend' | 'footnote' | 'timestamp';
        selected?: boolean;
    }) => void;
}, "componentSelectedState" | "fileName">>, Pick<{
    componentSelectedState: import("vue").Ref<{
        title: boolean;
        map: boolean;
        mapElements: boolean;
        legend: boolean;
        footnote: boolean;
        timestamp: boolean;
    }>;
    fileName: import("vue").Ref<string>;
    toggleSelected: (value: {
        name: 'title' | 'map' | 'mapElements' | 'legend' | 'footnote' | 'timestamp';
        selected?: boolean;
    }) => void;
}, never>, Pick<{
    componentSelectedState: import("vue").Ref<{
        title: boolean;
        map: boolean;
        mapElements: boolean;
        legend: boolean;
        footnote: boolean;
        timestamp: boolean;
    }>;
    fileName: import("vue").Ref<string>;
    toggleSelected: (value: {
        name: 'title' | 'map' | 'mapElements' | 'legend' | 'footnote' | 'timestamp';
        selected?: boolean;
    }) => void;
}, "toggleSelected">>;
