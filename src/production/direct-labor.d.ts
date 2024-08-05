export interface DLCodeWorkTemplate {
    templateNo: string;
    workCenter: string;
    activityCode: string;
    stdRate: number;
    scalingFactorLabor: number;
    budgetLaborCost: number;
}

export interface DLCode {
    id: number;
    dlCode: string;
    workCenter: string;
    activityCode: string;
    operationCode: string;  //@deprecated, to be removed
    WOWorkCenter: string; //@deprecated,  temporary field to migrate to new Sage Production Management fields
    WOOperationCode: string; //@deprecated,  temporary field to migrate to new Sage Production Management fields
    active: boolean;
    description: string;
    standardAllowedMinutes: number|string;
    laborBudget: number|string;
    fixedCosts: number|string;
    directLaborCost: number|string;
    StdRatePiece: number|string;
    templates?: DLCodeWorkTemplate[],
    timestamp: string;
}

export interface DLBasicStep {
    id: number;
    stepCode: string;
    description: string;
    machine: string;
    workCenter: string;
    standardAllowedMinutes: number|string;
    fixedCosts: number|string;
    stepCost: number|string;
    active: boolean;
}

export interface DLStep extends DLBasicStep {
    instructions: string;
    idCurrentTiming: number|null;
    lastUpdated: string|null;
    notes: string;
    timestamp: string;
    averageHourlyRate: number|string;
    laborCost: number|string;
    timings?: StepTiming[];
}

export interface DLCodeStep extends DLBasicStep {
    dlCodeId: number,
    dlCode: string,
    stepOrder: number,
    stepId: number,
}

export interface StepTiming {
    id: number;
    idSteps: number;
    efficiency: number|string;
    timingDate: string;
    avgTiming: number|string;
    standardAllowedMinutes: number|string;
    quantityPerTiming: number|string;
    notes: string|null;
    timestamp: string;
    entries: (string|number)[];
}

export interface BasicDLEntry {
    id: number,
    EmployeeNumber: string,
    EntryDate: string|null,
    DocumentNo: string;
    LineNo: number,
    idSteps: number,
    Minutes: number,
    Quantity: number,
    WorkCenter: string;
    StepCode: string;
    TemplateNo?:string|null;
    StepNo?: string|null;
    ActivityCode?: string|null;
    Description?: string;
    DocumentType?: string;
    WarehouseCode?: string;
    ItemCode?: string;
    StandardAllowedMinutes?: string|number;
}

export interface DLEntry extends BasicDLEntry {
    FullName: string,
    StandardAllowedMinutes: string|number,
    AllowedMinutes: string|number,
    UPH: number|string,
    StdUPH: number|string,
    Description: string,
    DocumentType: string,
    ItemCode: string,
    WarehouseCode: string,
    timestamp?: string,
}

export type DLDepartmentKey = '5H' | '5HT' | '5S' | '8H' | '8HT';

export interface DLEmployee {
    EmployeeNumber: string,
    FirstName: string,
    LastName: string,
    FullName: string,
    active: boolean,
    Department: DLDepartmentKey|string,
}


export interface EmployeeDLEntryTotal {
    EmployeeNumber: string,
    FullName: string,
    Minutes: string|number,
    AllowedMinutes: string|number,
    Rate: string|number,
}
