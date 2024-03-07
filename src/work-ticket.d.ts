export interface WorkTicketHeader {
    WorkTicketKey: string;
    WorkTicketNo: string;
    ParentItemCode: string | null;
    ParentUnitOfMeasure: string | null;
    TemplateNo: string | null;
    ParentWarehouseCode: string | null;
    WorkTicketStatus: string | null;
    WorkTicketDate: string | null;
    ProductionDueDate: string | null;
    ParentUnitOfMeasureConvFactor: string | null;
    QuantityOrdered: string | null;
    QuantityPlanned: string | null;
    QuantityCompleted: string | null;
}
export interface WorkTicketDetail {
    WorkCenter: string | null;
    ActivityCode: string | null;
    ActivityDesc: string | null;
    RevisedBudgetHours: string | null;
    UnitCost: string | null;
    RevisedBudgetMaterialsCost: string | null;
    StandardAllowedMinutes: string | null;
    idSteps: number;
}
export interface WorkTicket extends WorkTicketHeader {
    operationDetail: WorkTicketDetail[];
}
