export interface Count {
    count: number;
    precision: 'AT_LEAST' | 'EXACT';
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

export interface Edge<T> {
    node: T;
    cursor: string;
}

export interface PageInfo {
    endCursor: string | null;
    hasNextPage: boolean;
}

export interface Connection<T> {
    edges: Edge<T>[];
    nodes: T[];
    pageInfo: PageInfo;
}

export interface MoneyV2 {
    amount: string;
    currencyCode: string;
}

export interface MoneyBag {
    presentmentMoney: MoneyV2;
    shopMoney: MoneyV2;
}
