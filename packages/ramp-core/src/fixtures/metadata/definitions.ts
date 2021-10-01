export interface MetadataPayload {
    type: string; // 'xml' or 'html'
    layer: string;
    url: string;
}

export interface MetadataCache {
    [key: string]: string;
}

export interface MetadataState {
    status: string;
    response: DocumentFragment | string | null;
}

export interface MetadataResult {
    status: string;
    response: string;
}
