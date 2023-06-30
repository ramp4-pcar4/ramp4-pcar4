// From https://philipwalton.com/articles/responsive-components-a-solution-to-the-container-queries-problem/

// Only run if ResizeObserver is supported.
// Create a single ResizeObserver class to handle all
// container elements. The instance is created with a callback,
// which is invoked as soon as an element is observed as well
// as any time that element's size changes.

export default class CustomResizeObserver {
    private readonly resizeObserver: ResizeObserver | undefined;

    constructor(breakpoints?: { [key: string]: number }) {
        this.resizeObserver =
            'ResizeObserver' in self
                ? new ResizeObserver(function (entries) {
                      // Default breakpoints that should apply to all observed
                      // elements that don't define their own custom breakpoints.
                      const defaultBreakpoints = {
                          xs: 200,
                          sm: 576,
                          md: 768,
                          lg: 960
                      };

                      entries.forEach(function (entry) {
                          // If breakpoints are defined on the observed element,
                          // use them. Otherwise use the defaults.
                          const bp = (entry.target as any).dataset.breakpoints
                              ? JSON.parse(
                                    (entry.target as any).dataset.breakpoints
                                )
                              : breakpoints ?? defaultBreakpoints;

                          // Update the matching breakpoints on the observed element.
                          Object.keys(bp).forEach(function (breakpoint) {
                              const minWidth = bp[breakpoint];
                              if (entry.contentRect.width >= minWidth) {
                                  entry.target.classList.add(breakpoint);
                              } else {
                                  entry.target.classList.remove(breakpoint);
                              }
                          });
                      });
                  })
                : undefined;
    }

    observe(target: Element): void {
        this.resizeObserver?.observe(target);
    }
}
