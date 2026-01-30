import { Directive } from '../../../vue/dist/vue.esm-bundler.js';
/**
 * The FocusItem Directive
 *
 * This is to be used within `FocusList`s. Add this to every element you want to traverse between using the arrow keys (see FocusList for more info).
 * This directive adds an id for accessibility if there isn't one on the element already.
 *
 * **Example**:
 *
 * ```
 * <div v-focus-list="'horizontal'">
 *     <button v-focus-item></button>
 *     <button v-focus-item></button>
 *     <button v-focus-item></button>
 * </div>
 * ```
 *
 * You can show the tooltips of truncated text when this is focussed by supplying the value 'show-truncate' to the directive.
 */
export declare const FocusItem: Directive;
export declare function generateID(): string;
