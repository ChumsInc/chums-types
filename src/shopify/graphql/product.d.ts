import type {PageInfo} from "./page-info.js";
import {ImageEdge} from "./image.js";


export interface ProductEdge<T> {
    node: T;
}

export interface PagedProductResponse<T> {
    products: {
        edges: ProductEdge<T>[];
        pageInfo: PageInfo;
    }
}

export interface ProductStatus {
    id: string;
    handle: string;
    updatedAt: string;
}

export type ProductStatusResponse = PagedProductResponse<ProductStatus>;

export interface ProductNode {
    id: string;
    legacyResourceId: string;
    title: string;
    handle: string;
    createdAt: string;
    updatedAt: string;
    status: string;
    hasOnlyDefaultVariant: boolean;
    collections: ProductCollectionsConnection;
    variants: ProductVariantsConnection
}

export interface ProductCollectionsConnection {
    edges: ProductCollectionEdge[];
}

export interface ProductCollectionEdge {
    node: ProductCollectionNode;
}

export interface ProductCollectionNode {
    handle: string;
}

export type ProductResponse = PagedProductResponse<ProductNode>;

export interface ProductImageInfo {
    id: string;
    featuredImage: {
        id: string;
    }
    images: {
        edges: ImageEdge[];
    }
}

export type ProductImagesResponse = PagedProductResponse<ProductImageInfo>;
