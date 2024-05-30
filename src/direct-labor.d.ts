export interface DLCode {
    id: number;
    dlCode: string;
    workCenter: string;
    operationCode: string;
    active: boolean;
    description: string;
    standardAllowedMinutes: number|string;
    laborBudget: number|string;
    fixedCosts: number|string;
    directLaborCost: number|string;
    StdRatePiece: number|string;
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
    entries: number[];
}
