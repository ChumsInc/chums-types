import type {StoreName} from "./shopify-generics.d.ts";

export interface ShopifyProductVariant {
    id: number;
    product_id: number;
    title: string;
    price:string;
    sku: string;
    position: number;
    inventory_policy:string;
    compare_at_price: string|null;
    fulfillment_service: string;
    inventory_management: string;
    option1: string|null;
    option2: string|null;
    option3: string|null;
    created_at: string;
    updated_at: string;
    taxable: boolean;
    barcode: string;
    grams: number,
    image_id: number,
    weight: number,
    weight_unit: string;
    inventory_item_id: number;
    inventory_quantity: number;
    old_inventory_quantity: number;
    requires_shipping: boolean;
    admin_graphql_api_id: string;
}

export interface ShopifyProduct {
    id: number;
    title: string;
    body_html: string;
    product_type: string;
    created_at: string;
    handle: string;
    updated_at: string|null;
    published_at: string|null;
    status: string;
    published_scope: string;
    tags: string;
    admin_graphql_: string;
    variants: ShopifyProductVariant[];
    admin_graphql_api_id: string;
}

export interface ShopifyProductsResponse {
    products: ShopifyProduct[];
}

export interface ChangedVariant {
    id: number;
    store: StoreName;
    sku: string;
    barcode: string|null;
    UPC: string|null;
    price: string;
    compare_at_price: string;
    SuggestedRetailPrice: string;
    grams: number;
    updatedGrams: string|number;
}
