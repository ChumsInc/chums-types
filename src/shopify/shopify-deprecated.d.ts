export interface DeprecatedShopifyFulfillmentBody {
    location_id: string | number;
    tracking_number?: string;
    tracking_company?: string;
    tracking_numbers?: string[];
    notify_customer: boolean;
}

export interface DeprecatedFulfillment {
    id: number;
    order_id: number;
    status: string;
}

export interface DeprecatedFulfillmentResponse {
    fulfillment: DeprecatedFulfillment
}
