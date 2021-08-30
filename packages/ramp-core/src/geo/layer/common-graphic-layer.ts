// put things here that would be common to all esri attribute layers.
// used for layer types defined by Core RAMP.
// TODO add proper comments

import { CommonFC, CommonLayer, InstanceAPI } from '@/api/internal';
import { EsriGraphicsLayer } from '@/geo/esri';
import {
    AttributeSet,
    BaseGeometry,
    Extent,
    FieldDefinition,
    GetGraphicResult,
    GetGraphicParams,
    GeometryType,
    Graphic,
    RampLayerConfig
} from '@/geo/api';

export class CommonGraphicLayer extends CommonLayer {
    protected constructor(rampConfig: RampLayerConfig, $iApi: InstanceAPI) {
        // TODO if nothing to add, delete this constructor
        super(rampConfig, $iApi);
    }

    // TODO see if we even need FCs? will depend what CommonLayer is assuming / requring
    //      i suppose we would, for basic stuff like visibility (unless we override everything in this file)

    protected _graphics: Array<Graphic> = [];
    declare esriLayer: EsriGraphicsLayer | undefined;

    /**
     * Take a layer config from the RAMP application and derives a configuration for an ESRI layer
     *
     * @param rampLayerConfig snippet from RAMP for this layer
     * @returns configuration object for the ESRI layer representing this layer
     */
    protected makeEsriLayerConfig(rampLayerConfig: RampLayerConfig): any {
        // TODO flush out
        // NOTE: it would be nice to put esri.LayerProperties as the return type, but since we are cheating with refreshInterval it wont work
        //       we can make our own interface if it needs to happen (or can extent the esri one)
        const esriConfig: any = super.makeEsriLayerConfig(rampLayerConfig);

        // TODO add any extra properties for attrib-based layers here
        // TODO definitionExpression / filter default support here?

        return esriConfig;
    }

    /**
     * Get the feature count for the given sublayer.
     *
     * @param {Integer | String} [layerIdx] targets a layer index or uid to get the feature count for. Uses first/only if omitted.
     * @returns {Integer} number of features in the sublayer
     */
    getFeatureCount(): number {
        return this._graphics.length;
    }

    // TODO think about this name. would like to use getGraphic for consistency.
    //      However currently there are things that would need to be re-aligned.
    //      These graphic ids are strings, object ids are ints. Method in common layer / interface
    //      would need to support both types and handle bad data in actual layers.
    //      This function is synch. We could have it wrap its result in a promise to align with
    //      the server version
    /**
     * Gets a graphic from the layer, if it exists.
     *
     * @param {string} graphicId id of the graphic to find
     * @returns {Graphic} the graphic, undefined if no matching id is found.
     */
    getLocalGraphic(graphicId: string): Graphic | undefined {
        return this._graphics.find(g => g.id === graphicId);
    }

    protected notLoadedErr(): void {
        console.error('Attempted to manipulate the layer before it was loaded');
        console.trace();
    }

    /** Returns a copy of the graphics in the layer. */
    get graphics(): Array<Graphic> {
        return this._graphics.slice();
    }

    /**
     * Adds graphics to the layer. Once added, the Graphic is not tightly bound to the layer.
     * Updating the Graphic object will not automatically update what is on the layer.
     *
     * @param {Graphic | Array<Graphic>} graphics one or more RAMP Graphics to add to the layer
     * @returns {Promise} resolves when graphics have been added
     */
    async addGraphic(graphics: Graphic | Array<Graphic>): Promise<void> {
        if (!this.esriLayer) {
            this.noLayerErr();
            return;
        }

        let gs: Array<Graphic>;
        if (graphics instanceof Array) {
            gs = graphics;
        } else {
            gs = [graphics];
        }

        const validGraphics = gs.filter(g => {
            const index = this._graphics.findIndex(gg => gg.id === g.id);

            if (index === -1) {
                this._graphics.push(g);
                return true;
            } else {
                console.error(
                    `Attempting to add graphic with id '${g.id}' that has already been added.`
                );
                return false;
            }
        });

        const mapSR = this.$iApi.geo.map.getSR();
        const projGeomsProms = validGraphics.map(g =>
            this.$iApi.geo.utils.proj.projectGeometry(mapSR, g.geometry)
        );

        const projGeoms = await Promise.all(projGeomsProms);

        const esriGraphics = validGraphics.map((g, i) => {
            // being a bit sloppy with pointers, but these projGraphic items are temporary just generate the ESRI graphics
            const projGraphic = new Graphic(g.id);
            projGraphic.style = g.style;
            projGraphic.attributes = g.attributes;
            projGraphic.geometry = projGeoms[i];

            // TODO add in hover after we figure out what we want

            return this.$iApi.geo.utils.geom.graphicRampToEsri(projGraphic);
        });

        // TODO raise event?
        this.esriLayer.addMany(esriGraphics);
    }

    /**
     * If geometry specified, removes those items. Else removes all geometry.
     *
     * @param geometry any strings should reference a particular geometry instance with that ID. If undefined, all geometry is removed.
     */
    removeGraphic(graphics?: Array<string | Graphic> | string | Graphic): void {
        if (!this.esriLayer) {
            this.noLayerErr();
            return;
        }
        if (typeof graphics === 'undefined') {
            // TODO remove hover stuff once supported
            this.esriLayer.removeAll();
            // TODO raise event?
            return;
        }

        let inArr: Array<string | Graphic>;

        if (Array.isArray(graphics)) {
            inArr = graphics;
        } else {
            inArr = [graphics];
        }

        const ids = inArr.map(x => {
            if (typeof x === 'string') {
                return x;
            } else {
                return x.id;
            }
        });

        const targets: Array<__esri.Graphic> = [];
        ids.forEach(id => {
            // need to tag the param as `any` because .id is something we manually added
            const target = this.esriLayer?.graphics.find(
                (g: any) => g.id === id
            );
            if (target) {
                targets.push(target);
                const rampIdx = this._graphics.findIndex(g => g.id === id);
                if (rampIdx) {
                    this._graphics.splice(rampIdx, 1);
                }
            }
        });

        // TODO remove hover stuff once supported
        this.esriLayer.removeMany(targets);

        // TODO raise event?
    }
}
