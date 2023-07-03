export interface FBAItem {
    sku: string;
    company: string;
    itemCode: string;
    warehouseCode: string;
    itemCodeDesc: string | null;
    active: boolean;
}
export interface FBAItemMap {
    [sku: string]: FBAItem;
}
