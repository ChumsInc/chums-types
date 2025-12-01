import type {GLAccount} from "../general-ledger.d.ts";

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
    TemplateDesc: string|null;
    Steps: WorkTemplateStep[],
    TemplateCost: string | number;
    updated: string | null;
}

