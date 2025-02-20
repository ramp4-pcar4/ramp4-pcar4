// From https://philipwalton.com/articles/responsive-components-a-solution-to-the-container-queries-problem/

// Create a single ResizeObserver class to handle all
// container elements. The instance is created with a callback,
// which is invoked as soon as an element is observed as well
// as any time that element's size changes.

const DEFAULT_BREAKPOINTS = {
    xs: 200,
    sm: 576,
    md: 768,
    lg: 960
};

export default class CustomResizeObserver {
    private readonly resizeObserver: ResizeObserver;

    constructor(breakpoints?: { [key: string]: number }) {
        this.resizeObserver = new ResizeObserver(entries => {
            if (!entries.length) {
                return;
            }

            // Use requestAnimationFrame to ensure the callback runs after the browser paints to avoid
            // a console error for undelivered notifications. This error occurs because we are adding a class to the target
            // element, possibly before draw, and the browser is warning that an infinite loop is possible (if the class were to trigger a resize).
            window.requestAnimationFrame(() => {
                entries.forEach(entry => {
                    const customData = (entry.target as HTMLElement).dataset.breakpoints;
                    const bp = customData ? JSON.parse(customData) : (breakpoints ?? DEFAULT_BREAKPOINTS);

                    Object.keys(bp).forEach(key => {
                        const minWidth = bp[key];
                        if (entry.contentRect.width >= minWidth) {
                            entry.target.classList.add(key);
                        } else {
                            entry.target.classList.remove(key);
                        }
                    });
                });
            });
        });
    }

    observe(target: Element): void {
        this.resizeObserver?.observe(target);
    }
}
