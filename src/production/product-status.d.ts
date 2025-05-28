export interface ProductStatusRecord {
    id: number;
    code: string;
    description: string;
}

export interface ItemStatusHistory {
    date: string|Date;
    status: string|null;
    user: number
}

export interface ItemStatusRecord {
    ItemCode: string;
    ItemCodeDesc: string;
    ProductType: ProductType;
    ProductLine: string;
    Category2: string|null;
    Category3: string|null;
    Category4: string|null;
    InactiveItem: 'Y'|'N';
    WarehouseCode: string;
    QuantityOnHand: number;
    QuantityAvailable: number;
    StandardUnitCost: number;
    AverageUnitCost: number;
    QuantityAvailableCost: number;
    selected?: boolean;
    changed?:boolean;
    ItemStatus: string;
    BinLocation: string|null;
    ReorderMethod: 'E'|'M'|'R'|null;
    ReorderPointQty: number;
    EconomicOrderQty: number;
    MaximumOnHandQty: number;
    MinimumOrderQty: number;
    ItemStatusHistory?: ItemStatusHistory[];
    values?: {

    }
}
