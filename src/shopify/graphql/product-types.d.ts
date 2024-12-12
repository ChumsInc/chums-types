import type {PageInfo} from "./page-info.d.ts";
import {ImageEdge} from "./image-types.js";
import {Count, UserError, Weight} from "./generics.js";


export interface ProductEdge<T> {
    node: T;
}

export interface PagedProductResponse<T> {
    products: {
        edges: ProductEdge<T>[];
        pageInfo: PageInfo;
    }
}

export interface ProductStatus {
    id: string;
    handle: string;
    updatedAt: string;
}

export type ProductStatusResponse = PagedProductResponse<ProductStatus>;

export interface ProductNode {
    id: string;
    legacyResourceId: string;
    title: string;
    handle: string;
    createdAt: string;
    updatedAt: string;
    status: string;
    hasOnlyDefaultVariant: boolean;
    collections: ProductCollectionsConnection;
    variants: ProductVariantsConnection
}

export interface ProductCollectionsConnection {
    edges: ProductCollectionEdge[];
}

export interface ProductCollectionEdge {
    node: ProductCollectionNode;
}

export interface ProductCollectionNode {
    handle: string;
}

export interface ProductVariantsConnection {
    edges: ProductEdge<ProductVariantNode>[]
}

export interface SelectedOption {
    name: string;
    value: string;
}

export interface ProductVariantNode {
    id: string;
    product: Pick<ProductNode, 'id'>;
    legacyResourceId: string;
    title: string;
    price: string;
    compareAtPrice: string;
    sku: string;
    barcode: string;
    selectedOptions: SelectedOption[];
    inventoryItem: InventoryItem;
    createdAt: string;
    updatedAt: string;
    status?: string;
}

export interface InventoryItemMeasurement {
    id: string;
    weight: Weight;
}

export interface InventoryItem {
    id: string;
    measurement: InventoryItemMeasurement;
    provinceCodeOfOrigin: string | null;
    harmonizedSystemCode: string | null;
    inventoryLevel: InventoryLevel;
}

export interface InventoryLevel {
    quantities: InventoryQuantity[];
    updatedAt: string;
}

export interface InventoryQuantity {
    id: string;
    quantity: number;
}

export type ProductResponse = PagedProductResponse<ProductNode>;

export interface ProductImageInfo {
    id: string;
    featuredImage: {
        id: string;
    }
    images: {
        edges: ImageEdge[];
    }
}

export type ProductImagesResponse = PagedProductResponse<ProductImageInfo>;

export interface CollectionNode {
    id: string;
    handle: string;
    updatedAt: string;
    legacyResourceId: string;
    productsCount: Count;
    resourcePublicationsCount: Count;
}

export interface CollectionEdge {
    node: CollectionNode;
}

export interface PagedCollectionResponse {
    collections: {
        edges: CollectionEdge[];
        pageInfo: PageInfo;
    }
}

export interface Collection {
    gid: string;
    id: string;
    handle: string;
    updatedAt: string;
    productsCount: number;
    publicationsCount: number
}

export interface InventoryItemsResponse {
    inventoryItems: {
        edges: InventoryItemEdge[];
        pageInfo: PageInfo;
    }
}

export interface InventoryItem {
    id: string;
    legacyResourceId: string;
    variant: ProductVariantNode;
}

export interface InventoryItemEdge {
    node: InventoryItem;
}

export interface InventoryQuantityInput {
    inventoryItemId: string;
    locationId: string;
    quantity: number;
    compareQuantity: number;
}

export interface InventoryLevelChanges {
    name: 'available' | 'on_hand';
    reason: 'correction' | 'cycle_count_available' | 'damaged' | 'movement_created' | 'movement_updated' | 'movement_received' | 'movement_canceled' | 'other';
    quantities: InventoryQuantityInput[];
}

export interface InventoryChange {
    name: string;
    delta: number;
    quantityAfterChange: number;
}

export interface InventoryAdjustmentGroup {
    reason: string;
    changes: InventoryChange[];
}

export interface InventoryLevelMutationResponse {
    inventorySetQuantities: {
        inventoryAdjustmentGroup: InventoryAdjustmentGroup;
        userErrors: UserError[];
    }
}

export interface ItemValidation {
    productId: string;
    productLegacyResourceId: string;
    handle: string;
    status: string;
    hasOnlyDefaultVariant: boolean;
    variantId: string;
    variantLegacyResourceId: string;
    title: string;
    sku: string;
    options: string[];
    quantityOnHand: number;
    quantityAvailable: number;
    compareAtPrice: string;
    price: string;
    barcode: string;
    weight: Weight;
    countryCodeOfOrigin: string;
    harmonizedSystemCode: string;
    itemCodeDesc: string | null;
    suggestedRetailPrice: string | null;
    sageWeight: string | null;
    sageCountryCode: string | null;
    inactiveItem: string;
    productType: string;
    commodityCode: string | null;
    UPC: string | null;
    updatedAt: string;
    hasUpdates: boolean;
    hasProblems?: boolean;
}

export interface ProductVariantPriceBody {
    productId: string;
    variants: Pick<ProductVariantNode, 'id' | 'price'>[]
}

export type VariantPriceChange = Pick<ProductVariantNode, 'id' | 'price' | 'compareAtPrice'>;

export interface VariantPriceMutationResponse {
    productVariantsBulkUpdate: {
        productVariants: VariantPriceChange[];
        userErrors: UserError[];
    }
}
