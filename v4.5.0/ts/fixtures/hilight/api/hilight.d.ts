import { CommonGraphicLayer, FixtureInstance } from '@/api/internal';
import { Graphic } from '@/geo/api';
import { type HilightConfig } from './hilight-defs';
import { BaseHilightMode } from './hilight-mode/base-hilight-mode';
export declare class HilightAPI extends FixtureInstance {
    hilightMode: BaseHilightMode;
    initialized(): void;
    _parseConfig(hilightConfig?: HilightConfig): void;
    /**
     * Create the Hilight layer.
     */
    initHilightLayer(): Promise<void>;
    /**
     * Add the given Graphics to the Hilighter
     *
     * @param graphics Graphics to add
     */
    addHilight(graphics: Array<Graphic> | Graphic): Promise<void>;
    /**
     * Remove the given Graphics from the Hilighter
     *
     * @param graphics Graphics to remove
     */
    removeHilight(graphics?: Array<Graphic> | Graphic): Promise<void>;
    reloadHilight(graphics: Array<Graphic> | Graphic): Promise<void>;
    /**
     * Return all Graphics that match the given origin/uid/oid
     *
     * @param origin Graphic origin
     * @param uid Associated layer UID of the Graphic
     * @param oid Associated OID of the Graphic
     */
    getGraphicsByKey(origin?: string, uid?: string, oid?: number): Promise<Array<Graphic>>;
    /**
     * Return a well-formed graphic key
     */
    constructGraphicKey(origin: string, uid: string, oid: number): string;
    /**
     * Return a deconstructed graphic key.
     *
     * @param key The graphic key to deconstruct
     */
    deconstructGraphicKey(key: string): {
        origin: string;
        uid: string;
        oid: number;
    };
    /**
     * Return the hilightLayer
     */
    getHilightLayer(): Promise<CommonGraphicLayer | undefined>;
}
