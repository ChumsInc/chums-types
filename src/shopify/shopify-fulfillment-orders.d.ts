export interface ShopifyFulfillmentOrderLineItem {
    id: number;
    fulfillment_order_id: number;
    quantity: number;
    line_item_id: number;
    inventory_item_id: number;
    fulfillable_quantity: number;
    variant_id: number;
}

export interface ShopifyFulfillmentOrder {
    id: number;
    order_id: number;
    status: string;
    supported_actions: string[];
    line_items: ShopifyFulfillmentOrderLineItem[];
}

export interface ShopifyFulfillmentOrdersList {
    fulfillment_orders: ShopifyFulfillmentOrder[];
}
