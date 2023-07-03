export interface DeprecatedShopifyFulfillmentBody {
    location_id: string | number;
    tracking_number?: string;
    tracking_company?: string;
    tracking_numbers?: string[];
    notify_customer: boolean;
}
