export default class CustomResizeObserver {
    private readonly resizeObserver;
    constructor(breakpoints?: {
        [key: string]: number;
    });
    observe(target: Element): void;
}
