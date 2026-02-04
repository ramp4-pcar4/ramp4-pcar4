import type { Directive } from 'vue';
/**
 * The Truncate Directive
 *
 * It makes the text truncate as needed and adds a tooltip that shows IFF the text is actually truncated.
 *
 * The binding value looks like:
 * ```
 * {
 *      externalTrigger: boolean,
 *      options: tippyOptions
 * }
 * ```
 * if externalTrigger is present you must put the attribute `truncate-trigger` on the element you wish to be the tooltip trigger (this element must be an ancestor of the element with v-truncate)
 *
 */
export declare const Truncate: Directive;
