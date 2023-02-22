import {MoneyString, PriceSet} from "./shopify-generics";
import {RowDataPacket} from "mysql2";
import {SageItem} from "./shopify-chums-types";

export interface ShopifyDiscountCode {
    type: string;
    amount: string;
    code: string;
}
export interface ShopifyTaxLine {
    price: string;
}
export interface ShopifyShippingLine {
    code: string;
    price: string;
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
    number: number;
    cancelled_at: string | null;
    closed_at: string | null;
    created_at: string;
    updated_at: string;
    name: string;
    payment_gateway_names: string[];
    discount_codes?: ShopifyDiscountCode[];
    email: string;
    gateway: string;
    subtotal_price_set: PriceSet;
    tags: string;
    tax_lines: ShopifyTaxLine[];
    taxes_included: boolean;
    total_discounts: string;
    total_discounts_set: PriceSet;
    total_line_items_price: string;
    total_line_items_price_set: PriceSet;
    total_outstanding: string;
    fulfillment_status: string | null;
    financial_status: string | null;
    total_price: string;
    total_price_set: PriceSet;
    total_price_usd: string;
    billing_address: ShopifyAddress;
    customer: ShopifyCustomer;
    line_items: ShopifyItem[];
    shipping_address: ShopifyAddress;
    shipping_lines: ShopifyShippingLine[],
    risks: ShopifyRisk[];
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
    import_result: SageImportResponse|null;
    sage_Company: 'chums';
    sage_SalesOrderNo: string;
    import_status: string;
    created_at: string;
    updated_at: string | null;
    shopify_order: ShopifyOrder|null;
}
export interface SageImportResponse {
    post: object;
    Company: string;
    SalesOrderNo: string;
    log: unknown[];
    lineResponse: unknown[];
    import_status: string;
    import_order: object;
}

export interface SavedOrderRow extends Omit<SavedOrder, 'import_result'|'shopify_order'>, RowDataPacket {
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

export interface ExtendedSavedOrderRow  extends Omit<ExtendedSavedOrder, 'import_result'|'shopify_order'>, RowDataPacket {
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
