import {ProductNode} from "./product.js";
import {Edge, UserError} from "./generics.js";
import {InventoryItem} from "./inventory.js";
import {Media, MediaConnection} from "./media.js";

export interface VariantsConnection<T> {
    edges: Edge<T>[];
}

export type ProductVariantsConnection = VariantsConnection<ProductVariantNode>;

export interface SelectedOption {
    name: string;
    value: string;
}

export interface ProductVariantNode {
    id: string;
    product: Pick<ProductNode, 'id'|'status'>;
    legacyResourceId: string;
    title: string;
    price: string;
    compareAtPrice: string;
    sku: string;
    barcode: string;
    media: MediaConnection;
    selectedOptions: SelectedOption[];
    inventoryItem: Pick<InventoryItem, 'id' | 'measurement' | 'provinceCodeOfOrigin' | 'harmonizedSystemCode' | 'inventoryLevel'>;
    createdAt: string;
    updatedAt: string;
    status?: string;
}

export interface ProductVariant extends Omit<ProductVariantNode, 'media'> {
    id: string;
    product: Pick<ProductNode, 'id'>;
    legacyResourceId: string;
    title: string;
    price: string;
    compareAtPrice: string;
    sku: string;
    barcode: string;
    media: Pick<Media, 'id'>[];
    selectedOptions: SelectedOption[];
    inventoryItem: Pick<InventoryItem, 'id' | 'measurement' | 'provinceCodeOfOrigin' | 'harmonizedSystemCode' | 'inventoryLevel'>;
    createdAt: string;
    updatedAt: string;
    status?: string;
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
