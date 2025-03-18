import { FixtureInstance } from '@/api';
import { useDrawStore } from '../store';

export class DrawAPI extends FixtureInstance {
    /**
     * Parses the draw tool config JSON snippet from the config file and save to the fixture store.
     * Placeholder for now until we have config options.
     */
    /**
     */
    _parseConfig(drawConfig: any) {
        if (!drawConfig) return;

        const drawStore = useDrawStore(this.$vApp.$pinia);

        // Apply configuration options to store
        if (drawConfig.defaultTool) {
            drawStore.setActiveTool(drawConfig.defaultTool);
        }
    }
}
