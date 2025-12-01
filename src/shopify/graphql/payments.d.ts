import type {MoneyV2} from "./generics.d.ts";

export interface PayoutBalanceTransaction {
    id: string;
    type: string;
    associatedPayoutId: string | null;
    transactionDate: string;
    associatedOrderId: string | null;
    associatedOrderName: string | null;
    response: ShopifyPaymentsBalanceTransaction;
    sage_SalesOrderNo: string | null;
    emailAddress: string | null;
    invoiceNo: string | null;
    billToName: string | null;
    invoiceBalance: string | number | null;
    status: {
        fulfillmentStatus: string | null;
        hasDiscount: boolean;
        tags: string;
    }
}

export interface ShopifyPaymentsBalanceTransaction {
    id: string;
    type: string;
    associatedPayout: ShopifyPaymentsBalanceTransactionAssociatedPayout;
    transactionDate: string;
    associatedOrder: ShopifyPaymentsAssociatedOrder | null;
    net: MoneyV2;
    amount: MoneyV2;
    fee: MoneyV2;
    test: boolean;
}

export interface ShopifyPaymentsAssociatedOrder {
    id: string;
    name: string;
}

export interface ShopifyPaymentsBalanceTransactionAssociatedPayout {
    id: string;
}

export interface ShopifyPaymentsPayout {
    id: string;
    issuedAt: string;
    net: MoneyV2;
    status: string;
    legacyResourceId: string;
}
