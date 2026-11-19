export interface Editable {
    changed?: boolean;
}

export type LoadingStatus = 'idle' | 'pending' | 'succeeded' | 'failed';

export type YesNo = 'Y' | 'N';

export interface ErrorResponse {
    error: string;
    name?: string;
}

export interface ErrorsResponse {
    errors: string|ErrorResponse[];
}
