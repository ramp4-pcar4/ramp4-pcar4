import type { LayerInstance } from '@/api';

export class MetadataState {
    status: string = '';
    response: DocumentFragment | string = '';
}

export interface MetadataPayload {
    type: string; // 'xml' or 'html'
    layerName: string;
    url: string;
    layer: LayerInstance | undefined;
}

export interface MetadataCache {
    [key: string]: string;
}

export interface MetadataResult {
    status: string;
    response: string;
}
