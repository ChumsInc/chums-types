import type {ProductCategory} from "../products";

export interface CategoryState {
    keyword: string | null;
    category: ProductCategory | null;
    content: ProductCategory | null;
    status: 'idle' | 'loading' | 'rejected';
}
