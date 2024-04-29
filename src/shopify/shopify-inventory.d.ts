import type {StoreName} from "./shopify-generics.d.ts";

export interface ShopifyInventoryItem {
    id: string|number;
    sku: string;
    created_at: string;
    updated_at: string;
    requires_shipping: boolean;
    cost: string;
    country_code_of_origin: string|null;
    province_code_of_origin: string|null;
    harmonized_system_code: string|null;
    tracked: boolean;
    country_harmonized_system_codes: string[];
    admin_graphql_api_id: string;
}

export interface ShopifyInventoryItemsResponse {
    inventory_items: ShopifyInventoryItem[];
}

export interface ShopifyInventoryLevelResponse {
    inventory_levels: ShopifyInventoryLevel[];
}

export interface SavedInventoryItem extends Omit<ShopifyInventoryItem, 'created_at'|'updated_at'|'requires_shipping'|'province_code_of_origin'|'tracked'|'country_harmonized_system_codes'> {
    store: StoreName;
}


export interface SavedItemUpdate extends Pick<SavedInventoryItem, 'id'|'sku'|'cost'|'country_code_of_origin'| 'harmonized_system_code'>{
    cost_update: string;
    country_code_of_origin_update: string;
    harmonized_system_code_update: string;
}
export interface SavedInventoryLevel extends ShopifyInventoryLevel {
    store: StoreName;
}

export interface InventoryLevelChange extends Pick<ShopifyInventoryLevel, 'location_id' | 'inventory_item_id' | 'available'> {
    ItemCode: string;
}
export interface ShopifyInventoryLevel {
    inventory_item_id: number;
    location_id: number;
    available: number;
    updated_at: string|null;
    admin_graphql_api_id: string;
}
