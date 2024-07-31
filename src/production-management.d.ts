import {GLAccount} from "./general-ledger.js";

export interface WorkCenter {
    id: number|null;
    workCenter: string;
    workCenterDesc: string;
    efficiencyPercent: number | string;
    isStandardWC: boolean;
    averageHourlyRate?: string | number | null;
}

export interface ActivityCode {
    ActivityCode: string;
    WorkCenter: string;
    ActivityDesc: string | null;
    ActivityClass: 'E' | 'M' | 'G' | 'S';
    WorkedDepartmentNo: string;
    ScrapAccount: GLAccount | null;
    SchedulingMethod: 'A' | 'F' | 'H';
    StandardCostPerHour: number | string;
    FixedOverheadAmt: number | string;
    StepAvgCost?: number|string;
    TemplateCount?: number;
    created: string;
    updated: string;
}

export interface WorkTemplateStep {
    TemplateNo: string;
    RevisionNo: string;
    CurrentRevision: 'Y' | 'N';
    StepNo: string;
    TemplateDesc: string;
    ActivityCode: string;
    WorkCenter: string;
    ScalingMethod: 'N' | 'P' | 'Y' | 'M';
    SchedulingMethod: 'A' | 'H' | 'F'
    ScalingFactorLabor: string | number;
    ScalingFactorMaterials: string | number;
    BudgetLaborCost: string | number;
    BudgetMaterialCost: string | number;
    updated: string;
}

export interface WorkTemplateHeader {
    TemplateNo: string;
    RevisionNo: string;
    CurrentRevision: 'Y' | 'N';
    TemplateDesc: string;
    Steps: number,
    TemplateCost: string | number;
    updated: string | null;
}

export interface WorkTemplate {
    TemplateNo: string;
    RevisionNo: string;
    CurrentRevision: 'Y' | 'N';
    TemplateDesc: string;
    Steps: WorkTemplateStep[],
    TemplateCost: string | number;
    updated: string | null;
}

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
