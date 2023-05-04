import { CommonGraphicLayer, FixtureInstance } from '@/api/internal';
import { Graphic, LayerType } from '@/geo/api';
import {
    DEFAULT_CONFIG,
    HILIGHT_LAYER_NAME,
    HilightMode,
    type HilightConfig
} from './hilight-defs';
import { BaseHilightMode } from './hilight-mode/base-hilight-mode';
import { FogHilightMode } from './hilight-mode/fog-hilight-mode';
import { GlowHilightMode } from './hilight-mode/glow-hilight-mode';
import { LiftHilightMode } from './hilight-mode/lift-hilight-mode';

export class HilightAPI extends FixtureInstance {
    hilightMode: BaseHilightMode = new BaseHilightMode({}, this.$iApi);

    initialized(): void {
        // create the highlight layer once the map is available
        this.initHilightLayer();
    }

    _parseConfig(hilightConfig?: HilightConfig) {
        if (hilightConfig) {
            switch (hilightConfig.mode) {
                case HilightMode.NONE:
                    this.hilightMode = new BaseHilightMode(
                        hilightConfig,
                        this.$iApi
                    );
                    break;
                case HilightMode.GLOW:
                    this.hilightMode = new GlowHilightMode(
                        hilightConfig,
                        this.$iApi
                    );
                    break;
                case HilightMode.LIFT:
                    this.hilightMode = new LiftHilightMode(
                        hilightConfig,
                        this.$iApi
                    );
                    break;
                case HilightMode.FOG:
                    this.hilightMode = new FogHilightMode(
                        hilightConfig,
                        this.$iApi
                    );
                    break;
                default:
                    // in this case, the hilighter will use NONE (BaseHilightMode)
                    console.error(
                        'Could not find hilight mode:',
                        hilightConfig.mode
                    );
                    break;
            }
        } else {
            // defaults to GLOW
            this.hilightMode = new GlowHilightMode(DEFAULT_CONFIG, this.$iApi);
        }
    }

    /**
     * Create the Hilight layer.
     */
    async initHilightLayer() {
        const hilightLayer = this.$iApi.geo.layer.createLayer({
            id: HILIGHT_LAYER_NAME,
            layerType: LayerType.GRAPHIC,
            cosmetic: true,
            url: ''
        });

        await this.$iApi.geo.map.addLayer(hilightLayer);
    }

    /**
     * Add the given Graphics to the Hilighter
     *
     * @param graphics Graphics to add
     */
    async addHilight(graphics: Array<Graphic> | Graphic) {
        const gs = graphics instanceof Array ? graphics : [graphics];
        await this.hilightMode.add(gs);
    }

    /**
     * Remove the given Graphics from the Hilighter
     *
     * @param graphics Graphics to remove
     */
    async removeHilight(graphics?: Array<Graphic> | Graphic) {
        const gs: Array<Graphic> | undefined = graphics
            ? graphics instanceof Array
                ? graphics
                : [graphics]
            : undefined;
        await this.hilightMode.remove(gs);
    }

    async reloadHilight(graphics: Array<Graphic> | Graphic) {
        const gs = graphics instanceof Array ? graphics : [graphics];
        await this.hilightMode.reloadHilight(gs);
    }

    /**
     * Return all Graphics that match the given origin/uid/oid
     *
     * @param origin Graphic origin
     * @param uid Associated layer UID of the Graphic
     * @param oid Associated OID of the Graphic
     */
    async getGraphicsByKey(
        origin?: string,
        uid?: string,
        oid?: number
    ): Promise<Array<Graphic>> {
        const hilightLayer = await this.getHilightLayer();
        if (!hilightLayer) {
            return [];
        }

        let keys = hilightLayer.graphics.map(g => ({
            ...this.deconstructGraphicKey(g.id),
            og: g
        }));

        if (origin) {
            keys = keys.filter(k => k.origin === origin);
        }

        if (uid) {
            keys = keys.filter(k => k.uid === uid);
        }

        if (oid) {
            keys = keys.filter(k => k.oid === oid);
        }

        return keys.map(k => k.og);
    }

    /**
     * Return a well-formed graphic key
     */
    constructGraphicKey(origin: string, uid: string, oid: number): string {
        return `${HILIGHT_LAYER_NAME}~${origin}~${uid}~${oid}`;
    }

    /**
     * Return a deconstructed graphic key.
     *
     * @param key The graphic key to deconstruct
     */
    deconstructGraphicKey(key: string): {
        origin: string;
        uid: string;
        oid: number;
    } {
        const ids = key.split('~');
        if (ids.length !== 4) {
            console.warn('Malformed Hilight Graphic key provided:', key);
        }
        return { origin: ids[1], uid: ids[2], oid: parseInt(ids[3]) };
    }

    /**
     * Return the hilightLayer
     */
    async getHilightLayer(): Promise<CommonGraphicLayer | undefined> {
        if (this.hilightMode) {
            return await this.hilightMode.getHilightLayer();
        } else {
            console.warn(
                'API get layer request before highlight mode object exists'
            );
            return undefined;
        }
    }
}
