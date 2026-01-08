export interface BannerImage {
    id: number;
    filename?: string;
    altText?: string|null;
    overlay: string;
    active: boolean | 1 | 0;
    timestamp?: string;
}
export interface PayPeriod {
    id: number;
    startDate: string;
    endDate: string;
    completed: boolean;
}

export interface Holiday {
    id: number;
    date: string;
    description: string;
    paid: boolean;
    timestamp: string;
}
