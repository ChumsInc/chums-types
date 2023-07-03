export interface Fulfillment {
    id: number;
    order_id: number;
    status: string;
}
export interface FulfillmentResponse {
    fulfillment: Fulfillment;
}
