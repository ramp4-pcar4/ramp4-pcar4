export declare class DefPromise<T> {
    protected realPromise: Promise<T>;
    resolveMe(v?: T): void;
    rejectMe(): void;
    getPromise(): Promise<T>;
    constructor();
}
