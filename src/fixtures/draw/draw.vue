<template>
    <!-- Render a hidden accessibility status element -->
    <div id="drawing-a11y-status" class="sr-only"></div>
</template>

<script setup lang="ts">
/**
 * @file draw.vue
 * @description Implements drawing functionality using the ESRI Sketch widget.
 * It supports multiple drawing tools, multi-point mode, selection, deletion,
 * keyboard-based editing (including arrow key movement, resizing, and rotation),
 * and accessibility announcements.

/* --------------------------------------------------------------------------
 * IMPORTS
 * -------------------------------------------------------------------------- */
import { inject, onMounted, onUnmounted, watch, reactive } from 'vue';
import { useDrawStore } from './store';
import { InstanceAPI } from '@/api/internal';
import Sketch from '@arcgis/core/widgets/Sketch';
import { LayerType } from '@/geo/api';
import { useI18n } from 'vue-i18n';
import { SimpleMarkerSymbol, SimpleLineSymbol, SimpleFillSymbol } from '@arcgis/core/symbols';
import Graphic from '@arcgis/core/Graphic';
import Point from '@arcgis/core/geometry/Point';
import Polyline from '@arcgis/core/geometry/Polyline';
import Polygon from '@arcgis/core/geometry/Polygon';
import { GlobalEvents } from '@/api';

/* --------------------------------------------------------------------------
 * CONSTANTS & GLOBAL VARIABLES
 * -------------------------------------------------------------------------- */
const { t } = useI18n();
const DRAW_GRAPHICS_LAYER_ID = 'RampDrawGraphicsLayer';

const iApi = inject('iApi') as InstanceAPI;
const drawStore = useDrawStore();

// Sketch widget and graphics layer reference variables
let sketch: __esri.Sketch;
let sketchHandler: __esri.Sketch['on'];
let graphicsLayer: __esri.GraphicsLayer;

// Variables for selected and highlighted graphics
let selectedGraphic: __esri.Graphic | undefined;
let highlightGraphic: __esri.Graphic | undefined;

// Multi-point mode state variables
let multiPointMode = false;
let multiPointGraphic: __esri.Graphic | undefined;

type Vertex = [number, number]; // [x, y] coordinates
let multiPointVertices: Vertex[] = [];

const rampEventHandlers = reactive<Array<string>>([]);

/* --------------------------------------------------------------------------
 * HELPER FUNCTIONS
 * -------------------------------------------------------------------------- */
/**
 * Updates the highlight for the given graphic.
 * Clears any previous highlight, creates a new symbol based on geometry type,
 * and adds the highlight graphic to the graphics layer.
 * @param graphic The graphic to highlight.
 */
const highlightSelectedGraphic = (graphic: __esri.Graphic | undefined) => {
    if (highlightGraphic) {
        graphicsLayer.remove(highlightGraphic);
        highlightGraphic = undefined;
    }
    if (!graphic) return;

    let highlightSymbol: __esri.Symbol;
    switch (graphic.geometry.type) {
        case 'point':
        case 'multipoint':
            highlightSymbol = new SimpleMarkerSymbol({
                color: [255, 255, 0, 0.8],
                size: 16,
                outline: {
                    color: [255, 165, 0, 1],
                    width: 3
                }
            });
            break;
        case 'polyline':
            highlightSymbol = new SimpleLineSymbol({
                color: [255, 255, 0, 0.8],
                width: 6
            });
            break;
        default: // polygon, rectangle, circle
            highlightSymbol = new SimpleFillSymbol({
                color: [255, 255, 0, 0.3],
                outline: {
                    color: [255, 165, 0, 1],
                    width: 3
                }
            });
    }
    highlightGraphic = new Graphic({
        geometry: graphic.geometry,
        symbol: highlightSymbol
    });
    graphicsLayer.add(highlightGraphic);
};

/* --------------------------------------------------------------------------
 * WATCHERS
 * -------------------------------------------------------------------------- */
// Watch changes to the selected graphic ID and update the Sketch widget and highlight.
watch(
    () => drawStore.selectedGraphicId,
    newSelectedId => {
        if (!sketch || !graphicsLayer) return;
        if (newSelectedId) {
            const graphics = graphicsLayer.graphics.toArray();
            const selectedEsriGraphic = graphics.find(g => g.attributes && g.attributes.id === newSelectedId);
            if (selectedEsriGraphic) {
                sketch.update([selectedEsriGraphic]);
                highlightSelectedGraphic(selectedEsriGraphic);
            }
        } else {
            sketch.cancel();
            highlightSelectedGraphic(undefined);
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
    if (!graphicsLayer || !sketch) return;
    const view = await iApi.geo.map.esriView!;
    const centerPoint = { x: view.width / 2, y: view.height / 2 };
    const searchArea = {
        x: centerPoint.x,
        y: centerPoint.y,
        width: 20,
        height: 20
    };
    const response = await view.hitTest(searchArea);
    const hits = response.results.filter(result => {
        if (result.graphic.layer !== graphicsLayer) return false;
        return result.graphic.attributes && result.graphic.attributes.id;
    });
    if (hits.length > 0) {
        selectedGraphic = hits[0].graphic;
        sketch.update([selectedGraphic]);
        if (selectedGraphic.attributes?.id) {
            drawStore.selectGraphic(selectedGraphic.attributes.id);
        }
        const a11yStatus = document.getElementById('drawing-a11y-status');
        if (a11yStatus) {
            a11yStatus.textContent = t('draw.graphic.selected', {
                type: selectedGraphic.attributes?.type || 'shape'
            });
        }
    } else {
        sketch.cancel();
        selectedGraphic = null;
        drawStore.clearSelection();
        const a11yStatus = document.getElementById('drawing-a11y-status');
        if (a11yStatus) {
            a11yStatus.textContent = t('draw.graphic.none');
        }
    }
};

/**
 * Creates a graphic at the center of the view based on the active tool.
 */
const createGraphicAtCenter = async () => {
    if (!sketch || !drawStore.activeTool) return;
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
            graphic = new Graphic({
                geometry: new Point({
                    x: centerPoint.x,
                    y: centerPoint.y,
                    spatialReference: view.spatialReference
                }),
                symbol: sketch.viewModel.pointSymbol
            });
            break;
        case 'polyline':
            graphic = new Graphic({
                geometry: new Polyline({
                    paths: [
                        [
                            [centerPoint.x - shapeSize / 2, centerPoint.y],
                            [centerPoint.x + shapeSize / 2, centerPoint.y]
                        ]
                    ],
                    spatialReference: view.spatialReference
                }),
                symbol: sketch.viewModel.polylineSymbol
            });
            break;
        case 'polygon':
        case 'rectangle':
            const halfSize = shapeSize / 2;
            graphic = new Graphic({
                geometry: new Polygon({
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
                    sketch.viewModel.polygonSymbol ||
                    new SimpleFillSymbol({
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
            graphic = new Graphic({
                geometry: new Polygon({
                    rings: [circleRing],
                    spatialReference: view.spatialReference
                }),
                symbol:
                    sketch.viewModel.polygonSymbol ||
                    new SimpleFillSymbol({
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
        graphicsLayer.add(graphic);
        drawStore.addGraphic({
            id,
            type: drawStore.activeTool,
            geometry: graphic.geometry,
            attributes: graphic.attributes
        });
        // Instead of selecting the new graphic, clear selection
        selectedGraphic = undefined;
        drawStore.clearSelection();
        drawStore.setActiveTool('');
        // Cancel any Sketch selection state if present
        if (sketch) {
            sketch.cancel();
        }
        const a11yStatus = document.getElementById('drawing-a11y-status');
        if (a11yStatus) {
            a11yStatus.textContent = t('draw.graphic.created', {
                type: drawStore.activeTool
            });
        }
    }
};

/* --------------------------------------------------------------------------
 * KEYBOARD EVENT HANDLING (Multi-point mode and normal operations)
 * -------------------------------------------------------------------------- */
/**
 * Handles keyboard events for drawing and editing.
 */
const handleNavigationKeyDown = (e: KeyboardEvent) => {
    const mapElement = iApi.geo.map.esriView.container;
    if (!document.activeElement || !mapElement.contains(document.activeElement)) {
        return;
    }
    switch (e.key) {
        case 'Enter':
            e.preventDefault();
            if (drawStore.activeTool) {
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
                            multiPointGraphic = new Graphic({
                                geometry: new Polyline({
                                    paths: [multiPointVertices],
                                    spatialReference: view.spatialReference
                                }),
                                symbol:
                                    sketch.viewModel.polylineSymbol ||
                                    new SimpleLineSymbol({ color: [0, 0, 255, 1], width: 2 })
                            });
                        } else {
                            multiPointGraphic = new Graphic({
                                geometry: new Polygon({
                                    rings: [multiPointVertices],
                                    spatialReference: view.spatialReference
                                }),
                                symbol:
                                    sketch.viewModel.polygonSymbol ||
                                    new SimpleFillSymbol({
                                        color: [0, 255, 0, 0.3],
                                        outline: { color: [0, 255, 0, 1], width: 1 }
                                    })
                            });
                        }
                        multiPointGraphic.attributes = { id: `temp-graphic-${Date.now()}`, type: drawStore.activeTool };
                        graphicsLayer.add(multiPointGraphic);
                        const a11yStatus = document.getElementById('drawing-a11y-status');
                        if (a11yStatus) {
                            a11yStatus.textContent = t('draw.multiPoint.started', {
                                type: drawStore.activeTool,
                                count: 1
                            });
                        }
                    } else {
                        multiPointVertices.push([centerPoint.x, centerPoint.y]);
                        if (drawStore.activeTool === 'polyline') {
                            multiPointGraphic.geometry = new Polyline({
                                paths: [multiPointVertices],
                                spatialReference: view.spatialReference
                            });
                        } else {
                            multiPointGraphic.geometry = new Polygon({
                                rings: [multiPointVertices],
                                spatialReference: view.spatialReference
                            });
                        }
                        multiPointGraphic.notifyChange('geometry');
                        const a11yStatus = document.getElementById('drawing-a11y-status');
                        if (a11yStatus) {
                            a11yStatus.textContent = t('draw.multiPoint.pointAdded', {
                                count: multiPointVertices.length
                            });
                        }
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
            if (multiPointMode && multiPointVertices.length > 1) {
                e.preventDefault();
                multiPointVertices.pop();
                const view = iApi.geo.map.esriView;
                if (drawStore.activeTool === 'polyline') {
                    multiPointGraphic.geometry = new Polyline({
                        paths: [multiPointVertices],
                        spatialReference: view.spatialReference
                    });
                } else {
                    multiPointGraphic.geometry = new Polygon({
                        rings: [multiPointVertices],
                        spatialReference: view.spatialReference
                    });
                }
                multiPointGraphic.notifyChange('geometry');
                const a11yStatus = document.getElementById('drawing-a11y-status');
                if (a11yStatus) {
                    a11yStatus.textContent = t('draw.multiPoint.pointRemoved', { count: multiPointVertices.length });
                }
            } else if (multiPointMode && multiPointVertices.length === 1) {
                e.preventDefault();
                graphicsLayer.remove(multiPointGraphic);
                multiPointGraphic = null;
                multiPointVertices = [];
                multiPointMode = false;
                const a11yStatus = document.getElementById('drawing-a11y-status');
                if (a11yStatus) {
                    a11yStatus.textContent = t('draw.multiPoint.canceled');
                }
            } else if (selectedGraphic) {
                e.preventDefault();
                sketch.delete();
                graphicsLayer.remove(selectedGraphic);
                if (typeof drawStore.removeGraphic === 'function') {
                    drawStore.removeGraphic(selectedGraphic.attributes.id);
                }
                selectedGraphic = null;
                highlightSelectedGraphic(undefined);
                const a11yStatus = document.getElementById('drawing-a11y-status');
                if (a11yStatus) {
                    a11yStatus.textContent = t('draw.graphic.deleted');
                }
            }
            break;

        case 'Escape':
            if (multiPointMode) {
                e.preventDefault();
                const minPoints = drawStore.activeTool === 'polyline' ? 2 : 3;
                if (multiPointVertices.length >= minPoints) {
                    const id = `graphic-${Date.now()}`;
                    multiPointGraphic.attributes.id = id;
                    if (drawStore.activeTool === 'polygon') {
                        const firstPoint = multiPointVertices[0];
                        const lastPoint = multiPointVertices[multiPointVertices.length - 1];
                        if (firstPoint[0] !== lastPoint[0] || firstPoint[1] !== lastPoint[1]) {
                            multiPointVertices.push([firstPoint[0], firstPoint[1]]);
                            multiPointGraphic.geometry = new Polygon({
                                rings: [multiPointVertices],
                                spatialReference: iApi.geo.map.esriView.spatialReference
                            });
                        }
                    }
                    drawStore.addGraphic({
                        id,
                        type: drawStore.activeTool,
                        geometry: multiPointGraphic.geometry,
                        attributes: multiPointGraphic.attributes
                    });
                    selectedGraphic = multiPointGraphic;
                    drawStore.selectGraphic(id);
                    drawStore.setActiveTool('');
                    multiPointMode = false;
                    multiPointVertices = [];
                    sketch.update([selectedGraphic]);
                    const a11yStatus = document.getElementById('drawing-a11y-status');
                    if (a11yStatus) {
                        a11yStatus.textContent = t('draw.multiPoint.completed', {
                            type: selectedGraphic.attributes.type,
                            count:
                                selectedGraphic.geometry.type === 'polyline'
                                    ? selectedGraphic.geometry.paths[0].length
                                    : selectedGraphic.geometry.rings[0].length - 1
                        });
                    }
                } else {
                    graphicsLayer.remove(multiPointGraphic);
                    multiPointGraphic = null;
                    multiPointVertices = [];
                    multiPointMode = false;
                    drawStore.setActiveTool('');
                    const a11yStatus = document.getElementById('drawing-a11y-status');
                    if (a11yStatus) {
                        a11yStatus.textContent = t('draw.multiPoint.notEnoughPoints', {
                            type: drawStore.activeTool,
                            min: minPoints
                        });
                    }
                }
            } else if (drawStore.activeTool) {
                e.preventDefault();
                drawStore.setActiveTool('');
                sketch.cancel();
                const a11yStatus = document.getElementById('drawing-a11y-status');
                if (a11yStatus) {
                    a11yStatus.textContent = t('draw.tool.canceled');
                }
            } else if (selectedGraphic || sketch.state === 'update') {
                e.preventDefault();
                sketch.cancel();
                selectedGraphic = null;
                highlightSelectedGraphic(undefined);
                drawStore.clearSelection();
                const a11yStatus = document.getElementById('drawing-a11y-status');
                if (a11yStatus) {
                    a11yStatus.textContent = t('draw.graphic.deselected');
                }
            }
            break;
    }
};

const handleGraphicKeyboardEdit = (e: KeyboardEvent) => {
    const mapElement = iApi.geo.map.esriView.container;
    if (!document.activeElement || !mapElement.contains(document.activeElement)) return;
    if (!selectedGraphic) return;
    const isMovementKey = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key);
    if (!isMovementKey) return;
    e.preventDefault();
    e.stopPropagation();
    const translateDelta = 10; // Pixels to move
    const isResizing = e.shiftKey;
    const isRotating = e.altKey;
    const view = iApi.geo.map.esriView;
    let screenDx = 0,
        screenDy = 0;
    if (e.key === 'ArrowLeft') screenDx = -translateDelta;
    if (e.key === 'ArrowRight') screenDx = translateDelta;
    if (e.key === 'ArrowUp') screenDy = -translateDelta;
    if (e.key === 'ArrowDown') screenDy = translateDelta;
    const geometry = selectedGraphic.geometry;
    let center;
    if (geometry.type === 'point') {
        center = { x: geometry.x, y: geometry.y };
    } else {
        const extent = geometry.extent;
        center = { x: (extent.xmin + extent.xmax) / 2, y: (extent.ymin + extent.ymax) / 2 };
    }
    const screenPoint = view.toScreen(center);
    screenPoint.x += screenDx;
    screenPoint.y += screenDy;
    const mapPoint = view.toMap(screenPoint);
    const mapDx = mapPoint.x - center.x;
    const mapDy = mapPoint.y - center.y;
    let newGeometry;
    if (geometry.type === 'point') {
        if (!isResizing && !isRotating) {
            newGeometry = new Point({
                x: geometry.x + mapDx,
                y: geometry.y + mapDy,
                spatialReference: geometry.spatialReference
            });
        } else if (isResizing) {
            newGeometry = geometry.clone();
            const a11yStatus = document.getElementById('drawing-a11y-status');
            if (a11yStatus) {
                a11yStatus.textContent = t('draw.point.resize.unsupported');
            }
        } else if (isRotating) {
            newGeometry = geometry.clone();
            const a11yStatus = document.getElementById('drawing-a11y-status');
            if (a11yStatus) {
                a11yStatus.textContent = t('draw.point.rotate.unsupported');
            }
        }
    } else if (geometry.type === 'polyline') {
        if (!isResizing && !isRotating) {
            const polyline = geometry as __esri.Polyline;
            const newPaths = polyline.paths.map(path => path.map(([x, y]) => [x + mapDx, y + mapDy]));
            newGeometry = new Polyline({
                paths: newPaths,
                spatialReference: geometry.spatialReference
            });
        } else if (isResizing) {
            const polyline = geometry as __esri.Polyline;
            const scaleFactor = e.key === 'ArrowUp' || e.key === 'ArrowRight' ? 1.05 : 0.95;
            const newPaths = polyline.paths.map(path =>
                path.map(([x, y]) => [center.x + (x - center.x) * scaleFactor, center.y + (y - center.y) * scaleFactor])
            );
            newGeometry = new Polyline({
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
                newGeometry = new Polyline({
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
            newGeometry = new Polygon({
                rings: newRings,
                spatialReference: geometry.spatialReference
            });
        } else if (isResizing) {
            const polygon = geometry as __esri.Polygon;
            const scaleFactor = e.key === 'ArrowUp' || e.key === 'ArrowRight' ? 1.05 : 0.95;
            const newRings = polygon.rings.map(ring =>
                ring.map(([x, y]) => [center.x + (x - center.x) * scaleFactor, center.y + (y - center.y) * scaleFactor])
            );
            newGeometry = new Polygon({
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
                newGeometry = new Polygon({
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
        view.goTo(view.center, { duration: 0 });
        highlightSelectedGraphic(selectedGraphic);
        const action = isResizing ? 'resized' : isRotating ? 'rotated' : 'moved';
        const a11yStatus = document.getElementById('drawing-a11y-status');
        if (a11yStatus) {
            a11yStatus.textContent = t(`draw.graphic.${action}`);
        }
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
    if (drawStore.activeTool) return;
    const view = iApi.geo.map.esriView;
    const response = await view.hitTest(event);
    if (response.results.length) {
        const hit = response.results.find(
            result =>
                result.graphic.layer === graphicsLayer && result.graphic.attributes && result.graphic.attributes.id
        );
        if (hit) {
            sketch.update([hit.graphic]);
            return;
        }
    }
    sketch.cancel();
    selectedGraphic = null;
    drawStore.clearSelection();
};

const initializeDrawTools = async () => {
    await iApi.geo.map.viewPromise;

    // Create or get the graphics layer for drawings
    if (!iApi.geo.layer.getLayer(DRAW_GRAPHICS_LAYER_ID)) {
        graphicsLayer = iApi.geo.layer.createLayer({
            id: DRAW_GRAPHICS_LAYER_ID,
            layerType: LayerType.GRAPHIC,
            cosmetic: true,
            url: ''
        });
        await iApi.geo.map.addLayer(graphicsLayer);
    } else {
        graphicsLayer = iApi.geo.layer.getLayer(DRAW_GRAPHICS_LAYER_ID).esriLayer;
    }
    if (graphicsLayer?.esriLayer) graphicsLayer = graphicsLayer.esriLayer;
    // Initialize the Sketch widget
    sketch = new Sketch({
        view: iApi.geo.map.esriView,
        layer: graphicsLayer,
        availableCreateTools: ['point', 'multipoint', 'polyline', 'polygon', 'rectangle', 'circle'],
        updateOnGraphicClick: true,
        visibleElements: {
            createTools: { point: true, polyline: true, polygon: true, rectangle: true, circle: true },
            selectionTools: { enable: true },
            settingsMenu: false
        },
        visible: false,
        creationMode: 'update'
    });
    iApi.geo.map.esriView.ui.add(sketch, 'bottom-right');

    // Set up event listeners
    sketchHandler = sketch.on('create', handleSketchCreateEvent);
    sketch.on('update', handleSketchUpdateEvent);

    // Add DOM event listeners
    iApi.geo.map.esriView.on('click', handleViewClick);
    document.addEventListener('keydown', handleNavigationKeyDown);
    document.addEventListener('keydown', handleGraphicKeyboardEdit, { capture: true });

    // Create a hidden div for screen reader announcements
    createA11yStatusElement();
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

const createA11yStatusElement = () => {
    // Remove any existing status element first
    const existingStatus = document.getElementById('drawing-a11y-status');
    if (existingStatus) {
        existingStatus.remove();
    }

    // Create a hidden div for screen reader announcements
    const a11yStatus = document.createElement('div');
    a11yStatus.id = 'drawing-a11y-status';
    a11yStatus.setAttribute('role', 'status');
    a11yStatus.setAttribute('aria-live', 'polite');
    a11yStatus.style.position = 'absolute';
    a11yStatus.style.width = '1px';
    a11yStatus.style.height = '1px';
    a11yStatus.style.padding = '0';
    a11yStatus.style.margin = '-1px';
    a11yStatus.style.overflow = 'hidden';
    a11yStatus.style.clip = 'rect(0, 0, 0, 0)';
    a11yStatus.style.whiteSpace = 'nowrap';
    a11yStatus.style.border = '0';
    document.body.appendChild(a11yStatus);
};

// Extract the existing sketch event handlers for reuse
const handleSketchCreateEvent = event => {
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
        selectedGraphic = graphic;
        drawStore.selectGraphic(id);
        drawStore.setActiveTool('');
    }
};

const handleSketchUpdateEvent = event => {
    if (event.state === 'start') {
        const graphics = event.graphics;
        if (graphics.length > 0) {
            const graphic = graphics[0];
            selectedGraphic = graphic;
            if (graphic.attributes?.id) {
                drawStore.selectGraphic(graphic.attributes.id);
                const a11yStatus = document.getElementById('drawing-a11y-status');
                if (a11yStatus) {
                    a11yStatus.textContent = t('draw.graphic.selected', {
                        type: graphic.attributes?.type || 'shape'
                    });
                }
            }
        }
    } else if (event.state === 'active') {
        // Remove highlight while editing.
        highlightSelectedGraphic(event.graphics[0]);
    } else if (event.state === 'complete') {
        const graphics = event.graphics;
        if (graphics.length > 0) {
            const graphic = graphics[0];
            if (graphic.attributes?.id) {
                drawStore.updateGraphicGeometry(graphic.attributes.id, graphic.geometry);
                const a11yStatus = document.getElementById('drawing-a11y-status');
                if (a11yStatus) {
                    a11yStatus.textContent = t('draw.graphic.updated');
                }
            }
        }
    }
};

/* --------------------------------------------------------------------------
 * INITIALIZATION & EVENT LISTENERS
 * -------------------------------------------------------------------------- */
onMounted(async () => {
    // Wait for the map view to be ready.
    await iApi.geo.map.viewPromise;

    // Initialize the drawing tools
    await initializeDrawTools();

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
        if (!sketch) return;
        if (newTool) {
            sketch.create(newTool as any);
        } else {
            sketch.cancel();
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

    // Remove A11Y status element
    const a11yStatus = document.getElementById('drawing-a11y-status');
    if (a11yStatus) {
        a11yStatus.remove();
    }
});
</script>
