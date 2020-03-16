
// TODO add proper comments


import esri = __esri;
import { InfoBundle, AttributeSet, RampLayerConfig, GetGraphicParams, GetGraphicResult } from '../gapiTypes';
import BaseLayer from './BaseLayer';
import AttribFC from './AttribFC';
import Extent from '../api/geometry/Extent';
import TreeNode from './TreeNode';

export default class AttribLayer extends BaseLayer {

    protected constructor (infoBundle: InfoBundle, config: RampLayerConfig, reloadTree?: TreeNode) {

        super(infoBundle, config, reloadTree);
        this.supportsIdentify = true;
    }

    // only here to make typescript casting nice
    protected getFC(layerIdx: number|string, validRoot: boolean = false): AttribFC {
        return (<AttribFC>super.getFC(layerIdx, validRoot));
    }

    /**
     * Take a layer config from the RAMP application and derives a configuration for an ESRI layer
     *
     * @param rampLayerConfig snippet from RAMP for this layer
     * @returns configuration object for the ESRI layer representing this layer
     */
    protected makeEsriLayerConfig(rampLayerConfig: any): any {
        // TODO flush out
        // NOTE: it would be nice to put esri.LayerProperties as the return type, but since we are cheating with refreshInterval it wont work
        //       we can make our own interface if it needs to happen (or can extent the esri one)
        const esriConfig: any = super.makeEsriLayerConfig(rampLayerConfig);

        // TODO add any extra properties for attrib-based layers here
        // TODO definitionExpression / filter default support here?

        return esriConfig;
    }

    getAttributes (layerIdx: number | string = undefined): Promise<AttributeSet> {
        return this.getFC(layerIdx).attLoader.getAttribs();
    }

    getGeomType (layerIdx: number | string = undefined): string {
        return this.getFC(layerIdx).geomType;
    }

    abortAttributeLoad (layerIdx: number | string = undefined): void {
        this.getFC(layerIdx).attLoader.abortAttribLoad();
    }

    destroyAttributes (layerIdx: number | string = undefined): void {
        this.getFC(layerIdx).attLoader.destroyAttribs();
    }

    // formerly known as getFormattedAttributes
    getTabularAttributes (layerIdx: number | string = undefined): Promise<AttributeSet> {
        return this.getFC(layerIdx).getTabularAttributes();
    }

    getFeatureCount (layerIdx: number | string = undefined): number {
        return this.getFC(layerIdx).featureCount;
    }

    // TODO think about this name. using getGraphic for consistency.
    getGraphic (objectId: number, options: GetGraphicParams, layerIdx: number | string = undefined): Promise<GetGraphicResult> {
        return this.getFC(layerIdx).getGraphic(objectId, options);
    }

    getIcon (objectId: number, layerIdx: number | string = undefined): Promise<string> {
        return this.getFC(layerIdx).getIcon(objectId);
    }

    setSqlFilter(filterKey: string, whereClause: string, layerIdx: number | string = undefined): void {
        this.getFC(layerIdx).setSqlFilter(filterKey, whereClause);
    }

    getSqlFilter(filterKey: string, layerIdx: number | string = undefined): string {
        return this.getFC(layerIdx).getSqlFilter(filterKey);
    }

    // TODO this makes for a fairly gnarly param. i.e. to target a sublayer with no extras, gotta call
    //      mylayer.getFilterOIDs(undefined, undefined, myUid)
    //      changing the two params to an options object somewhat helps, though that would also be optional param.
    getFilterOIDs(exclusions: Array<string> = [], extent: Extent = undefined, layerIdx: number | string = undefined): Promise<Array<number>> {
        return this.getFC(layerIdx).getFilterOIDs(exclusions, extent);
    }

    applySqlFilter (exclusions: Array<string> = [], layerIdx: number | string = undefined): void {
        this.getFC(layerIdx).applySqlFilter(exclusions);
    }

}