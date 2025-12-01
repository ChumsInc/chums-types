import type {UserError, Weight, PageInfo} from "./generics.d.ts";
import type {ProductVariantNode} from "./variant.d.ts";

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
    measurement: InventoryItemMeasurement;
    provinceCodeOfOrigin: string | null;
    harmonizedSystemCode: string | null;
    inventoryLevel: InventoryLevel;
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

export interface InventoryItemMeasurement {
    id: string;
    weight: Weight;
}

export interface InventoryLevel {
    quantities: InventoryQuantity[];
    updatedAt: string;
}

export interface InventoryQuantity {
    id: string;
    quantity: number;
}
