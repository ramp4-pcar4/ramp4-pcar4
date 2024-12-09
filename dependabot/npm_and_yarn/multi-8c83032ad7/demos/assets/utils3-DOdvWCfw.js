import { c$ as isBrowser } from './main-CaWYn_3L.js';

/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */

const listSelector = "calcite-list";
const listItemGroupSelector = "calcite-list-item-group";
const listItemSelector = "calcite-list-item";
function getListItemChildLists(slotEl) {
    return Array.from(slotEl.assignedElements({ flatten: true }).filter((el) => el.matches(listSelector)));
}
function getListItemChildren(slotEl) {
    const assignedElements = slotEl.assignedElements({ flatten: true });
    const listItemGroupChildren = assignedElements
        .filter((el) => el?.matches(listItemGroupSelector))
        .map((group) => Array.from(group.querySelectorAll(listItemSelector)))
        .reduce((previousValue, currentValue) => [...previousValue, ...currentValue], []);
    const listItemChildren = assignedElements.filter((el) => el?.matches(listItemSelector));
    const listItemListChildren = assignedElements
        .filter((el) => el?.matches(listSelector))
        .map((list) => Array.from(list.querySelectorAll(listItemSelector)))
        .reduce((previousValue, currentValue) => [...previousValue, ...currentValue], []);
    return [...listItemListChildren, ...listItemGroupChildren, ...listItemChildren];
}
function updateListItemChildren(listItemChildren) {
    listItemChildren.forEach((listItem) => {
        listItem.setPosition = listItemChildren.indexOf(listItem) + 1;
        listItem.setSize = listItemChildren.length;
    });
}
function getDepth(element, includeGroup = false) {
    if (!isBrowser()) {
        return 0;
    }
    const expression = includeGroup
        ? "ancestor::calcite-list-item | ancestor::calcite-list-item-group"
        : "ancestor::calcite-list-item";
    const result = document.evaluate(expression, element, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
    return result.snapshotLength;
}

export { getListItemChildren as a, getListItemChildLists as b, getDepth as g, updateListItemChildren as u };
