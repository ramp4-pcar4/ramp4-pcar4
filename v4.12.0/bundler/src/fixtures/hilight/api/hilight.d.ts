import { CommonGraphicLayer, FixtureInstance } from '../../../api/internal';
import { Graphic } from '../../../geo/api';
import { HilightConfig } from './hilight-defs';
import { BaseHilightMode } from './hilight-mode/base-hilight-mode';
/**
 * Exposes methods to manage the hilighting of features on the map
 */
export declare class HilightAPI extends FixtureInstance {
    hilightMode: BaseHilightMode;
    initialized(): void;
    _parseConfig(hilightConfig?: HilightConfig): void;
    /**
     * Initialize the Hilight layer.
     *
     * @returns {Promise} resolves when layer is initialized
     */
    initHilightLayer(): Promise<void>;
    /**
     * Add the given Graphics to the Hilighter
     *
     * @param {Graphic | Array<Graphic>} graphics Graphics to add
     * @returns {Promise} resolves when graphics have been added
     */
    addHilight(graphics: Array<Graphic> | Graphic): Promise<void>;
    /**
     * Remove the given Graphics from the Hilighter. If no graphics are provided,
     * all highlighted items will be removed.
     *
     * @param {Graphic | Array<Graphic> | undefined} graphics Graphics to remove
     * @returns {Promise} resolves when graphics have been removed
     */
    removeHilight(graphics?: Array<Graphic> | Graphic): Promise<void>;
    /**
     * Reload the provided graphics that are currently highlighted.
     *
     * @param {Array<Graphic> | Graphic} graphics
     */
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
