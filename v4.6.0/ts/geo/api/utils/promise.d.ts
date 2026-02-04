export declare class DefPromise {
    protected realPromise: Promise<void>;
    resolveMe(): void;
    rejectMe(): void;
    getPromise(): Promise<void>;
    constructor();
}
