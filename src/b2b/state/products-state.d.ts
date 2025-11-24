import type {CartProduct, Product, ProductImage} from "../products.d.ts";
import type {CustomerPriceRecord} from "../customer.d.ts";

export interface ProductsState {
    keyword: string | null;
    product: Product | null;
    selectedProduct: Product | null;
    selectedItemCode: string | null;
    image: ProductImage|null;
    colorCode: string;
    variantId: number | null;
    loading: boolean;
    msrp: (string | number)[],
    customerPrice: (string | number)[],
    salesUM: string | null;
    cartItem: CartProduct | null;
    pricing: CustomerPriceRecord[];
    customerKey: string | null;
}
