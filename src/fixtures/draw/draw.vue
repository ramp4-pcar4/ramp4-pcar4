|
<template>
    <arcgis-sketch ref="sketchEl" style="display: none" />
</template>
<script lang="ts">
export const DRAW_GRAPHICS_LAYER_ID = 'RampDrawGraphicsLayer';
</script>

<script setup lang="ts">
/**
 * @file draw.vue
 * @description Implements drawing functionality using the ESRI Sketch component.
 * It supports multiple drawing tools, multi-point mode, selection, deletion,
 * keyboard-based editing (including arrow key movement, resizing, and rotation),
 * and accessibility announcements.
 * See: https://developers.arcgis.com/javascript/latest/references/map-components/arcgis-sketch/

/* --------------------------------------------------------------------------
 * IMPORTS
 * -------------------------------------------------------------------------- */
import { inject, onMounted, onUnmounted, watch, reactive, useTemplateRef } from 'vue';
import { useDrawStore } from './store';
import { InstanceAPI } from '@/api/internal';
import '@arcgis/map-components/components/arcgis-sketch';
import { LayerType } from '@/geo/api';
import { useI18n } from 'vue-i18n';
import {
    EsriGraphic,
    EsriPoint,
    EsriPolygon,
    EsriPolyline,
    EsriSimpleFillSymbol,
    EsriSimpleLineSymbol,
    EsriSimpleMarkerSymbol
} from '@/geo/esri';
import { GlobalEvents } from '@/api';
import type { KeyboardnavAPI } from '@/fixtures/keyboardnav/api/keyboardnav';

/* --------------------------------------------------------------------------
 * CONSTANTS & GLOBAL VARIABLES
 * -------------------------------------------------------------------------- */
const { t } = useI18n();

// add helper to translate raw tool names (fallbacks to "unknown")
const translateTerm = (key?: string): string => (key ? t(`draw.${key}`) : t('draw.unknown'));

const iApi = inject('iApi') as InstanceAPI;
const drawStore = useDrawStore();

// Sketch widget and graphics layer reference variables
let sketch: HTMLArcgisSketchElement | null = null;
const sketchEl = useTemplateRef<HTMLArcgisSketchElement>('sketchEl');
let sketchHandler: { remove: () => void } | null = null;
let graphicsLayer: __esri.GraphicsLayer | null = null;

// Variables for selected and highlighted graphics
let selectedGraphic: __esri.Graphic | null = null;
let highlightGraphic: __esri.Graphic | null = null;

// Multi-point mode state variables
let multiPointMode = false;
let multiPointGraphic: __esri.Graphic | null = null;

type Vertex = [number, number]; // [x, y] coordinates
let multiPointVertices: Vertex[] = [];

const rampEventHandlers = reactive<Array<string>>([]);

async function handleKeyboardShortcuts() {
    const keyboardNav = (await iApi.fixture.isLoaded('keyboardnav')) as KeyboardnavAPI;

    keyboardNav.register('D', {
        name: {
            en: 'Draw Tools',
            fr: 'Outils de dessin'
        },
        activeHandler: () => {
            drawStore.setActiveTool('');
        },
        keys: [
            {
                key: 'P',
                description: {
                    en: 'Draw a point',
                    fr: 'Dessine un point'
                },
                handler: () => {
                    drawStore.setActiveTool('point');
                }
            },
            {
                key: 'L',
                description: {
                    en: 'Draw a line',
                    fr: 'Dessine une ligne'
                },
                handler: () => {
                    drawStore.setActiveTool('polyline');
                }
            },
            {
                key: 'G',
                description: {
                    en: 'Draw a polygon',
                    fr: 'Dessine un polygone'
                },
                handler: () => {
                    drawStore.setActiveTool('polygon');
                }
            },
            {
                key: 'C',
                description: {
                    en: 'Draw a circle',
                    fr: 'Dessine un cercle'
                },
                handler: () => {
                    drawStore.setActiveTool('circle');
                }
            },
            {
                key: 'R',
                description: {
                    en: 'Draw a rectangle',
                    fr: 'Dessine un rectangle'
                },
                handler: () => {
                    drawStore.setActiveTool('rectangle');
                }
            },
            {
                key: 'E',
                description: {
                    en: 'Edit geometry',
                    fr: 'Mode édition'
                },
                handler: () => {
                    drawStore.setActiveTool('edit');
                }
            }
        ]
    });
}

/* --------------------------------------------------------------------------
 * HELPER FUNCTIONS
 * -------------------------------------------------------------------------- */
/**
 * Updates the highlight for the given graphic.
 * Clears any previous highlight, creates a new symbol based on geometry type,
 * and adds the highlight graphic to the graphics layer.
 * @param graphic The graphic to highlight.
 */
const highlightSelectedGraphic = (graphic?: __esri.Graphic | undefined) => {
    if (highlightGraphic) {
        graphicsLayer?.remove(highlightGraphic);
        highlightGraphic = null;
    }
    if (!graphic) return;

    let highlightSymbol: __esri.Symbol;
    switch (graphic.geometry?.type) {
        case 'point':
        case 'multipoint':
            highlightSymbol = new EsriSimpleMarkerSymbol({
                color: [255, 255, 0, 0.8],
                size: 16,
                outline: {
                    color: [255, 165, 0, 1],
                    width: 3
                }
            });
            break;
        case 'polyline':
            highlightSymbol = new EsriSimpleLineSymbol({
                color: [255, 255, 0, 0.8],
                width: 6
            });
            break;
        default: // polygon, rectangle, circle
            highlightSymbol = new EsriSimpleFillSymbol({
                color: [255, 255, 0, 0.3],
                outline: {
                    color: [255, 165, 0, 1],
                    width: 3
                }
            });
    }
    highlightGraphic = new EsriGraphic({
        geometry: graphic.geometry,
        // @ts-expect-error esri type mismatch
        symbol: highlightSymbol
    });
    graphicsLayer?.add(highlightGraphic);
};

/* --------------------------------------------------------------------------
 * WATCHERS
 * -------------------------------------------------------------------------- */
// Watch changes to the selected graphic ID and update the Sketch widget and highlight.
watch(
    () => drawStore.selectedGraphicId,
    (newId, oldId) => {
        if (!sketch || !graphicsLayer) return;
        if (!newId) {
            sketch.cancel();
            highlightSelectedGraphic();
        } else if (newId !== oldId) {
            const graphics = graphicsLayer.graphics.toArray();
            const selectedEsriGraphic = graphics.find(g => g.attributes && g.attributes.id === newId);
            if (selectedEsriGraphic) {
                sketch.triggerUpdate([selectedEsriGraphic]);
                highlightSelectedGraphic(selectedEsriGraphic);
            }
        }
    }
);

/* --------------------------------------------------------------------------
 * GRAPHIC CREATION FUNCTIONS
 * -------------------------------------------------------------------------- */
/**
 * Selects a graphic located at the center of the view using a hit test.
 */
const selectCenteredGraphic = async () => {
    if (!graphicsLayer || !sketch || drawStore.activeTool !== 'edit') return;
    await iApi.geo.map.viewPromise;
    const view = iApi.geo.map.esriView!;
    const centerPoint = { x: view.width / 2, y: view.height / 2 };
    const searchArea = {
        x: centerPoint.x,
        y: centerPoint.y,
        width: 20,
        height: 20
    };
    const response = await view.hitTest(searchArea);
    const hits = response.results.filter((result): result is __esri.GraphicHit => {
        if (!('graphic' in result) || result.graphic.layer !== graphicsLayer) return false;
        return !!result.graphic.attributes?.id;
    });
    if (hits.length > 0) {
        selectedGraphic = hits[0].graphic;
        sketch.triggerUpdate([selectedGraphic]);
        if (selectedGraphic.attributes?.id) {
            drawStore.selectGraphic(selectedGraphic.attributes.id);
        }
        iApi.updateAlert(
            t('draw.graphic.selected', {
                type: translateTerm(selectedGraphic.attributes?.type)
            })
        );
    } else {
        sketch.cancel();
        selectedGraphic = null;
        drawStore.clearSelection();
    }
};

/**
 * Creates a graphic at the center of the view based on the active tool.
 */
const createGraphicAtCenter = async () => {
    if (!sketch || !drawStore.activeTool) return;
    await iApi.geo.map.viewPromise;
    const view = iApi.geo.map.esriView!;
    const centerScreen = { x: Math.floor(view.width / 2), y: Math.floor(view.height / 2) };
    const centerPoint = view.toMap(centerScreen);
    const extent = view.extent;
    const mapWidth = extent.width;
    const mapHeight = extent.height;
    const shapeSize = Math.min(mapWidth, mapHeight) / 10;

    let graphic;
    switch (drawStore.activeTool) {
        case 'point':
            graphic = new EsriGraphic({
                geometry: new EsriPoint({
                    x: centerPoint.x,
                    y: centerPoint.y,
                    spatialReference: view.spatialReference
                }),
                symbol: sketch.pointSymbol
            });
            break;
        case 'polyline':
            graphic = new EsriGraphic({
                geometry: new EsriPolyline({
                    paths: [
                        [
                            [centerPoint.x - shapeSize / 2, centerPoint.y],
                            [centerPoint.x + shapeSize / 2, centerPoint.y]
                        ]
                    ],
                    spatialReference: view.spatialReference
                }),
                symbol: sketch.polylineSymbol
            });
            break;
        case 'polygon':
        case 'rectangle':
            const halfSize = shapeSize / 2;
            graphic = new EsriGraphic({
                geometry: new EsriPolygon({
                    rings: [
                        [
                            [centerPoint.x - halfSize, centerPoint.y - halfSize],
                            [centerPoint.x + halfSize, centerPoint.y - halfSize],
                            [centerPoint.x + halfSize, centerPoint.y + halfSize],
                            [centerPoint.x - halfSize, centerPoint.y + halfSize],
                            [centerPoint.x - halfSize, centerPoint.y - halfSize]
                        ]
                    ],
                    spatialReference: view.spatialReference
                }),
                symbol:
                    sketch.polygonSymbol ||
                    new EsriSimpleFillSymbol({
                        color: [0, 255, 0, 0.3],
                        outline: {
                            color: [0, 255, 0, 1],
                            width: 1
                        }
                    })
            });
            break;
        case 'circle':
            const radius = shapeSize / 2;
            const numPoints = 36;
            const circleRing = [];
            for (let i = 0; i <= numPoints; i++) {
                const angle = (i / numPoints) * 2 * Math.PI;
                const x = centerPoint.x + radius * Math.cos(angle);
                const y = centerPoint.y + radius * Math.sin(angle);
                circleRing.push([x, y]);
            }
            graphic = new EsriGraphic({
                geometry: new EsriPolygon({
                    rings: [circleRing],
                    spatialReference: view.spatialReference
                }),
                symbol:
                    sketch.polygonSymbol ||
                    new EsriSimpleFillSymbol({
                        color: [255, 0, 255, 0.3],
                        outline: {
                            color: [255, 0, 255, 1],
                            width: 1
                        }
                    })
            });
            break;
        default:
            console.warn('Unknown tool type:', drawStore.activeTool);
            return;
    }

    if (graphic) {
        const id = `graphic-${Date.now()}`;
        graphic.attributes = { id, type: drawStore.activeTool };
        graphicsLayer?.add(graphic);
        drawStore.addGraphic({
            id,
            type: drawStore.activeTool,
            geometry: graphic.geometry,
            attributes: graphic.attributes
        });

        // cancel sketch if graphic is not a point
        if (drawStore.activeTool !== 'point') {
            drawStore.clearSelection();
            drawStore.setActiveTool(null);
            sketch.cancel();
        }

        iApi.updateAlert(
            t('draw.graphic.created', {
                type: translateTerm(drawStore.activeTool)
            })
        );
    }
};

/* --------------------------------------------------------------------------
 * KEYBOARD EVENT HANDLING (Multi-point mode and normal operations)
 * -------------------------------------------------------------------------- */
/**
 * Handles keyboard events for drawing and editing.
 */
const handleNavigationKeyDown = (e: KeyboardEvent) => {
    const mapElement = iApi.geo.map.esriView?.container;
    if (!document.activeElement || !mapElement?.contains(document.activeElement)) {
        return;
    }
    switch (e.key) {
        case 'Enter':
            e.preventDefault();
            if (drawStore.activeTool && drawStore.activeTool !== 'edit') {
                if (
                    (drawStore.activeTool === 'polyline' || drawStore.activeTool === 'polygon') &&
                    (multiPointMode || multiPointVertices.length === 0)
                ) {
                    const view = iApi.geo.map.esriView!;
                    const centerScreen = { x: Math.floor(view.width / 2), y: Math.floor(view.height / 2) };
                    const centerPoint = view.toMap(centerScreen);
                    if (!multiPointMode) {
                        multiPointMode = true;
                        multiPointVertices = [[centerPoint.x, centerPoint.y]];
                        if (drawStore.activeTool === 'polyline') {
                            multiPointGraphic = new EsriGraphic({
                                geometry: new EsriPolyline({
                                    paths: [multiPointVertices],
                                    spatialReference: view.spatialReference
                                }),
                                symbol:
                                    sketch?.polylineSymbol ||
                                    new EsriSimpleLineSymbol({ color: [0, 0, 255, 1], width: 2 })
                            });
                        } else {
                            multiPointGraphic = new EsriGraphic({
                                geometry: new EsriPolygon({
                                    rings: [multiPointVertices],
                                    spatialReference: view.spatialReference
                                }),
                                symbol:
                                    sketch?.polygonSymbol ||
                                    new EsriSimpleFillSymbol({
                                        color: [0, 255, 0, 0.3],
                                        outline: { color: [0, 255, 0, 1], width: 1 }
                                    })
                            });
                        }
                        multiPointGraphic.attributes = { id: `temp-graphic-${Date.now()}`, type: drawStore.activeTool };
                        graphicsLayer?.add(multiPointGraphic);

                        iApi.updateAlert(
                            t('draw.multiPoint.started', {
                                type: translateTerm(drawStore.activeTool),
                                count: 1
                            })
                        );
                    } else {
                        multiPointVertices.push([centerPoint.x, centerPoint.y]);
                        if (drawStore.activeTool === 'polyline') {
                            multiPointGraphic!.geometry = new EsriPolyline({
                                paths: [multiPointVertices],
                                spatialReference: view.spatialReference
                            });
                        } else {
                            multiPointGraphic!.geometry = new EsriPolygon({
                                rings: [multiPointVertices],
                                spatialReference: view.spatialReference
                            });
                        }

                        iApi.updateAlert(
                            t('draw.multiPoint.pointAdded', {
                                type: translateTerm(drawStore.activeTool),
                                count: multiPointVertices.length
                            })
                        );
                    }
                } else {
                    createGraphicAtCenter();
                }
            } else {
                selectCenteredGraphic();
            }
            break;

        case 'Delete':
        case 'Backspace':
            const view = iApi.geo.map.esriView!;
            if (multiPointMode && multiPointVertices.length > 1) {
                e.preventDefault();
                multiPointVertices.pop();
                if (drawStore.activeTool === 'polyline') {
                    multiPointGraphic!.geometry = new EsriPolyline({
                        paths: [multiPointVertices],
                        spatialReference: view.spatialReference
                    });
                } else {
                    multiPointGraphic!.geometry = new EsriPolygon({
                        rings: [multiPointVertices],
                        spatialReference: view.spatialReference
                    });
                }
                // Notify geometry change using public API
                multiPointGraphic!.set('geometry', multiPointGraphic?.geometry);
                iApi.updateAlert(
                    t('draw.multiPoint.pointRemoved', {
                        type: translateTerm(drawStore.activeTool ?? undefined),
                        count: multiPointVertices.length
                    })
                );
            } else if (multiPointMode && multiPointVertices.length === 1) {
                e.preventDefault();
                if (multiPointGraphic) {
                    graphicsLayer?.remove(multiPointGraphic);
                }
                multiPointGraphic = null;
                multiPointVertices = [];
                multiPointMode = false;
                iApi.updateAlert(t('draw.multiPoint.canceled'));
            } else if (selectedGraphic) {
                e.preventDefault();
                sketch?.delete();
                graphicsLayer?.remove(selectedGraphic);
                if (typeof drawStore.removeGraphic === 'function') {
                    drawStore.removeGraphic(selectedGraphic.attributes.id);
                }
                selectedGraphic = null;
                highlightSelectedGraphic(undefined);
                iApi.updateAlert(t('draw.graphic.deleted'));
            }
            break;

        case 'Escape':
            drawStore.setActiveTool(null);
            sketch?.cancel();
            selectedGraphic = null;
            highlightSelectedGraphic(undefined);
            drawStore.clearSelection();
            iApi.updateAlert(t('draw.tool.canceled'));
            break;
    }
};

const handleGraphicKeyboardEdit = (e: KeyboardEvent) => {
    const mapElement = iApi.geo.map.esriView!.container;
    if (!document.activeElement || !mapElement?.contains(document.activeElement)) return;
    if (!selectedGraphic) return;
    const isMovementKey = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key);
    if (!isMovementKey) return;
    e.preventDefault();
    e.stopPropagation();
    const translateDelta = 10; // Pixels to move
    const isResizing = e.shiftKey;
    const isRotating = e.altKey;
    const view = iApi.geo.map.esriView!;
    let screenDx = 0,
        screenDy = 0;
    if (e.key === 'ArrowLeft') screenDx = -translateDelta;
    if (e.key === 'ArrowRight') screenDx = translateDelta;
    if (e.key === 'ArrowUp') screenDy = -translateDelta;
    if (e.key === 'ArrowDown') screenDy = translateDelta;
    const geometry = selectedGraphic.geometry!;
    let center;
    if (geometry.type === 'point') {
        center = { x: geometry.x, y: geometry.y };
    } else {
        const extent = geometry.extent!;
        center = { x: (extent.xmin + extent.xmax) / 2, y: (extent.ymin + extent.ymax) / 2 };
    }
    const screenPoint = view.toScreen(
        new EsriPoint({
            x: center.x,
            y: center.y,
            spatialReference: view.spatialReference
        })
    )!;
    screenPoint.x += screenDx;
    screenPoint.y += screenDy;
    const mapPoint = view.toMap(screenPoint);
    const mapDx = mapPoint.x - center.x;
    const mapDy = mapPoint.y - center.y;
    let newGeometry;
    if (geometry.type === 'point') {
        if (!isResizing && !isRotating) {
            newGeometry = new EsriPoint({
                x: geometry.x + mapDx,
                y: geometry.y + mapDy,
                spatialReference: geometry.spatialReference
            });
        } else if (isResizing) {
            newGeometry = geometry.clone();
            iApi.updateAlert(t('draw.point.resize.unsupported'));
        } else if (isRotating) {
            newGeometry = geometry.clone();
            iApi.updateAlert(t('draw.point.rotate.unsupported'));
        }
    } else if (geometry.type === 'polyline') {
        if (!isResizing && !isRotating) {
            const polyline = geometry as __esri.Polyline;
            const newPaths = polyline.paths.map(path => path.map(([x, y]) => [x + mapDx, y + mapDy]));
            newGeometry = new EsriPolyline({
                paths: newPaths,
                spatialReference: geometry.spatialReference
            });
        } else if (isResizing) {
            const polyline = geometry as __esri.Polyline;
            const scaleFactor = e.key === 'ArrowUp' || e.key === 'ArrowRight' ? 1.05 : 0.95;
            const newPaths = polyline.paths.map(path =>
                path.map(([x, y]) => [center.x + (x - center.x) * scaleFactor, center.y + (y - center.y) * scaleFactor])
            );
            newGeometry = new EsriPolyline({
                paths: newPaths,
                spatialReference: geometry.spatialReference
            });
        } else if (isRotating) {
            const polyline = geometry as __esri.Polyline;
            const angle = e.key === 'ArrowLeft' ? -0.05 : e.key === 'ArrowRight' ? 0.05 : 0;
            if (angle !== 0) {
                const cos = Math.cos(angle);
                const sin = Math.sin(angle);
                const newPaths = polyline.paths.map(path =>
                    path.map(([x, y]) => {
                        const dx = x - center.x;
                        const dy = y - center.y;
                        const rx = dx * cos - dy * sin;
                        const ry = dx * sin + dy * cos;
                        return [center.x + rx, center.y + ry];
                    })
                );
                newGeometry = new EsriPolyline({
                    paths: newPaths,
                    spatialReference: geometry.spatialReference
                });
            } else {
                newGeometry = geometry.clone();
            }
        }
    } else if (geometry.type === 'polygon') {
        if (!isResizing && !isRotating) {
            const polygon = geometry as __esri.Polygon;
            const newRings = polygon.rings.map(ring => ring.map(([x, y]) => [x + mapDx, y + mapDy]));
            newGeometry = new EsriPolygon({
                rings: newRings,
                spatialReference: geometry.spatialReference
            });
        } else if (isResizing) {
            const polygon = geometry as __esri.Polygon;
            const scaleFactor = e.key === 'ArrowUp' || e.key === 'ArrowRight' ? 1.05 : 0.95;
            const newRings = polygon.rings.map(ring =>
                ring.map(([x, y]) => [center.x + (x - center.x) * scaleFactor, center.y + (y - center.y) * scaleFactor])
            );
            newGeometry = new EsriPolygon({
                rings: newRings,
                spatialReference: geometry.spatialReference
            });
        } else if (isRotating) {
            const polygon = geometry as __esri.Polygon;
            const angle = e.key === 'ArrowLeft' ? -0.05 : e.key === 'ArrowRight' ? 0.05 : 0;
            if (angle !== 0) {
                const cos = Math.cos(angle);
                const sin = Math.sin(angle);
                const newRings = polygon.rings.map(ring =>
                    ring.map(([x, y]) => {
                        const dx = x - center.x;
                        const dy = y - center.y;
                        const rx = dx * cos - dy * sin;
                        const ry = dx * sin + dy * cos;
                        return [center.x + rx, center.y + ry];
                    })
                );
                newGeometry = new EsriPolygon({
                    rings: newRings,
                    spatialReference: geometry.spatialReference
                });
            } else {
                newGeometry = geometry.clone();
            }
        }
    }
    if (newGeometry) {
        selectedGraphic.geometry = newGeometry;
        selectedGraphic.set('geometry', newGeometry);
        highlightSelectedGraphic(selectedGraphic);
        if (selectedGraphic.attributes?.id) {
            drawStore.updateGraphicGeometry(selectedGraphic.attributes.id, newGeometry);
        }
        const action = isResizing ? 'resized' : isRotating ? 'rotated' : 'moved';
        iApi.updateAlert(t(`draw.graphic.${action}`));
    }
};

/* --------------------------------------------------------------------------
 * VIEW CLICK HANDLER
 * -------------------------------------------------------------------------- */
/**
 * Handles click events on the view to allow graphic selection.
 * Delegates to the Sketch widget if a graphic is clicked; otherwise clears selection.
 * @param event The view click event.
 */
const handleViewClick = async (event: __esri.ViewClickEvent) => {
    const view = iApi.geo.map.esriView!;
    const response = await view.hitTest(event);
    const hit = response.results.find(
        (result): result is __esri.GraphicHit =>
            'graphic' in result && result.graphic.layer === graphicsLayer && !!result.graphic.attributes?.id
    );

    if (hit && drawStore.activeTool === 'edit') {
        sketch?.triggerUpdate([hit.graphic]);
    } else {
        sketch?.cancel();
        selectedGraphic = null;
        drawStore.clearSelection();
        highlightSelectedGraphic();
    }
};

const initializeDrawTools = async () => {
    await iApi.geo.map.viewPromise;

    // Create or get the graphics layer for drawings
    if (!iApi.geo.layer.getLayer(DRAW_GRAPHICS_LAYER_ID)) {
        // @ts-expect-error esri type mismatch
        graphicsLayer = iApi.geo.layer.createLayer({
            id: DRAW_GRAPHICS_LAYER_ID,
            layerType: LayerType.GRAPHIC,
            cosmetic: true,
            system: true,
            url: ''
        });
        // @ts-expect-error esri type mismatch
        await iApi.geo.map.addLayer(graphicsLayer);
    } else {
        // @ts-expect-error esri type mismatch
        graphicsLayer = iApi.geo.layer.getLayer(DRAW_GRAPHICS_LAYER_ID)!.esriLayer;
    }
    // @ts-expect-error esri type mismatch
    if (graphicsLayer?.esriLayer) graphicsLayer = graphicsLayer.esriLayer;

    Object.assign(sketchEl.value!, {
        view: iApi.geo.map.esriView!,
        layer: graphicsLayer!,
        availableCreateTools: ['point', 'multipoint', 'polyline', 'polygon', 'rectangle', 'circle'],
        updateOnGraphicClick: true,
        visibleElements: {
            createTools: { point: true, polyline: true, polygon: true, rectangle: true, circle: true },
            selectionTools: { enable: true },
            settingsMenu: false
        },
        defaultUpdateOptions: { highlightOptions: { enabled: false } }
    });
    iApi.geo.map.esriView!.ui.add(sketchEl.value!, 'bottom-right');

    sketchEl.value?.addEventListener('arcgisCreate', e => handleSketchCreateEvent(e.detail));
    sketchEl.value?.addEventListener('arcgisUpdate', e => handleSketchUpdateEvent(e.detail));

    sketchHandler = {
        remove: () => sketchEl.value?.removeEventListener('arcgisCreate', e => handleSketchCreateEvent(e.detail))
    };

    sketch = sketchEl.value;

    // Add DOM event listeners
    iApi.geo.map.esriView!.on('click', handleViewClick);
    document.addEventListener('keydown', handleNavigationKeyDown);
    document.addEventListener('keydown', handleGraphicKeyboardEdit, { capture: true });
};

const cleanupDrawTools = () => {
    if (sketch) {
        if (iApi.geo.map.esriView) {
            iApi.geo.map.esriView.ui.remove(sketch);
        }
        if (sketchHandler) {
            sketchHandler.remove();
        }
        sketch.destroy();
    }

    document.removeEventListener('keydown', handleNavigationKeyDown);
    document.removeEventListener('keydown', handleGraphicKeyboardEdit, { capture: true });

    multiPointMode = false;
    multiPointGraphic = null;
    multiPointVertices = [];

    sketch = null;
    graphicsLayer = null;
};

// Extract the existing sketch event handlers for reuse
const handleSketchCreateEvent = (event: __esri.SketchCreateEvent) => {
    if (event.state === 'complete') {
        const graphic = event.graphic;
        const id = `graphic-${Date.now()}`;
        graphic.attributes = graphic.attributes || {};
        graphic.attributes.id = id;
        drawStore.addGraphic({
            id,
            type: event.tool,
            geometry: graphic.geometry,
            attributes: graphic.attributes
        });

        if (event.tool !== 'point') {
            drawStore.setActiveTool(null);
        }
    }
};

const handleSketchUpdateEvent = (event: __esri.SketchUpdateEvent) => {
    const graphic = event.graphics[0];
    if (!graphic) return;

    if (event.state === 'start') {
        if (drawStore.activeTool !== 'edit') {
            sketch!.cancel();
            return;
        }

        selectedGraphic = graphic;
        if (graphic.attributes?.id) {
            drawStore.selectGraphic(graphic.attributes.id);
            iApi.updateAlert(
                t('draw.graphic.selected', {
                    type: translateTerm(graphic.attributes?.type)
                })
            );
        }
    } else if (event.state === 'active') {
        // update highlight while editing
        highlightSelectedGraphic(graphic);
    } else if (event.state === 'complete') {
        if (graphic.attributes?.id) {
            drawStore.updateGraphicGeometry(graphic.attributes.id, graphic.geometry);
            iApi.updateAlert(t('draw.graphic.updated'));
        }
    }
};

/* --------------------------------------------------------------------------
 * INITIALIZATION & EVENT LISTENERS
 * -------------------------------------------------------------------------- */
onMounted(() => {
    handleKeyboardShortcuts();
    initializeDrawTools();

    // Listen for map creation/destruction events
    rampEventHandlers.push(
        iApi.event.on(GlobalEvents.MAP_DESTROYED, () => {
            cleanupDrawTools();
        })
    );
});

/* --------------------------------------------------------------------------
 * ACTIVE TOOL WATCHER
 * -------------------------------------------------------------------------- */
watch(
    () => drawStore.activeTool,
    newTool => {
        sketch!.cancel();
        highlightSelectedGraphic();
        multiPointGraphic = null;
        multiPointVertices = [];
        multiPointMode = false;
        if (newTool && newTool != 'edit') {
            sketch!.create(newTool);
        }
    }
);

/* --------------------------------------------------------------------------
 * CLEANUP ON UNMOUNT
 * -------------------------------------------------------------------------- */
onUnmounted(() => {
    cleanupDrawTools();

    // Remove RAMP event handlers
    rampEventHandlers.forEach(handler => iApi.event.off(handler));
});
</script>
