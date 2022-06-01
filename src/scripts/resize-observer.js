// From https://philipwalton.com/articles/responsive-components-a-solution-to-the-container-queries-problem/

// Only run if ResizeObserver is supported.
if ('ResizeObserver' in self) {
    // Create a single ResizeObserver instance to handle all
    // container elements. The instance is created with a callback,
    // which is invoked as soon as an element is observed as well
    // as any time that element's size changes.
    var ro = new ResizeObserver(function (entries) {
        // Default breakpoints that should apply to all observed
        // elements that don't define their own custom breakpoints.
        var defaultBreakpoints = { xs: 200, sm: 576, md: 768, lg: 960 };

        entries.forEach(function (entry) {
            // If breakpoints are defined on the observed element,
            // use them. Otherwise use the defaults.
            var breakpoints = entry.target.dataset.breakpoints
                ? JSON.parse(entry.target.dataset.breakpoints)
                : defaultBreakpoints;

            // Update the matching breakpoints on the observed element.
            Object.keys(breakpoints).forEach(function (breakpoint) {
                var minWidth = breakpoints[breakpoint];
                if (entry.contentRect.width >= minWidth) {
                    entry.target.classList.add(breakpoint);
                } else {
                    entry.target.classList.remove(breakpoint);
                }
            });
        });
    });
}

export default ro;
