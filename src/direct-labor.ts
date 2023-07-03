export interface DLCode {
    id: number;
    dlCode: string;
    workCenter: string;
    operationCode: string;
    active: number|boolean;
    description: string;
    standardAllowedMinutes: number;
    laborBudget: number;
    fixedCosts: number;
    directLaborCost: number;
    StdRatePiece: number;
    timestamp: string;
}

export interface DLCodeStep {
    dlCodeId: number;
    dlCode:string;
    id: number;
    stepOrder: number;
    stepCode: string;
    description: string;
    workCenter: string;
    machine: string;
    active: boolean;
    standardAllowedMinutes: number;
    fixedCosts: number;
    stepCost: number;
}

export interface DLBasicStep {
    id: number;
    stepCode: string;
    description: string;
    machine: string;
    workCenter: string;
    standardAllowedMinutes: number;
    fixedCosts: number;
    stepCost: number;
    active: boolean;
}

export interface DLStep extends DLBasicStep {
    instructions: string;
    idCurrentTiming: number|null;
    lastUpdated: string|null;
    notes: string;
    timestamp: string;
    averageHourlyRate: number;
    laborCost: number;
    timings?: StepTiming[];
}

export interface StepTiming {
    id: number;
    idSteps: number;
    efficiency: number;
    timingDate: string;
    avgTiming: number;
    standardAllowedMinutes: number;
    quantityPerTiming: number;
    notes: string|null;
    timestamp: string;
    entries: number[];
}
