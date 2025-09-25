import { RendererType, Attributes, FieldDefinition } from '../api';
import { EsriClassBreaksRenderer, EsriRenderer, EsriSimpleRenderer, EsriSymbol, EsriUniqueValueRenderer } from '../esri';
export declare class BaseRenderer {
    innerRenderer: EsriRenderer;
    symbolUnits: Array<BaseSymbolUnit>;
    defaultUnit: BaseSymbolUnit | undefined;
    type: RendererType;
    falseRenderer: boolean;
    constructor(esriRenderer: EsriRenderer, layerFields: Array<FieldDefinition>, falseRenderer?: boolean);
    protected makeSearchParams(attributes: Attributes): any;
    protected searchRenderer(attributes: any): BaseSymbolUnit;
    getGraphicIcon(attributes: any): string;
    getGraphicSymbol(attributes: any): EsriSymbol;
    protected getFieldDelimiter(fieldName: string, fields: Array<FieldDefinition>): string;
    protected cleanFieldName(fieldName: string, fields: Array<FieldDefinition>): string;
    protected makeElseClause(): string;
}
export declare class BaseSymbolUnit {
    isDefault: boolean;
    svgCode: string;
    symbol: EsriSymbol;
    definitionClause: string;
    label: string;
    parent: BaseRenderer;
    constructor(parent: BaseRenderer);
    match(searchParams: any): boolean;
}
export declare class SimpleRenderer extends BaseRenderer {
    constructor(esriRenderer: EsriSimpleRenderer, layerFields: Array<FieldDefinition>);
}
export declare class UniqueValueRenderer extends BaseRenderer {
    private delim;
    private keyFields;
    constructor(esriRenderer: EsriUniqueValueRenderer, layerFields: Array<FieldDefinition>, falseRenderer?: boolean);
    protected makeSearchParams(attributes: Attributes): any;
}
export declare class UniqueValueSymbolUnit extends BaseSymbolUnit {
    matchValue: string;
    constructor(parent: BaseRenderer, value: string | number);
    match(searchParams: any): boolean;
}
export declare class ClassBreaksRenderer extends BaseRenderer {
    private valField;
    constructor(esriRenderer: EsriClassBreaksRenderer, layerFields: Array<FieldDefinition>, falseRenderer?: boolean);
    protected makeSearchParams(attributes: Attributes): any;
}
export declare class ClassBreaksSymbolUnit extends BaseSymbolUnit {
    /** min is exclusive, unless first class break */
    minValue: number;
    /** max is inclusive */
    maxValue: number;
    firstBreak: boolean;
    constructor(parent: BaseRenderer, minValue: number, maxValue: number, firstBreak: boolean);
    match(searchParams: any): boolean;
}
