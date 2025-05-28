import {Warehouse} from "chums-types";

export interface PhysInvCountInstance {
    id: number;
    label: string;
    locked: boolean;
    dateStarted: string;
    dateCompleted: string;
    dateCreated: string;
    dateUpdated: string;
}

export interface PhysInvImportItem {
    entryId: number;
    sheet: number;
    line: number;
    warehouseCode: string;
    itemCode: string;
    quantity: number;
    unitOfMeasure: string;
    error?: string | null;
    item?: PhysInvImportValidation | null;
}

export interface PhysInvImportValidation {
    itemCode: string;
    itemCodeDesc: string | null;
    warehouseCode: string | null;
    productType: string;
    inactiveItem: string;
}


export interface PhysInvWarehouse extends Warehouse {
    idCountInstance: number;
    entries?: number;
}

export interface PhysInvMissingSheetsResponse {
    first: number;
    last: number;
    missing: number[];
    count: number;
}

export interface PhysInvEntry {
    id: number;
    idCountInstance: number;
    WarehouseCode: string;
    Sheet: number;
    SheetLine: number;
    Location: string;
    ItemCode: string;
    CountedQty: number;
    UnitOfMeasure: string;
}

export interface PhysInvEntryRecord extends PhysInvEntry {
    ItemCodeDesc: string | null;
    isWip?: string;
    UserName: string;
    UserID: number;
    timestamp: string;
    ProductType: string | null;
    InactiveItem: string | null;
    StandardUnitOfMeasure: string | null;
}

export interface PhysInvSearchItem {
    ItemCode: string;
    ItemCodeDesc: string;
    StandardUnitOfMeasure: string;
    ProductType: string;
}

export interface PhysInvSheetTotal {
    countInstance: number;
    Sheet: number;
    SheetTotal: number;
    LineCount: number;
}

export interface PhysInvUsers {
    idCountInstance: number;
    id: number;
    name: string;
}


export interface PhysInvInvalidEntry extends PhysInvEntry {
    UserName: string;
    ProductType: string;
    InactiveItem: string;
    ItemCodeDesc: string;
    WarehouseCode: string;
    name: string;
    timestamp: string;
}

export interface PhysInvRecountEntry extends Pick<PhysInvEntry, 'id' | 'idCountInstance' | 'Sheet' | 'SheetLine' | 'Location' | 'ItemCode' | 'WarehouseCode'> {
    QuantityConverted: number;
    ConversionMethod: string;
}


export interface PhysInvRecountStatus {
    idCountInstance: number;
    WarehouseCode: string;
    ItemCode: string;
    ItemCodeDesc: string;
    LotSerialNo: string;
    BinLocation: string;
    StandardUnitOfMeasure: string;
    QuantityOnHand: number | string;
    QuantityCounted: number | string;
    AverageCost: number | string;
    QuantityVariance: number | string;
    CostVariance: number | string;
    sheets: string;
    locations: string;
    ABSCostVariance: number | string;
    Status: string | null;
    Notes: string | null;
    UserID: number | null;
    UserName: string | null;
}

export interface PhysInvStatusEntry {
    countInstance: number | string;
    ItemCode: string;
    WarehouseCode: string;
    LotSerialNo?: string;
    Status: string;
    Notes?: string;
    UserID: number;
}

export interface PhysInvItemHistory {
    ItemCode: string;
    WarehouseCode: string;
    FiscalCalYear: number | string;
    TransactionQty: number | string;
    ExtendedCost: number | string;
    TransactionCount: number | string;
}

export interface PhysInvVariance {
    idCountInstance: number;
    ItemCode: string;
    WarehouseCode: string;
    ItemCodeDesc: string;
    LotSerialNo: string;
    BinLocation: string;
    StandardUnitOfMeasure: string;
    QuantityOnHand: number | string;
    QuantityCounted: number | string;
    AverageCost: number | string;
    QuantityVariance: number | string;
    CostVariance: number | string;
    sheets: string;
    locations: string;
    ABSCostVariance: number | string;
    Status: string | null;
    Notes: string | null;
    UserName: string | null;
}

interface ConversionInstance {
    id: number;
    company: string;
    label: string;
    locked: number | boolean;
}

export interface ConversionRemaining {
    ct: number;
    step: number;
    conversion: string;
    beforeStep: number;
}

export interface ConversionProblems {
    unconverted: UnconvertedEntry[];
    invalidUM: InvalidUMEntry[];
}

export interface UnconvertedEntry {
    id: number;
    idCountInstance: number;
    WarehouseCode: string;
    Sheet: string;
    SheetLine: string;
    ItemCode: string;
    CountedQty: number;
    UnitOfMeasure: string;
    HasHangTag: number;
    UserName: string;
    timestamp: string;
}

export interface InvalidUMEntry {
    id: number;
    idCountInstance: number;
    WarehouseCode: string;
    Sheet: string;
    SheetLine: string;
    ItemCode: string;
    CountedQty: number;
    CountedUnitOfMeasure: string;
    StandardUnitOfMeasure: string;
    ConversionMethod: string;
}

export interface ConvertedVariance {
    WarehouseCode: string;
    WarehouseDesc: string;
    idCountInstance: number;
    items: number;
    uncounted: number;
    stdDevQty: number;
    stdDevCost: number | string;
    cost_variance: number | string;
}

export interface ConversionResponse {
    instance: ConversionInstance;
    remaining: ConversionRemaining[];
    problems: ConversionProblems;
    variance: ConvertedVariance[];
}

export type PhysInvMissingLinesResponse = Record<string, number[]>
