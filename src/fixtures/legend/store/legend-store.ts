import type { LegendConfig } from './legend-state';
import { LayerItem } from './layer-item';
import type { LegendItem } from './legend-item';
import { SectionItem } from './section-item';
import { defineStore } from 'pinia';
import { ref } from 'vue';

// NOTE: Pinia and/or Typescript are dumb because when you provide a type like LegendItem, it does not save it as LegendItem.
// Instead, it is saved as type { _uid: string, ...} i.e. it just saves it as an object with the properties.
// This leads to typescipt grousing in addItem, removeItem and replaceItem below because it does not know that
// LegendItem is literally the same thing as { _uid: string, ...}
// Somebody attempted to grouse about this on GitHub, and Pinia people basically told them "not our problem".
// See https://github.com/vuejs/pinia/discussions/1178
// I have silenced the grousing with typecasting for now, but not exactly ideal.
export const useLegendStore = defineStore('legend', () => {
    const legendConfig = ref<LegendConfig>();
    const children = ref<LegendItem[]>([]);
    const headerControls = ref<string[]>([]);

    function addItem(value: {
        item: LegendItem;
        parent: LegendItem | undefined;
    }) {
        if (value.parent === undefined) {
            children.value.push(value.item as any);
        } else {
            // validate items to keep ts happy
            // this check should never trigger if legend API is used correctly
            if (
                !(value.item instanceof SectionItem) &&
                !(value.item instanceof LayerItem)
            ) {
                console.error(
                    'attempted to add an unsupported legend item type'
                );
                return;
            }

            value.parent.children.push(value.item as any);
        }
    }

    function removeItem(item: LegendItem) {
        const removeItem = (children: Array<LegendItem>) => {
            // remove item
            children = children.filter(child => {
                if (child === item && !child.children.length) {
                    child.onRemoved();
                }
                return child !== item;
            });

            // recursively check child legend items
            children.forEach((child: any) => {
                child.children = removeItem(child.children);
            });

            // remove SectionItems with no remaining children
            children = children.filter(
                item =>
                    !(
                        item instanceof SectionItem &&
                        !item.children.length &&
                        item.content === ''
                    )
            );

            return children;
        };

        children.value = removeItem(children.value as any) as any;
    }

    function replaceItem(value: { oldItem: LegendItem; newItem: LegendItem }) {
        if (value.oldItem.parent === undefined) {
            const currChildren = children.value;
            const index = currChildren.indexOf(value.oldItem as any);
            if (index > -1) {
                children.value[index] = value.newItem as any;
            }
            children.value = currChildren;
        } else {
            const children = value.oldItem.parent.children;
            const index = children.indexOf(value.oldItem);
            if (index > -1) {
                children[index] = value.newItem;
            }
            value.oldItem.parent.children = children;
        }
    }

    return {
        legendConfig,
        children,
        headerControls,
        addItem,
        removeItem,
        replaceItem
    };
});
