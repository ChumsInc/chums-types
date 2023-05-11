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
    StandardLeadTime: string|number|null,
    LastLeadTime: string|number|null,
    OnHandCost: number;
    ImmediateAvailable: number;
    Available: number;
    OverShort: number;
    onTruck: boolean,
    statusList: WorkOrderStatus[],
    itList: unknown[],
    status: {
        [key in WorkOrderStatusCode]?: number;
    }
}


export type WorkOrderStatusCode = 'bead'|'cl'|'cut'|'mold'|'prd'|'card'|'plan'|'pull'|'rush'|'comment'|'delete_wo';

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
    }
}
