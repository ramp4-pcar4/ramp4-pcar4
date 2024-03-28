// put things here that would be common to all layers
// used for layer types defined by Core RAMP.
/* eslint-disable @typescript-eslint/no-unused-vars */

import {
    type AttributeLoaderDetails,
    AttribSource,
    CommonLayer,
    DataLayerAttributeLoader,
    GlobalEvents,
    InstanceAPI
} from '@/api/internal';
import {
    DataFormat,
    DrawState,
    FieldType,
    Graphic,
    InitiationState,
    LayerFormat,
    LayerState,
    NoGeometry
} from '@/geo/api';

import type {
    AttributeSet,
    CompactJson,
    Extent,
    GetGraphicParams,
    RampLayerConfig,
    TabularAttributeSet
} from '@/geo/api';

/**
 * A common layer class which is inherited by layer classes that implement data-based layers (do not appear on the map).
 */
export class DataLayer extends CommonLayer {
    /**
     * This represents a file content transformed to our common consumption format.
     * The implementation classes will handle that transformation, and common routines in this class can process
     * it onInitiate.
     */
    protected sourceJson: CompactJson | undefined;
    protected attribs: AttribSource;

    // since this is a mapless layer, only applies to visibility of layer in the grid
    protected _visibility: boolean;

    // ----------- LAYER CONSTRUCTION AND INITIALIZAION -----------

    protected constructor(rampConfig: RampLayerConfig, $iApi: InstanceAPI) {
        super(rampConfig, $iApi);

        // initialize common layer properties

        this.dataFormat = DataFormat.ESRI_FEATURE;
        this.layerFormat = LayerFormat.NOLAYER;
        this.drawState = DrawState.NOT_VISUAL;

        this.attribs = new AttribSource();

        this.supportsFeatures = true;
        this.mapLayer = false;

        this.isFile = false; // TODO revist. see how this gets used. For anything non-spatial?

        this._visibility = rampConfig.state?.visibility ?? true;

        // override this timer, since there is nothing to draw.
        // Will ignore config overrides, since there is no draw state change events to
        // turn off timer. Revist if we find a strange use case for "drawing" data.
        this.expectedTime.draw = 0;
    }

    protected async onInitiate(): Promise<void> {
        // this implementation handles file-based data layers.
        // the arcgis table service class will override this and not call super.
        // parsed data should be sitting on .sourceJson, so we inject it into our
        // attribute loader making it ready for use and avoiding any quick-cache
        // duplication (data already loaded upfront, no additional server hits).

        // TODO potential improvements:
        //      checks for duplicate field names, especially after the space remover. e.g. fields "my field","my-field" would collide.
        //      full data scan to figure out string field length. does this even matter? do we use that length prop anywhere?

        if (this.sourceJson) {
            // NOTE: if file based, using rawData, and caching is on, it is the subclasses responsibility
            //       to ensure .sourceJson is not pointing to rawData by reference. This method will update
            //       .sourceJson

            const realJson: CompactJson = this.sourceJson;

            if (realJson.data.length === 0 || realJson.fields.length === 0) {
                throw new Error('Data layer with no columns or now rows.');
            }

            // generate fields property contents. while doing so, migrate any source field names with spaces to aliases.
            // and generate a new field name that is cleaned
            const origCols = realJson.fields.slice();
            const row1 = realJson.data[0].slice();
            const allSpacesRegex = / /gi;

            this.fields = origCols.map((fName, i) => {
                let alias = '';
                let finalName = fName;
                if (fName.indexOf(' ') > -1) {
                    alias = fName;
                    finalName = fName.trim().replace(allSpacesRegex, '-');
                    realJson.fields[i] = finalName;
                }
                const dataType = this.$iApi.geo.layer.files.inferType(row1[i]);
                return {
                    name: finalName,
                    alias: alias,
                    type: dataType,
                    length: dataType === FieldType.STRING ? 256 : undefined
                };
            });

            // setup fake OID
            this.oidField = 'rampOID';
            this.fields.push({ name: this.oidField, type: FieldType.OID });
            realJson.fields.push(this.oidField);
            realJson.data.forEach((row, i) => row.push(i + 1)); // +1 to start at 1, not zero

            // this will apply any additional aliases and field exclusions as specified.
            this.$iApi.geo.attributes.applyFieldMetadata(
                this,
                this.origRampConfig.fieldMetadata
            );
            this.fieldList = '*'; // overwrite, no server.

            // TODO this is a potential improvement. Consider doing it if this format becomes popular, otherwise this
            //      is probably a nothingburger.
            // check if our metadata dropped any fields. If so, strip from our source; there is no reason to keep stuff in memory
            // that has been purged. The +1 is to account for the injected OID field.
            // if (this.fields.length < origCols.length + 1) {
            // figure out which fields dropped. need to know indexes in fields array.
            // for each data row, either splice out or re-generate the array without the missing properties.
            // basically kick out all the unwanted data
            // }

            // set the attLoader on our attSource object. Will allow us to pre-populate all attributes in format
            // that ramp enjoys
            const loadData: AttributeLoaderDetails = {
                batchSize: -1, // mandatory to avoid easy bugs in server process; not used here
                sourceDataJson: realJson,
                oidField: this.oidField,
                attribs: '*' // even required?
            };
            this.attribs.attLoader = new DataLayerAttributeLoader(
                this.$iApi,
                loadData
            );

            // trigger the attribute load. this will be synchronous, but is a promise to meet convention.
            // we toss the end result, but it now exists (in proper format) inside the attLoader for all future calls
            await this.attribs.attLoader.getAttribs();

            // assign additional metadata
            this.featureCount = realJson.data.length;
            if (this.origRampConfig.nameField) {
                this.nameField =
                    this.$iApi.geo.attributes.fieldValidator(
                        this.fields,
                        this.origRampConfig.nameField
                    ) || this.oidField;
            } else {
                this.nameField = this.oidField;
            }

            // attributes are processed, can drop the transitory data.
            this.sourceJson = undefined;

            if (!this.origRampConfig.caching) {
                delete this.origRampConfig.rawData;
            }
        } else {
            throw new Error(
                'Attempted to initiate file based data layer, sourceJson is missing'
            );
        }
    }

    async terminate(): Promise<void> {
        await super.terminate();
        // if nothing required here, this can be deleted
        // TODO wipe the .attrib property to reduce memory?
    }

    async reload(): Promise<void> {
        if (this.initiationState === InitiationState.INITIATED) {
            // TODO might need to store layer state. If we want layer to look the same as it was prior to re-loading,
            //      could do that here. Alternative is to not, and let whomever is calling this save state before
            //      and restore state after. Might be more flexible.
            this.$iApi.event.emit(GlobalEvents.LAYER_RELOAD_START, this);

            await this.terminate();
        }

        await this.initiate();

        // if initiate didn't fail, call onLoad()
        if (this.layerState !== LayerState.ERROR) {
            this.onLoad();
        }

        // this is there to prevent an instant reload, which makes it look like nothing happened in the UI.
        // Only data layers seem to need this at the moment. Consider different location if more layers require it.
        setTimeout(() => {
            this.$iApi.event.emit(GlobalEvents.LAYER_RELOAD_END, this);
        }, 300);
    }

    // performs setup on the layer that needs to occur after server load but
    // before we mark the layer as loaded. Any async tasks must
    // include their promise in the return array.
    protected onLoadActions(): Array<Promise<void>> {
        const proms = super.onLoadActions();

        // set this so that legend fixture can render symbology stack easily
        this.legend = [
            {
                uid: this.$iApi.geo.shared.generateUUID(),
                label: '',
                svgcode: '',
                esriStandard: true,
                visibility: true,
                lastVisbility: true,
                drawPromise: this.getIcon(0).then(svg => {
                    this.legend[0].svgcode = svg;
                })
            }
        ];

        return proms;
    }

    // ----------- Attribute Methods -----------

    /**
     * Invokes the process to get the full set of attribute values for the layer.
     * Repeat calls will re-use the downloaded values unless the values have been explicitly cleared.
     *
     * @returns {Promise} resolves with set of attribute values
     */
    getAttributes(): Promise<AttributeSet> {
        return this.attribs.attLoader.getAttribs();
    }

    /**
     * Invokes the process to get the full set of attribute values for the layer,
     * formatted in a tabular format. Additional data properties are also included.
     * Repeat calls will re-use the downloaded values unless the values have been explicitly cleared.
     *
     * @returns {Promise} resolves with set of tabular attribute values
     */
    getTabularAttributes(): Promise<TabularAttributeSet> {
        // this call will generate the tabular format, or return the cache if
        // it exists
        return this.$iApi.geo.attributes.generateTabularAttributes(
            this,
            this.attribs
        );
    }

    /**
     * Gets information on a graphic in the most efficient way possible.
     * The options parameter is ignored for data layers, since attributes is the only valid item
     * to request
     *
     * @param {Integer} objectId the object id of the graphic to find
     * @param {Object} options options object for the request. Ignored for data layers
     * @returns {Promise} resolves with a Graphic containing the requested information
     */
    async getGraphic(
        objectId: number,
        options: GetGraphicParams
    ): Promise<Graphic> {
        // note: this methods supports data layers not tied to an ArcGIS server.
        //      class TableLayer will override.

        // the layer should have pre-populated its attribute store during load.

        let resultAttribs: any = {};

        if (this.attribs.attLoader.isLoaded()) {
            const atSet = await this.attribs.attLoader.getAttribs();
            resultAttribs = atSet.features[atSet.oidIndex[objectId]];
        } else {
            // something went wrong
            throw new Error(
                'Non ESRI data layer did not have attributes populated.'
            );
        }

        return new Graphic(new NoGeometry(), '', resultAttribs);
    }

    /**
     * Gets the icon for a specific feature, as an SVG string.
     *
     * @param {Integer} objectId the object id of the feature to find
     * @returns {Promise} resolves with an svg string encoding of the icon
     */
    async getIcon(objectId: number): Promise<string> {
        // TODO decide what we want as the icon.
        //      other options can be .generateBlankSymbology()
        //      or a custom icon that looks like "data"
        //      or possibly allow layer config to override with custom svg

        // return this.$iApi.geo.symbology.generatePlaceholderSymbology('D', '#2e8b57').svg;

        // this is the result of the above call. Use until symbol is finalized
        // if we do use one of the .generateX methods, prob better to hardcode the result.
        // No reason to run the same logic for every data row.
        return '<svg id="SvgjsSvg1012" width="32" height="32" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" viewBox="0 0 32 32"><defs id="SvgjsDefs1013"></defs><rect id="SvgjsRect1014" width="28" height="28" x="2" y="2" fill="#2e8b57"></rect><text id="SvgjsText1015" font-family="Roboto" font-size="23" fill="#ffffff" font-weight="bold" x="7.6875" y="-6.40000057220459" svgjs:data="{&quot;leading&quot;:&quot;1.3&quot;}"><tspan id="SvgjsTspan1016" dy="29.900000000000002" x="7.6875" svgjs:data="{&quot;newLined&quot;:true}">D</tspan></text></svg>';
    }

    async getFilterOIDs(
        exclusions: Array<string> = [],
        extent: Extent | undefined = undefined
    ): Promise<Array<number> | undefined> {
        // TODO proper implementation in issue #1847 . For now, returns all
        return undefined;
    }

    /**
     * Since data layers (except table layers) do not have asynch attribute loading, there is nothing to do here.
     * However, we have it there just so that calling this method for a giant list is peaceful, and filtering
     * by layer type is not required.
     */
    abortAttributeLoad(): void {}

    /**
     * Since data layers (except table layers) do not have asynch attribute loading, there is nothing to do here.
     * However, we have it there just so that calling this method for a giant list is peaceful, and filtering
     * by layer type is not required.
     */
    attribLoadAborted(): boolean {
        return false;
    }

    /**
     * Since data layers (except table layers) do not have asynch attribute loading, there is nothing to do here.
     * However, we have it there just so that calling this method for a giant list is peaceful, and filtering
     * by layer type is not required.
     */
    clearFeatureCache(): void {}

    /**
     * The number of attributes currently downloaded (will update as download progresses)
     * @returns current download count
     */
    downloadedAttributes(): number {
        // non-table data layer has downloaded everything after initialize.
        return this.featureCount;
    }

    /**
     * Override for data layers.
     * Used to determine if layer is available for use.
     */
    get layerExists(): boolean {
        return this.isLoaded;
    }

    /**
     * Returns the visibility of the layer data
     *
     * @returns {Boolean} visibility of the layer data
     */
    get visibility(): boolean {
        return this._visibility;
    }

    /**
     * Applies visibility to layer data.
     *
     * @param {Boolean} value the new visibility setting
     */
    set visibility(value: boolean) {
        if (this._visibility !== value) {
            this._visibility = value;

            this.$iApi.event.emit(GlobalEvents.LAYER_VISIBILITYCHANGE, {
                visibility: value,
                layer: this
            });
        }
    }
}
