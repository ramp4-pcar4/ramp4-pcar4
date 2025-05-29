import { eM as readTask } from './main-h0RsJOaN.js';

/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.6.0
 */

function isOpen(component) {
    return "opened" in component ? component.opened : component.open;
}
function emitImmediately(component, nonOpenCloseComponent = false) {
    (nonOpenCloseComponent ? component[component.transitionProp] : isOpen(component))
        ? component.onBeforeOpen()
        : component.onBeforeClose();
    (nonOpenCloseComponent ? component[component.transitionProp] : isOpen(component))
        ? component.onOpen()
        : component.onClose();
}
/**
 * Helper to determine globally set transition duration on the given openTransitionProp, which is imported and set in the @Watch("open").
 * Used to emit (before)open/close events both for when the opacity transition is present and when there is none (transition-duration is set to 0).
 *
 * @example
 * import { onToggleOpenCloseComponent, OpenCloseComponent } from "../../utils/openCloseComponent";
 *
 * async componentWillLoad() {
 * // When component initially renders, if `open` was set we need to trigger on load as watcher doesn't fire.
 * if (this.open) {
 *    onToggleOpenCloseComponent(this);
 * }
 * @Watch("open")
 * async toggleModal(value: boolean): Promise<void> {
 *    onToggleOpenCloseComponent(this);
 * }
 *
 * @param component - OpenCloseComponent uses `open` prop to emit (before)open/close.
 * @param nonOpenCloseComponent - OpenCloseComponent uses `expanded` prop to emit (before)open/close.
 */
function onToggleOpenCloseComponent(component, nonOpenCloseComponent = false) {
    readTask(() => {
        if (component.transitionEl) {
            const { transitionDuration: allDurations, transitionProperty: allProps } = getComputedStyle(component.transitionEl);
            const allTransitionDurationsArray = allDurations.split(",");
            const allTransitionPropsArray = allProps.split(",");
            const openTransitionPropIndex = allTransitionPropsArray.indexOf(component.openTransitionProp);
            const transitionDuration = allTransitionDurationsArray[openTransitionPropIndex] ??
                /* Safari will have a single transition value if multiple props share it,
                so we fall back to it if there's no matching prop duration */
                allTransitionDurationsArray[0];
            if (transitionDuration === "0s") {
                emitImmediately(component, nonOpenCloseComponent);
                return;
            }
            const fallbackTimeoutId = setTimeout(() => {
                component.transitionEl.removeEventListener("transitionstart", onStart);
                component.transitionEl.removeEventListener("transitionend", onEndOrCancel);
                component.transitionEl.removeEventListener("transitioncancel", onEndOrCancel);
                emitImmediately(component, nonOpenCloseComponent);
            }, parseFloat(transitionDuration) * 1000);
            component.transitionEl.addEventListener("transitionstart", onStart);
            component.transitionEl.addEventListener("transitionend", onEndOrCancel);
            component.transitionEl.addEventListener("transitioncancel", onEndOrCancel);
            function onStart(event) {
                if (event.propertyName === component.openTransitionProp && event.target === component.transitionEl) {
                    clearTimeout(fallbackTimeoutId);
                    component.transitionEl.removeEventListener("transitionstart", onStart);
                    (nonOpenCloseComponent ? component[component.transitionProp] : isOpen(component))
                        ? component.onBeforeOpen()
                        : component.onBeforeClose();
                }
            }
            function onEndOrCancel(event) {
                if (event.propertyName === component.openTransitionProp && event.target === component.transitionEl) {
                    (nonOpenCloseComponent ? component[component.transitionProp] : isOpen(component))
                        ? component.onOpen()
                        : component.onClose();
                    component.transitionEl.removeEventListener("transitionend", onEndOrCancel);
                    component.transitionEl.removeEventListener("transitioncancel", onEndOrCancel);
                }
            }
        }
    });
}

export { onToggleOpenCloseComponent as o };
