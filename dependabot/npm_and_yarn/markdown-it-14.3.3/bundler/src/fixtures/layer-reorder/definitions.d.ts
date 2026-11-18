export interface LayerModel {
    id: string;
    uid: string;
    name: string;
    /**
     * Order position in the map (i.e. the layer store)
     */
    orderIdx: number;
    /**
     * Order position in the fixture UI
     */
    componentIdx: number;
    isExpanded: boolean;
    isLoaded: boolean;
    supportsSublayers: boolean;
    sublayers: Array<SublayerModel>;
}
export interface SublayerModel {
    id: string;
    name: string;
}
