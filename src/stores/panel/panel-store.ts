import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import type { PanelInstance } from '@/api';
import { DefPromise } from '@/geo/api';

export const usePanelStore = defineStore('panel', () => {
    const pinned = ref<PanelInstance | null>(null);
    const priority = ref(null);
    const stackWidth = ref(0);
    const remWidth = ref(0);
    const mobileView = ref(false);
    const reorderable = ref(true);
    const items = ref<{ [name: string]: PanelInstance }>({});
    const regPromises = ref<{ [name: string]: DefPromise }>({});
    const orderedItems = ref<PanelInstance[]>([]);
    const visible = ref<PanelInstance[]>([]);

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
    function getVisible(screenSize: string) {
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
    function getRegPromises(panelIds: string[]): Promise<void>[] {
        const reguPromises: Promise<void>[] = [];
        panelIds.forEach((panelId: string) => {
            if (panelId in regPromises.value) {
                reguPromises.push(regPromises.value[panelId].getPromise());
            }
        });
        return reguPromises;
    }

    function openPanel(panel: PanelInstance): void {
        open(panel);
        priority.value = null;
        updateVisible();
    }

    function closePanel(panel: PanelInstance): void {
        if (priority.value === panel) {
            priority.value = null;
        }
        close(panel);
        updateVisible();
    }

    function movePanel(panel: PanelInstance, direction: string): void {
        move(panel, direction);
        updateVisible();
    }

    function removePanel(panel: PanelInstance): void {
        if (priority.value === panel) {
            priority.value = null;
        }
        remove(panel);
        updateVisible();
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

        // add panels until theres no space in the stack
        for (let i = orderedItems.value.length - 1; i >= 0; i--) {
            let panelWidth = orderedItems.value[i].width || 350;

            // if not in mobile view, all panels have a 12px margin to the right
            if (!mobileView.value) {
                panelWidth += 12;
            } else {
                // if in mobile view, a single panel will take up the whole view
                panelWidth = remainingWidth;
            }

            // mobile mode only allows for one panel to be visible
            if (
                (remainingWidth >= panelWidth && !mobileView.value) ||
                nowVisible.length === 0
            ) {
                remainingWidth -= panelWidth;
                //@ts-ignore
                nowVisible.unshift(orderedItems.value[i]);
            }
        }

        // if pinned isn't visible we need to change the order of the panels (to make it visible)
        if (
            pinned.value &&
            //@ts-ignore
            !nowVisible.includes(pinned.value)
        ) {
            let lastElement: PanelInstance;
            // remove elements from visible until theres room for pinned
            for (
                let i = 0;
                i < nowVisible.length - 1 &&
                remainingWidth < (pinned.value.width || 350);
                i++
            ) {
                lastElement = nowVisible.shift()!;
                remainingWidth += lastElement.width || 350;
            }

            if (remainingWidth >= (pinned.value.width || 350)) {
                // if theres room insert pinned element
                //@ts-ignore
                nowVisible.unshift(pinned.value);
            } else {
                // otherwise there is only one element in `nowVisible` (loop invariant fun)
                // if there is no priority, the one element should be pinned
                // otherwise the priority element stays as the only visible
                if (!priority.value) {
                    lastElement = nowVisible.shift()!;
                    //@ts-ignore
                    nowVisible.unshift(pinned.value);
                }
            }

            //@ts-ignore
            const pinnedIndex = orderedItems.value.indexOf(pinned.value);
            //@ts-ignore
            const lastRemovedIndex = orderedItems.value.indexOf(lastElement!);
            // clone the current order, splice out the pinned item, insert it back in after the last element we removed from visible
            const newPanelOrder = orderedItems.value.slice();
            if (lastRemovedIndex > -1) {
                newPanelOrder.splice(pinnedIndex, 1);
                //@ts-ignore
                newPanelOrder.splice(lastRemovedIndex, 0, pinned.value);
            }

            orderedItems.value = newPanelOrder;
        } else {
            priority.value = null;
        }
        remWidth.value = remainingWidth;
        //@ts-ignore
        visible.value = nowVisible;
    }

    function registerPanel(panel: PanelInstance): void {
        items.value = { ...items.value, [panel.id]: panel };
        // since panel has successfully registered, resolve its associated registration promise
        if (!(panel.id in regPromises.value)) {
            const regPromise = new DefPromise();
            regPromise.resolveMe();
            regPromises.value = {
                ...regPromises.value,
                [panel.id]: regPromise
            };
        } else {
            regPromises.value[panel.id].resolveMe();
        }
    }

    function open(panel: PanelInstance): void {
        //@ts-ignore
        orderedItems.value = [...orderedItems.value, panel];
    }

    function close(panel: PanelInstance): void {
        //@ts-ignore
        const index = orderedItems.value.indexOf(panel);
        if (index !== -1) {
            orderedItems.value = [
                ...orderedItems.value.slice(0, index),
                ...orderedItems.value.slice(index + 1)
            ];
        }
    }

    function move(panel: PanelInstance, direction: string): void {
        //@ts-ignore
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
        //@ts-ignore
        const index = visible.value.indexOf(panel);
        if (index !== -1) {
            visible.value = [
                ...visible.value.slice(0, index),
                ...visible.value.slice(index + 1)
            ];
        }

        // remove from pinner
        if (pinned.value !== null && pinned.value.id == panel.id) {
            pinned.value = null;
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
        stackWidth,
        remWidth,
        mobileView,
        reorderable,
        getRemainingWidth,
        getVisible,
        getRegPromises,
        openPanel,
        closePanel,
        movePanel,
        removePanel,
        setStackWidth,
        setMobileView,
        updateVisible,
        registerPanel,
        addRegPromise
    };
});
