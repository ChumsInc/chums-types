import { DBCompany } from "./basic-types";
export declare namespace Pricing {
    interface PriceLevel {
        PriceLevel: string;
        PriceLevelDescription: string;
        SortOrder: number;
    }
    interface BasePriceCode {
        Company: DBCompany;
        PriceCodeRecord: '0' | '1' | '2';
        PriceCode: string;
        PriceCodeDesc: string;
        BreakQuantity1: number;
        DiscountMarkup1: number;
        PricingMethod: 'C' | 'D' | 'M' | 'O' | 'P';
        DateUpdated: string;
    }
    interface FullPriceCode extends BasePriceCode {
        CustomerPriceLevel: string;
        ItemCode: string;
        ARDivisionNo: string;
        CustomerNo: string;
        BreakQuantity1: number;
        BreakQuantity2: number;
        BreakQuantity3: number;
        BreakQuantity4: number;
        BreakQuantity5: number;
        DiscountMarkup1: number;
        DiscountMarkup2: number;
        DiscountMarkup3: number;
        DiscountMarkup4: number;
        DiscountMarkup5: number;
        DateCreated: string;
        UserCreatedKey: number;
        DateUpdated: string;
        UserUpdatedKey: string;
    }
    interface BasePriceCodeInfo extends BasePriceCode {
        ItemsCount: number;
    }
    interface CustomerPriceLevelPriceCode extends BasePriceCode {
        PriceCodeRecord: '0';
        CustomerPriceLevel: string;
    }
    interface ItemPriceCode extends BasePriceCode {
        PriceCodeRecord: '1';
        ItemCode: string;
    }
    interface CustomerPriceCode extends BasePriceCode {
        PriceCodeRecord: '2';
        ItemCode: string;
        ARDivisionNo: string;
        CustomerNo: string;
    }
    interface PriceCodeChange extends BasePriceCode {
        CustomerPriceLevel: string;
        newDiscountMarkup1?: number;
        UserName: string;
        timestamp: string;
    }
    interface PriceCodeUser {
        UserName: string;
        changes: number;
    }
    interface PriceCodeItem {
        ItemCode: string;
        ItemCodeDesc: string;
        ProductType: string;
        StandardUnitOfMeasure: string;
        StandardUnitPrice: number;
        SuggestedRetailPrice: number;
        AverageUnitCost: number;
    }
}
