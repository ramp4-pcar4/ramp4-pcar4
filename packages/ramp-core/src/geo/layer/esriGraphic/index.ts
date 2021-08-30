import { CommonFC, CommonGraphicLayer, InstanceAPI } from '@/api/internal';
import { LayerType, Point, RampLayerConfig, TreeNode } from '@/geo/api';
import { EsriGraphicsLayer } from '@/geo/esri';

// NOTE this class is fairly meh, but gives a vanilla implementation of the common graphic layer base.
//      lets us make fancier versions later, and this remains as the vanilla without colliding with
//      the fancy versions

class GraphicLayer extends CommonGraphicLayer {
    constructor(rampConfig: RampLayerConfig, $iApi: InstanceAPI) {
        super(rampConfig, $iApi);
        this._layerType = LayerType.GRAPHIC;
    }

    async initiate(): Promise<void> {
        this.esriLayer = new EsriGraphicsLayer(
            this.makeEsriLayerConfig(this.origRampConfig)
        );
        await super.initiate();
    }

    /**
     * Take a layer config from the RAMP application and derives a configuration for an ESRI layer
     *
     * @param rampLayerConfig snippet from RAMP for this layer
     * @returns configuration object for the ESRI layer representing this layer
     */
    protected makeEsriLayerConfig(
        rampLayerConfig: RampLayerConfig
    ): __esri.GraphicsLayerProperties {
        // TODO flush out
        // NOTE: it would be nice to put esri.LayerProperties as the return type, but since we are cheating with refreshInterval it wont work
        //       we can make our own interface if it needs to happen (or can extent the esri one)
        const esriConfig: __esri.GraphicsLayerProperties = super.makeEsriLayerConfig(
            rampLayerConfig
        );

        return esriConfig;
    }

    /**
     * Triggers when the layer loads.
     *
     * @function onLoadActions
     */
    onLoadActions(): Array<Promise<void>> {
        const loadPromises: Array<Promise<void>> = super.onLoadActions();

        if (!this.layerTree) {
            throw new Error('superclass did not create layer tree');
        }

        // TODO if we ever have a way to "configure" initial graphics in the layer config,
        //      would probably want to create them here.

        // feature has only one layer
        const normieFC = new CommonFC(this, 0);
        this.fcs[0] = normieFC;

        this.layerTree.children.push(new TreeNode(0, normieFC.uid, this.name)); // TODO verify name is populated at this point
        normieFC.name = this.name; // feature layer is flat, so the FC and layer share their name

        // TODO see if we need to re-synch the parent name
        // this.layerTree.name = this.name;

        return loadPromises;
    }

    // ----------- LAYER ACTIONS -----------
}

export default GraphicLayer;
