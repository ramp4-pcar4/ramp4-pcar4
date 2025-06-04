import { defineStore } from 'pinia';
import type { DrawTypeConfig } from '../api/drawApi';
import { reactive, ref } from 'vue';

// DrawTypeConfig is a type that defines the configuration for each draw type

export type ActiveToolList = 'circle' | 'point' | 'polygon' | 'polyline' | 'rectangle' | 'edit' | null;

export const useDrawStore = defineStore('draw', () => {
    const supportedTypes = ref<DrawTypeConfig[]>([]);
    const activeTool = ref<ActiveToolList>(null);
    const graphics = reactive<any[]>([]);
    const selectedGraphicId = ref<string | null>(null);
    const mapNavEl = ref<unknown | null>(null);

    function setSupportedTypes(types: DrawTypeConfig[]) {
        supportedTypes.value.splice(0, supportedTypes.value.length, ...types);
    }

    function setActiveTool(tool: ActiveToolList) {
        activeTool.value = tool;
    }

    function addGraphic(graphic: any) {
        const id = `graphic-${Date.now()}`;
        graphics.push({
            id,
            ...graphic
        });
        return id;
    }

    function removeGraphic(id: string) {
        const index = graphics.findIndex(g => g.id === id);
        if (index !== -1) {
            graphics.splice(index, 1);

            // Clear selection if the removed graphic was selected
            if (selectedGraphicId.value === id) {
                selectedGraphicId.value = null;
            }
        }
    }

    function selectGraphic(id: string) {
        selectedGraphicId.value = id;
    }

    function clearSelection() {
        selectedGraphicId.value = null;
    }

    function getSelectedGraphic() {
        if (!selectedGraphicId.value) return null;
        return graphics.find(g => g.id === selectedGraphicId.value);
    }

    function updateGraphicGeometry(id: string, geometry: any) {
        const graphic = graphics.find(g => g.id === id);
        if (graphic) {
            graphic.geometry = geometry;
        }
    }

    return {
        supportedTypes,
        activeTool,
        graphics,
        selectedGraphicId,
        setSupportedTypes,
        setActiveTool,
        addGraphic,
        removeGraphic,
        selectGraphic,
        clearSelection,
        getSelectedGraphic,
        updateGraphicGeometry,
        mapNavEl
    };
});
