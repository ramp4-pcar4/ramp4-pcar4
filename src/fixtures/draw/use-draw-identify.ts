import { toRaw } from 'vue';

import type { IdentifyResult } from '@/api';
import type { InstanceAPI } from '@/api/internal';
import { Point } from '@/geo/api';
import { EsriCentroidOperator, EsriPoint } from '@/geo/esri';
import type { EsriGeometry, EsriGraphic, EsriPolygon } from '@/geo/esri';

import { createDrawBufferGeometry, createDrawBufferOnlyGeometry, loadDrawBufferOperators } from './settings';
import type { DrawBufferSettings, DrawIdentifyBufferMode } from './settings';
import { useDrawStore } from './store';
import type { DrawGraphicLike } from './types';

type DrawIdentifyOptions = {
    iApi: InstanceAPI;
    drawStore: ReturnType<typeof useDrawStore>;
    getDrawGraphicId: (graphic: DrawGraphicLike | undefined) => string | undefined;
    getGraphicDrawBufferSettings: (graphic: DrawGraphicLike) => DrawBufferSettings;
    getGraphicDrawIdentifyBufferMode: (graphic: DrawGraphicLike) => DrawIdentifyBufferMode;
    getSelectedFeatureCountGraphic: () => DrawGraphicLike | undefined;
};

export const useDrawIdentify = ({
    iApi,
    drawStore,
    getDrawGraphicId,
    getGraphicDrawBufferSettings,
    getGraphicDrawIdentifyBufferMode,
    getSelectedFeatureCountGraphic
}: DrawIdentifyOptions) => {
    const featureCountRefreshRunIds = new Map<string, number>();
    let featureCountRefreshTimeout: number | null = null;
    let pendingFeatureCountRefreshGraphic: EsriGraphic | undefined;

    const countIdentifyItems = (results: IdentifyResult[]): number =>
        results.reduce((count, result) => count + (result.items?.length ?? 0), 0);

    const runSilentIdentifyCount = async (geometry: EsriGeometry | undefined): Promise<number | null> => {
        if (!geometry) return null;

        try {
            const rampGeometry = iApi.geo.geom.geomEsriToRamp(geometry, `draw-count-${Date.now()}`);
            const timestamp = Date.now();
            const identifyResults = iApi.geo.layer
                .allLayersOnMap(false)
                .filter((layer: any) => layer.supportsIdentify && layer.canIdentify())
                .map((layer: any) =>
                    layer.runIdentify({
                        geometry: rampGeometry,
                        tolerance: layer.mouseTolerance
                    })
                )
                .flat() as IdentifyResult[];

            identifyResults.forEach(result => {
                result.requestTime = timestamp;
            });

            await Promise.allSettled(identifyResults.map(result => result.loading));
            return countIdentifyItems(identifyResults);
        } catch (e) {
            console.warn('Unable to count draw identify results.', e);
            return null;
        }
    };

    const refreshSelectedGraphicFeatureCounts = async (graphic = getSelectedFeatureCountGraphic()) => {
        const id = getDrawGraphicId(graphic);
        const geometry = toRaw(graphic?.geometry) as EsriGeometry | undefined;
        if (!graphic || !id || !geometry) return;

        const refreshRunId = (featureCountRefreshRunIds.get(id) ?? 0) + 1;
        featureCountRefreshRunIds.set(id, refreshRunId);
        drawStore.setShapeFeatureCountsLoading(id);

        try {
            await loadDrawBufferOperators();
            if (featureCountRefreshRunIds.get(id) !== refreshRunId) return;

            const bufferSettings = getGraphicDrawBufferSettings(graphic);
            const identifyMode = getGraphicDrawIdentifyBufferMode(graphic);
            const bufferGeometry =
                bufferSettings.distance > 0 ? createDrawBufferOnlyGeometry(geometry, bufferSettings) : undefined;
            const totalGeometry =
                identifyMode === 'shape'
                    ? geometry
                    : identifyMode === 'buffer-only'
                      ? bufferGeometry
                      : bufferSettings.distance > 0
                        ? createDrawBufferGeometry(geometry, bufferSettings)
                        : geometry;

            const shapeCountPromise = runSilentIdentifyCount(geometry);
            const bufferCountPromise = bufferGeometry ? runSilentIdentifyCount(bufferGeometry) : Promise.resolve(null);
            const totalCountPromise =
                totalGeometry === geometry
                    ? shapeCountPromise
                    : totalGeometry === bufferGeometry
                      ? bufferCountPromise
                      : runSilentIdentifyCount(totalGeometry);

            const [shapeCount, bufferCount, totalCount] = await Promise.all([
                shapeCountPromise,
                bufferCountPromise,
                totalCountPromise
            ]);

            if (featureCountRefreshRunIds.get(id) !== refreshRunId) return;

            drawStore.setShapeFeatureCounts(id, {
                shape: shapeCount,
                buffer: bufferCount,
                total: totalCount,
                loading: false,
                updatedAt: Date.now()
            });
        } catch (e) {
            if (featureCountRefreshRunIds.get(id) !== refreshRunId) return;

            console.warn('Unable to refresh draw feature counts.', e);
            drawStore.setShapeFeatureCounts(id, {
                shape: null,
                buffer: null,
                total: null,
                loading: false,
                updatedAt: Date.now()
            });
        }
    };

    const cancelPendingFeatureCountRefresh = () => {
        if (featureCountRefreshTimeout !== null) {
            window.clearTimeout(featureCountRefreshTimeout);
            featureCountRefreshTimeout = null;
        }
        pendingFeatureCountRefreshGraphic = undefined;
    };

    const cancelFeatureCountRunsForGraphic = (id: string | undefined) => {
        if (id) {
            featureCountRefreshRunIds.delete(id);
        }
    };

    const scheduleFeatureCountRefresh = (graphic: EsriGraphic) => {
        pendingFeatureCountRefreshGraphic = graphic;

        if (featureCountRefreshTimeout !== null) {
            window.clearTimeout(featureCountRefreshTimeout);
        }

        featureCountRefreshTimeout = window.setTimeout(() => {
            featureCountRefreshTimeout = null;
            const graphicToRefresh = pendingFeatureCountRefreshGraphic;
            pendingFeatureCountRefreshGraphic = undefined;

            if (graphicToRefresh) {
                void refreshSelectedGraphicFeatureCounts(graphicToRefresh);
            }
        }, 350);
    };

    const identifyPointForGeometry = (geometry: EsriGeometry | undefined): EsriPoint | undefined => {
        if (!geometry) return undefined;

        if (geometry.type === 'point') {
            return geometry as EsriPoint;
        }

        if (geometry.type === 'polygon') {
            try {
                const centroid = EsriCentroidOperator(geometry as EsriPolygon);
                if (centroid) return centroid;
            } catch {
                // Fall back to extent center below.
            }
        }

        const extent = geometry.extent;
        if (!extent) return undefined;

        return new EsriPoint({
            x: (extent.xmin + extent.xmax) / 2,
            y: (extent.ymin + extent.ymax) / 2,
            spatialReference: geometry.spatialReference
        });
    };

    const runIdentifyForSelectedGraphic = async () => {
        const graphic = getSelectedFeatureCountGraphic();
        const id = getDrawGraphicId(graphic);
        const geometry = toRaw(graphic?.geometry) as EsriGeometry | undefined;
        const identifyPoint = identifyPointForGeometry(geometry);
        if (!id || !identifyPoint) return;

        await refreshSelectedGraphicFeatureCounts(graphic);

        drawStore.setIdentifyGeometryGraphicId(id);
        try {
            iApi.geo.map.runIdentify(Point.fromESRI(identifyPoint, id));
        } finally {
            drawStore.setIdentifyGeometryGraphicId(null);
        }
    };

    return {
        refreshSelectedGraphicFeatureCounts,
        cancelPendingFeatureCountRefresh,
        cancelFeatureCountRunsForGraphic,
        scheduleFeatureCountRefresh,
        runIdentifyForSelectedGraphic
    };
};
