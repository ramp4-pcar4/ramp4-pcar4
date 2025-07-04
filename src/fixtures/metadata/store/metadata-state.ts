import type { LayerInstance } from '@/api';
import type { LineString } from 'geojson';

export interface MetadataState {
    status: string;
    response: DocumentFragment | LineString;
}

export interface MetadataPayload {
    type: string; // 'xml' or 'html'
    layerName: string;
    url: string;
    catalogueUrl: string | undefined;
    layer: LayerInstance | undefined;
    xmlType: string;
    treatXmlAsMarkdown: boolean;
}

export interface MetadataCache {
    [key: string]: string;
}

export interface MetadataResult {
    status: string;
    response: string;
}
