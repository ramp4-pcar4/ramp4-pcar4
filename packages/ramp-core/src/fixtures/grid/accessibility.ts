import { ColumnApi, GridApi } from 'ag-grid-community';
import { FocusListManager, generateID } from '@/directives/focus-list';

const FOCUS_LIST_ATTR = 'focus-list';
const FOCUS_ITEM_ATTR = 'focus-item';
const GRID_BODY_SELECTOR = '.ag-body-viewport';
const HEADER_ROW_SELECTOR = '.ag-header-viewport .ag-header-row';

export default class GridAccessibilityManager {
    element: HTMLElement;
    gridBody: HTMLElement;
    headerRows: HTMLElement[];
    gridApi: GridApi;
    columnApi: ColumnApi;
    observer: MutationObserver;

    mousedown: boolean = false;

    /**
     * Initializes focus lists and listeners for grid keyboard navigation.
     *
     * @param {HTMLElement} element The grid element
     * @param {GridApi} gridApi The ag-grid grid api
     * @param {ColumnApi} columnApi The ag-grid column api
     */
    constructor(element: HTMLElement, gridApi: GridApi, columnApi: ColumnApi) {
        this.element = element;
        this.gridApi = gridApi;
        this.columnApi = columnApi;
        this.gridBody = this.element.querySelector(
            GRID_BODY_SELECTOR
        )! as HTMLElement;
        this.headerRows = Array.prototype.slice.call(
            this.element.querySelectorAll(HEADER_ROW_SELECTOR)
        ) as HTMLElement[];

        this.element
            .querySelector('.ag-center-cols-viewport')
            ?.classList.add('overflow-hidden');
        this.element
            .querySelector('.ag-body-horizontal-scroll-viewport')
            ?.setAttribute('tabindex', '-1');

        this.observer = new MutationObserver(mutations => {
            const el = mutations[0].target as HTMLElement;
            this.manageHeaderScrolling(el);
        });

        this.initAccessibilityListeners();
        this.gridBody.toggleAttribute(FOCUS_LIST_ATTR, true);
        new FocusListManager(this.gridBody as HTMLElement, '');
    }

    /**
     * Set up the listeners for the grid
     */
    private initAccessibilityListeners() {
        this.gridBody.addEventListener('keydown', event => {
            this.onKeydown(event);
        });
        this.gridBody.addEventListener(
            'focus',
            () => {
                this.onFocus();
            },
            false
        );
        this.element.addEventListener('mousedown', () => {
            this.onMousedown();
        });
        this.element.addEventListener('mouseup', () => {
            this.onMouseup();
        });

        this.headerRows.forEach((row, index) => {
            // Force rows to not be tabbable
            // since they are created after everything has rendered the parent focus-lists will not be able to toggle them off before user input
            row.setAttribute('tabindex', '-1');
            row.toggleAttribute(FOCUS_LIST_ATTR, true);
            this.observer.observe(row, {
                attributeFilter: ['aria-activedescendant']
            });
            row.addEventListener('focus', () => {
                this.manageHeaderScrolling(row);
            });
            if (index > 0) {
                row.addEventListener('keydown', (event: KeyboardEvent) => {
                    this.shiftTabHandler(event);
                });
            }

            // set up cells as focus list items, need to manually add ID since we can't use the directive
            const headerCells = Array.prototype.slice.call(
                row.querySelectorAll('.ag-header-cell')
            ) as HTMLElement[];
            headerCells.forEach(cell => {
                cell.toggleAttribute('focus-item', true);
                cell.id = generateID();
                cell.classList.add('default-focus-style');
            });

            new FocusListManager(row as HTMLElement, 'horizontal');
        });
    }

    /**
     * Remove all accessibility listeners from the grid
     */
    removeAccessibilityListeners() {
        this.gridBody.removeEventListener('keydown', event => {
            this.onKeydown(event);
        });
        this.gridBody.removeEventListener(
            'focus',
            () => {
                this.onFocus();
            },
            true
        );
        this.element.removeEventListener('mousedown', () => {
            this.onMousedown();
        });
        this.element.removeEventListener('mouseup', () => {
            this.onMouseup();
        });
        this.observer.disconnect();

        this.headerRows.forEach(row => {
            row.removeEventListener('focus', () => {
                this.manageHeaderScrolling(row);
            });
        });
    }

    /**
     * Callback for the keydown event.
     * On tab focuses the first cell if needed. On shift+tab backs out to the last header row.
     *
     * @param {KeyboardEvent} event the keyboard event that triggered the callback
     */
    private onKeydown(event: KeyboardEvent) {
        const focusedCell = this.gridApi.getFocusedCell();

        if (event.key === 'Tab' && focusedCell === null) {
            // if first tab into grid body automatically focus on first cell
            const firstCol = this.columnApi.getAllDisplayedColumns()[0];
            this.gridApi.setFocusedCell(0, firstCol);
        } else if (event.key === 'Tab' && event.shiftKey) {
            // Get visible headers, there are invisible ones but they aren't under `.ag-header-viewport`
            const headers = this.element.querySelectorAll(HEADER_ROW_SELECTOR);
            // Prevent the real shift + tab event from happening after focus leaves the grid
            event.preventDefault();
            // Force focus onto the last header
            (headers[headers.length - 1] as HTMLElement).focus();
        }
    }

    /**
     * Helper function to handle the mousedown event
     */
    private onMousedown() {
        this.mousedown = true;
    }

    /**
     * Helper function to handle the mouseup event
     */
    private onMouseup() {
        this.mousedown = false;
    }

    /**
     * Callback for the focus event on the grid body.
     * Manages the grid's focused cell when the grid itself is given focus.
     */
    private onFocus() {
        // Don't want to adjust focused cell if focus was gained via mouseclick
        if (!this.mousedown) {
            let firstCol = this.columnApi.getAllDisplayedColumns()[0];

            const focusedCell = this.gridApi.getFocusedCell();
            if (!this.gridApi.getFocusedCell()) {
                // focus first cell if nothing was focused
                this.gridApi.setFocusedCell(0, firstCol);
                this.gridApi.ensureIndexVisible(0);
                this.gridApi.ensureColumnVisible(firstCol);
            } else {
                if (focusedCell) {
                    this.gridApi.setFocusedCell(
                        focusedCell.rowIndex,
                        focusedCell.column
                    );
                }
            }
        }
    }

    /**
     * Makes sure the currently selected header cell is always visible
     * @param row the header row to manage
     */
    private manageHeaderScrolling(row: Element) {
        if (this.mousedown) {
            return;
        }

        const id = row.getAttribute('aria-activedescendant');
        if (id) {
            row.querySelectorAll(`[${FOCUS_ITEM_ATTR}]`).forEach(
                (cell: Element, index: number) => {
                    if (cell.id === id) {
                        this.gridApi.ensureColumnVisible(
                            this.columnApi.getAllDisplayedColumns()[index]
                        );
                    }
                }
            );
        } else {
            this.gridApi.ensureColumnVisible(
                this.columnApi.getAllDisplayedColumns()[0]
            );
        }
    }

    //TODO: Grid wasn't scrolling to column properly when something inside the header was focused, see if we can make that work
    /**
     * Callback for keydown event on header rows
     * Moves focus to previous header row on shift + tab (instead of anything inside the row)
     *
     * @param event
     */
    private shiftTabHandler(event: KeyboardEvent) {
        if (event.key === 'Tab' && event.shiftKey) {
            event.preventDefault();
            const index = this.headerRows.indexOf(event.target as HTMLElement);
            this.headerRows[index - 1].focus();
        }
    }
}
