export interface DLCode {
    id: number;
    dlCode: string;
    workCenter: string;
    operationCode: string;
    active: number | boolean;
    description: string;
    standardAllowedMinutes: number;
    laborBudget: number;
    fixedCosts: number;
    directLaborCost: number;
    timestamp: string;
}
export interface DLCodeStep {
    dlCodeId: number;
    dlCode: string;
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
export interface DLStep {
    id: number;
    stepCode: string;
    description: string;
    machine: string;
    workCenter: number;
    instructions: string;
    standardAllowedMinutes: number;
    fixedCosts: number;
    idCurrentTiming: number;
    active: number | boolean;
    lastUpdated: string;
    notes: string;
    timestamp: string;
    averageHourlyRate: number;
    laborCost: number;
    stepCost: number;
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
    notes: string | null;
    timestamp: string;
    entries: number[];
}
