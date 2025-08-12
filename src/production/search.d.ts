export interface SearchItem {
    ItemCode: string;
    ItemCodeDesc: string;
    ProductType: string;
    ProductLine: string;
    Category1: string | null;
    UDF_UPC: string | null;
    UDF_UPC_BY_COLOR: string | null;
    SuggestedRetailPrice: string | number;
    filename: string | null;
    b2bItem: string | null;
    ProductStatus: string | null;
    TemplateNo: string|null;
}

export type ProductType = 'F'|'K'|'R'|'D';

export interface WarehouseRecord {
    WarehouseCode:string,
    WarehouseDesc: string,
    WarehouseStatus: 'A'|'I',
}

export interface ProductLineRecord {
    ProductLine: string,
    ProductLineDesc: string,
    ProductType: ProductType,
    Valuation: string,
    ExplodedKitItems: string,
    active: boolean,
}

export interface CategoryRecord {
    Category2: string,
    id?: number,
    code: string,
    description?: string,
    active?: boolean,
    notes?: string|null,
    tags: unknown,
    productLine: string,
}

export interface CollectionRecord {
    Category3: string,
}

export interface BaseSKURecord {
    Category4: string,
    id?: number,
    sku_group_id?: number,
    sku?: string,
    description?: string,
    upc?: string,
    active?: boolean,
    notes?: string|null,
    tags?: unknown,
}


export interface CountryOfOriginRecord {
    countryOfOrigin: string,
}

export interface PrimaryVendorRecord {
    PrimaryVendorNo: string,
    VendorName: string,
}
