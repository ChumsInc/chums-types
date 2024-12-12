import type {PageInfo} from "./page-info.js";

export interface Image {
    id: string;
    url: string;
    width: number|null;
    height: number|null;
    altText: string|null;
}

export interface ProductImage extends Image {
    product_id: string;
}

export interface ImageEdge {
    node: Image
}

export interface ShopifyFileNode {
    id: string;
    updatedAt:string;
    preview: {
        image: Image
    }
}

export interface MediaImage extends Omit<Image, 'id'>{
    gid: string;
    source_id: string;
    updated_at: string;
}

export interface FileEdge<T> {
    node: T;
}
export interface PagedFileResponse<T> {
    files: {
        edges: FileEdge<T>[];
        pageInfo: PageInfo;
    }
}

export type MediaResponse = PagedFileResponse<ShopifyFileNode>
