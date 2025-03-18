import { FixtureInstance, InstanceAPI } from '@/api';
import { useDrawStore } from '../store';
import { DRAW_GRAPHICS_LAYER_ID } from '../draw.vue';

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
    defaultTool?: string;
}

export class DrawAPI extends FixtureInstance {
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
}
