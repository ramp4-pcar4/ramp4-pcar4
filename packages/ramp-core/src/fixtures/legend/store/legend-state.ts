import BaseLayer from 'ramp-geoapi/dist/layer/BaseLayer';

export class LegendState {
    legendConfig: LegendConfig | undefined = undefined;
    children: Array<LegendElement> = [];
}

export interface LegendConfig {
    isOpen: boolean;
    reorderable: boolean;
    root: { name: string; children: Array<LegendElement> };
}

// TODO: following should be ported over from separate legend item object definitions file
export interface LegendElement {
    id: string;
    name: string;
    type: 'LegendEntry' | 'LegendGroup' | 'VisibilitySet' | 'InfoSection';
    controls: Array<string>;
    visibility: boolean;
    opacity: number;
    // symbologyExpanded: boolean;
    children: Array<LegendElement> | [];
    expanded: boolean | undefined;
    layer: BaseLayer;
    parent: LegendElement | undefined;
}

interface LegendEntry extends LegendElement {
    children: [];
    layer: BaseLayer;
}

interface LegendGroup extends LegendElement {
    children: Array<LegendEntry | LegendGroup | VisibilitySet>;
    expanded: boolean;
}

interface VisibilitySet extends LegendElement {
    children: Array<LegendElement | LegendGroup>;
    expanded: boolean;
}
