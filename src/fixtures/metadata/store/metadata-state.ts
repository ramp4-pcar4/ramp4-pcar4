export class MetadataState {
    status: string = '';
    response: DocumentFragment | string | null = null;
}

export interface MetadataPayload {
    type: string; // 'xml' or 'html'
    layerName: string;
    url: string;
    uid: string;
}

export interface MetadataCache {
    [key: string]: string;
}

export interface MetadataResult {
    status: string;
    response: string;
}
