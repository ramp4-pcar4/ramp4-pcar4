import { FixtureInstance, InstanceAPI } from '../../../api';
import { useDrawStore } from '../store';
export interface DrawTypeConfig {
    type: string;
    options?: Record<string, any>;
    enabled?: boolean;
}
export interface DrawFixtureConfig {
    types?: DrawTypeConfig[];
    defaultTool?: string;
}
export declare class DrawAPI extends FixtureInstance {
    store: ReturnType<typeof useDrawStore>;
    constructor(id: string, iApi: InstanceAPI);
    /**
     * Parses the draw fixture configuration and sets up the draw store.
     * @param drawConfig The configuration object for the draw fixture.
     */
    _parseConfig(drawConfig: DrawFixtureConfig): void;
    /**
     * Returns the ID of the graphics layer used by the draw fixture.
     */
    get graphicsLayerId(): string;
}
