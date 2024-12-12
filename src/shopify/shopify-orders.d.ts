import type {MoneyString, PriceSet} from "./shopify-generics.d.ts";
import type {SageItem} from "./chums/shopify-chums-types.d.ts";
import {OrderRiskSummary} from "./graphql/index.js";

export interface ShopifyDiscountCode {
    type: string;
    amount: string;
    code: string;
}
export interface ShopifyTaxLine {
    channel_liable: boolean;
    price: string;
    price_set: PriceSet;
    rate: number|string;
    title: string;
}
export interface ShopifyShippingLine {
    id: number;
    code: string;
    discounted_price: string;
    discounted_price_set: PriceSet;
    title: string;
    price: string;
    price_set: PriceSet;
    source: string;
    tax_lines: ShopifyTaxLine[],
    discount_allocations: ShopifyDiscountAllocation[]

}


export interface ShopifyAddress {
    name: string;
    address1: string;
    address2: string;
    country_code: string;
    zip: string;
    city: string;
    province_code: string;
}

export interface ShopifyRisk {
    id: number;
    order_id: number;
    checkout_id: number;
    source: string;
    score: number | string;
    recommendation: string;
    display: true;
    cause_cancel: unknown | null;
    message: string;
    merchant_message: string;
}
export interface ShopifyOrderPaymentDetails {
    credit_card_bin: string;
    avs_result_code: string;
    cvv_result_code: string;
    credit_card_number: string;
    credit_card_company: string;
}
export interface ShopifyItem {
    id: number,
    admin_graphql_api_id: string,
    destination_location: ItemLocation,
    fulfillable_quantity: number,
    fulfillment_service: string,
    fulfillment_status: null,
    gift_card: boolean,
    grams: number,
    name: string,
    origin_location: ItemLocation,
    price: MoneyString,
    price_set: PriceSet,
    product_exists: boolean,
    product_id: number,
    properties: unknown[],
    quantity: number,
    requires_shipping: boolean,
    sku: string,
    taxable: boolean,
    title: string,
    total_discount: MoneyString,
    total_discount_set: PriceSet,
    variant_id: number,
    variant_inventory_management: null,
    variant_title: string,
    vendor: string,
    tax_lines: unknown[],
    duties: unknown[],
    discount_allocations: ShopifyDiscountAllocation[]
}

export interface ShopifyCustomer {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    orders_count: number;
    tags: string;
}

export interface ShopifyOrder {
    id: number | string;
    admin_graphql_api_id: string;
    app_id: number;
    browser_ip: string;
    buyer_accepts_marketing: boolean;
    cancel_reason: string|null;
    cancelled_at: string | null;
    closed_at: string | null;
    confirmed: boolean;
    contact_email: string;
    created_at: string;
    currency: string;
    current_subtotal_price: string;
    current_subtotal_price_set: PriceSet;
    current_total_discounts: string;
    current_total_discounts_set: PriceSet;
    current_total_duties_set: unknown|null;
    current_total_price: string;
    current_total_price_set: PriceSet;
    current_total_tax: string;
    current_total_tax_set: PriceSet;
    customer_locale: string;
    discount_codes?: ShopifyDiscountCode[];
    email: string;
    estimated_taxes: boolean;
    financial_status: string | null;
    fulfillment_status: string | null;
    gateway: string;
    name: string;
    number: number;
    order_status_url: string;
    payment_gateway_names: string[];
    presentment_money: string;
    processed_at: string;
    subtotal_price: string;
    subtotal_price_set: PriceSet;
    tags: string;
    tax_lines: ShopifyTaxLine[];
    taxes_included: boolean;
    test: boolean;
    total_discounts: string;
    total_discounts_set: PriceSet;
    total_line_items_price: string;
    total_line_items_price_set: PriceSet;
    total_outstanding: string;
    total_price: string;
    total_price_set: PriceSet;
    total_price_usd: string;
    total_shipping_price_set: PriceSet;
    total_tax: string;
    total_tax_set:PriceSet;
    total_weight: number;
    updated_at: string;
    billing_address: ShopifyAddress;
    customer: ShopifyCustomer;
    discount_applications: unknown[];
    fulfillments: unknown[]
    line_items: ShopifyItem[];
    payment_details: ShopifyOrderPaymentDetails;
    refunds: unknown[];
    shipping_address: ShopifyAddress;
    shipping_lines: ShopifyShippingLine[],
    risks?: ShopifyRisk[];
    risk?: OrderRiskSummary|null;
}


export interface ItemLocation {
    id: number,
    country_code: string,
    province_code: string,
    name: string,
    address1: string,
    address2: string,
    city: string,
    zip: string
}



export interface ShopifyDiscountAllocation {
    amount: string;
    amount_set: PriceSet;
    discount_application_index: number;
}

export type SagePaymentType = 'WEBCC' | 'PAYPA';

export interface SavedOrder {
    id: number | string;
    gid: string;
    import_result: SageImportResponse|null;
    sage_Company: 'chums';
    sage_SalesOrderNo: string;
    import_status: string;
    created_at: string;
    updated_at: string | null;
    shopify_order: ShopifyOrder|null;
}
export interface SageImportResponse {
    error?: string;
    post: object;
    Company: string;
    SalesOrderNo: string;
    log: unknown[];
    lineResponse: unknown[];
    import_status: string;
    import_order: object;
}

export interface SavedOrderRow extends Omit<SavedOrder, 'import_result'|'shopify_order'> {
    import_result: string | null;
    shopify_order: string | null;
}

export interface ExtendedSavedOrder extends SavedOrder {
    ARDivisionNo: string;
    CustomerNo: string;
    BillToName: string;
    OrderStatus: string;
    CancelReasonCode: string;
    ShipVia: string | null;
    InvoiceNo: string | null;
    Balance: string | null;
}

export interface ExtendedSavedOrderRow  extends Omit<ExtendedSavedOrder, 'import_result'|'shopify_order'> {
    import_result: string | null;
    shopify_order: string | null;
}
export interface SageImportableOrder {
    orders_id: string | number;
    SalesOrderNo: string;
    ARDivisionNo: string;
    CustomerNo: string;
    CustomerPONo: string;
    EmailAddress: string;
    billing: SageAddress;
    delivery: SageAddress;
    PaymentType: SagePaymentType;
    ShipVia: string;
    FreightAmt: string;
    SalesTaxAmt: string;
    TaxSchedule?:string;
    TaxableAmt?: string;
    NonTaxableAmt?: string;
    orderDetail: SageItem[];
    orderCharges: SageItem[];
}

export interface SageAddress {
    name: string;
    address1: string;
    address2: string;
    address3: string;
    country_code: string;
    zip: string;
    city: string;
    province_code: string;
}



export interface ShopifyOrdersResponse {
    orders: ShopifyOrder[]
}
export interface ShopifyOrderResponse {
    order: ShopifyOrder;
}
export interface ShopifyRiskResponse {
    risks: ShopifyRisk[];
}
