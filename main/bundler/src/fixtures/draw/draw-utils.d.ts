import { EsriGraphic, EsriSimpleFillSymbol, EsriGeometry, EsriPolygon, EsriSymbol } from '../../geo/esri';
import { DrawBufferSettings, DrawStyleSettings } from './settings';
export declare const createDrawSymbol: (geometryType: string | undefined, style: DrawStyleSettings) => EsriSymbol;
export declare const createDrawBufferSymbol: (style: DrawStyleSettings) => EsriSimpleFillSymbol;
export declare const loadDrawBufferOperators: () => Promise<void>;
export declare const createDrawBufferOnlyGeometry: (geometry: EsriGeometry | null | undefined, buffer: DrawBufferSettings) => EsriGeometry | undefined;
export declare const createDrawBufferGeometry: (geometry: EsriGeometry | null | undefined, buffer: DrawBufferSettings) => EsriPolygon | undefined;
export declare const createDrawBufferGraphic: (sourceGraphic: EsriGraphic, style: DrawStyleSettings, buffer: DrawBufferSettings) => EsriGraphic | undefined;
