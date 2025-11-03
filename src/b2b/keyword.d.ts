import {BooleanLike} from "./generic.js";

export interface Keyword {
    id: number;
    pagetype: 'category' | 'product' | 'page';
    keyword: string;
    title: string;
    parent: string;
    redirect_to_parent: number;
    status: BooleanLike;
    lifestyle?: string;
    css?: string;
    subtitle?: string;
    size?: string;
    formatted_name?: string;
    swatch_format?: string;
    best_seller?: boolean | null;
    upcycled?: boolean | null;
    sellAs?: number | null;
}
