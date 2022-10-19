// a simple abstract model of a layer used by the layer reorder fixture
export interface LayerModel {
    id: string;
    uid: string;
    name: string;
    orderIdx: number;
    componentIdx: number;
    isExpanded: boolean;
    isLoaded: boolean;
    supportsSublayers: boolean;
    sublayers: Array<SublayerModel>;
}

// a simple abstract model of a sublayer used by the layer reorder fixture
export interface SublayerModel {
    id: string;
    name: string;
}
