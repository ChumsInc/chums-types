import type {ProductCategory} from "../products.d.ts";

export interface CategoryState {
    keyword: string | null;
    category: ProductCategory | null;
    status: 'idle' | 'loading' | 'rejected';
}
