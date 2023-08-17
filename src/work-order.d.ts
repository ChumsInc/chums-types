export interface WorkCenter {
    Company: string;
    WorkCenterCode: string;
    Description: string;
    CommentLine1: string;
    CommentLine2: string;
    ChrgAtEmpRate: boolean;
    OutsideProcessing: boolean;
    isStandardWC: boolean;
    AverageHourlyRate: number | null;
    changed?: boolean;
}
export interface RoutingDetail {
    RoutingNo: string;
    StepNo: string;
    StepDescription: string;
    WorkCenter: string;
    OperationCode: string;
    ParentQtyFactor: number;
    OperationDescription: string;
    StdRatePiece: number;
    PlannedPieceCostDivisor: number;
}
export interface RoutingHeader {
    RoutingNo: string;
    StepDescription: string;
    StandardRateTotal: number;
    BillStatus: boolean;
    ItemStatus: boolean;
}
export interface OperationCodeKey {
    WorkCenter: string;
    OperationCode: string;
}
export interface OperationCode extends OperationCodeKey {
    OperationDescription: string;
    StdRatePiece: number;
    PlannedPieceCostDivisor: number;
    WipDirectAcct: string;
    WipFixOverhdAcct: string;
    WipVariableOvhdAcct: string;
    AppliedDirectAcct: string;
    AppliedFixedOvhdAcct: string;
    FixedOvhdPercentOfCost: number;
}
export interface WOManifestEntry {
    id: number;
    Company: 'chums' | 'bc';
    WorkOrderNo: string | null;
    ItemCode?: string | null;
    WarehouseCode?: string | null;
    QuantityShipped: number;
    ShipDate: string;
    Comment?: string;
}
export interface WOManifestEntryItem extends WOManifestEntry {
    ItemCodeDesc?: string | null;
    PackDate: string;
    BoxNo: number | null;
    QuantityOrdered: number | null;
    QuantityComplete?: number | null;
    MakeFor?: string;
    BinLocation?: string | null;
}
export interface WOManifestShipDate {
    ShipDate: string;
}
