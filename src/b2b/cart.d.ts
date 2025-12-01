import type {B2BCartHeader} from "./cart-header.d.ts";
import type {B2BCartDetail} from "./cart-detail.d.ts";

export type CartProgress_Cart = 0;
export type CartProgress_Delivery = 1;
export type CartProgress_Payment = 2;
export type CartProgress_Confirm = 3;

export type CartProgress = CartProgress_Cart | CartProgress_Delivery | CartProgress_Payment | CartProgress_Confirm;

export interface B2BCart {
    header: B2BCartHeader;
    detail: B2BCartDetail[];
}

/**
 * C - Cart
 * O - Open Order
 */
export type CartStatusProp = 'C'|'O';
