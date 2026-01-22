/**
 * Determines whether the container tooltip should be shown on keyboard navigation.
 *
 * Show tooltip only if:
 *  - Tab or Escape was pressed
 *  - container itself is the focused element
 *  - no descendant element is active
 */
export function keyboardTooltipTest(e: Event, el?: Element): boolean {
    const evt = e as KeyboardEvent;

    return ['Tab', 'Escape'].includes(evt.key) && !!el?.matches(':focus') && !el?.hasAttribute('aria-activedescendant');
}
