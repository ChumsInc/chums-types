export interface ShortageRow {
    ItemCode: string;
    ItemCodeDesc: string;
    WarehouseCode: string;
    BuyerCode: string;
    PlannerCode: string;
    PrimaryVendorNo: string;
    AverageUnitCost: number;
    BinLocation: string;
    ProductStatus: string;
    QuantityOnHand: number;
    QuantityOnPurchaseOrder: number;
    QuantityOnSalesOrder: number;
    QuantityOnBackOrder: number;
    QuantityOnWorkOrder: number;
    QuantityRequiredForWO: number;
    ReorderPointQty: number;
    QuantityOnMaterialReq: number;
    QuantityOnThisSO: number;
    StandardLeadTime: string | number | null;
    LastLeadTime: string | number | null;
    OnHandCost: number;
    ImmediateAvailable: number;
    Available: number;
    OverShort: number;
    onTruck: boolean;
    statusList: WorkOrderStatus[];
    itList: unknown[];
    status: {
        [key in WorkOrderStatusCode]?: number;
    };
}
export type WorkOrderStatusCode = 'bead' | 'cl' | 'cut' | 'mold' | 'prd' | 'card' | 'plan' | 'pull' | 'rush' | 'comment' | 'delete_wo';
export interface WorkOrderOperationStatus {
    user: number;
    style: number;
    date: string;
    text?: string;
}
export interface WorkOrderStatus {
    ItemCode: string;
    WarehouseCode: string;
    StatusJSON: {
        [key in WorkOrderStatusCode]?: WorkOrderOperationStatus;
    };
    WorkOrder: string;
    WODueDate: string;
    QtyDue: string;
}
export interface PMManifestEntry {
    id: number;
    Company: 'chums' | 'bc';
    WorkTicketNo: string | null;
    ItemCode?: string | null;
    WarehouseCode?: string | null;
    QuantityShipped: number;
    ShipDate: string;
    Comment?: string;
}
export interface PMManifestEntryItem extends PMManifestEntry {
    ItemCodeDesc?: string | null;
    PackDate: string;
    BoxNo: number | null;
    QuantityOrdered: number | null;
    QuantityComplete?: number | null;
    MakeFor?: string;
    BinLocation?: string | null;
    Status: string | null;
}
export interface PMManifestShipDate {
    ShipDate: string;
}
