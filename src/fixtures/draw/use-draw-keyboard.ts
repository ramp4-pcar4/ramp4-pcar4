import type { Composer } from 'vue-i18n';

import type { InstanceAPI } from '@/api/internal';
import {
    EsriGraphic,
    EsriPoint,
    EsriPolygon,
    EsriPolyline,
    EsriSimpleFillSymbol,
    EsriSimpleLineSymbol
} from '@/geo/esri';
import type { EsriGeometry, EsriGraphicHit, EsriGraphicsLayer } from '@/geo/esri';

import { useDrawStore } from './store';
import type { DrawGraphicLike, Vertex } from './types';

type DrawKeyboardOptions = {
    iApi: InstanceAPI;
    drawStore: ReturnType<typeof useDrawStore>;
    t: Composer['t'];
    translateTerm: (key?: string) => string;
    getSketch: () => HTMLArcgisSketchElement | null;
    getGraphicsLayer: () => EsriGraphicsLayer | null;
    getSelectedGraphic: () => EsriGraphic | null;
    getKeyboardEditGraphic: () => EsriGraphic | null;
    setSelectedGraphic: (graphic: EsriGraphic | null) => void;
    prepareDrawGraphic: (graphic: EsriGraphic, type: string | undefined) => string;
    applyDrawSymbol: (graphic: EsriGraphic) => void;
    syncBufferGraphic: (graphic: EsriGraphic) => void;
    syncGraphicStoreRecord: (graphic: EsriGraphic) => void;
    syncActiveSketchEditToSource: () => EsriGraphic | undefined;
    highlightSelectedGraphic: (graphic?: EsriGraphic | undefined) => void;
    deleteSelectedGraphic: () => boolean;
    startSketchUpdate: (graphic: EsriGraphic) => void;
    cancelPendingSketchUpdate: () => void;
    clearActiveSketchEdit: (options?: { restoreSource?: boolean }) => void;
    refreshMeasurementGraphics: (activeGraphic?: EsriGraphic, activeTool?: string) => Promise<void>;
    scheduleMeasurementRefresh: (activeGraphic?: EsriGraphic, activeTool?: string) => void;
    cancelPendingFeatureCountRefresh: () => void;
    refreshSelectedGraphicFeatureCounts: (graphic?: DrawGraphicLike) => Promise<void>;
};

const ARROW_KEYS = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];
const KEYBOARD_TRANSLATE_PIXELS = 10;
const KEYBOARD_SCALE_FACTOR = 1.05;
const KEYBOARD_SCALE_DOWN_FACTOR = 0.95;
const KEYBOARD_ROTATION_RADIANS = 0.05;

export const useDrawKeyboard = ({
    iApi,
    drawStore,
    t,
    translateTerm,
    getSketch,
    getGraphicsLayer,
    getSelectedGraphic,
    getKeyboardEditGraphic,
    setSelectedGraphic,
    prepareDrawGraphic,
    applyDrawSymbol,
    syncBufferGraphic,
    syncGraphicStoreRecord,
    syncActiveSketchEditToSource,
    highlightSelectedGraphic,
    deleteSelectedGraphic,
    startSketchUpdate,
    cancelPendingSketchUpdate,
    clearActiveSketchEdit,
    refreshMeasurementGraphics,
    scheduleMeasurementRefresh,
    cancelPendingFeatureCountRefresh,
    refreshSelectedGraphicFeatureCounts
}: DrawKeyboardOptions) => {
    let multiPointMode = false;
    let multiPointGraphic: EsriGraphic | null = null;
    let multiPointVertices: Vertex[] = [];

    const resetMultiPointState = () => {
        multiPointMode = false;
        multiPointGraphic = null;
        multiPointVertices = [];
    };

    const updateMultiPointGraphicGeometry = () => {
        const view = iApi.geo.map.esriView!;
        if (!multiPointGraphic) return;

        if (drawStore.activeTool === 'polyline') {
            multiPointGraphic.geometry = new EsriPolyline({
                paths: [multiPointVertices],
                spatialReference: view.spatialReference
            });
        } else {
            multiPointGraphic.geometry = new EsriPolygon({
                rings: [multiPointVertices],
                spatialReference: view.spatialReference
            });
        }
    };

    const createMultiPointGraphic = (): EsriGraphic => {
        const sketch = getSketch();
        const view = iApi.geo.map.esriView!;

        if (drawStore.activeTool === 'polyline') {
            return new EsriGraphic({
                geometry: new EsriPolyline({
                    paths: [multiPointVertices],
                    spatialReference: view.spatialReference
                }),
                symbol: sketch?.polylineSymbol || new EsriSimpleLineSymbol({ color: [0, 0, 255, 1], width: 2 })
            });
        }

        return new EsriGraphic({
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
    };

    const addMultiPointVertexAtCenter = () => {
        const view = iApi.geo.map.esriView!;
        const activeTool = drawStore.activeTool ?? undefined;
        const centerScreen = { x: Math.floor(view.width / 2), y: Math.floor(view.height / 2) };
        const centerPoint = view.toMap(centerScreen);

        if (!multiPointMode) {
            multiPointMode = true;
            multiPointVertices = [[centerPoint.x, centerPoint.y]];
            multiPointGraphic = createMultiPointGraphic();
            multiPointGraphic.attributes = { id: `temp-graphic-${Date.now()}`, type: drawStore.activeTool };
            getGraphicsLayer()?.add(multiPointGraphic);
            void refreshMeasurementGraphics(multiPointGraphic, activeTool);

            iApi.updateAlert(
                t('draw.multiPoint.started', {
                    type: translateTerm(activeTool),
                    count: 1
                })
            );
            return;
        }

        multiPointVertices.push([centerPoint.x, centerPoint.y]);
        updateMultiPointGraphicGeometry();
        void refreshMeasurementGraphics(multiPointGraphic!, activeTool);

        iApi.updateAlert(
            t('draw.multiPoint.pointAdded', {
                type: translateTerm(activeTool),
                count: multiPointVertices.length
            })
        );
    };

    /**
     * Selects a graphic located at the center of the view using a hit test.
     */
    const selectCenteredGraphic = async () => {
        const graphicsLayer = getGraphicsLayer();
        const sketch = getSketch();
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
        const response = await view.hitTest(searchArea, { include: graphicsLayer });
        const hits = response.results.filter((result): result is EsriGraphicHit => {
            if (!('graphic' in result) || result.graphic.layer !== graphicsLayer) return false;
            return !!result.graphic.attributes?.id;
        });
        if (hits.length > 0) {
            startSketchUpdate(hits[0].graphic);
            iApi.updateAlert(
                t('draw.graphic.selected', {
                    type: translateTerm(hits[0].graphic.attributes?.type)
                })
            );
        } else {
            cancelPendingSketchUpdate();
            sketch.cancel();
            clearActiveSketchEdit({ restoreSource: true });
            setSelectedGraphic(null);
            drawStore.clearSelection();
        }
    };

    /**
     * Creates a graphic at the center of the view based on the active tool.
     */
    const createGraphicAtCenter = async () => {
        const sketch = getSketch();
        const activeTool = drawStore.activeTool;
        if (!sketch || !activeTool) return;

        await iApi.geo.map.viewPromise;
        const view = iApi.geo.map.esriView!;
        const centerScreen = { x: Math.floor(view.width / 2), y: Math.floor(view.height / 2) };
        const centerPoint = view.toMap(centerScreen);
        const extent = view.extent;
        const shapeSize = Math.min(extent.width, extent.height) / 10;

        let graphic: EsriGraphic | undefined;
        switch (activeTool) {
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
                console.warn('Unknown tool type:', activeTool);
                return;
        }

        if (!graphic) return;

        const id = prepareDrawGraphic(graphic, activeTool);
        getGraphicsLayer()?.add(graphic);
        syncBufferGraphic(graphic);
        drawStore.addGraphic({
            id,
            type: activeTool,
            geometry: graphic.geometry,
            attributes: graphic.attributes
        });
        void refreshMeasurementGraphics();

        if (activeTool !== 'point') {
            drawStore.clearSelection();
            drawStore.setActiveTool('');
            iApi.keyboardNav?.reset();
            sketch.cancel();
        }

        iApi.updateAlert(
            t('draw.graphic.created', {
                type: translateTerm(activeTool)
            })
        );
    };

    const removeLastMultiPointVertex = () => {
        const activeTool = drawStore.activeTool ?? undefined;
        multiPointVertices.pop();
        updateMultiPointGraphicGeometry();
        multiPointGraphic!.set('geometry', multiPointGraphic?.geometry);
        void refreshMeasurementGraphics(multiPointGraphic!, activeTool);
        iApi.updateAlert(
            t('draw.multiPoint.pointRemoved', {
                type: translateTerm(activeTool),
                count: multiPointVertices.length
            })
        );
    };

    const cancelMultiPointMode = () => {
        if (multiPointGraphic) {
            getGraphicsLayer()?.remove(multiPointGraphic);
        }
        resetMultiPointState();
        void refreshMeasurementGraphics();
        iApi.updateAlert(t('draw.multiPoint.canceled'));
    };

    /**
     * Handles keyboard events for drawing and selecting graphics.
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
                        addMultiPointVertexAtCenter();
                    } else {
                        void createGraphicAtCenter();
                    }
                } else {
                    void selectCenteredGraphic();
                }
                break;

            case 'Delete':
            case 'Backspace':
                if (multiPointMode && multiPointVertices.length > 1) {
                    e.preventDefault();
                    removeLastMultiPointVertex();
                } else if (multiPointMode && multiPointVertices.length === 1) {
                    e.preventDefault();
                    cancelMultiPointMode();
                } else if (getSelectedGraphic()) {
                    e.preventDefault();
                    deleteSelectedGraphic();
                }
                break;

            case 'Escape':
                drawStore.setActiveTool(null);
                getSketch()?.cancel();
                setSelectedGraphic(null);
                highlightSelectedGraphic(undefined);
                drawStore.clearSelection();
                void refreshMeasurementGraphics();
                iApi.updateAlert(t('draw.tool.canceled'));
                break;
        }
    };

    const getGeometryCenter = (geometry: EsriGeometry): { x: number; y: number } => {
        if (geometry.type === 'point') {
            const point = geometry as EsriPoint;
            return { x: point.x, y: point.y };
        }

        const extent = geometry.extent!;
        return { x: (extent.xmin + extent.xmax) / 2, y: (extent.ymin + extent.ymax) / 2 };
    };

    const getKeyboardMapDelta = (
        key: string,
        center: { x: number; y: number },
        spatialReference: EsriGeometry['spatialReference']
    ) => {
        const view = iApi.geo.map.esriView!;
        let screenDx = 0;
        let screenDy = 0;
        if (key === 'ArrowLeft') screenDx = -KEYBOARD_TRANSLATE_PIXELS;
        if (key === 'ArrowRight') screenDx = KEYBOARD_TRANSLATE_PIXELS;
        if (key === 'ArrowUp') screenDy = -KEYBOARD_TRANSLATE_PIXELS;
        if (key === 'ArrowDown') screenDy = KEYBOARD_TRANSLATE_PIXELS;

        const screenPoint = view.toScreen(
            new EsriPoint({
                x: center.x,
                y: center.y,
                spatialReference
            })
        )!;
        screenPoint.x += screenDx;
        screenPoint.y += screenDy;

        const mapPoint = view.toMap(screenPoint);
        return {
            x: mapPoint.x - center.x,
            y: mapPoint.y - center.y
        };
    };

    const scaleFactorForKey = (key: string): number =>
        key === 'ArrowUp' || key === 'ArrowRight' ? KEYBOARD_SCALE_FACTOR : KEYBOARD_SCALE_DOWN_FACTOR;

    const rotationForKey = (key: string): number =>
        key === 'ArrowLeft' ? -KEYBOARD_ROTATION_RADIANS : key === 'ArrowRight' ? KEYBOARD_ROTATION_RADIANS : 0;

    const moveVertices = (vertices: Vertex[], mapDx: number, mapDy: number): Vertex[] =>
        vertices.map(([x, y]) => [x + mapDx, y + mapDy]);

    const scaleVertices = (vertices: Vertex[], center: { x: number; y: number }, scaleFactor: number): Vertex[] =>
        vertices.map(([x, y]) => [center.x + (x - center.x) * scaleFactor, center.y + (y - center.y) * scaleFactor]);

    const rotateVertices = (vertices: Vertex[], center: { x: number; y: number }, angle: number): Vertex[] => {
        const cos = Math.cos(angle);
        const sin = Math.sin(angle);
        return vertices.map(([x, y]) => {
            const dx = x - center.x;
            const dy = y - center.y;
            const rx = dx * cos - dy * sin;
            const ry = dx * sin + dy * cos;
            return [center.x + rx, center.y + ry];
        });
    };

    const transformPathVertices = (paths: Vertex[][], transform: (vertices: Vertex[]) => Vertex[]): Vertex[][] =>
        paths.map(path => transform(path as Vertex[]));

    const createKeyboardEditedGeometry = (
        geometry: EsriGeometry,
        key: string,
        isResizing: boolean,
        isRotating: boolean
    ): EsriGeometry | undefined => {
        const center = getGeometryCenter(geometry);
        const mapDelta = getKeyboardMapDelta(key, center, geometry.spatialReference);

        if (geometry.type === 'point') {
            if (!isResizing && !isRotating) {
                const point = geometry as EsriPoint;
                return new EsriPoint({
                    x: point.x + mapDelta.x,
                    y: point.y + mapDelta.y,
                    spatialReference: geometry.spatialReference
                });
            }

            iApi.updateAlert(t(isResizing ? 'draw.point.resize.unsupported' : 'draw.point.rotate.unsupported'));
            return geometry.clone();
        }

        if (geometry.type === 'polyline') {
            const polyline = geometry as EsriPolyline;
            const paths = polyline.paths as Vertex[][];

            if (!isResizing && !isRotating) {
                return new EsriPolyline({
                    paths: transformPathVertices(paths, vertices => moveVertices(vertices, mapDelta.x, mapDelta.y)),
                    spatialReference: geometry.spatialReference
                });
            }

            if (isResizing) {
                return new EsriPolyline({
                    paths: transformPathVertices(paths, vertices =>
                        scaleVertices(vertices, center, scaleFactorForKey(key))
                    ),
                    spatialReference: geometry.spatialReference
                });
            }

            const angle = rotationForKey(key);
            return angle === 0
                ? geometry.clone()
                : new EsriPolyline({
                      paths: transformPathVertices(paths, vertices => rotateVertices(vertices, center, angle)),
                      spatialReference: geometry.spatialReference
                  });
        }

        if (geometry.type === 'polygon') {
            const polygon = geometry as EsriPolygon;
            const rings = polygon.rings as Vertex[][];

            if (!isResizing && !isRotating) {
                return new EsriPolygon({
                    rings: transformPathVertices(rings, vertices => moveVertices(vertices, mapDelta.x, mapDelta.y)),
                    spatialReference: geometry.spatialReference
                });
            }

            if (isResizing) {
                return new EsriPolygon({
                    rings: transformPathVertices(rings, vertices =>
                        scaleVertices(vertices, center, scaleFactorForKey(key))
                    ),
                    spatialReference: geometry.spatialReference
                });
            }

            const angle = rotationForKey(key);
            return angle === 0
                ? geometry.clone()
                : new EsriPolygon({
                      rings: transformPathVertices(rings, vertices => rotateVertices(vertices, center, angle)),
                      spatialReference: geometry.spatialReference
                  });
        }

        return undefined;
    };

    const handleGraphicKeyboardEdit = (e: KeyboardEvent) => {
        const mapElement = iApi.geo.map.esriView!.container;
        if (!document.activeElement || !mapElement?.contains(document.activeElement)) return;
        if (!ARROW_KEYS.includes(e.key)) return;
        if (drawStore.activeTool !== 'edit' || drawStore.shapeDetailsActiveTab !== 'edit') return;

        const selectedGraphic = getKeyboardEditGraphic() ?? getSelectedGraphic();
        if (!selectedGraphic) return;

        e.preventDefault();
        e.stopPropagation();

        const isResizing = e.shiftKey;
        const isRotating = e.altKey;
        const newGeometry = createKeyboardEditedGeometry(selectedGraphic.geometry!, e.key, isResizing, isRotating);

        if (!newGeometry) return;

        selectedGraphic.geometry = newGeometry;
        selectedGraphic.set('geometry', newGeometry);
        applyDrawSymbol(selectedGraphic);
        const syncedGraphic = syncActiveSketchEditToSource() ?? selectedGraphic;
        if (syncedGraphic === selectedGraphic) {
            syncBufferGraphic(selectedGraphic);
            syncGraphicStoreRecord(selectedGraphic);
        }
        highlightSelectedGraphic(syncedGraphic);
        scheduleMeasurementRefresh(syncedGraphic, syncedGraphic.attributes?.type);
        cancelPendingFeatureCountRefresh();
        void refreshSelectedGraphicFeatureCounts(syncedGraphic);
        const action = isResizing ? 'resized' : isRotating ? 'rotated' : 'moved';
        iApi.updateAlert(t(`draw.graphic.${action}`));
    };

    return {
        handleNavigationKeyDown,
        handleGraphicKeyboardEdit,
        resetMultiPointState
    };
};
