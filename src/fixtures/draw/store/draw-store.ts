import { defineStore } from 'pinia';
import { reactive, ref } from 'vue';

export const useDrawStore = defineStore('draw', () => {
    const activeTool = ref('');
    const graphics = reactive([]);
    const selectedGraphicId = ref(null);

    function setActiveTool(tool: string) {
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
        activeTool,
        graphics,
        selectedGraphicId,
        setActiveTool,
        addGraphic,
        removeGraphic,
        selectGraphic,
        clearSelection,
        getSelectedGraphic,
        updateGraphicGeometry
    };
});
