import type { Graphic } from '@/geo/api';
import { BaseHilightMode } from './base-hilight-mode';

// This hilight mode populates the hilight layer with the given graphics, essentially "lifting" them
export class LiftHilightMode extends BaseHilightMode {
    /**
     * Adds the given graphics to the hilight layer.
     */
    async add(graphics: Array<Graphic>) {
        const hilightLayer = await this.getHilightLayer();
        if (!hilightLayer) {
            return;
        }
        await hilightLayer.addGraphic(graphics);
    }

    /**
     * Removes the given graphics from the hilight layer.
     */
    async remove(graphics: Array<Graphic> | undefined) {
        const hilightLayer = await this.getHilightLayer();
        if (!hilightLayer) {
            return;
        }
        hilightLayer.removeGraphic(graphics);
    }

    /**
     * Reload the hilighter's map elements.
     */
    async reloadHilight(graphics: Array<Graphic>) {
        await this.remove(graphics);
        await this.add(graphics);
    }
}
