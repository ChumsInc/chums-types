/**
 * CHUMS common product types
 *  @author Steve Montgomery <https://github.com/UtahGooner>
 */
import {YesNo} from "./generics.d.ts";

export type ProductType = 'F'|'K'|'R'|'D';
export type ItemType = '1'|'2'|'3'|'4'|'5';

export interface Warehouse {
    WarehouseCode:string,
    WarehouseDesc: string,
    WarehouseStatus: 'A'|'I',
}

export interface ProductLine {
    ProductLine: string,
    ProductLineDesc: string,
    Valuation: string,
    ExplodedKitItems: string,
    active: boolean,
}

export interface ProductCategory {
    Category2: string,
    id: number|null,
    code: string,
    description: string|null,
    active: boolean,
    notes: string|null,
    tags: unknown|null,
    productLine: string|null,
}

export interface ProductCollection {
    Category3: string,
}


/**
 * BaseSKU should be used in SKU System editor
 */

export interface BaseSKU {
    id: number,
    sku_group_id: number,
    sku: string,
    description: string,
    upc: string,
    active: boolean,
    notes?: string|null,
    tags?: unknown|null,
}

/**
 * BaseSKUSearch should be used when loading search filters from '/api/search'...
 */
export interface BaseSKUSearch {
    Category4: string,
    id: number|null,
    sku_group_id: number|null,
    sku: string|null,
    description: string|null,
    upc: string|null,
    active: boolean|null,
    notes?: string|null,
    tags?: unknown|null,
}


export interface ProductColor {
    id: number,
    code: string,
    description: string,
    active: boolean,
    notes: string|null,
    tags: unknown|null,
}

export interface ProductMixInfo {
    id: number,
    code: string,
    description: string,
    active: boolean,
    notes: string|null,
    tags: unknown|null,
}


export interface CountryOfOrigin {
    countryOfOrigin: string,
}

export interface PrimaryVendor {
    PrimaryVendorNo: string,
    VendorName: string,
}


export interface ProductStatus {
    id: number,
    code: string,
    description: string,
}

export interface ProductSeason {
    id: number,
    code: string,
    description: string,
    properties: {
        color: string,
    },
    notes: string,
    active: boolean,
    userId: number,
}

export interface ProductWarehouse {
    WarehouseCode: string,
    WarehouseDesc: string,
    WarehouseStatus: string,
}

export interface SKUGroup {
    id: number,
    code: string,
    description: string,
    active: boolean,
    notes: string|null,
    tags: unknown,
    productLine: string,
}

export interface ProductMaterial {
    id: number,
    code: string,
    notes: string,
    description: string,
    active: boolean,
}

export interface ProductDimension {
    quantity?: number,
    length?: number|null,
    width?: number|null,
    weight?: number|null,
    height?: number|null,
    readonly volume?: number;
}

export interface AdjustableDimension {
    min?: number|null,
    max?: number|null,
    name?: string,
    isAdjustable?: boolean,
}
export interface ProductAttributes {
    notes?: string,
    material?: ProductMaterial,
    dimensionNotes?: string,
    casePackDimensions?: ProductDimension,
    adjustable?: AdjustableDimension,
    shippingDimensions?: ProductDimension,
    colors?: [],
    dimensions?: ProductDimension,
}

export interface ProductStatusAttributes {
    new?: boolean,
    updating?: boolean,
    approved?: boolean,
    live?: boolean,
    discontinued?: boolean,
}

export interface ProductMaster {
    id: number,
    company: string,
    devCode: string,
    name: string,
    status: ProductStatusAttributes,
    active: boolean,
    productType: ProductType|null,
    productLine: string|null,
    category: string|null,
    subCategory: string|null,
    idSKUGroup: number,
    SKU: string,
    UPC: string,
    sellAsSelf: boolean,
    sellAsMix: boolean,
    sellAsColors: boolean,
    color: string|null,
    suggestedRetailPrice: number,
    stdPrice: number,
    stdCost: number,
    notes: string|null,
    userId: number|null,
    dateCreated: string,
    dateUpdated: string,
    season: Pick<ProductSeason, 'id'|'code'|'active'>|null,
    attributes?: ProductAttributes,
    itemQuantity?: number,
}

export interface BinLocation {
    WarehouseCode: string;
    ItemCode: string;
    ItemCodeDesc?: string,
    SalesUnitOfMeasure?: string,
    BinLocation: string;
}


export interface ProductSearchItem {
    company: string;
    ItemCode: string;
    ItemCodeDesc: string;
    ProductType: string;
    ProductLine:string;
    Category1: string|null;
    UDF_UPC: string|null;
    UDF_UPC_BY_COLOR: string|null;
    SuggestedRetailPrice: string|number;
}

export interface ProductColorUPC {
    id: number;
    company: string;
    ItemCode: string;
    upc: string;
    notes: string;
    tags: unknown|null;
    active: boolean;
}

export interface ProductColorUPCResponse extends ProductColorUPC {
    ItemCodeDesc: string|null;
    ProductType: ProductType|null;
    InactiveItem: YesNo|null;
    UDF_UPC: string|null;
    UDF_UPC_BY_COLOR: string|null;
}
