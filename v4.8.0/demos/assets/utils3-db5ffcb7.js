import './main-ba570a3b.js';

/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.6.0
 */

const CSS = {
    container: "container",
    containerHover: "container--hover",
    containerBorder: "container--border",
    containerBorderSelected: "container--border-selected",
    containerBorderUnselected: "container--border-unselected",
    contentContainer: "content-container",
    contentContainerSelectable: "content-container--selectable",
    contentContainerHasCenterContent: "content-container--has-center-content",
    nestedContainer: "nested-container",
    nestedContainerHidden: "nested-container--hidden",
    content: "content",
    customContent: "custom-content",
    actionsStart: "actions-start",
    contentStart: "content-start",
    label: "label",
    description: "description",
    contentEnd: "content-end",
    contentBottom: "content-bottom",
    actionsEnd: "actions-end",
    selectionContainer: "selection-container",
    selectionContainerSingle: "selection-container--single",
    openContainer: "open-container",
    dragContainer: "drag-container",
};
const SLOTS = {
    actionsStart: "actions-start",
    contentStart: "content-start",
    content: "content",
    contentBottom: "content-bottom",
    contentEnd: "content-end",
    actionsEnd: "actions-end",
};
// Set to zero to extend until the end of the table section.
const MAX_COLUMNS = 0;
const ICONS = {
    selectedMultiple: "check-square-f",
    selectedSingle: "bullet-point-large",
    unselectedMultiple: "square",
    unselectedSingle: "bullet-point-large",
    closedLTR: "chevron-right",
    closedRTL: "chevron-left",
    open: "chevron-down",
    blank: "blank",
    close: "x",
};
const activeCellTestAttribute = "data-test-active";

const listSelector = "calcite-list";
const listItemGroupSelector = "calcite-list-item-group";
const listItemSelector = "calcite-list-item";
function getListItemChildLists(slotEl) {
    return Array.from(slotEl.assignedElements({ flatten: true }).filter((el) => el.matches(listSelector)));
}
function getListItemChildren(slotEl) {
    const assignedElements = slotEl.assignedElements({ flatten: true });
    const listItemGroupChildren = assignedElements.filter((el) => el?.matches(listItemGroupSelector))
        .map((group) => Array.from(group.querySelectorAll(listItemSelector)))
        .reduce((previousValue, currentValue) => [...previousValue, ...currentValue], []);
    const listItemChildren = assignedElements.filter((el) => el?.matches(listItemSelector));
    const listItemListChildren = assignedElements.filter((el) => el?.matches(listSelector))
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
    const expression = includeGroup
        ? "ancestor::calcite-list-item | ancestor::calcite-list-item-group"
        : "ancestor::calcite-list-item";
    const result = document.evaluate(expression, element, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
    return result.snapshotLength;
}

export { CSS as C, ICONS as I, MAX_COLUMNS as M, SLOTS as S, activeCellTestAttribute as a, getListItemChildren as b, getListItemChildLists as c, getDepth as g, updateListItemChildren as u };
