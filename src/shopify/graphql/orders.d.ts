import type {OrderRiskSummary} from "./order-risk.d.ts";
import {Connection, MoneyBag} from "./generics.js";

export interface Order {
    id: string;
    legacyResourceId: string;
    name:string;
    email:string;
    displayFulfillmentStatus: string;
    risk: OrderRiskSummary;
    billingAddress: OrderAddress;
    shippingAddress: OrderAddress;
    shippingLines: Connection<ShippingLine>
    lineItems: Connection<LineItem>;
    discountApplications: Connection<DiscountApplication>;
    paymentGatewayNames: string[];
    discountCodes: string[];
    totalDiscountSet: MoneyBag;
    netPaymentSet: MoneyBag;
    totalShippingPriceSet: MoneyBag;
    subtotalPriceSet: MoneyBag;
    taxLines: TaxLine[];
}

export interface OrderAddress {
    name: string;
    address1: string;
    address2: string|null;
    city: string;
    provinceCode: string;
    countryCodeV2: string;
    zip: string;
}

export interface ShippingLine {
    code: string|null;
    originalPriceSet: MoneyBag;
}

export interface LineItem {
    id: string;
    requiresShipping: boolean;
    sku: string;
    name: string;
    quantity: number;
    discountedTotalSet: MoneyBag;
    originalTotalSet: MoneyBag;
    discountAllocations: DiscountAllocation[];
}

export interface DiscountAllocation {
    allocatedAmountSet: MoneyBag;
}

export interface TaxLine {
    title: string;
    ratePercentage: number;
    priceSet: MoneyBag;
}

export interface DiscountApplication {
    targetType: string;
}
