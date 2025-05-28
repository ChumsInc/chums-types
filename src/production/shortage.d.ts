import {WorkTicketStatusGroup} from "./work-ticket-status.js";
import {Warehouse} from "../products.js";

export interface ShortageItem {
    ItemCode: string;
    ItemCodeDesc: string|null;
    WarehouseCode: string;
    ProductLine: string|null;
    BuyerCode: string;
    PlannerCode: string;
    PrimaryVendorNo: string;
    AverageUnitCost: number;
    BinLocation: string;
    ProductStatus: string;
    QuantityOnHand: string|number;
    QuantityOnPurchaseOrder: number;
    QuantityOnSalesOrder: number;
    QuantityOnBackOrder: number;
    QuantityOnWorkOrder: number;
    QuantityRequiredForWO: number;
    ReorderPointQty: number;
    QuantityOnMaterialReq: number;
    QuantityOnThisSO: number;
    OnHandCost: number;
    ImmediateAvailable: number;
    Available: number;
    OverShort: number;
    onTruck: boolean;
    statusList: ShortageWorkTicketItem[];
    itList: ShortageITStatusItem[];
    status: ShortageStatus;
}

export interface ShortageWorkTicketItem {
    ItemCode: string;
    WarehouseCode: string|null;
    StatusJSON: WorkTicketStatusGroup;
    WorkTicketNo: string;
    ProductionDueDate: string|null;
    QtyDue: string|number|null;
}

export interface ShortageITStatusItem {
    ItemCode: string;
    WarehouseCode: string|null;
    PurchaseOrderNo: string;
    StatusJSON:WorkTicketStatusGroup;
    WorkTicketKey: string;
    WODueDate: string|null;
}

export interface ShortageStatus {
    [key: string]: number;
}

export interface ShortageSettings {
    planners: ShortagePlanner[];
    buyers: ShortageBuyer[];
    warehouses: ShortageWarehouse[];
    vendors: ShortageVendor[];
    productLines: ShortageProductLine[];
    productStatus: ProductStatusRecord[];
}

export interface ShortagePlanner {
    PlannerCode: string|null;
}


export interface ShortageBuyer {
    BuyerCode: string|null;
}

export type ShortageWarehouse = Pick<Warehouse, 'WarehouseCode'|'WarehouseDesc'>;

export interface ShortageVendor {
    PrimaryVendorNo: string;
}

export interface ShortageProductLine {
    ProductLine: string;
    ProductLineDesc: string;
}

