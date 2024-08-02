import {CLIssue} from "./contract-labor.js";

export type WorkTicketScalingMethod = 'N' | 'P' | 'Y' | 'M'; // N = No Scaling, P = Production Run, Y = No. of parents per template, M = No of templates per parent
export type WorkTicketStatus = 'O' | 'Q' | 'R' | 'C' | 'X'; // Open, Estimate/Quote, Released, Closed, Deleted
export type WorkTicketType = 'I' | 'S' | 'A'; // Inventory, Sales Order, Assembly (Work Ticket)

export interface WorkTicketHeader {
    WorkTicketKey: string;
    WorkTicketNo: string;
    WorkTicketDate: string;
    WorkTicketStatus: WorkTicketStatus;
    WorkTicketType: WorkTicketType;
    MakeForSalesOrderNo: string | null;
    MakeForWorkTicketNo: string | null;
    ParentItemCode: string;
    ParentItemCodeDesc: string;
    ParentWarehouseCode: string;
    TemplateNo: string;
    TemplateRevisionNo: string;
    EffectiveDate: string;
    ActualReleaseDate: string;
    ProductionDueDate: string;
    ParentUnitOfMeasure: string;
    ParentUnitOfMeasureConvFactor: number | string;
    QuantityOrdered: number | string;
    QuantityPlanned: number | string;
    QuantityCompleted: number | string;
}

export interface WorkTicketStep {
    WorkTicketKey: string;
    LineKey: string;
    StepNo: string;
    LineSeqNo: string;
    StepDesc: string;
    ActivityCode: string;
    WorkCenter: string;
    SourceTemplateNo: string;
    SourceTemplateRevisionNo: string;
    TemplateStepNo: string;
    ScalingMethod: WorkTicketScalingMethod;
    RevisedBudgetHours: string | number;
    RevisedBudgetLaborCost: string | number;
    ScalingFactorLabor: string | number;
    ScalingFactorMaterials: string | number;
}

export interface WorkTicketDetail {
    TemplateNo: string|null;
    WorkCenter: string | null;
    StepNo: string|null;
    ActivityCode: string | null;
    ActivityDesc: string | null;
    RevisedBudgetHours: string | null;
    UnitCost: string | null;
    RevisedBudgetMaterialsCost: string | null;
    expectedSAM: string|null;
    idSteps: number;
    StepCode: string|null;
    StandardAllowedMinutes: string | null;

    stepDescription: string|null;
}
export interface WorkTicket extends WorkTicketHeader {
    operationDetail: WorkTicketDetail[];
}

export interface WorkTicketResponse {
    header: WorkTicketHeader | null;
    steps: WorkTicketStep[];
    issues: CLIssue[];
}
