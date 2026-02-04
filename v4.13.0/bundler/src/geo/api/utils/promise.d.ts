export declare class DefPromise<T> {
    protected realPromise: Promise<T>;
    resolveMe(_v?: T): void;
    rejectMe(): void;
    getPromise(): Promise<T>;
    constructor();
}
