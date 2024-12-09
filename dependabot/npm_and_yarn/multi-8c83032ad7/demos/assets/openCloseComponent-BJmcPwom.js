import { eX as readTask } from './main-CaWYn_3L.js';
import { w as whenTransitionDone } from './dom-BGy5LjKF.js';

/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */

/**
 * Exported for testing purposes only
 */
const internalReadTask = readTask;
function isOpen(component) {
    return "opened" in component ? component.opened : component.open;
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
 */
function onToggleOpenCloseComponent(component) {
    internalReadTask(() => {
        if (!component.transitionEl) {
            return;
        }
        whenTransitionDone(component.transitionEl, component.openTransitionProp, () => {
            if (isOpen(component)) {
                component.onBeforeOpen();
            }
            else {
                component.onBeforeClose();
            }
        }, () => {
            if (isOpen(component)) {
                component.onOpen();
            }
            else {
                component.onClose();
            }
        });
    });
}

export { onToggleOpenCloseComponent as o };
