import {ProductNode} from "./product.js";
import {Edge, UserError} from "./generics.js";
import {InventoryItem} from "./inventory.js";

export interface VariantsConnection<T> {
    edges: Edge<T>[];
}

export type ProductVariantsConnection = VariantsConnection<ProductVariant>;

export interface SelectedOption {
    name: string;
    value: string;
}

export interface ProductVariant {
    id: string;
    product: Pick<ProductNode, 'id'>;
    legacyResourceId: string;
    title: string;
    price: string;
    compareAtPrice: string;
    sku: string;
    barcode: string;
    selectedOptions: SelectedOption[];
    inventoryItem: Pick<InventoryItem, 'id' | 'measurement' | 'provinceCodeOfOrigin' | 'harmonizedSystemCode' | 'inventoryLevel'>;
    createdAt: string;
    updatedAt: string;
    status?: string;
}
export type ProductVariantNode = ProductVariant;

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
