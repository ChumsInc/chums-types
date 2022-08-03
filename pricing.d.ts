export interface PriceLevel {
    PriceLevel: string;
    PriceLevelDescription: string;
    SortOrder: number;
}

export interface PriceCode {
    Company: string;
    PriceCodeRecord: '0';
    PriceCode: string;
    PriceCodeDesc: string;
    BreakQuantity1: number,
    DiscountMarkup1: number,
    PricingMethod: 'C'|'D'|'M'|'O'|'P',
}

export interface PriceCodeInfo extends PriceCode {
    ItemsCount: number;
}

export interface PriceCodeChange extends PriceCode {
    CustomerPriceLevel: string,
    oldDiscountMarkup1?: number,
    UserName: string,
}

export interface PriceCodeUsers {
    UserName: string;
}
