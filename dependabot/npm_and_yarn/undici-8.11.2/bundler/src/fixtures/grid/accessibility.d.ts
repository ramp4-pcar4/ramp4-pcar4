import { GridApi } from 'ag-grid-community';
export declare class GridAccessibilityManager {
    element: HTMLElement;
    agGrid: HTMLElement;
    headerRows: HTMLElement[];
    agGridApi: GridApi;
    mousedown: boolean;
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
    static onCellKeyPress({ event }: {
        event: KeyboardEvent;
    }): void;
    /**
     * Initializes focus lists and listeners for grid keyboard navigation.
     *
     * @param {HTMLElement} element The grid element
     * @param {GridApi} agGridApi The ag-grid grid api
     * @param {ColumnApi} agColumnApi The ag-grid column api
     */
    constructor(element: HTMLElement, agGridApi: GridApi);
    /**
     * Set up the listeners for the grid.
     */
    private initAccessibilityListeners;
    /**
     * Remove all accessibility listeners from the grid.
     */
    removeAccessibilityListeners(): void;
    /**
     * Makes `enter` allow navigation within the cell
     *
     * @param {KeyboardEvent} event The event to handle
     * @param {HTMLElement} cell The grid header cell
     * @param {HTMLElement[]} buttons The list of buttons in the cell
     */
    private cellKeydownHandler;
    /**
     * Removes ability to tab to inner items when focus leaves the cell (and inner items)
     *
     * @param {FocusEvent} event The event to handle
     * @param {HTMLElement} cell The grid header cell
     * @param {HTMLElement[]} buttons The list of buttons in the cell
     */
    private cellBlurHandler;
    /**
     * Handles giving focus back to the cell after shift+tabbing on the first inner item or tabbing on the last
     *
     * @param event The event to handle
     * @param cell The grid header cell
     * @param buttons The list of buttons in the cell
     * @param shift Whether to handle shift tab or regular tab
     */
    private cellButtonTabHandler;
    /**
     * Initializes the handlers needed for click + drag scrolling
     */
    private initScrollListeners;
    /**
     * Removes the handlers for click + drag scrolling
     */
    removeScrollListeners(): void;
    /**
     * Handles starting click + drag scrolling on mousedown
     *
     * @param {MouseEvent} event The mousedown event
     */
    private scrollMouseDownHandler;
}
interface TabToNextHeaderParams {
    backwards: boolean;
    previousHeaderPosition: HeaderPosition | null;
    nextHeaderPosition: HeaderPosition | null;
    headerRowCount: number;
    api: GridApi;
}
interface HeaderPosition {
    headerRowIndex: number;
    column: any;
}
/**
 * Change the tab functionality to move up/down between headers and into the grid cells
 *
 * @param {TabToNextHeaderParams} params The parameters passed by the ag grid callback, see above
 * @returns {HeaderPosition} The new header we want the grid to focus
 */
export declare function tabToNextHeaderHandler(params: TabToNextHeaderParams): HeaderPosition | boolean;
interface TabToNextCellParams {
    backwards: boolean;
    editing: boolean;
    previousCellPosition: CellPosition;
    nextCellPosition: CellPosition | null;
    api: GridApi;
}
interface CellPosition {
    column: any;
    rowIndex: number;
    rowPinned?: string | null;
}
/**
 * Change the tab to move out of the grid and shift+tab to move back to the last header
 *
 * @param {TabToNextHeaderParams} params The parameters passed by the ag grid callback, see above
 * @returns {CellPosition} The new header we want the grid to focus
 */
export declare function tabToNextCellHandler(params: TabToNextCellParams): CellPosition | boolean;
export {};
