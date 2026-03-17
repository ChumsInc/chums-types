import type {ShopifyPaymentsBalanceTransaction} from "../../shopify-graphql/admin.types.js";

export type PaymentsBalanceTransaction = Pick<ShopifyPaymentsBalanceTransaction, 'id' | 'type' | 'associatedPayout' | 'transactionDate' | 'associatedOrder' | 'net' | 'amount' | 'fee'>

export interface PayoutBalanceTransaction {
    id: string;
    type: string;
    associatedPayoutId: string | null;
    transactionDate: string;
    associatedOrderId: string | null;
    associatedOrderName: string | null;
    response: PaymentsBalanceTransaction;
    sage_SalesOrderNo: string | null;
    emailAddress: string | null;
    invoiceNo: string | null;
    billToName: string | null;
    invoiceBalance: string | number | null;
    status: {
        fulfillmentStatus: string | null;
        hasDiscount: boolean;
        tags: string;
        refunded: boolean;
    }
}
