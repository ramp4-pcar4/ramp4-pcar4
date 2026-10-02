/**
 * Determines whether the container tooltip should be shown on keyboard navigation.
 *
 * Show tooltip only if:
 *  - Tab or Escape was pressed
 *  - container itself is the focused element
 *  - no descendant element is active
 */
export declare function keyboardTooltipTest(e: Event, el?: Element): boolean;
