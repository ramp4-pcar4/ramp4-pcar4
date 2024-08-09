import { InstanceAPI, MapLayer } from '@/api/internal';
import type { EsriGraphicsLayer, EsriGraphic } from '@/geo/esri';
import { DataFormat, Graphic, LayerFormat } from '@/geo/api';
import type { RampLayerConfig } from '@/geo/api';

/**
 * A common layer class which is inherited by layer classes that implement graphic layers (vector graphics not bound to a schema).
 */
export class CommonGraphicLayer extends MapLayer {
    protected constructor(rampConfig: RampLayerConfig, $iApi: InstanceAPI) {
        super(rampConfig, $iApi);
        this.dataFormat = DataFormat.ESRI_FEATURE;
        this.layerFormat = LayerFormat.GRAPHIC;

        // Until we implement hovertip support on RAMP Graphics, turn off hovertips to stop
        // hittest errors in the console.
        this.hovertips = false;
    }

    protected _graphics: Array<Graphic> = [];
    declare esriLayer: EsriGraphicsLayer | undefined;

    /**
     * Take a layer config from the RAMP application and derives a configuration for an ESRI layer
     *
     * @param rampLayerConfig snippet from RAMP for this layer
     * @returns configuration object for the ESRI layer representing this layer
     */
    protected makeEsriLayerConfig(rampLayerConfig: RampLayerConfig): any {
        // NOTE: it would be nice to put esri.LayerProperties as the return type, but since we are cheating with refreshInterval it wont work
        //       we can make our own interface if it needs to happen (or can extent the esri one)
        const esriConfig: any = super.makeEsriLayerConfig(rampLayerConfig);

        // TODO add any extra properties for attrib-based layers here
        // TODO definitionExpression / filter default support here?

        return esriConfig;
    }

    /**
     * Get the number of graphics in the layer.
     *
     * @returns {Integer} number of graphics in the layer
     */
    getGraphicCount(): number {
        // TODO alternate, leverage the common layer property .featureCount,
        //      and adjust it every time we add/remove graphics from the layer.
        //      Pro: re-use property, similar interface
        //      Con: it's graphics, not features. Lies!
        return this._graphics.length;
    }

    /**
     * Gets a graphic from the layer, if it exists.
     *
     * @param {string} graphicId id of the graphic to find
     * @returns {Graphic} the graphic, undefined if no matching id is found.
     */
    getLocalGraphic(graphicId: string): Graphic | undefined {
        return this._graphics.find(g => g.id === graphicId);
    }

    /**
     * Gets the ESRI graphic from the layer, if it exists, that is rendering the Graphic with the
     * provided id.
     *
     * @param {string} graphicId id of the graphic to find
     * @returns {ESRIGraphic} the graphic, undefined if no matching id is found.
     */
    getEsriGraphic(graphicId: string): EsriGraphic | undefined {
        return this.esriLayer?.graphics.find((g: any) => g.id === graphicId);
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
        if (!this.layerExists) {
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
            this.$iApi.geo.proj.projectGeometry(mapSR, g.geometry)
        );

        const projGeoms = await Promise.all(projGeomsProms);

        const esriGraphics = validGraphics.map((g, i) => {
            // being a bit sloppy with pointers, but these projGraphic items are temporary just generate the ESRI graphics
            const projGraphic = new Graphic(projGeoms[i], g.id, g.attributes);
            projGraphic.style = g.style;

            // TODO add in hover after we figure out what we want

            return this.$iApi.geo.geom.graphicRampToEsri(projGraphic);
        });

        // TODO raise event?
        this.esriLayer!.addMany(esriGraphics);
    }

    /**
     * If Graphics are specified, removes those graphics from the layer. Passing no parameter removes all Graphics.
     *
     * @param {Graphic | string | Array<Graphic | string>} graphics Valid formats: A Graphic object, a graphic ID in string form, or an array of Graphic objects and/or graphic ID strings
     */
    removeGraphic(graphics?: Array<string | Graphic> | string | Graphic): void {
        if (!this.layerExists) {
            this.noLayerErr();
            return;
        }
        if (typeof graphics === 'undefined') {
            // TODO remove hover stuff once supported
            this.esriLayer!.removeAll();
            this._graphics = [];
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

        ids.forEach(id => {
            // need to tag the param as `any` because .id is something we manually added

            const esriIdx = this.esriLayer!.graphics.findIndex(
                (g: any) => g.id === id
            );
            if (esriIdx > -1) {
                this.esriLayer!.graphics.removeAt(esriIdx);
            }

            const rampIdx = this._graphics.findIndex(g => g.id === id);
            if (rampIdx > -1) {
                this._graphics.splice(rampIdx, 1);
            }
        });

        // TODO remove hover stuff once supported
        // TODO raise event?
    }
}
