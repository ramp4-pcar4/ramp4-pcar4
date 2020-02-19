export interface GenericObjectType {
    [key: string]: string;
}

export interface Types {
    allTypes: GenericObjectType;
    validTypes: GenericObjectType;
    filterValidTypes(exclude?: string | string[]): GenericObjectType;
}

export interface Provinces {
    list: GenericObjectType;
}