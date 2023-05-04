// contains renderer classes that let us decorate and work with ESRI renderer classes.
// we can add more classes to support more renderer types if we need to

import { RendererType } from '@/geo/api';
import type { Attributes } from '@/geo/api';
import {
    EsriClassBreakInfo,
    EsriClassBreaksRenderer,
    EsriField,
    EsriRenderer,
    EsriSimpleMarkerSymbol,
    EsriSimpleRenderer,
    EsriSymbol,
    EsriUniqueValueInfo,
    EsriUniqueValueRenderer
} from '@/geo/esri';

export class BaseRenderer {
    innerRenderer: EsriRenderer;
    symbolUnits: Array<BaseSymbolUnit>;
    defaultUnit: BaseSymbolUnit | undefined;
    type: RendererType;
    falseRenderer: boolean;

    // falseRenderer is set to true when we are creating a fake renderer to facilitate generating a legend from
    // a non-feature service, like a tile layer or imagery layer.
    constructor(
        esriRenderer: EsriRenderer,
        layerFields: Array<EsriField>,
        falseRenderer = false
    ) {
        this.innerRenderer = esriRenderer;
        this.symbolUnits = [];
        this.falseRenderer = falseRenderer;
        this.type = RendererType.Unknown;

        // specifics for a renderer should be implemented in subclass constructor
        // note layerFields is not used here but used in subclasses. keeping it here to keep all constructor sigs the same.
        // we could remove it if it becomes clear we never need it in the base renderer.
    }

    // this function takes a set of attributes and extracts a value that can be used to match the owner of the attributes
    // to a part of a renderer. Use `any` result as the type can vary between renderers.
    protected makeSearchParams(attributes: Attributes): any {
        // basic case: return the attributes.
        // subclasses can override this for magic
        return attributes;
    }

    protected searchRenderer(attributes: any): BaseSymbolUnit {
        const sParams: any = this.makeSearchParams(attributes);
        const targetSU = this.symbolUnits.find((su: BaseSymbolUnit) =>
            su.match(sParams)
        );
        if (targetSU) {
            return targetSU;
        } else if (this.defaultUnit) {
            return this.defaultUnit;
        }

        // could not find match, return default symbol with blank image
        console.error(`renderer search could not find match for ${sParams}`);
        const defaultSymbol: BaseSymbolUnit = new BaseSymbolUnit(this);
        defaultSymbol.svgCode = '';
        return defaultSymbol;
    }

    getGraphicIcon(attributes: any): string {
        return this.searchRenderer(attributes).svgCode;
    }

    getGraphicSymbol(attributes: any): EsriSymbol {
        return this.searchRenderer(attributes).symbol;
    }

    rendererToLegend(): any {
        throw new Error('rendererToLegend not implemented in subclass');
    }

    // worker function. determines if a field value should be wrapped in
    // any character and returns the character. E.g. string would return ', numbers return empty string.
    protected getFieldDelimiter(
        fieldName: string,
        fields: Array<EsriField>
    ): string {
        let delim = `'`;

        // no field definition means we assume strings.
        if (!fields || fields.length === 0) {
            return delim;
        }

        // attempt to find our field, and a data type for it.
        const f = fields.find(ff => ff.name === fieldName);
        if (f && f.type && f.type !== 'string') {
            // we found a field, with a type on it, but it's not a string. remove the delimiters
            delim = '';
        }

        return delim;
    }

    // worker function
    // corrects for any character-case discrepancy for field names in the renderer vs on the layer
    protected cleanFieldName(
        fieldName: string,
        fields: Array<EsriField>
    ): string {
        if (!fieldName) {
            // testing an undefined/unused field. return original value.
            return fieldName;
        }
        let myField = fields.find(f => f.name === fieldName);
        if (myField) {
            // field is valid. donethanks.
            return fieldName;
        } else {
            // do case-insensitive search
            const lowName: string = fieldName.toLowerCase();
            myField = fields.find(f => f.name.toLowerCase() === lowName);
            if (myField) {
                // use the field definition casing
                return myField.name;
            } else {
                // decided error here was too destructive. it would tank the layer,
                // while the drawback would mainly only be failed symbols.
                // just return fieldName and hope for luck.

                // turning off warning, as we have a valid case where a renderer is constructed to
                // support generating a legend from a non-feature service.
                // console.warn(`could not find renderer field ${fieldName}`);
                return fieldName;
            }
        }
    }

    protected makeElseClause(): string {
        if (this.falseRenderer) {
            return '';
        }

        const elseClauseGuts = this.symbolUnits
            .map(pl => pl.definitionClause)
            .join(' OR ');

        return `(NOT (${elseClauseGuts}))`;
    }
}

export class BaseSymbolUnit {
    isDefault = false;
    svgCode = '';
    symbol: EsriSymbol;
    definitionClause = '';
    label = '';
    parent: BaseRenderer;

    constructor(parent: BaseRenderer) {
        this.parent = parent;
        this.symbol = new EsriSimpleMarkerSymbol(); // throwaway value to stop typescript from whining about undefineds.
    }

    match(searchParams: any): boolean {
        // lazy, avoids us making a class for simple renderer symbol unit
        return !!searchParams;
    }
}

export class SimpleRenderer extends BaseRenderer {
    constructor(
        esriRenderer: EsriSimpleRenderer,
        layerFields: Array<EsriField>
    ) {
        super(esriRenderer, layerFields);

        this.type = RendererType.Simple;
        const su = new BaseSymbolUnit(this);
        su.label = esriRenderer.label || '';
        su.symbol = esriRenderer.symbol;
        su.definitionClause = '1=1';

        this.symbolUnits.push(su);
    }
}

export class UniqueValueRenderer extends BaseRenderer {
    private delim: string;
    private keyFields: Array<string>;

    constructor(
        esriRenderer: EsriUniqueValueRenderer,
        layerFields: Array<EsriField>,
        falseRenderer = false
    ) {
        super(esriRenderer, layerFields, falseRenderer);

        this.type = RendererType.Unique;
        this.delim = esriRenderer.fieldDelimiter || ', ';

        // worker function to turn single quotes in a value into two
        // single quotes to avoid conflicts with the text delimiters
        const quoter = (inStr: string) => {
            return inStr.replace(/'/g, `''`);
        };

        this.keyFields = [
            esriRenderer.field,
            esriRenderer.field2,
            esriRenderer.field3
        ] // extract field names
            .filter(fn => fn) // remove any undefined names
            .map((fn: string) => this.cleanFieldName(fn, layerFields)); // correct any mismatched case of field names

        const fieldDelims: Array<string> = this.keyFields.map((fn: string) =>
            this.getFieldDelimiter(fn, layerFields)
        );

        esriRenderer.uniqueValueInfos.forEach((uvi: EsriUniqueValueInfo) => {
            const su = new UniqueValueSymbolUnit(this, uvi.value);
            su.label = uvi.label || '';
            su.symbol = uvi.symbol;

            // convert fields/values into sql clause
            if (!this.falseRenderer) {
                const defClauseKeyValues: Array<string> = su.matchValue.split(
                    this.delim
                );
                const defClause: string = this.keyFields
                    .map(
                        (kf: string, i: number) =>
                            `${kf} = ${fieldDelims[i]}${quoter(
                                defClauseKeyValues[i]
                            )}${fieldDelims[i]}`
                    )
                    .join(' AND ');
                su.definitionClause = `(${defClause})`;
            }

            this.symbolUnits.push(su);
        });

        // do default last so we can collate the other SQL for the NOT
        if (esriRenderer.defaultSymbol) {
            const su = new UniqueValueSymbolUnit(this, '');
            su.isDefault = true;
            su.label = esriRenderer.defaultLabel || '';
            su.symbol = esriRenderer.defaultSymbol;
            su.definitionClause = this.makeElseClause();
            this.defaultUnit = su;
        }
    }

    protected makeSearchParams(attributes: Attributes): any {
        // make a key value for the graphic in question, using delimiter if multiple fields
        // put an empty string when key value is null

        return this.keyFields
            .map((fn: string) => {
                let graphicKey = attributes[fn] === null ? '' : attributes[fn];

                // all key values are stored as strings.  if the attribute is in a numeric column, we must convert it to a string to ensure the === operator still works.
                if (typeof graphicKey !== 'string') {
                    graphicKey = graphicKey.toString();
                }
                return graphicKey;
            })
            .join(this.delim);
    }
}

export class UniqueValueSymbolUnit extends BaseSymbolUnit {
    matchValue: string;

    constructor(parent: BaseRenderer, value: string | number) {
        super(parent);

        // sometimes values can be defined in number form.
        // we convert everything to strings so all other code doesn't need to worry about types
        if (typeof value === 'number') {
            this.matchValue = value.toString();
        } else {
            this.matchValue = value;
        }
    }

    match(searchParams: any): boolean {
        // param will be a value composite key
        return this.matchValue === searchParams;
    }
}

export class ClassBreaksRenderer extends BaseRenderer {
    private valField: string;

    constructor(
        esriRenderer: EsriClassBreaksRenderer,
        layerFields: Array<EsriField>,
        falseRenderer = false
    ) {
        super(esriRenderer, layerFields, falseRenderer);

        this.valField = this.cleanFieldName(esriRenderer.field, layerFields);
        esriRenderer.classBreakInfos.forEach((cbi: EsriClassBreakInfo) => {
            // TODO see if it's possible to have an undefined min/max value that represents inf or -inf

            const su = new ClassBreaksSymbolUnit(
                this,
                cbi.minValue,
                cbi.maxValue
            );
            su.label = cbi.label || '';
            su.symbol = cbi.symbol;

            // convert fields/values into sql clause
            if (!this.falseRenderer) {
                su.definitionClause = `(${this.valField} > ${cbi.minValue} AND ${this.valField} <= ${cbi.maxValue})`;
            }

            this.symbolUnits.push(su);
        });

        // do default last so we can collate the other SQL for the NOT
        // the 0 values will be ignored
        if (esriRenderer.defaultSymbol) {
            const su = new ClassBreaksSymbolUnit(this, 0, 0);
            su.isDefault = true;
            su.label = esriRenderer.defaultLabel || '';
            su.symbol = esriRenderer.defaultSymbol;
            su.definitionClause = this.makeElseClause();
            this.defaultUnit = su;
        }
    }

    protected makeSearchParams(attributes: Attributes): any {
        // return the number that defines which class break the attributes belong to
        return parseFloat(attributes[this.valField]);
    }
}

export class ClassBreaksSymbolUnit extends BaseSymbolUnit {
    minValue: number; // min is exclusive
    maxValue: number; // max is inclusive

    constructor(parent: BaseRenderer, minValue: number, maxValue: number) {
        super(parent);

        this.minValue = minValue;
        this.maxValue = maxValue;
    }

    match(searchParams: any): boolean {
        // param will be a numeric value
        if (this.minValue === this.maxValue) {
            return this.maxValue === searchParams;
        }
        return this.minValue < searchParams && this.maxValue >= searchParams;
    }
}
