/**
 * CHUMS common product types
 *  @author Steve Montgomery <https://github.com/UtahGooner>
 */
export declare namespace Product {
    type ProductType = 'F' | 'K' | 'R' | 'D';
    interface Warehouse {
        WarehouseCode: string;
        WarehouseDesc: string;
        WarehouseStatus: 'A' | 'I';
    }
    interface ProductLine {
        ProductLine: string;
        ProductLineDesc: string;
        Valuation: string;
        ExplodedKitItems: string;
        active: boolean;
    }
    interface ProductCategory {
        Category2: string;
        id: number | null;
        code: string;
        description: string | null;
        active: boolean;
        notes: string | null;
        tags: unknown | null;
        productLine: string | null;
    }
    interface ProductCollection {
        Category3: string;
    }
    interface BaseSKU {
        Category4: string;
        id: number | null;
        sku_group_id: number | null;
        sku: string | null;
        description: string | null;
        upc: string | null;
        active: boolean | null;
        notes?: string | null;
        tags?: unknown | null;
    }
    interface ProductColor {
        id: number;
        code: string;
        description: string;
        active: boolean;
        notes: string | null;
        tags: unknown | null;
    }
    interface ProductMixInfo {
        id: number;
        code: string;
        description: string;
        active: boolean;
        notes: string | null;
        tags: unknown | null;
    }
    interface CountryOfOrigin {
        countryOfOrigin: string;
    }
    interface PrimaryVendor {
        PrimaryVendorNo: string;
        VendorName: string;
    }
    interface ProductStatus {
        id: number;
        code: string;
        description: string;
    }
    interface ProductSeason {
        id: number;
        code: string;
        description: string;
        properties: {
            color: string;
        };
        notes: string;
        active: boolean;
        userId: number;
    }
    interface ProductWarehouse {
        WarehouseCode: string;
        WarehouseDesc: string;
        WarehouseStatus: string;
    }
    interface SKUGroup {
        id: number;
        code: string;
        description: string;
        active: boolean;
        notes: string | null;
        tags: unknown;
        productLine: string;
    }
    interface ProductMaterial {
        id: number;
        code: string;
        notes: string;
        description: string;
        active: boolean;
    }
    interface ProductDimension {
        quantity?: number;
        length?: number | null;
        width?: number | null;
        weight?: number | null;
        height?: number | null;
        readonly volume?: number;
    }
    interface AdjustableDimension {
        min?: number | null;
        max?: number | null;
        name?: string;
        isAdjustable?: boolean;
    }
    interface ProductAttributes {
        notes?: string;
        material?: ProductMaterial;
        dimensionNotes?: string;
        casePackDimensions?: ProductDimension;
        adjustable?: AdjustableDimension;
        shippingDimensions?: ProductDimension;
        colors?: [];
        dimensions?: ProductDimension;
    }
    interface ProductStatusAttributes {
        new?: boolean;
        updating?: boolean;
        approved?: boolean;
        live?: boolean;
        discontinued?: boolean;
    }
    interface ProductMaster {
        id: number;
        company: string;
        devCode: string;
        name: string;
        status: ProductStatusAttributes;
        active: boolean;
        productType: ProductType | null;
        productLine: string | null;
        category: string | null;
        subCategory: string | null;
        idSKUGroup: number;
        SKU: string;
        UPC: string;
        sellAsSelf: boolean;
        sellAsMix: boolean;
        sellAsColors: boolean;
        color: string | null;
        suggestedRetailPrice: number;
        stdPrice: number;
        stdCost: number;
        notes: string | null;
        userId: number | null;
        dateCreated: string;
        dateUpdated: string;
        season: Pick<ProductSeason, 'id' | 'code' | 'active'> | null;
        attributes?: ProductAttributes;
        itemQuantity?: number;
    }
    interface BinLocation {
        WarehouseCode: string;
        ItemCode: string;
        ItemCodeDesc?: string;
        SalesUnitOfMeasure?: string;
        BinLocation: string;
    }
}
