import {CartProduct} from "./products";

export type CartItemDetailProps = Pick<CartProduct, 'itemCode' | 'quantity' | 'salesUM' | 'stdUM' | 'salesUMFactor'
    | 'msrp' | 'priceLevel' | 'quantityAvailable'>

export interface CartItemColorProps {
    colorCode?: string;
    itemCode?: string;
}
