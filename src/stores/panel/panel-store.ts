import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import { PanelInstance } from '@/api';
import { DefPromise } from '@/geo/api';
import type { PanelDirection } from './panel-state';
import type { PanelConfig } from '@/stores/panel';
import type { ComputedRef, Ref } from 'vue';

export interface PanelStore {
    pinned: Ref<PanelInstance | undefined>;
    priority: Ref<PanelInstance | undefined>;
    stackWidth: Ref<number>;
    remWidth: Ref<number>;
    mobileView: Ref<boolean>;
    reorderable: Ref<boolean>;
    items: Ref<{ [name: string]: PanelInstance }>;
    regPromises: Ref<{ [name: string]: DefPromise<PanelInstance> }>;
    orderedItems: Ref<[]>;
    teleported: Ref<[]>;
    visible: Ref<[]>;
    opacity: Ref<number>;
    getRemainingWidth: ComputedRef<number>;
    getVisible: (screenSize: string) => PanelConfig[];
    getRegPromises: (panelIds: string[]) => Promise<PanelInstance>[];
    openPanel: (panel: PanelInstance) => void;
    closePanel: (panel: PanelInstance) => void;
    movePanel: (panel: PanelInstance, direction: PanelDirection) => void;
    removePanel: (panel: PanelInstance) => void;
    setOpacity: (value: number) => void;
    setStackWidth: (value: number) => void;
    setMobileView: (value: boolean) => void;
    updateVisible: () => void;
    registerPanel: (panel: PanelInstance) => void;
    open: (panel: PanelInstance) => void;
    close: (panel: PanelInstance) => void;
    move: (panel: PanelInstance, direction: PanelDirection) => void;
    remove: (panel: PanelInstance) => void;
    addRegPromise: (panelId: string) => void;
}

export const usePanelStore = defineStore('panel', () => {
    const pinned = ref<PanelInstance | undefined>(undefined);
    const priority = ref<PanelInstance | undefined>(undefined);
    const stackWidth = ref(0);
    const remWidth = ref(0);
    const mobileView = ref(false);
    const reorderable = ref(true);
    const items = ref<{ [name: string]: PanelInstance }>({});
    const regPromises = ref<{ [name: string]: DefPromise<PanelInstance> }>({});
    const orderedItems = ref<PanelInstance[]>([]);
    const teleported = ref<PanelInstance[]>([]);
    const visible = ref<PanelInstance[]>([]);
    const opacity = ref<number>(1);

    /**
     * Returns `remainingWidth` from the state. Displays how much space is left for panels to be displayed on the map.
     *
     * @returns {number}
     */
    const getRemainingWidth = computed((): number => {
        return remWidth.value;
    });

    /**
     * Returns `visible` from the state. If the screenSize of the app is 'xs', returns only the first panel.
     *
     * @param screenSize the size of the app's screen as a string
     * @returns {PanelConfig[]}
     */
    function getVisible(screenSize: string): PanelConfig[] {
        if (screenSize === 'xs' && visible.value.length > 0) {
            return [visible.value.slice().pop()!];
        }
        return visible.value;
    }

    /**
     * Returns registration promises from the state, for the specified panelIds.
     * Should ideally be called when all panelIds have a promise associated with them.
     * @param panelIds the panel Ids for which promises should be returned
     */
    function getRegPromises(panelIds: string[]): Promise<PanelInstance>[] {
        const reguPromises: Promise<PanelInstance>[] = [];
        panelIds.forEach((panelId: string) => {
            if (panelId in regPromises.value) {
                reguPromises.push(regPromises.value[panelId].getPromise());
            }
        });
        return reguPromises;
    }

    function openPanel(panel: PanelInstance): void {
        open(panel);
        updateVisible();
        // panel has been opened now, so we can reset the priority
        priority.value = undefined;
    }

    function closePanel(panel: PanelInstance): void {
        close(panel);
        updateVisible();
    }

    function movePanel(panel: PanelInstance, direction: PanelDirection): void {
        move(panel, direction);
        updateVisible();
    }

    function removePanel(panel: PanelInstance): void {
        remove(panel);
        updateVisible();
    }

    function setOpacity(value: number): void {
        opacity.value = value;
    }

    /**
     * Sets the width of the panel stack and re-calculates which panels are visible given the new width.
     *
     * @param {number} value
     */
    function setStackWidth(value: number): void {
        stackWidth.value = value;
        updateVisible();
    }

    function setMobileView(value: boolean): void {
        mobileView.value = value;
    }

    function updateVisible(): void {
        // TODO: update when panel width system is in place
        let remainingWidth = stackWidth.value;
        const nowVisible: PanelInstance[] = [];
        const defaultWidth = 350;
        const panelMargin = 12;
        const gridMinWidth = 600; // Define a minimum width for the grid

        // add panels until theres no space in the stack
        for (let i = orderedItems.value.length - 1; i >= 0; i--) {
            const panel = orderedItems.value[i];
            let panelWidth = panel.width || defaultWidth;

            // if not in mobile view, all panels have a 12px margin to the right
            if (!mobileView.value) {
                panelWidth += panelMargin;
            } else {
                // if in mobile view, a single panel will take up the whole view
                panelWidth = remainingWidth;
            }

            // If we are dealing with the grid, ensure it doesn't occupy too much space
            if (panel.id === 'grid') {
                // Ensure the grid occupies only up to the remaining width or its min width
                panelWidth = Math.max(Math.min(panelWidth, remainingWidth), gridMinWidth);
            }

            // mobile mode only allows for one panel to be visible
            if ((remainingWidth >= panelWidth && !mobileView.value) || nowVisible.length === 0) {
                remainingWidth -= panelWidth;
                //@ts-expect-error TODO: explain why this is needed or remove
                nowVisible.unshift(panel);
            }

            // Close the grid if it starts taking too much space
            if (panel.id === 'grid' && remainingWidth < gridMinWidth) {
                break;
            }
        }

        // if pinned isn't visible and we are not in mobile mode we need to change the order of the panels (to make it visible)
        if (
            pinned.value &&
            //@ts-expect-error TODO: explain why this is needed or remove
            !nowVisible.includes(pinned.value) &&
            !mobileView.value
        ) {
            let lastElement: PanelInstance;
            // remove elements from visible until theres room for pinned
            for (
                let i = 0;
                i < nowVisible.length - 1 && remainingWidth < (pinned.value.width || defaultWidth) + panelMargin;
                i++
            ) {
                lastElement = nowVisible.shift()!;
                remainingWidth += lastElement.width || defaultWidth;
            }

            if (remainingWidth >= (pinned.value.width || defaultWidth)) {
                // if theres room insert pinned element
                //@ts-expect-error TODO: explain why this is needed or remove
                nowVisible.unshift(pinned.value);
            } else {
                // otherwise there is only one element in `nowVisible` (loop invariant fun)
                // if there is no priority, the one element should be pinned
                // otherwise the priority element stays as the only visible
                if (!priority.value) {
                    lastElement = nowVisible.shift()!;
                    //@ts-expect-error TODO: explain why this is needed or remove
                    nowVisible.unshift(pinned.value);
                }
            }

            const pinnedIndex = orderedItems.value.indexOf(pinned.value);
            //@ts-expect-error TODO: explain why this is needed or remove
            const lastRemovedIndex = orderedItems.value.indexOf(lastElement!);
            // clone the current order, splice out the pinned item, insert it back in after the last element we removed from visible
            const newPanelOrder = orderedItems.value.slice();
            if (lastRemovedIndex > -1) {
                newPanelOrder.splice(pinnedIndex, 1);
                newPanelOrder.splice(lastRemovedIndex, 0, pinned.value);
            }

            orderedItems.value = newPanelOrder;
        }
        remWidth.value = remainingWidth;
        visible.value = nowVisible;
    }

    function registerPanel(panel: PanelInstance): void {
        items.value = { ...items.value, [panel.id]: panel };
        // since panel has successfully registered, resolve its associated registration promise
        if (!(panel.id in regPromises.value)) {
            const regPromise = new DefPromise<PanelInstance>();
            regPromise.resolveMe(panel);
            regPromises.value = {
                ...regPromises.value,
                [panel.id]: regPromise
            };
        } else {
            regPromises.value[panel.id].resolveMe(panel);
        }
    }

    function open(panel: PanelInstance): void {
        if (panel.teleport) {
            // @ts-expect-error TODO: explain why this is needed or remove
            teleported.value = [...teleported.value, panel];
        } else {
            //@ts-expect-error TODO: explain why this is needed or remove
            orderedItems.value = [...orderedItems.value, panel];
            priority.value = panel;
        }
    }

    function close(panel: PanelInstance): void {
        if (panel.teleport) {
            //@ts-expect-error TODO: explain why this is needed or remove
            const index = teleported.value.indexOf(panel);
            if (index !== -1) {
                teleported.value = [...teleported.value.slice(0, index), ...teleported.value.slice(index + 1)];
            }
        } else {
            //@ts-expect-error TODO: explain why this is needed or remove
            const index = orderedItems.value.indexOf(panel);
            if (index !== -1) {
                orderedItems.value = [...orderedItems.value.slice(0, index), ...orderedItems.value.slice(index + 1)];
            }
        }
    }

    function move(panel: PanelInstance, direction: PanelDirection): void {
        //@ts-expect-error TODO: explain why this is needed or remove
        const index = orderedItems.value.indexOf(panel);
        const delta = direction === 'right' ? 1 : -1;
        if (visible.value.includes(orderedItems.value[index + delta])) {
            [orderedItems.value[index], orderedItems.value[index + delta]] = [
                orderedItems.value[index + delta],
                orderedItems.value[index]
            ];
        }
    }

    function remove(panel: PanelInstance): void {
        // remove from items
        if (items.value[panel.id] !== undefined) {
            delete items.value[panel.id];
        }

        // remove registration promise
        if (regPromises.value[panel.id] !== undefined) {
            delete regPromises.value[panel.id];
        }
        // remove from visible
        //@ts-expect-error TODO: explain why this is needed or remove
        const index = visible.value.indexOf(panel);
        if (index !== -1) {
            visible.value = [...visible.value.slice(0, index), ...visible.value.slice(index + 1)];
        }

        // remove from pinner
        if (pinned.value && pinned.value.id == panel.id) {
            pinned.value = undefined;
        }
    }

    function addRegPromise(panelId: string): void {
        regPromises.value = {
            ...regPromises.value,
            [panelId]: new DefPromise()
        };
    }

    return {
        items,
        regPromises,
        orderedItems,
        pinned,
        priority,
        visible,
        opacity,
        stackWidth,
        remWidth,
        mobileView,
        reorderable,
        teleported,
        getRemainingWidth,
        getVisible,
        getRegPromises,
        openPanel,
        closePanel,
        movePanel,
        removePanel,
        setOpacity,
        setStackWidth,
        setMobileView,
        updateVisible,
        registerPanel,
        addRegPromise
    } as PanelStore;
});
