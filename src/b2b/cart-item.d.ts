import type {CartProduct} from "./products.d.ts";

export type CartItemDetailProps = Pick<CartProduct, 'itemCode' | 'quantity' | 'salesUM' | 'stdUM' | 'salesUMFactor'
    | 'msrp' | 'priceLevel' | 'quantityAvailable'>

export interface CartItemColorProps {
    colorCode?: string;
    itemCode?: string;
}
