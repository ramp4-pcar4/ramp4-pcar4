import type { Graphic } from '@/geo/api';
import { BaseHilightMode } from './base-hilight-mode';

/**
 * Hilight mode that places graphics in a top-most layer, essentially "lifting" them
 * above other map elements.
 */
export class LiftHilightMode extends BaseHilightMode {
    async add(graphics: Array<Graphic> | Graphic) {
        const hilightLayer = await this.getHilightLayer();
        if (!hilightLayer) {
            return;
        }
        await hilightLayer.addGraphic(graphics);
    }

    async remove(graphics: Array<Graphic> | Graphic | undefined) {
        const hilightLayer = await this.getHilightLayer();
        if (!hilightLayer) {
            return;
        }
        hilightLayer.removeGraphic(graphics);
    }

    async reloadHilight(graphics: Array<Graphic> | Graphic) {
        await this.remove(graphics);
        await this.add(graphics);
    }
}
