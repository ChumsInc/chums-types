export interface PromoCodeRequirements {
    ItemCodes?: {
        ItemCode: string;
        required?: number;
    }
}

export interface PromoCodeActions {
    TermsCode?: string;
    ItemDiscount?: number;
    CommissionRateAddition?: number;
}

export interface PromoCode {
    id: number;
    promo_code: string;
    description: string;
    active: boolean;
    requirements: PromoCodeRequirements;
    actions: PromoCodeActions;
    valid_from: string|null;
    valid_to: string|null;
    require_code_entry: boolean;
}
