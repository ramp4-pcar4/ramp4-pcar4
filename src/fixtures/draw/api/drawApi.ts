import { FixtureInstance, InstanceAPI } from '@/api';
import { useDrawStore } from '../store';
import type { ActiveToolList } from '../store';
import { DRAW_GRAPHICS_LAYER_ID } from '../draw.vue';
import type { BaseGeometry, IdentifyGeometryProvider, MapClick } from '@/geo/api';
import type { EsriGeometry } from '@/geo/esri';
import { EsriIntersectsOperator } from '@/geo/esri';
import { toRaw } from 'vue';

const DEFAULT_DRAW_TYPES: DrawTypeConfig[] = [
    { type: 'point' },
    { type: 'polyline' },
    { type: 'polygon' },
    { type: 'circle' },
    { type: 'rectangle' }
];

export interface DrawTypeConfig {
    type: string;
    options?: Record<string, any>;
    enabled?: boolean; // optional, default true
}

export interface DrawFixtureConfig {
    types?: DrawTypeConfig[];
    defaultTool?: ActiveToolList;
}

const DRAW_IDENTIFY_MOUSE_TOLERANCE = 5;
const DRAW_IDENTIFY_TOUCH_TOLERANCE = 15;

function graphicIntersectsIdentifyClick(
    geometry: EsriGeometry,
    clickPoint: EsriGeometry,
    clickBuffer: EsriGeometry
): boolean {
    if (geometry.type === 'polygon') {
        return EsriIntersectsOperator.execute(geometry, clickPoint);
    }

    return EsriIntersectsOperator.execute(geometry, clickBuffer);
}

export class DrawAPI extends FixtureInstance implements IdentifyGeometryProvider {
    store: ReturnType<typeof useDrawStore>;

    constructor(id: string, iApi: InstanceAPI) {
        super(id, iApi);
        this.store = useDrawStore(this.$vApp.$pinia);
    }

    /**
     * Parses the draw fixture configuration and sets up the draw store.
     * @param drawConfig The configuration object for the draw fixture.
     */
    _parseConfig(drawConfig: DrawFixtureConfig) {
        if (!drawConfig) {
            // if the entire drawConfig object is missing default to all standard types
            this.store.setSupportedTypes(DEFAULT_DRAW_TYPES);
            return;
        }

        // Handle types configuration
        if (drawConfig.types !== undefined) {
            // The 'types' property is provided in the configuration.
            // This includes an empty array [] (user explicitly wants no types from config)
            // or null (treat as explicitly no types).
            const typesSource = drawConfig.types === null ? [] : drawConfig.types;
            const enabledTypes = typesSource.filter(t => t.enabled !== false);
            this.store.setSupportedTypes(enabledTypes);
        } else {
            // The 'types' property is not set (undefined) in the configuration.
            // Default to all standard types.
            this.store.setSupportedTypes(DEFAULT_DRAW_TYPES);
        }

        // Set default tool if provided in the configuration
        if (drawConfig.defaultTool) {
            this.store.setActiveTool(drawConfig.defaultTool);
        }
    }

    /**
     * Returns the ID of the graphics layer used by the draw fixture.
     */
    get graphicsLayerId(): string {
        return DRAW_GRAPHICS_LAYER_ID;
    }

    /**
     * Prevent default map identify while the draw fixture is creating or editing graphics.
     */
    suppressIdentify(): boolean {
        return !!this.store.activeTool || this.store.selectedGraphicId !== null;
    }

    /**
     * Finds the top-most drawn graphic hit by a map click and returns that graphic's full geometry.
     *
     * Points and lines are considered hit when they intersect a small click buffer.
     */
    getIdentifyGeometry(mapClick: MapClick): BaseGeometry | undefined {
        const clickPoint = mapClick.mapPoint.toESRI();
        const tolerance = mapClick.input === 'touch' ? DRAW_IDENTIFY_TOUCH_TOLERANCE : DRAW_IDENTIFY_MOUSE_TOLERANCE;
        const clickBuffer = this.$iApi.geo.query.makeClickBuffer(mapClick.mapPoint, tolerance).toESRI();

        const hitGraphic = this.store.graphics
            .slice()
            .reverse()
            .find(graphic => {
                const geometry = toRaw(graphic.geometry) as EsriGeometry | undefined;
                return geometry && graphicIntersectsIdentifyClick(geometry, clickPoint, clickBuffer);
            });

        if (!hitGraphic?.geometry) {
            return undefined;
        }

        return this.$iApi.geo.geom.geomEsriToRamp(
            toRaw(hitGraphic.geometry) as EsriGeometry,
            hitGraphic.id ?? hitGraphic.attributes?.id
        );
    }
}
