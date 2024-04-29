export interface ShopifyObject<T = any> {
}
export interface ShopifyListResult<T = any> {
    results: T,
    nextLink: string | null;
}

export interface PriceSet {
    shop_money: PriceMoney,
    presentment_money: PriceMoney,
}

export type MoneyString = string;

export interface PriceMoney {
    amount: string,
    currency_code: string,
}

export interface PriceSet {
    shop_money: PriceMoney,
    presentment_money: PriceMoney,
}


export type StoreName = 'chums'|'chumssafety'|'chumsinc'|'chums-safety';
export type StoreNames = {
    [key in StoreName]: StoreName;
};
