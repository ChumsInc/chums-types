export interface Count {
    count: number;
    precision: 'AT_LEAST'|'EXACT';
}

export interface Weight {
    unit: string;
    value: number;
}

export interface UserError {
    code: string;
    field: string[];
    message: string;
}