import {ExtendedSavedOrder} from "./shopify-orders";

export interface ShopifyPayment {
    id: number;
    status: string;
    date: string;
    currency: string;
    amount: string;
    summary: object;
}

export interface ShopifyPaymentResponse {
    payouts: ShopifyPayment[];
}

export interface SavedPayment extends ShopifyPayment {
    completed: boolean;
    date_completed?: string;
}


export interface ShopifyPaymentTransaction {
    id: number;
    type: 'payout' | 'charge' | 'refund';
    payout_id: number;
    payout_status: string;
    currency: string;
    amount: string;
    fee: string;
    net: string;
    source_id: number;
    source_order_id: number | null;

    order: ExtendedSavedOrder | null;
}

export interface ShopifyPaymentTransactionsResponse {
    transactions: ShopifyPaymentTransaction[]
}

