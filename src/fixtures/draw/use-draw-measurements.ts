import { ref, toRaw, watch } from 'vue';
import type { Ref } from 'vue';
import type { Composer } from 'vue-i18n';

import { GlobalEvents } from '@/api';
import type { InstanceAPI } from '@/api/internal';
import { EsriGraphic, EsriPoint, EsriPolygon, EsriSimpleMarkerSymbol, EsriTextSymbol } from '@/geo/esri';
import type {
    EsriGeometry,
    EsriGraphicHit,
    EsriGraphicsLayer,
    EsriMapView,
    EsriPolyline,
    EsriViewClickEvent,
    EsriViewPointerMoveEvent
} from '@/geo/esri';

import {
    buildDrawSegments,
    buildDrawVertices,
    formatDrawLength,
    formatDrawMapArea,
    loadDrawMeasurementOperators,
    measureDrawPolygonSquareMeters,
    parseDrawMeasurementTargetKey,
    polygonLabelPoint
} from './measurement-utils';
import { resolveGraphicMapLabelSettings } from './settings';
import { useDrawStore } from './store';
import type { Vertex } from './types';

type MeasurementGraphicKind = 'vertex-marker' | 'vertex-label';

type MeasurementGraphicAttributes = {
    drawMeasurement: true;
    drawMeasurementKind: MeasurementGraphicKind;
    drawGraphicId?: string;
    drawSegmentKey?: string;
    drawVertexKey?: string;
    drawMeasurementText?: string;
};

type MeasurementLabelInfo = {
    graphics: EsriGraphic[];
    segmentLabels?: SegmentLabelInfo[];
    areaLabels?: AreaLabelInfo[];
    accessibleText?: string;
};

type MeasurableGraphic = {
    id: string;
    type: string;
    geometry: EsriGeometry;
    includeDistance: boolean;
    includeSegmentBadges: boolean;
    includeVertices: boolean;
    includeArea: boolean;
    badgeColor: string;
};

type SegmentLabelInfo = {
    key: string;
    letter: string;
    showBadge: boolean;
    distanceText?: string;
    badgeColor: string;
    start: Vertex;
    end: Vertex;
    geometry: EsriGeometry;
};

type AreaLabelInfo = {
    key: string;
    text: string;
    point: EsriPoint;
};

type ScreenPoint = {
    x: number;
    y: number;
};

type ScreenRect = {
    left: number;
    top: number;
    right: number;
    bottom: number;
    width: number;
    height: number;
};

type ScreenBox = {
    corners: ScreenPoint[];
    axes: ScreenPoint[];
};

type SegmentScreenPlacement = {
    midpoint: ScreenPoint;
    tangent: ScreenPoint;
    normal: ScreenPoint;
    angle: number;
    length: number;
};

type SegmentLabelCandidate = {
    anchor: ScreenPoint;
    angle: number;
    sideCrowdingScore: number;
};

type SegmentLabelLayoutItem = {
    label: SegmentLabelInfo;
    element: HTMLDivElement;
    placement: SegmentScreenPlacement;
};

const LABEL_OFFSET_PX = 16;
const LABEL_SPACING_PX = 2;
const SEGMENT_HIT_TOLERANCE_PX = 8;
const SHORT_SEGMENT_MIN_PX = 8;
const FULL_LABEL_SEGMENT_PADDING_PX = 2;
const SEGMENT_BADGE_COLOR = '#1d4ed8';
const VERTEX_LABEL_BLOCKER_SIZE_PX = 30;

type DrawMeasurementsOptions = {
    iApi: InstanceAPI;
    drawStore: ReturnType<typeof useDrawStore>;
    locale: Ref<string>;
    t: Composer['t'];
    getGraphicsLayer: () => EsriGraphicsLayer | null;
    isShapeDetailsOpen: () => boolean;
    getShapeDetailsGraphic: () => EsriGraphic | undefined;
};

export const useDrawMeasurements = ({
    iApi,
    drawStore,
    locale,
    t,
    getGraphicsLayer,
    isShapeDetailsOpen,
    getShapeDetailsGraphic
}: DrawMeasurementsOptions) => {
    let measurementRefreshFrame: number | null = null;
    let measurementRefreshRunId = 0;
    let measurementHitTestRunId = 0;
    let measurementGraphics: EsriGraphic[] = [];
    let pendingMeasurementRefresh: { activeGraphic?: EsriGraphic; activeTool?: string } | null = null;
    let measurementPointerMoveHandle: { remove: () => void } | null = null;
    let measurementClickHandle: { remove: () => void } | null = null;
    let measurementMouseLeaveHandler: (() => void) | null = null;
    let segmentLabelOverlay: HTMLDivElement | null = null;
    let segmentLabelLayoutFrame: number | null = null;
    let segmentLabelElements = new Map<string, HTMLDivElement>();
    let areaLabelElements = new Map<string, HTMLDivElement>();
    let currentSegmentLabels: SegmentLabelInfo[] = [];
    let currentAreaLabels: AreaLabelInfo[] = [];
    let measurementMapChangeHandlers: string[] = [];

    const measurementSummary = ref('');

    const hasVisibleMapLabelSettings = (): boolean =>
        drawStore.graphics.some(graphic => {
            const id = String(graphic.id ?? graphic.attributes?.id ?? '');
            const labels = resolveGraphicMapLabelSettings(graphic.attributes);
            const forceLabels = isShapeDetailsGraphic(id) && drawStore.shapeDetailsLabelsVisible;
            return (
                labels.areaLabel || labels.segmentLength || labels.segmentLetters || labels.vertexNumbers || forceLabels
            );
        });

    const shouldShowMeasurementGraphics = (): boolean =>
        drawStore.measurementsEnabled || isShapeDetailsOpen() || hasVisibleMapLabelSettings();

    const isShapeDetailsGraphic = (graphicId: string): boolean =>
        isShapeDetailsOpen() && drawStore.selectedGraphicId === graphicId;

    const canHighlightMeasurementTargets = (): boolean =>
        isShapeDetailsOpen() && drawStore.shapeDetailsActiveTab === 'details' && !!drawStore.selectedGraphicId;

    const isSelectedMeasurementTarget = (key: string | null | undefined): key is string => {
        const target = parseDrawMeasurementTargetKey(key);
        return !!target && target.graphicId === drawStore.selectedGraphicId;
    };

    const isActiveSegmentKey = (key: string): boolean =>
        canHighlightMeasurementTargets() && isSelectedMeasurementTarget(key) && key === drawStore.activeSegmentKey;

    const isActiveVertexKey = (key: string | undefined): boolean =>
        canHighlightMeasurementTargets() && isSelectedMeasurementTarget(key) && key === drawStore.activeVertexKey;

    const createVertexMarkerSymbol = (active: boolean): EsriSimpleMarkerSymbol =>
        new EsriSimpleMarkerSymbol({
            style: 'circle',
            color: active ? [37, 99, 235, 1] : [255, 255, 255, 0.96],
            size: active ? 24 : 20,
            outline: {
                color: active ? [255, 255, 255, 1] : [17, 24, 39, 0.9],
                width: active ? 2 : 1.5
            }
        });

    const createVertexTextSymbol = (text: string, active: boolean): EsriTextSymbol =>
        new EsriTextSymbol({
            text,
            color: active ? [255, 255, 255, 1] : [17, 24, 39, 1],
            haloColor: active ? [37, 99, 235, 1] : [255, 255, 255, 1],
            haloSize: 0.8,
            horizontalAlignment: 'center',
            verticalAlignment: 'middle',
            font: {
                family: 'Arial',
                size: 10,
                weight: 'bold'
            }
        });

    const createVertexGraphics = (
        point: EsriPoint,
        label: string,
        attributes: MeasurementGraphicAttributes,
        active: boolean
    ): EsriGraphic[] => [
        new EsriGraphic({
            geometry: point,
            symbol: createVertexMarkerSymbol(active),
            attributes: {
                ...attributes,
                drawMeasurementKind: 'vertex-marker'
            }
        }),
        new EsriGraphic({
            geometry: point,
            symbol: createVertexTextSymbol(label, active),
            attributes: {
                ...attributes,
                drawMeasurementKind: 'vertex-label',
                drawMeasurementText: label
            }
        })
    ];

    const vertexPoint = (vertex: [number, number], spatialReference: EsriGeometry['spatialReference']): EsriPoint =>
        new EsriPoint({
            x: vertex[0],
            y: vertex[1],
            spatialReference
        });

    const isFiniteScreenPoint = (point: ScreenPoint | null | undefined): point is ScreenPoint =>
        !!point && Number.isFinite(point.x) && Number.isFinite(point.y);

    const distanceInPixels = (first: ScreenPoint, second: ScreenPoint): number =>
        Math.hypot(second.x - first.x, second.y - first.y);

    const normalizeVector = (vector: ScreenPoint): ScreenPoint | undefined => {
        const length = Math.hypot(vector.x, vector.y);
        if (!Number.isFinite(length) || length <= 0) {
            return undefined;
        }

        return {
            x: vector.x / length,
            y: vector.y / length
        };
    };

    const normalizeReadableAngle = (angle: number): number => {
        let normalized = angle;
        while (normalized > 180) normalized -= 360;
        while (normalized < -180) normalized += 360;

        if (normalized > 90) normalized -= 180;
        if (normalized < -90) normalized += 180;

        return normalized;
    };

    const getScreenPathMidpoint = (
        points: ScreenPoint[]
    ): { midpoint: ScreenPoint; tangent: ScreenPoint; length: number } | undefined => {
        if (points.length < 2) {
            return undefined;
        }

        const lengths: number[] = [];
        let total = 0;

        for (let index = 0; index < points.length - 1; index++) {
            const length = distanceInPixels(points[index], points[index + 1]);
            lengths.push(length);
            total += length;
        }

        if (!Number.isFinite(total) || total <= 0) {
            return undefined;
        }

        const target = total / 2;
        let walked = 0;

        for (let index = 0; index < points.length - 1; index++) {
            const length = lengths[index];
            if (length <= 0) {
                continue;
            }

            if (walked + length >= target) {
                const first = points[index];
                const second = points[index + 1];
                const t = (target - walked) / length;
                const tangent = normalizeVector({
                    x: second.x - first.x,
                    y: second.y - first.y
                });

                if (!tangent) {
                    return undefined;
                }

                return {
                    midpoint: {
                        x: first.x + (second.x - first.x) * t,
                        y: first.y + (second.y - first.y) * t
                    },
                    tangent,
                    length: total
                };
            }

            walked += length;
        }

        return undefined;
    };

    const vertexToScreenPoint = (
        vertex: Vertex,
        spatialReference: EsriGeometry['spatialReference'],
        view: EsriMapView
    ): ScreenPoint | undefined => {
        const screenPoint = view.toScreen(new EsriPoint({ x: vertex[0], y: vertex[1], spatialReference }));
        return isFiniteScreenPoint(screenPoint) ? { x: screenPoint.x, y: screenPoint.y } : undefined;
    };

    const ringDisplayVertices = (ring: Vertex[]): Vertex[] =>
        ring.length > 1 && ring[0][0] === ring[ring.length - 1][0] && ring[0][1] === ring[ring.length - 1][1]
            ? ring.slice(0, -1)
            : ring;

    const polygonScreenCentroid = (polygon: EsriPolygon, view: EsriMapView): ScreenPoint | undefined => {
        const rings = polygon.rings as Vertex[][];
        let areaSum = 0;
        let centroidX = 0;
        let centroidY = 0;
        const fallbackPoints: ScreenPoint[] = [];

        rings.forEach(ring => {
            const points = ringDisplayVertices(ring)
                .map(vertex => vertexToScreenPoint(vertex, polygon.spatialReference, view))
                .filter((point): point is ScreenPoint => !!point);
            fallbackPoints.push(...points);

            if (points.length < 3) {
                return;
            }

            for (let index = 0; index < points.length; index++) {
                const current = points[index];
                const next = points[(index + 1) % points.length];
                const cross = current.x * next.y - next.x * current.y;
                areaSum += cross;
                centroidX += (current.x + next.x) * cross;
                centroidY += (current.y + next.y) * cross;
            }
        });

        if (Math.abs(areaSum) > 0.0001) {
            return {
                x: centroidX / (3 * areaSum),
                y: centroidY / (3 * areaSum)
            };
        }

        if (!fallbackPoints.length) {
            return undefined;
        }

        return {
            x: fallbackPoints.reduce((sum, point) => sum + point.x, 0) / fallbackPoints.length,
            y: fallbackPoints.reduce((sum, point) => sum + point.y, 0) / fallbackPoints.length
        };
    };

    const polylineScreenCenter = (polyline: EsriPolyline, view: EsriMapView): ScreenPoint | undefined => {
        const points = (polyline.paths as Vertex[][])
            .flatMap(path => path)
            .map(vertex => vertexToScreenPoint(vertex, polyline.spatialReference, view))
            .filter((point): point is ScreenPoint => !!point);

        if (!points.length) {
            return undefined;
        }

        return {
            x: points.reduce((sum, point) => sum + point.x, 0) / points.length,
            y: points.reduce((sum, point) => sum + point.y, 0) / points.length
        };
    };

    const geometryScreenLabelCenter = (geometry: EsriGeometry, view: EsriMapView): ScreenPoint | undefined => {
        if (geometry.type === 'polygon') {
            return polygonScreenCentroid(geometry as EsriPolygon, view);
        }

        if (geometry.type === 'polyline') {
            return polylineScreenCenter(geometry as EsriPolyline, view);
        }

        return undefined;
    };

    const geometryScreenSamplePoints = (geometry: EsriGeometry, view: EsriMapView): ScreenPoint[] => {
        const spatialReference = geometry.spatialReference;
        const samples: ScreenPoint[] = [];

        const addPathSamples = (path: Vertex[], closed: boolean) => {
            const vertices = closed ? ringDisplayVertices(path) : path;
            vertices.forEach(vertex => {
                const point = vertexToScreenPoint(vertex, spatialReference, view);
                if (point) {
                    samples.push(point);
                }
            });

            const segmentCount = closed ? vertices.length : vertices.length - 1;
            for (let index = 0; index < segmentCount; index++) {
                const start = vertices[index];
                const end = vertices[(index + 1) % vertices.length];
                const point = vertexToScreenPoint(
                    [(start[0] + end[0]) / 2, (start[1] + end[1]) / 2],
                    spatialReference,
                    view
                );
                if (point) {
                    samples.push(point);
                }
            }
        };

        if (geometry.type === 'polyline') {
            (geometry as EsriPolyline).paths.forEach(path => addPathSamples(path as Vertex[], false));
        }

        if (geometry.type === 'polygon') {
            (geometry as EsriPolygon).rings.forEach(ring => addPathSamples(ring as Vertex[], true));
        }

        return samples;
    };

    const getSegmentScreenPlacement = (
        label: SegmentLabelInfo,
        view: EsriMapView
    ): SegmentScreenPlacement | undefined => {
        const points = [label.start, label.end]
            .map(vertex => vertexToScreenPoint(vertex, label.geometry.spatialReference, view))
            .filter((point): point is ScreenPoint => !!point);
        const midpointInfo = getScreenPathMidpoint(points);
        if (!midpointInfo) {
            return undefined;
        }

        let normal = {
            x: -midpointInfo.tangent.y,
            y: midpointInfo.tangent.x
        };

        if (label.geometry.type === 'polygon' || label.geometry.type === 'polyline') {
            const geometryCenter = geometryScreenLabelCenter(label.geometry, view);
            if (geometryCenter) {
                const vectorFromCenterToMidpoint = {
                    x: midpointInfo.midpoint.x - geometryCenter.x,
                    y: midpointInfo.midpoint.y - geometryCenter.y
                };
                const dot = normal.x * vectorFromCenterToMidpoint.x + normal.y * vectorFromCenterToMidpoint.y;

                if (dot < 0) {
                    normal = {
                        x: -normal.x,
                        y: -normal.y
                    };
                }
            }
        }

        const angleRadians = Math.atan2(midpointInfo.tangent.y, midpointInfo.tangent.x);

        return {
            ...midpointInfo,
            normal,
            angle: normalizeReadableAngle((angleRadians * 180) / Math.PI)
        };
    };

    const segmentSideCrowdingScore = (
        label: SegmentLabelInfo,
        placement: SegmentScreenPlacement,
        sideNormal: ScreenPoint,
        view: EsriMapView
    ): number => {
        const sameSideThreshold = LABEL_OFFSET_PX / 2;

        return geometryScreenSamplePoints(label.geometry, view).reduce((score, point) => {
            const relative = {
                x: point.x - placement.midpoint.x,
                y: point.y - placement.midpoint.y
            };
            const sideDistance = relative.x * sideNormal.x + relative.y * sideNormal.y;

            if (sideDistance <= sameSideThreshold) {
                return score;
            }

            const distance = Math.hypot(relative.x, relative.y);
            if (!Number.isFinite(distance) || distance <= sameSideThreshold) {
                return score;
            }

            return score + 100 / Math.max(distance, SHORT_SEGMENT_MIN_PX);
        }, 0);
    };

    const buildSegmentLabelCandidates = (
        label: SegmentLabelInfo,
        placement: SegmentScreenPlacement,
        view: EsriMapView
    ): SegmentLabelCandidate[] => {
        const oppositeNormal = {
            x: -placement.normal.x,
            y: -placement.normal.y
        };
        const offsetCandidate = (normal: ScreenPoint): SegmentLabelCandidate => ({
            anchor: {
                x: placement.midpoint.x + normal.x * LABEL_OFFSET_PX,
                y: placement.midpoint.y + normal.y * LABEL_OFFSET_PX
            },
            angle: placement.angle,
            sideCrowdingScore: segmentSideCrowdingScore(label, placement, normal, view)
        });

        return [offsetCandidate(placement.normal), offsetCandidate(oppositeNormal)];
    };

    const clippedRectFromDomRect = (rect: DOMRect, containerRect: DOMRect): ScreenRect | undefined => {
        const left = Math.max(rect.left, containerRect.left) - containerRect.left;
        const top = Math.max(rect.top, containerRect.top) - containerRect.top;
        const right = Math.min(rect.right, containerRect.right) - containerRect.left;
        const bottom = Math.min(rect.bottom, containerRect.bottom) - containerRect.top;

        if (right <= left || bottom <= top) {
            return undefined;
        }

        return {
            left,
            top,
            right,
            bottom,
            width: right - left,
            height: bottom - top
        };
    };

    const screenBoxFromCenter = (center: ScreenPoint, width: number, height: number, angle = 0): ScreenBox => {
        const radians = (angle * Math.PI) / 180;
        const axisX = {
            x: Math.cos(radians),
            y: Math.sin(radians)
        };
        const axisY = {
            x: -Math.sin(radians),
            y: Math.cos(radians)
        };
        const halfWidth = width / 2;
        const halfHeight = height / 2;
        const corners = [
            {
                x: center.x - axisX.x * halfWidth - axisY.x * halfHeight,
                y: center.y - axisX.y * halfWidth - axisY.y * halfHeight
            },
            {
                x: center.x + axisX.x * halfWidth - axisY.x * halfHeight,
                y: center.y + axisX.y * halfWidth - axisY.y * halfHeight
            },
            {
                x: center.x + axisX.x * halfWidth + axisY.x * halfHeight,
                y: center.y + axisX.y * halfWidth + axisY.y * halfHeight
            },
            {
                x: center.x - axisX.x * halfWidth + axisY.x * halfHeight,
                y: center.y - axisX.y * halfWidth + axisY.y * halfHeight
            }
        ];

        return {
            corners,
            axes: [axisX, axisY]
        };
    };

    const screenBoxFromRect = (rect: ScreenRect): ScreenBox =>
        screenBoxFromCenter(
            {
                x: rect.left + rect.width / 2,
                y: rect.top + rect.height / 2
            },
            rect.width,
            rect.height
        );

    const screenBoxFromElement = (
        element: HTMLElement,
        candidate: Pick<SegmentLabelCandidate, 'anchor' | 'angle'>
    ): ScreenBox =>
        screenBoxFromCenter(
            candidate.anchor,
            element.offsetWidth || element.getBoundingClientRect().width,
            element.offsetHeight || element.getBoundingClientRect().height,
            candidate.angle
        );

    const projectScreenBox = (box: ScreenBox, axis: ScreenPoint): { min: number; max: number } =>
        box.corners.reduce(
            (projection, point) => {
                const value = point.x * axis.x + point.y * axis.y;
                return {
                    min: Math.min(projection.min, value),
                    max: Math.max(projection.max, value)
                };
            },
            { min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY }
        );

    const screenBoxesOverlapWithSpacing = (first: ScreenBox, second: ScreenBox, spacing = 0): boolean =>
        [...first.axes, ...second.axes].every(axis => {
            const firstProjection = projectScreenBox(first, axis);
            const secondProjection = projectScreenBox(second, axis);

            return !(
                firstProjection.max + spacing <= secondProjection.min ||
                secondProjection.max + spacing <= firstProjection.min
            );
        });

    const isScreenBoxInsideContainer = (box: ScreenBox, containerRect: DOMRect): boolean =>
        box.corners.every(
            corner =>
                corner.x >= 0 && corner.y >= 0 && corner.x <= containerRect.width && corner.y <= containerRect.height
        );

    const visibleElement = (element: Element): boolean => {
        const style = window.getComputedStyle(element);
        const rect = element.getBoundingClientRect();
        return (
            style.display !== 'none' &&
            style.visibility !== 'hidden' &&
            style.opacity !== '0' &&
            rect.width > 0 &&
            rect.height > 0
        );
    };

    const getMapControlBlockingBoxes = (view: EsriMapView, containerRect: DOMRect): ScreenBox[] => {
        const container = view.container;
        if (!container) {
            return [];
        }

        const selectors = [
            '.esri-ui .esri-component',
            '.esri-popup',
            '.esri-attribution',
            'arcgis-sketch',
            '[class*="esri-sketch"]'
        ];

        return Array.from(container.querySelectorAll(selectors.join(',')))
            .filter(element => !!segmentLabelOverlay && !segmentLabelOverlay.contains(element))
            .filter(visibleElement)
            .map(element => clippedRectFromDomRect(element.getBoundingClientRect(), containerRect))
            .filter((rect): rect is ScreenRect => !!rect)
            .filter(rect => rect.width < containerRect.width * 0.85 || rect.height < containerRect.height * 0.85)
            .map(screenBoxFromRect);
    };

    const getVertexMeasurementPoint = (label: MeasurementLabelInfo): EsriPoint | undefined => {
        const vertexGraphic = label.graphics.find(graphic => {
            const attributes = graphic.attributes as MeasurementGraphicAttributes | undefined;
            const geometry = graphic.geometry as EsriPoint | undefined;
            return (
                !!attributes &&
                !!geometry &&
                geometry.type === 'point' &&
                (attributes.drawMeasurementKind === 'vertex-marker' ||
                    attributes.drawMeasurementKind === 'vertex-label')
            );
        });

        return vertexGraphic?.geometry as EsriPoint | undefined;
    };

    const getVertexMeasurementBox = (label: MeasurementLabelInfo, view: EsriMapView): ScreenBox | undefined => {
        const point = getVertexMeasurementPoint(label);
        if (!point) {
            return undefined;
        }

        const screenPoint = view.toScreen(point);
        if (!isFiniteScreenPoint(screenPoint)) {
            return undefined;
        }

        return screenBoxFromCenter(screenPoint, VERTEX_LABEL_BLOCKER_SIZE_PX, VERTEX_LABEL_BLOCKER_SIZE_PX);
    };

    const filterCollidingVertexMeasurementLabels = (
        labels: MeasurementLabelInfo[],
        view: EsriMapView
    ): MeasurementLabelInfo[] => {
        const vertexBoxes: ScreenBox[] = [];

        return labels.filter(label => {
            const box = getVertexMeasurementBox(label, view);
            if (!box) {
                return true;
            }

            if (vertexBoxes.some(blockedBox => screenBoxesOverlapWithSpacing(box, blockedBox, LABEL_SPACING_PX))) {
                return false;
            }

            vertexBoxes.push(box);
            return true;
        });
    };

    const getMeasurementGraphicBlockingBoxes = (view: EsriMapView): ScreenBox[] => {
        const vertexKeys = new Set<string>();
        const boxes: ScreenBox[] = [];

        measurementGraphics.forEach(graphic => {
            const attributes = graphic.attributes as MeasurementGraphicAttributes | undefined;
            const geometry = graphic.geometry as EsriPoint | undefined;
            if (!attributes || !geometry || geometry.type !== 'point') {
                return;
            }

            const point = view.toScreen(geometry);
            if (!isFiniteScreenPoint(point)) {
                return;
            }

            if (
                attributes.drawMeasurementKind === 'vertex-marker' ||
                attributes.drawMeasurementKind === 'vertex-label'
            ) {
                const key = attributes.drawVertexKey ?? `${point.x}:${point.y}`;
                if (vertexKeys.has(key)) {
                    return;
                }
                vertexKeys.add(key);
                boxes.push(screenBoxFromCenter(point, VERTEX_LABEL_BLOCKER_SIZE_PX, VERTEX_LABEL_BLOCKER_SIZE_PX));
            }
        });

        return boxes;
    };

    const getBlockingBoxes = (view: EsriMapView, containerRect: DOMRect): ScreenBox[] => [
        ...getMeasurementGraphicBlockingBoxes(view),
        ...getMapControlBlockingBoxes(view, containerRect)
    ];

    const ensureSegmentLabelOverlay = (view: EsriMapView): HTMLDivElement | undefined => {
        const container = view.container;
        if (!container) {
            return undefined;
        }

        if (segmentLabelOverlay?.parentElement === container) {
            return segmentLabelOverlay;
        }

        segmentLabelOverlay?.remove();
        segmentLabelOverlay = document.createElement('div');
        segmentLabelOverlay.className = 'rv-draw-segment-label-overlay';
        segmentLabelOverlay.setAttribute('aria-hidden', 'true');
        container.appendChild(segmentLabelOverlay);
        segmentLabelElements = new Map<string, HTMLDivElement>();
        areaLabelElements = new Map<string, HTMLDivElement>();

        return segmentLabelOverlay;
    };

    const updateSegmentLabelElement = (element: HTMLDivElement, label: SegmentLabelInfo) => {
        const badge = element.querySelector<HTMLSpanElement>('.rv-draw-segment-label-badge');
        const distance = element.querySelector<HTMLSpanElement>('.rv-draw-segment-label-distance');

        if (badge) {
            badge.textContent = label.letter;
            badge.style.backgroundColor = label.badgeColor;
            badge.hidden = !label.showBadge;
        }

        if (distance) {
            distance.textContent = label.distanceText ?? '';
        }

        element.dataset.segmentKey = label.key;
        element.classList.toggle('rv-no-badge', !label.showBadge);
    };

    const createSegmentLabelElement = (label: SegmentLabelInfo): HTMLDivElement => {
        const element = document.createElement('div');
        element.className = 'rv-draw-segment-label';
        element.style.visibility = 'hidden';
        element.style.left = '0px';
        element.style.top = '0px';

        const badge = document.createElement('span');
        badge.className = 'rv-draw-segment-label-badge';
        element.appendChild(badge);

        const distance = document.createElement('span');
        distance.className = 'rv-draw-segment-label-distance';
        element.appendChild(distance);

        updateSegmentLabelElement(element, label);
        return element;
    };

    const updateAreaLabelElement = (element: HTMLDivElement, label: AreaLabelInfo) => {
        const text = element.querySelector<HTMLSpanElement>('.rv-draw-segment-label-distance');
        if (text) {
            text.textContent = label.text;
        }

        element.dataset.areaLabelKey = label.key;
    };

    const createAreaLabelElement = (label: AreaLabelInfo): HTMLDivElement => {
        const element = document.createElement('div');
        element.className = 'rv-draw-segment-label rv-draw-area-label rv-no-badge';
        element.style.visibility = 'hidden';
        element.style.left = '0px';
        element.style.top = '0px';

        const text = document.createElement('span');
        text.className = 'rv-draw-segment-label-distance';
        element.appendChild(text);

        updateAreaLabelElement(element, label);
        return element;
    };

    const setSegmentLabelDistanceHidden = (element: HTMLDivElement, hidden: boolean) => {
        const distance = element.querySelector<HTMLSpanElement>('.rv-draw-segment-label-distance');
        element.classList.toggle('rv-distance-hidden', hidden);
        if (distance) {
            distance.hidden = hidden;
        }
    };

    const setSegmentLabelCandidateStyle = (
        element: HTMLDivElement,
        candidate: Pick<SegmentLabelCandidate, 'anchor' | 'angle'>
    ) => {
        element.style.left = `${candidate.anchor.x}px`;
        element.style.top = `${candidate.anchor.y}px`;
        element.style.transform = `translate(-50%, -50%) rotate(${candidate.angle}deg)`;
        element.style.transformOrigin = 'center center';
    };

    const isSegmentLabelBoxClearOfFixedBlockers = (
        box: ScreenBox,
        containerRect: DOMRect,
        blockingBoxes: ScreenBox[]
    ): boolean => {
        if (!isScreenBoxInsideContainer(box, containerRect)) {
            return false;
        }

        return !blockingBoxes.some(blockedBox => screenBoxesOverlapWithSpacing(box, blockedBox, LABEL_SPACING_PX));
    };

    const isCleanSegmentLabelBox = (
        box: ScreenBox,
        containerRect: DOMRect,
        placedBoxes: ScreenBox[],
        blockingBoxes: ScreenBox[]
    ): boolean =>
        isSegmentLabelBoxClearOfFixedBlockers(box, containerRect, blockingBoxes) &&
        !placedBoxes.some(blockedBox => screenBoxesOverlapWithSpacing(box, blockedBox, LABEL_SPACING_PX));

    const scoreSegmentLabelBox = (
        box: ScreenBox,
        containerRect: DOMRect,
        candidate: SegmentLabelCandidate,
        candidateIndex: number,
        placedBoxes: ScreenBox[],
        blockingBoxes: ScreenBox[]
    ): number | undefined => {
        if (!isCleanSegmentLabelBox(box, containerRect, placedBoxes, blockingBoxes)) {
            return undefined;
        }

        return candidate.sideCrowdingScore + candidateIndex * 0.01;
    };

    const chooseSegmentLabelCandidate = (
        element: HTMLDivElement,
        candidates: SegmentLabelCandidate[],
        containerRect: DOMRect,
        areaBoxes: ScreenBox[],
        segmentBoxes: ScreenBox[],
        blockingBoxes: ScreenBox[]
    ): { candidate: SegmentLabelCandidate; box: ScreenBox } | undefined => {
        let best: { candidate: SegmentLabelCandidate; box: ScreenBox; score: number } | undefined;
        const placedBoxes = [...areaBoxes, ...segmentBoxes];

        candidates.forEach((candidate, candidateIndex) => {
            setSegmentLabelCandidateStyle(element, candidate);
            const box = screenBoxFromElement(element, candidate);
            const score = scoreSegmentLabelBox(
                box,
                containerRect,
                candidate,
                candidateIndex,
                placedBoxes,
                blockingBoxes
            );

            if (score === undefined) {
                return;
            }

            if (!best || score < best.score) {
                best = {
                    candidate,
                    box,
                    score
                };
            }
        });

        return best;
    };

    const applySegmentLabelHighlightState = () => {
        segmentLabelElements.forEach((element, key) => {
            element.classList.toggle('rv-active', isActiveSegmentKey(key));
        });
    };

    const clearSegmentLabelOverlay = () => {
        if (segmentLabelLayoutFrame !== null) {
            window.cancelAnimationFrame(segmentLabelLayoutFrame);
            segmentLabelLayoutFrame = null;
        }

        currentSegmentLabels = [];
        currentAreaLabels = [];
        segmentLabelOverlay?.remove();
        segmentLabelOverlay = null;
        segmentLabelElements.clear();
        areaLabelElements.clear();
    };

    const renderSegmentLabels = (labels: SegmentLabelInfo[], areaLabels: AreaLabelInfo[] = currentAreaLabels) => {
        const view = iApi.geo.map.esriView;
        currentSegmentLabels = labels;
        currentAreaLabels = areaLabels;

        if (!view || (!labels.length && !areaLabels.length)) {
            clearSegmentLabelOverlay();
            return;
        }

        const overlay = ensureSegmentLabelOverlay(view);
        const container = view.container;
        if (!overlay || !container) {
            clearSegmentLabelOverlay();
            return;
        }

        const nextKeys = new Set(labels.map(label => label.key));
        segmentLabelElements.forEach((element, key) => {
            if (!nextKeys.has(key)) {
                element.remove();
                segmentLabelElements.delete(key);
            }
        });

        labels.forEach(label => {
            let element = segmentLabelElements.get(label.key);
            if (!element) {
                element = createSegmentLabelElement(label);
                segmentLabelElements.set(label.key, element);
                overlay.appendChild(element);
            } else {
                updateSegmentLabelElement(element, label);
            }

            element.style.display = 'inline-flex';
            element.style.visibility = 'hidden';
            element.style.transform = 'translate(-50%, -50%) rotate(0deg)';
            setSegmentLabelDistanceHidden(element, !label.distanceText);
        });

        const nextAreaKeys = new Set(areaLabels.map(label => label.key));
        areaLabelElements.forEach((element, key) => {
            if (!nextAreaKeys.has(key)) {
                element.remove();
                areaLabelElements.delete(key);
            }
        });

        areaLabels.forEach(label => {
            let element = areaLabelElements.get(label.key);
            if (!element) {
                element = createAreaLabelElement(label);
                areaLabelElements.set(label.key, element);
                overlay.appendChild(element);
            } else {
                updateAreaLabelElement(element, label);
            }

            element.style.display = 'inline-flex';
            element.style.visibility = 'hidden';
            element.style.transform = 'translate(-50%, -50%) rotate(0deg)';
        });

        const containerRect = container.getBoundingClientRect();
        const blockingBoxes = getBlockingBoxes(view, containerRect);
        const areaBoxes: ScreenBox[] = [];
        const segmentBoxes: ScreenBox[] = [];

        areaLabels.forEach(label => {
            const element = areaLabelElements.get(label.key);
            if (!element) {
                return;
            }

            const point = view.toScreen(label.point);
            if (!isFiniteScreenPoint(point)) {
                element.style.display = 'none';
                return;
            }

            setSegmentLabelCandidateStyle(element, {
                anchor: {
                    x: point.x,
                    y: point.y
                },
                angle: 0
            });
            const box = screenBoxFromElement(element, {
                anchor: {
                    x: point.x,
                    y: point.y
                },
                angle: 0
            });
            if (!isCleanSegmentLabelBox(box, containerRect, areaBoxes, blockingBoxes)) {
                element.style.display = 'none';
                return;
            }

            areaBoxes.push(box);
            element.style.visibility = 'visible';
        });

        const distanceSegmentItems: SegmentLabelLayoutItem[] = [];
        const letterOnlySegmentItems: SegmentLabelLayoutItem[] = [];

        labels.forEach(label => {
            const element = segmentLabelElements.get(label.key);
            if (!element) {
                return;
            }

            const placement = getSegmentScreenPlacement(label, view);
            if (!placement || placement.length < SHORT_SEGMENT_MIN_PX) {
                element.style.display = 'none';
                return;
            }

            const fullLabelWidth = element.offsetWidth;
            const distanceVisible =
                !!label.distanceText && placement.length >= fullLabelWidth + FULL_LABEL_SEGMENT_PADDING_PX;
            setSegmentLabelDistanceHidden(element, !distanceVisible);
            if (!distanceVisible && !label.showBadge) {
                element.style.display = 'none';
                return;
            }

            const item = {
                label,
                element,
                placement
            };
            (distanceVisible ? distanceSegmentItems : letterOnlySegmentItems).push(item);
        });

        const placeSegmentLabelItem = (item: SegmentLabelLayoutItem): boolean => {
            const candidates = buildSegmentLabelCandidates(item.label, item.placement, view);
            const bestCandidate = chooseSegmentLabelCandidate(
                item.element,
                candidates,
                containerRect,
                areaBoxes,
                segmentBoxes,
                blockingBoxes
            );
            if (!bestCandidate) {
                return false;
            }

            setSegmentLabelCandidateStyle(item.element, bestCandidate.candidate);
            segmentBoxes.push(bestCandidate.box);
            item.element.style.visibility = 'visible';
            return true;
        };

        distanceSegmentItems.forEach(item => {
            if (placeSegmentLabelItem(item)) {
                return;
            }

            if (item.label.showBadge) {
                setSegmentLabelDistanceHidden(item.element, true);
                letterOnlySegmentItems.push(item);
            } else {
                item.element.style.display = 'none';
            }
        });

        letterOnlySegmentItems.forEach(item => {
            if (!placeSegmentLabelItem(item)) {
                item.element.style.display = 'none';
            }
        });

        applySegmentLabelHighlightState();
    };

    const scheduleSegmentLabelLayout = () => {
        if (segmentLabelLayoutFrame !== null) {
            return;
        }

        segmentLabelLayoutFrame = window.requestAnimationFrame(() => {
            segmentLabelLayoutFrame = null;
            renderSegmentLabels(currentSegmentLabels, currentAreaLabels);
        });
    };

    const ensureMeasurementMapChangeHandlers = () => {
        if (measurementMapChangeHandlers.length) {
            return;
        }

        const scheduleLayout = () => scheduleSegmentLabelLayout();
        measurementMapChangeHandlers = [
            iApi.event.on(GlobalEvents.MAP_EXTENTCHANGE, scheduleLayout),
            iApi.event.on(GlobalEvents.MAP_SCALECHANGE, scheduleLayout),
            iApi.event.on(GlobalEvents.MAP_RESIZED, scheduleLayout),
            iApi.event.on(GlobalEvents.PANEL_OPENED, scheduleLayout),
            iApi.event.on(GlobalEvents.PANEL_CLOSED, scheduleLayout),
            iApi.event.on(GlobalEvents.PANEL_MINIMIZED, scheduleLayout),
            iApi.event.on(GlobalEvents.RAMP_MOBILEVIEW_CHANGE, scheduleLayout)
        ];
    };

    const removeMeasurementMapChangeHandlers = () => {
        measurementMapChangeHandlers.forEach(handler => iApi.event.off(handler));
        measurementMapChangeHandlers = [];
    };

    const getEventClientPoint = (event: EsriViewClickEvent | EsriViewPointerMoveEvent): ScreenPoint | undefined => {
        const nativeEvent = event.native as MouseEvent | PointerEvent | undefined;
        if (nativeEvent && Number.isFinite(nativeEvent.clientX) && Number.isFinite(nativeEvent.clientY)) {
            return {
                x: nativeEvent.clientX,
                y: nativeEvent.clientY
            };
        }

        const container = iApi.geo.map.esriView?.container;
        if (!container || !Number.isFinite(event.x) || !Number.isFinite(event.y)) {
            return undefined;
        }

        const containerRect = container.getBoundingClientRect();
        return {
            x: containerRect.left + event.x,
            y: containerRect.top + event.y
        };
    };

    const getEventContainerPoint = (event: EsriViewClickEvent | EsriViewPointerMoveEvent): ScreenPoint | undefined => {
        if (Number.isFinite(event.x) && Number.isFinite(event.y)) {
            return {
                x: event.x,
                y: event.y
            };
        }

        const clientPoint = getEventClientPoint(event);
        const container = iApi.geo.map.esriView?.container;
        if (!clientPoint || !container) return undefined;

        const containerRect = container.getBoundingClientRect();
        return {
            x: clientPoint.x - containerRect.left,
            y: clientPoint.y - containerRect.top
        };
    };

    const getSegmentLabelHitKey = (event: EsriViewClickEvent | EsriViewPointerMoveEvent): string | undefined => {
        const point = getEventClientPoint(event);
        if (!point) return undefined;

        for (const [key, element] of segmentLabelElements) {
            if (!visibleElement(element)) {
                continue;
            }

            const rect = element.getBoundingClientRect();
            if (point.x >= rect.left && point.x <= rect.right && point.y >= rect.top && point.y <= rect.bottom) {
                return key;
            }
        }

        return undefined;
    };

    const distanceToScreenSegment = (point: ScreenPoint, start: ScreenPoint, end: ScreenPoint): number => {
        const segmentVector = {
            x: end.x - start.x,
            y: end.y - start.y
        };
        const segmentLengthSquared = segmentVector.x * segmentVector.x + segmentVector.y * segmentVector.y;
        if (segmentLengthSquared <= 0) {
            return distanceInPixels(point, start);
        }

        const t = Math.max(
            0,
            Math.min(
                1,
                ((point.x - start.x) * segmentVector.x + (point.y - start.y) * segmentVector.y) / segmentLengthSquared
            )
        );

        return distanceInPixels(point, {
            x: start.x + segmentVector.x * t,
            y: start.y + segmentVector.y * t
        });
    };

    const getSegmentPathHitKey = (event: EsriViewClickEvent | EsriViewPointerMoveEvent): string | undefined => {
        const view = iApi.geo.map.esriView;
        const point = getEventContainerPoint(event);
        if (!view || !point) return undefined;

        let closest: { key: string; distance: number } | undefined;

        currentSegmentLabels.forEach(label => {
            const start = vertexToScreenPoint(label.start, label.geometry.spatialReference, view);
            const end = vertexToScreenPoint(label.end, label.geometry.spatialReference, view);
            if (!start || !end) return;

            const distance = distanceToScreenSegment(point, start, end);
            if (distance <= SEGMENT_HIT_TOLERANCE_PX && (!closest || distance < closest.distance)) {
                closest = {
                    key: label.key,
                    distance
                };
            }
        });

        return closest?.key;
    };

    const buildSegmentMeasurementLabels = (graphic: MeasurableGraphic): MeasurementLabelInfo[] => {
        if (graphic.type === 'circle' || (!graphic.includeDistance && !graphic.includeSegmentBadges)) {
            return [];
        }

        const geometry = graphic.geometry;

        return buildDrawSegments(geometry, graphic.id).map(segment => {
            const formatted = formatDrawLength(segment.lengthMeters, locale.value);
            const distanceText = graphic.includeDistance ? formatted.display : undefined;

            return {
                graphics: [],
                segmentLabels: [
                    {
                        key: segment.key,
                        letter: segment.letter,
                        showBadge: graphic.includeSegmentBadges,
                        distanceText,
                        badgeColor: graphic.badgeColor,
                        start: segment.start,
                        end: segment.end,
                        geometry
                    }
                ],
                accessibleText: graphic.includeDistance
                    ? t('draw.measurements.segment', {
                          index: segment.letter,
                          distance: formatted.spoken
                      })
                    : undefined
            };
        });
    };

    const buildVertexMeasurementLabels = (graphic: MeasurableGraphic): MeasurementLabelInfo[] => {
        if (
            graphic.type === 'circle' ||
            (graphic.geometry.type !== 'polyline' && graphic.geometry.type !== 'polygon')
        ) {
            return [];
        }

        return buildDrawVertices(graphic.geometry, graphic.id).map(vertex => {
            const active = isActiveVertexKey(vertex.key);
            const point = vertexPoint(vertex.vertex, graphic.geometry.spatialReference);

            return {
                graphics: createVertexGraphics(
                    point,
                    String(vertex.index + 1),
                    {
                        drawMeasurement: true,
                        drawMeasurementKind: 'vertex-label',
                        drawGraphicId: graphic.id,
                        drawVertexKey: vertex.key
                    },
                    active
                )
            };
        });
    };

    const buildAreaMeasurementLabel = (graphic: MeasurableGraphic): MeasurementLabelInfo | undefined => {
        const geometry = graphic.geometry;
        if (geometry.type !== 'polygon') {
            return undefined;
        }

        const polygon = geometry as EsriPolygon;
        const area = measureDrawPolygonSquareMeters(polygon);
        const point = polygonLabelPoint(polygon);

        if (!area || area < 0.01 || !point) {
            return undefined;
        }

        const formatted = formatDrawMapArea(area, locale.value);
        return {
            graphics: [],
            areaLabels: [
                {
                    key: `${graphic.id}:area`,
                    text: formatted.display,
                    point
                }
            ],
            accessibleText: t('draw.measurements.area', {
                area: formatted.spoken
            })
        };
    };

    const buildGraphicMeasurementLabels = (graphic: MeasurableGraphic): MeasurementLabelInfo[] => {
        const geometry = graphic.geometry;
        if (!geometry || geometry.type === 'point' || geometry.type === 'multipoint') {
            return [];
        }

        const labels = [
            ...buildSegmentMeasurementLabels(graphic),
            ...(graphic.includeVertices ? buildVertexMeasurementLabels(graphic) : [])
        ];
        const areaLabel = graphic.includeArea ? buildAreaMeasurementLabel(graphic) : undefined;
        if (areaLabel) {
            labels.push(areaLabel);
        }

        return labels;
    };

    const getGraphicId = (graphic: EsriGraphic | null | undefined): string | undefined => graphic?.attributes?.id;

    const makeMeasurableGraphic = (
        id: string,
        type: string | undefined,
        geometry: EsriGeometry | null | undefined,
        options: Pick<
            MeasurableGraphic,
            'includeDistance' | 'includeSegmentBadges' | 'includeVertices' | 'includeArea' | 'badgeColor'
        >
    ): MeasurableGraphic | undefined => {
        if (!geometry) return undefined;

        return {
            id,
            type: type ?? geometry.type,
            geometry,
            ...options
        };
    };

    const mergeSource = (sources: Map<string, MeasurableGraphic>, graphic: MeasurableGraphic | undefined) => {
        if (!graphic) return;

        const existing = sources.get(graphic.id);
        if (!existing) {
            sources.set(graphic.id, graphic);
            return;
        }

        existing.geometry = graphic.geometry;
        existing.type = graphic.type;
        existing.includeDistance ||= graphic.includeDistance;
        existing.includeSegmentBadges ||= graphic.includeSegmentBadges;
        existing.includeVertices ||= graphic.includeVertices;
        existing.includeArea ||= graphic.includeArea;
        existing.badgeColor = graphic.badgeColor || existing.badgeColor;
    };

    const getStoredMeasurableGraphics = (): MeasurableGraphic[] =>
        drawStore.graphics
            .map(graphic => {
                const id = String(graphic.id ?? graphic.attributes?.id ?? '');
                const labels = resolveGraphicMapLabelSettings(graphic.attributes);
                const forceLabels = isShapeDetailsGraphic(id) && drawStore.shapeDetailsLabelsVisible;
                const segmentLengthVisible = forceLabels || labels.segmentLength;
                const segmentLettersVisible = forceLabels || labels.segmentLetters;
                const vertexNumbersVisible = forceLabels || labels.vertexNumbers;
                return makeMeasurableGraphic(
                    id,
                    graphic.type ?? graphic.attributes?.type,
                    toRaw(graphic.geometry) as EsriGeometry | null | undefined,
                    {
                        includeDistance: drawStore.measurementsEnabled || segmentLengthVisible,
                        includeSegmentBadges: segmentLettersVisible,
                        includeVertices: vertexNumbersVisible,
                        includeArea: drawStore.measurementsEnabled || labels.areaLabel,
                        badgeColor: SEGMENT_BADGE_COLOR
                    }
                );
            })
            .filter((graphic): graphic is MeasurableGraphic => !!graphic?.id);

    const getLayerMeasurableGraphics = (): MeasurableGraphic[] =>
        (getGraphicsLayer()?.graphics.toArray() ?? [])
            .filter(graphic => !!getGraphicId(graphic))
            .map(graphic => {
                const id = getGraphicId(graphic)!;
                const labels = resolveGraphicMapLabelSettings(graphic.attributes);
                const forceLabels = isShapeDetailsGraphic(id) && drawStore.shapeDetailsLabelsVisible;
                const segmentLengthVisible = forceLabels || labels.segmentLength;
                const segmentLettersVisible = forceLabels || labels.segmentLetters;
                const vertexNumbersVisible = forceLabels || labels.vertexNumbers;
                return makeMeasurableGraphic(
                    id,
                    graphic.attributes?.type,
                    graphic.geometry as EsriGeometry | null | undefined,
                    {
                        includeDistance: drawStore.measurementsEnabled || segmentLengthVisible,
                        includeSegmentBadges: segmentLettersVisible,
                        includeVertices: vertexNumbersVisible,
                        includeArea: drawStore.measurementsEnabled || labels.areaLabel,
                        badgeColor: SEGMENT_BADGE_COLOR
                    }
                );
            })
            .filter((graphic): graphic is MeasurableGraphic => !!graphic);

    const getActiveMeasurableGraphic = (
        activeGraphic?: EsriGraphic,
        activeTool?: string
    ): MeasurableGraphic | undefined => {
        if (!activeGraphic) return undefined;
        const labels = resolveGraphicMapLabelSettings(activeGraphic.attributes);
        const graphicId = getGraphicId(activeGraphic);
        const forceLabels = !!graphicId && isShapeDetailsGraphic(graphicId) && drawStore.shapeDetailsLabelsVisible;
        const segmentLengthVisible = forceLabels || labels.segmentLength;
        const segmentLettersVisible = forceLabels || labels.segmentLetters;
        const vertexNumbersVisible = forceLabels || labels.vertexNumbers;

        return makeMeasurableGraphic(
            graphicId ?? 'active-draw-measurement',
            activeTool ?? activeGraphic.attributes?.type,
            activeGraphic.geometry as EsriGeometry | null | undefined,
            {
                includeDistance: drawStore.measurementsEnabled || segmentLengthVisible,
                includeSegmentBadges: segmentLettersVisible,
                includeVertices: vertexNumbersVisible,
                includeArea: drawStore.measurementsEnabled || labels.areaLabel,
                badgeColor: SEGMENT_BADGE_COLOR
            }
        );
    };

    const getShapeDetailsMeasurableGraphic = (): MeasurableGraphic | undefined => {
        if (
            !isShapeDetailsOpen() ||
            (!drawStore.shapeDetailsLabelsVisible && !drawStore.shapeDetailsLabelsUseSettings)
        ) {
            return undefined;
        }

        const graphic = getShapeDetailsGraphic() ?? drawStore.getSelectedGraphic();
        const id = getGraphicId(graphic as EsriGraphic | undefined) ?? String(graphic?.id ?? '');
        if (!id) return undefined;
        const labels = resolveGraphicMapLabelSettings(graphic?.attributes);
        const segmentLengthVisible = drawStore.shapeDetailsLabelsVisible || labels.segmentLength;
        const segmentLettersVisible = drawStore.shapeDetailsLabelsVisible || labels.segmentLetters;
        const vertexNumbersVisible = drawStore.shapeDetailsLabelsVisible || labels.vertexNumbers;

        return makeMeasurableGraphic(
            id,
            graphic?.attributes?.type ?? (graphic as { type?: string } | undefined)?.type,
            toRaw(graphic?.geometry) as EsriGeometry | null | undefined,
            {
                includeDistance: drawStore.measurementsEnabled || segmentLengthVisible,
                includeSegmentBadges: segmentLettersVisible,
                includeVertices: vertexNumbersVisible,
                includeArea: drawStore.measurementsEnabled || labels.areaLabel,
                badgeColor: SEGMENT_BADGE_COLOR
            }
        );
    };

    const buildMeasurementLabels = (activeGraphic?: EsriGraphic, activeTool?: string): MeasurementLabelInfo[] => {
        const sources = new Map<string, MeasurableGraphic>();

        if (drawStore.measurementsEnabled || hasVisibleMapLabelSettings()) {
            getStoredMeasurableGraphics().forEach(graphic => mergeSource(sources, graphic));
            getLayerMeasurableGraphics().forEach(graphic => mergeSource(sources, graphic));
            mergeSource(sources, getActiveMeasurableGraphic(activeGraphic, activeTool));
        }
        mergeSource(sources, getShapeDetailsMeasurableGraphic());

        return Array.from(sources.values()).flatMap(graphic => buildGraphicMeasurementLabels(graphic));
    };

    const clearHoveredMeasurementTargets = () => {
        drawStore.setHoveredSegmentKey(null);
        drawStore.setHoveredVertexKey(null);
    };

    const removeMeasurementInteractionHandlers = () => {
        measurementPointerMoveHandle?.remove();
        measurementPointerMoveHandle = null;
        measurementClickHandle?.remove();
        measurementClickHandle = null;

        if (measurementMouseLeaveHandler && iApi.geo.map.esriView?.container) {
            iApi.geo.map.esriView.container.removeEventListener('mouseleave', measurementMouseLeaveHandler);
        }
        measurementMouseLeaveHandler = null;
        clearHoveredMeasurementTargets();
    };

    const getMeasurementHit = async (
        event: EsriViewClickEvent | EsriViewPointerMoveEvent
    ): Promise<EsriGraphic | null> => {
        const view = iApi.geo.map.esriView;
        if (!view || !measurementGraphics.length) {
            return null;
        }

        const response = await view.hitTest(event, { include: measurementGraphics as any });
        const hit = response.results.find(
            (result): result is EsriGraphicHit =>
                'graphic' in result && !!(result.graphic.attributes as MeasurementGraphicAttributes)?.drawMeasurement
        );

        return hit?.graphic ?? null;
    };

    const updateHoveredMeasurementTarget = async (event: EsriViewPointerMoveEvent) => {
        if (!canHighlightMeasurementTargets()) {
            clearHoveredMeasurementTargets();
            return;
        }

        const hitTestRunId = ++measurementHitTestRunId;
        const segmentKey = getSegmentLabelHitKey(event) ?? getSegmentPathHitKey(event);
        if (segmentKey) {
            drawStore.setHoveredSegmentKey(isSelectedMeasurementTarget(segmentKey) ? segmentKey : null);
            drawStore.setHoveredVertexKey(null);
            return;
        }

        const graphic = await getMeasurementHit(event);
        if (hitTestRunId !== measurementHitTestRunId) return;

        const attributes = graphic?.attributes as MeasurementGraphicAttributes | undefined;
        drawStore.setHoveredSegmentKey(
            isSelectedMeasurementTarget(attributes?.drawSegmentKey) ? attributes!.drawSegmentKey! : null
        );
        drawStore.setHoveredVertexKey(
            isSelectedMeasurementTarget(attributes?.drawVertexKey) ? attributes!.drawVertexKey! : null
        );
    };

    const selectMeasurementTarget = async (event: EsriViewClickEvent) => {
        if (!canHighlightMeasurementTargets()) {
            return;
        }

        const segmentKey = getSegmentLabelHitKey(event) ?? getSegmentPathHitKey(event);
        if (segmentKey) {
            if (!isSelectedMeasurementTarget(segmentKey)) {
                return;
            }

            drawStore.setSelectedSegmentKey(segmentKey);
            drawStore.setSelectedVertexKey(null);
            event.stopPropagation?.();
            return;
        }

        const graphic = await getMeasurementHit(event);
        const attributes = graphic?.attributes as MeasurementGraphicAttributes | undefined;
        const segmentKeyFromGraphic = attributes?.drawSegmentKey;
        const vertexKeyFromGraphic = attributes?.drawVertexKey;

        if (isSelectedMeasurementTarget(segmentKeyFromGraphic)) {
            drawStore.setSelectedSegmentKey(segmentKeyFromGraphic);
            drawStore.setSelectedVertexKey(null);
        } else if (isSelectedMeasurementTarget(vertexKeyFromGraphic)) {
            drawStore.setSelectedVertexKey(vertexKeyFromGraphic);
            drawStore.setSelectedSegmentKey(null);
        } else {
            return;
        }

        event.stopPropagation?.();
    };

    const ensureMeasurementInteractionHandlers = () => {
        const view = iApi.geo.map.esriView;
        if (!view || measurementPointerMoveHandle || measurementClickHandle) {
            return;
        }

        measurementPointerMoveHandle = view.on('pointer-move', event => {
            void updateHoveredMeasurementTarget(event as EsriViewPointerMoveEvent);
        });
        measurementClickHandle = view.on('click', event => {
            void selectMeasurementTarget(event as EsriViewClickEvent);
        });
        measurementMouseLeaveHandler = clearHoveredMeasurementTargets;
        view.container?.addEventListener('mouseleave', measurementMouseLeaveHandler);
    };

    const applyMeasurementGraphicHighlightState = () => {
        applySegmentLabelHighlightState();

        measurementGraphics.forEach(graphic => {
            const attributes = graphic.attributes as MeasurementGraphicAttributes | undefined;
            if (!attributes) return;

            if (attributes.drawMeasurementKind === 'vertex-marker') {
                graphic.symbol = createVertexMarkerSymbol(isActiveVertexKey(attributes.drawVertexKey));
                return;
            }

            if (attributes.drawMeasurementKind === 'vertex-label') {
                graphic.symbol = createVertexTextSymbol(
                    attributes.drawMeasurementText ?? '',
                    isActiveVertexKey(attributes.drawVertexKey)
                );
            }
        });
    };

    const clearMeasurementGraphics = () => {
        measurementRefreshRunId++;

        if (measurementRefreshFrame !== null) {
            window.cancelAnimationFrame(measurementRefreshFrame);
            measurementRefreshFrame = null;
        }
        pendingMeasurementRefresh = null;
        measurementSummary.value = '';
        removeMeasurementInteractionHandlers();
        removeMeasurementMapChangeHandlers();
        clearSegmentLabelOverlay();

        try {
            iApi.geo.map.esriView?.graphics.removeMany(measurementGraphics);
        } catch (e) {
            console.warn('Unable to clear draw measurement graphics.', e);
        }
        measurementGraphics = [];
    };

    const updateMeasurementSummary = (labels: MeasurementLabelInfo[]) => {
        const accessibleTexts = labels.map(label => label.accessibleText).filter((text): text is string => !!text);
        const nextSummary = accessibleTexts.length
            ? t('draw.measurements.summary', {
                  measurements: accessibleTexts.join('. ')
              })
            : t('draw.measurements.none');

        if (measurementSummary.value !== nextSummary) {
            measurementSummary.value = nextSummary;
        }
    };

    const refreshMeasurementGraphics = async (activeGraphic?: EsriGraphic, activeTool?: string) => {
        const refreshRunId = ++measurementRefreshRunId;

        if (measurementRefreshFrame !== null) {
            window.cancelAnimationFrame(measurementRefreshFrame);
            measurementRefreshFrame = null;
            pendingMeasurementRefresh = null;
        }

        if (!shouldShowMeasurementGraphics()) {
            clearMeasurementGraphics();
            return;
        }

        try {
            await loadDrawMeasurementOperators();
        } catch (e) {
            console.warn('Unable to load draw measurement operators.', e);
            return;
        }

        if (refreshRunId !== measurementRefreshRunId || !shouldShowMeasurementGraphics()) {
            return;
        }

        const view = iApi.geo.map.esriView;
        const viewGraphics = view?.graphics;

        if (!view || !viewGraphics) {
            return;
        }

        const labels = filterCollidingVertexMeasurementLabels(buildMeasurementLabels(activeGraphic, activeTool), view);

        try {
            if (measurementGraphics.length) {
                viewGraphics.removeMany(measurementGraphics);
            }
        } catch (e) {
            console.warn('Unable to remove stale draw measurement graphics.', e);
        }

        measurementGraphics = labels.flatMap(label => label.graphics);
        const segmentLabels = labels.flatMap(label => label.segmentLabels ?? []);
        const areaLabels = labels.flatMap(label => label.areaLabels ?? []);
        renderSegmentLabels(segmentLabels, areaLabels);

        if (segmentLabels.length || areaLabels.length) {
            ensureMeasurementMapChangeHandlers();
        } else {
            removeMeasurementMapChangeHandlers();
        }

        try {
            if (measurementGraphics.length) {
                viewGraphics.addMany(measurementGraphics);
            }

            if (measurementGraphics.length || segmentLabels.length) {
                ensureMeasurementInteractionHandlers();
            } else {
                removeMeasurementInteractionHandlers();
            }
        } catch (e) {
            console.warn('Unable to add draw measurement graphics.', e);
            measurementGraphics = [];
            removeMeasurementInteractionHandlers();
        }

        updateMeasurementSummary(labels);
    };

    const scheduleMeasurementRefresh = (activeGraphic?: EsriGraphic, activeTool?: string) => {
        if (!shouldShowMeasurementGraphics()) {
            clearMeasurementGraphics();
            return;
        }

        pendingMeasurementRefresh = { activeGraphic, activeTool };
        if (measurementRefreshFrame !== null) {
            return;
        }

        measurementRefreshFrame = window.requestAnimationFrame(() => {
            measurementRefreshFrame = null;
            const refreshRequest = pendingMeasurementRefresh;
            pendingMeasurementRefresh = null;
            void refreshMeasurementGraphics(refreshRequest?.activeGraphic, refreshRequest?.activeTool);
        });
    };

    watch(
        () => [
            drawStore.activeSegmentKey,
            drawStore.activeVertexKey,
            drawStore.shapeDetailsActiveTab,
            drawStore.selectedGraphicId
        ],
        () => {
            applyMeasurementGraphicHighlightState();
        }
    );

    return {
        measurementSummary,
        clearMeasurementGraphics,
        refreshMeasurementGraphics,
        scheduleMeasurementRefresh
    };
};
