import type {StoreName} from "../shopify-generics.d.ts";

export interface SageItem {
    ItemType?: string;
    ItemCode: string;
    ItemCodeDesc: string;
    QuantityOrdered: number;
    UnitPrice: number;
    lineDiscount: number;
    commentText?: string;
}

export interface SageOrderDetailLine {
    ItemCode: string;
    ItemCodeDesc: string;
    QuantityOrdered: number;
    UnitPrice: string;
    lineDiscount: string;
}


export interface SageFulfillmentItem {
    ItemCode: string;
    QuantityOrdered: number;
    QuantityShipped: number;
    UnitOfMeasureConvFactor: number;
    inventory_item_id: number|string;
}

export interface SageFulfillmentTracking {
    SalesOrderNo: string;
    TrackingId: string;
    StarshipShipVia: string;
}

export interface SageFulfillmentInfo {
    detail: SageFulfillmentItem[];
    tracking: SageFulfillmentTracking[];
    source?: string;
}

export interface SageTrackingResponse {
    SalesOrderNo: string;
    tracking: SageFulfillmentTracking[];
}

export interface SageTrackingWithId extends SageTrackingResponse {
    id: number;
}

export interface SavedProduct {
    id: number | string;
    store: StoreName;
    handle: string;
    published_scope: string | null;
    created_at: string;
    updated_at: string | null;
    published_at: string | null;
    admin_graphql_api_id: string;
}

export interface SavedVariant {
    id: number | string;
    store: StoreName;
    product_id: string | number;
    title: string;
    price: string;
    compare_at_price: string | null;
    sku: string;
    barcode: string | null;
    grams: number | null;
}
