import type { ColumnApi, GridApi } from 'ag-grid-community';

const GRID_SELECTOR = '.ag-root';
const HEADER_ROW_SELECTOR = '.ag-header-viewport .ag-header-row';

export class GridAccessibilityManager {
    element: HTMLElement;
    agGrid: HTMLElement;
    headerRows: HTMLElement[];
    agGridApi: GridApi;
    agColumnApi: ColumnApi;
    mousedown = false;

    /**
     * Triggered by ag-grid whenever a key is pressed on a focused/active cell.
     * For our use case we open a new browser tab (or window, it's based on the users browser settings)
     * for each href attribute found in the cell content when the 'Enter' key is pressed.
     *
     * Note that for security/performance purposes some browsers limit the number
     * of tabs that can be opened to one. The user can disable this limitation by
     * allowing popups from the website hosting a ramp map (shows up as an icon in the url bar of chrome,
     * other browser may vary).
     */
    static onCellKeyPress({ event }: { event: KeyboardEvent }) {
        function childNodeTraversal(childNodes: ChildNode[]) {
            childNodes.forEach((cN: any) => {
                if (cN.href) {
                    window.open(cN.href);
                }

                if (cN.childNodes.length > 0) {
                    childNodeTraversal(cN.childNodes);
                }
            });
        }

        if (event.key == 'Enter') {
            // @ts-ignore
            childNodeTraversal(event.target.childNodes);
        }
    }

    /**
     * Initializes focus lists and listeners for grid keyboard navigation.
     *
     * @param {HTMLElement} element The grid element
     * @param {GridApi} agGridApi The ag-grid grid api
     * @param {ColumnApi} agColumnApi The ag-grid column api
     */
    constructor(
        element: HTMLElement,
        agGridApi: GridApi,
        agColumnApi: ColumnApi
    ) {
        this.element = element;
        this.agGridApi = agGridApi;
        this.agColumnApi = agColumnApi;
        this.agGrid = this.element.querySelector(GRID_SELECTOR) as HTMLElement;
        this.headerRows = Array.prototype.slice.call(
            this.element.querySelectorAll(HEADER_ROW_SELECTOR)
        ) as HTMLElement[];

        this.element
            .querySelector('.ag-body-horizontal-scroll-viewport')
            ?.setAttribute('tabindex', '-1');

        this.initAccessibilityListeners();
        this.initScrollListeners();
    }

    /**
     * Set up the listeners for the grid
     */
    private initAccessibilityListeners() {
        const headerCells = Array.prototype.slice.call(
            this.headerRows[0].querySelectorAll('.ag-header-cell')
        ) as HTMLElement[];
        headerCells.forEach((cell, index) => {
            if (index < 3) {
                return;
            }
            const buttons = Array.prototype.slice.call(
                cell.querySelectorAll('button')
            ) as HTMLElement[];

            cell.addEventListener('keydown', (event: KeyboardEvent) => {
                this.cellKeydownHandler(event, cell, buttons);
            });

            cell.addEventListener('blur', (event: FocusEvent) => {
                this.cellBlurHandler(event, cell, buttons);
            });

            buttons[buttons.length - 1].addEventListener(
                'keydown',
                (event: KeyboardEvent) => {
                    this.cellButtonTabHandler(event, cell, buttons, false);
                }
            );

            buttons[0].addEventListener('keydown', (event: KeyboardEvent) => {
                this.cellButtonTabHandler(event, cell, buttons, true);
            });
        });
    }

    /**
     * Remove all accessibility listeners from the grid
     */
    removeAccessibilityListeners() {
        const headerCells = Array.prototype.slice.call(
            this.headerRows[0].querySelectorAll('.ag-header-cell')
        ) as HTMLElement[];
        headerCells.forEach((cell, index) => {
            if (index < 3) {
                return;
            }
            const buttons = Array.prototype.slice.call(
                cell.querySelectorAll('button')
            ) as HTMLElement[];

            cell.removeEventListener('keydown', (event: KeyboardEvent) => {
                this.cellKeydownHandler(event, cell, buttons);
            });

            cell.removeEventListener('blur', (event: FocusEvent) => {
                this.cellBlurHandler(event, cell, buttons);
            });

            buttons[buttons.length - 1].removeEventListener(
                'keydown',
                (event: KeyboardEvent) => {
                    this.cellButtonTabHandler(event, cell, buttons, false);
                }
            );

            buttons[0].removeEventListener(
                'keydown',
                (event: KeyboardEvent) => {
                    this.cellButtonTabHandler(event, cell, buttons, true);
                }
            );
        });
    }

    /**
     * Makes `enter` allow navigation within the cell
     *
     * @param {KeyboardEvent} event The event to handle
     * @param {HTMLElement} cell The grid header cell
     * @param {HTMLElement[]} buttons The list of buttons in the cell
     */
    private cellKeydownHandler(
        event: KeyboardEvent,
        cell: HTMLElement,
        buttons: HTMLElement[]
    ) {
        if (event.key === 'Enter' && event.target === cell) {
            event.preventDefault();
            buttons.forEach(item => {
                item.setAttribute('tabindex', '0');
            });
            buttons[0].focus();
        }
    }

    /**
     * Removes ability to tab to inner items when focus leaves the cell (and inner items)
     *
     * @param {FocusEvent} event The event to handle
     * @param {HTMLElement} cell The grid header cell
     * @param {HTMLElement[]} buttons The list of buttons in the cell
     */
    private cellBlurHandler(
        event: FocusEvent,
        cell: HTMLElement,
        buttons: HTMLElement[]
    ) {
        if (
            event.target === cell &&
            !buttons.includes(event.relatedTarget as HTMLElement)
        ) {
            buttons.forEach(item => {
                item.setAttribute('tabindex', '-1');
            });
        }
    }

    /**
     * Handles giving focus back to the cell after shift+tabbing on the first inner item or tabbing on the last
     *
     * @param event The event to handle
     * @param cell The grid header cell
     * @param buttons The list of buttons in the cell
     * @param shift Whether to handle shift tab or regular tab
     */
    private cellButtonTabHandler(
        event: KeyboardEvent,
        cell: HTMLElement,
        buttons: HTMLElement[],
        shift: boolean
    ) {
        if (
            event.key === 'Tab' &&
            ((shift && event.shiftKey) || (!shift && !event.shiftKey))
        ) {
            event.preventDefault();
            cell.focus();
            buttons.forEach(item => {
                item.setAttribute('tabindex', '-1');
            });
        }
    }

    //  **** CLICK & DRAG SCROLLING ****

    /**
     * Initializes the handlers needed for click + drag scrolling
     */
    private initScrollListeners() {
        this.agGrid.style.cursor = 'grab';

        this.agGrid.addEventListener('mousedown', (event: MouseEvent) => {
            this.scrollMouseDownHandler(event);
        });
    }

    /**
     * Removes the handlers for click + drag scrolling
     */
    removeScrollListeners() {
        this.agGrid.style.cursor = 'default';
        this.agGrid.removeEventListener('mousedown', (event: MouseEvent) => {
            this.scrollMouseDownHandler(event);
        });
    }

    /**
     * Handles starting click + drag scrolling on mousedown
     *
     * @param {MouseEvent} event The mousedown event
     */
    private scrollMouseDownHandler(event: MouseEvent) {
        const scrollBar = this.element.querySelector(
            '.ag-body-horizontal-scroll-viewport'
        ) as HTMLElement;

        const scrollStart = scrollBar.scrollLeft;
        const mouseStart = event.clientX;

        this.agGrid.style.cursor = 'grabbing';

        // Handles mouse moving while click is held down
        const scrollMouseMoveHandler = (event: MouseEvent) => {
            const change = event.clientX - mouseStart;
            scrollBar.scrollLeft = scrollStart - change;
        };

        // Removes the handlers that were set
        // Scroll ends when click is let go or when the cursor leaves the element
        const endDragScroll = () => {
            this.agGrid.style.cursor = 'grab';
            this.agGrid.removeEventListener(
                'mousemove',
                scrollMouseMoveHandler
            );
            this.agGrid.removeEventListener('mouseup', endDragScroll);
            this.agGrid.removeEventListener('mouseleave', endDragScroll);
        };

        this.agGrid.addEventListener('mousemove', scrollMouseMoveHandler);
        this.agGrid.addEventListener('mouseup', endDragScroll);
        this.agGrid.addEventListener('mouseleave', endDragScroll);
    }
}

// From https://www.ag-grid.com/vue-data-grid/keyboard-navigation/#tabtonextheader
interface TabToNextHeaderParams {
    // True if the Shift key is also down
    backwards: boolean;
    // The header that currently has focus
    previousHeaderPosition: HeaderPosition | null;
    // The header the grid would normally pick as the next header for this navigation
    nextHeaderPosition: HeaderPosition | null;
    // The number of header rows present in the grid
    headerRowCount: number;
    agApi: GridApi;
    agColumnApi: ColumnApi;
}

interface HeaderPosition {
    // A number from 0 to n, where n is the last header row the grid is rendering
    headerRowIndex: number;
    // The grid column or column group
    column: any;
}

/**
 * Change the tab functionality to move up/down between headers and into the grid cells
 *
 * @param {TabToNextHeaderParams} params The parameters passed by the ag grid callback, see above
 * @returns {HeaderPosition} The new header we want the grid to focus
 */
export function tabToNextHeaderHandler(
    params: TabToNextHeaderParams
): HeaderPosition | null {
    const column = params.previousHeaderPosition!.column;

    const lastIndex = params.previousHeaderPosition!.headerRowIndex;
    let headerRowIndex = params.backwards ? lastIndex - 1 : lastIndex + 1;

    if (headerRowIndex === -1) {
        // null cancels grid handling the keypress, this will move us out of the grid entirely
        return null;
    } else if (headerRowIndex === params.headerRowCount) {
        // headerRowIndex of -1 means move to the first line of cells
        headerRowIndex = -1;
    }

    return { headerRowIndex, column };
}

// From https://www.ag-grid.com/vue-data-grid/keyboard-navigation/#reference-nav-tabToNextCell
interface TabToNextCellParams {
    // True if the Shift key is also down
    backwards: boolean;
    // True if the current cell is editing
    // (you may want to skip cells that are not editable, as the grid will enter the next cell in editing mode also if tabbing)
    editing: boolean;
    // The cell that currently has focus
    previousCellPosition: CellPosition;
    // The cell the grid would normally pick as the next cell for navigation.
    nextCellPosition: CellPosition | null;
    agApi: GridApi;
    agColumnApi: ColumnApi;
}

interface CellPosition {
    // The grid column
    column: any;
    // A positive number from 0 to n, where n is the last row the grid is rendering
    // or -1 if you want to navigate to the grid header
    rowIndex: number;
    // Either 'top', 'bottom' or null (for not pinned)
    rowPinned?: string | null;
}

/**
 * Change the tab to move out of the grid and shift+tab to move back to the last header
 *
 * @param {TabToNextHeaderParams} params The parameters passed by the ag grid callback, see above
 * @returns {CellPosition} The new header we want the grid to focus
 */
export function tabToNextCellHandler(
    params: TabToNextCellParams
): CellPosition | null {
    if (params.backwards) {
        // rowIndex of -1 means go to last header
        return { column: params.previousCellPosition.column, rowIndex: -1 };
    }
    // null cancels grid handling the keypress, this will move us out of the grid entirely
    return null;
}
