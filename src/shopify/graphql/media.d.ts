import type {PageInfo} from "./page-info.js";
import {Image} from "./image.js";

export interface FileEdge<T> {
    node: T;
}

export interface PagedFileResponse<T> {
    files: {
        edges: FileEdge<T>[];
        pageInfo: PageInfo;
    }
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


export type MediaResponse = PagedFileResponse<ShopifyFileNode>
